import { SET_MAIN_LIST_FILTER_CATEGORY } from '../action';

const INITIAL_STATE = false;

const categoryFilter = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
  case SET_MAIN_LIST_FILTER_CATEGORY:
    return payload;
  default:
    return state;
  }
};

export default categoryFilter;
