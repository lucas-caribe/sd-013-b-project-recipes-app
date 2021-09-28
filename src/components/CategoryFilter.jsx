import React, { useContext } from 'react';
import Context from '../context/Context';
import { fetchAllRecipes, fetchByCategory } from '../services';

export default function CategoryFilter() {
  const { categories, setAllRecipes, currentPage } = useContext(Context);

  // NÃO USEI RADIO POIS É PRECISO SER POSSÍVEL DESMARCAR A OPÇÃO
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

    // SE FOR NÃO FOR O BOTÃO 'ALL' E ESTIVER SELECIONADO, BUSCA POR CATEGORIA
    // CASO ESTEJA DESMARCADO FAZ A BUSCA DE TODAS AS RECEITAS
    if (target.value !== 'all') {
      const category = target.value.split(' ').join('_');
      if (target.checked) { getByCategory(category); } else { getAllRecipes(); }
    } else { getAllRecipes(); }
  }

  return (
    <>
      <div
        className="category-button"
        data-testid="All-category-filter"
      >
        <label
          htmlFor="all"
        >
          <input
            type="checkbox"
            name="category"
            id="all"
            value="all"
            onClick={ handleCheck }
            hidden
          />
          <span>All</span>
        </label>
      </div>

      {categories.map(({ strCategory }, index) => (
        <div
          key={ index }
          className="category-button"
          data-testid={ `${strCategory}-category-filter` }
        >
          <label
            htmlFor={ `${index}-option` }
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
      ))}
    </>
  );
}
