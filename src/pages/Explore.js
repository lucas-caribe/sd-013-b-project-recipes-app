import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function Explore() {
  const {
    setShowHeader,
    setTitleName,
    setShowSearchHeaderIcon,
    setShowFooter } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setShowFooter(true);
      setTitleName('Explorar');
    }
    handleHeader();
  }, []);

  return (
    <main>
      <Link to="/explorar/comidas">
        <Button
          btnText="Explorar Comidas"
          dataTest="explore-food"
          type="button"
        />
      </Link>
      <Link to="/explorar/bebidas">
        <Button
          btnText="Explorar Bebidas"
          dataTest="explore-drinks"
          type="button"
        />
      </Link>
    </main>
  );
}

export default Explore;
