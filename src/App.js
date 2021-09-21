import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
      <Footer />
    </div>
  );
}

export default App;
