import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconButton extends Component {
  render() {
    const { btnImage, dataTest } = this.props;
    return (
      <button
        src={ btnImage }
        aria-label={ dataTest }
        data-testid={ dataTest }
        type="button"
      >
        <img src={ btnImage } alt="profile-icon" />
      </button>
    );
  }
}

IconButton.propTypes = {
  btnImage: PropTypes.node.isRequired,
  dataTest: PropTypes.string.isRequired,
};

export default IconButton;
