import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

export default function ButtonShare({ datatestid }) {
  const [Copied, setCopied] = useState(false);
  const history = useHistory();
  const { location: { pathname } } = history;

  const handleClickShare = async () => {
    const newPath = pathname.split('/');
    const INDEX_FOR_REMOVE_IN_PROGRESS = 3;
    newPath.splice(INDEX_FOR_REMOVE_IN_PROGRESS, 1);
    const path = newPath.join('/');
    const href = `http://localhost:3000${path}`;
    copy(href);
    setCopied(true);
  };

  return (
    <>
      <img
        type="button"
        data-testid={ datatestid }
        onClick={ handleClickShare }
        id="Compatilhar"
        src={ shareIcon }
        alt="share button"
        role="presentation"
      />
      {Copied && <p>Link copiado!</p>}
    </>
  );
}

ButtonShare.propTypes = {
  datatestid: PropTypes.string.isRequired,
};
