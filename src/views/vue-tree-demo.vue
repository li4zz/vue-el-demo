<template>
  <div>
    <ul class="T_down" v-for="(menuItem, index) in myMailTree" :key="index">
      <Item2 :treeData="menuItem"></Item2>
    </ul>
  </div>
</template>
<script>
// 导入递归组件
import Item2 from "@/components/Item2.vue";
export default {
  name: "App",
  data() {
    return {
      myMailTree: [
        {
          id: 0,
          label: "发件箱",
          children: [],
        },
        {
          id: 1,
          label: "收件箱",
          children: [
            {
              id: 11,
              label: "常用邮件",
            },
            {
              id: 12,
              label: "常用邮件",
              children: [
                {
                  id: 11,
                  label: "常用邮件",
                  children: [
                    {
                      id: 11,
                      label: "常用邮件",
                    },
                    {
                      id: 12,
                      label: "常用邮件",
                      children: [
                        {
                          id: 11,
                          label: "常用邮件",
                        },
                        {
                          id: 12,
                          label: "常用邮件",
                          children: [
                            {
                              id: 11,
                              label: "常用邮件",
                            },
                            {
                              id: 12,
                              label: "常用邮件",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 12,
                  label: "常用邮件",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "草稿箱",
        },
      ],
    };
  },
  components: {
    // 注册组件
    Item2,
  },
};
</script>
<style lang="less">
ul.T_down {
  //菜单树
  // border: 1px solid red;
  background-color: #fff;
  padding-left: 17px;
  line-height: 35px;
  li {
    > h3 {
      // border: 1px solid red;
      font-weight: normal;
      font-size: 14px;
      padding-left: 23px;
      cursor: default;
      position: relative;
      > i.iconfont {
        display: block;
        width: 23px;
        height: 100%;
        text-align: center;
        font-size: 12px;
        position: absolute;
        left: 0;
        top: 0;
        &:hover {
          color: #008cee;
          cursor: pointer;
        }
      }
      > span.label {
        color: #555;
        > em {
          font-size: 12px;
          font-style: normal;
          color: #888;
        }
      }
      &:hover {
        background-color: #ddd;
        span.T_set {
          display: block;
        }
      }
      span.T_set {
        float: right;
        margin-right: 10px;
        display: none;
        i.iconfont {
          display: inline-block;
          padding: 0 2px;
          font-size: 13px;
          &:hover {
            color: #008cee;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
