import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import FoodCards from '../Components/FoodCards';
import LowerMenu from '../Components/LowerMenu';
import { fetchFilteredItems } from '../Redux/Actions';

const Main = ({ filterItens }) => {
  const { id, type, status } = useParams();
  const [showSearch, toggleShowSeatch] = useState(false);
  console.log(`type: ${type}\nid: ${id}\nstatus: ${status}`);
  let main;
  let showHeaderAndFooter = true;
  if (type === 'comidas') main = 'Comidas';
  else if (type === 'bebidas') main = 'Bebidas';
  if (id) showHeaderAndFooter = false;

  useEffect(() => {
    filterItens(type, 'name', '');
  }, [filterItens, type]);

  const toggleSearch = () => {
    toggleShowSeatch(!showSearch);
  };

  const renderHeader = () => (
    <div>
      <Header main={ main } left="profile" right="search" fright={ toggleSearch } />
    </div>);

  return (
    <div>
      {showHeaderAndFooter ? renderHeader() : null}
      {showSearch && <SearchBar type={ type } />}
      <FoodCards type={ type } />
      {showHeaderAndFooter ? <LowerMenu /> : null}

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterItens: (userType, userFilter, userInput) => {
    dispatch(fetchFilteredItems(userType, userFilter, userInput));
  },
});

Main.propTypes = {
  filterItens: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Main);
