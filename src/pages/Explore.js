import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() { // Função pagina explorar principal
  const history = useHistory();

  const exploreFoods = () => {
    history.push('/explorar/comidas');
  };

  const exploreDrinks = () => {
    history.push('/explorar/bebidas');
  };
  return (
    <div>
      <Header title="Explorar" />
      <div className="explore-page">
        <button
          data-testid="explore-food"
          buttonText="Explorar Comidas"
          type="button"
          onClick={ exploreFoods }
        >
          Explorar Comidas
        </button>
        <button
          data-testid="explore-drinks"
          buttonText="Explorar Bebidas"
          type="button"
          onClick={ exploreDrinks }
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explorer;
