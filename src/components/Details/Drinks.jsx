import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClipboardCopy from 'clipboard-copy';
import Ingredients from '../../services/Ingredients';
import shareIcon from '../../images/shareIcon.svg';

const LINK_COPY = 'Link copiado!';

export default function Drinks(receitaId, recipeData, recommends, isRecipeDone) {
  console.log(recipeData);
  const history = useHistory();
  const { pathname } = history.location;

  const [copy, setCopy] = useState(false);

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

  function recommendsRecipes() {
    return (
      <div className="scroll-recommends">
        {recommends.map((recomm, index) => (
          <Link
            key={ recomm.idMeal }
            to={ `/comidas/${recomm.idMeal}` }
          >
            <div
              className="recomendation-card"
              data-testid={ `${index}-recomendation-card` }
            >
              <h4 data-testid={ `${index}-recomendation-title` }>
                { recomm.strMeal }
              </h4>
              <img
                width="100px"
                src={ recomm.strMealThumb }
                alt={ recomm.strMeal }
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
        .parse(localStorage.getItem('inProgressRecipes')).cocktails;
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

  function copyUrl(e) {
    e.preventDefault();
    ClipboardCopy(`http://localhost:3000${pathname}`);
    setCopy(true);
    setTimeout(() => setCopy(false), 3000);
  }

  return (
    <div>
      <h2 data-testid="recipe-title">{ recipeData[0].strDrink }</h2>
      <img
        src={ recipeData[0].strDrinkThumb }
        width="200px"
        data-testid="recipe-photo"
        alt="recipe"
      />
      <br />
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyUrl }
      >
        <img src={ shareIcon } alt="Compatilhar" />
      </button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      {copy ? '' : <p>{LINK_COPY}</p>}
      <p data-testid="recipe-category">{ recipeData[0].strAlcoholic }</p>
      <p>{ recipeData[0].strCategory }</p>
      {renderIngredients()}
      {isRecipeDone ? '' : renderStartBtn()}
      {recommendsRecipes()}
    </div>
  );
}

Drinks.propTypes = {
  match: PropTypes.object,
}.isRequired;
