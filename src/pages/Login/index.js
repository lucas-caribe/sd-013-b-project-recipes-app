import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../../context/AppContext';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { setLogin } = useContext(AppContext);
  const history = useHistory();

  function handleChange({ target }) {
    return target.name === 'user'
      ? setUser(target.value)
      : setPassword(target.value);
  }

  function handleClick() {
    setLogin({ user, password });
    localStorage.setItem('user', JSON.stringify({ email: user }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    history.push('/comidas');
  }
  // referência para a regex utilizada: https://medium.com/@zackcreach/shred-the-gnar-how-to-write-decode-regex-for-email-validation-9a970fa91641
  const buttonDisabled = () => {
    const securityLength = 7;
    // Verifico de o email segue o padrao e se o tamanho da senha é maior ou igual a 7
    // Ser for verdadeiro eu removo o disabled do button
    return !(/(^\w.*@\w+\.\w)/.test(user) && password.length >= securityLength);
  };

  return (
    <form>
      <label htmlFor="user">
        E-mail
        <input
          type="text"
          data-testid="email-input"
          name="user"
          value={ user }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Senha
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
        disabled={ buttonDisabled() }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}
