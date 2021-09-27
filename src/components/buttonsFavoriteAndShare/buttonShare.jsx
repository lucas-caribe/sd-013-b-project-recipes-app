import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

export default function ButtonShare({ datatestid, url }) {
  const [Copied, setCopied] = useState(false);

  const handleClickShare = async () => {
    copy(url);
    setCopied(true);
  };

  return (
    <>
      <button
        type="button"
        data-testid={ datatestid }
        onClick={ handleClickShare }
        src={ shareIcon }
      >
        <img
          src={ shareIcon }
          alt="share button"
        />
      </button>
      {Copied && <p>Link copiado!</p>}
    </>
  );
}

ButtonShare.propTypes = {
  datatestid: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
