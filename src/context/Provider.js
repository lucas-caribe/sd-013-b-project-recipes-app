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

  const [profile, setProfile] = useState({
    user: {
      email: '',
    },
  });

  const handleSetProfile = (user) => {
    setProfile((prevState) => ({ ...prevState, user }));
  };

  const contextDefault = {
    showHeader,
    showSearchBar,
    showFooter,
    profile,
    showSearchHeaderIcon,
    titleName,
    filteredRecipes,
    handleSetProfile,
    setShowHeader,
    setShowSearchBar,
    setShowFooter,
    setShowSearchHeaderIcon,
    setTitleName,
    setFilteredRecipes,
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
