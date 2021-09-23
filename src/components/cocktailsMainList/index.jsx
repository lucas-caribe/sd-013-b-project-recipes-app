import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setItensOfFetch } from '../../redux/action';
import { fetchCocktailArray } from '../../services/fetchItens';
import MainList from '../mainList';

const THE_LAST_ONE = 12;

export default function CocktailsMainList() {
  const [CockTailListState, setCockTailList] = useState([]);
  const mainListInGlobal = useSelector((state) => state.itensFilter.results);
  const hasFilter = useSelector((state) => state.categoryFilter);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchRandoCockTail = useCallback(
    async () => {
      const { drinks } = await fetchCocktailArray();
      const drinksListArray = drinks.slice(0, THE_LAST_ONE);
      setCockTailList([...drinksListArray]);
    }, [],
  );

  useEffect(() => {
    fetchRandoCockTail();
    return () => {
      dispatch(setItensOfFetch([]));
    };
  }, [dispatch, fetchRandoCockTail]);

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
    if (mainListInGlobal && mainListInGlobal.length === 1 && hasFilter) {
      history.push(`/bebidas/${mainListInGlobal[0].idDrink}`);
    }
  }, [mainListInGlobal, history]);

  return (
    <div>
      <MainList arrayForMap={ CockTailListState } limitArray={ THE_LAST_ONE } />
    </div>
  );
}
