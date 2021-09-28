import React, { useState, useEffect } from 'react';
import './css/CheckListStyle.css';

let complete = [];
let completeStorage = [];
let marcados = 0;

export default function CheckList({ name, index, type, id, set, qtn }) {
  const [idRecipe] = useState(id);
  const [isMark, setIsMark] = useState(false);

  function ReajustQtn() {
    marcados = completeStorage.length;
    if (marcados < 0) {
      marcados = 0;
    }
  }

  useEffect(() => {
    complete = [];
    ReajustQtn();
  }, [idRecipe]);

  let Ingredientes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  function getDataStore() {
    let renderKey = 'meals';
    if (!Ingredientes) {
      Ingredientes = {
        cocktails: {},
        meals: {},
      };
      return;
    }
    if (type === 'drinks') {
      renderKey = 'cocktails';
    }
    if ((Ingredientes[renderKey])[id]) {
      Ingredientes[renderKey][id].forEach((ingrediente) => {
        completeStorage.push(ingrediente);
        completeStorage = completeStorage.filter((item, indexStorage) => (
          completeStorage.indexOf(item) === indexStorage));
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
      if (item === name) {
        setIsMark(true);
        texto.classList.add('line');
      }
    });
  }

  useEffect(() => {
    ChangeCheck();
    complete = [...completeStorage];
  }, []);

  function addChecked() {
    const input = document.getElementById(`${name}`).attributes;
    const atribute = document.createAttribute('checked');
    input.setNamedItem(atribute);
    if (!isMark) {
      input.removeNamedItem('checked');
    }
  }
  useEffect(() => {
    addChecked();
  }, [isMark]);
  return (
    <label
      id={ `${name}-label` }
      htmlFor={ name }
      data-testid={ `${index}-ingredient-step` }
    >
      <input
        id={ name }
        onClick={ HandleClick }
        type="checkbox"
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
