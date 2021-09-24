import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer/index';

const Comidas = () => {
  const TWELVE = 12;
  const history = useHistory();
  const { location: { pathname } } = history;
  const mealsOrDrinks = useSelector(({ foods }) => foods.mealsOrDrinks);
  if (pathname === '/comidas' && Object.keys(mealsOrDrinks).length > 0) {
    const { meals } = mealsOrDrinks;
    return (
      <>
        <div>
          { meals.map((meal, index) => (
            index < TWELVE ? (
              <div key={ meal.idMeal } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ meal.strMealThumb }
                  alt={ meal.strMeal }
                  data-testid={ `${index}-card-img` }
                  width="150px"
                />
                <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
              </div>
            ) : ''
          ))}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      Faça uma pesquisa
      <Footer />
    </>
  );
};

export default Comidas;
