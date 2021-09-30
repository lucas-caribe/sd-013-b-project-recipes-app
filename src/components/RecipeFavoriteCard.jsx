import React, { useContext } from 'react';
import Context from '../context/Context';

import RecipeFavoriteCardAll from './RecipeFavoriteCardAll';
import RecipeFavoriteCardFilter from './RecipeFavoriteCardFilter';

export default function RecipeFavoriteCard() {
  const {
    favoritesRecipes,
    filterFavoritesRecipes,
  } = useContext(Context);

  if (filterFavoritesRecipes.length !== 0) return (<RecipeFavoriteCardFilter />);

  if (favoritesRecipes.length !== 0) return (<RecipeFavoriteCardAll />);

  return (<p>Você não não favoritou nenhuma receita.</p>);
}
