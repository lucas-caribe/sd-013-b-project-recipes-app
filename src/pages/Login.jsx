import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import '../App.css';

function Login({ history }) {
  const six = 6;
  const {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
    login,
    setLogin,
  } = useContext(Context);
  console.log(login);

  function disableButton() {
    setStatusLoginBtn(!emailIsValid || !passwordIsValid);
  }
  function VerifyEmail({ target }) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const verifyEmail = emailCheck.test(target.value);
    setEmailIsValid(verifyEmail);
    disableButton();
    setLogin(target.value);
  }

  function VerifyPassword({ target }) {
    if (target.value.length >= six) {
      setPasswordIsValid(true);
      disableButton();
    } else {
      setPasswordIsValid(false);
      disableButton();
    }
  }

  function handleStorage() {
    const storageObj = { email: login };
    const loginStorage = JSON.stringify(storageObj);
    localStorage.setItem('user', loginStorage);
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/comidas');
  }

  return (
    <div className="login-page">
      <h1>App de Receitas</h1>
      <div className="center-form">
        <form className="login-form">
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            onChange={ (event) => VerifyEmail(event) }
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ (event) => VerifyPassword(event) }
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ statusLoginBtn }
            onClick={ handleStorage }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
