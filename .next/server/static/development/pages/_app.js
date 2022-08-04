module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_08_store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/08/store/configureStore */ "./src/08/store/configureStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_08_ModalProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/08/ModalProvider */ "./src/08/ModalProvider.jsx");
/* harmony import */ var _src_08_components_AppLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/08/components/AppLayout */ "./src/08/components/AppLayout.jsx");
/* harmony import */ var _src_08_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/08/containers/NotificationContainer */ "./src/08/containers/NotificationContainer.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_08_containers_RouterStateContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/08/containers/RouterStateContainer */ "./src/08/containers/RouterStateContainer.jsx");









var _jsxFileName = "C:\\Users\\user\\do-it-example\\pages\\_app.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var isServer = typeof window === 'undefined';

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "store", Object(_src_08_store_configureStore__WEBPACK_IMPORTED_MODULE_11__["default"])());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          router = _this$props.router,
          pageProps = _this$props.pageProps;
      var Router = isServer ? react_router__WEBPACK_IMPORTED_MODULE_16__["StaticRouter"] : react_router_dom__WEBPACK_IMPORTED_MODULE_17__["BrowserRouter"];
      var routerProps = isServer ? {
        location: router.asPath
      } : {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
        store: this.store,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Router, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, routerProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_08_containers_RouterStateContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_08_ModalProvider__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_08_components_AppLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_08_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_08_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/02/debounce.js":
/*!****************************!*\
  !*** ./src/02/debounce.js ***!
  \****************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
//디바운스
//디바운스는 어떤 내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버 요청을 하는 방법이다. 연관 검색어 창이 대표적이다.
//debounce.js를 실행하려면 export를 삭제해야 한다.
//실행 후 다시 export를 넣어준다.
function debounce(func, delay) {
  var inDebounce;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (inDebounce) {
      clearTimeout(inDebounce);
    }

    inDebounce = setTimeout(function () {
      return func.apply(void 0, args);
    }, delay);
  };
}

/***/ }),

/***/ "./src/08/Api.js":
/*!***********************!*\
  !*** ./src/08/Api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//09-2. 데이터 요청을 위한 axios 라이브러리 도입하기
//09-2-1. REST API

/*
    REST API는 쉽게 말해서 웹 주소를 이용하여 서버와 통신하는 방법 중 하나이다.

    주소를 입력하는 방법으로 데이터를 생성하거나 요청, 변경, 삭제를 수행한다.

    주소를 입력할 때 4가지 작업을 처리해야 하므로 주소를 입력하는 방식에 약속을 정한 것이다. 다음은 REST API의 4가지 함수를 CRUD 표현에 맞게 구분한 것이다.

    REST API 함수 | CRUD 표현 | 주소 입력 방식
    POST | Create | /transactions |
    GET | Read | /transactions 또는 get/transactions/4 |
    PUT | Update | /transactions/3 |
    DELETE | Delete | /trasctions/3 |

    GET의 경우 주소 입력 방식이 2종류 이다. 목록을 불러올 경우 /transactions와 같이 입력하고, 단일 항목을 불러오는 경우 /transactions/4와 같이 필요한 항목의 단서를 하나 더 추가하여 입력한다.
*/
//09-2-2. axios 설치하고 가상 코인 거래소에 적용하기
///09-2-2-5. 자주 사용하는 API 프로젝트에 등록하기

var isDev = "development" === 'development';
var Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: isDev ? 'http://localhost:4000/' : '/api/'
});
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./src/08/ModalProvider.jsx":
/*!**********************************!*\
  !*** ./src/08/ModalProvider.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _doit_ui_Modal_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../doit-ui/Modal/create */ "./src/doit-ui/Modal/create.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/modals */ "./src/08/constants/modals.js");
/* harmony import */ var _containers_main_TradeCoinPageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/main/TradeCoinPageContainer */ "./src/08/containers/main/TradeCoinPageContainer.jsx");
/* harmony import */ var _containers_signup_RegisterPageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/signup/RegisterPageContainer */ "./src/08/containers/signup/RegisterPageContainer.jsx");


var _createProvider;

//09-5. 가상 코인 거래 기능 추가하며 마무리하기

/*
    Modal 공용 컴포넌트를 추가한 다음 모달에 포함될 화면 컴포넌트를 구성한다.
*/
//09-5-1. 모달 창으로 거래화면 만들기

/*
    모달 본문에 사용될 거래 화면은 구매, 판매용으로 총 2개가 필요하다.
*/
///09-5-1-2. 모달 공급자 컴포넌트 생성하기



 //11-5-7. 모달 본문 추가하기

/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_Modal_create__WEBPACK_IMPORTED_MODULE_1__["default"])((_createProvider = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createProvider, _constants_modals__WEBPACK_IMPORTED_MODULE_2__["TRADE_COIN_MODAL"], _containers_main_TradeCoinPageContainer__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createProvider, _constants_modals__WEBPACK_IMPORTED_MODULE_2__["REGISTER_USER_MODAL"], _containers_signup_RegisterPageContainer__WEBPACK_IMPORTED_MODULE_4__["default"]), _createProvider)));

/***/ }),

/***/ "./src/08/actions/notificationActions.js":
/*!***********************************************!*\
  !*** ./src/08/actions/notificationActions.js ***!
  \***********************************************/
/*! exports provided: SHOW_NOTIFICATION, HIDE_NOTIFICATION, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return SHOW_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_NOTIFICATION", function() { return HIDE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
//10-4. 미들웨어로 알림 메시지 띄우기

/*
    10-3에서 만든 데이터 컴포넌트는 transaction 리듀서에서 알림과 깊은 관련이 있는 스토어 데이터만을 참조하여 Notification 컴포넌트와 연결되도록 구성되어 있다.

    여기서 많은 불편함이 생기는데 첫째, transaction 리듀서에 알림에 대한 데이터를 추가하고 이를 개발자가 인지하고 관리해야 하며, 둘째 trnasaction 이외의 데이터를 추가하며 리듀서의 일관성이 무너진다.

    여기서는 '서버 처리에 대한 알림 메시지'를 공통으로 처리하는 액션과 리듀서를 분리하여 만들어 보고 이후 미들웨어를 사용하여 알림을 자동으로 출력하는 기능을 추가한다.
*/
///10-4-1. 알림 액션과 리듀서 분리하기
///10-4-1-1. 알림 액션과 리듀서 생성하기
var SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
var HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';
function showMessage(message) {
  var warning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      message: message,
      warning: warning
    }
  };
}
function hideMessage() {
  return {
    type: HIDE_NOTIFICATION
  };
}

/***/ }),

/***/ "./src/08/actions/routerActions.js":
/*!*****************************************!*\
  !*** ./src/08/actions/routerActions.js ***!
  \*****************************************/
/*! exports provided: SET_LOCATION, setLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOCATION", function() { return SET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return setLocation; });
//12-3. 주소와 리덕스 연결하기
//12-3-1. 가상 코인 거래소의 검색 결과 화면 공유하기
//12-3-1-1. 액션 추가하기
var SET_LOCATION = 'router/SET_LOCATION';
function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: {
      location: location
    }
  };
}

/***/ }),

/***/ "./src/08/actions/searchFilterActions.js":
/*!***********************************************!*\
  !*** ./src/08/actions/searchFilterActions.js ***!
  \***********************************************/
/*! exports provided: SET_FILTER, setFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
//11-2. 대용량 데이터 효율적으로 처리하기
///11-2-3. 리덕스에 검색 정보 저장하기

/*
    리덕스에 검색 정보를 저장하려면 검색 정보를 위한 액션과 리듀서를 새로 추가하고, 데이터 컴포넌트와 화면 컴포넌트를 구성해야 한다.
*/
////11-2-3-1. 액션과 리듀서 추가하기
var SET_FILTER = 'searchFilter/SET_FILTER';
function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: {
      params: params
    }
  };
}

/***/ }),

/***/ "./src/08/actions/transactionPackActions.js":
/*!**************************************************!*\
  !*** ./src/08/actions/transactionPackActions.js ***!
  \**************************************************/
/*! exports provided: FETCH_TRANSACTION_LIST, resetTransactionList, requestTransactionList, CREATE_TRANSACTION, createTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSACTION_LIST", function() { return FETCH_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTransactionList", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTransactionList", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TRANSACTION", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransaction", function() { return createTransaction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../11/api-redux-pack/createActions */ "./src/11/api-redux-pack/createActions.js");

//import Api from '../Api';
 //11-4-1-3. 액션 함수 수정하기

var _createActions = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__["default"])('transactions'),
    collection = _createActions.collection,
    create = _createActions.create,
    reset = _createActions.reset;

var FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
var resetTransactionList = reset;
var PAGE_SIZE = 10;
function requestTransactionList(params) {
  var _page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트했습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.'
    }
  };
  /*
    return{
        type: FETCH_TRANSACTION_LIST,
        promise: Api.get('/transactions',{ 
            params: {
                ...params,
                _page,
                _limit: PAGE_SIZE,
            },
         }),
        //11-1-4-1. meta에 오류 메시지 포함하기
        meta: {
            pageNumber: _page,
            pageSize: PAGE_SIZE,
            notification: {
                success: '거래 목록을 최신 정보로 업데이트했습니다.',
                error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
            },
        },
    };
    */

  return collection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
    _page: _page,
    _limit: PAGE_SIZE
  }), meta);
}
var CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';
function createTransaction(data, onComplete) {
  var meta = {
    onSuccess: onComplete,
    notification: {
      success: '거래가 성공적으로 완료되었습니다.'
    }
  };
  /*
    return {
        type: CREATE_TRANSACTION,
        promise: Api.post('/transactions',data),
        meta: {
            onSuccess: onComplete,
            notification: {
                success: '거래가 성공적으로 완료되었습니다',
            }
        },
    };
    */

  return create(data, {}, meta);
}

/***/ }),

/***/ "./src/08/actions/userActions.js":
/*!***************************************!*\
  !*** ./src/08/actions/userActions.js ***!
  \***************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createActions */ "./src/11/api-redux-pack/createActions.js");
//11-5. 회원 가입 기능 추가하며 마무리하기
///11-5-2. 회원가입 액션 추가하기


var _createActions = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__["default"])('users'),
    create = _createActions.create;

function createUser(data, onComplete) {
  return create(data, {}, {
    notification: {
      success: '회원 가입이 성공적으로 완료되었습니다.'
    },
    onSuccess: onComplete
  });
}

/***/ }),

/***/ "./src/08/components/AppLayout.jsx":
/*!*****************************************!*\
  !*** ./src/08/components/AppLayout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../doit-ui/withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _AppNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AppNav */ "./src/08/components/AppNav.jsx");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\AppLayout.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-1. 앱 전체 화면 구성하기
///08-3-1-2. AppLayout 컴포넌트 만들기

/*
    AppLayout 컴포넌트는 AppNav 컴포넌트의 높이만큼 margin을 지정하여 출력하고, 본문은 자식 프로퍼티를 출력한다. 자식 프로퍼티에는 이후 만들게 될 상단 정보 화면과 하당 정보 화면이 출력될 예정이다.
*/





var AppLayout = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppLayout, _PureComponent);

  var _super = _createSuper(AppLayout);

  function AppLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AppLayout);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          styles = _this$props.styles;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AppNav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.body), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }), children));
    }
  }]);

  return AppLayout;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

AppLayout.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStylesPropTypes"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function (_ref) {
  var unit = _ref.unit;
  return {
    wrapper: {
      marginTop: _AppNav__WEBPACK_IMPORTED_MODULE_11__["HEIGHT"]
    },
    body: {
      padding: unit * 4
    }
  };
})(AppLayout));

/***/ }),

/***/ "./src/08/components/AppNav.jsx":
/*!**************************************!*\
  !*** ./src/08/components/AppNav.jsx ***!
  \**************************************/
/*! exports provided: HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../doit-ui/withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/modals */ "./src/08/constants/modals.js");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\AppNav.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-1. 앱 전체 화면 구성하기

/*
    앱 전체 화면은 AppLayout 컴포넌트, 상단 메뉴는 AppNav 컴포넌트, 본문은 자식 프로퍼티로 구성한다. 
*/
///08-3-1-1. AppNav 컴포넌트 만들기

/*
    AppNav 컴포넌트에는 가상 코인 거래소의 이름과 회원 가입 버튼이 있다.
*/


 //import Text from '../../doit-ui/Text';
//11-5-8. 회원가입 버튼 추가하기




var HEIGHT = 64;

var AppNav = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppNav, _PureComponent);

  var _super = _createSuper(AppNav);

  function AppNav() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AppNav);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppNav, [{
    key: "render",
    value: function render() {
      var _this = this;

      var styles = this.props.styles;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_9__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_9__["css"])(styles.container), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], {
        level: 3,
        inverse: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, "\uB450\uC787 \uCF54\uC778 \uAC70\uB798\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_12__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, function (_ref) {
        var openModal = _ref.openModal;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
          inverse: true,
          bold: true,
          large: true,
          onPress: function onPress() {
            return openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_13__["REGISTER_USER_MODAL"]);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }
        }, "\uD68C\uC6D0\uAC00\uC785");
      })));
    }
  }]);

  return AppNav;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

AppNav.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_9__["withStylesPropTypes"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(function (_ref2) {
  var color = _ref2.color,
      depth = _ref2.depth,
      unit = _ref2.unit;
  return {
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, depth.level1, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      postition: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: HEIGHT - 4,
      backgroundColor: color.primary
    }),
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: unit * 2,
      paddingRight: unit * 2
    }
  };
})(AppNav));

/***/ }),

/***/ "./src/08/components/Notification.jsx":
/*!********************************************!*\
  !*** ./src/08/components/Notification.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _doit_ui_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../doit-ui/Toast */ "./src/doit-ui/Toast.jsx");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\Notification.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//10-4. 미들웨어로 알림 메시지 띄우기

/*
    데이터 컴포넌트는 transaction 리듀서에서 알림과 깊은 관련이 있는 스토어 데이터만을 참조하여 Notification 컴포넌트와 연결되도록 구성되어 있다.

    여기서 많은 불편함이 생기는데 첫째, transaction 리듀서에 알림에 대한 데이터를 추가하고 이를 개발자가 인지하고 관리해야 하며, 둘째 trnasaction 이외의 데이터를 추가하며 리듀서의 일관성이 무너진다.

    여기서는 '서버 처리에 대한 알림 메시지'를 공통으로 처리하는 액션과 리듀서를 분리하여 만들어 보고 이후 미들웨어를 사용하여 알림을 자동으로 출력하는 기능을 추가한다.
*/
///10-4-1. 알림 액션과 리듀서 분리하기
///10-4-1-3. 데이터 컴포넌트 만들기




var Notification = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Notification, _PureComponent);

  var _super = _createSuper(Notification);

  function Notification() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Notification);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Notification, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showMessage = _this$props.showMessage,
          message = _this$props.message,
          warning = _this$props.warning;
      return showMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Toast__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: message,
        warning: warning,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 27
        }
      });
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Notification.propTypes = {
  showMessage: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  warning: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/08/components/main/TradeCoinPage.jsx":
/*!**************************************************!*\
  !*** ./src/08/components/main/TradeCoinPage.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../doit-ui/Spacing */ "./src/doit-ui/Spacing.jsx");
/* harmony import */ var _doit_ui_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../doit-ui/Input */ "./src/doit-ui/Input.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../doit-ui/Form */ "./src/doit-ui/Form.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.jsx");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\TradeCoinPage.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//10-5. 코인 거래 알림 효과 추가하며 마무리하기

/*
    코인 거래 기능에 오류 메시지 뿐 아니라 코인 거래 처리 과정을 알려주는 메시지를 알림창에 표시한ㄷ. 
*/
///10-5-1. 코인 거래 처리 과정 메시지 알림창에 표시하기
////10-5-1-2. 액션 함수로 호출하기










var TradeCoinPage = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TradeCoinPage, _PureComponent);

  var _super = _createSuper(TradeCoinPage);

  function TradeCoinPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TradeCoinPage);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TradeCoinPage, [{
    key: "handleSubmit",
    value: function handleSubmit(values, closeModal) {
      var _this$props = this.props,
          name = _this$props.name,
          code = _this$props.code,
          createTransaction = _this$props.createTransaction;

      var formValues = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
        code: code,
        name: name
      });

      createTransaction(formValues, closeModal);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          price = _this$props2.price,
          type = _this$props2.type,
          loading = _this$props2.loading;
      var typeName = type === 'sell' ? '판매' : '구매';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_16__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }
      }, function (_ref) {
        var closeModal = _ref.closeModal;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onSubmit: function onSubmit(values) {
            return _this2.handleSubmit(values, closeModal);
          },
          initValues: {
            currentPrice: price
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }
        }, function (_ref2) {
          var onChange = _ref2.onChange,
              values = _ref2.values;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            horizontal: 4,
            vertical: 8,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
            xlarge: true,
            bold: true,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }
          }, name, " ", typeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            bottom: 2,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
            name: "currentPrice",
            label: "\uAE08\uC561",
            value: values['currentPrice'],
            onChange: onChange,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            bottom: 2,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
            name: "amount",
            label: "\uC218\uB7C9",
            value: values['amount'],
            onChange: onChange,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 21
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_14__["default"], {
            spacingBetween: 1,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            primary: true,
            disabled: loading,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 21
            }
          }, loading ? '거래 처리중' : typeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            onPress: closeModal,
            disabled: loading,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 21
            }
          }, "\uCDE8\uC18C")));
        }));
      });
    }
  }]);

  return TradeCoinPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

TradeCoinPage.propTypes = {
  createTransaction: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TradeCoinPage);
/*
    코드를 보면 createTransaction() 액션 함수의 두 번째 인자로 closeModal을 전달한다. closeModal 콜백 함수가 10-5-1-1에서 작성된 createTransaction() 함수의 두 번째 인자로 전달되는 것이다.

    그러면 거래 요청이 완료된 후 closeModal() 콜백 함수가 호출되면서 모달이 자동으로 닫히게 된다.
*/

/***/ }),

/***/ "./src/08/components/signup/RegisterPage.jsx":
/*!***************************************************!*\
  !*** ./src/08/components/signup/RegisterPage.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../doit-ui/Spacing */ "./src/doit-ui/Spacing.jsx");
/* harmony import */ var _doit_ui_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../doit-ui/Input */ "./src/doit-ui/Input.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../doit-ui/Form */ "./src/doit-ui/Form.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.jsx");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\signup\\RegisterPage.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//11-5. 회원 가입 기능 추가하며 마무리하기
///11-5-5. RegisterPage 컴포넌트 생성하기

/*
    회원 강비 화면을 구성하는 컴포넌트를 생성한다. 가입 화면은 모달창을 사용하여 출력할 예정이며, 코드는 TradeCoinPage 컴포넌트와 유사한 구조이므로 해당 코드를 참조하여 작성한다.
*/










var RegisterPage = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RegisterPage, _PureComponent);

  var _super = _createSuper(RegisterPage);

  function RegisterPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegisterPage);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegisterPage, [{
    key: "handleSubmit",
    value: function handleSubmit(values, closeModal) {
      var _this$props = this.props,
          name = _this$props.name,
          createUser = _this$props.createUser;

      var formValues = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
        name: name
      });

      createUser(formValues, closeModal);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var loading = this.props.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_16__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, function (_ref) {
        var closeModal = _ref.closeModal;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onSubmit: function onSubmit(values) {
            return _this2.handleSubmit(values, closeModal);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }
        }, function (_ref2) {
          var onChange = _ref2.onChange;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            horizontal: 4,
            vertical: 8,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
            xlarge: true,
            bold: true,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 19
            }
          }, "\uD68C\uC6D0 \uB4F1\uB85D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            bottom: 2,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
            name: "userId",
            label: "\uC0AC\uC6A9\uC790 \uC544\uC774\uB514",
            onChange: onChange,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 21
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            bottom: 2,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
            name: "totalAmount",
            type: "number",
            label: "\uC790\uC0B0 \uCD1D\uC561",
            onChange: onChange,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_14__["default"], {
            spacingBetween: 1,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            type: "submit",
            primary: true,
            disabled: loading,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 21
            }
          }, "\uD68C\uC6D0 \uB4F1\uB85D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            onPress: closeModal,
            disabled: loading,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }
          }, "\uCDE8\uC18C")));
        }));
      });
    }
  }]);

  return RegisterPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

RegisterPage.propTypes = {
  createUser: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ }),

/***/ "./src/08/constants/modals.js":
/*!************************************!*\
  !*** ./src/08/constants/modals.js ***!
  \************************************/
/*! exports provided: TRADE_COIN_MODAL, REGISTER_USER_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_COIN_MODAL", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_MODAL", function() { return REGISTER_USER_MODAL; });
//09-5. 가상 코인 거래 기능 추가하며 마무리하기

/*
    Modal 공용 컴포넌트를 추가한 다음 모달에 포함될 화면 컴포넌트를 구성한다.
*/
//09-5-1. 모달 창으로 거래화면 만들기

/*
    모달 본문에 사용될 거래 화면은 구매, 판매용으로 총 2개가 필요하다.
*/
///09-5-1-2. 모달 공급자 컴포넌트 생성하기
var TRADE_COIN_MODAL = 'modal/TRADE_COIN_MODAL';
var REGISTER_USER_MODAL = 'modal/REGISTER_USER_MODAL'; //11-5-7. 모달 본문 추가하기

/***/ }),

/***/ "./src/08/containers/NotificationContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/08/containers/NotificationContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Notification */ "./src/08/components/Notification.jsx");



var mapStateToProps = function mapStateToProps(state) {
  var _state$notification = state.notification,
      showMessage = _state$notification.showMessage,
      message = _state$notification.message,
      warning = _state$notification.warning;
  return {
    showMessage: showMessage,
    message: message,
    warning: warning
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_Notification__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/containers/RouterStateContainer.jsx":
/*!****************************************************!*\
  !*** ./src/08/containers/RouterStateContainer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/routerActions */ "./src/08/actions/routerActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose/compose */ "recompose/compose");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_11__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//12-3. 주소와 리덕스 연결하기
//12-3-1. 가상 코인 거래소의 검색 결과 화면 공유하기
//12-3-1-3. 주소 동기화 컴포넌트 작성하기







var RouterState = /*#__PURE__*/function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(RouterState, _React$PureComponent);

  var _super = _createSuper(RouterState);

  function RouterState() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RouterState);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RouterState, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          setLocation = _this$props.setLocation,
          location = _this$props.location;
      setLocation(location);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          setLocation = _this$props2.setLocation,
          location = _this$props2.location;
      setLocation(location);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return RouterState;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

RouterState.propTypes = {
  setLocation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  location: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_11___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, {
  setLocation: _actions_routerActions__WEBPACK_IMPORTED_MODULE_9__["setLocation"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(RouterState));
/*
const Connection = (connect(null, { setLocation }))(RouterState);
export default <BrowserRouter>{ withRouter(Connection) }</BrowserRouter>;
*/

/***/ }),

/***/ "./src/08/containers/main/TradeCoinPageContainer.jsx":
/*!***********************************************************!*\
  !*** ./src/08/containers/main/TradeCoinPageContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TradeCoinPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TradeCoinPage */ "./src/08/components/main/TradeCoinPage.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");
//10-5. 코인 거래 알림 효과 추가하며 마무리하기

/*
    코인 거래 기능에 오류 메시지 뿐 아니라 코인 거래 처리 과정을 알려주는 메시지를 알림창에 표시한ㄷ. 
*/
///10-5-1. 코인 거래 처리 과정 메시지 알림창에 표시하기
////10-5-1-3. 데이터 컴포넌트 교체하고 모달 본문 변경하기

 //import { createTransaction } from '../../actions/transactionActions';



var mapStateToProps = function mapStateToProps(state) {
  var loadingState = state.transactions.loadingState;
  var loading = loadingState[_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["CREATE_TRANSACTION"]];
  return {
    loading: loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, {
  createTransaction: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["createTransaction"]
})(_components_main_TradeCoinPage__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/containers/signup/RegisterPageContainer.jsx":
/*!************************************************************!*\
  !*** ./src/08/containers/signup/RegisterPageContainer.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_signup_RegisterPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/signup/RegisterPage */ "./src/08/components/signup/RegisterPage.jsx");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/userActions */ "./src/08/actions/userActions.js");
/* harmony import */ var _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/userSelectors */ "./src/08/selectors/userSelectors.js");
//11-5. 회원 가입 기능 추가하며 마무리하기
///11-5-6. RegisterPageContainer 컴포넌트 생성하기

/*
    스토어 데이터와 액션을 RegisterPage 컴포넌트와 연결하기 위해 데이터 컴포넌트를 추가한다.
*/




/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(function (state) {
  return {
    loading: Object(_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_3__["userCreateLoadingStateSelector"])(state)
  };
}, {
  createUser: _actions_userActions__WEBPACK_IMPORTED_MODULE_2__["createUser"]
})(_components_signup_RegisterPage__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/middlewares/notificationEffects.js":
/*!***************************************************!*\
  !*** ./src/08/middlewares/notificationEffects.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/08/actions/notificationActions.js");
/* harmony import */ var _02_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../02/debounce */ "./src/02/debounce.js");
//10-4. 미들웨어로 알림 메시지 띄우기

/*
    데이터 컴포넌트는 transaction 리듀서에서 알림과 깊은 관련이 있는 스토어 데이터만을 참조하여 Notification 컴포넌트와 연결되도록 구성되어 있다.

    여기서 많은 불편함이 생기는데 첫째, transaction 리듀서에 알림에 대한 데이터를 추가하고 이를 개발자가 인지하고 관리해야 하며, 둘째 trnasaction 이외의 데이터를 추가하며 리듀서의 일관성이 무너진다.

    여기서는 '서버 처리에 대한 알림 메시지'를 공통으로 처리하는 액션과 리듀서를 분리하여 만들어 보고 이후 미들웨어를 사용하여 알림을 자동으로 출력하는 기능을 추가한다.
*/
//10-4-2. 미들웨어로 알림 자동으로 표시하기

/*
    미들웨어의 감시 기능을 활용하면 액션에 액션을 추가할 수 있다.

    예를 들어 SET_ERROR 액션이 실행된 이후 SET_ERROR 액션이 맞다면 알람 액션 함수(showMessage)를 실행하도록 만들 수 있다.

    즉, 이 과정을 통해 거래 목록 요청 액션 함수에서 알림 액션 함수를 생략할 수 있다.

    이런식으로 특정 상황에서 추가 액션을 호출하는 미들웨어를 효과 미들웨어라고 한다.
*/
//10-4-2-1. NotificationEffects 미들웨어 생성하기

/*
    SET_ERROR 액션을 미들웨어에서 처리하도록 구성한다. 이 구성을 통해 추가 액션을 실행할 수 있게 한다.
*/
// import { SET_ERROR } from '../actions/transactionActions';
 // import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';



var debounceRunner = Object(_02_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (action) {
  return action();
}, 4000); // let prevHideCaller;

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (nextRunner) {
    return function (action) {
      var type = action.type,
          payload = action.payload,
          meta = action.meta;
      var result = nextRunner(action);

      if (meta && meta.notification) {
        var _meta$notification = meta.notification,
            success = _meta$notification.success,
            error = _meta$notification.error;

        if (success && meta[redux_pack__WEBPACK_IMPORTED_MODULE_0__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE"].SUCCESS) {
          store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(success));
        } else if (error && meta[redux_pack__WEBPACK_IMPORTED_MODULE_0__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE"].FAILURE) {
          var _ref = payload.response ? payload.response.data : {},
              errorMessage = _ref.errorMessage;

          store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(errorMessage || error, true));
        } // } else if (type === SET_ERROR) {
        //   const { errorMessage } = payload;
        //   store.dispatch(showMessage(errorMessage, true));
        // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
        //   const { errorMessage } = payload.response.data;
        //   store.dispatch(showMessage(errorMessage, true));
        // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
        //   const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
        //   store.dispatch(showMessage(message));

      } else if (type === _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["SHOW_NOTIFICATION"]) {
        var hide = function hide() {
          return store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["hideMessage"])());
        }; // setTimeout(hide, 4000);


        debounceRunner(hide);
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./src/08/middlewares/routerEffects.js":
/*!*********************************************!*\
  !*** ./src/08/middlewares/routerEffects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/routerActions */ "./src/08/actions/routerActions.js");
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");



//12-3. 주소와 리덕스 연결하기
//12-3-3. 주소 변경 액션과 검색 목록 요청 연동하기

/*
    검색 입력 항목 미들웨어를 추가하여 검색 이벽 항목 변경 액션(SET_FILTER)이 호출될 때마다 자동으로 거래 검색 목록을 요청을 하도록 구성했다.

    이제 만약 주소 동기화 액션이 검색 필터 변경 액션을 호출한다면 연쇄적으로 검색 결과를 요청할 수 있다.

    주소 동기화 액션(SET_LOCATION)이 검색 입력 항목 변경 액션(SET_FILTER)을 호출하기만 한다면 자동으로 검색 입력 항목 설정과 함께 검색 요청도 실행되도록 처리할 수 있다.
*/
///12-3-3-1. routerEffetcs 미들웨어 추가하기



function parse(qs) {
  var queryString = qs.substr(1);
  var chunks = queryString.split('&');
  return chunks.map(function (chunk) {
    return chunk.split('=');
  }).reduce(function (result, _ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, result, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
  }, {});
}

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (nextRunner) {
    return function (action) {
      var type = action.type,
          payload = action.payload;
      var result = nextRunner(action);

      if (type === _actions_routerActions__WEBPACK_IMPORTED_MODULE_3__["SET_LOCATION"]) {
        //주소 동기화 액션일 때만 작동.
        var _payload$location = payload.location,
            pathname = _payload$location.pathname,
            search = _payload$location.search;

        if (pathname === '/') {
          //MainPage에서만 검색 목록을 포함하기 때문에 경로가 일치할 때만 작동.
          store.dispatch(Object(_actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_4__["setFilter"])(parse(search)));
        }
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./src/08/middlewares/searchFilterEffects.js":
/*!***************************************************!*\
  !*** ./src/08/middlewares/searchFilterEffects.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");
//12-3. 주소와 리덕스 연결하기
//12-3-2. 검색 필터 미들웨어 추가하기
///12-3-2-1. 미들웨어 추가하기


/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (nextRunner) {
    return function (action) {
      var type = action.type,
          payload = action.payload;
      var result = nextRunner(action);

      if (type === _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]) {
        var _ref = payload || {},
            params = _ref.params;

        store.dispatch(Object(_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["resetTransactionList"])());
        store.dispatch(Object(_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["requestTransactionList"])(params));
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./src/08/reducers/index.js":
/*!**********************************!*\
  !*** ./src/08/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _notificationReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationReducer */ "./src/08/reducers/notificationReducer.js");
/* harmony import */ var _searchFilterReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchFilterReducer */ "./src/08/reducers/searchFilterReducer.js");
/* harmony import */ var _11_api_redux_pack_createReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../11/api-redux-pack/createReducers */ "./src/11/api-redux-pack/createReducers.js");
/* harmony import */ var _routerReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routerReducer */ "./src/08/reducers/routerReducer.js");

//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/
//09-3-1. 액션, 리듀서, 스토어 만들기
///09-3-1-3. 리듀서 index.js 파일에 리듀서 추가하기
//import transactions from './transactionsReducer';


 //11-4-2-2. 리듀서 설정 파일 수정하기


var apiReducers = Object(_11_api_redux_pack_createReducers__WEBPACK_IMPORTED_MODULE_3__["default"])('transactions', 'users'); //11-5-3. users 리듀서 추가하기

/* harmony default export */ __webpack_exports__["default"] = (Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, apiReducers, {
  notification: _notificationReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  //10-4-1-2. 스토어에 알람 리듀서 추가한다.
  searchFilter: _searchFilterReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  router: _routerReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./src/08/reducers/notificationReducer.js":
/*!************************************************!*\
  !*** ./src/08/reducers/notificationReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/08/actions/notificationActions.js");

//10-4. 미들웨어로 알림 메시지 띄우기

/*
    데이터 컴포넌트는 transaction 리듀서에서 알림과 깊은 관련이 있는 스토어 데이터만을 참조하여 Notification 컴포넌트와 연결되도록 구성되어 있다.

    여기서 많은 불편함이 생기는데 첫째, transaction 리듀서에 알림에 대한 데이터를 추가하고 이를 개발자가 인지하고 관리해야 하며, 둘째 trnasaction 이외의 데이터를 추가하며 리듀서의 일관성이 무너진다.

    여기서는 '서버 처리에 대한 알림 메시지'를 공통으로 처리하는 액션과 리듀서를 분리하여 만들어 보고 이후 미들웨어를 사용하여 알림을 자동으로 출력하는 기능을 추가한다.
*/
///10-4-1. 알림 액션과 리듀서 분리하기
///10-4-1-1. 알림 액션과 리듀서 생성하기

var initState = {
  message: '',
  warning: false,
  showMessage: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["SHOW_NOTIFICATION"]:
      {
        var message = payload.message,
            warning = payload.warning;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          showMessage: true,
          message: message,
          warning: warning
        });
      }

    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_1__["HIDE_NOTIFICATION"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          message: '',
          showMessage: false
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/08/reducers/routerReducer.js":
/*!******************************************!*\
  !*** ./src/08/reducers/routerReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/routerActions */ "./src/08/actions/routerActions.js");

//12-3. 주소와 리덕스 연결하기
//12-3-1. 가상 코인 거래소의 검색 결과 화면 공유하기
//12-3-1-2. 리듀서 추가하기

var initState = {
  location: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions_routerActions__WEBPACK_IMPORTED_MODULE_1__["SET_LOCATION"]:
      {
        var location = payload.location;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          location: location
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/08/reducers/searchFilterReducer.js":
/*!************************************************!*\
  !*** ./src/08/reducers/searchFilterReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");

//11-2. 대용량 데이터 효율적으로 처리하기
///11-2-3. 리덕스에 검색 정보 저장하기

/*
    리덕스에 검색 정보를 저장하려면 검색 정보를 위한 액션과 리듀서를 새로 추가하고, 데이터 컴포넌트와 화면 컴포넌트를 구성해야 한다.
*/
////11-2-3-1. 액션과 리듀서 추가하기

var initState = {
  params: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_1__["SET_FILTER"]:
      {
        var params = payload.params;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          params: params
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/08/selectors/userSelectors.js":
/*!*******************************************!*\
  !*** ./src/08/selectors/userSelectors.js ***!
  \*******************************************/
/*! exports provided: userCreateLoadingStateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCreateLoadingStateSelector", function() { return userCreateLoadingStateSelector; });
/* harmony import */ var _11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createSelectors */ "./src/11/api-redux-pack/createSelectors.js");
//11-5. 회원 가입 기능 추가하며 마무리하기
///11-5-4. userSelectors 추가하기


var _createSelectors = Object(_11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__["default"])('users'),
    userCreateLoadingStateSelector = _createSelectors.createLoadingStateSelector;



/***/ }),

/***/ "./src/08/store/configureStore.js":
/*!****************************************!*\
  !*** ./src/08/store/configureStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/08/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middlewares_notificationEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middlewares/notificationEffects */ "./src/08/middlewares/notificationEffects.js");
/* harmony import */ var _middlewares_searchFilterEffects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middlewares/searchFilterEffects */ "./src/08/middlewares/searchFilterEffects.js");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _middlewares_routerEffects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middlewares/routerEffects */ "./src/08/middlewares/routerEffects.js");
//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/
//09-3-1. 액션, 리듀서, 스토어 만들기
///09-3-1-4. 스토어 설정 파일 추가하기
 //import { SET_TRANSACTION_LIST } from '../actions/transactionActions';




 //import transactionEffects from '../middlewares/transactionEffects';

 //12-3-2-2. 스토어 설정 파일에 라우터 미들웨어를 추가한다.
//10-1-1-2. 간단한 미들웨어 만들어 적용하기

/*
const customMiddleware = store => nextRunner => action => {
    console.log('미들웨어에 전달된 액션 개체',action);//nextRunner() 함수 이전에 실행할 작업 1
    console.log('리듀서 실행 전',store.getState());//nextRunner() 함수 이전에 실행할 작업 2
    const result = nextRunner(action);
    console.log('리듀서 실행 후',store.getState());
    return result;
}
*/
//10-1-2. 미들웨어로 액션 변형하기
///10-1-2-1. 특정 액션의 payload 값 변경하기

/*
    액션의 type이 SET_TRANSACTION_LIST 인경우 payload의 값을 변경하는 미들웨어이다.
*/

/*
const customMiddleware1 = () => nextRunner => action => {
    if(action.type === SET_TRANSACTION_LIST){
        return nextRunner({
            ...action,
            payload: [{
                id:0,
                code:'DOIT',
                name:'두잇코인(DOIT)',
                totalPrice: 1000000000,
                currentPrice: 25000,
                datetime: '현재시간',
            }],
        });
    }

    return nextRunner(action);
}
*/

/*
const customMiddleware2 = store => nextRunner => action => {
    console.log('미들웨어2 전달된 액션 개체',action);
    console.log('미들웨어2 실행 전',store.getState());
    const result = nextRunner(action);
    console.log('미들웨어2 살행 후',store.getState());
    return result;
}
*/
//11-1. redux-pack 미들웨어로 비동기 제어하기
///11-1-1. 가상 코인 거래소에 redux-pack 적용하기
////11-1-1-1. redux-pack 스토어 설정 파일에 추가하기



/* harmony default export */ __webpack_exports__["default"] = (function (initStates) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]), initStates, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_pack__WEBPACK_IMPORTED_MODULE_6__["middleware"], _middlewares_searchFilterEffects__WEBPACK_IMPORTED_MODULE_5__["default"], _middlewares_notificationEffects__WEBPACK_IMPORTED_MODULE_4__["default"], _middlewares_routerEffects__WEBPACK_IMPORTED_MODULE_7__["default"])));
});

/***/ }),

/***/ "./src/11/api-redux-pack/actionTypes.js":
/*!**********************************************!*\
  !*** ./src/11/api-redux-pack/actionTypes.js ***!
  \**********************************************/
/*! exports provided: FETCH_LIST, FETCH, UPDATE, CREATE, RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LIST", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE", function() { return CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/
//11-4-1. 액션 모듈화하기
///11-4-1-1. 파일에 액션 type 저장하기
var FETCH_LIST = 'api-redux-pack/FETCH_LIST';
var FETCH = 'api-redux-pack/FETCH';
var UPDATE = 'api-redux-pack/UPDATE';
var CREATE = 'api-redux-pack/CREATE';
var RESET = 'api-redux-pack/RESET';

/***/ }),

/***/ "./src/11/api-redux-pack/createActions.js":
/*!************************************************!*\
  !*** ./src/11/api-redux-pack/createActions.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/11/api-redux-pack/actionTypes.js");
/* harmony import */ var _08_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../08/Api */ "./src/08/Api.js");

//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/
//11-4-1. 액션 모듈화하기
///11-4-1-2. 액션 묶음 함수 생성하기

/*
    액션 묶음 함수는 커링 패턴을 사용하여 데이터 서버에 요청할 자료를 인자로 전달받아 액션 함수를 반환하도록 구성한다. redux-pack의 비동기 항목과 데이터 호출 함수(Api)를 합쳐 구성해 본다.
*/


/* harmony default export */ __webpack_exports__["default"] = (function (resourceName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  return {
    collection: function collection() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"],
        promise: _08_Api__WEBPACK_IMPORTED_MODULE_2__["default"].get(resourceName, {
          params: params
        }),
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    member: function member(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"],
        promise: _08_Api__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(resourceName, "/").concat(id), {
          params: params
        }),
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    create: function create(data) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"],
        promise: _08_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post(resourceName, data, {
          params: params
        }),
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    update: function update(id, data) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"],
        promise: _08_Api__WEBPACK_IMPORTED_MODULE_2__["default"].put("".concat(resourceName, "/").concat(id), data, {
          params: params
        }),
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    reset: function reset() {
      return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESET"],
        meta: {
          resourceName: resourceName
        }
      };
    }
  };
});
/*
    meta 항목에 추가된 resourceNamem, key를 주목하라. 이 항목은 리듀서에서 참조할 예쩡이다. resourceName은 스토어 데이터 항목을 각각 리듀서에 분리하여 저장하기 위해 추가했다.
*/

/***/ }),

/***/ "./src/11/api-redux-pack/createReducers.js":
/*!*************************************************!*\
  !*** ./src/11/api-redux-pack/createReducers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./src/11/api-redux-pack/actionTypes.js");


//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/
//11-4-2. 리듀서 모듈화하기
////11-4-2-1. 리듀서 생성 함수 생성하기


/* harmony default export */ __webpack_exports__["default"] = (function () {
  for (var _len = arguments.length, reducerNames = new Array(_len), _key = 0; _key < _len; _key++) {
    reducerNames[_key] = arguments[_key];
  }

  return reducerNames.reduce(function (apiReducers, name) {
    var _loadingState, _errorState;

    var initState = {
      ids: [],
      entities: {},
      loadingState: (_loadingState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_loadingState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["CREATE"], "/").concat(name), false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_loadingState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE"], "/").concat(name), false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_loadingState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH"], "/").concat(name), false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_loadingState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH_LIST"], "/").concat(name), false), _loadingState),
      errorState: (_errorState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_errorState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["CREATE"], "/").concat(name), false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_errorState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE"], "/").concat(name), false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_errorState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH"], "/").concat(name), false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_errorState, "".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH_LIST"], "/").concat(name), false), _errorState),
      pagination: {},
      pages: {}
    };

    apiReducers[name] = function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var type = action.type,
          payload = action.payload,
          meta = action.meta;

      var _ref = meta || {},
          resourceName = _ref.resourceName,
          key = _ref.key;

      if (resourceName !== name) {
        return state;
      }

      switch (type) {
        case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CREATE"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH_LIST"]:
          {
            return Object(redux_pack__WEBPACK_IMPORTED_MODULE_2__["handle"])(state, action, {
              start: function start(prevState) {
                return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
                  loadingState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.loadingState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), true)),
                  errorState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.errorState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), false))
                });
              },
              success: function success(prevState) {
                var data = payload.data;

                if (type === _actionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH_LIST"]) {
                  var _ref2 = meta || {},
                      pageNumber = _ref2.pageNumber,
                      pageSize = _ref2.pageSize;

                  var ids = data.map(function (entity) {
                    return entity['id'];
                  });
                  var entities = data.reduce(function (finalEntities, entity) {
                    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, finalEntities, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, entity[key], entity));
                  }, {});
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
                    ids: ids,
                    entities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.entities, entities),
                    loadingState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.loadingState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), false)),
                    errorState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.errorState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), false)),
                    pagination: {
                      number: pageNumber,
                      size: pageSize
                    },
                    pages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.pages, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageNumber, ids))
                  });
                } else {
                  var id = data[key];
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
                    id: id,
                    entities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.entities, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, id, data)),
                    loadingState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.loadingState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), false)),
                    errorState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.errorState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), false))
                  });
                }
              },
              failure: function failure(prevState) {
                var _ref3 = payload.response ? payload.response.data : {},
                    errorMessage = _ref3.errorMessage;

                return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
                  loadingState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.loadingState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), false)),
                  errorState: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.errorState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(type, "/").concat(name), errorMessage || true))
                });
              }
            });
          }

        case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["RESET"]:
          return initState;

        default:
          return state;
      }
    };

    return apiReducers;
  }, {});
});

/***/ }),

/***/ "./src/11/api-redux-pack/createSelectors.js":
/*!**************************************************!*\
  !*** ./src/11/api-redux-pack/createSelectors.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/11/api-redux-pack/actionTypes.js");
//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/
///11-4-3. 셀렉터 모듈화하기
///11-4-3-1. 셀렉터 생성 함수 생성하기

/*
    셀렉터 함수 역시 커링 패턴을 사용하여 셀렉터 생성 함수를 만든다. paginationSelector, updateLoadingStateSelector, memberLoadingStateSelector가 추가된 점 이외에는 transactionSelectors와 유사한 구조이다.
*/


function createSelectors(resourceName) {
  var resourceSelector = function resourceSelector(state) {
    return state[resourceName];
  };

  var entitiesSelector = function entitiesSelector(state) {
    return resourceSelector(state).entities;
  };

  var collectionSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([resourceSelector], function (_ref) {
    var ids = _ref.ids,
        entities = _ref.entities;
    return ids.map(function (id) {
      return entities[id];
    });
  });

  var loadingStateSelector = function loadingStateSelector(state) {
    return resourceSelector(state).loadingState;
  };

  var errorStateSelector = function errorStateSelector(state) {
    return resourceSelector(state).errorState;
  };

  var collectionLoadingStateSelector = function collectionLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"], "/").concat(resourceName)];
  };

  var createLoadingStateSelector = function createLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"], "/").concat(resourceName)];
  };

  var updateLoadingStateSelector = function updateLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"], "/").concat(resourceName)];
  };

  var memberLoadingStateSelector = function memberLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"], "/").concat(resourceName)];
  };

  var collectionErrorStateSelector = function collectionErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"], "/").concat(resourceName)];
  };

  var createErrorStateSelector = function createErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"], "/").concat(resourceName)];
  };

  var updateErrorStateSelector = function updateErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"], "/").concat(resourceName)];
  };

  var memberErrorStateSelector = function memberErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"], "/").concat(resourceName)];
  };

  var paginationSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceSelector, function (_ref2) {
    var pagination = _ref2.pagination;
    return {
      number: pagination.number || 0,
      size: pagination.size
    };
  });
  return {
    entitiesSelector: entitiesSelector,
    collectionSelector: collectionSelector,
    collectionLoadingStateSelector: collectionLoadingStateSelector,
    collectionErrorStateSelector: collectionErrorStateSelector,
    createLoadingStateSelector: createLoadingStateSelector,
    createErrorStateSelector: createErrorStateSelector,
    updateLoadingStateSelector: updateLoadingStateSelector,
    updateErrorStateSelector: updateErrorStateSelector,
    memberLoadingStateSelector: memberLoadingStateSelector,
    memberErrorStateSelector: memberErrorStateSelector,
    paginationSelector: paginationSelector
  };
}

/***/ }),

/***/ "./src/doit-ui/Button.jsx":
/*!********************************!*\
  !*** ./src/doit-ui/Button.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Button.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-1. Button 컴포넌트 추가하기




var Button = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Button);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          styles = _this$props.styles,
          large = _this$props.large,
          xlarge = _this$props.xlarge,
          small = _this$props.small,
          xsmall = _this$props.xsmall,
          primary = _this$props.primary,
          secondary = _this$props.secondary,
          type = _this$props.type,
          onPress = _this$props.onPress;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, disabled && styles.disabled), {
        disabled: disabled,
        onClick: onPress,
        type: type,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      }), children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  onPress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
Button.defaultProps = {
  onPress: function onPress() {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function (_ref) {
  var color = _ref.color,
      size = _ref.size,
      unit = _ref.unit,
      depth = _ref.depth,
      fontWeight = _ref.fontWeight;
  return {
    default: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, depth.level1, {
      border: 1,
      borderStyle: 'solid',
      borderColor: color.default,
      borderRadius: unit,
      color: color.default,
      fontSize: size.md,
      fontWeight: fontWeight.bold,
      padding: unit * 2,
      paddingLeft: unit * 4,
      paddingRight: unit * 4,
      outline: 0,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: color.grayLight
      },
      ':focus': {
        boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)'
      }
    }),
    xlarge: {
      fontSize: size.xg,
      padding: unit * 2.5
    },
    large: {
      fontSize: size.lg,
      padding: unit * 2.5
    },
    small: {
      fontSize: size.sm,
      padding: unit * 1.5
    },
    xsmall: {
      fontSize: size.xs,
      padding: unit
    },
    primary: {
      borderColor: color.primary,
      color: color.white,
      backgroundColor: color.primary,
      ':hover': {
        backgroundColor: color.primaryDark
      }
    },
    secondary: {
      borderColor: color.secondary,
      color: color.secondary
    },
    disabled: {
      borderColor: color.grayDark,
      color: color.grayLight,
      cursor: 'default',
      opacity: 0.5,
      backgroundColor: color.gray,
      ':hover': {
        backgroundColor: color.gray
      }
    }
  };
})(Button));

/***/ }),

/***/ "./src/doit-ui/Card.jsx":
/*!******************************!*\
  !*** ./src/doit-ui/Card.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Spacing */ "./src/doit-ui/Spacing.jsx");









var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Card.jsx";
var _excluded = ["children", "styles"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-4. Card 컴포넌트 만들기

/*
    코인 거래소의 버튼이나 검색창이 들어가는 모든 곳에 Card 컴포넌트를 사용한다. Card 컴포넌트는 둥근 모서리의 박스에 입체감을 주기 위한 그림자를 포함한다.

    코드를 보면 borderRadius가 둥근 모서리를, depth.level1이 그림자를 표현한 부분이다.
*/





var Card = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Card);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          styles = _this$props.styles,
          spacingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Spacing__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, spacingProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), children));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Card.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Spacing__WEBPACK_IMPORTED_MODULE_12__["propTypes"], _withStyles__WEBPACK_IMPORTED_MODULE_11__["withStylesPropTypes"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(function (_ref) {
  var depth = _ref.depth,
      unit = _ref.unit,
      color = _ref.color;
  return {
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, depth.level1, {
      borderRadius: unit,
      backgroundColor: color.white,
      display: 'flex',
      overflow: 'hidden',
      marginBottom: unit * 4
    })
  };
})(Card));

/***/ }),

/***/ "./src/doit-ui/Form.jsx":
/*!******************************!*\
  !*** ./src/doit-ui/Form.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);










var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Form.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-5. Form 컴포넌트 만들기

/*
    Form 컴포넌트 역시 공용 컴포넌트로 추가하여 입력 항목을 처리한다. 생명주기 함수인 getDerivedStateFromProps() 함수를 추가하여 initValues 프로퍼티로 state값을 동기화한다.
*/



var _React$createContext = react__WEBPACK_IMPORTED_MODULE_10___default.a.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var FormProvider = /*#__PURE__*/function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FormProvider, _React$PureComponent);

  var _super = _createSuper(FormProvider);

  function FormProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FormProvider);

    _this = _super.call(this, props);
    _this.state = {};
    _this.reset = _this.reset.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.validate = _this.validate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FormProvider, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this$state = this.state,
          values = _this$state.values,
          errors = _this$state.errors;
      e.preventDefault();

      if (_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(errors).length === 0) {
        this.props.onSubmit(values);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(name, updatedValue) {
      var _this2 = this;

      this.setState(function (_ref) {
        var values = _ref.values;
        return {
          values: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, updatedValue))
        };
      }, function () {
        return _this2.validate(_this2.state.values);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        values: {}
      });
    }
  }, {
    key: "validate",
    value: function validate(values) {
      var validate = this.props.validate;

      if (!validate) {
        return;
      }

      var errors = this.props.validate(values);
      this.setState({
        errors: errors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          values = _this$state2.values,
          errors = _this$state2.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Provider, {
        value: {
          errors: errors,
          values: values,
          onChange: this.onChange,
          reset: this.reset
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, this.props.children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, prevState) {
      var initValues = _ref2.initValues;
      var values = initValues !== prevState.initValues ? initValues : prevState.values;
      return {
        initValues: initValues,
        values: values,
        errors: {}
      };
    }
  }]);

  return FormProvider;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(FormProvider, "Consumer", Consumer);

FormProvider.propTypes = {
  validate: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};
FormProvider.defaultProps = {
  initValues: {},
  validate: function validate() {
    return {};
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FormProvider);

/***/ }),

/***/ "./src/doit-ui/Heading.jsx":
/*!*********************************!*\
  !*** ./src/doit-ui/Heading.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");







var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Heading.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-2. Heading 컴포넌트 만들기

/*
    Heading 컴포넌트는 level을 프로퍼티로 받아 머리글의 크기를 다르게 출력할 때 사용한다.
*/



var headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var Heading = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Heading, _PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Heading);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          inverse = _this$props.inverse,
          level = _this$props.level,
          styles = _this$props.styles;
      var HeadingTag = headingTags[level - 1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeadingTag, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__["css"])(styles.default, styles["level".concat(level)], inverse && styles.inverse), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }
      }), children);
    }
  }]);

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Heading.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  level: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
Heading.defaultProps = {
  level: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(function (_ref) {
  var color = _ref.color,
      fontWeight = _ref.fontWeight,
      size = _ref.size,
      lineHeight = _ref.lineHeight,
      unit = _ref.unit;
  return {
    default: {
      lineHeight: lineHeight.lg,
      fontWeight: fontWeight.bold
    },
    inverse: {
      color: color.white
    },
    level1: {
      fontSize: size.h1,
      marginTop: unit * 2,
      marginBottom: unit * 4
    },
    level2: {
      fontSize: size.h2,
      marginTop: unit * 2,
      marginBottom: unit * 4
    },
    level3: {
      fontSize: size.h3,
      marginTop: unit * 1.5,
      marginBottom: unit * 3
    },
    level4: {
      fontSize: size.xg,
      marginTop: unit,
      marginBottom: unit * 2
    },
    level5: {
      fontSize: size.md,
      marginTop: unit,
      marginBottom: unit * 2
    },
    level6: {
      fontSize: size.md,
      marginTop: unit,
      marginBottom: unit
    }
  };
})(Heading));

/***/ }),

/***/ "./src/doit-ui/InlineList.jsx":
/*!************************************!*\
  !*** ./src/doit-ui/InlineList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Theme */ "./src/doit-ui/Theme.js");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\InlineList.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-2. 플렉스 박스로 가로 배치를 위한 레이아웃 컴포넌트 만들기
///08-2-2-2. 가로 배치를 위한 컴포넌트 작성하기

/*
    가로 배치를 위한 InlineList 컴포넌트를 작성한다. InlineList 컴포넌트의 하위 요소들은 모두 가로로 배치된다.
*/





var InlineList = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InlineList, _PureComponent);

  var _super = _createSuper(InlineList);

  function InlineList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, InlineList);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(InlineList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          align = _this$props.align,
          children = _this$props.children,
          styles = _this$props.styles,
          spacingBetween = _this$props.spacingBetween,
          verticalAlign = _this$props.verticalAlign;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.wrapper, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight, verticalAlign === 'top' && styles.verticalAlignTop, verticalAlign === 'bottom' && styles.verticalAlignBottom), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(children, function (child) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])({
          marginRight: spacingBetween * _Theme__WEBPACK_IMPORTED_MODULE_11__["unit"]
        }), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }
        }), child);
      }));
    }
  }]);

  return InlineList;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

InlineList.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _withStyles__WEBPACK_IMPORTED_MODULE_10__["withStylesPropTypes"], {
  align: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['left', 'center', 'right']),
  verticalAlign: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['top', 'middle', 'bottom']),
  spacingBetween: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node
});
InlineList.defaultProps = {
  spacingBetween: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function () {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flext-start',
      alignItems: 'center'
    },
    alignCenter: {
      justifyContent: 'center'
    },
    alignRight: {
      justifyContent: 'flex-end'
    },
    verticalAlignTop: {
      alignItems: 'flex-start'
    },
    verticalAlignBottom: {
      alignItems: 'flex-end'
    }
  };
})(InlineList));

/***/ }),

/***/ "./src/doit-ui/Input.jsx":
/*!*******************************!*\
  !*** ./src/doit-ui/Input.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");









var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Input.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-2. Input 컴포넌트 추가하기




var Input = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Input, _PureComponent);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Input);

    _this = _super.call(this, props);
    _this.setRef = _this.setRef.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Input, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _this$props = this.props,
          name = _this$props.name,
          onChange = _this$props.onChange;

      if (onChange) {
        onChange(name, e.target.value);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.ref.focus();
      }
    }
  }, {
    key: "setRef",
    value: function setRef(ref) {
      this.ref = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          errorMessage = _this$props2.errorMessage,
          label = _this$props2.label,
          value = _this$props2.value,
          name = _this$props2.name,
          type = _this$props2.type,
          styles = _this$props2.styles,
          large = _this$props2.large,
          xlarge = _this$props2.xlarge,
          small = _this$props2.small,
          xsmall = _this$props2.xsmall;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("fieldset", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        htmlFor: "input_".concat(name)
      }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.label, errorMessage && styles.errorLabel), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }), errorMessage || label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.input, errorMessage && styles.error, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
        id: "input_".concat(name),
        ref: this.setRef,
        type: type,
        onChange: this.handleChange,
        value: value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      })));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Input.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _withStyles__WEBPACK_IMPORTED_MODULE_11__["withStylesPropTypes"], {
  type: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['text', 'number', 'price']),
  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
});
Input.defaultProps = {
  onChange: function onChange() {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(function (_ref) {
  var depth = _ref.depth,
      unit = _ref.unit,
      color = _ref.color,
      size = _ref.size,
      lineHeight = _ref.lineHeight;
  return {
    wrapper: {
      border: 0,
      padding: 0,
      position: 'relative'
    },
    label: {
      display: 'block',
      fontSize: size.xs,
      top: 2,
      left: unit * 2,
      cursor: 'pointer'
    },
    input: {
      marginTop: 2,
      fontSize: size.md,
      lineHeight: lineHeight.md,
      padding: unit * 1.5,
      border: 1,
      borderColor: color.primary,
      borderStyle: 'solid',
      borderRadius: 4,
      outline: 0,
      ':focus': {
        boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)'
      }
    },
    xlarge: {
      fontSize: size.xg
    },
    large: {
      fontSize: size.lg
    },
    small: {
      fontSize: size.sm,
      padding: unit
    },
    errorLabel: {
      color: color.error
    },
    error: {
      borderColor: color.error
    }
  };
})(Input));

/***/ }),

/***/ "./src/doit-ui/Modal/context.jsx":
/*!***************************************!*\
  !*** ./src/doit-ui/Modal/context.jsx ***!
  \***************************************/
/*! exports provided: Provider, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-6. Modal 컴포넌트 만들기
///08-2-6-2. 공급자와 소비자 생성하기


var _React$createContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;



/***/ }),

/***/ "./src/doit-ui/Modal/create.jsx":
/*!**************************************!*\
  !*** ./src/doit-ui/Modal/create.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createModalProvider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal */ "./src/doit-ui/Modal/index.jsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./src/doit-ui/Modal/context.jsx");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Modal\\create.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-6. Modal 컴포넌트 만들기
///08-2-6-3. ModalProvider 생성 함수 추가하기

 // 혹은 import Modal from './index';


function createModalProvider() {
  var ContentMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/function (_PureComponent) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModalProvider, _PureComponent);

    var _super = _createSuper(ModalProvider);

    function ModalProvider(props) {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalProvider);

      _this = _super.call(this, props);
      _this.state = {
        showModal: false
      };
      _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      _this.handleOpen = _this.handleOpen.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ModalProvider, [{
      key: "handleOpen",
      value: function handleOpen(contentId, modalProps) {
        this.contentId = contentId;
        this.modalProps = modalProps;
        this.setState({
          showModal: true
        });
      }
    }, {
      key: "handleClose",
      value: function handleClose() {
        this.setState({
          showModal: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        var showModal = this.state.showModal;
        var ModalContent = ContentMap[this.contentId];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
          value: {
            openModal: this.handleOpen,
            closeModal: this.handleClose
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 9
          }
        }, children, showModal && ModalContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalContent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.modalProps, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }
        }))));
      }
    }]);

    return ModalProvider;
  }(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);
}

/***/ }),

/***/ "./src/doit-ui/Modal/index.jsx":
/*!*************************************!*\
  !*** ./src/doit-ui/Modal/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Card */ "./src/doit-ui/Card.jsx");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../withStyles */ "./src/doit-ui/withStyles.js");







var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Modal\\index.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-6. Modal 컴포넌트 만들기
///08-2-6-1. Card 컴포넌트와 함께 둥근 모서리 표현하기





var Modal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _PureComponent);

  var _super = _createSuper(Modal);

  function Modal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Modal);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.overlay), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.container), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        vertical: 2,
        horizontal: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, children))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Modal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function () {
  return {
    overlay: {
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    wrapper: {
      verticalAlign: 'middle'
    },
    container: {
      margin: '40px auto 0px',
      width: 700
    }
  };
})(Modal));

/***/ }),

/***/ "./src/doit-ui/Spacing.jsx":
/*!*********************************!*\
  !*** ./src/doit-ui/Spacing.jsx ***!
  \*********************************/
/*! exports provided: propTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Theme */ "./src/doit-ui/Theme.js");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Spacing.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-3. 공간을 만들어주는 컴포넌트 만들기

/*
    보통 웹 개발 과정에서 요소와 요소 사이에 공간이 필요하면 스타일로 해결한다.

    하지만 리액트 개발에서는 공간을 위한 컴포넌트를 프로퍼티로 전달하여 컴포넌트와 컴포넌트 사이의 공간을 규격화하여 구성할 수 있다.
*/
///08-2-3-1. 공간을 만들어주는 컴포넌트 만들기




var propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  bottm: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number
};

var Spacing = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Spacing, _PureComponent);

  var _super = _createSuper(Spacing);

  function Spacing() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Spacing);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Spacing, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          top = _this$props.top,
          left = _this$props.left,
          right = _this$props.right,
          bottom = _this$props.bottom,
          vertical = _this$props.vertical,
          horizontal = _this$props.horizontal; //Spacing 컴포넌트에 간격을 따로 설정하는 top, bottom, left, right 프로퍼티 또는 상하, 좌우 간격을 동일하게 설정하는 horizontal, vertical 프로퍼티를 computedTop, computedBottm, computedLeft, computedRight에 저장한다.

      var computedTop = top ? top : vertical;
      var computedBottom = bottom ? bottom : vertical;
      var computedLeft = left ? left : horizontal;
      var computedRight = right ? right : horizontal;

      var computedStyles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
        flex: 1
      }, computedTop && {
        marginTop: computedTop * _Theme__WEBPACK_IMPORTED_MODULE_11__["unit"]
      }, computedBottom && {
        marginBottom: computedBottom * _Theme__WEBPACK_IMPORTED_MODULE_11__["unit"]
      }, computedLeft && {
        marginLeft: computedLeft * _Theme__WEBPACK_IMPORTED_MODULE_11__["unit"]
      }, computedRight && {
        marginRight: computedRight * _Theme__WEBPACK_IMPORTED_MODULE_11__["unit"]
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(computedStyles), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 16
        }
      }), children);
    }
  }]);

  return Spacing;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Spacing.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Spacing);

/***/ }),

/***/ "./src/doit-ui/Text.jsx":
/*!******************************!*\
  !*** ./src/doit-ui/Text.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");







var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Text.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-1. Text 컴포넌트 만들기




var Text = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Text);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          bold = _this$props.bold,
          light = _this$props.light,
          styles = _this$props.styles,
          large = _this$props.large,
          xlarge = _this$props.xlarge,
          small = _this$props.small,
          xsmall = _this$props.xsmall,
          primary = _this$props.primary,
          secondary = _this$props.secondary,
          inverse = _this$props.inverse;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }), children);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Text.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  bold: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  light: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(function (_ref) {
  var color = _ref.color,
      fontWeight = _ref.fontWeight,
      size = _ref.size,
      lineHeight = _ref.lineHeight;
  return {
    default: {
      color: color.default,
      fontSize: size.md,
      lineHeight: lineHeight.md,
      fontWeight: fontWeight.normal
    },
    xlarge: {
      fontSize: size.xg,
      lineHeight: lineHeight.xg
    },
    large: {
      fontSize: size.lg,
      lineHeight: lineHeight.lg
    },
    small: {
      fontSize: size.sm,
      lineHeight: lineHeight.sm
    },
    xsmall: {
      fontSize: size.xs,
      lineHeight: lineHeight.xs
    },
    primary: {
      color: color.primary
    },
    secondary: {
      color: color.secondary
    },
    light: {
      fontWeight: fontWeight.light
    },
    bold: {
      fontWeight: fontWeight.bold
    },
    inverse: {
      color: color.white
    }
  };
})(Text));

/***/ }),

/***/ "./src/doit-ui/Theme.js":
/*!******************************!*\
  !*** ./src/doit-ui/Theme.js ***!
  \******************************/
/*! exports provided: LARGE_AND_ABOVE, unit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGE_AND_ABOVE", function() { return LARGE_AND_ABOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


var _breakpoints, _responsive;

//08. 가상 코인 거래소 공용 컴포넌트 만들기
//08-1. 가상 코인 거래소 살펴보기
///08-1-1. 코인 거래소 전체 화면 설계하기

/*
    코인 거래소 전체 화면은 가장 먼저 화면 구성 컴포넌트가 있고 이는 크게 '상단 메뉴'와' 본문'으로 구분된다.

    '본문'은 다시 '상단 정보', '하단 정보', '처리 정보'로 나뉜다. '하단 정보'는 '검색 입력'과 '결과 정보'로 나뉜다. 

    상단메뉴, 본문, 상단정보, 하단 정보, 검색 입력, 결과 정보, 처리 정보 순으로 거래소를 완성하낟. 이때 반복 사용할 컴포넌트는 공용 컴포넌트로 구성한다.

    공용 컴포넌트는 UI 라이브러리를 사용하면 빠르게 구현할 수 있다. 여기서는 공용 컴포넌트를 직접 구현한다.
*/
///08-1-2. 가상 코인 거래소 요구 사항 분석하기
//// 상단 메뉴 분석하기

/*
    홈: 홈으로 돌아오기
    회원가입: 회원 가입 모달 띄우기
*/
//// 상단 정보 분석하기

/*
    코인 목록 보기: 가상 코인 목록 데이털르 받아 리스트로 보여주기
    구매하기: [구매] 버튼을 누르면 구매 관련 모달 띄우기
    판매하기: [판매] 버튼을 누르면 판매 관련 모달 띄우기
*/
//// 하단 정보 분석하기

/*
    검색 결과 목록 보기: 검색 결과 목록을 보여주기
    검색 요청 하기: 서버에 데이터 요청하기
    검색어 입려하기: 검색어 입력
*/
//// 처리 정보 분석하기

/*
    화면 알림: 서버에 처리 정보 결과 요청하기
    처리 결과 표시: 서버에 전달받은 메시지 표시하기,  xx초 뒤에 메시지 사라지게 하기
*/
//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-1. 공용 컴포넌트 스타일 파일 만들기
///08-2-1-1. 스타일 전체의 색상 및 규격을 관리하기 위한 Theme.js 파일 만들기
var LARGE_AND_ABOVE = 'largeAndAbove';
var BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
};
var breakpoints = (_breakpoints = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_breakpoints, BREAKPOINT_NAMES.LARGE, 1128), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_breakpoints, BREAKPOINT_NAMES.MEDIUM, 744), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_breakpoints, BREAKPOINT_NAMES.SMALL, 327), _breakpoints);
var responsive = (_responsive = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_responsive, LARGE_AND_ABOVE, "@media (min-width: ".concat(breakpoints[BREAKPOINT_NAMES.LARGE], "px)")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_responsive, BREAKPOINT_NAMES.SMALL, "@media (max-width: ".concat(breakpoints[BREAKPOINT_NAMES.MEDIUM - 1], "px)")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_responsive, "print", "@media print"), _responsive);
var unit = 4;
/* harmony default export */ __webpack_exports__["default"] = ({
  // 색상
  color: {
    primary: '#2196F3',
    // 주 색상
    primaryDark: '#1976D2',
    secondary: '#009688',
    // 부 색상
    secondaryDark: '#00796b',
    white: '#FFFFFF',
    gray: '#9e9e9e',
    grayLight: '#eeeeee',
    grayDark: '#616161',
    border: 'rgba(0, 0, 0, .15)',
    default: '#333333',
    // 기본 문자 색상
    error: '#e51c23' // 오류 색상

  },
  // 폰트 사이즈
  size: {
    h1: 48,
    h2: 36,
    h3: 28,
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10
  },
  lineHeight: {
    xg: 1.6,
    lg: 1.6,
    md: 1.5,
    sm: 1.4,
    xs: 1.4
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    light: 300
  },
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)'
    },
    level2: {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
    },
    level3: {
      boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)'
    }
  },
  // 길이 단위
  unit: unit,
  // 반응형 미디어 속성
  responsive: responsive
});

/***/ }),

/***/ "./src/doit-ui/Toast.jsx":
/*!*******************************!*\
  !*** ./src/doit-ui/Toast.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Spacing */ "./src/doit-ui/Spacing.jsx");








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Toast.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-6. Toast 컴포넌트 만들기

/*
    Toast 컴포넌트는 실행 결과를 알려주는 역할을 한다. 초록색이나 빨간색 배경으로 메세지의 특성을 표현했다.
*/



 //import Text from './Text';

var Toast = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Toast, _PureComponent);

  var _super = _createSuper(Toast);

  function Toast() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Toast);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Toast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          styles = _this$props.styles,
          warning = _this$props.warning;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.overlay), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.wrapper, warning && styles.warning), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
        vertical: 4,
        horizontal: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, message)));
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Toast.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _withStyles__WEBPACK_IMPORTED_MODULE_10__["withStylesPropTypes"], {
  warning: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function (_ref) {
  var depth = _ref.depth,
      unit = _ref.unit,
      color = _ref.color;
  return {
    overlay: {
      postition: 'fixed',
      bottom: 0,
      right: 0,
      margin: unit * 4
    },
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, depth.level1, {
      borderRadius: unit,
      backgroundColor: color.secondary,
      padding: unit * 2,
      marginBottom: unit * 4
    }),
    warning: {
      backgroundColor: color.error
    }
  };
})(Toast));

/***/ }),

/***/ "./src/doit-ui/withStyles.js":
/*!***********************************!*\
  !*** ./src/doit-ui/withStyles.js ***!
  \***********************************/
/*! exports provided: css, withStyles, withStylesPropTypes, ThemedStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-with-styles/lib/ThemedStyleSheet */ "react-with-styles/lib/ThemedStyleSheet");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ThemedStyleSheet", function() { return react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-with-styles-interface-aphrodite */ "react-with-styles-interface-aphrodite");
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-with-styles */ "react-with-styles");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStylesPropTypes", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"]; });

/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Theme */ "./src/doit-ui/Theme.js");
//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-1. 공용 컴포넌트 스타일 파일 만들기
///08-2-1-2. withStyles 하이어오더 컴포넌트 만들기




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default.a);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_Theme__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-with-styles":
/*!************************************!*\
  !*** external "react-with-styles" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ "react-with-styles-interface-aphrodite":
/*!********************************************************!*\
  !*** external "react-with-styles-interface-aphrodite" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite");

/***/ }),

/***/ "react-with-styles/lib/ThemedStyleSheet":
/*!*********************************************************!*\
  !*** external "react-with-styles/lib/ThemedStyleSheet" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles/lib/ThemedStyleSheet");

/***/ }),

/***/ "recompose/compose":
/*!************************************!*\
  !*** external "recompose/compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-pack":
/*!*****************************!*\
  !*** external "redux-pack" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-pack");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map