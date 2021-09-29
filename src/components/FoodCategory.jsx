import React, { useContext, useEffect } from 'react';
import foodContext from '../context/FoodContext';

export default function FoodCategory() {
  const { foodCategory, setFoodCategory,
    setFoodState, clickBtn, setClickBtn } = useContext(foodContext);
  const MAX_NUMBER = 5;

  useEffect(() => {
    async function requestAPI() {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const response = await request.json();
      setFoodCategory(response.meals);
    }
    requestAPI();
  }, []);

  async function categoryAPI(category) {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    console.log(request);
    const response = await request.json();
    setFoodState(response.meals);
    setClickBtn(!clickBtn);
  }

  async function noCategory() {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    setFoodState(response.meals);
    setClickBtn(!clickBtn);
  }

  function handleClick(category) {
    if (clickBtn) categoryAPI(category);
    if (!clickBtn) noCategory();
  }

  return (
    <div>
      {
        foodCategory
          ? foodCategory.map((category, index) => (
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
