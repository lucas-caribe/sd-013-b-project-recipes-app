import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilteredItems } from '../Redux/Actions';

function FilterButton({ filter, actualFilter, changeActualFilter, filterItens, type }) {
  return (
    <button
      type="button"
      data-testid={ `${filter}-category-filter` }
      onClick={ () => {
        if (filter === actualFilter) {
          filterItens(type, 'name', '');
        } else {
          filterItens(type, 'filter', filter);
          changeActualFilter(filter);
        }
      } }
    >
      {filter}

    </button>
  );
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  actualFilter: PropTypes.string.isRequired,
  changeActualFilter: PropTypes.func.isRequired,
  filterItens: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  filterItens: (userType, userFilter, userInput) => {
    dispatch(fetchFilteredItems(userType, userFilter, userInput));
  },
});

export default connect(null, mapDispatchToProps)(FilterButton);
