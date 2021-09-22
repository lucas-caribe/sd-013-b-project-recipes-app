import React from 'react';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import Footer from '../Components/Footer';

export default function ProfilePage() {
  return (
    <>
      <HeaderWithoutSearch />
      <h3 data-testid="page-title">Perfil</h3>
      <Footer />
    </>
  );
}
