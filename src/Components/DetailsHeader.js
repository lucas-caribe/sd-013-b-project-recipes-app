import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const DetailsHeader = (props) => {
  const { imgSrc, title, subTitle } = props;
  return (
    <div>

      <img
        data-testid="recipe-photo"
        alt="example"
        src={ `${imgSrc}/preview` }
      />

      <div>
        <h2 data-testid="recipe-title">{title}</h2>
        <Icon icon="share" testid="share-btn" />
        <Icon icon="whiteheart" testid="favorite-btn" />
      </div>
      <h6 data-testid="recipe-category">{subTitle}</h6>

    </div>
  );
};

DetailsHeader.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default DetailsHeader;
