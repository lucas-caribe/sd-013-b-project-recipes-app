import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecommendedCard = (props) => {
  const { item, type, index } = props;
  let name;
  let img;
  let id;
  if (type === 'comidas') {
    name = item.strMeal;
    img = `${item.strMealThumb}/preview`;
    id = item.idMeal;
  } else if (type === 'bebidas') {
    name = item.strDrink;
    img = `${item.strDrinkThumb}/preview`;
    id = item.idDrink;
  }
  const category = type === 'comidas' ? item.strCategory : item.strAlcoholic;

  return (
    <Link to={ `/${type}/${id}` }>
      <div data-testid={ `${index}-recomendation-card` }>
        <img alt="recommended" src={ img } />
        <h5>{name}</h5>
        <h6>{category}</h6>
      </div>
    </Link>
  );
};

RecommendedCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default RecommendedCard;
