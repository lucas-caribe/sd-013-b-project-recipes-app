import React, { useEffect, useState } from 'react';
import imgProfile from '../images/profileIcon.svg';
import imgSearch from '../images/searchIcon.svg';
import SearchInputs from './SearchInputs';

function SearchBar() {
  const [apiState, setApiState] = useState({});

  const fetchAPI = (async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const getAPI = await fetch(URL)
      .then((response) => response.json())
      .then((response) => response);
    setApiState(getAPI);
  });

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <header>
        <img src={ imgProfile } alt="imagem_Perfil" />
        <h2>Comidas</h2>
        <img src={ imgSearch } alt="imagem_Buscar" />
      </header>
      <br />
      <SearchInputs />
    </div>
  );
}

export default SearchBar;
