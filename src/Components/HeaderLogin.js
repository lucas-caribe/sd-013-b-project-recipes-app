import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class HeaderLogin extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.submit = this.submit.bind(this);
  }

  validateEmail({ target: { value } }) {
    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(value) === true) {
      this.setState({
        email: value,
      });
    }
  }

  validatePassword({ target: { value } }) {
    const minLength = 6;
    if (value.length >= minLength) {
      this.setState({
        password: value,
      });
    }
  }

  submit() {
    const { email, password } = this.state;
    if (email && password) return false;

    return true;
  }

  render() {
    return (
      <section className="login">
        <input
          type="text"
          placeholder="Email"
          data-testid="email-input"
          onChange={ (email) => this.validateEmail(email) }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ (pass) => this.validatePassword(pass) }
        />
        {/* <Link to=" "> */}
        <button
          type="button"
          disabled={ this.submit() }
          data-testid="login-submit-btn"
          // onClick={  }
        >
          ENTRAR
        </button>
        {/* </Link> */}
      </section>
    );
  }
}

export default HeaderLogin;
