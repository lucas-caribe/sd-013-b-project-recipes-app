import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/all';
import { fetchMealRandom } from '../../services/fetchRandomItens';

const NUMBER_FOOD_CARD_MAIN = 12;

export default function MealsMainList() {
  const [MealsList, setMealsList] = useState([]);

  const setState = async () => {
    const response = await fetchMealRandom();
    setMealsList((prevState) => ([...prevState, response.meals[0]]));
  };

  const fetchRandoMeal = useCallback(
    () => {
      for (let index = 0; index < NUMBER_FOOD_CARD_MAIN; index += 1) {
        setState();
      }
    }, [],
  );

  useEffect(() => {
    fetchRandoMeal();
  }, [fetchRandoMeal]);

  return (
    <div>
      <ul className="main-conteiner-list">
        {
          MealsList.length === NUMBER_FOOD_CARD_MAIN ? (
            MealsList.map(({ idMeal, strMealThumb, strMeal }, index) => (
              <li
                key={ idMeal }
                data-testid={ `${index}-recipe-card` }
                className="main-card"
              >
                <img
                  src={ strMealThumb }
                  alt={ strMeal }
                  data-testid={ `${index}-card-img` }
                  className="main-card-image"
                />
                <p
                  data-testid={ `${index}-card-name` }
                  className="main-card-name"
                >
                  {strMeal}

                </p>
              </li>
            ))
          ) : <AiOutlineLoading3Quarters className="spinner-main" />
        }
      </ul>
    </div>
  );
}
