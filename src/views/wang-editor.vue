<template>
  <div style="border: 1px solid #ccc; width: 900px; margin: 0 auto">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model.trim="html"
      style="height: 500px; overflow-y: hidden"
      :default-config="editorConfig"
      :mode="mode"
      @onChange="onChange"
      @onCreated="onCreated"
    />
  </div>
</template>
<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { uploadFile } from "@/api/index.js";
// import { DomEditor } from "@wangeditor/editor";
const editorConfig = {
  // JS 语法
  MENU_CONF: {},

  // 其他属性...
};
editorConfig.MENU_CONF["uploadImage"] = {
  server: "/concatenation/dzznInfo/upload",
  fieldName: "multipartFile",
  // 自定义增加 http  header
  headers: {
    Authorization: "",
  },
  async customUpload(file, insertFn) {
    // JS 语法
    console.log(file);
    const fileData = new FormData();
    fileData.append("multipartFile", file);
    uploadFile(fileData).then((res) => {
      insertFn(res.data.filePath, "", "");
    });
  },
  // 继续写其他配置...
  // 【注意】不需要修改的不用写，wangEditor 会去 merge 当前其他配置
};
export default {
  components: { Editor, Toolbar },
  props: {
    // value: {
    //   type: [Number, String],
    //   default: undefined,
    // },
  },
  data() {
    return {
      editor: null,
      editorContentHtml: null,
      editorContentText: null,
      html: undefined,
      toolbarConfig: {},
      editorConfig,
      mode: "default", // or 'simple'
    };
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    // }, 1500)
  },
  watch: {
    // value(nl, ol) {
    //   this.html = this.value;
    //   console.log(nl, ol, "====================");
    //   this.onChange(this.editor);
    // },
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      // 配置工具栏
      this.toolbarConfig = {
        excludeKeys: ["fullScreen", "group-video", "insertImage"],
      };
      this.editorContentText = editor.getText();
      if (this.editorContentText) {
        this.editorContentHtml = editor.getHtml();
        this.$emit("change", this.editorContentHtml);
      } else {
        this.$emit("change", "");
      }
    },
    onChange(editor) {
      console.log("onChange", editor.getHtml()); // onChange 时获取编辑器最新内容
      this.editorContentText = editor.getText();
      console.log("onChange", editor.getText());
      if (this.editorContentText) {
        this.editorContentHtml = editor.getHtml();
        this.$emit("change", this.editorContentHtml);
      } else {
        this.$emit("change", "");
      }
    },
  },
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style>
/* .notice { */
table {
  border: none;
  border-collapse: collapse;
  margin-top: 25px;
}
table td,
table th {
  border: 1px solid #ccc;
  padding: 3px 5px;
  min-width: 50px;
  height: 20px;
}
table th {
  border-right: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}
ul,
ol {
  margin: 10px 0 10px 20px;
}
pre {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  padding: 10px;
  margin: 5px 0px;
  font-size: 0.8em;
  border-radius: 3px;
}
.ql-editor ul li {
  list-style-type: disc;
}
.ql-editor ol li {
  list-style-type: decimal;
}
/* } */
</style>
