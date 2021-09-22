import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

export default function Header({ showSearch }) {
  const { currentPage } = useContext(Context);

  return (
    <header className="header">
      <Link to="/comidas">
        <div
          data-testid="profile-top-btn"
        >
          <img src={ profile } alt="profile" />
        </div>
      </Link>

      <div
        data-testid="page-title"
      >
        <h1>{ currentPage }</h1>
      </div>

      { showSearch && (
        <Link to="/comidas">
          <div
            data-testid="search-top-btn"
          >
            <img src={ search } alt="search" />
          </div>
        </Link>
      ) }

    </header>
  );
}

Header.propTypes = {
  showSearch: PropTypes.bool,
};

Header.defaultProps = {
  showSearch: false,
};

// - Não tem header na tela de login
// - O header tem os ícones corretos na tela de principal de receitas de comidas
// - O header tem os ícones corretos na tela de principal de receitas de bebidas
// - Não tem header na tela de detalhes de uma receita de comida
// - Não tem header na tela de detalhes de uma receita de bebida
// - Não tem header na tela de receita em processo de comida
// - Não tem header na tela de receita em processo de bebida
// - O header tem os ícones corretos na tela de explorar
// - O header tem os ícones corretos na tela de explorar comidas
// - O header tem os ícones corretos na tela de explorar bebidas
// - O header tem os ícones corretos na tela de explorar comidas por ingrediente
// - O header tem os ícones corretos na tela de explorar bebidas por ingrediente
// - O header tem os ícones corretos na tela de explorar comidas por local de origem
// - O header tem os ícones corretos na tela de perfil
// - O header tem os ícones corretos na tela de receitas feitas
// - O header tem os ícones corretos na tela de receitas favoritas
