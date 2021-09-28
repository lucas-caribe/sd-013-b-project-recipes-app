import React, { useContext } from 'react';
import Context from '../context/Context';

export default function CategoryFilter() {
  const { categories, setSelectedCategory } = useContext(Context);

  // NÃO USEI RADIO POIS É PRECISO SER POSSÍVEL DESMARCAR A OPÇÃO
  // ideia pra função que seleciona apenas um checkbox encontrada em https://abre.ai/dk5x
  function onlyOne(target) {
    const checkboxes = document.getElementsByName('category');
    checkboxes.forEach((item) => {
      if (item !== target) item.checked = false;
    });
  }

  function handleCheck({ target }) {
    onlyOne(target);

    const category = target.value;

    if (target.checked) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('All');
    }
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
            value="All"
            onClick={ handleCheck }
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
            />
            <span>{ strCategory }</span>
          </label>
        </div>
      ))}
    </>
  );
}
