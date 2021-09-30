import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonsFavoriteRecipes from '../components/ButtonsFavoriteRecipes';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const [favoriteRecipes, setFavoriteRecipes] = useState(getFavoriteRecipes);
  const { setCopied, copied } = useContext(Context);

  const filterFavoriteRecipe = (filter) => {
    if (filter === 'All') {
      setFavoriteRecipes(getFavoriteRecipes);
    } else if (filter === 'Food') {
      const filterFood = getFavoriteRecipes.filter(({ type }) => type === 'comida');
      setFavoriteRecipes(filterFood);
    } else {
      const filterDrink = getFavoriteRecipes.filter(({ type }) => type === 'bebida');
      setFavoriteRecipes(filterDrink);
    }
  };

  const handleShareRecipe = (id, type) => {
    const location = window.location.href.split('receitas-favoritas', 1);
    navigator.clipboard.writeText(`${location}${type}s/${id}`);
    setCopied(true);
  };

  const removeFavoriteRecipe = (id) => {
    // const filterRecipe = getFavoriteRecipes.filter((favoriteRecipe) => favoriteRecipe.id !== id);
    const findFavoriteRecipe = getFavoriteRecipes
      .find((favoriteRecipe) => favoriteRecipe.id === id);
    const indexFavoriteRecipe = getFavoriteRecipes.indexOf(findFavoriteRecipe);
    // console.log(indexFavoriteRecipe);
    // console.log(getFavoriteRecipes[indexFavoriteRecipe]);
    // const favoriteRecipesResults = getFavoriteRecipes;
    delete getFavoriteRecipes[indexFavoriteRecipe];
    console.log(findFavoriteRecipe);
    console.log(getFavoriteRecipes);
    setFavoriteRecipes(getFavoriteRecipes);
  };

  if (getFavoriteRecipes) {
    return (
      <div>
        {copied && <h1>Link copiado!</h1>}
        <ButtonsFavoriteRecipes filterFavoriteRecipe={ filterFavoriteRecipe } />
        {
          favoriteRecipes
            .map(({ id, alcoholicOrNot, type, image, name, category, area }) => (
              type === 'comida' ? (
                <div key={ id }>
                  <div className="image-food">
                    <Link to={ `/comidas/${id}` }>
                      <img
                        src={ image }
                        alt="imagem da receita"
                      />
                    </Link>
                  </div>
                  <div className="infos-foods">
                    <Link to={ `/comidas/${id}` }>
                      <p>{name}</p>
                    </Link>
                    <p>{category}</p>
                    <p>{area}</p>
                    <button
                      type="button"
                      onClick={ () => handleShareRecipe(id, type) }
                    >
                      <img
                        src={ shareIcon }
                        alt="share icon"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={ () => removeFavoriteRecipe(id) }
                    >
                      <img
                        data-testid="favorite-btn"
                        src={ blackHeartIcon }
                        alt="blackHeart icon"
                        id={ id }
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div key={ id }>
                  <div className="image-drink">
                    <Link to={ `/bebidas/${id}` }>
                      <img
                        src={ image }
                        alt="imagem da receita"
                      />
                    </Link>
                  </div>
                  <div className="infos-drinks">
                    <Link to={ `/bebidas/${id}` }>
                      <p>{name}</p>
                    </Link>
                    <p>{alcoholicOrNot}</p>
                    <button
                      type="button"
                      onClick={ () => handleShareRecipe(id, type) }
                    >
                      <img
                        src={ shareIcon }
                        alt="share icon"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={ () => removeFavoriteRecipe(id) }
                    >
                      <img
                        data-testid="favorite-btn"
                        src={ blackHeartIcon }
                        alt="blackHeart icon"
                        id={ id }
                      />
                    </button>
                  </div>
                </div>
              )
            ))
        }
      </div>
    );
  }
  return (
    <h1>Não há receitas favoritas</h1>
  );
}

export default FavoriteRecipes;
