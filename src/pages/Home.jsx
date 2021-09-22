// Tela principal de receitas: requisitos 25 a 32;

import React from 'react';
import Header from '../components/Header';
// import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.State = {

    };
  }

  render() {
    return (
      <div id="home">
        <Header />
        {/* <SearchBar /> */}
      </div>
    );
  }
}

export default Home;
