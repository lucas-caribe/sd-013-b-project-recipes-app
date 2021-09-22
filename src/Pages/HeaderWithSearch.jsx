import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';
import ProfileButton from './Utils/ProfileButton';
import SearchButton from './Utils/SearchButton';
import '../App.css';
import InputSearch from './Utils/InputSearch';

export default function MainFoodPage() {
  const { searchBar } = useContext(RecipesContext);
  return (
    <>
      <header>
        <ProfileButton />
        <h3 data-testid="page-title" style={ { alignSelf: 'center' } }>Comidas</h3>
        <SearchButton />
      </header>
      {searchBar && <InputSearch />}
    </>
  );
}
