import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { getMealAreas, getMealByArea } from '../services/fetchRadioComidas';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidasArea() {
  const QUANTIDADE_RECEITAS = 12;
  const [selectAreas, setSelectAreas] = useState([]);
  const [mealAllByArea, setMealAllByArea] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const pegarDozeElementos = () => mealAllByArea.slice(0, QUANTIDADE_RECEITAS);

  const getByArea = async () => {
    setSelectAreas(await getMealAreas(''));
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
            {selectAreas.map(({ strArea }, key) => (
              <option data-testid={ `${strArea}-option` } key={ key }>
                {strArea}
              </option>
            ))}
          </select>
        </label>
        {mealAllByArea
        && pegarDozeElementos().map(({ strMeal }, key) => <p key={ key }>{ strMeal }</p>)}
      </div>
      <Footer />
    </main>
  );
}
