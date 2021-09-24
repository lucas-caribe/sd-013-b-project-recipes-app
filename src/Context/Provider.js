import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { fetchDrinksApi, fetchFoodsApi } from './FetchFunctions';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [usrQuery, setSearch] = useState('');
  const [radioBtn, setRadioBtn] = useState(' ingredients');

  const handleClick = (path) => {
    if (path === '/comidas') {
      fetchFoodsApi(radioBtn, usrQuery);
    } else {
      fetchDrinksApi(radioBtn, usrQuery);
    }
  };

  const ContextValue = {
    data,
    setData,
    setSearch,
    usrQuery,
    radioBtn,
    setRadioBtn,
    handleClick,
  };

  return (
    <Context.Provider value={ ContextValue }>
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
export default Provider;
