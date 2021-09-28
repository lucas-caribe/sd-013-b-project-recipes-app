import React from 'react';

import Button from 'react-bootstrap/Button';
import { useRecipes } from '../../../context';

function FilterButtonsDrinks() {
  const { meals: { categories } } = useRecipes();
  const MAX_ELEMENT = 5;

  return (
    <div>
      {categories.map((category, index) => {
        if (index < MAX_ELEMENT) {
          return (
            <Button
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
            >
              {category.strCategory}
            </Button>);
        }
        return null;
      })}
    </div>

  );
}
// return (
//   <div>
//     <Button data-testid="All-category-filter">
//       All
//     </Button>
//     {mapCategories(categories)}
//   </div>
// );

export default FilterButtonsDrinks;
