// Tela principal de receitas: requisitos 25 a 32;
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { foodRequest, drinkRequest } from '../services/data';
import CardList from '../components/CardList';

function Home({ search }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    async function setFetch() {
      if (pathname === '/comidas') {
        setFoods(await foodRequest('search.php?s'));
      }

      if (pathname === '/bebidas') {
        setDrinks(await drinkRequest('search.php?s'));
      }
    }
    setFetch();
  }, [pathname]);

  if (foods === [] || drinks === []) {
    return (
      <div>
        <p> Loading </p>
      </div>
    );
  }

  return (
    <div>
      {
        (pathname === '/comidas')
          ? <Header setTitle="Comidas" /> : <Header setTitle="Bebidas" />
      }

      {search === true ? <SearchBar /> : null}

      {/* {(foods) ? <CardList object={ foods } /> : <CardList object={ drinks } /> } */}

      {' '}
      <CardList object={ foods } />

      {' '}
      <CardList object={ drinks } />
      {/* <Header setTitle="Comidas" /> */}

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
