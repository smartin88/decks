import React, { useRef, useState, SyntheticEvent } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      emailRef.current &&
        passwordRef.current &&
        login &&
        (await login(emailRef.current.value, passwordRef.current.value));
      setLoading(false);
      history.push('/');
    } catch {
      setError('Invalid email/password');
      setLoading(false);
    }
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <div className="login__heading">Decks</div>
        {error && <div className="login__alert__warning">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <div className="login__form__button__container">
            <button
              type="submit"
              className="login__form__button"
              disabled={loading}
            >
              Log In
            </button>
          </div>
        </form>
        <div className="login__form__link__container">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="login__form__link__container">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
