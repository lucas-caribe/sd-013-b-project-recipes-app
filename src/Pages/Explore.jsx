import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explore({ history }) {
  return (
    <div>
      <Header title="Explorar" />
      <button
        type="button"
        data-testid="explore-food"
        onClick={ () => { history.push('/explorar/comidas'); } }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => { history.push('/explorar/bebidas'); } }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
