const ADD_POST = "ADD-POST";
const UPDATE_POST_INPUT = "UPDATE-POST-INPUT";

let initialState = {
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
    case ADD_POST:
      const text = state.newPostText.trim();
      if (!text) return;

      let newPost = {
        id: state.posts.length ? state.posts[state.posts.length - 1].id + 1 : 1,
        message: text,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_INPUT:
      if (state.newPostText !== action.value) {
        state.newPostText = action.value;
      }
      return state;
    default:
      return state;
  }
};

export let createAddPostAction = () => ({ type: ADD_POST });

export let createPostInputChangeAction = (value) => ({ type: UPDATE_POST_INPUT, value });

export default profileReducer;
