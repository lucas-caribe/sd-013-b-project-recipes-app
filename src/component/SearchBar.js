import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../context/Context';

function SearchBar() {
  const [filterRadio, setFilterRadio] = useState('s');
  const [filterText, setFilterText] = useState('');
  const history = useHistory();
  const { setFilteredItem } = useContext(Context);

  async function fetchFood() {
    let endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    if (data !== null) {
      setFilteredItem(data);
      if (data.length === 1) {
        history.push(`/comidas/${data[0].idMeal}`);
      }
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  async function fetchDrink() {
    let endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    if (data !== null) {
      setFilteredItem(data);
      if (data.length === 1) {
        history.push(`/bebidas/${data[0].idDrink}`);
      }
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  useEffect(() => {
    if (filterRadio === 'f' && filterText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterText]);

  // useEffect(() => {
  //   console.log(filteredItem);
  // }, [filteredItem]);

  return (
    <form id="form">
      <input
        type="text"
        placeholder="Buscar Receita"
        data-testid="search-input"
        onChange={ (event) => setFilterText(event.target.value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="radiosFilter"
          data-testid="ingredient-search-radio"
          value="i"
          onClick={ (event) => setFilterRadio(event.target.value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="radiosFilter"
          data-testid="name-search-radio"
          value="s"
          onClick={ (event) => setFilterRadio(event.target.value) }
        />
        Nome
      </label>
      <label htmlFor="firstLetter">
        <input
          type="radio"
          id="firstLetter"
          name="radiosFilter"
          data-testid="first-letter-search-radio"
          value="f"
          onClick={ (event) => setFilterRadio(event.target.value) }
        />
        Primeira letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ history.location.pathname === '/comidas' ? fetchFood : fetchDrink }
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;

// import React from 'react';
// import RadialInput from '../mini-components/RadialInput';
// import Button from '../mini-components/Button';

// function SearchBar() {
//   return (
//     <div>
//       <input data-testid="search-input" type="text" placeholder="DIGITE SUA COMIDA" />
//       <RadialInput
//         dataTest="ingredient-search-radio"
//         radialId="ingredient"
//         radialName="search-checkbox"
//         radialText="Ingrediente"
//       />
//       <RadialInput
//         dataTest="name-search-radio"
//         radialId="food-name"
//         radialName="search-checkbox"
//         radialText="Nome"
//       />
//       <RadialInput
//         dataTest="first-letter-search-radio"
//         radialId="food-first-letter"
//         radialName="search-checkbox"
//         radialText="Primeira Letra"
//       />
//       <Button btnText="Buscar" data-testid="exec-search-btn" />
//     </div>
//   );
// }

// export default SearchBar;
