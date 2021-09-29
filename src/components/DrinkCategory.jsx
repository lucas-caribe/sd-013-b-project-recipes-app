import React, { useContext, useEffect } from 'react';
import foodContext from '../context/FoodContext';

export default function DrinkCategory() {
  const { drinkCategory, setDrinkCategory,
    setDrinkState, clickBtn, setClickBtn } = useContext(foodContext);
  const MAX_NUMBER = 5;

  async function requestAPI() {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const response = await request.json();
    setDrinkCategory(response.drinks);
  }

  useEffect(() => {
    requestAPI();
  }, []);

  async function categoryAPI(c) {
    const request = await fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${c}`);
    const response = await request.json();
    setDrinkState(response.drinks);
    setClickBtn(!clickBtn);
  }

  async function noCategory() {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    setDrinkState(response.drinks);
    setClickBtn(!clickBtn);
  }

  function handleClick(category) {
    if (clickBtn) categoryAPI(category);
    if (!clickBtn) noCategory();
  }

  return (
    <div>
      {
        drinkCategory
          ? drinkCategory.map((category, index) => (
            <button
              type="button"
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => handleClick(category.strCategory) }
            >
              { category.strCategory }
            </button>)).splice(0, MAX_NUMBER) : null
      }
    </div>
  );
}
