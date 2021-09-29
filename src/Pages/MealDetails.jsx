import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export default function MealDetalis() {
  const [mealDetails, setMealDetails] = useState({});
  const [drinks, setDrinks] = useState([]);
  const SIX = 6;
  // const TREE = 3;
  // id => API
  const id = useLocation().pathname.replace('/comidas/', '');
  console.log(id);
  // ref: Lucas Caribé
  const youtubeSource = mealDetails.strYoutube ? mealDetails
    .strYoutube.replace(/watch\?v=/, 'embed/') : '';
  const str1 = 'accelerometer; autoplay; clipboard-write;';
  const str2 = 'encrypted-media; gyroscope; picture-in-picture';
  const youtubeConf = str1 + str2;
  const TWENTY = 20;

  // const firstCarousel = drinks.slice(0, TREE);
  // const secondCarousel = drinks.slice(0, SIX);

  const ingredientList = [];
  const fetchMealIdAPi = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json());
    setMealDetails(response.meals[0]);
  };

  async function fetchDrinkAPI() {
    const APIDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(APIDrinks).then((resp) => resp.json());
    setDrinks(response.drinks.slice(0, SIX));
  }

  useEffect(() => {
    fetchDrinkAPI();
    fetchMealIdAPi();
  }, []);

  for (let index = 1; index <= TWENTY; index += 1) {
    if (mealDetails[`strIngredient${index}`] !== '') {
      ingredientList.push({
        [`ingredients${index}`]: mealDetails[`strIngredient${index}`],
        [`measure${index}`]: mealDetails[`strMeasure${index}`],
      });
    }
  }

  return (
    <>
      <img
        src={ mealDetails.strMealThumb }
        alt="img-Details"
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">{ mealDetails.strMeal }</p>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{mealDetails.strCategory}</p>
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
      <p data-testid="instructions">{mealDetails.strInstructions}</p>
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
      {drinks.map((meal, index) => (
        <div data-testid={ `${index}-recomendation-card` } key={ `meal${index}` }>
          <img src={ meal.strDrinkThumb } alt="Meal" />
          <p>{meal.strCategory}</p>
          <p data-testid="0-recomendation-title">{meal.strDrink}</p>
        </div>))}
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </>
  );
}
