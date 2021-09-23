import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import perfilIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import Explorer from '../Explorer';

const Header = ({ searchRender, titlePage }) => {
  const [explorerRender, setExplorerRender] = useState(false);
  function title(mainTitlePage) {
    return (
      <div className="title-header">
        <p data-testid="page-title">{mainTitlePage}</p>
      </div>
    );
  }
  function perfil() {
    return (
      <div className="perfil-icon">
        <Link to="/perfil">
          <img
            src={ perfilIcon }
            alt="Perfil Icon"
            data-testid="profile-top-btn"
          />
        </Link>
      </div>
    );
  }

  

  function search(render) {
    return render ? (
      <div className="icon-Search">
        {/* <Link to="/explorar">
          <img src={ searchIcon } alt="Perfil Icon" data-testid="search-top-btn" />
        </Link> */}
        <button
          type="button"
          onClick={ () => setExplorerRender(!explorerRender) }
        >
          <img
            src={ searchIcon }
            alt="Perfil Icon"
            data-testid="search-top-btn"
          />
        </button>
      </div>
    ) : (
      <div className="icon-Search">{}</div>
    );
  }

  return (
    <div className="main-header">
      {perfil()}
      {title(titlePage)}
      {search(searchRender)}
      {searchBar(titlePage)}
    </div>
  );
};

Header.propTypes = {
  searchRender: PropTypes.bool,
  titlePage: PropTypes.string,
}.isRequired;

export default Header;
