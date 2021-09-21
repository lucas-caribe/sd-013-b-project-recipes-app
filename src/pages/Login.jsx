import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actionLogin from '../redux/actions';
import Button from '../components/Button';
import Input from '../components/Input';

function Login({ actLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validate = (emailParam, passwordParam) => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const NUMBER_SIX = 6;
    if (passwordParam.length >= NUMBER_SIX && emailTest.test(emailParam)) {
      return false;
    } return true;
  };

  useEffect(() => {
    setIsValid(validate(email, password));
  }, [email, password]);

  return (
    <div>
      <h3>Login</h3>
      <Input setValue={ setEmail } text="Email" testId="email-input" />
      <Input
        setValue={ setPassword }
        text="Password"
        type="password"
        testId="password-input"
      />
      <Button
        onClick={ () => actLogin(email) }
        text="Entrar"
        disabled={ isValid }
        dataTest="login-submit-btn"
      />
    </div>
  );
}

Login.propTypes = {
  actLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actLogin: (emailAct) => dispatch(actionLogin(emailAct)),
});

export default connect(null, mapDispatchToProps)(Login);
