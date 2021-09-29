import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MealsInProgress() {
  const [mealDetails, setMealDetails] = useState({});

  // id => API
  const id = useLocation().pathname.replace('/comidas/', '');

  // ref: Lucas Caribé
  const TWENTY = 20;

  const ingredientList = [];
  const fetchMealIdAPi = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json());
    setMealDetails(response.meals[0]);
  };

  useEffect(() => {
    fetchMealIdAPi();
  }, []);

  for (let index = 1; index <= TWENTY; index += 1) {
    if (mealDetails[`strIngredient${index}`] !== '') {
      ingredientList.push({
        [`ingredients${index}`]: mealDetails[`strIngredient${index}`],
        [`measure${index}`]: mealDetails[`strMeasure${index}`],
      });
    }
  }

  return (
    <>
      <img
        src={ mealDetails.strMealThumb }
        alt="img-Details"
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">{ mealDetails.strMeal }</p>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{mealDetails.strCategory}</p>
      { ingredientList.map((ingredient, index) => (
        <label key={ index } htmlFor={ `ingredient${index + 1}` }>
          <input
            type="checkbox"
            data-testid={ `${index}-ingredient-name-and-measure` }
            id={ `ingredient${index + 1}` }
          />
          {
            `${ingredient[`ingredients${index + 1}`]} 
                - ${ingredient[`measure${index + 1}`]}`
          }
        </label>
      ))}
      <h3>Instruções</h3>
      <p data-testid="instructions">{mealDetails.strInstructions}</p>
      <div>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startRecipeButton"
        >
          Iniciar Receita
        </button>
      </div>
    </>
  );
}
