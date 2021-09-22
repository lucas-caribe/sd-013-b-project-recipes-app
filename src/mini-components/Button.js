import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { dataTest, btnText } = this.props;
    return (
      <button data-testId={ dataTest } type="button">
        { btnText }
      </button>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};

export default Button;
