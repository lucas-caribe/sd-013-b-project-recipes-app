import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [showHeader, setShowHeader] = useState(false);
  const [titleName, setTitleName] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showSearchHeaderIcon, setShowSearchHeaderIcon] = useState(true);
  const [filteredItem, setFilteredItem] = useState([]);

  const contextDefault = {
    showHeader,
    showSearchBar,
    showFooter,
    showSearchHeaderIcon,
    titleName,
    filteredItem,
    setShowHeader,
    setShowSearchBar,
    setShowFooter,
    setShowSearchHeaderIcon,
    setTitleName,
    setFilteredItem,
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
