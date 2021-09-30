import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import foodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import DrinksSuggestions from '../components/DrinksSuggestions';
import IngredientsList from '../components/IngredientsList';
import misc1 from '../miscellaneous/misc1';
import handleLike from '../miscellaneous/misc3';
import '../App.css';

export default function FoodDetailsPage() {
  const { foodState } = useContext(foodContext);
  const [mealDetails, setMealDetails] = useState();
  const [suggestions, setSuggestions] = useState();
  const [hidden, setHidden] = useState(false);
  const [local, setLocal] = useState(false);
  const url = window.location.href;
  const urlSlicePoint = 30;
  const identifier = url.slice(urlSlicePoint);
  const history = useHistory();

  function handleShare() {
    copy(url);
    setHidden(true);
  }

  function srcSetter(obj) {
    if (!localStorage.getItem('favoriteRecipes')) return whiteHeartIcon;
    return JSON
      .parse(localStorage
        .getItem('favoriteRecipes'))
      .some((item) => item.id === obj.id) ? blackHeartIcon : whiteHeartIcon;
  }

  useEffect(() => {
    misc1({ foodState, setMealDetails, setSuggestions, identifier });
  }, [local]);

  if (mealDetails && suggestions) {
    const { strMeal,
      strMealThumb, strCategory, strArea,
      strInstructions, strYoutube, idMeal } = mealDetails.meals[0];
    const { drinks } = suggestions;
    const youTubeUrlSlicePoint = 23;
    const videoId = strYoutube.slice(youTubeUrlSlicePoint);
    const obj = {
      id: idMeal,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb };

    const ingredients = [];
    Object.keys(mealDetails.meals[0]).forEach((key) => {
      if (key.includes('strIngredient')) ingredients.push(mealDetails.meals[0][key]);
    });

    const measures = [];
    Object.keys(mealDetails.meals[0]).forEach((key) => {
      if (key.includes('strMeasure')) measures.push(mealDetails.meals[0][key]);
    });

    return (
      <div>
        <IngredientsList ingredients={ ingredients } measures={ measures } />
        <p data-testid="recipe-title">{ strMeal }</p>
        <img data-testid="recipe-photo" src={ strMealThumb } alt="foto" />
        <p data-testid="recipe-category">{strCategory}</p>
        <p data-testid="instructions">{strInstructions}</p>
        <iframe className="i-frame" title="How To" data-testid="video" src={ `https://www.youtube.com/embed${videoId}` } />
        <DrinksSuggestions drinks={ drinks } />
        <input
          onClick={ handleShare }
          data-testid="share-btn"
          type="image"
          alt="favorite"
          src={ shareIcon }
        />
        <input
          data-testid="favorite-btn"
          type="image"
          alt="fav-btn"
          src={ srcSetter(obj) }
          onClick={ () => handleLike(obj, setLocal, local) }
        />
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/comidas/${idMeal}/in-progress`) }
        >
          Continuar Receita
        </button>
        {hidden ? <span>Link copiado!</span> : null}
      </div>
    );
  }
  return <span>Loading!!!</span>;
}
