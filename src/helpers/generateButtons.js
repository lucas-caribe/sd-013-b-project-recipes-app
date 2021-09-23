import React from 'react';

const NUMBER_OF_BUTTONS = 5;

function generateButtons(filterButtons) {
  const categories = filterButtons.map(({ strCategory }) => strCategory);
  return (
    categories.slice(0, NUMBER_OF_BUTTONS).map((category) => (
      <button
        type="button"
        key={ category }
        data-testid={ `${category}-category-filter` }
      >
        { category }
      </button>
    ))
  );
}

export default generateButtons;
