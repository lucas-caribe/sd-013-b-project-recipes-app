import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryButtons from '../components/CategoryButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import { useRecipesContext } from '../context/Provider';
import { fetchApiRecipes } from '../services';

export default function HomeRecipes() {
  const { recipesApp, data } = useRecipesContext();
  const { pathname } = useLocation();
  const dataType = pathname.includes('/comidas') ? 'foods' : 'drinks';
  const title = pathname.includes('/comidas') ? 'Comidas' : 'Bebidas';

  if (recipesApp.loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Header
        title={ title }
      />
      <SearchInput
        fetchFood={ fetchApiRecipes }
      />
      <hr />
      <CategoryButtons />
      <hr />
      {recipesApp.filtrar
        ? <RenderCardSearch cards={ recipesApp.dataCategoryFoodAPI } />
        : <RenderCardSearch cards={ data[dataType] } />}
      <Footer />
    </div>
  );
}
