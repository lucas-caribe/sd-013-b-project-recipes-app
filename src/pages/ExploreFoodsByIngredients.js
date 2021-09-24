import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function ExploreFoodsByIngredients() {
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
      <h1>ExploreFoodsByIngredients</h1>
    </div>
  );
}
export default ExploreFoodsByIngredients;
