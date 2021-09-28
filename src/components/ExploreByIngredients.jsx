import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setFilterTypeAndText } from '../redux/actions';

function ExploreByIngredients({ ingredients, type, SetFilterByIngrdients }) {
  const history = useHistory();

  const strIngredient = {
    meal: 'strIngredient',
    drink: 'strIngredient1',
  };

  const checkType = (ingredient) => {
    const types = {
      meal: `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`,
      drink: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`,
    };
    return types[type];
  };

  const handleClick = (text) => {
    const path = { meal: '/comidas', drink: '/bebidas' };
    SetFilterByIngrdients({
      text,
    });
    history.push(path[type]);
  };

  return (
    <>
      {ingredients.map((ingredient, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleClick(ingredient[strIngredient[type]]) }
        >
          <img
            src={ checkType(ingredient[strIngredient[type]]) }
            alt="Ingredient Icone"
            data-testid={ `${index}-card-img` }
          />
          <span
            data-testid={ `${index}-card-name` }
          >
            { ingredient[strIngredient[type]] }
          </span>
        </button>
      ))}
    </>
  );
}

ExploreByIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  SetFilterByIngrdients: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  SetFilterByIngrdients: (infos) => dispatch(setFilterTypeAndText(infos)),
});

export default connect(null, mapDispatchToProps)(ExploreByIngredients);
