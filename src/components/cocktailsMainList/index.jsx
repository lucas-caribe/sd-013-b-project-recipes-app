import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchCocktailArray } from '../../services/fetchitens';
import MainList from '../mainList';

const THE_LAST_ONE = 12;

export default function CocktailsMainList() {
  const [CockTailListState, setCockTailList] = useState([]);
  const mainListInGlobal = useSelector((state) => state.itensFilter.results);
  const hasFilter = useSelector((state) => state.categoryFilter);
  const history = useHistory();

  const fetchRandoCockTail = useCallback(
    async () => {
      const { drinks } = await fetchCocktailArray();
      const drinksListArray = drinks.slice(0, THE_LAST_ONE);
      setCockTailList([...drinksListArray]);
    }, [],
  );

  useEffect(() => {
    fetchRandoCockTail();
  }, [fetchRandoCockTail]);

  useEffect(() => {
    if (mainListInGlobal.length > 0) {
      setCockTailList([]);
      const drinksListArray = mainListInGlobal.slice(0, THE_LAST_ONE);
      setCockTailList([...drinksListArray]);
    }
  }, [mainListInGlobal]);

  useEffect(() => {
    if (mainListInGlobal.length > 0) {
      setCockTailList([]);
      const mealsListArray = mainListInGlobal.slice(0, THE_LAST_ONE);
      setCockTailList([...mealsListArray]);
    }
  }, [mainListInGlobal]);

  useEffect(() => {
    if (mainListInGlobal && mainListInGlobal.length === 1 && !hasFilter) {
      history.push(`/comidas/${mainListInGlobal[0].idMeal}`);
    }
  }, [mainListInGlobal, history]);

  return (
    <div>
      <MainList arrayForMap={ CockTailListState } limitArray={ THE_LAST_ONE } />
    </div>
  );
}
