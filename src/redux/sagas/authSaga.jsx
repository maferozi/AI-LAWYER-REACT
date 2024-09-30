import { call, put, takeLatest } from "redux-saga/effects";
import { 
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    ME_REQUEST,
    ME_SUCCESS,
    ME_FAILURE,  
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
} from "../constants/auth.constant";
import { LoginApi, meApi, registerApi } from "../api/authApi";
import { loginFailure, loginSuccess, meFailure, meSuccess, registerFailure, registerSuccess } from "../action/auth.action";

function* getLoginRequest(action){
    try {
        const response = yield call(LoginApi,action.payload);
        yield put(loginSuccess(response));
        
    } catch (error) {
        console.log(error);
        yield put(loginFailure(error));
    }

    
}
function *getRegisterRequest(action){

    try {
        const response = yield call(registerApi,action.payload);
        console.log(response);
        yield put(registerSuccess(response));
        
    } catch (error) {
        console.log(error);
        yield put(registerFailure(error));
    }

}
function *getMeRequest(){
    try {
        const response = yield call(meApi);
        console.log(response);
        yield put(meSuccess(response));
        
    } catch (error) {
        console.log(error);
        yield put(meFailure(error));
    }
}

export default function * authSaga(){
    yield takeLatest(LOGIN_REQUEST, getLoginRequest);
   yield takeLatest(ME_REQUEST, getMeRequest);
   yield takeLatest(REGISTER_REQUEST, getRegisterRequest);
}
