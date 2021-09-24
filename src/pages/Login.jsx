import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/css/LoginStylesheet.css';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minLenghtPassword = 6;

  const handleChange = ({ target }) => {
    if (target.name === 'email') return setEmail(target.value);
    setPassword(target.value);
  };

  const handleClick = () => {
    const tokens = { mealsToken: 1, cocktailsToken: 1 };
    const user = { email };

    localStorage.setItem('mealsToken', JSON.stringify(tokens.mealsToken));
    localStorage.setItem(
      'cocktailsToken',
      JSON.stringify(tokens.cocktailsToken)
    );
    localStorage.setItem('user', JSON.stringify(user));

    history.push('/comidas');
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <formfield className="form">
        <input
          className="field"
          required
          data-testid="email-input"
          type="text"
          name="email"
          onChange={ handleChange }
          value={ email }
          placeholder="e-mail"
        />
        <input
          className="field"
          required
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ handleChange }
          placeholder="senha"
        />
        <div className="button-div">

          <button
            className="button"
            data-testid="login-submit-btn"
            type="submit"
            value={ password }
            disabled={
              !(emailValidator.test(email) && password.length > minLenghtPassword)
            }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </div>
      </formfield>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;
