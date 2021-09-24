import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function ExploreDrinksByIngredients() {
  const { setShowHeader, setTitleName, setShowSearchHeaderIcon } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setTitleName('Explorar Ingredientes');
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>ExploreDrinksByIngredients</h1>
    </div>
  );
}
export default ExploreDrinksByIngredients;
