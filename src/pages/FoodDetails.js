import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function FoodDetails() {
  const { setShowHeader } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(false);
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>FoodDetails</h1>
    </div>
  );
}
export default FoodDetails;
