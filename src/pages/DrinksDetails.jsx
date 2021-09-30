import React, { useContext } from 'react';
import contextCreate from '../context/contextCreate';
import ShareBtn from '../components/ShareBtn';
import TitleDetails from '../components/TitleDetails';
import CardIngredients from '../components/CardIngredients';
import ingredients from '../services/ingredients';

export default function DrinksDetails() {
  const { recipeData } = useContext(contextCreate);
  return (
    <div>
      <TitleDetails recipeData={ recipeData } />
      <ShareBtn />
      <CardIngredients ingredients={ ingredients(recipeData) } />
      <div>
        <h4>Instruções</h4>
        <p>{ recipeData.strInstructions }</p>
      </div>
      <div>
        <h4>
          Recomendadas
        </h4>
      </div>
    </div>
  );
}
