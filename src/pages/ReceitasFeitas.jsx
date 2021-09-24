import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import Button from '../components/Button';

import shareIcon from '../images/shareIcon.svg';

// const doneRecipes = [
//   {
//     id: "52977",
//     type: "comida",
//     area: "Turkish",
//     category: "Side",
//     alcoholicOrNot: "",
//     name: "Corba",
//     image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
//     doneDate: "2021-09-24T19:25:57.353Z",
//     tags: ["Soup"],
//   },
//   {
//     id: "53060",
//     type: "comida",
//     area: "Croatian",
//     category: "Side",
//     alcoholicOrNot: "",
//     name: "Burek",
//     image: "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
//     doneDate: "2021-09-24T19:25:57.353Z",
//     tags: ["Streetfood", "Onthego"],
//   },
//   {
//     id: "52978",
//     type: "comida",
//     area: "Turkish",
//     category: "Side",
//     alcoholicOrNot: "",
//     name: "Kumpir",
//     image: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
//     doneDate: "2021-09-24T19:25:57.353Z",
//     tags: ["SideDish"],
//   },
// ];

function ReceitasFeitas() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  function getDoneRecipesByLocalStorage() {
    return JSON.parse(localStorage.getItem('doneRecipes'));
  }

  useEffect(() => {
    setDoneRecipes(getDoneRecipesByLocalStorage());
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  // }, []);

  function renderRecipesCard(data, index) {
    const {
      id, area, category, name, image, doneDate, tags,
    } = data;
    return (
      <div className="recipes-done-card">
        <img
          className="recipes-done-card-img"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ `Foto ${name}` }
        />
        <div>
          <h5
            data-testid={ `${index}-horizontal-top-text` }
          >
            { `${area} - ${category}` }
          </h5>
          <h4 data-testid={ `${index}-horizontal-name` }>{ name }</h4>
          <p>
            { 'Feita em: ' }
            <span data-testid={ `${index}-horizontal-done-date` }>
              { doneDate }
            </span>
          </p>
          <img
            className="recipes-done-card-share"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="Compartilhar"
          />
          {/* <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            <img src={ shareIcon } alt="Compartilhar" />
          </button> */}
          <div className="recipes-done-tags">
            {tags.map((tag) => (
              <span
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="main-content">
      <Header pageTitle="Receitas Feitas" searchButton={ false } />
      <div className="category-body">
        <Button
          text="All"
          // onClick={ onClickAll }
          dataTest="filter-by-all-btn"
        />
        <Button
          text="Food"
          // onClick={ onClickAll }
          dataTest="filter-by-food-btn"
        />
        <Button
          text="Drinks"
          // onClick={ onClickAll }
          dataTest="filter-by-drink-btn"
        />
      </div>
      <div className="recipes-done-cards">
        { doneRecipes !== 0
          && doneRecipes.map((recipe, index) => renderRecipesCard(recipe, index)) }
      </div>
    </main>
  );
}

export default ReceitasFeitas;
