import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FoodCards({ itens, type }) {
  const result = itens[Object.keys(itens)[0]];
  const typeImg = type === 'comidas' ? 'strMealThumb' : 'strDrinkThumb';
  const typeAdress = type === 'comidas' ? 'strMeal' : 'strDrink';

  let newList = [];

  if (result) {
    const maxCardsNumber = 12;
    newList = result.reduce((acc, act, index) => {
      if (index < maxCardsNumber) {
        const newCard = (
          <div className="card" data-testid={ `${index}-recipe-card` } key={ index }>
            <img data-testid={ `${index}-card-img` } src={ act[typeImg] } alt="" />
            <h2 data-testid={ `${index}-card-name` }>{act[typeAdress]}</h2>
          </div>
        );
        return [...acc,
          (newCard),
        ];
      }
      return acc;
    }, []);
  }

  console.log(newList);

  return (
    <div className="food-cards">
      {newList}
    </div>
  );
}

FoodCards.propTypes = {
  type: PropTypes.string.isRequired,
  itens: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.object),
    drinks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = ({ filteredItens: { itens } }) => ({
  itens,
});

export default connect(mapStateToProps, null)(FoodCards);
