import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function LoginForm({ handleSubmit, handleChangeInput, ButtonDisabled }) {
  return (
    <form onSubmit={ handleSubmit }>
      <h1>Login</h1>
      <label htmlFor="email">
        Email:
        <input
          onChange={ handleChangeInput }
          type="text"
          name="Email"
          id="email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="senha">
        Senha:
        <input
          onChange={ handleChangeInput }
          type="text"
          name="Senha"
          id="senha"
          data-testid="password-input"
        />
      </label>
      <Button
        variant="primary"
        data-testid="login-submit-btn"
        disabled={ ButtonDisabled }
        type="submit"
      >
        Entrar
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  ButtonDisabled: PropTypes.bool.isRequired,
};
