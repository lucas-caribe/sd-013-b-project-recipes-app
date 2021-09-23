import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const DetailsContext = createContext({
  item: {
    // Todas as chaves da API.
    isFavorite: false, // Indica se a receita foi favoritada ou não
    status: '', // Indica o status da receita  (não iniciada, em andamento, finalizada)
  },
  recommendations: [], // Lista de receitas recomendadas
});

export const DetailsProvider = ({ children }) => (
  <DetailsContext.Provider>
    { children }
  </DetailsContext.Provider>
);

DetailsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useDetails = () => useContext(DetailsContext);
