import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function ExplorarBebidasIngredientes() {
  useCurrentPage('Explorar Bebidas por Ingredientes');
  const [ingredient, setIngredient] = useState([]);
  const twelve = 12;
  const history = useHistory();

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const data = await response.json();
      setIngredient(data.drinks);
    };
    fetchIngredients();
  }, []);

  const getDrinksFromIngredients = async (ingredientName) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
    const data = await response.json();
    return data;
  };

  return (
    <div className="page">
      <div className="ingredient-card">
        { ingredient.map((item, index) => (
          (index < twelve) && (
            <button
              type="button"
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              name={ item.strIngredient1 }
              onClick={ ({ target }) => {
                getDrinksFromIngredients(target.getAttribute('name'));
                return history.push('/bebidas');
              } }
            >
              <div className="card-image">
                <img
                  name={ item.strIngredient }
                  src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
                  data-testid={ `${index}-card-img` }
                  alt={ item.strIngredient1 }
                />
              </div>
              <div className="card-title">
                <p data-testid={ `${index}-card-name` }>
                  { item.strIngredient1 }
                </p>
              </div>
            </button>
          )
        )) }
      </div>
      <Footer />
    </div>
  );
}
