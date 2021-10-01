import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

import RecipeFavoriteCardAll from './RecipeFavoriteCardAll';
import RecipeFavoriteCardFilter from './RecipeFavoriteCardFilter';

export default function RecipeFavoriteCard() {
  const {
    favoritesRecipes,
    filterFavoritesRecipes,
    setFavoritesRecipes,
  } = useContext(Context);

  useEffect(() => {
    // CONST CRIADA PARA FINS DE TESTE. DEVE SER SETADA NO BOTÃO DE "FAVORITAR RECEITA"
    const RECEITAS_MOCK = [
      {
        idMeal: 52771,
        strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        strCategory: 'Vegetarian',
        strMeal: 'Spicy Arrabiata Penne',
        strTags: 'Pasta, Curry, Macarrão',
        strArea: 'Italian',
        type: 'Meal',
      },
      {
        idDrink: 178319,
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strDrink: 'Aquamarine',
        strTags: '',
        type: 'Drink',
      },
    ];
    // AS 'RECEITAS FAVORITAS' SÃO SETADAS NO LOCAL STORAGE NAS PÁGS: DETALHES E PROGRESSO
    // APAGAR ESSE SET ITEM, APÓS A IMPLEMENTAÇÃO DE FAVORITAR RECEITA ESTIVER CONCLUÍDA
    localStorage.setItem('favoriteRecipes', JSON.stringify(RECEITAS_MOCK));

    // POIS O CORRETO É:
    // 1.OBTER OS DADOS DO LOCALSTORAGE
    const recipesFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // 2.SETAR ESSES DADOS NO ESTADO, USANDO setFavoritesRecipes()
    setFavoritesRecipes(recipesFavorites);
  }, [setFavoritesRecipes]);

  if (filterFavoritesRecipes.length !== 0) return (<RecipeFavoriteCardFilter />);

  if (favoritesRecipes.length !== 0) return (<RecipeFavoriteCardAll />);

  return (<p>Você não favoritou nenhuma receita.</p>);
}
