import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer data-testid="footer">
        <Link to="/" data-testid="drinks-bottom-btn">Drinks</Link>
        <Link to="/" data-testid="explore-bottom-btn">Explorar</Link>
        <Link to="/" data-testid="food-bottom-btn">Comidas</Link>
      </footer>
    </div>
  );
}

export default Footer;
