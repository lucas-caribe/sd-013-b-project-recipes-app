import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function FavButton() {
  const [fav, setFav] = useState(whiteHeartIcon);
  const detailsResult = useSelector((state) => state.detailsReducer.results[0]);
  const { pathname } = useLocation();

  const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  function handleType() {
    if (pathname.includes('bebidas')) {
      const { idDrink, strAlcoholic,
        strDrink, strDrinkThumb, strCategory } = detailsResult;
      return { id: idDrink,
        type: 'bebida',
        area: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb };
    }
    if (pathname.includes('comidas')) {
      const { idMeal, strArea, strCategory, strMealThumb, strMeal } = detailsResult;
      return { id: idMeal,
        type: 'comida',
        area: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb };
    }
  }

  function handleUnFav() {
    const thisRecipe = handleType();
    const updateRecipes = storage.filter((obj) => obj.id !== thisRecipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updateRecipes));
  }

  useEffect(() => {
    if (storage) {
      const thisRecipe = handleType();
      const isFav = storage.find(({ id }) => id === thisRecipe.id);
      if (isFav) setFav(blackHeartIcon);
    }
  }, [detailsResult, storage]);

  useEffect(() => {
    if (storage) {
      const thisRecipe = handleType();
      const isFav = storage.find(({ id }) => id !== thisRecipe.id);
      if (isFav) setFav(whiteHeartIcon);
    }
  }, []);

  useEffect(() => {
    if (fav === blackHeartIcon && storage) {
      const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const thisRecipe = handleType();
      const updateRecipes = favRecipes;
      updateRecipes.push(thisRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updateRecipes));
    }
    if (fav === blackHeartIcon && !storage) {
      const thisRecipe = handleType();
      const updateRecipes = [];
      updateRecipes.push(thisRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updateRecipes));
    }
    if (fav === whiteHeartIcon && storage) {
      handleUnFav();
    }
  }, [fav]);

  function handleClick() {
    if (fav === whiteHeartIcon) return setFav(blackHeartIcon);
    if (fav === blackHeartIcon) return setFav(whiteHeartIcon);
  }

  return (
    <input
      type="image"
      alt="fav-btn"
      data-testid="favorite-btn"
      src={ fav }
      onClick={ handleClick }
    />
  );
}
