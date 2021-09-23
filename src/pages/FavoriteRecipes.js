import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <div className="favorite-recipes">
      <Header />
      <div>
        <button type="button">
          All
        </button>

        <button type="button">
          Food
        </button>

        <button type="button">
          Drinks
        </button>
      </div>

      {/*
      Pegar as informações da receita que foi marcada como favorita e fazer um spread */}
    </div>
  );
}

export default FavoriteRecipes;
