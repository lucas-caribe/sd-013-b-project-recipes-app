import React from 'react';
import { loadProgressRecipeById, getPageArgs, saveProgress } from '../services/Service';

const fakeMeasure = 'kg';
const fakeIngVolume = `10${fakeMeasure}`;
const fakeIngList = [`ing1 - ${fakeIngVolume}`, `ing2 - ${fakeIngVolume}`];

export default function Recipes(props) {
  // this url must be: /comida.. or /bebida.. followed by '/id' and '/inProgress
  // getPageArgs separe these sessions in a args array
  // args = ['comidas', '123', 'inProgress']
  const args = getPageArgs(props);
  const loadedIngredientList = loadProgressRecipeById(args[0], args[1]);
  console.log(loadedIngredientList);

  function saveIngredient() {
    saveProgress(args[0], args[1], fakeIngList);
  }

  const category = 'teste';
  const ingredientesCheckbox = 'teste';
  const instructions = 'teste';
  const index = '1';

  // function showCompleted(e) {}

  return (
    <div>
      <h2>Receitas</h2>
      <img data-testid="recipe-photo" src="" alt="Foto da Receita" />
      <h2 data-testid="recipe-title">Details</h2>
      <h3 data-testid="recipe-category">{category}</h3>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <li data-testid={ `${index}-ingredient-step` }>{ingredientesCheckbox}</li>
      <p data-testid="instructions">{instructions}</p>
      <button type="button" onClick={ saveIngredient }>Salvar Lista</button>
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );
}
