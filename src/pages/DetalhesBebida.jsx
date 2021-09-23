import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/header';
import { fetchDetailsThunk } from '../redux/action';

export default function DetalhesBebida() {
  const { id } = useParams();
  const results = useSelector((state) => state.searchDetails.results.drinks);
  const [state, setState] = useState({ loading: true });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsThunk(id, 'cocktail'));
  }, []);

  useEffect(() => {
    if (results) setState({ loading: false });
  }, [results]);

  function handleVideo(video) {
    if (video) {
      return (
        <video
          width="70vw"
          controls
          data-testid="video"
        >
          <track
            default
            kind="captions"
            srcLang="en"
          />
          <source src={ video } />
          Your browser does not support the video tag.
        </video>
      );
    } if (video === null) {
      return (<div data-testid="video" />);
    }
  }

  function handleDetailts() {
    const { strDrinkThumb, strCategory,
      strDrink, strInstructions, strVideo } = results[0];
    return (
      <div>
        <img
          className="img-details"
          data-testid="recipe-photo"
          alt={ strDrink }
          src={ `${strDrinkThumb}` }
        />
        <p data-testid="recipe-title">{ strDrink }</p>
        <button type="button" data-testid="share-btn">share button</button>
        <button type="button" data-testid="favorite-btn">favorite button</button>
        <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
        <div data-testid="-ingredient-name-and-measure">
          ingredients and measures will be here
        </div>
        <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
        {handleVideo(strVideo)}
        <div data-testid="recomendation-card">redomendations will be here</div>
        <button type="button" data-testid="start-recipe-btn">Start Recipe!</button>
      </div>
    );
  }

  return (
    <div>
      <Header titlePage="Bebidas" />
      { state.loading || handleDetailts() }
    </div>
  );
}
