import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { useRecipesContext } from '../context/Provider';

export default function RenderCardSearch({ cards }) {
  const { recipesApp } = useRecipesContext();

  const MAX_CARDS = 12;

  // Define o tipo da string quer será adicionado as propriedades e o
  // tipo de url para onde seremos redirecionado de acordo com o pathname atual;
  const { pathname } = useLocation();
  const type = pathname.includes('/comidas') ? 'Meal' : 'Drink';
  const linkTo = pathname.includes('/comidas') ? '/comidas' : '/bebidas';

  return (
    <>
      {cards.map((card, index) => {
        if (index >= MAX_CARDS) return '';
        return (
          <Link
            to={ `${linkTo}/${card.idMeal || card.idDrink}` }
            key={ card[`id${type}`] }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ card[`str${type}Thumb`] }
              alt={ card[`str${type}`] }
              data-testid={ `${index}-card-img` }
              width="100px"
            />
            <h3 data-testid={ `${index}-card-name` }>
              {card[`str${type}`]}
            </h3>
          </Link>
        );
      })}
    </>
  );
}

RenderCardSearch.propTypes = {
  cards: PropTypes.arrayOf().isRequired,
};
