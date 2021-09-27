import React from 'react';

const QUANTIDADE_CARDS = 6;

const getSixCards = (arr) => {
  if (arr !== undefined) {
    const sixCards = arr.slice(0, QUANTIDADE_CARDS);
    return sixCards;
  }
};
export const ChoiceButton = (inFButton, push) => {
  const { inprogressMeal, sendObjToGlobal, objIdReceita, objToReducer,
    id, tipo } = inFButton;

  const onClick = () => {
    sendObjToGlobal(objIdReceita, objToReducer);
    if (tipo === 'bebidas') {
      push(`/bebidas/${id}/in-progress`);
    }
    if (tipo === 'comidas') {
      push(`/comidas/${id}/in-progress`);
    }
  };
  if (!inprogressMeal) {
    return (
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => onClick() }
        className="buttonStart"
      >
        Continuar Receita
      </button>
    );
  }
  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      onClick={ () => onClick() }
      className="buttonStart"
    >
      Start
    </button>
  );
};
export const clickShare = (setCopyOk, type, id) => {
  if (type === 'bebida') {
    navigator.clipboard.writeText(`http://localhost:3000/bebidas/${id}`);
    setCopyOk(true);
  }
  if (type === 'comida') {
    navigator.clipboard.writeText(`http://localhost:3000/comidas/${id}`);
    setCopyOk(true);
  }
};

export const getEmbedVideo = (objIdReceita) => {
  if (objIdReceita !== undefined) {
    const codigo = objIdReceita.strYoutube.split('v=');
    const linkYoutube = `http://www.youtube.com/embed/${codigo[1]}`;
    return linkYoutube;
  }
};

export const getIngredient = (objIdReceita, type) => {
  if (objIdReceita !== undefined && type === 'bebidas') {
    const entries = Object.entries(objIdReceita);
    const arrayFilteredIngredients = entries
      .filter((ingredientes) => ingredientes[0].includes('strIngredient'))
      .filter((ingredientes2) => ingredientes2[1] !== null)
      .map((ingredientes3) => ingredientes3[1]);
    return arrayFilteredIngredients;
  }
  if (objIdReceita !== undefined && type === 'comidas') {
    const entries = Object.entries(objIdReceita);
    const arrayFilteredIngredients = entries
      .filter((ingredientes) => ingredientes[0].includes('strIngredient'))
      .filter((ingredientes2) => ingredientes2[1] !== '')
      .map((ingredientes3) => ingredientes3[1]);
    return arrayFilteredIngredients;
  }
};

export const getMeasure = (objIdReceita, type) => {
  const filtros = [null, undefined];
  if (objIdReceita !== undefined && type === 'bebida') {
    const entries = Object.entries(objIdReceita);
    const measure = entries.filter((measures) => measures[0].includes('strMeasure'))
      .filter((measures2) => measures2[1] !== ' ')
      .filter((measures3) => !filtros.includes(measures3[1]))
      .map((measures3) => measures3[1]);
    return measure;
  }
  if (objIdReceita !== undefined && type === 'comida') {
    const entries = Object.entries(objIdReceita);
    const measure = entries.filter((measures) => measures[0].includes('strMeasure'))
      .filter((measures2) => measures2[1] !== ' ')
      .map((measures3) => measures3[1]);
    return measure;
  }
};

export const formatObjForStorageMeal = (id, objIdReceita) => {
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  if (objIdReceita) {
    const obj = [{
      id,
      type: 'comida',
      area: objIdReceita.strArea,
      category: objIdReceita.strCategory,
      alcoholicOrNot: '',
      name: objIdReceita.strMeal,
      image: objIdReceita.strMealThumb,
    }];
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    recipes.push(obj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(obj));
  }
};

export const formatObjForStorageDrink = (id, objIdReceita) => {
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  if (objIdReceita) {
    const obj = {
      id,
      type: 'bebida',
      area: '',
      category: objIdReceita.strCategory,
      alcoholicOrNot: objIdReceita.strAlcoholic,
      name: objIdReceita.strDrink,
      image: objIdReceita.strDrinkThumb,
    };
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    recipes.push(obj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
  }
};

export const clickFavoriteMeal = (obj, setFavorite, id) => {
  setFavorite((prevState) => !prevState);
  formatObjForStorageMeal(id, obj);
};

export const clickFavoriteDrink = (obj, setFavorite, id) => {
  setFavorite((prevState) => !prevState);
  formatObjForStorageDrink(id, obj);
};

export const verifyFavorite = (foodId, setFavorite) => {
  const objFromStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (objFromStorage) {
    const recipeFavorite = objFromStorage.some((algum) => algum.id === foodId);
    if (recipeFavorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }
};

export default getSixCards;
