import React, { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// {
//   user: '', // E-mail do usuário conectado,
//   tokens: {
//     mealsToken: '', // Token de acesso a API de comidas
//     cocktailsToken: '', // Token de acesso a API de drinks
//   },
//   page: '', // Página atual (comida ou bebidas)
// }

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [page, setPage] = useState('');

  const handleMainPage = useCallback((pageSelected) => {
    setPage(pageSelected);
  }, []);

  return (
    <AuthContext.Provider value={ { page, handleMainPage } }>
      { children }
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useAuth = () => useContext(AuthContext);
