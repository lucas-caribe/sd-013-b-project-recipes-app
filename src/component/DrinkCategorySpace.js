import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import DrinkCategoryButtons from './DrinkCategoryButtons';

function DrinkCategorySpace() {
  const { categoryDrinkButtons, setCategoryDrinkButtons } = useContext(Context);

  useEffect(() => {
    async function fetchCategoryButtons() {
      const categoryResult = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')).json();
      setCategoryDrinkButtons([...categoryResult.drinks]);
    }
    fetchCategoryButtons();
  }, []);

  return (
    <div>
      {categoryDrinkButtons.length > 1 ? (
        <DrinkCategoryButtons />
      ) : null}
    </div>
  );
}

export default DrinkCategorySpace;
