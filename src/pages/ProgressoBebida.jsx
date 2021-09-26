import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgressRecipe from '../components/ProgressRecipe';
import { getIngredients, getMeasure } from '../GlobalFuncs/getIngredientsAndMeasure';

function ProgressoBebida({ recipeInfo:
  { strDrinkThumb, strDrink, strCategory, strInstructions, idDrink, strAlcoholic,
    strTags }, recipeInfo }) {
  function modifyRecipeInfo() {
    return {
      image: strDrinkThumb,
      title: strDrink,
      category: strCategory,
      area: '',
      alcoholic: strAlcoholic,
      instructions: strInstructions,
      ingredients: getIngredients(recipeInfo),
      measure: getMeasure(recipeInfo),
      id: idDrink,
      type: 'cocktails',
      tipo: 'bebida',
      tags: strTags,
    };
  }

  return (
    <main>
      <ProgressRecipe recipe={ modifyRecipeInfo() } />
    </main>
  );
}

const mapStateToProps = (state) => ({
  recipeInfo: state.reducerRecipe.recipeDrink,
});

ProgressoBebida.propTypes = {
  recipeInfo: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    idDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(ProgressoBebida);
