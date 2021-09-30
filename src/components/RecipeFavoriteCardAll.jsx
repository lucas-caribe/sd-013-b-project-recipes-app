import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

const MEAL = 'Meal';
const ROTA_COMIDAS = '/comidas/';
const ROTA_BEBIDAS = '/bebidas/';

export default function RecipeFavoriteCardAll() {
  const { favoritesRecipes } = useContext(Context);

  if (favoritesRecipes.length !== 0) {
    return (
      favoritesRecipes
        .map((favoriteRecipe, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
            className="recipe-favorite-card"
          >
            <div className="recipe-card-img">
              <Link
                to={
                  favoriteRecipe.type === MEAL
                    ? `${ROTA_COMIDAS}${favoriteRecipe.idMeal}`
                    : `${ROTA_BEBIDAS}${favoriteRecipe.idDrink}`
                }
              >
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ favoriteRecipe[`str${favoriteRecipe.type}Thumb`] }
                  alt="thumbnail"
                />
              </Link>
            </div>

            <div className="recipe-card-category">
              <div data-testid={ `${index}-horizontal-top-text` }>
                {
                  favoriteRecipe.type === MEAL
                    ? `${favoriteRecipe.strArea} - ${favoriteRecipe.strCategory}`
                    : `${favoriteRecipe.strAlcoholic}`
                }
              </div>
            </div>

          </div>
        )) /** end map() */
    ); // end return principal
  } // end if()

  return null;
}
