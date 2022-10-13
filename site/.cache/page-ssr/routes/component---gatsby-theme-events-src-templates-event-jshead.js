"use strict";
exports.id = "component---gatsby-theme-events-src-templates-event-jshead";
exports.ids = ["component---gatsby-theme-events-src-templates-event-jshead"];
exports.modules = {

/***/ "../gatsby-theme-events/src/components/event.js":
/*!******************************************************!*\
  !*** ../gatsby-theme-events/src/components/event.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Event = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, JSON.stringify(props, null, 2));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);

/***/ }),

/***/ "../gatsby-theme-events/src/components/layout.js":
/*!*******************************************************!*\
  !*** ../gatsby-theme-events/src/components/layout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Layout = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Gatsby Events Theme"), children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "../gatsby-theme-events/src/templates/event.js?export=head":
/*!*****************************************************************!*\
  !*** ../gatsby-theme-events/src/templates/event.js?export=head ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "../gatsby-theme-events/src/components/layout.js");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/event */ "../gatsby-theme-events/src/components/event.js");



const query = "3497968161";

const EventTemplate = ({
  data: {
    event
  }
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_event__WEBPACK_IMPORTED_MODULE_2__["default"], event));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTemplate);

/***/ })

};
;
//# sourceMappingURL=component---gatsby-theme-events-src-templates-event-jshead.js.map