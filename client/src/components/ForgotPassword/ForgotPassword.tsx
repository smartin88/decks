import React, { SyntheticEvent, useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      emailRef.current &&
        resetPassword &&
        (await resetPassword(emailRef.current.value));
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Account not found');
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login__container">
        <div className="login__card">
          <div className="login__heading">Password Reset</div>
          {error && <div className="login__alert__warning">{error}</div>}
          {message && <div className="login__alert">{message}</div>}
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
            <div className="login__form__button__container">
              <button
                type="submit"
                className="login__form__button"
                disabled={loading}
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="login__form__link__container">
            <Link to="/login">Login</Link>
          </div>
          <div className="login__form__link__container">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
