import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Perfil() {
  let email = '';
  const userInLocal = JSON.parse(localStorage.getItem('user'));
  if (userInLocal) {
    email = userInLocal.email;
  }
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header titlePage="Perfil" />
      <p
        data-testid="profile-email"
      >
        {`Email: ${email}`}
      </p>
      {' '}
      <br />
      <Link to="receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      {' '}
      <br />
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      {' '}
      <br />
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}
