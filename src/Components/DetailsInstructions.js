import React from 'react';
import PropTypes from 'prop-types';

const DetailsInstructions = (props) => {
  const { instructions } = props;
  return (
    <div>
      <h2>Instructions</h2>
      <p data-testid="instructions">
        {instructions}
      </p>
    </div>
  );
};

DetailsInstructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default DetailsInstructions;
