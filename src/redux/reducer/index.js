import { combineReducers } from 'redux';
import loginData from './loginData';
import itensFilter from './itensFilter';
import detailsReducer from './searchDetails';
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  loginData,
  itensFilter,
  detailsReducer,
  categoryFilter,
});

export default rootReducer;
