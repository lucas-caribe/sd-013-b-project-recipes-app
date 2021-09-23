import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import Magnifier from './Magnifier';

export default function Header({ title, image }) {
  const [ displayInput, setDisplayInput ] = useState(false);
  return (
    <div>
      <header>
        <Link to="/perfil">
          <Magnifier />
        </Link>
        <h1 data-testid="page-title">
          {title }
        </h1>
        { image }
        <input data-testid="search-input" style={ { display: `${displayInput ? 'inline' : 'none'}` } } />
      </header>
    </div>
  );
}

