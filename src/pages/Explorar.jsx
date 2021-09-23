import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  const history = useHistory();

  function getFood() {
    const redirect = '/explorar/comidas';
    history.push(redirect);
  }

  function getDrinks() {
    const redirect = '/explorar/bebidas';
    history.push(redirect);
  }
  return (
    <main className="main-content">
      <Header pageTitle="Explorar" searchButton={ false } />
      <Button
        text="Explorar Comidas"
        dataTest="explore-food"
        onClick={ getFood }
      />
      <Button
        text="Explorar Bebidas"
        dataTest="explore-drinks"
        onClick={ getDrinks }
      />
      <Footer />
    </main>
  );
}
