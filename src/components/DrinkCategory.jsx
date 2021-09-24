import React, { useContext, useEffect } from 'react';
import foodContext from '../context/FoodContext';

export default function FoodCategory() {
  const { drinkCategory, setDrinkCategory } = useContext(foodContext);
  const MAX_NUMBER = 5;

  async function requestAPI() {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const response = await request.json();
    setDrinkCategory(response.drinks);
  }

  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <div>
      {
        drinkCategory
          ? drinkCategory.map((category, index) => (
            <button
              type="button"
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
            >
              { category.strCategory }
            </button>)).splice(0, MAX_NUMBER) : null
      }
    </div>
  );
}
