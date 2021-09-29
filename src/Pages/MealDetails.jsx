import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function MealDetalis() {
  const [mealDetails, setMealDetails] = useState({});
  // const [inProgress, setinProgress] = useState(false);
  const [drinks, setDrinks] = useState([]);
  let count1 = 0;
  let count2 = 1;

  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
  let recipeInProgress = JSON
    .parse(localStorage.getItem('inProgressRecipes'));
  if (recipeInProgress) recipeInProgress = recipeInProgress.meals;
  if (!recipeInProgress) recipeInProgress = {};
  const test = recipesDone || [];
  const SIX = 6;

  // id => API
  const id = useLocation().pathname.replace('/comidas/', '');
  const test2 = test.some((recipe) => recipe.id === id);

  // ref: Lucas Caribé
  const youtubeSource = mealDetails.strYoutube ? mealDetails
    .strYoutube.replace(/watch\?v=/, 'embed/') : '';
  const str1 = 'accelerometer; autoplay; clipboard-write;';
  const str2 = 'encrypted-media; gyroscope; picture-in-picture';
  const youtubeConf = str1 + str2;
  const TWENTY = 20;

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

  const firstCarousel = drinks.length ? [drinks[0], drinks[2], drinks[4]] : [];
  const secondCarousel = drinks.length ? [drinks[1], drinks[3], drinks[5]] : [];

  for (let index = 1; index <= TWENTY; index += 1) {
    if (mealDetails[`strIngredient${index}`] !== '') {
      ingredientList.push({
        [`ingredients${index}`]: mealDetails[`strIngredient${index}`],
        [`measure${index}`]: mealDetails[`strMeasure${index}`],
      });
    }
  }

  console.log(recipeInProgress);

  const hiddenButton = (
    <button type="button" data-testid="start-recipe-btn" className="startRecipeButton">
      {recipeInProgress[id] ? 'Continuar Receita' : 'Iniciar Receita'}
    </button>);

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
      <iframed-block
        w-100
        src={ youtubeSource }
        data-testid="video"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={ youtubeConf }
      />
      <Carousel>
        {firstCarousel.map((drink, index) => {
          if (index > 0) count1 += 2;
          return (
            <CarouselItem
              key={ `drink${index}` }
              data-testid={ `${count1}-recomendation-card` }
            >
              <img className="d-block w-100" src={ drink.strDrinkThumb } alt="drink" />
              <Carousel.Caption>
                <p>{drink.strCategory}</p>
                <p data-testid={ `${count1}-recomendation-title` }>{drink.strDrink}</p>
              </Carousel.Caption>
            </CarouselItem>);
        })}
      </Carousel>
      <Carousel style={ { marginBottom: '100px' } }>
        {secondCarousel.map((drink, index) => {
          if (index > 0) count2 += 2;
          return (
            <CarouselItem
              key={ `drink${index}` }
              data-testid={ `${count2}-recomendation-card` }
            >
              {/* Comment */}
              <img className="d-block w-100" src={ drink.strDrinkThumb } alt="Meal" />
              <Carousel.Caption>
                <p>{drink.strCategory}</p>
                <p data-testid={ `${count2}-recomendation-title` }>{drink.strDrink}</p>
              </Carousel.Caption>
            </CarouselItem>);
        })}
      </Carousel>
      <Link to={ `/comidas/${id}/in-progress` }>
        {!test2 ? hiddenButton : null}
      </Link>
    </>
  );
}
