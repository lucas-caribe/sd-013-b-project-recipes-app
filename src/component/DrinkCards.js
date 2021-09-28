import React, { useContext } from 'react';
import Context from '../context/Context';

function DrinkCards() {
  const { drinks } = useContext(Context);
  const DOZE = 12;

  return (
    <div>
      {drinks.map((drink, index) => (
        index < DOZE ? (
          <div data-testid={ `${index}-recipe-card` } key={ drink.idDrink }>
            <div>
              <img
                data-testid={ `${index}-card-img` }
                style={ { width: '120px' } }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
            </div>
            <div>
              <h5 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h5>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default DrinkCards;
