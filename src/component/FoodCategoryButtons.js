import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function FoodCategoryButtons() {
  const {
    categoryFoodButtons,
    setFoods,
    filtered,
    setFiltered,
    filterButton,
    setFilterButton } = useContext(Context);
  const FIVE = 5;

  async function fetchByCategoryFilter(target) {
    if (filtered === true && filterButton === target.innerText) {
      const responseResult = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
      setFoods(responseResult.meals);
      setFiltered(false);
      setFilterButton('');
    } else {
      const responseResult = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.innerText}`)).json();
      setFoods(responseResult.meals);
      setFiltered(true);
      setFilterButton(target.innerText);
    }
  }

  async function fetchByAllCategoryFilter() {
    const responseResult = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
    setFoods(responseResult.meals);
    setFiltered(false);
  }

  return (
    <div>
      <Button
        dataTest="All-category-filter"
        btnFunction={ () => fetchByAllCategoryFilter() }
        btnText="All"
      />
      {categoryFoodButtons.map((category, index) => (
        index < FIVE ? (
          <Button
            dataTest={ `${category.strCategory}-category-filter` }
            btnText={ category.strCategory }
            key={ index }
            btnFunction={ ({ target }) => fetchByCategoryFilter(target) }
          />
        ) : null
      ))}
    </div>
  );
}

export default FoodCategoryButtons;
