import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  ME_REQUEST,
  ME_SUCCESS,
  ME_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLEAR_MESSAGES,
} from "../constants/auth.constant";

const initialState = {
  token: null,
  user: null,
  loading: false,

  meLoading: true,
  error: null,
  success: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", action.payload.token); 
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user, 
        success: action.payload.message,
        error: null, 
      };
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        success:'User logout sucessFully',
        error:null,
      };
    case ME_REQUEST:
      return {
        ...state,
        meLoading: true,
        success: null,
        error: null,
      };
    case ME_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        meLoading: false,
        token:action.payload.token,
        user: action.payload.user,
        success: "User logged in Successfullly",
        error: null,
      };
    case ME_FAILURE:
      return {
        ...state,

        meLoading: false,
        token: null,
        user: null,
        success: null,
        error: action.payload,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        error: action.payload,
      };
      case CLEAR_MESSAGES:
      return {
        ...state,
        success: null,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
