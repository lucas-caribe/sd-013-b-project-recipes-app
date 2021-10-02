import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealsDetails from './Details/MealsDetails';
import DrinksDetails from './Details/DrinksDetails';
import contextCreate from '../context/contextCreate';
import './details.css';

export default function Details() {
  const { loading } = useContext(contextCreate);
  const history = useHistory();
  const { pathname } = history.location;
  const [foodOrDrink] = pathname.split('/').slice(1);

  if (loading) {
    return (<p>Carregando</p>);
  }

  switch (foodOrDrink) {
  case 'comidas':
    return (
      <MealsDetails />
    );
  case 'bebidas':
    return (
      <DrinksDetails />
    );
  default:
    return (<p>Página Invalida</p>);
  }
}

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;
