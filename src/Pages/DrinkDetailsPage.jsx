import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import MealsSuggestions from '../components/MealsSuggestions';
import IngredientsList from '../components/IngredientsList';
import misc2 from '../miscellaneous/misc2';
import handleLike from '../miscellaneous/misc3';
import '../App.css';

function DrinkDetailsPage() {
  const [drinkDetails, setDrinkDetails] = useState();
  const [meals, setMeals] = useState();
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
    misc2({ identifier, setDrinkDetails, setMeals });
  }, [local]);

  if (drinkDetails && meals) {
    const { strDrink, strCategory,
      strDrinkThumb, strAlcoholic, strInstructions, idDrink } = drinkDetails.drinks[0];

    const ingredients = [];
    Object.keys(drinkDetails.drinks[0]).forEach((key) => {
      if (key.includes('strIngredient')) ingredients.push(drinkDetails.drinks[0][key]);
    });

    const measures = [];
    Object.keys(drinkDetails.drinks[0]).forEach((key) => {
      if (key.includes('strMeasure')) measures.push(drinkDetails.drinks[0][key]);
    });

    const obj = {
      id: idDrink,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb };

    return (
      <div>
        <p data-testid="recipe-title">{ strDrink }</p>
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt="foto" />
        <p data-testid="recipe-category">{strAlcoholic}</p>
        <p data-testid="instructions">{strInstructions}</p>
        <IngredientsList ingredients={ ingredients } measures={ measures } />
        <MealsSuggestions meals={ meals } />
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
          onClick={ () => history.push(`/bebidas/${idDrink}/in-progress`) }
        >
          Continuar Receita
        </button>
        {hidden ? <span>Link copiado!</span> : null}
      </div>
    );
  } return <span>Loading....</span>;
}

export default DrinkDetailsPage;
