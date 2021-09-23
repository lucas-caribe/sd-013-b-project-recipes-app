import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';
import { getFoodOrDrinkProperties } from '../helpers/getFoodOrDrinkProperties';

import '../styles/card.css';

function Card(food, i, category) {
  const history = useHistory();
  const recipeType = category === 'meals' ? 'comidas' : 'bebidas';
  const { name, image, id } = getFoodOrDrinkProperties(food, category);

  const handleClick = () => {
    history.push({
      pathname: `/${recipeType}/${id}`,
      state: food,
    });
  };
=======
import '../styles/cards.css';
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3

  return (
<<<<<<< HEAD
    <div
      key={ i }
      onClick={ () => handleClick() }
      data-testid={ `${i}-recipe-card` }
      className="card"
      tabIndex="-1"
      role="button"
      onKeyPress={ () => console.log(1) }
    >
      {/* {console.log(name)}
      {console.log(image)}
      {console.log(id)} */}
      <img data-testid={ `${i}-card-img` } src={ image } alt="ab" />
      <h4 data-testid={ `${i}-card-name` }>
=======
    <div data-testid={ `${id}-recipe-card` }>
      <img
        className="img-Card"
        data-testid={ `${id}-card-img` }
        src={ image }
        alt={ name }
      />
      <div data-testid={ `${id}-card-name` }>
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3
        {name}
      </h4>
    </div>
  );
}

export default Card;
