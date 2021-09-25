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

function Home({ search, radioButton, searchInput }) {
  const [foods, setFoods] = useState('');
  const [drinks, setDrinks] = useState('');
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    const initialRequest = {
      '/comidas': async () => {
        setFoods(await foodRequest('search.php?s'));
      },
      '/bebidas': async () => {
        setDrinks(await drinkRequest('search.php?s'));
      },
    };
    initialRequest[pathname]();
  }, [pathname]);

  // if (foods === [] || drinks === []) {
  //   return (
  //     <div>
  //       <p> Loading </p>
  //     </div>
  //   );
  // }

  function handleSubmitButton() {
    const requestApi = {
      '/comidas': {
        ingredient: async (input) => {
          setFoods(await foodRequest(`filter.php?i=${input}`));
        },
        name: async (input) => {
          setFoods(await foodRequest(`search.php?s=${input}`));
        },
        'first-letter': async (input) => {
          if (input.length === 1) {
            setFoods(await foodRequest(`search.php?f=${input}`));
          } else {
            global.alert('Sua busca deve conter somente 1 (um) caracter');
          }
        },
      },
      '/bebidas': {
        ingredient: async (input) => {
          setDrinks(await drinkRequest(`filter.php?i=${input}`));
        },
        name: async (input) => {
          setDrinks(await drinkRequest(`search.php?s=${input}`));
        },
        'first-letter': async (input) => {
          if (input.length === 1) {
            setDrinks(await drinkRequest(`search.php?f=${input}`));
          } else {
            global.alert('Sua busca deve conter somente 1 (um) caracter');
          }
        },
      },
    };
    requestApi[pathname][radioButton](searchInput);
  }

  return (
    <div>
      {
        (pathname === '/comidas')
          ? <Header setTitle="Comidas" /> : <Header setTitle="Bebidas" />
      }

      {search === true && pathname === '/comidas'
        ? <SearchBar object={ foods } handleSubmitButton={ handleSubmitButton } />
        : null}

      {search === true && pathname === '/bebidas'
        ? <SearchBar object={ drinks } handleSubmitButton={ handleSubmitButton } />
        : null}

      {pathname === '/comidas' && pathname !== '/bebidas'
        ? <CardList object={ foods } /> : <CardList object={ drinks } />}

      <Footer />
    </div>
  );
}

Home.propTypes = {
  search: PropTypes.bool.isRequired,
  radioButton: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
  radioButton: state.radioButton,
  searchInput: state.searchInput,
});

export default connect(mapStateToProps)(Home);
