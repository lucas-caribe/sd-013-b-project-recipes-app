import React, { useContext } from 'react';
import Context from '../context/Context';
import { fetchAllRecipes, fetchByCategory } from '../services';

export default function CategoryFilter() {
  const { categories, setAllRecipes, currentPage } = useContext(Context);

  // ideia pra função que seleciona apenas um checkbox encontrada em https://abre.ai/dk5x
  function onlyOne(target) {
    const checkboxes = document.getElementsByName('category');
    checkboxes.forEach((item) => {
      if (item !== target) item.checked = false;
    });
  }

  async function getByCategory(category) {
    const type = (currentPage === 'Comidas') ? 'meals' : 'drinks';
    const quantidade = 12;
    const recipes = await fetchByCategory(type, category);
    setAllRecipes(recipes[`${type}`].slice(0, quantidade));
  }

  async function getAllRecipes() {
    const type = (currentPage === 'Comidas') ? 'meals' : 'drinks';
    const quantidade = 12;
    const recipes = await fetchAllRecipes(type);
    setAllRecipes(recipes[`${type}`].slice(0, quantidade));
  }

  function handleCheck({ target }) {
    onlyOne(target);
    const category = target.value.split(' ').join('_');

    if (target.checked) { getByCategory(category); } else { getAllRecipes(); }
  }

  return (
    categories.map(({ strCategory }, index) => (
      <div
        key={ index }
        className="category-button"
      >
        <label
          htmlFor={ `${index}-option` }
          data-testid={ `${strCategory}-category-filter` }
        >
          <input
            type="checkbox"
            name="category"
            id={ `${index}-option` }
            value={ strCategory }
            onClick={ handleCheck }
            hidden
          />
          <span>{ strCategory }</span>
        </label>
      </div>
    ))
  );
}
