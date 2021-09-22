import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import { fetchResults } from '../services/api';

const TYPE_INGREDIENT = 'Ingrediente';
const TYPE_NAME = 'Nome';
const TYPE_FIRST_LETTER = 'Primeira letra';

const ERR_MESSAGE_1 = 'Sua busca deve conter somente 1 (um) caracter';
const ERR_MESSAGE_2 = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function Search({ page }) {
  const [type, setType] = useState('');
  const searchRef = useRef();
  const history = useHistory();

  function handleSearch() {
    const { value } = searchRef.current;
    const valueLength = value.trim().length;

    if (valueLength === 0 || !type) return;
    if (type === TYPE_FIRST_LETTER && valueLength > 1) global.alert(ERR_MESSAGE_1);

    fetchResults(type, value, page)
      .then((results) => {
        console.log(results);

        if (!results) return global.alert(ERR_MESSAGE_2);

        if (results.length === 1) {
          const item = results[0];
          const isMeal = page.includes('Comidas');

          const id = isMeal ? item.idMeal : item.idDrink;
          const route = isMeal ? '/comidas/' : '/bebidas/';

          history.push(route + id);
        }
      });
  }

  return (
    <div className="search">
      <input
        data-testid="search-input"
        type="text"
        placeholder="Buscar Receita"
        ref={ searchRef }
      />
      <div className="form-actions">
        <label htmlFor={ TYPE_INGREDIENT }>
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search"
            id={ TYPE_INGREDIENT }
            value={ TYPE_INGREDIENT }
            onChange={ (e) => setType(e.target.value) }
          />
          Ingrediente
        </label>
        <label htmlFor={ TYPE_NAME }>
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search"
            id={ TYPE_NAME }
            value={ TYPE_NAME }
            onChange={ (e) => setType(e.target.value) }
          />
          Nome
        </label>
        <label htmlFor={ TYPE_FIRST_LETTER }>
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search"
            id={ TYPE_FIRST_LETTER }
            value={ TYPE_FIRST_LETTER }
            onChange={ (e) => setType(e.target.value) }
          />
          Primeira letra
        </label>
        <button
          data-testid="exec-search-btn"
          onClick={ handleSearch }
          type="submit"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Search;
