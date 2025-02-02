const ADD_POST = "ADD_POST";
const UPDATE_POST_INPUT = "UPDATE_POST_INPUT";

const initialState = {
  posts: [
    { id: 1, message: "Tomorrow can take care of itself." },
    { id: 2, message: "Here we go again.." },
    { id: 3, message: "" },
    { id: 4, message: "" },
  ],
  newPostText: "",
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

    default:
      return state;
  }
};

export const createAddPostAction = () => ({ type: ADD_POST });
export const createPostInputChangeAction = (value) => ({ type: UPDATE_POST_INPUT, value });

export default profileReducer;
