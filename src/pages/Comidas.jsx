import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchIngrediente, fetchName,
  fetchPrimeiraLetra } from '../services/fetchRadioComidas';
import Header from '../components/Header';
import CardsComida from '../components/CardsComida';

const QUANTIDADE_RECEITAS = 12;

function Comidas({ inputFromHeader }) {
  const [radioSelecionado, setRadioSelecionado] = useState('');
  const [resultFetch, setResultFetch] = useState([]);

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
  };

  const pegarDozeElementos = () => resultFetch.splice(0, QUANTIDADE_RECEITAS);

  return (
    <div>
      <Header pageTitle="Comidas" />
      {resultFetch.length === 1 && <Redirect
        to={ `/comidas/${resultFetch[0].idMeal}` }
      />}
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
          onClick={ () => verificaRadioFetch(inputFromHeader.inputHeader) }
          data-testid="exec-search-btn"
        >
          Buscar
        </button>
        <br />
        {resultFetch.length !== 0 && <CardsComida comida={ pegarDozeElementos() } />}
      </div>
    </div>
  );
}

Comidas.propTypes = {
  inputFromHeader: PropTypes.shape({
    inputHeader: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  inputFromHeader: state.reducerHeader,
});

export default connect(mapStateToProps)(Comidas);
