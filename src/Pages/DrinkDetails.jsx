import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';

export default function DrinkDetalis() {
  const [drinkDetails, setDrinkDetails] = useState({});
  const [meals, setMeals] = useState([]);
  const SIX = 6;

  let count1 = 0;
  let count2 = 1;

  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const test = recipesDone || [];
  let recipeInProgress = JSON
    .parse(localStorage.getItem('inProgressRecipes'));
  if (recipeInProgress) recipeInProgress = recipeInProgress.drinks;
  if (!recipeInProgress) recipeInProgress = {};

  const firstCarousel = meals.length ? [meals[0], meals[2], meals[4]] : [];
  const secondCarousel = meals.length ? [meals[1], meals[3], meals[5]] : [];

  const id = useLocation().pathname.replace('/bebidas/', '');
  const test2 = test.some((recipe) => recipe.id === id);

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

  const hiddenButton = (
    <button type="button" data-testid="start-recipe-btn" className="startRecipeButton">
      {recipeInProgress[id] ? 'Continuar Receita' : 'Iniciar Receita'}
    </button>);

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
      <Carousel>
        {firstCarousel.map((meal, index) => {
          if (index > 0) count1 += 2;
          return (
            <CarouselItem
              key={ `meal${index}` }
              data-testid={ `${count1}-recomendation-card` }
            >
              <img className="d-block w-100" src={ meal.strMealThumb } alt="meal" />
              <Carousel.Caption>
                <p>{meal.strCategory}</p>
                <p data-testid={ `${count1}-recomendation-title` }>{meal.strMeal}</p>
              </Carousel.Caption>
            </CarouselItem>);
        })}
      </Carousel>
      <Carousel>
        {secondCarousel.map((meal, index) => {
          if (index > 0) count2 += 2;
          return (
            <CarouselItem
              key={ `meal${index}` }
              data-testid={ `${count2}-recomendation-card` }
            >
              {/* Comment */}
              <img className="d-block w-100" src={ meal.strMealThumb } alt="Meal" />
              <Carousel.Caption>
                <p>{meal.strCategory}</p>
                <p data-testid={ `${count2}-recomendation-title` }>{meal.strMeal}</p>
              </Carousel.Caption>
            </CarouselItem>);
        })}
      </Carousel>
      <Link to={ `/bebidas/${id}/in-progress` }>
        {!test2 ? hiddenButton : null}
      </Link>
    </>
  );
}
