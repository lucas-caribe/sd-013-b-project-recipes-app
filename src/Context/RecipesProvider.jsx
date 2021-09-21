import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const valueContext = { email, setEmail, password, setpassword };

  //   useEffect(() => {
  //     async function fetchData() {
  //       const mealsApiRequest = await fetch().then()

  //     }

  //   }, [input])

  return (
    <RecipesContext.Provider value={ valueContext }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
