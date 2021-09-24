import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function ExploreDrinks() {
  const { setShowHeader, setTitleName, setShowSearchHeaderIcon } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setTitleName('Explorar Bebidas');
    }
    handleHeader();
  }, []);

  return (
    <main data-testid="footer">
      <Link to="/explorar/bebidas/ingredientes">
        <Button
          btnText="Por Ingredientes"
          dataTest="explore-by-ingredient"
          type="button"
        />
      </Link>
      <Button
        btnText="Me Surpreenda!"
        dataTest="explore-surprise"
        type="button"
      />
    </main>
  );
}

export default ExploreDrinks;
