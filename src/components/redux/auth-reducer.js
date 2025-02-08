const AUTH_SET_USER_DATA = "AUTH/SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER_DATA:
      return { ...state, ...action.payload, isAuth: true };
    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => ({
  type: AUTH_SET_USER_DATA,
  payload: { userId, email, login },
});

export default authReducer;
