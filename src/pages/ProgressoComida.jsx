import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgressRecipe from '../components/ProgressRecipe';
import { getIngredients, getMeasure } from '../GlobalFuncs/getIngredientsAndMeasure';

function ProgressoComida({ recipeInfo:
  { strMeal, strMealThumb, strCategory, strInstructions, idMeal, strArea },
recipeInfo }) {
  function modifyRecipeInfo() {
    return {
      image: strMealThumb,
      title: strMeal,
      category: strCategory,
      instructions: strInstructions,
      area: strArea,
      alcoholic: '',
      ingredients: getIngredients(recipeInfo),
      measure: getMeasure(recipeInfo),
      id: idMeal,
      type: 'meals',
      tipo: 'comida',
    };
  }

  return (
    <main>
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
    strArea: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(ProgressoComida);
