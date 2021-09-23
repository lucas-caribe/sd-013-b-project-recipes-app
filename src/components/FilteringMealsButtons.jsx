import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import { fetchMealsFilters } from '../services/fetchMeals';
import GenerateButtons from './GenerateButtons';

function FilteringMealsButtons() {
  const { meals, filterMealButtons, setFilterMealButtons } = useContext(RecipesContext);

  useEffect(() => {
    fetchMealsFilters()
      .then((data) => setFilterMealButtons([...data.meals]));
  }, [setFilterMealButtons]);

  return (
    <div>
      { meals && filterMealButtons ? GenerateButtons(filterMealButtons, 'meal') : null }
    </div>
  );
}

export default FilteringMealsButtons;
