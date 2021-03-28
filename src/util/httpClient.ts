import axios from "axios";

const SECONDS = 1000;

const instance = axios.create({
  timeout: SECONDS * 6,
});

instance.interceptors.request.use(
  async (config) => config,
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    if (error.response?.status) {
      switch (error.response.status) {
        case 400:
          break;
        case 401:
          break;
        case 404:
          break;
        case 500:
          break;
        default:
          break;
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  }
);

export default instance;
