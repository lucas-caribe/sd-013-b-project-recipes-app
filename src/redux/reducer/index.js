import { combineReducers } from 'redux';
import loginData from './loginData';
import itensFilter from './itensFilter';
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  loginData,
  itensFilter,
  categoryFilter,
});

export default rootReducer;
