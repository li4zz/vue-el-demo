import axios from "axios";
// import qs from 'qs'
import { Message, Loading } from "element-ui";

/**
 * 自定义config参数
 * @param isLoading 是否启用全局loading
 */
let customOptions = {
  isLoading: true,
};
// 请求数量
let requestCount = 0;
// loading实例
let loading;

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: 'http://192.168.57.198:9000/',
  timeout: 10000 * 5,
  withCredentials: true, //跨域携带cookie
  // headers: { 'X-Custom-Header': 'foobar' },
});
// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config = { ...customOptions, ...config };
    config.headers["Content-Type"] = "application/json";
    requestCount++;
    if (requestCount === 1 && config.isLoading) {
      // loading = Loading.service()
      loading = Loading.service({
        lock: true,
        text: "Loading",
        target: document.querySelector(".el-main"),
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.7)",
      });
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // console.log(response, 'response')
    // 对响应数据做点什么
    requestCount--;
    if (requestCount === 0 && loading) {
      loading.close();
    }
    // 没有特殊的responseType
    if (!response.config.responseType) {
      const { result, msg } = response.data;
      if (result) return response.data;
      else {
        Message.error(msg);
        return Promise.reject(response.data);
      }
    }
    return response.data;
  },
  (error) => {
    let message = "";
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          message = "接口重定向了！";
          break;
        case 401:
          message = "您未登录，或者登录已经超时，请先登录！";
          break;
        case 403:
          message = "您没有权限操作！";
          break;
        case 404:
          message = `请求地址出错: ${error.response.config.url}`;
          break; // 在正确域名下
        case 500:
          message = "服务器内部错误！";
          break;
        case 501:
          message = "服务未实现！";
          break;
        case 502:
          message = "网关错误！";
          break;
        case 503:
          message = "服务不可用！";
          break;
        case 504:
          message = "服务暂时无法访问，请稍后再试！";
          break;
        case 505:
          message = "HTTP版本不受支持！";
          break;
        default:
          message = "异常问题，请联系管理员！";
          break;
      }
    } else if (error.message.includes("timeout")) {
      message = "请求超时";
    } else {
      message = "异常问题，请联系管理员！";
    }
    requestCount--;
    loading.close();
    Message.error(message);
    return Promise.reject(error);
  }
);

export default instance;
