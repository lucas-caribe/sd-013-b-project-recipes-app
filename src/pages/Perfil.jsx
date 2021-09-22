// Tela de perfil: requisito 82 a 87;
import React from 'react';
import { useHistory } from 'react-router';

function Perfil() {
  const history = useHistory();
  return (
    <div className="wrapper">
      {/* Requisito 82 e 83 */}
      <p data-testid="profile-email">Email</p>
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
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Sair
      </button>
    </div>
  );
}

export default Perfil;
