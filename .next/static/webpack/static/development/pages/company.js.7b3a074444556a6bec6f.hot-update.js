webpackHotUpdate("static/development/pages/company.js",{

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-redux/es/components/Context.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/batch.js":
false,

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

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
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Services_API_Http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Services/API/Http */ "./src/Services/API/Http/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];
// #region Global Imports


// #endregion Global Imports
// #region Local Imports




var Home = function Home(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n,
      bannerDetails = _ref.bannerDetails,
      companies = _ref.companies;
  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_4__["Layout"], null, __jsx("h1", {
    className: "my-4"
  }, __jsx("small", null, "Number of Companies registered in last")), __jsx("h2", null, "1 Day - ", bannerDetails.counts['1']), __jsx("h2", null, "7 Days - ", bannerDetails.counts['7']), __jsx("h2", null, "30 Days - ", bannerDetails.counts['30']), __jsx("div", {
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
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          response = {
            bannerDetails: null,
            companies: []
          };
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_5__["Http"].Request('GET', "https://kitaablu.com/api/v1/company/banner"));

        case 4:
          response.bannerDetails = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_5__["Http"].Request('GET', "https://kitaablu.com/api/v1/company?doiDayDiff=1"));

        case 7:
          response.companies = _context.sent;
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.log("Error while fetching props: ", _context.t0);

        case 13:
          return _context.abrupt("return", response);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]], Promise);
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=company.js.7b3a074444556a6bec6f.hot-update.js.map