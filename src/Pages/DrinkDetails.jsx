import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export default function DrinkDetalis() {
  const [drinkDetails, setDrinkDetails] = useState({});
  const [meals, setMeals] = useState([]);
  const SIX = 6;
  // id => API
  const id = useLocation().pathname.replace('/bebidas/', '');
  console.log(id);
  // ref: Lucas Caribé
  const youtubeSource = drinkDetails.strYoutube ? drinkDetails
    .strYoutube.replace(/watch\?v=/, 'embed/') : '';
  const str1 = 'accelerometer; autoplay; clipboard-write;';
  const str2 = 'encrypted-media; gyroscope; picture-in-picture';
  const youtubeConf = str1 + str2;
  const TWENTY = 20;

  const ingredientList = [];
  const fetchDrinkIdAPi = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json());
    setDrinkDetails(response.drinks[0]);
  };
  // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
  // async function fetchDrinkAPI() {
  //   const APIDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  //   const response = await fetch(APIDrinks).then((resp) => resp.json());
  //   setDrinks(response.drinks.slice(0, TWO));
  // }

  async function fetchMealAPI() {
    const APIMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(APIMeals).then((resp) => resp.json());
    setMeals(response.meals.slice(0, SIX));
  }

  useEffect(() => {
    fetchMealAPI();
    fetchDrinkIdAPi();
  }, []);

  for (let index = 1; index <= TWENTY; index += 1) {
    if (drinkDetails[`strIngredient${index}`]) {
      ingredientList.push({
        [`ingredients${index}`]: drinkDetails[`strIngredient${index}`],
        [`measure${index}`]: drinkDetails[`strMeasure${index}`],
      });
    }
  }

  return (
    <>
      <img
        src={ drinkDetails.strDrinkThumb }
        alt="img-Details"
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">{ drinkDetails.strDrink }</p>
      <p data-testid="recipe-category">{ drinkDetails.strAlcoholic }</p>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{drinkDetails.strCategory}</p>
      <ul>
        { ingredientList.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {
              `${ingredient[`ingredients${index + 1}`]} 
              - ${ingredient[`measure${index + 1}`]}`
            }
          </li>))}
      </ul>
      <h3>Instruções</h3>
      <p data-testid="instructions">{drinkDetails.strInstructions}</p>
      <iframe
        data-testid="video"
        width="560"
        height="315"
        src={ youtubeSource }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={ youtubeConf }
      />
      {meals.map((drink, index) => (
        <div data-testid={ `${index}-recomendation-card` } key={ `drink${index}` }>
          <img src={ drink.strMealThumb } alt="drink" />
          <p>{drink.strCategory}</p>
          <p>{drink.strMeal}</p>
        </div>))}
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </>
  );
}
