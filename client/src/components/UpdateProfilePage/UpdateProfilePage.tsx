import React, {
  useRef,
  useState,
  SyntheticEvent,
  ChangeEventHandler,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import * as UserActions from '../../actions/UserActions';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './UpdateProfilePage.css';
import Nav from '../Nav/Nav';
import { storage } from '../../firebase';

export default function UpdateProfilePage() {
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const userState = useSelector((state: RootStore) => state.user);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>();
  const [url, setUrl] = useState('');
  const [firstNameEdit, setFirstNameEdit] = useState(false);
  const [lastNameEdit, setLastNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    currentUser && dispatch(UserActions.GetUserByUUId(currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (image) {
      const uploadTask = storage.ref(`images/${image!.name}`).put(image!);
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        () => {
          storage
            .ref('images')
            .child(image!.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    }
  }, [image]);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (
      passwordRef.current &&
      passwordConfirmRef.current &&
      passwordRef.current.value !== passwordConfirmRef.current.value
    ) {
      return setError('Passwords do not match');
    }
    const promises = [];
    setLoading(true);
    setError('');
    if (
      currentUser &&
      emailRef.current &&
      emailRef.current.value !== currentUser.email
    ) {
      updateEmail &&
        emailRef.current.value &&
        promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current && passwordRef.current.value) {
      updatePassword &&
        promises.push(updatePassword(passwordRef.current.value));
    }
    if (url !== '' && url !== userState.user?.userImage) {
      dispatch(
        UserActions.UpdateUser(userState.user!.id, {
          userImage: url,
        })
      );
    }
    if (
      firstNameRef.current &&
      firstNameRef.current.value !== '' &&
      firstNameRef.current.value !== userState.user?.firstName
    ) {
      dispatch(
        UserActions.UpdateUser(userState.user!.id, {
          firstName: firstNameRef.current.value,
        })
      );
    }
    if (
      lastNameRef.current &&
      lastNameRef.current.value !== '' &&
      lastNameRef.current.value !== userState.user?.lastName
    ) {
      dispatch(
        UserActions.UpdateUser(userState.user!.id, {
          lastName: lastNameRef.current.value,
        })
      );
    }
    Promise.all(promises)
      .then(() => {
        history.push('/success');
      })
      .catch((err) => {
        setError(
          JSON.stringify(err.message).substring(
            1,
            JSON.stringify(err.message).length - 1
          )
        );
      })
      .finally(() => setLoading(false));
  }

  const handlePhotoUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="settings__container">
      <Nav />
      <div className="settings__card">
        <div className="settings__heading">
          Settings
          {error && (
            <div className="settings__login__alert__warning">{error}</div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          {/* Picture */}
          <div className="container__image__profile">
            <div
              style={{
                backgroundImage: `url(${
                  url || userState.user?.userImage || '/assets/avatar.png'
                })`,
                backgroundSize: 'cover',
              }}
              className="settings__img__preview"
            >
              <label className="custom__file__upload">
                UPLOAD
                <input
                  type="file"
                  className="hidden"
                  onChange={handlePhotoUpload}
                  size={60}
                />
              </label>
            </div>
          </div>
          <div className="settings__form__container">
            {/* Name  */}
            <div>
              <div className="settings__form__label">
                <label>First Name</label>
              </div>
              <div className="settings__form__input__container">
                {firstNameEdit && userState.user ? (
                  <input
                    type="text"
                    id="first__name__edit"
                    className="settings__form__input"
                    ref={firstNameRef}
                    defaultValue={userState.user?.firstName}
                  />
                ) : (
                  <div className="settings__form__attribute">
                    {userState.user?.firstName}
                  </div>
                )}
                {firstNameEdit ? null : (
                  <button
                    type="button"
                    className="settings__form__button"
                    onClick={() => setFirstNameEdit(true)}
                  >
                    <img src="/assets/edit.svg" alt="edit" />
                  </button>
                )}
              </div>
            </div>
            {/* Last Name  */}
            <div>
              <div className="settings__form__label">
                <label>Last Name</label>
              </div>
              <div className="settings__form__input__container">
                {lastNameEdit && userState.user ? (
                  <input
                    type="text"
                    id="Last__name__edit"
                    className="settings__form__input"
                    ref={lastNameRef}
                    defaultValue={userState.user?.lastName}
                  />
                ) : (
                  <div className="settings__form__attribute">
                    {userState.user?.lastName}
                  </div>
                )}
                {lastNameEdit ? null : (
                  <button
                    type="button"
                    className="settings__form__button"
                    onClick={() => setLastNameEdit(true)}
                  >
                    <img src="/assets/edit.svg" alt="edit" />
                  </button>
                )}
              </div>
            </div>
            {/* Email */}
            <div>
              <div className="settings__form__label">
                <label>Email</label>
              </div>
              <div className="settings__form__input__container">
                {emailEdit ? (
                  <input
                    className="settings__form__input"
                    type="email"
                    ref={emailRef}
                    defaultValue={
                      currentUser && currentUser.email !== null
                        ? currentUser.email
                        : undefined
                    }
                  />
                ) : (
                  <div className="settings__form__attribute">
                    {currentUser && currentUser.email}
                  </div>
                )}
                {emailEdit ? null : (
                  <button
                    type="button"
                    className="settings__form__button"
                    onClick={() => setEmailEdit(true)}
                  >
                    <img src="/assets/edit.svg" alt="edit" />
                  </button>
                )}
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="settings__form__label">
                <label>Password</label>
              </div>
              <div className="settings__form__input__container">
                {passwordEdit ? (
                  <input
                    className="settings__form__input"
                    type="password"
                    ref={passwordRef}
                    placeholder="********"
                  />
                ) : (
                  <div className="settings__form__attribute">********</div>
                )}
                {passwordEdit ? null : (
                  <button
                    type="button"
                    className="settings__form__button"
                    onClick={() => setPasswordEdit(true)}
                  >
                    <img src="/assets/edit.svg" alt="edit" />
                  </button>
                )}
              </div>
            </div>
            {/* Confirm Password  */}
            {passwordEdit ? (
              <div>
                <div className="settings__form__label">
                  <label>Confirm Password</label>
                </div>
                <div className="settings__form__input__container">
                  <input
                    className="settings__form__input"
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="********"
                  />
                </div>
              </div>
            ) : null}
            {/* Update Button  */}
            <div className="settings__form__button__container">
              <button
                type="button"
                className="settings__form__button"
                onClick={() => history.push('/')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="settings__form__button"
                disabled={loading}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
