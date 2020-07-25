webpackHotUpdate("static/development/pages/ifsc/[ifsc].js",{

/***/ "./pages/ifsc/[ifsc].tsx":
/*!*******************************!*\
  !*** ./pages/ifsc/[ifsc].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Services_API_Http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Services/API/Http */ "./src/Services/API/Http/index.ts");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
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
      data = _ref.data,
      _ref$similarData = _ref.similarData,
      similarData = _ref$similarData === void 0 ? [] : _ref$similarData;

  if (!data || !data[0]) {
    return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, __jsx("h1", {
      className: "my-4"
    }, __jsx("div", null, "NO DATA FOUND FOR IFSC.")));
  }

  data = data[0];
  var refData = [{
    "title": "BRANCH",
    "value": data["branch"]
  }, {
    "title": "IFSC",
    "value": data["ifsc"]
  }, {
    "title": "MICR CODE",
    "value": data["micr"]
  }, {
    "title": "CONTACT",
    "value": data["contact"]
  }, {
    "title": "ADDRESS",
    "value": data["address"]
  }, {
    "title": "STD CODE",
    "value": data["std_code"]
  }, {
    "title": "CITY",
    "value": data["city"]
  }, {
    "title": "DISTRICT",
    "value": data["district"]
  }, {
    "title": "STATE",
    "value": data["state"]
  }];
  var bankName = data["bank"];
  var SEO = {
    title: "".concat(bankName, ", ").concat(data["branch"], ", ").concat(data["city"], ", ").concat(data["state"], ", ").concat(data["ifsc"], " - IFSC Code, MICR Code and Full Address"),
    description: "".concat(bankName, ", ").concat(data["branch"], ", ").concat(data["city"], ", ").concat(data["state"], ", IFSC Code: ").concat(data["ifsc"], ", MICR Code: ").concat(data["micr"], ", Address: ").concat(data["address"], ". Find all Indian bank branches for NEFT, RTGS and ECS transactions.")
  };
  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
    containerClass: "container-fluid",
    gridSize: {
      left: 'col-md-2',
      mid: 'col-lg-7 col-md-8',
      right: 'col-lg-3 col-md-4'
    },
    leftNav: __jsx("div", {
      className: "sticky-top",
      style: {
        top: '100px'
      }
    }, __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_7__["EntityUpdate"], {
      lastUpdatedAt: data.updated_at,
      entityType: "1",
      entityId: data["CIN"],
      hideUpdateButton: true
    }))
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: SEO.title,
    description: SEO.description
  }), __jsx("h1", {
    className: "my-4"
  }, __jsx("div", null, bankName), __jsx("small", null, "IFSC - ", data["ifsc"])), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded",
    id: "basicInfo"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("tbody", null, refData.filter(function (data) {
    return data.value;
  }).map(function (data) {
    return __jsx("tr", {
      key: data.title
    }, __jsx("td", null, data.title), __jsx("th", {
      scope: "row"
    }, data.value));
  })))))), __jsx("div", {
    className: "mt-2"
  }, __jsx("small", null, "Disclaimer - \"All information provided in respect of IFSC Codes of Banks, contact numbers and other details are for information purposes only. Kitaablu, on best efforts basis, collates this information from relevant sources and endeavors to offer accurate and responsible data. Kitaablu is not responsible for any sort of discrepancies and shall not be responsible for any loss and/or damage that may arise or is incurred by use of such information. It is a mutual understanding that the visitor's usage of any such information will be at his own preference and risk.\"")), __jsx("h4", {
    id: "similarCompanies"
  }, "List of nearby banks"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, similarData.length ? __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover table-sm"
  }, __jsx("thead", null, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col"
  }, "#"), __jsx("th", {
    scope: "col"
  }, "Bank"), __jsx("th", {
    scope: "col"
  }, "Branch"))), __jsx("tbody", null, similarData.map(function (bank, index) {
    return __jsx("tr", {
      key: "director_".concat(bank.ifsc),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/ifsc/[ifsc]",
      as: "/ifsc/".concat(bank.ifsc)
    }, __jsx("a", null, bank.bank))), __jsx("td", null, bank.branch));
  })))) : __jsx("div", null, "No Nearby Bank Available"))));
};

Home.getInitialProps = function _callee(ctx) {
  var ifsc, props;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ifsc = ctx.query.ifsc;
          props = {
            data: null,
            similarData: []
          };
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_5__["Http"].Request('GET', "http://localhost:4000/api/v1/ifsc", {
            ifsc: ifsc
          }));

        case 5:
          props.data = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_5__["Http"].Request('GET', "http://localhost:4000/api/v1/ifsc", {
            city: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(props, 'data.0.city', undefined),
            bank: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(props, 'data.0.bank', undefined),
            limit: 100
          }));

        case 8:
          props.similarData = _context.sent;
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          console.log("Error while fetching data for ifsc: ", ifsc, _context.t0);

        case 14:
          return _context.abrupt("return", props);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]], Promise);
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=[ifsc].js.fe3b81f5ac5707ff7dae.hot-update.js.map