import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

import { fetchFullMealsList } from '../services/api';

function Meals() {
  const [mealList, setMealList] = useState([]);
  const MAX_ELEMENTS_PER_PAGE = 12;

  useEffect(() => {
    const callMealsFetch = async () => {
      const list = await fetchFullMealsList();
      setMealList(list);
    };
    callMealsFetch();
  }, []);

  const mapMeals = (list) => list.map(
    (food, index) => Card(food.strMeal, food.strMealThumb, index),
  ).slice(0, MAX_ELEMENTS_PER_PAGE);

  const readyToLoad = mealList.length > 0;

  if (readyToLoad) {
    return (
      <div className="meals-page">
        <Header />
        {console.log(mealList)}
        { mapMeals(mealList) }
        <Footer />
      </div>
    );
  }
  return (
    <div className="meals-page">
      <Header />
      <h2>Loading...</h2>
      <Footer />
    </div>
  );
}

export default Meals;
