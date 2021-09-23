import { combineReducers } from 'redux';
import loginData from './loginData';
import searchReducer from './searchData';
import searchDetails from './searchDetails';

const rootReducer = combineReducers({
  loginData,
  searchReducer,
  searchDetails,
});

export default rootReducer;
