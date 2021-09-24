import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';

function App() {
  return (
    <div className="meals">
      <span className="logo">App de Receitas</span>
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          {/* <Route exact path="/comidas" component={ comidas } /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
