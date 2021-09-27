import React from 'react';

function DoneCard() {
  let doneRecipesStorage = localStorage.getItem('doneRecipes');
  doneRecipesStorage = JSON.parse(doneRecipesStorage);
  console.log(doneRecipesStorage);

  if (!doneRecipesStorage) {
    console.log('ok');
  }

  return (
    <div>
      cards
    </div>
  );
}

export default DoneCard;

/*
[{
    id: id-da-receita,
    type: comida-ou-bebida,
    area: area-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita,
    doneDate: quando-a-receita-foi-concluida,
    tags: array-de-tags-da-receita-ou-array-vazio
}]
*/
