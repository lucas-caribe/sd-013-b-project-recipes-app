import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import checkFinishCondition from '../GlobalFuncs/finishButtonFuncs';

function ProgressRecipe({
  recipe: { ingredients, strInstructions, measure, id, type } }) {
  const history = useHistory();
  const [ingredientsStatus, setingredientsStatus] = useState({});
  const [finishButtonCondition, setFinishButtonCondition] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))[type][id]) {
      setingredientsStatus(JSON
        .parse(localStorage.getItem('inProgressRecipes'))[type][id]);
    }
  }, [id, type]);

  useEffect(() => {
    const currentStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...currentStorage,
      [type]: {
        ...currentStorage[type],
        [id]: { ...ingredientsStatus },
      },
    }));
    setFinishButtonCondition(checkFinishCondition(ingredientsStatus, ingredients));
  }, [ingredientsStatus, id, type, ingredients]);

  function handleFinishClick() {
    history.push('/receitas-feitas');
  }

  const handleCheckBox = ({ target: { id: elementID } }) => {
    if (ingredientsStatus[elementID]) {
      setingredientsStatus({
        ...ingredientsStatus,
        [elementID]: false,
      });
    } else {
      setingredientsStatus({
        ...ingredientsStatus,
        [elementID]: true,
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
                onClick={ handleCheckBox }
                defaultChecked={ ingredientsStatus[`${index}-ingredient-step`] }
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
        disabled={ finishButtonCondition }
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
