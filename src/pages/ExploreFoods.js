import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function ExploreFoods() {
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
      setTitleName('Explorar Comidas');
    }
    handleHeader();
  }, []);

  return (
    <main data-testid="footer">
      <Link to="/explorar/comidas/ingredientes">
        <Button
          btnText="Por Ingredientes"
          dataTest="explore-by-ingredient"
          type="button"
        />
      </Link>
      <Link to="/explorar/comidas/area">
        <Button
          btnText="Por Local de Origem"
          dataTest="explore-by-area"
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

export default ExploreFoods;
