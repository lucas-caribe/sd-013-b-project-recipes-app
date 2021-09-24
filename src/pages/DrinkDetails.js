import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function DrinkDetails() {
  const { setShowHeader } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(false);
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>DrinkDetails</h1>
    </div>
  );
}
export default DrinkDetails;
