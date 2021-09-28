import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [showHeader, setShowHeader] = useState(false);
  const [titleName, setTitleName] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showSearchHeaderIcon, setShowSearchHeaderIcon] = useState(true);
  const [filteredRecipes, setFilteredRecipes] = useState('');
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [categoryFoodButtons, setCategoryFoodButtons] = useState([]);

  const contextDefault = {
    showHeader,
    showSearchBar,
    showFooter,
    showSearchHeaderIcon,
    titleName,
    filteredRecipes,
    foods,
    drinks,
    categoryFoodButtons,
    setShowHeader,
    setShowSearchBar,
    setShowFooter,
    setShowSearchHeaderIcon,
    setTitleName,
    setFilteredRecipes,
    setFoods,
    setDrinks,
    setCategoryFoodButtons,
  };

  return (
    <Context.Provider value={ contextDefault }>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
