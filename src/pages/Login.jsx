import React, { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

let buttonStats = true;

function Login() {
  const [state, setState] = useState(INITIAL_STATE);
  const { password, email } = state;

  function handleChange({ target }) {
    const { value, id } = target;
    setState({
      ...state,
      [id]: value,
    });
  }

  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailValidator.test(email);
  const passwordValidator = 6;

  if (emailValid && password.length > passwordValidator) {
    buttonStats = false;
  } else buttonStats = true;

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
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
