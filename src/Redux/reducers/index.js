import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import mealsToken from './mealsToken';
import cocktailsToken from './cocktailsToken';
import radioFilters from './radioFilters';

const rootReducer = combineReducers({
  search,
  user,
  mealsToken,
  cocktailsToken,
  radioFilters,
});

export default rootReducer;
