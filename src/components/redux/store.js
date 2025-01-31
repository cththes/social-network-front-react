import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profile: {
      posts: [
        { id: 1, message: "Tomorrow can take care of itself." },
        { id: 2, message: "Here we go again.." },
        { id: 3, message: "" },
        { id: 4, message: "" },
      ],
      newPostText: "",
    },
    dialogs: {
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
      newMessageText: "",
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profile, action);
    dialogsReducer(this._state.dialogs, action);
    this._callSubscriber(this._state);
  },
};

export default store;
