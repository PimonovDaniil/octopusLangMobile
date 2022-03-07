import axios from "axios";
import {API_URL} from "@env"
const queryString = require('query-string');


const baseUrl = API_URL;
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  }
}
export const getToken = async (authData) => {
  return await axios.post(`${baseUrl}/auth/auth`, queryString.stringify(authData), config);
}

export const registration = async (registrationData) => {
  return await axios.post(`${baseUrl}/auth/register`, queryString.stringify(registrationData), config);
}
