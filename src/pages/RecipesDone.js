import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const doneRecipesMock = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

export default function RecipesDone() {
  const [doneRecipes, setDoneRecipes] = useState();
  const [noFilterDoneRecipes, setNoFilterDoneRecipes] = useState();
  // const [categoryType, setCategoryType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getLocalStorage() {
      setDoneRecipes(doneRecipesMock);
      setNoFilterDoneRecipes(doneRecipesMock);
      // const getItem = localStorage.getItem(doneRecipes);
    }
    getLocalStorage();
    setLoading(false);
  }, []);

  function handleClickFilter(typeFilter) {
    const recipeFilter = doneRecipesMock
      .filter((doneRecipe) => doneRecipe.type.includes(typeFilter));
    setDoneRecipes(recipeFilter);
    // setCategoryType(typeFilter);
    setLoading(false);
  }

  function handleTagOrAlcohol(category, index) {
    console.log(index);
    if (category.type.includes('comida')) {
      return category.tags.map((tag, i) => (
        <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>
      ));
    } return (
      <p
        key={ index }
        data-testid={ `${index}-horizontal-top-text` }
      >
        {category.alcoholicOrNot}
      </p>
    );
  }

  function handleCards() {
    return doneRecipes.map((done, index) => (
      <div key={ index }>
        <img
          src={ done.image }
          alt=""
          data-testid={ `${index}-horizontal-image` }
        />
        <h1 data-testid={ `${index}-horizontal-top-text` }>
          { done.type.includes('comida') && `${done.area} - ${done.category}`}
        </h1>
        <h2 data-testid={ `${index}-horizontal-name` }>{done.name}</h2>
        <h5 data-testid={ `${index}-horizontal-done-date` }>{done.doneDate}</h5>
        <h4>
          { handleTagOrAlcohol(done, index)}
        </h4>
        <input
          type="image"
          src={ shareIcon }
          data-testid={ `${index}-horizontal-share-btn` }
          alt=""
        />
      </div>
    ));
  }

  return (
    <div>
      <div>
        <Header />
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setDoneRecipes(noFilterDoneRecipes) }
        >
          ALL
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          value="comida"
          onClick={ ({ target }) => handleClickFilter(target.value) }
        >
          Food
        </button>
        <button
          type="button"
          value="bebida"
          data-testid="filter-by-drink-btn"
          onClick={ ({ target }) => handleClickFilter(target.value) }
        >
          Drinks
        </button>
      </div>
      {loading ? 'loading...' : handleCards()}
    </div>
  );
}
