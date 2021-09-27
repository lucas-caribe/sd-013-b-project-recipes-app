import { SET_DETAILS, SET_RECOMENDATIONS } from '../action';

const INITIAL_STATE = {
  results: [],
  recomendations: {},
};

export default function detailsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_DETAILS:
    return ({ ...state, results: [...payload] });
  case SET_RECOMENDATIONS:
    return ({ ...state, recomendations: payload });
  default:
    return state;
  }
}
