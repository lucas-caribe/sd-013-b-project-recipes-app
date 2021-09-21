import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconButton extends Component {
  render() {
    const { btnImage, dataTest } = this.props;
    return (
      <button data-testId={ dataTest } type="button">
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
