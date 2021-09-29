import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailsHeader from '../Components/DetailsHeader';
import DetailsIngredients from '../Components/DetailsIngredients';
import DetailsInstructions from '../Components/DetailsInstructions';
import DetailsVideo from '../Components/DetailsVideo';
import DetailsRecommended from '../Components/DetailsRecommended';
import StartRecipeButton from '../Components/StartRecipeButton';
import { finishRecipe as finishRecipeAction,
  editProgress as editProgressAction } from '../Redux/Actions';
import { checkRecipeStatus } from '../Utils/functions';

const Details = (props) => {
  const { type, id, status, finishRecipe,
    editProgress, doneRecipes, inProgressRecipes } = props;
  const [item, setItem] = useState({});
  // Cada receita vai ter um recipeStatus:
  // - default: receita não iniciada
  // - in-progress: receita iniciada
  // - done: receita finalizada
  const [recipeStatus, setRecipeStatus] = useState('default');
  // Cada receita vai ter um isFavorite (true) ou (false)
  const [recommended, setRecommended] = useState([]);

  let baseUrl;
  let recommendationUrl;
  let db = '';
  let Db = '';
  let recommendedDb;
  if (type === 'comidas') {
    baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    recommendationUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    db = 'meals';
    Db = 'Meal';
    recommendedDb = 'drinks';
  } else if (type === 'bebidas') {
    baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    recommendationUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    db = 'drinks';
    Db = 'Drink';
    recommendedDb = 'meals';
  }
  const url = `${baseUrl}${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data[db][0]);
      });

    fetch(recommendationUrl).then((res) => res.json()).then((data) => {
      const rec = data[recommendedDb];
      const spliceNumber = 6;
      const sixFirst = rec.splice(0, spliceNumber);
      setRecommended(sixFirst);
    });

    const actualStatus = checkRecipeStatus(type, id, inProgressRecipes, doneRecipes);
    setRecipeStatus(actualStatus);
  }, [id, db, recommendationUrl,
    recommendedDb, url, doneRecipes, inProgressRecipes, type]);

  const ingredients = [];
  const measures = [];
  const ingMaxNumber = 15;
  for (let i = 1; i <= ingMaxNumber; i += 1) {
    if (item[`strIngredient${i}`] !== null && item[`strIngredient${i}`] !== '') {
      ingredients.push(item[`strIngredient${i}`]);
      measures.push(item[`strMeasure${i}`]);
    } else break;
  }

  const imgSrc = item[`str${Db}Thumb`];
  const title = item[`str${Db}`];
  const subTitle = type === 'comidas' ? item.strCategory : item.strAlcoholic;
  const instructions = item.strInstructions;
  const videoUrl = item.strYoutube;
  return (

    <div>
      <DetailsHeader
        item={ item }
        imgSrc={ imgSrc }
        title={ title }
        subTitle={ subTitle }
        type={ type }
        id={ id }
      />
      <button
        type="button"
        onClick={ () => {
          finishRecipe(item);
          // a action finishRecipe recebe o item retornado diretamente do fetch, ela mesma é responsavel por gerenciar o que for necessario. Ela remove a receita das receitas em progresso e coloca em doneRecipes.
        } }
      >
        Finalizar

      </button>
      <button
        type="button"
        onClick={ () => {
          editProgress(id, type, 'batata');
          // A action editProgress recebe como parametros o id da comida, o tipo dela (comida ou bebida) e o nome do ingrediente. Caso chame a action e o ingrediente já exista ele é removido
          // Os items já marcados estão disponiveis na chave inProgressRecipes.type.id, que é um array com o nome dos ingredientes (onde type é meals para comidas e cocktails para bebidas, e o id é o id da receita )
        } }
      >
        Adicionar Elemento

      </button>
      <DetailsIngredients
        ingredients={ ingredients }
        measures={ measures }
        status={ status }
      />
      <DetailsInstructions instructions={ instructions } />
      {type === 'comidas' && <DetailsVideo videoUrl={ videoUrl } />}
      <DetailsRecommended recommended={ recommended } recommendedDb={ recommendedDb } />
      <StartRecipeButton type={ type } id={ id } recipeStatus={ recipeStatus } />

    </div>
  );
};

Details.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  finishRecipe: PropTypes.func.isRequired,
  editProgress: PropTypes.func.isRequired,
  doneRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  inProgressRecipes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ doneRecipes: state.doneRecipes,
  inProgressRecipes: state.inProgressRecipes });

const mapDispatchToProps = (dispatch) => ({
  finishRecipe: (items) => dispatch(finishRecipeAction(items)),
  editProgress: (id, type, ingredient) => {
    dispatch(editProgressAction(id, type, ingredient));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
