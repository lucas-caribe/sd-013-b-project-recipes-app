import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { fetchIngredienteBeb, fetchNameBeb,
  fetchPrimeiraLetraBeb, getDrinksCategoriesList,
  getDrinksCategoryFilter } from '../services/fetchRadioBebidas';
import Header from '../components/Header';
import CardsDrinks from '../components/CardsDrinks';
import Footer from '../components/Footer';
import Category from '../components/Category';

const QUANTIDADE_RECEITAS = 12;

function Bebidas() {
  const [radioSelecionado, setRadioSelecionado] = useState('');
  const [resultFetch, setResultFetch] = useState([]);
  const { push } = useHistory();
  const [categoryList, setCategoryList] = useState([]);
  const [alreadySelectedCategory, setAlreadySelectedCategory] = useState('');

  const componentLoad = async () => {
    setCategoryList(await getDrinksCategoriesList());
    setResultFetch(await fetchNameBeb(''));
  };

  useEffect(() => {
    componentLoad();
  }, []);

  const selectCategoryFilter = async (category) => {
    if (alreadySelectedCategory === category) {
      componentLoad();
    } else {
      setResultFetch(await getDrinksCategoryFilter(category));
      setAlreadySelectedCategory(category);
    }
  };

  const verificaRadioFetch = async (input) => {
    switch (radioSelecionado) {
    case 'ingrediente':
      setResultFetch(await fetchIngredienteBeb(input));
      break;
    case 'nome':
      setResultFetch(await fetchNameBeb(input));
      break;
    case 'firstLetter':
      if (input.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      setResultFetch(await fetchPrimeiraLetraBeb(input));
      break;
    default:
      return null;
    }
    const resultFetchName = await fetchNameBeb(input);
    if (resultFetchName.length === 1) {
      push(`/bebidas/${resultFetchName[0].idDrink}`);
    }
  };

  const pegarDozeElementos = () => resultFetch.slice(0, QUANTIDADE_RECEITAS);

  function enviarAlerta() {
    return (
      <main className="main-content">
        <Header pageTitle="Comida" />
        {global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
        <Footer />
      </main>

    );
  }
  if (resultFetch !== null) {
    return (
      <main className="main-content">
        <Header
          pageTitle="Bebidas"
          searchFuncs={ { setRadioSelecionado, verificaRadioFetch } }
        />
        <Category
          categories={ categoryList }
          onClick={ selectCategoryFilter }
          onClickAll={ componentLoad }
        />
        {resultFetch.length > 1 && <CardsDrinks drinks={ pegarDozeElementos() } />}
        <Footer />
      </main>
    );
  } return enviarAlerta();
}

export default Bebidas;
