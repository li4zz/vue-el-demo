//cookie操作类
export const Cookie = {
  del: (name, path, domain) => {
    document.cookie =
      name +
      "=" +
      (path ? "; path=" + path : "") +
      (domain ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  },

  get: (name) => {
    var v = document.cookie.match("(?:^|;)\\s*" + name + "=([^;]*)");
    return v ? decodeURIComponent(v[1]) : null;
  },

  set: (name, value, expires, path, domain) => {
    var str = name + "=" + encodeURIComponent(value);
    if (expires != null || expires != "") {
      if (expires == 0) {
        expires = 100 * 365 * 24 * 60;
      }
      var exp = new Date();
      exp.setTime(exp.getTime() + expires * 60 * 1000);
      str += "; expires=" + exp.toGMTString();
    }
    if (path) {
      str += "; path=" + path;
    }
    if (domain) {
      str += "; domain=" + domain;
    }
    document.cookie = str;
  },
};

//日期类操作方法
export const date = {
  /**
   * 日期格式化
   * @param date(String or Date)
   * @param format
   * @returns {format}
   */
  format: (date, format) => {
    if (typeof date === "string") {
      date = new Date(Date.parse(date.replace(/-\/./g, "/")));
    } else if (typeof date === "number") {
      date = new Date(date);
    }
    let newFormat = format || "yyyy-MM-dd",
      o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
    if (/(y+)/.test(newFormat)) {
      newFormat = newFormat.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(newFormat)) {
        newFormat = newFormat.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return newFormat;
  },
};

/*
 *随机类
 */
export const random = {
  intNum: (begin, end) => {
    var c = end - begin + 1;
    return Math.floor(Math.random() * c + begin);
  },
  //生成指定位数的随机字符串大小写字母
  strings: (len) => {
    len = len || 32;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      max = chars.length,
      exp = "";
    for (let i = 0; i < len; i++) {
      exp += chars.charAt(Math.floor(Math.random() * (max + 1)));
    }
    return exp;
  },
};

export const Verify = {
  /**
   * @param val 登录名  登录名由1-18位之间的字母、下划线、@以及数字组成
   * @returns 验证成功返回true，否则返回flase
   */
  isLoginName(val) {
    let reg = /^[a-zA-Z0-9_@]{1,18}$/;
    return commonVerify(val, reg);
  },
};

/**
 * @description 浮点运算
 * @author zhai
 */

//加法
export const numberAdd = (arg1, arg2) => {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m + arg2 * m) / m).toFixed(n);
};

//乘法
export const NumberMul = (arg1, arg2) => {
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {
    console.log(e);
  }
  try {
    m += s2.split(".")[1].length;
  } catch (e) {
    console.log(e);
  }

  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
};

//减法
export const NumberSub = (arg1, arg2) => {
  var re1, re2, m, n;
  try {
    re1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    re1 = 0;
  }
  try {
    re2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    re2 = 0;
  }
  m = Math.pow(10, Math.max(re1, re2));
  n = re1 >= re2 ? re1 : re2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
};
