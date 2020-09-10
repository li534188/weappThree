(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/custom-tab-bar/index.tsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/custom-tab-bar/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Indexs; });
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _actions_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/global */ "./src/actions/global/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/custom-tab-bar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _asset_mine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asset/mine.png */ "./src/asset/mine.png");
/* harmony import */ var _asset_exercise_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asset/exercise.png */ "./src/asset/exercise.png");
/* harmony import */ var _asset_community_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../asset/community.png */ "./src/asset/community.png");
/* harmony import */ var _asset_meditation_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../asset/meditation.png */ "./src/asset/meditation.png");
/* harmony import */ var _asset_brain_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../asset/brain.png */ "./src/asset/brain.png");













var initData = {
  selected: 0,
  color: "#7A7E83",
  selectedColor: "#3cc51f",
  list: [{
    pagePath: "/pages/meditation/index",
    iconPath: _asset_meditation_png__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    selectedIconPath: "/image/icon_component_HL.png",
    text: "冥想"
  }, {
    pagePath: "/pages/exercise/index",
    iconPath: _asset_exercise_png__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    selectedIconPath: "/image/icon_API_HL.png",
    text: "锻炼"
  }, {
    pagePath: "/pages/brain/index",
    iconPath: _asset_brain_png__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
    selectedIconPath: "/image/icon_API_HL.png",
    text: "大脑"
  }, {
    pagePath: "/pages/community/index",
    iconPath: _asset_community_png__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    selectedIconPath: "/image/icon_API_HL.png",
    text: "社区"
  }, {
    pagePath: "/pages/mine/index",
    iconPath: _asset_mine_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    selectedIconPath: '../asset/mine.png',
    text: "我的"
  }]
};
function Indexs() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initData),
      _useState2 = Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var list = data.list,
      selectedColor = data.selectedColor,
      color = data.color;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* useDispatch */ "c"])(); // const {pageIndex} = this.props

  var pageIndex = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* useSelector */ "d"])(function (state) {
    return state.global.global.pageIndex;
  });
  console.log('+++++++++++');
  console.log(pageIndex);

  var switchTab = function switchTab(e) {
    console.log(123);
    var info = e.currentTarget.dataset;
    var url = info.path;
    console.log(info);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.switchTab({
      url: url
    });
    dispatch(_actions_global__WEBPACK_IMPORTED_MODULE_6__[/* setIndex */ "a"](info.index));
    setData(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_workspace_taro_small_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {}, {
      selected: info.index
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["CoverView"], {
    className: "tab-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["CoverView"], {
    className: "tab-bar-border"
  }), list.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["CoverView"], {
      key: item.pagePath,
      className: "tab-bar-item",
      "data-path": item.pagePath,
      "data-index": index,
      onClick: switchTab
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["CoverImage"], {
      className: pageIndex === index ? 'text-select' : '',
      src: item.iconPath
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["CoverView"], {
      style: {
        color: pageIndex === index ? selectedColor : color
      }
    }, item.text));
  }));
} // class Index extends Component<MyProps, MyState> {
//   constructor(props:MyProps){
//     super(props)
//     this.state={
//       data: {
//           selected: 0,
//           color: "#7A7E83",
//           selectedColor: "#3cc51f",
//           list: [{
//             pagePath: "/pages/meditation/index",
//             iconPath: meditationPng,
//             selectedIconPath: "/image/icon_component_HL.png",
//             text: "冥想"
//           }, {
//             pagePath: "/pages/exercise/index",
//             iconPath: exercisePng,
//             selectedIconPath: "/image/icon_API_HL.png",
//             text: "锻炼"
//           }, {
//             pagePath: "/pages/brain/index",
//             iconPath: brainPng,
//             selectedIconPath: "/image/icon_API_HL.png",
//             text: "大脑"
//           }, {
//             pagePath: "/pages/community/index",
//             iconPath: communityPng,
//             selectedIconPath: "/image/icon_API_HL.png",
//             text: "社区"
//           }, {
//             pagePath: "/pages/mine/index",
//             iconPath: minePng,
//             selectedIconPath: '../asset/mine.png',
//             text: "我的"
//           }]
//         },
//     }
// }
//   componentWillMount () { }
//   componentDidMount () { }
//   componentWillUnmount () { }
//   componentDidShow () { }
//   componentDidHide () { }
//   render () {
//     const {data:{list, selectedColor, color}} = this.state;
//     const {pageIndex} = this.props
//     console.log('+++++++++++')
//     console.log(pageIndex)
//   return (
//       <CoverView className="tab-bar">
//           <CoverView className="tab-bar-border"></CoverView>
//           {list.map((item,index)=>(
//               <CoverView key={item.pagePath} className="tab-bar-item" data-path={item.pagePath} data-index={index} onClick={this.switchTab}>
//                   <CoverImage  className={pageIndex === index ? 'text-select' : ''}  src={item.iconPath}></CoverImage>
//                   <CoverView style={{color:(pageIndex === index ? selectedColor : color)}}>{item.text}</CoverView>
//               </CoverView>
//           ))}
//       </CoverView>
//     )
// }
// }
// const mapStateToProps = (state) => {
//   return {
//     pageIndex: state.global.global.pageIndex,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//       {
//           ...actions
//       },
//       dispatch
//   );
// };
//  connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Indexs);

/***/ }),

/***/ "./src/actions/global/index.tsx":
/*!**************************************!*\
  !*** ./src/actions/global/index.tsx ***!
  \**************************************/
/*! exports provided: setIndex, getIndex */
/*! exports used: setIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setIndex; });
/* unused harmony export getIndex */
/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/global */ "./src/constants/global/index.tsx");

var setIndex = function setIndex(index) {
  return {
    type: _constants_global__WEBPACK_IMPORTED_MODULE_0__[/* GLOBAL */ "a"].PAGEINDEX,
    index: index
  };
};
var getIndex = function getIndex(index) {
  return {
    type: _constants_global__WEBPACK_IMPORTED_MODULE_0__[/* GLOBAL */ "a"].GETPAGEINDEX,
    index: index
  };
};

/***/ }),

/***/ "./src/asset/brain.png":
/*!*****************************!*\
  !*** ./src/asset/brain.png ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "asset/brain.png");

/***/ }),

/***/ "./src/asset/community.png":
/*!*********************************!*\
  !*** ./src/asset/community.png ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "asset/community.png");

/***/ }),

/***/ "./src/asset/exercise.png":
/*!********************************!*\
  !*** ./src/asset/exercise.png ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "asset/exercise.png");

/***/ }),

/***/ "./src/asset/meditation.png":
/*!**********************************!*\
  !*** ./src/asset/meditation.png ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "asset/meditation.png");

/***/ }),

/***/ "./src/asset/mine.png":
/*!****************************!*\
  !*** ./src/asset/mine.png ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "asset/mine.png");

/***/ }),

/***/ "./src/custom-tab-bar/index.scss":
/*!***************************************!*\
  !*** ./src/custom-tab-bar/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/custom-tab-bar/index.tsx":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/custom-tab-bar/index.tsx");


var inst = Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createComponentConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'custom-tab-bar/index'))



/***/ })

},[["./src/custom-tab-bar/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map