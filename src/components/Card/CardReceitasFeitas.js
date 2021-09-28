import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

function CardReceitasFeitas({ index, recipe }) {
  const [mealOrDrink, setMealOrDrink] = useState(false);
  const copyLink = 'Link copiado!'
}
  useEffect(() => {
    if (recipe.alcoholicOrNot === '') {
      setMealOrDrink(true);
    }
  }, [recipe.alcoholicOrNot]);

  const ShareButton = ({ setCopied, ext }) => {
    const copyClipBoard = () => {
      const time = 3000;
      copy(`http://localhost:3000${ext}`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, time);
    };

  return (
    <div>
      <Link to={ mealOrDrink ? `/comidas/${recipe.id}` : `/bebidas/${recipe.id}` }>
      <img
          src={ recipe.image }
          alt="recipe"
          data-testid={ `${index}-horizontal-image` }
          className="recipe-card-img"
        />
      </Link>
      <div>
        {mealOrDrink ? (
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${recipe.area} - ${recipe.category}`}
          </p>
        ) : (
          <p data-testid={ `${index}-horizontal-top-text` }>{recipe.alcoholicOrNot}</p>
        ) }
        <Link to={ mealOrDrink ? `/comidas/${recipe.id}` : `/bebidas/${recipe.id}` }>
          <h2 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h2>
        </Link>
        <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>
        <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
        <button type="button" onClick={ copyClipBoard }>
          <img src={ shareIcon } data-testid={ `${index}-horizontal-share-btn` } alt="share icon" />
        </button>
        { copyClipBoard && copyLink }
        {recipe.tags.map((tagName, i) => (
          <p
            key={ i }
            data-testid={ `${index}-${tagName}-horizontal-tag` }
          >
            {tagName}
          </p>))}
      </div>
    </div>
  );
}

CardReceitasFeitas.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    id: PropTypes.string,
    tags: PropTypes.string,
    doneDate: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardReceitasFeitas;
