webpackHotUpdate("static/development/pages/director/[din].js",{

/***/ "./src/Components/AsyncTypeahead/index.tsx":
/*!*************************************************!*\
  !*** ./src/Components/AsyncTypeahead/index.tsx ***!
  \*************************************************/
/*! exports provided: AsyncTypeahead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncTypeahead", function() { return CustomAsyncTypeahead; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-typeahead */ "./node_modules/react-bootstrap-typeahead/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Services_API_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/API/Http */ "./src/Services/API/Http/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var SEARCH_URI = 'https://kitaablu.com/api/v1/search/';

var CustomAsyncTypeahead = function CustomAsyncTypeahead(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var handleSearch = function handleSearch(query) {
    var _options;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSearch$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Services_API_Http__WEBPACK_IMPORTED_MODULE_4__["Http"].Request('GET', "".concat(SEARCH_URI + query), {
              type: props.type
            }));

          case 4:
            _options = _context.sent;
            setOptions(_options);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("Error while fetching props: ", _context.t0);

          case 11:
            setIsLoading(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]], Promise);
  };

  var changeRoute = function changeRoute(options) {
    if (options && options[0]) {
      if (props.type == 'director') {
        router.push("/director/".concat(options[0].value));
      } else {
        router.push("/company/".concat(options[0].value));
      }
    }
  };

  return __jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_2__["AsyncTypeahead"], {
    id: "async-example",
    isLoading: isLoading,
    labelKey: function labelKey(option) {
      return "".concat(option.name, " | ").concat(option.value);
    },
    minLength: 3,
    onSearch: handleSearch,
    options: options,
    placeholder: props.placeholder,
    renderMenuItemChildren: function renderMenuItemChildren(option, props) {
      return __jsx("div", null, "".concat(option.name));
    },
    onChange: changeRoute,
    size: "small"
  });
};



/***/ })

})
//# sourceMappingURL=[din].js.7f6bfc58a7b62fafa98a.hot-update.js.map