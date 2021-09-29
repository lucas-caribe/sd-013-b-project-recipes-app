import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LowerMenu.css';
import Icon from './Icon';

class LowerMenu extends Component {
  render() {
    return (
      <footer className="footer" data-testid="footer">
        <Link to="/bebidas">
          <Icon icon="drink" testid="drinks-bottom-btn" />
        </Link>
        <Link to="/explorar">
          <Icon icon="explore" testid="explore-bottom-btn" />
        </Link>
        <Link to="/comidas">
          <Icon icon="meal" testid="food-bottom-btn" />
        </Link>
      </footer>
    );
  }
}

export default LowerMenu;
