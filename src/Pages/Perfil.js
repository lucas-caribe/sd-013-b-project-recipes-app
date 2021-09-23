import React from 'react';
import Header from '../Components/Header';
import LowerMenu from '../Components/LowerMenu';

const Perfil = () => (
  <div>
    <Header main="Perfil" left="profile" right="none" />
    Perfil
    <footer>
      <LowerMenu />
    </footer>
  </div>
);

export default Perfil;
