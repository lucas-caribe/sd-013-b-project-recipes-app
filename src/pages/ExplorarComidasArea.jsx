import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { getMealAreas, getMealByArea } from '../services/fetchRadioComidas';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardsComida from '../components/CardsComida';

export default function ExplorarComidasArea() {
  const QUANTIDADE_RECEITAS = 12;
  const [selectAreas, setSelectAreas] = useState([]);
  const [mealAllByArea, setMealAllByArea] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const pegarDozeElementos = () => mealAllByArea.slice(0, QUANTIDADE_RECEITAS);

  const getByArea = async () => {
    setSelectAreas(await getMealAreas('All'));
  };

  const mealByArea = async () => {
    setMealAllByArea(await getMealByArea(selectedArea));
  };

  useEffect(() => {
    getByArea();
  }, []);

  useEffect(() => {
    mealByArea();
  }, [selectedArea]);

  // const verificaLocation = async (input) => {
  //   switch (initialState) {
  //   case `${input}`:
  //     setInitialState(await getMealdCategory(input));
  //   }
  // };

  // goTo = useHistory();

  // function createOptions() {
  //   return (
  //     locations.map((currency, index) => (
  //       <option
  //         key={ index }
  //         value={ currency }
  //         data-testid={ `${results}-option` }
  //       >
  //         {currency}
  //       </option>
  //     ))
  //   );
  // }

  // if (initialState.length === 0) {
  //   return (
  //     <p>
  //       Loading...
  //     </p>
  //   );
  // }

  return selectAreas.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <main className="main-content">
      <Header pageTitle="Explorar Origem" />
      <div>
        <label htmlFor="area">
          <select
            name="area"
            data-testid="explore-by-area-dropdown"
            onChange={ (e) => (setSelectedArea(e.target.value)) }
          >
            <option>All</option>
            {selectAreas.map(({ strArea }, key) => (
              <option data-testid={ `${strArea}-option` } key={ key }>
                {strArea}
              </option>
            ))}
          </select>
        </label>
        {mealAllByArea
        && <CardsComida comidas={ pegarDozeElementos() } />}
      </div>
      <Footer />
    </main>
  );
}
