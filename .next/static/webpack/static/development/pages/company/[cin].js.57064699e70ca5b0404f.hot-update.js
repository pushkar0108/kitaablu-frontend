webpackHotUpdate("static/development/pages/company/[cin].js",{

/***/ "./pages/company/[cin].tsx":
/*!*********************************!*\
  !*** ./pages/company/[cin].tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Services/API/Http */ "./src/Services/API/Http/index.ts");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];
// #region Global Imports





 // #endregion Global Imports
// #region Local Imports


 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home = function Home(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n,
      cinData = _ref.cinData,
      _ref$similarCompanies = _ref.similarCompanies,
      similarCompanies = _ref$similarCompanies === void 0 ? [] : _ref$similarCompanies;

  if (!cinData) {
    return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx("h1", {
      className: "my-4"
    }, __jsx("div", null, "NO DATA FOUND FOR CIN.")), __jsx("div", null, "We will try to update the dataset with the given CIN"), __jsx("div", null, "Please try again later after sometime"));
  }

  var details = JSON.parse(cinData.data);
  var refData = [{
    title: "CIN",
    value: details["CIN"]
  }, {
    title: "Company Name",
    value: details["Company Name"]
  }, {
    title: "LLP Name",
    value: details["LLP Name"]
  }, {
    title: "ROC Code",
    value: details["ROC Code"]
  }, {
    title: "Registration Number",
    value: details["Registration Number"]
  }, {
    title: "Company Category",
    value: details["Company Category"]
  }, {
    title: "Company SubCategory",
    value: details["Company SubCategory"]
  }, {
    title: "Class of Company",
    value: details["Class of Company"]
  }, {
    title: "Authorised Capital(Rs)",
    value: details["Authorised Capital(Rs)"]
  }, {
    title: "Paid up Capital(Rs)",
    value: details["Paid up Capital(Rs)"]
  }, {
    title: "Number of Members(Applicable in case of company without Share Capital)",
    value: details["Number of Members(Applicable in case of company without Share Capital)"]
  }, {
    title: "Number of Partners",
    value: details["Number of Partners"]
  }, {
    title: "Number of Designated Partners",
    value: details["Number of Designated Partners"]
  }, {
    title: "Date of Incorporation",
    value: details["Date of Incorporation"]
  }, {
    title: "Registered Address",
    value: details["Registered Address"]
  }, {
    title: "Address",
    value: details["Address other than R/o where all or any books of account and papers are maintained"]
  }, {
    title: "Email Id",
    value: details["Email Id"]
  }, {
    title: "Whether Listed or not",
    value: details["Whether Listed or not"]
  }, {
    title: "Suspended at stock exchange",
    value: details["Suspended at stock exchange"]
  }, {
    title: "Date of last AGM",
    value: details["Date of last AGM"]
  }, {
    title: "Date of Balance Sheet",
    value: details["Date of Balance Sheet"]
  }, {
    title: "Company Status(for efiling)",
    value: details["Company Status(for efiling)"]
  }, {
    title: "LLP Status",
    value: details["LLP Status"]
  }];

  var renderLocaleButtons = function renderLocaleButtons(activeLanguage) {
    return ["en", "es", "tr"].map(function (lang) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_8__["LocaleButton"], {
        key: lang,
        lang: lang,
        isActive: activeLanguage === lang,
        onClick: function onClick() {
          return i18n.changeLanguage(lang);
        }
      });
    });
  };

  var companyName = details["Company Name"] || details["LLP Name"];
  var SEO = {
    title: "".concat(companyName, ", ").concat(details["CIN"], " - Company, charges, directors, CIN, DIN and contact details _ Kitaablu"),
    description: "Company information, business information, directors/partners details and director/partners contact information of ".concat(companyName, ", ").concat(details["CIN"])
  };
  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
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
    }, __jsx("div", {
      id: "list-example",
      className: "list-group shadow-sm bg-white rounded"
    }, __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#intro"
    }, "Introduction"), __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#basicInfo"
    }, "Basic Information"), __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#directors"
    }, "Directors"), __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#charges"
    }, "Charges"), __jsx("a", {
      className: "list-group-item list-group-item-action",
      href: "#similarCompanies"
    }, "Similar Companies")), __jsx("div", {
      className: "mt-1"
    }, __jsx("div", null, "Last updated at "), __jsx("div", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(cinData.updated_at).format("DD/MM/YYYY"))))
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__["NextSeo"], {
    title: SEO.title,
    description: SEO.description
  }), __jsx("h1", {
    className: "my-4"
  }, __jsx("small", null, details["CIN"]), __jsx("div", null, companyName)), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded",
    id: "intro"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", null, companyName, " is a ", details["Class of Company"], " incorporated on ", details["Date of Incorporation"], ". It is classified as ", details["Company SubCategory"], " and is registered at Registrar of Companies, ", details["ROC Code"], ". It's authorized share capital is INR ", details["Authorised Capital(Rs)"], " and paid up capital is INR ", details["Paid up Capital(Rs)"], ". It is a ", details["Whether Listed or not"], " company."), __jsx("div", null, "Corporate Identification Number(CIN) of ", companyName, " is ", details["CIN"], " and it's registration number is ", details["Registration Number"], ". Company can be contacted on email - ", details["Email Id"], " and registered address - ", details["Registered Address"], ". Current status of ", companyName, " is - ", details["Company Status(for efiling)"] || details["LLP Status"], "."), __jsx("div", null, "Director details of ", companyName, " can be found ", __jsx("a", {
    href: "#directors"
  }, "Here"), "."))), __jsx("h4", {
    id: "basicInfo"
  }, "Basic Information"), __jsx("div", {
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
    }, __jsx("th", {
      scope: "row"
    }, data.title), __jsx("td", null, data.value));
  })))))), __jsx("h4", {
    id: "directors"
  }, "Directors"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("thead", null, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col"
  }, "#"), __jsx("th", {
    scope: "col"
  }, "DIN/PAN"), __jsx("th", {
    scope: "col"
  }, "Name"), __jsx("th", {
    scope: "col"
  }, "Begin date"), __jsx("th", {
    scope: "col"
  }, "End date"), __jsx("th", {
    scope: "col"
  }, "Surrendered DIN"))), __jsx("tbody", null, details.dins.map(function (director, index) {
    return __jsx("tr", {
      key: "director_".concat(director[0]),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/director/[din]",
      as: "/director/".concat(director[0])
    }, __jsx("a", null, director[0]))), __jsx("td", null, director[6]), __jsx("td", null, director[7]), __jsx("td", null, director[8]), __jsx("td", null, director[6]));
  })))))), __jsx("h4", {
    id: "charges"
  }, "Charges"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
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
  }, "Assets under charge"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Charge Amount"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Date of Creation"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Date of Modification"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Status"))), __jsx("tbody", null, details.charges.map(function (charge, index) {
    return __jsx("tr", {
      key: "charge_".concat(charge[1], "_").concat(index),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, charge[0]), __jsx("td", null, charge[1]), __jsx("td", null, charge[2]), __jsx("td", null, charge[3]), __jsx("td", null, charge[4]));
  })))))), __jsx("h4", {
    id: "similarCompanies"
  }, "List of similar companies"), __jsx("div", {
    className: "card mb-4 shadow bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, similarCompanies.length ? __jsx("div", {
    className: "table-responsive"
  }, __jsx("table", {
    className: "table table-hover table-sm"
  }, __jsx("thead", null, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col"
  }, "#"), __jsx("th", {
    scope: "col"
  }, "CIN/FCRN"), __jsx("th", {
    scope: "col"
  }, "Company Name"))), __jsx("tbody", null, similarCompanies.map(function (company, index) {
    return __jsx("tr", {
      key: "director_".concat(company.CIN),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/company/[cin]",
      as: "/company/".concat(company.CIN)
    }, __jsx("a", null, company.CIN))), __jsx("td", null, company.company_name));
  })))) : __jsx("div", null, "No similar company registered"))));
};

Home.getInitialProps = function _callee(ctx) {
  var cin, props;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cin = ctx.query.cin;
          props = {
            cinData: null,
            similarCompanies: []
          };
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__["Http"].Request('GET', "https://kitaablu.com/api/v1/company/".concat(cin)));

        case 5:
          props.cinData = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_6__["Http"].Request('GET', "https://kitaablu.com/api/v1/company", {
            roc_code: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(props, 'cinData.roc_code', undefined),
            "class": lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(props, 'cinData.class', undefined),
            limit: 100
          }));

        case 8:
          props.similarCompanies = _context.sent;
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          console.log("Error while fetching details for cin: ", cin, _context.t0);

        case 14:
          return _context.abrupt("return", props);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]], Promise);
}; // export const getServerSideProps: GetServerSideProps = async (context) => {
//     const cinData = await Http.Request('GET', `http://3.7.5.125:4000/v1/company/U55209AP2018PTC107672`);
//     console.log("cinData on server side: ", cinData);
//     return {
//       props: {
//         cinData,
//         name: "pushkar"
//       }
//     }
// }


var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_7__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=[cin].js.57064699e70ca5b0404f.hot-update.js.map