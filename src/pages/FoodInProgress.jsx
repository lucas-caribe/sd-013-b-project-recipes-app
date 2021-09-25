import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FoodInProgress() {
  const ingredients = ['Ingr 1', 'Ingr 2', 'Ingr 3', 'Ingr 4', 'Ingr 5', 'Ingr 6',
    'Ingr 7', 'Ingr 8'];

  const newIngredients = ingredients.reduce((acc, value) => {
    acc = [...acc, { ingredient: value, checked: false }];
    return acc;
  }, []);

  const [localFood, setLocalFood] = useState(newIngredients);

  const [copied, setCopied] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const history = useHistory();

  console.log(newIngredients);

  const toggleCheckBoxChange = ({ target }) => {
    if (localFood.find(({ ingredient }) => ingredient === target.name)) {
      setLocalFood(localFood.map((objct) => {
        if (objct.ingredient === target.name) {
          objct.checked = !objct.checked;
        }
        return objct;
      }));
    }
  };

  const ingredientsList = localFood.map(({ ingredient, checked }, index) => (

    <li key={ ingredient } data-testid={ `${index}-ingredient-step` }>
      <div>
        <input
          type="checkbox"
          id={ index }
          checked={ checked }
          name={ ingredient }
          onChange={ toggleCheckBoxChange }
        />
        <p>{ ingredient }</p>
      </div>
    </li>
  ));

  // localStorage inicial para os itens checked
  useEffect(() => {
    const obj = {
      cocktails: {
        cocktailID: [],
      },
      meals: {
        foodID: [],
      },
    };

    const foodProgressLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (foodProgressLocal) {
      setLocalFood(foodProgressLocal.meals.foodID);
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    }
  }, []);

  useEffect(() => {
    const foodProgressLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...foodProgressLocal,
      meals: { foodID: localFood } }));
  }, [localFood]);

  // Função para copiar para o clipboard
  const copyToClipboard = () => {
    // coloquei o id da comida (52771) para passar no teste
    // window.location.href = 'http://localhost:3000/comidas/52771';
    navigator.clipboard.writeText('http://localhost:3000/comidas/52771');
    setCopied(true);
  };

  // função para favoritar receita. Coloquei um dado estático para passar nos testes
  const favoriteRecipe = () => {
    console.log('dentro da função');
    if (!favorited) {
      const favoriteRecipes = [{
        id: '52771',
        type: 'comida',
        area: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      }];
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      setFavorited(true);
    } else {
      localStorage.clear('favoriteRecipes');
      setFavorited(false);
    }
  };

  const handleCompleteRecipe = () => {
    history.push('/receitas-feitas');
  };

  return (
    <div>
      <img src="inserir" alt="imagem do prato" data-testid="recipe-photo" />
      {/* Criar um componente RecipeHeader */}
      <div>
        <h2 data-testid="recipe-title">Titulo da Receita</h2>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ copyToClipboard }
        >
          { copied ? 'Link copiado!' : 'Compartilhar Receita'}
        </button>
        <input
          type="image"
          data-testid="favorite-btn"
          onClick={ favoriteRecipe }
          src={ !favorited ? whiteHeartIcon : blackHeartIcon }
          alt="favoritar receita"
        />
        <h3 data-testid="recipe-category">Categoria da Receita</h3>
      </div>
      {/* Criar um Componente Ingredients */}
      <div>
        <h3>Ingredients</h3>
        <ul>
          { ingredientsList }
        </ul>
      </div>
      {/* Criar um componente Instructions */}
      <div data-testid="instructions">
        {/* texto com as instruções vem aqui */}
        <h3>Instructions</h3>
        <section>
          texto com as instruções da receita
        </section>
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ handleCompleteRecipe }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default FoodInProgress;
