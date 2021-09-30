import React, { useContext } from 'react';
// biblioteca responsável por copiar para a área de transferência o que estiver em sua propriedade "text"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { isNull } from 'lodash';

import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';

export default function CopyToClipboardFunc({ recipe, index }) {
  const {
    setLinkCopied,
  } = useContext(Context);

  return (
    <CopyToClipboard
      text={
        recipe.type === 'Meal'
          ? `http://localhost:3000/comidas/${recipe.idMeal}`
          : `http://localhost:3000/bebidas/${recipe.idDrink}`
      }
    >
      {/** a biblioteca é responsável pela cópia e
       * o botão é quem dispara o gatilho da cópia */}
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        src={ shareIcon }
        onClick={ () => setLinkCopied(true) }
      >
        <img src={ shareIcon } alt="share" />
      </button>
    </CopyToClipboard>
  ); // end return
}

CopyToClipboardFunc.propTypes = {
  recipe: PropTypes.shape(
    {
      idMeal: PropTypes.number,
      idDrink: PropTypes.number,
      strDrinkThumb: PropTypes.string,
      strCategory: PropTypes.string,
      strAlcoholic: PropTypes.string,
      strDrink: PropTypes.string,
      strTags: isNull,
      date: PropTypes.string,
      type: PropTypes.string,
    },
  ).isRequired,
  index: PropTypes.number.isRequired,
};
