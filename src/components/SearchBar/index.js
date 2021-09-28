import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import fetchAPI from '../../services';
import AppContext from '../../context/AppContext';

const SearchBar = ({ option }) => {
  const SEARCH_TERM = 'searchTerm';
  const [inputSearch, setInputSearch] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const { setMeals, setDrinks } = useContext(AppContext);
  const handleChange = ({ target }) => (target.name === 'searchBar'
    ? setInputSearch(target.value)
    : setInputRadio(target.id));

  const searchCriteria = async (searchInput, radio, type) => {
    if (searchInput.length > 1 && radio === 'firstLetter') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const drinkOrFood = {
      Bebidas: 'thecocktaildb',
      Comidas: 'themealdb',
    };

    const radioCriteria = {
      ingredient: `https://www.${drinkOrFood[type]}.com/api/json/v1/1/filter.php?i=${searchInput}`,
      name: `https://www.${drinkOrFood[type]}.com/api/json/v1/1/search.php?s=${searchInput}`,
      firstLetter: `https://www.${drinkOrFood[type]}.com/api/json/v1/1/search.php?f=${searchInput}`,
    };

    if (type === 'Comidas') {
      const { meals } = await fetchAPI(radioCriteria[radio]);
      if (meals.length === 1) {
        return (<Redirect to={ `/comidas}/${meals[0].idMeal}` } />);
      }
      return meals !== null
        ? setMeals(meals)
        : global.alert(
          'Sinto muito, não encontramos nenhuma receita para esses filtros.',
        );
    }
    const { drinks } = await fetchAPI(radioCriteria[radio]);
    if (drinks.length === 1) {
      return (<Redirect to={ `/bebidas/${drinks[0].idDrink}` } />);
    }
    return drinks !== null
      ? setDrinks(drinks)
      : global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
  };

  return (
    <form>
      <Input
        obj={ {
          title: '',
          type: 'text',
          id: 'searchBar',
          dataTestID: 'search-input',
          name: 'searchBar',
          value: inputSearch,
          onChange: handleChange,
          placeholder: 'Buscar comida',
        } }
      />
      <Input
        obj={ {
          title: 'Ingrediente',
          type: 'radio',
          id: 'ingredient',
          dataTestID: 'ingredient-search-radio',
          name: SEARCH_TERM,
          value: inputRadio,
          onChange: handleChange,
        } }
      />
      <Input
        obj={ {
          title: 'Nome',
          type: 'radio',
          id: 'name',
          dataTestID: 'name-search-radio',
          name: SEARCH_TERM,
          value: inputRadio,
          onChange: handleChange,
        } }
      />
      <Input
        obj={ {
          title: 'Primeira letra',
          type: 'radio',
          id: 'firstLetter',
          dataTestID: 'first-letter-search-radio',
          name: SEARCH_TERM,
          value: inputRadio,
          onChange: handleChange,
        } }
      />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => searchCriteria(inputSearch, inputRadio, option) }
      >
        Buscar
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  option: PropTypes.string.isRequired,
};

export default SearchBar;
