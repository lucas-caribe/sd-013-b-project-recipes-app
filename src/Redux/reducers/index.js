import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import mealsToken from './mealsToken';
import cocktailsToken from './cocktailsToken';
import radioButton from './radioFilters';
import searchInput from './serchText';

const rootReducer = combineReducers({
  search,
  user,
  mealsToken,
  cocktailsToken,
  radioButton,
  searchInput,
});

export default rootReducer;
