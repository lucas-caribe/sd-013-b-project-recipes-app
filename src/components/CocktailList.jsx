import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CocktailCard from './CocktailCard';

export default function CocktailList() {
  const THE_LAST_ONE = 12;
  const cocktailsList = useSelector((state) => state.searchReducer.results.drinks);
  const [state, setState] = useState({ loading: true, Top12: [] });

  function handleList() {
    return state.Top12.map((cocktail, index) => (
      <CocktailCard
        key={ cocktail.idDrink }
        thumb={ cocktail.strDrinkThumb }
        name={ cocktail.strDrink }
        index={ index }
      />
    ));
  }

  useEffect(() => {
    if (cocktailsList) {
      const Top12 = cocktailsList.slice(0, THE_LAST_ONE);
      setState({ loading: false, Top12 });
    }
  }, [cocktailsList]);

  return (
    <div>
      { state.loading || handleList() }
    </div>
  );
}
