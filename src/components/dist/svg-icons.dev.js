"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var req = require.context('../../../assets/icons/svg', false, /\.svg$/);

var requireAll = function requireAll(requireContext) {
  return requireContext.keys();
};

var re = /\.\/(.*)\.svg/;
var svgIcons = requireAll(req).map(function (i) {
  return i.match(re)[1];
});
var _default = svgIcons;
exports["default"] = _default;