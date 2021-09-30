import PropTypes from 'prop-types';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getCategories, getDefaultData } from '../services';

// Cria a context e exporta o uso dela atraves do useContext();
// Para utilizar basta importar 'useRecipesContext' e desestruturar da forma tradicional;
// Ex: import { useRecipesContext } from '../context/Provider';
// const { recipesApp, setRecipesApp } = useRecipesContext();
const RecipesContext = createContext();
export const useRecipesContext = () => useContext(RecipesContext);

function Provider({ children }) {
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    },
  );
  const [recipesApp, setRecipesApp] = useState({
    dataCategoryFoodAPI: [],
    foods: [],
    drinks: [],
    filtrar: false,
    filter: {
      search: '',
      radioSelect: '',
      typeRecipe: [],
    },
    loading: true,
    ingredientsDrink: [],
  });

  // Armazena os dados de comida e bebida recebidos da API;
  const [data, setData] = useState({
    foods: [],
    drinks: [],
  });

  const [ingredientsMeal, setIngredientsMeal] = useState([]);
  const [ingredientDrink, setIngredientsDrinks] = useState([]);

  // Estado que guardará as categorias dos botoes de cada tipo de pagina;
  const [categoryButtons, setCategoryButtons] = useState({
    foods: [],
    drinks: [],
  });

  // Funcao que seta as categorias retornadas da API;
  const setCategories = useCallback(async () => {
    setRecipesApp((prevState) => ({ ...prevState, loading: true }));
    const { meals } = await getCategories('foods');
    const { drinks } = await getCategories('drinks');
    setCategoryButtons((prevState) => ({ ...prevState, foods: meals, drinks }));
    setRecipesApp((prevState) => ({ ...prevState, loading: false }));
  }, []);
  useEffect(setCategories, [setCategories]);

  // Seta o estado inicial "data";
  const setInitialData = useCallback(async () => {
    setRecipesApp((prevState) => ({ ...prevState, loading: true }));
    const { meals } = await getDefaultData('foods');
    const { drinks } = await getDefaultData('drinks');
    setData((prevData) => ({ ...prevData, foods: meals, drinks }));
    setRecipesApp((prevState) => ({ ...prevState, loading: false }));
  }, []);
  useEffect(setInitialData, [setInitialData]);

  const contextValue = {
    login,
    data,
    recipesApp,
    ingredientsMeal,
    ingredientDrink,
    categoryButtons,
    setLogin,
    setData,
    setRecipesApp,
    setIngredientsMeal,
    setIngredientsDrinks,
    setCategoryButtons,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
