import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendRecipeToGlobalMeal } from '../redux/actions';
import fetchIdComidas from '../services/fetchIdComidas';
import { fetchRecomendationsDrinks } from '../services/fetchIdBebidas';
import getSixCards from '../services/functionsForDetails';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../css/CardsRecomendations.css';

function DetalhesComidas({ match: { params: { id } }, sendObjToGlobal }) {
  const [objIdReceita, setObjIdReceita] = useState();
  const [objRecomendations, setObjRecomendados] = useState();
  const fetchId = async () => {
    setObjIdReceita(await fetchIdComidas(id));
    setObjRecomendados(await fetchRecomendationsDrinks());
  };
  useEffect(() => {
    fetchId();
  }, []);

  useEffect(() => {
    sendObjToGlobal(objIdReceita);
  }, [objIdReceita]);

  const getIngredient = () => {
    if (objIdReceita !== undefined) {
      const entries = Object.entries(objIdReceita);
      const arrayFilteredIngredients = entries
        .filter((ingredientes) => ingredientes[0].includes('strIngredient'))
        .filter((ingredientes2) => ingredientes2[1] !== '')
        .map((ingredientes3) => ingredientes3[1]);
      return arrayFilteredIngredients;
    }
  };

  const getMeasure = () => {
    if (objIdReceita !== undefined) {
      const entries = Object.entries(objIdReceita);
      const measure = entries.filter((measures) => measures[0].includes('strMeasure'))
        .filter((measures2) => measures2[1] !== ' ')
        .map((measures3) => measures3[1]);
      return measure;
    }
  };
  const getIngredientAndMeasure = () => {
    const array = [];
    if (getMeasure() !== undefined && getIngredient() !== undefined) {
      const measure = getMeasure();
      const ingredient = getIngredient();
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

  const getEmbedVideo = () => {
    if (objIdReceita !== undefined) {
      const codigo = objIdReceita.strYoutube.split('v=');
      const linkYoutube = `http://www.youtube.com/embed/${codigo[1]}`;
      return linkYoutube;
    }
  };

  if (objIdReceita === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Detalhes comidas</p>
      <img
        style={ { width: '180px' } }
        src={ objIdReceita.strMealThumb }
        data-testid="recipe-photo"
        alt="recipeFoto"
      />
      <h3 data-testid="recipe-title">{objIdReceita.strMeal}</h3>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="iconHeard" />
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
          width="100px"
          src={ getEmbedVideo() }
        />
      </div>
      <div className="teste">
        {getSixCards(objRecomendations) !== undefined && getSixCards(objRecomendations)
          .map((element, index) => (
            <div data-testid={ `${index}-recomendation-card` } key={ index }>
              <img
                style={ { width: '180px' } }
                src={ element.strDrinkThumb }
                alt="imag"
              />
              <p data-testid={ `${index}-recomendation-title` }>{element.strDrink}</p>
            </div>
          ))}
      </div>
      <button type="button" data-testid="start-recipe-btn">Start recipe</button>
    </div>
  );
}

DetalhesComidas.propTypes = {
  match: PropTypes.shape(PropTypes.shape({})).isRequired,
  sendObjToGlobal: PropTypes.shape(PropTypes.shape({})).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendObjToGlobal: (obj) => dispatch(sendRecipeToGlobalMeal(obj)),
});

export default connect(null, mapDispatchToProps)(DetalhesComidas);
