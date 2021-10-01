import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

// A DEMO OF LOCALSTORAGE

// const favoriteRecipes = [{
//   "id": "52771",
//   "type": "comida",
//   "area": "Italian",
//   "category": "Vegetarian",
//   "alcoholicOrNot": "",
//   "name": "Spicy Arrabiata Penne",
//   "image": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
// }];
// localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

export default function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { pathname } = useLocation();
  const [recipeId] = pathname.split('/').slice(2);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const recipeFinded = favoriteRecipes
        .find((favoriteRecipe) => favoriteRecipe.id === recipeId);

      if (recipeFinded) {
        setIsFavorite(true);
      }
    }
  }, [recipeId]);

  const unfavorited = () => (
    <button type="button">
      <img data-testid="favorite-btn" src={ whiteHeartIcon } alt="unfavorite" width="30px" />
    </button>
  );

  const favorited = () => (
    <button type="button">
      <img data-testid="favorite-btn" src={ blackHeartIcon } alt="favorite" width="30px" />
    </button>
  );

  return (isFavorite ? favorited() : unfavorited());
}
