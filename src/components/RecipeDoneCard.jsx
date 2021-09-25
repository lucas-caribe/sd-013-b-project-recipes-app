import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';

// receber o tipo 'meal' (se comida) da receita, por parâmetro
// renderizar as informaçoes da receita
export default function RecipeDoneCard(meal) {
  // substituir pelo array 'allRecipesDone'
  const { allRecipes } = useContext(Context);
  const recipeType = meal.meal === true ? 'Meal' : 'Drink';

  if (allRecipes.length !== 0) {
    return (
      // substituir esse array 'allRecipes' pelo array 'allRecipesDone'
      allRecipes
        .map((recipe, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
            className="recipe-done-card"
          >
            {console.log(recipe.strTags)}
            <div className="recipe-card-img">
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe[`str${recipeType}Thumb`] }
                alt="thumbnail"
              />
            </div>

            <div className="recipe-card-category">
              <div
                data-testid={ `${index}-horizontal-top-text` }
              >
                { recipe.strCategory }
              </div>
            </div>

            <div className="recipe-card-title">
              <h4
                data-testid={ `${index}-horizontal-name` }
              >
                { recipe[`str${recipeType}`] }
              </h4>
            </div>

            <div className="recipe-card-date">
              <div data-testid={ `${index}-horizontal-done-date` }>Feita em</div>
            </div>

            <div className="recipe-card-tags">
              <div
                data-testid={ `${index}-${recipe.strTags
                  ? recipe.strTags.split(',', 2).join() : ''}-horizontal-tag` }
              >
                {
                  recipe.strTags ? recipe.strTags.split(',', 2).join() : ''
                }
              </div>
            </div>

            <div className="recipe-card-share-btn">
              <Link
                to="/"
                data-testid={ `${index}-horizontal-share-btn` }
              >
                <img src={ shareIcon } alt="share" />
              </Link>
            </div>

          </div>
        )) // end map()
    ); // end return()
  } // end if
  return null;
} // end function
