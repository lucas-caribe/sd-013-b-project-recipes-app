import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DrinksExplorer() {
  const pageTitle = {
    pageName: 'Explorar Bebidas',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Explorar Bebidas
      <Footer />
    </div>
  );
}
