import React, { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleChange({ target }) {
    return target.name === 'user' ? setUser(target.value) : setPassword(target.value);
  }

  function handleClick() {
    console.log('enviar para o estado global');
  }

  return (
    <form>
      <label htmlFor="user">
        <input
          type="text"
          data-testid="email-input"
          name="user"
          value={ user }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        type="button"
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}
