import React from 'react';
import removeFavoriteFromStorage from '../services/removeFavoriteFromStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RemoveFavBtn({ id, index }) {
  let favFromLS = localStorage.getItem('favoriteRecipes');
  favFromLS = JSON.parse(favFromLS);

  function handleClick() {
    removeFavoriteFromStorage(id);
  }
  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
        data-testid={ `${index}-horizontal-favorite-btn` }
      >
        <img src={ blackHeartIcon } alt="remove favorite" />
      </button>
    </div>
  );
}

export default RemoveFavBtn;
