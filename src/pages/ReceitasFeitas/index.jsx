import React, { useState } from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { useRecipes } from '../../context';
import ShareButton from '../../components/ShareButton';
import shareIcon from '../../images/shareIcon.svg';

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
        {visibleRecipes.map((recipe, index) => (
          <Card key={ index }>
            <Link
              to={ recipe.type === 'meals'
                ? `/comidas/${recipe.idMeal}` : `/bebidas/${recipe.idDrink}` }
            >
              <Card.Img
                variant="top"
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.strMealThumb || recipe.strDrinkThumb }
              />
              <Card.Title
                data-testid={ `${index}-horizontal-name` }
              >
                {recipe.strMeal || recipe.strDrink}
              </Card.Title>
            </Link>
            <Card.Body>
              <Card.Subtitle
                data-testid={ `${index}-horizontal-top-text` }
                className="mb-2 text-muted"
              >
                {recipe.strAlcoholic || `${recipe.strArea} - ${recipe.strCategory}`}
              </Card.Subtitle>
              {/* <Card.Text data-testid={`${index}-horizontal-done-date`}>
             Data em que a receita foi feita
            </Card.Text> */}
            </Card.Body>
            <ShareButton
              icon={ shareIcon }
              id={ recipe.idMeal || recipe.idDrink }
              data-testid={ `${index}-horizontal-share-btn` }
            />
            <h4>
              <Badge
                data-testid={ `${index}-${recipe.tagName}-horizontal-tag` }
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
