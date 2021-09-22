import React, { useEffect, useState, useContext } from 'react';
import recipesContext from '../../context/recipesContext';

export default function RenderFood(id) {
  const { recipes } = useContext(recipesContext);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipe(data.meals[0]);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  const ingredients = [];
  const quantity = [];
  const max = 20;
  for (let index = 1; index <= max; index += 1) {
    const keyIngredient = `strIngredient${index}`;
    const keyMeasure = `strMeasure${index}`;

    if (recipe[keyIngredient] !== '') {
      ingredients.push(recipe[keyIngredient]);
    }
    if (recipe[keyMeasure] !== '') {
      quantity.push(recipe[keyMeasure]);
    }
  }
  const youtube = 32;
  return (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt="thumb"
        data-testid="recipe-photo"
        style={ { height: '150px' } }
      />
      <h2
        data-testid="recipe-title"
      >
        {recipe.strMeal}
      </h2>
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Fav
      </button>
      <h3
        data-testid="recipe-category"
      >
        { recipe.strCategory }
      </h3>
      {
        ingredients.map(
          (ingredient, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${ingredient} ${quantity[index] ? quantity[index] : ''}` }
            </p>
          ),
        )
      }
      <p
        data-testid="instructions"
      >
        { recipe.strInstructions }
      </p>
      <iframe
        src={ `https://www.youtube.com/embed/${recipe.strYoutube.slice(youtube)}` }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="video"
        data-testid="video"
      />
      {
        recipes.map(
          (receita, index) => (
            <h1
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              { receita.strMeal }
            </h1>
          ),
        )
      }
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar
      </button>
    </div>
  );
}
