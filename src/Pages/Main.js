import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import FoodCards from '../Components/FoodCards';
import Details from './Details';

const Main = () => {
  const { id, type, status } = useParams();
  const [showSearch, toggleShowSeatch] = useState(false);
  console.log(`type: ${type}\nid: ${id}\nstatus: ${status}`);
  let main;
  let showHeader = true;
  let showDetails = false;
  if (type === 'comidas') main = 'Comidas';
  else if (type === 'bebidas') main = 'Bebidas';
  if (id) {
    showHeader = false;
    showDetails = true;
  }

  const toggleSearch = () => {
    toggleShowSeatch(!showSearch);
  };

  const renderHeader = () => (
    <div>
      <Header main={ main } left="profile" right="search" fright={ toggleSearch } />
    </div>);

  const renderDetails = () => <Details type={ type } id={ id } status={ status } />;

  return (
    <div>
      {showHeader ? renderHeader() : null}
      {showSearch && <SearchBar type={ type } />}
      <FoodCards type={ type } />

      {showDetails && renderDetails()}
    </div>
  );
};

export default Main;
