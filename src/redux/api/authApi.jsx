import axios from "axios";
import axiosInstance from "./axiosInstance";
import { BASE_URL } from "../../constants";

export function meApi() {
  return axiosInstance.get(`${BASE_URL}/auth/me`).then((res) => res.data);
}
export function LoginApi(payload) {
  console.log(payload)
  return axios
    .post(`${BASE_URL}/auth/login`, payload)
    .then((res) => res.data);
}
export function registerApi(body) {
  return axios.post(`${BASE_URL}/auth/register`, body).then((res) => res.data);
}

