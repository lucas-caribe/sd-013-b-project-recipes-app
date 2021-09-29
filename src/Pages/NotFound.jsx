import React from 'react';
import PropTypes from 'prop-types';

export default function NotFound({ history }) {
  return (
    <div>
      <h1>Not Found</h1>
      <button
        type="button"
        onClick={ () => { history.push('/'); } }
      >
        Retornar ao login
      </button>
    </div>
  );
}

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
