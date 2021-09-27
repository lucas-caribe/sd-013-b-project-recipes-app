import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import fetchIdComidas from '../services/fetchIdComidas';
import { fetchRecomendationsDrinks } from '../services/fetchIdBebidas';
import getSixCards, { ChoiceButton,
  getEmbedVideo, getIngredient,
  getMeasure } from '../services/functionsForDetails';
import '../css/CardsRecomendations.css';
import ShareAndFavButton from '../components/ShareAndFavButton';
import { modifyMealRecipeInfo } from '../GlobalFuncs/modifyRecipeInfo';

function DetalhesComidas({ match: { params: { id } } }) {
  const [objIdReceita, setObjIdReceita] = useState();
  const [objRecomendations, setObjRecomendados] = useState();
  const { push } = useHistory();

  const fetchId = useCallback(async () => {
    setObjIdReceita(await fetchIdComidas(id));
    setObjRecomendados(await fetchRecomendationsDrinks());
  }, [id]);

  useEffect(() => {
    fetchId();
  }, [fetchId]);

  const inFButton = {
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
      <ShareAndFavButton recipeInfos={ modifyMealRecipeInfo(objIdReceita) } />
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
      {ChoiceButton(inFButton, push)}
    </div>
  );
}

DetalhesComidas.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default DetalhesComidas;
