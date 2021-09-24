import React from 'react';
import PropTypes from 'prop-types';

function FavoriteButton({ colorBeforeClick, colorAfterClick }) {
  return (
    <button
      type="button"
      onClick={ () => document.querySelector('.favIcon')
        .setAttribute('src', `${colorAfterClick}`) }
    >
      <img
        className="favIcon"
        data-testid="favorite-btn"
        src={ `${colorBeforeClick}` }
        alt=""
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  colorBeforeClick: PropTypes.string.isRequired,
  colorAfterClick: PropTypes.string.isRequired,
};

export default FavoriteButton;
