import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useRecipes } from '../../context';

function FinishRecipeButton({ enableBtn, type, recipe }) {
  const history = useHistory();
  const { addTypeWhenFinishRecipe } = useRecipes();

  return (
    <button
      type="button"
      data-testid="finish-recipe-btn"
      disabled={ enableBtn }
      onClick={ () => {
        addTypeWhenFinishRecipe(type, recipe);
        history.push('/receitas-feitas');
      } }
    >
      Finalizar Receita
    </button>
  );
}

FinishRecipeButton.propTypes = {
  enableBtn: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FinishRecipeButton;
