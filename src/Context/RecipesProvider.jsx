import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchBar, setsearchBar] = useState(false);
  const [api, setApi] = useState([]);

  const contextValue = { email,
    setEmail,
    password,
    setPassword,
    searchBar,
    setsearchBar,
    api,
    setApi };

  //   useEffect(() => {
  //     async function fetchData() {
  //       const mealsApiRequest = await fetch().then()

  //     }

  //   }, [input])

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
