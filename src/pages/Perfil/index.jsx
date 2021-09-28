import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuth } from '../../context';

function Perfil({ history }) {
  const name = JSON.parse(localStorage.getItem('user'));
  const { email } = useAuth();

  function clearAndRedirect() {
    localStorage.clear();
    history.push('/');
  }

  const renderEmail = () => {
    if (name) {
      return <h1 data-testid="profile-email">{name.email}</h1>;
    } return <h1 data-testid="profile-email">{email}</h1>;
  };

  return (
    <main>
      <Header pageTitle="Perfil" showSearchIcon={ false } />
      <div>
        {renderEmail()}
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => clearAndRedirect() }
        >
          Sair
        </button>
      </div>
      <Footer />
    </main>
  );
}

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Perfil;
