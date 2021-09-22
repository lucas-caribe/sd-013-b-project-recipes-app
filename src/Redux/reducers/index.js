import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import mealsToken from './mealsToken';
import cocktailsToken from './cocktailsToken';

const rootReducer = combineReducers({ search, user, mealsToken, cocktailsToken });

export default rootReducer;
