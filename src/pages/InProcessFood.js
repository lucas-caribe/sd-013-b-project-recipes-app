import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function InProcessFood() {
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
      <h1>InProcessFood</h1>
    </div>
  );
}
export default InProcessFood;
