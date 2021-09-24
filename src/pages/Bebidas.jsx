import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { fetchInitialDrinks } from '../services/fetchDrinks';
import FilteringDrinkButtons from '../components/FilteringDrinkButtons';

function Bebidas() {
  const { drinks, setDrinks } = useContext(RecipesContext);

  useEffect(() => {
    fetchInitialDrinks()
      .then((data) => setDrinks([...data]));
  }, [setDrinks]);

  // useEffect(() => {
  //   const request = async () => {
  //     const response = await fetchInitialDrinks();
  //     return response;
  //   };
  //   request().then((response) => setDrinks([...response]));
  // }, [setDrinks]);

  const renderDrinks = () => (
    drinks.map(({ strDrink, strDrinkThumb }, index) => (
      <div key={ strDrink }>
        <RecipeCard
          name={ strDrink }
          thumb={ strDrinkThumb }
          index={ index }
        />
      </div>
    ))
  );

  return (
    <div>
      <Header pageTitle="Bebidas" haveHeader="active" />
      <div>Bebidas</div>
      { drinks && renderDrinks() }
      <Footer />
      <FilteringDrinkButtons />
    </div>
  );
}

export default Bebidas;
