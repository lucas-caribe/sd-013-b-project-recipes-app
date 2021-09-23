import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchMealsArray } from '../../services/fetchitens';
import MainList from '../mainList';

const NUMBER_FOOD_CARD_MAIN = 12;

export default function MealsMainList() {
  const [MealsList, setMealsList] = useState([]);
  const mainListFilterByCategory = useSelector((state) => state.mainListFilter);

  const forEach = (arrayForLooop) => {
    arrayForLooop.forEach((meal, index) => {
      if (index < NUMBER_FOOD_CARD_MAIN) {
        setMealsList((prevState) => ([...prevState, meal]));
      }
    });
  };

  const fetchRandoMeal = useCallback(
    async () => {
      const { meals } = await fetchMealsArray();
      forEach(meals);
    }, [],
  );

  useEffect(() => {
    fetchRandoMeal();
  }, [fetchRandoMeal]);

  useEffect(() => {
    if (mainListFilterByCategory.length > 0) {
      setMealsList([]);
      forEach(mainListFilterByCategory);
    }
  }, [mainListFilterByCategory]);

  return (
    <div>
      <MainList arrayForMap={ MealsList } limitArray={ NUMBER_FOOD_CARD_MAIN } />
    </div>
  );
}
