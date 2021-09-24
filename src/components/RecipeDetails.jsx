import React, { useContext } from 'react';
import foodContext from '../context/FoodContext';

export default function RecipeDetails() {
  const { foodState } = useContext(foodContext);

  return (
    <div>
      { foodState
        ? foodState.map((meal, index) => (
          <div key={ index }>
            <span>{ meal.strMeal }</span>
            <img src={ meal.strMealThumb } alt="foto" />
          </div>))
        : 'FUNCIONA'}
    </div>
  );
}
