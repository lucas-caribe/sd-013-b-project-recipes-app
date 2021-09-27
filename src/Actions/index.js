export const USER_EMAIL = 'USER_EMAIL';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const userAction = (state) => ({
  type: USER_EMAIL,
  state,
});

export const loading = () => ({
  type: LOADING,
});

export const errorMessage = (payload) => ({
  type: ERROR,
  payload,
});
