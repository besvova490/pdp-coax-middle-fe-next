/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

//helpers
import { API_URL } from "../constants";


let authTokenRequest: Promise<unknown> | null = null;

const client = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" }
});

function requestNewToken() {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refreshToken");

  return axios.post(`${API_URL}/auth/refresh`, { refreshToken }).then(res => {
    const decodedAccessToken: Record<string, any> = jwtDecode(res.data.accessToken);
    const accessTokenExpTime = decodedAccessToken && new Date(decodedAccessToken.exp * 1000);
    cookies.set("accessToken", res.data.accessToken, { expires: accessTokenExpTime, path: "/" });
    cookies.set("refreshToken", res.data.refreshToken, { path: "/" });
  }).catch(error => {
    if (error.response.status === 401 || !refreshToken) {
      cookies.remove("accessToken", { path: "/" });
      cookies.remove("refreshToken", { path: "/" });
      window.location.href = "/login";
    }
  });
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = requestNewToken();
    authTokenRequest.finally(resetAuthTokenRequest);
  }

  return authTokenRequest;
}

client.interceptors.response.use(r => r, error => {
  if (!error.response) {
    return Promise.reject(error);
  }

  const originalRequest = error.config;

  // Don't try to renew while login in
  if (error.response.status === 401 && originalRequest.url) {
    if (originalRequest.url === "/auth/login") {
      return Promise.reject(error.response ? error.response : error);
    }
  }

  if (error.response.status === 401 && !originalRequest.__isRetryRequest) {
    originalRequest.__isRetryRequest = true;

    return getAuthToken().then(() => {
      const cookies = new Cookies();

      const accessToken = cookies.get("accessToken");
      originalRequest.headers.Authorization = `JWT ${accessToken}`;

      return client(originalRequest);
    }).catch(() => Promise.reject(Error("Failed to obtain renew token")));
  }

  return Promise.reject(error.response ? error.response : error);
});


const request = function (options: AxiosRequestConfig) {
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");

  const onSuccess = function (response: AxiosResponse) {
    return response.data;
  };
  const onError = function (error: any) {
    return Promise.reject(error);
  };

  if (accessToken) {
    if (!options.headers) {
      options.headers = {};
    }

    options.headers.Authorization = `JWT ${accessToken}`;
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
