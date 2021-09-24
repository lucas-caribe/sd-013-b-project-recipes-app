import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function DoneRecipes() {
  const {
    setShowHeader,
    setTitleName,
    setShowSearchHeaderIcon,
    setShowFooter } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setShowFooter(false);
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
