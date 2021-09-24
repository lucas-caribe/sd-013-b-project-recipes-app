import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ProgressRecipe({
  recipe: { image, title, category, ingredients, strInstructions, measure } }) {
  const history = useHistory();

  function handleFinishClick() {
    history.push('/receitas-feitas');
  }

  return (
    <>
      <header>
        <img data-testid="recipe-photo" src={ image } alt="Recipe Imagem" />
      </header>

      <section>
        <h2 data-testid="recipe-title">{ title }</h2>
        <button
          type="button"
          src={ shareIcon }
          data-testid="share-btn"
        >
          <img src={ shareIcon } alt="Share Icon" />
        </button>
        <button
          type="button"
          src={ whiteHeartIcon }
          data-testid="favorite-btn"
        >
          <img src={ whiteHeartIcon } alt="Favorite icon" />
        </button>
        <h5 data-testid="recipe-category">{ category }</h5>
      </section>

      <section>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingrdient, index) => (
            <label
              key={ index }
              htmlFor={ `${index}-ingredient-step` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input id={ `${index}-ingredient-step` } type="checkbox" />
              { `${ingrdient} - ${measure[index]}` }
            </label>
          ))}
        </ul>
      </section>

      <section>
        <p data-testid="instructions">
          { strInstructions }
        </p>
      </section>

      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled
        onClick={ handleFinishClick }
      >
        Finish Recipe
      </button>
    </>
  );
}

ProgressRecipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    strInstructions: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    measure: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProgressRecipe;
