import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRecipe as startRecipeAction, finishRecipe as finishRecipeAction,
  editProgress as editProgressAction } from '../Redux/Actions';

const StartRecipeButton = (props) => {
  const { type, id, startRecipe, recipeStatus, status, inProgressRecipes } = props;
  const inProgressStr = 'in-progress';
  let dataTestId = 'start-recipe-btn';
  let buttonText = 'Iniciar Receita';
  if (recipeStatus === inProgressStr && !status) buttonText = 'Continuar Receita';
  else if (recipeStatus === inProgressStr
    && status === inProgressStr) {
    buttonText = 'Finalizar Receita';
    dataTestId = 'finish-recipe-btn';
    console.log('FINISNISNISNIS');
  }

  const saveItens = async () => {
    await startRecipe(id, type);
  };

  useEffect(() => {
    saveItens();
  }, [inProgressRecipes]);

  const renderButton = () => (
    <Link to={ `/${type}/${id}/in-progress` }>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid={ dataTestId }
        type="button"
        onClick={ saveItens }
      >
        {buttonText}

      </button>
    </Link>
  );

  return (
    <div>
      {recipeStatus !== 'done' && renderButton()}
    </div>
  );
};

StartRecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  recipeStatus: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startRecipe: PropTypes.func.isRequired,
  inProgressRecipes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  startRecipe: (id, type) => dispatch(startRecipeAction(id, type)),
  finishRecipe: (items) => dispatch(finishRecipeAction(items)),
  editProgress: (id, type, ingredient) => {
    dispatch(editProgressAction(id, type, ingredient));
  },
});

const mapStateToProps = ({ inProgressRecipes }) => ({
  inProgressRecipes,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRecipeButton);
