import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function DoneRecipes() {
  const { setShowHeader, setTitleName, setShowSearchHeaderIcon } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setTitleName('Receitas Feitas');
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>DoneRecipes</h1>
    </div>
  );
}
export default DoneRecipes;
