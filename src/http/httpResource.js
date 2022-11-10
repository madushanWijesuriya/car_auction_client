import axios from "axios";

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

const requestHandler = (request) => {
  if (
    isHandlerEnabled(request) &&
    import.meta.env.VITE_SHOW_HTTP_INTERCEPTORS
  ) {
    // console.log("Request Interceptor", request);
  }
  return request;
};

const errorHandler = (error) => {
  if (
    isHandlerEnabled(error.config) &&
    import.meta.env.VITE_SHOW_HTTP_INTERCEPTORS
  ) {
    // console.log("Error Interceptor", error);

    if (error.response) {
      if (error.response.status === 401) {
        performLogout();
      }
    }
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  if (
    isHandlerEnabled(response.config) &&
    import.meta.env.VITE_SHOW_HTTP_INTERCEPTORS
  ) {
    // console.log("Response Interceptor", response);
  }
  return response;
};

instance.interceptors.request.use((request) => requestHandler(request));

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default instance;
