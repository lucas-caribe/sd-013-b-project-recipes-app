import React from 'react';

function Header() {
  return (
    <div>
      <header>
        <h1 data-testid="page-title">Comidas</h1>
        <button data-testid="profile-top-btn">button1</button>
        <button data-testid="search-top-btn">button2</button>
      </header>
    </div>
  );
}

export default Header;
