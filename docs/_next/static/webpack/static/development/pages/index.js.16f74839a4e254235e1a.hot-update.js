webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/search-engine.js":
/*!*************************************!*\
  !*** ./components/search-engine.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "./components/debounce.js");
/* harmony import */ var _category_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-link */ "./components/category-link.js");
/* harmony import */ var _bookmark_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmark-link */ "./components/bookmark-link.js");
var _this = undefined,
    _jsxFileName = "/Users/tom/Projects/piazza.energy/curated-resource-list/components/search-engine.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var SearchEngine = function SearchEngine(_ref) {
  var bookmarks = _ref.bookmarks;

  // State and setter for search term
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1]; // State and setter for search results


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      results = _useState2[0],
      setResults = _useState2[1]; // State for search status (whether there is a pending API request)


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSearching = _useState3[0],
      setIsSearching = _useState3[1]; // Now we call our hook, passing in the current query value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  // Otherwise, it will return the previous value of query.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.


  var debouncedQuery = Object(_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(query, 500); // Here's where the API call happens
  // We use useEffect since this is an asynchronous action

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Make sure we have a value (user has entered something in input)
    if (debouncedQuery) {
      // Set isSearching state
      setIsSearching(true); // Fire off our API call

      searchCharacters(debouncedQuery, bookmarks).then(function (results) {
        // Set back to false since request finished
        setIsSearching(false); // Set results state

        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, // This is the useEffect input array
  // Our useEffect function will only execute if this value changes ...
  // ... and thanks to our hook it will only change if the original ...
  // value (query) hasn't changed for more than 500ms.
  [debouncedQuery]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "pure-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), isSearching && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, "Searching ..."), results);
};

function searchCharacters(query, bookmarks) {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    var output;

    if (query.length > 2) {
      var results = {};
      var count = 0;
      var re = new RegExp(query, 'gi'); // oooh, 3 nested for loops, not nice but will do

      for (var cat in bookmarks) {
        results[cat] = [];

        var _iterator = _createForOfIteratorHelper(bookmarks[cat]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var bookmark = _step.value;

            for (var _i = 0, _arr = ['title', 'url', 'description']; _i < _arr.length; _i++) {
              var field = _arr[_i];

              if (bookmark[field].match(re)) {
                results[cat].push(bookmark);
                count++;
                break;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      output = __jsx("div", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 16
        }
      }, __jsx("p", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, "Your search for ", query, " produced ", count, " results"), Object.keys(results).map(function (cat) {
        return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 42
          }
        }, __jsx("h2", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, cat));
      }));
    } else {
      output = __jsx("p", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 16
        }
      }, "Type at least 3 letters to trigger a search");
    }

    resolve(output);
  });
} // {Object.keys(results).map((cat, iCat) => {
//   <div>
//     <h2>{results[cat].length} results in <CategoryLink name={cat} /></h2>
//     {results[cat].map((bookmark, iBookmark) => <BookmarkLink key={`${iCat}_${iBookmark}`} {...bookmark} />)}
//   </div>
// })}


/* harmony default export */ __webpack_exports__["default"] = (SearchEngine);

/***/ })

})
//# sourceMappingURL=index.js.16f74839a4e254235e1a.hot-update.js.map