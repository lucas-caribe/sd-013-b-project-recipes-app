import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

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
      strTags: PropTypes.bool,
      date: PropTypes.string,
      type: PropTypes.string,
    },
  ).isRequired,
  index: PropTypes.number.isRequired,
};
