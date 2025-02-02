const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_INPUT = "UPDATE_MESSAGE_INPUT";

const initialState = {
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
    case SEND_MESSAGE: {
      const text = state.newMessageText.trim();
      if (!text) return state;

      return {
        ...state,
        messages: [...state.messages, { id: Date.now(), message: text }],
        newMessageText: "",
      };
    }
    case UPDATE_MESSAGE_INPUT:
      return { ...state, newMessageText: action.value };

    default:
      return state;
  }
};

export const createSendMessageAction = () => ({ type: SEND_MESSAGE });
export const createMessageInputChangeAction = (value) => ({ type: UPDATE_MESSAGE_INPUT, value });

export default dialogsReducer;
