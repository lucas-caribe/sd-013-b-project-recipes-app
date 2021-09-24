import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/index';

const Bebidas = () => {
  const TWELVE = 12;
  const history = useHistory();
  const { location: { pathname } } = history;
  const mealsOrDrinks = useSelector(({ foods }) => foods.mealsOrDrinks);
  if (pathname === '/bebidas' && Object.keys(mealsOrDrinks).length > 0) {
    const { drinks } = mealsOrDrinks;

    return (
      <>
        <div>
          { drinks.map((drink, index) => (
            index < TWELVE ? (
              <div key={ drink.idDrink } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                  width="150px"
                />
                <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
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
      Faça uma pesquisa.
      <Footer />
    </>
  );
};

export default Bebidas;
