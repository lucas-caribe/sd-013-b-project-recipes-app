import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actionInputHeader } from '../redux/actions';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageTitle, actionInpHeader }) {
  const [toggleButtonSearch, setToggleButtonSearch] = useState(false);
  const [input, setInput] = useState();

  useEffect(() => {
    actionInpHeader(input);
  }, [actionInpHeader, input]);

  return (
    <div>
      <h3 data-testid="page-title">{pageTitle}</h3>
      <button type="button" data-testid="profile-top-btn">
        <img alt="icone-profile" src={ profileIcon } />
      </button>
      <button
        type="button"
        onClick={ () => setToggleButtonSearch((prevState) => !prevState) }
        data-testid="search-top-btn"
      >
        <img alt="icone-search" src={ searchIcon } />
      </button>
      <br />
      {toggleButtonSearch && <input
        onChange={ ({ target }) => setInput(target.value) }
        data-testId="search-input"
        type="text"
      />}
    </div>
  );
}

Header.propTypes = {
  actionInpHeader: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actionInpHeader: (input) => dispatch(actionInputHeader(input)),
});

export default connect(null, mapDispatchToProps)(Header);
