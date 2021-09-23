import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchMealsArray } from '../../services/fetchitens';
import { setItensOfFetch } from '../../redux/action';
import MainList from '../mainList';

const THE_LAST_ONE = 12;

export default function MealsMainList() {
  const [MealsList, setMealsList] = useState([]);
  const mainListInGlobal = useSelector((state) => state.itensFilter.results);
  const hasFilter = useSelector((state) => state.categoryFilter);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchRandoMeal = useCallback(
    async () => {
      const { meals } = await fetchMealsArray();
      const mealsListArray = meals.slice(0, THE_LAST_ONE);
      setMealsList([...mealsListArray]);
    }, [],
  );

  useEffect(() => {
    fetchRandoMeal();
    return () => {
      dispatch(setItensOfFetch([]));
    };
  }, [fetchRandoMeal, dispatch]);

  useEffect(() => {
    if (mainListInGlobal.length > 0) {
      setMealsList([]);
      const mealsListArray = mainListInGlobal.slice(0, THE_LAST_ONE);
      setMealsList([...mealsListArray]);
    }
  }, [mainListInGlobal]);

  useEffect(() => {
    console.log(hasFilter);
    if (mainListInGlobal && mainListInGlobal.length === 1 && hasFilter) {
      history.push(`/comidas/${mainListInGlobal[0].idMeal}`);
    }
  }, [mainListInGlobal, history]);

  return (
    <div>
      <MainList arrayForMap={ MealsList } limitArray={ THE_LAST_ONE } />
    </div>
  );
}
