"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function msgboxSlider(vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sliderPropsFin = Object.assign({
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    showInput: true
  }, options.slider);
  var currentValue = sliderPropsFin.value;
  var content = vue.$createElement('el-slider', {
    style: {
      width: '380px'
    },
    props: sliderPropsFin,
    on: {
      input: function input(value) {
        currentValue = value;
        var bakSilent = _vue["default"].config.silent;
        _vue["default"].config.silent = true;
        content.componentInstance.value = value;
        _vue["default"].config.silent = bakSilent;

        if (options.onInput && typeof options.onInput === 'function') {
          options.onInput(value);
        }
      }
    }
  });
  var msgBoxPropsFin = Object.assign({
    title: '选择数值',
    showClose: false,
    confirmButtonText: '确定'
  }, options.msgBox, {
    message: content,
    beforeClose: function beforeClose(action, instance, done) {
      if (action === 'confirm' && options.beforeClose && typeof options.beforeClose === 'function') {
        options.beforeClose(currentValue, done);
      } else {
        done();
      }
    }
  });
  return new Promise(function (resolve, reject) {
    vue.$msgbox(msgBoxPropsFin).then(function () {
      resolve(currentValue);
    })["catch"](function () {
      reject(sliderPropsFin.value);
    });
  });
}

var _default = msgboxSlider;
exports["default"] = _default;