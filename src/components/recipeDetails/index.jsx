import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Recomendations from './Recomendations';
import { fetchDetailsThunk } from '../../redux/action';
import ButtonsFavoriteAndShare from '../buttonsFavoriteAndShare';
import { getIngredientsAndMeasure } from '../../helpers/getIngredientsInArray';

export default function Details() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const [details, setDetails] = useState({ loading: true,
    Top6: [],
    fav: false,
    ingredientsArray: {
      arrayIngredients: [],
      arrayMeasure: [],
    } });
  const detailsResult = useSelector((state) => state.detailsReducer.results[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname.includes('bebidas')) {
      setDetails((prevState) => ({ ...prevState, recipe: 'cocktail' }));
      dispatch(fetchDetailsThunk(id, 'cocktail'));
    }
    if (pathname.includes('comidas')) {
      setDetails((prevState) => ({ ...prevState, recipe: 'meal' }));
      dispatch(fetchDetailsThunk(id, 'meal'));
    }
  }, [details.recipe]);

  useEffect(() => {
    if (detailsResult) {
      const { arrayIngredients, arrayMeasure } = getIngredientsAndMeasure(detailsResult);
      setDetails((prevState) => ({ ...prevState,
        loading: false,
        ingredientsArray: { arrayIngredients, arrayMeasure } }));
    }
  }, [detailsResult]);

  function handleIngredients() {
    const ingredientsList = details.ingredientsArray.arrayIngredients
      .map((array, index) => (
        <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          { `${array} ${details.ingredientsArray.arrayMeasure[index]}` }
        </li>
      ));
    return ingredientsList;
  }

  function handleButton() {
    if (localStorage.getItem(id)) {
      return 'Continuar Receita';
    }
    return 'Iniciar Receita';
  }

  function handleDetails() {
    if (details.recipe === 'cocktail') {
      const { strDrinkThumb, strCategory,
        strDrink, strInstructions, strAlcoholic } = detailsResult;
      return (
        <div>
          <img
            className="img-details"
            data-testid="recipe-photo"
            alt={ strDrink }
            src={ `${strDrinkThumb}` }
          />
          <p data-testid="recipe-title">{ strDrink }</p>
          <p data-testid="recipe-category">{strAlcoholic}</p>
          <ButtonsFavoriteAndShare />
          <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
          { handleIngredients() }
          <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
          <Recomendations />
          <Link to={ `${pathname}/in-progress` }>
            <button
              type="button"
              className="start-recipe-btn"
              data-testid="start-recipe-btn"
            >
              { handleButton() }
            </button>
          </Link>
        </div>
      );
    }
    if (pathname.includes('comidas')) {
      const { strMealThumb, strCategory,
        strMeal, strInstructions, strYoutube } = detailsResult;
      const youtubeId = strYoutube.split('=');
      const embed = `https://www.youtube.com/embed/${youtubeId[1]}`;
      return (
        <div>
          <img
            className="img-details"
            data-testid="recipe-photo"
            alt={ strMeal }
            src={ `${strMealThumb}` }
          />
          <p data-testid="recipe-title">{ strMeal }</p>
          <ButtonsFavoriteAndShare />
          <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
          { handleIngredients() }
          <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
          <iframe
            data-testid="video"
            title="recipe"
            className="details-video"
            src={ embed }
          />
          <Recomendations />
          <Link to={ `${pathname}/in-progress` }>
            <button
              type="button"
              className="start-recipe-btn"
              data-testid="start-recipe-btn"
            >
              { handleButton() }
            </button>
          </Link>
        </div>
      );
    }
  }

  return (
    <div className="details-page">
      { details.loading || handleDetails() }
    </div>
  );
}
