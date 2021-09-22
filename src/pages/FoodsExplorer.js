import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FoodsExplorer() {
  const pageTitle = {
    pageName: 'Explorar Comidas',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Explorar Comidas
      <Footer />
    </div>
  );
}
