import React from 'react';

import Header from './components/Header/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div>
      <Header />
      <div className="meals">
        Recipes App
      </div>
    </div>
  );
}

export default App;
