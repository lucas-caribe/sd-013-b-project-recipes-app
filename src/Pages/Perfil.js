import React from 'react';
import Header from '../Components/Header';
import LowerMenu from '../Components/LowerMenu';

const Perfil = () => (
  <div>
    <Header main="Perfil" left="profile" right="none" />
    <h2>Perfil</h2>
    <footer>
      <LowerMenu />
    </footer>
  </div>
);

export default Perfil;
