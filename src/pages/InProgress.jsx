import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { fetchCocktailDetails, fetchMealDetails } from '../services/fetchDetails';
import getIngredientsInArray from '../helpers/getIngredientsInArray';
import MealsInProgress from '../components/mealsInProgress';
import DrinksInProgress from '../components/drinksInProgress';

export default function InProgress() {
  const [Recipe, setRecipe] = useState({});
  const [Ingredients, setIngredient] = useState([]);
  const [IngredientsCompleted, setIngredientsCompleted] = useState([]);
  const [ButtonDislabedFinalizRecipe, setButtonDislabedFinalizRecipe] = useState(true);
  const history = useHistory();
  const { location: { pathname } } = history;
  const ID = pathname.split('/')[2]; // pegar o ID no path da URL

  const saveInLocalStorage = ({ target: { value, checked } }) => {
    if (!JSON.parse(localStorage.getItem(ID))) {
      localStorage.setItem(ID, JSON.stringify([]));
    }
    const ingredientInLocal = JSON.parse(localStorage.getItem(ID));

    let ingredientCompleted = { [ID]: [value] };

    if (checked) {
      ingredientCompleted = [...ingredientInLocal, value];
    }

    if (!checked) {
      const index = ingredientInLocal.indexOf(value);
      ingredientInLocal.splice(index, 1);
      ingredientCompleted = ingredientInLocal;
    }

    localStorage.setItem(ID, JSON.stringify(ingredientCompleted));
    setIngredientsCompleted(ingredientCompleted);
  };

  const renderIngredients = () => (
    <>
      {Ingredients.map((Ingredient, index) => (
        <label
          htmlFor={ Ingredient }
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            type="checkbox"
            value={ Ingredient }
            id={ Ingredient }
            name={ Ingredient }
            onClick={ saveInLocalStorage }
            checked={ IngredientsCompleted.includes(Ingredient) }
          />
          {Ingredient}
        </label>
      ))}
    </>
  );

  const handleClickFinaliz = () => {
    history.push('/receitas-feitas');
  };

  const fetchDetails = useCallback(
    async (id) => {
      if (pathname.includes('/comidas')) {
        const { meals } = await fetchMealDetails(id);
        setRecipe({ ...meals[0] });
      }
      if (pathname.includes('/bebidas')) {
        const { drinks } = await fetchCocktailDetails(id);
        setRecipe({ ...drinks[0] });
      }
    },
    [setRecipe, pathname],
  );

  useEffect(() => {
    const IngredientsCompletedInLocal = JSON.parse(localStorage.getItem(ID));
    setIngredientsCompleted(
      IngredientsCompletedInLocal || [],
    );
    fetchDetails(ID);
  }, [pathname, fetchDetails, ID]);

  useEffect(() => {
    const IngredientArray = getIngredientsInArray(Recipe);
    setIngredient(IngredientArray);
  }, [Recipe]);

  useEffect(() => {
    if (IngredientsCompleted.length === Ingredients.length) {
      setButtonDislabedFinalizRecipe(false);
    } else {
      setButtonDislabedFinalizRecipe(true);
    }
  }, [IngredientsCompleted, Ingredients]);

  return (
    <div>
      <h1>Em Progresso</h1>
      {
        pathname.includes('/comidas')
          ? (
            <MealsInProgress
              Recipe={ Recipe }
              ButtonDislabedFinalizRecipe={ ButtonDislabedFinalizRecipe }
              handleClickFinaliz={ handleClickFinaliz }
              renderIngredients={ renderIngredients }
            />
          )
          : (
            <DrinksInProgress
              Recipe={ Recipe }
              ButtonDislabedFinalizRecipe={ ButtonDislabedFinalizRecipe }
              handleClickFinaliz={ handleClickFinaliz }
              renderIngredients={ renderIngredients }
            />
          )
      }
    </div>
  );
}
