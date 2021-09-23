import React, { useCallback, useEffect, useState } from 'react';
import { fetchCocktailArray } from '../../services/fetchitens';
import MainList from '../mainList';

const NUMBER_FOOD_CARD_MAIN = 12;

export default function CocktailsMainList() {
  const [CockTailListState, setCockTailList] = useState([]);

  const setState = async (index) => {
    const response = await fetchCocktailArray();
    setCockTailList((prevState) => ([...prevState, response.drinks[index]]));
  };

  const fetchRandoCockTail = useCallback(
    () => {
      for (let index = 0; index < NUMBER_FOOD_CARD_MAIN; index += 1) {
        setState(index);
      }
    }, [],
  );

  useEffect(() => {
    fetchRandoCockTail();
  }, [fetchRandoCockTail]);

  return (
    <div>
      <MainList arrayForMap={ CockTailListState } limitArray={ NUMBER_FOOD_CARD_MAIN } />
    </div>
  );
}
