import { SET_COCKTAIL, SET_MEAL } from '../action';

const INITIAL_STATE = {
  results: [],
};

export default function searchReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_MEAL:
    return ({ ...state, results: payload });
  case SET_COCKTAIL:
    return ({ ...state, results: payload });
  default:
    return state;
  }
}
