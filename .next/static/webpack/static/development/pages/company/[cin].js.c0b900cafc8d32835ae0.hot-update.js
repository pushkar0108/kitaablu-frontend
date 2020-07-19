webpackHotUpdate("static/development/pages/company/[cin].js",{

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
  var children = _ref.children,
      leftNav = _ref.leftNav,
      _ref$containerClass = _ref.containerClass,
      containerClass = _ref$containerClass === void 0 ? "container" : _ref$containerClass,
      _ref$gridSize = _ref.gridSize,
      gridSize = _ref$gridSize === void 0 ? {
    left: 'col-md-2',
    mid: 'col-md-8',
    right: 'col-md-4'
  } : _ref$gridSize;
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
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["AsyncTypeahead"], {
    type: "company",
    placeholder: "Search using company name or CIN ..."
  })), __jsx("button", {
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
  }, "Companies"))))))), __jsx("div", {
    className: containerClass
  }, __jsx("div", {
    className: "row"
  }, leftNav && __jsx("div", {
    className: "".concat(gridSize.left, " d-none d-lg-block")
  }, leftNav), __jsx("div", {
    className: "".concat(gridSize.mid)
  }, children), __jsx("div", {
    className: "".concat(gridSize.right)
  }, __jsx("div", {
    className: "sticky-top",
    style: {
      top: '100px'
    }
  }, __jsx("h5", null, "Search For Company"), __jsx("div", {
    className: "card shadow-sm bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    id: "cinInput",
    type: "text",
    className: "form-control",
    placeholder: "Enter CIN/LLPIN"
  }), __jsx("span", {
    className: "input-group-btn"
  }, __jsx("button", {
    onClick: handleClick,
    className: "btn btn-secondary",
    type: "button"
  }, "Go!"))), __jsx("div", {
    className: "mt-2"
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["AsyncTypeahead"], {
    size: "small",
    type: "company",
    placeholder: "Enter Name ..."
  })))), __jsx("h5", {
    className: "mt-4"
  }, "Search For Director"), __jsx("div", {
    className: "card shadow-sm bg-white rounded"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    id: "dinInput",
    type: "text",
    className: "form-control",
    placeholder: "Enter DIN"
  }), __jsx("span", {
    className: "input-group-btn"
  }, __jsx("button", {
    onClick: handleDinSearchClick,
    className: "btn btn-secondary",
    type: "button"
  }, "Go!"))), __jsx("div", {
    className: "mt-2"
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["AsyncTypeahead"], {
    type: "director",
    placeholder: "Enter Name ..."
  })))))))), __jsx("footer", {
    className: "py-5 bg-dark"
  }, __jsx("div", {
    className: "container"
  }, __jsx("p", {
    className: "m-0 text-center text-white"
  }, "Copyright \xA9 Kitaablu 2020"), __jsx("p", {
    className: "m-0 text-center text-white"
  }, "Email - kitaablueterprise@gmail.com"))));
};



/***/ })

})
//# sourceMappingURL=[cin].js.c0b900cafc8d32835ae0.hot-update.js.map