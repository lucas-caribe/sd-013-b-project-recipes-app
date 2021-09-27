import { combineReducers } from 'redux';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
  foods: foodReducer,
});

export default rootReducer;
