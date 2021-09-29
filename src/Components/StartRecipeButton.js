import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRecipe as startRecipeAction } from '../Redux/Actions';

const StartRecipeButton = (props) => {
  const { type, id, startRecipe, recipeStatus } = props;
  let buttonText = 'Iniciar Receita';
  if (recipeStatus === 'in-progress') buttonText = 'Continuar Receita';

  const saveItens = async () => {
    await startRecipe(id, type);
  };

  const renderButton = () => (
    <Link to={ `/${type}/${id}/in-progress` }>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
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
  startRecipe: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  startRecipe: (id, type) => dispatch(startRecipeAction(id, type)),
});

const mapStateToProps = ({ inProgressRecipes }) => ({
  inProgressRecipes,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRecipeButton);
