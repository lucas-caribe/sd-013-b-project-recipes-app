import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function CompletedAndFavoriteCard({ recipe, isFavoriteRecipe, index }) {
  const {
    id, type, area, category, alcoholicOrNot, name, image, doneDate, tags,
  } = recipe;
  const [tag1, tag2] = tags;

  const [isCopied, setIsCopied] = useState(false);
  let clearMessage = null;
  const copy = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
    const TIME = 1500;
    clearMessage = setTimeout(() => setIsCopied(false), TIME);
  };

  useEffect(() => clearTimeout(clearMessage));

  const componentFood = () => (
    <div>
      <Link to={ `/comidas/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          width="75%"
        />
        <span data-testid={ `${index}-horizontal-name` }>{name}</span>
      </Link>
      <span data-testid={ `${index}-horizontal-top-text` }>
        {`${area} - ${category}`}
      </span>
      {isFavoriteRecipe
        ? (
          <img src={ blackHeartIcon } alt="Favorite Button" />
        )
        : (
          <>
            <span data-testid={ `${index}-horizontal-done-date` }>{doneDate}</span>
            <span data-testid={ `${index}-${tag1}-horizontal-tag` }>{tag1}</span>
            <span data-testid={ `${index}-${tag2}-horizontal-tag` }>{tag2}</span>
          </>
        )}
      <button type="button" onClick={ () => copy() }>
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share Button"
        />
      </button>
      <span>{isCopied ? 'Link copiado!' : ''}</span>
    </div>
  );

  const componetDrink = () => (
    <div>
      <Link to={ `/bebidas/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
        <span data-testid={ `${index}-horizontal-name` }>{name}</span>
      </Link>
      <span data-testid={ `${index}-horizontal-top-text` }>
        {alcoholicOrNot}
      </span>
      {isFavoriteRecipe
        ? (<img src={ blackHeartIcon } alt="Favorite Button" />)
        : (<span data-testid={ `${index}-horizontal-done-date` }>{doneDate}</span>)}
      <button type="button" onClick={ () => copy() }>
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share Button"
        />
      </button>
      <span>{isCopied ? 'Link copiado!' : ''}</span>
    </div>
  );
  return (
    <div>
      {type === 'comida' ? componentFood() : componetDrink()}
    </div>
  );
}

CompletedAndFavoriteCard.propTypes = {
  index: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf.isRequired,
  isFavoriteRecipe: PropTypes.bool.isRequired,
};
