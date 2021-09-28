import React, { useState, useEffect } from 'react';
import './css/CheckListStyle.css';

let complete = [];
let completeStorage = [];
let marcados = 0;

export default function CheckList({ name, key, type, id, set, qtn }) {
  // const Ingredientes = localStorage.getItem('inProgressRecipes');

  const [idRecipe] = useState(id);
  const [isMark, setIsMark] = useState(false);
  const [typeRecipe, setTypeRecipe] = useState('');

  useEffect(() => {
    complete = [];
  }, [idRecipe]);

  let Ingredientes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  function getDataStore() {
    if (!Ingredientes) {
      Ingredientes = {
        cocktails: {},
        meals: {},
      };
      return;
    }
    if ((Ingredientes.meals[id] || Ingredientes.cocktails[id]) && (type === 'meals')) {
      Ingredientes.meals[id].forEach((ingrediente) => {
        completeStorage.push(ingrediente);
        completeStorage = completeStorage.filter((item, index) => (
          completeStorage.indexOf(item) === index));
      });
      console.log(completeStorage);
    } else {
      Ingredientes.cocktails[id].forEach((ingrediente) => {
        completeStorage.push(ingrediente);
        completeStorage = completeStorage.filter((item, index) => (
          completeStorage.indexOf(item) === index));
      });
    }
  }
  getDataStore();

  function SaveLocalStorege() {
    if (type === 'meals') {
      Ingredientes = {
        ...Ingredientes, meals: { ...Ingredientes.meals, [id]: complete },
      };
    } else {
      Ingredientes = {
        ...Ingredientes, cocktails: { ...Ingredientes.cocktails, [id]: complete },
      };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(Ingredientes));
  }

  function SetCheckQtn() {
    if (marcados === qtn) {
      set(false);
    } else {
      set(true);
    }
  }

  function HandleClick(e) {
    const texto = document.getElementById(`${name}-label`);
    const { target } = e;
    setIsMark(false);

    // const [completeIngredientsMeals, setCompleteIngredientsMeals] = useState({ meals: { id: [] } });

    if (target.checked) {
      texto.classList.add('line');
      complete.push(target.value);
      marcados += 1;
      setIsMark(true);
    } else {
      texto.classList.remove('line');
      setIsMark(false);
      marcados -= 1;
      const indexElemento = complete.findIndex((element) => {
        if (element === target.value) {
          return true;
        }
        return false;
      });
      complete.splice(indexElemento, 1);
    }
    SetCheckQtn();
    SaveLocalStorege();
  }

  function ChangeCheck() {
    const texto = document.getElementById(`${name}-label`);
    completeStorage.forEach((item) => {
      console.log(name);
      if (item === name) {
        setIsMark(true);
        texto.classList.add('line');
      }
    });
  }
  function ChangeTypeName() {
    if (type === 'meals') {
      setTypeRecipe('meals');
    } else {
      setTypeRecipe('cocktails');
    }
  }

  useEffect(() => {
    ChangeCheck();
    ChangeTypeName();
  }, []);

  return (
    <label id={ `${name}-label` } htmlFor={ name } k>
      <input
        key={ key }
        id={ name }
        onClick={ HandleClick }
        type="checkbox"
        data-testid={ `${key}-ingredient-step` }
        value={ name }
        checked={ isMark }

      />
      {
        name
      }
    </label>

  );
}

CheckList.propTypes = {

}.isRequired;
