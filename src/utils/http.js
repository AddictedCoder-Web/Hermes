import axios from "axios";

export const http = axios.create({});

//请求拦截器
const beforeHttp = (config) => {
  const token = localStorage.getItem("token");
  token && (config.headers.Authorization = `Bearer ${token}`);
  return config;
};

http.interceptors.request.use(beforeHttp);
