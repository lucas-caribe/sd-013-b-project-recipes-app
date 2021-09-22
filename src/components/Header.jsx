import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.State = {

    };
  }

  render() {
    this.openSearchBar = this.state;
    console.log(this.openSearchBar);
    return (
      <div>
        <button type="button" dat-testid="search-top-btn">
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Header;
