import { combineReducers } from 'redux';
import loginData from './loginData';
import searchReducer from './searchData';
import detailsReducer from './searchDetails';

const rootReducer = combineReducers({
  loginData,
  searchReducer,
  detailsReducer,
});

export default rootReducer;
