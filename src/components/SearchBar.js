import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        data-testid="search-input"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
