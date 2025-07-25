"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    dataList: []
  },
  getters: {
    getDataList: function getDataList(state) {
      return function () {
        var arr = [];
        var res = arr.concat(state.dataList);
        return res;
      };
    }
  },
  mutations: {
    addDataList: function addDataList(state, data) {
      state.dataList.push(data);
    },
    clearDataList: function clearDataList(state) {
      // state.dataList.length = 0;
      state.dataList.length = 0;
      console.log(state.dataList.length);
    }
  },
  actions: {}
});

exports["default"] = _default;