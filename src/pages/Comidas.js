import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Comidas() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [filterCategory, setFilterCategory] = useState([]);

  const recipeNumber = 12;

  const categoryNumber = 5;

  const pageTitle = 'Comidas';

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, []);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((data) => setCategories(data.meals));
  }, []);

  useEffect(() => {
    if (selectedCategory !== undefined) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setFilterCategory(data.meals));
    }
  }, [selectedCategory]);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  if (meals.length === 0) {
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
            .map((mealFiltered, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ mealFiltered.strMealThumb }
                  alt="meal"
                  width="100px"
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{mealFiltered.strMeal}</p>
                <p data-testid={ `${selectedCategory}-category-filter` } />
              </div>
            )).slice(0, recipeNumber))

          : meals
            .map((meal, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ meal.strMealThumb }
                  alt="meal"
                  width="100px"
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
              </div>
            )).slice(0, recipeNumber)}
      </div>
      <Footer />
    </div>
  );
}
