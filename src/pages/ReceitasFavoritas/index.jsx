import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Button from './Button';

function FavoriteRecipes({ history }) {
  // objeto
  const [favorite, setFavorite] = useState([]);
  // filtro
  const [food, setFood] = useState(false);
  const [drink, setDrink] = useState(false);
  // copia
  const [url, setUrl] = useState(false);

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div>
      <Header pageTitle="Receitas Favoritas " showSearchIcon={ false } />
      <div>
        <Button
          name="All"
          type="button"
          id="filter-by-all-btn"
          value="All"
          onClick={ () => { setFood(false); setDrink(false); } }
        />
        <Button
          name="Foods"
          type="button"
          id="filter-by-food-btn"
          value="Foods"
          onClick={ () => { setFood(true); setDrink(false); } }
        />
        <Button
          name="Drinks"
          type="button"
          id="filter-by-drink-btn"
          value="Drinks"
          onClick={ () => { setFood(false); setDrink(true); } }
        />
      </div>
      <div>
        {
          favorite.filter(({ type }) => {
            if (drink === true) return type === 'bebida';
            if (food === true) return type === 'comida';
            return favorite;
          }).map((obj, index) => {
            if (obj.type === 'comida') {
              return ( // Card para comidas !!
                // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
                <section key={ obj.id }>
                  <img
                    src={ obj.image }
                    alt={ obj.name }
                    data-testid={ `${index}-horizontal-image` }
                    role="presentation"
                    onClick={ () => history.push(`/comidas/${obj.id}`) }
                    width="200"
                  />
                  <h1
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { `${obj.area} - ${obj.category}` }
                  </h1>
                  <p
                    data-testid={ `${index}-horizontal-name` }
                    role="presentation"
                    onClick={ () => history.push(`/comidas/${obj.id}`) }
                  >
                    { obj.name }
                  </p>
                  <Button
                  // https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
                    type="button"
                    onClick={ () => {
                      setFavorite((prevState) => (
                        prevState.filter(({ name }) => name !== obj.name)));
                    } }
                    value={ <img
                      src={ blackHeartIcon }
                      alt="Black HeartIcon"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                    /> }
                  />
                  <Button
                  // https://web.dev/async-clipboard/
                    type="button"
                    onClick={ () => {
                      navigator.clipboard.writeText(`http://localhost:3000/comidas/${obj.id}`);
                      setUrl(true);
                    } }
                    value={ <img
                      alt="Share Icon"
                      src={ shareIcon }
                      data-testid={ `${index}-horizontal-share-btn` }
                    /> }
                  />
                  { url && <p> Link copiado! </p>}
                </section>
              );
            } return ( // Card para bebidas
              <section key={ obj.id }>
                <img
                  alt={ obj.name }
                  src={ obj.image }
                  data-testid={ `${index}-horizontal-image` }
                  role="presentation"
                  onClick={ () => history.push(`/bebidas/${obj.id}`) }
                  width="200"
                />
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {obj.alcoholicOrNot}
                </p>
                <p
                  data-testid={ `${index}-horizontal-name` }
                  role="presentation"
                  onClick={ () => history.push(`/bebidas/${obj.id}`) }
                >
                  { obj.name }
                </p>
                <Button
                  // https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
                  type="button"
                  onClick={ () => {
                    setFavorite((prevState) => (
                      prevState.filter(({ id }) => id !== obj.id)));
                  } }
                  value={ <img
                    src={ blackHeartIcon }
                    alt="BlackHeartIcon"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                  /> }
                />
                <Button
                  type="button"
                  onClick={ () => { navigator.clipboard.writeText(`http://localhost:3000/comidas/${obj.id}`); } }
                  value={ <img
                    src={ shareIcon }
                    alt="Share Icon"
                    data-testid={ `${index}-horizontal-share-btn` }
                  /> }
                />
              </section>
            );
          })
        }
      </div>
    </div>
  );
}

FavoriteRecipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default FavoriteRecipes;
