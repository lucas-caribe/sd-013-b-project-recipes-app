import React, { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';
import Context from './context/Context';

function App() {
  const { showHeader, showSearchBar, showFooter } = useContext(Context);

  return (
    <div>
      {showHeader ? <Header /> : null}
      {showSearchBar ? <SearchBar /> : null}
      <Routes />
      {showFooter ? <Footer /> : null}
    </div>
  );
}

export default App;
