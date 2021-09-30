import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';

import { useDetails } from '../../context/DetailsContext';

import blackHeart from '../../images/blackHeartIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import FinishRecipeButton from '../../components/FinishRecipeButton';
import IngredientCheckbox from '../../components/IngredientCheckbox';

function EmProgresso() {
  const [isCopied, setIsCopied] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [ingredientsChecked, setIngredientsChecked] = useState({});

  const { pathname } = useLocation();
  const { id } = useParams();

  const {
    item,
    ingredients,
    fetchRecipe,
  } = useDetails();

  useEffect(() => {
    fetchRecipe(pathname, id);

    return setIsCopied(false);
  }, [pathname, id, fetchRecipe]);

  useEffect(() => {
    const handleCheck = () => setIngredientsChecked(JSON
      .parse(localStorage.getItem('checkedIngredients')));
    handleCheck();
  }, []);

  useEffect(() => {
    localStorage.setItem('checkedIngredients', JSON.stringify({ ...ingredientsChecked }));
  }, [ingredientsChecked]);

  const handleCopy = (bool) => {
    setIsCopied(bool);
  };

  // Referência para implementar lógica de checar as checkbox: https://stackoverflow.com/questions/5541387/check-if-all-checkboxes-are-selected
  const checkAllCheckbox = () => {
    const allCheckbox = document.querySelectorAll('.ingredient-checkbox');
    const allCheckboxChecked = document.querySelectorAll('.ingredient-checkbox:checked');
    if (allCheckboxChecked.length === allCheckbox.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  const renderIngredients = () => (
    <form>
      { ingredients.map((ingredient, index) => (
        <IngredientCheckbox
          key={ index }
          ingredient={ ingredient }
          index={ index }
          ingredientsChecked={ ingredientsChecked }
          setIngredientsChecked={ setIngredientsChecked }
          checkAllCheckbox={ checkAllCheckbox }
        />
      ))}
    </form>
  );

  const checkFavorites = (recipe, type) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites) {
      return (
        <FavoriteButton
          colorBeforeClick={ blackHeart }
          colorAfterClick={ whiteHeart }
          recipe={ recipe }
          type={ type }
        />
      );
    }
    return (
      <FavoriteButton
        colorBeforeClick={ whiteHeart }
        colorAfterClick={ blackHeart }
        recipe={ recipe }
        type={ type }
      />
    );
  };

  const VIDEO_ID = 32;

  const renderDetails = (path, type, property) => {
    if (!item[type]) {
      return <span>Carregando...</span>;
    } return (
      <main>
        <img
          data-testid="recipe-photo"
          src={ item[type][0][`str${property}Thumb`] }
          alt={ item[type][0][`str${property}`] }
          height="300px"
          width="300px"
        />
        <h1 data-testid="recipe-title">{ item[type][0][`str${property}`] }</h1>
        <ShareButton
          path={ path }
          id={ item[type][0][`id${property}`] }
          icon={ shareIcon }
          handleCopy={ handleCopy }
        />
        {checkFavorites(item[type][0], type)}
        {isCopied && <p>Link copiado!</p> }
        <h2 data-testid="recipe-category">
          { item[type][0].strAlcoholic
            ? item[type][0].strAlcoholic : item[type][0].strCategory }
        </h2>
        {renderIngredients()}
        <p data-testid="instructions">{item[type][0].strInstructions}</p>
        {item[type][0].strYoutube
        && <iframe
          data-testid="video"
          src={ `http://www.youtube.com/embed/${item[type][0].strYoutube.slice(VIDEO_ID)}` }
          title={ item[type][0][`str${property}`] }
          frameBorder="0"
        />}
        <FinishRecipeButton enableBtn={ !allChecked } />
      </main>
    );
  };

  if (pathname.includes('comidas')) {
    return renderDetails('comidas', 'meal', 'Meal');
  }
  return renderDetails('bebidas', 'drink', 'Drink');
}

export default EmProgresso;
