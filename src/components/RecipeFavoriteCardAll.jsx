import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../context/Context';
import CopyToClipboardFunc from './CopyToClipboard';

import blackHeartIcon from '../images/blackHeartIcon.svg';

const MEAL = 'Meal';
const ROTA_COMIDAS = '/comidas/';
const ROTA_BEBIDAS = '/bebidas/';

export default function RecipeFavoriteCardAll() {
  const {
    linkCopied,
    favoritesRecipes,
    setFavoritesRecipes,
  } = useContext(Context);

  return (
    <div className="recipes-favorites">
      {
        linkCopied
          ? <div className="alert alert-success" role="alert"> Link copiado!</div>
          : null
      }

      {
        favoritesRecipes
          .map((favoriteRecipe, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              className="recipe-favorite-card"
            >
              <div className="recipe-card-img">
                <Link
                  to={
                    favoriteRecipe.type === MEAL
                      ? `${ROTA_COMIDAS}${favoriteRecipe.idMeal}`
                      : `${ROTA_BEBIDAS}${favoriteRecipe.idDrink}`
                  }
                >
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ favoriteRecipe[`str${favoriteRecipe.type}Thumb`] }
                    alt="thumbnail"
                  />
                </Link>
              </div>

              <div className="recipe-card-category">
                <div data-testid={ `${index}-horizontal-top-text` }>
                  {
                    favoriteRecipe.type === MEAL
                      ? `${favoriteRecipe.strArea} - ${favoriteRecipe.strCategory}`
                      : `${favoriteRecipe.strAlcoholic}`
                  }
                </div>
              </div>

              <div className="recipe-card-title">
                <Link
                  to={
                    favoriteRecipe.type === MEAL
                      ? `${ROTA_COMIDAS}${favoriteRecipe.idMeal}`
                      : `${ROTA_BEBIDAS}${favoriteRecipe.idDrink}`
                  }
                >
                  <h4 data-testid={ `${index}-horizontal-name` }>
                    {favoriteRecipe[`str${favoriteRecipe.type}`]}
                  </h4>
                </Link>
              </div>

              <div className="recipe-card-share-btn">
                <CopyToClipboardFunc recipe={ favoriteRecipe } index={ index } />
              </div>

              <div className="recipe-card-favorite-btn">
                <button
                  type="button"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  onClick={ () => {
                    // RECUPERAR DO LOCAL STORAGE O ARRAY DE RECEITAS FAVORITAS
                    const allRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'));
                    // REMOVER A RECEITA (DISLIKE) DO ARRAY
                    // allRecipe[index] = retorna o objeto na posição index que o map está
                    // allRecipe.indexOf() = localiza no array o índice desse objeto
                    // allRecipe.splice() = remove do array 1 posição, começando a partir desse índice
                    // ou seja, remove o índice localizado, remove então o objeto todo do índice
                    allRecipe.splice(allRecipe.indexOf(allRecipe[index]), 1);
                    // SOBRESCREVER O LOCAL STORAGE, ATUALIZANDO-O COM O ARRAY
                    localStorage.setItem('favoriteRecipes', JSON.stringify(allRecipe));
                    // E SETAR O ESTADO COM O ARRAY ATUALIZADO
                    setFavoritesRecipes(allRecipe);
                  } }
                >
                  <img src={ blackHeartIcon } alt="dislike" />
                </button>
              </div>

            </div>
          )) /** end map() */
      }
    </div> // end recipes-favorites
  ); // end return principal
}
