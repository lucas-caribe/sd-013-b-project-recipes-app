import React from 'react';
import PropTypes from 'prop-types';

function IngredientCheckbox({
  ingredient,
  index,
  ingredientsChecked,
  setIngredientsChecked,
  checkAllCheckbox }) {
  const checkIngredient = (target) => {
    if (!target.checked) {
      setIngredientsChecked({
        ...ingredientsChecked,
        [target.id]: false,
      });
      target.parentElement.style.textDecoration = 'none';
      checkAllCheckbox();
    } else {
      setIngredientsChecked({
        ...ingredientsChecked,
        [target.id]: true,
      });
      target.parentElement.style.textDecoration = 'line-through';
      checkAllCheckbox();
    }
  };

  return (
    <div data-testid={ `${index}-ingredient-step` }>
      <label htmlFor={ `${index}-ingredient-step` }>
        <input
          className="ingredient-checkbox"
          id={ `${index}-ingredient-step` }
          type="checkbox"
          name="ingredients"
          checked={ ingredientsChecked
            ? (/true/i).test(ingredientsChecked[`${index}-ingredient-step`]) : false }
          onChange={ (e) => checkIngredient(e.target) }
        />
        {ingredient}
      </label>
    </div>
  );
}

IngredientCheckbox.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ingredientsChecked: PropTypes.objectOf(PropTypes.any).isRequired,
  setIngredientsChecked: PropTypes.func.isRequired,
  checkAllCheckbox: PropTypes.func.isRequired,
};

export default IngredientCheckbox;
