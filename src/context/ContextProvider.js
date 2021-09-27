import PropTypes from 'prop-types';
import React, { useState } from 'react';
import contextCreat from './contextCreate';

export default function ContextProvider({ children }) {
  const [searchText, setSearchText] = useState('');

  return (
    <contextCreat.Provider
      value={ {
        setSearchText,
        searchText,
      } }
    >
      {children}
    </contextCreat.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
