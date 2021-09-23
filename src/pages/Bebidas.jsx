import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchIngredienteBeb, fetchNameBeb,
  fetchPrimeiraLetraBeb } from '../services/fetchRadioBebidas';
import Header from '../components/Header';
import CardsDrinks from '../components/CardsDrinks';

const QUANTIDADE_RECEITAS = 12;
function Bebidas({ inputHeader }) {
  const [radioSelecionado, setRadioSelecionado] = useState('');
  const [resultFetch, setResultFetch] = useState([]);
  const { push } = useHistory();

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
    console.log(resultFetchName);
    if (resultFetchName.length === 1) {
      push(`/bebidas/${resultFetchName[0].idDrink}`);
    }
  };

  const pegarDozeElementos = () => resultFetch.splice(0, QUANTIDADE_RECEITAS);

  function enviarAlerta() {
    return (
      <div>
        <Header pageTitle="Comida" />
        {global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      </div>
    );
  }
  if (resultFetch !== null) {
    return (
      <div>
        <Header pageTitle="Bebidas" />
        <div>
          <label htmlFor="ingredient">
            Ingrediente
            <input
              type="radio"
              value="ingrediente"
              data-testid="ingredient-search-radio"
              onChange={ ({ target }) => setRadioSelecionado(target.value) }
              name="radio"
            />
          </label>
          <label htmlFor="name">
            Nome
            <input
              type="radio"
              value="nome"
              data-testid="name-search-radio"
              name="radio"
              onChange={ ({ target }) => setRadioSelecionado(target.value) }
            />
          </label>
          <label htmlFor="ingredient">
            Primeira letra
            <input
              type="radio"
              value="firstLetter"
              data-testid="first-letter-search-radio"
              onChange={ ({ target }) => setRadioSelecionado(target.value) }
              name="radio"
            />
          </label>
          <button
            type="button"
            onClick={ () => verificaRadioFetch(inputHeader.inputHeader) }
            data-testid="exec-search-btn"
          >
            Buscar
          </button>
        </div>
        {resultFetch.length > 1 && <CardsDrinks drinks={ pegarDozeElementos() } />}
      </div>
    );
  } return enviarAlerta();
}
Bebidas.propTypes = {
  inputHeader: PropTypes.shape({
    inputHeader: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  inputHeader: state.reducerHeader,
});

export default connect(mapStateToProps)(Bebidas);
