import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Foods() {
  const { setShowHeader, setTitleName, setShowSearchHeaderIcon } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(true);
      setTitleName('Comidas');
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>COMIDAS</h1>
    </div>
  );
}
export default Foods;
