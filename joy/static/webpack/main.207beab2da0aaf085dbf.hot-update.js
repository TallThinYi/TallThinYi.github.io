/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("main",{

/***/ "./.joy/gen-files/react/client/routes.js":
/*!***********************************************!*\
  !*** ./.joy/gen-files/react/client/routes.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"joyReactAutoGenRoutes\": function() { return /* binding */ joyReactAutoGenRoutes; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var _symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symph/joy/dist/react/router/joy-react-route-loader */ \"../joy/dist/react/router/joy-react-route-loader.js\");\n/* harmony import */ var _symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/.joy/gen-files/react/client/routes.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__.createElement;\n\nvar joyReactAutoGenRoutes = {\n  name: \"joyReactAutoGenRoutes\",\n  type: Array,\n  useValue: [{\n    path: \"\",\n    providerName: \"mainLayout\",\n    providerModule: __webpack_require__(/*! ./src/client/pages/layout.tsx */ \"./src/client/pages/layout.tsx\"),\n    render: function render(routeProps) {\n      return __jsx(_symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2__.JoyReactRouteLoader, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, routeProps, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 16\n        }\n      }));\n    },\n    routes: [{\n      path: \"/docs\",\n      providerName: \"docsLayout\",\n      providerModule: __webpack_require__(/*! ./src/client/pages/docs/layout.tsx */ \"./src/client/pages/docs/layout.tsx\"),\n      render: function render(routeProps) {\n        return __jsx(_symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2__.JoyReactRouteLoader, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, routeProps, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 16\n          }\n        }));\n      },\n      routes: [{\n        path: \"/docs/:path+\",\n        exact: true,\n        providerName: \"path\",\n        providerModule: __webpack_require__(/*! ./src/client/pages/docs/[...path].tsx */ \"./src/client/pages/docs/[...path].tsx\"),\n        render: function render(routeProps) {\n          return __jsx(_symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2__.JoyReactRouteLoader, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, routeProps, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 16\n            }\n          }));\n        },\n        routes: []\n      }]\n    }, {\n      path: \"/index\",\n      exact: true,\n      providerName: \"helloController\",\n      providerModule: __webpack_require__(/*! ./src/client/pages/index.tsx */ \"./src/client/pages/index.tsx\"),\n      render: function render(routeProps) {\n        return __jsx(_symph_joy_dist_react_router_joy_react_route_loader__WEBPACK_IMPORTED_MODULE_2__.JoyReactRouteLoader, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, routeProps, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 16\n          }\n        }));\n      },\n      routes: []\n    }]\n  }]\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi8uam95L2dlbi1maWxlcy9yZWFjdC9jbGllbnQvcm91dGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1DLHFCQUFxQixHQUFHO0FBQ25DQyxFQUFBQSxJQUFJLEVBQUUsdUJBRDZCO0FBRW5DQyxFQUFBQSxJQUFJLEVBQUVDLEtBRjZCO0FBR25DQyxFQUFBQSxRQUFRLEVBQUksQ0FDVjtBQUNFQyxJQUFBQSxJQUFJLEVBQUUsRUFEUjtBQU1FQyxJQUFBQSxZQUFZLEVBQUUsWUFOaEI7QUFRRUMsSUFBQUEsY0FBYyxFQUFFQyxtQkFBTyxDQUFDLG9FQUFELENBUnpCO0FBU0VDLElBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsVUFBRCxFQUFnQjtBQUN0QixhQUFPLE1BQUMsb0dBQUQscUZBQXlCQSxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7QUFDRCxLQVhIO0FBWUVDLElBQUFBLE1BQU0sRUFBSSxDQUNaO0FBQ0VOLE1BQUFBLElBQUksRUFBRSxPQURSO0FBTUVDLE1BQUFBLFlBQVksRUFBRSxZQU5oQjtBQVFFQyxNQUFBQSxjQUFjLEVBQUVDLG1CQUFPLENBQUMsOEVBQUQsQ0FSekI7QUFTRUMsTUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxVQUFELEVBQWdCO0FBQ3RCLGVBQU8sTUFBQyxvR0FBRCxxRkFBeUJBLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELE9BWEg7QUFZRUMsTUFBQUEsTUFBTSxFQUFJLENBQ1o7QUFDRU4sUUFBQUEsSUFBSSxFQUFFLGNBRFI7QUFHRU8sUUFBQUEsS0FBSyxFQUFFLElBSFQ7QUFNRU4sUUFBQUEsWUFBWSxFQUFFLE1BTmhCO0FBUUVDLFFBQUFBLGNBQWMsRUFBRUMsbUJBQU8sQ0FBQyxvRkFBRCxDQVJ6QjtBQVNFQyxRQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLFVBQUQsRUFBZ0I7QUFDdEIsaUJBQU8sTUFBQyxvR0FBRCxxRkFBeUJBLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELFNBWEg7QUFZRUMsUUFBQUEsTUFBTSxFQUFJO0FBWlosT0FEWTtBQVpaLEtBRFksRUFpQ1o7QUFDRU4sTUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFHRU8sTUFBQUEsS0FBSyxFQUFFLElBSFQ7QUFNRU4sTUFBQUEsWUFBWSxFQUFFLGlCQU5oQjtBQVFFQyxNQUFBQSxjQUFjLEVBQUVDLG1CQUFPLENBQUMsa0VBQUQsQ0FSekI7QUFTRUMsTUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxVQUFELEVBQWdCO0FBQ3RCLGVBQU8sTUFBQyxvR0FBRCxxRkFBeUJBLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELE9BWEg7QUFZRUMsTUFBQUEsTUFBTSxFQUFJO0FBWlosS0FqQ1k7QUFaWixHQURVO0FBSHVCLENBQTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vLmpveS9nZW4tZmlsZXMvcmVhY3QvY2xpZW50L3JvdXRlcy5qcz9iMjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Sm95UmVhY3RSb3V0ZUxvYWRlcn0gZnJvbSAnQHN5bXBoL2pveS9kaXN0L3JlYWN0L3JvdXRlci9qb3ktcmVhY3Qtcm91dGUtbG9hZGVyJ1xuXG5cbmV4cG9ydCBjb25zdCBqb3lSZWFjdEF1dG9HZW5Sb3V0ZXMgPSB7XG4gIG5hbWU6IFwiam95UmVhY3RBdXRvR2VuUm91dGVzXCIsXG4gIHR5cGU6IEFycmF5LFxuICB1c2VWYWx1ZTogICBbXG4gICAge1xuICAgICAgcGF0aDogXCJcIixcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgcHJvdmlkZXJOYW1lOiBcIm1haW5MYXlvdXRcIixcbiAgICAgIFxuICAgICAgcHJvdmlkZXJNb2R1bGU6IHJlcXVpcmUoXCIvVXNlcnMvd2FuZ3lpNzY3L0Rlc2t0b3Avc3ltcGgvc3ltcGgtam95L3BhY2thZ2VzL2pveS13ZWJzaXRlL3NyYy9jbGllbnQvcGFnZXMvbGF5b3V0LnRzeFwiKSxcbiAgICAgIHJlbmRlcjogKHJvdXRlUHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIDxKb3lSZWFjdFJvdXRlTG9hZGVyIHsuLi5yb3V0ZVByb3BzfSAvPjtcbiAgICAgIH0sXG4gICAgICByb3V0ZXM6ICAgW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiL2RvY3NcIixcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgcHJvdmlkZXJOYW1lOiBcImRvY3NMYXlvdXRcIixcbiAgICAgIFxuICAgICAgcHJvdmlkZXJNb2R1bGU6IHJlcXVpcmUoXCIvVXNlcnMvd2FuZ3lpNzY3L0Rlc2t0b3Avc3ltcGgvc3ltcGgtam95L3BhY2thZ2VzL2pveS13ZWJzaXRlL3NyYy9jbGllbnQvcGFnZXMvZG9jcy9sYXlvdXQudHN4XCIpLFxuICAgICAgcmVuZGVyOiAocm91dGVQcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gPEpveVJlYWN0Um91dGVMb2FkZXIgey4uLnJvdXRlUHJvcHN9IC8+O1xuICAgICAgfSxcbiAgICAgIHJvdXRlczogICBbXG4gICAge1xuICAgICAgcGF0aDogXCIvZG9jcy86cGF0aCtcIixcbiAgICAgIFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBcbiAgICAgIFxuICAgICAgcHJvdmlkZXJOYW1lOiBcInBhdGhcIixcbiAgICAgIFxuICAgICAgcHJvdmlkZXJNb2R1bGU6IHJlcXVpcmUoXCIvVXNlcnMvd2FuZ3lpNzY3L0Rlc2t0b3Avc3ltcGgvc3ltcGgtam95L3BhY2thZ2VzL2pveS13ZWJzaXRlL3NyYy9jbGllbnQvcGFnZXMvZG9jcy9bLi4ucGF0aF0udHN4XCIpLFxuICAgICAgcmVuZGVyOiAocm91dGVQcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gPEpveVJlYWN0Um91dGVMb2FkZXIgey4uLnJvdXRlUHJvcHN9IC8+O1xuICAgICAgfSxcbiAgICAgIHJvdXRlczogICBbXG4gIF1cblxuICAgIH0sXG4gIF1cblxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvaW5kZXhcIixcbiAgICAgIFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBcbiAgICAgIFxuICAgICAgcHJvdmlkZXJOYW1lOiBcImhlbGxvQ29udHJvbGxlclwiLFxuICAgICAgXG4gICAgICBwcm92aWRlck1vZHVsZTogcmVxdWlyZShcIi9Vc2Vycy93YW5neWk3NjcvRGVza3RvcC9zeW1waC9zeW1waC1qb3kvcGFja2FnZXMvam95LXdlYnNpdGUvc3JjL2NsaWVudC9wYWdlcy9pbmRleC50c3hcIiksXG4gICAgICByZW5kZXI6IChyb3V0ZVByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiA8Sm95UmVhY3RSb3V0ZUxvYWRlciB7Li4ucm91dGVQcm9wc30gLz47XG4gICAgICB9LFxuICAgICAgcm91dGVzOiAgIFtcbiAgXVxuXG4gICAgfSxcbiAgXVxuXG4gICAgfSxcbiAgXVxuXG59XG4iXSwibmFtZXMiOlsiSm95UmVhY3RSb3V0ZUxvYWRlciIsImpveVJlYWN0QXV0b0dlblJvdXRlcyIsIm5hbWUiLCJ0eXBlIiwiQXJyYXkiLCJ1c2VWYWx1ZSIsInBhdGgiLCJwcm92aWRlck5hbWUiLCJwcm92aWRlck1vZHVsZSIsInJlcXVpcmUiLCJyZW5kZXIiLCJyb3V0ZVByb3BzIiwicm91dGVzIiwiZXhhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./.joy/gen-files/react/client/routes.js\n");

/***/ }),

/***/ "./src/client/pages/docs/[...path].tsx":
/*!*********************************************!*\
  !*** ./src/client/pages/docs/[...path].tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DocsPrerenderGenerator\": function() { return /* binding */ DocsPrerenderGenerator; },\n/* harmony export */   \"default\": function() { return /* binding */ Path; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ \"../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerWarningHelper */ \"../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var _symph_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @symph/react */ \"../react/dist/index.js\");\n/* harmony import */ var _symph_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_symph_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/spin/index.js\");\n/* harmony import */ var _docs_less_modules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./docs.less?modules */ \"./src/client/pages/docs/docs.less?modules\");\n/* harmony import */ var _docs_less_modules__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_docs_less_modules__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _symph_joy_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @symph/joy/react */ \"../joy/react.js\");\n/* harmony import */ var _symph_joy_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_symph_joy_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _model_docs_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/docs.model */ \"./src/client/model/docs.model.ts\");\n/* harmony import */ var _symph_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @symph/core */ \"../core/dist/index.js\");\n/* harmony import */ var _symph_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_symph_core__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/docs/[...path].tsx\",\n    _dec,\n    _dec2,\n    _dec3,\n    _dec4,\n    _class,\n    _class2,\n    _descriptor,\n    _dec5,\n    _dec6,\n    _dec7,\n    _dec8,\n    _dec9,\n    _class4,\n    _class5,\n    _descriptor2,\n    _descriptor3;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6__.createElement;\n\n\n\n\n\n\n\n\nvar DocsPrerenderGenerator = (_dec = (0,_symph_joy_react__WEBPACK_IMPORTED_MODULE_9__.Prerender)(), _dec2 = (0,_symph_react__WEBPACK_IMPORTED_MODULE_8__.ReactComponent)(), _dec3 = (0,_symph_core__WEBPACK_IMPORTED_MODULE_11__.Inject)(), _dec4 = Reflect.metadata(\"design:type\", typeof _model_docs_model__WEBPACK_IMPORTED_MODULE_10__.DocsModel === \"undefined\" ? Object : _model_docs_model__WEBPACK_IMPORTED_MODULE_10__.DocsModel), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {\n  function DocsPrerenderGenerator() {\n    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"docsModel\", _descriptor, this);\n  }\n\n  var _proto = DocsPrerenderGenerator.prototype;\n\n  _proto.getRoute = function getRoute() {\n    return \"/docs/:path\";\n  };\n\n  _proto.isFallback = function isFallback() {\n    return false;\n  };\n\n  _proto.getPaths = /*#__PURE__*/function () {\n    var _getPaths = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee() {\n      var menus, paths, addChildren;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return this.docsModel.getDocMenus();\n\n            case 2:\n              menus = _context.sent;\n              paths = [];\n\n              addChildren = function addChildren(menus) {\n                (menus || []).forEach(function (menu) {\n                  var _menu$children;\n\n                  if ((_menu$children = menu.children) !== null && _menu$children !== void 0 && _menu$children.length) {\n                    addChildren(menu.children);\n                  } else {\n                    paths.push(\"/docs\" + menu.path);\n                  }\n                });\n              };\n\n              addChildren(menus || []);\n              return _context.abrupt(\"return\", paths);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function getPaths() {\n      return _getPaths.apply(this, arguments);\n    }\n\n    return getPaths;\n  }();\n\n  _proto.getApis = /*#__PURE__*/function () {\n    var _getApis = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2() {\n      var paths;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return this.docsModel.getPreDocMenus();\n\n            case 2:\n              paths = _context2.sent;\n              paths = paths.map(function (value) {\n                return {\n                  path: value.detail\n                };\n              });\n              return _context2.abrupt(\"return\", [{\n                path: \"/docs/menus\"\n              }].concat(paths));\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    function getApis() {\n      return _getApis.apply(this, arguments);\n    }\n\n    return getApis;\n  }();\n\n  return DocsPrerenderGenerator;\n}(), (_descriptor = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class2.prototype, \"docsModel\", [_dec3, _dec4], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n})), _class2)) || _class) || _class);\nvar Path = (_dec5 = (0,_symph_react__WEBPACK_IMPORTED_MODULE_8__.ReactController)(), _dec6 = (0,_symph_react__WEBPACK_IMPORTED_MODULE_8__.RouteParam)({\n  name: \"path\"\n}), _dec7 = Reflect.metadata(\"design:type\", String), _dec8 = (0,_symph_core__WEBPACK_IMPORTED_MODULE_11__.Inject)(), _dec9 = Reflect.metadata(\"design:type\", typeof _model_docs_model__WEBPACK_IMPORTED_MODULE_10__.DocsModel === \"undefined\" ? Object : _model_docs_model__WEBPACK_IMPORTED_MODULE_10__.DocsModel), _dec5(_class4 = (_class5 = /*#__PURE__*/function (_BaseReactController) {\n  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Path, _BaseReactController);\n\n  function Path() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _BaseReactController.call.apply(_BaseReactController, [this].concat(args)) || this;\n\n    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this, \"docPath\", _descriptor2, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this));\n\n    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this, \"docsModel\", _descriptor3, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this));\n\n    _this.state = {\n      showDrawer: false\n    };\n    return _this;\n  }\n\n  var _proto2 = Path.prototype;\n\n  _proto2.initialModelStaticState = /*#__PURE__*/function () {\n    var _initialModelStaticState = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee3() {\n      var path;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              path = this.docPath || \"/docs/docs/style-css\";\n              _context3.next = 3;\n              return this.docsModel.getDocMenus();\n\n            case 3:\n              _context3.next = 5;\n              return this.fetchPageDocData(path);\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, this);\n    }));\n\n    function initialModelStaticState() {\n      return _initialModelStaticState.apply(this, arguments);\n    }\n\n    return initialModelStaticState;\n  }() // shouldComponentUpdate(nextProps: Readonly<Record<string, unknown>>, nextState: Readonly<Record<string, unknown>>, nextContext: any): boolean {\n  //   super.shouldComponentUpdate(nextProps, nextState, nextContext);\n  //   console.log(\"nextProps:\", nextProps);\n  //   console.log(\"nextState:\", nextState);\n  // }\n  ;\n\n  _proto2.fetchPageDocData =\n  /*#__PURE__*/\n  function () {\n    var _fetchPageDocData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee4(path) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              if (!path.startsWith(\"/\")) {\n                path = \"/\" + path;\n              }\n\n              _context4.next = 3;\n              return this.docsModel.getDoc(path);\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, this);\n    }));\n\n    function fetchPageDocData(_x) {\n      return _fetchPageDocData.apply(this, arguments);\n    }\n\n    return fetchPageDocData;\n  }();\n\n  _proto2.componentDidMount = function componentDidMount() {\n    _BaseReactController.prototype.componentDidMount.call(this); // const hash = decodeURIComponent(this.props.location.hash);\n    // const ele = document.querySelector(hash);\n    // ele.scrollIntoView();\n    // console.log(\"componentDidMount\");\n\n  };\n\n  _proto2.renderView = function renderView() {\n    var _this$docsModel$state = this.docsModel.state,\n        currentDoc = _this$docsModel$state.currentDoc,\n        loadCurrentDocErr = _this$docsModel$state.loadCurrentDocErr,\n        loadingCurrentDoc = _this$docsModel$state.loadingCurrentDoc;\n    return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      delay: 200,\n      spinning: loadingCurrentDoc,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 7\n      }\n    }, loadCurrentDocErr ? __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 11\n      }\n    }, \" \", loadCurrentDocErr.code, \":\", loadCurrentDocErr.message) : undefined, currentDoc ? __jsx(\"div\", {\n      className: (_docs_less_modules__WEBPACK_IMPORTED_MODULE_13___default().docContent),\n      dangerouslySetInnerHTML: {\n        __html: currentDoc.htmlContent\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 23\n      }\n    }) : undefined);\n  };\n\n  return Path;\n}(_symph_react__WEBPACK_IMPORTED_MODULE_8__.BaseReactController), (_descriptor2 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class5.prototype, \"docPath\", [_dec6, _dec7], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor3 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class5.prototype, \"docsModel\", [_dec8, _dec9], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n})), _class5)) || _class4);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3BhZ2VzL2RvY3MvWy4uLnBhdGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNVSxzQkFBYixXQUZDSCwyREFBUyxFQUVWLFVBRENILDREQUFjLEVBQ2YsVUFDR0ssb0RBQU0sRUFEVDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxTQUlFRSxRQUpGLEdBSUUsb0JBQWdIO0FBQzlHLFdBQU8sYUFBUDtBQUNELEdBTkg7O0FBQUEsU0FRRUMsVUFSRixHQVFFLHNCQUF5QztBQUN2QyxXQUFPLEtBQVA7QUFDRCxHQVZIOztBQUFBLFNBWVFDLFFBWlI7QUFBQSxpTUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNzQixLQUFLQyxTQUFMLENBQWVDLFdBQWYsRUFEdEI7O0FBQUE7QUFDUUMsY0FBQUEsS0FEUjtBQUVRQyxjQUFBQSxLQUZSLEdBRWdCLEVBRmhCOztBQUdRQyxjQUFBQSxXQUhSLEdBR3NCLFNBQWRBLFdBQWMsQ0FBQ0YsS0FBRCxFQUEwQjtBQUM1QyxpQkFBQ0EsS0FBSyxJQUFJLEVBQVYsRUFBY0csT0FBZCxDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFBQTs7QUFDOUIsd0NBQUlBLElBQUksQ0FBQ0MsUUFBVCwyQ0FBSSxlQUFlQyxNQUFuQixFQUEyQjtBQUN6Qkosb0JBQUFBLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDQyxRQUFOLENBQVg7QUFDRCxtQkFGRCxNQUVPO0FBQ0xKLG9CQUFBQSxLQUFLLENBQUNNLElBQU4sV0FBbUJILElBQUksQ0FBQ0ksSUFBeEI7QUFDRDtBQUNGLGlCQU5EO0FBT0QsZUFYSDs7QUFZRU4sY0FBQUEsV0FBVyxDQUFDRixLQUFLLElBQUksRUFBVixDQUFYO0FBWkYsK0NBYVNDLEtBYlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FaRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxTQTRCUVEsT0E1QlI7QUFBQSxnTUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDb0IsS0FBS1gsU0FBTCxDQUFlWSxjQUFmLEVBRHBCOztBQUFBO0FBQ01ULGNBQUFBLEtBRE47QUFFRUEsY0FBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFDQyxLQUFELEVBQVc7QUFDM0IsdUJBQU87QUFDTEosa0JBQUFBLElBQUksRUFBRUksS0FBSyxDQUFDQztBQURQLGlCQUFQO0FBR0QsZUFKTyxDQUFSO0FBRkYsaURBUUk7QUFDRUwsZ0JBQUFBLElBQUksRUFBRTtBQURSLGVBUkosU0FXT1AsS0FYUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTVCRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtJQTZDcUJhLGdCQURwQjVCLDZEQUFlLFlBRWJDLHdEQUFVLENBQUM7QUFBRTRCLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQUQsNERBR1Z0QixvREFBTTs7Ozs7Ozs7Ozs7Ozs7OztVQUdQdUIsUUFBUTtBQUNOQyxNQUFBQSxVQUFVLEVBQUU7QUFETjs7Ozs7O1VBSUZDO2dOQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNNVixjQUFBQSxJQUROLEdBQ2EsS0FBS1csT0FBTCxJQUFnQixzQkFEN0I7QUFBQTtBQUFBLHFCQUVRLEtBQUtyQixTQUFMLENBQWVDLFdBQWYsRUFGUjs7QUFBQTtBQUFBO0FBQUEscUJBR1EsS0FBS3FCLGdCQUFMLENBQXNCWixJQUF0QixDQUhSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O01BZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O1VBRU1ZOzs7eU1BQU4sa0JBQXVCWixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Usa0JBQUksQ0FBQ0EsSUFBSSxDQUFDYSxVQUFMLENBQWdCLEdBQWhCLENBQUwsRUFBMkI7QUFDekJiLGdCQUFBQSxJQUFJLEdBQUcsTUFBTUEsSUFBYjtBQUNEOztBQUhIO0FBQUEscUJBSVEsS0FBS1YsU0FBTCxDQUFld0IsTUFBZixDQUFzQmQsSUFBdEIsQ0FKUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O1VBT0FlLG9CQUFBLDZCQUEwQjtBQUN4QixtQ0FBTUEsaUJBQU4sWUFEd0IsQ0FFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Q7O1VBRURDLGFBQUEsc0JBQXdCO0FBQ3RCLGdDQUE2RCxLQUFLMUIsU0FBTCxDQUFla0IsS0FBNUU7QUFBQSxRQUFRUyxVQUFSLHlCQUFRQSxVQUFSO0FBQUEsUUFBb0JDLGlCQUFwQix5QkFBb0JBLGlCQUFwQjtBQUFBLFFBQXVDQyxpQkFBdkMseUJBQXVDQSxpQkFBdkM7QUFDQSxXQUNFLE1BQUMsNkNBQUQ7QUFBTSxXQUFLLEVBQUUsR0FBYjtBQUFrQixjQUFRLEVBQUVBLGlCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELGlCQUFpQixHQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csR0FESCxFQUVHQSxpQkFBaUIsQ0FBQ0UsSUFGckIsT0FFNEJGLGlCQUFpQixDQUFDRyxPQUY5QyxDQURnQixHQUtkQyxTQU5OLEVBT0dMLFVBQVUsR0FBRztBQUFLLGVBQVMsRUFBRW5DLHVFQUFoQjtBQUFtQyw2QkFBdUIsRUFBRTtBQUFFMEMsUUFBQUEsTUFBTSxFQUFFUCxVQUFVLENBQUNRO0FBQXJCLE9BQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSCxHQUF3R0gsU0FQckgsQ0FERjtBQVdEOzs7RUE1RCtCN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2RvY3MvWy4uLnBhdGhdLnRzeD9lZWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VSZWFjdENvbnRyb2xsZXIsIFJlYWN0Q29udHJvbGxlciwgUm91dGVQYXJhbSwgUmVhY3RDb21wb25lbnQgfSBmcm9tIFwiQHN5bXBoL3JlYWN0XCI7XG5pbXBvcnQgeyBTcGluIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZG9jcy5sZXNzXCI7XG5pbXBvcnQgeyBQcmVyZW5kZXIsIElKb3lQcmVyZW5kZXIsIFRKb3lQcmVyZW5kZXJBcGkgfSBmcm9tIFwiQHN5bXBoL2pveS9yZWFjdFwiO1xuaW1wb3J0IHsgRG9jTWVudUl0ZW0sIERvY3NNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbC9kb2NzLm1vZGVsXCI7XG5pbXBvcnQgeyBJbmplY3QsIElBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tIFwiQHN5bXBoL2NvcmVcIjtcblxuQFByZXJlbmRlcigpXG5AUmVhY3RDb21wb25lbnQoKVxuZXhwb3J0IGNsYXNzIERvY3NQcmVyZW5kZXJHZW5lcmF0b3IgaW1wbGVtZW50cyBJSm95UHJlcmVuZGVyIHtcbiAgQEluamVjdCgpXG4gIHB1YmxpYyBkb2NzTW9kZWw6IERvY3NNb2RlbDtcblxuICBnZXRSb3V0ZSgpOiBzdHJpbmcgfCBCYXNlUmVhY3RDb250cm9sbGVyPFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgSUFwcGxpY2F0aW9uQ29udGV4dD4ge1xuICAgIHJldHVybiBcIi9kb2NzLzpwYXRoXCI7XG4gIH1cblxuICBpc0ZhbGxiYWNrKCk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhc3luYyBnZXRQYXRocygpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcbiAgICBjb25zdCBtZW51cyA9IGF3YWl0IHRoaXMuZG9jc01vZGVsLmdldERvY01lbnVzKCk7XG4gICAgY29uc3QgcGF0aHMgPSBbXSBhcyBzdHJpbmdbXTtcbiAgICBjb25zdCBhZGRDaGlsZHJlbiA9IChtZW51czogRG9jTWVudUl0ZW1bXSkgPT4ge1xuICAgICAgKG1lbnVzIHx8IFtdKS5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgICAgIGlmIChtZW51LmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICBhZGRDaGlsZHJlbihtZW51LmNoaWxkcmVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRocy5wdXNoKGAvZG9jcyR7bWVudS5wYXRofWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGFkZENoaWxkcmVuKG1lbnVzIHx8IFtdKTtcbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICBhc3luYyBnZXRBcGlzPygpOiBQcm9taXNlPEFycmF5PFRKb3lQcmVyZW5kZXJBcGk+PiB7XG4gICAgbGV0IHBhdGhzID0gYXdhaXQgdGhpcy5kb2NzTW9kZWwuZ2V0UHJlRG9jTWVudXMoKTtcbiAgICBwYXRocyA9IHBhdGhzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6IHZhbHVlLmRldGFpbCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZG9jcy9tZW51c1wiLFxuICAgICAgfSxcbiAgICAgIC4uLnBhdGhzLFxuICAgIF07XG4gIH1cbn1cblxuQFJlYWN0Q29udHJvbGxlcigpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIGV4dGVuZHMgQmFzZVJlYWN0Q29udHJvbGxlciB7XG4gIEBSb3V0ZVBhcmFtKHsgbmFtZTogXCJwYXRoXCIgfSlcbiAgZG9jUGF0aDogc3RyaW5nO1xuXG4gIEBJbmplY3QoKVxuICBwdWJsaWMgZG9jc01vZGVsOiBEb2NzTW9kZWw7XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gIH07XG5cbiAgYXN5bmMgaW5pdGlhbE1vZGVsU3RhdGljU3RhdGUoKTogUHJvbWlzZTx2b2lkIHwgbnVtYmVyPiB7XG4gICAgbGV0IHBhdGggPSB0aGlzLmRvY1BhdGggfHwgXCIvZG9jcy9kb2NzL3N0eWxlLWNzc1wiO1xuICAgIGF3YWl0IHRoaXMuZG9jc01vZGVsLmdldERvY01lbnVzKCk7XG4gICAgYXdhaXQgdGhpcy5mZXRjaFBhZ2VEb2NEYXRhKHBhdGgpO1xuICAgIC8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIuWFs+mXreacjeWKoeerr+a4suafkyDmiafooYzvvIzkvYbmmK/kvJrot7Plm55cIik7XG4gICAgLy8gICAvLyBjb25zdCBoYXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMucHJvcHMubG9jYXRpb24uaGFzaCk7XG4gICAgLy8gICAvLyBjb25zdCBlbGUgPSBnbG9iYWwuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoKTtcbiAgICAvLyAgIC8vIGVsZS5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zdCBoYXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMucHJvcHMubG9jYXRpb24uaGFzaCk7XG4gICAgLy8gY29uc3QgZWxlID0gZ2xvYmFsLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzaCk7XG4gICAgLy8gZWxlLnNjcm9sbEludG9WaWV3KCk7XG4gIH1cblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIG5leHRTdGF0ZTogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCBuZXh0Q29udGV4dDogYW55KTogYm9vbGVhbiB7XG4gIC8vICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCk7XG4gIC8vICAgY29uc29sZS5sb2coXCJuZXh0UHJvcHM6XCIsIG5leHRQcm9wcyk7XG4gIC8vICAgY29uc29sZS5sb2coXCJuZXh0U3RhdGU6XCIsIG5leHRTdGF0ZSk7XG4gIC8vIH1cblxuICBhc3luYyBmZXRjaFBhZ2VEb2NEYXRhKHBhdGgpIHtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHBhdGggPSBcIi9cIiArIHBhdGg7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuZG9jc01vZGVsLmdldERvYyhwYXRoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgLy8gY29uc3QgaGFzaCA9IGRlY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb3BzLmxvY2F0aW9uLmhhc2gpO1xuICAgIC8vIGNvbnN0IGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzaCk7XG4gICAgLy8gZWxlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJjb21wb25lbnREaWRNb3VudFwiKTtcbiAgfVxuXG4gIHJlbmRlclZpZXcoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IGN1cnJlbnREb2MsIGxvYWRDdXJyZW50RG9jRXJyLCBsb2FkaW5nQ3VycmVudERvYyB9ID0gdGhpcy5kb2NzTW9kZWwuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTcGluIGRlbGF5PXsyMDB9IHNwaW5uaW5nPXtsb2FkaW5nQ3VycmVudERvY30+XG4gICAgICAgIHtsb2FkQ3VycmVudERvY0VyciA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAge2xvYWRDdXJyZW50RG9jRXJyLmNvZGV9Ontsb2FkQ3VycmVudERvY0Vyci5tZXNzYWdlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogdW5kZWZpbmVkfVxuICAgICAgICB7Y3VycmVudERvYyA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jQ29udGVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjdXJyZW50RG9jLmh0bWxDb250ZW50IH19IC8+IDogdW5kZWZpbmVkfVxuICAgICAgPC9TcGluPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJhc2VSZWFjdENvbnRyb2xsZXIiLCJSZWFjdENvbnRyb2xsZXIiLCJSb3V0ZVBhcmFtIiwiUmVhY3RDb21wb25lbnQiLCJTcGluIiwic3R5bGVzIiwiUHJlcmVuZGVyIiwiRG9jc01vZGVsIiwiSW5qZWN0IiwiRG9jc1ByZXJlbmRlckdlbmVyYXRvciIsImdldFJvdXRlIiwiaXNGYWxsYmFjayIsImdldFBhdGhzIiwiZG9jc01vZGVsIiwiZ2V0RG9jTWVudXMiLCJtZW51cyIsInBhdGhzIiwiYWRkQ2hpbGRyZW4iLCJmb3JFYWNoIiwibWVudSIsImNoaWxkcmVuIiwibGVuZ3RoIiwicHVzaCIsInBhdGgiLCJnZXRBcGlzIiwiZ2V0UHJlRG9jTWVudXMiLCJtYXAiLCJ2YWx1ZSIsImRldGFpbCIsIlBhdGgiLCJuYW1lIiwic3RhdGUiLCJzaG93RHJhd2VyIiwiaW5pdGlhbE1vZGVsU3RhdGljU3RhdGUiLCJkb2NQYXRoIiwiZmV0Y2hQYWdlRG9jRGF0YSIsInN0YXJ0c1dpdGgiLCJnZXREb2MiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlclZpZXciLCJjdXJyZW50RG9jIiwibG9hZEN1cnJlbnREb2NFcnIiLCJsb2FkaW5nQ3VycmVudERvYyIsImNvZGUiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwiZG9jQ29udGVudCIsIl9faHRtbCIsImh0bWxDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/pages/docs/[...path].tsx\n");

/***/ }),

/***/ "./src/client/pages/docs/layout.tsx":
/*!******************************************!*\
  !*** ./src/client/pages/docs/layout.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DocsLayout; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ \"../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerWarningHelper */ \"../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var _symph_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @symph/react */ \"../react/dist/index.js\");\n/* harmony import */ var _symph_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_symph_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _model_docs_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/docs.model */ \"./src/client/model/docs.model.ts\");\n/* harmony import */ var _symph_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @symph/core */ \"../core/dist/index.js\");\n/* harmony import */ var _symph_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_symph_core__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/anchor/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/menu/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/row/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/col/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/affix/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/drawer/index.js\");\n/* harmony import */ var _docs_less_modules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./docs.less?modules */ \"./src/client/pages/docs/docs.less?modules\");\n/* harmony import */ var _docs_less_modules__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_docs_less_modules__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ant-design/icons */ \"../../node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/docs/layout.tsx\",\n    _dec,\n    _dec2,\n    _dec3,\n    _dec4,\n    _dec5,\n    _class,\n    _class2,\n    _descriptor,\n    _descriptor2;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6__.createElement;\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\nvar Link = antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Link;\nvar DocsLayout = (_dec = (0,_symph_react__WEBPACK_IMPORTED_MODULE_8__.ReactController)(), _dec2 = (0,_symph_react__WEBPACK_IMPORTED_MODULE_8__.RouteParam)({\n  name: \"path\"\n}), _dec3 = Reflect.metadata(\"design:type\", String), _dec4 = (0,_symph_core__WEBPACK_IMPORTED_MODULE_10__.Inject)(), _dec5 = Reflect.metadata(\"design:type\", typeof _model_docs_model__WEBPACK_IMPORTED_MODULE_9__.DocsModel === \"undefined\" ? Object : _model_docs_model__WEBPACK_IMPORTED_MODULE_9__.DocsModel), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseReactController) {\n  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DocsLayout, _BaseReactController);\n\n  function DocsLayout() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _BaseReactController.call.apply(_BaseReactController, [this].concat(args)) || this;\n\n    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this, \"docPath\", _descriptor, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n\n    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this, \"docsModel\", _descriptor2, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n\n    _this.state = {\n      showDrawer: false\n    };\n    return _this;\n  }\n\n  var _proto = DocsLayout.prototype;\n\n  _proto.showDoc = /*#__PURE__*/function () {\n    var _showDoc = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(menu) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              this.props.history.push(\"/docs\" + menu.path);\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function showDoc(_x) {\n      return _showDoc.apply(this, arguments);\n    }\n\n    return showDoc;\n  }();\n\n  _proto.renderMenuItem = function renderMenuItem(items) {\n    if (!items || items.length === 0) {\n      return undefined;\n    }\n\n    var views = [];\n\n    for (var _iterator = _createForOfIteratorHelperLoose(items), _step; !(_step = _iterator()).done;) {\n      var item = _step.value;\n      var children = item.children,\n          title = item.title,\n          path = item.path;\n\n      if (children) {\n        views.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"].SubMenu, {\n          key: path,\n          title: title,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 11\n          }\n        }, this.renderMenuItem(children)));\n      } else {\n        views.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"].Item, {\n          key: path,\n          onClick: this.showDoc.bind(this, item),\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 11\n          }\n        }, title));\n      }\n    }\n\n    return views;\n  };\n\n  _proto.renderView = function renderView() {\n    var _this2 = this;\n\n    var _this$docsModel$state = this.docsModel.state,\n        docMenus = _this$docsModel$state.docMenus,\n        defaultOption = _this$docsModel$state.defaultOption,\n        titleTrees = _this$docsModel$state.titleTrees,\n        currentDoc = _this$docsModel$state.currentDoc;\n    var route = this.props.route;\n    return __jsx(antd__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      className: \"={styles.row\",\n      style: {\n        minHeight: \"calc(100vh - 64px)\",\n        position: \"relative\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      className: (_docs_less_modules__WEBPACK_IMPORTED_MODULE_15___default().menu),\n      sm: 24,\n      md: 5,\n      lg: 5,\n      xl: 4,\n      xxl: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      selectedKeys: [currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.path],\n      mode: \"inline\",\n      openKeys: defaultOption,\n      style: {\n        height: \"calc(100vh - 64px)\"\n      },\n      className: (_docs_less_modules__WEBPACK_IMPORTED_MODULE_15___default().docMenus),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, this.renderMenuItem(docMenus)))), __jsx(\"div\", {\n      className: (_docs_less_modules__WEBPACK_IMPORTED_MODULE_15___default().menuIcon),\n      onClick: function onClick() {\n        _this2.setState({\n          showDrawer: true\n        });\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }\n    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }\n    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n      placement: \"left\",\n      onClose: function onClose() {\n        _this2.setState({\n          showDrawer: false\n        });\n      },\n      visible: this.state.showDrawer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      selectedKeys: [currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.path],\n      mode: \"inline\",\n      openKeys: defaultOption,\n      style: {\n        height: \"calc(100vh - 64px)\"\n      },\n      className: (_docs_less_modules__WEBPACK_IMPORTED_MODULE_15___default().docMenus),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }\n    }, this.renderMenuItem(docMenus))), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      style: {\n        flex: 1\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }\n    }, __jsx(_symph_react__WEBPACK_IMPORTED_MODULE_8__.RouteSwitch, {\n      routes: (route === null || route === void 0 ? void 0 : route.routes) || [],\n      extraProps: null,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 11\n      }\n    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      sm: 24,\n      md: 3,\n      lg: 3,\n      xl: 3,\n      xxl: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }\n    }, titleTrees ? __jsx(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      className: (_docs_less_modules__WEBPACK_IMPORTED_MODULE_15___default().titleTree),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, titleTrees.map(function (value, key) {\n      if (value.children) {\n        return __jsx(Link, {\n          key: key,\n          href: value.id,\n          title: value.text,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 21\n          }\n        }, value.children.map(function (child, k) {\n          return __jsx(Link, {\n            key: k,\n            href: child.id,\n            title: child.text,\n            __self: _this2,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 25\n            }\n          });\n        }));\n      } else {\n        return __jsx(Link, {\n          key: key,\n          href: value.id,\n          title: value.text,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 26\n          }\n        });\n      }\n    })) : undefined));\n  };\n\n  return DocsLayout;\n}(_symph_react__WEBPACK_IMPORTED_MODULE_8__.BaseReactController), (_descriptor = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class2.prototype, \"docPath\", [_dec2, _dec3], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor2 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class2.prototype, \"docsModel\", [_dec4, _dec5], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n})), _class2)) || _class);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3BhZ2VzL2RvY3MvbGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRZSxJQUFSLEdBQWlCSixrREFBakI7SUFHcUJLLHFCQURwQmIsNkRBQWUsWUFFYkMsd0RBQVUsQ0FBQztBQUFFYSxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELDREQUdWWCxvREFBTTs7Ozs7Ozs7Ozs7Ozs7OztVQUdQWSxRQUFRO0FBQ05DLE1BQUFBLFVBQVUsRUFBRTtBQUROOzs7Ozs7U0FJTUM7Z01BQWQsaUJBQXNCQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsbUJBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsSUFBbkIsV0FBZ0NILElBQUksQ0FBQ0ksSUFBckM7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztTQUlRQyxpQkFBUix3QkFBdUJDLEtBQXZCLEVBQXlEO0FBQ3ZELFFBQUksQ0FBQ0EsS0FBRCxJQUFVQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsQ0FBL0IsRUFBa0M7QUFDaEMsYUFBT0MsU0FBUDtBQUNEOztBQUNELFFBQU1DLEtBQUssR0FBRyxFQUFkOztBQUNBLHlEQUFtQkgsS0FBbkIsd0NBQTBCO0FBQUEsVUFBZkksSUFBZTtBQUN4QixVQUFRQyxRQUFSLEdBQWtDRCxJQUFsQyxDQUFRQyxRQUFSO0FBQUEsVUFBa0JDLEtBQWxCLEdBQWtDRixJQUFsQyxDQUFrQkUsS0FBbEI7QUFBQSxVQUF5QlIsSUFBekIsR0FBa0NNLElBQWxDLENBQXlCTixJQUF6Qjs7QUFDQSxVQUFJTyxRQUFKLEVBQWM7QUFDWkYsUUFBQUEsS0FBSyxDQUFDTixJQUFOLENBQ0UsTUFBQyxxREFBRDtBQUFjLGFBQUcsRUFBRUMsSUFBbkI7QUFBeUIsZUFBSyxFQUFFUSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0csS0FBS1AsY0FBTCxDQUFvQk0sUUFBcEIsQ0FESCxDQURGO0FBS0QsT0FORCxNQU1PO0FBQ0xGLFFBQUFBLEtBQUssQ0FBQ04sSUFBTixDQUNFLE1BQUMsa0RBQUQ7QUFBVyxhQUFHLEVBQUVDLElBQWhCO0FBQXNCLGlCQUFPLEVBQUUsS0FBS0wsT0FBTCxDQUFhYyxJQUFiLENBQWtCLElBQWxCLEVBQXdCSCxJQUF4QixDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dFLEtBREgsQ0FERjtBQUtEO0FBQ0Y7O0FBQ0QsV0FBT0gsS0FBUDtBQUNEOztTQUVESyxhQUFBLHNCQUF3QjtBQUFBOztBQUN0QixnQ0FBNEQsS0FBS0MsU0FBTCxDQUFlbEIsS0FBM0U7QUFBQSxRQUFRbUIsUUFBUix5QkFBUUEsUUFBUjtBQUFBLFFBQWtCQyxhQUFsQix5QkFBa0JBLGFBQWxCO0FBQUEsUUFBaUNDLFVBQWpDLHlCQUFpQ0EsVUFBakM7QUFBQSxRQUE2Q0MsVUFBN0MseUJBQTZDQSxVQUE3QztBQUNBLFFBQVFDLEtBQVIsR0FBa0IsS0FBS25CLEtBQXZCLENBQVFtQixLQUFSO0FBQ0EsV0FDRSxNQUFDLDZDQUFEO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFNBQVMsRUFBRSxvQkFBYjtBQUFtQ0MsUUFBQUEsUUFBUSxFQUFFO0FBQTdDLE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZDQUFEO0FBQUssZUFBUyxFQUFFOUIsaUVBQWhCO0FBQTZCLFFBQUUsRUFBRSxFQUFqQztBQUFxQyxRQUFFLEVBQUUsQ0FBekM7QUFBNEMsUUFBRSxFQUFFLENBQWhEO0FBQW1ELFFBQUUsRUFBRSxDQUF2RDtBQUEwRCxTQUFHLEVBQUUsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkNBQUQ7QUFDRSxrQkFBWSxFQUFFLENBQUMyQixVQUFELGFBQUNBLFVBQUQsdUJBQUNBLFVBQVUsQ0FBRWYsSUFBYixDQURoQjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UsY0FBUSxFQUFFYSxhQUhaO0FBSUUsV0FBSyxFQUFFO0FBQUVNLFFBQUFBLE1BQU0sRUFBRTtBQUFWLE9BSlQ7QUFLRSxlQUFTLEVBQUUvQixxRUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0csS0FBS2EsY0FBTCxDQUFvQlcsUUFBcEIsQ0FQSCxDQURGLENBREYsQ0FERixFQWNFO0FBQ0UsZUFBUyxFQUFFeEIscUVBRGI7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYixjQUFJLENBQUNpQyxRQUFMLENBQWM7QUFDWjNCLFVBQUFBLFVBQVUsRUFBRTtBQURBLFNBQWQ7QUFHRCxPQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixDQWRGLEVBd0JFLE1BQUMsNkNBQUQ7QUFDRSxlQUFTLEVBQUMsTUFEWjtBQUVFLGFBQU8sRUFBRSxtQkFBTTtBQUNiLGNBQUksQ0FBQzJCLFFBQUwsQ0FBYztBQUNaM0IsVUFBQUEsVUFBVSxFQUFFO0FBREEsU0FBZDtBQUdELE9BTkg7QUFPRSxhQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxVQVB0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0UsTUFBQyw2Q0FBRDtBQUNFLGtCQUFZLEVBQUUsQ0FBQ3FCLFVBQUQsYUFBQ0EsVUFBRCx1QkFBQ0EsVUFBVSxDQUFFZixJQUFiLENBRGhCO0FBRUUsVUFBSSxFQUFDLFFBRlA7QUFHRSxjQUFRLEVBQUVhLGFBSFo7QUFJRSxXQUFLLEVBQUU7QUFBRU0sUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FKVDtBQUtFLGVBQVMsRUFBRS9CLHFFQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRyxLQUFLYSxjQUFMLENBQW9CVyxRQUFwQixDQVBILENBVEYsQ0F4QkYsRUEyQ0UsTUFBQyw2Q0FBRDtBQUFLLFdBQUssRUFBRTtBQUFFVSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQWEsWUFBTSxFQUFFLENBQUFOLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFFTyxNQUFQLEtBQWlCLEVBQXRDO0FBQTBDLGdCQUFVLEVBQUUsSUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBM0NGLEVBOENFLE1BQUMsNkNBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUUsQ0FBeEI7QUFBMkIsUUFBRSxFQUFFLENBQS9CO0FBQWtDLFNBQUcsRUFBRSxDQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dULFVBQVUsR0FDVCxNQUFDLDZDQUFEO0FBQVEsZUFBUyxFQUFFMUIsc0VBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzBCLFVBQVUsQ0FBQ1csR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUM5QixVQUFJRCxLQUFLLENBQUNuQixRQUFWLEVBQW9CO0FBQ2xCLGVBQ0UsTUFBQyxJQUFEO0FBQU0sYUFBRyxFQUFFb0IsR0FBWDtBQUFnQixjQUFJLEVBQUVELEtBQUssQ0FBQ0UsRUFBNUI7QUFBZ0MsZUFBSyxFQUFFRixLQUFLLENBQUNHLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR0gsS0FBSyxDQUFDbkIsUUFBTixDQUFla0IsR0FBZixDQUFtQixVQUFDSyxLQUFELEVBQVFDLENBQVI7QUFBQSxpQkFDbEIsTUFBQyxJQUFEO0FBQU0sZUFBRyxFQUFFQSxDQUFYO0FBQWMsZ0JBQUksRUFBRUQsS0FBSyxDQUFDRixFQUExQjtBQUE4QixpQkFBSyxFQUFFRSxLQUFLLENBQUNELElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEa0I7QUFBQSxTQUFuQixDQURILENBREY7QUFPRCxPQVJELE1BUU87QUFDTCxlQUFPLE1BQUMsSUFBRDtBQUFNLGFBQUcsRUFBRUYsR0FBWDtBQUFnQixjQUFJLEVBQUVELEtBQUssQ0FBQ0UsRUFBNUI7QUFBZ0MsZUFBSyxFQUFFRixLQUFLLENBQUNHLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0FBQ0YsS0FaQSxDQURILENBRFMsR0FnQlB6QixTQWpCTixDQTlDRixDQURGO0FBb0VEOzs7RUE5R3FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2RvY3MvbGF5b3V0LnRzeD9mZDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VSZWFjdENvbnRyb2xsZXIsIFJvdXRlU3dpdGNoLCBSZWFjdENvbnRyb2xsZXIsIFJvdXRlUGFyYW0gfSBmcm9tIFwiQHN5bXBoL3JlYWN0XCI7XG5pbXBvcnQgeyBEb2NNZW51SXRlbSwgRG9jc01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsL2RvY3MubW9kZWxcIjtcbmltcG9ydCB7IEluamVjdCB9IGZyb20gXCJAc3ltcGgvY29yZVwiO1xuaW1wb3J0IHsgQWZmaXgsIENvbCwgTWVudSwgUm93LCBBbmNob3IsIERyYXdlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2RvY3MubGVzc1wiO1xuaW1wb3J0IHsgTWVudVVuZm9sZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5jb25zdCB7IExpbmsgfSA9IEFuY2hvcjtcblxuQFJlYWN0Q29udHJvbGxlcigpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2NzTGF5b3V0IGV4dGVuZHMgQmFzZVJlYWN0Q29udHJvbGxlciB7XG4gIEBSb3V0ZVBhcmFtKHsgbmFtZTogXCJwYXRoXCIgfSlcbiAgZG9jUGF0aDogc3RyaW5nO1xuXG4gIEBJbmplY3QoKVxuICBwdWJsaWMgZG9jc01vZGVsOiBEb2NzTW9kZWw7XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gIH07XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93RG9jKG1lbnU6IERvY01lbnVJdGVtKSB7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9kb2NzJHttZW51LnBhdGh9YCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck1lbnVJdGVtKGl0ZW1zOiBEb2NNZW51SXRlbVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgcGF0aCB9ID0gaXRlbTtcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICB2aWV3cy5wdXNoKFxuICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PXtwYXRofSB0aXRsZT17dGl0bGV9PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTWVudUl0ZW0oY2hpbGRyZW4pfVxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld3MucHVzaChcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT17cGF0aH0gb25DbGljaz17dGhpcy5zaG93RG9jLmJpbmQodGhpcywgaXRlbSl9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmlld3M7XG4gIH1cblxuICByZW5kZXJWaWV3KCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBkb2NNZW51cywgZGVmYXVsdE9wdGlvbiwgdGl0bGVUcmVlcywgY3VycmVudERvYyB9ID0gdGhpcy5kb2NzTW9kZWwuc3RhdGU7XG4gICAgY29uc3QgeyByb3V0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBjbGFzc05hbWU9XCI9e3N0eWxlcy5yb3dcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDY0cHgpXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gc209ezI0fSBtZD17NX0gbGc9ezV9IHhsPXs0fSB4eGw9ezN9PlxuICAgICAgICAgIDxBZmZpeD5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnREb2M/LnBhdGhdfVxuICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgb3BlbktleXM9e2RlZmF1bHRPcHRpb259XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCJjYWxjKDEwMHZoIC0gNjRweClcIiB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kb2NNZW51c31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVudUl0ZW0oZG9jTWVudXMpfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNob3dEcmF3ZXI6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVVbmZvbGRPdXRsaW5lZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzaG93RHJhd2VyOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaG93RHJhd2VyfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnREb2M/LnBhdGhdfVxuICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICBvcGVuS2V5cz17ZGVmYXVsdE9wdGlvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCJjYWxjKDEwMHZoIC0gNjRweClcIiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZG9jTWVudXN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTWVudUl0ZW0oZG9jTWVudXMpfVxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgIDxDb2wgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICA8Um91dGVTd2l0Y2ggcm91dGVzPXtyb3V0ZT8ucm91dGVzIHx8IFtdfSBleHRyYVByb3BzPXtudWxsfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17MjR9IG1kPXszfSBsZz17M30geGw9ezN9IHh4bD17M30+XG4gICAgICAgICAge3RpdGxlVHJlZXMgPyAoXG4gICAgICAgICAgICA8QW5jaG9yIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVHJlZX0+XG4gICAgICAgICAgICAgIHt0aXRsZVRyZWVzLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e3ZhbHVlLmlkfSB0aXRsZT17dmFsdWUudGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a30gaHJlZj17Y2hpbGQuaWR9IHRpdGxlPXtjaGlsZC50ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmsga2V5PXtrZXl9IGhyZWY9e3ZhbHVlLmlkfSB0aXRsZT17dmFsdWUudGV4dH0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQW5jaG9yPlxuICAgICAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFzZVJlYWN0Q29udHJvbGxlciIsIlJvdXRlU3dpdGNoIiwiUmVhY3RDb250cm9sbGVyIiwiUm91dGVQYXJhbSIsIkRvY3NNb2RlbCIsIkluamVjdCIsIkFmZml4IiwiQ29sIiwiTWVudSIsIlJvdyIsIkFuY2hvciIsIkRyYXdlciIsInN0eWxlcyIsIk1lbnVVbmZvbGRPdXRsaW5lZCIsIkxpbmsiLCJEb2NzTGF5b3V0IiwibmFtZSIsInN0YXRlIiwic2hvd0RyYXdlciIsInNob3dEb2MiLCJtZW51IiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsInBhdGgiLCJyZW5kZXJNZW51SXRlbSIsIml0ZW1zIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidmlld3MiLCJpdGVtIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImJpbmQiLCJyZW5kZXJWaWV3IiwiZG9jc01vZGVsIiwiZG9jTWVudXMiLCJkZWZhdWx0T3B0aW9uIiwidGl0bGVUcmVlcyIsImN1cnJlbnREb2MiLCJyb3V0ZSIsIm1pbkhlaWdodCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwibWVudUljb24iLCJzZXRTdGF0ZSIsImZsZXgiLCJyb3V0ZXMiLCJ0aXRsZVRyZWUiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImlkIiwidGV4dCIsImNoaWxkIiwiayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/pages/docs/layout.tsx\n");

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./src/client/pages/docs/docs.less?modules":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./src/client/pages/docs/docs.less?modules ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-theme=\"light\"] .docs_docMenus__3hgPX {\n  padding: 12px 0;\n}\n[data-theme=\"light\"] .docs_docMenus__3hgPX .ant-menu-sub.ant-menu-inline {\n  background: #fff !important;\n}\n[data-theme=\"light\"] .docs_row__2F7In {\n  background: #fff;\n}\n.docs_docContent__3MuEv {\n  padding: 50px 40px;\n}\n.docs_titleTree__24KFt {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  max-width: 170px;\n  text-overflow: ellipsis;\n}\n@media screen and (max-width: 1120px) {\n  .docs_titleTree__24KFt {\n    display: none;\n  }\n}\n.docs_menuIcon__1G0AP {\n  display: none;\n}\n@media screen and (max-width: 947px) {\n  .docs_menu__2p7Ft {\n    display: none !important;\n  }\n  .docs_docContent__3MuEv {\n    padding: 107px 40px 50px;\n  }\n  .docs_menuIcon__1G0AP {\n    display: block;\n    position: absolute;\n    left: 0px;\n    top: 60px;\n    width: 40px;\n    height: 40px;\n    box-shadow: 2px 0 8px #00000026;\n    border-radius: 0 4px 4px 0;\n    text-align: center;\n    line-height: 40px;\n    cursor: pointer;\n    z-index: 2;\n  }\n}\n", "",{"version":3,"sources":["webpack://./docs.less"],"names":[],"mappings":"AAAC;EAEG,eAAA;AAAJ;AAFC;EAKO,2BAAA;AAAR;AALC;EAUG,gBAAA;AAFJ;AAKA;EACE,kBAAA;AAHF;AAKA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,gBAAA;EACA,uBAAA;AAHF;AAKA;EACE;IACE,aAAA;EAHF;AACF;AAKA;EACE,aAAA;AAHF;AAKA;EACE;IACE,wBAAA;EAHF;EAKA;IACE,wBAAA;EAHF;EAKA;IACE,cAAA;IACA,kBAAA;IACA,SAAA;IACA,SAAA;IACA,WAAA;IACA,YAAA;IACA,+BAAA;IACA,0BAAA;IACA,kBAAA;IACA,iBAAA;IACA,eAAA;IACA,UAAA;EAHF;AACF","sourcesContent":["&[data-theme=\"light\"] {\n  .docMenus {\n    padding: 12px 0;\n    :global {\n      .ant-menu-sub.ant-menu-inline {\n        background: #fff !important;\n      }\n    }\n  }\n  .row{\n    background: #fff;\n  }\n}\n.docContent {\n  padding: 50px 40px;\n}\n.titleTree {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  max-width: 170px;\n  text-overflow: ellipsis;\n}\n@media screen and (max-width: 1120px) {\n  .titleTree {\n    display: none;\n  }\n}\n.menuIcon {\n  display: none;\n}\n@media screen and (max-width: 947px) {\n  .menu {\n    display: none !important;\n  }\n  .docContent {\n    padding: 107px 40px 50px;\n  }\n  .menuIcon {\n    display: block;\n    position: absolute;\n    left: 0px;\n    top: 60px;\n    width: 40px;\n    height: 40px;\n    box-shadow: 2px 0 8px #00000026;\n    border-radius: 0 4px 4px 0;\n    text-align: center;\n    line-height: 40px;\n    cursor: pointer;\n    z-index: 2;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"docMenus": "docs_docMenus__3hgPX",
	"row": "docs_row__2F7In",
	"docContent": "docs_docContent__3MuEv",
	"titleTree": "docs_titleTree__24KFt",
	"menuIcon": "docs_menuIcon__1G0AP",
	"menu": "docs_menu__2p7Ft"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/antd/es/_util/easings.js":
/*!***************************************************!*\
  !*** ../../node_modules/antd/es/_util/easings.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easeInOutCubic": function() { return /* binding */ easeInOutCubic; }
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;

  if (t < 1) {
    return cc / 2 * t * t * t + b;
  } // eslint-disable-next-line no-return-assign


  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}

/***/ }),

/***/ "../../node_modules/antd/es/_util/getScroll.js":
/*!*****************************************************!*\
  !*** ../../node_modules/antd/es/_util/getScroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWindow": function() { return /* binding */ isWindow; },
/* harmony export */   "default": function() { return /* binding */ getScroll; }
/* harmony export */ });
function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}
function getScroll(target, top) {
  var _a;

  if (typeof window === 'undefined') {
    return 0;
  }

  var method = top ? 'scrollTop' : 'scrollLeft';
  var result = 0;

  if (isWindow(target)) {
    result = target[top ? 'pageYOffset' : 'pageXOffset'];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }

  if (target && !isWindow(target) && typeof result !== 'number') {
    result = (_a = (target.ownerDocument || target).documentElement) === null || _a === void 0 ? void 0 : _a[method];
  }

  return result;
}

/***/ }),

/***/ "../../node_modules/antd/es/_util/hooks/useForceUpdate.js":
/*!****************************************************************!*\
  !*** ../../node_modules/antd/es/_util/hooks/useForceUpdate.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForceUpdate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");


function useForceUpdate() {
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(function (x) {
    return x + 1;
  }, 0),
      _React$useReducer2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      forceUpdate = _React$useReducer2[1];

  return forceUpdate;
}

/***/ }),

/***/ "../../node_modules/antd/es/_util/scrollTo.js":
/*!****************************************************!*\
  !*** ../../node_modules/antd/es/_util/scrollTo.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollTo; }
/* harmony export */ });
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/raf */ "../../node_modules/rc-util/es/raf.js");
/* harmony import */ var _getScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getScroll */ "../../node_modules/antd/es/_util/getScroll.js");
/* harmony import */ var _easings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./easings */ "../../node_modules/antd/es/_util/easings.js");



function scrollTo(y) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$getContainer = options.getContainer,
      getContainer = _options$getContainer === void 0 ? function () {
    return window;
  } : _options$getContainer,
      callback = options.callback,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 450 : _options$duration;
  var container = getContainer();
  var scrollTop = (0,_getScroll__WEBPACK_IMPORTED_MODULE_1__["default"])(container, true);
  var startTime = Date.now();

  var frameFunc = function frameFunc() {
    var timestamp = Date.now();
    var time = timestamp - startTime;
    var nextScrollTop = (0,_easings__WEBPACK_IMPORTED_MODULE_2__.easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);

    if ((0,_getScroll__WEBPACK_IMPORTED_MODULE_1__.isWindow)(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof HTMLDocument || container.constructor.name === 'HTMLDocument') {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }

    if (time < duration) {
      (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__["default"])(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };

  (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__["default"])(frameFunc);
}

/***/ }),

/***/ "../../node_modules/antd/es/_util/throttleByAnimationFrame.js":
/*!********************************************************************!*\
  !*** ../../node_modules/antd/es/_util/throttleByAnimationFrame.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttleByAnimationFrame": function() { return /* binding */ throttleByAnimationFrame; },
/* harmony export */   "throttleByAnimationFrameDecorator": function() { return /* binding */ throttleByAnimationFrameDecorator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "../../node_modules/rc-util/es/raf.js");


function throttleByAnimationFrame(fn) {
  var requestId;

  var later = function later(args) {
    return function () {
      requestId = null;
      fn.apply(void 0, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args));
    };
  };

  var throttled = function throttled() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      requestId = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(later(args));
    }
  };

  throttled.cancel = function () {
    return rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(requestId);
  };

  return throttled;
}
function throttleByAnimationFrameDecorator() {
  return function throttle(target, key, descriptor) {
    var fn = descriptor.value;
    var definingProperty = false;
    return {
      configurable: true,
      get: function get() {
        // In IE11 calling Object.defineProperty has a side-effect of evaluating the
        // getter for the property which is being replaced. This causes infinite
        // recursion and an "Out of stack space" error.
        // eslint-disable-next-line no-prototype-builtins
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          /* istanbul ignore next */
          return fn;
        }

        var boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true
        });
        definingProperty = false;
        return boundFn;
      }
    };
  };
}

/***/ }),

/***/ "../../node_modules/antd/es/affix/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/antd/es/affix/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/omit */ "../../node_modules/rc-util/es/omit.js");
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-resize-observer */ "../../node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_util/throttleByAnimationFrame */ "../../node_modules/antd/es/_util/throttleByAnimationFrame.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "../../node_modules/antd/es/affix/utils.js");








var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

var AffixStatus;

(function (AffixStatus) {
  AffixStatus[AffixStatus["None"] = 0] = "None";
  AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
})(AffixStatus || (AffixStatus = {}));

var Affix = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Affix, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(Affix);

  function Affix() {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Affix);

    _this = _super.apply(this, arguments);
    _this.state = {
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null
    };

    _this.getOffsetTop = function () {
      var offsetBottom = _this.props.offsetBottom;
      var offsetTop = _this.props.offsetTop;

      if (offsetBottom === undefined && offsetTop === undefined) {
        offsetTop = 0;
      }

      return offsetTop;
    };

    _this.getOffsetBottom = function () {
      return _this.props.offsetBottom;
    };

    _this.savePlaceholderNode = function (node) {
      _this.placeholderNode = node;
    };

    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    }; // =================== Measure ===================


    _this.measure = function () {
      var _this$state = _this.state,
          status = _this$state.status,
          lastAffix = _this$state.lastAffix;
      var onChange = _this.props.onChange;

      var targetFunc = _this.getTargetFunc();

      if (status !== AffixStatus.Prepare || !_this.fixedNode || !_this.placeholderNode || !targetFunc) {
        return;
      }

      var offsetTop = _this.getOffsetTop();

      var offsetBottom = _this.getOffsetBottom();

      var targetNode = targetFunc();

      if (!targetNode) {
        return;
      }

      var newState = {
        status: AffixStatus.None
      };
      var targetRect = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getTargetRect)(targetNode);
      var placeholderReact = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getTargetRect)(_this.placeholderNode);
      var fixedTop = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getFixedTop)(placeholderReact, targetRect, offsetTop);
      var fixedBottom = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getFixedBottom)(placeholderReact, targetRect, offsetBottom);

      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          top: fixedTop,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          bottom: fixedBottom,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      }

      newState.lastAffix = !!newState.affixStyle;

      if (onChange && lastAffix !== newState.lastAffix) {
        onChange(newState.lastAffix);
      }

      _this.setState(newState);
    }; // @ts-ignore TS6133


    _this.prepareMeasure = function () {
      // event param is used before. Keep compatible ts define here.
      _this.setState({
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined
      }); // Test if `updatePosition` called


      if (false) { var onTestUpdatePosition; }
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Affix, [{
    key: "getTargetFunc",
    value: function getTargetFunc() {
      var getTargetContainer = this.context.getTargetContainer;
      var target = this.props.target;

      if (target !== undefined) {
        return target;
      }

      return getTargetContainer || getDefaultTarget;
    } // Event handler

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var targetFunc = this.getTargetFunc();

      if (targetFunc) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        this.timeout = setTimeout(function () {
          (0,_utils__WEBPACK_IMPORTED_MODULE_11__.addObserveTarget)(targetFunc(), _this2); // Mock Event object.

          _this2.updatePosition();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevTarget = this.state.prevTarget;
      var targetFunc = this.getTargetFunc();
      var newTarget = null;

      if (targetFunc) {
        newTarget = targetFunc() || null;
      }

      if (prevTarget !== newTarget) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_11__.removeObserveTarget)(this);

        if (newTarget) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_11__.addObserveTarget)(newTarget, this); // Mock Event object.

          this.updatePosition();
        } // eslint-disable-next-line react/no-did-update-set-state


        this.setState({
          prevTarget: newTarget
        });
      }

      if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
        this.updatePosition();
      }

      this.measure();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.removeObserveTarget)(this);
      this.updatePosition.cancel(); // https://github.com/ant-design/ant-design/issues/22683

      this.lazyUpdatePosition.cancel();
    } // Handle realign logic

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      this.prepareMeasure();
    }
  }, {
    key: "lazyUpdatePosition",
    value: function lazyUpdatePosition() {
      var targetFunc = this.getTargetFunc();
      var affixStyle = this.state.affixStyle; // Check position change before measure to make Safari smooth

      if (targetFunc && affixStyle) {
        var offsetTop = this.getOffsetTop();
        var offsetBottom = this.getOffsetBottom();
        var targetNode = targetFunc();

        if (targetNode && this.placeholderNode) {
          var targetRect = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getTargetRect)(targetNode);
          var placeholderReact = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getTargetRect)(this.placeholderNode);
          var fixedTop = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getFixedTop)(placeholderReact, targetRect, offsetTop);
          var fixedBottom = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getFixedBottom)(placeholderReact, targetRect, offsetBottom);

          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      } // Directly call prepare measure since it's already throttled.


      this.prepareMeasure();
    } // =================== Render ===================

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var getPrefixCls = this.context.getPrefixCls;
      var _this$state2 = this.state,
          affixStyle = _this$state2.affixStyle,
          placeholderStyle = _this$state2.placeholderStyle;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children;
      var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getPrefixCls('affix', prefixCls), !!affixStyle));
      var props = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']); // Omit this since `onTestUpdatePosition` only works on test.

      if (false) {}

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(rc_resize_observer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onResize: function onResize() {
          _this3.updatePosition();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        ref: this.savePlaceholderNode
      }), affixStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        style: placeholderStyle,
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: className,
        ref: this.saveFixedNode,
        style: affixStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(rc_resize_observer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onResize: function onResize() {
          _this3.updatePosition();
        }
      }, children))));
    }
  }]);

  return Affix;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

Affix.contextType = _config_provider__WEBPACK_IMPORTED_MODULE_12__.ConfigContext;

__decorate([(0,_util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_13__.throttleByAnimationFrameDecorator)()], Affix.prototype, "updatePosition", null);

__decorate([(0,_util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_13__.throttleByAnimationFrameDecorator)()], Affix.prototype, "lazyUpdatePosition", null);

/* harmony default export */ __webpack_exports__["default"] = (Affix);

/***/ }),

/***/ "../../node_modules/antd/es/affix/utils.js":
/*!*************************************************!*\
  !*** ../../node_modules/antd/es/affix/utils.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTargetRect": function() { return /* binding */ getTargetRect; },
/* harmony export */   "getFixedTop": function() { return /* binding */ getFixedTop; },
/* harmony export */   "getFixedBottom": function() { return /* binding */ getFixedBottom; },
/* harmony export */   "getObserverEntities": function() { return /* binding */ getObserverEntities; },
/* harmony export */   "addObserveTarget": function() { return /* binding */ addObserveTarget; },
/* harmony export */   "removeObserveTarget": function() { return /* binding */ removeObserveTarget; }
/* harmony export */ });
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../../node_modules/rc-util/es/Dom/addEventListener.js");

function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : {
    top: 0,
    bottom: window.innerHeight
  };
}
function getFixedTop(placeholderReact, targetRect, offsetTop) {
  if (offsetTop !== undefined && targetRect.top > placeholderReact.top - offsetTop) {
    return offsetTop + targetRect.top;
  }

  return undefined;
}
function getFixedBottom(placeholderReact, targetRect, offsetBottom) {
  if (offsetBottom !== undefined && targetRect.bottom < placeholderReact.bottom + offsetBottom) {
    var targetBottomOffset = window.innerHeight - targetRect.bottom;
    return offsetBottom + targetBottomOffset;
  }

  return undefined;
} // ======================== Observer ========================

var TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var observerEntities = [];
function getObserverEntities() {
  // Only used in test env. Can be removed if refactor.
  return observerEntities;
}
function addObserveTarget(target, affix) {
  if (!target) return;
  var entity = observerEntities.find(function (item) {
    return item.target === target;
  });

  if (entity) {
    entity.affixList.push(affix);
  } else {
    entity = {
      target: target,
      affixList: [affix],
      eventHandlers: {}
    };
    observerEntities.push(entity); // Add listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      entity.eventHandlers[eventName] = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(target, eventName, function () {
        entity.affixList.forEach(function (targetAffix) {
          targetAffix.lazyUpdatePosition();
        });
      });
    });
  }
}
function removeObserveTarget(affix) {
  var observerEntity = observerEntities.find(function (oriObserverEntity) {
    var hasAffix = oriObserverEntity.affixList.some(function (item) {
      return item === affix;
    });

    if (hasAffix) {
      oriObserverEntity.affixList = oriObserverEntity.affixList.filter(function (item) {
        return item !== affix;
      });
    }

    return hasAffix;
  });

  if (observerEntity && observerEntity.affixList.length === 0) {
    observerEntities = observerEntities.filter(function (item) {
      return item !== observerEntity;
    }); // Remove listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      var handler = observerEntity.eventHandlers[eventName];

      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }
}

/***/ }),

/***/ "../../node_modules/antd/es/anchor/Anchor.js":
/*!***************************************************!*\
  !*** ../../node_modules/antd/es/anchor/Anchor.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Anchor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _affix__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../affix */ "../../node_modules/antd/es/affix/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _util_scrollTo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_util/scrollTo */ "../../node_modules/antd/es/_util/scrollTo.js");
/* harmony import */ var _util_getScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/getScroll */ "../../node_modules/antd/es/_util/getScroll.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./context */ "../../node_modules/antd/es/anchor/context.js");
















function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element.getClientRects().length) {
    return 0;
  }

  var rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }

    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

var sharpMatcherRegx = /#([\S ]+)$/;

var Anchor = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Anchor, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Anchor);

  function Anchor() {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Anchor);

    _this = _super.apply(this, arguments);
    _this.state = {
      activeLink: null
    };
    _this.wrapperRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createRef();
    _this.links = []; // Context

    _this.registerLink = function (link) {
      if (!_this.links.includes(link)) {
        _this.links.push(link);
      }
    };

    _this.unregisterLink = function (link) {
      var index = _this.links.indexOf(link);

      if (index !== -1) {
        _this.links.splice(index, 1);
      }
    };

    _this.getContainer = function () {
      var getTargetContainer = _this.context.getTargetContainer;
      var getContainer = _this.props.getContainer;
      var getFunc = getContainer || getTargetContainer || getDefaultContainer;
      return getFunc();
    };

    _this.handleScrollTo = function (link) {
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          targetOffset = _this$props.targetOffset;

      _this.setCurrentActiveLink(link);

      var container = _this.getContainer();

      var scrollTop = (0,_util_getScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(container, true);
      var sharpLinkMatch = sharpMatcherRegx.exec(link);

      if (!sharpLinkMatch) {
        return;
      }

      var targetElement = document.getElementById(sharpLinkMatch[1]);

      if (!targetElement) {
        return;
      }

      var eleOffsetTop = getOffsetTop(targetElement, container);
      var y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      _this.animating = true;
      (0,_util_scrollTo__WEBPACK_IMPORTED_MODULE_11__["default"])(y, {
        callback: function callback() {
          _this.animating = false;
        },
        getContainer: _this.getContainer
      });
    };

    _this.saveInkNode = function (node) {
      _this.inkNode = node;
    };

    _this.setCurrentActiveLink = function (link) {
      var activeLink = _this.state.activeLink;
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          getCurrentAnchor = _this$props2.getCurrentAnchor;

      if (activeLink === link) {
        return;
      } // https://github.com/ant-design/ant-design/issues/30584


      _this.setState({
        activeLink: typeof getCurrentAnchor === 'function' ? getCurrentAnchor() : link
      });

      onChange === null || onChange === void 0 ? void 0 : onChange(link);
    };

    _this.handleScroll = function () {
      if (_this.animating) {
        return;
      }

      var _this$props3 = _this.props,
          offsetTop = _this$props3.offsetTop,
          bounds = _this$props3.bounds,
          targetOffset = _this$props3.targetOffset;

      var currentActiveLink = _this.getCurrentAnchor(targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);

      _this.setCurrentActiveLink(currentActiveLink);
    };

    _this.updateInk = function () {
      var _assertThisInitialize = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          prefixCls = _assertThisInitialize.prefixCls,
          wrapperRef = _assertThisInitialize.wrapperRef;

      var anchorNode = wrapperRef.current;
      var linkNode = anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.getElementsByClassName("".concat(prefixCls, "-link-title-active"))[0];

      if (linkNode) {
        _this.inkNode.style.top = "".concat(linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5, "px");
      }
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Anchor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollContainer = this.getContainer();
      this.scrollEvent = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__["default"])(this.scrollContainer, 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.scrollEvent) {
        var currentContainer = this.getContainer();

        if (this.scrollContainer !== currentContainer) {
          this.scrollContainer = currentContainer;
          this.scrollEvent.remove();
          this.scrollEvent = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__["default"])(this.scrollContainer, 'scroll', this.handleScroll);
          this.handleScroll();
        }
      }

      this.updateInk();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: "getCurrentAnchor",
    value: function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var linkSections = [];
      var container = this.getContainer();
      this.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());

        if (!sharpLinkMatch) {
          return;
        }

        var target = document.getElementById(sharpLinkMatch[1]);

        if (target) {
          var top = getOffsetTop(target, container);

          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });

      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context = this.context,
          getPrefixCls = _this$context.getPrefixCls,
          direction = _this$context.direction;
      var _this$props4 = this.props,
          customizePrefixCls = _this$props4.prefixCls,
          _this$props4$classNam = _this$props4.className,
          className = _this$props4$classNam === void 0 ? '' : _this$props4$classNam,
          style = _this$props4.style,
          offsetTop = _this$props4.offsetTop,
          affix = _this$props4.affix,
          showInkInFixed = _this$props4.showInkInFixed,
          children = _this$props4.children;
      var activeLink = this.state.activeLink;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      this.prefixCls = prefixCls;
      var inkClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()("".concat(prefixCls, "-ink-ball"), {
        visible: activeLink
      });
      var wrapperClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()("".concat(prefixCls, "-wrapper"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      var anchorClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, {
        fixed: !affix && !showInkInFixed
      });

      var wrapperStyle = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
      }, style);

      var anchorContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        ref: this.wrapperRef,
        className: wrapperClass,
        style: wrapperStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: anchorClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "".concat(prefixCls, "-ink")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        className: inkClass,
        ref: this.saveInkNode
      })), children));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_context__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
        value: {
          registerLink: this.registerLink,
          unregisterLink: this.unregisterLink,
          activeLink: this.state.activeLink,
          scrollTo: this.handleScrollTo,
          onClick: this.props.onClick
        }
      }, !affix ? anchorContent : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_affix__WEBPACK_IMPORTED_MODULE_13__["default"], {
        offsetTop: offsetTop,
        target: this.getContainer
      }, anchorContent));
    }
  }]);

  return Anchor;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);


Anchor.defaultProps = {
  affix: true,
  showInkInFixed: false
};
Anchor.contextType = _config_provider__WEBPACK_IMPORTED_MODULE_14__.ConfigContext;

/***/ }),

/***/ "../../node_modules/antd/es/anchor/AnchorLink.js":
/*!*******************************************************!*\
  !*** ../../node_modules/antd/es/anchor/AnchorLink.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context */ "../../node_modules/antd/es/anchor/context.js");










var AnchorLink = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AnchorLink, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(AnchorLink);

  function AnchorLink() {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnchorLink);

    _this = _super.apply(this, arguments);

    _this.handleClick = function (e) {
      var _this$context = _this.context,
          scrollTo = _this$context.scrollTo,
          onClick = _this$context.onClick;
      var _this$props = _this.props,
          href = _this$props.href,
          title = _this$props.title;
      onClick === null || onClick === void 0 ? void 0 : onClick(e, {
        title: title,
        href: href
      });
      scrollTo(href);
    };

    _this.renderAnchorLink = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          href = _this$props2.href,
          title = _this$props2.title,
          children = _this$props2.children,
          className = _this$props2.className,
          target = _this$props2.target;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls);
      var active = _this.context.activeLink === href;
      var wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-link"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-link-active"), active), className);
      var titleClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-link-title"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-link-title-active"), active));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
        className: titleClassName,
        href: href,
        title: typeof title === 'string' ? title : '',
        target: target,
        onClick: _this.handleClick
      }, title), children);
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnchorLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.registerLink(this.props.href);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevHref = _ref2.href;
      var href = this.props.href;

      if (prevHref !== href) {
        this.context.unregisterLink(prevHref);
        this.context.registerLink(href);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unregisterLink(this.props.href);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_7__.ConfigConsumer, null, this.renderAnchorLink);
    }
  }]);

  return AnchorLink;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

AnchorLink.defaultProps = {
  href: '#'
};
AnchorLink.contextType = _context__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (AnchorLink);

/***/ }),

/***/ "../../node_modules/antd/es/anchor/context.js":
/*!****************************************************!*\
  !*** ../../node_modules/antd/es/anchor/context.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var AnchorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (AnchorContext);

/***/ }),

/***/ "../../node_modules/antd/es/anchor/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/antd/es/anchor/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Anchor */ "../../node_modules/antd/es/anchor/Anchor.js");
/* harmony import */ var _AnchorLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnchorLink */ "../../node_modules/antd/es/anchor/AnchorLink.js");


_Anchor__WEBPACK_IMPORTED_MODULE_0__["default"].Link = _AnchorLink__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Anchor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/antd/es/col/index.js":
/*!***********************************************!*\
  !*** ../../node_modules/antd/es/col/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "../../node_modules/antd/es/grid/col.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/antd/es/drawer/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/antd/es/drawer/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "../../node_modules/rc-drawer/es/index.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/type */ "../../node_modules/antd/es/_util/type.js");
/* harmony import */ var _util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/hooks/useForceUpdate */ "../../node_modules/antd/es/_util/hooks/useForceUpdate.js");




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var DrawerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createContext(null);
var PlacementTypes = (0,_util_type__WEBPACK_IMPORTED_MODULE_6__.tuple)('top', 'right', 'bottom', 'left');
var SizeTypes = (0,_util_type__WEBPACK_IMPORTED_MODULE_6__.tuple)('default', 'large');
var defaultPushState = {
  distance: 180
};
var Drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_a, ref) {
  var width = _a.width,
      height = _a.height,
      _a$size = _a.size,
      size = _a$size === void 0 ? 'default' : _a$size,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? true : _a$closable,
      _a$placement = _a.placement,
      placement = _a$placement === void 0 ? 'right' : _a$placement,
      _a$maskClosable = _a.maskClosable,
      maskClosable = _a$maskClosable === void 0 ? true : _a$maskClosable,
      _a$mask = _a.mask,
      mask = _a$mask === void 0 ? true : _a$mask,
      _a$level = _a.level,
      level = _a$level === void 0 ? null : _a$level,
      _a$keyboard = _a.keyboard,
      keyboard = _a$keyboard === void 0 ? true : _a$keyboard,
      _a$push = _a.push,
      _push = _a$push === void 0 ? defaultPushState : _a$push,
      _a$closeIcon = _a.closeIcon,
      closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null) : _a$closeIcon,
      bodyStyle = _a.bodyStyle,
      drawerStyle = _a.drawerStyle,
      prefixCls = _a.prefixCls,
      className = _a.className,
      direction = _a.direction,
      visible = _a.visible,
      children = _a.children,
      zIndex = _a.zIndex,
      destroyOnClose = _a.destroyOnClose,
      style = _a.style,
      title = _a.title,
      headerStyle = _a.headerStyle,
      onClose = _a.onClose,
      footer = _a.footer,
      footerStyle = _a.footerStyle,
      extra = _a.extra,
      rest = __rest(_a, ["width", "height", "size", "closable", "placement", "maskClosable", "mask", "level", "keyboard", "push", "closeIcon", "bodyStyle", "drawerStyle", "prefixCls", "className", "direction", "visible", "children", "zIndex", "destroyOnClose", "style", "title", "headerStyle", "onClose", "footer", "footerStyle", "extra"]);

  var forceUpdate = (0,_util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_8__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      internalPush = _React$useState2[0],
      setPush = _React$useState2[1];

  var parentDrawer = react__WEBPACK_IMPORTED_MODULE_3__.useContext(DrawerContext);
  var destroyClose = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    if (visible && parentDrawer) {
      parentDrawer.push();
    }

    return function () {
      if (parentDrawer) {
        parentDrawer.pull(); // parentDrawer = null;
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (parentDrawer) {
      if (visible) {
        parentDrawer.push();
      } else {
        parentDrawer.pull();
      }
    }
  }, [visible]);
  var operations = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(function () {
    return {
      push: function push() {
        if (_push) {
          setPush(true);
        }
      },
      pull: function pull() {
        if (_push) {
          setPush(false);
        }
      }
    };
  }, [_push]);
  react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle(ref, function () {
    return operations;
  }, [operations]);
  var isDestroyOnClose = destroyOnClose && !visible;

  var onDestroyTransitionEnd = function onDestroyTransitionEnd() {
    if (!isDestroyOnClose) {
      return;
    }

    if (!visible) {
      destroyClose.current = true;
      forceUpdate();
    }
  };

  var getOffsetStyle = function getOffsetStyle() {
    // https://github.com/ant-design/ant-design/issues/24287
    if (!visible && !mask) {
      return {};
    }

    var offsetStyle = {};

    if (placement === 'left' || placement === 'right') {
      var defaultWidth = size === 'large' ? 736 : 378;
      offsetStyle.width = typeof width === 'undefined' ? defaultWidth : width;
    } else {
      var defaultHeight = size === 'large' ? 736 : 378;
      offsetStyle.height = typeof height === 'undefined' ? defaultHeight : height;
    }

    return offsetStyle;
  };

  var getRcDrawerStyle = function getRcDrawerStyle() {
    // get drawer push width or height
    var getPushTransform = function getPushTransform(_placement) {
      var distance;

      if (typeof _push === 'boolean') {
        distance = _push ? defaultPushState.distance : 0;
      } else {
        distance = _push.distance;
      }

      distance = parseFloat(String(distance || 0));

      if (_placement === 'left' || _placement === 'right') {
        return "translateX(".concat(_placement === 'left' ? distance : -distance, "px)");
      }

      if (_placement === 'top' || _placement === 'bottom') {
        return "translateY(".concat(_placement === 'top' ? distance : -distance, "px)");
      }
    }; // 当无 mask 时，将 width 应用到外层容器上
    // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题


    var offsetStyle = mask ? {} : getOffsetStyle();
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      zIndex: zIndex,
      transform: internalPush ? getPushTransform(placement) : undefined
    }, offsetStyle), style);
  };

  var closeIconNode = closable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: "".concat(prefixCls, "-close")
  }, closeIcon);

  function renderHeader() {
    if (!title && !closable) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-header"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-header-close-only"), closable && !title && !extra)),
      style: headerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "".concat(prefixCls, "-header-title")
    }, closeIconNode, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title)), extra && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra));
  }

  function renderFooter() {
    if (!footer) {
      return null;
    }

    var footerClassName = "".concat(prefixCls, "-footer");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: footerClassName,
      style: footerStyle
    }, footer);
  } // render drawer body dom


  var renderBody = function renderBody() {
    if (destroyClose.current && !visible) {
      return null;
    }

    destroyClose.current = false;
    var containerStyle = {};

    if (isDestroyOnClose) {
      // Increase the opacity transition, delete children after closing.
      containerStyle.opacity = 0;
      containerStyle.transition = 'opacity .3s';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "".concat(prefixCls, "-wrapper-body"),
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, containerStyle), drawerStyle),
      onTransitionEnd: onDestroyTransitionEnd
    }, renderHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "".concat(prefixCls, "-body"),
      style: bodyStyle
    }, children), renderFooter());
  };

  var drawerClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    'no-mask': !mask
  }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var offsetStyle = mask ? getOffsetStyle() : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(DrawerContext.Provider, {
    value: operations
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    handler: false
  }, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    placement: placement,
    prefixCls: prefixCls,
    maskClosable: maskClosable,
    level: level,
    keyboard: keyboard,
    children: children,
    onClose: onClose
  }, rest), offsetStyle, {
    open: visible,
    showMask: mask,
    style: getRcDrawerStyle(),
    className: drawerClassName
  }), renderBody()));
});
Drawer.displayName = 'Drawer';
var DrawerWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  var customizePrefixCls = props.prefixCls,
      customizeGetContainer = props.getContainer;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_9__.ConfigContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var getContainer = // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Drawer, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref,
    prefixCls: prefixCls,
    getContainer: getContainer,
    direction: direction
  }));
});
DrawerWrapper.displayName = 'DrawerWrapper';
/* harmony default export */ __webpack_exports__["default"] = (DrawerWrapper);

/***/ }),

/***/ "../../node_modules/antd/es/grid/col.js":
/*!**********************************************!*\
  !*** ../../node_modules/antd/es/grid/col.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RowContext */ "../../node_modules/antd/es/grid/RowContext.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_5__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_3__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap,
      supportFlexGap = _React$useContext2.supportFlexGap;

  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    var propSize = props[size];

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(propSize) === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];
    sizeClassObj = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sizeClassObj), (_extends2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = {}; // Horizontal gutter use padding

  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  } // Vertical gutter use padding when gap not support


  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "../../node_modules/antd/es/spin/index.js":
/*!************************************************!*\
  !*** ../../node_modules/antd/es/spin/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/antd/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/omit */ "../../node_modules/rc-util/es/omit.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/debounce */ "../../node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/type */ "../../node_modules/antd/es/_util/type.js");
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_util/reactNode */ "../../node_modules/antd/es/_util/reactNode.js");







var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var SpinSizes = (0,_util_type__WEBPACK_IMPORTED_MODULE_10__.tuple)('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot"); // should not be render default indicator when indicator value is null

  if (indicator === null) {
    return null;
  }

  if ((0,_util_reactNode__WEBPACK_IMPORTED_MODULE_11__.isValidElement)(indicator)) {
    return (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_11__.cloneElement)(indicator, {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(indicator.props.className, dotClassName)
    });
  }

  if ((0,_util_reactNode__WEBPACK_IMPORTED_MODULE_11__.isValidElement)(defaultIndicator)) {
    return (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_11__.cloneElement)(defaultIndicator, {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(defaultIndicator.props.className, dotClassName)
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Spin, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(Spin);

  function Spin(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Spin);

    _this = _super.call(this, props);

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-spinning"), spinning), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-show-text"), !!tip), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()("".concat(prefixCls, "-container"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-blur"), spinning));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, divProps, {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
          key: "loading"
        }, spinElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Spin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && typeof this.props.children !== 'undefined');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_12__.ConfigConsumer, null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  return Spin;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Spin);

/***/ }),

/***/ "../../node_modules/lodash/_baseTrim.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseTrim.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "../../node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "../../node_modules/lodash/_trimmedEndIndex.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_trimmedEndIndex.js ***!
  \*****************************************************/
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "../../node_modules/lodash/debounce.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/debounce.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../../node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../../node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../../node_modules/lodash/isSymbol.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isSymbol.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "../../node_modules/lodash/now.js":
/*!****************************************!*\
  !*** ../../node_modules/lodash/now.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../../node_modules/lodash/toNumber.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/toNumber.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "../../node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../../node_modules/rc-drawer/es/DrawerChild.js":
/*!******************************************************!*\
  !*** ../../node_modules/rc-drawer/es/DrawerChild.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "../../node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/omit */ "../../node_modules/rc-util/es/omit.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "../../node_modules/rc-drawer/es/utils.js");









var _excluded = ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle"];






var currentDrawer = {};

var DrawerChild = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DrawerChild, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__["default"])(DrawerChild);

  function DrawerChild(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DrawerChild);

    _this = _super.call(this, props);
    _this.levelDom = void 0;
    _this.dom = void 0;
    _this.contentWrapper = void 0;
    _this.contentDom = void 0;
    _this.maskDom = void 0;
    _this.handlerDom = void 0;
    _this.drawerId = void 0;
    _this.timeout = void 0;
    _this.passive = void 0;
    _this.startPos = void 0;

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if ((currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getTouchParentScroll)(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      (0,_utils__WEBPACK_IMPORTED_MODULE_14__.removeEventListener)(dom, _utils__WEBPACK_IMPORTED_MODULE_14__.transitionEnd, _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_12__["default"].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router 切换时可能会导至页面失去滚动条，所以需要时时获取。

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        (0,_utils__WEBPACK_IMPORTED_MODULE_14__.addEventListener)(dom, _utils__WEBPACK_IMPORTED_MODULE_14__.transitionEnd, _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = (0,_utils__WEBPACK_IMPORTED_MODULE_14__.transformArguments)(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!_utils__WEBPACK_IMPORTED_MODULE_14__.windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? (0,rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_11__["default"])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer(); // 处理 body 滚动

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          document.body.style.touchAction = 'none'; // 手机禁滚

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            (0,_utils__WEBPACK_IMPORTED_MODULE_14__.addEventListener)(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // 恢复事件


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            (0,_utils__WEBPACK_IMPORTED_MODULE_14__.removeEventListener)(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease;

      if (_utils__WEBPACK_IMPORTED_MODULE_14__.transitionStr) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (_utils__WEBPACK_IMPORTED_MODULE_14__.windowIsUndefined) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_14__.dataToArray)(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)
    };
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!_utils__WEBPACK_IMPORTED_MODULE_14__.windowIsUndefined) {
        var passiveSupported = false;

        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
              return null;
            }
          }));
        } catch (err) {}

        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var _this$props7 = this.props,
          open = _this$props7.open,
          getContainer = _this$props7.getContainer,
          showMask = _this$props7.showMask,
          autoFocus = _this$props7.autoFocus;
      var container = getContainer && getContainer();
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = open;
        } // 默认打开状态时推出 level;


        this.openLevelTransition();
        this.forceUpdate(function () {
          if (autoFocus) {
            _this2.domFocus();
          }
        });

        if (showMask) {
          var _this$props$scrollLoc;

          (_this$props$scrollLoc = this.props.scrollLocker) === null || _this$props$scrollLoc === void 0 ? void 0 : _this$props$scrollLoc.lock();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props8 = this.props,
          open = _this$props8.open,
          getContainer = _this$props8.getContainer,
          scrollLocker = _this$props8.scrollLocker,
          showMask = _this$props8.showMask,
          autoFocus = _this$props8.autoFocus;
      var container = getContainer && getContainer();

      if (open !== prevProps.open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = !!open;
        }

        this.openLevelTransition();

        if (open) {
          if (autoFocus) {
            this.domFocus();
          }

          if (showMask) {
            scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
          }
        } else {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props9 = this.props,
          open = _this$props9.open,
          scrollLocker = _this$props9.scrollLocker;
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
    }
  }, {
    key: "render",
    value: // tslint:disable-next-line:member-ordering
    function render() {
      var _classnames,
          _this3 = this;

      var _this$props10 = this.props,
          className = _this$props10.className,
          children = _this$props10.children,
          style = _this$props10.style,
          width = _this$props10.width,
          height = _this$props10.height,
          defaultOpen = _this$props10.defaultOpen,
          $open = _this$props10.open,
          prefixCls = _this$props10.prefixCls,
          placement = _this$props10.placement,
          level = _this$props10.level,
          levelMove = _this$props10.levelMove,
          ease = _this$props10.ease,
          duration = _this$props10.duration,
          getContainer = _this$props10.getContainer,
          handler = _this$props10.handler,
          onChange = _this$props10.onChange,
          afterVisibleChange = _this$props10.afterVisibleChange,
          showMask = _this$props10.showMask,
          maskClosable = _this$props10.maskClosable,
          maskStyle = _this$props10.maskStyle,
          onClose = _this$props10.onClose,
          onHandleClick = _this$props10.onHandleClick,
          keyboard = _this$props10.keyboard,
          getOpenCount = _this$props10.getOpenCount,
          scrollLocker = _this$props10.scrollLocker,
          contentWrapperStyle = _this$props10.contentWrapperStyle,
          props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props10, _excluded); // 首次渲染都将是关闭状态。


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_10___default()(prefixCls, (_classnames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, "".concat(prefixCls, "-").concat(placement), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, "".concat(prefixCls, "-open"), open), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, className || '', !!className), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.cloneElement(handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_13__["default"])(props, ['switchScrollingEffect', 'autoFocus']), {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
          transform: transform,
          msTransform: transform,
          width: (0,_utils__WEBPACK_IMPORTED_MODULE_14__.isNumeric)(width) ? "".concat(width, "px") : width,
          height: (0,_utils__WEBPACK_IMPORTED_MODULE_14__.isNumeric)(height) ? "".concat(height, "px") : height
        }, contentWrapperStyle),
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        }
      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test 的 bug, 有动画过场，删除 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawerChild);

/***/ }),

/***/ "../../node_modules/rc-drawer/es/DrawerWrapper.js":
/*!********************************************************!*\
  !*** ../../node_modules/rc-drawer/es/DrawerWrapper.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/PortalWrapper */ "../../node_modules/rc-util/es/PortalWrapper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _DrawerChild__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DrawerChild */ "../../node_modules/rc-drawer/es/DrawerChild.js");






var _excluded = ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"],
    _excluded2 = ["visible", "afterClose"];




var DrawerWrapper = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DrawerWrapper, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(DrawerWrapper);

  function DrawerWrapper(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DrawerWrapper);

    _this = _super.call(this, props);
    _this.dom = void 0;

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var open = _this.state.open;

        _this.setState({
          open: !open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var _open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;

    _this.state = {
      open: _open
    };

    if ('onMaskClick' in props) {
      console.warn('`onMaskClick` are removed, please use `onClose` instead.');
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawerWrapper, [{
    key: "render",
    value: // tslint:disable-next-line:member-ordering
    function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props3, _excluded);

      var open = this.state.open; // 渲染在当前 dom 里；

      if (!getContainer) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_DrawerChild__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // 如果有 handler 为内置强制渲染；


      var $forceRender = !!handler || forceRender;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded2);

        return (
          /*#__PURE__*/
          // react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
          react__WEBPACK_IMPORTED_MODULE_7__.createElement(_DrawerChild__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "drawer-handle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false,
  autoFocus: true
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerWrapper);

/***/ }),

/***/ "../../node_modules/rc-drawer/es/index.js":
/*!************************************************!*\
  !*** ../../node_modules/rc-drawer/es/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawerWrapper */ "../../node_modules/rc-drawer/es/DrawerWrapper.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/rc-drawer/es/utils.js":
/*!************************************************!*\
  !*** ../../node_modules/rc-drawer/es/utils.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataToArray": function() { return /* binding */ dataToArray; },
/* harmony export */   "transitionStr": function() { return /* binding */ transitionStr; },
/* harmony export */   "transitionEnd": function() { return /* binding */ transitionEnd; },
/* harmony export */   "addEventListener": function() { return /* binding */ addEventListener; },
/* harmony export */   "removeEventListener": function() { return /* binding */ removeEventListener; },
/* harmony export */   "transformArguments": function() { return /* binding */ transformArguments; },
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; },
/* harmony export */   "windowIsUndefined": function() { return /* binding */ windowIsUndefined; },
/* harmony export */   "getTouchParentScroll": function() { return /* binding */ getTouchParentScroll; }
/* harmony export */ });
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};

/***/ }),

/***/ "../../node_modules/rc-util/es/Dom/scrollLocker.js":
/*!*********************************************************!*\
  !*** ../../node_modules/rc-util/es/Dom/scrollLocker.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollLocker; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getScrollBarSize */ "../../node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setStyle */ "../../node_modules/rc-util/es/setStyle.js");




var locks = [];
var scrollingEffectClassName = 'ant-scrolling-effect';
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
var uuid = 0; // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheStyle = new Map();

var ScrollLocker = function ScrollLocker(_options) {
  var _this = this;

  (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScrollLocker);

  this.lockTarget = void 0;
  this.options = void 0;

  this.getContainer = function () {
    var _this$options;

    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  };

  this.reLock = function (options) {
    var findLock = locks.find(function (_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });

    if (findLock) {
      _this.unLock();
    }

    _this.options = options;

    if (findLock) {
      findLock.options = options;

      _this.lock();
    }
  };

  this.lock = function () {
    var _this$options3;

    // If lockTarget exist return
    if (locks.some(function (_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    } // If same container effect, return


    if (locks.some(function (_ref3) {
      var _this$options2;

      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }

    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;

    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = (0,_getScrollBarSize__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    var containerClassName = container.className;

    if (locks.filter(function (_ref4) {
      var _this$options4;

      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      cacheStyle.set(container, (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])({
        width: scrollBarSize !== 0 ? "calc(100% - ".concat(scrollBarSize, "px)") : undefined,
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }, {
        element: container
      }));
    } // https://github.com/ant-design/ant-design/issues/19729


    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }

    locks = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  };

  this.unLock = function () {
    var _this$options5;

    var findLock = locks.find(function (_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function (_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });

    if (!findLock || locks.some(function (_ref7) {
      var _findLock$options;

      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    } // Remove Effect


    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName)) return;
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(cacheStyle.get(container), {
      element: container
    });
    cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, '').trim();
  };

  // eslint-disable-next-line no-plusplus
  this.lockTarget = uuid++;
  this.options = _options;
};



/***/ }),

/***/ "../../node_modules/rc-util/es/PortalWrapper.js":
/*!******************************************************!*\
  !*** ../../node_modules/rc-util/es/PortalWrapper.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOpenCount": function() { return /* binding */ getOpenCount; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _raf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raf */ "../../node_modules/rc-util/es/raf.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Portal */ "../../node_modules/rc-util/es/Portal.js");
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dom/canUseDom */ "../../node_modules/rc-util/es/Dom/canUseDom.js");
/* harmony import */ var _switchScrollingEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./switchScrollingEffect */ "../../node_modules/rc-util/es/switchScrollingEffect.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setStyle */ "../../node_modules/rc-util/es/setStyle.js");
/* harmony import */ var _Dom_scrollLocker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Dom/scrollLocker */ "../../node_modules/rc-util/es/Dom/scrollLocker.js");






/* eslint-disable no-underscore-dangle,react/require-default-props */







var openCount = 0;
var supportDom = (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_8__["default"])();
/** @private Test usage only */

function getOpenCount() {
  return  false ? 0 : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PortalWrapper, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.container = void 0;
    _this.componentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createRef();
    _this.rafId = void 0;
    _this.scrollLocker = void 0;
    _this.renderComponent = void 0;

    _this.updateScrollLocker = function (prevProps) {
      var _ref = prevProps || {},
          prevVisible = _ref.visible;

      var _this$props = _this.props,
          getContainer = _this$props.getContainer,
          visible = _this$props.visible;

      if (visible && visible !== prevVisible && supportDom && getParent(getContainer) !== _this.scrollLocker.getContainer()) {
        _this.scrollLocker.reLock({
          container: getParent(getContainer)
        });
      }
    };

    _this.updateOpenCount = function (prevProps) {
      var _ref2 = prevProps || {},
          prevVisible = _ref2.visible,
          prevGetContainer = _ref2.getContainer;

      var _this$props2 = _this.props,
          visible = _this$props2.visible,
          getContainer = _this$props2.getContainer; // Update count

      if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
        if (visible && !prevVisible) {
          openCount += 1;
        } else if (prevProps) {
          openCount -= 1;
        }
      } // Clean up container if needed


      var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

      if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
        _this.removeCurrentContainer();
      }
    };

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren;

      // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.
      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };

    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        (0,_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Must be set after switchScrollingEffect

        cacheOverflow = (0,_setStyle__WEBPACK_IMPORTED_MODULE_10__["default"])({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        (0,_setStyle__WEBPACK_IMPORTED_MODULE_10__["default"])(cacheOverflow);
        cacheOverflow = {};
        (0,_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_9__["default"])(true);
      }
    };

    _this.scrollLocker = new _Dom_scrollLocker__WEBPACK_IMPORTED_MODULE_11__["default"]({
      container: getParent(props.getContainer)
    });
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateOpenCount();

      if (!this.attachToParent()) {
        this.rafId = (0,_raf__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateOpenCount(prevProps);
      this.updateScrollLocker(prevProps);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          getContainer = _this$props3.getContainer;

      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      _raf__WEBPACK_IMPORTED_MODULE_6__["default"].cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          forceRender = _this$props4.forceRender,
          visible = _this$props4.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/* harmony default export */ __webpack_exports__["default"] = (PortalWrapper);

/***/ }),

/***/ "../../node_modules/rc-util/es/getScrollBarSize.js":
/*!*********************************************************!*\
  !*** ../../node_modules/rc-util/es/getScrollBarSize.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollBarSize; },
/* harmony export */   "getTargetScrollBarSize": function() { return /* binding */ getTargetScrollBarSize; }
/* harmony export */ });
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/***/ }),

/***/ "../../node_modules/rc-util/es/setStyle.js":
/*!*************************************************!*\
  !*** ../../node_modules/rc-util/es/setStyle.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!style) {
    return {};
  }

  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

/***/ }),

/***/ "../../node_modules/rc-util/es/switchScrollingEffect.js":
/*!**************************************************************!*\
  !*** ../../node_modules/rc-util/es/switchScrollingEffect.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollBarSize */ "../../node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "../../node_modules/rc-util/es/setStyle.js");



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ __webpack_exports__["default"] = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = (0,_getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (scrollBarSize) {
    cacheStyle = (0,_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});

/***/ }),

/***/ "../joy/react.js":
/*!***********************!*\
  !*** ../joy/react.js ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/index-client */ \"../joy/dist/index-client.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L3JlYWN0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLDhGQUErQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvcmVhY3QuanM/YTViNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Rpc3QvaW5kZXgtY2xpZW50XCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/react.js\n");

/***/ }),

/***/ "./src/client/pages/docs/docs.less?modules":
/*!*************************************************!*\
  !*** ./src/client/pages/docs/docs.less?modules ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../../../../../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../../../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./docs.less?modules */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./src/client/pages/docs/docs.less?modules");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function (element) {
                    // These elements should always exist. If they do not,
                    // this code should fail.
                    const anchorElement = document.querySelector("#__joy_css__DO_NOT_USE__");
                    const parentNode = anchorElement.parentNode; // Normally <head>
                    // Each style tag should be placed right before our
                    // anchor. By inserting before and not after, we do not
                    // need to track the last inserted element.
                    parentNode.insertBefore(element, anchorElement);
                };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../../../../../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../../../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./docs.less?modules */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./src/client/pages/docs/docs.less?modules",
      function () {
        content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../../../../../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../../../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./docs.less?modules */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[1]!../joy/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[4].use[3]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].oneOf[4].use[4]!./src/client/pages/docs/docs.less?modules");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***************************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!******************************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*******************************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/rc-util/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

});