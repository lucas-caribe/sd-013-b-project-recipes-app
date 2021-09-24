import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import RecipeCard from '../components/RecipeCard';
import Button from '../components/Button';

function ReceitasFeitas() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  function getDoneRecipesByLocalStorage() {
    return JSON.parse(localStorage.getItem('doneRecipes'));
  }

  useEffect(() => {
    setDoneRecipes(getDoneRecipesByLocalStorage());
  }, []);

  return (
    <main className="main-content">
      <Header pageTitle="Receitas Feitas" searchButton={ false } />
      <div className="category-body">
        <Button
          text="All"
          // onClick={ onClickAll }
          dataTest="filter-by-all-btn"
        />
        <Button
          text="Food"
          // onClick={ onClickAll }
          dataTest="filter-by-food-btn"
        />
        <Button
          text="Drinks"
          // onClick={ onClickAll }
          dataTest="filter-by-drink-btn"
        />
      </div>
      <div className="recipes-done-cards">
        { doneRecipes !== 0
          && doneRecipes
            .map(
              (recipe, index) => (
                <RecipeCard key={ index } recipe={ recipe } index={ index } />),
            )}
      </div>
    </main>
  );
}

export default ReceitasFeitas;
