import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import fetchIdBebidas from '../services/fetchIdBebidas';
import shareIcon from '../images/shareIcon.svg';
import getSixCards, { ChoiceButton,
  clickShare, clickFavoriteDrink,
  verifyFavorite, getMeasure, getIngredient } from '../services/functionsForDetails';
import { fetchRecomendationsMeals } from '../services/fetchIdComidas';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { sendRecipeToGlobalDrinks } from '../redux/actions';
import '../css/CardsRecomendations.css';

function DetalhesBebidas({ match: { params: { id } }, sendObjToGlobal, inProgressMeal }) {
  const [objIdReceita, setObjIdReceita] = useState();
  const [recomendations, setObjRecomentations] = useState();
  const [copyOk, setCopyOk] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const fetchId = useCallback(async () => {
    setObjIdReceita(await fetchIdBebidas(id));
    setObjRecomentations(await fetchRecomendationsMeals());
    verifyFavorite(id, setFavorite);
  }, [id]);

  useEffect(() => {
    fetchId();
  }, [fetchId]);

  const objToReducer = {
    id,
    inProgress: true,
  };

  const inFButton = {
    inProgressMeal,
    sendObjToGlobal,
    objIdReceita,
    objToReducer,
    id,
    tipo: 'bebidas',
  };

  const getIngredientAndMeasure = () => {
    const array = [];
    if (getMeasure(objIdReceita) !== undefined
    && getIngredient(objIdReceita) !== undefined) {
      const measure = getMeasure(objIdReceita);
      const ingredient = getIngredient(objIdReceita);
      const mix = [{
        ingredient,
        measure,
      }];
      for (let i = 0; i < mix[0].ingredient.length; i += 1) {
        array.push(`${mix[0].ingredient[i]} - ${mix[0].measure[i]}`);
      }
      return array;
    }
  };

  const fixDrinks = () => {
    if (getIngredientAndMeasure() !== undefined) {
      const drinks = getIngredientAndMeasure();
      const drinksFilterNull = drinks.filter((drink) => drink !== 'null-null');
      return drinksFilterNull;
    }
  };

  if (objIdReceita === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      Detalhes das bebidas
      <img
        width="180px"
        data-testid="recipe-photo"
        src={ objIdReceita.strDrinkThumb }
        alt="recipeFoto"
      />
      <h3 data-testid="recipe-title">{ objIdReceita.strDrink }</h3>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => clickShare(setCopyOk) }
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        onClick={ () => clickFavoriteDrink(objIdReceita, setFavorite, id) }
        data-testid="favorite-btn"
        type="button"
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          alt="iconHeard"
        />
      </button>
      <p data-testid="recipe-category">{objIdReceita.strAlcoholic}</p>
      {fixDrinks().map((element, index) => (
        <div key={ index }>
          <p data-testid={ `${index}-ingredient-name-and-measure` }>{element}</p>
        </div>
      ))}
      <p data-testid="instructions">{ objIdReceita.strInstructions }</p>
      <p data-testid="video">Video</p>
      <div className="cardsRecomendations">
        {getSixCards(recomendations) !== undefined && getSixCards(recomendations)
          .map((element, index) => (
            <div data-testid={ `${index}-recomendation-card` } key={ index }>
              <img style={ { width: '180px' } } src={ element.strMealThumb } alt="imag" />
              <p data-testid={ `${index}-recomendation-title` }>{element.strMeal}</p>
            </div>
          ))}
      </div>
      {copyOk ? <p>Link copiado!</p> : null}
      {ChoiceButton(inFButton)}
    </div>
  );
}

DetalhesBebidas.propTypes = {
  match: PropTypes.shape(PropTypes.shape({})).isRequired,
  sendObjToGlobal: PropTypes.shape(PropTypes.shape({})).isRequired,
  inProgressMeal: PropTypes.shape().isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendObjToGlobal: (drinks, status) => dispatch(sendRecipeToGlobalDrinks(drinks, status)),
});

const mapStateToProps = (state) => ({
  inProgress: state.reducerRecipe.recipeMealProgress,
  inProgressMeal: state.reducerRecipe.inProgressMeal,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesBebidas);
