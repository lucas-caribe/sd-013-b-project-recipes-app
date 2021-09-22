import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Login from './Pages/Login';

function App() {
  return (
    <Provider store={ store }>
      <Login />
    </Provider>
  );
}

export default App;
