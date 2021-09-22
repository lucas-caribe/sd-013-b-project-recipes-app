import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/perfil" component={ Profile } />
      <Route exact path="/comidas" component={ FoodPage } />
      <Route patch="/bebidas" component={ DrinkPage } />

    </Switch>
  );
}

export default App;
