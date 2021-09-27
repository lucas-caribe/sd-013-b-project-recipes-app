import React, { useContext } from 'react';
import Context from '../context/Context';
import RecipeDoneCardFilter from './RecipeDoneCardFilter';
import RecipeDoneCardAll from './RecipeDoneCardAll';

export default function RecipeDoneCard() {
  const { allRecipesDone, filterRecipeDone } = useContext(Context);

  // RETORNA COMPONENTE COM AS RECEITAS FILTRADAS
  if (filterRecipeDone.length !== 0) return (<RecipeDoneCardFilter />);

  // RETORNA COMPONENTE COM TODAS AS RECEITAS FEITAS
  if (allRecipesDone.length !== 0) return (<RecipeDoneCardAll />);

  return null;
} // end function
