import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import FoodCategorySpace from './FoodCategorySpace';
import FoodCards from './FoodCards';

function FoodCardSpace() {
  const { foods, setFoods, setFiltered } = useContext(Context);

  useEffect(() => {
    async function fetchFoods() {
      const foodsResult = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
      setFoods([...foodsResult.meals]);
      setFiltered(false);
    }
    fetchFoods();
  }, []);

  return (
    <div>
      <FoodCategorySpace />
      { foods.length < 1 ? <p>Loading...</p> : <FoodCards />}
    </div>
  );
}

export default FoodCardSpace;
