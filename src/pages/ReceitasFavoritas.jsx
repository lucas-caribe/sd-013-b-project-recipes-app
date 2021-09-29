import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonRecipesFavorites from '../components/buttonsRecipesFavorites';
import Header from '../components/header';

export default function ReceitasFavoritas() {
  const favoriteLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [LocalFavorite, setLocalFavorite] = useState(favoriteLocal || []);
  const [backupFilters] = useState(LocalFavorite);

  const handlerClickFilter = ({ target: { innerText } }) => {
    console.log(innerText);
    const objectLiteral = {
      All() {
        setLocalFavorite(backupFilters);
      },
      Food() {
        const filter = backupFilters.filter((recipe) => recipe.type === 'comida');
        setLocalFavorite(filter);
      },
      Drinks() {
        const filter = backupFilters.filter((recipe) => recipe.type === 'bebida');
        setLocalFavorite(filter);
      },
    };
    objectLiteral[innerText]();
  };

  return (
    <div>
      <Header titlePage="Receitas Favoritas" />
      <section>
        <button
          onClick={ handlerClickFilter }
          type="button"
          data-testid="filter-by-all-btn"
        >
          All

        </button>
        <button
          onClick={ handlerClickFilter }
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food

        </button>
        <button
          onClick={ handlerClickFilter }
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks

        </button>
      </section>
      <ul>
        {
          LocalFavorite.map((recipe, index) => (
            <li key={ index }>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipe.alcoholicOrNot}
              </p>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ recipe.image }
                  alt={ recipe.name }
                  style={ { width: '100px' } }
                />
              </Link>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
              </Link>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${recipe.area} - ${recipe.category}`}
              </p>
              <ButtonRecipesFavorites
                testeidShare={ `${index}-horizontal-share-btn` }
                testeidFavorite={ `${index}-horizontal-favorite-btn` }
                url={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
                id={ recipe.id }
                setLocalFavorite={ setLocalFavorite }
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}
