import React, { useContext, useEffect } from 'react';
import DoneRecipeCards from '../component/DoneRecipeCards';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function DoneRecipes() {
  const {
    setShowHeader,
    setTitleName,
    setShowSearchHeaderIcon,
    setShowFooter,
    setFilteredRecipes } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setShowFooter(false);
      setTitleName('Receitas Feitas');
      setFilteredRecipes('.');
    }
    handleHeader();
  }, []);

  function filterFoods() {
    setFilteredRecipes('bebida');
  }

  function filterDrinks() {
    setFilteredRecipes('comida');
  }

  function filterAll() {
    setFilteredRecipes('.');
  }

  return (
    <div>
      <div>
        <Button btnFunction={ filterAll } dataTest="filter-by-all-btn" btnText="All" />
        <Button
          btnFunction={ filterFoods }
          dataTest="filter-by-food-btn"
          btnText="Food"
        />
        <Button
          btnFunction={ filterDrinks }
          dataTest="filter-by-drink-btn"
          btnText="Drinks"
        />
        <DoneRecipeCards />
      </div>
    </div>
  );
}

export default DoneRecipes;
