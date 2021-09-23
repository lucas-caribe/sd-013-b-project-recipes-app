import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { fetchCategories } from '../services/api';

function FilterButtons({ page }) {
  const [categories, setCategories] = useState([]);
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    const getCategories = async () => {
      const results = await fetchCategories(page);
      setCategories(results);
    };
    getCategories();
  }, []);

  const mapCategories = (elements) => {
    const pageCategories = elements.map((element) => element.strCategory)
      .slice(0, MAX_CATEGORIES);
    return (
      pageCategories.map((category, index) => (
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
      {console.log(categories)}
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
