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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
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
/* harmony import */ var _src_08_components_main_MainPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/08/components/main/MainPage */ "./src/08/components/main/MainPage.jsx");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\pages\\index.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var IndexDocument = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexDocument, _PureComponent);

  var _super = _createSuper(IndexDocument);

  function IndexDocument() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IndexDocument);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(IndexDocument, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_08_components_main_MainPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 12
        }
      });
    }
  }]);

  return IndexDocument;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexDocument);

/***/ }),

/***/ "./src/05/withLoading.jsx":
/*!********************************!*\
  !*** ./src/05/withLoading.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\05\\withLoading.jsx";
var _excluded = ["isLoading"];
//05-2. 하이어오더 컴포넌트 기초 개념 공부하기
//4. 하이어오더 컴포넌트 기능 구현하기
//4-1. 로딩 표시 화면 하이어오더 컴포넌트 만들기

/*

export default function withLoading(WrappedComponent, loadingMessage = '로딩 중'){
    const { displayName, name: componentName } = WrappedComponent;//WrappedComponent의 displayName과 name을 추출한다.
    const WrappedComponentName = displayName || componentName;//displayName, name 순서로 이름을 할당한다.

    function WithLoading({ isLoading, ...otherProps }){
        //4-2. isLoading 프로퍼티 조건 추가하기
        //if(props.isLoading) return '로딩 중';

        //4-3. 필요한 프로퍼티만 구조 할당 표현식으로 추출하기
        if(isLoading) return loadingMessage;

        return(
            <WrappedComponent {...otherProps} />
        );
    };

    WithLoading.displayName = `withLoading(${WrappedComponentName})`;//withLoading()에 감싸 컴포넌트 이름을 표시한다.

    return WithLoading;
}

*/
//04-5. 다중 커링으로 하이어오더 컴포넌트 반환하기

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var loadingMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '로딩 중';
  return function withLoading(WrappedComponent) {
    //확장 컴포넌트에서 출력할 메시지를 전달받는 커링함수이다.
    var displayName = WrappedComponent.displayName,
        componentName = WrappedComponent.name;
    var WrappedComponentName = displayName || componentName;

    function WithLoading(_ref) {
      var isLoading = _ref.isLoading,
          otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

      if (isLoading) return loadingMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }));
    }

    ;
    WithLoading.displayName = "withLoading(".concat(WrappedComponentName, ")");
    return WithLoading;
  };
});

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

/***/ "./src/08/components/main/CoinDashlet.jsx":
/*!************************************************!*\
  !*** ./src/08/components/main/CoinDashlet.jsx ***!
  \************************************************/
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
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../doit-ui/Card */ "./src/doit-ui/Card.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/modals */ "./src/08/constants/modals.js");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\CoinDashlet.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-2. 상단 정보 화면 구성하기

/*
    상단 정보 화면은 CoinOverview 컴포넌트, CoinDashlet 컴포넌트로 구성한다. 각 컴포넌트는 공용 컴포넌트를 활용한다.

    또한 코인 동향에 배치할 CoinDashlet 컴포넌트는 가로로 배치한다.
*/
///08-3-2-1. CoinDashlet 컴포넌트 만들기










var CoinDashlet = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CoinDashlet, _PureComponent);

  var _super = _createSuper(CoinDashlet);

  function CoinDashlet() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoinDashlet);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoinDashlet, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          name = _this$props.name,
          priceLabel = _this$props.priceLabel;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_13__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, function (_ref) {
        var openModal = _ref.openModal;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          vertical: 4,
          horizontal: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }
        }, name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }
        }, priceLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_11__["default"], {
          spacingBetween: 1,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          primary: true,
          small: true,
          onPress: function onPress() {
            return openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_14__["TRADE_COIN_MODAL"], {
              type: 'buy',
              name: name,
              price: priceLabel
            });
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }
        }, "\uB9E4\uB3C4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          small: true,
          onPress: function onPress() {
            return openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_14__["TRADE_COIN_MODAL"], {
              type: 'sell',
              name: name,
              price: priceLabel
            });
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }
        }, "\uB9E4\uC218")));
      });
    }
  }]);

  return CoinDashlet;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

CoinDashlet.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  priceLabel: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CoinDashlet);

/***/ }),

/***/ "./src/08/components/main/CoinOverview.jsx":
/*!*************************************************!*\
  !*** ./src/08/components/main/CoinOverview.jsx ***!
  \*************************************************/
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
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _CoinDashlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CoinDashlet */ "./src/08/components/main/CoinDashlet.jsx");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\CoinOverview.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-2. 상단 정보 화면 구성하기

/*
    상단 정보 화면은 CoinOverview 컴포넌트, CoinDashlet 컴포넌트로 구성한다. 각 컴포넌트는 공용 컴포넌트를 활용한다.

    또한 코인 동향에 배치할 CoinDashlet 컴포넌트는 가로로 배치한다.
*/
///08-3-2-2. CoinOverview 컴포넌트 만들기

/*
    CoinOverview 컴포넌트에는 CoinDashlet 컴포넌트를 배치한다. 이때 InlineList 컴포넌트로 CoinDashlet 컴포넌트를 가로로 배치한다.
*/





var CoinOverview = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CoinOverview, _PureComponent);

  var _super = _createSuper(CoinOverview);

  function CoinOverview() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoinOverview);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoinOverview, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
        level: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, "\uCF54\uC778 \uB3D9\uD5A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CoinDashlet__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "\uBE44\uD2B8\uCF54\uC778",
        priceLabel: "4,216,000\uC6D0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CoinDashlet__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "\uC774\uB354\uB9AC\uC6C0",
        priceLabel: "216,000\uC6D0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CoinDashlet__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "\uB450\uC787\uCF54\uC778",
        priceLabel: "30,000\uC6D0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      })));
    }
  }]);

  return CoinOverview;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CoinOverview);

/***/ }),

/***/ "./src/08/components/main/MainPage.jsx":
/*!*********************************************!*\
  !*** ./src/08/components/main/MainPage.jsx ***!
  \*********************************************/
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
/* harmony import */ var _CoinOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CoinOverview */ "./src/08/components/main/CoinOverview.jsx");
/* harmony import */ var _containers_main_TransactionListContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../containers/main/TransactionListContainer */ "./src/08/containers/main/TransactionListContainer.jsx");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\MainPage.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-4. 본문 화면 구성하기

/*
    본문 화면은 MainPage 컴포넌트 앞에서 만든 앱 전체 화면, 상단 정보 화면, 하단 정보 화면을 배치한다.
*/
///08-3-4-1. MainPage 컴포넌트 구성하기

/*
    CoinOverview 컴포넌트와 TransactionList 컴포넌트를 React.Fragment 컴포넌트로 묶어 출력한다.
*/




var MainPage = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage, _PureComponent);

  var _super = _createSuper(MainPage);

  function MainPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainPage);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CoinOverview__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_containers_main_TransactionListContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }));
    }
  }]);

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/08/components/main/TransactionList.jsx":
/*!****************************************************!*\
  !*** ./src/08/components/main/TransactionList.jsx ***!
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
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/Card */ "./src/doit-ui/Card.jsx");
/* harmony import */ var _containers_main_TransactionSearchFilterContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/main/TransactionSearchFilterContainer */ "./src/08/containers/main/TransactionSearchFilterContainer.jsx");
/* harmony import */ var _TransactionTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransactionTable */ "./src/08/components/main/TransactionTable.jsx");
/* harmony import */ var _containers_main_TransactionPaginationContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../containers/main/TransactionPaginationContainer */ "./src/08/containers/main/TransactionPaginationContainer.jsx");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\TransactionList.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-3. 하단 정보 화면 구성하기

/*
    하단 정보 화면은 TransactionList 컴포넌트, TransactionSearchFilter 컴포넌트, TransactionTable 컴포넌트로 구성한다. 여기서도 공용 컴포넌트를 활용한다.
*/
///08-3-3-3. TransactionList 컴포넌트 만들기

/*
    TransactionList 컴포넌트에 이전 과정에서 작성한 컴포넌트를 Card 컴포넌트에 담아 배치한다. 검색 결과를 확인하기 위해, state에 임의의 transactions 배열을 정의하여 프로퍼티로 전달한다.

    여기서 편의상 state 초깃값은 constructor 밖에 선언했다.
*/


 //import Api from '../../Api';
///09-4-2-2. TransactionList 컴포넌트 수정하기
//import TransactionSearchFilter from './TransactionSearchFilter';



 ///10-2-3-5. 액션 함수로 호출하기

/*
    TransactionList 컴포넌트에서 Api 함수가 아닌 프로퍼티 requestTransactionList() 함수를 호출하도록 수정한다.

    componentDidMount() 함수에서 requestTransactionList() 함수를 호출하도록 코드를 변경한다.

    이렇게 바꿈으로서 서버 데이터 호출 정보를 포함했던 코드가 사라져 간결해졌으며, 거래 목록 정보를 요청하는 Api 코드를 액션에 담아 공유할 수도 있게 되었다.
*/

var TransactionList = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TransactionList, _PureComponent);

  var _super = _createSuper(TransactionList);

  function TransactionList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TransactionList);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TransactionList, [{
    key: "componentDidMount",
    value:
    /*
      componentDidMount(){
          //Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
          this.props.requestTransactionList();//
      }
      */
    function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          transactions = _this$props.transactions,
          loading = _this$props.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
        level: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, "\uAC70\uB798 \uD604\uD669"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        vertical: 4,
        horizontal: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_containers_main_TransactionSearchFilterContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TransactionTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
        transactions: transactions,
        isLoading: loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_containers_main_TransactionPaginationContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }));
    }
  }]);

  return TransactionList;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: function requestTransactionList() {}
};
/* harmony default export */ __webpack_exports__["default"] = (TransactionList);

/***/ }),

/***/ "./src/08/components/main/TransactionPagination.jsx":
/*!**********************************************************!*\
  !*** ./src/08/components/main/TransactionPagination.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");







var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\TransactionPagination.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//11-2. 대용량 데이터 효율적으로 처리하기
///11-2-2. 가상 코인 거래소에 페이지 이동 기능 추가하기
////11-2-2-1.  페이지 이동 버튼 컴포넌트 추가하기

/*
    다음은 페이지 이동 버튼을 출력하는 TransactionPagination 컴포넌트이다. [이전]과 [다음]버튼을 추가하여 각 버튼이 클릭될 때 현재 requestTransactionList 액션 함수에 해당 페이지 번호를 전달하도록 구현한다.
*/





var TransactionPagination = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TransactionPagination, _PureComponent);

  var _super = _createSuper(TransactionPagination);

  function TransactionPagination(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TransactionPagination);

    _this = _super.call(this, props);
    _this.handleNextPress = _this.handleNextPress.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handlePrevPress = _this.handlePrevPress.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TransactionPagination, [{
    key: "handleNextPress",
    value: function handleNextPress() {
      var _this$props = this.props,
          requestTransactionList = _this$props.requestTransactionList,
          pageNumber = _this$props.pageNumber,
          searchParams = _this$props.searchParams;
      requestTransactionList(searchParams, pageNumber + 1); //pageNumber 이전 번호의 페이지 목록을 요청한다.
    }
  }, {
    key: "handlePrevPress",
    value: function handlePrevPress() {
      var _this$props2 = this.props,
          requestTransactionList = _this$props2.requestTransactionList,
          pageNumber = _this$props2.pageNumber,
          searchParams = _this$props2.searchParams;
      requestTransactionList(searchParams, pageNumber - 1); //pageNumber 다음 번호의 페이지 목록을 요청한다.
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          loading = _this$props3.loading,
          pageNumber = _this$props3.pageNumber,
          hasNext = _this$props3.hasNext;
      var prevDisabled = loading || pageNumber <= 1; //로딩 상태이거나 첫 페이지인 경우 이전 버튼의 작동을 정지한다.

      var nextDisabled = loading || !hasNext; //로딩 상태이거나 마지막 페이지인 경우 다음 버튼의 작동을 정지한다.

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        secondary: true,
        disabled: prevDisabled,
        onPress: this.handlePrevPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, "\uC774\uC804"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        primary: true,
        disabled: nextDisabled,
        onPress: this.handleNextPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, "\uB2E4\uC74C"));
    }
  }]);

  return TransactionPagination;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

TransactionPagination.propTypes = {
  hasNext: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  pageNumber: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  reqeustTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TransactionPagination);

/***/ }),

/***/ "./src/08/components/main/TransactionSearchFilter.jsx":
/*!************************************************************!*\
  !*** ./src/08/components/main/TransactionSearchFilter.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../doit-ui/Input */ "./src/doit-ui/Input.jsx");
/* harmony import */ var _doit_ui_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../doit-ui/Form */ "./src/doit-ui/Form.jsx");
/* harmony import */ var _doit_ui_Select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../doit-ui/Select */ "./src/doit-ui/Select.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_19__);











var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\TransactionSearchFilter.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-3. 하단 정보 화면 구성하기

/*
    하단 정보 화면은 TransactionList 컴포넌트, TransactionSearchFilter 컴포넌트, TransactionTable 컴포넌트로 구성한다. 여기서도 공용 컴포넌트를 활용한다.
*/
///08-3-3-1. TransactionSearchFilter 컴포넌트 만들기

/*
    Input 컴포넌트를 사용하여 TransactionSearchFilter 컴포넌트를 만든다. Input 컴포넌트는 InlineList 컴포넌트를 사용하여 가로로 배치한다. 

    FormProvider 컴포넌트로 사용자의 입력을 받고, 입력된 값으 onSubmit 콜백 함수의 인자로 전달될 것이다. 여기서는 onSubmit 콜백 함수에 전송된 값을 확인하기 위해 conosle.log() 함수를 사용한다.
*/








 //import Api from '../../Api';
//import { propTypes } from '../../../doit-ui/Spacing';

var TransactionSearchFilter = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(TransactionSearchFilter, _PureComponent);

  var _super = _createSuper(TransactionSearchFilter);

  ///09-4-2-3. 리덕스 스토어 데이터 변경하기

  /*
        Form 컴포넌트에서 onSubmit 이벤트가 발생하면 this.handleSubmit() 함수가 호출되고 이어서 setTransactionList() 액션 함수가 호출될 것이다.
    */
  function TransactionSearchFilter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TransactionSearchFilter);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TransactionSearchFilter, [{
    key: "handleSubmit",
    value: function handleSubmit(params) {
      /*
          const { setTransactionList } = this.props;
          Api.get('./transactions', { params }).then(({ data }) => setTransactionList(data));
          */
      var history = this.props.history;

      var cleanedParmas = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(params).filter(function (entries) {
        return entries[1] !== '';
      }).reduce(function (obj, _ref) {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, obj, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, value));
      }, {});
      /*
          requestTransactionList(cleanedParmas);
          setFilter(cleanedParmas);
          */


      var queryString = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(cleanedParmas).map(function (_ref3) {
        var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return "".concat(key, "=").concat(value);
      }) //['code=DOIT', 'price=100']
      .join('&'); //'code=DOIT&price=100'


      history.push("/?".concat(queryString));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var initValues = this.props.initValues;
      return (
        /*#__PURE__*/
        //09-4-1. 검색요청 기능 완성하기
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_17__["default"], {
          onSubmit: this.handleSubmit,
          initValues: initValues,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Consumer, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 9
          }
        }, function (_ref5) {
          var onChange = _ref5.onChange,
              values = _ref5.values;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_13__["default"], {
            spacingBetween: 2,
            verticalAlign: "bottom",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_15__["default"], {
            xlarge: true,
            bold: true,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }
          }, "\uAC80\uC0C9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_18__["default"], {
            name: "code",
            label: "\uCF54\uC778 \uCF54\uB4DC",
            onChange: onChange,
            value: values['code'],
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_18__["Option"], {
            label: "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_18__["Option"], {
            label: "\uBE44\uD2B8\uCF54\uC778(BTX)",
            value: "BTX",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_18__["Option"], {
            label: "\uC774\uB354\uB9AC\uC6C0(ETH)",
            value: "ETH",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_18__["Option"], {
            label: "\uB450\uC787\uCF54\uC778(DOIT)",
            value: "DOIT",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
            name: "currentPrice_gte",
            label: "\uCD5C\uC18C \uAC70\uB798\uAC00",
            onChange: onChange,
            value: values['currentPrice_gte'],
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
            name: "currentPrice_lte",
            label: "\uCD5C\uB300 \uAC70\uB798\uAC00",
            onChange: onChange,
            value: values['currentPrice_lte'],
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
            type: "submit",
            primary: true,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }
          }, "\uAC80\uC0C9"));
        }))
      );
    }
  }]);

  return TransactionSearchFilter;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]); //TransactionSearchFilter.propTypes = { setFilter: PropTypes.func };
//TransactionSearchFilter.propTypes = { setTransactionList: PropTypes.func };


TransactionSearchFilter.propTypes = {
  requestTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
}; //export default TransactionSearchFilter;

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(TransactionSearchFilter));

/***/ }),

/***/ "./src/08/components/main/TransactionTable.jsx":
/*!*****************************************************!*\
  !*** ./src/08/components/main/TransactionTable.jsx ***!
  \*****************************************************/
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
/* harmony import */ var _doit_ui_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/Table */ "./src/doit-ui/Table.jsx");
/* harmony import */ var _doit_ui_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../doit-ui/TableRow */ "./src/doit-ui/TableRow.jsx");
/* harmony import */ var _doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../doit-ui/TableCell */ "./src/doit-ui/TableCell.jsx");
/* harmony import */ var _doit_ui_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../doit-ui/TableHead */ "./src/doit-ui/TableHead.jsx");
/* harmony import */ var _doit_ui_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../doit-ui/TableBody */ "./src/doit-ui/TableBody.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../doit-ui/Spacing */ "./src/doit-ui/Spacing.jsx");
/* harmony import */ var _05_withLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../05/withLoading */ "./src/05/withLoading.jsx");






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\08\\components\\main\\TransactionTable.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-3. 하단 정보 화면 구성하기

/*
    하단 정보 화면은 TransactionList 컴포넌트, TransactionSearchFilter 컴포넌트, TransactionTable 컴포넌트로 구성한다. 여기서도 공용 컴포넌트를 활용한다.
*/
///08-3-3-2. TransactionTable 컴포넌트 만들기

/*
    TransactionTable은 데이터 테이블 컴포넌트를 사용한다. transactions 프로퍼티에는 배열형 값이 들어있으므로 map() 함수를 이용하여 출력한다.
*/










var LoadingMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_14__["default"], {
  vertical: 4,
  horizontal: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_13__["default"], {
  large: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}, "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uB4E4\uC774\uACE0 \uC788\uC2B5\uB2C8\uB2E4."));

var TransactionTable = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TransactionTable, _PureComponent);

  var _super = _createSuper(TransactionTable);

  function TransactionTable() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TransactionTable);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TransactionTable, [{
    key: "render",
    value: function render() {
      var _this = this;

      var transactions = this.props.transactions;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, "\uCF54\uC778"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, "\uC2DC\uAC00 \uCD1D\uC561"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, "\uD604\uC7AC \uC2DC\uC138"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, "\uAC70\uB798 \uC2DC\uAC04"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableBody__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, transactions.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            totalPrice = _ref.totalPrice,
            currentPrice = _ref.currentPrice,
            datetime = _ref.datetime;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }
        }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          align: "center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }
        }, totalPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          align: "center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }
        }, currentPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          align: "right",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }
        }, datetime));
      })));
    }
  }]);

  return TransactionTable;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

TransactionTable.propTypes = {
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
    currentPrice: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
    datatime: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_05_withLoading__WEBPACK_IMPORTED_MODULE_15__["default"])(LoadingMessage)(TransactionTable));

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

/***/ "./src/08/containers/main/TransactionListContainer.jsx":
/*!*************************************************************!*\
  !*** ./src/08/containers/main/TransactionListContainer.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionList */ "./src/08/components/main/TransactionList.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");
/* harmony import */ var _selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/transactionSelectors */ "./src/08/selectors/transactionSelectors.js");
//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/
//09-3-2. 데이터 컴포넌트 추가하기
///09-3-2-1. 데이터 컴포넌트 작성하기

/*
    containers 폴더에 컴포넌트와 동일한 방법을 폴더를 추가하여 데이터 컴포넌트를 관리한다.
*/

 //import { setTransactionList } from '../../actions/transactionActions';
//import { requestTransactionList } from '../../actions/transactionActions';



/*
const mapStateToProps = state => {
    const { ids, entities, loadingState } = state.transactions;
    const loading = loadingState[FETCH_TRANSACTION_LIST];
    const transactions = ids.map(id => entities[id]);

    return { transactions, loading };
};
*/

var mapStateToProps = function mapStateToProps(state) {
  return {
    transactions: Object(_selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_3__["transactionListSelector"])(state),
    loading: Object(_selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_3__["transactionListLoadingStateSelector"])(state)
  };
};

var mapDispatchToProps = {
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["requestTransactionList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_main_TransactionList__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/containers/main/TransactionPaginationContainer.jsx":
/*!*******************************************************************!*\
  !*** ./src/08/containers/main/TransactionPaginationContainer.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionPagination */ "./src/08/components/main/TransactionPagination.jsx");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");
/* harmony import */ var _selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/transactionSelectors */ "./src/08/selectors/transactionSelectors.js");
//11-2. 대용량 데이터 효율적으로 처리하기
///11-2-2. 가상 코인 거래소에 페이지 이동 기능 추가하기
////11-2-2-2. TransactionPaginationContainer 컴포넌트 추가하기

/*
    TransactionPagination 컴포넌트에 전달할 액션과 스토어 데이터를 연결한다. 현재 페이저 정보와 목록 요청 액션을 데이터 컴포넌트에 추가한다.
*/





var mapStateToProps = function mapStateToProps(state) {
  var _state$transactions = state.transactions,
      pagination = _state$transactions.pagination,
      ids = _state$transactions.ids; //const loading = loadingState[FETCH_TRANSACTION_LIST];

  var number = pagination.number,
      size = pagination.size;
  return {
    searchParams: state.searchFilter.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    //결과 목록의 개수가 페이지 크기와 같을 경우 다음 페이지가 존재한다고 가정한다.
    loading: Object(_selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_3__["transactionListLoadingStateSelector"])(state)
  };
};

var mapDispatchToProps = {
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_2__["requestTransactionList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_main_TransactionPagination__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/containers/main/TransactionSearchFilterContainer.jsx":
/*!*********************************************************************!*\
  !*** ./src/08/containers/main/TransactionSearchFilterContainer.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionSearchFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionSearchFilter */ "./src/08/components/main/TransactionSearchFilter.jsx");
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");
//09-4. 가상 코인 거래소에 검색 기능 추가하기
//09-4-2. 검색 결괏값 리덕스에 전달하기

/*
    검색 결과 정보 컴포넌트는 리덕스 스토어와 연결된 하단 정보 컴포넌트로부터 데이터를 전달받기 때문에 스토어의 데이터가 변경되면 검색 결과 정보 컴포넌트에도 반영될 것이다.

    TransactionSearchFilter 컴포넌트를 연결하면 손쉽게 리덕스 스토어를 변경할 수 있다.
*/
///09-4-2-1. TransationSearchFilter 컴포넌트와 데이터 컴포넌트 연결하기

/*

import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setTransactionList } from '../../actions/transactionActions';

export default connect(null, { setTransactionList })(TransactionSearchFilter);

*/
///10-2-3-7. 데이터 컴포넌트의 액션 함수 교체하고 TransactionSearchFilter 컴포넌트에 적용하기

 //import { requestTransactionList } from '../../actions/transactionActions';
//import { requestTransactionList } from '../../actions/transactionPackActions';

 //11-2-3-2. 데이터 컴포넌트 수정하기

var mapStateToProps = function mapStateToProps(state) {
  return {
    initValues: state.searchFilter.params
  };
}; //export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, {
  setFilter: _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_2__["setFilter"]
})(_components_main_TransactionSearchFilter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/selectors/transactionSelectors.js":
/*!**************************************************!*\
  !*** ./src/08/selectors/transactionSelectors.js ***!
  \**************************************************/
/*! exports provided: transactionsSelector, transactionEntitiesSelector, transactionPagesSelector, transactionListSelector, transactionListLoadingStateSelector, transactionCreateLoadingStateSelector, paginationSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionsSelector", function() { return transactionsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionEntitiesSelector", function() { return transactionEntitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionPagesSelector", function() { return transactionPagesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionListSelector", function() { return transactionListSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionListLoadingStateSelector", function() { return transactionListLoadingStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionCreateLoadingStateSelector", function() { return transactionCreateLoadingStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginationSelector", function() { return paginationSelector; });
/* harmony import */ var _11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createSelectors */ "./src/11/api-redux-pack/createSelectors.js");
//11-3. 셀렉터로 스토어 데이터 변환하기

/*
    지금까지는 스토어 데이터를 컴포넌트에 전달하기 위해 mapStateToProps() 함수와 데이터 컴포넌트를 조합했다.
    
    그런데 이 방식은 스토어 데이터의 값을 변환하거나 추출하는 등의 작업이 필요해지면 mapStateToProps() 함수에 작성한 작업 코드를 전체적으로 수정해야 하기에 유지 보수 측면에서 불편한 점이 많다.
*/
///11-3-1. 셀렉터로 mapStateToProps() 함수의 반복 수정 작업 줄이기

/*
    셀렉터는 변경된 스토어 데이터를 화면에 필요한 형태로 변환 및 추출하는 함수를 말한다. 셀렉터를 도입하면 mapStateToProps() 함수의 스토어 데이터 변환 및 추출 작업을 간단히 대체할 수 있다.

    기본적으로 셀렉터는 스토어와 컴포넌트 사이에 위치하며, 셀렉터는 스토어 데이터의 값을 받아 변환, 추출 등의 작업을 한 다음 반환한 값을 컴포넌트로 넘겨준다.
*/
///11-3-2. 가상 코인 거래소에 셀렉터 도입하기
////11-3-2-1. 셀렉터 생성하기

/*
    목록을 요청할 때 사용한 데이터 컴포넌트들의 mapStateToProps() 함수에 있던 작업들을 셀렉터로 대체한다.
*/

/*
import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from "../actions/transactionPackActions";

import { createSelector } from "reselect";

export const transactionsSelector = state => state.transactions;//스토어 데이터에서 거래 정보를 추출하는 셀렉터

*/

/*
export const transactionListSelector = (state) => {
    const { ids, entities } = transactionsSelector(state);
    return ids.map(id => entities[id]);
};//그래프 DB 구조의 거래 목록 자료를 원본 배열로 변환하는 셀렉터이다.
*/
//11-3-3-1. 가상 코인 거래소에 리셀렉트 도입하기

/*
    리셀렉트는 기존의 셀렉터와 createSelector() 함수를 사용하여 셀렉터를 만든다.

    기존의 셀렉터에는 그래프 DB 구조를 원본 배열로 변환하는 데이터 변환 작업이 포함되어 있다. 이 작업은 mapStateToProps() 함수를 호출하면 매번 실행되기에 만약 변환 작업이 완료된 값을 저장할 수 있다면 이 문제를 해결 할 수 있다.

    변환 작업 이후 같은 입력값이 들어오면 변환 작업을 다시 진행하는 게 아니라 캐시에 저장되어 있는 값을 바로 사용한다. 리셀렉트는 실제로 이 과정을 담당하여 변환 작업에 필요한 시간을 줄여준다.
*/

/*
export const transactionListSelector = createSelector(
    [transactionsSelector],
    (transactions) => {
        const { ids, entities } = transactions;
        return ids.map(id => entities[id]);
    }
);
*/

/*
    위의 코드에서 createSelector() 함수의 첫 번째, 두 번째 인자에 주목한다. 첫 번째 인자는 셀렉터 배열이며, 두 번재 인자는 셀렉터가 반환한 값을 이용하는 변환 작업 함수이다.

    transactionsSelector가 반환하 값이 transactions에 매칭된다고 생각하면 이해하기 쉬울 것이다.
*/

/*
export const loadingStateSelector = state => transactionsSelector(state).loadingState;//거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터이다.

export const transactionListLoadingStateSelector = state => loadingStateSelector(state)[FETCH_TRANSACTION_LIST];//전체 거래 목록 요청의 로딩 상태만을 추출하는 셀렉터이다.

export const transactionCreateLoadingStateSelector = state => loadingStateSelector(state)[CREATE_TRANSACTION];//거래 생성 요청의 로딩 상태만을 추출하는 셀렉터
*/
//11-4-3-2. transactionSelectors 수정하기


var _createSelectors = Object(_11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__["default"])('transactions'),
    transactionsSelector = _createSelectors.resourceSelector,
    transactionEntitiesSelector = _createSelectors.entitiesSelector,
    transactionPagesSelector = _createSelectors.pagesSelector,
    transactionListSelector = _createSelectors.collectionSelector,
    transactionListLoadingStateSelector = _createSelectors.collectionLoadingStateSelector,
    transactionCreateLoadingStateSelector = _createSelectors.createLoadingStateSelector,
    paginationSelector = _createSelectors.paginationSelector;



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

/***/ "./src/doit-ui/Option.jsx":
/*!********************************!*\
  !*** ./src/doit-ui/Option.jsx ***!
  \********************************/
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






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Option.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-3. Option 컴포넌트 만들기

/*
    Option 컴포넌트를 Select 컴포넌트의 자식 컴포넌트로 출력하면 선택 항목을 구현할 수 있다.
*/

/*
    HTML의 option 엘리먼트는 문자 형태의 글만 출력하기 때문에 자식 프로퍼티를 사용하는 방법 보다는 단순한 글자 프로퍼티(label)를 받아 출력하도록 구성한다.
    label 프로퍼티없이 컴포넌트를 사용할 경우는 value 프로퍼티 값으로 글자를 출력하도록 한다.
*/



var Option = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Option);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          disabled = _this$props.disabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: value || '',
        disabled: disabled,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }
      }, label || value);
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Option.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./src/doit-ui/Select.jsx":
/*!********************************!*\
  !*** ./src/doit-ui/Select.jsx ***!
  \********************************/
/*! exports provided: Option, default */
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
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Option */ "./src/doit-ui/Option.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_12__["default"]; });










var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Select.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-4. Select 컴포넌트 만들기



 //Select 컴포넌트는 대부분 Option 컴포넌트를 포함하고 있으므로, Select 컴포넌트를 임포트할 때 Option 컴포넌트를 함께 참조할 수 있도록 Option 컴포넌트를 export 한다.



var Select = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Select);

    _this = _super.call(this, props);
    _this.setRef = _this.setRef.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      focused: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, [{
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
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
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          errorMessage = _this$props2.errorMessage,
          label = _this$props2.label,
          value = _this$props2.value,
          name = _this$props2.name,
          styles = _this$props2.styles,
          large = _this$props2.large,
          xlarge = _this$props2.xlarge,
          small = _this$props2.small,
          xsmall = _this$props2.xsmall;
      var focused = this.state.focused;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("fieldset", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        htmlFor: "input_".concat(name)
      }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.label, errorMessage && styles.errorLabel), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }), errorMessage || label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.placeholder, xsmall && styles.xsmallPadding, small && styles.smallPadding, large && styles.largePadding, xlarge && styles.xlargePadding, focused && styles.focus, errorMessage && styles.error), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_11__["css"])(styles.select, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
        disabled: disabled,
        id: "input_".concat(name),
        ref: this.setRef,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        value: value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.cloneElement(child, {
          disabled: disabled
        });
      }))));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Select.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _withStyles__WEBPACK_IMPORTED_MODULE_11__["withStylesPropTypes"], {
  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
});
Select.defaultProps = {
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
    placeholder: {
      marginTop: 2,
      border: 1,
      borderColor: color.primary,
      borderStyle: 'solid',
      borderRadius: 4,
      padding: unit * 1.5
    },
    focus: {
      boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)'
    },
    xlargePadding: {
      padding: unit * 2
    },
    largePadding: {
      padding: unit * 2
    },
    smallPadding: {
      padding: unit - 1
    },
    select: {
      fontSize: size.md,
      lineHeight: lineHeight.md,
      backgroundColor: color.white,
      border: 0,
      outline: 0,
      width: '100%'
    },
    xlarge: {
      fontSize: size.xg
    },
    large: {
      fontSize: size.lg
    },
    small: {
      fontSize: size.sm
    },
    errorLabel: {
      color: color.error
    },
    error: {
      borderColor: color.error
    }
  };
})(Select));

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

/***/ "./src/doit-ui/Table.jsx":
/*!*******************************!*\
  !*** ./src/doit-ui/Table.jsx ***!
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








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\Table.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-1. Table 컴포넌트 만들기




var Table = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Table, _PureComponent);

  var _super = _createSuper(Table);

  function Table() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Table);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.table), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }), children);
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Table.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _withStyles__WEBPACK_IMPORTED_MODULE_10__["withStylesPropTypes"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node.isRequired
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function (_ref) {
  var color = _ref.color,
      unit = _ref.unit;
  return {
    table: {
      borderCollapse: 'collapse',
      width: '100%'
    }
  };
})(Table));

/***/ }),

/***/ "./src/doit-ui/TableBody.jsx":
/*!***********************************!*\
  !*** ./src/doit-ui/TableBody.jsx ***!
  \***********************************/
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






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\TableBody.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-3. TableBody 컴포넌트 만들기

/*
    TableBody 컴포넌트도 TableHead 컴포넌트와 유사한 방법을 자식 프로퍼티를 사용합니다. baseline 프로퍼티를 이용하여 잣기 배열 중 마지막을 제외한 행은 밑줄을 표시하도록 한다.
*/

/*
    마지막 줄을 생략하는 이유는 미관상 테두리 줄이 겹치지 않도록 하기 위함이다. 행의 밑줄을 생략하지 않으면 행의 밑줄과 테이블의 밑줄이 겹치므로 2줄로 출력된다.
*/



var TableBody = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TableBody, _PureComponent);

  var _super = _createSuper(TableBody);

  function TableBody() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TableBody);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TableBody, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.toArray(children),
          length = _React$Children$toArr.length;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.map(children, function (child, index) {
        var baseline = index < length - 1 ? true : false;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
          baseline: baseline
        });
      }));
    }
  }]);

  return TableBody;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

TableBody.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ }),

/***/ "./src/doit-ui/TableCell.jsx":
/*!***********************************!*\
  !*** ./src/doit-ui/TableCell.jsx ***!
  \***********************************/
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








var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\TableCell.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-5. TableCell 컴포넌트 만들기

/*
    TabelCell 컴포넌트는 테이블의 열에 해당하므로 td 엘리먼트 또는 th 엘리먼트를 출력한다. isHeader 프로퍼티가 true이면 th, false이면 td를 출력한다.

    TableBody 컴포넌트의 baseline 프로퍼티로 밑줄을 출력한 점도 살펴본다. 
*/




var TableCell = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TableCell, _PureComponent);

  var _super = _createSuper(TableCell);

  function TableCell() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, TableCell);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          align = _this$props.align,
          baseline = _this$props.baseline,
          styles = _this$props.styles,
          children = _this$props.children,
          isHeader = _this$props.isHeader;
      var Tag = isHeader ? 'th' : 'td';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Tag, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["css"])(styles.cell, isHeader && styles.header, !isHeader && baseline && styles.baseline, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }), children);
    }
  }]);

  return TableCell;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

TableCell.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _withStyles__WEBPACK_IMPORTED_MODULE_10__["withStylesPropTypes"], {
  align: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['left', 'center', 'right']),
  baseline: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});
TableCell.defaultProps = {
  baseline: true,
  isHeader: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(function (_ref) {
  var color = _ref.color,
      unit = _ref.unit;
  return {
    cell: {
      paddingTop: unit * 4,
      paddingBottom: unit * 4,
      paddingRight: unit * 8,
      paddingLeft: unit * 8,
      backgroundColor: color.white,
      textAlign: 'left'
    },
    header: {
      backgroundColor: color.primary,
      color: color.white
    },
    baseline: {
      borderBottom: "1px solid ".concat(color.border)
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    }
  };
})(TableCell));

/***/ }),

/***/ "./src/doit-ui/TableHead.jsx":
/*!***********************************!*\
  !*** ./src/doit-ui/TableHead.jsx ***!
  \***********************************/
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






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\TableHead.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-2. TableHead 컴포넌트 만들기

/*
    TableHead 컴포넌트에는 isHeader 프로퍼티를 전달한다.

    자식 프로퍼티의 값은 JSX 노드 형태이므로 자바스크립트의 map() 함수가 아니라 리액트에서 제공하는 React.Children.map() 함수를 사용해야 한다.

    React.Children.map() 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를 배열처럼 취급한다. 또한 React.cloneElment() 함수를 사용하여 각각의 자식 컴포넌트(child)에 추가 프로퍼티를 전달한다.

    React.cloneElement() 함수는 JSX 노드를 복사한 다음 특정 프로퍼티를 추가한다.
*/



var TableHead = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TableHead, _PureComponent);

  var _super = _createSuper(TableHead);

  function TableHead() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TableHead);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TableHead, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
          isHeader: true
        });
      }));
    }
  }]);

  return TableHead;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

TableHead.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TableHead);

/***/ }),

/***/ "./src/doit-ui/TableRow.jsx":
/*!**********************************!*\
  !*** ./src/doit-ui/TableRow.jsx ***!
  \**********************************/
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






var _jsxFileName = "C:\\Users\\user\\do-it-example\\src\\doit-ui\\TableRow.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-4. TableRow 컴포넌트 만들기

/*
    TableRow 컴포넌트는 TableHead, TableBody 컴포넌트에서 전달받은 isHeader, baseline 프로퍼티를 자식 컴포넌트에 그대로 전달한다.
*/



var TableRow = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TableRow, _PureComponent);

  var _super = _createSuper(TableRow);

  function TableRow() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TableRow);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isHeader = _this$props.isHeader,
          baseline = _this$props.baseline;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
          baseline: baseline,
          isHeader: isHeader
        });
      }));
    }
  }]);

  return TableRow;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

TableRow.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  baseline: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (TableRow);

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

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\do-it-example\pages\index.jsx */"./pages/index.jsx");


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

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

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

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map