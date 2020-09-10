require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.tsx":
/*!*****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sr-sdk-wxapp */ "./node_modules/sr-sdk-wxapp/index.js");
/* harmony import */ var sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store/index.tsx");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__);





 // import 'bootstrap/dist/css/bootstrap.min.css';





/**
   * 有数埋点SDK 默认配置
   * 使用方法请参考文档 https://mp.zhls.qq.com/youshu-docs/develop/sdk/Taro.html
   * 如对有数SDK埋点接入有任何疑问，请联系微信：sr_data_service
   */

sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_6___default.a.init({
  /**
   * 有数 - ka‘接入测试用’ 分配的 app_id，对应的业务接口人负责
   */
  token: 'bi6cdbda95ae2640ec',

  /**
   * 微信小程序appID，以wx开头
   */
  appid: 'touristappid',

  /**
   * 如果使用了小程序插件，需要设置为 true
   */
  usePlugin: false,

  /**
   * 开启打印调试信息， 默认 false
   */
  debug: true,

  /**
   * 建议开启-开启自动代理 Page， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   * 可以使用 sr.page 代替 Page(sr.page(options))
   * 元素事件跟踪，需要配合 autoTrack: true
   */
  proxyPage: true,

  /**
   * 建议开启-开启组件自动代理， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   */
  proxyComponent: true,
  // 建议开启-是否开启页面分享链路自动跟踪
  openSdkShareDepth: true,
  // 建议开启-元素事件跟踪，自动上报元素事件，入tap、change、longpress、confirm
  autoTrack: true,
  installFrom: 'Taro@v3'
});
var store = Object(_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])();

var App = /*#__PURE__*/function (_Component) {
  Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {} // this.props.children 是将要会渲染的页面

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* Provider */ "a"], {
        store: store
      }, this.props.children);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, window) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  function t(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  }

  function r(e, t) {
    Object.defineProperty(this, "kind", {
      value: e,
      enumerable: !0
    }), t && t.length && Object.defineProperty(this, "path", {
      value: t,
      enumerable: !0
    });
  }

  function n(e, t, r) {
    n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
      value: t,
      enumerable: !0
    }), Object.defineProperty(this, "rhs", {
      value: r,
      enumerable: !0
    });
  }

  function o(e, t) {
    o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
      value: t,
      enumerable: !0
    });
  }

  function i(e, t) {
    i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
      value: t,
      enumerable: !0
    });
  }

  function a(e, t, r) {
    a.super_.call(this, "A", e), Object.defineProperty(this, "index", {
      value: t,
      enumerable: !0
    }), Object.defineProperty(this, "item", {
      value: r,
      enumerable: !0
    });
  }

  function f(e, t, r) {
    var n = e.slice((r || t) + 1 || e.length);
    return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
  }

  function u(e) {
    var t = "undefined" == typeof e ? "undefined" : N(e);
    return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }

  function l(e, t, r, c, s, d, p) {
    s = s || [], p = p || [];
    var g = s.slice(0);

    if ("undefined" != typeof d) {
      if (c) {
        if ("function" == typeof c && c(g, d)) return;

        if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
          if (c.prefilter && c.prefilter(g, d)) return;

          if (c.normalize) {
            var h = c.normalize(g, d, e, t);
            h && (e = h[0], t = h[1]);
          }
        }
      }

      g.push(d);
    }

    "regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());
    var y = "undefined" == typeof e ? "undefined" : N(e),
        v = "undefined" == typeof t ? "undefined" : N(t),
        b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
        m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);
    if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
      if (p.filter(function (t) {
        return t.lhs === e;
      }).length) e !== t && r(new n(g, e, t));else {
        if (p.push({
          lhs: e,
          rhs: t
        }), Array.isArray(e)) {
          var w;
          e.length;

          for (w = 0; w < e.length; w++) {
            w >= t.length ? r(new a(g, w, new i(void 0, e[w]))) : l(e[w], t[w], r, c, g, w, p);
          }

          for (; w < t.length;) {
            r(new a(g, w, new o(void 0, t[w++])));
          }
        } else {
          var x = Object.keys(e),
              S = Object.keys(t);
          x.forEach(function (n, o) {
            var i = S.indexOf(n);
            i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], void 0, r, c, g, n, p);
          }), S.forEach(function (e) {
            l(void 0, t[e], r, c, g, e, p);
          });
        }

        p.length = p.length - 1;
      }
    } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
  }

  function c(e, t, r, n) {
    return n = n || [], l(e, t, function (e) {
      e && n.push(e);
    }, r), n.length ? n : void 0;
  }

  function s(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;

      for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }

      switch (r.kind) {
        case "A":
          s(o[r.path[n]], r.index, r.item);
          break;

        case "D":
          delete o[r.path[n]];
          break;

        case "E":
        case "N":
          o[r.path[n]] = r.rhs;
      }
    } else switch (r.kind) {
      case "A":
        s(e[t], r.index, r.item);
        break;

      case "D":
        e = f(e, t);
        break;

      case "E":
      case "N":
        e[t] = r.rhs;
    }

    return e;
  }

  function d(e, t, r) {
    if (e && t && r && r.kind) {
      for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) {
        "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];
      }

      switch (r.kind) {
        case "A":
          s(r.path ? n[r.path[o]] : n, r.index, r.item);
          break;

        case "D":
          delete n[r.path[o]];
          break;

        case "E":
        case "N":
          n[r.path[o]] = r.rhs;
      }
    }
  }

  function p(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;

      for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }

      switch (r.kind) {
        case "A":
          p(o[r.path[n]], r.index, r.item);
          break;

        case "D":
          o[r.path[n]] = r.lhs;
          break;

        case "E":
          o[r.path[n]] = r.lhs;
          break;

        case "N":
          delete o[r.path[n]];
      }
    } else switch (r.kind) {
      case "A":
        p(e[t], r.index, r.item);
        break;

      case "D":
        e[t] = r.lhs;
        break;

      case "E":
        e[t] = r.lhs;
        break;

      case "N":
        e = f(e, t);
    }

    return e;
  }

  function g(e, t, r) {
    if (e && t && r && r.kind) {
      var n,
          o,
          i = e;

      for (o = r.path.length - 1, n = 0; n < o; n++) {
        "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];
      }

      switch (r.kind) {
        case "A":
          p(i[r.path[n]], r.index, r.item);
          break;

        case "D":
          i[r.path[n]] = r.lhs;
          break;

        case "E":
          i[r.path[n]] = r.lhs;
          break;

        case "N":
          delete i[r.path[n]];
      }
    }
  }

  function h(e, t, r) {
    if (e && t) {
      var n = function n(_n) {
        r && !r(e, t, _n) || d(e, t, _n);
      };

      l(e, t, n);
    }
  }

  function y(e) {
    return "color: " + F[e].color + "; font-weight: bold";
  }

  function v(e) {
    var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;

    switch (t) {
      case "E":
        return [r.join("."), n, "→", o];

      case "N":
        return [r.join("."), o];

      case "D":
        return [r.join(".")];

      case "A":
        return [r.join(".") + "[" + i + "]", a];

      default:
        return [];
    }
  }

  function b(e, t, r, n) {
    var o = c(e, t);

    try {
      n ? r.groupCollapsed("diff") : r.group("diff");
    } catch (e) {
      r.log("diff");
    }

    o ? o.forEach(function (e) {
      var t = e.kind,
          n = v(e);
      r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
    }) : r.log("—— no diff ——");

    try {
      r.groupEnd();
    } catch (e) {
      r.log("—— diff end —— ");
    }
  }

  function m(e, t, r, n) {
    switch ("undefined" == typeof e ? "undefined" : N(e)) {
      case "object":
        return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];

      case "function":
        return e(t);

      default:
        return e;
    }
  }

  function w(e) {
    var t = e.timestamp,
        r = e.duration;
    return function (e, n, o) {
      var i = ["action"];
      return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
    };
  }

  function x(e, t) {
    var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = void 0 === o ? w(t) : o,
        a = t.collapsed,
        f = t.colors,
        u = t.level,
        l = t.diff,
        c = "undefined" == typeof t.titleFormatter;
    e.forEach(function (o, s) {
      var d = o.started,
          p = o.startedTime,
          g = o.action,
          h = o.prevState,
          y = o.error,
          v = o.took,
          w = o.nextState,
          x = e[s + 1];
      x && (w = x.prevState, v = x.started - d);
      var S = n(g),
          k = "function" == typeof a ? a(function () {
        return w;
      }, g, o) : a,
          j = D(p),
          E = f.title ? "color: " + f.title(S) + ";" : "",
          A = ["color: gray; font-weight: lighter;"];
      A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");
      var O = i(S, j, v);

      try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
      } catch (e) {
        r.log(O);
      }

      var N = m(u, S, [h], "prevState"),
          P = m(u, S, [S], "action"),
          C = m(u, S, [y, h], "error"),
          F = m(u, S, [w], "nextState");
      if (N) if (f.prevState) {
        var L = "color: " + f.prevState(h) + "; font-weight: bold";
        r[N]("%c prev state", L, h);
      } else r[N]("prev state", h);
      if (P) if (f.action) {
        var T = "color: " + f.action(S) + "; font-weight: bold";
        r[P]("%c action    ", T, S);
      } else r[P]("action    ", S);
      if (y && C) if (f.error) {
        var M = "color: " + f.error(y, h) + "; font-weight: bold;";
        r[C]("%c error     ", M, y);
      } else r[C]("error     ", y);
      if (F) if (f.nextState) {
        var _ = "color: " + f.nextState(w) + "; font-weight: bold";

        r[F]("%c next state", _, w);
      } else r[F]("next state", w);
      l && b(h, w, r, k);

      try {
        r.groupEnd();
      } catch (e) {
        r.log("—— log end ——");
      }
    });
  }

  function S() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = Object.assign({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        f = t.diffPredicate;
    if ("undefined" == typeof r) return function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };
    if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };
    var u = [];
    return function (e) {
      var r = e.getState;
      return function (e) {
        return function (l) {
          if ("function" == typeof i && !i(r, l)) return e(l);
          var c = {};
          u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;
          var s = void 0;
          if (a) try {
            s = e(l);
          } catch (e) {
            c.error = o(e);
          } else s = e(l);
          c.took = O.now() - c.started, c.nextState = n(r());
          var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;
          if (x(u, Object.assign({}, t, {
            diff: d
          })), u.length = 0, c.error) throw c.error;
          return s;
        };
      };
    };
  }

  var k,
      j,
      E = function E(e, t) {
    return new Array(t + 1).join(e);
  },
      A = function A(e, t) {
    return E("0", t - e.toString().length) + e;
  },
      D = function D(e) {
    return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
  },
      O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      P = function P(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }

      return r;
    }

    return Array.from(e);
  },
      C = [];

  k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
    "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0);
  }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, {
    diff: {
      value: c,
      enumerable: !0
    },
    observableDiff: {
      value: l,
      enumerable: !0
    },
    applyDiff: {
      value: h,
      enumerable: !0
    },
    applyChange: {
      value: d,
      enumerable: !0
    },
    revertChange: {
      value: g,
      enumerable: !0
    },
    isConflict: {
      value: function value() {
        return "undefined" != typeof j;
      },
      enumerable: !0
    },
    noConflict: {
      value: function value() {
        return C && (C.forEach(function (e) {
          e();
        }), C = null), c;
      },
      enumerable: !0
    }
  });

  var F = {
    E: {
      color: "#2196F3",
      text: "CHANGED:"
    },
    N: {
      color: "#4CAF50",
      text: "ADDED:"
    },
    D: {
      color: "#F44336",
      text: "DELETED:"
    },
    A: {
      color: "#2196F3",
      text: "ARRAY:"
    }
  },
      L = {
    level: "log",
    logger: console,
    logErrors: !0,
    collapsed: void 0,
    predicate: void 0,
    duration: !1,
    timestamp: !0,
    stateTransformer: function stateTransformer(e) {
      return e;
    },
    actionTransformer: function actionTransformer(e) {
      return e;
    },
    errorTransformer: function errorTransformer(e) {
      return e;
    },
    colors: {
      title: function title() {
        return "inherit";
      },
      prevState: function prevState() {
        return "#9E9E9E";
      },
      action: function action() {
        return "#03A9F4";
      },
      nextState: function nextState() {
        return "#4CAF50";
      },
      error: function error() {
        return "#F20404";
      }
    },
    diff: !1,
    diffPredicate: void 0,
    transformer: void 0
  },
      T = function T() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.dispatch,
        r = e.getState;
    return "function" == typeof t || "function" == typeof r ? S()({
      dispatch: t,
      getState: r
    }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
  };

  e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ __webpack_exports__["a"] = (thunk);

/***/ }),

/***/ "./node_modules/sr-sdk-wxapp/index.js":
/*!********************************************!*\
  !*** ./node_modules/sr-sdk-wxapp/index.js ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

!function (t, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */

  var _t = function t(i, e) {
    return (_t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, i) {
      t.__proto__ = i;
    } || function (t, i) {
      for (var e in i) {
        i.hasOwnProperty(e) && (t[e] = i[e]);
      }
    })(i, e);
  };

  function i(i, e) {
    function s() {
      this.constructor = i;
    }

    _t(i, e), i.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s());
  }

  var _e = function e() {
    return (_e = Object.assign || function (t) {
      for (var i, e = 1, s = arguments.length; e < s; e++) {
        for (var r in i = arguments[e]) {
          Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  };

  function s(t, i, e, s) {
    var r,
        n = arguments.length,
        o = n < 3 ? i : null === s ? s = Object.getOwnPropertyDescriptor(i, e) : s;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, i, e, s);else for (var h = t.length - 1; h >= 0; h--) {
      (r = t[h]) && (o = (n < 3 ? r(o) : n > 3 ? r(i, e, o) : r(i, e)) || o);
    }
    return n > 3 && o && Object.defineProperty(i, e, o), o;
  }

  function r() {
    for (var t = 0, i = 0, e = arguments.length; i < e; i++) {
      t += arguments[i].length;
    }

    var s = Array(t),
        r = 0;

    for (i = 0; i < e; i++) {
      for (var n = arguments[i], o = 0, h = n.length; o < h; o++, r++) {
        s[r] = n[o];
      }
    }

    return s;
  }

  try {
    Object.entries || (Object.entries = function (t) {
      for (var i = Object.keys(t), e = i.length, s = new Array(e); e--;) {
        s[e] = [i[e], t[i[e]]];
      }

      return s;
    }), Array.prototype.includes || (Array.prototype.includes = function (t) {
      return !!~this.indexOf(t);
    });
  } catch (t) {
    console.error("polyfill exec failed", t);
  }

  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      h = function h(t) {
    return function (t) {
      for (var i, e, s, r, o = "", h = 0, a = (t = String(t)).length % 3; h < t.length;) {
        if ((e = t.charCodeAt(h++)) > 255 || (s = t.charCodeAt(h++)) > 255 || (r = t.charCodeAt(h++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
        o += n.charAt((i = e << 16 | s << 8 | r) >> 18 & 63) + n.charAt(i >> 12 & 63) + n.charAt(i >> 6 & 63) + n.charAt(63 & i);
      }

      return a ? o.slice(0, a - 3) + "===".substring(a) : o;
    }(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (t, i) {
      var e;
      return e = "0x" + i, String.fromCharCode(e);
    }));
  },
      a = function a(t) {
    return decodeURIComponent(function (t) {
      if (t = String(t).replace(/[\t\n\f\r ]+/g, ""), !o.test(t)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      t += "==".slice(2 - (3 & t.length));

      for (var i, e, s, r = "", h = 0; h < t.length;) {
        i = n.indexOf(t.charAt(h++)) << 18 | n.indexOf(t.charAt(h++)) << 12 | (e = n.indexOf(t.charAt(h++))) << 6 | (s = n.indexOf(t.charAt(h++))), r += 64 === e ? String.fromCharCode(i >> 16 & 255) : 64 === s ? String.fromCharCode(i >> 16 & 255, i >> 8 & 255) : String.fromCharCode(i >> 16 & 255, i >> 8 & 255, 255 & i);
      }

      return r;
    }(t).split("").map(function (t) {
      return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  },
      c = {
    encode: function encode(t) {
      return h(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    },
    decode: function decode(t) {
      var i = (t = t.replace(/\-/g, "+").replace(/_/g, "/")).length % 4;
      return i > 0 && (t += "====".substring(i)), a(t);
    }
  },
      u = Object.prototype.toString,
      d = c,
      p = function p(t) {
    return "[object Object]" === u.call(t);
  },
      f = function f(t) {
    return "[object Array]" === u.call(t);
  },
      l = function l(t, i) {
    var e;
    void 0 === i && (i = 0);
    var s = [];
    return function () {
      for (var r = arguments, n = [], o = 0; o < arguments.length; o++) {
        n[o] = r[o];
      }

      return clearTimeout(e), e = setTimeout(function () {
        var i = t.apply(void 0, n);
        s.forEach(function (t) {
          return t(i);
        }), s = [];
      }, i), new Promise(function (t) {
        return s.push(t);
      });
    };
  },
      g = function g() {
    return Date.now() + "-" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var i = 16 * Math.random() | 0;
      return ("x" == t ? i : 3 & i | 8).toString(16);
    });
  },
      _ = function _() {
    for (var t = arguments, i = [], e = 0; e < arguments.length; e++) {
      i[e] = t[e];
    }

    return 0 === i.length ? {} : i.length < 2 ? i[0] : i.reduce(function (t, i) {
      if (!p(t) || !p(i)) return console.error("deepMerge arguments only access object"), t;
      var e = t || {};
      return Object.entries(i).forEach(function (i) {
        var s = i[0],
            n = i[1];
        if (void 0 !== n) if (t[s]) {
          if (f(t[s])) {
            if (!f(n)) return void (e[s] = n);
            var o = f(n) ? n : [n];
            e[s] = r(t[s], o);
          } else p(t[s]) ? e[s] = _(t[s], n) : e[s] = n;
        } else e[s] = n;
      }), e;
    });
  },
      v = function v(t) {
    return !!/^[a-zA-Z\$_][a-zA-Z\d_]*$/.test(t);
  },
      x = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
      m = function m(t) {
    if ("string" != typeof t) throw new TypeError("Invalid argument expected string");
    if (!x.test(t)) throw new Error("Invalid argument not valid semver ('" + t + "' received)");
  },
      S = function S(t) {
    return isNaN(Number(t)) ? t : Number(t);
  },
      y = function y(t) {
    var i,
        e,
        s = t.replace(/^v/, "").replace(/\+.*$/, ""),
        r = (e = "-", -1 === (i = s).indexOf(e) ? i.length : i.indexOf(e)),
        n = s.substring(0, r).split(".");
    return n.push(s.substring(r + 1)), n;
  },
      k = function k(t, i) {
    [t, i].forEach(m);

    for (var e = y(t), s = y(i), r = 0; r < Math.max(e.length - 1, s.length - 1); r++) {
      var n = parseInt(e[r] || 0, 10),
          o = parseInt(s[r] || 0, 10);
      if (n > o) return 1;
      if (o > n) return -1;
    }

    var h = e[e.length - 1],
        a = s[s.length - 1];

    if (h && a) {
      var c = h.split(".").map(S),
          u = a.split(".").map(S);

      for (r = 0; r < Math.max(c.length, u.length); r++) {
        if (void 0 === c[r] || "string" == typeof u[r] && "number" == typeof c[r]) return -1;
        if (void 0 === u[r] || "string" == typeof c[r] && "number" == typeof u[r]) return 1;
        if (c[r] > u[r]) return 1;
        if (u[r] > c[r]) return -1;
      }
    } else if (h || a) return h ? -1 : 1;

    return 0;
  },
      b = function (t) {
    function s(i) {
      var e = t.call(this, i.request) || this;
      return e.stack = [], e.initialize = function () {
        return Promise.resolve(!0);
      }, e.add = function (t) {
        e.stack.push(t);
      }, e.getItems = function () {
        return e.stack;
      }, e.unshift = function (t) {
        var i;
        return (i = e.stack).unshift.apply(i, t);
      }, e.clean = function () {
        var t = e.stack;
        return e.stack = [], t;
      }, e.option = i, e.initialize(), e;
    }

    return i(s, t), s.prototype.flush = function (t) {
      var i = this;

      if (void 0 === t && (t = {}), this.stack.length) {
        var s = this.stack.map(function (i) {
          return i.props = _e(_e({}, i.props), t), i;
        });
        this.stack = [], this.upload({
          events: s
        }).then(function (t) {
          t.success || (i.stack = s);
        }).catch(function () {
          i.stack = s;
        });
      }
    }, s;
  }(function (t) {
    this.delay = 100, this.upload = l(t, this.delay);
  }),
      I = function I(t, i, e) {
    var s = e.value;
    return e.value = function () {
      var t;

      try {
        t = s.apply(this, arguments);
      } catch (t) {
        try {
          console.error("Calling " + i + " error with", arguments), console.error(t);
          var e = this.getServerUrl();
          this.request({
            type: "sdk api exec error",
            props: {
              sr_sdk_version: this.version,
              system_info: this.getSystemInfo(),
              framework_info: this.getFrameworkInfo(),
              message: (t || {}).message || t,
              stack: (t || {}).stack
            }
          }, {
            url: e,
            method: "POST"
          });
        } catch (t) {}
      }

      return t;
    }, e;
  },
      w = function w(t, i, e) {
    var s = e.value;
    return e.value = function () {
      if (this.inited) return s.apply(this, arguments);
      console.error("\u8BF7\u5148\u5B8C\u6210\u521D\u59CB\u5316");
    }, e;
  },
      A = {
    SDK: "__SR_SDK_TRACKER__",
    TRACKS: "TRACKS",
    USER_INFO: "USER_INFO",
    LOGID_EVENTS: "LOGID_EVENTS"
  },
      C = {
    WAITING: "WAITING",
    REPORTING: "REPORTING",
    PAUSED: "PAUSED"
  },
      O = {
    MISS: "should exec cacheManagerInitialize first"
  },
      T = {};

  try {
    T = JSON.parse('{"mp":{"version":{"min":"1.3.6","max":"1.3.11"},"download":"https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com/sdk/sdk-weapp/index.js"},"xxx-for-git":{}}');
  } catch (t) {}

  var U = function () {
    function t() {
      var t = this;
      this.versions = T, this.env = "production", this.cachePrefix = A.SDK, this.inited = !1, this.option = {}, this.context = {}, this.reportState = C.WAITING, this.triggerFlush = l(function () {
        t.checkAndUpload();
      }, 1e3), this.eventDataFmatter = function (i) {
        var s = +new Date(),
            r = t.getPageInfo();

        if (void 0 !== t._onQueue) {
          var n = t._onQueue(i);

          p(i) ? i = n : console.warn("eventDataFmatter should return Object type");
        }

        return _e(_e(_e({}, r), i), {
          time: s
        });
      }, this.checkRequiredOptionItem = function () {
        return !!t.option.token || (t.option.skipTokenCheck ? (console.warn("token \u672A\u914D\u7F6E\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u68C0\u67E5"), !0) : (console.error("sdk.init - Option \u5FC5\u8981\u53C2\u6570\u914D\u7F6E\u7F3A\u5931\uFF0C\u8BF7\u68C0\u67E5"), !1));
      }, this.checkVersionInfo = function () {
        t.setContext({
          sr_sdk_version: t.version
        });
        var i = "https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com/sdk/sr-sdk-version-info.json?timesamp=" + Date.now();
        return t.request({}, {
          url: i,
          method: "GET"
        }).then(function (i) {
          var e = (i.data || {})[t.name],
              s = !0;

          if (e) {
            var r = (((t.versions || {})[t.name] || {}).version || {}).max;
            return r && (1 === k(e.version.min, r) ? (console.error("\u5F53\u524DSDK\u7248\u672C\u8FC7\u4F4E, \u8BF7\u5347\u7EA7\uFF01"), s = !1) : 1 === k(e.version.max, r) && console.warn("\u5F53\u524DSDK\u6709\u66F4\u65B0, \u63A8\u8350\u5347\u7EA7\uFF01")), {
              success: s,
              data: e,
              msg: ""
            };
          }
        }).catch(function (t) {
          return void 0 === t && (t = {}), {
            success: !1,
            data: void 0,
            msg: t.errMsg
          };
        });
      }, this.queueInitialize = function () {
        var i = t.getServerUrl();
        return t.queue = new b({
          request: function request(s) {
            var r = s.events.map(function (i) {
              return _e(_e({}, i), {
                from: "sr-sdk-wxapp",
                tracking_id: t.tracking_id,
                log_id: ++t.log_id
              });
            });
            return t.setCache(A.LOGID_EVENTS, {
              last_tracking_id: t.tracking_id,
              last_max_log_id: t.log_id
            }), t.request(r, {
              url: i,
              method: "POST"
            }).catch(function (t) {
              return console.error("APICaller error", t), "request:fail url not in domain list" === t.msg ? _e(_e({}, t), {
                success: !0
              }) : t;
            });
          }
        }), !0;
      }, this.trackLogEvents = function () {
        var i = t.getCache(A.LOGID_EVENTS) || {};
        return i.last_max_log_id ? (t.track("logid_events", i), !0) : (++t.log_id, !1);
      }, this.tracking_id = g(), this.log_id = -1, this.checkStaticMethods();
    }

    return t.prototype.init = function (t) {
      if (this.inited) return this;
      if (this.version = ((this.versions[this.name] || {}).version || {}).max, this.option = _(this.defaultOptions, this.option, t), !this.checkRequiredOptionItem()) return this;
      this.cacheManagerInitialize();

      try {
        this.proxyInitialize();
      } catch (t) {
        this.errorHandle(t);
      }

      return this.queueInitialize(), this.contextInitialize(), this.inited = !0, this.checkFallback(), this.option.autoStart && this.startReport(), this.checkVersionInfo(), this.trackLogEvents(), this;
    }, t.prototype.track = function (t, i) {
      var e = this.option.debug;
      JSON.stringify(i || {}).length > 5e3 && console.warn("\u76D1\u6D4B\u5230\u8D85\u8FC75000\u7684\u4E0A\u62A5\u65E5\u5FD7\uFF1A" + t);
      var s = this.eventDataFmatter(i);
      return e && console && "function" == typeof console.log && console.log("\u3010Track\u3011 " + t, s), this.queue.add({
        type: t,
        props: s
      }), this.triggerFlush(), this;
    }, t.prototype.setContext = function (t) {
      return console.warn("setContext \u4E0D\u5728\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u7528\u66F4\u8F7B\u4FBF\u7684 setUser\u3001setChan\u7B49\u65B9\u6CD5\u4EE3\u66FF"), this.context = _e(_e(_e({}, this.context), t), {
        wx_user: _e(_e({}, this.context.wx_user), t.wx_user || {}),
        chan: _e(_e({}, this.context.chan), t.chan || {})
      }), this;
    }, t.prototype.setUser = function (t) {
      return void 0 === t && (t = {}), this.context = Object.assign({}, this.context, {
        wx_user: _e(_e({}, this.context.wx_user), t)
      }), this.setCache(A.USER_INFO, this.context.wx_user), this;
    }, t.prototype.setChan = function (t) {
      var i = t.chan_id,
          s = (this.context.chan || {}).chan_id;
      return this.context = Object.assign({}, this.context, {
        chan: _e(_e(_e({}, this.context.chan), t), {
          chan_id: i || s || ""
        })
      }), this;
    }, t.prototype.setComponent = function (t) {
      var i = t.component_id,
          s = t.component_name;
      return this.context = Object.assign({}, this.context, {
        component: _e(_e({}, t), {
          component_id: i,
          component_name: s
        })
      }), this;
    }, t.prototype.clearComponent = function () {
      return delete this.context.component, this;
    }, t.prototype.setActivityInfo = function (t) {
      var i = t.activity_id,
          s = t.activity_name,
          r = t.activity_type,
          n = t.activity_index;
      return this.context = Object.assign({}, this.context, {
        activity_info: _e(_e({}, t), {
          activity_id: i,
          activity_name: s,
          activity_type: r,
          activity_index: n
        })
      }), this;
    }, t.prototype.clearActivityInfo = function () {
      return delete this.context.activity_info, this;
    }, t.prototype.startReport = function () {
      return this.reportState = C.REPORTING, this.triggerFlush(), this;
    }, t.prototype.resumeReport = function () {
      var t = this.getCache(A.TRACKS) || [];
      return this.queue.unshift(t), this.reportState === C.PAUSED && (this.reportState = C.REPORTING), this.triggerFlush(), this;
    }, t.prototype.pauseReport = function () {
      return this.reportState = C.PAUSED, this.setCache(A.TRACKS, this.queue.clean()), this;
    }, t.prototype.flush = function () {
      return this.queue.flush(this.context), this;
    }, t.prototype.onQueue = function (t) {
      return this._onQueue = t, this;
    }, t.prototype.getInfo = function () {
      var t = {
        option: this.option,
        tracking_id: this.tracking_id,
        context: this.context,
        is_dev: this.isDev()
      };
      return "SR_SDK_INFO=" + d.encode(JSON.stringify(t));
    }, t.prototype.checkStaticMethods = function () {
      if ("development" === this.env) try {
        var t = this.constructor;
        ["create"].forEach(function (i) {
          !t[i] && console.error("static " + i + " should be implement");
        });
      } catch (t) {
        console.error("checkStaticMethods error", t);
      }
    }, t.prototype.checkFallback = function () {
      var t = this;
      setTimeout(function () {
        t.checkAndUpload(), t.checkFallback();
      }, 1e4);
    }, t.prototype.checkAndUpload = function () {
      this.reportState === C.REPORTING && this.flush();
    }, t.prototype.contextInitialize = function () {
      var t = this.getUser(),
          i = this.getSystemInfo(),
          s = i.brand,
          r = i.model,
          n = i.version,
          o = i.environment,
          h = i.screenWidth,
          a = i.screenHeight,
          c = i.system,
          u = i.platform,
          d = this.getFrameworkInfo();
      this.context = _(this.context, {
        wx_user: _e({
          app_id: this.option.appid
        }, t),
        system_info: {
          brand: s,
          model: r,
          version: n,
          environment: o,
          screenWidth: h,
          screenHeight: a,
          system: c,
          platform: u
        },
        framework_info: d,
        chan: {}
      });
    }, t.prototype.getUser = function () {
      var t = this.context.wx_user || this.getCache(A.USER_INFO) || {};
      return t.local_id && 50 === t.local_id.length || (t = {
        local_id: g()
      }, this.setCache(A.USER_INFO, t)), t;
    }, t.prototype.cacheManagerInitialize = function () {
      var t = this.getCacheManager();
      this.cacheManager = t;
    }, t.prototype.getCache = function (t) {
      return this.cacheManager ? (this.cacheManager.get(A.SDK) || {})[t] : (console.error(O.MISS), {});
    }, t.prototype.setCache = function (t, i) {
      var s;
      this.cacheManager || console.error(O.MISS);

      var r = _e(_e({}, this.cacheManager.get(A.SDK) || {}), ((s = {})[t] = i, s));

      this.cacheManager.set(A.SDK, r);
    }, t.prototype.getServerUrl = function () {
      var t = "";
      return t = "function" == typeof this.option.serverUrl ? this.option.serverUrl.call(this) : this.option.serverUrl || "https://zhls.qq.com/api/report", t += "?token=" + this.option.token;
    }, t.prototype.getTrackingId = function () {
      return this.tracking_id;
    }, s([I], t.prototype, "init", null), s([I, w], t.prototype, "track", null), s([I, w], t.prototype, "setContext", null), s([I, w], t.prototype, "setUser", null), s([I, w], t.prototype, "setChan", null), s([I, w], t.prototype, "setComponent", null), s([I, w], t.prototype, "clearComponent", null), s([I, w], t.prototype, "setActivityInfo", null), s([I, w], t.prototype, "clearActivityInfo", null), s([I, w], t.prototype, "startReport", null), s([I, w], t.prototype, "resumeReport", null), s([I, w], t.prototype, "pauseReport", null), s([I, w], t.prototype, "flush", null), s([I, w], t.prototype, "onQueue", null), s([I, w], t.prototype, "getInfo", null), t;
  }();

  function F(t, i, e, s) {
    void 0 === s && (s = !1);
    var n = t[i];

    t[i] = function () {
      for (var t = arguments, i = this, o = [], h = 0; h < arguments.length; h++) {
        o[h] = t[h];
      }

      var a = function a() {
        return n && n.apply(i, o);
      };

      return s && (a = function a() {
        return Promise.resolve().then(function () {
          return n.apply(i, o);
        });
      }), e.apply(this, r([a], o));
    };
  }

  var R = function () {
    function t() {}

    return t.AddUnsigned = function (t, i) {
      var e, s, r, n, o;
      return r = 2147483648 & t, n = 2147483648 & i, o = (1073741823 & t) + (1073741823 & i), (e = 1073741824 & t) & (s = 1073741824 & i) ? 2147483648 ^ o ^ r ^ n : e | s ? 1073741824 & o ? 3221225472 ^ o ^ r ^ n : 1073741824 ^ o ^ r ^ n : o ^ r ^ n;
    }, t.FF = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.F(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.GG = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.G(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.HH = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.H(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.II = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.I(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.ConvertToWordArray = function (t) {
      for (var i, e = t.length, s = e + 8, r = 16 * ((s - s % 64) / 64 + 1), n = Array(r - 1), o = 0, h = 0; h < e;) {
        o = h % 4 * 8, n[i = (h - h % 4) / 4] = n[i] | t.charCodeAt(h) << o, h++;
      }

      return o = h % 4 * 8, n[i = (h - h % 4) / 4] = n[i] | 128 << o, n[r - 2] = e << 3, n[r - 1] = e >>> 29, n;
    }, t.WordToHex = function (t) {
      var i,
          e = "",
          s = "";

      for (i = 0; i <= 3; i++) {
        e += (s = "0" + (t >>> 8 * i & 255).toString(16)).substr(s.length - 2, 2);
      }

      return e;
    }, t.Utf8Encode = function (t) {
      var i,
          e = "";
      t = t.replace(/\r\n/g, "\n");

      for (var s = 0; s < t.length; s++) {
        (i = t.charCodeAt(s)) < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128));
      }

      return e;
    }, t.init = function (t) {
      for ("string" != typeof t && (t = JSON.stringify(t)), this._string = this.Utf8Encode(t), this.x = this.ConvertToWordArray(this._string), this.a = 1732584193, this.b = 4023233417, this.c = 2562383102, this.d = 271733878, this.k = 0; this.k < this.x.length; this.k += 16) {
        this.AA = this.a, this.BB = this.b, this.CC = this.c, this.DD = this.d, this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k], this.S11, 3614090360), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 1], this.S12, 3905402710), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S13, 606105819), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 3], this.S14, 3250441966), this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S11, 4118548399), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 5], this.S12, 1200080426), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S13, 2821735955), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 7], this.S14, 4249261313), this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S11, 1770035416), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 9], this.S12, 2336552879), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S13, 4294925233), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 11], this.S14, 2304563134), this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S11, 1804603682), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 13], this.S12, 4254626195), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S13, 2792965006), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 15], this.S14, 1236535329), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S21, 4129170786), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 6], this.S22, 3225465664), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S23, 643717713), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k], this.S24, 3921069994), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S21, 3593408605), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 10], this.S22, 38016083), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S23, 3634488961), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 4], this.S24, 3889429448), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S21, 568446438), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 14], this.S22, 3275163606), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S23, 4107603335), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 8], this.S24, 1163531501), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S21, 2850285829), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 2], this.S22, 4243563512), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S23, 1735328473), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 12], this.S24, 2368359562), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S31, 4294588738), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 8], this.S32, 2272392833), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S33, 1839030562), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 14], this.S34, 4259657740), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S31, 2763975236), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 4], this.S32, 1272893353), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S33, 4139469664), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 10], this.S34, 3200236656), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S31, 681279174), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k], this.S32, 3936430074), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S33, 3572445317), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 6], this.S34, 76029189), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S31, 3654602809), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 12], this.S32, 3873151461), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S33, 530742520), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 2], this.S34, 3299628645), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k], this.S41, 4096336452), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 7], this.S42, 1126891415), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S43, 2878612391), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 5], this.S44, 4237533241), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S41, 1700485571), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 3], this.S42, 2399980690), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S43, 4293915773), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 1], this.S44, 2240044497), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S41, 1873313359), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 15], this.S42, 4264355552), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S43, 2734768916), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 13], this.S44, 1309151649), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S41, 4149444226), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 11], this.S42, 3174756917), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S43, 718787259), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 9], this.S44, 3951481745), this.a = this.AddUnsigned(this.a, this.AA), this.b = this.AddUnsigned(this.b, this.BB), this.c = this.AddUnsigned(this.c, this.CC), this.d = this.AddUnsigned(this.d, this.DD);
      }

      return (this.WordToHex(this.a) + this.WordToHex(this.b) + this.WordToHex(this.c) + this.WordToHex(this.d)).toLowerCase();
    }, t.x = Array(), t.S11 = 7, t.S12 = 12, t.S13 = 17, t.S14 = 22, t.S21 = 5, t.S22 = 9, t.S23 = 14, t.S24 = 20, t.S31 = 4, t.S32 = 11, t.S33 = 16, t.S34 = 23, t.S41 = 6, t.S42 = 10, t.S43 = 15, t.S44 = 21, t.RotateLeft = function (t, i) {
      return t << i | t >>> 32 - i;
    }, t.F = function (t, i, e) {
      return t & i | ~t & e;
    }, t.G = function (t, i, e) {
      return t & e | i & ~e;
    }, t.H = function (t, i, e) {
      return t ^ i ^ e;
    }, t.I = function (t, i, e) {
      return i ^ (t | ~e);
    }, t;
  }(),
      H = "production";

  function G() {
    var t = getCurrentPages() || "";
    return t[t.length - 1] || "";
  }

  function E(t) {
    var i = "/";

    try {
      var e = G();
      if (!e) return e;
      var s,
          r = e.route,
          n = e.options;

      for (var o in s = e.options, i = r + "?", n) {
        if ("share" !== t || "txsrShareInfoSdk" !== o) if (v(o)) if (s[o]) i += o + "=" + n[o] + "&";
      }

      i = i.substring(0, i.length - 1);
    } catch (t) {
      console.error("getCurrentPageUrlWithArgs error", t);
    }

    return i;
  }

  function P(t) {
    try {
      var i = G();
      if (!i) return i;
      i.options;
      return i.options[t] || "";
    } catch (t) {
      console.error("getCurrentPageKey error", t);
    }

    return "/";
  }

  function N() {
    var t = G();

    try {
      var i = __wxConfig.global.window.navigationBarTitleText;
      return (t ? (__wxConfig.page[t.route + ".html"].window || {}).navigationBarTitleText : "") || i || "\u672A\u77E5";
    } catch (t) {}

    return "\u672A\u77E5";
  }

  function D() {
    return "devtools" === function () {
      try {
        return __wxConfig.platform;
      } catch (t) {
        console.error("getEnv failed: ", t);
      }

      return "";
    }();
  }

  function M(t, i, s) {
    try {
      var r = t[0],
          n = void 0 === r ? {} : r;
      if (n) switch (n.type) {
        case "tap":
        case "change":
        case "longpress":
        case "confirm":
          var o = (n.currentTarget || {}).dataset,
              h = void 0 === o ? {} : o,
              a = this || {},
              c = a.is,
              u = void 0 === c ? "" : c;
          a.data;
          i("element", _e({
            is_sdk_auto_track: !0,
            is: u,
            type: n.type,
            id: "#" + s
          }, h));
      }
    } catch (t) {
      console.error("elementEventTrack error", t);
    }
  }

  function j() {
    var t,
        i = "" + H,
        e = (G() || {}).route || "";

    try {
      t = wx.getStorageSync(A.SDK + "_" + i);
    } catch (t) {
      console.error("CacheManager.get error", t);
    }

    var s = t.USER_INFO || {},
        r = s.local_id,
        n = s.txsr_from_share_info,
        o = void 0 === n ? {} : n,
        h = o.mi,
        a = void 0 === h ? "" : h,
        c = o.d,
        u = void 0 === c ? 1 : c,
        d = R.init(r + e),
        p = "" !== a ? d === a ? u : u + 1 : u;
    return JSON.stringify({
      mi: R.init(r + e),
      d: p
    });
  }

  var q = function q() {},
      z = {},
      L = {},
      K = function K() {
    return new Date().getTime();
  };

  var W = function W(t, i, e, s) {
    return function (r) {
      return function (t, i, e, s, r) {
        if (F(t, "onLoad", function (t, i) {
          t(), this.lauchTime = K();
        }), F(t, "onShow", function (t) {
          var s = this,
              r = function r() {
            s.showTime = K();
            var t = P.call(s, "room_id");
            t && e({
              room_id: t
            }), i("browse_wxapp_page", {
              is_sdk_auto_track: !0,
              refer_page: L.route,
              is_newly_open: !z[s.route]
            }), z[s.route] = !0, L = s;
          };

          t().then(r).catch(r);
        }, !0), F(t, "onHide", function (t) {
          t();
          var e = this.showTime ? K() - this.showTime : 0;
          i("leave_wxapp_page", {
            is_sdk_auto_track: !0,
            stay_time: e = e > 144e5 ? 0 : e
          });
        }), F(t, "onUnload", function (t) {
          t();
          var e = this.lauchTime ? K() - this.lauchTime : 0;
          i("leave_wxapp_page", {
            is_sdk_auto_track: !0,
            stay_time: e = e > 144e5 ? 0 : e
          });
        }), F(t, "onPullDownRefresh", function (t) {
          t(), i("page_pull_down_refresh", {
            is_sdk_auto_track: !0
          });
        }), F(t, "onReachBottom", function (t) {
          t(), i("page_reach_bottom", {
            is_sdk_auto_track: !0
          });
        }), "function" == typeof t.onShareAppMessage) {
          var n = t.onShareAppMessage || q,
              o = t.onShareTimeline || q;
          t.onShareAppMessage = function (t) {
            void 0 === t && (t = {});
            var e = n.call(this, t) || {};

            try {
              var s = e.path || E.call(this, "share");
              -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
              var o = void 0,
                  h = void 0;
              r && (o = j(), h = JSON.parse(o), s = s + "txsrShareInfoSdk=" + encodeURIComponent(o)), i("page_share_app_message", {
                is_sdk_auto_track: !0,
                from_type: t.from || "\u672A\u77E5",
                share_to: "friends",
                share_path: s,
                share_title: e.title,
                share_image_url: e.imageUrl,
                txsr_share_info_sdk: h
              }), e.path = s;
            } catch (t) {
              console.error("onShareAppMessage error", t);
            }

            return e;
          }, t.onShareTimeline = function (t) {
            void 0 === t && (t = {});
            var e = o.call(this, t) || {};

            try {
              var s = e.path || E.call(this, "share"),
                  n = e.query || "";
              -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
              var h = void 0,
                  a = void 0;
              r && (h = j(), a = JSON.parse(h), s = s + "txsrShareInfoSdk=" + encodeURIComponent(h)), i("page_share_app_message", {
                is_sdk_auto_track: !0,
                from_type: t.from || "\u672A\u77E5",
                share_to: "timeline",
                query: n,
                share_path: s,
                share_title: e.title,
                share_image_url: e.imageUrl,
                txsr_share_info_sdk: a
              }), e.path = s;
            } catch (t) {
              console.error("onShareAppMessage error", t);
            }

            return e;
          };
        }

        return s && Object.entries(t).filter(function (t) {
          var i = t[0];
          t[1];
          return !["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onShareAppMessage", "onResize", "onTabItemTap"].includes(i);
        }).forEach(function (e) {
          var s = e[0];
          "function" == typeof e[1] && F(t, s, function (t) {
            for (var e = arguments, r = [], n = 1; n < arguments.length; n++) {
              r[n - 1] = e[n];
            }

            return M.call(this, r, i, s), t();
          });
        }), t;
      }(r, t, i, e, s);
    };
  },
      B = function B() {},
      J = {},
      V = {},
      Q = function Q() {
    return new Date().getTime();
  };

  var Z = function Z(t, i, e, s) {
    return function (r) {
      return function (t, i, e, s, r) {
        try {
          if (t.methods = t.methods || {}, F(t.methods, "onLoad", function (t, i) {
            t(), this.lauchTime = Q();
          }), F(t.methods, "onShow", function (t) {
            var s = this,
                r = function r() {
              s.showTime = Q();
              var t = P.call(s, "room_id");
              t && e({
                room_id: t
              }), i("browse_wxapp_page", {
                is_sdk_auto_track: !0,
                refer_page: V.route,
                is_newly_open: !J[s.route]
              }), J[s.route] = !0, V = s;
            };

            t().then(r).catch(r);
          }, !0), F(t.methods, "onUnload", function (t) {
            t();
            var e = this.lauchTime ? Q() - this.lauchTime : 0;
            i("leave_wxapp_page", {
              is_sdk_auto_track: !0,
              stay_time: e = e > 144e5 ? 0 : e
            });
          }), F(t.methods, "onPullDownRefresh", function (t) {
            t(), i("page_pull_down_refresh", {
              is_sdk_auto_track: !0
            });
          }), F(t.methods, "onReachBottom", function (t) {
            t(), i("page_reach_bottom", {
              is_sdk_auto_track: !0
            });
          }), F(t.methods, "onHide", function (t) {
            t();
            var e = this.showTime ? Q() - this.showTime : 0;
            i("leave_wxapp_page", {
              is_sdk_auto_track: !0,
              stay_time: e = e > 144e5 ? 0 : e
            });
          }), "function" == typeof t.methods.onShareAppMessage) {
            var n = t.methods.onShareAppMessage || B,
                o = t.methods.onShareTimeline || B;
            t.methods.onShareAppMessage = function (t) {
              void 0 === t && (t = {});
              var e = n.call(this, t) || {};

              try {
                var s = e.path || E.call(this, "share");
                -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
                var o = void 0,
                    h = void 0;
                r && (o = j(), h = JSON.parse(o), s = s + "txsrShareInfoSdk=" + encodeURIComponent(o)), i("page_share_app_message", {
                  is_sdk_auto_track: !0,
                  from_type: t.from || "\u672A\u77E5",
                  share_to: "friends",
                  share_path: s,
                  share_title: e.title,
                  share_image_url: e.imageUrl,
                  txsr_share_info_sdk: h
                }), e.path = s;
              } catch (t) {
                console.error("onShareAppMessage error", t);
              }

              return e;
            }, t.methods.onShareTimeline = function (t) {
              void 0 === t && (t = {});
              var e = o.call(this, t) || {};

              try {
                var s = e.path || E.call(this, "share"),
                    n = e.query || "";
                -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
                var h = void 0,
                    a = void 0;
                r && (h = j(), a = JSON.parse(h), s = s + "txsrShareInfoSdk=" + encodeURIComponent(h)), i("page_share_app_message", {
                  is_sdk_auto_track: !0,
                  from_type: t.from || "\u672A\u77E5",
                  share_to: "timeline",
                  share_path: s,
                  query: n,
                  share_title: e.title,
                  share_image_url: e.imageUrl,
                  txsr_share_info_sdk: a
                }), e.path = s;
              } catch (t) {
                console.error("onShareAppMessage error", t);
              }

              return e;
            };
          }

          t.methods && s && Object.entries(t.methods).filter(function (t) {
            var i = t[0];
            t[1];
            return !["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onShareAppMessage", "onResize", "onTabItemTap", "observer"].includes(i);
          }).forEach(function (e) {
            var s = e[0];
            "function" == typeof e[1] && F(t.methods, s, function (t) {
              for (var e = arguments, r = [], n = 1; n < arguments.length; n++) {
                r[n - 1] = e[n];
              }

              return M.call(this, r, i, s), t();
            });
          });
        } catch (t) {
          console.error("componentProxy error", t);
        }

        return t;
      }(r, t, i, e, s);
    };
  },
      $ = {},
      X = function X(t) {
    return t;
  };

  return function (t) {
    function s() {
      var i = t.call(this) || this;
      return i.name = "mp", i.component = X, i.page = X, i.proxySetNavigation = function () {
        try {
          var t = wx.setNavigationBarTitle;
          Object.defineProperty(wx, "setNavigationBarTitle", {
            get: function get() {
              return function (i) {
                void 0 === i && (i = {});

                try {
                  var e = G();
                  __wxConfig.page = __wxConfig.page || {};
                  var s = __wxConfig.page[e.route + ".html"];
                  s && ((s.window || {}).navigationBarTitleText = i.title);
                } catch (t) {}

                t.call(this, i);
              };
            }
          });
        } catch (t) {
          console.warn("proxySetNavigation failed", t);
        }
      }, i.request = function (t, e) {
        var s = function s(t) {
          return void 0 === t && (t = {}), 0 === t.code;
        };

        return "function" == typeof i.option.onUploaded && (s = i.option.onUploaded), new Promise(function (i, r) {
          wx.request({
            url: e.url,
            method: e.method || "POST",
            data: t,
            success: function success(t) {
              void 0 === t && (t = {});
              var e = t.data,
                  r = void 0 === e ? {} : e,
                  n = s(r);
              i({
                success: void 0 === n || n,
                data: r.data || r,
                msg: r.errMsg
              });
            },
            fail: function fail(t) {
              r({
                success: !1,
                data: void 0,
                msg: t.errMsg
              });
            }
          });
        });
      }, i.defaultOptions = {
        autoStart: !0,
        debug: !1,
        usePlugin: !1,
        proxyPage: !1,
        proxyComponent: !1,
        autoTrack: !1,
        trackApp: !0,
        openSdkShareDepth: !1,
        installFrom: "",
        openAutoTrackOpenId: !1
      }, i.proxySetNavigation(), i;
    }

    return i(s, t), s.prototype.getCacheManager = function () {
      var t = "" + this.env,
          i = function i(_i) {
        return _i + "_" + t;
      };

      return {
        get: function get(t) {
          var e;

          try {
            e = wx.getStorageSync(i(t));
          } catch (t) {
            return console.error("CacheManager.get error", t), e;
          }

          return e;
        },
        set: function set(t, e) {
          try {
            wx.setStorageSync(i(t), e);
          } catch (t) {
            return console.error("CacheManager.set error", t), !1;
          }

          return !0;
        }
      };
    }, s.prototype.proxyInitialize = function () {
      var t = this,
          i = Page,
          e = Component,
          s = this.option.autoTrack,
          r = this.option.openSdkShareDepth;

      this.page = function (t) {
        return t;
      };

      var n = W(this.track.bind(this), this.setChan.bind(this), s, r);
      return this.component = Z(this.track.bind(this), this.setChan.bind(this), s, r), !this.option.usePlugin && this.option.proxyPage ? Page = function Page(t) {
        i(n(t));
      } : this.page = n, !this.option.usePlugin && this.option.proxyComponent && (Component = function Component(i) {
        return e(t.component(i));
      }), this.trackApp(), !0;
    }, s.prototype.trackApp = function () {
      var t = this,
          i = !1;
      wx.onAppShow(function (s) {
        void 0 === s && (s = {});

        var r = s,
            n = r.query,
            o = void 0 === n ? {} : n,
            h = r.path,
            a = t.option.openSdkShareDepth,
            c = t.option.openAutoTrackOpenId,
            u = t.option.appid,
            d = t.cacheManager.get(A.SDK) || {},
            p = function (t) {
          void 0 === t && (t = {});
          var i = {};

          if (t.scene) {
            try {
              var s = decodeURIComponent(t.scene);
              (s = s.replace("?", "").trim()).split("&").map(function (t) {
                if (t) {
                  var e = t.split("="),
                      s = e[0],
                      r = e[1];
                  v(s) && (i[s] = void 0 === r || r);
                }
              });
            } catch (t) {
              console.error(t);
            }

            t = _e(_e({}, t), i);
          }

          return t;
        }(o || {}),
            f = p.txsrShareInfoSdk || "{}",
            l = t;

        if (p && "{}" !== JSON.stringify(p)) {
          var g = "?";
          Object.entries(p).forEach(function (t, i) {
            var e = t[0],
                s = t[1];
            g += (0 === i ? "" : "&") + e + "=" + s;
          }), h += g;
        }

        if (t.setChan(_e(_e({}, p), {
          chan_wxapp_scene: s.scene,
          chan_refer_app_id: (s.referrerInfo || {}).appId
        })), p.chan_id && t.setChan({
          chan_id: p.chan_id
        }), !i) {
          if (i = !0, a && "{}" !== f) try {
            t.setUser({
              txsr_from_share_info: JSON.parse(decodeURIComponent(f))
            });
          } catch (t) {}
          t.option.trackApp && t.track("app_launch", {
            is_sdk_auto_track: !0,
            page: h
          });
        }

        if (c && !(d && d.USER_INFO && d.USER_INFO.open_id)) try {
          wx.login({
            success: function success(t) {
              var i = t.code;
              wx.request({
                url: "https://zhls.qq.com/wxlogin/getOpenId?appid=" + u + "&js_code=" + i,
                data: {},
                header: {
                  "content-type": "json"
                },
                success: function success(t) {
                  var i = t.data.openId;
                  l.setUser({
                    open_id: i
                  });
                }
              });
            }
          });
        } catch (i) {
          t.errorHandle(i);
        }
        t.option.trackApp && t.track("app_show", {
          is_sdk_auto_track: !0,
          page: h
        });
      }), wx.onAppHide(function () {
        t.option.trackApp && t.track("exit_wxapp", {
          is_sdk_auto_track: !0
        });
      });
    }, s.prototype.errorHandle = function (t) {
      try {
        var i = this.getServerUrl();
        this.request({
          type: "sdk api exec error",
          props: {
            sr_sdk_version: this.version,
            system_info: this.getSystemInfo(),
            framework_info: this.getFrameworkInfo(),
            message: t,
            stack: t
          }
        }, {
          url: i,
          method: "POST"
        });
      } catch (t) {
        console.log("errorHandle error", t);
      }
    }, s.prototype.getSystemInfo = function () {
      try {
        return wx.getSystemInfoSync();
      } catch (t) {
        return {};
      }
    }, s.prototype.getFrameworkInfo = function () {
      var t, i;

      try {
        if (process && process.env && "weapp" && (t = "taro"), this.option.installFrom) {
          var e = String(this.option.installFrom).toLowerCase(),
              s = /^((taro)|(uni[\-]?app)|(chameleon)|(wepy)|(mpvue))(@v?([\S]*))?/g.exec(e);
          s && s[1] && ("taro" === t && s[2] ? i = s[8] : "taro" !== t && (i = s[8], t = s[3] ? "uni-app" : s[4] || s[5] || s[6] || "unknow"));
        }
      } catch (i) {
        t = "unkonw";
      }

      return {
        framework: t,
        version: i
      };
    }, s.prototype.getPageInfo = function () {
      var t = E(),
          i = G() || {},
          e = N,
          s = (i.data || {}).title || i.title;

      try {
        void 0 === s && t && !$[t] && ($[t] = !0, console.warn("\u9875\u9762[" + t + "]\u6CA1\u6709\u5B9E\u73B0 title \u5C5E\u6027\uFF0C\u4F1A\u5BFC\u81F4\u90E8\u5206\u673A\u578B\u4E0B\u6536\u96C6\u4E0D\u5230\u9875\u9762\u6807\u9898!")), "string" == typeof s && (e = function e() {
          return s;
        }), "function" == typeof s && (e = s);
      } catch (t) {
        console.error("curPage.data.title \u6267\u884C\u9519\u8BEF", t);
      }

      return {
        page: t,
        page_title: s || e()
      };
    }, s.prototype.isDev = function () {
      return D();
    }, s.create = function () {
      var t;

      try {
        t = new s();
      } catch (i) {
        t = s.prototype, console.error("new sr_sdk failed", i);
      }

      return t;
    }, s;
  }(U).create();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/index.scss":
/*!****************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.tsx */ "./node_modules/babel-loader/lib/index.js!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");






var config = {"pages":["pages/meditation/index","pages/exercise/index","pages/brain/index","pages/community/index","pages/mine/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"custom":true,"color":"#000000","selectedColor":"#000000","backgroundColor":"#0ddadb","list":[{"pagePath":"pages/meditation/index","text":"冥想"},{"pagePath":"pages/exercise/index","text":"锻炼"},{"pagePath":"pages/brain/index","text":"大脑"},{"pagePath":"pages/community/index","text":"社区"},{"pagePath":"pages/mine/index","text":"我的"}]},"usingComponents":{}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createReactApp"])(_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_2__, react_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], config))



/***/ }),

/***/ "./src/reducers/counter.js":
/*!*********************************!*\
  !*** ./src/reducers/counter.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _constants_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/counter */ "./src/constants/counter.js");
/* harmony import */ var _tree_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree/tree */ "./src/reducers/tree/tree.js");




var INITIAL_STATE = {
  num: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_counter__WEBPACK_IMPORTED_MODULE_2__[/* ADD */ "a"]:
      return Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), {}, {
        num: state.num + 1
      });

    case _constants_counter__WEBPACK_IMPORTED_MODULE_2__[/* MINUS */ "b"]:
      return Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), {}, {
        num: state.num - 1
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[/* combineReducers */ "c"])({
  tree: _tree_tree__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  counter: counter
}));

/***/ }),

/***/ "./src/reducers/global/index.tsx":
/*!***************************************!*\
  !*** ./src/reducers/global/index.tsx ***!
  \***************************************/
/*! exports provided: global, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export global */
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/global */ "./src/constants/global/index.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



var INITIAL_STATE = {
  pageIndex: 0
};
function global() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_global__WEBPACK_IMPORTED_MODULE_1__[/* GLOBAL */ "a"].PAGEINDEX:
      return Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), {}, {
        pageIndex: action.index
      });

    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__[/* combineReducers */ "c"])({
  global: global
}));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ "./src/reducers/counter.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/reducers/global/index.tsx");



/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* combineReducers */ "c"])({
  parents: _counter__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  global: _global__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
}));

/***/ }),

/***/ "./src/reducers/tree/tree.js":
/*!***********************************!*\
  !*** ./src/reducers/tree/tree.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tree; });
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _constants_tree_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/tree/tree */ "./src/constants/tree/tree.js");


var INITIAL_STATE = {
  show: false
};
function tree() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_tree_tree__WEBPACK_IMPORTED_MODULE_1__[/* SHOW */ "a"]:
      return Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), {}, {
        show: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/index.tsx":
/*!*****************************!*\
  !*** ./src/store/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configStore; });
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");




var composeEnhancers = (typeof window === "undefined" ? "undefined" : Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : redux__WEBPACK_IMPORTED_MODULE_1__[/* compose */ "d"];
var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]];

if (true) {
  middlewares.push(__webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js").createLogger());
}

var enhancer = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_1__[/* applyMiddleware */ "a"].apply(void 0, middlewares) // other store enhancers if any
);
function configStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[/* createStore */ "e"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], enhancer);
  return store;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

},[["./src/app.tsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map