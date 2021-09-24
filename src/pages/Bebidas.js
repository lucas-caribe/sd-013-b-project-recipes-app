import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Bebidas() {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [filterCategory, setFilterCategory] = useState([]);

  const recipeNumber = 12;

  const categoryNumber = 5;

  const pageTitle = 'Comidas';

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks));
  }, []);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((data) => setCategories(data.drinks));
  }, []);

  useEffect(() => {
    if (selectedCategory !== undefined) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setFilterCategory(data.drinks));
    }
  }, [selectedCategory]);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  if (drinks.length === 0) {
    return <h6>Loading...</h6>;
  }

  return (
    <div>
      <Header value={ pageTitle } />
      <div>
        <button type="button" onClick={ () => handleClick(undefined) }>All</button>

        { categories
          .map((category, index) => (
            <button
              data-testid={ `${category.strCategory}-category-filter` }
              type="button"
              key={ index }
              onClick={ () => handleClick(category.strCategory) }
            >
              {category.strCategory}
            </button>
          )).slice(0, categoryNumber)}
      </div>

      <div>
        { selectedCategory !== undefined ? (
          filterCategory
            .map((drinkFiltered, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ drinkFiltered.strDrinkThumb }
                  alt="meal"
                  width="100px"
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{drinkFiltered.strDrink}</p>
                <p data-testid={ `${selectedCategory}-category-filter` } />
              </div>
            )).slice(0, recipeNumber))

          : drinks
            .map((drink, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ drink.strDrinkThumb }
                  alt="meal"
                  width="100px"
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
              </div>
            )).slice(0, recipeNumber)}
      </div>
      <Footer />
    </div>
  );
}