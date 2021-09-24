import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg'; // import * as icons from '../images';
import profileIcon from '../images/profileIcon.svg';
// import { Switch, Route, Link } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation(); // Component em uma Pagina busca histórico
  console.log(pathname);

  function renderFilters() {
    return (
      <div>
        Filters
      </div>
    );
  }

  function renderInMain() {
    return (
      <div>
        <Link data-testid="profile-top-btn" id="baba" name="baba" to="/perfil">
          <object type="image/svg+xml" data={ profileIcon }>Profile</object>
        </Link>
        <h1 data-testid="page-title">Title</h1>
        <button type="button" data-testid="search-top-btn" onClick={ renderFilters }>
          <object type="image/svg+xml" data={ searchIcon }>Pesquisa</object>
        </button>
      </div>
    );
  }

  function handleOnLoad() {
    switch (pathname) {
    case '/comidas' || '/bebidas':
      return renderInMain();
    default:
      return renderInMain();
    }
  }

  return handleOnLoad();
}
