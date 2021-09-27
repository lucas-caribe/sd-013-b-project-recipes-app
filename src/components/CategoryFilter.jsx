import React, { useContext } from 'react';
import Context from '../context/Context';

export default function CategoryFilter() {
  const { categories } = useContext(Context);

  return (
    categories.map(({ strCategory }, index) => (
      <div
        key={ index }
        className="category-button"
      >
        <button
          type="button"
          data-testid={ `${strCategory}-category-filter` }
        >
          { strCategory }
        </button>
      </div>
    ))
  );
}
