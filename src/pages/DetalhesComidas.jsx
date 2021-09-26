import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendRecipeToGlobalMeal } from '../redux/actions';
import fetchIdComidas from '../services/fetchIdComidas';
import { fetchRecomendationsDrinks } from '../services/fetchIdBebidas';
import getSixCards, { ChoiceButton, clickShare,
  clickFavoriteMeal,
  getEmbedVideo, getIngredient,
  getMeasure,
  verifyFavorite } from '../services/functionsForDetails';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../css/CardsRecomendations.css';

function DetalhesComidas({ match: { params: { id } }, sendObjToGlobal,
  inprogressMeal }) {
  const [objIdReceita, setObjIdReceita] = useState();
  const [copyOk, setCopyOk] = useState(false);
  const [objRecomendations, setObjRecomendados] = useState();
  const [favorite, setFavorite] = useState(false);

  const fetchId = useCallback(async () => {
    setObjIdReceita(await fetchIdComidas(id));
    setObjRecomendados(await fetchRecomendationsDrinks());
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
    inprogressMeal,
    sendObjToGlobal,
    objIdReceita,
    objToReducer,
    id,
    tipo: 'comidas',
  };

  const getIngredientAndMeasure = () => {
    const array = [];
    if (getMeasure(objIdReceita, 'comida') !== undefined
      && getIngredient(objIdReceita, 'comidas') !== undefined) {
      const measure = getMeasure(objIdReceita, 'comida');
      const ingredient = getIngredient(objIdReceita, 'comidas');
      const mix = [{
        ingredient,
        measure,
      }];
      for (let i = 0; i < mix[0].ingredient.length; i += 1) {
        array.push(`${mix[0].ingredient[i]}-${mix[0].measure[i]}`);
      }
      return array;
    }
  };

  if (objIdReceita === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Detalhes comidas</p>
      <img
        src={ objIdReceita.strMealThumb }
        data-testid="recipe-photo"
        alt="recipeFoto"
      />
      <h3 data-testid="recipe-title">{objIdReceita.strMeal}</h3>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => clickShare(setCopyOk) }
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
        onClick={ () => clickFavoriteMeal(objIdReceita, setFavorite, id) }
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          alt="iconHeard"
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
        />
      </button>
      <p data-testid="recipe-category">{objIdReceita.strCategory}</p>
      <p>Ingredientes:</p>
      {getIngredientAndMeasure().map((ingredient, index) => (
        <ul key={ index }>
          <li data-testid={ `${index}-ingredient-name-and-measure` }>{ingredient}</li>
        </ul>
      ))}
      <p>Instruções</p>
      <p data-testid="instructions">{objIdReceita.strInstructions}</p>
      <div>
        <iframe
          title="dsa"
          frameBorder="0"
          data-testid="video"
          width="200px"
          src={ getEmbedVideo(objIdReceita) }
        />
      </div>
      <div className="cardsRecomendations">
        {getSixCards(objRecomendations) !== undefined && getSixCards(objRecomendations)
          .map((element, index) => (
            <div data-testid={ `${index}-recomendation-card` } key={ index }>
              <img
                style={ { width: '300px' } }
                src={ element.strDrinkThumb }
                alt="imag"
              />
              <p data-testid={ `${index}-recomendation-title` }>{element.strDrink}</p>
            </div>
          ))}
      </div>
      {copyOk ? <p>Link copiado!</p> : null}
      {ChoiceButton(inFButton)}
    </div>
  );
}

DetalhesComidas.propTypes = {
  inprogressMeal: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  sendObjToGlobal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendObjToGlobal: (obj, obj2) => dispatch(sendRecipeToGlobalMeal(obj, obj2)),
});

const mapStateToProps = (state) => ({
  inProgress: state.reducerRecipe.recipeMealProgress,
  inprogressMeal: state.reducerRecipe.inProgressMeal,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesComidas);
