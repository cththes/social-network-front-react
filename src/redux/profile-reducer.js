const ADD_POST = "ADD_POST";
const UPDATE_POST_INPUT = "UPDATE_POST_INPUT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Here we go again.." },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const text = state.newPostText.trim();
      if (!text) return state;

      return {
        ...state,
        posts: [...state.posts, { id: Date.now(), message: text }],
        newPostText: "",
      };
    }
    case UPDATE_POST_INPUT:
      return { ...state, newPostText: action.value };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const createAddPostAction = () => ({ type: ADD_POST });
export const createPostInputChangeAction = (value) => ({ type: UPDATE_POST_INPUT, value });
export const setUserProfileAction = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
