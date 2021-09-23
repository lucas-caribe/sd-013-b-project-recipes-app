import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../mini-components/Button';

function ExploreDrinks() {
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
