import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import { RootStore } from '../../Store';
import './Nav.css';

export default function Nav() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

  const userState = useSelector((state: RootStore) => state.user);

  useEffect(() => {
    currentUser && dispatch(UserActions.GetUserByUUId(currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleLogoutClick() {
    logout && (await logout());
    history.push('/login');
  }

  function handleHomeClick() {
    history.push('/');
  }

  function handleBackToDeckManagement() {
    history.push('/deckmanagement');
  }

  function handleSettingsClick() {
    history.push('/update-profile');
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
      <ul className="features">
        {window.location.pathname === '/update-deck' && currentUser ? (
          <li>
            <button
              className="nav__button"
              onClick={handleBackToDeckManagement}
            >
              BACK TO DECK MANAGEMENT
            </button>
          </li>
        ) : null}
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
