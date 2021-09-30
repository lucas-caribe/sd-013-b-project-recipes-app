import { idDrinkAPI } from '../services/drinksAPI';
import { suggestionsAPI } from '../services/foodAPI';

export default function misc2({ identifier, setDrinkDetails, setMeals }) {
  async function getDrink(id) {
    const answer = await idDrinkAPI(id);
    return answer;
  }

  async function getSuggestions() {
    const answer = await suggestionsAPI();
    return answer;
  }

  getDrink(identifier)
    .then((drinkDet) => setDrinkDetails(drinkDet));
  getSuggestions()
    .then((suggestions) => setMeals(suggestions));
}
