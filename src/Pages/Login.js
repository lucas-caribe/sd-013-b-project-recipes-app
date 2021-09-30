import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enableButton = () => {
    const MIN_PASSWORD = 7;
    // regex encontado aqui https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // explicação do regex https://tinyurl.com/yzrop8m6
    const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (REGEX_EMAIL.test(email) && password.length >= MIN_PASSWORD) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', '[]');
  }, []);

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            placeholder="digite seu email"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            placeholder="digite sua senha"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !enableButton() }
          onClick={ handleSubmit }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
