// Tela principal de receitas: requisitos 25 a 32;
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

function Home({ search }) {
  console.log(search);
  return (
    <div>
      <Header />
      {search === true ? <SearchBar /> : null}
      <Footer />
    </div>
  );
}

Home.propTypes = {
  search: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps)(Home);
