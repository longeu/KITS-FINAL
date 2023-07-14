import axiosClient from "./axiosConfig";

// api/productApi.js
const baseApi = {
  get: (url) => {
    return axiosClient.get(url);
  },
  post: (url, data) => {
    return axiosClient.post(url, data);
  },

};
export default baseApi;
