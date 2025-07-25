"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elementUi = require("element-ui");

var _default = {
  "extends": _elementUi.DatePicker,
  name: 'ElDatePicker',
  computed: {
    parsedValue: function parsedValue() {
      var yearStartIndex = this.valueFormat ? this.valueFormat.indexOf('yyyy') : -1;
      var weekStartIndex = this.valueFormat ? this.valueFormat.indexOf('WW') : -1;
      var weekStartIndex2 = this.valueFormat ? this.valueFormat.indexOf('W') : -1;

      if (this.value && this.type === 'week' && yearStartIndex > -1 && (weekStartIndex > -1 || weekStartIndex2 > -1)) {
        var year = parseInt(this.value.substring(yearStartIndex, yearStartIndex + 4));
        var week = parseInt(this.value.substring(weekStartIndex > -1 ? weekStartIndex : weekStartIndex2).replace(/(\d{1,2}).*/g, '$1'));
        var firstWeekDayOfYear = new Date(year, 0, 1).getDay();
        var firstThursday = null;

        if (firstWeekDayOfYear <= 4) {
          firstThursday = new Date(year, 0, 1 + (4 - firstWeekDayOfYear));
        } else {
          firstThursday = new Date(year, 0, 1 + (11 - firstWeekDayOfYear));
        }

        var weekOfThursday = new Date(firstThursday.getTime() + 1000 * 60 * 60 * 24 * 7 * (week - 1));
        return weekOfThursday;
      } else {
        return _elementUi.DatePicker.mixins[0].computed.parsedValue.call(this);
      }
    }
  }
};
exports["default"] = _default;