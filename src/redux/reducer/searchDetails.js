import { SET_COCKTAIL_DETAILS, SET_MEAL_DETAILS, SET_RECOMENDATIONS } from '../action';

const INITIAL_STATE = {
  results: [],
  recomendations: {},
};

export default function detailsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_MEAL_DETAILS:
    return ({ ...state, results: payload });
  case SET_COCKTAIL_DETAILS:
    return ({ ...state, results: payload });
  case SET_RECOMENDATIONS:
    return ({ ...state, recomendations: payload });
  default:
    return state;
  }
}
