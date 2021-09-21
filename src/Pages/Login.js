import React from 'react';

export default function Login() {
  return (
    <>
      <input type="email" placeholder="Email" data-testid="email-input" />
      <input type="password" placeholder="Password" data-testid="password-input" />
      <button type="button" data-testid="login-submit-btn">Login</button>
    </>
  );
}
