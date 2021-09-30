import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function FinishRecipeButton({ enableBtn /* , recipe, type */ }) {
  const history = useHistory();

  return (
    <button
      type="button"
      data-testid="finish-recipe-btn"
      disabled={ enableBtn }
      onClick={ () => history.push('/receitas-feitas') }
    >
      Finalizar Receita
    </button>
  );
}

FinishRecipeButton.propTypes = {
  enableBtn: PropTypes.bool.isRequired,
  // recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  // type: PropTypes.string.isRequired,
};

export default FinishRecipeButton;
