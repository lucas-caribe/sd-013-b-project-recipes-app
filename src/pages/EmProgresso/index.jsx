import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';

import { useDetails } from '../../context/DetailsContext';

import blackHeart from '../../images/blackHeartIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

function EmProgresso() {
  const [isCopied, setIsCopied] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();

  const {
    item,
    ingredients,
    fetchRecipe,
  } = useDetails();

  useEffect(() => {
    fetchRecipe(pathname, id);

    return setIsCopied(false);
  }, [pathname]);

  const handleCopy = (bool) => {
    setIsCopied(bool);
  };

  const renderIngredients = () => ingredients.map((ingredient, index) => (
    <li
      key={ index }
      data-testid={ `${index}-ingredient-step` }
    >
      {ingredient}
    </li>
  ));

  const checkFavorites = (recipe, type) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites) {
      return (
        <FavoriteButton
          colorBeforeClick={ blackHeart }
          colorAfterClick={ whiteHeart }
          recipe={ recipe }
          type={ type }
        />
      );
    }
    return (
      <FavoriteButton
        colorBeforeClick={ whiteHeart }
        colorAfterClick={ blackHeart }
        recipe={ recipe }
        type={ type }
      />
    );
  };

  const renderDetails = (path, type, property) => {
    if (!item[type]) {
      return <span>Carregando...</span>;
    } return (
      <main>
        <img
          data-testid="recipe-photo"
          src={ item[type][0][`str${property}Thumb`] }
          alt={ item[type][0][`str${property}`] }
          height="300px"
          width="300px"
        />
        <h1 data-testid="recipe-title">{ item[type][0][`str${property}`] }</h1>
        <ShareButton
          path={ path }
          id={ item[type][0][`id${property}`] }
          icon={ shareIcon }
          handleCopy={ handleCopy }
        />
        {checkFavorites(item[type][0], type)}
        {isCopied && <p>Link copiado!</p> }
        <h2 data-testid="recipe-category">
          { item[type][0].strAlcoholic
            ? item[type][0].strAlcoholic : item[type][0].strCategory }
        </h2>
        <ul>
          {renderIngredients()}
        </ul>
        <p data-testid="instructions">{item[type][0].strInstructions}</p>
        {item[type][0].strYoutube
        && <iframe
          data-testid="video"
          src={ item[type][0].strYoutube }
          title={ item[type][0][`str${property}`] }
          frameBorder="0"
        />}
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
      </main>
    );
  };

  if (pathname.includes('comidas')) {
    return renderDetails('comidas', 'meal', 'Meal');
  }
  return renderDetails('bebidas', 'drink', 'Drink');
}

export default EmProgresso;
