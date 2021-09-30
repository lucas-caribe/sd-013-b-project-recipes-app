import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonsFavoriteRecipes from '../components/ButtonsFavoriteRecipes';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';

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
    const filterRecipe = getFavoriteRecipes
      .filter((favoriteRecipe) => favoriteRecipe.id !== id);
    if (getFavoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(filterRecipe));
    }
    setFavoriteRecipes(filterRecipe);
    console.log(getFavoriteRecipes);
  };

  if (getFavoriteRecipes.length > 0) {
    return (
      <div>
        <Header />
        {copied && <h1>Link copiado!</h1>}
        <ButtonsFavoriteRecipes filterFavoriteRecipe={ filterFavoriteRecipe } />
        {
          favoriteRecipes
            .map(({ id, alcoholicOrNot, type, image, name, category, area }, index) => (
              type === 'comida' ? (
                <div key={ id }>
                  <div className="image-food">
                    <Link to={ `/comidas/${id}` }>
                      <img
                        data-testid={ `${index}-horizontal-image` }
                        src={ image }
                        alt="imagem da receita"
                      />
                    </Link>
                  </div>
                  <div className="infos-foods">
                    <p
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      {category}
                    </p>
                    <p>{area}</p>
                    <Link to={ `/comidas/${id}` }>
                      <p
                        data-testid={ `${index}-horizontal-name` }
                      >
                        {name}
                      </p>
                    </Link>
                    <button
                      type="button"
                      data-testid={ `${index}-horizontal-share-btn` }
                      onClick={ () => handleShareRecipe(id, type) }
                    >
                      <img
                        src={ shareIcon }
                        alt="share icon"
                      />
                    </button>
                    <button
                      type="button"
                      data-testid={ `${index}0-horizontal-favorite-btn` }
                      onClick={ () => removeFavoriteRecipe(id) }
                    >
                      <img
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
                        data-testid={ `${index}-horizontal-image` }
                        src={ image }
                        alt="imagem da receita"
                      />
                    </Link>
                  </div>
                  <div className="infos-drinks">
                    <Link to={ `/bebidas/${id}` }>
                      <p
                        data-testid={ `${index}-horizontal-name` }
                      >
                        {name}
                      </p>
                    </Link>
                    <p>{alcoholicOrNot}</p>
                    <button
                      type="button"
                      data-testid={ `${index}-horizontal-share-btn` }
                      onClick={ () => handleShareRecipe(id, type) }
                    >
                      <img
                        src={ shareIcon }
                        alt="share icon"
                      />
                    </button>
                    <button
                      type="button"
                      data-testid={ `${index}0-horizontal-favorite-btn` }
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
    <div>
      <Header />
      <h1>Não há receitas favoritas</h1>
    </div>
  );
}

export default FavoriteRecipes;
