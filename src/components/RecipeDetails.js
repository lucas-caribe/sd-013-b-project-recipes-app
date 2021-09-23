import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Video from './Video';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFoodOrDrinkRecipe } from '../helpers/getFoodOrDrinkProperties';
import '../styles/card.css';

function RecipeDetails(props) {
  const [recipeFoodDetail] = useState([0]);
  const [recomendationCard] = useState([0]);
  const history = useHistory();
  // console.log(history);
  const info = getFoodOrDrinkRecipe(history.location.state);
  // console.log(info);

  return (
    <div className="details-page">
      {console.log(props)}
      <h1>Detalhes comidas</h1>
      <img
        className="card"
        data-testid="recipe-photo"
        alt="imagem da receita"
        src={ info.image }
      />
      <title
        data-testid="recipe-title"
      >
        {info.name}
      </title>
      <button
        type="button"
      >
        <img
          data-testid="share-btn"
          src={ shareIcon }
          alt="share Icon"
        />
      </button>
      <button
        type="button"
      >
        <img
          data-testid="favorite-btn"
          src={ whiteHeartIcon }
          alt="whiteHeart icon"
        />
      </button>
      <p
        data-testid="recipe-category"
      >
        Texto da categoria
      </p>
      <ul>
        {
          info.ingredients.map((value, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { value }
            </li>
          ))
          // recipeFoodDetail.map((value, index) => (
          //   <li
          //     key={ index }
          //     data-testid={ `${index}-ingredient-name-and-measure` }
          //   >
          //     { value }
          //   </li>
          // ))
        }
      </ul>
      <p
        data-testid="instructions"
      >
        Instruções:
        {info.instructions}
      </p>
      <div data-testid="video">
        <Video />
      </div>
      <ul>
        {
          recomendationCard.map((value, index) => (
            <li
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              { value }
            </li>
          ))
        }
      </ul>
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar a Receita
      </button>

    </div>
  );
}

export default RecipeDetails;
// requisitar api no navegador, procura qualquer id
