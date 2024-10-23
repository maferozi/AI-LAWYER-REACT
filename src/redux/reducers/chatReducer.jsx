import {
  ALL_CHAT_REQUEST,
  ALL_CHAT_SUCCESS,
  ALL_CHAT_FAILURE,
  CHAT_FAILURE,
  CHAT_REQUEST,
  CHAT_SUCCESS,
  FETCH_CHAT_REQUEST,
  FETCH_CHAT_SUCCESS,
  FETCH_CHAT_FAILURE,
  NEW_CHAT,
  ADD_CHAT_TITLE,
} from "../constants/chat.constant";

const initialState = {
  currentChatId: -99,
  chat: [],
  message: [],
  loading: false,
  messageLoading: true,
  error: null,
  success: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_REQUEST:
      return {
        ...state,
        messageLoading: true,
        success: null,
        message: [
          ...state.message,
          { text: action.payload.text, type: "prompt" },
        ],
        error: null,
      };
    case CHAT_SUCCESS: {
      return {
        ...state,
        currentChatId: action.payload.chatId,
        messageLoading: false,
        success: "Message retrive successfully",
        message: [...state.message, ...action.payload.message],
        error: null,
      };
    }
    case CHAT_FAILURE:
      return {
        ...state,
        messageLoading: false,
        error: action.payload,
        success: null,
      };

    case ALL_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case ALL_CHAT_SUCCESS: {
      return {
        ...state,
        currentChatId: action.payload.data[action.payload.data.length - 1].chatId,
        loading: false,
        success: "ALL Chats retrive successfully",
        chat: action.payload.data,
        error: null,
        messageLoading:false,
      };
    }
    case ALL_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
        messageLoading:false,
      };

    case FETCH_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case FETCH_CHAT_SUCCESS: {
      return {
        ...state,
        currentChatId: action.payload.chatId,
        loading: false,
        success: "Message retrive successfully",
        message: action.payload.data,
        error: null,
      };
    }
    case FETCH_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      };

    case NEW_CHAT:
      return {
        ...state,
        currentChatId: -99,
        message: [],
      };

    case ADD_CHAT_TITLE:{
      return{
        ...state,
        chat: [...chat, {chatTitle: action.payload.chatTitle, chatId: action.payload.chatId}],
        currentChatId: action.payload.chatId,
        loading: false,
        messageLoading: false,
      }
    }
    default:
      return state;
  }
};

export default chatReducer;
