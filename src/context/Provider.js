import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');

  const context = {
    email,
    setEmail,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
