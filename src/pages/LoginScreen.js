import React from 'react';
import renderLoginInputs from './LoginComponent';

function Login() {
  return (
    <>
      <renderLoginInputs
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={' '}
      />
      <renderLoginInputs
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={' '}
        name="password"
      />
      <button type="button" data-testid="login-submit-btn" disabled onClick={' '}>
        entrar
      </button>
    </>
  );
}
