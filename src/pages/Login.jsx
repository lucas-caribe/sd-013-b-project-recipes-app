import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import validateEmail from '../helpers/validationEmail';

export default function Login() {
  const [EmailValidation, setEmailValidation] = useState(false);
  const [SenhaValidation, setSenhaValidation] = useState(false);
  const [ButtonDisabled, setButtonDisabled] = useState(true);
  const [InfosForms, setInfosForms] = useState({});

  const history = useHistory();

  function handleChangeInput({ target: { name, value } }) {
    const objectLiteral = {
      Email() {
        setEmailValidation(validateEmail(value));
      },
      Senha() {
        const MIN_CARACTERE = 6;
        if (value.length > MIN_CARACTERE) { setSenhaValidation(true); }
      },
    };
    objectLiteral[name]();
    setInfosForms({ ...InfosForms, [name]: value });
  }

  useEffect(() => {
    if (SenhaValidation && EmailValidation) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [EmailValidation, SenhaValidation]);

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('mealsToken', 1);

    localStorage.setItem('cocktailsToken', 1);

    localStorage.setItem('user', JSON.stringify({ email: InfosForms.Email }));

    history.push('/comidas');
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Login</h1>
      <label htmlFor="email">
        Email:
        <input
          onChange={ handleChangeInput }
          type="text"
          name="Email"
          id="email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="senha">
        Senha:
        <input
          onChange={ handleChangeInput }
          type="text"
          name="Senha"
          id="senha"
          data-testid="password-input"
        />
      </label>
      <Button
        variant="primary"
        data-testid="login-submit-btn"
        disabled={ ButtonDisabled }
        type="submit"
      >
        Entrar
      </Button>
    </form>
  );
}
