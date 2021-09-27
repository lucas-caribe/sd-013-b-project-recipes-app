import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StartRecipeButton = (props) => {
  const { type, id } = props;

  return (
    <Link to={ `/${type}/${id}/in-progress` }>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        type="button"
      >
        Iniciar Receita

      </button>
    </Link>
  );
};

StartRecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StartRecipeButton;
