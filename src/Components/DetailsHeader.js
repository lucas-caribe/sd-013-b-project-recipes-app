import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from './Icon';
import { toggleFavorite as toggleFavoriteAction } from '../Redux/Actions';

const DetailsHeader = (props) => {
  const { imgSrc, title, subTitle, item, toggleFavorite, favoriteRecipes, id } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  const shareClick = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    setCopyClicked(true);
  };

  useEffect(() => {
    setIsFavorite(false);

    if (favoriteRecipes.length > 0) {
      favoriteRecipes.forEach((x) => {
        if (x.id === id) setIsFavorite(true);
      });
    }
  }, [isFavorite, favoriteRecipes, id]);
  return (
    <div>

      <img
        data-testid="recipe-photo"
        alt="example"
        src={ `${imgSrc}/preview` }
      />

      <div>
        <h2 data-testid="recipe-title">{title}</h2>
        <button type="button" onClick={ shareClick }>
          {copyClicked ? 'Link copiado!' : <Icon icon="share" testid="share-btn" /> }
        </button>

        <button
          type="button"
          onClick={ () => {
            toggleFavorite(item);
            // A action toggleFavorite recebe como parametro o item recebido diretamente pelo fetch e altera o estado de favorito da receita
            // As receitas favoritadas podem ser acessadas na chave favoriteRecipes do redux, que é um array de objetos na seguinte estrutura:
            // {
            //   id: type === 'comidas' ? item.idMeal : item.idDrink,
            //   type: type === 'comidas' ? 'meals' : 'cocktails',
            //   area: item.strArea,
            //   category: item.strCategory,
            //   name: type === 'comidas' ? item.strMeal : item.strDrink,
            // caso seja bebida possui uma chave  alcoholicOrNot
            // }
          } }
        >
          <Icon
            icon={ isFavorite === true ? 'blackheart' : 'whiteheart' }
            testid="favorite-btn"
          />

        </button>
      </div>
      <h6 data-testid="recipe-category">{subTitle}</h6>

    </div>
  );
};

DetailsHeader.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strAlcoholic: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favoriteRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ favoriteRecipes: state.favoriteRecipes });

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (item) => dispatch(toggleFavoriteAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsHeader);
