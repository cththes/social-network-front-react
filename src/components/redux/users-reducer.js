const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export const createFollowAction = (userId) => ({ type: FOLLOW, userId });
export const createUnfollowAction = (userId) => ({ type: UNFOLLOW, userId });
export const createSetUsersAction = (users) => ({ type: SET_USERS, users });

export default usersReducer;
