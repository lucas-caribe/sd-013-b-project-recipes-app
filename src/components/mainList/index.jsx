import React from 'react';
import { useHistory } from 'react-router';
import { AiOutlineLoading3Quarters } from 'react-icons/all';
import PropTypes from 'prop-types';

export default function MainList({ arrayForMap = [], limitArray }) {
  const history = useHistory();
  const { location: { pathname } } = history;

  const handlerCLickLink = (id) => {
    history.push(`${pathname}/${id}`);
  };

  const renderMeal = () => (
    arrayForMap.map(({ idMeal, strMealThumb, strMeal }, index) => (
      <li
        key={ idMeal }
        data-testid={ `${index}-recipe-card` }
        className="main-card"
        onClick={ () => handlerCLickLink(idMeal) }
        aria-hidden="true"
      >
        <img
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${index}-card-img` }
          className="main-card-image"
        />
        <p
          data-testid={ `${index}-card-name` }
          className="main-card-name"
        >
          {strMeal}

        </p>
      </li>
    ))
  );

  const renderCockTails = () => (
    arrayForMap.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
      <li
        key={ idDrink }
        data-testid={ `${index}-recipe-card` }
        className="main-card"
        onClick={ () => handlerCLickLink(idDrink) }
        aria-hidden="true"
      >
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid={ `${index}-card-img` }
          className="main-card-image"
        />
        <p
          data-testid={ `${index}-card-name` }
          className="main-card-name"
        >
          {strDrink}

        </p>
      </li>
    ))
  );

  return (
    <ul>
      {

        arrayForMap.length === 0 && (
          <AiOutlineLoading3Quarters className="spinner-main" />
        )
      }
      {
        arrayForMap.length <= limitArray && (
          pathname === '/comidas' ? renderMeal() : renderCockTails()
        )
      }
    </ul>
  );
}

MainList.propTypes = {
  arrayForMap: PropTypes.arrayOf(PropTypes.object).isRequired,
  limitArray: PropTypes.number.isRequired,
};
