import React, { useCallback, useEffect, useState } from 'react';
import { fetchMealsArray } from '../../services/fetchitens';
import MainList from '../mainList';

const NUMBER_FOOD_CARD_MAIN = 12;

export default function MealsMainList() {
  const [MealsList, setMealsList] = useState([]);

  const setState = async (index) => {
    const response = await fetchMealsArray();
    setMealsList((prevState) => ([...prevState, response.meals[index]]));
  };

  const fetchRandoMeal = useCallback(
    () => {
      for (let index = 0; index < NUMBER_FOOD_CARD_MAIN; index += 1) {
        setState(index);
      }
    }, [],
  );

  useEffect(() => {
    fetchRandoMeal();
  }, [fetchRandoMeal]);

  return (
    <div>
      <MainList arrayForMap={ MealsList } limitArray={ NUMBER_FOOD_CARD_MAIN } />
    </div>
  );
}
