import React, { useCallback, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { fetchCocktailRandom } from '../../services/fetchRandomItens';

const NUMBER_FOOD_CARD_MAIN = 12;

export default function CocktailsMainList() {
  const [CockTailListState, setCockTailList] = useState([]);

  const setState = async () => {
    const response = await fetchCocktailRandom();
    setCockTailList((prevState) => ([...prevState, response.drinks[0]]));
  };

  const fetchRandoCockTail = useCallback(
    () => {
      for (let index = 0; index < NUMBER_FOOD_CARD_MAIN; index += 1) {
        setState();
      }
    }, [],
  );

  useEffect(() => {
    fetchRandoCockTail();
  }, [fetchRandoCockTail]);

  return (
    <div>
      <ul className="main-conteiner-list">
        {
          CockTailListState.length === NUMBER_FOOD_CARD_MAIN ? (
            CockTailListState.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
              <li
                key={ idDrink }
                data-testid={ `${index}-recipe-card` }
                className="main-card"
              >
                <img
                  src={ strDrinkThumb }
                  alt={ strDrink }
                  data-testid={ `${index}-card-img` }
                  className="main-card-image"
                />
                <p
                  data-testid={ `${index}-card-name` }
                  className="main-card-name"
                >
                  {strDrink}

                </p>
              </li>
            ))
          ) : <Spinner animation="border" variant="primary" className="spinner-main" />
        }
      </ul>
    </div>
  );
}
