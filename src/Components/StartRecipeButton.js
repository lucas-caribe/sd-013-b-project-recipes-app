import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRecipe as startRecipeAction, finishRecipe as finishRecipeAction,
} from '../Redux/Actions';
import { checkDisabled } from '../Utils/functions';

const StartRecipeButton = (props) => {
  const { type, id, startRecipe, recipeStatus, status,
    ingredients, db, actualIngredients, inProgressRecipes } = props;
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Iniciar Receita');
  const [dataTestId, setDataTestId] = useState('start-recipe-btn');
  const inProgressStr = 'in-progress';

  const saveItens = async () => {
    await startRecipe(id, type);
  };

  useEffect(() => {
    if ((status === inProgressStr)
    && !Object.keys(inProgressRecipes[type === 'comidas' ? 'meals' : 'cocktails'])
      .some((item) => item === id)) startRecipe(id, type);
    if (recipeStatus === inProgressStr && !status) setButtonText('Continuar Receita');
    else if (recipeStatus === inProgressStr
      && status === inProgressStr) {
      setButtonText('Finalizar Receita');
      setDataTestId('finish-recipe-btn');
    }
  }, [recipeStatus, status, id, inProgressRecipes, type, startRecipe]);

  useEffect(() => {
    setDisabled(checkDisabled(status, actualIngredients, ingredients));
  }, [db, id, actualIngredients, ingredients, status]);

  const renderButton = (dataTID) => {
    const toWhere = dataTID === 'finish-recipe-btn'
      ? '/receitas-feitas' : `/${type}/${id}/in-progress`;
    return (
      <Link to={ toWhere }>
        <button
          style={ { position: 'fixed', bottom: '0px' } }
          data-testid={ dataTestId }
          type="button"
          onClick={ saveItens }
          disabled={ disabled }
        >
          {buttonText}

        </button>
      </Link>
    );
  };

  return (
    <div>
      {recipeStatus !== 'done' && renderButton(dataTestId)}
    </div>
  );
};

StartRecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  recipeStatus: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startRecipe: PropTypes.func.isRequired,
  db: PropTypes.objectOf(PropTypes.object).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  actualIngredients: PropTypes.arrayOf(PropTypes.number).isRequired,
  inProgressRecipes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ doneRecipes: state.doneRecipes,
  inProgressRecipes: state.inProgressRecipes });

const mapDispatchToProps = (dispatch) => ({
  startRecipe: (id, type) => dispatch(startRecipeAction(id, type)),
  finishRecipe: (items) => dispatch(finishRecipeAction(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRecipeButton);
