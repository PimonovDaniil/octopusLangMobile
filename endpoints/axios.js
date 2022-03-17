import axiosPackage from 'axios';
import {API_URL} from "@env"

export const baseURL = API_URL;

export const axios = axiosPackage.create({
  headers: {},
  baseURL,
});
