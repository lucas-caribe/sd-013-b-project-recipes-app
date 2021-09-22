import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeUser as storeUserAction } from '../Redux/Actions';

function HeaderLogin({ storeUser }) {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  function validateEmail({ target: { value } }) {
    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(value) === true) {
      changeEmail(value);
    }
  }

  function validatePassword({ target: { value } }) {
    const minLength = 6;
    if (value.length > minLength) {
      changePassword(value);
    }
  }

  function submit() {
    if (email && password) return false;
    return true;
  }

  return (
    <section className="login">
      <input
        type="text"
        placeholder="Email"
        data-testid="email-input"
        onChange={ (e) => validateEmail(e) }
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ (pass) => validatePassword(pass) }
      />
      <Link to="/comidas">
        <button
          type="button"
          disabled={ submit() }
          data-testid="login-submit-btn"
          onClick={ () => {
            storeUser(email, password);
          } }
        >
          ENTRAR
        </button>
      </Link>
    </section>
  );
}

HeaderLogin.propTypes = {
  storeUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storeUser: (email, password) => dispatch(storeUserAction(email, password)),
});

export default connect(null, mapDispatchToProps)(HeaderLogin);
