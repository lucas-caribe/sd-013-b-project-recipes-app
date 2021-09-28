import React, { useContext, useEffect } from 'react';
import DrinkCardSpace from '../component/DrinkCardSpace';
import Context from '../context/Context';

function Drinks() {
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
      setTitleName('Bebidas');
    }
    handleHeader();
  }, []);

  return (
    <main>
      <DrinkCardSpace />
    </main>
  );
}
export default Drinks;
