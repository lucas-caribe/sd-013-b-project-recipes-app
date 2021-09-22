import { combineReducers } from 'redux';
import reducerLogin from './reducerLogin';
import reducerHeader from './reducerHeader';

const rootReducer = combineReducers({
  reducerLogin,
  reducerHeader,
});

export default rootReducer;
