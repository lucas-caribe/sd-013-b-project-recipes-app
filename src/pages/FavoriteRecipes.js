import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function FavoriteRecipes() {
  const { setShowHeader, setTitleName, setShowSearchHeaderIcon } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setTitleName('Receitas Favoritas');
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>FavoriteRecipes</h1>
    </div>
  );
}
export default FavoriteRecipes;
