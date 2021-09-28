import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function FoodCategoryButtons() {
  const { categoryFoodButtons } = useContext(Context);
  const FIVE = 5;

  return (
    <div>
      <Button btnText="All" />
      {categoryFoodButtons.map((category, index) => (
        index < FIVE ? (
          <Button
            dataTest={ `${category.strCategory}-category-filter` }
            btnText={ category.strCategory }
            key={ category.idCategory }
          />
        ) : null
      ))}
    </div>
  );
}

export default FoodCategoryButtons;
