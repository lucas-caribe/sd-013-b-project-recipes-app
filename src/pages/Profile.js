import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const getEmail = () => { //  Chama o email do LocalStorage
    if (localStorage.getItem('user')) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
  };

  const history = useHistory();

  const doneRecipes = () => {
    history.push('/receitas-feitas');
  };

  const favoriteRecipes = () => {
    history.push('/receitas-favoritas');
  };

  const loginPage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="recipes-page">
      <Header title="Perfil" />
      <h1 data-testid="profile-email">{ getEmail() }</h1>
      <button
        className="profile-done-btn"
        data-testid="profile-done-btn"
        type="button"
        buttonText="Receitas Feitas"
        onClick={ doneRecipes }
      >
        Receitas Feitas
      </button>
      <button
        className="profile-favorite-btn"
        data-testid="profile-favorite-btn"
        buttonText="Receitas Favoritas"
        type="button"
        onClick={ favoriteRecipes }
      >
        Receitas Favoritas
      </button>
      <button
        className="profile-logout-btn"
        data-testid="profile-logout-btn"
        buttonText="Sair"
        type="button"
        onClick={ loginPage }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}
export default Profile;
