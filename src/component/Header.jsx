import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

export default function Header() {
  const [showFilters, setShowFilters] = useState(false);
  const { pathname } = useLocation(); // Component em uma Pagina busca histórico
  const history = useHistory();

  function renderFilters() {
    return (
      <input type="text" data-testid="search-input" />

    );
  }

  function renderInMain(title) {
    return (
      <div>
        <input
          type="image"
          alt="profile"
          data-testid="profile-top-btn"
          onClick={ () => history.push('/perfil') }
          src={ profileIcon }
        />
        <h1 data-testid="page-title">{ title }</h1>
        { (title === 'Comidas' || title === 'Bebidas' || title === 'Explorar Origem')
          ? (
            <input
              type="image"
              alt="searchIcon"
              data-testid="search-top-btn"
              onClick={ () => setShowFilters(!showFilters) }
              src={ searchIcon }
            />)
          : <div /> }
      </div>
    );
  }

  function handleOnLoad() {
    switch (pathname) {
    case '/comidas':
      return renderInMain('Comidas');
    case '/bebidas':
      return renderInMain('Bebidas');
    case '/explorar':
      return renderInMain('Explorar');
    case '/explorar/comidas':
      return renderInMain('Explorar Comidas');
    case '/explorar/bebidas':
      return renderInMain('Explorar Bebidas');
    case '/explorar/comidas/ingredientes':
      return renderInMain('Explorar Ingredientes');
    case '/explorar/bebidas/ingredientes':
      return renderInMain('Explorar Ingredientes');
    case '/explorar/comidas/area':
      return renderInMain('Explorar Origem');
    case '/receitas-feitas':
      return renderInMain('Receitas Feitas');
    case '/receitas-favoritas':
      return renderInMain('Receitas Favoritas');
    case '/perfil':
      return renderInMain('Perfil');
    default:
      return <div>Header Not Found</div>;
    }
  }

  return (
    <div>
      {handleOnLoad()}
      {showFilters ? (renderFilters()) : (<div />)}
    </div>
  );
}
