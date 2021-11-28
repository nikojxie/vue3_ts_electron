import axios from "axios";

import { ElMessage, ElMessageBox } from "element-plus";

let baseURL = process.env.baseURL;

// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 30000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use((error) => {
  console.log(error); // for debug 11
  Promise.reject(error);
});

// response 拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      ElMessage({
        message: response,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(response);
    }
  },
  (error) => {
    ElMessage({
      message: error,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
