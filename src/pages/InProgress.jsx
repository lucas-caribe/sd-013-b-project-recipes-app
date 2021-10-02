import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import contextCreate from '../context/contextCreate';
import TitleDetails from '../components/TitleDetails';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';
import CardIngredients from '../components/CardIngredients';

import ingredients from '../services/ingredients';

export default function InProgress() {
  const { recipeData } = useContext(contextCreate);
  const history = useHistory();

  function handleFinish() {
    history.push('/receitas-feitas');
  }

  return (
    <div>
      <TitleDetails recipeData={ recipeData } />
      <div className="share-favorite-btn">
        <ShareBtn />
        <FavoriteBtn />
      </div>
      <CardIngredients ingredients={ ingredients(recipeData) } />
      <div>
        <h4>Instruções</h4>
        <p data-testid="instructions">{ recipeData.strInstructions }</p>
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ handleFinish }
      >
        Finalizar
      </button>
    </div>
  );
}
