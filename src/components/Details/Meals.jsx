import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClipboardCopy from 'clipboard-copy';
import Ingredients from '../../services/Ingredients';
import shareIcon from '../../images/shareIcon.svg';

export default function Meals(receitaId, recipeData, recommends, isRecipeDone) {
  const videoPath = recipeData[0].strYoutube;
  const history = useHistory();
  const { pathname } = history.location;
  function renderIngredients() {
    return (
      <div>
        <ul>
          {Ingredients(recipeData[0]).map((ingre, ingreIndex) => (
            Object.entries(ingre).map((entrie) => {
              if (entrie[1] === '') {
                return (
                  <li data-testid={ `${ingreIndex}-ingredient-name-and-measure` }>
                    {entrie[0]}
                  </li>
                );
              }
              return (
                <li
                  data-testid={ `${ingreIndex}-ingredient-name-and-measure` }
                  key={ entrie[0] }
                >
                  {`${entrie[1]} - ${entrie[0]}`}
                </li>
              );
            })
          ))}
        </ul>
        <p data-testid="instructions">{ recipeData[0].strInstructions }</p>
      </div>
    );
  }

  useCont

  function recommendsRecipes() {
    return (
      <div className="scroll-recommends">
        {recommends.map((recomm, index) => (
          <Link
            key={ recomm.idDrink }
            to={ `/bebidas/${recomm.idDrink}` }
          >
            <div
              className="recomendation-card"
              data-testid={ `${index}-recomendation-card` }
            >
              <h4 data-testid={ `${index}-recomendation-title` }>
                { recomm.strDrink }
              </h4>
              <img
                width="100px"
                src={ recomm.strDrinkThumb }
                alt={ recomm.strDrink }
              />
            </div>
          </Link>
        ))}
      </div>
    );
  }

  function renderStartBtn() {
    if (localStorage.getItem('inProgressRecipes')) {
      const inProgressRecipes = JSON
        .parse(localStorage.getItem('inProgressRecipes')).meals;
      const finded = Object.keys(inProgressRecipes).find((keys) => keys === receitaId);
      if (finded) {
        return (
          <button
            className="start-recipe-btn"
            type="button"
            data-testid="start-recipe-btn"
          >
            Continuar Receita
          </button>
        );
      }
    }
    return (
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ (event) => {
          event.preventDefault();
          history.push(`${pathname}/in-progress`);
        } }
      >
        Iniciar receita
      </button>
    );
  }

  function renderVideo() {
    return (
      <iframe
        data-testid="video"
        width="400px"
        height="225px"
        src={ videoPath.replace('watch?v=', 'embed/') }
        title="YouTube video player"
      />
    );
  }

  return (
    <div>
      <h2 data-testid="recipe-title">{ recipeData[0].strMeal }</h2>
      <img
        alt="recipe"
        width="200px"
        data-testid="recipe-photo"
        src={ recipeData[0].strMealThumb }
      />
      <br />
      <button type="button" data-testid="share-btn">
        <img src={ shareIcon } alt="Compatilhar" />
      </button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{ recipeData[0].strCategory }</p>
      {videoPath ? renderVideo() : ''}
      {renderIngredients()}
      {isRecipeDone ? '' : renderStartBtn()}
      {recommendsRecipes()}
    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.object,
}.isRequired;
