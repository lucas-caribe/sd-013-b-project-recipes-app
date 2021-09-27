import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Perfil = () => {
  const history = useHistory();
  // substito para mapStateToProps
  const email = useSelector(({ user }) => user.email);
  return (
    <>
      <Header title="Perfil" displaySearchBtn={ false } />
      <div>
        <p data-testid="profile-email">{ email }</p>
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
          onClick={ () => history.push('/') }
        >
          Sair
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
