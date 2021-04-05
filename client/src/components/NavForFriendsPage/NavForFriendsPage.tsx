import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import { RootStore } from '../../Store';
import './NavForFriendsPage.css';
import { getAllUser } from '../../ApiService';
import { User } from '../../Interfaces';

interface Props {
  onAddFriend: (email: string) => void;
}

export default function NavForFriendsPage({ onAddFriend }: Props) {
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const nameRef = useRef({ value: '' });
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const userState = useSelector((state: RootStore) => state.user);

  useEffect(() => {
    currentUser && dispatch(UserActions.GetUserByUUId(currentUser.uid));
    getAllUser().then((data: User[]) => setAllUsers(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleLogoutClick() {
    logout && (await logout());
    history.push('/login');
  }

  function handleHomeClick() {
    history.push('/');
  }

  function handleSettingsClick() {
    history.push('/update-profile');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const email = event.target.value.split(' ');
    nameRef.current.value = email[email.length - 1];
  }

  return (
    <nav className="navbar">
      <ul className="avatar">
        {userState.user ? (
          userState.user!.userImage ? (
            <div
              style={{
                backgroundImage: `url(${userState.user.userImage})`,
                backgroundSize: 'cover',
              }}
              className="nav__avatar"
            ></div>
          ) : (
            <img src="/assets/avatar.png" alt="" className="nav__avatar" />
          )
        ) : null}
      </ul>
      <div className="nav__friend__search__container">
        <input
          list="friend__search"
          className="nav__friend__search__input"
          onChange={handleChange}
        />
        <datalist id="friend__search">
          {allUsers.length > 0 &&
            allUsers.map((user: User) => {
              return (
                <option
                  key={Math.random() * 1000}
                  value={
                    user.firstName + ' ' + user.lastName + ' - ' + user.email
                  }
                />
              );
            })}
        </datalist>
        <button
          className="nav__add__friend__button"
          onClick={(event) => {
            if (currentUser && nameRef.current.value === currentUser.email) {
              return alert(
                'You cannot add yourself as a friend. Please try again.'
              );
            }
            onAddFriend(nameRef.current.value);
            setTimeout(() => window.location.reload(), 50);
          }}
        >
          Add Friend
        </button>
      </div>
      <ul className="features">
        {window.location.pathname === '/' && currentUser ? (
          <li>
            <button className="nav__button" onClick={handleSettingsClick}>
              SETTINGS
            </button>
          </li>
        ) : null}
        {window.location.pathname !== '/' && currentUser ? (
          <li>
            <button className="nav__button" onClick={handleHomeClick}>
              HOME
            </button>
          </li>
        ) : null}
        {currentUser ? (
          <li>
            <button className="nav__button" onClick={handleLogoutClick}>
              LOGOUT
            </button>
          </li>
        ) : (
          <li>
            <button className="nav__button" onClick={handleHomeClick}>
              LOGIN
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
