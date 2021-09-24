import React, { useContext } from 'react';
import Context from '../context/Context';
import searchBarTextFetch from '../services/searchBarTextFetch';

function SearchInputs({ history }) {
  const {
    inputRadio,
    inputText,
    apiRadio,
    setInputRadio,
    setInputText,
    setApiRadio,
  } = useContext(Context);

  const handleClickFiltrarReceita = () => {
    // if (apiRadio.meals.length === 1 || apiRadio.meals !== undefined) {
    // const id = apiRadio.meals.idMeal;
    //   // history.push(`${window.location.pathname}/${id}`);
    // console.log(`REDIRECIONADO P/ ${window.location.pathname}/${id}`);
    // } else {
    searchBarTextFetch(inputRadio, inputText, setApiRadio);
    // }
  };

  return (
    <div>
      <label htmlFor="buscaTexto">
        <input
          type="text"
          id="buscaTexto"
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ (e) => setInputText(e.target.value) }
        />
      </label>
      <br />

      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="busca"
          value="Ingrediente"
          data-testid="ingredient-search-radio"
          onChange={ (e) => setInputRadio(e.target.value) }
        />
        Ingrediente
      </label>
      {/* --------------------------- */}
      <br />
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="busca"
          value="Nome"
          data-testid="name-search-radio"
          onChange={ (e) => setInputRadio(e.target.value) }
        />
        Nome
      </label>
      {/* --------------------------- */}
      <br />
      <label htmlFor="letra">
        <input
          type="radio"
          id="letra"
          name="busca"
          value="Primeira letra"
          data-testid="first-letter-search-radio"
          onChange={ (e) => setInputRadio(e.target.value) }
        />
        Primeira Letra
      </label>
      <br />
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ handleClickFiltrarReceita }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchInputs;
