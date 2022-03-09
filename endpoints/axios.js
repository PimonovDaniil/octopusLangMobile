import axiosPackage from 'axios';
import {API_URL} from "@env"


export const baseURL = API_URL;

export const axios = axiosPackage.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  baseURL,
});
