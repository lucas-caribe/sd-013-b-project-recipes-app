import React from 'react';
import Header from '../components/header';

export default function Perfil() {
  const { email } = JSON.parse(localStorage.getItem('user'));

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
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      {' '}
      <br />
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      {' '}
      <br />
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
    </div>
  );
}
