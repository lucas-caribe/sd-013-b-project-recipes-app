import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile({ history }) {
  const [email, setEmail] = useState('');
  useEffect(() => {
    function profile() {
      const user = JSON.parse(localStorage.getItem('user'));
      setEmail(user.email);
    }
    profile();
  }, []);
  return (
    <div>
      <Header title="Perfil" />
      <div>
        <p data-testid="profile-email">{ email }</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => { history.push('/receitas-feitas'); } }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => { history.push('/receitas-favoritas'); } }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            history.push('/');
            localStorage.clear();
          } }
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
