import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const pageTitle = {
    pageName: 'Perfil',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      FOODS
      <Footer />
    </div>
  );
}
