import { FILTER_ITEMS, CLEAN_ITENS } from '../Actions';

const INITIAL_STATE = {
  itens: {},
};

const filteredItens = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FILTER_ITEMS:
    return {
      ...state,
      itens: action.payload,
    };
  case CLEAN_ITENS:
    return {
      ...INITIAL_STATE,
    };
  default:
    return state;
  }
};

export default filteredItens;
