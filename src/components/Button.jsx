import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, id, dataTest, text, disabled }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      disabled={ disabled }
      id={ id }
      className={ id }
      data-testid={ dataTest }
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  dataTest: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
}.isRequired;

export default Button;
