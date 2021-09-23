import React from 'react';
import Header from '../../components/Header';

export default function Foods() {
  function searchBar(type) {
    return explorerRender ? <Explorer type={ type } /> : null;
  }

  return (
    <div>
      <Header searchRender titlePage="Comidas" />
    </div>
  );
}
