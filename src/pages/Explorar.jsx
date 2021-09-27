import React from 'react';
import Explore from '../components/explorar/Explore';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Explorar() {
  return (
    <div>
      <Header titlePage="Explorar" />
      <Explore />
      <Footer />
    </div>
  );
}
