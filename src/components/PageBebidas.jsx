import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/mycontext';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageBebidas() {
  const { data } = useContext(myContext);
  const NUMBER = 12;
  return (
    <div>
      <Header />
      <br />
      { data.map((bebida, index) => {
        if (index < NUMBER) {
          return (
            <Link
              to={ {
                pathname: `/bebidas/${bebida.idDrink}`,
                state: { name: bebida.strDrink },
              } }
            >
              <ReceitaCard
                key={ bebida.idDrink }
                thumb={ bebida.strDrinkThumb }
                index={ index }
                name={ bebida.strDrink }
              />
            </Link>
          );
        }
        return false;
      }) }
    </div>
  );
}
