import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../mini-components/Button';

function ExploreFoods() {
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
