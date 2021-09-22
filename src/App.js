import React from 'react';
import './App.css';
import MealList from './components/MealList';
import CocktailList from './components/CocktailList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="meals">
      <SearchBar recipe="cocktail" />
      <CocktailList />
      <MealList />
    </div>
  );
}

export default App;
