import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import HandleIngredients from './HandleIngredients';
import ShareAndFavButton from './ShareAndFavButton';
import { getDate, finishRecipe } from '../GlobalFuncs/finishButtonFuncs';

function ProgressRecipe({ recipe:
  {
    ingredients,
    instructions,
    measure,
    id,
    type,
    image,
    title,
    category,
    area,
    alcoholic,
    tipo,
    tags,
  } }) {
  const history = useHistory();
  const [finishButtonCondition, setFinishButtonCondition] = useState(true);

  function checkFinishCondition(ingredientsStatus) {
    const ingredientsCondition = Object.values(ingredientsStatus);
    if (ingredientsCondition
      .filter((item) => item === true).length === ingredients.length) {
      setFinishButtonCondition(false);
    } else {
      setFinishButtonCondition(true);
    }
  }

  function handleFinishClick() {
    const doneRecipe = {
      id,
      type: tipo,
      area,
      category,
      alcoholicOrNot: alcoholic,
      name: title,
      image,
      doneDate: getDate(),
      tags: (!tags ? [] : tags.split(',')),
    };
    finishRecipe(doneRecipe, type);
    history.push('/receitas-feitas');
  }

  return (
    <>
      <header>
        <img data-testid="recipe-photo" src={ image } alt="Recipe Imagem" />
      </header>

      <section>
        <h2 data-testid="recipe-title">{ title }</h2>
        <h5 data-testid="recipe-category">{ category }</h5>
      </section>

      <ShareAndFavButton
        recipeInfos={ { id, tipo, area, category, alcoholic, title, image } }
      />

      <HandleIngredients
        recipeInfos={ { ingredients, measure, type, id } }
        checkFinishCondition={ checkFinishCondition }
      />
      <section>
        <h3>Instructions</h3>
        <p data-testid="instructions">
          { instructions }
        </p>
      </section>

      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ finishButtonCondition }
        onClick={ handleFinishClick }
      >
        Finish Recipe
      </button>
    </>
  );
}

ProgressRecipe.propTypes = {
  recipe: PropTypes.shape({
    instructions: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    measure: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    type: PropTypes.string,
    tipo: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholic: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};

export default ProgressRecipe;
