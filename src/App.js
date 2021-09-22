import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Main from './pages/Main';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route path="/:type/:id?">
          <div className="mainfood" >
            <Main />
          </div>
          </Route>
      </Switch>
    </Provider>
  );
}

export default App;
