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
    const RECEITAS_FAV_MOCK = [
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
    // if (localStorage.getItem('favoriteRecipes') === null) { [ISSO QUEBRA O TESTE]
    localStorage.setItem('favoriteRecipes', JSON.stringify(RECEITAS_FAV_MOCK));
    // }

    // POIS O CORRETO É:
    // 1.OBTER OS DADOS DO LOCALSTORAGE
    const recipesFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // 2.SETAR ESSES DADOS NO ESTADO, USANDO setFavoritesRecipes()
    setFavoritesRecipes(recipesFavorites);
    // NO ENTANTO ISSO VAI OCORRER TODA VEZ QUE A PÁGINA FOR CARREGADA, ISSO ATRAPALHA O TESTE DO
    // BOTÃO DISLIKE, POIS O CYPRESS RECARREGA A PÁGINA, LOGO O LOCAL STORAGE É SETADO AQUI DE NOVO
    // SUBSTITUINDO A LÓGICA CRIADA NO BOTÃO DISLIKE (QUE ESTÁ FUNCIONANDO)
    // COMO RESOLVER???
  }, [setFavoritesRecipes]);

  if (filterFavoritesRecipes.length !== 0) return (<RecipeFavoriteCardFilter />);

  if (favoritesRecipes.length !== 0) return (<RecipeFavoriteCardAll />);

  return (<p>Você não favoritou nenhuma receita.</p>);
}
