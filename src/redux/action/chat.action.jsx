import {
    CHAT_REQUEST,
    CHAT_SUCCESS,
    CHAT_FAILURE,
    ALL_CHAT_REQUEST,
    ALL_CHAT_SUCCESS,
    ALL_CHAT_FAILURE,
    FETCH_CHAT_SUCCESS,
    FETCH_CHAT_REQUEST,
    FETCH_CHAT_FAILURE,
    NEW_CHAT,
    ADD_CHAT_TITLE,
  } from "../constants/chat.constant";
  
  export const chatRequest = (body) => ({
    type: CHAT_REQUEST,
    payload: body,
  });
  
  export const chatSuccess = (body) => ({
    type: CHAT_SUCCESS,
    payload: body,
  });
  
  export const chatFailure = (error) => ({
    type: CHAT_FAILURE,
    payload: error,
  });

  export const allChatRequest = () => ({
    type: ALL_CHAT_REQUEST,
  });
  
  export const allChatSuccess = (body) => ({
    type: ALL_CHAT_SUCCESS,
    payload: body,
  });
  
  export const allChatFailure = (error) => ({
    type: ALL_CHAT_FAILURE,
    payload: error,
  });

  export const fetchChatRequest = (body) => ({
    type: FETCH_CHAT_REQUEST,
    payload: body,
  });
  
  export const fetchChatSuccess = (body) => ({
    type: FETCH_CHAT_SUCCESS,
    payload: body,
  });
  
  export const fetchChatFailure = (error) => ({
    type: FETCH_CHAT_FAILURE,
    payload: error,
  });


  export const newChat = () => ({
    type: NEW_CHAT,
  });

  export const addChatTitle = (body) => {
    return({
    type: ADD_CHAT_TITLE,
    payload: body,
  })};