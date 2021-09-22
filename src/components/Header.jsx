import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSearchbar as setSearchbarAction } from '../Redux/actions/index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.State = {

    };
    this.openSearchBar = this.openSearchBar.bind(this);
  }

  openSearchBar() {
    const { setSearchbar, search } = this.props;
    setSearchbar(!search);
    console.log(search);
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          data-testid="search-top-btn"
          onClick={ this.openSearchBar }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

Header.propTypes = {
  setSearchbar: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchbar: (payload) => dispatch(setSearchbarAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
