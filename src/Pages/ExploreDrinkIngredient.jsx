import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodContext from '../context/FoodContext';
import { filteredDrinkAPI, newIngredientDrinkAPI } from '../services/drinksAPI';

export default function ExploreDrinkIngredient({ history }) {
  const [newDrinkState, setNewDrinkState] = useState([]);
  const { setBooleanDrink, setDrinkState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  useEffect(() => {
    const getNewDrink = async () => {
      const drinkResult = await newIngredientDrinkAPI();
      const filteredDrink = drinkResult.filter((ingredient, index) => index < MAX_NUMBER);
      setNewDrinkState(filteredDrink);
    };
    getNewDrink();
  }, []);

  const filteredFood = async (ingredient) => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const drinkResult = await filteredDrinkAPI(URL);
    setDrinkState(drinkResult);
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <div>
        {newDrinkState.map(({ strIngredient1 }, index) => (
          <button
            type="button"
            data-testid={ `${index}-ingredient-card` }
            key={ index }
            onClick={ () => {
              filteredFood(strIngredient1);
              setBooleanDrink(true); history.push('/bebidas');
            } }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              alt={ strIngredient1 }
            />
            <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
          </button>))
          .slice(0, MAX_NUMBER)}
      </div>
      <Footer />
    </div>
  );
}

ExploreDrinkIngredient.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
