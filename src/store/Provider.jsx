import React from 'react';
import { node } from 'prop-types';
import context from './Context';

function Provider({ children }) {
  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
