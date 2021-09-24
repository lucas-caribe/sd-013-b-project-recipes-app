import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useRecipeStatus from '../hook/useRecipeStatus';
import Header from '../components/detailPageComponents/Header';
import Recommendations from '../components/detailPageComponents/Recommendations';
import IngredientsAndMeasures from
  '../components/detailPageComponents/IngredientsAndMeasures';
import * as required from '../services/index';

function MealsDetails() {
  const { id } = useParams();
  const { push } = useHistory();

  const [recipe, setRecipe] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [doneRecipe, progressRecipe] = useRecipeStatus(id);
  console.log({ recommendation });
  const { fetchDrinksRecommendation,
    fetchMealDetails } = required;

  useEffect(() => {
    async function waitingForReturn() {
      setRecipe(await fetchMealDetails(id));
      setRecommendation(await fetchDrinksRecommendation());
    }
    waitingForReturn();
  }, [id, fetchDrinksRecommendation, fetchMealDetails]);

  const handleRedirect = () => {
    push(`/comidas/${id}/in-progress`);
  };

  if (recipe.length === 0) {
    return <h1> Carregando... </h1>;
  }
  return (
    <section>
      <Header
        thumb={ recipe.strMealThumb }
        title={ recipe.strMeal }
        category={ recipe.strCategory }
        recipe={ recipe }
        type="comida"
        id={ id }
      />
      <IngredientsAndMeasures
        recipe={ recipe }
      />
      <div>
        <h1>Instructions</h1>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </div>
      <div>
        <ReactPlayer
          url={ recipe.strYoutube }
          controls
          data-testid="video"
        />
      </div>
      <div>
        <Recommendations
          recommendation={ recommendation }
        />
      </div>
      <div>
        {!doneRecipe && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ handleRedirect }
          >
            { progressRecipe ? 'Continuar Receita' : 'Iniciar Receita' }
          </button>
        )}
      </div>
    </section>
  );
}

export default MealsDetails;
