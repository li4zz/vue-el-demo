<!-- Eltable+Eltree实现数据展示 -->
<template>
  <div class="tree-table-container">
    <el-table
      ref="treeTable"
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      :default-expanded-keys="defaultExpandedRows"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      highlight-current-row
      @current-change="handleCurrentChange"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="label" label="名称" width="220">
        <template slot-scope="{ row }">
          <span class="custom-tree-node">
            <i
              :class="[
                'tree-node-icon',
                row.children && row.children.length
                  ? 'el-icon-folder'
                  : 'el-icon-folder-opened',
              ]"
            ></i>
            <span class="node-label">{{ row.label }}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="code" label="编码" width="180"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "PersistentTreeTable",
  data() {
    return {
      tableData: [
        {
          id: 1,
          label: "一级目录",
          code: "A001",
          time: "2023-01-01",
          children: [
            {
              id: 4,
              label: "一级目录1",
              code: "A001-01",
              time: "2023-01-02",
              children: [
                {
                  id: 9,
                  label: "一级目录1-1",
                  code: "A001-01-01",
                  time: "2023-01-03",
                },
                {
                  id: 10,
                  label: "一级目录1-2",
                  code: "A001-01-02",
                  time: "2023-01-04",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "二级目录",
          code: "A002",
          time: "2023-02-01",
          children: [
            {
              id: 5,
              label: "二级目录1",
              code: "A002-01",
              time: "2023-02-02",
            },
            {
              id: 6,
              label: "二级目录2",
              code: "A002-02",
              time: "2023-02-03",
              children: [
                {
                  id: 11,
                  label: "二级目录2-1",
                  code: "A002-02-01",
                  time: "2023-02-04",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "三级文件",
          code: "A003",
          time: "2023-03-01",
        },
      ],
      currentRow: null,
      defaultExpandedRows: [], // 默认展开的行
    };
  },
  created() {
    // 初始化时设置第一个节点为默认展开
    if (this.tableData.length > 0) {
      this.defaultExpandedRows = [this.tableData[0].id];
      console.log(this.defaultExpandedRows, "this.defaultExpandedRows");
    }
  },
  mounted() {
    this.restoreSelectedNode();
  },
  methods: {
    // 处理行选中事件
    handleCurrentChange(val) {
      this.currentRow = val;
      if (val) {
        // 保存选中节点ID到localStorage
        localStorage.setItem("selectedTreeNodeId", val.id.toString());
      } else {
        localStorage.removeItem("selectedTreeNodeId");
      }
    },

    // 设置行样式
    tableRowClassName({ row }) {
      if (this.currentRow && row.id === this.currentRow.id) {
        return "current-row";
      }
      return "";
    },

    // 恢复选中的节点
    restoreSelectedNode() {
      const savedId = localStorage.getItem("selectedTreeNodeId");
      if (savedId) {
        // 延迟执行确保表格渲染完成
        this.$nextTick(() => {
          const node = this.findNodeById(this.tableData, parseInt(savedId));
          if (node) {
            this.$refs.treeTable.setCurrentRow(node);
            this.currentRow = node;
            // 确保选中节点的所有父节点都是展开的
            this.expandParentNodes(node);
          }
        });
      }
    },

    // 递归查找节点
    findNodeById(nodes, id) {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node.children && node.children.length) {
          const found = this.findNodeById(node.children, id);
          if (found) return found;
        }
      }
      return null;
    },

    // 展开所有父节点
    expandParentNodes(node) {
      const parent = this.findParentNode(this.tableData, node.id);
      if (parent) {
        this.$refs.treeTable.toggleRowExpansion(parent, true);
        this.expandParentNodes(parent);
      }
    },

    // 查找父节点
    findParentNode(nodes, childId, parent = null) {
      for (const node of nodes) {
        if (node.id === childId) return parent;
        if (node.children && node.children.length) {
          const found = this.findParentNode(node.children, childId, node);
          if (found) return found;
        }
      }
      return null;
    },
  },
};
</script>

<style scoped>
.tree-table-container {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 高亮当前行样式 */
.el-table .current-row {
  background-color: blue !important;
}

/* 树形节点样式 */
.custom-tree-node {
  /* display: flex; */
  align-items: center;
  height: 100%;
}

.tree-node-icon {
  margin-right: 8px;
  font-size: 16px;
}

.tree-node-icon.el-icon-folder {
  color: #f0ad4e; /* 文件夹图标颜色 */
}

.tree-node-icon.el-icon-document {
  color: #67c23a; /* 文件图标颜色 */
}

.node-label {
  flex: 1;
}

/* 自定义树形箭头样式 */
.el-table__expand-icon {
  color: #000 !important; /* 黑色实心箭头 */
  font-weight: bold;
  position: relative;
}

.el-table__expand-icon .el-icon-arrow-right:before {
  content: "\e6df"; /* 使用实心箭头图标 */
  font-size: 16px;
}

.el-table__expand-icon--expanded .el-icon-arrow-right:before {
  content: "\e6e0"; /* 展开状态的实心箭头图标 */
}

/* 调整树形缩进 */
.el-table .el-table__indent {
  padding-left: 0;
}

.el-table .el-table__row .el-table__expand-icon {
  margin-right: 0;
}

/* 鼠标悬停样式 */
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #f5f7fa !important;
}

/* 表头样式 */
.el-table__header th {
  background-color: #f5f7fa;
  color: #333;
  font-weight: bold;
}
</style>
