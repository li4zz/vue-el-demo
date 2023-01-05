import axios from "./axios";
// 公共接口

/**
 * 上传附件
 */
export const uploadFile = (params) =>
  axios.post("http://192.168.57.220:9001/files/upload", params);
