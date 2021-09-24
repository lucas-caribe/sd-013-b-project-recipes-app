import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendRecipeToGlobalMeal } from '../redux/actions';
import fetchIdComidas from '../services/fetchIdComidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DetalhesComidas({ match: { params: { id } }, sendObjToGlobal }) {
  const [objIdReceita, setObjIdReceita] = useState();
  const fetchId = async () => {
    setObjIdReceita(await fetchIdComidas(id));
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
        .filter((element) => element[0].includes('strIngredient'))
        .filter((element2) => element2[1] !== '')
        .map((element) => element[1]);
      return arrayFilteredIngredients;
    }
  };

  const getMeasure = () => {
    if (objIdReceita !== undefined) {
      const entries = Object.entries(objIdReceita);
      const measure = entries.filter((element) => element[0].includes('strMeasure'))
        .filter((element2) => element2[1] !== ' ')
        .map((element3) => element3[1]);
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

  if (objIdReceita === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Detalhes da comida
      <img
        style={ { width: '300px' } }
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
      <p>Ingredientes</p>
      {getIngredientAndMeasure().map((ingredient, index) => (
        <ul key={ index }>
          <li data-testid={ `${index}-ingredient-name-and-measure` }>{ingredient}</li>
        </ul>
      ))}
      <p data-testid="instructions">{}</p>
      <p data-testid="video">Video</p>
      <p data-testid={ `${0}-recomendation-card` }>Card recomendation</p>
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
