import { idAPI } from '../services/foodAPI';
import { suggestionsAPI } from '../services/drinksAPI';

export default function misc1({ foodState, setMealDetails, setSuggestions, identifier }) {
  async function getRecipe(id) {
    const recipeDetails = await idAPI(id);
    return recipeDetails;
  }

  async function getSuggestions() {
    const answer = await suggestionsAPI();
    return answer;
  }

  if (foodState[0]) {
    const { idMeal } = foodState;
    getRecipe(idMeal)
      .then((mealDet) => setMealDetails(mealDet));
    getSuggestions()
      .then((answer) => setSuggestions(answer));
  } getRecipe(identifier)
    .then((mealDet) => setMealDetails(mealDet));
  getSuggestions()
    .then((answer) => setSuggestions(answer));
}
