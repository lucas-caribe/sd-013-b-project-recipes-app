import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function ProgressRecipe({
  recipe: { ingredients, strInstructions, measure, id, type } }) {
  const history = useHistory();
  const [storageRecipe, setStorageRecipe] = useState({});

  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: {},
      cocktails: {},
      ...inProgressRecipes,
    }));
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))[type][id]) {
      setStorageRecipe(JSON.parse(localStorage.getItem('inProgressRecipes'))[type][id]);
    }
  }, [id, type]);

  useEffect(() => {
    const currentStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...currentStorage,
      [type]: {
        ...currentStorage[type],
        [id]: { ...storageRecipe },
      },
    }));
  }, [storageRecipe, id, type]);

  function handleFinishClick() {
    history.push('/receitas-feitas');
  }

  const handleCheckBox = ({ target: { id: elementID } }) => {
    if (storageRecipe[elementID]) {
      setStorageRecipe({
        ...storageRecipe,
        [elementID]: false,
      });
    } else {
      setStorageRecipe({
        ...storageRecipe,
        [elementID]: 'checked',
      });
    }
  };

  return (
    <>
      <section>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingrdient, index) => (
            <label
              key={ index }
              htmlFor={ `${index}-ingredient-step` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                id={ `${index}-ingredient-step` }
                type="checkbox"
                onChange={ handleCheckBox }
                defaultChecked={ storageRecipe[`${index}-ingredient-step`] }
              />
              { `${ingrdient} - ${measure[index]}` }
            </label>
          ))}
        </ul>
      </section>

      <section>
        <p data-testid="instructions">
          { strInstructions }
        </p>
      </section>

      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled
        onClick={ handleFinishClick }
      >
        Finish Recipe
      </button>
    </>
  );
}

ProgressRecipe.propTypes = {
  recipe: PropTypes.shape({
    strInstructions: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    measure: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default ProgressRecipe;
