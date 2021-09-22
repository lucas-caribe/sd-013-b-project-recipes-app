import React, { useCallback, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import RecipesCardDrink from '../components/RecipesCardDrink';
import Header from '../components/Header';

function Drinks({ match: { path } }) {
  const { data: { recipes } } = useContext(RecipesContext);
  const history = useHistory();

  const redirectRecipies = useCallback(() => {
    const msg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    if (!recipes) {
      return global.alert(msg);
    }
    if (recipes.length === 1) {
      history.push(`/bebidas/${recipes[0].idDrink}`);
    } else {
      return <RecipesCardDrink />;
    }
  }, [recipes, history]);

  useEffect(() => {
    redirectRecipies();
  }, [redirectRecipies]);

  return (
    <div>
      <Header pageTitle="Bebidas" hasSearchIcon="active" />
      <SearchBar path={ path } />
      {
        redirectRecipies()
      }
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequired;

export default Drinks;
