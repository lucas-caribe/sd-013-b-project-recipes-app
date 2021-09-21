import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadialInput extends Component {
  render() {
    const { dataTest, radialName, radialId, radialText } = this.props;
    return (
      <label htmlFor={ radialId }>
        <input
          data-testid={ dataTest }
          id={ radialId }
          name={ radialName }
          type="radio"
        />
        { radialText }
      </label>
    );
  }
}

RadialInput.propTypes = {
  dataTest: PropTypes.string.isRequired,
  radialId: PropTypes.string.isRequired,
  radialName: PropTypes.string.isRequired,
  radialText: PropTypes.string.isRequired,
};

export default RadialInput;
