import React, { useContext } from 'react';
import foodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function RecipeDetails() {
  const { foodState } = useContext(foodContext);

  return (
    <div>
      { foodState
        ? foodState.map((meal, index) => (
          <div key={ index }>
            <span data-testid="recipe-title">{ meal.strMeal }</span>
            <img data-testid="recipe-photo" src={ meal.strMealThumb } alt="foto" />
            <button data-testid="share-btn" type="button">
              <img
                src={ shareIcon }
                alt="share-button"
              />
            </button>
            <button data-testid="favorite-btn" type="button">
              <img
                src={ whiteHeartIcon }
                alt="add-to-fav-button"
              />
            </button>
          </div>))
        : 'FUNCIONA'}
    </div>
  );
}
