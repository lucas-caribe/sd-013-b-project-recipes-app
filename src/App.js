import React from 'react';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Início
import RecipesProvider from './Context/RecipesProvider';
import Login from './Pages/Login';

function App() {
  return (
    <RecipesProvider>
      <Login />
    </RecipesProvider>

  );
}

export default App;
