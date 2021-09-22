import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile({ history }) {
  const pageTitle = {
    pageName: 'Perfil',
    setIcon: false,
  };

  const email = JSON.parse(localStorage.getItem('user'));

  const outPage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header value={ pageTitle } />
      <div>
        <h4
          data-testid="profile-email"
        >
          { email.email }
        </h4>
      </div>
      Perfil
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

      {/* terminar o onClick dessa */}
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => outPage() }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
