import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailsHeader from '../Components/DetailsHeader';
import DetailsIngredients from '../Components/DetailsIngredients';
import DetailsInstructions from '../Components/DetailsInstructions';
import DetailsVideo from '../Components/DetailsVideo';
import DetailsRecommended from '../Components/DetailsRecommended';
import StartRecipeButton from '../Components/StartRecipeButton';

const Details = (props) => {
  const { type, id, status } = props;
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
  }, [id]);

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
  console.log(item);
  return (
    <div>
      <DetailsHeader imgSrc={ imgSrc } title={ title } subTitle={ subTitle } />
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
};

export default Details;
