import { SET_USER } from '../action';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const loginData = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
  case SET_USER:
    return { ...payload };
  default:
    return state;
  }
};

export default loginData;
