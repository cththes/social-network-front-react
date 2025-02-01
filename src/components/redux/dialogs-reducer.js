const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_INPUT = "UPDATE-MESSAGE-INPUT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const text = state.newMessageText.trim();
      if (!text) return;

      let newPost = {
        id: state.messages.length ? state.messages[state.messages.length - 1].id + 1 : 1,
        message: text,
      };

      state.messages.push(newPost);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_INPUT:
      if (state.newMessageText !== action.value) {
        state.newMessageText = action.value;
      }
      return state;
    default:
      return state;
  }
};

export let createSendMessageAction = () => ({ type: SEND_MESSAGE });

export let createMessageInputChangeAction = (value) => ({ type: UPDATE_MESSAGE_INPUT, value });

export default dialogsReducer;
