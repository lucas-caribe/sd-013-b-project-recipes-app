import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function InProcessDrink() {
  const { setShowHeader, setShowFooter } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(false);
      setShowFooter(false);
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>InProcessDrink</h1>
    </div>
  );
}
export default InProcessDrink;
