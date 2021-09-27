import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/mycontext';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageComidas() {
  const { data } = useContext(myContext);
  const NUMBER = 12;
  return (
    <div>
      <Header />
      <br />
      { data.map((comida, index) => {
        if (index < NUMBER) {
          return (
            <Link
              to={ {
                pathname: `/comidas/${comida.idMeal}`,
                state: { name: comida.strMeal },
              } }
            >
              <ReceitaCard
                key={ comida.idMeal }
                thumb={ comida.strMealThumb }
                index={ index }
                name={ comida.strMeal }
              />
            </Link>
          );
        }
        return false;
      }) }
    </div>
  );
}
