import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <section>
        <label htmlFor="login">
          <input type="email" data-testid="email-input" id="login" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            id="password"
            placeholder="Senha"
          />
        </label>
        <button type="button" data-testid="login-submit-btn">Entrar</button>
      </section>
    </div>
  );
}

export default Login;
