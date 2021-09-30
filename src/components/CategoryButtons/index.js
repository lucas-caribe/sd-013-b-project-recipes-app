import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecipesContext } from '../../context/Provider';
import { fetchApiRecipes, getDefaultData } from '../../services';

export default function CategoryButtons() {
  const { categoryButtons, setRecipesApp } = useRecipesContext();

  const [filterName, setFilterName] = useState('');

  const { pathname } = useLocation();
  const type = pathname.includes('/comidas') ? 'foods' : 'drinks';
  const dataType = pathname.includes('/comidas') ? 'meals' : 'drinks';

  // Reduz a quantidade de items do array para 5 items apenas;
  const FIVE = 5;
  const firstFiveCategories = [
    { strCategory: 'All' }, ...categoryButtons[type].slice(0, FIVE),
  ];

  // Funcao que fica responsavel por fazer um fetch para a API de categorias com os devidos parametros;
  // e retorna todas as receitas que pertencem à categoria desejada.
  const getFilteredData = async (category, { target: { name } }) => {
    const TWELVE = 12;
    let data;
    if (name !== filterName && name !== 'All') {
      data = await fetchApiRecipes('c', category, type);
      setFilterName(name);
    } else {
      data = await getDefaultData(type);
      setFilterName('');
    }
    const filteredData = data[dataType].slice(0, TWELVE);
    setRecipesApp((prevState) => (
      { ...prevState, dataCategoryFoodAPI: filteredData, filtrar: true }
    ));
  };

  return (
    firstFiveCategories.map((category) => (
      <button
        data-testid={ `${category.strCategory}-category-filter` }
        type="button"
        name={ category.strCategory }
        key={ category.strCategory }
        onClick={ (event) => getFilteredData(category.strCategory, event) }
      >
        { category.strCategory }
      </button>
    ))
  );
}
