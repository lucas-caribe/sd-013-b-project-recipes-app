import { SAVE_EMAIL } from '../Actions/index';

const USER_INITIAL_STATE = {
  email: '',
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.state };
  default:
    return state;
  }
};

export default user;
