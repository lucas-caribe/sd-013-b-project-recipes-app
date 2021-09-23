import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

export default function Header({ showSearch }) {
  const {
    currentPage,
    showSearchBar,
    setShowSearchBar } = useContext(Context);

  return (
    <header className="header">
      <Link to="/perfil">
        <div
          data-testid="profile-top-btn"
          className="header-icon"
        >
          <img src={ profile } alt="profile" />
        </div>
      </Link>

      <div
        data-testid="page-title"
        className="header-title"
      >
        <h1>{ currentPage }</h1>
      </div>

      { showSearch && (
        <div
          data-testid="search-top-btn"
          className="header-icon"
          role="button"
          tabIndex="0"
          onClick={ () => (setShowSearchBar(!showSearchBar)) }
          onKeyPress={ () => (setShowSearchBar(!showSearchBar)) }
        >
          <img src={ search } alt="search" />
        </div>
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

// - x Não tem header na tela de login
// - x O header tem os ícones corretos na tela de principal de receitas de comidas
// - x O header tem os ícones corretos na tela de principal de receitas de bebidas
// - Não tem header na tela de detalhes de uma receita de comida
// - Não tem header na tela de detalhes de uma receita de bebida
// - Não tem header na tela de receita em processo de comida
// - Não tem header na tela de receita em processo de bebida
// - x O header tem os ícones corretos na tela de explorar
// - O header tem os ícones corretos na tela de explorar comidas
// - O header tem os ícones corretos na tela de explorar bebidas
// - O header tem os ícones corretos na tela de explorar comidas por ingrediente
// - O header tem os ícones corretos na tela de explorar bebidas por ingrediente
// - O header tem os ícones corretos na tela de explorar comidas por local de origem
// - x O header tem os ícones corretos na tela de perfil
// - x O header tem os ícones corretos na tela de receitas feitas
// - x O header tem os ícones corretos na tela de receitas favoritas
