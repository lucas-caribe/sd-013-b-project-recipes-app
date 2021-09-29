import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

import Context from '../context/Context';
// import shareIcon from '../images/shareIcon.svg';
import CopyToClipboardFunc from './CopyToClipboard';

// RENDERIZA AS RECEITAS FILTRADAS

export default function RecipeDoneCardFilter() {
  const {
    filterRecipeDone,
    linkCopied,
    // setLinkCopied,
  } = useContext(Context);

  function renderTags(stringTags) {
    if (stringTags) {
      const separator = /,\s*/; // ,' '
      const allTags = stringTags.split(separator); // cria um array de tags
      return allTags;
    }
    return '';
  }

  if (filterRecipeDone.length !== 0) {
    return (
      filterRecipeDone
        .map((recipe, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
            className="recipe-done-card"
          >
            <div className="recipe-card-img">
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
              <Link
                to={
                  recipe.type === 'Meal'
                    ? `/comidas/${recipe.idMeal}`
                    : `/bebidas/${recipe.idDrink}`
                }
              >
                <h4 data-testid={ `${index}-horizontal-name` }>
                  { recipe[`str${recipe.type}`] }
                </h4>
              </Link>
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
              <CopyToClipboardFunc recipe={ recipe } index={ index } />
            </div>

            <div className="recipe-card-link-copied">
              { linkCopied ? <span> Link copiado!</span> : null }
            </div>

          </div>
        )) // end map()
    ); // end return()
  } // end if

  return <div>Você ainda não concluiu nenhuma receita.</div>;
} // end function
