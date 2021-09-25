import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import Recomendations from '../components/recipeDetails/Recomendations';
import { fetchDetailsThunk } from '../redux/action';
import FavButton from '../components/buttons/FavButton';

export default function Detalhes() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [details, setDetails] = useState({ loading: true, Top6: [], fav: false });
  const cocktail = useSelector((state) => state.detailsReducer.results.drinks);
  const meal = useSelector((state) => state.detailsReducer.results.meals);
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
  }, []);

  useEffect(() => {
    if (cocktail || meal) {
      setDetails((prevState) => ({ ...prevState, loading: false }));
    }
  }, [cocktail, meal]);

  function handleVideo(video) {
    return (
      <video
        width="70vw"
        controls
        data-testid="video"
      >
        <track
          default
          kind="captions"
          srcLang="en"
        />
        <source src={ video } />
        Your browser does not support the video tag.
      </video>
    );
  }

  function handleDetails() {
    if (details.recipe === 'meal') {
      const { strMealThumb, strCategory,
        strMeal, strInstructions, strYoutube } = meal[0];
      return (
        <div>
          <img
            className="img-details"
            data-testid="recipe-photo"
            alt={ strMeal }
            src={ `${strMealThumb}` }
          />
          <p data-testid="recipe-title">{ strMeal }</p>
          <FavButton />
          <button type="button" data-testid="share-btn">share button</button>
          <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
          <div data-testid="-ingredient-name-and-measure">
            ingredients and measures will be here
          </div>
          <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
          {handleVideo(strYoutube)}
          <Recomendations />
          <button
            type="button"
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </div>
      );
    }
    if (details.recipe === 'cocktail') {
      const { strDrinkThumb, strCategory,
        strDrink, strInstructions, strAlcoholic } = cocktail[0];
      return (
        <div>
          <img
            className="img-details"
            data-testid="recipe-photo"
            alt={ strDrink }
            src={ `${strDrinkThumb}` }
          />
          <p data-testid="recipe-title">{ strDrink }</p>
          <p>{strAlcoholic}</p>
          <FavButton />
          <button type="button" data-testid="share-btn">share button</button>
          <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
          <div data-testid="-ingredient-name-and-measure">
            ingredients and measures will be here
          </div>
          <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
          <Recomendations />
          <button
            type="button"
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      { details.loading || handleDetails() }
    </div>
  );
}
