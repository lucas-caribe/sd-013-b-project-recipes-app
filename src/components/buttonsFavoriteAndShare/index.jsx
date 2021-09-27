import React, { useState } from 'react';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';

export default function ButtonsFavoriteAndShare() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [Copied, setCopied] = useState(false);

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
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleClickShare }
        id="Compatilhar"
      >
        Compartilhar
      </button>
      {Copied && <p>Link copiado!</p>}
      <button type="button" data-testid="favorite-btn">Favoritar</button>
    </>
  );
}
