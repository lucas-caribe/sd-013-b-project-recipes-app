import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './context/ContextProvider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <ContextProvider>
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
        <SearchBar />
      </div>
    </ContextProvider>
  );
}

export default App;
