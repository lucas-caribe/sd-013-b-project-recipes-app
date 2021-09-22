// Tela de receitas favoritas: requisitos 60 a 66;
import React, { useState } from 'react';

const STATE_FAVORITE = {
  buttonFilter: null,
}

function itemFavorite(item) {
  const { type, area, category, alcoholicOrNot, name, image } = item;
  if (type === 'food') {
    return (
      <div>
        <img src={ image } alt={ name }/>
        <p>{ name }</p>
        <p>{ category }</p>
        <p>{ area }</p>
        <button type="button">compartilha</button>
        <button type="button">desfavoritar</button>
      </div>
    );
  } else {
    return (
      <div>
        <img src={ image } alt={ name }/>
        <p>{ name }</p>
        <p>{ alcoholicOrNot }</p>
        <button type="button">compartilha</button>
        <button type="button">desfavoritar</button>
      </div>
    );
  }
}

function FavoritesRecipes(item) {
  const [state, setState] = useState(STATE_FAVORITE)
  const { buttonFilter } = state;
  // const { favoriteRecipes } = localStorage;
  const favoriteRecipes = [{
    id: 1,
    type: 'food',
    category: 'Seafood',
    area: 'British',
    name: 'brigadeiro',
    alcoholicOrNot: 'Alcoholic',
    image: 'https://pbs.twimg.com/profile_images/741823527825866752/zQ6foqOT_400x400.jpg',
  },
  {
    id: 2,
    type: 'drink',
    category: 'Seafood',
    area: 'British',
    name: 'cerveja',
    alcoholicOrNot: 'Alcoholic',
    image: 'https://cdn.awsli.com.br/800x800/874/874479/produto/40947743/3746fbc716.jpg',
  }];

  if (!favoriteRecipes) { return ( <h1> Não há favoritos</h1> ); }
  console.log(buttonFilter);

  if (buttonFilter === 'food') {
    return (
      <div>
        <button type="button" onClick={ () => (setState({buttonFilter: 'food'})) }>Food</button>
        <button type="button" onClick={ () => (setState({buttonFilter: 'drink'})) }>Drinks</button>
        <button type="button" onClick={ () => (setState({buttonFilter: null})) }>All</button>
        { 
          favoriteRecipes
            .filter((item) => (item.type === 'food'))
            .map((item) => (
            <div key={ item.id }>
              { itemFavorite(item) }
            </div>
            ))
        }
     </div> 
    )
  }

  if (buttonFilter === 'drink') {
    return (
      <div>
        <button type="button" onClick={ () => (setState({buttonFilter: 'food'})) }>Food</button>
        <button type="button" onClick={ () => (setState({buttonFilter: 'drink'})) }>Drinks</button>
        <button type="button" onClick={ () => (setState({buttonFilter: null})) }>All</button>
        { 
          favoriteRecipes
            .filter((item) => (item.type === 'drink'))
            .map((item) => (
            <div key={ item.id }>
              { itemFavorite(item) }
            </div>
            ))
        }
     </div> 
    )
  }

  return (
    <div>
      <button type="button" onClick={ () => (setState({buttonFilter: 'food'})) }>Food</button>
      <button type="button" onClick={ () => (setState({buttonFilter: 'drink'})) }>Drinks</button>
      <button type="button" onClick={ () => (setState({buttonFilter: null})) }>All</button>
      { 
        favoriteRecipes.map((item) => (
        <div key={ item.id }>
          { itemFavorite(item) }
        </div>
        ))
      }
    </div> 
  );
  
}

export default FavoritesRecipes;
