import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const CATEGORY_QUANTITY = 5;

function Category({ categories }) {
  const categoryList = categories.splice(0, CATEGORY_QUANTITY);
  return (
    <div className="category-body">
      <Button text="All" />
      { categoryList.map((category) => (
        <Button
          data-testid={ `${category.strCategory}-category-filter` }
          text={ category.strCategory }
          key={ category.strCategory }
        />
      ))}
    </div>
  );
}

Category.propTypes = {
  categories: PropTypes.shape([]).isRequired,
};

export default Category;
