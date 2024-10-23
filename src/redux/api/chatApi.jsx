import axios from "axios";
import axiosInstance from "./axiosInstance";
import { BASE_URL } from "../../constants";

export function queryChatApi(body) {
  return axiosInstance
    .post(`${BASE_URL}/embedding/search`, body)
    .then((res) => res.data);
}

export function queryallChatApi() {
  return axiosInstance
    .get(`${BASE_URL}/embedding/getAllChats`)
    .then((res) => res.data);
}

export function queryFetchChatApi(body) {
  return axiosInstance
    .post(`${BASE_URL}/embedding/getMessage`,body)
    .then((res) => res.data);
}
