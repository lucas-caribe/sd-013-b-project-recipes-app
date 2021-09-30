import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import './DetailsRecipe.css';

import { useRecipesContext } from '../context/Provider';

import { getDetails } from '../services';
import ListDetails from './ListDetails';
import RecipesRecommendation from '../components/RecipesRecommendation';
import CopyButton from '../components/CopyButton';
import FavoriteButton from '../components/FavoriteButton';

export default function DetailsRecipe() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();
  const type = pathname.includes('/comidas/') ? 'foods' : 'drinks';

  const { setRecipesApp, data } = useRecipesContext();

  // Executa a função "getItem" quando o componente é montado;

  useEffect(() => {
    const getItem = async (itemType, itemID) => {
      setRecipesApp((prevState) => ({ ...prevState, loading: true }));
      const item = await getDetails(itemType, itemID);
      const [details] = item.meals || item.drinks;

      // Salva os detalhes recebidos pela API no estado;
      setRecipeDetails(details);
      setRecipesApp((prevState) => ({ ...prevState, loading: false }));
    };
    getItem(type, id);
  }, [id, setRecipeDetails, type, setRecipesApp]);

  const itemKeys = Object.keys(recipeDetails);

  // Cria um array a partir dos ingredientes disponíveis;
  const ingredients = itemKeys
    .filter((key) => key.includes('strIngredient') && recipeDetails[key])
    .map((key) => recipeDetails[key]);

  // Cria um array a partir das medidas disponíveis;
  const measures = itemKeys
    .filter((key) => key.includes('strMeasure') && recipeDetails[key])
    .map((key) => recipeDetails[key]);

  if (data[type].length <= 0) return <p>Loading...</p>;

  return (
    <>
      <img
        src={ recipeDetails.strDrinkThumb || recipeDetails.strMealThumb }
        data-testid="recipe-photo"
        alt={ recipeDetails.strDrink }
        className="main-image"
      />
      <div className="details-container">
        <div className="details-title-container">
          <h1 data-testid="recipe-title">
            { recipeDetails.strDrink || recipeDetails.strMeal }
          </h1>
        </div>
        <div>
          <CopyButton pathname={ pathname } />
          <FavoriteButton />
        </div>
        <hr />
        <h2>Ingredients</h2>
        <ul className="details-info-container">
          <ListDetails
            ingredients={ ingredients }
            measures={ measures }
          />
        </ul>
        <hr />
        <h2>
          { 'Category: ' }
          <span data-testid="recipe-category">
            { recipeDetails.strAlcoholic || recipeDetails.strCategory }
          </span>
        </h2>
        <hr />
        <h2>Instructions</h2>
        <p
          data-testid="instructions"
          className="details-info-container"
        >
          { recipeDetails.strInstructions }
        </p>
        { recipeDetails.strDrink && <p>{ `Cup: ${recipeDetails.strGlass}` }</p> }
        { type === 'foods' && (
          <ReactPlayer
            url={ recipeDetails.strYoutube }
            controls
            width="70%"
            height="400px"
            data-testid="video"
          />
        ) }
        <button type="button" data-testid="start-recipe-btn" className="start-recipe-btn">
          Iniciar Receita
        </button>
        <RecipesRecommendation type={ type } />
        <hr />
      </div>
    </>
  );
}
