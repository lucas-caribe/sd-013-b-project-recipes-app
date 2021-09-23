import React, { useContext } from 'react';
import Context from '../context/Context';

// DEVE RECEBER O PARÂMETRO meal CASO SEJA UM CARD DE COMIDA

export default function HomeRecipeCard(meal) {
  const { allRecipes } = useContext(Context);
  const recipeType = meal.meal === true ? 'Meal' : 'Drink';

  if (allRecipes[0]) {
    return (
      allRecipes
        .map((recipe, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ index }
            className="recipe-card"
          >
            <div className="recipe-card-img">
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe[`str${recipeType}Thumb`] }
                alt="thumbnail"
              />
            </div>

            <div className="recipe-card-title">
              <h4
                data-testid={ `${index}-recipe-name` }
              >
                { recipe[`str${recipeType}`] }
              </h4>
            </div>
          </div>
        ))
    );
  } return null;
}
