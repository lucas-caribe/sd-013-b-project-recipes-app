import { combineReducers } from 'redux';
import userInfo from './userInfo';
import filteredItens from './filterItens';
import inProgressRecipes from './inProgressRecipes';
import favoriteRecipes from './favoriteRecipes';
import doneRecipes from './doneRecipes';

const rootReducer = combineReducers({
  userInfo,
  filteredItens,
  inProgressRecipes,
  favoriteRecipes,
  doneRecipes,
});

export default rootReducer;
