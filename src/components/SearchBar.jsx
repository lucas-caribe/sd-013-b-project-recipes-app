import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.State = {

    };
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          value="ingredient"
          name="gender"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
        <input
          type="radio"
          value="name"
          name="gender"
          data-testid="name-search-radio"
        />
        Nome
        <input
          type="radio"
          value="first-letter"
          name="gender"
          data-testid="first-letter-search-radio"
        />
        Primeira Letra
        <button type="button" data-testid="exec-search-btn">Buscar</button>
      </div>
    );
  }
}

export default SearchBar;
