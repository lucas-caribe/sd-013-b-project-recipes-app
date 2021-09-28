import React from 'react';
import PropTypes from 'prop-types';
import removeFavoriteFromStorage from '../services/removeFavoriteFromStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RemoveFavBtn({ id, index }) {
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

RemoveFavBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
