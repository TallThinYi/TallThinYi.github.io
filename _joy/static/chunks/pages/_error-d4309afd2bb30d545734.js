(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[820],{

/***/ 61583:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _inheritsLoose = __webpack_require__(75155);

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(2784));

var head_1 = __webpack_require__(98870);

var statusCodes = {
  400: "Bad Request",
  404: "This page could not be found",
  405: "Method Not Allowed",
  500: "Internal Server Error"
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
 * `Error` component used for handling errors.
 */


var Error = /*#__PURE__*/function (_react_1$default$Comp) {
  _inheritsLoose(Error, _react_1$default$Comp);

  function Error() {
    return _react_1$default$Comp.apply(this, arguments) || this;
  }

  var _proto = Error.prototype;

  _proto.render = function render() {
    var statusCode = this.props.statusCode;
    var title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
    return react_1["default"].createElement("div", {
      style: styles.error
    }, react_1["default"].createElement(head_1.Head, null, react_1["default"].createElement("title", null, statusCode, ": ", title)), react_1["default"].createElement("div", null, react_1["default"].createElement("style", {
      dangerouslySetInnerHTML: {
        __html: "body { margin: 0 }"
      }
    }), statusCode ? react_1["default"].createElement("h1", {
      style: styles.h1
    }, statusCode) : null, react_1["default"].createElement("div", {
      style: styles.desc
    }, react_1["default"].createElement("h2", {
      style: styles.h2
    }, title, "."))));
  };

  return Error;
}(react_1["default"].Component);

exports["default"] = Error;
Error.displayName = "ErrorPage";
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: "#000",
    background: "#fff",
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  desc: {
    display: "inline-block",
    textAlign: "left",
    lineHeight: "49px",
    height: "49px",
    verticalAlign: "middle"
  },
  h1: {
    display: "inline-block",
    borderRight: "1px solid rgba(0, 0, 0,.3)",
    margin: 0,
    marginRight: "20px",
    padding: "10px 23px 10px 0",
    fontSize: "24px",
    fontWeight: 500,
    verticalAlign: "top"
  },
  h2: {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "inherit",
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 73158:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__JOY_P = window.__JOY_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(61583);
      }
    ]);
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,351], function() { return __webpack_exec__(73158); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);