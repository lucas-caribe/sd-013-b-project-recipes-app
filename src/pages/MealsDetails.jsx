import React, { useContext } from 'react';
import contextCreate from '../context/contextCreate';
import ShareBtn from '../components/ShareBtn';
import TitleDetails from '../components/TitleDetails';
import CardIngredients from '../components/CardIngredients';
import ingredients from '../services/ingredients';
import RecipeVideo from '../components/RecipeVideo';

export default function MealsDetails() {
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
      <RecipeVideo videoPath={ recipeData.strYoutube } />
      <div>
        <h4>
          Recomendadas
        </h4>
      </div>
    </div>
  );
}
