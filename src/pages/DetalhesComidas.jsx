import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { sendRecipeToGlobal } from '../redux/actions';
import fetchIdComidas from '../services/fetchIdComidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DetalhesComidas({ match: { params: { id } }, sendObjToGlobal }) {
  const history = useHistory();
  const [objIdReceita, setObjIdReceita] = useState();
  const fetchId = async () => {
    setObjIdReceita(await fetchIdComidas(id));
  };

  useEffect(() => {
    fetchId();
  }, []);

  useEffect(() => {
    sendObjToGlobal(objIdReceita);
  }, [objIdReceita]);

  if (objIdReceita === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Detalhes da comida
      <img src={ objIdReceita.strMealThumb } data-testid="recipe-photo" alt="recipeFo" />
      <h3 data-testid="recipe-title">{}</h3>
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
      <button type="button" data-testid="start-recipe-btn" onClick={ () => history.push(`/comidas/${id}/in-progress`) }>Start recipe</button>
    </div>
  );
}

DetalhesComidas.propTypes = {
  match: PropTypes.shape(PropTypes.shape({})).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendObjToGlobal: (obj) => dispatch(sendRecipeToGlobal(obj)),
});

export default connect(null, mapDispatchToProps)(DetalhesComidas);
