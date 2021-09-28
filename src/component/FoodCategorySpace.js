import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import FoodCategoryButtons from './FoodCategoryButtons';

function FoodCategorySpace() {
  const { categoryFoodButtons, setCategoryFoodButtons } = useContext(Context);

  useEffect(() => {
    async function fetchCategoryButtons() {
      const categoryResult = await (await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')).json();
      setCategoryFoodButtons([...categoryResult.meals]);
    }
    fetchCategoryButtons();
  }, []);

  return (
    <div>
      {categoryFoodButtons.length > 1 ? (
        <FoodCategoryButtons />
      ) : null}
    </div>
  );
}

export default FoodCategorySpace;
