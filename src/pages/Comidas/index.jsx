import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useAuth } from '../../context';

function Comidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  return (
    <main>
      <Header pageTitle="Comidas" showSearchIcon />
      <Footer />
    </main>
  );
}

export default Comidas;
