import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SearchBar from '../components/SearchBar';
import searchIcon from '../images/searchIcon.svg';

const URL_FOODS = 'https://www.themealdb.com/api/json/v1/1/';
const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function Main() {
  const history = useHistory();
  const [drinkList, setDrink] = useState();
  const [mealsList, setMeals] = useState();
  const [loading, setLoading] = useState(true);
  const [buttons, setButtons] = useState({
    buttonFilter: {
      meals,
      drinks,
    },
  });

  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchItems() {
      const { meals } = await (await fetch(`${URL_FOODS}search.php?s=`))
        .json();
      const { drinks } = await (await fetch(`${URL_DRINKS}search.php?s=`))
        .json();
      setDrink(drinks);
      setMeals(meals);
    }

    async function fetchButtons() {
      const { meals } = await (await fetch(`${URL_FOODS}list.php?c=list`))
        .json();
      const { drinks } = await (await fetch(`${URL_DRINKS}list.php?c=list`))
        .json();
      setButtons({
        buttonFilter: {
          meals,
          drinks,
        },
      });
      setLoading(false);
    }
    fetchButtons();
    fetchItems();
  }, []);

  // useEffect(() => {
  //   async function fetchButtons() {
  //     const { meals } = await (await fetch(`${URL_FOODS}list.php?c=list`))
  //       .json();
  //     const { drinks } = await (await fetch(`${URL_DRINKS}list.php?c=list`))
  //       .json();
  //   }
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

  const numberMax = 12;
  function recipeCards(result, typeResult) {
    const slicingTwelve = result.slice(0, numberMax);
    if (typeResult === 'drinks') return mapDrink(slicingTwelve);
    return mapFood(slicingTwelve);
  }

  function pathChange() {
    if (pathname === '/comidas') return recipeCards(mealsList);
    return recipeCards(drinkList, 'drinks');
  }

  return (
    <div>
      <h2>Main</h2>
      {/* { TEMP REMOVER} */}
      <button type="button" data-testid="search-top-btn">
        <object type="image/svg+xml" data={ searchIcon }>Pesquisa</object>
      </button>
      {/* { TEMP REMOVER} */}
      <SearchBar history={ history } />
      { loading ? 'Loading...'
        : (
          <div className="cardDisplay">
            {pathChange()}
          </div>)}
    </div>
  );
}
