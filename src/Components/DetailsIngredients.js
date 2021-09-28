import React from 'react';
import PropTypes from 'prop-types';

const DetailsIngredients = (props) => {
  const { ingredients, measures, status } = props;

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
      console.log('inprogress');
      return (
        <ul>
          {ingredients.map((x, i) => {
            if (measures[i] !== null) {
              return (
                <li
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  style={ { listStyle: 'none' } }
                  key={ x }
                >
                  <input type="checkbox" />
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
                style={ { listStyle: 'none' } }
                key={ x }
              >
                {' '}
                <input type="checkbox" />
                {' '}
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
};

export default DetailsIngredients;
