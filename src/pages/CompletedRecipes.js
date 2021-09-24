import React from 'react';
import Header from '../components/Header';

export default function CompletedRecipes() {
  const pageTitle = {
    pageName: 'Receitas Feitas',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Receitas Feitas
    </div>
  );
}

// init commit
