"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var syncVar = function syncVar(node, binding, vnode) {
  if (binding.arg) {
    binding.value[binding.arg] = node.offsetWidth < node.scrollWidth;
  } else {
    vnode.context[binding.expression] = node.offsetWidth < node.scrollWidth;
  }
};

var _default = {
  install: function install(Vue) {
    Vue.directive('trunced', {
      inserted: function inserted(el, binding, vnode) {
        var node = binding.modifiers.parent ? el.parentNode : el;
        syncVar(node, binding, vnode);
        var ro = new _resizeObserverPolyfill["default"](function (entries, observer) {
          entries[0].target && syncVar(node, binding, vnode);
        });
        ro.observe(node);
      },
      componentUpdated: function componentUpdated(el, binding, vnode) {
        var node = binding.modifiers.parent ? el.parentNode : el;
        syncVar(node, binding, vnode);
      }
    });
  }
};
exports["default"] = _default;