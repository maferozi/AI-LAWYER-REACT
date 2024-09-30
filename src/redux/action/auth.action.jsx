import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    ME_REQUEST,
    ME_SUCCESS,
    ME_FAILURE,
    CLEAR_MESSAGES,
  } from "../constants/auth.constant";
  
  export const meRequest = () => ({
    type: ME_REQUEST,
  });
  
  export const meSuccess = (body) => ({
    type: ME_SUCCESS,
    payload: body,
  });
  
  export const meFailure = (error) => ({
    type: ME_FAILURE,
    payload: error,
  });
  export const loginRequest = (email, password) => ({
    
    type: LOGIN_REQUEST,
    payload: { email, password },
  });
  export const loginSuccess = (payload) => {
    return {
      type: LOGIN_SUCCESS,
      payload: payload,  
    };
  };
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  
  export const registerRequest = (body) => ({
    type: REGISTER_REQUEST,
    payload: body,
  });
  
  export const registerSuccess = (res) => ({
    type: REGISTER_SUCCESS,
    payload: res,
  });
  
  export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });

  export const clearMesage = () => ({
    type: CLEAR_MESSAGES,
  });
  
 
  