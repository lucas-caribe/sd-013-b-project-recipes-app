import { INGREDIENT_FILTERS, NAME_FILTERS, FIRSTLETTER_FILTERS } from '../actions';

const INITIAL_STATE = {
  ingredientsRadio: false,
  nameRadio: false,
  firstLetterRadio: false,
};

function radioFilters(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INGREDIENT_FILTERS:
    return {
      ...state,
      ingredientsRadio: action.payload.ingredientsRadio,
    };
  case NAME_FILTERS:
    return {
      ...state,
      nameRadio: action.payload.nameRadio,
    };
  case FIRSTLETTER_FILTERS:
    return {
      ...state,
      firstLetterRadio: action.payload.firstLetterRadio,
    };
  default:
    return state;
  }
}

export default radioFilters;
