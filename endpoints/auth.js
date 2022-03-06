import axios from "axios";

const baseUrl = 'http://192.168.1.2:8081';

export const getToken = async (user) => {
  return await axios.post(`${baseUrl}/auth/login`, user);
}
