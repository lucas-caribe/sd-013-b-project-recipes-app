import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function DrinkCategoryButtons() {
  const {
    categoryDrinkButtons,
    setDrinks, filtered,
    setFiltered,
    filterButton,
    setFilterButton } = useContext(Context);
  const FIVE = 5;

  async function fetchByCategoryFilter(target) {
    if (filtered === true && filterButton === target.innerText) {
      const responseResult = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
      setDrinks(responseResult.drinks);
      setFiltered(false);
      setFilterButton('');
    } else {
      const responseResult = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.innerText}`)).json();
      setDrinks(responseResult.drinks);
      setFiltered(true);
      setFilterButton(target.innerText);
    }
  }

  async function fetchByAllCategoryFilter() {
    const responseResult = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
    setDrinks(responseResult.drinks);
    setFiltered(false);
  }

  return (
    <div>
      <Button
        dataTest="All-category-filter"
        btnFunction={ () => fetchByAllCategoryFilter() }
        btnText="All"
      />
      {categoryDrinkButtons.map((category, index) => (
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

export default DrinkCategoryButtons;
