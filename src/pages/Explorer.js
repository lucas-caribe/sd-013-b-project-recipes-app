import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Explorer() {
  const pageTitle = {
    pageName: 'Explorar',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Explorar
      <Footer />
    </div>
  );
}
