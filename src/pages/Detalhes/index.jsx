import React, { useEffect, useState } from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import RecommendationCard from '../../components/RecommendationCard';
import StartOrContinueButton from '../../components/StartOrContinueButton';

import { useRecipes } from '../../context';
import { useDetails } from '../../context/DetailsContext';

import blackHeart from '../../images/blackHeartIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function Detalhes({ location: { pathname }, history }) {
  const [isCopied, setIsCopied] = useState(false);

  const {
    item,
    ingredients,
    recommendations,
    fetchRecipe,
    fetchRecommendations,
  } = useDetails();

  const { finishedRecipes } = useRecipes();

  useEffect(() => {
    fetchRecommendations(pathname);
    fetchRecipe(pathname);

    return setIsCopied(false);
  }, [pathname]);

  const renderIngredients = () => ingredients.map((ingredient, index) => (
    <li
      key={ index }
      data-testid={ `${index}-ingredient-name-and-measure` }
    >
      {ingredient}
    </li>
  ));

  // Lógica do CSS do Carrossel feita com ajuda do Lucas Caribé
  const renderRecommendations = () => (
    <div className="recommendations" style={ { display: 'flex', overflow: 'auto' } }>
      {recommendations.map((recipe, index) => {
        const MAX_RECOMMENDATIONS_CARDS = 6;
        if (index < MAX_RECOMMENDATIONS_CARDS) {
          return <RecommendationCard key={ index } index={ index } recipe={ recipe } />;
        } return null;
      })}
    </div>
  );

  const checkRecipeStatus = (path, id) => {
    const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const checkId = finishedRecipes.some((recipe) => recipe.id === id);
    if (!checkId && !recipes) {
      return (
        <StartOrContinueButton
          onClick={ () => history.push(`/${path}/${id}/in-progress`) }
          buttonDescription="Iniciar Receita"
        />
      );
    }
    return (
      <StartOrContinueButton buttonDescription="Continuar Receita" />
    );
  };

  const checkFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites) {
      return (
        <FavoriteButton
          colorBeforeClick={ blackHeart }
          colorAfterClick={ whiteHeart }
        />
      );
    }
    return (
      <FavoriteButton
        colorBeforeClick={ whiteHeart }
        colorAfterClick={ blackHeart }
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
        <button
          data-testid="share-btn"
          type="button"
          onClick={ () => {
            copy(`http://localhost:3000/${path}/${item[type][0][`id${property}`]}`);
            setIsCopied(true);
          } }
        >
          Share
        </button>
        {isCopied && <span>Link copiado!</span> }
        {checkFavorites()}
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
        {renderRecommendations()}
        {checkRecipeStatus(path, item[type][0][`id${property}`])}
      </main>
    );
  };

  if (pathname.includes('comidas')) {
    return renderDetails('comidas', 'meal', 'Meal');
  }
  return renderDetails('bebidas', 'drink', 'Drink');
}

export default Detalhes;
