import React from 'react';
import PropTypes from 'prop-types';

function buttonCopy(event) {
  console.log(event.target);
  return (alert('Copiado'));
}

// function addFavorite(params) {

// }

// function rmFavorite(params) {

// }

function ButtonFavorite(props) {
  // const { favoriteRecipes } = localStorage;
  const { id, index } = props;
  const favoriteRecipes = [{
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  }];

  const validation = favoriteRecipes.some((item) => (item.id === id));

  if (validation) {
    return (
      <>
        <button
          data-testid={ `${index}-horizontal-favorite-btn` }
          type="button"
        >
          <img width="50px" src="src/images/whiteHeartIcon.svg" alt="favorite" />
        </button>
        <button
          data-testid={ `${index}-horizontal-share-btn` }
          type="button"
          onClick={ buttonCopy }
        >
          <img width="50px" src="src/images/shareIcon.svg" alt="shareIcon" />
        </button>
      </>
    );
  }

  return (
    <>
      <button
        data-testid={ `${index}-horizontal-favorite-btn` }
        type="button"
      >
        <img width="50px" src="/images/blackHeartIcon.svg" alt="not favorite" />
      </button>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        onClick={ buttonCopy }
      >
        <img width="50px" src="src/images/shareIcon.svg" alt="shareIcon" />
      </button>
    </>
  );
}

ButtonFavorite.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ButtonFavorite;
