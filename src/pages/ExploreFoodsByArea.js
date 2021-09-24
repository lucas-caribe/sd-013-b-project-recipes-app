import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function ExploreFoodsByArea() {
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
      setTitleName('Explorar Origem');
    }
    handleHeader();
  }, []);

  return (
    <div>
      <h1>ExploreFoodsByArea</h1>
    </div>
  );
}
export default ExploreFoodsByArea;
