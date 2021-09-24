import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import fetchIdBebidas from '../services/fetchIdBebidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { sendRecipeToGlobalDrinks } from '../redux/actions';

function DetalhesBebidas({ match: { params: { id } }, sendObjToGlobal }) {
  const [objIdReceita, setObjIdReceita] = useState();
  const fetchId = async () => {
    setObjIdReceita(await fetchIdBebidas(id));
  };
  useEffect(() => {
    fetchId();
  }, []);

  useEffect(() => {
    sendObjToGlobal(objIdReceita);
  }, [objIdReceita]);

  return (
    <div>
      Detalhes das bebidas
      <img data-testid="recipe-photo" alt="recipeFoto" />
      <h3 data-testid="recipe-title">Titulo</h3>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="iconHeard" />
      </button>
      <p data-testid="recipe-category">Categoria</p>
      <p data-testid={ `${0}-ingredient-name-and-measure` }>Ingredientes</p>
      <p data-testid="instructions">Instruções</p>
      <p data-testid="video">Video</p>
      <p data-testid={ `${0}-recomendation-card` }>Card recomendation</p>
      <button type="button" data-testid="start-recipe-btn">Start recipe</button>
    </div>
  );
}

DetalhesBebidas.propTypes = {
  match: PropTypes.shape(PropTypes.shape({})).isRequired,
  sendObjToGlobal: PropTypes.shape(PropTypes.shape({})).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendObjToGlobal: (drinks) => dispatch(sendRecipeToGlobalDrinks(drinks)),
});

export default connect(null, mapDispatchToProps)(DetalhesBebidas);
