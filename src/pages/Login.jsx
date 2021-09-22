import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/login';
import validateEmail from '../helpers/validationEmail';

export default function Login() {
  const [EmailValidation, setEmailValidation] = useState(false);
  const [SenhaValidation, setSenhaValidation] = useState(false);
  const [ButtonDisabled, setButtonDisabled] = useState(true);
  const [InfosForms, setInfosForms] = useState({});

  const history = useHistory();

  const handleChangeInput = ({ target: { name, value } }) => {
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
  };

  useEffect(() => {
    if (SenhaValidation && EmailValidation) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [EmailValidation, SenhaValidation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('mealsToken', 1);

    localStorage.setItem('cocktailsToken', 1);

    localStorage.setItem('user', JSON.stringify({ email: InfosForms.Email }));

    history.push('/comidas');
  };

  return (
    <LoginForm
      handleSubmit={ handleSubmit }
      handleChangeInput={ handleChangeInput }
      ButtonDisabled={ ButtonDisabled }
    />
  );
}
