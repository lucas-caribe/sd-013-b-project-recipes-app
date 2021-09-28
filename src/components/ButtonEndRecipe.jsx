import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonEndRecipe({ disabled }) {
  const history = useHistory();
  function HandleClick() {
    history.push('/receitas-feitas');
  }
  return (
    <div>
      <button
        onClick={ HandleClick }
        type="button"
        disabled={ disabled }
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita
      </button>
    </div>
  );
}
