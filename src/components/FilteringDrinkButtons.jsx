import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksFilters } from '../services/fetchDrinks';
import generateButtons from '../helpers/generateButtons';

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
      { drinks && filterDrinkButtons ? generateButtons(filterDrinkButtons) : null }
    </div>
  );
}

export default FilteringDrinkButtons;
