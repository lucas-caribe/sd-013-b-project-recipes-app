import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

export default function TitleDetails({ recipeData }) {
  const { pathname } = useLocation();
  const [page] = pathname.split('/').slice(1);

  switch (page) {
  case 'comidas':
    return (
      <div>
        <img src={ recipeData.strMealThumb } alt={ recipeData.strMeal } width="200px" />
        <h3>
          { recipeData.strMeal }
        </h3>
        <h6>
          { recipeData.strCategory }
        </h6>
      </div>
    );
  case 'bebidas':
    return (
      <div>
        <img src={ recipeData.strDrinkThumb } alt={ recipeData.strDrink } width="200px" />
        <h3>
          { recipeData.strDrink }
        </h3>
        <h6>
          { recipeData.strAlcoholic }
        </h6>
      </div>
    );
  default:
    return (<p>Page invalida</p>);
  }
}

TitleDetails.propTypes = {
  recipeData: PropTypes.object,
}.isRequired;
