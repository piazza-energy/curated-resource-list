webpackHotUpdate("static/development/pages/category/[name].js",{

/***/ "./components/bookmark-link.js":
/*!*************************************!*\
  !*** ./components/bookmark-link.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-link */ "./components/nav-link.js");
/* harmony import */ var _bookmark_link_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmark-link.module.css */ "./components/bookmark-link.module.css");
/* harmony import */ var _bookmark_link_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bookmark_link_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/tom/Projects/piazza.energy/curated-resource-list/components/bookmark-link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BookmarkLink = function BookmarkLink(_ref) {
  var url = _ref.url,
      title = _ref.title,
      description = _ref.description,
      tags = _ref.tags;
  var regex = /\[(.*?)\]\((.*?)\)/g;
  var htmlDesc = description.replace(regex, '<a href="$1">$2</a>');
  return __jsx("div", {
    className: "pure-u-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _bookmark_link_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, title)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, tags.map(function (tag, i) {
    return __jsx("span", {
      key: "tag_".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 33
      }
    }, __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_1__["TagLink"], {
      name: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BookmarkLink);

/***/ })

})
//# sourceMappingURL=[name].js.ce94fc1e5a132cb26530.hot-update.js.map