import { updateUI } from "../../render";

let state = {
  profile: {
    posts: [
      { id: 1, message: "Tomorrow can take care of itself." },
      { id: 2, message: "Here we go again.." },
      { id: 3, message: "" },
      { id: 4, message: "" },
    ],
    newPostText: "",
  },
  dialogs: [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Сергей" },
    { id: 4, name: "Анна" },
  ],
  messages: [
    { id: 1, message: "Привет! Как дела?" },
    { id: 2, message: "Что нового?" },
    { id: 3, message: "Давно не виделись!" },
  ],
};

export function addPost(postMessage) {
  let newPost = {
    id: state.profile.posts.length ? state.profile.posts[state.profile.posts.length - 1].id + 1 : 1,
    message: postMessage,
  };
  if (newPost.message) state.profile.posts.push(newPost);
  state.profile.newPostText = "";
  updateUI(state);
}

export function updatePostInput(value) {
  state.profile.newPostText = value;
  updateUI(state);
}

export default state;