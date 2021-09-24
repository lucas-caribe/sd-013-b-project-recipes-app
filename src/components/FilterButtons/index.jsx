import React, { useState, useEffect } from 'react';
import { Button } from 'bootstrap';
import fetchCategories from '../../services';

function FilterButtons({ page }) {
  const [categories, setCategories] = useState([]);
  const MAX_ELEMENT = 5;

  useEffect(() => {
    async function getCategories() {
      const categoriesList = fetchCategories(page);
      setCategories(categoriesList);
    }
    getCategories();
  }, []);

  const mapCategories = (categoriesList) => {
    const categoriesPerPage = categoriesList.map((category) => category.strCategory)
      .slice(0, MAX_ELEMENT);
    return (
      categoriesPerPage.map((category, index) => (
        <Button
          key={ index }
          data-testid={ `${category}-category-filter` }
        >
          {category}
        </Button>
      ))
    );
  };
  return (
    <div>
      <Button data-testid="All-category-filter">
        All
      </Button>
      {mapCategories(categories)}
    </div>
  );
}

FilterButtons.propTypes = {
  page: PropTypes.string.isRequired,
};

export default FilterButtons;
