import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// const AuthContext = createContext({
//   user: '', // E-mail do usuário conectado,
//   tokens: {
//     mealsToken: '', // Token de acesso a API de comidas
//     cocktailsToken: '', // Token de acesso a API de drinks
//   },
//   page: '', // Página atual (comida ou bebidas)
// });
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  function handleEmail(hotmail) {
    setEmail(hotmail);
  }

  const context = {
    email,
    handleEmail,
  };

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useAuth = () => useContext(AuthContext);
