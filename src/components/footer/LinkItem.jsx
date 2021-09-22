import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkItem({ objProps }) {
  const { testid, rota, sourceImg, singular } = objProps;

  return (
    <Link
      to={ rota }
      data-testid={ testid }
    >
      <img src={ sourceImg } alt={ singular } />
    </Link>
  );
}

LinkItem.propTypes = {
  objProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LinkItem;
