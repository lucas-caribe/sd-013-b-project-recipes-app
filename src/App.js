import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import {
  Login,
  Comidas,
  Bebidas,
  Explorar,
  ExplorarComidas,
  ExplorarComidasIngredientes as ExplComidasIng,
  ExplorarComidasArea,
  ExplorarBebidas,
  ExplorarBebidasIngredientes as ExplBebidasIng,
  Perfil,
  Feitas,
  Favoritas } from './pages/index';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/comidas/ingredientes" component={ ExplComidasIng } />
        <Route exact path="/explorar/comidas/area" component={ ExplorarComidasArea } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/explorar/bebidas/ingredientes" component={ ExplBebidasIng } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ Feitas } />
        <Route exact path="/receitas-favoritas" component={ Favoritas } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// Tela de login: /; !!
// Tela principal de receitas de comidas: /comidas; !!
// Tela de detalhes de uma receita de comida: /comidas/{id-da-receita};
// Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;

// Tela principal de receitas de bebidas: /bebidas; !!
// Tela de detalhes de uma receita de bebida: /bebidas/{id-da-receita};
// Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;

// Tela de explorar: /explorar; !!
// Tela de explorar comidas: /explorar/comidas;
// Tela de explorar comidas por ingrediente: /explorar/comidas/ingredientes;
// Tela de explorar comidas por local de origem: /explorar/comidas/area;
// Tela de explorar bebidas: /explorar/bebidas;
// Tela de explorar bebidas por ingrediente: /explorar/bebidas/ingredientes;

// Tela de perfil: /perfil; !!

// Tela de receitas feitas: /receitas-feitas; !!

// Tela de receitas favoritas: /receitas-favoritas !!
