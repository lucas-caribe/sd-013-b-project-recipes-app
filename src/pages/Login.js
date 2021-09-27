import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setShowHeader, setShowFooter, handleSetProfile } = useContext(Context);

  const doneRecipesInitialStorage = [
    {
      id: '',
      type: '',
      area: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
      doneDate: '',
      tags: [],
    },
  ];

  const favoriteRecipesInitialStorage = [
    {
      id: '',
      type: '',
      area: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
    },
  ];

  useEffect(() => {
    function handleHeader() {
      setShowHeader(false);
      setShowFooter(false);
    }
    handleHeader();
  }, []);

  useEffect(() => {
    function ValidLogin() {
      const validEmail = /\S+@\S+\.\S+/;
      const validPassword = /[\S]{7,}/;
      if (validEmail.test(email) && validPassword.test(password)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
    ValidLogin();
  }, [email, password]);

  // verificar A FUNCAO LOCALSTORAGE
  function setToLocalStorage() {
    handleSetProfile(user);
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem(user, JSON.stringify({ email }));
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipesInitialStorage));
    localStorage
      .setItem('favoriteRecipes', JSON.stringify(favoriteRecipesInitialStorage));
  }

  function handleClick() {
    setToLocalStorage();
  }
  return (
    <div>
      <h1>Login</h1>
      <section>
        <label htmlFor="login">
          <input
            type="email"
            data-testid="email-input"
            id="login"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            id="password"
            placeholder="Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <Link to="/comidas">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Login;
