import React, { useContext, useEffect } from 'react';
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
    <div>
      <Cards />
    </div>
  );
}
export default Foods;
