import React from 'react';

function renderLoginInputs({ name, type, id, onChange, value }) {
  return (
    <label htmlFor={ id }>
      <input
        type={ type }
        id={ id }
        data-testid={ id }
        onChange={ onChange }
        value={ value }
        name={ name }
      />
    </label>
  );
}

export default renderLoginInputs;
