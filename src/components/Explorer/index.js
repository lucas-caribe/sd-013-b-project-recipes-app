import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from './Input';
import fetchAPI from '../../services';

const Explorer = ({ foodOrDrink }) => {
  const SEARCH_TERM = 'searchTerm';
  const [inputSearch, setInputSearch] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const handleChange = ({ target }) => (target.name === 'searchBar'
    ? setInputSearch(target.value)
    : setInputRadio(target.id));

  const searchCriteria = async (searchInput, radio, type) => {
    if (searchInput.length > 1 && radio === 'firstLetter') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }

    const drinkOrFood = {
      drink: 'thecocktaildb',
      food: 'themealdb',
    };

    const radioCriteria = {
      ingredient: `https://www.${drinkOrFood[type]}.com/api/json/v1/1/filter.php?i=${searchInput}`,
      name: `https://www.${drinkOrFood[type]}.com/api/json/v1/1/search.php?s=${searchInput}`,
      firstLetter: `https://www.${drinkOrFood[type]}.com/api/json/v1/1/search.php?f=${searchInput}`,
    };

    if (type === 'food') {
      const { meals } = await fetchAPI(radioCriteria[radio]);
      return meals;
    }
    const { drinks } = await fetchAPI(radioCriteria[radio]);
    return drinks;
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
        onClick={ () => searchCriteria(inputSearch, inputRadio, foodOrDrink) }
      >
        Buscar
      </button>
    </form>
  );
};

Explorer.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
export default Explorer;
