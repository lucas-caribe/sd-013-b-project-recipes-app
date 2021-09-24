import React, { useContext } from 'react';
import Context from '../context/Context';
import searchBarTextFetch from '../services/searchBarTextFetch';

function SearchInputs() {
  const {
    inputRadio,
    inputText,
    setInputRadio,
    setInputText,
    setApiRadio,
  } = useContext(Context);

  const handleClickFiltrarReceita = () => {
    searchBarTextFetch(inputRadio, inputText, setApiRadio);
  };

  // const mudaDetails = () => {
  //   // history.push(`${window.location.pathname}/${id}`);
  //   // console.log(`REDIRECIONADO P/ ${window.location.pathname}/${id}`);
  //   const id = apiRadio.meals[0].idMeal;

  //   if (window.location.pathname === '/comidas') {
  //     return (<Redirect to={ `/comidas/${id}` } />);
  //   }
  //   return (<Redirect to={ `/bebidas/${id}` } />);
  // };

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
