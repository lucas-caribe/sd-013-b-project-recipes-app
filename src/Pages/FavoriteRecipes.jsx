import React, { useState } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import handleLike from '../miscellaneous/misc3';

export default function FavoriteRecipes() {
  const favRec = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [local, setLocal] = useState();

  function srcSetter(obj) {
    if (!localStorage.getItem('favoriteRecipes')) return whiteHeartIcon;
    return JSON
      .parse(localStorage
        .getItem('favoriteRecipes'))
      .some((item) => item.id === obj.id) ? blackHeartIcon : whiteHeartIcon;
  }

  return (
    <>
      <Header title="Favorites" />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        <div>
          { favRec.map((rec, index) => {
            if (rec.type === 'comida') {
              return (
                <div key={ index }>
                  <h3 data-testid={ `${index}-horizontal-top-text` }>{`${rec.area} - ${rec.category}`}</h3>
                  <h2 data-testid={ `${index}-horizontal-name` }>{rec.name}</h2>
                  <img
                    src={ rec.image }
                    alt="rec"
                    data-testid={ `${index}-horizontal-image` }
                  />
                  <input
                    onClick={ () => console.log('clicou') }
                    data-testid={ `${index}-horizontal-share-btn` }
                    type="image"
                    alt="favorite"
                    src={ shareIcon }
                  />
                  <input
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    type="image"
                    alt="fav-btn"
                    src={ srcSetter(rec) }
                    onClick={ () => handleLike(rec, setLocal, local) }
                  />
                </div>
              );
            }
            return (<div key={ index }>
              <h3 data-testid={ `${index}-horizontal-top-text` }>{`${rec.alcoholicOrNot} - ${rec.category}`}</h3>
              <h2 data-testid={ `${index}-horizontal-name` }>{rec.name}</h2>
              <img
                src={ rec.image }
                alt="rec"
                data-testid={ `${index}-horizontal-image` }
              />
              <input
                onClick={ () => console.log('clicou') }
                data-testid={ `${index}-horizontal-share-btn` }
                type="image"
                alt="favorite"
                src={ shareIcon }
              />
              <input
                data-testid={ `${index}-horizontal-favorite-btn` }
                type="image"
                alt="fav-btn"
                src={ srcSetter(rec) }
                onClick={ () => handleLike(rec, setLocal, local) }
              />
            </div>);
          })}
        </div>
      </div>
    </>
  );
}
