import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailsHeader from '../Components/DetailsHeader';
import DetailsIngredients from '../Components/DetailsIngredients';
import DetailsInstructions from '../Components/DetailsInstructions';
import DetailsVideo from '../Components/DetailsVideo';
import DetailsRecommended from '../Components/DetailsRecommended';
import StartRecipeButton from '../Components/StartRecipeButton';
import { finishRecipe as finishRecipeAction } from '../Redux/Actions';

const Details = (props) => {
  const { type, id, status, finishRecipe } = props;
  const [item, setItem] = useState({});
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

  let itemToRedux = {};
  if (item) {
    itemToRedux = {
      id: type === 'comidas' ? item.idMeal : item.idDrink,
      type: type === 'comidas' ? 'meals' : 'cocktails',
      area: item.strArea,
      category: item.strCategory,
      alcoholicOrNot: type === 'comidas' ? '' : item.strAlcoholic,
      name: type === 'comidas' ? item.strMeal : item.strDrink,
      doneDate: '',
      tags: item.strTags ? item.strTags.split(',') : [],
    };
  }

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
  }, [id, db, recommendationUrl, recommendedDb, url]);

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
  // console.log(item);
  return (
    <div>
      <DetailsHeader
        item={ item }
        imgSrc={ imgSrc }
        title={ title }
        subTitle={ subTitle }
        type={ type }
      />
      <button
        type="button"
        onClick={ () => {
          finishRecipe(itemToRedux);
        } }
      >
        Finalizar

      </button>
      <DetailsIngredients
        ingredients={ ingredients }
        measures={ measures }
        status={ status }
      />
      <DetailsInstructions instructions={ instructions } />
      {type === 'comidas' && <DetailsVideo videoUrl={ videoUrl } />}
      <DetailsRecommended recommended={ recommended } recommendedDb={ recommendedDb } />
      <StartRecipeButton type={ type } id={ id } />

    </div>
  );
};

Details.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  finishRecipe: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  finishRecipe: (items) => dispatch(finishRecipeAction(items)),
});

export default connect(null, mapDispatchToProps)(Details);
