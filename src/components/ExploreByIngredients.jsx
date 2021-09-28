import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setFilterTypeAndText } from '../redux/actions';

function ExploreByIngredients({ ingredients, type, SetFilterByIngrdients }) {
  const history = useHistory();

  const checkType = (ingredient) => {
    const types = {
      meal: `https://www.themealdb.com/images/ingredients/${ingredient}-Medium.png`,
      drink: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`,
    };
    return types[type];
  };

  const handleClick = (text) => {
    const path = { meal: '/comidas', drink: '/bebidas' };
    SetFilterByIngrdients({
      text,
      type: 'ingrediente',
    });
    history.push(path[type]);
  };

  return (
    <>
      {ingredients.map(({ strIngredient }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleClick(strIngredient) }
        >
          <img
            src={ checkType(strIngredient) }
            alt="Ingredient Icone"
            data-testid={ `${index}-ingredient-img` }
          />
          <span data-testid={ `${index}-ingredient-name` }>{ strIngredient }</span>
        </button>
      ))}
    </>
  );
}

ExploreByIngredients.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  SetFilterByIngrdients: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  SetFilterByIngrdients: (infos) => dispatch(setFilterTypeAndText(infos)),
});

export default connect(null, mapDispatchToProps)(ExploreByIngredients);
