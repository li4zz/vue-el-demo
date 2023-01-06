<!-- 分片上传 -->
<template>
  <el-upload
    :data="{ isType: 1, need: 2 }"
    action="action"
    v-bind="$attrs"
    v-on="$listeners"
    :http-request="uploadFile"
  >
    <el-button icon="el-icon-upload2"></el-button>
  </el-upload>
</template>
<script>
// 引入上传文件方法
import { uploadNormal, uploadByPieces } from "@/api/upload.js";
// Loading
import { Loading } from "element-ui";

export default {
  methods: {
    async uploadFile({ data, file }) {
      // data是上传时附带的额外参数，file是文件
      let url = "/files/upload"; //上传接口
      let upSize = 5242880; // 上传大小默认5M（5 * 1024 * 1024）
      let loadingInstance = Loading.service({
        text: "正在上传文件，请稍后...",
      });
      try {
        // 如果文件小于5MB，直接上传
        if (file.size < upSize) {
          console.log("直接上传");
          let formData = new FormData();
          for (let key in data) {
            formData.append(key, data[key]);
          }
          formData.append("file", file);
          const res = await uploadNormal(url, formData);
          loadingInstance.close();
          return res;
        } else {
          // 如果文件大于等于5MB，分片上传
          console.log("分片上传");
          data.file = file;
          const res = await uploadByPieces(url, data);
          loadingInstance.close();
          return res;
        }
      } catch (e) {
        loadingInstance.close();
        return e;
      }
    },
  },
};
</script>
