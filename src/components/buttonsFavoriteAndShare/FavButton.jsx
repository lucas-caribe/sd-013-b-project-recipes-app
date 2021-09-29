import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import { fetchDetailsThunk } from '../../redux/action';

export default function FavButton() {
  const [fav, setFav] = useState(whiteHeartIcon);
  const [RecipeFavorite, setRecipeFavorite] = useState({});
  const dispatch = useDispatch();
  const detailsResult = useSelector((state) => state.detailsReducer.results);
  const { pathname } = useLocation();
  const { id } = useParams();

  const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const createObjectMeal = (details = {}) => {
    const { idMeal, strArea, strCategory, strMealThumb, strMeal } = details;
    const obj = {
      id: idMeal,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    setRecipeFavorite(obj);
  };

  const createObjectDrink = (details = {}) => {
    const { idDrink, strAlcoholic,
      strDrink, strDrinkThumb, strCategory } = details;
    const obj = {
      id: idDrink,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    setRecipeFavorite(obj);
  };

  useEffect(() => {
    if (detailsResult.length === {}) {
      dispatch(fetchDetailsThunk(id, 'meal'));
    }
  }, []);

  useEffect(() => {
    if (pathname.includes('comida') && detailsResult) {
      createObjectMeal(detailsResult);
    }
    if (pathname.includes('bebida') && detailsResult) {
      createObjectDrink(detailsResult);
    }
    if (storage) {
      const verification = storage.some(({ id: idLocal }) => idLocal === id);
      if (verification) setFav(blackHeartIcon);
    }
  }, [pathname, detailsResult]);

  const saveInLocal = () => {
    let newArrayLocal = [];
    if (!storage) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    if (fav === blackHeartIcon && storage) {
      const verification = storage.some(({ id: idLocal }) => (
        idLocal === RecipeFavorite.id
      ));
      if (verification) {
        newArrayLocal = [...storage];
      } else {
        newArrayLocal = [...storage, RecipeFavorite];
      }
    }
    if (fav === whiteHeartIcon && storage) {
      const newArray = storage.filter(({ id: idLocal }) => idLocal !== RecipeFavorite.id);
      newArrayLocal = newArray;
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(newArrayLocal));
  };

  const handleClickChangeColor = () => {
    if (fav === whiteHeartIcon) setFav(blackHeartIcon);
    if (fav === blackHeartIcon) setFav(whiteHeartIcon);
  };

  useEffect(() => {
    saveInLocal();
  }, [fav]);

  return (
    <input
      type="image"
      alt="fav-btn"
      data-testid="favorite-btn"
      src={ fav }
      onClick={ handleClickChangeColor }
    />
  );
}
