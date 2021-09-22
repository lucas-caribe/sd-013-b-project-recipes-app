// Tela de explorar: Requisitos 67 a 69
import React from 'react';
import { useHistory } from 'react-router';

function Explorer() {
  const history = useHistory();
  return (
    <div>
      <button
        type="button"
        data-testid="explore-food"
        onClick={ () => history.push('/explorar/comidas') }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
    </div>
  );
}

export default Explorer;
