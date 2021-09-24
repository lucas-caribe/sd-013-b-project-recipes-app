import React, { useContext } from 'react';
// import imgProfile from '../images/profileIcon.svg';
// import imgSearch from '../images/searchIcon.svg';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';
import SearchInputs from './SearchInputs';

function SearchBar() {
  const { apiRadio } = useContext(Context);

  const verifSwitch = () => {
    switch (window.location.pathname) {
    case '/comidas':
      if (apiRadio.meals.length === 1) {
        const id = apiRadio.meals[0].idMeal;
        return (<Redirect to={ `/comidas/${id}` } />);
      }
      break;
    case '/bebidas':
      if (apiRadio.drinks.length === 1) {
        const id = apiRadio.drinks[0].idDrink;
        return (<Redirect to={ `/bebidas/${id}` } />);
      }
      break;
    default:
      break;
    }
  };

  return (
    <div>
      <br />
      <SearchInputs />
      {
        apiRadio !== undefined ? verifSwitch() : ''
      }
    </div>
  );
}

export default SearchBar;
