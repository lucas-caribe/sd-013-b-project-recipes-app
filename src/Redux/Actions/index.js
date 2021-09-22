const STORE_USER_INFO = 'STORE_USER_INFO';

const storeUser = (email, password) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
  return {
    type: STORE_USER_INFO,
    payload: {
      email,
      password,
    },
  };
};

export { STORE_USER_INFO, storeUser };
