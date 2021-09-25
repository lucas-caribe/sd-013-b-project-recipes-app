import React, { useEffect, useState } from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function FavButton() {
  const [fav, setFav] = useState(false);

  function handleFav() {
    if (fav === true) {
      return blackHeartIcon;
    }
    if (fav === false) {
      return whiteHeartIcon;
    }
  }

  useEffect(() => handleFav, [fav]);

  function handleClick() {
    setFav(!fav);
  }

  return (
    <button type="button" data-testid="favorite-btn" onClick={ handleClick }>
      <img src={ handleFav() } alt="fav" />
    </button>
  );
}
