import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import ShareIcon from '../images/shareIcon.svg';
import IconButton from '../mini-components/IconButton';

function DoneRecipeCards() {
  const doneRecipesFromStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const { filteredRecipes } = useContext(Context);

  function handleToShareBtn(recipe, target) {
    const initialLink = 'http://localhost:3000/';
    const copyText = `${initialLink}${recipe.type}s/${recipe.id}`;
    navigator.clipboard.writeText(copyText);
    if (target.parentNode.innerHTML === '<div>Link copiado!</div>') {
      // empty
    } else {
      target.parentNode.innerHTML = '<div>Link copiado!<div>';
    }
  }

  return (
    <div>
      { doneRecipesFromStorage ? doneRecipesFromStorage.filter((recipe) => (
        recipe.type !== filteredRecipes))
        .map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                style={ { width: '120px' } }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { recipe.type === 'comida'
                ? `${recipe.area} - ${recipe.category}`
                : `${recipe.alcoholicOrNot} - ${recipe.category}` }
            </p>
            <IconButton
              dataTest={ `${index}-horizontal-share-btn` }
              btnImage={ ShareIcon }
              altText="Share Icon"
              btnFunction={ ({ target }) => handleToShareBtn(recipe, target) }
            />
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
            </Link>
            <h4 data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</h4>
            <div>
              {recipe.tags.map((tag, index2) => (
                index < 2
                  ? (
                    <p
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                      key={ index2 }
                    >
                      { tag }
                    </p>
                  ) : null
              )) }
            </div>
          </div>
        )) : <p>Loading...</p> }
    </div>
  );
}

export default DoneRecipeCards;
