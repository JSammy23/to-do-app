/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/forest.jpg */ "./src/assets/img/forest.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --dark-lightGray: #282828;\n    --dark-darkGray: #1f1f1f;\n    --dark-wfont: #fff;\n    --accent-pink: #df9dc9;\n    --accent-color: blueviolet;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#content {\n    width: 85vw;\n    height: 85vh;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    /* border: 3px solid red; */\n    display: grid;\n    color: var(--dark-wfont);\n    grid-template-columns: 375px auto;\n    grid-template-rows: min-content;\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);;\n}\n\n#headerBar {\n    grid-column: 1 / span 2;\n    height: 40px;\n    border-bottom: 2px solid var(--accent-color);\n}\n\n#headerBar,\n#sideBar {\n    background-color: var(--dark-lightGray);\n    color: var(--dark-wfont);\n}\n\n#sideBar {\n    border-right: 1px solid black;\n    box-shadow: 8px 0px 5px 0px rgba(0,0,0,0.55);\n    -webkit-box-shadow: 8px 0px 5px 0px rgba(0,0,0,0.55);\n    -moz-box-shadow: 8px 0px 5px 0px rgba(0,0,0,0.55);\n    z-index: 10;\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarControls {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25px;\n}\n\n.dropDown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropDownContent {\n    display: none;\n    margin-top: -20px;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n\n.dropDownContent a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block; \n}\n\n.dropDownContent a:hover {\n    background-color: #ddd;\n}\n\n.addSvg:hover {\n    cursor: pointer;\n}\n\n\n.sideBarControls > button,\n.card > button,\n#closeTask,\n#closeProject {\n    border: none;\n    outline: none;\n    background: none;\n    cursor: pointer;\n}\n\n#mainBody {\n    background-color: var(--dark-darkGray);\n\n}\n\n.tile {\n    background-color: var(--dark-darkGray);\n    padding: 8px;\n    cursor: pointer;\n    border-bottom: 1px solid var(--accent-color);\n}\n\n.tile:focus {\n    color: var(--accent-color);\n    /* transition: all .1s ease-in-out;\n    transform: scale(1.05); */\n}\n\n.tile:nth-child(odd) {\n    background-color: var(--dark-lightGray);\n}\n\n.card {\n    border-radius: 10px;\n    background-color: var(--dark-lightGray);\n    display: flex;\n    padding: 8px;\n    width: 85%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n}\n\n.card:hover {\n    transition: all .1s ease-in-out;\n    transform: scale(1.05); \n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n}\n\n.card > button {\n    background: none;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.note {\n    color: rgba(255, 255, 255, .5);\n}\n\n.roundBox {\n    width: 1.3em;\n    height: 1.3em;\n    background-color: var(--dark-darkGray);\n    border-radius: 50%;\n    border: 2px solid #fff;\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n    margin-right: 10px;\n    align-self: center;\n}\n\n.roundBox:checked {\n    background-color: var(--accent-color);\n}\n\n.checked {\n    text-decoration: line-through;\n    color: rgba(255, 255, 255, .5);\n}\n\n.taskEdit {\n    margin-left: auto;\n    cursor: pointer;\n}\n\n.taskFolders {\n    border-bottom: 2px solid #fff;\n    min-height: 25%;\n    margin-bottom: 1rem;\n}\n\n.taskForm,\n.projectForm,\n.editTaskForm {\n    /* Change display before production */\n    position: fixed;\n    top: 25%;\n    left: 35%;\n    border: 2px solid var(--accent-pink);\n    width: 800px;\n    background-color: var(--dark-lightGray);\n    color: #fff;\n    padding: 15px;\n    border-radius: 15px;\n    font-size: 1.25rem;\n}\n\n.editTaskForm {\n    display: none;\n}\n\n#projectFormDiv {\n    display: none;\n}\n\n.taskForm {\n    display: none;\n}\n\n.formFooter {\n    display: flex;\n    justify-content: end;\n}\n\n.formFooter > button {\n    background: none;\n    outline: none;\n    border: 2px solid var(--accent-pink);\n    border-radius: 15px;\n    color: var(--accent-pink);\n    padding: 8px;\n    cursor: pointer;\n}\n\ninput {\n    font-size: 1.25rem;\n}\n\ninput[type=text] {\n    width: 500px;\n    background-color: var(--dark-lightGray);\n    color: #fff;\n    outline: none;\n    border: none;\n}\n\nselect,\ninput[type=date] {\n    font-size: 1.25rem;\n    background-color: var(--dark-lightGray);\n    color: #fff;\n    border: none;\n}\n\nselect {\n    width: 100px;\n}\n\n.formLegend {\n    padding: 20px;\n}\n\n.formHeader {\n    display: flex;\n    justify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,kBAAkB;IAClB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mDAAwC;AAC5C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,wBAAwB;IACxB,iCAAiC;IACjC,+BAA+B;IAC/B,8CAA8C;IAC9C,sDAAsD;IACtD,mDAAmD;AACvD;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,4CAA4C;AAChD;;AAEA;;IAEI,uCAAuC;IACvC,wBAAwB;AAC5B;;AAEA;IACI,6BAA6B;IAC7B,4CAA4C;IAC5C,oDAAoD;IACpD,iDAAiD;IACjD,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,4CAA4C;IAC5C,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;;AAGA;;;;IAII,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,sCAAsC;;AAE1C;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,eAAe;IACf,4CAA4C;AAChD;;AAEA;IACI,0BAA0B;IAC1B;6BACyB;AAC7B;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,uCAAuC;IACvC,aAAa;IACb,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,8CAA8C;IAC9C,sDAAsD;IACtD,mDAAmD;AACvD;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;IAGI,qCAAqC;IACrC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,YAAY;IACZ,uCAAuC;IACvC,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,uCAAuC;IACvC,WAAW;IACX,aAAa;IACb,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,uCAAuC;IACvC,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --dark-lightGray: #282828;\n    --dark-darkGray: #1f1f1f;\n    --dark-wfont: #fff;\n    --accent-pink: #df9dc9;\n    --accent-color: blueviolet;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: url(./assets/img/forest.jpg);\n}\n\n#content {\n    width: 85vw;\n    height: 85vh;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    /* border: 3px solid red; */\n    display: grid;\n    color: var(--dark-wfont);\n    grid-template-columns: 375px auto;\n    grid-template-rows: min-content;\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.64);;\n}\n\n#headerBar {\n    grid-column: 1 / span 2;\n    height: 40px;\n    border-bottom: 2px solid var(--accent-color);\n}\n\n#headerBar,\n#sideBar {\n    background-color: var(--dark-lightGray);\n    color: var(--dark-wfont);\n}\n\n#sideBar {\n    border-right: 1px solid black;\n    box-shadow: 8px 0px 5px 0px rgba(0,0,0,0.55);\n    -webkit-box-shadow: 8px 0px 5px 0px rgba(0,0,0,0.55);\n    -moz-box-shadow: 8px 0px 5px 0px rgba(0,0,0,0.55);\n    z-index: 10;\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarControls {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25px;\n}\n\n.dropDown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropDownContent {\n    display: none;\n    margin-top: -20px;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n\n.dropDownContent a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block; \n}\n\n.dropDownContent a:hover {\n    background-color: #ddd;\n}\n\n.addSvg:hover {\n    cursor: pointer;\n}\n\n\n.sideBarControls > button,\n.card > button,\n#closeTask,\n#closeProject {\n    border: none;\n    outline: none;\n    background: none;\n    cursor: pointer;\n}\n\n#mainBody {\n    background-color: var(--dark-darkGray);\n\n}\n\n.tile {\n    background-color: var(--dark-darkGray);\n    padding: 8px;\n    cursor: pointer;\n    border-bottom: 1px solid var(--accent-color);\n}\n\n.tile:focus {\n    color: var(--accent-color);\n    /* transition: all .1s ease-in-out;\n    transform: scale(1.05); */\n}\n\n.tile:nth-child(odd) {\n    background-color: var(--dark-lightGray);\n}\n\n.card {\n    border-radius: 10px;\n    background-color: var(--dark-lightGray);\n    display: flex;\n    padding: 8px;\n    width: 85%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n}\n\n.card:hover {\n    transition: all .1s ease-in-out;\n    transform: scale(1.05); \n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n}\n\n.card > button {\n    background: none;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.note {\n    color: rgba(255, 255, 255, .5);\n}\n\n.roundBox {\n    width: 1.3em;\n    height: 1.3em;\n    background-color: var(--dark-darkGray);\n    border-radius: 50%;\n    border: 2px solid #fff;\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n    margin-right: 10px;\n    align-self: center;\n}\n\n.roundBox:checked {\n    background-color: var(--accent-color);\n}\n\n.checked {\n    text-decoration: line-through;\n    color: rgba(255, 255, 255, .5);\n}\n\n.taskEdit {\n    margin-left: auto;\n    cursor: pointer;\n}\n\n.taskFolders {\n    border-bottom: 2px solid #fff;\n    min-height: 25%;\n    margin-bottom: 1rem;\n}\n\n.taskForm,\n.projectForm,\n.editTaskForm {\n    /* Change display before production */\n    position: fixed;\n    top: 25%;\n    left: 35%;\n    border: 2px solid var(--accent-pink);\n    width: 800px;\n    background-color: var(--dark-lightGray);\n    color: #fff;\n    padding: 15px;\n    border-radius: 15px;\n    font-size: 1.25rem;\n}\n\n.editTaskForm {\n    display: none;\n}\n\n#projectFormDiv {\n    display: none;\n}\n\n.taskForm {\n    display: none;\n}\n\n.formFooter {\n    display: flex;\n    justify-content: end;\n}\n\n.formFooter > button {\n    background: none;\n    outline: none;\n    border: 2px solid var(--accent-pink);\n    border-radius: 15px;\n    color: var(--accent-pink);\n    padding: 8px;\n    cursor: pointer;\n}\n\ninput {\n    font-size: 1.25rem;\n}\n\ninput[type=text] {\n    width: 500px;\n    background-color: var(--dark-lightGray);\n    color: #fff;\n    outline: none;\n    border: none;\n}\n\nselect,\ninput[type=date] {\n    font-size: 1.25rem;\n    background-color: var(--dark-lightGray);\n    color: #fff;\n    border: none;\n}\n\nselect {\n    width: 100px;\n}\n\n.formLegend {\n    padding: 20px;\n}\n\n.formHeader {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/javascript/DOMController.js":
/*!*****************************************!*\
  !*** ./src/javascript/DOMController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard),
/* harmony export */   "createTile": () => (/* binding */ createTile),
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "refreshDOM": () => (/* binding */ refreshDOM)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/javascript/project.js");
/* harmony import */ var _handleForms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleForms */ "./src/javascript/handleForms.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/javascript/task.js");







const displayProjects = () => {
    const projectsDisplay = document.querySelector('.projects')
    for (let value of _project__WEBPACK_IMPORTED_MODULE_0__.projectMap.values()) {
        createCard(value)
    }
};

// Create project tile in sidebar
const createTile = (projectName) => {
    const projectsDisplay = document.querySelector('.projects')
    const tile = document.createElement('div')
    tile.classList.add('tile')
    const name = document.createElement('h2')
    name.textContent = projectName
    tile.appendChild(name)
    tile.setAttribute('tabindex', '0')
    projectsDisplay.appendChild(tile)
    // This puts listeners on dynamic elements
    tile.addEventListener('click', (event) => {
        refreshDOM()
        displayTasks(event.target.textContent)
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(event.target.textContent)
    })

    return tile;
};

const displayTasks = projectName => {
    const project = _project__WEBPACK_IMPORTED_MODULE_0__.projectMap.get(`${projectName}`)
    for (let i = 0; i < project.tasks.length; i++){
        createCard(project.tasks[i])
    }
};

// Handle All Tasks filter tile
const handleAllTaskListener = (() => {
    const allTasksTile = document.getElementById('allTasks')
    allTasksTile.addEventListener('click', (event) => {
        refreshDOM()
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.grabTasks)()
        displayAllTasks()
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(event.target.textContent)
    })
})();


const displayAllTasks = () => {
    for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.allTasks.length; i++) {
        createCard(_project__WEBPACK_IMPORTED_MODULE_0__.allTasks[i])
    }
};

// Handle today's tasks tile
const handleTodaysTaskListener = (() => {
    const todaysTaskTile = document.getElementById('todaysTasks')
    todaysTaskTile.addEventListener('click', (event) => {
        refreshDOM()
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.grabTasks)()
        displayTodaysTasks()
        // setActiveProject(event.target.textContent)
    })
})();

const displayTodaysTasks = () => {
    for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.todaysTasks.length; i++) {
        createCard(_project__WEBPACK_IMPORTED_MODULE_0__.todaysTasks[i])
    }
};

// Handle this week's tasks tile
const handleWeeklyTask = (() => {
    const thisWeek = document.getElementById('thisWeek')
    thisWeek.addEventListener('click', (event) => {
        refreshDOM()
        displayWeeklyTasks()
        // setActiveProject(event.target.textContent)
    })
})();

const displayWeeklyTasks = () => {
    for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.weeklyTasks.length; i++) {
        createCard(_project__WEBPACK_IMPORTED_MODULE_0__.weeklyTasks[i])
    }
};



const createCard = (task) => {
    const body = document.getElementById('mainBody')
    const card = document.createElement('div')
    card.classList.add('card')
    // Handle title // Title & note need to be in same div
    const titleDiv = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = task.taskName
    if (task.completed === true) {
        title.classList.add('checked')
    }
    titleDiv.appendChild(title)

    // Handle complete button
    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.id = task.taskName
    checkBox.classList.add('roundBox')
    if (task.completed === true) {
        checkBox.checked = true
    } else if (task.completed === false) {
        checkBox.checked = false
    }
    listenForTaskCompletion(checkBox)

    // Handle note
    const note = document.createElement('p')
    note.classList.add('note')
    note.textContent = task.note
    titleDiv.appendChild(note)

    // Handle edit button
    const dotsSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const dotsPath = document.createElementNS("http://www.w3.org/2000/svg", 'path')

    dotsSvg.setAttribute('width', '25px')
    dotsSvg.setAttribute('viewBox', '0 0 24 24')
    dotsSvg.setAttribute('fill', 'white')
    dotsPath.setAttribute('d', 'M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z')

    dotsSvg.appendChild(dotsPath)
    dotsSvg.classList.add('taskEdit')
    // TODO: listenForEditTask(editBtn)
    dotsSvg.addEventListener('click', () => {
        ;(0,_handleForms__WEBPACK_IMPORTED_MODULE_1__.openTaskEditForm)(task)
    })


    // Append card in order 
    card.appendChild(checkBox)
    card.appendChild(titleDiv)
    card.appendChild(dotsSvg)
    body.appendChild(card)
};

// Create add button in sidebar
const createAddBtn = (() => {
    // Create buttom
    const controls = document.querySelector('.sideBarControls')
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    svg.classList.add('addSvg')
    svg.setAttribute('width', '65px')
    svg.setAttribute('viewbox', "0 0 56 56")
    svg.setAttribute('fill', 'blueviolet')
    path.setAttribute('d', 'M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 27.9882 39.0742 C 29.2304 39.0742 29.9804 38.2071 29.9804 36.8477 L 29.9804 29.9336 L 37.3163 29.9336 C 38.6288 29.9336 39.5429 29.2305 39.5429 27.9883 C 39.5429 26.7227 38.6757 25.9961 37.3163 25.9961 L 29.9804 25.9961 L 29.9804 18.6367 C 29.9804 17.2774 29.2304 16.4102 27.9882 16.4102 C 26.7460 16.4102 26.0429 17.3242 26.0429 18.6367 L 26.0429 25.9961 L 18.7304 25.9961 C 17.3710 25.9961 16.4804 26.7227 16.4804 27.9883 C 16.4804 29.2305 17.4179 29.9336 18.7304 29.9336 L 26.0429 29.9336 L 26.0429 36.8477 C 26.0429 38.1602 26.7460 39.0742 27.9882 39.0742 Z')
    svg.appendChild(path)
    svg.addEventListener('click', _handleForms__WEBPACK_IMPORTED_MODULE_1__.dropMenu)
    controls.appendChild(svg)
})()

const refreshDOM = () => {
    const body = document.getElementById('mainBody')
    body.textContent = ''
    ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.grabTasks)()
}

// Listen for completed task
const listenForTaskCompletion = (button) => {
    button.addEventListener('click', (event) => {
        const task = _project__WEBPACK_IMPORTED_MODULE_0__.allTasks.find(task => task.taskName === event.target.id)
        if (task.completed === false) {
            task.completed = true
        } else if (task.completed === true) {
            task.completed = false
        }
        console.log(task)
        refreshDOM()
        //TODO: Display seleted filter tasks
    })
}

displayProjects();



/***/ }),

/***/ "./src/javascript/handleForms.js":
/*!***************************************!*\
  !*** ./src/javascript/handleForms.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "dropMenu": () => (/* binding */ dropMenu),
/* harmony export */   "openTaskEditForm": () => (/* binding */ openTaskEditForm),
/* harmony export */   "openTaskForm": () => (/* binding */ openTaskForm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/javascript/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/javascript/task.js");
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMController */ "./src/javascript/DOMController.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");





const taskFormObjects = []

const handleTaskForm = (() => {
    const taskForm = document.getElementById('taskForm')
    taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const taskData = Object.fromEntries(formData)
    
    taskFormObjects.push(taskData)
    addNewTask(taskData)
    ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.grabTasks)()
    closeTaskForm()
    taskForm.reset()
    
})
})() 

const handleProjectForm = (() => {
    const projectForm = document.getElementById('projectForm')
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const projectName = document.getElementById('projectName').value
        addNewProject(projectName)
        closeProjectForm()
        projectForm.reset()
    })
})()

const addNewTask = taskData => {
    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(taskData)
    const date = new Date(taskData.dueDate.replace(/-/g, '\/'))
    ;(0,_task__WEBPACK_IMPORTED_MODULE_1__.addTaskToMap)(newTask)
    if (_project__WEBPACK_IMPORTED_MODULE_0__.activeProject === 'All Tasks' || _project__WEBPACK_IMPORTED_MODULE_0__.activeProject === undefined) {
        _project__WEBPACK_IMPORTED_MODULE_0__.allTasks.push(newTask)
        ;(0,_DOMController__WEBPACK_IMPORTED_MODULE_2__.refreshDOM)()
        ;(0,_DOMController__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)()
        console.log('Fired first if')
        
        
    } else if ((_project__WEBPACK_IMPORTED_MODULE_0__.activeProject !== 'All Tasks' || _project__WEBPACK_IMPORTED_MODULE_0__.activeProject !== undefined)) {
        const currentProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectMap.get(`${_project__WEBPACK_IMPORTED_MODULE_0__.activeProject}`)
        currentProject.tasks.push(newTask)
        newTask.project = _project__WEBPACK_IMPORTED_MODULE_0__.activeProject
        console.log(currentProject.tasks)
        ;(0,_DOMController__WEBPACK_IMPORTED_MODULE_2__.refreshDOM)()
        ;(0,_DOMController__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_project__WEBPACK_IMPORTED_MODULE_0__.activeProject)
        console.log('Fired second if')
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date)){
        _project__WEBPACK_IMPORTED_MODULE_0__.todaysTasks.push(newTask)
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(date)) {
        _project__WEBPACK_IMPORTED_MODULE_0__.weeklyTasks.push(newTask)
    }
}

const addNewProject = name => {
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(name)
    ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.addProjectToMap)(newProject)
    ;(0,_DOMController__WEBPACK_IMPORTED_MODULE_2__.createTile)(name)
}

const listenForCloseTaskForm = (() => {
    const closeTaskBtn = document.getElementById('closeTask')
    const taskForm = document.getElementById('taskForm')
    closeTaskBtn.addEventListener('click', () => {
        closeTaskForm()
        taskForm.reset()
    })
    
})()

const listenForTaskForm = (() => {
    const newTask = document.getElementById('newTask')
    newTask.addEventListener('click', () => {
        openTaskForm()
        hideMenu()
    })
})()

const listenForProjectForm = (() => {
    const newProject = document.getElementById('newProject')
    newProject.addEventListener('click', () => {
        openProjectForm()
        hideMenu()
    })
})()

const listenForCloseProjectForm = (() => {
    const closeProject = document.getElementById('closeProject')
    const projectForm = document.getElementById('projectForm')
    closeProject.addEventListener('click', () => {
        closeProjectForm()
        projectForm.reset()
    })
})()

function dropMenu() {
    const menu = document.querySelector('.dropDownContent')
    menu.style.display = 'block'
}

function hideMenu() {
    const menu = document.querySelector('.dropDownContent')
    menu.style.display = 'none'
}


function openTaskForm() {
    document.querySelector('.taskForm').style.display = 'block'
};

function closeTaskForm() {
    document.querySelector('.taskForm').style.display = 'none'
};

function openProjectForm() {
   document.getElementById('projectFormDiv').style.display = 'block'
}

function closeProjectForm() {
    document.getElementById('projectFormDiv').style.display = 'none'
}

function openTaskEditForm(task) {
    document.querySelector('.editTaskForm').style.display = 'block'
    const nameInput = document.getElementById('taskNameEdit')
    const noteInput = document.getElementById('noteEdit')
    const dateInput = document.getElementById('dueDateEdit')
    const priorityInput = document.getElementById('priorityEdit')
    if (!(task.dueDate === "" || task.dueDate === undefined)){
        // const taskDate = format((task.dueDate), 'yyyy-MM-dd')
        dateInput.value = task.dueDate
    } 
    
    nameInput.value = task.taskName
    noteInput.value = task.note
    

    // Save Changes
    const saveBtn = document.getElementById('saveEdit')
    saveBtn.addEventListener('click', () => {
        task.taskName = nameInput.value
        task.note = noteInput.value
        task.dueDate = dateInput.value
        task.priority = priorityInput.value
        document.querySelector('.editTaskForm').style.display = 'none'
        console.log(task) // TODO: All Tasks array duplicating with several edits
    })
}

const closeTaskEditListener = (() => {
    const button = document.getElementById('editTaskClose')
    button.addEventListener('click', () => {
        document.querySelector('.editTaskForm').style.display = 'none'
    })
})()

 

/***/ }),

/***/ "./src/javascript/project.js":
/*!***********************************!*\
  !*** ./src/javascript/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "addProjectToMap": () => (/* binding */ addProjectToMap),
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "grabTasks": () => (/* binding */ grabTasks),
/* harmony export */   "projectMap": () => (/* binding */ projectMap),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject),
/* harmony export */   "todaysTasks": () => (/* binding */ todaysTasks),
/* harmony export */   "weeklyTasks": () => (/* binding */ weeklyTasks)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/javascript/task.js");





// Set active project
var activeProject = undefined;
function setActiveProject(projectName) {
    activeProject = projectName
    console.log(activeProject)
}


const Project = (name) => {
    let projectName = name
    const tasks = []

    const newTask = taskDetails => {
        const freshTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskDetails)
        tasks.push(freshTask)
    } 
    const addTask = task => {
        tasks.push(task)
    }
    const removeTask = name => {
        tasks.splice(tasks.findIndex(task => task.taskName === name), 1)
    }
    return { tasks, addTask, removeTask, newTask, projectName }
};


// Gather projects into map
const projectMap = new Map()
const addProjectToMap = project => {
    if (project.projectName === '') return
    const name = project.projectName
    projectMap.set(`${name}`, project)
}


// Gather all tasks into single array
const allTasks = []
function grabTasks () {
    allTasks.length = 0;
    for (let value of _task__WEBPACK_IMPORTED_MODULE_0__.taskMap.values()) {
        allTasks.push(value)
    }
}


// Gather all Tasks due Today
const todaysTasks = allTasks.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate))

// Gather all tasks due this week
const weeklyTasks = allTasks.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.dueDate))
    





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);



/***/ }),

/***/ "./src/javascript/task.js":
/*!********************************!*\
  !*** ./src/javascript/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToMap": () => (/* binding */ addTaskToMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "taskList": () => (/* binding */ taskList),
/* harmony export */   "taskMap": () => (/* binding */ taskMap)
/* harmony export */ });


const Task = (taskDetails) => {
    let taskName = taskDetails.taskName;
    let note = taskDetails.note;
    let dueDate = taskDetails.dueDate;
    let completed = false;
    let priority = taskDetails.priority;
    let project;

    return {
        taskName, note, dueDate, completed, priority, project
    }
    
    
}

const taskMap = new Map()

const addTaskToMap = task => {
    if (task.taskName === '') return
    const name = task.taskName
    taskMap.set(`${name}`, task)
}

const taskList = taskMap.values()

const taskItem = Task({
    taskName: 'Mow the yard',
    note: 'Rain forcasted Thursday',
    dueDate: new Date(2023, 0, 31),
    priority: 'normal'
})

const taskItem2 = Task({
    taskName: 'Finish homework',
    note: 'Algebra & history',
    dueDate: new Date(2023, 0, 31),
    priority: 'normal'
})


addTaskToMap(taskItem)
addTaskToMap(taskItem2)




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);



/***/ }),

/***/ "./src/assets/img/forest.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/forest.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/forest.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _javascript_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/project */ "./src/javascript/project.js");
/* harmony import */ var _javascript_DOMController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/DOMController */ "./src/javascript/DOMController.js");


 






})();

/******/ })()
;
//# sourceMappingURL=main.js.map