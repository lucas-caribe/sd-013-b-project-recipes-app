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

      const initialRequest = {
        '/comidas': async () => {
          setFoods(await foodRequest('search.php?s'));
        },
        '/bebidas': async () => {
          setDrinks(await drinkRequest('search.php?s'));
        },
      };
      initialRequest[pathname]();
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
    const requestApi = {
      '/comidas': async (radio, input) => {
        if (radio === 'ingredientes') {
          setFoods(await foodRequest(`filter.php?i=${input}`));
        }
        if (radio === 'nome') {
          setFoods(await foodRequest(`search.php?s=${input}`));
        }
        if (radio === 'primeira-letra') {
          setFoods(await foodRequest(`search.php?f=${input}`));
        }
      },
      '/bebidas': async (radio, input) => {
        if (radio === 'ingredientes') {
          setDrinks(await drinkRequest(`filter.php?i=${input}`));
        }
        if (radio === 'nome') {
          setDrinks(await drinkRequest(`search.php?s=${input}`));
        }
        if (radio === 'primeira-letra') {
          setDrinks(await drinkRequest(`search.php?f=${input}`));
        }
      },
    };
    requestApi[pathname](radioButton, searchInput);
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

/*
Object Literals realizado por sugestão do Gabs para resolver o problema de complexidade do código gerado
pela dupla verificação de parametros.

https://blog.rocketseat.com.br/substituindo-a-instrucao-switch-por-object-literal/
*/
