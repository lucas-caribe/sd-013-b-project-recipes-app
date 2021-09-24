import { STORE_USER_INFO } from '../Actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const userInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STORE_USER_INFO:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default userInfo;
