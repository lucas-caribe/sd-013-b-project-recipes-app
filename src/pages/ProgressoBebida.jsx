import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgressRecipe from '../components/ProgressRecipe';
import { getIngredients, getMeasure } from '../GlobalFuncs/getIngredientsAndMeasure';

function ProgressoBebida({ recipeInfo }) {
  function modifyRecipeInfo() {
    const { strDrinkThumb, strDrink, strCategory, strInstructions } = recipeInfo;
    return {
      image: strDrinkThumb,
      title: strDrink,
      category: strCategory,
      strInstructions,
      ingredients: getIngredients(recipeInfo),
      measure: getMeasure(recipeInfo),
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
  }).isRequired,
};

export default connect(mapStateToProps)(ProgressoBebida);
