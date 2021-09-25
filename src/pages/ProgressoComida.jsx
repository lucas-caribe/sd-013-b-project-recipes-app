import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgressRecipe from '../components/ProgressRecipe';
import { getIngredients, getMeasure } from '../GlobalFuncs/getIngredientsAndMeasure';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareButtonFunc from '../GlobalFuncs/shareAndFavButtonFuncs';

function ProgressoComida({ recipeInfo:
  { strMeal, strMealThumb, strCategory, strInstructions, idMeal }, recipeInfo }) {
  const [copiedText, setCopyText] = useState('');
  const [favorite, setFavorite] = useState(false);

  function modifyRecipeInfo() {
    return {
      strInstructions,
      ingredients: getIngredients(recipeInfo),
      measure: getMeasure(recipeInfo),
      id: idMeal,
      type: 'meals',
    };
  }

  function removeCopiedText() {
    const TIMER_LIMIT = 2000;
    setTimeout(() => {
      setCopyText('');
    }, TIMER_LIMIT);
  }

  const handleShare = () => {
    shareButtonFunc(window.location.href.replace('/in-progress', ''));
    setCopyText('Link copiado!');
    removeCopiedText();
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <main>
      <header>
        <img data-testid="recipe-photo" src={ strMealThumb } alt="Recipe Imagem" />
      </header>

      <section>
        <h2 data-testid="recipe-title">{ strMeal }</h2>

        <button
          type="button"
          src={ shareIcon }
          data-testid="share-btn"
          onClick={ handleShare }
        >
          <img src={ shareIcon } alt="Share Icon" />
        </button>

        <button
          type="button"
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          data-testid="favorite-btn"
          onClick={ handleFavorite }
        >
          <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="Favorite icon" />
        </button>

        <span>{ copiedText }</span>

        <h5 data-testid="recipe-category">{ strCategory }</h5>
      </section>
      <ProgressRecipe recipe={ modifyRecipeInfo() } />
    </main>
  );
}

const mapStateToProps = (state) => ({
  recipeInfo: state.reducerRecipe.recipeMeal,
});

ProgressoComida.propTypes = {
  recipeInfo: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(ProgressoComida);
