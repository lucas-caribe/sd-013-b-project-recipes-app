import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../../redux/reducers';



const renderWithRedux = (
  component,
  { initialState,
    Store = createStore(rootReducer,
      composeWithDevTools(applyMiddleware(thunk)), initialState) } = {},
) => ({
  ...render(<Provider store={ Store }>{component}</Provider>),
  Store,
});

export default renderWithRedux;
