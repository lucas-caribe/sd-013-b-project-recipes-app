import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRecipe as startRecipeAction } from '../Redux/Actions';

const StartRecipeButton = (props) => {
  const { type, id, startRecipe, inProgressRecipes } = props;

  const saveItens = async () => {
    await startRecipe(id, type);
    console.log(inProgressRecipes);
  };

  return (
    <Link to={ `/${type}/${id}/in-progress` }>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        type="button"
        onClick={ saveItens }
      >
        Iniciar Receita

      </button>
    </Link>
  );
};

StartRecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  startRecipe: PropTypes.func.isRequired,
  inProgressRecipes: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  startRecipe: (id, type) => dispatch(startRecipeAction(id, type)),
});

const mapStateToProps = ({ inProgressRecipes }) => ({
  inProgressRecipes,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRecipeButton);
