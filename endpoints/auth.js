import axios from "axios";
import {API_URL} from "@env"
import {useStore} from "effector-react";
import {refreshToken, token} from "../store/token";

const queryString = require('query-string');
const baseUrl = API_URL;
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  }
}

axios.interceptors.response.use(
  r => r,
  async error => {
    alert("test");
    if (error.response.status !== 401) {
      throw error;
    }
  });

export const getToken = async (authData) => {
  return await axios.post(`${baseUrl}/auth/auth`, queryString.stringify(authData), config);
}

export const checkToken = async (token) => {
  config.headers["Authorization"] = token ? `Bearer ${token}` : '';
  return await axios.get(`${baseUrl}/auth/checkAuth`, config);
}


export const registration = async (registrationData) => {
  return await axios.post(`${baseUrl}/auth/register`, queryString.stringify(registrationData), config);
}


