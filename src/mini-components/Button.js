import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { dataTest, btnText, btnFunction } = this.props;
    return (
      <button onClick={ btnFunction } data-testId={ dataTest } type="button">
        { btnText }
      </button>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  btnFunction: PropTypes.func,
};

Button.defaultProps = {
  btnFunction: undefined,
};

export default Button;
