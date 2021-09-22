import { combineReducers } from 'redux';
import loginData from './loginData';
import searchReducer from './searchData';

const rootReducer = combineReducers({
  loginData,
  searchReducer,
});

export default rootReducer;
