import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import MainFood from './pages/MainFood';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route path="/comidas">
          <div className="mainfood" >
            <MainFood />
          </div>
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
