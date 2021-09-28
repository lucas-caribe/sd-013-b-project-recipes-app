import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DoneCard({ filteredRecipes }) {
  const [modal, setModal] = useState(false);

  const handleShareButton = ({ id, type }) => {
    const modalTime = 2000;
    setModal(true);
    setTimeout(() => setModal(false), modalTime);
    if (type === 'comida') return copy(`http://localhost:3000/comidas/${id}`);
    copy(`http://localhost:3000/bebidas/${id}`);
  };

  const getHorizontalTopText = (recipe) => {
    if (recipe.type === 'bebida') return recipe.alcoholicOrNot;
    return `${recipe.area} - ${recipe.category}`;
  };

  return (
    <div>
      { modal && <span>Link copiado!</span> }
      { filteredRecipes.map((recipe, index) => (
        <div key={ recipe.id }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt="imagem da receita"
              style={ { height: '150px' } }
            />
            <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
          </Link>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            { getHorizontalTopText(recipe) }
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
          <button
            type="button"
            onClick={ () => handleShareButton(recipe) }
          >
            <img
              src={ shareIcon }
              alt="botão para compartilhar"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>
          <div>
            {recipe.tags.map((tag) => (
              <span
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ tag }
              >
                { tag }
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoneCard;

DoneCard.propTypes = {
  filteredRecipes: PropTypes.arrayOf(PropTypes.any),
}.isRequired;
