import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCocktailArray } from '../../services/fetchitens';
import MainList from '../mainList';

const NUMBER_FOOD_CARD_MAIN = 12;

export default function CocktailsMainList() {
  const [CockTailListState, setCockTailList] = useState([]);
  const mainListFilterByCategory = useSelector((state) => state.mainListFilter);

  const forEach = (arrayForLooop) => {
    arrayForLooop.forEach((meal, index) => {
      if (index < NUMBER_FOOD_CARD_MAIN) {
        setCockTailList((prevState) => ([...prevState, meal]));
      }
    });
  };

  const fetchRandoCockTail = useCallback(
    async () => {
      const { drinks } = await fetchCocktailArray();
      forEach(drinks);
    }, [],
  );

  useEffect(() => {
    fetchRandoCockTail();
  }, [fetchRandoCockTail]);

  useEffect(() => {
    if (mainListFilterByCategory.length > 0) {
      setCockTailList([]);
      forEach(mainListFilterByCategory);
    }
  }, [mainListFilterByCategory]);

  return (
    <div>
      <MainList arrayForMap={ CockTailListState } limitArray={ NUMBER_FOOD_CARD_MAIN } />
    </div>
  );
}
