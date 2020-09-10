(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/info/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/info/index.tsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/info/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _asset_brain_main3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../asset/brain-main3.png */ "./src/asset/brain-main3.png");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/info/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);







 // import { Canvas } from 'taro-ui'
// import './index.scss'



var data = {
  vision: {
    title: '视觉联络区',
    img: _asset_brain_main3_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    info: '视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域视觉联络区主要包含了。。。区域',
    url: ''
  },
  motion: {
    title: '视觉联络区',
    img: _asset_brain_main3_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    info: '视觉联络区主要包含了。。。区域',
    url: ''
  },
  hearing: {
    title: '视觉联络区',
    img: _asset_brain_main3_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    info: '视觉联络区主要包含了。。。区域',
    url: ''
  },
  lobe: {
    title: '视觉联络区',
    img: _asset_brain_main3_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    info: '视觉联络区主要包含了。。。区域',
    url: ''
  },
  cerebellum: {
    title: '视觉联络区',
    img: _asset_brain_main3_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    info: '视觉联络区主要包含了。。。区域',
    url: ''
  }
};

var Info = /*#__PURE__*/function (_Component) {
  Object(E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Info, _Component);

  var _super = Object(E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Info);

  function Info(props) {
    var _this;

    Object(E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Info);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: false,
      name: ""
    };
    return _this;
  }

  Object(E_study_workSpace_node_weapp_brain3_0_brain_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Info, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var target = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["getCurrentInstance"])().router;

      if (target) {
        console.log("9999999999999");
        console.log(target.params);
        this.setState({
          name: target.params.name
        });
      }
    }
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
    key: "handleChange",
    value: function handleChange() {
      this.setState({
        isOpened: true
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var name = this.state.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtCurtain"], {
        isOpened: this.state.isOpened,
        onClose: this.onClose.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
        className: "title"
      }, data[name].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        style: "width:100%;height:250px",
        src: data[name].img
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["ScrollView"], {
        className: "detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        className: "detail_info"
      }, data[name].info)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
        "hover-class": "#113809",
        className: "link",
        onClick: function onClick() {
          console.log('我已被点击');
        }
      }, "\u67E5\u770B\u8BAD\u7EC3\u65B9\u6CD5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtButton"], {
        onClick: this.handleChange.bind(this)
      }, "\u53F3\u4E0A\u5173\u95ED\u5E55\u5E18"));
    }
  }]);

  return Info;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/asset/brain-main3.png":
/*!***********************************!*\
  !*** ./src/asset/brain-main3.png ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "asset/brain-main3.png");

/***/ }),

/***/ "./src/pages/info/index.scss":
/*!***********************************!*\
  !*** ./src/pages/info/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/info/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/info/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/info/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/info/index', {}, config || {}))



/***/ })

},[["./src/pages/info/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map