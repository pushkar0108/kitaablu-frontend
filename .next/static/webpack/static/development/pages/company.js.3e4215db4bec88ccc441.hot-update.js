webpackHotUpdate("static/development/pages/company.js",{

/***/ "./pages/company/index.tsx":
/*!*********************************!*\
  !*** ./pages/company/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-typeahead */ "./node_modules/react-bootstrap-typeahead/es/index.js");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Services/API/Http */ "./src/Services/API/Http/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// #region Global Imports


 // #endregion Global Imports
// #region Local Imports




var SEARCH_URI = 'http://localhost:4000/api/v1/search/';

var Home = function Home(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n,
      _ref$bannerDetails = _ref.bannerDetails,
      bannerDetails = _ref$bannerDetails === void 0 ? {
    counts: {
      1: 'NA',
      7: 'NA',
      30: 'NA'
    }
  } : _ref$bannerDetails,
      companies = _ref.companies;

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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__["Http"].Request('GET', "".concat(SEARCH_URI + query), {}));

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

  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, __jsx(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__["AsyncTypeahead"], {
    id: "async-example",
    isLoading: isLoading,
    labelKey: "login",
    minLength: 3,
    onSearch: handleSearch,
    options: options,
    placeholder: "Search for a Company..",
    renderMenuItemChildren: function renderMenuItemChildren(option, props) {
      debugger;
      console.log("option: ", option);
      return __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/company/[cin]",
        as: "/company/".concat(option.CIN)
      }, __jsx("a", null, option.name)));
    }
  }), __jsx("h1", {
    className: "my-4"
  }, __jsx("small", null, "Number of Companies registered in last")), __jsx("div", {
    className: "card my-4"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-4"
  }, __jsx("ul", {
    className: "list-unstyled mb-0"
  }, __jsx("li", null, __jsx("h2", null, __jsx("small", null, "1 Day - "), bannerDetails.counts['1'])))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("ul", {
    className: "list-unstyled mb-0"
  }, __jsx("li", null, __jsx("h2", null, __jsx("small", null, "7 Days - "), bannerDetails.counts['7'])))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("ul", {
    className: "list-unstyled mb-0"
  }, __jsx("li", null, __jsx("h2", null, __jsx("small", null, "30 Days - "), bannerDetails.counts['30']))))))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("h3", {
    className: "card-header"
  }, "List of companies registered in last 24 hours"), __jsx("div", {
    className: "card-body"
  }, companies.length ? __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("thead", null, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col"
  }, "#"), __jsx("th", {
    scope: "col"
  }, "CIN/FCRN"), __jsx("th", {
    scope: "col"
  }, "Company Name"))), __jsx("tbody", null, companies.map(function (company, index) {
    return __jsx("tr", {
      key: "director_".concat(company.CIN),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/company/[cin]",
      as: "/company/".concat(company.CIN)
    }, __jsx("a", null, company.CIN))), __jsx("td", null, company.company_name));
  })))) : __jsx("div", null, "No Company registered"))));
};

Home.getInitialProps = function _callee(ctx) {
  var query, _query$doiDayDiff, doiDayDiff, response;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          query = ctx.query;
          _query$doiDayDiff = query.doiDayDiff, doiDayDiff = _query$doiDayDiff === void 0 ? 1 : _query$doiDayDiff;
          response = {
            bannerDetails: undefined,
            companies: []
          };
          _context2.prev = 3;
          _context2.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__["Http"].Request('GET', "https://kitaablu.com/api/v1/company/banner"));

        case 6:
          response.bannerDetails = _context2.sent;
          _context2.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__["Http"].Request('GET', "https://kitaablu.com/api/v1/company", {
            doiDayDiff: doiDayDiff,
            limit: 100
          }));

        case 9:
          response.companies = _context2.sent;
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          console.log("Error while fetching props: ", _context2.t0);

        case 15:
          return _context2.abrupt("return", response);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 12]], Promise);
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=company.js.3e4215db4bec88ccc441.hot-update.js.map