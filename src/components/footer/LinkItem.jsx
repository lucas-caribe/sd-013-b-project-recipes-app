import React from 'react';
import PropTypes from 'prop-types';

function LinkItem({ objProps }) {
  const { testid, rota, sourceImg, singular } = objProps;

  return (
    <a
      data-testid={ testid }
      href={ rota }
      src={ sourceImg }
    >
      <img src={ sourceImg } alt={ singular } />
    </a>
  );
}

LinkItem.propTypes = {
  objProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LinkItem;
