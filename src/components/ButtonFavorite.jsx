import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import { foodRequest, drinkRequest } from '../services/data';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function ButtonFavorite(props) {
  const history = useHistory();

  async function buttonCopy(event) {
    const { id } = event.target.parentNode.parentNode;
    const itemFood = await foodRequest(`lookup.php?i=${id}`);
    if (!itemFood.meals) {
      copy(`http://localhost:3000/bebidas/${id}`);
    } else {
      copy(`http://localhost:3000/comidas/${id}`);
    }
    return (alert('Link copiado!'));
  }

  async function addFavorite(event) {
    const { id } = event.target.parentNode.parentNode;
    const itemFood = await foodRequest(`lookup.php?i=${id}`);
    if (!itemFood.meals) {
      const itemDrink = await drinkRequest(`lookup.php?i=${id}`);
      const { strCategory, strAlcoholic, strDrink, strDrinkThumb } = itemDrink.drinks[0];
      // fonte: https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      favoriteRecipes.push({
        id,
        type: 'bebida',
        area: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      history.push('/receitas-favoritas');
    } else {
      const { strCategory, strArea, strMeal, strMealThumb } = itemFood.meals[0];
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      favoriteRecipes.push({
        id,
        type: 'comida',
        area: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      history.push('/receitas-favoritas');
    }
  }

  function rmFavorite(event) {
    const { id } = event.target.parentNode.parentNode;
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(favoriteRecipes.filter((item) => (item.id !== id))));
    history.push('/receitas-favoritas');
  }

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const { id, index } = props;

  const validation = favoriteRecipes.some((item) => (item.id === id));
  if (validation) {
    return (
      <>
        <button
          data-testid={ `${index}-horizontal-favorite-btn` }
          type="button"
          onClick={ rmFavorite }
        >
          <img width="50px" src={ blackHeartIcon } alt="favorite" />
        </button>
        <button
          data-testid={ `${index}-horizontal-share-btn` }
          type="button"
          onClick={ buttonCopy }
        >
          <img width="50px" src={ shareIcon } alt="shareIcon" />
        </button>
      </>
    );
  }

  return (
    <>
      <button
        data-testid={ `${index}-horizontal-favorite-btn` }
        type="button"
        onClick={ addFavorite }
      >
        <img width="50px" src={ whiteHeartIcon } alt="not favorite" />
      </button>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        onClick={ buttonCopy }
      >
        <img width="50px" src={ shareIcon } alt="shareIcon" />
      </button>
    </>
  );
}

ButtonFavorite.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ButtonFavorite;
