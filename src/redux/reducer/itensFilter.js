import { SET_ITENS_OF_FETCH } from '../action';

const INITIAL_STATE = {
  results: [],
};

export default function itensFilter(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_ITENS_OF_FETCH:
    return ({ ...state, results: payload });
  default:
    return state;
  }
}
