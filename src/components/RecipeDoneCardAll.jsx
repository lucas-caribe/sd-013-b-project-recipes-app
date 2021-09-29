import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import CopyToClipboardFunc from './CopyToClipboard';

// RENDERIZA TODAS AS RECEITAS FEITAS

export default function RecipeDoneCard() {
  const {
    allRecipesDone,
    linkCopied,
  } = useContext(Context);

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
      <div className="recipe-card-link-copied">
        { linkCopied
          ? <div className="alert alert-success" role="alert"> Link copiado!</div>
          : null }

        { allRecipesDone
          .map((recipe, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              className="recipe-done-card"
            >
              <div className="recipe-card-img">
                {/** direciona para a página da receita */}
                <Link
                  to={
                    recipe.type === 'Meal'
                      ? `/comidas/${recipe.idMeal}`
                      : `/bebidas/${recipe.idDrink}`
                  }
                >
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ recipe[`str${recipe.type}Thumb`] }
                    alt="thumbnail"
                  />
                </Link>
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
                {/** direciona para a página da receita */}
                <Link
                  to={
                    recipe.type === 'Meal'
                      ? `/comidas/${recipe.idMeal}`
                      : `/bebidas/${recipe.idDrink}`
                  }
                >
                  <h4 data-testid={ `${index}-horizontal-name` }>
                    {recipe[`str${recipe.type}`]}
                  </h4>
                </Link>
              </div>

              <div className="recipe-card-date">
                <div data-testid={ `${index}-horizontal-done-date` }>
                  {`Feita em: ${recipe.date}`}
                </div>
              </div>

              <div className="recipe-card-tags">
                {/** renderiza as duas primeiras tags: índice 0 e 1 do array de tags
                 * usadas tanto no datateste-id, quanto para aparecer no card */}
                <div
                  data-testid={
                    `${index}-${renderTags(recipe.strTags)[0]}-horizontal-tag`
                  }
                >
                  { renderTags(recipe.strTags)[0] }
                </div>
                <div
                  data-testid={
                    `${index}-${renderTags(recipe.strTags)[1]}-horizontal-tag`
                  }
                >
                  { renderTags(recipe.strTags)[1] }
                </div>
              </div>

              <div className="recipe-card-share-btn">
                <CopyToClipboardFunc recipe={ recipe } index={ index } />
              </div>

            </div> // end <div> principal
          )) /** end map() */ }
      </div> // end <div> link-copied
    ); // end return() do if
  } // end if

  return <div>Você ainda não concluiu nenhuma receita.</div>;
} // end function
