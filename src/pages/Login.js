import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import recipesContext from '../context/recipesContext';

export default function Login({ history }) {
  const { login, setLogin } = useContext(recipesContext);
  /*  const { } */
  function handleChange(event) {
    return setLogin({ ...login, [event.target.name]: event.target.value });
  }

  function handleClick() {
    const userEmail = { email: login.email };
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/comidas');
  }
  console.log(setLogin);
  const number = 6;
  let handleButton = true;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(login.email) && login.password.length > number) {
    handleButton = false;
  }
  return (
    <div>
      <label htmlFor="email">
        email:
        <input
          onChange={ handleChange }
          type="text"
          name="email"
          id="email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password">
        senha:
        <input
          onChange={ handleChange }
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
        />
      </label>
      <button
        data-testid="login-submit-btn"
        onClick={ handleClick }
        disabled={ handleButton }
        type="button"
      >
        Entrar
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf().isRequired,
};
