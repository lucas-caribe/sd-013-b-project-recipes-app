import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editProgress as editProgressAction } from '../Redux/Actions';

const DetailsIngredients = (props) => {
  const { type, ingredients, measures, status, id,
    editProgress, actualIngredientsChange, actualIngredients,
  } = props;
  const MINUSONE = -1;

  const checkBoxClick = async (ingredient) => {
    actualIngredientsChange(ingredient);
    await editProgress(id, type, ingredient);
  };

  const renderIngredients = () => {
    if (status !== 'in-progress') {
      return (
        <div>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((x, i) => {
              if (measures[i] !== null) {
                return (
                  <li data-testid={ `${i}-ingredient-name-and-measure` } key={ x }>
                    {x}
                    {' '}
                    -
                    {' '}
                    {measures[i]}
                  </li>
                );
              }
              return (
                <li
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  key={ x }
                >
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } if (status === 'in-progress') {
      return (
        <ul>
          {ingredients.map((x, i) => {
            if (measures[i] !== null) {
              return (
                <li
                  data-testid={ `${i}-ingredient-step` }
                  style={ { listStyle: 'none',
                    textDecoration: actualIngredients.indexOf(i) !== MINUSONE
                      ? 'line-through' : 'none' } }
                  key={ x }
                >
                  <input
                    type="checkbox"
                    checked={ actualIngredients.indexOf(i) !== MINUSONE }
                    onClick={ () => checkBoxClick(i) }
                  />

                  {x}
                  {' '}
                  -
                  {' '}
                  {measures[i]}
                </li>
              );
            }
            return (
              <li
                data-testid={ `${i}-ingredient-step` }
                style={ { listStyle: 'none',
                  textDecoration: actualIngredients.indexOf(i) !== MINUSONE
                    ? 'line-through' : 'none' } }
                key={ x }
              >
                <input
                  type="checkbox"
                  checked={ actualIngredients.indexOf(i) !== MINUSONE }
                  onClick={ () => checkBoxClick(i) }
                />
                {x}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div>{renderIngredients()}</div>
  );
};

DetailsIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  editProgress: PropTypes.func.isRequired,
  actualIngredientsChange: PropTypes.func.isRequired,
  actualIngredients: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editProgress: (id, type, ingredient) => {
    dispatch(editProgressAction(id, type, ingredient));
  },
});

export default connect(null, mapDispatchToProps)(DetailsIngredients);
