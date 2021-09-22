import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import Context from '../context/Context';

function Perfil({ history }) {
  // const { login } = useContext(Context);
  const [localEmail, setLocalEmail] = useState('');
  // function logedIn() {
  //   const email = () => setLocalEmail(JSON.parse(localStorage.getItem('user')));
  //   console.log(email);
  //   return email;
  // }
  useEffect(() => setLocalEmail(JSON.parse(localStorage.getItem('user')).email), []);

  const buttons = {
    doneBtn: () => history.push('/receitas-feitas'),
    favoriteBtn: () => history.push('receitas-favoritas'),
    leaveBtn: () => {
      localStorage.clear();
      history.push('/');
    },
  };

  return (
    <>
      <h5 data-testid="profile-email">{localEmail}</h5>
      <button type="button" data-testid="profile-done-btn" onClick={ buttons.doneBtn }>
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ buttons.favoriteBtn }
      >
        Receitas Favoritas
      </button>
      <button type="button" data-testid="profile-logout-btn" onClick={ buttons.leaveBtn }>
        Sair
      </button>
    </>
  );
}

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default Perfil;
