import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { dataTest, btnText, btnFunction } = this.props;
    return (
      <button onClick={ btnFunction } data-testid={ dataTest } type="button">
        { btnText }
      </button>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  btnFunction: PropTypes.func,
};

Button.defaultProps = {
  dataTest: undefined,
  btnFunction: undefined,
};

export default Button;
