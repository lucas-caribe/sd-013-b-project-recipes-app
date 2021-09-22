import React from 'react';
import './App.css';
import MealList from './components/MealList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="meals">
      <SearchBar />
      <MealList />
    </div>
  );
}

export default App;
