import { call, put, takeLatest } from "redux-saga/effects";

import { queryallChatApi, queryChatApi, queryFetchChatApi } from "../api/chatApi";
import { addChatTitle, allChatFailure, allChatRequest, allChatSuccess, chatFailure, chatSuccess, fetchChatFailure, fetchChatSuccess } from "../action/chat.action";
import { ALL_CHAT_REQUEST, CHAT_REQUEST, FETCH_CHAT_REQUEST } from "../constants/chat.constant";
import { useNavigate } from "react-router-dom";
import { globalNavigate } from "../../App";


function* getChatRequest(action) {
  try {
    action.payload = { ...action.payload, type: "prompt", topK: 1};
    let response = yield call(queryChatApi, action.payload);
    const res = {
      message: [{text: response.text[0], type: response.type }],
      chatId: response.chatId,
      chatTitle: response.chatTitle,
    };

    yield put(chatSuccess(res));
    if(response.chatTitle){
        yield put(addChatTitle({chatId: response.chatId,
            chatTitle: response.chatTitle,}));   
    }
    
    globalNavigate(`/chat/${response.chatId}`)
  } catch (error) {
    
    yield put(chatFailure(error.response));
  }
}

function* getAllChatRequest() {
    try {
      let response = yield call(queryallChatApi);
      yield put(allChatSuccess(response));
    } catch (error) {
  
        yield put(allChatFailure(error.response));
    }
  }

  
function* getFetchChatRequest(action) {
    try {
      let response = yield call(queryFetchChatApi, action.payload);
      yield put(fetchChatSuccess(response));
    } catch (error) {
        
        yield put(fetchChatFailure(error.response));
    }
  }



export default function* chatSaga() {
  yield takeLatest(CHAT_REQUEST, getChatRequest);
  yield takeLatest(ALL_CHAT_REQUEST, getAllChatRequest);
  yield takeLatest(FETCH_CHAT_REQUEST, getFetchChatRequest);
}
