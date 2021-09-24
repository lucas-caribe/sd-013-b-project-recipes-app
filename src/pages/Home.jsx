// Tela principal de receitas: requisitos 25 a 32;
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodRequest, drinkRequest } from '../services/data';
import CardList from '../components/CardList';

function Home() {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [radioButton, setRadioButton] = useState('ingrediente');
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    async function setFetch() {
      if (pathname === '/comidas') {
        setFoods(await foodRequest('search.php?s'));
      }

      if (pathname === '/bebidas') {
        setDrinks(await drinkRequest('search.php?s'));
      }
    }
    setFetch();
  }, [pathname]);

  if (foods === [] || drinks === []) {
    return (
      <div>
        <p> Loading </p>
      </div>
    );
  }

  function handleSearchInput({ target: { value } }) {
    setSearchInput(value);
  }

  function handleRadioButton({ target: { value } }) {
    setRadioButton(value);
  }

  async function handleSubmitButton() {
    if (pathname === ('/comidas') && radioButton === 'ingredientes') {
      setFoods(await foodRequest(`filter.php?i=${searchInput}`));
    }
    if (pathname === ('/bebidas') && radioButton === 'ingredientes') {
      setDrinks(await drinkRequest(`filter.php?i=${searchInput}`));
    }
    if (pathname === ('/comidas') && radioButton === 'nome') {
      setFoods(await foodRequest(`search.php?s=${searchInput}`));
    }
    if (pathname === ('/bebidas') && radioButton === 'nome') {
      setDrinks(await drinkRequest(`search.php?s=${searchInput}`));
    }
    if (pathname === ('/comidas') && radioButton === 'primeira-letra') {
      setFoods(await foodRequest(`search.php?f=${searchInput}`));
    }
    if (pathname === ('/bebidas') && radioButton === 'primeira-letra') {
      setDrinks(await drinkRequest(`search.php?f=${searchInput}`));
    }
  }

  return (
    <div>
      {
        (pathname === '/comidas')
          ? <Header setTitle="Comidas" />
          : <Header setTitle="Bebidas" />
      }

      <div>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            data-testid="search-input"
            placeholder="Buscar Receita"
            value={ searchInput }
            onChange={ handleSearchInput }
          />
        </label>
        <label htmlFor="ingredient">
          <input
            type="radio"
            value="ingredientes"
            name="radio-button"
            id="ingredient"
            data-testid="ingredient-search-radio"
            onClick={ (e) => handleRadioButton(e) }
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            value="nome"
            name="radio-button"
            id="name"
            data-testid="name-search-radio"
            onClick={ (e) => handleRadioButton(e) }
          />
          Nome
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            value="primeira-letra"
            name="radio-button"
            id="first-letter"
            data-testid="first-letter-search-radio"
            onClick={ (e) => handleRadioButton(e) }
          />
          Primeira Letra
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleSubmitButton }
        >
          Buscar
        </button>
      </div>
      <CardList object={ foods } />
      <CardList object={ drinks } />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps)(Home);
