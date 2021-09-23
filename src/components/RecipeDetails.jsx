import React, { useContext } from 'react';
import { useParams } from 'react-router';
import foodContext from '../context/FoodContext';

export default function RecipeDetails() {
  const { foodState } = useContext(foodContext);
  const recipe = foodState.meals;
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      { recipe
        ? recipe.map((meal, index) => (
          <div key={ index }>
            <span>{ meal.strMeal }</span>
            <img src={ meal.strMealThumb } alt="foto" />
          </div>))
        : 'FUNCIONA'}
    </div>
  );
}
