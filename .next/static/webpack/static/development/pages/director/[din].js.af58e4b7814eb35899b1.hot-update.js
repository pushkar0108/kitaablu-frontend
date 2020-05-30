webpackHotUpdate("static/development/pages/director/[din].js",{

/***/ "./src/Components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.. */ "./src/Components/index.ts");
/* harmony import */ var _Services_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/analytics */ "./src/Services/analytics.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Layout = function Layout(_ref) {
  var children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!window.GA_INITIALIZED) {
      Object(_Services_analytics__WEBPACK_IMPORTED_MODULE_4__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_Services_analytics__WEBPACK_IMPORTED_MODULE_4__["logPageView"])();
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleClick = function handleClick(e) {
    e.preventDefault();
    var cin = document.getElementById('cinInput').value;

    if (cin) {
      router.push('/company/[cin]', "/company/".concat(cin));
      setTimeout(function () {
        window.scrollTo(0, 0);
        document.getElementById('cinInput').value = '';
      }, 1000);
    }
  };

  var handleDinSearchClick = function handleDinSearchClick(e) {
    e.preventDefault();
    var din = document.getElementById('dinInput').value;

    if (din) {
      router.push('/director/[din]', "/director/".concat(din));
      setTimeout(function () {
        window.scrollTo(0, 0);
        document.getElementById('cinInput').value = '';
      }, 1000);
    }
  };

  return __jsx("div", null, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
  }, __jsx("div", {
    className: "container"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home",
    as: "/home"
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#"
  }, "Kitaablu")), __jsx("div", {
    className: "d-none d-md-block",
    style: {
      width: '50%'
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["AsyncTypeahead"], null)), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarResponsive"
  }, __jsx("ul", {
    className: "navbar-nav ml-auto"
  }, __jsx("li", {
    className: "nav-item active"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home",
    as: "/home"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "Home"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company",
    as: "/company"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "Companies"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/director",
    as: "/director"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "Directors"))))))), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-8"
  }, children), __jsx("div", {
    className: "col-md-4"
  }, __jsx("div", {
    className: "card my-4"
  }, __jsx("h5", {
    className: "card-header"
  }, "Documents Coming Soon"), __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("ul", {
    className: "list-unstyled mb-0"
  }, __jsx("li", null, "Form 3A"), __jsx("li", null, "Balance Sheet"), __jsx("li", null, "Form A"))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("ul", {
    className: "list-unstyled mb-0"
  }, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "GST Return")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Form 3A")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Balance Sheet"))))))), __jsx("div", {
    className: "card my-4 sticky-top"
  }, __jsx("h5", {
    className: "card-header"
  }, "Search Company"), __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    id: "cinInput",
    type: "text",
    className: "form-control",
    placeholder: "Search using CIN/LLPIN"
  }), __jsx("span", {
    className: "input-group-btn"
  }, __jsx("button", {
    onClick: handleClick,
    className: "btn btn-secondary",
    type: "button"
  }, "Go!"))))), __jsx("div", {
    className: "card my-4"
  }, __jsx("h5", {
    className: "card-header"
  }, "Search Director"), __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    id: "dinInput",
    type: "text",
    className: "form-control",
    placeholder: "Search using DIN"
  }), __jsx("span", {
    className: "input-group-btn"
  }, __jsx("button", {
    onClick: handleDinSearchClick,
    className: "btn btn-secondary",
    type: "button"
  }, "Go!")))))))), __jsx("footer", {
    className: "py-5 bg-dark"
  }, __jsx("div", {
    className: "container"
  }, __jsx("p", {
    className: "m-0 text-center text-white"
  }, "Copyright \xA9 Kitaablu 2020"))));
};



/***/ })

})
//# sourceMappingURL=[din].js.af58e4b7814eb35899b1.hot-update.js.map