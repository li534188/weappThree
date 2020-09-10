(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/meditation/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/meditation/index.tsx":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/meditation/index.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _actions_counter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/counter */ "./src/actions/counter.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index.scss */ "./src/pages/meditation/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_15__);

















var Index = /*#__PURE__*/function (_Component) {
  Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index(props) {
    var _this;

    Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    _this = _super.call(this, props);

    Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "textInput", void 0);

    Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "clickAdd", function () {
      var _this$props = _this.props,
          add = _this$props.add,
          parentShow = _this$props.parentShow;
      add();
      parentShow();
    });

    Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "changeClassName", function () {
      console.log(_this.textInput.current); // document.getElementById(this.state.pre).setAttribute("class", "item")

      react_dom__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].findDOMNode(_this.textInput.current); // this.textInput.current.class = 'navigator-toch'
    });

    _this.state = {
      current: 0
    };
    _this.textInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
        url: '/pages/hello/index'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          num = _this$props2.num,
          show = _this$props2.show;
      console.log(show);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["View"], {
        className: "indexClass"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["Text"], null, "\u9996\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["Text"], null, num || 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: this.clickAdd
      }, "\u70B9\u51FB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["View"], {
        className: "nav-menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["View"], {
        onTouchStart: this.changeClassName,
        ref: this.textInput,
        className: "navigator"
      }, "\u56DE\u5230\u9996\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__["View"], {
        onTouchStart: this.changeClassName,
        className: "navigator"
      }, "\u8DF3\u8F6C\u9875\u9762")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__["AtTabBar"], {
        tabList: [{
          title: '待办事项',
          text: 8
        }, {
          title: '拍照'
        }, {
          title: '通讯录',
          dot: true
        }],
        onClick: this.handleClick.bind(this),
        current: this.state.current
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    num: state.parents.counter.num,
    show: state.parents.tree.show
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__[/* bindActionCreators */ "b"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _actions_counter__WEBPACK_IMPORTED_MODULE_14__), dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[/* connect */ "b"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./src/actions/counter.js":
/*!********************************!*\
  !*** ./src/actions/counter.js ***!
  \********************************/
/*! exports provided: add, minus, parentShow, asyncAdd */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentShow", function() { return parentShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncAdd", function() { return asyncAdd; });
/* harmony import */ var _constants_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/counter */ "./src/constants/counter.js");
/* harmony import */ var _tree_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree/tree */ "./src/actions/tree/tree.js");


var add = function add() {
  return {
    type: _constants_counter__WEBPACK_IMPORTED_MODULE_0__[/* ADD */ "a"]
  };
};
var minus = function minus() {
  return {
    type: _constants_counter__WEBPACK_IMPORTED_MODULE_0__[/* MINUS */ "b"]
  };
};
var parentShow = function parentShow() {
  console.log('这里被调用了');
  return function (dispatch) {
    dispatch(Object(_tree_tree__WEBPACK_IMPORTED_MODULE_1__[/* show */ "a"])());
  };
}; // 异步的 action

function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    }, 2000);
  };
}

/***/ }),

/***/ "./src/actions/tree/tree.js":
/*!**********************************!*\
  !*** ./src/actions/tree/tree.js ***!
  \**********************************/
/*! exports provided: show */
/*! exports used: show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return show; });
/* harmony import */ var _constants_tree_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/tree/tree */ "./src/constants/tree/tree.js");

var show = function show() {
  return {
    type: _constants_tree_tree__WEBPACK_IMPORTED_MODULE_0__[/* SHOW */ "a"]
  };
};

/***/ }),

/***/ "./src/pages/meditation/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/meditation/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/meditation/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/meditation/index.tsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/meditation/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/meditation/index', {}, config || {}))



/***/ })

},[["./src/pages/meditation/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map