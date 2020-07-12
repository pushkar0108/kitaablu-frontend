webpackHotUpdate("static/development/pages/director/[din].js",{

/***/ "./pages/director/[din].tsx":
/*!**********************************!*\
  !*** ./pages/director/[din].tsx ***!
  \**********************************/
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
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Services_API_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Services/API/Http */ "./src/Services/API/Http/index.ts");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// #region Global Imports



 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home = function Home(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n,
      dinData = _ref.dinData;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    /* tslint:disable-next-line */
    $(function () {
      /* tslint:disable-next-line */
      $('[data-toggle="tooltip"]').tooltip();
    });
  });
  var refData = [{
    title: "DIN",
    value: dinData["DIN"]
  }, {
    title: "Name",
    value: dinData["name"]
  }, {
    title: "Date of birth",
    value: '*********',
    tooltip: true
  }, {
    title: "Father Name",
    value: '*********',
    tooltip: true
  }, {
    title: "Mobile",
    value: '*********',
    tooltip: true
  }, {
    title: "Phone",
    value: '*********',
    tooltip: true
  }, {
    title: "Email",
    value: '*********',
    tooltip: true
  }, {
    title: "Address",
    value: '*********',
    tooltip: true
  }, {
    title: "City",
    value: dinData["city"]
  }, {
    title: "Gender",
    value: dinData["gender"]
  }];
  var directorName = dinData["name"];
  var SEO = {
    title: "".concat(dinData["name"], ", ").concat(dinData["DIN"], " - Company, charges, directors, CIN, DIN and contact details _ Kitaablu"),
    description: "Company information, business information, directors/partners details and director/partners contact information of ".concat(directorName, ", ").concat(dinData["DIN"])
  };
  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
    containerClass: "container-fluid",
    gridSize: {
      left: 'col-md-2',
      mid: 'col-lg-7 col-md-8',
      right: 'col-lg-3 col-md-4'
    },
    leftNav: __jsx("div", {
      id: "list-example",
      className: "list-group sticky-top",
      style: {
        top: '100px'
      }
    }, __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#basicInfo"
    }, "Basic Information"), __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#companyList"
    }, "List Of Companies"), __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#llpList"
    }, "List Of LLPs"))
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: SEO.title,
    description: SEO.description
  }), __jsx("h1", {
    className: "my-4"
  }, __jsx("small", null, dinData["DIN"]), __jsx("div", null, directorName)), __jsx("h4", {
    id: "basicInfo"
  }, "Basic Information"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("tbody", null, refData.map(function (data) {
    return __jsx("tr", {
      key: data.title
    }, __jsx("th", {
      scope: "row"
    }, data.title), __jsx("td", null, data.tooltip ? __jsx("button", {
      type: "button",
      className: "btn btn-secondary btn-sm",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Contact us at kitaablueterprise@gmail.com"
    }, data.value) : data.value));
  })))))), __jsx("h4", {
    id: "companyList"
  }, "List Of Companies"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, dinData.companies.length ? __jsx("div", {
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
  }, "Company Name"), __jsx("th", {
    scope: "col"
  }, "Begin date"), __jsx("th", {
    scope: "col"
  }, "End date"), __jsx("th", {
    scope: "col"
  }, "Active compliance"))), __jsx("tbody", null, dinData.companies.map(function (company, index) {
    return __jsx("tr", {
      key: "director_".concat(company.CIN),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/company/[cin]",
      as: "/company/".concat(company.CIN)
    }, __jsx("a", null, company.CIN))), __jsx("td", null, company.name), __jsx("td", null, company.beginDate), __jsx("td", null, company.endDate), __jsx("td", null, company.status));
  })))) : __jsx("div", null, "No Companies mapped ".concat(dinData["name"])))), __jsx("h4", {
    id: "llpList"
  }, "List Of LLP"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, dinData.llps.length ? __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("thead", {
    className: "bg-light"
  }, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "#"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "LLPIN/FLLPIN"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "LLP Name"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Begin date"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "End date"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Status"))), __jsx("tbody", null, dinData.llps.map(function (llp, index) {
    return __jsx("tr", {
      key: "charge_".concat(llp.CIN),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/company/[cin]",
      as: "/company/".concat(llp.CIN)
    }, __jsx("a", null, llp.CIN))), __jsx("td", null, llp.name), __jsx("td", null, llp.beginDate), __jsx("td", null, llp.endDate), __jsx("td", null, llp.status));
  })))) : __jsx("div", null, "No LLPs mapped to ".concat(dinData["name"])))));
};

Home.getInitialProps = function _callee(ctx) {
  var din, dinData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          din = ctx.query.din;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_4__["Http"].Request('GET', "https://kitaablu.com/api/v1/director/".concat(din)));

        case 3:
          dinData = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ctx.store.dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["HomeActions"].GetApod({
            params: {
              hd: true
            }
          })));

        case 6:
          return _context.abrupt("return", {
            namespacesRequired: ["common"],
            dinData: dinData
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=[din].js.89ba21d2e27962d3a176.hot-update.js.map