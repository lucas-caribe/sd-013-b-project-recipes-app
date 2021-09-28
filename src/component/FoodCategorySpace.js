import React, { useContext } from 'react';
import Context from '../context/Context';
import FoodCategoryButtons from './FoodCategoryButtons';

function FoodCategorySpace() {
  const { categoryFoodButtons } = useContext(Context);

  return (
    <div>
      {categoryFoodButtons.length > 1 ? (
        <FoodCategoryButtons />
      ) : null}
    </div>
  );
}

export default FoodCategorySpace;
