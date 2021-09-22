import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import RecipesContext from '../../Context/RecipesContext';

export default function InputSearchMeals() {
  const [search, setSearch] = useState('');
  const [mealInput, setMealInput] = useState('');
  const PRIMEIRA_LETRA = 'Primeira letra';
  const apiIngredienteUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  const apiMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  const { api, setApi } = useContext(RecipesContext);
  console.log(api);
  const TWELVE = 12;
  let mealsList = api.meals;
  const NOTFOUND = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

  const alert = (response) => {
    if (response.meals) setApi(response);
    if (!response.meals) global.alert(NOTFOUND);
  };

  const handleClick = () => {
    const apiIngredienteRequest = async () => {
      const response = await fetch(`${apiIngredienteUrl}i=${mealInput}`)
        .then((resp) => resp.json());
      alert(response);
    };

    const apiNomeRequest = async () => {
      const response = await fetch(`${apiMealsUrl}s=${mealInput}`)
        .then((resp) => resp.json());
      alert(response);
    };

    const apiLetraRequest = async () => {
      const response = await fetch(`${apiMealsUrl}f=${mealInput}`)
        .then((resp) => resp.json());
      alert(response);
    };

    if (search === PRIMEIRA_LETRA && mealInput.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }

    switch (search) {
    case 'Ingrediente':
      apiIngredienteRequest();
      break;
    case 'Nome':
      apiNomeRequest();
      break;
    case PRIMEIRA_LETRA:
      apiLetraRequest();
      break;
    default:
      break;
    }
  };

  if (mealsList.length === 1) {
    return <Redirect to={ `/comidas/${mealsList[0].idMeal}` } />;
  }

  if (mealsList.length > TWELVE) mealsList = mealsList.splice(0, TWELVE);

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        data-testid="search-input"
        onChange={ (ev) => setMealInput(ev.target.value) }
      />
      <label htmlFor="Ingrediente">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="Ingrediente"
          name="search"
          onClick={ () => setSearch('Ingrediente') }
        />
        Ingrediente
      </label>
      <label htmlFor="Nome">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="Nome"
          name="search"
          onClick={ () => setSearch('Nome') }
        />
        Nome
      </label>
      <label htmlFor="Primeira letra">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="Primeira letra"
          name="search"
          onClick={ () => setSearch(PRIMEIRA_LETRA) }
        />
        Primeira letra
      </label>
      <button
        onClick={ handleClick }
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
      { api.meals.map((meal, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            data-testid={ `${index}-card-img` }
            src={ meal.strMealThumb }
            alt="Meal card"
          />
          <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
        </div>))}
    </>
  );
}
