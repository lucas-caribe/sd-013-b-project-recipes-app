import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksFilters } from '../services/fetchDrinks';
import GenerateButtons from './GenerateButtons';

function FilteringDrinkButtons() {
  const {
    drinks,
    filterDrinkButtons,
    setFilterDrinkButtons,
  } = useContext(RecipesContext);

  useEffect(() => {
    fetchDrinksFilters()
      .then((data) => setFilterDrinkButtons([...data.drinks]));
  }, [setFilterDrinkButtons]);

  return (
    <div>
      {
        drinks && filterDrinkButtons
          ? GenerateButtons(filterDrinkButtons, 'drink') : null
      }
    </div>
  );
}

export default FilteringDrinkButtons;
