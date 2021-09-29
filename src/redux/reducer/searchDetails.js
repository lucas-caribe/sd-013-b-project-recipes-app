import { SET_DETAILS } from '../action';

const INITIAL_STATE = {
  results: {},
};

export default function detailsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_DETAILS:
    return ({ ...state, results: payload[0] });
  default:
    return state;
  }
}
