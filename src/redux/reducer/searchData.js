import { SET_SEARCH } from '../action';

const INITIAL_STATE = {
  results: [],
};

export default function searchReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_SEARCH:
    return ({ ...state, results: payload });
  default:
    return state;
  }
}
