
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var fails$x = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$w = fails$x;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$w(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var objectDefineProperty = {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$y =
    /* global globalThis -- safe */
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var isObject$l = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var global$x = global$y;
  var isObject$k = isObject$l;

  var document$3 = global$x.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$k(document$3) && isObject$k(document$3.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$e = descriptors;
  var fails$v = fails$x;
  var createElement$1 = documentCreateElement$1;

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$e && !fails$v(function () {
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var isObject$j = isObject$l;

  var anObject$i = function (it) {
    if (!isObject$j(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var isObject$i = isObject$l;

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive$5 = function (input, PREFERRED_STRING) {
    if (!isObject$i(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$i(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$i(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$i(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var DESCRIPTORS$d = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var anObject$h = anObject$i;
  var toPrimitive$4 = toPrimitive$5;

  var nativeDefineProperty$2 = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$d ? nativeDefineProperty$2 : function defineProperty(O, P, Attributes) {
    anObject$h(O);
    P = toPrimitive$4(P, true);
    anObject$h(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return nativeDefineProperty$2(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$c = descriptors;
  var defineProperty$8 = objectDefineProperty.f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME$1 = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (DESCRIPTORS$c && !(NAME$1 in FunctionPrototype)) {
    defineProperty$8(FunctionPrototype, NAME$1, {
      configurable: true,
      get: function () {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var shared$4 = {exports: {}};

  var isPure = false;

  var createPropertyDescriptor$7 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$b = descriptors;
  var definePropertyModule$7 = objectDefineProperty;
  var createPropertyDescriptor$6 = createPropertyDescriptor$7;

  var createNonEnumerableProperty$d = DESCRIPTORS$b ? function (object, key, value) {
    return definePropertyModule$7.f(object, key, createPropertyDescriptor$6(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$w = global$y;
  var createNonEnumerableProperty$c = createNonEnumerableProperty$d;

  var setGlobal$3 = function (key, value) {
    try {
      createNonEnumerableProperty$c(global$w, key, value);
    } catch (error) {
      global$w[key] = value;
    } return value;
  };

  var global$v = global$y;
  var setGlobal$2 = setGlobal$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$v[SHARED] || setGlobal$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.9.0',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var has$f = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id$1 = 0;
  var postfix = Math.random();

  var uid$5 = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix).toString(36);
  };

  var fails$u = fails$x;

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$u(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    /* global Symbol -- required for testing */
    return !String(Symbol());
  });

  var NATIVE_SYMBOL$2 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$2
    /* global Symbol -- safe */
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$u = global$y;
  var shared$3 = shared$4.exports;
  var has$e = has$f;
  var uid$4 = uid$5;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var WellKnownSymbolsStore$1 = shared$3('wks');
  var Symbol$1 = global$u.Symbol;
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$4;

  var wellKnownSymbol$q = function (name) {
    if (!has$e(WellKnownSymbolsStore$1, name)) {
      if (NATIVE_SYMBOL$1 && has$e(Symbol$1, name)) WellKnownSymbolsStore$1[name] = Symbol$1[name];
      else WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore$1[name];
  };

  var wellKnownSymbol$p = wellKnownSymbol$q;

  var TO_STRING_TAG$4 = wellKnownSymbol$p('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$4] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var redefine$b = {exports: {}};

  var store$1 = sharedStore;

  var functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof store$1.inspectSource != 'function') {
    store$1.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource$3 = store$1.inspectSource;

  var global$t = global$y;
  var inspectSource$2 = inspectSource$3;

  var WeakMap$1 = global$t.WeakMap;

  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$2(WeakMap$1));

  var shared$2 = shared$4.exports;
  var uid$3 = uid$5;

  var keys$1 = shared$2('keys');

  var sharedKey$4 = function (key) {
    return keys$1[key] || (keys$1[key] = uid$3(key));
  };

  var hiddenKeys$6 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$s = global$y;
  var isObject$h = isObject$l;
  var createNonEnumerableProperty$b = createNonEnumerableProperty$d;
  var objectHas = has$f;
  var shared$1 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$5 = hiddenKeys$6;

  var WeakMap = global$s.WeakMap;
  var set$2, get$1, has$d;

  var enforce = function (it) {
    return has$d(it) ? get$1(it) : set$2(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$h(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP) {
    var store = shared$1.state || (shared$1.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set$2 = function (it, metadata) {
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return wmget.call(store, it) || {};
    };
    has$d = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$5[STATE] = true;
    set$2 = function (it, metadata) {
      metadata.facade = it;
      createNonEnumerableProperty$b(it, STATE, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return objectHas(it, STATE) ? it[STATE] : {};
    };
    has$d = function (it) {
      return objectHas(it, STATE);
    };
  }

  var internalState = {
    set: set$2,
    get: get$1,
    has: has$d,
    enforce: enforce,
    getterFor: getterFor
  };

  var global$r = global$y;
  var createNonEnumerableProperty$a = createNonEnumerableProperty$d;
  var has$c = has$f;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$1 = inspectSource$3;
  var InternalStateModule$8 = internalState;

  var getInternalState$6 = InternalStateModule$8.get;
  var enforceInternalState = InternalStateModule$8.enforce;
  var TEMPLATE = String(String).split('String');

  (redefine$b.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$c(value, 'name')) {
        createNonEnumerableProperty$a(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global$r) {
      if (simple) O[key] = value;
      else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty$a(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState$6(this).source || inspectSource$1(this);
  });

  var toString$2 = {}.toString;

  var classofRaw$1 = function (it) {
    return toString$2.call(it).slice(8, -1);
  };

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$o = wellKnownSymbol$q;

  var TO_STRING_TAG$3 = wellKnownSymbol$o('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$a = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$3)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$9 = classof$a;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$9(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$a = redefine$b.exports;
  var toString$1 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine$a(Object.prototype, 'toString', toString$1, { unsafe: true });
  }

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var aFunction$9 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  var aFunction$8 = aFunction$9;

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction$8(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
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

  var fails$t = fails$x;
  var classof$8 = classofRaw$1;

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$t(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$8(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$8 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible$7 = requireObjectCoercible$8;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$g = function (argument) {
    return Object(requireObjectCoercible$7(argument));
  };

  var ceil = Math.ceil;
  var floor$3 = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger$9 = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$3 : ceil)(argument);
  };

  var toInteger$8 = toInteger$9;

  var min$7 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$k = function (argument) {
    return argument > 0 ? min$7(toInteger$8(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var classof$7 = classofRaw$1;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  var isArray$4 = Array.isArray || function isArray(arg) {
    return classof$7(arg) == 'Array';
  };

  var isObject$g = isObject$l;
  var isArray$3 = isArray$4;
  var wellKnownSymbol$n = wellKnownSymbol$q;

  var SPECIES$6 = wellKnownSymbol$n('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$3 = function (originalArray, length) {
    var C;
    if (isArray$3(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray$3(C.prototype))) C = undefined;
      else if (isObject$g(C)) {
        C = C[SPECIES$6];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var bind$8 = functionBindContext;
  var IndexedObject$4 = indexedObject;
  var toObject$f = toObject$g;
  var toLength$j = toLength$k;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
  var createMethod$4 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$f($this);
      var self = IndexedObject$4(O);
      var boundFunction = bind$8(callbackfn, that, 3);
      var length = toLength$j(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$2;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push.call(target, value); // filterOut
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$4(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$4(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$4(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$4(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$4(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$4(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$4(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$4(7)
  };

  var fails$s = fails$x;

  var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$s(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var $forEach$2 = arrayIteration.forEach;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;

  var STRICT_METHOD$3 = arrayMethodIsStrict$3('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD$3 ? function forEach(callbackfn /* , thisArg */) {
    return $forEach$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;

  var global$q = global$y;
  var DOMIterables$1 = domIterables;
  var forEach$1 = arrayForEach;
  var createNonEnumerableProperty$9 = createNonEnumerableProperty$d;

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    var Collection$1 = global$q[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== forEach$1) try {
      createNonEnumerableProperty$9(CollectionPrototype$1, 'forEach', forEach$1);
    } catch (error) {
      CollectionPrototype$1.forEach = forEach$1;
    }
  }

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var nativePropertyIsEnumerable$1 = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$3 && !nativePropertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$3(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable$1;

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$6 = requireObjectCoercible$8;

  var toIndexedObject$a = function (it) {
    return IndexedObject$3(requireObjectCoercible$6(it));
  };

  var DESCRIPTORS$a = descriptors;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$5 = createPropertyDescriptor$7;
  var toIndexedObject$9 = toIndexedObject$a;
  var toPrimitive$3 = toPrimitive$5;
  var has$b = has$f;
  var IE8_DOM_DEFINE = ie8DomDefine;

  var nativeGetOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$a ? nativeGetOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$9(O);
    P = toPrimitive$3(P, true);
    if (IE8_DOM_DEFINE) try {
      return nativeGetOwnPropertyDescriptor$2(O, P);
    } catch (error) { /* empty */ }
    if (has$b(O, P)) return createPropertyDescriptor$5(!propertyIsEnumerableModule$2.f.call(O, P), O[P]);
  };

  var global$p = global$y;

  var path$2 = global$p;

  var path$1 = path$2;
  var global$o = global$y;

  var aFunction$7 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$8 = function (namespace, method) {
    return arguments.length < 2 ? aFunction$7(path$1[namespace]) || aFunction$7(global$o[namespace])
      : path$1[namespace] && path$1[namespace][method] || global$o[namespace] && global$o[namespace][method];
  };

  var objectGetOwnPropertyNames = {};

  var toInteger$7 = toInteger$9;

  var max$3 = Math.max;
  var min$6 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$6 = function (index, length) {
    var integer = toInteger$7(index);
    return integer < 0 ? max$3(integer + length, 0) : min$6(integer, length);
  };

  var toIndexedObject$8 = toIndexedObject$a;
  var toLength$i = toLength$k;
  var toAbsoluteIndex$5 = toAbsoluteIndex$6;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$8($this);
      var length = toLength$i(O.length);
      var index = toAbsoluteIndex$5(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var has$a = has$f;
  var toIndexedObject$7 = toIndexedObject$a;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$6;

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$7(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$a(hiddenKeys$4, key) && has$a(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$a(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$3);
  };

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$7 = getBuiltIn$8;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var anObject$g = anObject$i;

  // all object keys, includes non-enumerable and symbols
  var ownKeys$2 = getBuiltIn$7('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$1.f(anObject$g(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var has$9 = has$f;
  var ownKeys$1 = ownKeys$2;
  var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$6 = objectDefineProperty;

  var copyConstructorProperties$2 = function (target, source) {
    var keys = ownKeys$1(source);
    var defineProperty = definePropertyModule$6.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$3.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$9(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var fails$r = fails$x;

  var replacement = /#|\.prototype\./;

  var isForced$3 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails$r(detection)
      : !!detection;
  };

  var normalize = isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = 'N';
  var POLYFILL = isForced$3.POLYFILL = 'P';

  var isForced_1 = isForced$3;

  var global$n = global$y;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$d;
  var redefine$9 = redefine$b.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced$2 = isForced_1;

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$n;
    } else if (STATIC) {
      target = global$n[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$n[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$8(sourceProperty, 'sham', true);
      }
      // extend global
      redefine$9(target, key, sourceProperty, options);
    }
  };

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var $$r = _export;
  var toObject$e = toObject$g;
  var nativeKeys = objectKeys$3;
  var fails$q = fails$x;

  var FAILS_ON_PRIMITIVES$2 = fails$q(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$r({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
    keys: function keys(it) {
      return nativeKeys(toObject$e(it));
    }
  });

  var toPrimitive$2 = toPrimitive$5;
  var definePropertyModule$5 = objectDefineProperty;
  var createPropertyDescriptor$4 = createPropertyDescriptor$7;

  var createProperty$5 = function (object, key, value) {
    var propertyKey = toPrimitive$2(key);
    if (propertyKey in object) definePropertyModule$5.f(object, propertyKey, createPropertyDescriptor$4(0, value));
    else object[propertyKey] = value;
  };

  var getBuiltIn$6 = getBuiltIn$8;

  var engineUserAgent = getBuiltIn$6('navigator', 'userAgent') || '';

  var global$m = global$y;
  var userAgent$2 = engineUserAgent;

  var process$3 = global$m.process;
  var versions = process$3 && process$3.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (userAgent$2) {
    match = userAgent$2.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$2.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  var fails$p = fails$x;
  var wellKnownSymbol$m = wellKnownSymbol$q;
  var V8_VERSION$2 = engineV8Version;

  var SPECIES$5 = wellKnownSymbol$m('species');

  var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$p(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$5] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$q = _export;
  var isObject$f = isObject$l;
  var isArray$2 = isArray$4;
  var toAbsoluteIndex$4 = toAbsoluteIndex$6;
  var toLength$h = toLength$k;
  var toIndexedObject$6 = toIndexedObject$a;
  var createProperty$4 = createProperty$5;
  var wellKnownSymbol$l = wellKnownSymbol$q;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('slice');

  var SPECIES$4 = wellKnownSymbol$l('species');
  var nativeSlice = [].slice;
  var max$2 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$q({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$6(this);
      var length = toLength$h(O.length);
      var k = toAbsoluteIndex$4(start, length);
      var fin = toAbsoluteIndex$4(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$2(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray$2(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$f(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$4(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var DESCRIPTORS$9 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var anObject$f = anObject$i;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  var objectDefineProperties = DESCRIPTORS$9 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$f(O);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$4.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var getBuiltIn$5 = getBuiltIn$8;

  var html$2 = getBuiltIn$5('document', 'documentElement');

  var anObject$e = anObject$i;
  var defineProperties = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey$2 = sharedKey$4;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE$2 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$2] = anObject$e(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$2] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
  };

  var aFunction$6 = aFunction$9;
  var isObject$e = isObject$l;

  var slice = [].slice;
  var factories = {};

  var construct = function (C, argsLength, args) {
    if (!(argsLength in factories)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
      factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  var functionBind = Function.bind || function bind(that /* , ...args */) {
    var fn = aFunction$6(this);
    var partArgs = slice.call(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = partArgs.concat(slice.call(arguments));
      return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
    };
    if (isObject$e(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
  };

  var $$p = _export;
  var getBuiltIn$4 = getBuiltIn$8;
  var aFunction$5 = aFunction$9;
  var anObject$d = anObject$i;
  var isObject$d = isObject$l;
  var create$5 = objectCreate;
  var bind$7 = functionBind;
  var fails$o = fails$x;

  var nativeConstruct = getBuiltIn$4('Reflect', 'construct');

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$o(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails$o(function () {
    nativeConstruct(function () { /* empty */ });
  });
  var FORCED$7 = NEW_TARGET_BUG || ARGS_BUG;

  $$p({ target: 'Reflect', stat: true, forced: FORCED$7, sham: FORCED$7 }, {
    construct: function construct(Target, args /* , newTarget */) {
      aFunction$5(Target);
      anObject$d(args);
      var newTarget = arguments.length < 3 ? Target : aFunction$5(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
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
        return new (bind$7.apply(Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create$5(isObject$d(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return isObject$d(result) ? result : instance;
    }
  });

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  var wellKnownSymbol$k = wellKnownSymbol$q;
  var create$4 = objectCreate;
  var definePropertyModule$3 = objectDefineProperty;

  var UNSCOPABLES = wellKnownSymbol$k('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    definePropertyModule$3.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$4(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var fails$n = fails$x;

  var correctPrototypeGetter = !fails$n(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var has$8 = has$f;
  var toObject$d = toObject$g;
  var sharedKey$1 = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

  var IE_PROTO = sharedKey$1('IE_PROTO');
  var ObjectPrototype$3 = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? Object.getPrototypeOf : function (O) {
    O = toObject$d(O);
    if (has$8(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype$3 : null;
  };

  var fails$m = fails$x;
  var getPrototypeOf$3 = objectGetPrototypeOf;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$d;
  var has$7 = has$f;
  var wellKnownSymbol$j = wellKnownSymbol$q;

  var ITERATOR$8 = wellKnownSymbol$j('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$m(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if (!has$7(IteratorPrototype$2, ITERATOR$8)) {
    createNonEnumerableProperty$7(IteratorPrototype$2, ITERATOR$8, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$7 = objectDefineProperty.f;
  var has$6 = has$f;
  var wellKnownSymbol$i = wellKnownSymbol$q;

  var TO_STRING_TAG$2 = wellKnownSymbol$i('toStringTag');

  var setToStringTag$9 = function (it, TAG, STATIC) {
    if (it && !has$6(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
      defineProperty$7(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$3 = objectCreate;
  var createPropertyDescriptor$3 = createPropertyDescriptor$7;
  var setToStringTag$8 = setToStringTag$9;
  var Iterators$4 = iterators;

  var returnThis$1 = function () { return this; };

  var createIteratorConstructor$2 = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$3(IteratorPrototype$1, { next: createPropertyDescriptor$3(1, next) });
    setToStringTag$8(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var isObject$c = isObject$l;

  var aPossiblePrototype$1 = function (it) {
    if (!isObject$c(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  /* eslint-disable no-proto -- safe */

  var anObject$c = anObject$i;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$c(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$o = _export;
  var createIteratorConstructor$1 = createIteratorConstructor$2;
  var getPrototypeOf$2 = objectGetPrototypeOf;
  var setPrototypeOf$4 = objectSetPrototypeOf;
  var setToStringTag$7 = setToStringTag$9;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$d;
  var redefine$8 = redefine$b.exports;
  var wellKnownSymbol$h = wellKnownSymbol$q;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;

  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$7 = wellKnownSymbol$h('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$7]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$4) {
            setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$7] != 'function') {
            createNonEnumerableProperty$6(CurrentIteratorPrototype, ITERATOR$7, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$7(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
      createNonEnumerableProperty$6(IterablePrototype, ITERATOR$7, defaultIterator);
    }
    Iterators$3[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$8(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$o({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var toIndexedObject$5 = toIndexedObject$a;
  var addToUnscopables$1 = addToUnscopables$2;
  var Iterators$2 = iterators;
  var InternalStateModule$7 = internalState;
  var defineIterator$2 = defineIterator$3;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$7 = InternalStateModule$7.set;
  var getInternalState$5 = InternalStateModule$7.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$7(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$5(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$5(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  Iterators$2.Arguments = Iterators$2.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');

  var internalMetadata = {exports: {}};

  var fails$l = fails$x;

  var freezing = !fails$l(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var hiddenKeys$1 = hiddenKeys$6;
  var isObject$b = isObject$l;
  var has$5 = has$f;
  var defineProperty$6 = objectDefineProperty.f;
  var uid$2 = uid$5;
  var FREEZING = freezing;

  var METADATA = uid$2('meta');
  var id = 0;

  var isExtensible = Object.isExtensible || function () {
    return true;
  };

  var setMetadata = function (it) {
    defineProperty$6(it, METADATA, { value: {
      objectID: 'O' + ++id, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$b(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has$5(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!has$5(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && meta.REQUIRED && isExtensible(it) && !has$5(it, METADATA)) setMetadata(it);
    return it;
  };

  var meta = internalMetadata.exports = {
    REQUIRED: false,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys$1[METADATA] = true;

  var wellKnownSymbol$g = wellKnownSymbol$q;
  var Iterators$1 = iterators;

  var ITERATOR$6 = wellKnownSymbol$g('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$3 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$6] === it);
  };

  var classof$6 = classof$a;
  var Iterators = iterators;
  var wellKnownSymbol$f = wellKnownSymbol$q;

  var ITERATOR$5 = wellKnownSymbol$f('iterator');

  var getIteratorMethod$5 = function (it) {
    if (it != undefined) return it[ITERATOR$5]
      || it['@@iterator']
      || Iterators[classof$6(it)];
  };

  var anObject$b = anObject$i;

  var iteratorClose$2 = function (iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) {
      return anObject$b(returnMethod.call(iterator)).value;
    }
  };

  var anObject$a = anObject$i;
  var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
  var toLength$g = toLength$k;
  var bind$6 = functionBindContext;
  var getIteratorMethod$4 = getIteratorMethod$5;
  var iteratorClose$1 = iteratorClose$2;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate$3 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$6(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose$1(iterator);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$a(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$4(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod$2(iterFn)) {
        for (index = 0, length = toLength$g(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        } return new Result(false);
      }
      iterator = iterFn.call(iterable);
    }

    next = iterator.next;
    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator);
        throw error;
      }
      if (typeof result == 'object' && result && result instanceof Result) return result;
    } return new Result(false);
  };

  var anInstance$6 = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    } return it;
  };

  var wellKnownSymbol$e = wellKnownSymbol$q;

  var ITERATOR$4 = wellKnownSymbol$e('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$4] = function () {
      return this;
    };
    // eslint-disable-next-line no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$4] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var isObject$a = isObject$l;
  var setPrototypeOf$3 = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$2 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf$3 &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' &&
      NewTarget !== Wrapper &&
      isObject$a(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf$3($this, NewTargetPrototype);
    return $this;
  };

  var $$n = _export;
  var global$l = global$y;
  var isForced$1 = isForced_1;
  var redefine$7 = redefine$b.exports;
  var InternalMetadataModule = internalMetadata.exports;
  var iterate$2 = iterate$3;
  var anInstance$5 = anInstance$6;
  var isObject$9 = isObject$l;
  var fails$k = fails$x;
  var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
  var setToStringTag$6 = setToStringTag$9;
  var inheritIfRequired$1 = inheritIfRequired$2;

  var collection$2 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$l[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine$7(NativePrototype, KEY,
        KEY == 'add' ? function add(value) {
          nativeMethod.call(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject$9(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject$9(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject$9(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          nativeMethod.call(this, key === 0 ? 0 : key, value);
          return this;
        }
      );
    };

    var REPLACE = isForced$1(
      CONSTRUCTOR_NAME,
      typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails$k(function () {
        new NativeConstructor().entries().next();
      }))
    );

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.REQUIRED = true;
    } else if (isForced$1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$k(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$3(function (iterable) { new NativeConstructor(iterable); });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$k(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$5(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired$1(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate$2(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$n({ global: true, forced: Constructor != NativeConstructor }, exported);

    setToStringTag$6(Constructor, CONSTRUCTOR_NAME);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var redefine$6 = redefine$b.exports;

  var redefineAll$4 = function (target, src, options) {
    for (var key in src) redefine$6(target, key, src[key], options);
    return target;
  };

  var getBuiltIn$3 = getBuiltIn$8;
  var definePropertyModule$2 = objectDefineProperty;
  var wellKnownSymbol$d = wellKnownSymbol$q;
  var DESCRIPTORS$8 = descriptors;

  var SPECIES$3 = wellKnownSymbol$d('species');

  var setSpecies$4 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule$2.f;

    if (DESCRIPTORS$8 && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var defineProperty$5 = objectDefineProperty.f;
  var create$2 = objectCreate;
  var redefineAll$3 = redefineAll$4;
  var bind$5 = functionBindContext;
  var anInstance$4 = anInstance$6;
  var iterate$1 = iterate$3;
  var defineIterator$1 = defineIterator$3;
  var setSpecies$3 = setSpecies$4;
  var DESCRIPTORS$7 = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$6 = internalState;

  var setInternalState$6 = InternalStateModule$6.set;
  var internalStateGetterFor = InternalStateModule$6.getterFor;

  var collectionStrong$2 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance$4(that, C, CONSTRUCTOR_NAME);
        setInternalState$6(that, {
          type: CONSTRUCTOR_NAME,
          index: create$2(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$7) that.size = 0;
        if (iterable != undefined) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$7) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll$3(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (DESCRIPTORS$7) state.size = 0;
          else that.size = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$7) state.size--;
            else that.size--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      redefineAll$3(C.prototype, IS_MAP ? {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$7) defineProperty$5(C.prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return C;
    },
    setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      defineIterator$1(C, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$6(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return { value: undefined, done: true };
        }
        // return step by kind
        if (kind == 'keys') return { value: entry.key, done: false };
        if (kind == 'values') return { value: entry.value, done: false };
        return { value: [entry.key, entry.value], done: false };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies$3(CONSTRUCTOR_NAME);
    }
  };

  var collection$1 = collection$2;
  var collectionStrong$1 = collectionStrong$2;

  // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  collection$1('Set', function (init) {
    return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong$1);

  var toInteger$6 = toInteger$9;
  var requireObjectCoercible$5 = requireObjectCoercible$8;

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$2 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible$5($this));
      var position = toInteger$6(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$2(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$2(true)
  };

  var charAt$1 = stringMultibyte.charAt;
  var InternalStateModule$5 = internalState;
  var defineIterator = defineIterator$3;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$5 = InternalStateModule$5.set;
  var getInternalState$4 = InternalStateModule$5.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$5(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$4(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt$1(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  var global$k = global$y;
  var DOMIterables = domIterables;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$d;
  var wellKnownSymbol$c = wellKnownSymbol$q;

  var ITERATOR$3 = wellKnownSymbol$c('iterator');
  var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  for (var COLLECTION_NAME in DOMIterables) {
    var Collection = global$k[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
        createNonEnumerableProperty$5(CollectionPrototype, ITERATOR$3, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$3] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG$1]) {
        createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
      }
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$5(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  }

  var $$m = _export;
  var fails$j = fails$x;
  var isArray$1 = isArray$4;
  var isObject$8 = isObject$l;
  var toObject$c = toObject$g;
  var toLength$f = toLength$k;
  var createProperty$3 = createProperty$5;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$b = wellKnownSymbol$q;
  var V8_VERSION$1 = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$b('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$j(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$3('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject$8(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };

  var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$m({ target: 'Array', proto: true, forced: FORCED$6 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$c(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength$f(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$3(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var global$j = global$y;

  var nativePromiseConstructor = global$j.Promise;

  var anObject$9 = anObject$i;
  var aFunction$4 = aFunction$9;
  var wellKnownSymbol$a = wellKnownSymbol$q;

  var SPECIES$2 = wellKnownSymbol$a('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$6 = function (O, defaultConstructor) {
    var C = anObject$9(O).constructor;
    var S;
    return C === undefined || (S = anObject$9(C)[SPECIES$2]) == undefined ? defaultConstructor : aFunction$4(S);
  };

  var userAgent$1 = engineUserAgent;

  var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent$1);

  var classof$5 = classofRaw$1;
  var global$i = global$y;

  var engineIsNode = classof$5(global$i.process) == 'process';

  var global$h = global$y;
  var fails$i = fails$x;
  var bind$4 = functionBindContext;
  var html = html$2;
  var createElement = documentCreateElement$1;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$2 = engineIsNode;

  var location = global$h.location;
  var set$1 = global$h.setImmediate;
  var clear = global$h.clearImmediate;
  var process$2 = global$h.process;
  var MessageChannel = global$h.MessageChannel;
  var Dispatch = global$h.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run$1 = function (id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run$1(id);
    };
  };

  var listener = function (event) {
    run$1(event.data);
  };

  var post = function (id) {
    // old engines have not location.origin
    global$h.postMessage(id + '', location.protocol + '//' + location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE$2) {
      defer = function (id) {
        process$2.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$4(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$h.addEventListener &&
      typeof postMessage == 'function' &&
      !global$h.importScripts &&
      location && location.protocol !== 'file:' &&
      !fails$i(post)
    ) {
      defer = post;
      global$h.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run$1(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set$1,
    clear: clear
  };

  var userAgent = engineUserAgent;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var global$g = global$y;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var IS_IOS = engineIsIos;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$1 = engineIsNode;

  var MutationObserver = global$g.MutationObserver || global$g.WebKitMutationObserver;
  var document$2 = global$g.document;
  var process$1 = global$g.process;
  var Promise$1 = global$g.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$g, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

  var flush$1, head, last, notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!queueMicrotask) {
    flush$1 = function () {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (error) {
          if (head) notify$1();
          else last = undefined;
          throw error;
        }
      } last = undefined;
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush$1).observe(node, { characterData: true });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      then = promise.then;
      notify$1 = function () {
        then.call(promise, flush$1);
      };
    // Node.js without promises
    } else if (IS_NODE$1) {
      notify$1 = function () {
        process$1.nextTick(flush$1);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify$1 = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global$g, flush$1);
      };
    }
  }

  var microtask$1 = queueMicrotask || function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify$1();
    } last = task;
  };

  var newPromiseCapability$2 = {};

  var aFunction$3 = aFunction$9;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$3(resolve);
    this.reject = aFunction$3(reject);
  };

  // 25.4.1.5 NewPromiseCapability(C)
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var anObject$8 = anObject$i;
  var isObject$7 = isObject$l;
  var newPromiseCapability$1 = newPromiseCapability$2;

  var promiseResolve$1 = function (C, x) {
    anObject$8(C);
    if (isObject$7(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var global$f = global$y;

  var hostReportErrors$1 = function (a, b) {
    var console = global$f.console;
    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform$1 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var $$l = _export;
  var global$e = global$y;
  var getBuiltIn$2 = getBuiltIn$8;
  var NativePromise = nativePromiseConstructor;
  var redefine$5 = redefine$b.exports;
  var redefineAll$2 = redefineAll$4;
  var setToStringTag$5 = setToStringTag$9;
  var setSpecies$2 = setSpecies$4;
  var isObject$6 = isObject$l;
  var aFunction$2 = aFunction$9;
  var anInstance$3 = anInstance$6;
  var inspectSource = inspectSource$3;
  var iterate = iterate$3;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
  var speciesConstructor$5 = speciesConstructor$6;
  var task = task$1.set;
  var microtask = microtask$1;
  var promiseResolve = promiseResolve$1;
  var hostReportErrors = hostReportErrors$1;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$1;
  var InternalStateModule$4 = internalState;
  var isForced = isForced_1;
  var wellKnownSymbol$9 = wellKnownSymbol$q;
  var IS_NODE = engineIsNode;
  var V8_VERSION = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$9('species');
  var PROMISE = 'Promise';
  var getInternalState$3 = InternalStateModule$4.get;
  var setInternalState$4 = InternalStateModule$4.set;
  var getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE);
  var PromiseConstructor = NativePromise;
  var TypeError$1 = global$e.TypeError;
  var document$1 = global$e.document;
  var process = global$e.process;
  var $fetch$1 = getBuiltIn$2('fetch');
  var newPromiseCapability = newPromiseCapabilityModule.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$e.dispatchEvent);
  var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  var FORCED$5 = isForced(PROMISE, function () {
    var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
    if (!GLOBAL_CORE_JS_PROMISE) {
      // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // We can't detect it synchronously, so just check versions
      if (V8_VERSION === 66) return true;
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
    }
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = PromiseConstructor.resolve(1);
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$1] = FakePromise;
    return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
  });

  var INCORRECT_ITERATION$1 = FORCED$5 || !checkCorrectnessOfIteration$2(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
  });

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject$6(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0;
      // variable length - can't use forEach
      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value); // can throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }
      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$e.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_REJECTION_EVENT && (handler = global$e['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    task.call(global$e, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform(function () {
          if (IS_NODE) {
            process.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    task.call(global$e, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$3 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            then.call(value,
              bind$3(internalResolve, wrapper, state),
              bind$3(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED$5) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$3(this, PromiseConstructor, PROMISE);
      aFunction$2(executor);
      Internal.call(this);
      var state = getInternalState$3(this);
      try {
        executor(bind$3(internalResolve, state), bind$3(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$4(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };
    Internal.prototype = redefineAll$2(PromiseConstructor.prototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor$5(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = IS_NODE ? process.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalState$3(promise);
      this.promise = promise;
      this.resolve = bind$3(internalResolve, state);
      this.reject = bind$3(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };

    if (typeof NativePromise == 'function') {
      nativeThen = NativePromise.prototype.then;

      // wrap native Promise#then for native async functions
      redefine$5(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // wrap fetch result
      if (typeof $fetch$1 == 'function') $$l({ global: true, enumerable: true, forced: true }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        fetch: function fetch(input /* , init */) {
          return promiseResolve(PromiseConstructor, $fetch$1.apply(global$e, arguments));
        }
      });
    }
  }

  $$l({ global: true, wrap: true, forced: FORCED$5 }, {
    Promise: PromiseConstructor
  });

  setToStringTag$5(PromiseConstructor, PROMISE, false);
  setSpecies$2(PROMISE);

  PromiseWrapper = getBuiltIn$2(PROMISE);

  // statics
  $$l({ target: PROMISE, stat: true, forced: FORCED$5 }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });

  $$l({ target: PROMISE, stat: true, forced: FORCED$5 }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  $$l({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1 }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$2(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$2(C.resolve);
        iterate(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var typedArrayConstructor = {exports: {}};

  var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

  var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
  var DESCRIPTORS$6 = descriptors;
  var global$d = global$y;
  var isObject$5 = isObject$l;
  var has$4 = has$f;
  var classof$4 = classof$a;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$d;
  var redefine$4 = redefine$b.exports;
  var defineProperty$4 = objectDefineProperty.f;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var setPrototypeOf$2 = objectSetPrototypeOf;
  var wellKnownSymbol$8 = wellKnownSymbol$q;
  var uid$1 = uid$5;

  var Int8Array$3 = global$d.Int8Array;
  var Int8ArrayPrototype = Int8Array$3 && Int8Array$3.prototype;
  var Uint8ClampedArray = global$d.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray$1 = Int8Array$3 && getPrototypeOf$1(Int8Array$3);
  var TypedArrayPrototype$1 = Int8ArrayPrototype && getPrototypeOf$1(Int8ArrayPrototype);
  var ObjectPrototype$2 = Object.prototype;
  var isPrototypeOf = ObjectPrototype$2.isPrototypeOf;

  var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
  var TYPED_ARRAY_TAG$1 = uid$1('TYPED_ARRAY_TAG');
  // Fixing native typed arrays in Opera Presto crashes the browser, see #595
  var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$2 && classof$4(global$d.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME;

  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };

  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject$5(it)) return false;
    var klass = classof$4(it);
    return klass === 'DataView'
      || has$4(TypedArrayConstructorsList, klass)
      || has$4(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray$1 = function (it) {
    if (!isObject$5(it)) return false;
    var klass = classof$4(it);
    return has$4(TypedArrayConstructorsList, klass)
      || has$4(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$m = function (it) {
    if (isTypedArray$1(it)) return it;
    throw TypeError('Target is not a typed array');
  };

  var aTypedArrayConstructor$5 = function (C) {
    if (setPrototypeOf$2) {
      if (isPrototypeOf.call(TypedArray$1, C)) return C;
    } else for (var ARRAY in TypedArrayConstructorsList) if (has$4(TypedArrayConstructorsList, NAME)) {
      var TypedArrayConstructor = global$d[ARRAY];
      if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
        return C;
      }
    } throw TypeError('Target is not a typed array constructor');
  };

  var exportTypedArrayMethod$n = function (KEY, property, forced) {
    if (!DESCRIPTORS$6) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global$d[ARRAY];
      if (TypedArrayConstructor && has$4(TypedArrayConstructor.prototype, KEY)) {
        delete TypedArrayConstructor.prototype[KEY];
      }
    }
    if (!TypedArrayPrototype$1[KEY] || forced) {
      redefine$4(TypedArrayPrototype$1, KEY, forced ? property
        : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype[KEY] || property);
    }
  };

  var exportTypedArrayStaticMethod = function (KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS$6) return;
    if (setPrototypeOf$2) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global$d[ARRAY];
        if (TypedArrayConstructor && has$4(TypedArrayConstructor, KEY)) {
          delete TypedArrayConstructor[KEY];
        }
      }
      if (!TypedArray$1[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine$4(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8Array$3[KEY] || property);
        } catch (error) { /* empty */ }
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$d[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine$4(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME in TypedArrayConstructorsList) {
    if (!global$d[NAME]) NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
  }

  // WebKit bug - typed arrays constructors prototype is Object.prototype
  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || typeof TypedArray$1 != 'function' || TypedArray$1 === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray$1 = function TypedArray() {
      throw TypeError('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
      if (global$d[NAME]) setPrototypeOf$2(global$d[NAME], TypedArray$1);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype$2) {
    TypedArrayPrototype$1 = TypedArray$1.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
      if (global$d[NAME]) setPrototypeOf$2(global$d[NAME].prototype, TypedArrayPrototype$1);
    }
  }

  // WebKit bug - one more object in Uint8ClampedArray prototype chain
  if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$1(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
    setPrototypeOf$2(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
  }

  if (DESCRIPTORS$6 && !has$4(TypedArrayPrototype$1, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$4(TypedArrayPrototype$1, TO_STRING_TAG, { get: function () {
      return isObject$5(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
    } });
    for (NAME in TypedArrayConstructorsList) if (global$d[NAME]) {
      createNonEnumerableProperty$4(global$d[NAME], TYPED_ARRAY_TAG$1, NAME);
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG$1,
    aTypedArray: aTypedArray$m,
    aTypedArrayConstructor: aTypedArrayConstructor$5,
    exportTypedArrayMethod: exportTypedArrayMethod$n,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    isView: isView,
    isTypedArray: isTypedArray$1,
    TypedArray: TypedArray$1,
    TypedArrayPrototype: TypedArrayPrototype$1
  };

  /* eslint-disable no-new -- required for testing */

  var global$c = global$y;
  var fails$h = fails$x;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

  var ArrayBuffer$3 = global$c.ArrayBuffer;
  var Int8Array$2 = global$c.Int8Array;

  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$h(function () {
    Int8Array$2(1);
  }) || !fails$h(function () {
    new Int8Array$2(-1);
  }) || !checkCorrectnessOfIteration$1(function (iterable) {
    new Int8Array$2();
    new Int8Array$2(null);
    new Int8Array$2(1.5);
    new Int8Array$2(iterable);
  }, true) || fails$h(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$2(new ArrayBuffer$3(2), 1, undefined).length !== 1;
  });

  var toInteger$5 = toInteger$9;
  var toLength$e = toLength$k;

  // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex
  var toIndex$2 = function (it) {
    if (it === undefined) return 0;
    var number = toInteger$5(it);
    var length = toLength$e(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
  };

  // IEEE754 conversions based on https://github.com/feross/ieee754
  var abs = Math.abs;
  var pow = Math.pow;
  var floor$2 = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;

  var pack = function (number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$2(log(number) / LN2);
      if (number * (c = pow(2, -exponent)) < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
        exponent = 0;
      }
    }
    for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function (buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow(2, mantissaLength);
      exponent = exponent - eBias;
    } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var toObject$b = toObject$g;
  var toAbsoluteIndex$3 = toAbsoluteIndex$6;
  var toLength$d = toLength$k;

  // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
    var O = toObject$b(this);
    var length = toLength$d(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex$3(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex$3(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };

  var global$b = global$y;
  var DESCRIPTORS$5 = descriptors;
  var NATIVE_ARRAY_BUFFER = arrayBufferNative;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$d;
  var redefineAll$1 = redefineAll$4;
  var fails$g = fails$x;
  var anInstance$2 = anInstance$6;
  var toInteger$4 = toInteger$9;
  var toLength$c = toLength$k;
  var toIndex$1 = toIndex$2;
  var IEEE754 = ieee754;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var defineProperty$3 = objectDefineProperty.f;
  var arrayFill = arrayFill$1;
  var setToStringTag$4 = setToStringTag$9;
  var InternalStateModule$3 = internalState;

  var getInternalState$2 = InternalStateModule$3.get;
  var setInternalState$3 = InternalStateModule$3.set;
  var ARRAY_BUFFER$1 = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE$1 = 'prototype';
  var WRONG_LENGTH$1 = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer$1 = global$b[ARRAY_BUFFER$1];
  var $ArrayBuffer = NativeArrayBuffer$1;
  var $DataView = global$b[DATA_VIEW];
  var $DataViewPrototype = $DataView && $DataView[PROTOTYPE$1];
  var ObjectPrototype$1 = Object.prototype;
  var RangeError$2 = global$b.RangeError;

  var packIEEE754 = IEEE754.pack;
  var unpackIEEE754 = IEEE754.unpack;

  var packInt8 = function (number) {
    return [number & 0xFF];
  };

  var packInt16 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function (buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function (number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function (number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter$1 = function (Constructor, key) {
    defineProperty$3(Constructor[PROTOTYPE$1], key, { get: function () { return getInternalState$2(this)[key]; } });
  };

  var get = function (view, count, index, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength) throw RangeError$2(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
  };

  var set = function (view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength) throw RangeError$2(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
  };

  if (!NATIVE_ARRAY_BUFFER) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$2(this, $ArrayBuffer, ARRAY_BUFFER$1);
      var byteLength = toIndex$1(length);
      setInternalState$3(this, {
        bytes: arrayFill.call(new Array(byteLength), 0),
        byteLength: byteLength
      });
      if (!DESCRIPTORS$5) this.byteLength = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance$2(this, $DataView, DATA_VIEW);
      anInstance$2(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = getInternalState$2(buffer).byteLength;
      var offset = toInteger$4(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$2('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength$c(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$2(WRONG_LENGTH$1);
      setInternalState$3(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });
      if (!DESCRIPTORS$5) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    if (DESCRIPTORS$5) {
      addGetter$1($ArrayBuffer, 'byteLength');
      addGetter$1($DataView, 'buffer');
      addGetter$1($DataView, 'byteLength');
      addGetter$1($DataView, 'byteOffset');
    }

    redefineAll$1($DataView[PROTOTYPE$1], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    /* eslint-disable no-new -- required for testing */
    if (!fails$g(function () {
      NativeArrayBuffer$1(1);
    }) || !fails$g(function () {
      new NativeArrayBuffer$1(-1);
    }) || fails$g(function () {
      new NativeArrayBuffer$1();
      new NativeArrayBuffer$1(1.5);
      new NativeArrayBuffer$1(NaN);
      return NativeArrayBuffer$1.name != ARRAY_BUFFER$1;
    })) {
    /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance$2(this, $ArrayBuffer);
        return new NativeArrayBuffer$1(toIndex$1(length));
      };
      var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE$1] = NativeArrayBuffer$1[PROTOTYPE$1];
      for (var keys = getOwnPropertyNames$1(NativeArrayBuffer$1), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$3($ArrayBuffer, key, NativeArrayBuffer$1[key]);
        }
      }
      ArrayBufferPrototype.constructor = $ArrayBuffer;
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if (setPrototypeOf$1 && getPrototypeOf($DataViewPrototype) !== ObjectPrototype$1) {
      setPrototypeOf$1($DataViewPrototype, ObjectPrototype$1);
    }

    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var nativeSetInt8 = $DataViewPrototype.setInt8;
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll$1($DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, { unsafe: true });
  }

  setToStringTag$4($ArrayBuffer, ARRAY_BUFFER$1);
  setToStringTag$4($DataView, DATA_VIEW);

  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var toInteger$3 = toInteger$9;

  var toPositiveInteger$1 = function (it) {
    var result = toInteger$3(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
  };

  var toPositiveInteger = toPositiveInteger$1;

  var toOffset$2 = function (it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
  };

  var toObject$a = toObject$g;
  var toLength$b = toLength$k;
  var getIteratorMethod$3 = getIteratorMethod$5;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
  var bind$2 = functionBindContext;
  var aTypedArrayConstructor$4 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
    var O = toObject$a(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$3(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod != undefined && !isArrayIteratorMethod$1(iteratorMethod)) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      O = [];
      while (!(step = next.call(iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = bind$2(mapfn, arguments[2], 2);
    }
    length = toLength$b(O.length);
    result = new (aTypedArrayConstructor$4(this))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $$k = _export;
  var global$a = global$y;
  var DESCRIPTORS$4 = descriptors;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
  var ArrayBufferViewCore$m = arrayBufferViewCore;
  var ArrayBufferModule = arrayBuffer;
  var anInstance$1 = anInstance$6;
  var createPropertyDescriptor$2 = createPropertyDescriptor$7;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$d;
  var toLength$a = toLength$k;
  var toIndex = toIndex$2;
  var toOffset$1 = toOffset$2;
  var toPrimitive$1 = toPrimitive$5;
  var has$3 = has$f;
  var classof$3 = classof$a;
  var isObject$4 = isObject$l;
  var create$1 = objectCreate;
  var setPrototypeOf = objectSetPrototypeOf;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var typedArrayFrom = typedArrayFrom$1;
  var forEach = arrayIteration.forEach;
  var setSpecies$1 = setSpecies$4;
  var definePropertyModule$1 = objectDefineProperty;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
  var InternalStateModule$2 = internalState;
  var inheritIfRequired = inheritIfRequired$2;

  var getInternalState$1 = InternalStateModule$2.get;
  var setInternalState$2 = InternalStateModule$2.set;
  var nativeDefineProperty$1 = definePropertyModule$1.f;
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
  var round = Math.round;
  var RangeError$1 = global$a.RangeError;
  var ArrayBuffer$2 = ArrayBufferModule.ArrayBuffer;
  var DataView$1 = ArrayBufferModule.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$m.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_TAG = ArrayBufferViewCore$m.TYPED_ARRAY_TAG;
  var TypedArray = ArrayBufferViewCore$m.TypedArray;
  var TypedArrayPrototype = ArrayBufferViewCore$m.TypedArrayPrototype;
  var aTypedArrayConstructor$3 = ArrayBufferViewCore$m.aTypedArrayConstructor;
  var isTypedArray = ArrayBufferViewCore$m.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$3(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key) {
    nativeDefineProperty$1(it, key, { get: function () {
      return getInternalState$1(this)[key];
    } });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return it instanceof ArrayBuffer$2 || (klass = classof$3(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target)
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    return isTypedArrayIndex(target, key = toPrimitive$1(key, true))
      ? createPropertyDescriptor$2(2, target[key])
      : nativeGetOwnPropertyDescriptor$1(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    if (isTypedArrayIndex(target, key = toPrimitive$1(key, true))
      && isObject$4(descriptor)
      && has$3(descriptor, 'value')
      && !has$3(descriptor, 'get')
      && !has$3(descriptor, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !descriptor.configurable
      && (!has$3(descriptor, 'writable') || descriptor.writable)
      && (!has$3(descriptor, 'enumerable') || descriptor.enumerable)
    ) {
      target[key] = descriptor.value;
      return target;
    } return nativeDefineProperty$1(target, key, descriptor);
  };

  if (DESCRIPTORS$4) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      getOwnPropertyDescriptorModule$2.f = wrappedGetOwnPropertyDescriptor;
      definePropertyModule$1.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    $$k({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$a[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState$1(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState$1(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty$1(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance$1(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!isObject$4(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer$2(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset$1(offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError$1(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError$1(WRONG_LENGTH);
            } else {
              byteLength = toLength$a($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError$1(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }
          setInternalState$2(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView$1(buffer)
          });
          while (index < length) addElement(that, index++);
        });

        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$1(TypedArrayPrototype);
      } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance$1(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return inheritIfRequired(function () {
            if (!isObject$4(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
              : typedArrayOffset !== undefined
                ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
                : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });

        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty$2(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty$2(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty$2(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

      $$k({
        global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty$2(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty$2(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies$1(CONSTRUCTOR_NAME);
    };
  } else typedArrayConstructor.exports = function () { /* empty */ };

  var createTypedArrayConstructor$1 = typedArrayConstructor.exports;

  // `Int32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  createTypedArrayConstructor$1('Int32', function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var toObject$9 = toObject$g;
  var toAbsoluteIndex$2 = toAbsoluteIndex$6;
  var toLength$9 = toLength$k;

  var min$5 = Math.min;

  // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
    var O = toObject$9(this);
    var len = toLength$9(O.length);
    var to = toAbsoluteIndex$2(target, len);
    var from = toAbsoluteIndex$2(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$5((end === undefined ? len : toAbsoluteIndex$2(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];
      else delete O[to];
      to += inc;
      from += inc;
    } return O;
  };

  var ArrayBufferViewCore$l = arrayBufferViewCore;
  var $copyWithin = arrayCopyWithin;

  var aTypedArray$l = ArrayBufferViewCore$l.aTypedArray;
  var exportTypedArrayMethod$m = ArrayBufferViewCore$l.exportTypedArrayMethod;

  // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
  exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start /* , end */) {
    return $copyWithin.call(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var ArrayBufferViewCore$k = arrayBufferViewCore;
  var $every = arrayIteration.every;

  var aTypedArray$k = ArrayBufferViewCore$k.aTypedArray;
  var exportTypedArrayMethod$l = ArrayBufferViewCore$k.exportTypedArrayMethod;

  // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
  exportTypedArrayMethod$l('every', function every(callbackfn /* , thisArg */) {
    return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$j = arrayBufferViewCore;
  var $fill = arrayFill$1;

  var aTypedArray$j = ArrayBufferViewCore$j.aTypedArray;
  var exportTypedArrayMethod$k = ArrayBufferViewCore$j.exportTypedArrayMethod;

  // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$k('fill', function fill(value /* , start, end */) {
    return $fill.apply(aTypedArray$j(this), arguments);
  });

  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;
  var speciesConstructor$4 = speciesConstructor$6;

  var typedArrayFromSpeciesAndList = function (instance, list) {
    var C = speciesConstructor$4(instance, instance.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$2(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var ArrayBufferViewCore$i = arrayBufferViewCore;
  var $filter$1 = arrayIteration.filter;
  var fromSpeciesAndList = typedArrayFromSpeciesAndList;

  var aTypedArray$i = ArrayBufferViewCore$i.aTypedArray;
  var exportTypedArrayMethod$j = ArrayBufferViewCore$i.exportTypedArrayMethod;

  // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
  exportTypedArrayMethod$j('filter', function filter(callbackfn /* , thisArg */) {
    var list = $filter$1(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList(this, list);
  });

  var ArrayBufferViewCore$h = arrayBufferViewCore;
  var $find = arrayIteration.find;

  var aTypedArray$h = ArrayBufferViewCore$h.aTypedArray;
  var exportTypedArrayMethod$i = ArrayBufferViewCore$h.exportTypedArrayMethod;

  // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
  exportTypedArrayMethod$i('find', function find(predicate /* , thisArg */) {
    return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$g = arrayBufferViewCore;
  var $findIndex = arrayIteration.findIndex;

  var aTypedArray$g = ArrayBufferViewCore$g.aTypedArray;
  var exportTypedArrayMethod$h = ArrayBufferViewCore$g.exportTypedArrayMethod;

  // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
  exportTypedArrayMethod$h('findIndex', function findIndex(predicate /* , thisArg */) {
    return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$f = arrayBufferViewCore;
  var $forEach$1 = arrayIteration.forEach;

  var aTypedArray$f = ArrayBufferViewCore$f.aTypedArray;
  var exportTypedArrayMethod$g = ArrayBufferViewCore$f.exportTypedArrayMethod;

  // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
  exportTypedArrayMethod$g('forEach', function forEach(callbackfn /* , thisArg */) {
    $forEach$1(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$e = arrayBufferViewCore;
  var $includes = arrayIncludes.includes;

  var aTypedArray$e = ArrayBufferViewCore$e.aTypedArray;
  var exportTypedArrayMethod$f = ArrayBufferViewCore$e.exportTypedArrayMethod;

  // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
  exportTypedArrayMethod$f('includes', function includes(searchElement /* , fromIndex */) {
    return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$d = arrayBufferViewCore;
  var $indexOf = arrayIncludes.indexOf;

  var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
  var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod;

  // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
  exportTypedArrayMethod$e('indexOf', function indexOf(searchElement /* , fromIndex */) {
    return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$9 = global$y;
  var ArrayBufferViewCore$c = arrayBufferViewCore;
  var ArrayIterators = es_array_iterator;
  var wellKnownSymbol$7 = wellKnownSymbol$q;

  var ITERATOR$2 = wellKnownSymbol$7('iterator');
  var Uint8Array$2 = global$9.Uint8Array;
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
  var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;
  var nativeTypedArrayIterator = Uint8Array$2 && Uint8Array$2.prototype[ITERATOR$2];

  var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
    && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

  var typedArrayValues = function values() {
    return arrayValues.call(aTypedArray$c(this));
  };

  // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
  exportTypedArrayMethod$d('entries', function entries() {
    return arrayEntries.call(aTypedArray$c(this));
  });
  // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
  exportTypedArrayMethod$d('keys', function keys() {
    return arrayKeys.call(aTypedArray$c(this));
  });
  // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
  exportTypedArrayMethod$d('values', typedArrayValues, !CORRECT_ITER_NAME);
  // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
  exportTypedArrayMethod$d(ITERATOR$2, typedArrayValues, !CORRECT_ITER_NAME);

  var ArrayBufferViewCore$b = arrayBufferViewCore;

  var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
  var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;
  var $join = [].join;

  // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$c('join', function join(separator) {
    return $join.apply(aTypedArray$b(this), arguments);
  });

  var toIndexedObject$4 = toIndexedObject$a;
  var toInteger$2 = toInteger$9;
  var toLength$8 = toLength$k;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;

  var min$4 = Math.min;
  var nativeLastIndexOf = [].lastIndexOf;
  var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('lastIndexOf');
  var FORCED$4 = NEGATIVE_ZERO || !STRICT_METHOD$2;

  // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  var arrayLastIndexOf = FORCED$4 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
    var O = toIndexedObject$4(this);
    var length = toLength$8(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = min$4(index, toInteger$2(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
    return -1;
  } : nativeLastIndexOf;

  var ArrayBufferViewCore$a = arrayBufferViewCore;
  var $lastIndexOf = arrayLastIndexOf;

  var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
  var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod;

  // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
    return $lastIndexOf.apply(aTypedArray$a(this), arguments);
  });

  var ArrayBufferViewCore$9 = arrayBufferViewCore;
  var $map$1 = arrayIteration.map;
  var speciesConstructor$3 = speciesConstructor$6;

  var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
  var aTypedArrayConstructor$1 = ArrayBufferViewCore$9.aTypedArrayConstructor;
  var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod;

  // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
  exportTypedArrayMethod$a('map', function map(mapfn /* , thisArg */) {
    return $map$1(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (aTypedArrayConstructor$1(speciesConstructor$3(O, O.constructor)))(length);
    });
  });

  var aFunction$1 = aFunction$9;
  var toObject$8 = toObject$g;
  var IndexedObject$2 = indexedObject;
  var toLength$7 = toLength$k;

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$1 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aFunction$1(callbackfn);
      var O = toObject$8(that);
      var self = IndexedObject$2(O);
      var length = toLength$7(O.length);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$1(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$1(true)
  };

  var ArrayBufferViewCore$8 = arrayBufferViewCore;
  var $reduce = arrayReduce.left;

  var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
  var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
  exportTypedArrayMethod$9('reduce', function reduce(callbackfn /* , initialValue */) {
    return $reduce(aTypedArray$8(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$7 = arrayBufferViewCore;
  var $reduceRight = arrayReduce.right;

  var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
  var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
  exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(aTypedArray$7(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$6 = arrayBufferViewCore;

  var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
  var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;
  var floor$1 = Math.floor;

  // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
  exportTypedArrayMethod$7('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$6(that).length;
    var middle = floor$1(length / 2);
    var index = 0;
    var value;
    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    } return that;
  });

  var ArrayBufferViewCore$5 = arrayBufferViewCore;
  var toLength$6 = toLength$k;
  var toOffset = toOffset$2;
  var toObject$7 = toObject$g;
  var fails$f = fails$x;

  var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
  var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;

  var FORCED$3 = fails$f(function () {
    /* global Int8Array -- safe */
    new Int8Array(1).set({});
  });

  // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
  exportTypedArrayMethod$6('set', function set(arrayLike /* , offset */) {
    aTypedArray$5(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = toObject$7(arrayLike);
    var len = toLength$6(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError('Wrong length');
    while (index < len) this[offset + index] = src[index++];
  }, FORCED$3);

  var ArrayBufferViewCore$4 = arrayBufferViewCore;
  var speciesConstructor$2 = speciesConstructor$6;
  var fails$e = fails$x;

  var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
  var aTypedArrayConstructor = ArrayBufferViewCore$4.aTypedArrayConstructor;
  var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;
  var $slice$1 = [].slice;

  var FORCED$2 = fails$e(function () {
    /* global Int8Array -- safe */
    new Int8Array(1).slice();
  });

  // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
  exportTypedArrayMethod$5('slice', function slice(start, end) {
    var list = $slice$1.call(aTypedArray$4(this), start, end);
    var C = speciesConstructor$2(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  }, FORCED$2);

  var ArrayBufferViewCore$3 = arrayBufferViewCore;
  var $some = arrayIteration.some;

  var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
  var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;

  // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
  exportTypedArrayMethod$4('some', function some(callbackfn /* , thisArg */) {
    return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$2 = arrayBufferViewCore;

  var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
  var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
  var $sort = [].sort;

  // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
  exportTypedArrayMethod$3('sort', function sort(comparefn) {
    return $sort.call(aTypedArray$2(this), comparefn);
  });

  var ArrayBufferViewCore$1 = arrayBufferViewCore;
  var toLength$5 = toLength$k;
  var toAbsoluteIndex$1 = toAbsoluteIndex$6;
  var speciesConstructor$1 = speciesConstructor$6;

  var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
  var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;

  // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
  exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
    var O = aTypedArray$1(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex$1(begin, length);
    return new (speciesConstructor$1(O, O.constructor))(
      O.buffer,
      O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
      toLength$5((end === undefined ? length : toAbsoluteIndex$1(end, length)) - beginIndex)
    );
  });

  var global$8 = global$y;
  var ArrayBufferViewCore = arrayBufferViewCore;
  var fails$d = fails$x;

  var Int8Array$1 = global$8.Int8Array;
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = ArrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString;
  var $slice = [].slice;

  // iOS Safari 6.x fails here
  var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$d(function () {
    $toLocaleString.call(new Int8Array$1(1));
  });

  var FORCED$1 = fails$d(function () {
    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
  }) || !fails$d(function () {
    Int8Array$1.prototype.toLocaleString.call([1, 2]);
  });

  // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
  exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
  }, FORCED$1);

  var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
  var fails$c = fails$x;
  var global$7 = global$y;

  var Uint8Array$1 = global$7.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
  var arrayToString = [].toString;
  var arrayJoin = [].join;

  if (fails$c(function () { arrayToString.call({}); })) {
    arrayToString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

  // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
  exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var $$j = _export;
  var aFunction = aFunction$9;
  var toObject$6 = toObject$g;
  var fails$b = fails$x;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;

  var test = [];
  var nativeSort = test.sort;

  // IE8-
  var FAILS_ON_UNDEFINED = fails$b(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$b(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');

  var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1;

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$j({ target: 'Array', proto: true, forced: FORCED }, {
    sort: function sort(comparefn) {
      return comparefn === undefined
        ? nativeSort.call(toObject$6(this))
        : nativeSort.call(toObject$6(this), aFunction(comparefn));
    }
  });

  var $$i = _export;
  var DESCRIPTORS$3 = descriptors;
  var ownKeys = ownKeys$2;
  var toIndexedObject$3 = toIndexedObject$a;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var createProperty$2 = createProperty$5;

  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  $$i({ target: 'Object', stat: true, sham: !DESCRIPTORS$3 }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject$3(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
      var keys = ownKeys(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty$2(result, key, descriptor);
      }
      return result;
    }
  });

  var anObject$7 = anObject$i;
  var iteratorClose = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$7(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
  };

  var bind$1 = functionBindContext;
  var toObject$5 = toObject$g;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod = isArrayIteratorMethod$3;
  var toLength$4 = toLength$k;
  var createProperty$1 = createProperty$5;
  var getIteratorMethod$2 = getIteratorMethod$5;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$5(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$2(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (;!(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$1(result, index, value);
      }
    } else {
      length = toLength$4(O.length);
      result = new C(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$1(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var $$h = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$h({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from
  });

  var $$g = _export;
  var toAbsoluteIndex = toAbsoluteIndex$6;
  var toInteger$1 = toInteger$9;
  var toLength$3 = toLength$k;
  var toObject$4 = toObject$g;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty = createProperty$5;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('splice');

  var max$1 = Math.max;
  var min$3 = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$g({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$4(this);
      var len = toLength$3(O.length);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$3(max$1(toInteger$1(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var isObject$3 = isObject$l;
  var classof$2 = classofRaw$1;
  var wellKnownSymbol$6 = wellKnownSymbol$q;

  var MATCH$1 = wellKnownSymbol$6('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$3(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$2(it) == 'RegExp');
  };

  var isRegExp$1 = isRegexp;

  var notARegexp = function (it) {
    if (isRegExp$1(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$5 = wellKnownSymbol$q;

  var MATCH = wellKnownSymbol$5('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$f = _export;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength$2 = toLength$k;
  var notARegExp = notARegexp;
  var requireObjectCoercible$4 = requireObjectCoercible$8;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var nativeStartsWith = ''.startsWith;
  var min$2 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  $$f({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = String(requireObjectCoercible$4(this));
      notARegExp(searchString);
      var index = toLength$2(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return nativeStartsWith
        ? nativeStartsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var requireObjectCoercible$3 = requireObjectCoercible$8;
  var whitespaces$1 = whitespaces$2;

  var whitespace = '[' + whitespaces$1 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible$3($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var fails$a = fails$x;
  var whitespaces = whitespaces$2;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$a(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$e = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$e({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $$d = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$d({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var anObject$6 = anObject$i;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$6(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var regexpStickyHelpers = {};

  var fails$9 = fails$x;

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function RE(s, f) {
    return RegExp(s, f);
  }

  regexpStickyHelpers.UNSUPPORTED_Y = fails$9(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  regexpStickyHelpers.BROKEN_CARET = fails$9(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec$3 = patchedExec;

  var $$c = _export;
  var exec = regexpExec$3;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$c({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var redefine$3 = redefine$b.exports;
  var fails$8 = fails$x;
  var wellKnownSymbol$4 = wellKnownSymbol$q;
  var regexpExec$2 = regexpExec$3;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$d;

  var SPECIES = wellKnownSymbol$4('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$8(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    return 'a'.replace(/./, '$0') === '$0';
  })();

  var REPLACE = wellKnownSymbol$4('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$8(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol$4(KEY);

    var DELEGATES_TO_SYMBOL = !fails$8(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$8(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !(
        REPLACE_SUPPORTS_NAMED_GROUPS &&
        REPLACE_KEEPS_$0 &&
        !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      )) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec$2) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine$3(String.prototype, KEY, stringMethod);
      redefine$3(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
    }

    if (sham) createNonEnumerableProperty$1(RegExp.prototype[SYMBOL], 'sham', true);
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  var classof$1 = classofRaw$1;
  var regexpExec$1 = regexpExec$3;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classof$1(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec$1.call(R, S);
  };

  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var isRegExp = isRegexp;
  var anObject$5 = anObject$i;
  var requireObjectCoercible$2 = requireObjectCoercible$8;
  var speciesConstructor = speciesConstructor$6;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var toLength$1 = toLength$k;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var fails$7 = fails$x;

  var arrayPush = [].push;
  var min$1 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails$7(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegExpWellKnownSymbolLogic$1('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible$2(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$2(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject$5(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = min$1(toLength$1(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = advanceStringIndex$1(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SUPPORTS_Y);

  var $$b = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$b({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$a = _export;
  var IndexedObject$1 = indexedObject;
  var toIndexedObject$2 = toIndexedObject$a;
  var arrayMethodIsStrict = arrayMethodIsStrict$4;

  var nativeJoin = [].join;

  var ES3_STRINGS = IndexedObject$1 != Object;
  var STRICT_METHOD = arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$a({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject$2(this), separator === undefined ? ',' : separator);
    }
  });

  var requireObjectCoercible$1 = requireObjectCoercible$8;

  var quot = /"/g;

  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
  // https://tc39.es/ecma262/#sec-createhtml
  var createHtml = function (string, tag, attribute, value) {
    var S = String(requireObjectCoercible$1(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  var fails$6 = fails$x;

  // check the existence of a method, lowercase
  // of a tag and escaping quotes in arguments
  var stringHtmlForced = function (METHOD_NAME) {
    return fails$6(function () {
      var test = ''[METHOD_NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    });
  };

  var $$9 = _export;
  var createHTML = createHtml;
  var forcedStringHTMLMethod = stringHtmlForced;

  // `String.prototype.anchor` method
  // https://tc39.es/ecma262/#sec-string.prototype.anchor
  $$9({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
    anchor: function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    }
  });

  var $$8 = _export;
  var global$6 = global$y;

  // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis
  $$8({ global: true }, {
    globalThis: global$6
  });

  var collection = collection$2;
  var collectionStrong = collectionStrong$2;

  // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  collection('Map', function (init) {
    return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var DESCRIPTORS$2 = descriptors;
  var fails$5 = fails$x;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var toObject$3 = toObject$g;
  var IndexedObject = indexedObject;

  var nativeAssign = Object.assign;
  var defineProperty$2 = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !nativeAssign || fails$5(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$2 && nativeAssign({ b: 1 }, nativeAssign(defineProperty$2({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$2(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    /* global Symbol -- required for testing */
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys$1(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$3(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    var propertyIsEnumerable = propertyIsEnumerableModule$1.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys$1(S).concat(getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$2 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : nativeAssign;

  var $$7 = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  $$7({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
    assign: assign
  });

  var toObject$2 = toObject$g;

  var floor = Math.floor;
  var replace$1 = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$2(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$1.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject$4 = anObject$i;
  var toLength = toLength$k;
  var toInteger = toInteger$9;
  var requireObjectCoercible = requireObjectCoercible$8;
  var advanceStringIndex = advanceStringIndex$2;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;

  var max = Math.max;
  var min = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        if (
          (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
          (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
        ) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject$4(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];
  });

  var $$6 = _export;
  var fill = arrayFill$1;
  var addToUnscopables = addToUnscopables$2;

  // `Array.prototype.fill` method
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  $$6({ target: 'Array', proto: true }, {
    fill: fill
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('fill');

  var objectGetOwnPropertyNamesExternal = {};

  var toIndexedObject$1 = toIndexedObject$a;
  var nativeGetOwnPropertyNames$2 = objectGetOwnPropertyNames.f;

  var toString = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return nativeGetOwnPropertyNames$2(it);
    } catch (error) {
      return windowNames.slice();
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]'
      ? getWindowNames(it)
      : nativeGetOwnPropertyNames$2(toIndexedObject$1(it));
  };

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$3 = wellKnownSymbol$q;

  wellKnownSymbolWrapped.f = wellKnownSymbol$3;

  var path = path$2;
  var has$2 = has$f;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$1 = objectDefineProperty.f;

  var defineWellKnownSymbol$4 = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!has$2(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var $$5 = _export;
  var global$5 = global$y;
  var getBuiltIn$1 = getBuiltIn$8;
  var DESCRIPTORS$1 = descriptors;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var fails$4 = fails$x;
  var has$1 = has$f;
  var isArray = isArray$4;
  var isObject$2 = isObject$l;
  var anObject$3 = anObject$i;
  var toObject$1 = toObject$g;
  var toIndexedObject = toIndexedObject$a;
  var toPrimitive = toPrimitive$5;
  var createPropertyDescriptor$1 = createPropertyDescriptor$7;
  var nativeObjectCreate = objectCreate;
  var objectKeys = objectKeys$3;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createNonEnumerableProperty = createNonEnumerableProperty$d;
  var redefine$2 = redefine$b.exports;
  var shared = shared$4.exports;
  var sharedKey = sharedKey$4;
  var hiddenKeys = hiddenKeys$6;
  var uid = uid$5;
  var wellKnownSymbol$2 = wellKnownSymbol$q;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$3 = defineWellKnownSymbol$4;
  var setToStringTag$3 = setToStringTag$9;
  var InternalStateModule$1 = internalState;
  var $forEach = arrayIteration.forEach;

  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive');
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState = InternalStateModule$1.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = global$5.Symbol;
  var $stringify = getBuiltIn$1('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames$1 = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks');
  var QObject = global$5.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$1 && fails$4(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
    setInternalState$1(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$1) symbol.description = description;
    return symbol;
  };

  var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return Object(it) instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$3(O);
    var key = toPrimitive(P, true);
    anObject$3(Attributes);
    if (has$1(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has$1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has$1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$3(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!DESCRIPTORS$1 || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype && has$1(AllSymbols, P) && !has$1(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has$1(this, P) || !has$1(AllSymbols, P) || has$1(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has$1(AllSymbols, key) && !has$1(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && has$1(AllSymbols, key) && !(has$1(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!has$1(AllSymbols, key) && !has$1(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (has$1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$1(ObjectPrototype, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (has$1(this, HIDDEN) && has$1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
      };
      if (DESCRIPTORS$1 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    redefine$2($Symbol[PROTOTYPE], 'toString', function toString() {
      return getInternalState(this).tag;
    });

    redefine$2($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });

    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$2(name), name);
    };

    if (DESCRIPTORS$1) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
      {
        redefine$2(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
      }
    }
  }

  $$5({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
    Symbol: $Symbol
  });

  $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol$3(name);
  });

  $$5({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = String(key);
      if (has$1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (has$1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  $$5({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS$1 }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });

  $$5({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  $$5({ target: 'Object', stat: true, forced: fails$4(function () { getOwnPropertySymbolsModule.f(1); }) }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule.f(toObject$1(it));
    }
  });

  // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify
  if ($stringify) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$4(function () {
      var symbol = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) != '[null]'
        // WebKit converts symbol values to JSON as null
        || $stringify({ a: symbol }) != '{}'
        // V8 throws on boxed symbols
        || $stringify(Object(symbol)) != '{}';
    });

    $$5({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = [it];
        var index = 1;
        var $replacer;
        while (arguments.length > index) args.push(arguments[index++]);
        $replacer = replacer;
        if (!isObject$2(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return $stringify.apply(null, args);
      }
    });
  }

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
    createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  }
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$3($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var $$4 = _export;
  var DESCRIPTORS = descriptors;
  var global$4 = global$y;
  var has = has$f;
  var isObject$1 = isObject$l;
  var defineProperty = objectDefineProperty.f;
  var copyConstructorProperties = copyConstructorProperties$2;

  var NativeSymbol = global$4.Symbol;

  if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;

    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject$1(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    $$4({ global: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  var defineWellKnownSymbol$2 = defineWellKnownSymbol$4;

  // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol$2('iterator');

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function noop() {}

  function is_promise(value) {
    return value && _typeof(value) === 'object' && typeof value.then === 'function';
  }

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
  }

  function custom_event(type, detail) {
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
        var callback = render_callbacks[_i4];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  function handle_promise(promise, info) {
    var token = info.token = {};

    function update(type, index, key, value) {
      if (info.token !== token) return;
      info.resolved = value;
      var child_ctx = info.ctx;

      if (key !== undefined) {
        child_ctx = child_ctx.slice();
        child_ctx[key] = value;
      }

      var block = type && (info.current = type)(child_ctx);
      var needs_flush = false;

      if (info.block) {
        if (info.blocks) {
          info.blocks.forEach(function (block, i) {
            if (i !== index && block) {
              group_outros();
              transition_out(block, 1, 1, function () {
                if (info.blocks[i] === block) {
                  info.blocks[i] = null;
                }
              });
              check_outros();
            }
          });
        } else {
          info.block.d(1);
        }

        block.c();
        transition_in(block, 1);
        block.m(info.mount(), info.anchor);
        needs_flush = true;
      }

      info.block = block;
      if (info.blocks) info.blocks[index] = block;

      if (needs_flush) {
        flush();
      }
    }

    if (is_promise(promise)) {
      var _current_component = get_current_component();

      promise.then(function (value) {
        set_current_component(_current_component);
        update(info.then, 1, info.value, value);
        set_current_component(null);
      }, function (error) {
        set_current_component(_current_component);
        update(info.catch, 2, info.error, error);
        set_current_component(null);

        if (!info.hasCatch) {
          throw error;
        }
      }); // if we previously had a then/catch block, destroy it

      if (info.current !== info.pending) {
        update(info.pending, 0);
        return true;
      }
    } else {
      if (info.current !== info.then) {
        update(info.then, 1, info.value, promise);
        return true;
      }

      info.resolved = promise;
    }
  }

  function update_await_block_branch(info, ctx, dirty) {
    var child_ctx = ctx.slice();
    var resolved = info.resolved;

    if (info.current === info.then) {
      child_ctx[info.value] = resolved;
    }

    if (info.current === info.catch) {
      child_ctx[info.error] = resolved;
    }

    info.block.p(child_ctx, dirty);
  }

  var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor, customElement) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);

    if (!customElement) {
      // onMount happens before the initial afterUpdate
      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
    }

    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
    var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }

    set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */


  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.44.2'
    }, detail), true));
  }

  function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', {
      node: node
    });
    detach(node);
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
      node: node,
      attribute: attribute
    });else dispatch_dev('SvelteDOMSetAttribute', {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', {
      node: text,
      data: data
    });
    text.data = data;
  }

  function validate_slots(name, slot, keys) {
    for (var _i5 = 0, _Object$keys = Object.keys(slot); _i5 < _Object$keys.length; _i5++) {
      var slot_key = _Object$keys[_i5];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }
  /**
   * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
   */


  var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(SvelteComponentDev, _SvelteComponent);

    var _super3 = _createSuper$2(SvelteComponentDev);

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _super3.call(this);
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
      }
    }, {
      key: "$capture_state",
      value: function $capture_state() {}
    }, {
      key: "$inject_state",
      value: function $inject_state() {}
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var defineWellKnownSymbol$1 = defineWellKnownSymbol$4;

  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator
  defineWellKnownSymbol$1('asyncIterator');

  var defineWellKnownSymbol = defineWellKnownSymbol$4;

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol('toStringTag');

  var global$3 = global$y;
  var setToStringTag$2 = setToStringTag$9;

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag$2(global$3.JSON, 'JSON', true);

  var setToStringTag$1 = setToStringTag$9;

  // Math[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-math-@@tostringtag
  setToStringTag$1(Math, 'Math', true);

  var $$3 = _export;
  var fails$3 = fails$x;
  var toObject = toObject$g;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES$1 = fails$3(function () { nativeGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$3({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !CORRECT_PROTOTYPE_GETTER }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject(it));
    }
  });

  var runtime = {exports: {}};

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

  var regenerator = runtime.exports;

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Error_1 = globals.Error;
  var file$1 = "src/FetchExample.svelte"; // (29:1) {:catch error}

  function create_catch_block(ctx) {
    var p;
    var t_value =
    /*error*/
    ctx[2].message + "";
    var t;
    var block = {
      c: function create() {
        p = element("p");
        t = text(t_value);
        set_style(p, "color", "red");
        add_location(p, file$1, 29, 2, 538);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block.name,
      type: "catch",
      source: "(29:1) {:catch error}",
      ctx: ctx
    });
    return block;
  } // (21:1) {:then photos}


  function create_then_block(ctx) {
    var pre;
    var code1;
    var code0;
    var t_value = JSON.stringify(
    /*photos*/
    ctx[1], null, 2) + "";
    var t;
    var block = {
      c: function create() {
        pre = element("pre");
        code1 = element("code");
        code0 = element("code");
        t = text(t_value);
        add_location(code0, file$1, 23, 6, 436);
        add_location(code1, file$1, 22, 4, 423);
        add_location(pre, file$1, 21, 2, 413);
      },
      m: function mount(target, anchor) {
        insert_dev(target, pre, anchor);
        append_dev(pre, code1);
        append_dev(code1, code0);
        append_dev(code0, t);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(pre);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block.name,
      type: "then",
      source: "(21:1) {:then photos}",
      ctx: ctx
    });
    return block;
  } // (19:17)    <p>...loading with async fetch</p>  {:then photos}


  function create_pending_block(ctx) {
    var p;
    var block = {
      c: function create() {
        p = element("p");
        p.textContent = "...loading with async fetch";
        add_location(p, file$1, 19, 2, 360);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block.name,
      type: "pending",
      source: "(19:17)    <p>...loading with async fetch</p>  {:then photos}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$1(ctx) {
    var div;
    var hr;
    var t0;
    var p;
    var t2;
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: true,
      pending: create_pending_block,
      then: create_then_block,
      catch: create_catch_block,
      value: 1,
      error: 2
    };
    handle_promise(/*promise*/
    ctx[0], info);
    var block = {
      c: function create() {
        div = element("div");
        hr = element("hr");
        t0 = space();
        p = element("p");
        p.textContent = "Loading Data with Fetch()";
        t2 = space();
        info.block.c();
        add_location(hr, file$1, 16, 1, 299);
        add_location(p, file$1, 17, 1, 307);
        add_location(div, file$1, 15, 0, 292);
      },
      l: function claim(nodes) {
        throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, hr);
        append_dev(div, t0);
        append_dev(div, p);
        append_dev(div, t2);
        info.block.m(div, info.anchor = null);

        info.mount = function () {
          return div;
        };

        info.anchor = null;
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;
        update_await_block_branch(info, ctx, dirty);
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        info.block.d();
        info.token = null;
        info = null;
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function fetchMockPhotos() {
    return _fetchMockPhotos.apply(this, arguments);
  }

  function _fetchMockPhotos() {
    _fetchMockPhotos = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var res, photos;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://jsonplaceholder.typicode.com/users");

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              photos = _context.sent;

              if (!res.ok) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", photos);

            case 10:
              throw new Error('Something went wrong.');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchMockPhotos.apply(this, arguments);
  }

  function instance$1($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('FetchExample', slots, []);
    var promise = fetchMockPhotos();
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<FetchExample> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$capture_state = function () {
      return {
        promise: promise,
        fetchMockPhotos: fetchMockPhotos
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('promise' in $$props) $$invalidate(0, promise = $$props.promise);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [promise];
  }

  var FetchExample = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(FetchExample, _SvelteComponentDev);

    var _super = _createSuper$1(FetchExample);

    function FetchExample(options) {
      var _this;

      _classCallCheck(this, FetchExample);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "FetchExample",
        options: options,
        id: create_fragment$1.name
      });
      return _this;
    }

    return FetchExample;
  }(SvelteComponentDev);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var file = "src/App.svelte";

  function create_fragment(ctx) {
    var main;
    var h1;
    var t0;
    var t1;
    var t2;
    var t3;
    var h2;
    var t5;
    var p;
    var t6;
    var a;
    var t8;
    var t9;
    var fetchexample;
    var current;
    fetchexample = new FetchExample({
      $$inline: true
    });
    var block = {
      c: function create() {
        main = element("main");
        h1 = element("h1");
        t0 = text("Hello ");
        t1 = text(
        /*name*/
        ctx[0]);
        t2 = text("!");
        t3 = space();
        h2 = element("h2");
        h2.textContent = "Hello Internet Explorer 11";
        t5 = space();
        p = element("p");
        t6 = text("Visit the ");
        a = element("a");
        a.textContent = "Svelte tutorial";
        t8 = text(" to learn\n\t\thow to build Svelte apps.");
        t9 = space();
        create_component(fetchexample.$$.fragment);
        attr_dev(h1, "class", "svelte-1tky8bj");
        add_location(h1, file, 6, 1, 95);
        add_location(h2, file, 7, 1, 119);
        attr_dev(a, "href", "https://svelte.dev/tutorial");
        add_location(a, file, 9, 12, 172);
        add_location(p, file, 8, 1, 156);
        attr_dev(main, "class", "svelte-1tky8bj");
        add_location(main, file, 5, 0, 87);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, main, anchor);
        append_dev(main, h1);
        append_dev(h1, t0);
        append_dev(h1, t1);
        append_dev(h1, t2);
        append_dev(main, t3);
        append_dev(main, h2);
        append_dev(main, t5);
        append_dev(main, p);
        append_dev(p, t6);
        append_dev(p, a);
        append_dev(p, t8);
        append_dev(main, t9);
        mount_component(fetchexample, main, null);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (!current || dirty &
        /*name*/
        1) set_data_dev(t1,
        /*name*/
        ctx[0]);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(fetchexample.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(fetchexample.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(main);
        destroy_component(fetchexample);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('App', slots, []);
    var name = $$props.name;
    var writable_props = ['name'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<App> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('name' in $$props) $$invalidate(0, name = $$props.name);
    };

    $$self.$capture_state = function () {
      return {
        FetchExample: FetchExample,
        name: name
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('name' in $$props) $$invalidate(0, name = $$props.name);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [name];
  }

  var App = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(App, _SvelteComponentDev);

    var _super = _createSuper(App);

    function App(options) {
      var _this;

      _classCallCheck(this, App);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        name: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "App",
        options: options,
        id: create_fragment.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*name*/
      ctx[0] === undefined && !('name' in props)) {
        console.warn("<App> was created without expected prop 'name'");
      }

      return _this;
    }

    _createClass(App, [{
      key: "name",
      get: function get() {
        throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return App;
  }(SvelteComponentDev);

  var $$2 = _export;
  var global$2 = global$y;
  var arrayBufferModule = arrayBuffer;
  var setSpecies = setSpecies$4;

  var ARRAY_BUFFER = 'ArrayBuffer';
  var ArrayBuffer$1 = arrayBufferModule[ARRAY_BUFFER];
  var NativeArrayBuffer = global$2[ARRAY_BUFFER];

  // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor
  $$2({ global: true, forced: NativeArrayBuffer !== ArrayBuffer$1 }, {
    ArrayBuffer: ArrayBuffer$1
  });

  setSpecies(ARRAY_BUFFER);

  var $$1 = _export;
  var fails$2 = fails$x;
  var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;

  var FAILS_ON_PRIMITIVES = fails$2(function () { return !Object.getOwnPropertyNames(1); });

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  $$1({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    getOwnPropertyNames: nativeGetOwnPropertyNames
  });

  var createTypedArrayConstructor = typedArrayConstructor.exports;

  // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  createTypedArrayConstructor('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var fails$1 = fails$x;
  var wellKnownSymbol$1 = wellKnownSymbol$q;
  var IS_PURE = isPure;

  var ITERATOR$1 = wellKnownSymbol$1('iterator');

  var nativeUrl = !fails$1(function () {
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return (IS_PURE && !url.toJSON)
      || !searchParams.sort
      || url.href !== 'http://a/c%20d?a=1&c=3'
      || searchParams.get('c') !== '3'
      || String(new URLSearchParams('?a=1')) !== 'a=1'
      || !searchParams[ITERATOR$1]
      // throws in Edge
      || new URL('https://a@b').username !== 'a'
      || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
      // not punycoded in Edge
      || new URL('http://тест').host !== 'xn--e1aybc'
      // not escaped in Chrome 62-
      || new URL('http://a#б').hash !== '#%D0%B1'
      // fails in Chrome 66-
      || result !== 'a1c3'
      // throws in Safari
      || new URL('http://x', undefined).host !== 'x';
  });

  var anObject$2 = anObject$i;
  var getIteratorMethod$1 = getIteratorMethod$5;

  var getIterator$1 = function (it) {
    var iteratorMethod = getIteratorMethod$1(it);
    if (typeof iteratorMethod != 'function') {
      throw TypeError(String(it) + ' is not iterable');
    } return anObject$2(iteratorMethod.call(it));
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $ = _export;
  var getBuiltIn = getBuiltIn$8;
  var USE_NATIVE_URL = nativeUrl;
  var redefine$1 = redefine$b.exports;
  var redefineAll = redefineAll$4;
  var setToStringTag = setToStringTag$9;
  var createIteratorConstructor = createIteratorConstructor$2;
  var InternalStateModule = internalState;
  var anInstance = anInstance$6;
  var hasOwn = has$f;
  var bind = functionBindContext;
  var classof = classof$a;
  var anObject$1 = anObject$i;
  var isObject = isObject$l;
  var create = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$7;
  var getIterator = getIterator$1;
  var getIteratorMethod = getIteratorMethod$5;
  var wellKnownSymbol = wellKnownSymbol$q;

  var $fetch = getBuiltIn('fetch');
  var Headers$1 = getBuiltIn('Headers');
  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function (bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function (sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function (it) {
    var result = it.replace(plus, ' ');
    var bytes = 4;
    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = result.replace(percentSequence(bytes--), percentDecode);
      }
      return result;
    }
  };

  var find = /[!'()~]|%20/g;

  var replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function (match) {
    return replace[match];
  };

  var serialize = function (it) {
    return encodeURIComponent(it).replace(find, replacer);
  };

  var parseSearchParams = function (result, query) {
    if (query) {
      var attributes = query.split('&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = attribute.split('=');
          result.push({
            key: deserialize(entry.shift()),
            value: deserialize(entry.join('='))
          });
        }
      }
    }
  };

  var updateSearchParams = function (query) {
    this.entries.length = 0;
    parseSearchParams(this.entries, query);
  };

  var validateArgumentsLength = function (passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    } return step;
  });

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
    anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var that = this;
    var entries = [];
    var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

    setInternalState(that, {
      type: URL_SEARCH_PARAMS,
      entries: entries,
      updateURL: function () { /* empty */ },
      updateSearchParams: updateSearchParams
    });

    if (init !== undefined) {
      if (isObject(init)) {
        iteratorMethod = getIteratorMethod(init);
        if (typeof iteratorMethod === 'function') {
          iterator = iteratorMethod.call(init);
          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            entryIterator = getIterator(anObject$1(step.value));
            entryNext = entryIterator.next;
            if (
              (first = entryNext.call(entryIterator)).done ||
              (second = entryNext.call(entryIterator)).done ||
              !entryNext.call(entryIterator).done
            ) throw TypeError('Expected sequence with length 2');
            entries.push({ key: first.value + '', value: second.value + '' });
          }
        } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
      } else {
        parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
      }
    }
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength(arguments.length, 2);
      var state = getInternalParamsState(this);
      state.entries.push({ key: name + '', value: value + '' });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = name + '';
      var index = 0;
      while (index < entries.length) {
        if (entries[index].key === key) entries.splice(index, 1);
        else index++;
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = name + '';
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }
      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = name + '';
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) result.push(entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = name + '';
      var index = 0;
      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }
      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = name + '';
      var val = value + '';
      var index = 0;
      var entry;
      for (; index < entries.length; index++) {
        entry = entries[index];
        if (entry.key === key) {
          if (found) entries.splice(index--, 1);
          else {
            found = true;
            entry.value = val;
          }
        }
      }
      if (!found) entries.push({ key: key, value: val });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      var entries = state.entries;
      // Array#sort is not stable in some engines
      var slice = entries.slice();
      var entry, entriesIndex, sliceIndex;
      entries.length = 0;
      for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
        entry = slice[sliceIndex];
        for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
          if (entries[entriesIndex].key > entry.key) {
            entries.splice(entriesIndex, 0, entry);
            break;
          }
        }
        if (entriesIndex === sliceIndex) entries.push(entry);
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, { enumerable: true });

  // `URLSearchParams.prototype[@@iterator]` method
  redefine$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  redefine$1(URLSearchParamsPrototype, 'toString', function toString() {
    var entries = getInternalParamsState(this).entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      result.push(serialize(entry.key) + '=' + serialize(entry.value));
    } return result.join('&');
  }, { enumerable: true });

  setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  $({ global: true, forced: !USE_NATIVE_URL }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
  // https://github.com/zloirock/core-js/issues/674
  if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers$1 == 'function') {
    $({ global: true, enumerable: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        var args = [input];
        var init, body, headers;
        if (arguments.length > 1) {
          init = arguments[1];
          if (isObject(init)) {
            body = init.body;
            if (classof(body) === URL_SEARCH_PARAMS) {
              headers = init.headers ? new Headers$1(init.headers) : new Headers$1();
              if (!headers.has('content-type')) {
                headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
              }
              init = create(init, {
                body: createPropertyDescriptor(0, String(body)),
                headers: createPropertyDescriptor(0, headers)
              });
            }
          }
          args.push(init);
        } return $fetch.apply(this, args);
      }
    });
  }

  var redefine = redefine$b.exports;
  var anObject = anObject$i;
  var fails = fails$x;
  var flags = regexpFlags$1;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  var global$1 = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global$1 !== 'undefined' && global$1;
  var support = {
    searchParams: 'URLSearchParams' in global$1,
    iterable: 'Symbol' in global$1 && 'iterator' in Symbol,
    blob: 'FileReader' in global$1 && 'Blob' in global$1 && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in global$1,
    arrayBuffer: 'ArrayBuffer' in global$1
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          var isConsumed = consumed(this);

          if (isConsumed) {
            return isConsumed;
          }

          if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
            return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
          } else {
            return Promise.resolve(this._bodyArrayBuffer);
          }
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;

        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' '); // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751

    preProcessedHeaders.split('\r').map(function (header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
    }).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);
  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }

    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }
  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  var DOMException = global$1.DOMException;

  try {
    new DOMException();
  } catch (err) {
    DOMException = function DOMException(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };

    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }

  function fetch$1(input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'));
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function () {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function () {
        setTimeout(function () {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function () {
        setTimeout(function () {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.onabort = function () {
        setTimeout(function () {
          reject(new DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && global$1.location.href ? global$1.location.href : url;
        } catch (e) {
          return url;
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (support.arrayBuffer && request.headers.get('Content-Type') && request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && _typeof(init.headers) === 'object' && !(init.headers instanceof Headers)) {
        Object.getOwnPropertyNames(init.headers).forEach(function (name) {
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
      } else {
        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function () {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  }
  fetch$1.polyfill = true;

  if (!global$1.fetch) {
    global$1.fetch = fetch$1;
    global$1.Headers = Headers;
    global$1.Request = Request;
    global$1.Response = Response;
  }

  var main = new App({
    target: document.body,
    props: {
      name: 'world'
    }
  });

  return main;

})();
//# sourceMappingURL=bundle.js.map
