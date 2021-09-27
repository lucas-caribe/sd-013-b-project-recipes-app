import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressRecipe from '../components/ProgressRecipe';
import fetchIdComidas from '../services/fetchIdComidas';
import { modifyMealRecipeInfo } from '../GlobalFuncs/modifyRecipeInfo';

function ProgressoComida({ match: { params: { id } } }) {
  const [recipeInfo, setRecipeInfo] = useState(undefined);

  const fetchId = useCallback(async () => {
    setRecipeInfo(await fetchIdComidas(id));
  }, [id]);

  useEffect(() => {
    fetchId();
  }, [fetchId]);

  if (recipeInfo === undefined) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main>
      <ProgressRecipe recipe={ modifyMealRecipeInfo(recipeInfo) } />
    </main>
  );
}

ProgressoComida.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProgressoComida;
