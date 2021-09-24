import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import { fetchMealByCategory } from '../services/fetchMeals';
import { fetchDrinkByCategory } from '../services/fetchDrinks';

const NUMBER_OF_BUTTONS = 5;

function GenerateButtons(filterButtons, type) {
  const { setMeals, setDrinks } = useContext(RecipesContext);

  function handleClick(category, btnType) {
    if (btnType === 'meal') {
      fetchMealByCategory(category).then((data) => setMeals([...data]));
    } else {
      fetchDrinkByCategory(category).then((data) => setDrinks([...data]));
    }
  }

  const categories = filterButtons.map(({ strCategory }) => strCategory);
  return (
    categories.slice(0, NUMBER_OF_BUTTONS).map((category) => (
      <button
        type="button"
        key={ category }
        data-testid={ `${category}-category-filter` }
        onClick={ () => handleClick(category, type) }
      >
        { category }
      </button>
    ))
  );
}

export default GenerateButtons;
