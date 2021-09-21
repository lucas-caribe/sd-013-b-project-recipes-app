import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  // const [login, setLogin] = useState({
  //   login: '',
  //   password: '',
  // });

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
