import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/ footer_spec';

function App() {
  return (
    <BrowserRouter>
      <div>
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
    </BrowserRouter>

  );
}

export default App;
