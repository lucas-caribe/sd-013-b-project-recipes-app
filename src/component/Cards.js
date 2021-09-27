import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../context/Context';

export default function Cards() {
  const { filteredItem } = useContext(Context);
  const history = useHistory();
  const ForD = history.location.pathname;
  const DOZE = 12;
  console.log(filteredItem);

  return (
    <div>
      {
        filteredItem.map((item, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ ForD === '/comidas' ? item.strMealThumb : item.strDrinkThumb }
              alt="food_image"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              { ForD === '/comidas' ? item.strMeal : item.strDrink}
            </p>
          </div>
        )).splice(0, DOZE)
      }
    </div>
  );
}
