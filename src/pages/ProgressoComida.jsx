import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgressRecipe from '../components/ProgressRecipe';
import {
  getMealIngredients, getMealMeasure } from '../GlobalFuncs/getIngredientsAndMeasure';

function ProgressoComida({ recipeInfo }) {
  function modifyRecipeInfo() {
    const { strMealThumb, strMeal, strCategory, strInstructions } = recipeInfo;
    return {
      image: strMealThumb,
      title: strMeal,
      category: strCategory,
      strInstructions,
      ingredients: getMealIngredients(recipeInfo),
      measure: getMealMeasure(recipeInfo),
    };
  }

  return (
    <main>
      <ProgressRecipe recipe={ modifyRecipeInfo() } />
    </main>
  );
}

const mapStateToProps = (state) => ({
  recipeInfo: state.reducerRecipe.recipe,
});

ProgressoComida.propTypes = {
  recipeInfo: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(ProgressoComida);
