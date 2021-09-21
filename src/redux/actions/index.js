const actionLogin = (email) => ({
  type: 'ACTION_LOGIN',
  payload: {
    email,
  },
});

export default actionLogin;
