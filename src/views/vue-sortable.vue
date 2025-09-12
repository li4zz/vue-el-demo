<!-- vue-sortable表格拖动 -->
<template>
  <div id="app">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :span-method="objectSpanMethod"
      row-key="id"
    >
      <el-table-column
        prop="department"
        label="部门名称"
        width="150"
      ></el-table-column>
      <el-table-column prop="indexName" label="指标名称" width="200">
        <template slot-scope="scope">
          <i class="el-icon-rank drag-handle"></i>
          {{ scope.row.indexName }}
        </template>
      </el-table-column>
      <el-table-column prop="value" label="指标值"></el-table-column>
      <el-table-column prop="target" label="目标值"></el-table-column>
      <el-table-column prop="completion" label="完成率">
        <template slot-scope="scope">
          {{ ((scope.row.value / scope.row.target) * 100).toFixed(2) }}%
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          department: "研发部",
          indexName: "项目完成数",
          value: 15,
          target: 20,
        },
        {
          id: 2,
          department: "研发部",
          indexName: "代码质量",
          value: 92,
          target: 95,
        },
        {
          id: 3,
          department: "研发部",
          indexName: "技术创新",
          value: 8,
          target: 10,
        },
        {
          id: 4,
          department: "市场部",
          indexName: "市场占有率",
          value: 18.5,
          target: 20,
        },
        {
          id: 5,
          department: "市场部",
          indexName: "品牌知名度",
          value: 85,
          target: 90,
        },
        {
          id: 6,
          department: "销售部",
          indexName: "销售额",
          value: 500,
          target: 450,
        },
        {
          id: 7,
          department: "销售部",
          indexName: "客户满意度",
          value: 96,
          target: 95,
        },
        {
          id: 8,
          department: "销售部",
          indexName: "新客户数",
          value: 35,
          target: 30,
        },
        {
          id: 9,
          department: "人力资源部",
          indexName: "招聘完成率",
          value: 88,
          target: 85,
        },
        {
          id: 10,
          department: "人力资源部",
          indexName: "员工满意度",
          value: 90,
          target: 88,
        },
      ],
      spanArr: [], // 存储合并信息
    };
  },
  watch() {},
  mounted() {
    this.rowSpan();
    this.setSortable();
  },
  methods: {
    // 计算合并行
    rowSpan() {
      this.spanArr = [];
      let pos = 0;
      const departments = {};

      // 计算每个部门有多少行
      this.tableData.forEach((item, index) => {
        if (index === 0) {
          this.spanArr.push(1);
          pos = 0;
        } else {
          if (
            this.tableData[index].department ===
            this.tableData[index - 1].department
          ) {
            this.spanArr[pos] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            pos = index;
          }
        }

        // 存储每个部门的行索引
        if (!departments[item.department]) {
          departments[item.department] = [];
        }
        departments[item.department].push(index);
      });
    },

    // 合并单元格
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const rowspan = this.spanArr[rowIndex];
        const colspan = rowspan > 0 ? 1 : 0;
        return {
          rowspan: rowspan,
          colspan: colspan,
        };
      }
    },

    // 设置行拖拽排序
    setSortable() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;

      Sortable.create(tbody, {
        handle: ".drag-handle",
        ghostClass: "sortable-ghost",
        onEnd({ oldIndex, newIndex }) {
          // 获取拖拽的行数据
          const movedItem = _this.tableData[oldIndex];

          // 确定拖拽行的部门
          const department = movedItem.department;

          // 获取该部门的所有行索引
          const departmentRows = [];
          _this.tableData.forEach((item, index) => {
            if (item.department === department) {
              departmentRows.push(index);
            }
          });

          // 检查是否在同一个部门内拖动
          const oldInDepartment = departmentRows.includes(oldIndex);
          const newInDepartment = departmentRows.includes(newIndex);
          console.log(
            departmentRows,
            oldInDepartment,
            newInDepartment,
            "departmentRows"
          );

          if (!oldInDepartment || !newInDepartment) {
            _this.$message.warning("只能在同一部门内调整顺序");
            return;
          }

          // 更新数据顺序
          const newData = [..._this.tableData];

          // 移除原位置的数据
          newData.splice(oldIndex, 1);
          // 插入到新位置
          newData.splice(newIndex, 0, movedItem);

          // 更新表格数据
          _this.tableData = newData;

          // 重新计算合并
          _this.$nextTick(() => {
            _this.rowSpan();
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-table .warning-row {
  background: #f0f9eb;
}
.sortable-ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.department-header {
  background-color: #f5f7fa;
  font-weight: bold;
}
.container {
  padding: 20px;
}
.drag-handle {
  cursor: move;
  margin-right: 8px;
  color: #909399;
}
.controls {
  margin-bottom: 20px;
}
</style>
