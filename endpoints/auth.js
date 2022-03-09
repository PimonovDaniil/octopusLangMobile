import {API_URL} from "@env"
import React from 'react';
import {axios} from "./axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const queryString = require('query-string');
const baseUrl = API_URL;

export const getToken = async (data) => {
  return await axios.post(`${baseUrl}/auth/auth`, queryString.stringify(data));
}

export const getRefreshToken = async (data) => {
  return await axios.post(`${baseUrl}/auth/refresh`, queryString.stringify(data));
}

export const checkToken = async () => {
  return await axios.get(`${baseUrl}/auth/checkAuth`);
}

export const registration = async (data) => {
  return await axios.post(`${baseUrl}/auth/register`, queryString.stringify(data));
}


const refreshAuthLogic = failedRequest => axios.post(`${baseUrl}/auth/refresh`, queryString.stringify({
  token: axios.defaults['Token'],
  refresh: axios.defaults["Refresh"]
})).then(response => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${response.data["Token"]}`;
  axios.defaults['Refresh'] = response.data["Refresh"];
  axios.defaults['Token'] = response.data["Token"];
  return Promise.resolve();
});

createAuthRefreshInterceptor(axios, refreshAuthLogic);
