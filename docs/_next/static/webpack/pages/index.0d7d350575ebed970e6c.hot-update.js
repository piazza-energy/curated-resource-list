webpackHotUpdate_N_E("pages/index",{

/***/ "./components/search-engine.js":
/*!*************************************!*\
  !*** ./components/search-engine.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce */ \"./components/debounce.js\");\n/* harmony import */ var _nav_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-link */ \"./components/nav-link.js\");\n/* harmony import */ var _bookmark_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookmark-link */ \"./components/bookmark-link.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _search_engine_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-engine.module.css */ \"./components/search-engine.module.css\");\n/* harmony import */ var _search_engine_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_search_engine_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tom/Projects/piazza.energy/curated-resource-list/components/search-engine.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar minQLenght = 3;\n\nvar SearchEngine = function SearchEngine(_ref) {\n  _s();\n\n  var bookmarks = _ref.bookmarks;\n\n  // State and setter for search term\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      query = _useState[0],\n      setQuery = _useState[1]; // State and setter for search results\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      results = _useState2[0],\n      setResults = _useState2[1]; // State for search status (whether there is a pending API request)\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isSearching = _useState3[0],\n      setIsSearching = _useState3[1]; // Now we call our hook, passing in the current query value.\n  // The hook will only return the latest value (what we passed in) ...\n  // ... if it's been more than 500ms since it was last called.\n  // Otherwise, it will return the previous value of query.\n  // The goal is to only have the API call fire when user stops typing ...\n  // ... so that we aren't hitting our API rapidly.\n\n\n  var debouncedQuery = Object(_debounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query, 500); // Here's where the API call happens\n  // We use useEffect since this is an asynchronous action\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Make sure we have a value (user has entered something in input)\n    if (debouncedQuery) {\n      // Set isSearching state\n      setIsSearching(true); // Fire off our API call\n\n      searchCharacters(debouncedQuery, bookmarks).then(function (results) {\n        // Set back to false since request finished\n        setIsSearching(false); // Set results state\n\n        setResults(results);\n      });\n    } else {\n      setResults([]);\n    }\n  }, // This is the useEffect input array\n  // Our useEffect function will only execute if this value changes ...\n  // ... and thanks to our hook it will only change if the original ...\n  // value (query) hasn't changed for more than 500ms.\n  [debouncedQuery]);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    className: classnames_bind__WEBPACK_IMPORTED_MODULE_5___default()(_search_engine_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper, \"pure-form\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"pure-u-1 pure-u-md-4-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Search\",\n    className: \"pure-input-1\",\n    value: query,\n    onChange: function onChange(e) {\n      return setQuery(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"pure-u-1 pure-u-md-1-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: classnames_bind__WEBPACK_IMPORTED_MODULE_5___default()(\"pure-input-1\", \"pure-button\"),\n    onClick: function onClick(e) {\n      return setQuery('');\n    },\n    disabled: query.length < minQLenght,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, \"Clear Search\"))), isSearching && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 23\n    }\n  }, \"Searching ...\"), results);\n};\n\n_s(SearchEngine, \"Mt6l5MzEfChRNiwOqaiF8Olg40I=\", false, function () {\n  return [_debounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = SearchEngine;\n\nfunction searchCharacters(query, bookmarks) {\n  var _this2 = this;\n\n  var calc_weight = function calc_weight(q, res) {\n    return 1;\n  };\n\n  return new Promise(function (resolve, reject) {\n    var output;\n\n    if (query.length >= minQLenght) {\n      var results = [];\n      var re = new RegExp('\\\\b' + query + '.*?\\\\b', 'gi'); // oooh, 3 nested for loops, not nice but will do\n\n      for (var cat in bookmarks) {\n        var _iterator = _createForOfIteratorHelper(bookmarks[cat]),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var bookmark = _step.value;\n            var match_title = bookmark['title'].match(re);\n            var match_descr = bookmark['description'].match(re);\n            var weight = 0,\n                found = false;\n\n            if (match_title) {\n              weight += 10 * calc_weight(query, match_title);\n              found = true;\n            }\n\n            if (match_descr) {\n              weight += calc_weight(query, match_descr);\n              found = true;\n            }\n\n            if (found) {\n              results.push(Object.assign({\n                cat: cat,\n                weight: weight\n              }, bookmark));\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n\n      output = __jsx(\"div\", {\n        __self: _this2,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 16\n        }\n      }, __jsx(\"p\", {\n        __self: _this2,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 9\n        }\n      }, \"Your search for \", query, \" produced \", results.length, \" results\"), results.sort(function (a, b) {\n        return a.weight >= b.weight;\n      }).map(function (bookmark, index) {\n        return __jsx(\"div\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 80\n          }\n        }, \"In \", __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_3__[\"CategoryLink\"], {\n          name: bookmark.cat,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 14\n          }\n        }), __jsx(_bookmark_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, bookmark, {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 11\n          }\n        })));\n      }));\n    } else {\n      output = __jsx(\"p\", {\n        __self: _this2,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 16\n        }\n      }, \"Type at least \", minQLenght, \" letters to trigger a search\");\n    }\n\n    resolve(output);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchEngine);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchEngine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2gtZW5naW5lLmpzPzM1ZjgiXSwibmFtZXMiOlsibWluUUxlbmdodCIsIlNlYXJjaEVuZ2luZSIsImJvb2ttYXJrcyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaXNTZWFyY2hpbmciLCJzZXRJc1NlYXJjaGluZyIsImRlYm91bmNlZFF1ZXJ5IiwidXNlRGVib3VuY2UiLCJ1c2VFZmZlY3QiLCJzZWFyY2hDaGFyYWN0ZXJzIiwidGhlbiIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJ3cmFwcGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiY2FsY193ZWlnaHQiLCJxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvdXRwdXQiLCJyZSIsIlJlZ0V4cCIsImNhdCIsImJvb2ttYXJrIiwibWF0Y2hfdGl0bGUiLCJtYXRjaCIsIm1hdGNoX2Rlc2NyIiwid2VpZ2h0IiwiZm91bmQiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwic29ydCIsImEiLCJiIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FBbkI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUV0QztBQUZzQyxrQkFHWkMsc0RBQVEsQ0FBQyxFQUFELENBSEk7QUFBQSxNQUcvQkMsS0FIK0I7QUFBQSxNQUd4QkMsUUFId0IsaUJBSXRDOzs7QUFKc0MsbUJBS1JGLHNEQUFRLENBQUMsRUFBRCxDQUxBO0FBQUEsTUFLL0JHLE9BTCtCO0FBQUEsTUFLdEJDLFVBTHNCLGtCQU10Qzs7O0FBTnNDLG1CQU9BSixzREFBUSxDQUFD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QXhCO0FBQUEsT0FBYixFQUE2Q1EsR0FBN0MsQ0FBaUQsVUFBQ1osUUFBRCxFQUFXYSxLQUFYO0FBQUEsZUFBcUI7QUFBSyxhQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDbEUsTUFBQyxzREFBRDtBQUFjLGNBQUksRUFBRWIsUUFBUSxDQUFDRCxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRGtFLEVBRXJFLE1BQUMsc0RBQUQseUZBQWtCQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRnFFLENBQXJCO0FBQUEsT0FBakQsQ0FGTSxDQUFUO0FBT0QsS0E3QkQsTUE2Qk87QUFDTEosWUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQWtCNUIsVUFBbEIsaUNBQVQ7QUFDRDs7QUFDRDBCLFdBQU8sQ0FBQ0UsTUFBRCxDQUFQO0FBQ0QsR0FuQ00sQ0FBUDtBQW9DRDs7QUFFYzNCLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZWFyY2gtZW5naW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi9kZWJvdW5jZSc7XG5cbmltcG9ydCB7IENhdGVnb3J5TGluayB9IGZyb20gJy4vbmF2LWxpbmsnO1xuaW1wb3J0IEJvb2ttYXJrTGluayBmcm9tICcuL2Jvb2ttYXJrLWxpbmsnO1xuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaC1lbmdpbmUubW9kdWxlLmNzcydcblxuY29uc3QgbWluUUxlbmdodCA9IDM7XG5cbmNvbnN0IFNlYXJjaEVuZ2luZSA9ICh7IGJvb2ttYXJrcyB9KSA9PiB7XG5cbiAgLy8gU3RhdGUgYW5kIHNldHRlciBmb3Igc2VhcmNoIHRlcm1cbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIC8vIFN0YXRlIGFuZCBzZXR0ZXIgZm9yIHNlYXJjaCByZXN1bHRzXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gU3RhdGUgZm9yIHNlYXJjaCBzdGF0dXMgKHdoZXRoZXIgdGhlcmUgaXMgYSBwZW5kaW5nIEFQSSByZXF1ZXN0KVxuICBjb25zdCBbaXNTZWFyY2hpbmcsIHNldElzU2VhcmNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBOb3cgd2UgY2FsbCBvdXIgaG9vaywgcGFzc2luZyBpbiB0aGUgY3VycmVudCBxdWVyeSB2YWx1ZS5cbiAgLy8gVGhlIGhvb2sgd2lsbCBvbmx5IHJldHVybiB0aGUgbGF0ZXN0IHZhbHVlICh3aGF0IHdlIHBhc3NlZCBpbikgLi4uXG4gIC8vIC4uLiBpZiBpdCdzIGJlZW4gbW9yZSB0aGFuIDUwMG1zIHNpbmNlIGl0IHdhcyBsYXN0IGNhbGxlZC5cbiAgLy8gT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgcHJldmlvdXMgdmFsdWUgb2YgcXVlcnkuXG4gIC8vIFRoZSBnb2FsIGlzIHRvIG9ubHkgaGF2ZSB0aGUgQVBJIGNhbGwgZmlyZSB3aGVuIHVzZXIgc3RvcHMgdHlwaW5nIC4uLlxuICAvLyAuLi4gc28gdGhhdCB3ZSBhcmVuJ3QgaGl0dGluZyBvdXIgQVBJIHJhcGlkbHkuXG4gIGNvbnN0IGRlYm91bmNlZFF1ZXJ5ID0gdXNlRGVib3VuY2UocXVlcnksIDUwMCk7XG5cbiAgLy8gSGVyZSdzIHdoZXJlIHRoZSBBUEkgY2FsbCBoYXBwZW5zXG4gIC8vIFdlIHVzZSB1c2VFZmZlY3Qgc2luY2UgdGhpcyBpcyBhbiBhc3luY2hyb25vdXMgYWN0aW9uXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbHVlICh1c2VyIGhhcyBlbnRlcmVkIHNvbWV0aGluZyBpbiBpbnB1dClcbiAgICAgIGlmIChkZWJvdW5jZWRRdWVyeSkge1xuICAgICAgICAvLyBTZXQgaXNTZWFyY2hpbmcgc3RhdGVcbiAgICAgICAgc2V0SXNTZWFyY2hpbmcodHJ1ZSk7XG4gICAgICAgIC8vIEZpcmUgb2ZmIG91ciBBUEkgY2FsbFxuICAgICAgICBzZWFyY2hDaGFyYWN0ZXJzKGRlYm91bmNlZFF1ZXJ5LCBib29rbWFya3MpLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgLy8gU2V0IGJhY2sgdG8gZmFsc2Ugc2luY2UgcmVxdWVzdCBmaW5pc2hlZFxuICAgICAgICAgIHNldElzU2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgICAgICAvLyBTZXQgcmVzdWx0cyBzdGF0ZVxuICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0cyhbXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBUaGlzIGlzIHRoZSB1c2VFZmZlY3QgaW5wdXQgYXJyYXlcbiAgICAvLyBPdXIgdXNlRWZmZWN0IGZ1bmN0aW9uIHdpbGwgb25seSBleGVjdXRlIGlmIHRoaXMgdmFsdWUgY2hhbmdlcyAuLi5cbiAgICAvLyAuLi4gYW5kIHRoYW5rcyB0byBvdXIgaG9vayBpdCB3aWxsIG9ubHkgY2hhbmdlIGlmIHRoZSBvcmlnaW5hbCAuLi5cbiAgICAvLyB2YWx1ZSAocXVlcnkpIGhhc24ndCBjaGFuZ2VkIGZvciBtb3JlIHRoYW4gNTAwbXMuXG4gICAgW2RlYm91bmNlZFF1ZXJ5XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMud3JhcHBlciwgXCJwdXJlLWZvcm1cIil9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC00LTVcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTVcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInB1cmUtaW5wdXQtMVwiLCBcInB1cmUtYnV0dG9uXCIpfSBvbkNsaWNrPXtlID0+IHNldFF1ZXJ5KCcnKX0gZGlzYWJsZWQ9e3F1ZXJ5Lmxlbmd0aCA8IG1pblFMZW5naHR9PlxuICAgICAgICAgICAgQ2xlYXIgU2VhcmNoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAge2lzU2VhcmNoaW5nICYmIDxkaXY+U2VhcmNoaW5nIC4uLjwvZGl2Pn1cbiAgICAgIHtyZXN1bHRzfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDaGFyYWN0ZXJzKHF1ZXJ5LCBib29rbWFya3MpIHtcbiAgY29uc3QgY2FsY193ZWlnaHQgPSBmdW5jdGlvbihxLCByZXMpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+PSBtaW5RTGVuZ2h0KSB7XG4gICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgcXVlcnkgKyAnLio/XFxcXGInLCAnZ2knKTtcbiAgICAgIC8vIG9vb2gsIDMgbmVzdGVkIGZvciBsb29wcywgbm90IG5pY2UgYnV0IHdpbGwgZG9cbiAgICAgIGZvciAoY29uc3QgY2F0IGluIGJvb2ttYXJrcykge1xuICAgICAgICBmb3IgKGNvbnN0IGJvb2ttYXJrIG9mIGJvb2ttYXJrc1tjYXRdKSB7XG4gICAgICAgICAgbGV0IG1hdGNoX3RpdGxlID0gYm9va21hcmtbJ3RpdGxlJ10ubWF0Y2gocmUpO1xuICAgICAgICAgIGxldCBtYXRjaF9kZXNjciA9IGJvb2ttYXJrWydkZXNjcmlwdGlvbiddLm1hdGNoKHJlKTtcbiAgICAgICAgICBsZXQgd2VpZ2h0ID0gMCwgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAobWF0Y2hfdGl0bGUpIHtcbiAgICAgICAgICAgIHdlaWdodCArPSAxMCAqIGNhbGNfd2VpZ2h0KHF1ZXJ5LCBtYXRjaF90aXRsZSk7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXRjaF9kZXNjcikge1xuICAgICAgICAgICAgd2VpZ2h0ICs9IGNhbGNfd2VpZ2h0KHF1ZXJ5LCBtYXRjaF9kZXNjcik7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKE9iamVjdC5hc3NpZ24oe2NhdCwgd2VpZ2h0fSwgYm9va21hcmspKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb3V0cHV0ID0gPGRpdj5cbiAgICAgICAgPHA+WW91ciBzZWFyY2ggZm9yIHtxdWVyeX0gcHJvZHVjZWQge3Jlc3VsdHMubGVuZ3RofSByZXN1bHRzPC9wPlxuICAgICAgICB7cmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLndlaWdodCA+PSBiLndlaWdodCkubWFwKChib29rbWFyaywgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgSW4gPENhdGVnb3J5TGluayBuYW1lPXtib29rbWFyay5jYXR9IC8+XG4gICAgICAgICAgPEJvb2ttYXJrTGluayB7Li4uYm9va21hcmt9IC8+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8L2Rpdj5cbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gPHA+VHlwZSBhdCBsZWFzdCB7bWluUUxlbmdodH0gbGV0dGVycyB0byB0cmlnZ2VyIGEgc2VhcmNoPC9wPlxuICAgIH1cbiAgICByZXNvbHZlKG91dHB1dCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hFbmdpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/search-engine.js\n");

/***/ })

})