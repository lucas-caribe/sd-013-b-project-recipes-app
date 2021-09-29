import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchMealsByIngredients } from '../services/fetchMeals';

function MealIngredientsCard({ ingredients }) {
  const { setCurrentIngredient } = useContext(RecipesContext);
  const { push } = useHistory();

  const handleClick = (currentIngredient) => {
    setCurrentIngredient(currentIngredient);
    push('/comidas');
  };

  return (
    <div>
      { ingredients.map((ingredient, index) => (
        <div key={ index }>
          <button
            data-testid={ `${index}-ingredient-card` }
            type="button"
            onClick={ () => handleClick(ingredient.strIngredient) }
          >
            <h4 data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</h4>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              alt={ `imagem do ingrediente ${ingredient.strIngredient}` }
              style={ { height: '100px' } }
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default MealIngredientsCard;

MealIngredientsCard.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
