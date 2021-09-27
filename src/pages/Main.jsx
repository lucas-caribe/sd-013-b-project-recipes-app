import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const URL_FOODS = 'https://www.themealdb.com/api/json/v1/1/';
const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function Main() {
  const history = useHistory();
  const [drinkList, setDrink] = useState();
  const [mealsList, setMeals] = useState();
  const [loadingItems, setLoadingItems] = useState(true);
  const [loadingButtons, setLoadingButtons] = useState(true);
  const [buttons, setButtons] = useState({
    meals: '',
    drinks: '',
  });

  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchItems() {
      const { meals } = await (await fetch(`${URL_FOODS}search.php?s=`))
        .json();
      setMeals(meals);

      const { drinks } = await (await fetch(`${URL_DRINKS}search.php?s=`))
        .json();
      setDrink(drinks);
      setLoadingItems(false);
    }

    async function fetchButtons() {
      const { meals } = await (await fetch(`${URL_FOODS}list.php?c=list`))
        .json();
      const { drinks } = await (await fetch(`${URL_DRINKS}list.php?c=list`))
        .json();
      setButtons({
        meals,
        drinks,
      });
      setLoadingButtons(false);
    }
    fetchItems();
    fetchButtons();
  }, []);

  // useEffect(() => {
  //   async function fetchButtons() {
  //     const { meals } = await (await fetch(`${URL_FOODS}list.php?c=list`))
  //       .json();
  //     const { drinks } = await (await fetch(`${URL_DRINKS}list.php?c=list`))
  //       .json();
  //     setButtons({
  //       meals,
  //       drinks,
  //     });
  //     setLoadingButtons(false);
  //   }
  //   fetchButtons();
  // }, []);

  function mapFood(slicingTwelve) {
    return slicingTwelve.map((card, index) => (
      <div className="card" key={ index }>
        <p data-testid={ `${index}-recipe-card` }>{card.strMeal}</p>
        <img
          className="card-img"
          data-testid={ `${index}-card-img` }
          src={ card.strMealThumb }
          alt=""
        />
        <p data-testid={ `${index}-card-name` }>{card.strMeal}</p>
      </div>
    ));
  }

  function mapDrink(slicingTwelve) {
    return slicingTwelve.map((card, index) => (
      <div className="card" key={ index }>
        <p data-testid={ `${index}-recipe-card` }>{card.strDrink}</p>
        <img
          className="card-img"
          data-testid={ `${index}-card-img` }
          src={ card.strDrinkThumb }
          alt=""
        />
        <p data-testid={ `${index}-card-name` }>{card.strDrink}</p>
      </div>
    ));
  }

  const maxTwelve = 12;
  const maxFive = 5;
  function recipeCards(result, typeResult) {
    const slicingTwelve = result.slice(0, maxTwelve);
    if (typeResult.includes('drinks')) return mapDrink(slicingTwelve);
    return mapFood(slicingTwelve);
  }

  function recipeButtons(result) {
    console.log(result);
    const slicingFiveCategory = result.slice(0, maxFive);
    return slicingFiveCategory.map(({ strCategory }, index) => (
      <div key={ index }>
        <button
          type="button"
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
        </button>
      </div>
    ));
  }

  function pathChangeButton() {
    const { meals, drinks } = buttons;
    if (pathname.includes('comidas')) return recipeButtons(meals);
    return recipeButtons(drinks);
  }

  function pathChange(typeOfPath) {
    if (typeOfPath === 'category') {
      if (pathname === '/comidas') return recipeCards(mealsList, 'comidas');
      return recipeCards(drinkList, 'drinks');
    }
    // const { meals, drinks } = buttons;
    // if (pathname.includes('comidas')) return recipeButtons(meals);
    // return recipeButtons(drinks);
  }
  console.log('Items', loadingItems);
  console.log('button', loadingButtons);

  return (
    <div>
      <h2>Main</h2>
      <Header />
      <SearchBar history={ history } />
      { (loadingItems || loadingButtons) ? 'Loading...'
        : (
          <div className="cardDisplay">
            {pathChangeButton()}
            {pathChange('category')}
          </div>)}
    </div>
  );
}
