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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "+lRa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("s+ck");
var step = __webpack_require__("JFuE");
var Iterators = __webpack_require__("sipE");
var toIObject = __webpack_require__("aput");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("5Kld")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "/W95":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("0T/a");
var $entries = __webpack_require__("z/Nn")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "/aHj":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("G1Wo");


/***/ }),

/***/ "/ab8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("8+AD");
module.exports = __webpack_require__("p9MR").Object.keys;


/***/ }),

/***/ "/wxW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("Q8jq");
var toObject = __webpack_require__("AYVP");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "0Sc/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CgoH")('asyncIterator');


/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "0k/M":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CgoH")('observable');


/***/ }),

/***/ "0lY0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("2jw7");
var has = __webpack_require__("Q8jq");
var DESCRIPTORS = __webpack_require__("fZVS");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var META = __webpack_require__("YndH").KEY;
var $fails = __webpack_require__("14Ie");
var shared = __webpack_require__("d3Kl");
var setToStringTag = __webpack_require__("wNhr");
var uid = __webpack_require__("ewAR");
var wks = __webpack_require__("G1Wo");
var wksExt = __webpack_require__("/aHj");
var wksDefine = __webpack_require__("CgoH");
var enumKeys = __webpack_require__("0tY/");
var isArray = __webpack_require__("taoM");
var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var toObject = __webpack_require__("AYVP");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var createDesc = __webpack_require__("+EWW");
var _create = __webpack_require__("cQhG");
var gOPNExt = __webpack_require__("Vl3p");
var $GOPD = __webpack_require__("Ym6j");
var $GOPS = __webpack_require__("McIs");
var $DP = __webpack_require__("OtwA");
var $keys = __webpack_require__("djPm");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("2HZK").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("1077").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("tFdt")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("jOCL")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0tY/":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "1077":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "1gQu":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("GTiD");
module.exports = __webpack_require__("p9MR").Array.isArray;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2HZK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("JpU4");
var hiddenKeys = __webpack_require__("ACkF").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("x2TB");

/***/ }),

/***/ "3Ju6":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("0T/a");
var $values = __webpack_require__("z/Nn")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "40Gw":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("fZVS"), 'Object', { defineProperty: __webpack_require__("OtwA").f });


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Vphk");

/***/ }),

/***/ "5Kld":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("tFdt");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var $iterCreate = __webpack_require__("XOdh");
var setToStringTag = __webpack_require__("wNhr");
var getPrototypeOf = __webpack_require__("/wxW");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "5foh":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "7Bkb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setFilter; });
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

/***/ "7FvJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("40Gw");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "8+AD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("AYVP");
var $keys = __webpack_require__("djPm");

__webpack_require__("wWUK")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "8Vlj":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("fYqa");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var Iterators = __webpack_require__("sipE");
module.exports = __webpack_require__("p9MR").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "8sXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET; });
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

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "9Ls5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("JJgm");
module.exports = __webpack_require__("p9MR").Reflect.construct;


/***/ }),

/***/ "9Wj7":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var anObject = __webpack_require__("D4ny");
var getKeys = __webpack_require__("djPm");

module.exports = __webpack_require__("fZVS") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "ACkF":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "AYVP":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "B8g0":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("0T/a");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZJRo").set });


/***/ }),

/***/ "BUWp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8sXK");
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
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_LIST */ "c"], "/").concat(resourceName)];
  };

  var createLoadingStateSelector = function createLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CREATE */ "a"], "/").concat(resourceName)];
  };

  var updateLoadingStateSelector = function updateLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE */ "e"], "/").concat(resourceName)];
  };

  var memberLoadingStateSelector = function memberLoadingStateSelector(state) {
    return loadingStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH */ "b"], "/").concat(resourceName)];
  };

  var collectionErrorStateSelector = function collectionErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_LIST */ "c"], "/").concat(resourceName)];
  };

  var createErrorStateSelector = function createErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CREATE */ "a"], "/").concat(resourceName)];
  };

  var updateErrorStateSelector = function updateErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE */ "e"], "/").concat(resourceName)];
  };

  var memberErrorStateSelector = function memberErrorStateSelector(state) {
    return errorStateSelector(state)["".concat(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH */ "b"], "/").concat(resourceName)];
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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cBdl");

/***/ }),

/***/ "CgoH":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var LIBRARY = __webpack_require__("tFdt");
var wksExt = __webpack_require__("/aHj");
var defineProperty = __webpack_require__("OtwA").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "CpH4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("tCzM");
__webpack_require__("k8Q4");
module.exports = __webpack_require__("t39F");


/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "DOFU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FETCH_TRANSACTION_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createTransaction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dWw4");

//import Api from '../Api';
 //11-4-1-3. 액션 함수 수정하기

var _createActions = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('transactions'),
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

  return collection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, params, {
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

/***/ "EDr4":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("2jw7").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "Ev2V":
/***/ (function(module, exports) {



/***/ }),

/***/ "G1Wo":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("d3Kl")('wks');
var uid = __webpack_require__("ewAR");
var Symbol = __webpack_require__("2jw7").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "G492":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "GTiD":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("0T/a");

$export($export.S, 'Array', { isArray: __webpack_require__("taoM") });


/***/ }),

/***/ "GWyB":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "HqBV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("8v5W");
var isObject = __webpack_require__("b4pn");
var invoke = __webpack_require__("GWyB");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "Hsxp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ice+");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZlW2");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-2. 플렉스 박스로 가로 배치를 위한 레이아웃 컴포넌트 만들기
///08-2-2-2. 가로 배치를 위한 컴포넌트 작성하기

/*
    가로 배치를 위한 InlineList 컴포넌트를 작성한다. InlineList 컴포넌트의 하위 요소들은 모두 가로로 배치된다.
*/




var InlineList = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(InlineList, _PureComponent);

  var _super = _createSuper(InlineList);

  function InlineList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, InlineList);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(InlineList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          align = _this$props.align,
          children = _this$props.children,
          styles = _this$props.styles,
          spacingBetween = _this$props.spacingBetween,
          verticalAlign = _this$props.verticalAlign;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* css */ "a"])(styles.wrapper, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight, verticalAlign === 'top' && styles.verticalAlignTop, verticalAlign === 'bottom' && styles.verticalAlignBottom), react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.map(children, function (child) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* css */ "a"])({
          marginRight: spacingBetween * _Theme__WEBPACK_IMPORTED_MODULE_8__[/* unit */ "b"]
        }), child);
      }));
    }
  }]);

  return InlineList;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

InlineList.defaultProps = {
  spacingBetween: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* withStyles */ "b"])(function () {
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

/***/ "Ice+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VnKK");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("da7j");
/* harmony import */ var react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zoyD");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZlW2");
//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-1. 공용 컴포넌트 스타일 파일 만들기
///08-2-1-2. withStyles 하이어오더 컴포넌트 만들기




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite__WEBPACK_IMPORTED_MODULE_1___default.a);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_Theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);


/***/ }),

/***/ "IxLI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jOCL");


/***/ }),

/***/ "JBiz":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aput");
var toLength = __webpack_require__("pasi");
var toAbsoluteIndex = __webpack_require__("G492");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "JFuE":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "JJgm":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__("0T/a");
var create = __webpack_require__("cQhG");
var aFunction = __webpack_require__("8v5W");
var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var fails = __webpack_require__("14Ie");
var bind = __webpack_require__("HqBV");
var rConstruct = (__webpack_require__("2jw7").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KgSv");

/***/ }),

/***/ "JpU4":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("Q8jq");
var toIObject = __webpack_require__("aput");
var arrayIndexOf = __webpack_require__("JBiz")(false);
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "KYDP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qNsG");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ice+");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("pCF0");








var _excluded = ["children", "styles"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-4. Card 컴포넌트 만들기

/*
    코인 거래소의 버튼이나 검색창이 들어가는 모든 곳에 Card 컴포넌트를 사용한다. Card 컴포넌트는 둥근 모서리의 박스에 입체감을 주기 위한 그림자를 포함한다.

    코드를 보면 borderRadius가 둥근 모서리를, depth.level1이 그림자를 표현한 부분이다.
*/




var Card = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Card);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          styles = _this$props.styles,
          spacingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this$props, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])(styles.wrapper), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Spacing__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], spacingProps, children));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* withStyles */ "b"])(function (_ref) {
  var depth = _ref.depth,
      unit = _ref.unit,
      color = _ref.color;
  return {
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, depth.level1, {
      borderRadius: unit,
      backgroundColor: color.white,
      display: 'flex',
      overflow: 'hidden',
      marginBottom: unit * 4
    })
  };
})(Card));

/***/ }),

/***/ "KgSv":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("STjA");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "Kk5c":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var defined = __webpack_require__("5foh");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "LR/J":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QrtA");

/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "M9WK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ice+");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-1. Button 컴포넌트 추가하기



var Button = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Button);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Button, [{
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, disabled && styles.disabled), {
        disabled: disabled,
        onClick: onPress,
        type: type
      }), children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Button.defaultProps = {
  onPress: function onPress() {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* withStyles */ "b"])(function (_ref) {
  var color = _ref.color,
      size = _ref.size,
      unit = _ref.unit,
      depth = _ref.depth,
      fontWeight = _ref.fontWeight;
  return {
    default: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, depth.level1, {
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

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "McIs":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "QrtA":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("/W95");
module.exports = __webpack_require__("p9MR").Object.entries;


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js
var construct = __webpack_require__("pbKT");
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/doit-ui/Heading.jsx
var Heading = __webpack_require__("UhNW");

// EXTERNAL MODULE: ./src/doit-ui/InlineList.jsx
var InlineList = __webpack_require__("Hsxp");

// EXTERNAL MODULE: ./src/doit-ui/Button.jsx
var Button = __webpack_require__("M9WK");

// EXTERNAL MODULE: ./src/doit-ui/Card.jsx
var Card = __webpack_require__("KYDP");

// EXTERNAL MODULE: ./src/doit-ui/Text.jsx
var Text = __webpack_require__("aS7l");

// EXTERNAL MODULE: ./src/doit-ui/Modal/context.jsx
var context = __webpack_require__("TXeD");

// EXTERNAL MODULE: ./src/08/constants/modals.js
var modals = __webpack_require__("ww+x");

// CONCATENATED MODULE: ./src/08/components/main/CoinDashlet.jsx







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08. 가상 코인 거래소 만들기
//08-3. 프로젝트 구성하기
//08-3-2. 상단 정보 화면 구성하기

/*
    상단 정보 화면은 CoinOverview 컴포넌트, CoinDashlet 컴포넌트로 구성한다. 각 컴포넌트는 공용 컴포넌트를 활용한다.

    또한 코인 동향에 배치할 CoinDashlet 컴포넌트는 가로로 배치한다.
*/
///08-3-2-1. CoinDashlet 컴포넌트 만들기









var CoinDashlet_CoinDashlet = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(CoinDashlet, _PureComponent);

  var _super = _createSuper(CoinDashlet);

  function CoinDashlet() {
    Object(classCallCheck["a" /* default */])(this, CoinDashlet);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(CoinDashlet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          priceLabel = _this$props.priceLabel;
      return /*#__PURE__*/external_react_default.a.createElement(context["a" /* Consumer */], null, function (_ref) {
        var openModal = _ref.openModal;
        return /*#__PURE__*/external_react_default.a.createElement(Card["a" /* default */], {
          vertical: 4,
          horizontal: 4
        }, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
          level: 4
        }, name, /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], null, priceLabel)), /*#__PURE__*/external_react_default.a.createElement(InlineList["a" /* default */], {
          spacingBetween: 1
        }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
          primary: true,
          small: true,
          onPress: function onPress() {
            return openModal(modals["b" /* TRADE_COIN_MODAL */], {
              type: 'buy',
              name: name,
              price: priceLabel
            });
          }
        }, "\uB9E4\uB3C4"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
          small: true,
          onPress: function onPress() {
            return openModal(modals["b" /* TRADE_COIN_MODAL */], {
              type: 'sell',
              name: name,
              price: priceLabel
            });
          }
        }, "\uB9E4\uC218")));
      });
    }
  }]);

  return CoinDashlet;
}(external_react_["PureComponent"]);

/* harmony default export */ var main_CoinDashlet = (CoinDashlet_CoinDashlet);
// CONCATENATED MODULE: ./src/08/components/main/CoinOverview.jsx







function CoinOverview_createSuper(Derived) { var hasNativeReflectConstruct = CoinOverview_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function CoinOverview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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





var CoinOverview_CoinOverview = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(CoinOverview, _PureComponent);

  var _super = CoinOverview_createSuper(CoinOverview);

  function CoinOverview() {
    Object(classCallCheck["a" /* default */])(this, CoinOverview);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(CoinOverview, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
        level: 3
      }, "\uCF54\uC778 \uB3D9\uD5A5"), /*#__PURE__*/external_react_default.a.createElement(InlineList["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(main_CoinDashlet, {
        name: "\uBE44\uD2B8\uCF54\uC778",
        priceLabel: "4,216,000\uC6D0"
      }), /*#__PURE__*/external_react_default.a.createElement(main_CoinDashlet, {
        name: "\uC774\uB354\uB9AC\uC6C0",
        priceLabel: "216,000\uC6D0"
      }), /*#__PURE__*/external_react_default.a.createElement(main_CoinDashlet, {
        name: "\uB450\uC787\uCF54\uC778",
        priceLabel: "30,000\uC6D0"
      })));
    }
  }]);

  return CoinOverview;
}(external_react_["PureComponent"]);

/* harmony default export */ var main_CoinOverview = (CoinOverview_CoinOverview);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js
var entries = __webpack_require__("LR/J");
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./src/doit-ui/Input.jsx
var Input = __webpack_require__("fzRT");

// EXTERNAL MODULE: ./src/doit-ui/Form.jsx
var Form = __webpack_require__("VCIE");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./src/doit-ui/withStyles.js
var withStyles = __webpack_require__("Ice+");

// CONCATENATED MODULE: ./src/doit-ui/Option.jsx







function Option_createSuper(Derived) { var hasNativeReflectConstruct = Option_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function Option_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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


var Option_Option = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(Option, _PureComponent);

  var _super = Option_createSuper(Option);

  function Option() {
    Object(classCallCheck["a" /* default */])(this, Option);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          disabled = _this$props.disabled;
      return /*#__PURE__*/external_react_default.a.createElement("option", {
        value: value,
        disabled: disabled
      }, label || value);
    }
  }]);

  return Option;
}(external_react_["PureComponent"]);

/* harmony default export */ var doit_ui_Option = (Option_Option);
// CONCATENATED MODULE: ./src/doit-ui/Select.jsx









function Select_createSuper(Derived) { var hasNativeReflectConstruct = Select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function Select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-4. Select 컴포넌트 만들기


 //Select 컴포넌트는 대부분 Option 컴포넌트를 포함하고 있으므로, Select 컴포넌트를 임포트할 때 Option 컴포넌트를 함께 참조할 수 있도록 Option 컴포넌트를 export 한다.



var Select_Select = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(Select, _PureComponent);

  var _super = Select_createSuper(Select);

  function Select(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Select);

    _this = _super.call(this, props);
    _this.setRef = _this.setRef.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleChange = _this.handleChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleFocus = _this.handleFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleBlur = _this.handleBlur.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      focused: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Select, [{
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
      return /*#__PURE__*/external_react_default.a.createElement("fieldset", Object(withStyles["a" /* css */])(styles.wrapper), /*#__PURE__*/external_react_default.a.createElement("label", Object(esm_extends["a" /* default */])({
        htmlFor: "input_".concat(name)
      }, Object(withStyles["a" /* css */])(styles.label, errorMessage && styles.errorLabel)), errorMessage || label), /*#__PURE__*/external_react_default.a.createElement("div", Object(withStyles["a" /* css */])(styles.placeholder, xsmall && styles.xsmallPadding, small && styles.smallPadding, large && styles.largePadding, xlarge && styles.xlargePadding, focused && styles.focus, errorMessage && styles.error), /*#__PURE__*/external_react_default.a.createElement("select", Object(esm_extends["a" /* default */])({}, Object(withStyles["a" /* css */])(styles.select, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
        disabled: disabled,
        id: "input_".concat(name),
        ref: this.setRef,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        value: value
      }), external_react_default.a.Children.map(children, function (child) {
        return external_react_default.a.cloneElement(child, {
          disabled: disabled
        });
      }))));
    }
  }]);

  return Select;
}(external_react_["PureComponent"]);

Select_Select.defaultProps = {
  onChange: function onChange() {},
  autoFocus: false
};
/* harmony default export */ var doit_ui_Select = (Object(withStyles["b" /* withStyles */])(function (_ref) {
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
})(Select_Select));
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// CONCATENATED MODULE: ./src/08/components/main/TransactionSearchFilter.jsx












function TransactionSearchFilter_createSuper(Derived) { var hasNativeReflectConstruct = TransactionSearchFilter_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TransactionSearchFilter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var TransactionSearchFilter_TransactionSearchFilter = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TransactionSearchFilter, _PureComponent);

  var _super = TransactionSearchFilter_createSuper(TransactionSearchFilter);

  ///09-4-2-3. 리덕스 스토어 데이터 변경하기

  /*
      Form 컴포넌트에서 onSubmit 이벤트가 발생하면 this.handleSubmit() 함수가 호출되고 이어서 setTransactionList() 액션 함수가 호출될 것이다.
  */
  function TransactionSearchFilter(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TransactionSearchFilter);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(TransactionSearchFilter, [{
    key: "handleSubmit",
    value: function handleSubmit(params) {
      /*
      const { setTransactionList } = this.props;
      Api.get('./transactions', { params }).then(({ data }) => setTransactionList(data));
      */
      var _this$props = this.props,
          setFilter = _this$props.setFilter,
          history = _this$props.history;

      var cleanedParmas = entries_default()(params).filter(function (entries) {
        return entries[1] !== '';
      }).reduce(function (obj, _ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return Object(objectSpread["a" /* default */])({}, obj, Object(defineProperty["a" /* default */])({}, key, value));
      }, {});
      /*
      requestTransactionList(cleanedParmas);
      setFilter(cleanedParmas);
      */


      var queryString = entries_default()(cleanedParmas).map(function (_ref3) {
        var _ref4 = Object(slicedToArray["a" /* default */])(_ref3, 2),
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
      var initValues = this.props.initValues;
      return (
        /*#__PURE__*/
        //09-4-1. 검색요청 기능 완성하기
        external_react_default.a.createElement(Form["a" /* default */], {
          onSubmit: this.handleSubmit,
          initValues: initValues
        }, /*#__PURE__*/external_react_default.a.createElement(Form["a" /* default */].Consumer, null, function (_ref5) {
          var onChange = _ref5.onChange,
              values = _ref5.values;
          return /*#__PURE__*/external_react_default.a.createElement(InlineList["a" /* default */], {
            spacingBetween: 2,
            verticalAlign: "bottom"
          }, /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
            xlarge: true,
            bold: true
          }, "\uAC80\uC0C9"), /*#__PURE__*/external_react_default.a.createElement(doit_ui_Select, {
            name: "code",
            label: "\uCF54\uC778 \uCF54\uB4DC",
            onChange: onChange,
            value: values['code']
          }, /*#__PURE__*/external_react_default.a.createElement(doit_ui_Option, {
            label: "\uC120\uD0DD\uD574\uC8FC\uC138\uC694"
          }), /*#__PURE__*/external_react_default.a.createElement(doit_ui_Option, {
            label: "\uBE44\uD2B8\uCF54\uC778(BTX)",
            value: "BTX"
          }), /*#__PURE__*/external_react_default.a.createElement(doit_ui_Option, {
            label: "\uC774\uB354\uB9AC\uC6C0(ETH)",
            value: "ETH"
          }), /*#__PURE__*/external_react_default.a.createElement(doit_ui_Option, {
            label: "\uB450\uC787\uCF54\uC778(DOIT)",
            value: "DOIT"
          })), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
            name: "currentPrice_gte",
            label: "\uCD5C\uC18C \uAC70\uB798\uAC00",
            onChange: onChange,
            value: values['currentPrice_gte']
          }), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
            name: "currentPrice_lte",
            label: "\uCD5C\uB300 \uAC70\uB798\uAC00",
            onChange: onChange,
            value: values['currentPrice_lte']
          }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
            type: "submit",
            primary: true
          }, "\uAC80\uC0C9"));
        }))
      );
    }
  }]);

  return TransactionSearchFilter;
}(external_react_["PureComponent"]);

//export default TransactionSearchFilter;
/* harmony default export */ var main_TransactionSearchFilter = (Object(external_react_router_dom_["withRouter"])(TransactionSearchFilter_TransactionSearchFilter));
// EXTERNAL MODULE: ./src/08/actions/transactionPackActions.js
var transactionPackActions = __webpack_require__("DOFU");

// EXTERNAL MODULE: ./src/08/actions/searchFilterActions.js
var searchFilterActions = __webpack_require__("7Bkb");

// CONCATENATED MODULE: ./src/08/containers/main/TransactionSearchFilterContainer.jsx
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


 //11-2-3-2. 데이터 컴포넌트 수정하기

var TransactionSearchFilterContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    initValues: state.searchFilter.params
  };
}; //export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);


/* harmony default export */ var TransactionSearchFilterContainer = (Object(external_react_redux_["connect"])(TransactionSearchFilterContainer_mapStateToProps, {
  setFilter: searchFilterActions["b" /* setFilter */]
})(main_TransactionSearchFilter));
// CONCATENATED MODULE: ./src/doit-ui/Table.jsx







function Table_createSuper(Derived) { var hasNativeReflectConstruct = Table_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function Table_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-1. Table 컴포넌트 만들기



var Table_Table = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(Table, _PureComponent);

  var _super = Table_createSuper(Table);

  function Table() {
    Object(classCallCheck["a" /* default */])(this, Table);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          children = _this$props.children;
      return /*#__PURE__*/external_react_default.a.createElement("table", Object(withStyles["a" /* css */])(styles.table), children);
    }
  }]);

  return Table;
}(external_react_["PureComponent"]);

/* harmony default export */ var doit_ui_Table = (Object(withStyles["b" /* withStyles */])(function (_ref) {
  var color = _ref.color,
      unit = _ref.unit;
  return {
    table: {
      borderCollapse: 'collapse',
      width: '100%'
    }
  };
})(Table_Table));
// CONCATENATED MODULE: ./src/doit-ui/TableRow.jsx







function TableRow_createSuper(Derived) { var hasNativeReflectConstruct = TableRow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TableRow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-4. TableRow 컴포넌트 만들기

/*
    TableRow 컴포넌트는 TableHead, TableBody 컴포넌트에서 전달받은 isHeader, baseline 프로퍼티를 자식 컴포넌트에 그대로 전달한다.
*/


var TableRow_TableRow = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TableRow, _PureComponent);

  var _super = TableRow_createSuper(TableRow);

  function TableRow() {
    Object(classCallCheck["a" /* default */])(this, TableRow);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isHeader = _this$props.isHeader,
          baseline = _this$props.baseline;
      return /*#__PURE__*/external_react_default.a.createElement("tr", null, external_react_default.a.Children.map(children, function (child) {
        return external_react_default.a.cloneElement(child, {
          baseline: baseline,
          isHeader: isHeader
        });
      }));
    }
  }]);

  return TableRow;
}(external_react_["PureComponent"]);

/* harmony default export */ var doit_ui_TableRow = (TableRow_TableRow);
// CONCATENATED MODULE: ./src/doit-ui/TableCell.jsx







function TableCell_createSuper(Derived) { var hasNativeReflectConstruct = TableCell_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TableCell_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-5. TableCell 컴포넌트 만들기

/*
    TabelCell 컴포넌트는 테이블의 열에 해당하므로 td 엘리먼트 또는 th 엘리먼트를 출력한다. isHeader 프로퍼티가 true이면 th, false이면 td를 출력한다.

    TableBody 컴포넌트의 baseline 프로퍼티로 밑줄을 출력한 점도 살펴본다. 
*/



var TableCell_TableCell = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TableCell, _PureComponent);

  var _super = TableCell_createSuper(TableCell);

  function TableCell() {
    Object(classCallCheck["a" /* default */])(this, TableCell);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          align = _this$props.align,
          baseline = _this$props.baseline,
          styles = _this$props.styles,
          children = _this$props.children,
          isHeader = _this$props.isHeader;
      var Tag = isHeader ? 'th' : 'td';
      return /*#__PURE__*/external_react_default.a.createElement(Tag, Object(withStyles["a" /* css */])(styles.cell, isHeader && styles.header, !isHeader && baseline && styles.baseline, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight), children);
    }
  }]);

  return TableCell;
}(external_react_["PureComponent"]);

TableCell_TableCell.defaultProps = {
  baseline: true,
  isHeader: false
};
/* harmony default export */ var doit_ui_TableCell = (Object(withStyles["b" /* withStyles */])(function (_ref) {
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
})(TableCell_TableCell));
// CONCATENATED MODULE: ./src/doit-ui/TableHead.jsx







function TableHead_createSuper(Derived) { var hasNativeReflectConstruct = TableHead_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TableHead_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-2. TableHead 컴포넌트 만들기

/*
    TableHead 컴포넌트에는 isHeader 프로퍼티를 전달한다.

    자식 프로퍼티의 값은 JSX 노드 형태이므로 자바스크립트의 map() 함수가 아니라 리액트에서 제공하는 React.Children.map() 함수를 사용해야 한다.

    React.Children.map() 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를 배열처럼 취급한다. 또한 React.cloneElment() 함수를 사용하여 각각의 자식 컴포넌트(child)에 추가 프로퍼티를 전달한다.

    React.cloneElement() 함수는 JSX 노드를 복사한 다음 특정 프로퍼티를 추가한다.
*/


var TableHead_TableHead = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TableHead, _PureComponent);

  var _super = TableHead_createSuper(TableHead);

  function TableHead() {
    Object(classCallCheck["a" /* default */])(this, TableHead);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TableHead, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/external_react_default.a.createElement("thead", null, external_react_default.a.Children.map(children, function (child) {
        return external_react_default.a.cloneElement(child, {
          isHeader: true
        });
      }));
    }
  }]);

  return TableHead;
}(external_react_["PureComponent"]);

/* harmony default export */ var doit_ui_TableHead = (TableHead_TableHead);
// CONCATENATED MODULE: ./src/doit-ui/TableBody.jsx







function TableBody_createSuper(Derived) { var hasNativeReflectConstruct = TableBody_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TableBody_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-5. 데이터 테이블 컴포넌트 만들기
///08-2-5-3. TableBody 컴포넌트 만들기

/*
    TableBody 컴포넌트도 TableHead 컴포넌트와 유사한 방법을 자식 프로퍼티를 사용합니다. baseline 프로퍼티를 이용하여 잣기 배열 중 마지막을 제외한 행은 밑줄을 표시하도록 한다.
*/

/*
    마지막 줄을 생략하는 이유는 미관상 테두리 줄이 겹치지 않도록 하기 위함이다. 행의 밑줄을 생략하지 않으면 행의 밑줄과 테이블의 밑줄이 겹치므로 2줄로 출력된다.
*/


var TableBody_TableBody = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TableBody, _PureComponent);

  var _super = TableBody_createSuper(TableBody);

  function TableBody() {
    Object(classCallCheck["a" /* default */])(this, TableBody);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TableBody, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      var _React$Children$toArr = external_react_default.a.Children.toArray(children),
          length = _React$Children$toArr.length;

      return /*#__PURE__*/external_react_default.a.createElement("tbody", null, external_react_default.a.Children.map(children, function (child, index) {
        var baseline = index < length - 1 ? true : false;
        return external_react_default.a.cloneElement(child, {
          baseline: baseline
        });
      }));
    }
  }]);

  return TableBody;
}(external_react_["PureComponent"]);

/* harmony default export */ var doit_ui_TableBody = (TableBody_TableBody);
// EXTERNAL MODULE: ./src/doit-ui/Spacing.jsx
var Spacing = __webpack_require__("pCF0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// CONCATENATED MODULE: ./src/05/withLoading.jsx

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

/* harmony default export */ var _05_withLoading = (function () {
  var loadingMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '로딩 중';
  return function withLoading(WrappedComponent) {
    //확장 컴포넌트에서 출력할 메시지를 전달받는 커링함수이다.
    var displayName = WrappedComponent.displayName,
        componentName = WrappedComponent.name;
    var WrappedComponentName = displayName || componentName;

    function WithLoading(_ref) {
      var isLoading = _ref.isLoading,
          otherProps = Object(objectWithoutProperties["a" /* default */])(_ref, _excluded);

      if (isLoading) return loadingMessage;
      return /*#__PURE__*/external_react_default.a.createElement(WrappedComponent, otherProps);
    }

    ;
    WithLoading.displayName = "withLoading(".concat(WrappedComponentName, ")");
    return WithLoading;
  };
});
// CONCATENATED MODULE: ./src/08/components/main/TransactionTable.jsx







function TransactionTable_createSuper(Derived) { var hasNativeReflectConstruct = TransactionTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TransactionTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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









var LoadingMessage = /*#__PURE__*/external_react_default.a.createElement(Spacing["a" /* default */], {
  vertical: 4,
  horizontal: 2
}, /*#__PURE__*/external_react_default.a.createElement(Text["a" /* default */], {
  large: true
}, "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uB4E4\uC774\uACE0 \uC788\uC2B5\uB2C8\uB2E4."));

var TransactionTable_TransactionTable = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TransactionTable, _PureComponent);

  var _super = TransactionTable_createSuper(TransactionTable);

  function TransactionTable() {
    Object(classCallCheck["a" /* default */])(this, TransactionTable);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TransactionTable, [{
    key: "render",
    value: function render() {
      var transactions = this.props.transactions;
      return /*#__PURE__*/external_react_default.a.createElement(doit_ui_Table, null, /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableHead, null, /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableRow, null, /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
        align: "left"
      }, "\uCF54\uC778"), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
        align: "center"
      }, "\uC2DC\uAC00 \uCD1D\uC561"), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
        align: "center"
      }, "\uD604\uC7AC \uC2DC\uC138"), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
        align: "right"
      }, "\uAC70\uB798 \uC2DC\uAC04"))), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableBody, null, transactions.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            totalPrice = _ref.totalPrice,
            currentPrice = _ref.currentPrice,
            datetime = _ref.datetime;
        return /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableRow, {
          key: id
        }, /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, null, name), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
          align: "center"
        }, totalPrice), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
          align: "center"
        }, currentPrice), /*#__PURE__*/external_react_default.a.createElement(doit_ui_TableCell, {
          align: "right"
        }, datetime));
      })));
    }
  }]);

  return TransactionTable;
}(external_react_["PureComponent"]);

/* harmony default export */ var main_TransactionTable = (_05_withLoading(LoadingMessage)(TransactionTable_TransactionTable));
// CONCATENATED MODULE: ./src/08/components/main/TransactionPagination.jsx








function TransactionPagination_createSuper(Derived) { var hasNativeReflectConstruct = TransactionPagination_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TransactionPagination_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//11-2. 대용량 데이터 효율적으로 처리하기
///11-2-2. 가상 코인 거래소에 페이지 이동 기능 추가하기
////11-2-2-1.  페이지 이동 버튼 컴포넌트 추가하기

/*
    다음은 페이지 이동 버튼을 출력하는 TransactionPagination 컴포넌트이다. [이전]과 [다음]버튼을 추가하여 각 버튼이 클릭될 때 현재 requestTransactionList 액션 함수에 해당 페이지 번호를 전달하도록 구현한다.
*/




var TransactionPagination_TransactionPagination = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TransactionPagination, _PureComponent);

  var _super = TransactionPagination_createSuper(TransactionPagination);

  function TransactionPagination(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TransactionPagination);

    _this = _super.call(this, props);
    _this.handleNextPress = _this.handleNextPress.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handlePrevPress = _this.handlePrevPress.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(TransactionPagination, [{
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

      return /*#__PURE__*/external_react_default.a.createElement(InlineList["a" /* default */], {
        align: "right"
      }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
        secondary: true,
        disabled: prevDisabled,
        onPress: this.handlePrevPress
      }, "\uC774\uC804"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
        primary: true,
        disabled: nextDisabled,
        onPress: this.handleNextPress
      }, "\uB2E4\uC74C"));
    }
  }]);

  return TransactionPagination;
}(external_react_["PureComponent"]);

/* harmony default export */ var main_TransactionPagination = (TransactionPagination_TransactionPagination);
// EXTERNAL MODULE: ./src/11/api-redux-pack/createSelectors.js
var createSelectors = __webpack_require__("BUWp");

// CONCATENATED MODULE: ./src/08/selectors/transactionSelectors.js
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


var _createSelectors = Object(createSelectors["a" /* default */])('transactions'),
    transactionsSelector = _createSelectors.resourceSelector,
    transactionEntitiesSelector = _createSelectors.entitiesSelector,
    transactionPagesSelector = _createSelectors.pagesSelector,
    transactionListSelector = _createSelectors.collectionSelector,
    transactionListLoadingStateSelector = _createSelectors.collectionLoadingStateSelector,
    transactionCreateLoadingStateSelector = _createSelectors.createLoadingStateSelector,
    paginationSelector = _createSelectors.paginationSelector;


// CONCATENATED MODULE: ./src/08/containers/main/TransactionPaginationContainer.jsx
//11-2. 대용량 데이터 효율적으로 처리하기
///11-2-2. 가상 코인 거래소에 페이지 이동 기능 추가하기
////11-2-2-2. TransactionPaginationContainer 컴포넌트 추가하기

/*
    TransactionPagination 컴포넌트에 전달할 액션과 스토어 데이터를 연결한다. 현재 페이저 정보와 목록 요청 액션을 데이터 컴포넌트에 추가한다.
*/





var TransactionPaginationContainer_mapStateToProps = function mapStateToProps(state) {
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
    loading: transactionListLoadingStateSelector(state)
  };
};

var mapDispatchToProps = {
  requestTransactionList: transactionPackActions["c" /* requestTransactionList */]
};
/* harmony default export */ var TransactionPaginationContainer = (Object(external_react_redux_["connect"])(TransactionPaginationContainer_mapStateToProps, mapDispatchToProps)(main_TransactionPagination));
// CONCATENATED MODULE: ./src/08/components/main/TransactionList.jsx







function TransactionList_createSuper(Derived) { var hasNativeReflectConstruct = TransactionList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function TransactionList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var TransactionList_TransactionList = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(TransactionList, _PureComponent);

  var _super = TransactionList_createSuper(TransactionList);

  function TransactionList() {
    Object(classCallCheck["a" /* default */])(this, TransactionList);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TransactionList, [{
    key: "render",
    value:
    /*
    componentDidMount(){
        //Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
        this.props.requestTransactionList();//
    }
    */
    function render() {
      var _this$props = this.props,
          transactions = _this$props.transactions,
          loading = _this$props.loading;
      return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Heading["a" /* default */], {
        level: 3
      }, "\uAC70\uB798 \uD604\uD669"), /*#__PURE__*/external_react_default.a.createElement(Card["a" /* default */], {
        vertical: 4,
        horizontal: 4
      }, /*#__PURE__*/external_react_default.a.createElement(TransactionSearchFilterContainer, null)), /*#__PURE__*/external_react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(main_TransactionTable, {
        transactions: transactions,
        isLoading: loading
      })), /*#__PURE__*/external_react_default.a.createElement(TransactionPaginationContainer, null));
    }
  }]);

  return TransactionList;
}(external_react_["PureComponent"]);

TransactionList_TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: function requestTransactionList() {}
};
/* harmony default export */ var main_TransactionList = (TransactionList_TransactionList);
// CONCATENATED MODULE: ./src/08/containers/main/TransactionListContainer.jsx
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

var TransactionListContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state)
  };
};

var TransactionListContainer_mapDispatchToProps = {
  requestTransactionList: transactionPackActions["c" /* requestTransactionList */]
};
/* harmony default export */ var TransactionListContainer = (Object(external_react_redux_["connect"])(TransactionListContainer_mapStateToProps, TransactionListContainer_mapDispatchToProps)(main_TransactionList));
// CONCATENATED MODULE: ./src/08/components/main/MainPage.jsx







function MainPage_createSuper(Derived) { var hasNativeReflectConstruct = MainPage_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function MainPage_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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




var MainPage_MainPage = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(MainPage, _PureComponent);

  var _super = MainPage_createSuper(MainPage);

  function MainPage() {
    Object(classCallCheck["a" /* default */])(this, MainPage);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(MainPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(main_CoinOverview, null), /*#__PURE__*/external_react_default.a.createElement(TransactionListContainer, null));
    }
  }]);

  return MainPage;
}(external_react_["PureComponent"]);

/* harmony default export */ var main_MainPage = (MainPage_MainPage);
// CONCATENATED MODULE: ./pages/index.js







function pages_createSuper(Derived) { var hasNativeReflectConstruct = pages_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function pages_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//13-3. 서버사이드 랜더링 도입하기
//13-3-5. IndexDocument 컴포넌트 추가하기

/*
    next.js는 기본 주소(/)에 접속하면 pages 폴더의 index.js를 읽어 화면을 구성한다. 기본 주소에 접속하면 보여줄 IndexDocument 컴포넌트를 추가한다.
    IndexDocument 컴포넌트는 MainPage 컴포넌트를 출력한다.
*/



var pages_IndexDocument = /*#__PURE__*/function (_PureComponent) {
  Object(inherits["a" /* default */])(IndexDocument, _PureComponent);

  var _super = pages_createSuper(IndexDocument);

  function IndexDocument() {
    Object(classCallCheck["a" /* default */])(this, IndexDocument);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(IndexDocument, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(main_MainPage, null);
    }
  }]);

  return IndexDocument;
}(external_react_["PureComponent"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexDocument);

/***/ }),

/***/ "STjA":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("aput");
var $getOwnPropertyDescriptor = __webpack_require__("Ym6j").f;

__webpack_require__("wWUK")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r36L");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pDh1");

/***/ }),

/***/ "TXeD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-6. Modal 컴포넌트 만들기
///08-2-6-2. 공급자와 소비자 생성하기


var _React$createContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;



/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UOkd":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("cQhG") });


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ge64");

/***/ }),

/***/ "UhNW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ice+");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-2. Heading 컴포넌트 만들기

/*
    Heading 컴포넌트는 level을 프로퍼티로 받아 머리글의 크기를 다르게 출력할 때 사용한다.
*/


var headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var Heading = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Heading, _PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Heading);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          inverse = _this$props.inverse,
          level = _this$props.level,
          styles = _this$props.styles;
      var HeadingTag = headingTags[level - 1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeadingTag, Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* css */ "a"])(styles.default, styles["level".concat(level)], inverse && styles.inverse), children);
    }
  }]);

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Heading.defaultProps = {
  level: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* withStyles */ "b"])(function (_ref) {
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

/***/ "VCIE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2wwy");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, result); }; }

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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(FormProvider, _React$PureComponent);

  var _super = _createSuper(FormProvider);

  function FormProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, FormProvider);

    _this = _super.call(this, props);
    _this.state = {};
    _this.reset = _this.reset.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    _this.validate = _this.validate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FormProvider, [{
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
          values: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])({}, name, updatedValue))
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
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.handleSubmit
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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(FormProvider, "Consumer", Consumer);

FormProvider.defaultProps = {
  initValues: {},
  validate: function validate() {
    return {};
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FormProvider);

/***/ }),

/***/ "Vl3p":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("aput");
var gOPN = __webpack_require__("2HZK").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "VnKK":
/***/ (function(module, exports) {

module.exports = require("react-with-styles/lib/ThemedStyleSheet");

/***/ }),

/***/ "Vphk":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0lY0");
module.exports = __webpack_require__("p9MR").Object.getOwnPropertySymbols;


/***/ }),

/***/ "WSfB":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("k8Q4");
__webpack_require__("tCzM");
module.exports = __webpack_require__("/aHj").f('iterator');


/***/ }),

/***/ "XOdh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("cQhG");
var descriptor = __webpack_require__("+EWW");
var setToStringTag = __webpack_require__("wNhr");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("jOCL")(IteratorPrototype, __webpack_require__("G1Wo")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WSfB");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CpH4");

/***/ }),

/***/ "XY+j":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d3Kl")('keys');
var uid = __webpack_require__("ewAR");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "Ym6j":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("1077");
var createDesc = __webpack_require__("+EWW");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var has = __webpack_require__("Q8jq");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("fZVS") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "YndH":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ewAR")('meta');
var isObject = __webpack_require__("b4pn");
var has = __webpack_require__("Q8jq");
var setDesc = __webpack_require__("OtwA").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("14Ie")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sli4");

/***/ }),

/***/ "ZJRo":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("b4pn");
var anObject = __webpack_require__("D4ny");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("vCXk")(Function.call, __webpack_require__("Ym6j").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "ZlW2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LARGE_AND_ABOVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unit; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");


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
var breakpoints = (_breakpoints = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_breakpoints, BREAKPOINT_NAMES.LARGE, 1128), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_breakpoints, BREAKPOINT_NAMES.MEDIUM, 744), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_breakpoints, BREAKPOINT_NAMES.SMALL, 327), _breakpoints);
var responsive = (_responsive = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_responsive, LARGE_AND_ABOVE, "@media (min-width: ".concat(breakpoints[BREAKPOINT_NAMES.LARGE], "px)")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_responsive, BREAKPOINT_NAMES.SMALL, "@media (max-width: ".concat(breakpoints[BREAKPOINT_NAMES.MEDIUM - 1], "px)")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_responsive, "print", "@media print"), _responsive);
var unit = 4;
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aS7l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ice+");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-4. 화면 출력을 위한 컴포넌트 만들기
///08-2-4-1. Text 컴포넌트 만들기



var Text = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Text);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Text, [{
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse), children);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* withStyles */ "b"])(function (_ref) {
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

/***/ "aput":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("i6sE");
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "bh8V":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "cBdl":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("hc2F");
module.exports = __webpack_require__("p9MR").Object.getPrototypeOf;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cQhG":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("D4ny");
var dPs = __webpack_require__("9Wj7");
var enumBugKeys = __webpack_require__("ACkF");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Ev2A")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("EDr4").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "d3Kl":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("p9MR");
var global = __webpack_require__("2jw7");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("tFdt") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dWw4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./src/11/api-redux-pack/actionTypes.js
var actionTypes = __webpack_require__("8sXK");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/08/Api.js
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

var Api = external_axios_default.a.create({
  baseURL: 'http://localhost:4000/'
});
/* harmony default export */ var _08_Api = (Api);
// CONCATENATED MODULE: ./src/11/api-redux-pack/createActions.js

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


/* harmony default export */ var createActions = __webpack_exports__["a"] = (function (resourceName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  return {
    collection: function collection() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        type: actionTypes["c" /* FETCH_LIST */],
        promise: _08_Api.get(resourceName, {
          params: params
        }),
        meta: Object(objectSpread["a" /* default */])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    member: function member(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return {
        type: actionTypes["b" /* FETCH */],
        promise: _08_Api.get("".concat(resourceName, "/").concat(id), {
          params: params
        }),
        meta: Object(objectSpread["a" /* default */])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    create: function create(data) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return {
        type: actionTypes["a" /* CREATE */],
        promise: _08_Api.post(resourceName, data, {
          params: params
        }),
        meta: Object(objectSpread["a" /* default */])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    update: function update(id, data) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return {
        type: actionTypes["e" /* UPDATE */],
        promise: _08_Api.put("".concat(resourceName, "/").concat(id), data, {
          params: params
        }),
        meta: Object(objectSpread["a" /* default */])({}, meta, {
          key: key,
          resourceName: resourceName
        })
      };
    },
    reset: function reset() {
      return {
        type: actionTypes["d" /* RESET */],
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

/***/ "da7j":
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite");

/***/ }),

/***/ "djPm":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("JpU4");
var enumBugKeys = __webpack_require__("ACkF");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "ewAR":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "fYqa":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("bh8V");
var TAG = __webpack_require__("G1Wo")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "fzRT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ice+");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/
///08-2-7-2. Input 컴포넌트 추가하기



var Input = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Input, _PureComponent);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Input);

    _this = _super.call(this, props);
    _this.setRef = _this.setRef.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Input, [{
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])(styles.wrapper), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        htmlFor: "input_".concat(name)
      }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])(styles.label, errorMessage && styles.errorLabel)), errorMessage || label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])(styles.input, errorMessage && styles.error, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
        id: "input_".concat(name),
        ref: this.setRef,
        type: type,
        onChange: this.handleChange,
        value: value
      })));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Input.defaultProps = {
  onChange: function onChange() {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* withStyles */ "b"])(function (_ref) {
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

/***/ "ge64":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mlGW");
module.exports = __webpack_require__("p9MR").Object.assign;


/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hc2F":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("AYVP");
var $getPrototypeOf = __webpack_require__("/wxW");

__webpack_require__("wWUK")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7FvJ");

/***/ }),

/***/ "i6sE":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("bh8V");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "k8Q4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("Kk5c")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("5Kld")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
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

/***/ "mlGW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("0T/a");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("nkTw") });


/***/ }),

/***/ "nkTw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("fZVS");
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
var toObject = __webpack_require__("AYVP");
var IObject = __webpack_require__("i6sE");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("14Ie")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1gQu");

/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pCF0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export propTypes */
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a7VT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ice+");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ZlW2");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기
///08-2-3. 공간을 만들어주는 컴포넌트 만들기

/*
    보통 웹 개발 과정에서 요소와 요소 사이에 공간이 필요하면 스타일로 해결한다.

    하지만 리액트 개발에서는 공간을 위한 컴포넌트를 프로퍼티로 전달하여 컴포넌트와 컴포넌트 사이의 공간을 규격화하여 구성할 수 있다.
*/
///08-2-3-1. 공간을 만들어주는 컴포넌트 만들기




var propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  bottm: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};

var Spacing = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Spacing, _PureComponent);

  var _super = _createSuper(Spacing);

  function Spacing() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Spacing);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Spacing, [{
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

      var computedStyles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        flex: 1
      }, computedTop && {
        marginTop: computedTop * _Theme__WEBPACK_IMPORTED_MODULE_10__[/* unit */ "b"]
      }, computedBottom && {
        marginBottom: computedBottom * _Theme__WEBPACK_IMPORTED_MODULE_10__[/* unit */ "b"]
      }, computedLeft && {
        marginLeft: computedLeft * _Theme__WEBPACK_IMPORTED_MODULE_10__[/* unit */ "b"]
      }, computedRight && {
        marginRight: computedRight * _Theme__WEBPACK_IMPORTED_MODULE_10__[/* unit */ "b"]
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])(computedStyles), children);
    }
  }]);

  return Spacing;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Spacing);

/***/ }),

/***/ "pDh1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("B8g0");
module.exports = __webpack_require__("p9MR").Object.setPrototypeOf;


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/ab8");

/***/ }),

/***/ "pasi":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("qBJy");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9Ls5");

/***/ }),

/***/ "qBJy":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

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

/***/ "r36L":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("UOkd");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s+ck":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "sipE":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "sli4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0lY0");
__webpack_require__("Ev2V");
__webpack_require__("0Sc/");
__webpack_require__("0k/M");
module.exports = __webpack_require__("p9MR").Symbol;


/***/ }),

/***/ "t39F":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var get = __webpack_require__("8Vlj");
module.exports = __webpack_require__("p9MR").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "tCzM":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+lRa");
var global = __webpack_require__("2jw7");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var TO_STRING_TAG = __webpack_require__("G1Wo")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "tFdt":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "taoM":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("bh8V");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "wNhr":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("OtwA").f;
var has = __webpack_require__("Q8jq");
var TAG = __webpack_require__("G1Wo")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "wWUK":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("0T/a");
var core = __webpack_require__("p9MR");
var fails = __webpack_require__("14Ie");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "ww+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGISTER_USER_MODAL; });
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

/***/ "x2TB":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3Ju6");
module.exports = __webpack_require__("p9MR").Object.values;


/***/ }),

/***/ "z/Nn":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fZVS");
var getKeys = __webpack_require__("djPm");
var toIObject = __webpack_require__("aput");
var isEnum = __webpack_require__("1077").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "zoyD":
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });