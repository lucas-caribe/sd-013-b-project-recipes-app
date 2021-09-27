import React, { useState } from 'react';
import { Badge, Card } from 'react-bootstrap';
import Header from '../../components/Header';
import { useRecipes } from '../../context';
import ShareButton from '../../components/ShareButton';

function ReceitasFeitas() {
  const { finishedRecipes } = useRecipes();
  const [visibleRecipes, setVisibleRecipes] = useState(finishedRecipes);

  const filterAll = () => {
    setVisibleRecipes(finishedRecipes);
  };

  const filterByFood = () => {
    finishedRecipes.filter((foodRecipes) => {
      if ('meals' in foodRecipes) {
        setVisibleRecipes(foodRecipes);
      }
      return foodRecipes;
    });
  };

  const filterByDrink = () => {
    visibleRecipes.filter((drinks) => {
      if ('drinks' in drinks) {
        setVisibleRecipes(drinks);
      }
      return drinks;
    });
  };
  return (
    <>
      <Header pageTitle="Receitas Feitas" showSearchIcon={ false } />
      <button type="button" data-testid="filter-by-all-btn" onClick={ filterAll }>
        All
      </button>

      <button
        name="foods"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ filterByFood }
      >
        Foods
      </button>

      <button
        name="drinks"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ filterByDrink }
      >
        Drinks
      </button>

      <ul>
        {visibleRecipes.map((recipe) => (
          <Card key={ recipe.index }>
            <Card.Img
              variant="top"
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.path }
            />
            <Card.Body>
              <Card.Title
                data-testid={ `${index}-horizontal-name` }
              >
                {recipe.strMeal || recipe.strDrink}
              </Card.Title>
              <Card.Subtitle
                data-testid={ `${index}-horizontal-top-text` }
                className="mb-2 text-muted"
              >
                {recipe.strAlcoholic || `${strArea} - ${strCategory}`}
              </Card.Subtitle>
              {/* <Card.Text data-testid={`${index}-horizontal-done-date`}>
             Data em que a receita foi feita
            </Card.Text> */}
            </Card.Body>
            <ShareButton
              path={ path }
              id={ strMeal || strDrink }
              handleCopy={ handleCopy }
              data-testid={ `${index}-horizontal-share-btn` }
            />
            <h4>
              <Badge
                data-testid={ `${index}-${tagName}-horizontal-tag` }
              >
                {visibleRecipes.strTags}
              </Badge>
            </h4>
          </Card>
        ))}
      </ul>
    </>
  );
}

export default ReceitasFeitas;
