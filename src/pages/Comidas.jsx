import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchIngrediente, fetchName,
  fetchPrimeiraLetra, getMealdCategory } from '../services/fetchRadioComidas';
import Header from '../components/Header';
import CardsComida from '../components/CardsComida';
import Footer from '../components/Footer';
import Category from '../components/Category';

const QUANTIDADE_RECEITAS = 12;

function Comidas() {
  const [radioSelecionado, setRadioSelecionado] = useState('');
  const [resultFetch, setResultFetch] = useState([]);
  const { push } = useHistory();
  const [categoryList, setCategoryList] = useState([]);

  const componentLoad = async () => {
    setCategoryList(await getMealdCategory());
    setResultFetch(await fetchName(''));
  };

  useEffect(() => {
    componentLoad();
  }, []);

  const verificaRadioFetch = async (input) => {
    switch (radioSelecionado) {
    case 'ingrediente':
      setResultFetch(await fetchIngrediente(input));
      break;
    case 'nome':
      setResultFetch(await fetchName(input));
      break;
    case 'firstLetter':
      if (input.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      setResultFetch(await fetchPrimeiraLetra(input));
      break;
    default:
      return null;
    }
    const resultFetchName = await fetchName(input);
    if (resultFetchName.length === 1) {
      push(`/comidas/${resultFetchName[0].idMeal}`);
    }
  };

  function enviarAlerta() {
    return (
      <main className="main-content">
        <Header pageTitle="Comida" />
        {global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
        <Footer />
      </main>

    );
  }

  const pegarDozeElementos = () => resultFetch.slice(0, QUANTIDADE_RECEITAS);

  if (resultFetch !== null) {
    return (
      <main className="main-content">
        <Header
          pageTitle="Comidas"
          searchFuncs={ { setRadioSelecionado, verificaRadioFetch } }
        />
        <Category categories={ categoryList } />
        {resultFetch.length > 1 && <CardsComida comidas={ pegarDozeElementos() } />}
        <Footer />
      </main>
    );
  } return enviarAlerta();
}

export default Comidas;
