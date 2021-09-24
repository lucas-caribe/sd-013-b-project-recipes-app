import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

export default function Foods() {
  function searchBar(type) {
    return explorerRender ? <SearchBar type={ type } /> : null;
  }

  return (
    <div>
      <Header searchRender titlePage="Comidas" />
    </div>
  );
}
