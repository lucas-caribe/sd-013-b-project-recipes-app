import React from 'react';
import { useHistory } from 'react-router';

const QUANTIDADE_CARDS = 6;

const getSixCards = (arr) => {
  if (arr !== undefined) {
    const sixCards = arr.slice(0, QUANTIDADE_CARDS);
    return sixCards;
  }
};

export const ChoiceButton = (inFButton) => {
  const { push } = useHistory();
  const { inprogressMeal, sendObjToGlobal, objIdReceita, objToReducer,
    id, tipo } = inFButton;

  const onClick = () => {
    sendObjToGlobal(objIdReceita, objToReducer);
    if (tipo === 'bebidas') {
      push(`/bebidas/${id}/in-progress`);
    }
    if (tipo === 'comidas') {
      push(`/comidas/${id}/in-progress`);
    }
  };
  if (!inprogressMeal) {
    return (
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => onClick() }
        className="buttonStart"
      >
        Continuar Receita
      </button>
    );
  }
  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      onClick={ () => onClick() }
      className="buttonStart"
    >
      Start
    </button>
  );
};

export default getSixCards;
