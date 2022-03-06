import axios from "axios";
import {API_URL} from "@env"


const baseUrl = API_URL;

export const getToken = async (authData) => {
  return await axios.post(`${baseUrl}/auth/login`, authData);
}
