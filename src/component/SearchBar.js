import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../context/Context';

export default function SearchBar() {
  const history = useHistory();
  const { filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    fetchFood,
    fetchDrink,
    filteredItem,
  } = useContext(Context);

  useEffect(() => {
    if (filterRadio === 'f' && filterText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterText]);

  useEffect(() => {
    if (filteredItem.length === 1 && history.location.pathname === '/comidas') {
      history.push(`/comidas/${filteredItem[0].idMeal}`);
    } if (filteredItem.length === 1 && history.location.pathname === '/bebidas') {
      history.push(`/bebidas/${filteredItem[0].idDrink}`);
    }
  }, [filteredItem]);

  return (
    <div>
      <input data-testid="search-input" type="text" placeholder="DIGITE SUA COMIDA" />
      <RadialInput
        dataTest="ingredient-search-radio"
        radialId="ingredient"
        radialName="search-checkbox"
        radialText="Ingrediente"
      />
      <RadialInput
        dataTest="name-search-radio"
        radialId="food-name"
        radialName="search-checkbox"
        radialText="Nome"
      />
      <RadialInput
        dataTest="first-letter-search-radio"
        radialId="food-first-letter"
        radialName="search-checkbox"
        radialText="Primeira Letra"
      />
      <Button btnText="Buscar" dataTest="exec-search-btn" />
    </div>
  );
}
