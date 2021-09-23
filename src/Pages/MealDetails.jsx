import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';

export default function MealDetalis() {
  const { randomMeal } = useContext(RecipesContext);
  console.log(randomMeal);
  return (
    <div>
      1 - Decobrir como pegar o valor do id da rota
      2 - Descobrir qual é o endpoint da api ele me devolve uma receita por id.
      3 - Renderizar a receita.
      {/* <span>{ randomMeal.meals.strMealThumb }</span> */}
      Imagem = strMealThumb
      Tipo = strCategory
      Nome = strMeal
      Ingrediente em lista = strIngredient 1,2,3...20
      Quantidade do ingrediente em lista = strMeasure 1,2,3...20
      Instruções = strInstructions
      Video = strYoutube
      Recomendadas = Provavelmente requesitos a frente
      Btn iniciar receita = Link para paragina em producão
      id da receita = idMeal
    </div>
  );
}
