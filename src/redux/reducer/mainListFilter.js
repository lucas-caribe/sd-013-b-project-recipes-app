import { SET_MAIN_LIST_FILTER_CATEGORY } from '../action';

const INITIAL_STATE = [];

const mainListFilter = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
  case SET_MAIN_LIST_FILTER_CATEGORY:
    return [...payload];
  default:
    return state;
  }
};

export default mainListFilter;
