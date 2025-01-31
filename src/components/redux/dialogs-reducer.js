const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_INPUT = "UPDATE-MESSAGE-INPUT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const text = state.newMessageText.trim();
      if (!text) return;

      let newPost = {
        id: state.messages.length
          ? state.messages[state.messages.length - 1].id + 1
          : 1,
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
