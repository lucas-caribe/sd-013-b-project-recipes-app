import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Drinks() {
  const { setShowHeader, setTitleName, setShowSearchHeaderIcon } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(true);
      setTitleName('Bebidas');
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>Drinks</h1>
    </div>
  );
}
export default Drinks;
