import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Button from '../mini-components/Button';
import FavoriteRecipeCards from '../component/FavoriteRecipeCards';

function FavoriteRecipes() {
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
      setTitleName('Receitas Favoritas');
      setFilteredRecipes('');
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
    setFilteredRecipes('');
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
        <FavoriteRecipeCards />
      </div>
    </div>
  );
}

export default FavoriteRecipes;
