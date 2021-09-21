import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';

export default function Login() {
  const { email, setEmail, password, setPassword } = useContext(RecipesContext);

  function validateButton() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const SIX = 6;

    if (emailRegex.test(email) && password.length > SIX) {
      return false;
    }
    return true;
  }

  function setTokens() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ (ev) => setEmail(ev.target.value) }
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ (ev) => setPassword(ev.target.value) }
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ validateButton() }
          onClick={ () => setTokens() }
        >
          Login
        </button>
      </Link>
    </>
  );
}
