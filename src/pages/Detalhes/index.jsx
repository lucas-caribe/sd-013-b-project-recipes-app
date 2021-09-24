import React, { useEffect } from 'react';

import { useRecipes } from '../../context';
import { useDetails } from '../../context/DetailsContext';

function Detalhes({ location: { pathname } }) {
  const { item,
    ingredients,
    recommendations,
    fetchRecipe,
    fetchRecommendations } = useDetails();

  const {
    finishedRecipes,
    setInProgress,
  } = useRecipes();

  useEffect(() => {
    fetchRecommendations(pathname);
    fetchRecipe(pathname);
  }, [pathname]);

  const renderIngredients = () => ingredients
    .map((ingredient, index) => (
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
      {recommendations
        .map((rec, index) => {
          const MAX_REC_CARDS = 6;
          if (index < MAX_REC_CARDS) {
            return (
              <div
                style={ { overflow: 'scroll', flexShrink: '0' } }
                key={ index }
                data-testid={ `${index}-recomendation-card` }
              >
                <img
                  className="recommendation-thumb"
                  src={ rec.strMealThumb || rec.strDrinkThumb }
                  alt=""
                  height="180px"
                  width="180px"
                />
                <p data-testid={ `${index}-recomendation-title` }>
                  {rec.strMeal || rec.strDrink}
                </p>
              </div>
            );
          } return null;
        })}
    </div>
  );

  const checkRecipeStatus = (type, id) => {
    const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const checkId = finishedRecipes.some((recipe) => recipe.id === id);
    if (!checkId && !recipes) {
      return (
        <button
          style={ { position: 'fixed', bottom: '0px' } }
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => setInProgress(type, id) }
        >
          Iniciar receita
        </button>
      );
    }
    return (
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => setInProgress(type, id) }
      >
        Continuar Receita
      </button>
    );
  };

  const renderDetails = (type, property) => {
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
        <button data-testid="share-btn" type="button">Share</button>
        <button data-testid="favorite-btn" type="button">Favorite</button>
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
        {checkRecipeStatus(type, item[type][0][`id${property}`])}
      </main>
    );
  };

  if (pathname.includes('comidas')) {
    return renderDetails('meal', 'Meal');
  }
  return renderDetails('drink', 'Drink');
}

export default Detalhes;
