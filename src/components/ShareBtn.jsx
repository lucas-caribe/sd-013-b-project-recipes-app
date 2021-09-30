import React, { useState } from 'react';
import ClipboardCopy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const THREE_SEC = 3000;

export default function ShareBtn() {
  const history = useHistory();
  const { pathname } = history.location;

  const [copy, setCopy] = useState(false);

  function copyUrl(e) {
    e.preventDefault();
    ClipboardCopy(`http://localhost:3000${pathname}`);
    setCopy(true);
    setTimeout(() => setCopy(false), THREE_SEC);
  }

  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyUrl }
      >
        <img src={ shareIcon } alt="Compatilhar" />
      </button>
      { copy ? <p>Link Copiado!</p> : '' }
    </div>
  );
}
