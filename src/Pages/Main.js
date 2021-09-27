import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import FoodCards from '../Components/FoodCards';
import LowerMenu from '../Components/LowerMenu';

const Main = () => {
  const { id, type, status } = useParams();
  const [showSearch, toggleShowSeatch] = useState(false);
  console.log(`type: ${type}\nid: ${id}\nstatus: ${status}`);
  let main;
  let showHeader = true;
  if (type === 'comidas') main = 'Comidas';
  else if (type === 'bebidas') main = 'Bebidas';
  if (id) showHeader = false;

  const toggleSearch = () => {
    toggleShowSeatch(!showSearch);
  };

  const renderHeader = () => (
    <div>
      <Header main={ main } left="profile" right="search" fright={ toggleSearch } />
    </div>);

  return (
    <div>
      {showHeader ? renderHeader() : null}
      {showSearch && <SearchBar type={ type } />}
      <FoodCards type={ type } />
      <LowerMenu />
    </div>
  );
};

export default Main;
