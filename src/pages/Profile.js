import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const getEmail = () => {
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
        type="button"
        onClick={ doneRecipes }
      >
        Receitas Feitas
      </button>
      <button
        className="profile-favorite-btn"
        type="button"
        onClick={ favoriteRecipes }
      >
        Receitas Favoritas
      </button>
      <button
        className="profile-logout-btn"
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
