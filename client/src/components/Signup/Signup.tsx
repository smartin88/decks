import React, { useRef, useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (
      passwordRef.current &&
      passwordConfirmRef.current &&
      passwordRef.current.value !== passwordConfirmRef.current.value
    ) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      let user;
      if (emailRef.current && passwordRef.current && signup) {
        user = await signup(emailRef.current.value, passwordRef.current.value);
      }
      if (
        user &&
        user.user &&
        emailRef.current &&
        firstNameRef.current &&
        lastNameRef.current
      ) {
        const newUser = {
          id: 0,
          userUID: user.user.uid,
          email: emailRef.current.value,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          userImage: '/assets/avatar.png',
          friends: [],
        };
        dispatch(UserActions.CreateUser(newUser));
        setLoading(false);
        history.push('/');
      }
    } catch (err) {
      setError(
        JSON.stringify(err.message).substring(
          1,
          JSON.stringify(err.message).length - 1
        )
      );
    }
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <div className="login__heading">Sign Up</div>
        {error && <div className="login__alert__warning">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <div className="login__form__label">
              <label>First Name</label>
            </div>
            <div className="login__form__input__container">
              <input
                type="text"
                className="login__form__input"
                ref={firstNameRef}
                required
              />
            </div>
          </div>
          <div>
            <div className="login__form__label">
              <label>Last Name</label>
            </div>
            <div className="login__form__input__container">
              <input
                type="text"
                className="login__form__input"
                ref={lastNameRef}
                required
              />
            </div>
          </div>
          <div>
            <div className="login__form__label">
              <label>Email</label>
            </div>
            <div className="login__form__input__container">
              <input
                type="email"
                className="login__form__input"
                ref={emailRef}
                required
              />
            </div>
          </div>
          <div>
            <div className="login__form__label">
              <label>Password</label>
            </div>
            <div className="login__form__input__container">
              <input
                type="password"
                className="login__form__input"
                ref={passwordRef}
                required
              />
            </div>
          </div>
          <div>
            <div className="login__form__label">
              <label>Confirm Password</label>
            </div>
            <div className="login__form__input__container">
              <input
                type="password"
                className="login__form__input"
                ref={passwordConfirmRef}
                required
              />
            </div>
          </div>
          <div className="login__form__button__container">
            <button
              type="submit"
              className="login__form__button"
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="login__form__link__container">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
