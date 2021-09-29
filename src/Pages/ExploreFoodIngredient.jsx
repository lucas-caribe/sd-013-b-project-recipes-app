import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodContext from '../context/FoodContext';
import { filteredFoodAPI, newIngredientAPI } from '../services/foodAPI';

export default function ExploreFoodIngredient({ history }) {
  const [newFoodState, setNewFoodState] = useState([]);
  const { setBoolean, setFoodState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  useEffect(() => {
    const getNewFood = async () => {
      const foodResult = await newIngredientAPI();
      const filteredFood = foodResult.filter((ingredient, index) => index < MAX_NUMBER);
      setNewFoodState(filteredFood);
    };
    getNewFood();
  }, []);

  const filteredFood = async (ingredient) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const foodResult = await filteredFoodAPI(URL);
    setFoodState(foodResult);
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <div>
        {newFoodState.map(({ idIngredient, strIngredient }, index) => (
          <button
            type="button"
            data-testid={ `${index}-ingredient-card` }
            key={ idIngredient }
            onClick={ () => {
              filteredFood(strIngredient);
              setBoolean(true); history.push('/comidas');
            } }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              alt={ strIngredient }
            />
            <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
          </button>))
          .slice(0, MAX_NUMBER)}
      </div>
      <Footer />
    </div>
  );
}

ExploreFoodIngredient.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
