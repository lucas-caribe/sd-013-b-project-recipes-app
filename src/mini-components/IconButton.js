import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconButton extends Component {
  render() {
    const { btnImage, dataTest, btnFunction } = this.props;
    return (
      <button
        src={ btnImage }
        aria-label={ dataTest }
        data-testid={ dataTest }
        type="button"
        onClick={ btnFunction }
      >
        <img src={ btnImage } alt="profile-icon" />
      </button>
    );
  }
}

IconButton.propTypes = {
  btnImage: PropTypes.node.isRequired,
  dataTest: PropTypes.string.isRequired,
  btnFunction: PropTypes.func,
};

IconButton.defaultProps = {
  btnFunction: undefined,
};

export default IconButton;
