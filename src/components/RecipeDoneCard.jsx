import React, { useContext } from 'react';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';

export default function RecipeDoneCard() {
  const { allRecipesDone } = useContext(Context);

  function renderTags(stringTags) {
    if (stringTags) {
      const separator = /,\s*/; // ,' '
      const allTags = stringTags.split(separator); // cria um array de tags
      return allTags;
    }
    return '';
  }

  if (allRecipesDone.length !== 0) {
    return (
      allRecipesDone
        .map((recipe, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
            className="recipe-done-card"
          >
            <div className="recipe-card-img">
              <img
                data-testid={ `${index}-horizontal-image` }
                // src={ recipe[`str${recipeType}Thumb`] }
                src={ recipe[`str${recipe.type}Thumb`] }
                alt="thumbnail"
              />
            </div>

            <div className="recipe-card-category">
              <div
                data-testid={ `${index}-horizontal-top-text` }
              >
                {
                  recipe.type === 'Meal'
                    ? `${recipe.strArea} - ${recipe.strCategory}`
                    : `${recipe.strAlcoholic}`
                }
              </div>
            </div>

            <div className="recipe-card-title">
              <h4
                data-testid={ `${index}-horizontal-name` }
              >
                { recipe[`str${recipe.type}`] }
              </h4>
            </div>

            <div className="recipe-card-date">
              <div data-testid={ `${index}-horizontal-done-date` }>
                { `Feita em: ${recipe.date}` }
              </div>
            </div>

            <div className="recipe-card-tags">
              <div
                data-testid={ `${index}-${renderTags(recipe.strTags)[0]}-horizontal-tag` }
              >
                { renderTags(recipe.strTags)[0] }
              </div>
              <div
                data-testid={ `${index}-${renderTags(recipe.strTags)[1]}-horizontal-tag` }
              >
                { renderTags(recipe.strTags)[1] }
              </div>
            </div>

            <div className="recipe-card-share-btn">
              <a
                href="''"
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {} }
              >
                <img src={ shareIcon } alt="share" />
              </a>
            </div>

          </div>
        )) // end map()
    ); // end return()
  } // end if
  return null;
} // end function
