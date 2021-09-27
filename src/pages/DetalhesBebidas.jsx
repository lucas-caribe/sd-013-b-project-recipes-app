import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import fetchIdBebidas from '../services/fetchIdBebidas';
import shareIcon from '../images/shareIcon.svg';
import getSixCards, { ChoiceButton,
  clickFavoriteDrink,
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
  const { push } = useHistory();
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

  const clickShareBebidas = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyOk(true);
  };

  const getIngredientAndMeasure = () => {
    const array = [];
    if (getMeasure(objIdReceita, 'bebida') !== undefined
    && getIngredient(objIdReceita, 'bebidas') !== undefined) {
      const measure = getMeasure(objIdReceita, 'bebida');
      const ingredient = getIngredient(objIdReceita, 'bebidas');
      const mix = [{
        ingredient,
        measure,
      }];
      for (let i = 0; i < mix[0].ingredient.length; i += 1) {
        array.push(`${mix[0].ingredient[i]} - ${mix[0].measure[i]}`);
      }
      if (array.some((element) => element.includes('undefined'))) {
        const withOutUndefined = array.map((element) => {
          const beatifulDrinks = element.replace(' - undefined', '');
          return beatifulDrinks;
        });
        return withOutUndefined;
      }
      return array;
    }
  };

  if (objIdReceita === undefined) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <p>Detalhes</p>
      <img
        width="300px"
        data-testid="recipe-photo"
        src={ objIdReceita.strDrinkThumb }
        alt="recipeFoto"
      />
      <h3 data-testid="recipe-title">{ objIdReceita.strDrink }</h3>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => clickShareBebidas() }
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
      {getIngredientAndMeasure().map((element, index) => (
        <div key={ index }>
          <p data-testid={ `${index}-ingredient-name-and-measure` }>{element}</p>
        </div>
      ))}
      <p data-testid="instructions">{ objIdReceita.strInstructions }</p>
      <p data-testid="video" />
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
      {ChoiceButton(inFButton, push)}
    </div>
  );
}

DetalhesBebidas.propTypes = {
  match: PropTypes.shape().isRequired,
  sendObjToGlobal: PropTypes.func.isRequired,
  inProgressMeal: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendObjToGlobal: (drinks, status) => dispatch(sendRecipeToGlobalDrinks(drinks, status)),
});

const mapStateToProps = (state) => ({
  inProgress: state.reducerRecipe.recipeMealProgress,
  inProgressMeal: state.reducerRecipe.inProgressMeal,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesBebidas);
