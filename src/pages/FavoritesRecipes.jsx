// Tela de receitas favoritas: requisitos 60 a 66;
import React, { useState } from 'react';
import ButtonFavorite from '../components/ButtonFavorite';

const STATE_FAVORITE = {
  buttonFilter: null,
};

function buttonChangeFilter(setState) {
  return (
    <>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: 'comida' })) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: 'bebida' })) }
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: null })) }
      >
        All
      </button>
    </>
  );
}

function itemFavorite(item, index) {
  const { id, type, area, category, alcoholicOrNot, name, image } = item;
  if (type === 'comida') {
    return (
      <div id={ id }>
        {/* Quando clicar na imagem, precisa encaminhar para o receita */}
        <img
          data-testid={ `${index}-horizontal-image` }
          width="100px"
          src={ image }
          alt={ name }
        />
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
        <p>{ area }</p>
        <ButtonFavorite id={ id } index={ index } />
      </div>
    );
  }
  return (
    <div id={ id }>
      <img
        data-testid={ `${index}-horizontal-image` }
        width="100px"
        src={ image }
        alt={ name }
      />
      <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
      <p>{ alcoholicOrNot }</p>
      <ButtonFavorite id={ id } index={ index } />
    </div>
  );
}

function FavoritesRecipes() {
  const [state, setState] = useState(STATE_FAVORITE);
  const { buttonFilter } = state;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // const favoriteRecipes = [{
  //   id: '52771',
  //   type: 'comida',
  //   area: 'Italian',
  //   category: 'Vegetarian',
  //   alcoholicOrNot: '',
  //   name: 'Spicy Arrabiata Penne',
  //   image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  // },
  // {
  //   id: '178319',
  //   type: 'bebida',
  //   area: '',
  //   category: 'Cocktail',
  //   alcoholicOrNot: 'Alcoholic',
  //   name: 'Aquamarine',
  //   image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  // }];

  if (!favoriteRecipes) { return (<h1> Não há favoritos</h1>); }

  if (buttonFilter === 'comida') {
    return (
      <>
        { buttonChangeFilter(setState) }
        {
          favoriteRecipes
            .filter((item) => (item.type === 'comida'))
            .map((item, index) => (
              <div key={ item.id }>
                { itemFavorite(item, index) }
              </div>
            ))
        }
      </>
    );
  }

  if (buttonFilter === 'bebida') {
    return (
      <>
        { buttonChangeFilter(setState) }
        {
          favoriteRecipes
            .filter((item) => (item.type === 'bebida'))
            .map((item, index) => (
              <div key={ index }>
                { itemFavorite(item, index) }
              </div>
            ))
        }
      </>
    );
  }

  return (
    <>
      { buttonChangeFilter(setState) }
      {
        favoriteRecipes.map((item, index) => (
          <div key={ item.id }>
            { itemFavorite(item, index) }
          </div>
        ))
      }
    </>
  );
}

export default FavoritesRecipes;
