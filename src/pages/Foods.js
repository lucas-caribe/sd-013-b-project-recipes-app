import React, { useContext, useEffect } from 'react';
import FoodCardSpace from '../component/FoodCardSpace';
import Context from '../context/Context';
import Cards from '../component/Cards';

function Foods() {
  const {
    setShowHeader,
    setTitleName,
    setShowSearchHeaderIcon,
    setShowFooter } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(true);
      setShowFooter(true);
      setTitleName('Comidas');
    }
    handleHeader();
  }, []);

  return (
    <main>
      <FoodCardSpace />
    </main>
  );
}
export default Foods;
