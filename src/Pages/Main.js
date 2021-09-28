import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import FoodCards from '../Components/FoodCards';
import Details from './Details';
import LowerMenu from '../Components/LowerMenu';
import { fetchFilteredItems } from '../Redux/Actions';

const Main = ({ filterItens }) => {
  const { id, type, status } = useParams();
  const [showSearch, toggleShowSeatch] = useState(false);
  console.log(`type: ${type}\nid: ${id}\nstatus: ${status}`);
  let main;
  let showDetails = false;
  if (type === 'comidas') main = 'Comidas';
  else if (type === 'bebidas') main = 'Bebidas';
  let showHeaderAndFooter = true;

  if (id) {
    showHeaderAndFooter = false;
    showDetails = true;
  }
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

  const renderDetails = () => <Details type={ type } id={ id } status={ status } />;

  return (
    <div>
      {showHeaderAndFooter ? renderHeader() : null}
      {showSearch && <SearchBar type={ type } />}
      {!id && <FoodCards type={ type } />}
      {showDetails && renderDetails()}
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
