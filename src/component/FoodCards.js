import React, { useContext } from 'react';
import Context from '../context/Context';

function FoodCards() {
  const { foods } = useContext(Context);
  const DOZE = 12;

  return (
    <div>
      {foods.map((food, index) => (
        index < DOZE ? (
          <div data-testid={ `${index}-recipe-card` } key={ food.idMeal }>
            <div>
              <img
                data-testid={ `${index}-card-img` }
                style={ { width: '120px' } }
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
            </div>
            <div>
              <h5 data-testid={ `${index}-card-name` }>{ food.strMeal }</h5>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default FoodCards;
