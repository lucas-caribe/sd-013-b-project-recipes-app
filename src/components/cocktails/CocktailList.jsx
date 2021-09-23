import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CocktailCard from './CocktailCard';

export default function CocktailList() {
  const THE_LAST_ONE = 12;
  const cocktailsList = useSelector((state) => state.searchReducer.results.drinks);
  const [state, setState] = useState({ loading: true, Top12: [] });
  const history = useHistory();

  function handleList() {
    return state.Top12.map((cocktail, index) => (
      <CocktailCard
        key={ cocktail.idDrink }
        id={ cocktail.idDrink }
        thumb={ cocktail.strDrinkThumb }
        name={ cocktail.strDrink }
        index={ index }
      />
    ));
  }

  useEffect(() => {
    if (cocktailsList && cocktailsList.length === 1) {
      history.push(`/bebidas/${cocktailsList[0].idDrink}`);
    }
    if (cocktailsList) {
      const Top12 = cocktailsList.slice(0, THE_LAST_ONE);
      setState({ loading: false, Top12 });
    }
  }, [cocktailsList, history]);

  return (
    <div className="card-list">
      { state.loading || handleList() }
    </div>
  );
}
