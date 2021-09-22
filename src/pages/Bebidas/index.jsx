import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useAuth } from '../../context';

function Bebidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  return (
    <main>
      <Header pageTitle="Bebidas" showSearchIcon />
      <Footer />
    </main>
  );
}

export default Bebidas;
