import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MealCard from './MealCard';
import { useHistory } from 'react-router';

export default function MealList() {
  const THE_LAST_ONE = 12;
  const mealsList = useSelector((state) => state.searchReducer.results.meals);
  const [state, setState] = useState({ loading: true, Top12: [] });
  const history = useHistory();

  function handleMeals() {
    return state.Top12.map((meal, index) => (
      <MealCard
        key={ meal.idMeal }
        thumb={ meal.strMealThumb }
        name={ meal.strMeal }
        index={ index }
      />
    ));
  }

  useEffect(() => {
    if (mealsList && mealsList.length === 1) {
      history.push(`/comidas/${mealsList[0].idMeal}`);
    }
    if (mealsList) {
      const Top12 = mealsList.slice(0, THE_LAST_ONE);
      setState({ loading: false, Top12 });
    }
  }, [mealsList]);

  return (
    <div className="card-list">
      { state.loading || handleMeals() }
    </div>
  );
}
