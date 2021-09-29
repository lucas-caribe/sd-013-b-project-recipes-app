import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AreaFood } from '../services/foodAPI';

export default function ExploreFoodArea() {
  const [selected, setSelected] = useState([]);
  const [area, setSelectedArea] = useState('All');
  const [food, setFood] = useState([]);

  const MAX_NUMBER = 12;

  const handleChange = ({ target: { value } }) => {
    setSelectedArea(value);
  };

  useEffect(() => {
    const getArea = async () => {
      const foodArea = await AreaFood();
      setSelected(foodArea);
    };
    getArea();
  }, []);

  useEffect(() => {
    const getSelectedArea = async () => {
      if (area === 'All') {
        const allfood = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const result = await allfood.json();
        setFood(result.meals);
        return;
      }
      const areaf = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const result = await areaf.json();
      setFood(result.meals);
    };
    getSelectedArea();
  }, [area]);

  console.log(food);
  return (
    <div>
      <Header title="Explorar Origem" />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ handleChange }
      >
        <option data-testid="All-option">All</option>
        {selected.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea }>{strArea}</option>
        ))}
      </select>
      <div>
        {food.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ idMeal }
          >
            <Link to={ `/comidas/${idMeal}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ strMealThumb }
                alt={ strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{strMeal}</p>
            </Link>
          </div>))
          .slice(0, MAX_NUMBER)}
      </div>
      <Footer />
    </div>
  );
}
