webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");

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
      cinData = _ref.cinData;
  var home = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.home;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var renderLocaleButtons = function renderLocaleButtons(activeLanguage) {
    return ["en", "es", "tr"].map(function (lang) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_5__["LocaleButton"], {
        key: lang,
        lang: lang,
        isActive: activeLanguage === lang,
        onClick: function onClick() {
          return i18n.changeLanguage(lang);
        }
      });
    });
  };

  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, __jsx("h1", {
    className: "my-4"
  }, __jsx("div", null, "Home")), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h2", {
    className: "card-title"
  }, "What we do?"), __jsx("p", {
    className: "card-text"
  }, "We are provider of commercial information and insight on businesses. The team have one goal - to be your sole resource for critical information. We gather data from a number of official sources and third parties to give you all the information you need, in one easy to use website."))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h2", {
    className: "card-title"
  }, "We have authentic dataset"), __jsx("p", {
    className: "card-text"
  }, "We have a continuously growing dataset with data of more than 20 Lakh companies and 45 Lakh directors."))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h2", {
    className: "card-title"
  }, "How well do you know your customers, suppliers or competitors ?"), __jsx("p", {
    className: "card-text"
  }, "When asked how well they know their competition, most business owners respond by naming direct competitors. Knowing your direct competitors is important, but it's not enough. Your direct competitors do not represent the entire competitive landscape facing your business, service or product. A myriad of other dangerous competitors are lurking out there. To succeed in the long term, you must identify, analyze, then differentiate from them."))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h2", {
    className: "card-title"
  }, "Get data in your required formats"), __jsx("p", {
    className: "card-text"
  }, "Just mail us your requirements and we will provide you data in your required formats.")), __jsx("div", {
    className: "card-footer text-muted"
  }, "Email us at info@kitaablu.com")));
};

Home.getInitialProps = function _callee(ctx) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ctx.store.dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_4__["HomeActions"].GetApod({
            params: {
              hd: true
            }
          })));

        case 2:
          return _context.abrupt("return", {
            namespacesRequired: ["common"]
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=home.js.a15c6e673e77129663be.hot-update.js.map