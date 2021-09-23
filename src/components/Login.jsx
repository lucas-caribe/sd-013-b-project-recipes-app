import React, { useContext } from 'react';
import Context from '../context/Context';

function Login({ history }) {
  const six = 6;
  const {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
  } = useContext(Context);

  function disableButton() {
    setStatusLoginBtn(!emailIsValid || !passwordIsValid);
  }
  function VerifyEmail({ target }) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const verifyEmail = emailCheck.test(target.value);
    setEmailIsValid(verifyEmail);
    disableButton();
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

  const handleOnClickLogin = () => {
    history.push('/comidas');
  };

  return (
    <div>
      <form>
        <input
          type="email"
          data-testid="email-input"
          onChange={ (event) => VerifyEmail(event) }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ (event) => VerifyPassword(event) }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ statusLoginBtn }
          onClick={ handleOnClickLogin }
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
