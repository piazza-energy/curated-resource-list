webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-link */ "./components/nav-link.js");
/* harmony import */ var _components_search_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search-engine */ "./components/search-engine.js");
var _this = undefined,
    _jsxFileName = "/Users/tom/Projects/piazza.energy/curated-resource-list/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Page = function Page(_ref) {
  var categories = _ref.categories,
      bookmarks = _ref.bookmarks,
      tags = _ref.tags;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "pure-u-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Energy Piazza - Curated Resources List"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "This is a list of categorised resources for the sustainable energy sector.")), __jsx("div", {
    className: "pure-u-1 pure-u-lg-1-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Categories:"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, categories.map(function (cat, i) {
    return __jsx("li", {
      key: "cat_".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 37
      }
    }, __jsx(_components_nav_link__WEBPACK_IMPORTED_MODULE_2__["CategoryLink"], {
      name: cat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }));
  }))), __jsx("div", {
    className: "pure-u-1 pure-u-lg-1-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Tags"), Object.keys(tags).map(function (tag, i) {
    return __jsx("span", {
      key: "tag_".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 42
      }
    }, __jsx(_components_nav_link__WEBPACK_IMPORTED_MODULE_2__["TagLink"], {
      name: tag,
      count: tags[tag].length,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }));
  })), __jsx("div", {
    className: "pure-u-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_search_engine__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bookmarks: bookmarks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  })));
};

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.7ef25071ac49f63c6a49.hot-update.js.map