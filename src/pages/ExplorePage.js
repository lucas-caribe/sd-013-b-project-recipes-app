import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../mini-components/Button';

function ExplorePage() {
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

export default ExplorePage;
