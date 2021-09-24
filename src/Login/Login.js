import React, { useState } from 'react';
import { useHistory } from 'react-router';
// import PropTypes from 'prop-types';

function Login() {
  const history = useHistory();
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  // caso precisem pegar algo no local storage;
  // const mealisAuthenticated = () => localStorage.getItem(mealsToken) !== null;
  // const cockisAuthenticated = () => localStorage.getItem(cocktailsToken) !== null;
  // const getMealsToken = () => localStorage.getItem(mealsToken);
  // const getCockToken = () => localStorage.getItem(cocktailsToken);

  const loginmeals = (token) => {
    localStorage.setItem('mealsToken', token);
  };
  const loginCock = (token) => {
    localStorage.setItem('cocktailsToken', token);
  };
  const emailStorage = (usemail) => {
    localStorage.setItem('user', usemail);
  };
  // caso precisem remover do storage
  // const logout = () => {
  //   localStorage.removeItem(meals, cocktail);
  // };

  const handleChange = ({ target }) => {
    setUserEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const redirectToTarget = () => {
    history.push('/comidas');
    loginmeals(1);
    loginCock(1);
    emailStorage(email);
  };

  const validaLogin = () => {
    const passwordLength = 7;
    let loginValidado = true;

    if (email.includes('@' && '.com') && password.length > passwordLength) {
      loginValidado = false;
    } else {
      loginValidado = true;
    }
    return loginValidado;
  };

  return (
    <form>
      <label htmlFor="email">
        <input
          className="em-input"
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ handleChange }
          value={ email }
        />
      </label>

      <label htmlFor="password">
        <input
          className="em-input"
          type="text"
          data-testid="password-input"
          name="password"
          onChange={ handlePassword }
          value={ password }
        />
      </label>

      <button
        type="submit"
        data-testid="login-submit-btn"
        onClick={ redirectToTarget }
        disabled={ validaLogin() }
      >
        Entrar
      </button>
    </form>
  );
}

// Login.propTypes = {
//   // history: PropTypes.objectOf(PropTypes.any).isRequired,
//   // userEmail: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   // userEmail: (email) => dispatch(userAction(email)),

// });

export default Login;
