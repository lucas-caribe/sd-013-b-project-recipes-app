import { combineReducers } from 'redux';
import loginData from './loginData';
import searchReducer from './searchData';
import mainListFilter from './mainListFilter';

const rootReducer = combineReducers({
  loginData,
  searchReducer,
  mainListFilter,
});

export default rootReducer;
