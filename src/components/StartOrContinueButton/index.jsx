import React from 'react';
import PropTypes from 'prop-types';

function StartOrContinueButton({ onClick, buttonDescription }) {
  return (
    <button
      style={ { position: 'fixed', bottom: '0px' } }
      data-testid="start-recipe-btn"
      type="button"
      onClick={ onClick }
    >
      {buttonDescription}
    </button>
  );
}

StartOrContinueButton.defaultProps = {
  onClick: null,
};

StartOrContinueButton.propTypes = {
  onClick: PropTypes.func,
  buttonDescription: PropTypes.string.isRequired,
};

export default StartOrContinueButton;
