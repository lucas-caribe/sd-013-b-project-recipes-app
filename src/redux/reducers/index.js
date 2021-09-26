import { combineReducers } from 'redux';
import reducerLogin from './reducerLogin';
import reducerHeader from './reducerHeader';
import reducerRecipe from './reducerRecipe';

const rootReducer = combineReducers({
  reducerLogin,
  reducerHeader,
  reducerRecipe,
});

export default rootReducer;
