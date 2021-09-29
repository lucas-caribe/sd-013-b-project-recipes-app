import React from 'react';
import { arrayOf, objectOf, string } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

function Recommendations({ recommendation }) {
  return (
    <Carousel>
      {recommendation && recommendation.map((item, index) => (
        <Carousel.Item
          interval={ 1000 }
          className="recipe-cards"
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            src={ item.strMealThumb || item.strDrinkThumb }
            data-testid={ `${index}-card-img` }
            alt={ item.strMeal || item.strDrink }
          />
          <Carousel.Caption>
            <div>
              <span data-testid={ `${index}-card-name` }>
                { item.strMeal || item.strDrink }
              </span>
              <span>
                { item.strCategory || item.strAlcoholic }
              </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

Recommendations.propTypes = {
  recommendation: arrayOf(objectOf(string)).isRequired,
};

export default Recommendations;
