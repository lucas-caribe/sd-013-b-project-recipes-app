import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function DrinkCategoryButtons() {
  const { categoryDrinkButtons } = useContext(Context);
  const FIVE = 5;

  return (
    <div>
      <Button btnText="All" />
      {categoryDrinkButtons.map((category, index) => (
        index < FIVE ? (
          <Button
            dataTest={ `${category.strCategory}-category-filter` }
            btnText={ category.strCategory }
            key={ index }
          />
        ) : null
      ))}
    </div>
  );
}

export default DrinkCategoryButtons;
