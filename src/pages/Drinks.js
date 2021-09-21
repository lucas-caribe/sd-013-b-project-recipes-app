import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };

  const history = useHistory();
  const { recipesState, redirect } = useContext(RecipeContext);
  const getDrinksId = recipesState.map((drink) => drink.idDrink);
  const limits = 12;

  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/bebidas/${getDrinksId}`) : (
        <div>
          {
            recipesState.map((drink, index) => (
              (index < limits) && (
                <div key={ index }>
                  <div data-testid={ `${index}-recipe-card` }>
                    <img
                      src={ drink.strDrinkThumb }
                      data-testid={ `${index}-card-img` }
                      alt={ drink.strDrink }
                    />
                  </div>
                  <div>
                    <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
                  </div>
                </div>
              )
            ))
          }
        </div>
      ) }
    </div>
  );
}
