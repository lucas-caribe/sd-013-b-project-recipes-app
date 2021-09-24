import React from 'react';
import { useHistory } from 'react-router';
import SearchBar from '../components/SearchBar';
import searchIcon from '../images/searchIcon.svg';

export default function Main() {
  const history = useHistory();
  return (
    <div>
      <h2>Main</h2>
      {/* { TEMP REMOVER} */}
      <button type="button" data-testid="search-top-btn">
        <object type="image/svg+xml" data={ searchIcon }>Pesquisa</object>
      </button>
      {/* { TEMP REMOVER} */}
      <SearchBar history={ history } />
    </div>
  );
}
