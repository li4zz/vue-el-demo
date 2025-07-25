"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CopyClearBr = {
  install: function install(Vue) {
    Vue.component('copy-clearbr', {
      render: function render(h) {
        return h('pre', {
          style: {
            'height': '0',
            'line-height': '0',
            'font-size': '0',
            'width': '0'
          }
        }, '%%BR%%');
      }
    });
    addEventListener('copy', function (event) {
      var selection = window.getSelection();
      var str = selection.toString().replace(/\n+%%BR%%\n+/g, '');
      event.clipboardData.setData('text/plain', str);
      event.preventDefault();
    });
  }
};
var _default = CopyClearBr;
exports["default"] = _default;