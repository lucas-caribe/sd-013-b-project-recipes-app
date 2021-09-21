import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const INITIAL_STATE = {
  email: '',
  password: '',
};

let buttonStats = true;

function Login() {
  const [state, setState] = useState(INITIAL_STATE);
  const { password, email } = state;
  const history = useHistory();
  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailValidator.test(email);
  const passwordValidator = 6;

  if (emailValid && password.length > passwordValidator) {
    buttonStats = false;
  } else buttonStats = true;

  function handleChange({ target }) {
    const { value, id } = target;
    setState({
      ...state,
      [id]: value,
    });
  }

  function handleClick() {
    localStorage.mealsToken = 1;
    localStorage.cocktailsToken = 1;
    localStorage.user = JSON.stringify({ email });
    history.push('/comidas');
  }

  return (
    <div>
      <input
        id="email"
        value={ email }
        onChange={ handleChange }
        type="email"
        data-testid="email-input"
      />
      <input
        id="password"
        value={ password }
        onChange={ handleChange }
        type="password"
        data-testid="password-input"
      />
      <button
        disabled={ buttonStats }
        onClick={ handleClick }
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
