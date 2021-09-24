import { combineReducers } from 'redux';
import userInfo from './userInfo';
import filteredItens from './filterItens';

const rootReducer = combineReducers({
  userInfo,
  filteredItens,
});

export default rootReducer;
