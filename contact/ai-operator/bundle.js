import { seiunSystemPrompt } from "./prompt.js?v=20250216120000";
function Om(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var zs = { exports: {} }, Yl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function Jy() {
  if (cp) return Yl;
  cp = 1;
  var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(u, f, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), "key" in f) {
      d = {};
      for (var g in f)
        g !== "key" && (d[g] = f[g]);
    } else d = f;
    return f = d.ref, {
      $$typeof: i,
      type: u,
      key: m,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return Yl.Fragment = n, Yl.jsx = o, Yl.jsxs = o, Yl;
}
var dp;
function ky() {
  return dp || (dp = 1, zs.exports = Jy()), zs.exports;
}
var he = ky(), Ps = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp;
function Oy() {
  if (pp) return ie;
  pp = 1;
  var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), _ = Symbol.iterator;
  function R(M) {
    return M === null || typeof M != "object" ? null : (M = _ && M[_] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var V = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {
    },
    enqueueReplaceState: function () {
    },
    enqueueSetState: function () {
    }
  }, b = Object.assign, F = {};
  function k(M, H, B) {
    this.props = M, this.context = H, this.refs = F, this.updater = B || V;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function (M, H) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, H, "setState");
  }, k.prototype.forceUpdate = function (M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function X() {
  }
  X.prototype = k.prototype;
  function z(M, H, B) {
    this.props = M, this.context = H, this.refs = F, this.updater = B || V;
  }
  var Z = z.prototype = new X();
  Z.constructor = z, b(Z, k.prototype), Z.isPureReactComponent = !0;
  var te = Array.isArray;
  function j() {
  }
  var J = { H: null, A: null, T: null, S: null }, ge = Object.prototype.hasOwnProperty;
  function $(M, H, B) {
    var K = B.ref;
    return {
      $$typeof: i,
      type: M,
      key: H,
      ref: K !== void 0 ? K : null,
      props: B
    };
  }
  function ce(M, H) {
    return $(M.type, H, M.props);
  }
  function _e(M) {
    return typeof M == "object" && M !== null && M.$$typeof === i;
  }
  function ue(M) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function (B) {
      return H[B];
    });
  }
  var ke = /\/+/g;
  function Et(M, H) {
    return typeof M == "object" && M !== null && M.key != null ? ue("" + M.key) : H.toString(36);
  }
  function it(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(j, j) : (M.status = "pending", M.then(
          function (H) {
            M.status === "pending" && (M.status = "fulfilled", M.value = H);
          },
          function (H) {
            M.status === "pending" && (M.status = "rejected", M.reason = H);
          }
        )), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function w(M, H, B, K, le) {
    var se = typeof M;
    (se === "undefined" || se === "boolean") && (M = null);
    var Ee = !1;
    if (M === null) Ee = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case i:
            case n:
              Ee = !0;
              break;
            case v:
              return Ee = M._init, w(
                Ee(M._payload),
                H,
                B,
                K,
                le
              );
          }
      }
    if (Ee)
      return le = le(M), Ee = K === "" ? "." + Et(M, 0) : K, te(le) ? (B = "", Ee != null && (B = Ee.replace(ke, "$&/") + "/"), w(le, H, B, "", function (Qi) {
        return Qi;
      })) : le != null && (_e(le) && (le = ce(
        le,
        B + (le.key == null || M && M.key === le.key ? "" : ("" + le.key).replace(
          ke,
          "$&/"
        ) + "/") + Ee
      )), H.push(le)), 1;
    Ee = 0;
    var tt = K === "" ? "." : K + ":";
    if (te(M))
      for (var Ve = 0; Ve < M.length; Ve++)
        K = M[Ve], se = tt + Et(K, Ve), Ee += w(
          K,
          H,
          B,
          se,
          le
        );
    else if (Ve = R(M), typeof Ve == "function")
      for (M = Ve.call(M), Ve = 0; !(K = M.next()).done;)
        K = K.value, se = tt + Et(K, Ve++), Ee += w(
          K,
          H,
          B,
          se,
          le
        );
    else if (se === "object") {
      if (typeof M.then == "function")
        return w(
          it(M),
          H,
          B,
          K,
          le
        );
      throw H = String(M), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function P(M, H, B) {
    if (M == null) return M;
    var K = [], le = 0;
    return w(M, K, "", "", function (se) {
      return H.call(B, se, le++);
    }), K;
  }
  function ne(M) {
    if (M._status === -1) {
      var H = M._result;
      H = H(), H.then(
        function (B) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = B);
        },
        function (B) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = B);
        }
      ), M._status === -1 && (M._status = 0, M._result = H);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var Me = typeof reportError == "function" ? reportError : function (M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  }, Ie = {
    map: P,
    forEach: function (M, H, B) {
      P(
        M,
        function () {
          H.apply(this, arguments);
        },
        B
      );
    },
    count: function (M) {
      var H = 0;
      return P(M, function () {
        H++;
      }), H;
    },
    toArray: function (M) {
      return P(M, function (H) {
        return H;
      }) || [];
    },
    only: function (M) {
      if (!_e(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  };
  return ie.Activity = S, ie.Children = Ie, ie.Component = k, ie.Fragment = o, ie.Profiler = f, ie.PureComponent = z, ie.StrictMode = u, ie.Suspense = y, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (M) {
      return J.H.useMemoCache(M);
    }
  }, ie.cache = function (M) {
    return function () {
      return M.apply(null, arguments);
    };
  }, ie.cacheSignal = function () {
    return null;
  }, ie.cloneElement = function (M, H, B) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var K = b({}, M.props), le = M.key;
    if (H != null)
      for (se in H.key !== void 0 && (le = "" + H.key), H)
        !ge.call(H, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && H.ref === void 0 || (K[se] = H[se]);
    var se = arguments.length - 2;
    if (se === 1) K.children = B;
    else if (1 < se) {
      for (var Ee = Array(se), tt = 0; tt < se; tt++)
        Ee[tt] = arguments[tt + 2];
      K.children = Ee;
    }
    return $(M.type, le, K);
  }, ie.createContext = function (M) {
    return M = {
      $$typeof: m,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: d,
      _context: M
    }, M;
  }, ie.createElement = function (M, H, B) {
    var K, le = {}, se = null;
    if (H != null)
      for (K in H.key !== void 0 && (se = "" + H.key), H)
        ge.call(H, K) && K !== "key" && K !== "__self" && K !== "__source" && (le[K] = H[K]);
    var Ee = arguments.length - 2;
    if (Ee === 1) le.children = B;
    else if (1 < Ee) {
      for (var tt = Array(Ee), Ve = 0; Ve < Ee; Ve++)
        tt[Ve] = arguments[Ve + 2];
      le.children = tt;
    }
    if (M && M.defaultProps)
      for (K in Ee = M.defaultProps, Ee)
        le[K] === void 0 && (le[K] = Ee[K]);
    return $(M, se, le);
  }, ie.createRef = function () {
    return { current: null };
  }, ie.forwardRef = function (M) {
    return { $$typeof: g, render: M };
  }, ie.isValidElement = _e, ie.lazy = function (M) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: M },
      _init: ne
    };
  }, ie.memo = function (M, H) {
    return {
      $$typeof: h,
      type: M,
      compare: H === void 0 ? null : H
    };
  }, ie.startTransition = function (M) {
    var H = J.T, B = {};
    J.T = B;
    try {
      var K = M(), le = J.S;
      le !== null && le(B, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(j, Me);
    } catch (se) {
      Me(se);
    } finally {
      H !== null && B.types !== null && (H.types = B.types), J.T = H;
    }
  }, ie.unstable_useCacheRefresh = function () {
    return J.H.useCacheRefresh();
  }, ie.use = function (M) {
    return J.H.use(M);
  }, ie.useActionState = function (M, H, B) {
    return J.H.useActionState(M, H, B);
  }, ie.useCallback = function (M, H) {
    return J.H.useCallback(M, H);
  }, ie.useContext = function (M) {
    return J.H.useContext(M);
  }, ie.useDebugValue = function () {
  }, ie.useDeferredValue = function (M, H) {
    return J.H.useDeferredValue(M, H);
  }, ie.useEffect = function (M, H) {
    return J.H.useEffect(M, H);
  }, ie.useEffectEvent = function (M) {
    return J.H.useEffectEvent(M);
  }, ie.useId = function () {
    return J.H.useId();
  }, ie.useImperativeHandle = function (M, H, B) {
    return J.H.useImperativeHandle(M, H, B);
  }, ie.useInsertionEffect = function (M, H) {
    return J.H.useInsertionEffect(M, H);
  }, ie.useLayoutEffect = function (M, H) {
    return J.H.useLayoutEffect(M, H);
  }, ie.useMemo = function (M, H) {
    return J.H.useMemo(M, H);
  }, ie.useOptimistic = function (M, H) {
    return J.H.useOptimistic(M, H);
  }, ie.useReducer = function (M, H, B) {
    return J.H.useReducer(M, H, B);
  }, ie.useRef = function (M) {
    return J.H.useRef(M);
  }, ie.useState = function (M) {
    return J.H.useState(M);
  }, ie.useSyncExternalStore = function (M, H, B) {
    return J.H.useSyncExternalStore(
      M,
      H,
      B
    );
  }, ie.useTransition = function () {
    return J.H.useTransition();
  }, ie.version = "19.2.0", ie;
}
var mp;
function er() {
  return mp || (mp = 1, Ps.exports = Oy()), Ps.exports;
}
var ni = er();
const Ky = /* @__PURE__ */ Om(ni);
var Bs = { exports: {} }, Fl = {}, Ys = { exports: {} }, Fs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hp;
function Xy() {
  return hp || (hp = 1, (function (i) {
    function n(w, P) {
      var ne = w.length;
      w.push(P);
      e: for (; 0 < ne;) {
        var Me = ne - 1 >>> 1, Ie = w[Me];
        if (0 < f(Ie, P))
          w[Me] = P, w[ne] = Ie, ne = Me;
        else break e;
      }
    }
    function o(w) {
      return w.length === 0 ? null : w[0];
    }
    function u(w) {
      if (w.length === 0) return null;
      var P = w[0], ne = w.pop();
      if (ne !== P) {
        w[0] = ne;
        e: for (var Me = 0, Ie = w.length, M = Ie >>> 1; Me < M;) {
          var H = 2 * (Me + 1) - 1, B = w[H], K = H + 1, le = w[K];
          if (0 > f(B, ne))
            K < Ie && 0 > f(le, B) ? (w[Me] = le, w[K] = ne, Me = K) : (w[Me] = B, w[H] = ne, Me = H);
          else if (K < Ie && 0 > f(le, ne))
            w[Me] = le, w[K] = ne, Me = K;
          else break e;
        }
      }
      return P;
    }
    function f(w, P) {
      var ne = w.sortIndex - P.sortIndex;
      return ne !== 0 ? ne : w.id - P.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function () {
        return d.now();
      };
    } else {
      var m = Date, g = m.now();
      i.unstable_now = function () {
        return m.now() - g;
      };
    }
    var y = [], h = [], v = 1, S = null, _ = 3, R = !1, V = !1, b = !1, F = !1, k = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function Z(w) {
      for (var P = o(h); P !== null;) {
        if (P.callback === null) u(h);
        else if (P.startTime <= w)
          u(h), P.sortIndex = P.expirationTime, n(y, P);
        else break;
        P = o(h);
      }
    }
    function te(w) {
      if (b = !1, Z(w), !V)
        if (o(y) !== null)
          V = !0, j || (j = !0, ue());
        else {
          var P = o(h);
          P !== null && it(te, P.startTime - w);
        }
    }
    var j = !1, J = -1, ge = 5, $ = -1;
    function ce() {
      return F ? !0 : !(i.unstable_now() - $ < ge);
    }
    function _e() {
      if (F = !1, j) {
        var w = i.unstable_now();
        $ = w;
        var P = !0;
        try {
          e: {
            V = !1, b && (b = !1, X(J), J = -1), R = !0;
            var ne = _;
            try {
              t: {
                for (Z(w), S = o(y); S !== null && !(S.expirationTime > w && ce());) {
                  var Me = S.callback;
                  if (typeof Me == "function") {
                    S.callback = null, _ = S.priorityLevel;
                    var Ie = Me(
                      S.expirationTime <= w
                    );
                    if (w = i.unstable_now(), typeof Ie == "function") {
                      S.callback = Ie, Z(w), P = !0;
                      break t;
                    }
                    S === o(y) && u(y), Z(w);
                  } else u(y);
                  S = o(y);
                }
                if (S !== null) P = !0;
                else {
                  var M = o(h);
                  M !== null && it(
                    te,
                    M.startTime - w
                  ), P = !1;
                }
              }
              break e;
            } finally {
              S = null, _ = ne, R = !1;
            }
            P = void 0;
          }
        } finally {
          P ? ue() : j = !1;
        }
      }
    }
    var ue;
    if (typeof z == "function")
      ue = function () {
        z(_e);
      };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), Et = ke.port2;
      ke.port1.onmessage = _e, ue = function () {
        Et.postMessage(null);
      };
    } else
      ue = function () {
        k(_e, 0);
      };
    function it(w, P) {
      J = k(function () {
        w(i.unstable_now());
      }, P);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function (w) {
      w.callback = null;
    }, i.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ge = 0 < w ? Math.floor(1e3 / w) : 5;
    }, i.unstable_getCurrentPriorityLevel = function () {
      return _;
    }, i.unstable_next = function (w) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = _;
      }
      var ne = _;
      _ = P;
      try {
        return w();
      } finally {
        _ = ne;
      }
    }, i.unstable_requestPaint = function () {
      F = !0;
    }, i.unstable_runWithPriority = function (w, P) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var ne = _;
      _ = w;
      try {
        return P();
      } finally {
        _ = ne;
      }
    }, i.unstable_scheduleCallback = function (w, P, ne) {
      var Me = i.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Me + ne : Me) : ne = Me, w) {
        case 1:
          var Ie = -1;
          break;
        case 2:
          Ie = 250;
          break;
        case 5:
          Ie = 1073741823;
          break;
        case 4:
          Ie = 1e4;
          break;
        default:
          Ie = 5e3;
      }
      return Ie = ne + Ie, w = {
        id: v++,
        callback: P,
        priorityLevel: w,
        startTime: ne,
        expirationTime: Ie,
        sortIndex: -1
      }, ne > Me ? (w.sortIndex = ne, n(h, w), o(y) === null && w === o(h) && (b ? (X(J), J = -1) : b = !0, it(te, ne - Me))) : (w.sortIndex = Ie, n(y, w), V || R || (V = !0, j || (j = !0, ue()))), w;
    }, i.unstable_shouldYield = ce, i.unstable_wrapCallback = function (w) {
      var P = _;
      return function () {
        var ne = _;
        _ = P;
        try {
          return w.apply(this, arguments);
        } finally {
          _ = ne;
        }
      };
    };
  })(Fs)), Fs;
}
var gp;
function Qy() {
  return gp || (gp = 1, Ys.exports = Xy()), Ys.exports;
}
var Js = { exports: {} }, je = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function Zy() {
  if (yp) return je;
  yp = 1;
  var i = er();
  function n(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        h += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var u = {
    d: {
      f: o,
      r: function () {
        throw Error(n(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, f = Symbol.for("react.portal");
  function d(y, h, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: S == null ? null : "" + S,
      children: y,
      containerInfo: h,
      implementation: v
    };
  }
  var m = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(y, h) {
    if (y === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, je.createPortal = function (y, h) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(n(299));
    return d(y, h, null, v);
  }, je.flushSync = function (y) {
    var h = m.T, v = u.p;
    try {
      if (m.T = null, u.p = 2, y) return y();
    } finally {
      m.T = h, u.p = v, u.d.f();
    }
  }, je.preconnect = function (y, h) {
    typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(y, h));
  }, je.prefetchDNS = function (y) {
    typeof y == "string" && u.d.D(y);
  }, je.preinit = function (y, h) {
    if (typeof y == "string" && h && typeof h.as == "string") {
      var v = h.as, S = g(v, h.crossOrigin), _ = typeof h.integrity == "string" ? h.integrity : void 0, R = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      v === "style" ? u.d.S(
        y,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: S,
          integrity: _,
          fetchPriority: R
        }
      ) : v === "script" && u.d.X(y, {
        crossOrigin: S,
        integrity: _,
        fetchPriority: R,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, je.preinitModule = function (y, h) {
    if (typeof y == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var v = g(
            h.as,
            h.crossOrigin
          );
          u.d.M(y, {
            crossOrigin: v,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && u.d.M(y);
  }, je.preload = function (y, h) {
    if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var v = h.as, S = g(v, h.crossOrigin);
      u.d.L(y, v, {
        crossOrigin: S,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, je.preloadModule = function (y, h) {
    if (typeof y == "string")
      if (h) {
        var v = g(h.as, h.crossOrigin);
        u.d.m(y, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: v,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else u.d.m(y);
  }, je.requestFormReset = function (y) {
    u.d.r(y);
  }, je.unstable_batchedUpdates = function (y, h) {
    return y(h);
  }, je.useFormState = function (y, h, v) {
    return m.H.useFormState(y, h, v);
  }, je.useFormStatus = function () {
    return m.H.useHostTransitionStatus();
  }, je.version = "19.2.0", je;
}
var vp;
function Wy() {
  if (vp) return Js.exports;
  vp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (n) {
        console.error(n);
      }
  }
  return i(), Js.exports = Zy(), Js.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tp;
function $y() {
  if (Tp) return Fl;
  Tp = 1;
  var i = Qy(), n = er(), o = Wy();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (d(e) !== e)
      throw Error(u(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ;) {
      var c = l.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (a = c.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p;) {
          if (p === l) return y(c), e;
          if (p === a) return y(c), t;
          p = p.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== a.return) l = c, a = p;
      else {
        for (var T = !1, E = c.child; E;) {
          if (E === l) {
            T = !0, l = c, a = p;
            break;
          }
          if (E === a) {
            T = !0, a = c, l = p;
            break;
          }
          E = E.sibling;
        }
        if (!T) {
          for (E = p.child; E;) {
            if (E === l) {
              T = !0, l = p, a = c;
              break;
            }
            if (E === a) {
              T = !0, a = p, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!T) throw Error(u(189));
        }
      }
      if (l.alternate !== a) throw Error(u(190));
    }
    if (l.tag !== 3) throw Error(u(188));
    return l.stateNode.current === l ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign, _ = Symbol.for("react.element"), R = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), z = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), ce = Symbol.for("react.memo_cache_sentinel"), _e = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = _e && e[_e] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ke = Symbol.for("react.client.reference");
  function Et(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ke ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case k:
        return "Profiler";
      case F:
        return "StrictMode";
      case te:
        return "Suspense";
      case j:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case z:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Et(e.type) || "Memo";
        case ge:
          t = e._payload, e = e._init;
          try {
            return Et(e(t));
          } catch {
          }
      }
    return null;
  }
  var it = Array.isArray, w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Me = [], Ie = -1;
  function M(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ie || (e.current = Me[Ie], Me[Ie] = null, Ie--);
  }
  function B(e, t) {
    Ie++, Me[Ie] = e.current, e.current = t;
  }
  var K = M(null), le = M(null), se = M(null), Ee = M(null);
  function tt(e, t) {
    switch (B(se, t), B(le, e), B(K, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Ld(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Ld(t), e = Gd(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    H(K), B(K, e);
  }
  function Ve() {
    H(K), H(le), H(se);
  }
  function Qi(e) {
    e.memoizedState !== null && B(Ee, e);
    var t = K.current, l = Gd(t, e.type);
    t !== l && (B(le, e), B(K, l));
  }
  function Ol(e) {
    le.current === e && (H(K), H(le)), Ee.current === e && (H(Ee), bl._currentValue = ne);
  }
  var Ea, rr;
  function Vn(e) {
    if (Ea === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Ea = t && t[1] || "", rr = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ea + e + rr;
  }
  var _a = !1;
  function Ca(e, t) {
    if (!e || _a) return "";
    _a = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var G = function () {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function () {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (x) {
                  var U = x;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (x) {
                  U = x;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                U = x;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function () {
              });
            }
          } catch (x) {
            if (x && U && typeof x.stack == "string")
              return [x.stack, U.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var p = a.DetermineComponentFrameRoot(), T = p[0], E = p[1];
      if (T && E) {
        var C = T.split(`
`), I = E.split(`
`);
        for (c = a = 0; a < C.length && !C[a].includes("DetermineComponentFrameRoot");)
          a++;
        for (; c < I.length && !I[c].includes(
          "DetermineComponentFrameRoot"
        );)
          c++;
        if (a === C.length || c === I.length)
          for (a = C.length - 1, c = I.length - 1; 1 <= a && 0 <= c && C[a] !== I[c];)
            c--;
        for (; 1 <= a && 0 <= c; a--, c--)
          if (C[a] !== I[c]) {
            if (a !== 1 || c !== 1)
              do
                if (a--, c--, 0 > c || C[a] !== I[c]) {
                  var q = `
` + C[a].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= a && 0 <= c);
            break;
          }
      }
    } finally {
      _a = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Vn(l) : "";
  }
  function Eh(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Vn(e.type);
      case 16:
        return Vn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Vn("Suspense Fallback") : Vn("Suspense");
      case 19:
        return Vn("SuspenseList");
      case 0:
      case 15:
        return Ca(e.type, !1);
      case 11:
        return Ca(e.type.render, !1);
      case 1:
        return Ca(e.type, !0);
      case 31:
        return Vn("Activity");
      default:
        return "";
    }
  }
  function fr(e) {
    try {
      var t = "", l = null;
      do
        t += Eh(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Aa = Object.prototype.hasOwnProperty, Ma = i.unstable_scheduleCallback, Ra = i.unstable_cancelCallback, _h = i.unstable_shouldYield, Ch = i.unstable_requestPaint, ct = i.unstable_now, Ah = i.unstable_getCurrentPriorityLevel, cr = i.unstable_ImmediatePriority, dr = i.unstable_UserBlockingPriority, Kl = i.unstable_NormalPriority, Mh = i.unstable_LowPriority, pr = i.unstable_IdlePriority, Rh = i.log, Nh = i.unstable_setDisableYieldValue, Zi = null, dt = null;
  function rn(e) {
    if (typeof Rh == "function" && Nh(e), dt && typeof dt.setStrictMode == "function")
      try {
        dt.setStrictMode(Zi, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : Uh, Dh = Math.log, Ih = Math.LN2;
  function Uh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Dh(e) / Ih | 0) | 0;
  }
  var Xl = 256, Ql = 262144, Zl = 4194304;
  function bn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Wl(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var c = 0, p = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var E = a & 134217727;
    return E !== 0 ? (a = E & ~p, a !== 0 ? c = bn(a) : (T &= E, T !== 0 ? c = bn(T) : l || (l = E & ~e, l !== 0 && (c = bn(l))))) : (E = a & ~p, E !== 0 ? c = bn(E) : T !== 0 ? c = bn(T) : l || (l = a & ~e, l !== 0 && (c = bn(l)))), c === 0 ? 0 : t !== 0 && t !== c && (t & p) === 0 && (p = c & -c, l = t & -t, p >= l || p === 32 && (l & 4194048) !== 0) ? t : c;
  }
  function Wi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function xh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mr() {
    var e = Zl;
    return Zl <<= 1, (Zl & 62914560) === 0 && (Zl = 4194304), e;
  }
  function Na(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function $i(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wh(e, t, l, a, c, p) {
    var T = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var E = e.entanglements, C = e.expirationTimes, I = e.hiddenUpdates;
    for (l = T & ~l; 0 < l;) {
      var q = 31 - pt(l), G = 1 << q;
      E[q] = 0, C[q] = -1;
      var U = I[q];
      if (U !== null)
        for (I[q] = null, q = 0; q < U.length; q++) {
          var x = U[q];
          x !== null && (x.lane &= -536870913);
        }
      l &= ~G;
    }
    a !== 0 && hr(e, a, 0), p !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(T & ~t));
  }
  function hr(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function gr(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l;) {
      var a = 31 - pt(l), c = 1 << a;
      c & t | e[a] & t && (e[a] |= t), l &= ~c;
    }
  }
  function yr(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Da(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Da(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ia(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vr() {
    var e = P.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : lp(e.type));
  }
  function Tr(e, t) {
    var l = P.p;
    try {
      return P.p = e, t();
    } finally {
      P.p = l;
    }
  }
  var fn = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + fn, lt = "__reactProps$" + fn, li = "__reactContainer$" + fn, Ua = "__reactEvents$" + fn, qh = "__reactListeners$" + fn, Lh = "__reactHandles$" + fn, Sr = "__reactResources$" + fn, ji = "__reactMarker$" + fn;
  function xa(e) {
    delete e[Xe], delete e[lt], delete e[Ua], delete e[qh], delete e[Lh];
  }
  function oi(e) {
    var t = e[Xe];
    if (t) return t;
    for (var l = e.parentNode; l;) {
      if (t = l[li] || l[Xe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Yd(e); e !== null;) {
            if (l = e[Xe]) return l;
            e = Yd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function ai(e) {
    if (e = e[Xe] || e[li]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function el(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ui(e) {
    var t = e[Sr];
    return t || (t = e[Sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Oe(e) {
    e[ji] = !0;
  }
  var Er = /* @__PURE__ */ new Set(), _r = {};
  function zn(e, t) {
    si(e, t), si(e + "Capture", t);
  }
  function si(e, t) {
    for (_r[e] = t, e = 0; e < t.length; e++)
      Er.add(t[e]);
  }
  var Gh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cr = {}, Ar = {};
  function Hh(e) {
    return Aa.call(Ar, e) ? !0 : Aa.call(Cr, e) ? !1 : Gh.test(e) ? Ar[e] = !0 : (Cr[e] = !0, !1);
  }
  function $l(e, t, l) {
    if (Hh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function jl(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Bt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function _t(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Mr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Vh(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, p = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return c.call(this);
        },
        set: function (T) {
          l = "" + T, p.call(this, T);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function () {
          return l;
        },
        setValue: function (T) {
          l = "" + T;
        },
        stopTracking: function () {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function wa(e) {
    if (!e._valueTracker) {
      var t = Mr(e) ? "checked" : "value";
      e._valueTracker = Vh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Rr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Mr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function eo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var bh = /[\n"\\]/g;
  function Ct(e) {
    return e.replace(
      bh,
      function (t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function qa(e, t, l, a, c, p, T, E) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), t != null ? T === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + _t(t)) : e.value !== "" + _t(t) && (e.value = "" + _t(t)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), t != null ? La(e, T, _t(t)) : l != null ? La(e, T, _t(l)) : a != null && e.removeAttribute("value"), c == null && p != null && (e.defaultChecked = !!p), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.name = "" + _t(E) : e.removeAttribute("name");
  }
  function Nr(e, t, l, a, c, p, T, E) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.type = p), t != null || l != null) {
      if (!(p !== "submit" && p !== "reset" || t != null)) {
        wa(e);
        return;
      }
      l = l != null ? "" + _t(l) : "", t = t != null ? "" + _t(t) : l, E || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? c, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = E ? e.checked : !!a, e.defaultChecked = !!a, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T), wa(e);
  }
  function La(e, t, l) {
    t === "number" && eo(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function ri(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < l.length; c++)
        t["$" + l[c]] = !0;
      for (l = 0; l < e.length; l++)
        c = t.hasOwnProperty("$" + e[l].value), e[l].selected !== c && (e[l].selected = c), c && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + _t(l), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === l) {
          e[c].selected = !0, a && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dr(e, t, l) {
    if (t != null && (t = "" + _t(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + _t(l) : "";
  }
  function Ir(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(u(92));
        if (it(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = _t(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), wa(e);
  }
  function fi(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ur(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || zh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function xr(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var c in t)
        a = t[c], t.hasOwnProperty(c) && l[c] !== a && Ur(e, c, a);
    } else
      for (var p in t)
        t.hasOwnProperty(p) && Ur(e, p, t[p]);
  }
  function Ga(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ph = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Bh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function to(e) {
    return Bh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Yt() {
  }
  var Ha = null;
  function Va(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ci = null, di = null;
  function wr(e) {
    var t = ai(e);
    if (t && (e = t.stateNode)) {
      var l = e[lt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (qa(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ct(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var c = a[lt] || null;
                if (!c) throw Error(u(90));
                qa(
                  a,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && Rr(a);
          }
          break e;
        case "textarea":
          Dr(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && ri(e, !!l.multiple, t, !1);
      }
    }
  }
  var ba = !1;
  function qr(e, t, l) {
    if (ba) return e(t, l);
    ba = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (ba = !1, (ci !== null || di !== null) && (Fo(), ci && (t = ci, e = di, di = ci = null, wr(t), e)))
        for (t = 0; t < e.length; t++) wr(e[t]);
    }
  }
  function tl(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[lt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        u(231, t, typeof l)
      );
    return l;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), za = !1;
  if (Ft)
    try {
      var nl = {};
      Object.defineProperty(nl, "passive", {
        get: function () {
          za = !0;
        }
      }), window.addEventListener("test", nl, nl), window.removeEventListener("test", nl, nl);
    } catch {
      za = !1;
    }
  var cn = null, Pa = null, no = null;
  function Lr() {
    if (no) return no;
    var e, t = Pa, l = t.length, a, c = "value" in cn ? cn.value : cn.textContent, p = c.length;
    for (e = 0; e < l && t[e] === c[e]; e++);
    var T = l - e;
    for (a = 1; a <= T && t[l - a] === c[p - a]; a++);
    return no = c.slice(e, 1 < a ? 1 - a : void 0);
  }
  function io(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function lo() {
    return !0;
  }
  function Gr() {
    return !1;
  }
  function ot(e) {
    function t(l, a, c, p, T) {
      this._reactName = l, this._targetInst = c, this.type = a, this.nativeEvent = p, this.target = T, this.currentTarget = null;
      for (var E in e)
        e.hasOwnProperty(E) && (l = e[E], this[E] = l ? l(p) : p[E]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? lo : Gr, this.isPropagationStopped = Gr, this;
    }
    return S(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = lo);
      },
      stopPropagation: function () {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = lo);
      },
      persist: function () {
      },
      isPersistent: lo
    }), t;
  }
  var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, oo = ot(Pn), il = S({}, Pn, { view: 0, detail: 0 }), Yh = ot(il), Ba, Ya, ll, ao = S({}, il, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ja,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== ll && (ll && e.type === "mousemove" ? (Ba = e.screenX - ll.screenX, Ya = e.screenY - ll.screenY) : Ya = Ba = 0, ll = e), Ba);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ya;
    }
  }), Hr = ot(ao), Fh = S({}, ao, { dataTransfer: 0 }), Jh = ot(Fh), kh = S({}, il, { relatedTarget: 0 }), Fa = ot(kh), Oh = S({}, Pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Kh = ot(Oh), Xh = S({}, Pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Qh = ot(Xh), Zh = S({}, Pn, { data: 0 }), Vr = ot(Zh), Wh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, $h = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, jh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jh[e]) ? !!t[e] : !1;
  }
  function Ja() {
    return eg;
  }
  var tg = S({}, il, {
    key: function (e) {
      if (e.key) {
        var t = Wh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $h[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ja,
    charCode: function (e) {
      return e.type === "keypress" ? io(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ng = ot(tg), ig = S({}, ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), br = ot(ig), lg = S({}, il, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ja
  }), og = ot(lg), ag = S({}, Pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ug = ot(ag), sg = S({}, ao, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rg = ot(sg), fg = S({}, Pn, {
    newState: 0,
    oldState: 0
  }), cg = ot(fg), dg = [9, 13, 27, 32], ka = Ft && "CompositionEvent" in window, ol = null;
  Ft && "documentMode" in document && (ol = document.documentMode);
  var pg = Ft && "TextEvent" in window && !ol, zr = Ft && (!ka || ol && 8 < ol && 11 >= ol), Pr = " ", Br = !1;
  function Yr(e, t) {
    switch (e) {
      case "keyup":
        return dg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pi = !1;
  function mg(e, t) {
    switch (e) {
      case "compositionend":
        return Fr(t);
      case "keypress":
        return t.which !== 32 ? null : (Br = !0, Pr);
      case "textInput":
        return e = t.data, e === Pr && Br ? null : e;
      default:
        return null;
    }
  }
  function hg(e, t) {
    if (pi)
      return e === "compositionend" || !ka && Yr(e, t) ? (e = Lr(), no = Pa = cn = null, pi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return zr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Jr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gg[e.type] : t === "textarea";
  }
  function kr(e, t, l, a) {
    ci ? di ? di.push(a) : di = [a] : ci = a, t = Zo(t, "onChange"), 0 < t.length && (l = new oo(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var al = null, ul = null;
  function yg(e) {
    Dd(e, 0);
  }
  function uo(e) {
    var t = el(e);
    if (Rr(t)) return e;
  }
  function Or(e, t) {
    if (e === "change") return t;
  }
  var Kr = !1;
  if (Ft) {
    var Oa;
    if (Ft) {
      var Ka = "oninput" in document;
      if (!Ka) {
        var Xr = document.createElement("div");
        Xr.setAttribute("oninput", "return;"), Ka = typeof Xr.oninput == "function";
      }
      Oa = Ka;
    } else Oa = !1;
    Kr = Oa && (!document.documentMode || 9 < document.documentMode);
  }
  function Qr() {
    al && (al.detachEvent("onpropertychange", Zr), ul = al = null);
  }
  function Zr(e) {
    if (e.propertyName === "value" && uo(ul)) {
      var t = [];
      kr(
        t,
        ul,
        e,
        Va(e)
      ), qr(yg, t);
    }
  }
  function vg(e, t, l) {
    e === "focusin" ? (Qr(), al = t, ul = l, al.attachEvent("onpropertychange", Zr)) : e === "focusout" && Qr();
  }
  function Tg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return uo(ul);
  }
  function Sg(e, t) {
    if (e === "click") return uo(t);
  }
  function Eg(e, t) {
    if (e === "input" || e === "change")
      return uo(t);
  }
  function _g(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : _g;
  function sl(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var c = l[a];
      if (!Aa.call(t, c) || !mt(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Wr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function $r(e, t) {
    var l = Wr(e);
    e = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Wr(l);
    }
  }
  function jr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ef(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = eo(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = eo(e.document);
    }
    return t;
  }
  function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Cg = Ft && "documentMode" in document && 11 >= document.documentMode, mi = null, Qa = null, rl = null, Za = !1;
  function tf(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Za || mi == null || mi !== eo(a) || (a = mi, "selectionStart" in a && Xa(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), rl && sl(rl, a) || (rl = a, a = Zo(Qa, "onSelect"), 0 < a.length && (t = new oo(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = mi)));
  }
  function Bn(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var hi = {
    animationend: Bn("Animation", "AnimationEnd"),
    animationiteration: Bn("Animation", "AnimationIteration"),
    animationstart: Bn("Animation", "AnimationStart"),
    transitionrun: Bn("Transition", "TransitionRun"),
    transitionstart: Bn("Transition", "TransitionStart"),
    transitioncancel: Bn("Transition", "TransitionCancel"),
    transitionend: Bn("Transition", "TransitionEnd")
  }, Wa = {}, nf = {};
  Ft && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete hi.animationend.animation, delete hi.animationiteration.animation, delete hi.animationstart.animation), "TransitionEvent" in window || delete hi.transitionend.transition);
  function Yn(e) {
    if (Wa[e]) return Wa[e];
    if (!hi[e]) return e;
    var t = hi[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in nf)
        return Wa[e] = t[l];
    return e;
  }
  var lf = Yn("animationend"), of = Yn("animationiteration"), af = Yn("animationstart"), Ag = Yn("transitionrun"), Mg = Yn("transitionstart"), Rg = Yn("transitioncancel"), uf = Yn("transitionend"), sf = /* @__PURE__ */ new Map(), $a = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $a.push("scrollEnd");
  function qt(e, t) {
    sf.set(e, t), zn(t, [e]);
  }
  var so = typeof reportError == "function" ? reportError : function (e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, At = [], gi = 0, ja = 0;
  function ro() {
    for (var e = gi, t = ja = gi = 0; t < e;) {
      var l = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var c = At[t];
      At[t++] = null;
      var p = At[t];
      if (At[t++] = null, a !== null && c !== null) {
        var T = a.pending;
        T === null ? c.next = c : (c.next = T.next, T.next = c), a.pending = c;
      }
      p !== 0 && rf(l, c, p);
    }
  }
  function fo(e, t, l, a) {
    At[gi++] = e, At[gi++] = t, At[gi++] = l, At[gi++] = a, ja |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function eu(e, t, l, a) {
    return fo(e, t, l, a), co(e);
  }
  function Fn(e, t) {
    return fo(e, null, null, t), co(e);
  }
  function rf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var c = !1, p = e.return; p !== null;)
      p.childLanes |= l, a = p.alternate, a !== null && (a.childLanes |= l), p.tag === 22 && (e = p.stateNode, e === null || e._visibility & 1 || (c = !0)), e = p, p = p.return;
    return e.tag === 3 ? (p = e.stateNode, c && t !== null && (c = 31 - pt(l), e = p.hiddenUpdates, a = e[c], a === null ? e[c] = [t] : a.push(t), t.lane = l | 536870912), p) : null;
  }
  function co(e) {
    if (50 < xl)
      throw xl = 0, rs = null, Error(u(185));
    for (var t = e.return; t !== null;)
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var yi = {};
  function Ng(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, l, a) {
    return new Ng(e, t, l, a);
  }
  function tu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jt(e, t) {
    var l = e.alternate;
    return l === null ? (l = ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function ff(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function po(e, t, l, a, c, p) {
    var T = 0;
    if (a = e, typeof e == "function") tu(e) && (T = 1);
    else if (typeof e == "string")
      T = wy(
        e,
        l,
        K.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case $:
          return e = ht(31, l, t, c), e.elementType = $, e.lanes = p, e;
        case b:
          return Jn(l.children, c, p, t);
        case F:
          T = 8, c |= 24;
          break;
        case k:
          return e = ht(12, l, t, c | 2), e.elementType = k, e.lanes = p, e;
        case te:
          return e = ht(13, l, t, c), e.elementType = te, e.lanes = p, e;
        case j:
          return e = ht(19, l, t, c), e.elementType = j, e.lanes = p, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case z:
                T = 10;
                break e;
              case X:
                T = 9;
                break e;
              case Z:
                T = 11;
                break e;
              case J:
                T = 14;
                break e;
              case ge:
                T = 16, a = null;
                break e;
            }
          T = 29, l = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = ht(T, l, t, c), t.elementType = e, t.type = a, t.lanes = p, t;
  }
  function Jn(e, t, l, a) {
    return e = ht(7, e, a, t), e.lanes = l, e;
  }
  function nu(e, t, l) {
    return e = ht(6, e, null, t), e.lanes = l, e;
  }
  function cf(e) {
    var t = ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function iu(e, t, l) {
    return t = ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var df = /* @__PURE__ */ new WeakMap();
  function Mt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = df.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: fr(t)
      }, df.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: fr(t)
    };
  }
  var vi = [], Ti = 0, mo = null, fl = 0, Rt = [], Nt = 0, dn = null, Vt = 1, bt = "";
  function kt(e, t) {
    vi[Ti++] = fl, vi[Ti++] = mo, mo = e, fl = t;
  }
  function pf(e, t, l) {
    Rt[Nt++] = Vt, Rt[Nt++] = bt, Rt[Nt++] = dn, dn = e;
    var a = Vt;
    e = bt;
    var c = 32 - pt(a) - 1;
    a &= ~(1 << c), l += 1;
    var p = 32 - pt(t) + c;
    if (30 < p) {
      var T = c - c % 5;
      p = (a & (1 << T) - 1).toString(32), a >>= T, c -= T, Vt = 1 << 32 - pt(t) + c | l << c | a, bt = p + e;
    } else
      Vt = 1 << p | l << c | a, bt = e;
  }
  function lu(e) {
    e.return !== null && (kt(e, 1), pf(e, 1, 0));
  }
  function ou(e) {
    for (; e === mo;)
      mo = vi[--Ti], vi[Ti] = null, fl = vi[--Ti], vi[Ti] = null;
    for (; e === dn;)
      dn = Rt[--Nt], Rt[Nt] = null, bt = Rt[--Nt], Rt[Nt] = null, Vt = Rt[--Nt], Rt[Nt] = null;
  }
  function mf(e, t) {
    Rt[Nt++] = Vt, Rt[Nt++] = bt, Rt[Nt++] = dn, Vt = t.id, bt = t.overflow, dn = e;
  }
  var Qe = null, xe = null, me = !1, pn = null, Dt = !1, au = Error(u(519));
  function mn(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw cl(Mt(t, e)), au;
  }
  function hf(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Xe] = e, t[lt] = a, l) {
      case "dialog":
        fe("cancel", t), fe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ql.length; l++)
          fe(ql[l], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", t), fe("load", t);
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        fe("invalid", t), Nr(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), Ir(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || wd(t.textContent, l) ? (a.popover != null && (fe("beforetoggle", t), fe("toggle", t)), a.onScroll != null && fe("scroll", t), a.onScrollEnd != null && fe("scrollend", t), a.onClick != null && (t.onclick = Yt), t = !0) : t = !1, t || mn(e, !0);
  }
  function gf(e) {
    for (Qe = e.return; Qe;)
      switch (Qe.tag) {
        case 5:
        case 31:
        case 13:
          Dt = !1;
          return;
        case 27:
        case 3:
          Dt = !0;
          return;
        default:
          Qe = Qe.return;
      }
  }
  function Si(e) {
    if (e !== Qe) return !1;
    if (!me) return gf(e), me = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || As(e.type, e.memoizedProps)), l = !l), l && xe && mn(e), gf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      xe = Bd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      xe = Bd(e);
    } else
      t === 27 ? (t = xe, Dn(e.type) ? (e = Is, Is = null, xe = e) : xe = t) : xe = Qe ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function kn() {
    xe = Qe = null, me = !1;
  }
  function uu() {
    var e = pn;
    return e !== null && (rt === null ? rt = e : rt.push.apply(
      rt,
      e
    ), pn = null), e;
  }
  function cl(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var su = M(null), On = null, Ot = null;
  function hn(e, t, l) {
    B(su, t._currentValue), t._currentValue = l;
  }
  function Kt(e) {
    e._currentValue = su.current, H(su);
  }
  function ru(e, t, l) {
    for (; e !== null;) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function fu(e, t, l, a) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null;) {
      var p = c.dependencies;
      if (p !== null) {
        var T = c.child;
        p = p.firstContext;
        e: for (; p !== null;) {
          var E = p;
          p = c;
          for (var C = 0; C < t.length; C++)
            if (E.context === t[C]) {
              p.lanes |= l, E = p.alternate, E !== null && (E.lanes |= l), ru(
                p.return,
                l,
                e
              ), a || (T = null);
              break e;
            }
          p = E.next;
        }
      } else if (c.tag === 18) {
        if (T = c.return, T === null) throw Error(u(341));
        T.lanes |= l, p = T.alternate, p !== null && (p.lanes |= l), ru(T, l, e), T = null;
      } else T = c.child;
      if (T !== null) T.return = c;
      else
        for (T = c; T !== null;) {
          if (T === e) {
            T = null;
            break;
          }
          if (c = T.sibling, c !== null) {
            c.return = T.return, T = c;
            break;
          }
          T = T.return;
        }
      c = T;
    }
  }
  function Ei(e, t, l, a) {
    e = null;
    for (var c = t, p = !1; c !== null;) {
      if (!p) {
        if ((c.flags & 524288) !== 0) p = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var T = c.alternate;
        if (T === null) throw Error(u(387));
        if (T = T.memoizedProps, T !== null) {
          var E = c.type;
          mt(c.pendingProps.value, T.value) || (e !== null ? e.push(E) : e = [E]);
        }
      } else if (c === Ee.current) {
        if (T = c.alternate, T === null) throw Error(u(387));
        T.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(bl) : e = [bl]);
      }
      c = c.return;
    }
    e !== null && fu(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function ho(e) {
    for (e = e.firstContext; e !== null;) {
      if (!mt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Kn(e) {
    On = e, Ot = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ze(e) {
    return yf(On, e);
  }
  function go(e, t) {
    return On === null && Kn(e), yf(e, t);
  }
  function yf(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Ot === null) {
      if (e === null) throw Error(u(308));
      Ot = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ot = Ot.next = t;
    return l;
  }
  var Dg = typeof AbortController < "u" ? AbortController : function () {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function (l, a) {
        e.push(a);
      }
    };
    this.abort = function () {
      t.aborted = !0, e.forEach(function (l) {
        return l();
      });
    };
  }, Ig = i.unstable_scheduleCallback, Ug = i.unstable_NormalPriority, Pe = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function cu() {
    return {
      controller: new Dg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function dl(e) {
    e.refCount--, e.refCount === 0 && Ig(Ug, function () {
      e.controller.abort();
    });
  }
  var pl = null, du = 0, _i = 0, Ci = null;
  function xg(e, t) {
    if (pl === null) {
      var l = pl = [];
      du = 0, _i = hs(), Ci = {
        status: "pending",
        value: void 0,
        then: function (a) {
          l.push(a);
        }
      };
    }
    return du++, t.then(vf, vf), t;
  }
  function vf() {
    if (--du === 0 && pl !== null) {
      Ci !== null && (Ci.status = "fulfilled");
      var e = pl;
      pl = null, _i = 0, Ci = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wg(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function (c) {
        l.push(c);
      }
    };
    return e.then(
      function () {
        a.status = "fulfilled", a.value = t;
        for (var c = 0; c < l.length; c++) (0, l[c])(t);
      },
      function (c) {
        for (a.status = "rejected", a.reason = c, c = 0; c < l.length; c++)
          (0, l[c])(void 0);
      }
    ), a;
  }
  var Tf = w.S;
  w.S = function (e, t) {
    nd = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && xg(e, t), Tf !== null && Tf(e, t);
  };
  var Xn = M(null);
  function pu() {
    var e = Xn.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function yo(e, t) {
    t === null ? B(Xn, Xn.current) : B(Xn, t.pool);
  }
  function Sf() {
    var e = pu();
    return e === null ? null : { parent: Pe._currentValue, pool: e };
  }
  var Ai = Error(u(460)), mu = Error(u(474)), vo = Error(u(542)), To = {
    then: function () {
    }
  };
  function Ef(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Yt, Yt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Af(e), e;
      default:
        if (typeof t.status == "string") t.then(Yt, Yt);
        else {
          if (e = Ue, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function (a) {
              if (t.status === "pending") {
                var c = t;
                c.status = "fulfilled", c.value = a;
              }
            },
            function (a) {
              if (t.status === "pending") {
                var c = t;
                c.status = "rejected", c.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Af(e), e;
        }
        throw Zn = t, Ai;
    }
  }
  function Qn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Zn = l, Ai) : l;
    }
  }
  var Zn = null;
  function Cf() {
    if (Zn === null) throw Error(u(459));
    var e = Zn;
    return Zn = null, e;
  }
  function Af(e) {
    if (e === Ai || e === vo)
      throw Error(u(483));
  }
  var Mi = null, ml = 0;
  function So(e) {
    var t = ml;
    return ml += 1, Mi === null && (Mi = []), _f(Mi, e, t);
  }
  function hl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Eo(e, t) {
    throw t.$$typeof === _ ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Mf(e) {
    function t(N, A) {
      if (e) {
        var D = N.deletions;
        D === null ? (N.deletions = [A], N.flags |= 16) : D.push(A);
      }
    }
    function l(N, A) {
      if (!e) return null;
      for (; A !== null;)
        t(N, A), A = A.sibling;
      return null;
    }
    function a(N) {
      for (var A = /* @__PURE__ */ new Map(); N !== null;)
        N.key !== null ? A.set(N.key, N) : A.set(N.index, N), N = N.sibling;
      return A;
    }
    function c(N, A) {
      return N = Jt(N, A), N.index = 0, N.sibling = null, N;
    }
    function p(N, A, D) {
      return N.index = D, e ? (D = N.alternate, D !== null ? (D = D.index, D < A ? (N.flags |= 67108866, A) : D) : (N.flags |= 67108866, A)) : (N.flags |= 1048576, A);
    }
    function T(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function E(N, A, D, L) {
      return A === null || A.tag !== 6 ? (A = nu(D, N.mode, L), A.return = N, A) : (A = c(A, D), A.return = N, A);
    }
    function C(N, A, D, L) {
      var W = D.type;
      return W === b ? q(
        N,
        A,
        D.props.children,
        L,
        D.key
      ) : A !== null && (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ge && Qn(W) === A.type) ? (A = c(A, D.props), hl(A, D), A.return = N, A) : (A = po(
        D.type,
        D.key,
        D.props,
        null,
        N.mode,
        L
      ), hl(A, D), A.return = N, A);
    }
    function I(N, A, D, L) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = iu(D, N.mode, L), A.return = N, A) : (A = c(A, D.children || []), A.return = N, A);
    }
    function q(N, A, D, L, W) {
      return A === null || A.tag !== 7 ? (A = Jn(
        D,
        N.mode,
        L,
        W
      ), A.return = N, A) : (A = c(A, D), A.return = N, A);
    }
    function G(N, A, D) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = nu(
          "" + A,
          N.mode,
          D
        ), A.return = N, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case R:
            return D = po(
              A.type,
              A.key,
              A.props,
              null,
              N.mode,
              D
            ), hl(D, A), D.return = N, D;
          case V:
            return A = iu(
              A,
              N.mode,
              D
            ), A.return = N, A;
          case ge:
            return A = Qn(A), G(N, A, D);
        }
        if (it(A) || ue(A))
          return A = Jn(
            A,
            N.mode,
            D,
            null
          ), A.return = N, A;
        if (typeof A.then == "function")
          return G(N, So(A), D);
        if (A.$$typeof === z)
          return G(
            N,
            go(N, A),
            D
          );
        Eo(N, A);
      }
      return null;
    }
    function U(N, A, D, L) {
      var W = A !== null ? A.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return W !== null ? null : E(N, A, "" + D, L);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case R:
            return D.key === W ? C(N, A, D, L) : null;
          case V:
            return D.key === W ? I(N, A, D, L) : null;
          case ge:
            return D = Qn(D), U(N, A, D, L);
        }
        if (it(D) || ue(D))
          return W !== null ? null : q(N, A, D, L, null);
        if (typeof D.then == "function")
          return U(
            N,
            A,
            So(D),
            L
          );
        if (D.$$typeof === z)
          return U(
            N,
            A,
            go(N, D),
            L
          );
        Eo(N, D);
      }
      return null;
    }
    function x(N, A, D, L, W) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return N = N.get(D) || null, E(A, N, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case R:
            return N = N.get(
              L.key === null ? D : L.key
            ) || null, C(A, N, L, W);
          case V:
            return N = N.get(
              L.key === null ? D : L.key
            ) || null, I(A, N, L, W);
          case ge:
            return L = Qn(L), x(
              N,
              A,
              D,
              L,
              W
            );
        }
        if (it(L) || ue(L))
          return N = N.get(D) || null, q(A, N, L, W, null);
        if (typeof L.then == "function")
          return x(
            N,
            A,
            D,
            So(L),
            W
          );
        if (L.$$typeof === z)
          return x(
            N,
            A,
            D,
            go(A, L),
            W
          );
        Eo(A, L);
      }
      return null;
    }
    function O(N, A, D, L) {
      for (var W = null, ye = null, Q = A, ae = A = 0, pe = null; Q !== null && ae < D.length; ae++) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var ve = U(
          N,
          Q,
          D[ae],
          L
        );
        if (ve === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && ve.alternate === null && t(N, Q), A = p(ve, A, ae), ye === null ? W = ve : ye.sibling = ve, ye = ve, Q = pe;
      }
      if (ae === D.length)
        return l(N, Q), me && kt(N, ae), W;
      if (Q === null) {
        for (; ae < D.length; ae++)
          Q = G(N, D[ae], L), Q !== null && (A = p(
            Q,
            A,
            ae
          ), ye === null ? W = Q : ye.sibling = Q, ye = Q);
        return me && kt(N, ae), W;
      }
      for (Q = a(Q); ae < D.length; ae++)
        pe = x(
          Q,
          N,
          ae,
          D[ae],
          L
        ), pe !== null && (e && pe.alternate !== null && Q.delete(
          pe.key === null ? ae : pe.key
        ), A = p(
          pe,
          A,
          ae
        ), ye === null ? W = pe : ye.sibling = pe, ye = pe);
      return e && Q.forEach(function (qn) {
        return t(N, qn);
      }), me && kt(N, ae), W;
    }
    function ee(N, A, D, L) {
      if (D == null) throw Error(u(151));
      for (var W = null, ye = null, Q = A, ae = A = 0, pe = null, ve = D.next(); Q !== null && !ve.done; ae++, ve = D.next()) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var qn = U(N, Q, ve.value, L);
        if (qn === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && qn.alternate === null && t(N, Q), A = p(qn, A, ae), ye === null ? W = qn : ye.sibling = qn, ye = qn, Q = pe;
      }
      if (ve.done)
        return l(N, Q), me && kt(N, ae), W;
      if (Q === null) {
        for (; !ve.done; ae++, ve = D.next())
          ve = G(N, ve.value, L), ve !== null && (A = p(ve, A, ae), ye === null ? W = ve : ye.sibling = ve, ye = ve);
        return me && kt(N, ae), W;
      }
      for (Q = a(Q); !ve.done; ae++, ve = D.next())
        ve = x(Q, N, ae, ve.value, L), ve !== null && (e && ve.alternate !== null && Q.delete(ve.key === null ? ae : ve.key), A = p(ve, A, ae), ye === null ? W = ve : ye.sibling = ve, ye = ve);
      return e && Q.forEach(function (Fy) {
        return t(N, Fy);
      }), me && kt(N, ae), W;
    }
    function De(N, A, D, L) {
      if (typeof D == "object" && D !== null && D.type === b && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case R:
            e: {
              for (var W = D.key; A !== null;) {
                if (A.key === W) {
                  if (W = D.type, W === b) {
                    if (A.tag === 7) {
                      l(
                        N,
                        A.sibling
                      ), L = c(
                        A,
                        D.props.children
                      ), L.return = N, N = L;
                      break e;
                    }
                  } else if (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ge && Qn(W) === A.type) {
                    l(
                      N,
                      A.sibling
                    ), L = c(A, D.props), hl(L, D), L.return = N, N = L;
                    break e;
                  }
                  l(N, A);
                  break;
                } else t(N, A);
                A = A.sibling;
              }
              D.type === b ? (L = Jn(
                D.props.children,
                N.mode,
                L,
                D.key
              ), L.return = N, N = L) : (L = po(
                D.type,
                D.key,
                D.props,
                null,
                N.mode,
                L
              ), hl(L, D), L.return = N, N = L);
            }
            return T(N);
          case V:
            e: {
              for (W = D.key; A !== null;) {
                if (A.key === W)
                  if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                    l(
                      N,
                      A.sibling
                    ), L = c(A, D.children || []), L.return = N, N = L;
                    break e;
                  } else {
                    l(N, A);
                    break;
                  }
                else t(N, A);
                A = A.sibling;
              }
              L = iu(D, N.mode, L), L.return = N, N = L;
            }
            return T(N);
          case ge:
            return D = Qn(D), De(
              N,
              A,
              D,
              L
            );
        }
        if (it(D))
          return O(
            N,
            A,
            D,
            L
          );
        if (ue(D)) {
          if (W = ue(D), typeof W != "function") throw Error(u(150));
          return D = W.call(D), ee(
            N,
            A,
            D,
            L
          );
        }
        if (typeof D.then == "function")
          return De(
            N,
            A,
            So(D),
            L
          );
        if (D.$$typeof === z)
          return De(
            N,
            A,
            go(N, D),
            L
          );
        Eo(N, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, A !== null && A.tag === 6 ? (l(N, A.sibling), L = c(A, D), L.return = N, N = L) : (l(N, A), L = nu(D, N.mode, L), L.return = N, N = L), T(N)) : l(N, A);
    }
    return function (N, A, D, L) {
      try {
        ml = 0;
        var W = De(
          N,
          A,
          D,
          L
        );
        return Mi = null, W;
      } catch (Q) {
        if (Q === Ai || Q === vo) throw Q;
        var ye = ht(29, Q, null, N.mode);
        return ye.lanes = L, ye.return = N, ye;
      } finally {
      }
    };
  }
  var Wn = Mf(!0), Rf = Mf(!1), gn = !1;
  function hu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function gu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function yn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function vn(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Se & 2) !== 0) {
      var c = a.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), a.pending = t, t = co(e), rf(e, null, l), t;
    }
    return fo(e, a, t, l), co(e);
  }
  function gl(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, gr(e, l);
    }
  }
  function yu(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var c = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var T = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          p === null ? c = p = T : p = p.next = T, l = l.next;
        } while (l !== null);
        p === null ? c = p = t : p = p.next = t;
      } else c = p = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: p,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var vu = !1;
  function yl() {
    if (vu) {
      var e = Ci;
      if (e !== null) throw e;
    }
  }
  function vl(e, t, l, a) {
    vu = !1;
    var c = e.updateQueue;
    gn = !1;
    var p = c.firstBaseUpdate, T = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var C = E, I = C.next;
      C.next = null, T === null ? p = I : T.next = I, T = C;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, E = q.lastBaseUpdate, E !== T && (E === null ? q.firstBaseUpdate = I : E.next = I, q.lastBaseUpdate = C));
    }
    if (p !== null) {
      var G = c.baseState;
      T = 0, q = I = C = null, E = p;
      do {
        var U = E.lane & -536870913, x = U !== E.lane;
        if (x ? (de & U) === U : (a & U) === U) {
          U !== 0 && U === _i && (vu = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: null,
            next: null
          });
          e: {
            var O = e, ee = E;
            U = t;
            var De = l;
            switch (ee.tag) {
              case 1:
                if (O = ee.payload, typeof O == "function") {
                  G = O.call(De, G, U);
                  break e;
                }
                G = O;
                break e;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = ee.payload, U = typeof O == "function" ? O.call(De, G, U) : O, U == null) break e;
                G = S({}, G, U);
                break e;
              case 2:
                gn = !0;
            }
          }
          U = E.callback, U !== null && (e.flags |= 64, x && (e.flags |= 8192), x = c.callbacks, x === null ? c.callbacks = [U] : x.push(U));
        } else
          x = {
            lane: U,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, q === null ? (I = q = x, C = G) : q = q.next = x, T |= U;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          x = E, E = x.next, x.next = null, c.lastBaseUpdate = x, c.shared.pending = null;
        }
      } while (!0);
      q === null && (C = G), c.baseState = C, c.firstBaseUpdate = I, c.lastBaseUpdate = q, p === null && (c.shared.lanes = 0), Cn |= T, e.lanes = T, e.memoizedState = G;
    }
  }
  function Nf(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function Df(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Nf(l[e], t);
  }
  var Ri = M(null), _o = M(0);
  function If(e, t) {
    e = nn, B(_o, e), B(Ri, t), nn = e | t.baseLanes;
  }
  function Tu() {
    B(_o, nn), B(Ri, Ri.current);
  }
  function Su() {
    nn = _o.current, H(Ri), H(_o);
  }
  var gt = M(null), It = null;
  function Tn(e) {
    var t = e.alternate;
    B(be, be.current & 1), B(gt, e), It === null && (t === null || Ri.current !== null || t.memoizedState !== null) && (It = e);
  }
  function Eu(e) {
    B(be, be.current), B(gt, e), It === null && (It = e);
  }
  function Uf(e) {
    e.tag === 22 ? (B(be, be.current), B(gt, e), It === null && (It = e)) : Sn();
  }
  function Sn() {
    B(be, be.current), B(gt, gt.current);
  }
  function yt(e) {
    H(gt), It === e && (It = null), H(be);
  }
  var be = M(0);
  function Co(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ns(l) || Ds(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Xt = 0, oe = null, Re = null, Be = null, Ao = !1, Ni = !1, $n = !1, Mo = 0, Tl = 0, Di = null, qg = 0;
  function Ge() {
    throw Error(u(321));
  }
  function _u(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!mt(e[l], t[l])) return !1;
    return !0;
  }
  function Cu(e, t, l, a, c, p) {
    return Xt = p, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? pc : bu, $n = !1, p = l(a, c), $n = !1, Ni && (p = wf(
      t,
      l,
      a,
      c
    )), xf(e), p;
  }
  function xf(e) {
    w.H = _l;
    var t = Re !== null && Re.next !== null;
    if (Xt = 0, Be = Re = oe = null, Ao = !1, Tl = 0, Di = null, t) throw Error(u(300));
    e === null || Ye || (e = e.dependencies, e !== null && ho(e) && (Ye = !0));
  }
  function wf(e, t, l, a) {
    oe = e;
    var c = 0;
    do {
      if (Ni && (Di = null), Tl = 0, Ni = !1, 25 <= c) throw Error(u(301));
      if (c += 1, Be = Re = null, e.updateQueue != null) {
        var p = e.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      w.H = mc, p = t(l, a);
    } while (Ni);
    return p;
  }
  function Lg() {
    var e = w.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Sl(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (oe.flags |= 1024), t;
  }
  function Au() {
    var e = Mo !== 0;
    return Mo = 0, e;
  }
  function Mu(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Ru(e) {
    if (Ao) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ao = !1;
    }
    Xt = 0, Be = Re = oe = null, Ni = !1, Tl = Mo = 0, Di = null;
  }
  function nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Be === null ? oe.memoizedState = Be = e : Be = Be.next = e, Be;
  }
  function ze() {
    if (Re === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Be === null ? oe.memoizedState : Be.next;
    if (t !== null)
      Be = t, Re = e;
    else {
      if (e === null)
        throw oe.alternate === null ? Error(u(467)) : Error(u(310));
      Re = e, e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null
      }, Be === null ? oe.memoizedState = Be = e : Be = Be.next = e;
    }
    return Be;
  }
  function Ro() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sl(e) {
    var t = Tl;
    return Tl += 1, Di === null && (Di = []), e = _f(Di, e, t), t = oe, (Be === null ? t.memoizedState : Be.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? pc : bu), e;
  }
  function No(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Sl(e);
      if (e.$$typeof === z) return Ze(e);
    }
    throw Error(u(438, String(e)));
  }
  function Nu(e) {
    var t = null, l = oe.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = oe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function (c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Ro(), oe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = ce;
    return t.index++, l;
  }
  function Qt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Do(e) {
    var t = ze();
    return Du(t, Re, e);
  }
  function Du(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = l;
    var c = e.baseQueue, p = a.pending;
    if (p !== null) {
      if (c !== null) {
        var T = c.next;
        c.next = p.next, p.next = T;
      }
      t.baseQueue = c = p, a.pending = null;
    }
    if (p = e.baseState, c === null) e.memoizedState = p;
    else {
      t = c.next;
      var E = T = null, C = null, I = t, q = !1;
      do {
        var G = I.lane & -536870913;
        if (G !== I.lane ? (de & G) === G : (Xt & G) === G) {
          var U = I.revertLane;
          if (U === 0)
            C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }), G === _i && (q = !0);
          else if ((Xt & U) === U) {
            I = I.next, U === _i && (q = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: I.revertLane,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }, C === null ? (E = C = G, T = p) : C = C.next = G, oe.lanes |= U, Cn |= U;
          G = I.action, $n && l(p, G), p = I.hasEagerState ? I.eagerState : l(p, G);
        } else
          U = {
            lane: G,
            revertLane: I.revertLane,
            gesture: I.gesture,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          }, C === null ? (E = C = U, T = p) : C = C.next = U, oe.lanes |= G, Cn |= G;
        I = I.next;
      } while (I !== null && I !== t);
      if (C === null ? T = p : C.next = E, !mt(p, e.memoizedState) && (Ye = !0, q && (l = Ci, l !== null)))
        throw l;
      e.memoizedState = p, e.baseState = T, e.baseQueue = C, a.lastRenderedState = p;
    }
    return c === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Iu(e) {
    var t = ze(), l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, c = l.pending, p = t.memoizedState;
    if (c !== null) {
      l.pending = null;
      var T = c = c.next;
      do
        p = e(p, T.action), T = T.next;
      while (T !== c);
      mt(p, t.memoizedState) || (Ye = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), l.lastRenderedState = p;
    }
    return [p, a];
  }
  function qf(e, t, l) {
    var a = oe, c = ze(), p = me;
    if (p) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var T = !mt(
      (Re || c).memoizedState,
      l
    );
    if (T && (c.memoizedState = l, Ye = !0), c = c.queue, wu(Hf.bind(null, a, c, e), [
      e
    ]), c.getSnapshot !== t || T || Be !== null && Be.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ii(
        9,
        { destroy: void 0 },
        Gf.bind(
          null,
          a,
          c,
          l,
          t
        ),
        null
      ), Ue === null) throw Error(u(349));
      p || (Xt & 127) !== 0 || Lf(a, t, l);
    }
    return l;
  }
  function Lf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = oe.updateQueue, t === null ? (t = Ro(), oe.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Gf(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Vf(t) && bf(e);
  }
  function Hf(e, t, l) {
    return l(function () {
      Vf(t) && bf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !mt(e, l);
    } catch {
      return !0;
    }
  }
  function bf(e) {
    var t = Fn(e, 2);
    t !== null && ft(t, e, 2);
  }
  function Uu(e) {
    var t = nt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), $n) {
        rn(!0);
        try {
          l();
        } finally {
          rn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: e
    }, t;
  }
  function zf(e, t, l, a) {
    return e.baseState = l, Du(
      e,
      Re,
      typeof a == "function" ? a : Qt
    );
  }
  function Gg(e, t, l, a, c) {
    if (xo(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var p = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (T) {
          p.listeners.push(T);
        }
      };
      w.T !== null ? l(!0) : p.isTransition = !1, a(p), l = t.pending, l === null ? (p.next = t.pending = p, Pf(t, p)) : (p.next = l.next, t.pending = l.next = p);
    }
  }
  function Pf(e, t) {
    var l = t.action, a = t.payload, c = e.state;
    if (t.isTransition) {
      var p = w.T, T = {};
      w.T = T;
      try {
        var E = l(c, a), C = w.S;
        C !== null && C(T, E), Bf(e, t, E);
      } catch (I) {
        xu(e, t, I);
      } finally {
        p !== null && T.types !== null && (p.types = T.types), w.T = p;
      }
    } else
      try {
        p = l(c, a), Bf(e, t, p);
      } catch (I) {
        xu(e, t, I);
      }
  }
  function Bf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function (a) {
        Yf(e, t, a);
      },
      function (a) {
        return xu(e, t, a);
      }
    ) : Yf(e, t, l);
  }
  function Yf(e, t, l) {
    t.status = "fulfilled", t.value = l, Ff(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Pf(e, l)));
  }
  function xu(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Ff(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Ff(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Jf(e, t) {
    return t;
  }
  function kf(e, t) {
    if (me) {
      var l = Ue.formState;
      if (l !== null) {
        e: {
          var a = oe;
          if (me) {
            if (xe) {
              t: {
                for (var c = xe, p = Dt; c.nodeType !== 8;) {
                  if (!p) {
                    c = null;
                    break t;
                  }
                  if (c = Ut(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                p = c.data, c = p === "F!" || p === "F" ? c : null;
              }
              if (c) {
                xe = Ut(
                  c.nextSibling
                ), a = c.data === "F!";
                break e;
              }
            }
            mn(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = nt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jf,
      lastRenderedState: t
    }, l.queue = a, l = fc.bind(
      null,
      oe,
      a
    ), a.dispatch = l, a = Uu(!1), p = Vu.bind(
      null,
      oe,
      !1,
      a.queue
    ), a = nt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = c, l = Gg.bind(
      null,
      oe,
      c,
      p,
      l
    ), c.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Of(e) {
    var t = ze();
    return Kf(t, Re, e);
  }
  function Kf(e, t, l) {
    if (t = Du(
      e,
      t,
      Jf
    )[0], e = Do(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Sl(t);
      } catch (T) {
        throw T === Ai ? vo : T;
      }
    else a = t;
    t = ze();
    var c = t.queue, p = c.dispatch;
    return l !== t.memoizedState && (oe.flags |= 2048, Ii(
      9,
      { destroy: void 0 },
      Hg.bind(null, c, l),
      null
    )), [a, p, e];
  }
  function Hg(e, t) {
    e.action = t;
  }
  function Xf(e) {
    var t = ze(), l = Re;
    if (l !== null)
      return Kf(t, l, e);
    ze(), t = t.memoizedState, l = ze();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Ii(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = oe.updateQueue, t === null && (t = Ro(), oe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Qf() {
    return ze().memoizedState;
  }
  function Io(e, t, l, a) {
    var c = nt();
    oe.flags |= e, c.memoizedState = Ii(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Uo(e, t, l, a) {
    var c = ze();
    a = a === void 0 ? null : a;
    var p = c.memoizedState.inst;
    Re !== null && a !== null && _u(a, Re.memoizedState.deps) ? c.memoizedState = Ii(t, p, l, a) : (oe.flags |= e, c.memoizedState = Ii(
      1 | t,
      p,
      l,
      a
    ));
  }
  function Zf(e, t) {
    Io(8390656, 8, e, t);
  }
  function wu(e, t) {
    Uo(2048, 8, e, t);
  }
  function Vg(e) {
    oe.flags |= 4;
    var t = oe.updateQueue;
    if (t === null)
      t = Ro(), oe.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Wf(e) {
    var t = ze().memoizedState;
    return Vg({ ref: t, nextImpl: e }), function () {
      if ((Se & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function $f(e, t) {
    return Uo(4, 2, e, t);
  }
  function jf(e, t) {
    return Uo(4, 4, e, t);
  }
  function ec(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function () {
        t.current = null;
      };
  }
  function tc(e, t, l) {
    l = l != null ? l.concat([e]) : null, Uo(4, 4, ec.bind(null, t, e), l);
  }
  function qu() {
  }
  function nc(e, t) {
    var l = ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && _u(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function ic(e, t) {
    var l = ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && _u(t, a[1]))
      return a[0];
    if (a = e(), $n) {
      rn(!0);
      try {
        e();
      } finally {
        rn(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Lu(e, t, l) {
    return l === void 0 || (Xt & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = ld(), oe.lanes |= e, Cn |= e, l);
  }
  function lc(e, t, l, a) {
    return mt(l, t) ? l : Ri.current !== null ? (e = Lu(e, l, a), mt(e, t) || (Ye = !0), e) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (de & 261930) === 0 ? (Ye = !0, e.memoizedState = l) : (e = ld(), oe.lanes |= e, Cn |= e, t);
  }
  function oc(e, t, l, a, c) {
    var p = P.p;
    P.p = p !== 0 && 8 > p ? p : 8;
    var T = w.T, E = {};
    w.T = E, Vu(e, !1, t, l);
    try {
      var C = c(), I = w.S;
      if (I !== null && I(E, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var q = wg(
          C,
          a
        );
        El(
          e,
          t,
          q,
          St(e)
        );
      } else
        El(
          e,
          t,
          a,
          St(e)
        );
    } catch (G) {
      El(
        e,
        t,
        {
          then: function () {
          }, status: "rejected", reason: G
        },
        St()
      );
    } finally {
      P.p = p, T !== null && E.types !== null && (T.types = E.types), w.T = T;
    }
  }
  function bg() {
  }
  function Gu(e, t, l, a) {
    if (e.tag !== 5) throw Error(u(476));
    var c = ac(e).queue;
    oc(
      e,
      c,
      t,
      ne,
      l === null ? bg : function () {
        return uc(e), l(a);
      }
    );
  }
  function ac(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: ne
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function uc(e) {
    var t = ac(e);
    t.next === null && (t = e.alternate.memoizedState), El(
      e,
      t.next.queue,
      {},
      St()
    );
  }
  function Hu() {
    return Ze(bl);
  }
  function sc() {
    return ze().memoizedState;
  }
  function rc() {
    return ze().memoizedState;
  }
  function zg(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = St();
          e = yn(l);
          var a = vn(t, e, l);
          a !== null && (ft(a, t, l), gl(a, t, l)), t = { cache: cu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Pg(e, t, l) {
    var a = St();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xo(e) ? cc(t, l) : (l = eu(e, t, l, a), l !== null && (ft(l, e, a), dc(l, t, a)));
  }
  function fc(e, t, l) {
    var a = St();
    El(e, t, l, a);
  }
  function El(e, t, l, a) {
    var c = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xo(e)) cc(t, c);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null))
        try {
          var T = t.lastRenderedState, E = p(T, l);
          if (c.hasEagerState = !0, c.eagerState = E, mt(E, T))
            return fo(e, t, c, 0), Ue === null && ro(), !1;
        } catch {
        } finally {
        }
      if (l = eu(e, t, c, a), l !== null)
        return ft(l, e, a), dc(l, t, a), !0;
    }
    return !1;
  }
  function Vu(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: hs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xo(e)) {
      if (t) throw Error(u(479));
    } else
      t = eu(
        e,
        l,
        a,
        2
      ), t !== null && ft(t, e, 2);
  }
  function xo(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe;
  }
  function cc(e, t) {
    Ni = Ao = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function dc(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, gr(e, l);
    }
  }
  var _l = {
    readContext: Ze,
    use: No,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge
  };
  _l.useEffectEvent = Ge;
  var pc = {
    readContext: Ze,
    use: No,
    useCallback: function (e, t) {
      return nt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ze,
    useEffect: Zf,
    useImperativeHandle: function (e, t, l) {
      l = l != null ? l.concat([e]) : null, Io(
        4194308,
        4,
        ec.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function (e, t) {
      return Io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var l = nt();
      t = t === void 0 ? null : t;
      var a = e();
      if ($n) {
        rn(!0);
        try {
          e();
        } finally {
          rn(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function (e, t, l) {
      var a = nt();
      if (l !== void 0) {
        var c = l(t);
        if ($n) {
          rn(!0);
          try {
            l(t);
          } finally {
            rn(!1);
          }
        }
      } else c = t;
      return a.memoizedState = a.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, a.queue = e, e = e.dispatch = Pg.bind(
        null,
        oe,
        e
      ), [a.memoizedState, e];
    },
    useRef: function (e) {
      var t = nt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function (e) {
      e = Uu(e);
      var t = e.queue, l = fc.bind(null, oe, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: qu,
    useDeferredValue: function (e, t) {
      var l = nt();
      return Lu(l, e, t);
    },
    useTransition: function () {
      var e = Uu(!1);
      return e = oc.bind(
        null,
        oe,
        e.queue,
        !0,
        !1
      ), nt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function (e, t, l) {
      var a = oe, c = nt();
      if (me) {
        if (l === void 0)
          throw Error(u(407));
        l = l();
      } else {
        if (l = t(), Ue === null)
          throw Error(u(349));
        (de & 127) !== 0 || Lf(a, t, l);
      }
      c.memoizedState = l;
      var p = { value: l, getSnapshot: t };
      return c.queue = p, Zf(Hf.bind(null, a, p, e), [
        e
      ]), a.flags |= 2048, Ii(
        9,
        { destroy: void 0 },
        Gf.bind(
          null,
          a,
          p,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function () {
      var e = nt(), t = Ue.identifierPrefix;
      if (me) {
        var l = bt, a = Vt;
        l = (a & ~(1 << 32 - pt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Mo++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = qg++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Hu,
    useFormState: kf,
    useActionState: kf,
    useOptimistic: function (e) {
      var t = nt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Vu.bind(
        null,
        oe,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Nu,
    useCacheRefresh: function () {
      return nt().memoizedState = zg.bind(
        null,
        oe
      );
    },
    useEffectEvent: function (e) {
      var t = nt(), l = { impl: e };
      return t.memoizedState = l, function () {
        if ((Se & 2) !== 0)
          throw Error(u(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, bu = {
    readContext: Ze,
    use: No,
    useCallback: nc,
    useContext: Ze,
    useEffect: wu,
    useImperativeHandle: tc,
    useInsertionEffect: $f,
    useLayoutEffect: jf,
    useMemo: ic,
    useReducer: Do,
    useRef: Qf,
    useState: function () {
      return Do(Qt);
    },
    useDebugValue: qu,
    useDeferredValue: function (e, t) {
      var l = ze();
      return lc(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function () {
      var e = Do(Qt)[0], t = ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Sl(e),
        t
      ];
    },
    useSyncExternalStore: qf,
    useId: sc,
    useHostTransitionStatus: Hu,
    useFormState: Of,
    useActionState: Of,
    useOptimistic: function (e, t) {
      var l = ze();
      return zf(l, Re, e, t);
    },
    useMemoCache: Nu,
    useCacheRefresh: rc
  };
  bu.useEffectEvent = Wf;
  var mc = {
    readContext: Ze,
    use: No,
    useCallback: nc,
    useContext: Ze,
    useEffect: wu,
    useImperativeHandle: tc,
    useInsertionEffect: $f,
    useLayoutEffect: jf,
    useMemo: ic,
    useReducer: Iu,
    useRef: Qf,
    useState: function () {
      return Iu(Qt);
    },
    useDebugValue: qu,
    useDeferredValue: function (e, t) {
      var l = ze();
      return Re === null ? Lu(l, e, t) : lc(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function () {
      var e = Iu(Qt)[0], t = ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Sl(e),
        t
      ];
    },
    useSyncExternalStore: qf,
    useId: sc,
    useHostTransitionStatus: Hu,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function (e, t) {
      var l = ze();
      return Re !== null ? zf(l, Re, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Nu,
    useCacheRefresh: rc
  };
  mc.useEffectEvent = Wf;
  function zu(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : S({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Pu = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = St(), c = yn(a);
      c.payload = t, l != null && (c.callback = l), t = vn(e, c, a), t !== null && (ft(t, e, a), gl(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = St(), c = yn(a);
      c.tag = 1, c.payload = t, l != null && (c.callback = l), t = vn(e, c, a), t !== null && (ft(t, e, a), gl(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = St(), a = yn(l);
      a.tag = 2, t != null && (a.callback = t), t = vn(e, a, l), t !== null && (ft(t, e, l), gl(t, e, l));
    }
  };
  function hc(e, t, l, a, c, p, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, p, T) : t.prototype && t.prototype.isPureReactComponent ? !sl(l, a) || !sl(c, p) : !0;
  }
  function gc(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Pu.enqueueReplaceState(t, t.state, null);
  }
  function jn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = S({}, l));
      for (var c in e)
        l[c] === void 0 && (l[c] = e[c]);
    }
    return l;
  }
  function yc(e) {
    so(e);
  }
  function vc(e) {
    console.error(e);
  }
  function Tc(e) {
    so(e);
  }
  function wo(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Sc(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Bu(e, t, l) {
    return l = yn(l), l.tag = 3, l.payload = { element: null }, l.callback = function () {
      wo(e, t);
    }, l;
  }
  function Ec(e) {
    return e = yn(e), e.tag = 3, e;
  }
  function _c(e, t, l, a) {
    var c = l.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = a.value;
      e.payload = function () {
        return c(p);
      }, e.callback = function () {
        Sc(t, l, a);
      };
    }
    var T = l.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function () {
      Sc(t, l, a), typeof c != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
      var E = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: E !== null ? E : ""
      });
    });
  }
  function Bg(e, t, l, a, c) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Ei(
        t,
        l,
        c,
        !0
      ), l = gt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return It === null ? Jo() : l.alternate === null && He === 0 && (He = 3), l.flags &= -257, l.flags |= 65536, l.lanes = c, a === To ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ds(e, a, c)), !1;
          case 22:
            return l.flags |= 65536, a === To ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), ds(e, a, c)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return ds(e, a, c), Jo(), !1;
    }
    if (me)
      return t = gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, a !== au && (e = Error(u(422), { cause: a }), cl(Mt(e, l)))) : (a !== au && (t = Error(u(423), {
        cause: a
      }), cl(
        Mt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, a = Mt(a, l), c = Bu(
        e.stateNode,
        a,
        c
      ), yu(e, c), He !== 4 && (He = 2)), !1;
    var p = Error(u(520), { cause: a });
    if (p = Mt(p, l), Ul === null ? Ul = [p] : Ul.push(p), He !== 4 && (He = 2), t === null) return !0;
    a = Mt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = c & -c, l.lanes |= e, e = Bu(l.stateNode, a, e), yu(l, e), !1;
        case 1:
          if (t = l.type, p = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (An === null || !An.has(p))))
            return l.flags |= 65536, c &= -c, l.lanes |= c, c = Ec(c), _c(
              c,
              e,
              l,
              a
            ), yu(l, c), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Yu = Error(u(461)), Ye = !1;
  function We(e, t, l, a) {
    t.child = e === null ? Rf(t, null, l, a) : Wn(
      t,
      e.child,
      l,
      a
    );
  }
  function Cc(e, t, l, a, c) {
    l = l.render;
    var p = t.ref;
    if ("ref" in a) {
      var T = {};
      for (var E in a)
        E !== "ref" && (T[E] = a[E]);
    } else T = a;
    return Kn(t), a = Cu(
      e,
      t,
      l,
      T,
      p,
      c
    ), E = Au(), e !== null && !Ye ? (Mu(e, t, c), Zt(e, t, c)) : (me && E && lu(t), t.flags |= 1, We(e, t, a, c), t.child);
  }
  function Ac(e, t, l, a, c) {
    if (e === null) {
      var p = l.type;
      return typeof p == "function" && !tu(p) && p.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = p, Mc(
        e,
        t,
        p,
        a,
        c
      )) : (e = po(
        l.type,
        null,
        a,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, !Zu(e, c)) {
      var T = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : sl, l(T, a) && e.ref === t.ref)
        return Zt(e, t, c);
    }
    return t.flags |= 1, e = Jt(p, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Mc(e, t, l, a, c) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (sl(p, a) && e.ref === t.ref)
        if (Ye = !1, t.pendingProps = a = p, Zu(e, c))
          (e.flags & 131072) !== 0 && (Ye = !0);
        else
          return t.lanes = e.lanes, Zt(e, t, c);
    }
    return Fu(
      e,
      t,
      l,
      a,
      c
    );
  }
  function Rc(e, t, l, a) {
    var c = a.children, p = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (p = p !== null ? p.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, c = 0; a !== null;)
            c = c | a.lanes | a.childLanes, a = a.sibling;
          a = c & ~p;
        } else a = 0, t.child = null;
        return Nc(
          e,
          t,
          p,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && yo(
          t,
          p !== null ? p.cachePool : null
        ), p !== null ? If(t, p) : Tu(), Uf(t);
      else
        return a = t.lanes = 536870912, Nc(
          e,
          t,
          p !== null ? p.baseLanes | l : l,
          l,
          a
        );
    } else
      p !== null ? (yo(t, p.cachePool), If(t, p), Sn(), t.memoizedState = null) : (e !== null && yo(t, null), Tu(), Sn());
    return We(e, t, c, l), t.child;
  }
  function Cl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Nc(e, t, l, a, c) {
    var p = pu();
    return p = p === null ? null : { parent: Pe._currentValue, pool: p }, t.memoizedState = {
      baseLanes: l,
      cachePool: p
    }, e !== null && yo(t, null), Tu(), Uf(t), e !== null && Ei(e, t, a, !0), t.childLanes = c, null;
  }
  function qo(e, t) {
    return t = Go(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Dc(e, t, l) {
    return Wn(t, e.child, null, l), e = qo(t, t.pendingProps), e.flags |= 2, yt(t), t.memoizedState = null, e;
  }
  function Yg(e, t, l) {
    var a = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (me) {
        if (a.mode === "hidden")
          return e = qo(t, a), t.lanes = 536870912, Cl(null, e);
        if (Eu(t), (e = xe) ? (e = Pd(
          e,
          Dt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: dn !== null ? { id: Vt, overflow: bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = cf(e), l.return = t, t.child = l, Qe = t, xe = null)) : e = null, e === null) throw mn(t);
        return t.lanes = 536870912, null;
      }
      return qo(t, a);
    }
    var p = e.memoizedState;
    if (p !== null) {
      var T = p.dehydrated;
      if (Eu(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = Dc(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (Ye || Ei(e, t, l, !1), c = (l & e.childLanes) !== 0, Ye || c) {
        if (a = Ue, a !== null && (T = yr(a, l), T !== 0 && T !== p.retryLane))
          throw p.retryLane = T, Fn(e, T), ft(a, e, T), Yu;
        Jo(), t = Dc(
          e,
          t,
          l
        );
      } else
        e = p.treeContext, xe = Ut(T.nextSibling), Qe = t, me = !0, pn = null, Dt = !1, e !== null && mf(t, e), t = qo(t, a), t.flags |= 4096;
      return t;
    }
    return e = Jt(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Lo(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(u(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Fu(e, t, l, a, c) {
    return Kn(t), l = Cu(
      e,
      t,
      l,
      a,
      void 0,
      c
    ), a = Au(), e !== null && !Ye ? (Mu(e, t, c), Zt(e, t, c)) : (me && a && lu(t), t.flags |= 1, We(e, t, l, c), t.child);
  }
  function Ic(e, t, l, a, c, p) {
    return Kn(t), t.updateQueue = null, l = wf(
      t,
      a,
      l,
      c
    ), xf(e), a = Au(), e !== null && !Ye ? (Mu(e, t, p), Zt(e, t, p)) : (me && a && lu(t), t.flags |= 1, We(e, t, l, p), t.child);
  }
  function Uc(e, t, l, a, c) {
    if (Kn(t), t.stateNode === null) {
      var p = yi, T = l.contextType;
      typeof T == "object" && T !== null && (p = Ze(T)), p = new l(a, p), t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Pu, t.stateNode = p, p._reactInternals = t, p = t.stateNode, p.props = a, p.state = t.memoizedState, p.refs = {}, hu(t), T = l.contextType, p.context = typeof T == "object" && T !== null ? Ze(T) : yi, p.state = t.memoizedState, T = l.getDerivedStateFromProps, typeof T == "function" && (zu(
        t,
        l,
        T,
        a
      ), p.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (T = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), T !== p.state && Pu.enqueueReplaceState(p, p.state, null), vl(t, a, p, c), yl(), p.state = t.memoizedState), typeof p.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      p = t.stateNode;
      var E = t.memoizedProps, C = jn(l, E);
      p.props = C;
      var I = p.context, q = l.contextType;
      T = yi, typeof q == "object" && q !== null && (T = Ze(q));
      var G = l.getDerivedStateFromProps;
      q = typeof G == "function" || typeof p.getSnapshotBeforeUpdate == "function", E = t.pendingProps !== E, q || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (E || I !== T) && gc(
        t,
        p,
        a,
        T
      ), gn = !1;
      var U = t.memoizedState;
      p.state = U, vl(t, a, p, c), yl(), I = t.memoizedState, E || U !== I || gn ? (typeof G == "function" && (zu(
        t,
        l,
        G,
        a
      ), I = t.memoizedState), (C = gn || hc(
        t,
        l,
        C,
        a,
        U,
        I,
        T
      )) ? (q || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = I), p.props = a, p.state = I, p.context = T, a = C) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      p = t.stateNode, gu(e, t), T = t.memoizedProps, q = jn(l, T), p.props = q, G = t.pendingProps, U = p.context, I = l.contextType, C = yi, typeof I == "object" && I !== null && (C = Ze(I)), E = l.getDerivedStateFromProps, (I = typeof E == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (T !== G || U !== C) && gc(
        t,
        p,
        a,
        C
      ), gn = !1, U = t.memoizedState, p.state = U, vl(t, a, p, c), yl();
      var x = t.memoizedState;
      T !== G || U !== x || gn || e !== null && e.dependencies !== null && ho(e.dependencies) ? (typeof E == "function" && (zu(
        t,
        l,
        E,
        a
      ), x = t.memoizedState), (q = gn || hc(
        t,
        l,
        q,
        a,
        U,
        x,
        C
      ) || e !== null && e.dependencies !== null && ho(e.dependencies)) ? (I || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(a, x, C), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(
        a,
        x,
        C
      )), typeof p.componentDidUpdate == "function" && (t.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || T === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = x), p.props = a, p.state = x, p.context = C, a = q) : (typeof p.componentDidUpdate != "function" || T === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return p = a, Lo(e, t), a = (t.flags & 128) !== 0, p || a ? (p = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : p.render(), t.flags |= 1, e !== null && a ? (t.child = Wn(
      t,
      e.child,
      null,
      c
    ), t.child = Wn(
      t,
      null,
      l,
      c
    )) : We(e, t, l, c), t.memoizedState = p.state, e = t.child) : e = Zt(
      e,
      t,
      c
    ), e;
  }
  function xc(e, t, l, a) {
    return kn(), t.flags |= 256, We(e, t, l, a), t.child;
  }
  var Ju = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ku(e) {
    return { baseLanes: e, cachePool: Sf() };
  }
  function Ou(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Tt), e;
  }
  function wc(e, t, l) {
    var a = t.pendingProps, c = !1, p = (t.flags & 128) !== 0, T;
    if ((T = p) || (T = e !== null && e.memoizedState === null ? !1 : (be.current & 2) !== 0), T && (c = !0, t.flags &= -129), T = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (me) {
        if (c ? Tn(t) : Sn(), (e = xe) ? (e = Pd(
          e,
          Dt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: dn !== null ? { id: Vt, overflow: bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = cf(e), l.return = t, t.child = l, Qe = t, xe = null)) : e = null, e === null) throw mn(t);
        return Ds(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var E = a.children;
      return a = a.fallback, c ? (Sn(), c = t.mode, E = Go(
        { mode: "hidden", children: E },
        c
      ), a = Jn(
        a,
        c,
        l,
        null
      ), E.return = t, a.return = t, E.sibling = a, t.child = E, a = t.child, a.memoizedState = ku(l), a.childLanes = Ou(
        e,
        T,
        l
      ), t.memoizedState = Ju, Cl(null, a)) : (Tn(t), Ku(t, E));
    }
    var C = e.memoizedState;
    if (C !== null && (E = C.dehydrated, E !== null)) {
      if (p)
        t.flags & 256 ? (Tn(t), t.flags &= -257, t = Xu(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Sn(), t.child = e.child, t.flags |= 128, t = null) : (Sn(), E = a.fallback, c = t.mode, a = Go(
          { mode: "visible", children: a.children },
          c
        ), E = Jn(
          E,
          c,
          l,
          null
        ), E.flags |= 2, a.return = t, E.return = t, a.sibling = E, t.child = a, Wn(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = ku(l), a.childLanes = Ou(
          e,
          T,
          l
        ), t.memoizedState = Ju, t = Cl(null, a));
      else if (Tn(t), Ds(E)) {
        if (T = E.nextSibling && E.nextSibling.dataset, T) var I = T.dgst;
        T = I, a = Error(u(419)), a.stack = "", a.digest = T, cl({ value: a, source: null, stack: null }), t = Xu(
          e,
          t,
          l
        );
      } else if (Ye || Ei(e, t, l, !1), T = (l & e.childLanes) !== 0, Ye || T) {
        if (T = Ue, T !== null && (a = yr(T, l), a !== 0 && a !== C.retryLane))
          throw C.retryLane = a, Fn(e, a), ft(T, e, a), Yu;
        Ns(E) || Jo(), t = Xu(
          e,
          t,
          l
        );
      } else
        Ns(E) ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, xe = Ut(
          E.nextSibling
        ), Qe = t, me = !0, pn = null, Dt = !1, e !== null && mf(t, e), t = Ku(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (Sn(), E = a.fallback, c = t.mode, C = e.child, I = C.sibling, a = Jt(C, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = C.subtreeFlags & 65011712, I !== null ? E = Jt(
      I,
      E
    ) : (E = Jn(
      E,
      c,
      l,
      null
    ), E.flags |= 2), E.return = t, a.return = t, a.sibling = E, t.child = a, Cl(null, a), a = t.child, E = e.child.memoizedState, E === null ? E = ku(l) : (c = E.cachePool, c !== null ? (C = Pe._currentValue, c = c.parent !== C ? { parent: C, pool: C } : c) : c = Sf(), E = {
      baseLanes: E.baseLanes | l,
      cachePool: c
    }), a.memoizedState = E, a.childLanes = Ou(
      e,
      T,
      l
    ), t.memoizedState = Ju, Cl(e.child, a)) : (Tn(t), l = e.child, e = l.sibling, l = Jt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (T = t.deletions, T === null ? (t.deletions = [e], t.flags |= 16) : T.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Ku(e, t) {
    return t = Go(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Go(e, t) {
    return e = ht(22, e, null, t), e.lanes = 0, e;
  }
  function Xu(e, t, l) {
    return Wn(t, e.child, null, l), e = Ku(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function qc(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ru(e.return, t, l);
  }
  function Qu(e, t, l, a, c, p) {
    var T = e.memoizedState;
    T === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: c,
      treeForkCount: p
    } : (T.isBackwards = t, T.rendering = null, T.renderingStartTime = 0, T.last = a, T.tail = l, T.tailMode = c, T.treeForkCount = p);
  }
  function Lc(e, t, l) {
    var a = t.pendingProps, c = a.revealOrder, p = a.tail;
    a = a.children;
    var T = be.current, E = (T & 2) !== 0;
    if (E ? (T = T & 1 | 2, t.flags |= 128) : T &= 1, B(be, T), We(e, t, a, l), a = me ? fl : 0, !E && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13)
          e.memoizedState !== null && qc(e, l, t);
        else if (e.tag === 19)
          qc(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (c) {
      case "forwards":
        for (l = t.child, c = null; l !== null;)
          e = l.alternate, e !== null && Co(e) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = t.child, t.child = null) : (c = l.sibling, l.sibling = null), Qu(
          t,
          !1,
          c,
          l,
          p,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, c = t.child, t.child = null; c !== null;) {
          if (e = c.alternate, e !== null && Co(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = l, l = c, c = e;
        }
        Qu(
          t,
          !0,
          l,
          null,
          p,
          a
        );
        break;
      case "together":
        Qu(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zt(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Ei(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, l = Jt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)
        e = e.sibling, l = l.sibling = Jt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Zu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ho(e)));
  }
  function Fg(e, t, l) {
    switch (t.tag) {
      case 3:
        tt(t, t.stateNode.containerInfo), hn(t, Pe, e.memoizedState.cache), kn();
        break;
      case 27:
      case 5:
        Qi(t);
        break;
      case 4:
        tt(t, t.stateNode.containerInfo);
        break;
      case 10:
        hn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Eu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Tn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? wc(e, t, l) : (Tn(t), e = Zt(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Tn(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Ei(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), c) {
          if (a)
            return Lc(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), B(be, be.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Rc(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        hn(t, Pe, e.memoizedState.cache);
    }
    return Zt(e, t, l);
  }
  function Gc(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ye = !0;
      else {
        if (!Zu(e, l) && (t.flags & 128) === 0)
          return Ye = !1, Fg(
            e,
            t,
            l
          );
        Ye = (e.flags & 131072) !== 0;
      }
    else
      Ye = !1, me && (t.flags & 1048576) !== 0 && pf(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qn(t.elementType), t.type = e, typeof e == "function")
            tu(e) ? (a = jn(e, a), t.tag = 1, t = Uc(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Fu(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === Z) {
                t.tag = 11, t = Cc(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (c === J) {
                t.tag = 14, t = Ac(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = Et(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Fu(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, c = jn(
          a,
          t.pendingProps
        ), Uc(
          e,
          t,
          a,
          c,
          l
        );
      case 3:
        e: {
          if (tt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          a = t.pendingProps;
          var p = t.memoizedState;
          c = p.element, gu(e, t), vl(t, a, null, l);
          var T = t.memoizedState;
          if (a = T.cache, hn(t, Pe, a), a !== p.cache && fu(
            t,
            [Pe],
            l,
            !0
          ), yl(), a = T.element, p.isDehydrated)
            if (p = {
              element: a,
              isDehydrated: !1,
              cache: T.cache
            }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
              t = xc(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== c) {
              c = Mt(
                Error(u(424)),
                t
              ), cl(c), t = xc(
                e,
                t,
                a,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (xe = Ut(e.firstChild), Qe = t, me = !0, pn = null, Dt = !0, l = Rf(
                t,
                null,
                a,
                l
              ), t.child = l; l;)
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (kn(), a === c) {
              t = Zt(
                e,
                t,
                l
              );
              break e;
            }
            We(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Lo(e, t), e === null ? (l = Od(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : me || (l = t.type, e = t.pendingProps, a = Wo(
          se.current
        ).createElement(l), a[Xe] = t, a[lt] = e, $e(a, l, e), Oe(a), t.stateNode = a) : t.memoizedState = Od(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Qi(t), e === null && me && (a = t.stateNode = Fd(
          t.type,
          t.pendingProps,
          se.current
        ), Qe = t, Dt = !0, c = xe, Dn(t.type) ? (Is = c, xe = Ut(a.firstChild)) : xe = c), We(
          e,
          t,
          t.pendingProps.children,
          l
        ), Lo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && me && ((c = a = xe) && (a = Ty(
          a,
          t.type,
          t.pendingProps,
          Dt
        ), a !== null ? (t.stateNode = a, Qe = t, xe = Ut(a.firstChild), Dt = !1, c = !0) : c = !1), c || mn(t)), Qi(t), c = t.type, p = t.pendingProps, T = e !== null ? e.memoizedProps : null, a = p.children, As(c, p) ? a = null : T !== null && As(c, T) && (t.flags |= 32), t.memoizedState !== null && (c = Cu(
          e,
          t,
          Lg,
          null,
          null,
          l
        ), bl._currentValue = c), Lo(e, t), We(e, t, a, l), t.child;
      case 6:
        return e === null && me && ((e = l = xe) && (l = Sy(
          l,
          t.pendingProps,
          Dt
        ), l !== null ? (t.stateNode = l, Qe = t, xe = null, e = !0) : e = !1), e || mn(t)), null;
      case 13:
        return wc(e, t, l);
      case 4:
        return tt(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Wn(
          t,
          null,
          a,
          l
        ) : We(e, t, a, l), t.child;
      case 11:
        return Cc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return We(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return We(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return We(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, hn(t, t.type, a.value), We(e, t, a.children, l), t.child;
      case 9:
        return c = t.type._context, a = t.pendingProps.children, Kn(t), c = Ze(c), a = a(c), t.flags |= 1, We(e, t, a, l), t.child;
      case 14:
        return Ac(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Mc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Lc(e, t, l);
      case 31:
        return Yg(e, t, l);
      case 22:
        return Rc(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Kn(t), a = Ze(Pe), e === null ? (c = pu(), c === null && (c = Ue, p = cu(), c.pooledCache = p, p.refCount++, p !== null && (c.pooledCacheLanes |= l), c = p), t.memoizedState = { parent: a, cache: c }, hu(t), hn(t, Pe, c)) : ((e.lanes & l) !== 0 && (gu(e, t), vl(t, null, null, l), yl()), c = e.memoizedState, p = t.memoizedState, c.parent !== a ? (c = { parent: a, cache: a }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), hn(t, Pe, a)) : (a = p.cache, hn(t, Pe, a), a !== c.cache && fu(
          t,
          [Pe],
          l,
          !0
        ))), We(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Wt(e) {
    e.flags |= 4;
  }
  function Wu(e, t, l, a, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sd()) e.flags |= 8192;
        else
          throw Zn = To, mu;
    } else e.flags &= -16777217;
  }
  function Hc(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wd(t))
      if (sd()) e.flags |= 8192;
      else
        throw Zn = To, mu;
  }
  function Ho(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? mr() : 536870912, e.lanes |= t, qi |= t);
  }
  function Al(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null;)
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null;)
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var c = e.child; c !== null;)
        l |= c.lanes | c.childLanes, a |= c.subtreeFlags & 65011712, a |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null;)
        l |= c.lanes | c.childLanes, a |= c.subtreeFlags, a |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Jg(e, t, l) {
    var a = t.pendingProps;
    switch (ou(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Kt(Pe), Ve(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Si(t) ? Wt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, uu())), we(t), null;
      case 26:
        var c = t.type, p = t.memoizedState;
        return e === null ? (Wt(t), p !== null ? (we(t), Hc(t, p)) : (we(t), Wu(
          t,
          c,
          null,
          a,
          l
        ))) : p ? p !== e.memoizedState ? (Wt(t), we(t), Hc(t, p)) : (we(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Wt(t), we(t), Wu(
          t,
          c,
          e,
          a,
          l
        )), null;
      case 27:
        if (Ol(t), l = se.current, c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(u(166));
            return we(t), null;
          }
          e = K.current, Si(t) ? hf(t) : (e = Fd(c, a, l), t.stateNode = e, Wt(t));
        }
        return we(t), null;
      case 5:
        if (Ol(t), c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(u(166));
            return we(t), null;
          }
          if (p = K.current, Si(t))
            hf(t);
          else {
            var T = Wo(
              se.current
            );
            switch (p) {
              case 1:
                p = T.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                p = T.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    p = T.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    p = T.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    p = T.createElement("div"), p.innerHTML = "<script><\/script>", p = p.removeChild(
                      p.firstChild
                    );
                    break;
                  case "select":
                    p = typeof a.is == "string" ? T.createElement("select", {
                      is: a.is
                    }) : T.createElement("select"), a.multiple ? p.multiple = !0 : a.size && (p.size = a.size);
                    break;
                  default:
                    p = typeof a.is == "string" ? T.createElement(c, { is: a.is }) : T.createElement(c);
                }
            }
            p[Xe] = t, p[lt] = a;
            e: for (T = t.child; T !== null;) {
              if (T.tag === 5 || T.tag === 6)
                p.appendChild(T.stateNode);
              else if (T.tag !== 4 && T.tag !== 27 && T.child !== null) {
                T.child.return = T, T = T.child;
                continue;
              }
              if (T === t) break e;
              for (; T.sibling === null;) {
                if (T.return === null || T.return === t)
                  break e;
                T = T.return;
              }
              T.sibling.return = T.return, T = T.sibling;
            }
            t.stateNode = p;
            e: switch ($e(p, c, a), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Wt(t);
          }
        }
        return we(t), Wu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Wt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = se.current, Si(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, c = Qe, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  a = c.memoizedProps;
              }
            e[Xe] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || wd(e.nodeValue, l)), e || mn(t, !0);
          } else
            e = Wo(e).createTextNode(
              a
            ), e[Xe] = t, t.stateNode = e;
        }
        return we(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Si(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[Xe] = t;
            } else
              kn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            we(t), e = !1;
          } else
            l = uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (yt(t), t) : (yt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return we(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Si(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(u(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(u(317));
              c[Xe] = t;
            } else
              kn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            we(t), c = !1;
          } else
            c = uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (yt(t), t) : (yt(t), null);
        }
        return yt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, c = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (c = a.alternate.memoizedState.cachePool.pool), p = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (p = a.memoizedState.cachePool.pool), p !== c && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ho(t, t.updateQueue), we(t), null);
      case 4:
        return Ve(), e === null && Ts(t.stateNode.containerInfo), we(t), null;
      case 10:
        return Kt(t.type), we(t), null;
      case 19:
        if (H(be), a = t.memoizedState, a === null) return we(t), null;
        if (c = (t.flags & 128) !== 0, p = a.rendering, p === null)
          if (c) Al(a, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null;) {
                if (p = Co(e), p !== null) {
                  for (t.flags |= 128, Al(a, !1), e = p.updateQueue, t.updateQueue = e, Ho(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)
                    ff(l, e), l = l.sibling;
                  return B(
                    be,
                    be.current & 1 | 2
                  ), me && kt(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ct() > Bo && (t.flags |= 128, c = !0, Al(a, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = Co(p), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Ho(t, e), Al(a, !0), a.tail === null && a.tailMode === "hidden" && !p.alternate && !me)
                return we(t), null;
            } else
              2 * ct() - a.renderingStartTime > Bo && l !== 536870912 && (t.flags |= 128, c = !0, Al(a, !1), t.lanes = 4194304);
          a.isBackwards ? (p.sibling = t.child, t.child = p) : (e = a.last, e !== null ? e.sibling = p : t.child = p, a.last = p);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, l = be.current, B(
          be,
          c ? l & 1 | 2 : l & 1
        ), me && kt(t, a.treeForkCount), e) : (we(t), null);
      case 22:
      case 23:
        return yt(t), Su(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), l = t.updateQueue, l !== null && Ho(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && H(Xn), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Kt(Pe), we(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function kg(e, t) {
    switch (ou(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Kt(Pe), Ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ol(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (yt(t), t.alternate === null)
            throw Error(u(340));
          kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (yt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(be), null;
      case 4:
        return Ve(), null;
      case 10:
        return Kt(t.type), null;
      case 22:
      case 23:
        return yt(t), Su(), e !== null && H(Xn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Kt(Pe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vc(e, t) {
    switch (ou(t), t.tag) {
      case 3:
        Kt(Pe), Ve();
        break;
      case 26:
      case 27:
      case 5:
        Ol(t);
        break;
      case 4:
        Ve();
        break;
      case 31:
        t.memoizedState !== null && yt(t);
        break;
      case 13:
        yt(t);
        break;
      case 19:
        H(be);
        break;
      case 10:
        Kt(t.type);
        break;
      case 22:
      case 23:
        yt(t), Su(), e !== null && H(Xn);
        break;
      case 24:
        Kt(Pe);
    }
  }
  function Ml(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var c = a.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var p = l.create, T = l.inst;
            a = p(), T.destroy = a;
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (E) {
      Ae(t, t.return, E);
    }
  }
  function En(e, t, l) {
    try {
      var a = t.updateQueue, c = a !== null ? a.lastEffect : null;
      if (c !== null) {
        var p = c.next;
        a = p;
        do {
          if ((a.tag & e) === e) {
            var T = a.inst, E = T.destroy;
            if (E !== void 0) {
              T.destroy = void 0, c = t;
              var C = l, I = E;
              try {
                I();
              } catch (q) {
                Ae(
                  c,
                  C,
                  q
                );
              }
            }
          }
          a = a.next;
        } while (a !== p);
      }
    } catch (q) {
      Ae(t, t.return, q);
    }
  }
  function bc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Df(t, l);
      } catch (a) {
        Ae(e, e.return, a);
      }
    }
  }
  function zc(e, t, l) {
    l.props = jn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ae(e, t, a);
    }
  }
  function Rl(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (c) {
      Ae(e, t, c);
    }
  }
  function zt(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (c) {
          Ae(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (c) {
          Ae(e, t, c);
        }
      else l.current = null;
  }
  function Pc(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (c) {
      Ae(e, e.return, c);
    }
  }
  function $u(e, t, l) {
    try {
      var a = e.stateNode;
      py(a, e.type, l, t), a[lt] = t;
    } catch (c) {
      Ae(e, e.return, c);
    }
  }
  function Bc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Dn(e.type) || e.tag === 4;
  }
  function ju(e) {
    e: for (; ;) {
      for (; e.sibling === null;) {
        if (e.return === null || Bc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && Dn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function es(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Yt));
    else if (a !== 4 && (a === 27 && Dn(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (es(e, t, l), e = e.sibling; e !== null;)
        es(e, t, l), e = e.sibling;
  }
  function Vo(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Dn(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Vo(e, t, l), e = e.sibling; e !== null;)
        Vo(e, t, l), e = e.sibling;
  }
  function Yc(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, c = t.attributes; c.length;)
        t.removeAttributeNode(c[0]);
      $e(t, a, l), t[Xe] = e, t[lt] = l;
    } catch (p) {
      Ae(e, e.return, p);
    }
  }
  var $t = !1, Fe = !1, ts = !1, Fc = typeof WeakSet == "function" ? WeakSet : Set, Ke = null;
  function Og(e, t) {
    if (e = e.containerInfo, _s = la, e = ef(e), Xa(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var c = a.anchorOffset, p = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var T = 0, E = -1, C = -1, I = 0, q = 0, G = e, U = null;
            t: for (; ;) {
              for (var x; G !== l || c !== 0 && G.nodeType !== 3 || (E = T + c), G !== p || a !== 0 && G.nodeType !== 3 || (C = T + a), G.nodeType === 3 && (T += G.nodeValue.length), (x = G.firstChild) !== null;)
                U = G, G = x;
              for (; ;) {
                if (G === e) break t;
                if (U === l && ++I === c && (E = T), U === p && ++q === a && (C = T), (x = G.nextSibling) !== null) break;
                G = U, U = G.parentNode;
              }
              G = x;
            }
            l = E === -1 || C === -1 ? null : { start: E, end: C };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Cs = { focusedElem: e, selectionRange: l }, la = !1, Ke = t; Ke !== null;)
      if (t = Ke, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ke = e;
      else
        for (; Ke !== null;) {
          switch (t = Ke, p = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  c = e[l], c.ref.impl = c.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                e = void 0, l = t, c = p.memoizedProps, p = p.memoizedState, a = l.stateNode;
                try {
                  var O = jn(
                    l.type,
                    c
                  );
                  e = a.getSnapshotBeforeUpdate(
                    O,
                    p
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Ae(
                    l,
                    l.return,
                    ee
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Rs(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rs(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ke = e;
            break;
          }
          Ke = t.return;
        }
  }
  function Jc(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        en(e, l), a & 4 && Ml(5, l);
        break;
      case 1:
        if (en(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (T) {
              Ae(l, l.return, T);
            }
          else {
            var c = jn(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (T) {
              Ae(
                l,
                l.return,
                T
              );
            }
          }
        a & 64 && bc(l), a & 512 && Rl(l, l.return);
        break;
      case 3:
        if (en(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Df(e, t);
          } catch (T) {
            Ae(l, l.return, T);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Yc(l);
      case 26:
      case 5:
        en(e, l), t === null && a & 4 && Pc(l), a & 512 && Rl(l, l.return);
        break;
      case 12:
        en(e, l);
        break;
      case 31:
        en(e, l), a & 4 && Kc(e, l);
        break;
      case 13:
        en(e, l), a & 4 && Xc(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = ty.bind(
          null,
          l
        ), Ey(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || $t, !a) {
          t = t !== null && t.memoizedState !== null || Fe, c = $t;
          var p = Fe;
          $t = a, (Fe = t) && !p ? tn(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : en(e, l), $t = c, Fe = p;
        }
        break;
      case 30:
        break;
      default:
        en(e, l);
    }
  }
  function kc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, kc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && xa(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Le = null, at = !1;
  function jt(e, t, l) {
    for (l = l.child; l !== null;)
      Oc(e, t, l), l = l.sibling;
  }
  function Oc(e, t, l) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Zi, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Fe || zt(l, t), jt(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Fe || zt(l, t);
        var a = Le, c = at;
        Dn(l.type) && (Le = l.stateNode, at = !1), jt(
          e,
          t,
          l
        ), Gl(l.stateNode), Le = a, at = c;
        break;
      case 5:
        Fe || zt(l, t);
      case 6:
        if (a = Le, c = at, Le = null, jt(
          e,
          t,
          l
        ), Le = a, at = c, Le !== null)
          if (at)
            try {
              (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(l.stateNode);
            } catch (p) {
              Ae(
                l,
                t,
                p
              );
            }
          else
            try {
              Le.removeChild(l.stateNode);
            } catch (p) {
              Ae(
                l,
                t,
                p
              );
            }
        break;
      case 18:
        Le !== null && (at ? (e = Le, bd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Bi(e)) : bd(Le, l.stateNode));
        break;
      case 4:
        a = Le, c = at, Le = l.stateNode.containerInfo, at = !0, jt(
          e,
          t,
          l
        ), Le = a, at = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        En(2, l, t), Fe || En(4, l, t), jt(
          e,
          t,
          l
        );
        break;
      case 1:
        Fe || (zt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && zc(
          l,
          t,
          a
        )), jt(
          e,
          t,
          l
        );
        break;
      case 21:
        jt(
          e,
          t,
          l
        );
        break;
      case 22:
        Fe = (a = Fe) || l.memoizedState !== null, jt(
          e,
          t,
          l
        ), Fe = a;
        break;
      default:
        jt(
          e,
          t,
          l
        );
    }
  }
  function Kc(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Bi(e);
      } catch (l) {
        Ae(t, t.return, l);
      }
    }
  }
  function Xc(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Bi(e);
      } catch (l) {
        Ae(t, t.return, l);
      }
  }
  function Kg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Fc()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Fc()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function bo(e, t) {
    var l = Kg(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var c = ny.bind(null, e, a);
        a.then(c, c);
      }
    });
  }
  function ut(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var c = l[a], p = e, T = t, E = T;
        e: for (; E !== null;) {
          switch (E.tag) {
            case 27:
              if (Dn(E.type)) {
                Le = E.stateNode, at = !1;
                break e;
              }
              break;
            case 5:
              Le = E.stateNode, at = !1;
              break e;
            case 3:
            case 4:
              Le = E.stateNode.containerInfo, at = !0;
              break e;
          }
          E = E.return;
        }
        if (Le === null) throw Error(u(160));
        Oc(p, T, c), Le = null, at = !1, p = c.alternate, p !== null && (p.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;)
        Qc(t, e), t = t.sibling;
  }
  var Lt = null;
  function Qc(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, e), st(e), a & 4 && (En(3, e, e.return), Ml(3, e), En(5, e, e.return));
        break;
      case 1:
        ut(t, e), st(e), a & 512 && (Fe || l === null || zt(l, l.return)), a & 64 && $t && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var c = Lt;
        if (ut(t, e), st(e), a & 512 && (Fe || l === null || zt(l, l.return)), a & 4) {
          var p = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (a) {
                    case "title":
                      p = c.getElementsByTagName("title")[0], (!p || p[ji] || p[Xe] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = c.createElement(a), c.head.insertBefore(
                        p,
                        c.querySelector("head > title")
                      )), $e(p, a, l), p[Xe] = e, Oe(p), a = p;
                      break e;
                    case "link":
                      var T = Qd(
                        "link",
                        "href",
                        c
                      ).get(a + (l.href || ""));
                      if (T) {
                        for (var E = 0; E < T.length; E++)
                          if (p = T[E], p.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && p.getAttribute("rel") === (l.rel == null ? null : l.rel) && p.getAttribute("title") === (l.title == null ? null : l.title) && p.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            T.splice(E, 1);
                            break t;
                          }
                      }
                      p = c.createElement(a), $e(p, a, l), c.head.appendChild(p);
                      break;
                    case "meta":
                      if (T = Qd(
                        "meta",
                        "content",
                        c
                      ).get(a + (l.content || ""))) {
                        for (E = 0; E < T.length; E++)
                          if (p = T[E], p.getAttribute("content") === (l.content == null ? null : "" + l.content) && p.getAttribute("name") === (l.name == null ? null : l.name) && p.getAttribute("property") === (l.property == null ? null : l.property) && p.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && p.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            T.splice(E, 1);
                            break t;
                          }
                      }
                      p = c.createElement(a), $e(p, a, l), c.head.appendChild(p);
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  p[Xe] = e, Oe(p), a = p;
                }
                e.stateNode = a;
              } else
                Zd(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Xd(
                c,
                a,
                e.memoizedProps
              );
          else
            p !== a ? (p === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : p.count--, a === null ? Zd(
              c,
              e.type,
              e.stateNode
            ) : Xd(
              c,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && $u(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ut(t, e), st(e), a & 512 && (Fe || l === null || zt(l, l.return)), l !== null && a & 4 && $u(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ut(t, e), st(e), a & 512 && (Fe || l === null || zt(l, l.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            fi(c, "");
          } catch (O) {
            Ae(e, e.return, O);
          }
        }
        a & 4 && e.stateNode != null && (c = e.memoizedProps, $u(
          e,
          c,
          l !== null ? l.memoizedProps : c
        )), a & 1024 && (ts = !0);
        break;
      case 6:
        if (ut(t, e), st(e), a & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (O) {
            Ae(e, e.return, O);
          }
        }
        break;
      case 3:
        if (ea = null, c = Lt, Lt = $o(t.containerInfo), ut(t, e), Lt = c, st(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Bi(t.containerInfo);
          } catch (O) {
            Ae(e, e.return, O);
          }
        ts && (ts = !1, Zc(e));
        break;
      case 4:
        a = Lt, Lt = $o(
          e.stateNode.containerInfo
        ), ut(t, e), st(e), Lt = a;
        break;
      case 12:
        ut(t, e), st(e);
        break;
      case 31:
        ut(t, e), st(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, bo(e, a)));
        break;
      case 13:
        ut(t, e), st(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Po = ct()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, bo(e, a)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var C = l !== null && l.memoizedState !== null, I = $t, q = Fe;
        if ($t = I || c, Fe = q || C, ut(t, e), Fe = q, $t = I, st(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (l === null || C || $t || Fe || ei(e)), l = null, t = e; ;) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                C = l = t;
                try {
                  if (p = C.stateNode, c)
                    T = p.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                  else {
                    E = C.stateNode;
                    var G = C.memoizedProps.style, U = G != null && G.hasOwnProperty("display") ? G.display : null;
                    E.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (O) {
                  Ae(C, C.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = c ? "" : C.memoizedProps;
                } catch (O) {
                  Ae(C, C.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                C = t;
                try {
                  var x = C.stateNode;
                  c ? zd(x, !0) : zd(C.stateNode, !1);
                } catch (O) {
                  Ae(C, C.return, O);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, bo(e, l))));
        break;
      case 19:
        ut(t, e), st(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, bo(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, e), st(e);
    }
  }
  function st(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null;) {
          if (Bc(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var c = l.stateNode, p = ju(e);
            Vo(e, p, c);
            break;
          case 5:
            var T = l.stateNode;
            l.flags & 32 && (fi(T, ""), l.flags &= -33);
            var E = ju(e);
            Vo(e, E, T);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo, I = ju(e);
            es(
              e,
              I,
              C
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        Ae(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        Zc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function en(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;)
        Jc(e, t.alternate, t), t = t.sibling;
  }
  function ei(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          En(4, t, t.return), ei(t);
          break;
        case 1:
          zt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && zc(
            t,
            t.return,
            l
          ), ei(t);
          break;
        case 27:
          Gl(t.stateNode);
        case 26:
        case 5:
          zt(t, t.return), ei(t);
          break;
        case 22:
          t.memoizedState === null && ei(t);
          break;
        case 30:
          ei(t);
          break;
        default:
          ei(t);
      }
      e = e.sibling;
    }
  }
  function tn(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate, c = e, p = t, T = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          tn(
            c,
            p,
            l
          ), Ml(4, p);
          break;
        case 1:
          if (tn(
            c,
            p,
            l
          ), a = p, c = a.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (I) {
              Ae(a, a.return, I);
            }
          if (a = p, c = a.updateQueue, c !== null) {
            var E = a.stateNode;
            try {
              var C = c.shared.hiddenCallbacks;
              if (C !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < C.length; c++)
                  Nf(C[c], E);
            } catch (I) {
              Ae(a, a.return, I);
            }
          }
          l && T & 64 && bc(p), Rl(p, p.return);
          break;
        case 27:
          Yc(p);
        case 26:
        case 5:
          tn(
            c,
            p,
            l
          ), l && a === null && T & 4 && Pc(p), Rl(p, p.return);
          break;
        case 12:
          tn(
            c,
            p,
            l
          );
          break;
        case 31:
          tn(
            c,
            p,
            l
          ), l && T & 4 && Kc(c, p);
          break;
        case 13:
          tn(
            c,
            p,
            l
          ), l && T & 4 && Xc(c, p);
          break;
        case 22:
          p.memoizedState === null && tn(
            c,
            p,
            l
          ), Rl(p, p.return);
          break;
        case 30:
          break;
        default:
          tn(
            c,
            p,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ns(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && dl(l));
  }
  function is(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && dl(e));
  }
  function Gt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;)
        Wc(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Wc(e, t, l, a) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gt(
          e,
          t,
          l,
          a
        ), c & 2048 && Ml(9, t);
        break;
      case 1:
        Gt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Gt(
          e,
          t,
          l,
          a
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && dl(e)));
        break;
      case 12:
        if (c & 2048) {
          Gt(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var p = t.memoizedProps, T = p.id, E = p.onPostCommit;
            typeof E == "function" && E(
              T,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Ae(t, t.return, C);
          }
        } else
          Gt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Gt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Gt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        p = t.stateNode, T = t.alternate, t.memoizedState !== null ? p._visibility & 2 ? Gt(
          e,
          t,
          l,
          a
        ) : Nl(e, t) : p._visibility & 2 ? Gt(
          e,
          t,
          l,
          a
        ) : (p._visibility |= 2, Ui(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), c & 2048 && ns(T, t);
        break;
      case 24:
        Gt(
          e,
          t,
          l,
          a
        ), c & 2048 && is(t.alternate, t);
        break;
      default:
        Gt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Ui(e, t, l, a, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
      var p = e, T = t, E = l, C = a, I = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          Ui(
            p,
            T,
            E,
            C,
            c
          ), Ml(8, T);
          break;
        case 23:
          break;
        case 22:
          var q = T.stateNode;
          T.memoizedState !== null ? q._visibility & 2 ? Ui(
            p,
            T,
            E,
            C,
            c
          ) : Nl(
            p,
            T
          ) : (q._visibility |= 2, Ui(
            p,
            T,
            E,
            C,
            c
          )), c && I & 2048 && ns(
            T.alternate,
            T
          );
          break;
        case 24:
          Ui(
            p,
            T,
            E,
            C,
            c
          ), c && I & 2048 && is(T.alternate, T);
          break;
        default:
          Ui(
            p,
            T,
            E,
            C,
            c
          );
      }
      t = t.sibling;
    }
  }
  function Nl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var l = e, a = t, c = a.flags;
        switch (a.tag) {
          case 22:
            Nl(l, a), c & 2048 && ns(
              a.alternate,
              a
            );
            break;
          case 24:
            Nl(l, a), c & 2048 && is(a.alternate, a);
            break;
          default:
            Nl(l, a);
        }
        t = t.sibling;
      }
  }
  var Dl = 8192;
  function xi(e, t, l) {
    if (e.subtreeFlags & Dl)
      for (e = e.child; e !== null;)
        $c(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function $c(e, t, l) {
    switch (e.tag) {
      case 26:
        xi(
          e,
          t,
          l
        ), e.flags & Dl && e.memoizedState !== null && qy(
          l,
          Lt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        xi(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Lt;
        Lt = $o(e.stateNode.containerInfo), xi(
          e,
          t,
          l
        ), Lt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Dl, Dl = 16777216, xi(
          e,
          t,
          l
        ), Dl = a) : xi(
          e,
          t,
          l
        ));
        break;
      default:
        xi(
          e,
          t,
          l
        );
    }
  }
  function jc(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Il(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Ke = a, td(
            a,
            e
          );
        }
      jc(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;)
        ed(e), e = e.sibling;
  }
  function ed(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Il(e), e.flags & 2048 && En(9, e, e.return);
        break;
      case 3:
        Il(e);
        break;
      case 12:
        Il(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, zo(e)) : Il(e);
        break;
      default:
        Il(e);
    }
  }
  function zo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Ke = a, td(
            a,
            e
          );
        }
      jc(e);
    }
    for (e = e.child; e !== null;) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          En(8, t, t.return), zo(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, zo(t));
          break;
        default:
          zo(t);
      }
      e = e.sibling;
    }
  }
  function td(e, t) {
    for (; Ke !== null;) {
      var l = Ke;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          En(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          dl(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Ke = a;
      else
        e: for (l = e; Ke !== null;) {
          a = Ke;
          var c = a.sibling, p = a.return;
          if (kc(a), a === l) {
            Ke = null;
            break e;
          }
          if (c !== null) {
            c.return = p, Ke = c;
            break e;
          }
          Ke = p;
        }
    }
  }
  var Xg = {
    getCacheForType: function (e) {
      var t = Ze(Pe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function () {
      return Ze(Pe).controller.signal;
    }
  }, Qg = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Ue = null, re = null, de = 0, Ce = 0, vt = null, _n = !1, wi = !1, ls = !1, nn = 0, He = 0, Cn = 0, ti = 0, os = 0, Tt = 0, qi = 0, Ul = null, rt = null, as = !1, Po = 0, nd = 0, Bo = 1 / 0, Yo = null, An = null, Je = 0, Mn = null, Li = null, ln = 0, us = 0, ss = null, id = null, xl = 0, rs = null;
  function St() {
    return (Se & 2) !== 0 && de !== 0 ? de & -de : w.T !== null ? hs() : vr();
  }
  function ld() {
    if (Tt === 0)
      if ((de & 536870912) === 0 || me) {
        var e = Ql;
        Ql <<= 1, (Ql & 3932160) === 0 && (Ql = 262144), Tt = e;
      } else Tt = 536870912;
    return e = gt.current, e !== null && (e.flags |= 32), Tt;
  }
  function ft(e, t, l) {
    (e === Ue && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) && (Gi(e, 0), Rn(
      e,
      de,
      Tt,
      !1
    )), $i(e, l), ((Se & 2) === 0 || e !== Ue) && (e === Ue && ((Se & 2) === 0 && (ti |= l), He === 4 && Rn(
      e,
      de,
      Tt,
      !1
    )), Pt(e));
  }
  function od(e, t, l) {
    if ((Se & 6) !== 0) throw Error(u(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Wi(e, t), c = a ? $g(e, t) : cs(e, t, !0), p = a;
    do {
      if (c === 0) {
        wi && !a && Rn(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, p && !Zg(l)) {
          c = cs(e, t, !1), p = !1;
          continue;
        }
        if (c === 2) {
          if (p = t, e.errorRecoveryDisabledLanes & p)
            var T = 0;
          else
            T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            t = T;
            e: {
              var E = e;
              c = Ul;
              var C = E.current.memoizedState.isDehydrated;
              if (C && (Gi(E, T).flags |= 256), T = cs(
                E,
                T,
                !1
              ), T !== 2) {
                if (ls && !C) {
                  E.errorRecoveryDisabledLanes |= p, ti |= p, c = 4;
                  break e;
                }
                p = rt, rt = c, p !== null && (rt === null ? rt = p : rt.push.apply(
                  rt,
                  p
                ));
              }
              c = T;
            }
            if (p = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Gi(e, 0), Rn(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, p = c, p) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Rn(
                a,
                t,
                Tt,
                !_n
              );
              break e;
            case 2:
              rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (c = Po + 300 - ct(), 10 < c)) {
            if (Rn(
              a,
              t,
              Tt,
              !_n
            ), Wl(a, 0, !0) !== 0) break e;
            ln = t, a.timeoutHandle = Hd(
              ad.bind(
                null,
                a,
                l,
                rt,
                Yo,
                as,
                t,
                Tt,
                ti,
                qi,
                _n,
                p,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break e;
          }
          ad(
            a,
            l,
            rt,
            Yo,
            as,
            t,
            Tt,
            ti,
            qi,
            _n,
            p,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Pt(e);
  }
  function ad(e, t, l, a, c, p, T, E, C, I, q, G, U, x) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Yt
      }, $c(
        t,
        p,
        G
      );
      var O = (p & 62914560) === p ? Po - ct() : (p & 4194048) === p ? nd - ct() : 0;
      if (O = Ly(
        G,
        O
      ), O !== null) {
        ln = p, e.cancelPendingCommit = O(
          md.bind(
            null,
            e,
            t,
            p,
            l,
            a,
            c,
            T,
            E,
            C,
            q,
            G,
            null,
            U,
            x
          )
        ), Rn(e, p, T, !I);
        return;
      }
    }
    md(
      e,
      t,
      p,
      l,
      a,
      c,
      T,
      E,
      C
    );
  }
  function Zg(e) {
    for (var t = e; ;) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var c = l[a], p = c.getSnapshot;
          c = c.value;
          try {
            if (!mt(p(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Rn(e, t, l, a) {
    t &= ~os, t &= ~ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var c = t; 0 < c;) {
      var p = 31 - pt(c), T = 1 << p;
      a[p] = -1, c &= ~T;
    }
    l !== 0 && hr(e, l, t);
  }
  function Fo() {
    return (Se & 6) === 0 ? (wl(0), !1) : !0;
  }
  function fs() {
    if (re !== null) {
      if (Ce === 0)
        var e = re.return;
      else
        e = re, Ot = On = null, Ru(e), Mi = null, ml = 0, e = re;
      for (; e !== null;)
        Vc(e.alternate, e), e = e.return;
      re = null;
    }
  }
  function Gi(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, gy(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ln = 0, fs(), Ue = e, re = l = Jt(e.current, null), de = t, Ce = 0, vt = null, _n = !1, wi = Wi(e, t), ls = !1, qi = Tt = os = ti = Cn = He = 0, rt = Ul = null, as = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var c = 31 - pt(a), p = 1 << c;
        t |= e[c], a &= ~p;
      }
    return nn = t, ro(), l;
  }
  function ud(e, t) {
    oe = null, w.H = _l, t === Ai || t === vo ? (t = Cf(), Ce = 3) : t === mu ? (t = Cf(), Ce = 4) : Ce = t === Yu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, re === null && (He = 1, wo(
      e,
      Mt(t, e.current)
    ));
  }
  function sd() {
    var e = gt.current;
    return e === null ? !0 : (de & 4194048) === de ? It === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === It : !1;
  }
  function rd() {
    var e = w.H;
    return w.H = _l, e === null ? _l : e;
  }
  function fd() {
    var e = w.A;
    return w.A = Xg, e;
  }
  function Jo() {
    He = 4, _n || (de & 4194048) !== de && gt.current !== null || (wi = !0), (Cn & 134217727) === 0 && (ti & 134217727) === 0 || Ue === null || Rn(
      Ue,
      de,
      Tt,
      !1
    );
  }
  function cs(e, t, l) {
    var a = Se;
    Se |= 2;
    var c = rd(), p = fd();
    (Ue !== e || de !== t) && (Yo = null, Gi(e, t)), t = !1;
    var T = He;
    e: do
      try {
        if (Ce !== 0 && re !== null) {
          var E = re, C = vt;
          switch (Ce) {
            case 8:
              fs(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var I = Ce;
              if (Ce = 0, vt = null, Hi(e, E, C, I), l && wi) {
                T = 0;
                break e;
              }
              break;
            default:
              I = Ce, Ce = 0, vt = null, Hi(e, E, C, I);
          }
        }
        Wg(), T = He;
        break;
      } catch (q) {
        ud(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ot = On = null, Se = a, w.H = c, w.A = p, re === null && (Ue = null, de = 0, ro()), T;
  }
  function Wg() {
    for (; re !== null;) cd(re);
  }
  function $g(e, t) {
    var l = Se;
    Se |= 2;
    var a = rd(), c = fd();
    Ue !== e || de !== t ? (Yo = null, Bo = ct() + 500, Gi(e, t)) : wi = Wi(
      e,
      t
    );
    e: do
      try {
        if (Ce !== 0 && re !== null) {
          t = re;
          var p = vt;
          t: switch (Ce) {
            case 1:
              Ce = 0, vt = null, Hi(e, t, p, 1);
              break;
            case 2:
            case 9:
              if (Ef(p)) {
                Ce = 0, vt = null, dd(t);
                break;
              }
              t = function () {
                Ce !== 2 && Ce !== 9 || Ue !== e || (Ce = 7), Pt(e);
              }, p.then(t, t);
              break e;
            case 3:
              Ce = 7;
              break e;
            case 4:
              Ce = 5;
              break e;
            case 7:
              Ef(p) ? (Ce = 0, vt = null, dd(t)) : (Ce = 0, vt = null, Hi(e, t, p, 7));
              break;
            case 5:
              var T = null;
              switch (re.tag) {
                case 26:
                  T = re.memoizedState;
                case 5:
                case 27:
                  var E = re;
                  if (T ? Wd(T) : E.stateNode.complete) {
                    Ce = 0, vt = null;
                    var C = E.sibling;
                    if (C !== null) re = C;
                    else {
                      var I = E.return;
                      I !== null ? (re = I, ko(I)) : re = null;
                    }
                    break t;
                  }
              }
              Ce = 0, vt = null, Hi(e, t, p, 5);
              break;
            case 6:
              Ce = 0, vt = null, Hi(e, t, p, 6);
              break;
            case 8:
              fs(), He = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        jg();
        break;
      } catch (q) {
        ud(e, q);
      }
    while (!0);
    return Ot = On = null, w.H = a, w.A = c, Se = l, re !== null ? 0 : (Ue = null, de = 0, ro(), He);
  }
  function jg() {
    for (; re !== null && !_h();)
      cd(re);
  }
  function cd(e) {
    var t = Gc(e.alternate, e, nn);
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : re = t;
  }
  function dd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ic(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = Ic(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        Ru(t);
      default:
        Vc(l, t), t = re = ff(t, nn), t = Gc(l, t, nn);
    }
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : re = t;
  }
  function Hi(e, t, l, a) {
    Ot = On = null, Ru(t), Mi = null, ml = 0;
    var c = t.return;
    try {
      if (Bg(
        e,
        c,
        t,
        l,
        de
      )) {
        He = 1, wo(
          e,
          Mt(l, e.current)
        ), re = null;
        return;
      }
    } catch (p) {
      if (c !== null) throw re = c, p;
      He = 1, wo(
        e,
        Mt(l, e.current)
      ), re = null;
      return;
    }
    t.flags & 32768 ? (me || a === 1 ? e = !0 : wi || (de & 536870912) !== 0 ? e = !1 : (_n = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), pd(t, e)) : ko(t);
  }
  function ko(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pd(
          t,
          _n
        );
        return;
      }
      e = t.return;
      var l = Jg(
        t.alternate,
        t,
        nn
      );
      if (l !== null) {
        re = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        re = t;
        return;
      }
      re = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function pd(e, t) {
    do {
      var l = kg(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, re = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        re = e;
        return;
      }
      re = e = l;
    } while (e !== null);
    He = 6, re = null;
  }
  function md(e, t, l, a, c, p, T, E, C) {
    e.cancelPendingCommit = null;
    do
      Oo();
    while (Je !== 0);
    if ((Se & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (p = t.lanes | t.childLanes, p |= ja, wh(
        e,
        l,
        p,
        T,
        E,
        C
      ), e === Ue && (re = Ue = null, de = 0), Li = t, Mn = e, ln = l, us = p, ss = c, id = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, iy(Kl, function () {
        return Td(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = w.T, w.T = null, c = P.p, P.p = 2, T = Se, Se |= 4;
        try {
          Og(e, t, l);
        } finally {
          Se = T, P.p = c, w.T = a;
        }
      }
      Je = 1, hd(), gd(), yd();
    }
  }
  function hd() {
    if (Je === 1) {
      Je = 0;
      var e = Mn, t = Li, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = w.T, w.T = null;
        var a = P.p;
        P.p = 2;
        var c = Se;
        Se |= 4;
        try {
          Qc(t, e);
          var p = Cs, T = ef(e.containerInfo), E = p.focusedElem, C = p.selectionRange;
          if (T !== E && E && E.ownerDocument && jr(
            E.ownerDocument.documentElement,
            E
          )) {
            if (C !== null && Xa(E)) {
              var I = C.start, q = C.end;
              if (q === void 0 && (q = I), "selectionStart" in E)
                E.selectionStart = I, E.selectionEnd = Math.min(
                  q,
                  E.value.length
                );
              else {
                var G = E.ownerDocument || document, U = G && G.defaultView || window;
                if (U.getSelection) {
                  var x = U.getSelection(), O = E.textContent.length, ee = Math.min(C.start, O), De = C.end === void 0 ? ee : Math.min(C.end, O);
                  !x.extend && ee > De && (T = De, De = ee, ee = T);
                  var N = $r(
                    E,
                    ee
                  ), A = $r(
                    E,
                    De
                  );
                  if (N && A && (x.rangeCount !== 1 || x.anchorNode !== N.node || x.anchorOffset !== N.offset || x.focusNode !== A.node || x.focusOffset !== A.offset)) {
                    var D = G.createRange();
                    D.setStart(N.node, N.offset), x.removeAllRanges(), ee > De ? (x.addRange(D), x.extend(A.node, A.offset)) : (D.setEnd(A.node, A.offset), x.addRange(D));
                  }
                }
              }
            }
            for (G = [], x = E; x = x.parentNode;)
              x.nodeType === 1 && G.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof E.focus == "function" && E.focus(), E = 0; E < G.length; E++) {
              var L = G[E];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          la = !!_s, Cs = _s = null;
        } finally {
          Se = c, P.p = a, w.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function gd() {
    if (Je === 2) {
      Je = 0;
      var e = Mn, t = Li, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = w.T, w.T = null;
        var a = P.p;
        P.p = 2;
        var c = Se;
        Se |= 4;
        try {
          Jc(e, t.alternate, t);
        } finally {
          Se = c, P.p = a, w.T = l;
        }
      }
      Je = 3;
    }
  }
  function yd() {
    if (Je === 4 || Je === 3) {
      Je = 0, Ch();
      var e = Mn, t = Li, l = ln, a = id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Li = Mn = null, vd(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (An = null), Ia(l), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function")
        try {
          dt.onCommitFiberRoot(
            Zi,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = w.T, c = P.p, P.p = 2, w.T = null;
        try {
          for (var p = e.onRecoverableError, T = 0; T < a.length; T++) {
            var E = a[T];
            p(E.value, {
              componentStack: E.stack
            });
          }
        } finally {
          w.T = t, P.p = c;
        }
      }
      (ln & 3) !== 0 && Oo(), Pt(e), c = e.pendingLanes, (l & 261930) !== 0 && (c & 42) !== 0 ? e === rs ? xl++ : (xl = 0, rs = e) : xl = 0, wl(0);
    }
  }
  function vd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, dl(t)));
  }
  function Oo() {
    return hd(), gd(), yd(), Td();
  }
  function Td() {
    if (Je !== 5) return !1;
    var e = Mn, t = us;
    us = 0;
    var l = Ia(ln), a = w.T, c = P.p;
    try {
      P.p = 32 > l ? 32 : l, w.T = null, l = ss, ss = null;
      var p = Mn, T = ln;
      if (Je = 0, Li = Mn = null, ln = 0, (Se & 6) !== 0) throw Error(u(331));
      var E = Se;
      if (Se |= 4, ed(p.current), Wc(
        p,
        p.current,
        T,
        l
      ), Se = E, wl(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function")
        try {
          dt.onPostCommitFiberRoot(Zi, p);
        } catch {
        }
      return !0;
    } finally {
      P.p = c, w.T = a, vd(e, t);
    }
  }
  function Sd(e, t, l) {
    t = Mt(l, t), t = Bu(e.stateNode, t, 2), e = vn(e, t, 2), e !== null && ($i(e, 2), Pt(e));
  }
  function Ae(e, t, l) {
    if (e.tag === 3)
      Sd(e, e, l);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Sd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (An === null || !An.has(a))) {
            e = Mt(l, e), l = Ec(2), a = vn(t, l, 2), a !== null && (_c(
              l,
              a,
              t,
              e
            ), $i(a, 2), Pt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function ds(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Qg();
      var c = /* @__PURE__ */ new Set();
      a.set(t, c);
    } else
      c = a.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), a.set(t, c));
    c.has(l) || (ls = !0, c.add(l), e = ey.bind(null, e, t, l), t.then(e, e));
  }
  function ey(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ue === e && (de & l) === l && (He === 4 || He === 3 && (de & 62914560) === de && 300 > ct() - Po ? (Se & 2) === 0 && Gi(e, 0) : os |= l, qi === de && (qi = 0)), Pt(e);
  }
  function Ed(e, t) {
    t === 0 && (t = mr()), e = Fn(e, t), e !== null && ($i(e, t), Pt(e));
  }
  function ty(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Ed(e, l);
  }
  function ny(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, c = e.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    a !== null && a.delete(t), Ed(e, l);
  }
  function iy(e, t) {
    return Ma(e, t);
  }
  var Ko = null, Vi = null, ps = !1, Xo = !1, ms = !1, Nn = 0;
  function Pt(e) {
    e !== Vi && e.next === null && (Vi === null ? Ko = Vi = e : Vi = Vi.next = e), Xo = !0, ps || (ps = !0, oy());
  }
  function wl(e, t) {
    if (!ms && Xo) {
      ms = !0;
      do
        for (var l = !1, a = Ko; a !== null;) {
          if (e !== 0) {
            var c = a.pendingLanes;
            if (c === 0) var p = 0;
            else {
              var T = a.suspendedLanes, E = a.pingedLanes;
              p = (1 << 31 - pt(42 | e) + 1) - 1, p &= c & ~(T & ~E), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (l = !0, Md(a, p));
          } else
            p = de, p = Wl(
              a,
              a === Ue ? p : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (p & 3) === 0 || Wi(a, p) || (l = !0, Md(a, p));
          a = a.next;
        }
      while (l);
      ms = !1;
    }
  }
  function ly() {
    _d();
  }
  function _d() {
    Xo = ps = !1;
    var e = 0;
    Nn !== 0 && hy() && (e = Nn);
    for (var t = ct(), l = null, a = Ko; a !== null;) {
      var c = a.next, p = Cd(a, t);
      p === 0 ? (a.next = null, l === null ? Ko = c : l.next = c, c === null && (Vi = l)) : (l = a, (e !== 0 || (p & 3) !== 0) && (Xo = !0)), a = c;
    }
    Je !== 0 && Je !== 5 || wl(e), Nn !== 0 && (Nn = 0);
  }
  function Cd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, c = e.expirationTimes, p = e.pendingLanes & -62914561; 0 < p;) {
      var T = 31 - pt(p), E = 1 << T, C = c[T];
      C === -1 ? ((E & l) === 0 || (E & a) !== 0) && (c[T] = xh(E, t)) : C <= t && (e.expiredLanes |= E), p &= ~E;
    }
    if (t = Ue, l = de, l = Wl(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Ra(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Wi(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Ra(a), Ia(l)) {
        case 2:
        case 8:
          l = dr;
          break;
        case 32:
          l = Kl;
          break;
        case 268435456:
          l = pr;
          break;
        default:
          l = Kl;
      }
      return a = Ad.bind(null, e), l = Ma(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Ra(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ad(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Oo() && e.callbackNode !== l)
      return null;
    var a = de;
    return a = Wl(
      e,
      e === Ue ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (od(e, a, t), Cd(e, ct()), e.callbackNode != null && e.callbackNode === l ? Ad.bind(null, e) : null);
  }
  function Md(e, t) {
    if (Oo()) return null;
    od(e, t, !0);
  }
  function oy() {
    yy(function () {
      (Se & 6) !== 0 ? Ma(
        cr,
        ly
      ) : _d();
    });
  }
  function hs() {
    if (Nn === 0) {
      var e = _i;
      e === 0 && (e = Xl, Xl <<= 1, (Xl & 261888) === 0 && (Xl = 256)), Nn = e;
    }
    return Nn;
  }
  function Rd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : to("" + e);
  }
  function Nd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function ay(e, t, l, a, c) {
    if (t === "submit" && l && l.stateNode === c) {
      var p = Rd(
        (c[lt] || null).action
      ), T = a.submitter;
      T && (t = (t = T[lt] || null) ? Rd(t.formAction) : T.getAttribute("formAction"), t !== null && (p = t, T = null));
      var E = new oo(
        "action",
        "action",
        null,
        a,
        c
      );
      e.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nn !== 0) {
                  var C = T ? Nd(c, T) : new FormData(c);
                  Gu(
                    l,
                    {
                      pending: !0,
                      data: C,
                      method: c.method,
                      action: p
                    },
                    null,
                    C
                  );
                }
              } else
                typeof p == "function" && (E.preventDefault(), C = T ? Nd(c, T) : new FormData(c), Gu(
                  l,
                  {
                    pending: !0,
                    data: C,
                    method: c.method,
                    action: p
                  },
                  p,
                  C
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var gs = 0; gs < $a.length; gs++) {
    var ys = $a[gs], uy = ys.toLowerCase(), sy = ys[0].toUpperCase() + ys.slice(1);
    qt(
      uy,
      "on" + sy
    );
  }
  qt(lf, "onAnimationEnd"), qt(of, "onAnimationIteration"), qt(af, "onAnimationStart"), qt("dblclick", "onDoubleClick"), qt("focusin", "onFocus"), qt("focusout", "onBlur"), qt(Ag, "onTransitionRun"), qt(Mg, "onTransitionStart"), qt(Rg, "onTransitionCancel"), qt(uf, "onTransitionEnd"), si("onMouseEnter", ["mouseout", "mouseover"]), si("onMouseLeave", ["mouseout", "mouseover"]), si("onPointerEnter", ["pointerout", "pointerover"]), si("onPointerLeave", ["pointerout", "pointerover"]), zn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), zn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), zn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), zn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), zn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), zn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ql = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ry = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql)
  );
  function Dd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], c = a.event;
      a = a.listeners;
      e: {
        var p = void 0;
        if (t)
          for (var T = a.length - 1; 0 <= T; T--) {
            var E = a[T], C = E.instance, I = E.currentTarget;
            if (E = E.listener, C !== p && c.isPropagationStopped())
              break e;
            p = E, c.currentTarget = I;
            try {
              p(c);
            } catch (q) {
              so(q);
            }
            c.currentTarget = null, p = C;
          }
        else
          for (T = 0; T < a.length; T++) {
            if (E = a[T], C = E.instance, I = E.currentTarget, E = E.listener, C !== p && c.isPropagationStopped())
              break e;
            p = E, c.currentTarget = I;
            try {
              p(c);
            } catch (q) {
              so(q);
            }
            c.currentTarget = null, p = C;
          }
      }
    }
  }
  function fe(e, t) {
    var l = t[Ua];
    l === void 0 && (l = t[Ua] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Id(t, e, 2, !1), l.add(a));
  }
  function vs(e, t, l) {
    var a = 0;
    t && (a |= 4), Id(
      l,
      e,
      a,
      t
    );
  }
  var Qo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ts(e) {
    if (!e[Qo]) {
      e[Qo] = !0, Er.forEach(function (l) {
        l !== "selectionchange" && (ry.has(l) || vs(l, !1, e), vs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qo] || (t[Qo] = !0, vs("selectionchange", !1, t));
    }
  }
  function Id(e, t, l, a) {
    switch (lp(t)) {
      case 2:
        var c = Vy;
        break;
      case 8:
        c = by;
        break;
      default:
        c = Ls;
    }
    l = c.bind(
      null,
      t,
      l,
      e
    ), c = void 0, !za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), a ? c !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, l, !0) : c !== void 0 ? e.addEventListener(t, l, {
      passive: c
    }) : e.addEventListener(t, l, !1);
  }
  function Ss(e, t, l, a, c) {
    var p = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ;) {
        if (a === null) return;
        var T = a.tag;
        if (T === 3 || T === 4) {
          var E = a.stateNode.containerInfo;
          if (E === c) break;
          if (T === 4)
            for (T = a.return; T !== null;) {
              var C = T.tag;
              if ((C === 3 || C === 4) && T.stateNode.containerInfo === c)
                return;
              T = T.return;
            }
          for (; E !== null;) {
            if (T = oi(E), T === null) return;
            if (C = T.tag, C === 5 || C === 6 || C === 26 || C === 27) {
              a = p = T;
              continue e;
            }
            E = E.parentNode;
          }
        }
        a = a.return;
      }
    qr(function () {
      var I = p, q = Va(l), G = [];
      e: {
        var U = sf.get(e);
        if (U !== void 0) {
          var x = oo, O = e;
          switch (e) {
            case "keypress":
              if (io(l) === 0) break e;
            case "keydown":
            case "keyup":
              x = ng;
              break;
            case "focusin":
              O = "focus", x = Fa;
              break;
            case "focusout":
              O = "blur", x = Fa;
              break;
            case "beforeblur":
            case "afterblur":
              x = Fa;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Hr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Jh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = og;
              break;
            case lf:
            case of:
            case af:
              x = Kh;
              break;
            case uf:
              x = ug;
              break;
            case "scroll":
            case "scrollend":
              x = Yh;
              break;
            case "wheel":
              x = rg;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Qh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = br;
              break;
            case "toggle":
            case "beforetoggle":
              x = cg;
          }
          var ee = (t & 4) !== 0, De = !ee && (e === "scroll" || e === "scrollend"), N = ee ? U !== null ? U + "Capture" : null : U;
          ee = [];
          for (var A = I, D; A !== null;) {
            var L = A;
            if (D = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || D === null || N === null || (L = tl(A, N), L != null && ee.push(
              Ll(A, L, D)
            )), De) break;
            A = A.return;
          }
          0 < ee.length && (U = new x(
            U,
            O,
            null,
            l,
            q
          ), G.push({ event: U, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", U && l !== Ha && (O = l.relatedTarget || l.fromElement) && (oi(O) || O[li]))
            break e;
          if ((x || U) && (U = q.window === q ? q : (U = q.ownerDocument) ? U.defaultView || U.parentWindow : window, x ? (O = l.relatedTarget || l.toElement, x = I, O = O ? oi(O) : null, O !== null && (De = d(O), ee = O.tag, O !== De || ee !== 5 && ee !== 27 && ee !== 6) && (O = null)) : (x = null, O = I), x !== O)) {
            if (ee = Hr, L = "onMouseLeave", N = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ee = br, L = "onPointerLeave", N = "onPointerEnter", A = "pointer"), De = x == null ? U : el(x), D = O == null ? U : el(O), U = new ee(
              L,
              A + "leave",
              x,
              l,
              q
            ), U.target = De, U.relatedTarget = D, L = null, oi(q) === I && (ee = new ee(
              N,
              A + "enter",
              O,
              l,
              q
            ), ee.target = D, ee.relatedTarget = De, L = ee), De = L, x && O)
              t: {
                for (ee = fy, N = x, A = O, D = 0, L = N; L; L = ee(L))
                  D++;
                L = 0;
                for (var W = A; W; W = ee(W))
                  L++;
                for (; 0 < D - L;)
                  N = ee(N), D--;
                for (; 0 < L - D;)
                  A = ee(A), L--;
                for (; D--;) {
                  if (N === A || A !== null && N === A.alternate) {
                    ee = N;
                    break t;
                  }
                  N = ee(N), A = ee(A);
                }
                ee = null;
              }
            else ee = null;
            x !== null && Ud(
              G,
              U,
              x,
              ee,
              !1
            ), O !== null && De !== null && Ud(
              G,
              De,
              O,
              ee,
              !0
            );
          }
        }
        e: {
          if (U = I ? el(I) : window, x = U.nodeName && U.nodeName.toLowerCase(), x === "select" || x === "input" && U.type === "file")
            var ye = Or;
          else if (Jr(U))
            if (Kr)
              ye = Eg;
            else {
              ye = Tg;
              var Q = vg;
            }
          else
            x = U.nodeName, !x || x.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? I && Ga(I.elementType) && (ye = Or) : ye = Sg;
          if (ye && (ye = ye(e, I))) {
            kr(
              G,
              ye,
              l,
              q
            );
            break e;
          }
          Q && Q(e, U, I), e === "focusout" && I && U.type === "number" && I.memoizedProps.value != null && La(U, "number", U.value);
        }
        switch (Q = I ? el(I) : window, e) {
          case "focusin":
            (Jr(Q) || Q.contentEditable === "true") && (mi = Q, Qa = I, rl = null);
            break;
          case "focusout":
            rl = Qa = mi = null;
            break;
          case "mousedown":
            Za = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Za = !1, tf(G, l, q);
            break;
          case "selectionchange":
            if (Cg) break;
          case "keydown":
          case "keyup":
            tf(G, l, q);
        }
        var ae;
        if (ka)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          pi ? Yr(e, l) && (pe = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (pe = "onCompositionStart");
        pe && (zr && l.locale !== "ko" && (pi || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && pi && (ae = Lr()) : (cn = q, Pa = "value" in cn ? cn.value : cn.textContent, pi = !0)), Q = Zo(I, pe), 0 < Q.length && (pe = new Vr(
          pe,
          e,
          null,
          l,
          q
        ), G.push({ event: pe, listeners: Q }), ae ? pe.data = ae : (ae = Fr(l), ae !== null && (pe.data = ae)))), (ae = pg ? mg(e, l) : hg(e, l)) && (pe = Zo(I, "onBeforeInput"), 0 < pe.length && (Q = new Vr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          q
        ), G.push({
          event: Q,
          listeners: pe
        }), Q.data = ae)), ay(
          G,
          e,
          I,
          l,
          q
        );
      }
      Dd(G, t);
    });
  }
  function Ll(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Zo(e, t) {
    for (var l = t + "Capture", a = []; e !== null;) {
      var c = e, p = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || p === null || (c = tl(e, l), c != null && a.unshift(
        Ll(e, c, p)
      ), c = tl(e, t), c != null && a.push(
        Ll(e, c, p)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function fy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ud(e, t, l, a, c) {
    for (var p = t._reactName, T = []; l !== null && l !== a;) {
      var E = l, C = E.alternate, I = E.stateNode;
      if (E = E.tag, C !== null && C === a) break;
      E !== 5 && E !== 26 && E !== 27 || I === null || (C = I, c ? (I = tl(l, p), I != null && T.unshift(
        Ll(l, I, C)
      )) : c || (I = tl(l, p), I != null && T.push(
        Ll(l, I, C)
      ))), l = l.return;
    }
    T.length !== 0 && e.push({ event: t, listeners: T });
  }
  var cy = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function xd(e) {
    return (typeof e == "string" ? e : "" + e).replace(cy, `
`).replace(dy, "");
  }
  function wd(e, t) {
    return t = xd(t), xd(e) === t;
  }
  function Ne(e, t, l, a, c, p) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || fi(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && fi(e, "" + a);
        break;
      case "className":
        jl(e, "class", a);
        break;
      case "tabIndex":
        jl(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jl(e, l, a);
        break;
      case "style":
        xr(e, a, p);
        break;
      case "data":
        if (t !== "object") {
          jl(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = to("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" && (l === "formAction" ? (t !== "input" && Ne(e, t, "name", c.name, c, null), Ne(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Ne(e, t, "encType", c.encType, c, null), Ne(e, t, "method", c.method, c, null), Ne(e, t, "target", c.target, c, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = to("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Yt);
        break;
      case "onScroll":
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(u(61));
          if (l = a.__html, l != null) {
            if (c.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = to("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        fe("beforetoggle", e), fe("toggle", e), $l(e, "popover", a);
        break;
      case "xlinkActuate":
        Bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Bt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Bt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Bt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        $l(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Ph.get(l) || l, $l(e, l, a));
    }
  }
  function Es(e, t, l, a, c, p) {
    switch (l) {
      case "style":
        xr(e, a, p);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(u(61));
          if (l = a.__html, l != null) {
            if (c.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? fi(e, a) : (typeof a == "number" || typeof a == "bigint") && fi(e, "" + a);
        break;
      case "onScroll":
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Yt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_r.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (c = l.endsWith("Capture"), t = l.slice(2, c ? l.length - 7 : void 0), p = e[lt] || null, p = p != null ? p[l] : null, typeof p == "function" && e.removeEventListener(t, p, c), typeof a == "function")) {
              typeof p != "function" && p !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, c);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : $l(e, l, a);
          }
    }
  }
  function $e(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        fe("error", e), fe("load", e);
        var a = !1, c = !1, p;
        for (p in l)
          if (l.hasOwnProperty(p)) {
            var T = l[p];
            if (T != null)
              switch (p) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Ne(e, t, p, T, l, null);
              }
          }
        c && Ne(e, t, "srcSet", l.srcSet, l, null), a && Ne(e, t, "src", l.src, l, null);
        return;
      case "input":
        fe("invalid", e);
        var E = p = T = c = null, C = null, I = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var q = l[a];
            if (q != null)
              switch (a) {
                case "name":
                  c = q;
                  break;
                case "type":
                  T = q;
                  break;
                case "checked":
                  C = q;
                  break;
                case "defaultChecked":
                  I = q;
                  break;
                case "value":
                  p = q;
                  break;
                case "defaultValue":
                  E = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Ne(e, t, a, q, l, null);
              }
          }
        Nr(
          e,
          p,
          E,
          C,
          I,
          T,
          c,
          !1
        );
        return;
      case "select":
        fe("invalid", e), a = T = p = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (E = l[c], E != null))
            switch (c) {
              case "value":
                p = E;
                break;
              case "defaultValue":
                T = E;
                break;
              case "multiple":
                a = E;
              default:
                Ne(e, t, c, E, l, null);
            }
        t = p, l = T, e.multiple = !!a, t != null ? ri(e, !!a, t, !1) : l != null && ri(e, !!a, l, !0);
        return;
      case "textarea":
        fe("invalid", e), p = c = a = null;
        for (T in l)
          if (l.hasOwnProperty(T) && (E = l[T], E != null))
            switch (T) {
              case "value":
                a = E;
                break;
              case "defaultValue":
                c = E;
                break;
              case "children":
                p = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(u(91));
                break;
              default:
                Ne(e, t, T, E, l, null);
            }
        Ir(e, a, c, p);
        return;
      case "option":
        for (C in l)
          if (l.hasOwnProperty(C) && (a = l[C], a != null))
            switch (C) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ne(e, t, C, a, l, null);
            }
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ql.length; a++)
          fe(ql[a], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (I in l)
          if (l.hasOwnProperty(I) && (a = l[I], a != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ne(e, t, I, a, l, null);
            }
        return;
      default:
        if (Ga(t)) {
          for (q in l)
            l.hasOwnProperty(q) && (a = l[q], a !== void 0 && Es(
              e,
              t,
              q,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (E in l)
      l.hasOwnProperty(E) && (a = l[E], a != null && Ne(e, t, E, a, l, null));
  }
  function py(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, p = null, T = null, E = null, C = null, I = null, q = null;
        for (x in l) {
          var G = l[x];
          if (l.hasOwnProperty(x) && G != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = G;
              default:
                a.hasOwnProperty(x) || Ne(e, t, x, null, a, G);
            }
        }
        for (var U in a) {
          var x = a[U];
          if (G = l[U], a.hasOwnProperty(U) && (x != null || G != null))
            switch (U) {
              case "type":
                p = x;
                break;
              case "name":
                c = x;
                break;
              case "checked":
                I = x;
                break;
              case "defaultChecked":
                q = x;
                break;
              case "value":
                T = x;
                break;
              case "defaultValue":
                E = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(u(137, t));
                break;
              default:
                x !== G && Ne(
                  e,
                  t,
                  U,
                  x,
                  a,
                  G
                );
            }
        }
        qa(
          e,
          T,
          E,
          C,
          I,
          q,
          p,
          c
        );
        return;
      case "select":
        x = T = E = U = null;
        for (p in l)
          if (C = l[p], l.hasOwnProperty(p) && C != null)
            switch (p) {
              case "value":
                break;
              case "multiple":
                x = C;
              default:
                a.hasOwnProperty(p) || Ne(
                  e,
                  t,
                  p,
                  null,
                  a,
                  C
                );
            }
        for (c in a)
          if (p = a[c], C = l[c], a.hasOwnProperty(c) && (p != null || C != null))
            switch (c) {
              case "value":
                U = p;
                break;
              case "defaultValue":
                E = p;
                break;
              case "multiple":
                T = p;
              default:
                p !== C && Ne(
                  e,
                  t,
                  c,
                  p,
                  a,
                  C
                );
            }
        t = E, l = T, a = x, U != null ? ri(e, !!l, U, !1) : !!a != !!l && (t != null ? ri(e, !!l, t, !0) : ri(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        x = U = null;
        for (E in l)
          if (c = l[E], l.hasOwnProperty(E) && c != null && !a.hasOwnProperty(E))
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, E, null, a, c);
            }
        for (T in a)
          if (c = a[T], p = l[T], a.hasOwnProperty(T) && (c != null || p != null))
            switch (T) {
              case "value":
                U = c;
                break;
              case "defaultValue":
                x = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(u(91));
                break;
              default:
                c !== p && Ne(e, t, T, c, a, p);
            }
        Dr(e, U, x);
        return;
      case "option":
        for (var O in l)
          if (U = l[O], l.hasOwnProperty(O) && U != null && !a.hasOwnProperty(O))
            switch (O) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  O,
                  null,
                  a,
                  U
                );
            }
        for (C in a)
          if (U = a[C], x = l[C], a.hasOwnProperty(C) && U !== x && (U != null || x != null))
            switch (C) {
              case "selected":
                e.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  C,
                  U,
                  a,
                  x
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ee in l)
          U = l[ee], l.hasOwnProperty(ee) && U != null && !a.hasOwnProperty(ee) && Ne(e, t, ee, null, a, U);
        for (I in a)
          if (U = a[I], x = l[I], a.hasOwnProperty(I) && U !== x && (U != null || x != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(u(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  I,
                  U,
                  a,
                  x
                );
            }
        return;
      default:
        if (Ga(t)) {
          for (var De in l)
            U = l[De], l.hasOwnProperty(De) && U !== void 0 && !a.hasOwnProperty(De) && Es(
              e,
              t,
              De,
              void 0,
              a,
              U
            );
          for (q in a)
            U = a[q], x = l[q], !a.hasOwnProperty(q) || U === x || U === void 0 && x === void 0 || Es(
              e,
              t,
              q,
              U,
              a,
              x
            );
          return;
        }
    }
    for (var N in l)
      U = l[N], l.hasOwnProperty(N) && U != null && !a.hasOwnProperty(N) && Ne(e, t, N, null, a, U);
    for (G in a)
      U = a[G], x = l[G], !a.hasOwnProperty(G) || U === x || U == null && x == null || Ne(e, t, G, U, a, x);
  }
  function qd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function my() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var c = l[a], p = c.transferSize, T = c.initiatorType, E = c.duration;
        if (p && E && qd(T)) {
          for (T = 0, E = c.responseEnd, a += 1; a < l.length; a++) {
            var C = l[a], I = C.startTime;
            if (I > E) break;
            var q = C.transferSize, G = C.initiatorType;
            q && qd(G) && (C = C.responseEnd, T += q * (C < E ? 1 : (E - I) / (C - I)));
          }
          if (--a, t += 8 * (p + T) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var _s = null, Cs = null;
  function Wo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ld(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function As(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ms = null;
  function hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ms ? !1 : (Ms = e, !0) : (Ms = null, !1);
  }
  var Hd = typeof setTimeout == "function" ? setTimeout : void 0, gy = typeof clearTimeout == "function" ? clearTimeout : void 0, Vd = typeof Promise == "function" ? Promise : void 0, yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vd < "u" ? function (e) {
    return Vd.resolve(null).then(e).catch(vy);
  } : Hd;
  function vy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Dn(e) {
    return e === "head";
  }
  function bd(e, t) {
    var l = t, a = 0;
    do {
      var c = l.nextSibling;
      if (e.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(c), Bi(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Gl(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Gl(l);
          for (var p = l.firstChild; p;) {
            var T = p.nextSibling, E = p.nodeName;
            p[ji] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && p.rel.toLowerCase() === "stylesheet" || l.removeChild(p), p = T;
          }
        } else
          l === "body" && Gl(e.ownerDocument.body);
      l = c;
    } while (l);
    Bi(t);
  }
  function zd(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function Rs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rs(l), xa(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Ty(e, t, l, a) {
    for (; e.nodeType === 1;) {
      var c = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[ji])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (p = e.getAttribute("rel"), p === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (p !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (p = e.getAttribute("src"), (p !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && p && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var p = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === p)
          return e;
      } else return e;
      if (e = Ut(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Sy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pd(e, t) {
    for (; e.nodeType !== 8;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ns(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ds(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ey(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Ut(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Is = null;
  function Bd(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Ut(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Yd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Fd(e, t, l) {
    switch (t = Wo(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function Gl(e) {
    for (var t = e.attributes; t.length;)
      e.removeAttributeNode(t[0]);
    xa(e);
  }
  var xt = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function $o(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var on = P.d;
  P.d = {
    f: _y,
    r: Cy,
    D: Ay,
    C: My,
    L: Ry,
    m: Ny,
    X: Iy,
    S: Dy,
    M: Uy
  };
  function _y() {
    var e = on.f(), t = Fo();
    return e || t;
  }
  function Cy(e) {
    var t = ai(e);
    t !== null && t.tag === 5 && t.type === "form" ? uc(t) : on.r(e);
  }
  var bi = typeof document > "u" ? null : document;
  function kd(e, t, l) {
    var a = bi;
    if (a && typeof t == "string" && t) {
      var c = Ct(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof l == "string" && (c += '[crossorigin="' + l + '"]'), Jd.has(c) || (Jd.add(c), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(c) === null && (t = a.createElement("link"), $e(t, "link", e), Oe(t), a.head.appendChild(t)));
    }
  }
  function Ay(e) {
    on.D(e), kd("dns-prefetch", e, null);
  }
  function My(e, t) {
    on.C(e, t), kd("preconnect", e, t);
  }
  function Ry(e, t, l) {
    on.L(e, t, l);
    var a = bi;
    if (a && e && t) {
      var c = 'link[rel="preload"][as="' + Ct(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (c += '[imagesrcset="' + Ct(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (c += '[imagesizes="' + Ct(
        l.imageSizes
      ) + '"]')) : c += '[href="' + Ct(e) + '"]';
      var p = c;
      switch (t) {
        case "style":
          p = zi(e);
          break;
        case "script":
          p = Pi(e);
      }
      xt.has(p) || (e = S(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), xt.set(p, e), a.querySelector(c) !== null || t === "style" && a.querySelector(Hl(p)) || t === "script" && a.querySelector(Vl(p)) || (t = a.createElement("link"), $e(t, "link", e), Oe(t), a.head.appendChild(t)));
    }
  }
  function Ny(e, t) {
    on.m(e, t);
    var l = bi;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + Ct(a) + '"][href="' + Ct(e) + '"]', p = c;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Pi(e);
      }
      if (!xt.has(p) && (e = S({ rel: "modulepreload", href: e }, t), xt.set(p, e), l.querySelector(c) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Vl(p)))
              return;
        }
        a = l.createElement("link"), $e(a, "link", e), Oe(a), l.head.appendChild(a);
      }
    }
  }
  function Dy(e, t, l) {
    on.S(e, t, l);
    var a = bi;
    if (a && e) {
      var c = ui(a).hoistableStyles, p = zi(e);
      t = t || "default";
      var T = c.get(p);
      if (!T) {
        var E = { loading: 0, preload: null };
        if (T = a.querySelector(
          Hl(p)
        ))
          E.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = xt.get(p)) && Us(e, l);
          var C = T = a.createElement("link");
          Oe(C), $e(C, "link", e), C._p = new Promise(function (I, q) {
            C.onload = I, C.onerror = q;
          }), C.addEventListener("load", function () {
            E.loading |= 1;
          }), C.addEventListener("error", function () {
            E.loading |= 2;
          }), E.loading |= 4, jo(T, t, a);
        }
        T = {
          type: "stylesheet",
          instance: T,
          count: 1,
          state: E
        }, c.set(p, T);
      }
    }
  }
  function Iy(e, t) {
    on.X(e, t);
    var l = bi;
    if (l && e) {
      var a = ui(l).hoistableScripts, c = Pi(e), p = a.get(c);
      p || (p = l.querySelector(Vl(c)), p || (e = S({ src: e, async: !0 }, t), (t = xt.get(c)) && xs(e, t), p = l.createElement("script"), Oe(p), $e(p, "link", e), l.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, a.set(c, p));
    }
  }
  function Uy(e, t) {
    on.M(e, t);
    var l = bi;
    if (l && e) {
      var a = ui(l).hoistableScripts, c = Pi(e), p = a.get(c);
      p || (p = l.querySelector(Vl(c)), p || (e = S({ src: e, async: !0, type: "module" }, t), (t = xt.get(c)) && xs(e, t), p = l.createElement("script"), Oe(p), $e(p, "link", e), l.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, a.set(c, p));
    }
  }
  function Od(e, t, l, a) {
    var c = (c = se.current) ? $o(c) : null;
    if (!c) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = zi(l.href), l = ui(
          c
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = zi(l.href);
          var p = ui(
            c
          ).hoistableStyles, T = p.get(e);
          if (T || (c = c.ownerDocument || c, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, p.set(e, T), (p = c.querySelector(
            Hl(e)
          )) && !p._p && (T.instance = p, T.state.loading = 5), xt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, xt.set(e, l), p || xy(
            c,
            e,
            l,
            T.state
          ))), t && a === null)
            throw Error(u(528, ""));
          return T;
        }
        if (t && a !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pi(l), l = ui(
          c
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function zi(e) {
    return 'href="' + Ct(e) + '"';
  }
  function Hl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Kd(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function xy(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function () {
      return a.loading |= 1;
    }), t.addEventListener("error", function () {
      return a.loading |= 2;
    }), $e(t, "link", l), Oe(t), e.head.appendChild(t));
  }
  function Pi(e) {
    return '[src="' + Ct(e) + '"]';
  }
  function Vl(e) {
    return "script[async]" + e;
  }
  function Xd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Ct(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Oe(a), a;
          var c = S({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Oe(a), $e(a, "style", c), jo(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          c = zi(l.href);
          var p = e.querySelector(
            Hl(c)
          );
          if (p)
            return t.state.loading |= 4, t.instance = p, Oe(p), p;
          a = Kd(l), (c = xt.get(c)) && Us(a, c), p = (e.ownerDocument || e).createElement("link"), Oe(p);
          var T = p;
          return T._p = new Promise(function (E, C) {
            T.onload = E, T.onerror = C;
          }), $e(p, "link", a), t.state.loading |= 4, jo(p, l.precedence, e), t.instance = p;
        case "script":
          return p = Pi(l.src), (c = e.querySelector(
            Vl(p)
          )) ? (t.instance = c, Oe(c), c) : (a = l, (c = xt.get(p)) && (a = S({}, l), xs(a, c)), e = e.ownerDocument || e, c = e.createElement("script"), Oe(c), $e(c, "link", a), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, jo(a, l.precedence, e));
    return t.instance;
  }
  function jo(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = a.length ? a[a.length - 1] : null, p = c, T = 0; T < a.length; T++) {
      var E = a[T];
      if (E.dataset.precedence === t) p = E;
      else if (p !== c) break;
    }
    p ? p.parentNode.insertBefore(e, p.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Us(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function xs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ea = null;
  function Qd(e, t, l) {
    if (ea === null) {
      var a = /* @__PURE__ */ new Map(), c = ea = /* @__PURE__ */ new Map();
      c.set(l, a);
    } else
      c = ea, a = c.get(l), a || (a = /* @__PURE__ */ new Map(), c.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), c = 0; c < l.length; c++) {
      var p = l[c];
      if (!(p[ji] || p[Xe] || e === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = p.getAttribute(t) || "";
        T = e + T;
        var E = a.get(T);
        E ? E.push(p) : a.set(T, [p]);
      }
    }
    return a;
  }
  function Zd(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function wy(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Wd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function qy(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var c = zi(a.href), p = t.querySelector(
          Hl(c)
        );
        if (p) {
          t = p._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ta.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = p, Oe(p);
          return;
        }
        p = t.ownerDocument || t, a = Kd(a), (c = xt.get(c)) && Us(a, c), p = p.createElement("link"), Oe(p);
        var T = p;
        T._p = new Promise(function (E, C) {
          T.onload = E, T.onerror = C;
        }), $e(p, "link", a), l.instance = p;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = ta.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var ws = 0;
  function Ly(e, t) {
    return e.stylesheets && e.count === 0 && ia(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (l) {
      var a = setTimeout(function () {
        if (e.stylesheets && ia(e, e.stylesheets), e.unsuspend) {
          var p = e.unsuspend;
          e.unsuspend = null, p();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ws === 0 && (ws = 62500 * my());
      var c = setTimeout(
        function () {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ia(e, e.stylesheets), e.unsuspend)) {
            var p = e.unsuspend;
            e.unsuspend = null, p();
          }
        },
        (e.imgBytes > ws ? 50 : 800) + t
      );
      return e.unsuspend = l, function () {
        e.unsuspend = null, clearTimeout(a), clearTimeout(c);
      };
    } : null;
  }
  function ta() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ia(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var na = null;
  function ia(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, na = /* @__PURE__ */ new Map(), t.forEach(Gy, e), na = null, ta.call(e));
  }
  function Gy(e, t) {
    if (!(t.state.loading & 4)) {
      var l = na.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), na.set(e, l);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), p = 0; p < c.length; p++) {
          var T = c[p];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (l.set(T.dataset.precedence, T), a = T);
        }
        a && l.set(null, a);
      }
      c = t.instance, T = c.getAttribute("data-precedence"), p = l.get(T) || a, p === a && l.set(null, c), l.set(T, c), this.count++, a = ta.bind(this), c.addEventListener("load", a), c.addEventListener("error", a), p ? p.parentNode.insertBefore(c, p.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var bl = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0
  };
  function Hy(e, t, l, a, c, p, T, E, C) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Na(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Na(0), this.hiddenUpdates = Na(null), this.identifierPrefix = a, this.onUncaughtError = c, this.onCaughtError = p, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $d(e, t, l, a, c, p, T, E, C, I, q, G) {
    return e = new Hy(
      e,
      t,
      l,
      T,
      C,
      I,
      q,
      G,
      E
    ), t = 1, p === !0 && (t |= 24), p = ht(3, null, null, t), e.current = p, p.stateNode = e, t = cu(), t.refCount++, e.pooledCache = t, t.refCount++, p.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, hu(p), e;
  }
  function jd(e) {
    return e ? (e = yi, e) : yi;
  }
  function ep(e, t, l, a, c, p) {
    c = jd(c), a.context === null ? a.context = c : a.pendingContext = c, a = yn(t), a.payload = { element: l }, p = p === void 0 ? null : p, p !== null && (a.callback = p), l = vn(e, a, t), l !== null && (ft(l, e, t), gl(l, e, t));
  }
  function tp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function qs(e, t) {
    tp(e, t), (e = e.alternate) && tp(e, t);
  }
  function np(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Fn(e, 67108864);
      t !== null && ft(t, e, 67108864), qs(e, 67108864);
    }
  }
  function ip(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = St();
      t = Da(t);
      var l = Fn(e, t);
      l !== null && ft(l, e, t), qs(e, t);
    }
  }
  var la = !0;
  function Vy(e, t, l, a) {
    var c = w.T;
    w.T = null;
    var p = P.p;
    try {
      P.p = 2, Ls(e, t, l, a);
    } finally {
      P.p = p, w.T = c;
    }
  }
  function by(e, t, l, a) {
    var c = w.T;
    w.T = null;
    var p = P.p;
    try {
      P.p = 8, Ls(e, t, l, a);
    } finally {
      P.p = p, w.T = c;
    }
  }
  function Ls(e, t, l, a) {
    if (la) {
      var c = Gs(a);
      if (c === null)
        Ss(
          e,
          t,
          a,
          oa,
          l
        ), op(e, a);
      else if (Py(
        c,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (op(e, a), t & 4 && -1 < zy.indexOf(e)) {
        for (; c !== null;) {
          var p = ai(c);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                  var T = bn(p.pendingLanes);
                  if (T !== 0) {
                    var E = p;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; T;) {
                      var C = 1 << 31 - pt(T);
                      E.entanglements[1] |= C, T &= ~C;
                    }
                    Pt(p), (Se & 6) === 0 && (Bo = ct() + 500, wl(0));
                  }
                }
                break;
              case 31:
              case 13:
                E = Fn(p, 2), E !== null && ft(E, p, 2), Fo(), qs(p, 2);
            }
          if (p = Gs(a), p === null && Ss(
            e,
            t,
            a,
            oa,
            l
          ), p === c) break;
          c = p;
        }
        c !== null && a.stopPropagation();
      } else
        Ss(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Gs(e) {
    return e = Va(e), Hs(e);
  }
  var oa = null;
  function Hs(e) {
    if (oa = null, e = oi(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return oa = e, null;
  }
  function lp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ah()) {
          case cr:
            return 2;
          case dr:
            return 8;
          case Kl:
          case Mh:
            return 32;
          case pr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vs = !1, In = null, Un = null, xn = null, zl = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ new Map(), wn = [], zy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function op(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        xn = null;
        break;
      case "pointerover":
      case "pointerout":
        zl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pl.delete(t.pointerId);
    }
  }
  function Bl(e, t, l, a, c, p) {
    return e === null || e.nativeEvent !== p ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: p,
      targetContainers: [c]
    }, t !== null && (t = ai(t), t !== null && np(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function Py(e, t, l, a, c) {
    switch (t) {
      case "focusin":
        return In = Bl(
          In,
          e,
          t,
          l,
          a,
          c
        ), !0;
      case "dragenter":
        return Un = Bl(
          Un,
          e,
          t,
          l,
          a,
          c
        ), !0;
      case "mouseover":
        return xn = Bl(
          xn,
          e,
          t,
          l,
          a,
          c
        ), !0;
      case "pointerover":
        var p = c.pointerId;
        return zl.set(
          p,
          Bl(
            zl.get(p) || null,
            e,
            t,
            l,
            a,
            c
          )
        ), !0;
      case "gotpointercapture":
        return p = c.pointerId, Pl.set(
          p,
          Bl(
            Pl.get(p) || null,
            e,
            t,
            l,
            a,
            c
          )
        ), !0;
    }
    return !1;
  }
  function ap(e) {
    var t = oi(e.target);
    if (t !== null) {
      var l = d(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = m(l), t !== null) {
            e.blockedOn = t, Tr(e.priority, function () {
              ip(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Tr(e.priority, function () {
              ip(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function aa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var l = Gs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Ha = a, l.target.dispatchEvent(a), Ha = null;
      } else
        return t = ai(l), t !== null && np(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function up(e, t, l) {
    aa(e) && l.delete(t);
  }
  function By() {
    Vs = !1, In !== null && aa(In) && (In = null), Un !== null && aa(Un) && (Un = null), xn !== null && aa(xn) && (xn = null), zl.forEach(up), Pl.forEach(up);
  }
  function ua(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vs || (Vs = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      By
    )));
  }
  var sa = null;
  function sp(e) {
    sa !== e && (sa = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function () {
        sa === e && (sa = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], c = e[t + 2];
          if (typeof a != "function") {
            if (Hs(a || l) === null)
              continue;
            break;
          }
          var p = ai(l);
          p !== null && (e.splice(t, 3), t -= 3, Gu(
            p,
            {
              pending: !0,
              data: c,
              method: l.method,
              action: a
            },
            a,
            c
          ));
        }
      }
    ));
  }
  function Bi(e) {
    function t(C) {
      return ua(C, e);
    }
    In !== null && ua(In, e), Un !== null && ua(Un, e), xn !== null && ua(xn, e), zl.forEach(t), Pl.forEach(t);
    for (var l = 0; l < wn.length; l++) {
      var a = wn[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < wn.length && (l = wn[0], l.blockedOn === null);)
      ap(l), l.blockedOn === null && wn.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var c = l[a], p = l[a + 1], T = c[lt] || null;
        if (typeof p == "function")
          T || sp(l);
        else if (T) {
          var E = null;
          if (p && p.hasAttribute("formAction")) {
            if (c = p, T = p[lt] || null)
              E = T.formAction;
            else if (Hs(c) !== null) continue;
          } else E = T.action;
          typeof E == "function" ? l[a + 1] = E : (l.splice(a, 3), a -= 3), sp(l);
        }
      }
  }
  function rp() {
    function e(p) {
      p.canIntercept && p.info === "react-transition" && p.intercept({
        handler: function () {
          return new Promise(function (T) {
            return c = T;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      c !== null && (c(), c = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var p = navigation.currentEntry;
        p && p.url != null && navigation.navigate(p.url, {
          state: p.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function () {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function bs(e) {
    this._internalRoot = e;
  }
  ra.prototype.render = bs.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var l = t.current, a = St();
    ep(l, a, e, t, null, null);
  }, ra.prototype.unmount = bs.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ep(e.current, 2, null, e, null, null), Fo(), t[li] = null;
    }
  };
  function ra(e) {
    this._internalRoot = e;
  }
  ra.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = vr();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < wn.length && t !== 0 && t < wn[l].priority; l++);
      wn.splice(l, 0, e), l === 0 && ap(e);
    }
  };
  var fp = n.version;
  if (fp !== "19.2.0")
    throw Error(
      u(
        527,
        fp,
        "19.2.0"
      )
    );
  P.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Yy = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fa.isDisabled && fa.supportsFiber)
      try {
        Zi = fa.inject(
          Yy
        ), dt = fa;
      } catch {
      }
  }
  return Fl.createRoot = function (e, t) {
    if (!f(e)) throw Error(u(299));
    var l = !1, a = "", c = yc, p = vc, T = Tc;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (p = t.onCaughtError), t.onRecoverableError !== void 0 && (T = t.onRecoverableError)), t = $d(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      c,
      p,
      T,
      rp
    ), e[li] = t.current, Ts(e), new bs(t);
  }, Fl.hydrateRoot = function (e, t, l) {
    if (!f(e)) throw Error(u(299));
    var a = !1, c = "", p = yc, T = vc, E = Tc, C = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (c = l.identifierPrefix), l.onUncaughtError !== void 0 && (p = l.onUncaughtError), l.onCaughtError !== void 0 && (T = l.onCaughtError), l.onRecoverableError !== void 0 && (E = l.onRecoverableError), l.formState !== void 0 && (C = l.formState)), t = $d(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      c,
      C,
      p,
      T,
      E,
      rp
    ), t.context = jd(null), l = t.current, a = St(), a = Da(a), c = yn(a), c.callback = null, vn(l, c, a), l = a, t.current.lanes = l, $i(t, l), Pt(t), e[li] = t.current, Ts(e), new ra(t);
  }, Fl.version = "19.2.0", Fl;
}
var Sp;
function jy() {
  if (Sp) return Bs.exports;
  Sp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (n) {
        console.error(n);
      }
  }
  return i(), Bs.exports = $y(), Bs.exports;
}
var ev = jy();
const tv = /* @__PURE__ */ Om(ev);
var Ln = /* @__PURE__ */ ((i) => (i.USER = "user", i.BOT = "bot", i))(Ln || {});
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let nv, iv;
function lv() {
  return {
    geminiUrl: nv,
    vertexUrl: iv
  };
}
function ov(i, n, o, u) {
  var f, d;
  if (!(i != null && i.baseUrl)) {
    const m = lv();
    return n ? (f = m.vertexUrl) !== null && f !== void 0 ? f : o : (d = m.geminiUrl) !== null && d !== void 0 ? d : u;
  }
  return i.baseUrl;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class un {
}
function Y(i, n) {
  const o = /\{([^}]+)\}/g;
  return i.replace(o, (u, f) => {
    if (Object.prototype.hasOwnProperty.call(n, f)) {
      const d = n[f];
      return d != null ? String(d) : "";
    } else
      throw new Error(`Key '${f}' not found in valueMap.`);
  });
}
function r(i, n, o) {
  for (let d = 0; d < n.length - 1; d++) {
    const m = n[d];
    if (m.endsWith("[]")) {
      const g = m.slice(0, -2);
      if (!(g in i))
        if (Array.isArray(o))
          i[g] = Array.from({ length: o.length }, () => ({}));
        else
          throw new Error(`Value must be a list given an array path ${m}`);
      if (Array.isArray(i[g])) {
        const y = i[g];
        if (Array.isArray(o))
          for (let h = 0; h < y.length; h++) {
            const v = y[h];
            r(v, n.slice(d + 1), o[h]);
          }
        else
          for (const h of y)
            r(h, n.slice(d + 1), o);
      }
      return;
    } else if (m.endsWith("[0]")) {
      const g = m.slice(0, -3);
      g in i || (i[g] = [{}]);
      const y = i[g];
      r(y[0], n.slice(d + 1), o);
      return;
    }
    (!i[m] || typeof i[m] != "object") && (i[m] = {}), i = i[m];
  }
  const u = n[n.length - 1], f = i[u];
  if (f !== void 0) {
    if (!o || typeof o == "object" && Object.keys(o).length === 0 || o === f)
      return;
    if (typeof f == "object" && typeof o == "object" && f !== null && o !== null)
      Object.assign(f, o);
    else
      throw new Error(`Cannot set value for an existing key. Key: ${u}`);
  } else
    u === "_self" && typeof o == "object" && o !== null && !Array.isArray(o) ? Object.assign(i, o) : i[u] = o;
}
function s(i, n, o = void 0) {
  try {
    if (n.length === 1 && n[0] === "_self")
      return i;
    for (let u = 0; u < n.length; u++) {
      if (typeof i != "object" || i === null)
        return o;
      const f = n[u];
      if (f.endsWith("[]")) {
        const d = f.slice(0, -2);
        if (d in i) {
          const m = i[d];
          return Array.isArray(m) ? m.map((g) => s(g, n.slice(u + 1), o)) : o;
        } else
          return o;
      } else
        i = i[f];
    }
    return i;
  } catch (u) {
    if (u instanceof TypeError)
      return o;
    throw u;
  }
}
function av(i, n) {
  for (const [o, u] of Object.entries(n)) {
    const f = o.split("."), d = u.split("."), m = /* @__PURE__ */ new Set();
    let g = -1;
    for (let y = 0; y < f.length; y++)
      if (f[y] === "*") {
        g = y;
        break;
      }
    if (g !== -1 && d.length > g)
      for (let y = g; y < d.length; y++) {
        const h = d[y];
        h !== "*" && !h.endsWith("[]") && !h.endsWith("[0]") && m.add(h);
      }
    ks(i, f, d, 0, m);
  }
}
function ks(i, n, o, u, f) {
  if (u >= n.length || typeof i != "object" || i === null)
    return;
  const d = n[u];
  if (d.endsWith("[]")) {
    const m = d.slice(0, -2), g = i;
    if (m in g && Array.isArray(g[m]))
      for (const y of g[m])
        ks(y, n, o, u + 1, f);
  } else if (d === "*") {
    if (typeof i == "object" && i !== null && !Array.isArray(i)) {
      const m = i, g = Object.keys(m).filter((h) => !h.startsWith("_") && !f.has(h)), y = {};
      for (const h of g)
        y[h] = m[h];
      for (const [h, v] of Object.entries(y)) {
        const S = [];
        for (const _ of o.slice(u))
          _ === "*" ? S.push(h) : S.push(_);
        r(m, S, v);
      }
      for (const h of g)
        delete m[h];
    }
  } else {
    const m = i;
    d in m && ks(m[d], n, o, u + 1, f);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function tr(i) {
  if (typeof i != "string")
    throw new Error("fromImageBytes must be a string");
  return i;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function uv(i) {
  const n = {}, o = s(i, [
    "operationName"
  ]);
  o != null && r(n, ["operationName"], o);
  const u = s(i, ["resourceName"]);
  return u != null && r(n, ["_url", "resourceName"], u), n;
}
function sv(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, [
    "response",
    "generateVideoResponse"
  ]);
  return m != null && r(n, ["response"], fv(m)), n;
}
function rv(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, ["response"]);
  return m != null && r(n, ["response"], cv(m)), n;
}
function fv(i) {
  const n = {}, o = s(i, [
    "generatedSamples"
  ]);
  if (o != null) {
    let d = o;
    Array.isArray(d) && (d = d.map((m) => dv(m))), r(n, ["generatedVideos"], d);
  }
  const u = s(i, [
    "raiMediaFilteredCount"
  ]);
  u != null && r(n, ["raiMediaFilteredCount"], u);
  const f = s(i, [
    "raiMediaFilteredReasons"
  ]);
  return f != null && r(n, ["raiMediaFilteredReasons"], f), n;
}
function cv(i) {
  const n = {}, o = s(i, ["videos"]);
  if (o != null) {
    let d = o;
    Array.isArray(d) && (d = d.map((m) => pv(m))), r(n, ["generatedVideos"], d);
  }
  const u = s(i, [
    "raiMediaFilteredCount"
  ]);
  u != null && r(n, ["raiMediaFilteredCount"], u);
  const f = s(i, [
    "raiMediaFilteredReasons"
  ]);
  return f != null && r(n, ["raiMediaFilteredReasons"], f), n;
}
function dv(i) {
  const n = {}, o = s(i, ["video"]);
  return o != null && r(n, ["video"], Tv(o)), n;
}
function pv(i) {
  const n = {}, o = s(i, ["_self"]);
  return o != null && r(n, ["video"], Sv(o)), n;
}
function mv(i) {
  const n = {}, o = s(i, [
    "operationName"
  ]);
  return o != null && r(n, ["_url", "operationName"], o), n;
}
function hv(i) {
  const n = {}, o = s(i, [
    "operationName"
  ]);
  return o != null && r(n, ["_url", "operationName"], o), n;
}
function gv(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, ["response"]);
  return m != null && r(n, ["response"], yv(m)), n;
}
function yv(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["parent"]);
  u != null && r(n, ["parent"], u);
  const f = s(i, ["documentName"]);
  return f != null && r(n, ["documentName"], f), n;
}
function Km(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, ["response"]);
  return m != null && r(n, ["response"], vv(m)), n;
}
function vv(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["parent"]);
  u != null && r(n, ["parent"], u);
  const f = s(i, ["documentName"]);
  return f != null && r(n, ["documentName"], f), n;
}
function Tv(i) {
  const n = {}, o = s(i, ["uri"]);
  o != null && r(n, ["uri"], o);
  const u = s(i, ["encodedVideo"]);
  u != null && r(n, ["videoBytes"], tr(u));
  const f = s(i, ["encoding"]);
  return f != null && r(n, ["mimeType"], f), n;
}
function Sv(i) {
  const n = {}, o = s(i, ["gcsUri"]);
  o != null && r(n, ["uri"], o);
  const u = s(i, [
    "bytesBase64Encoded"
  ]);
  u != null && r(n, ["videoBytes"], tr(u));
  const f = s(i, ["mimeType"]);
  return f != null && r(n, ["mimeType"], f), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var Ep;
(function (i) {
  i.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED", i.OUTCOME_OK = "OUTCOME_OK", i.OUTCOME_FAILED = "OUTCOME_FAILED", i.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED";
})(Ep || (Ep = {}));
var _p;
(function (i) {
  i.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED", i.PYTHON = "PYTHON";
})(_p || (_p = {}));
var Cp;
(function (i) {
  i.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED", i.SILENT = "SILENT", i.WHEN_IDLE = "WHEN_IDLE", i.INTERRUPT = "INTERRUPT";
})(Cp || (Cp = {}));
var Gn;
(function (i) {
  i.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", i.STRING = "STRING", i.NUMBER = "NUMBER", i.INTEGER = "INTEGER", i.BOOLEAN = "BOOLEAN", i.ARRAY = "ARRAY", i.OBJECT = "OBJECT", i.NULL = "NULL";
})(Gn || (Gn = {}));
var Ap;
(function (i) {
  i.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", i.MODE_DYNAMIC = "MODE_DYNAMIC";
})(Ap || (Ap = {}));
var Mp;
(function (i) {
  i.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED", i.SIMPLE_SEARCH = "SIMPLE_SEARCH", i.ELASTIC_SEARCH = "ELASTIC_SEARCH";
})(Mp || (Mp = {}));
var Rp;
(function (i) {
  i.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED", i.NO_AUTH = "NO_AUTH", i.API_KEY_AUTH = "API_KEY_AUTH", i.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH", i.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH", i.OAUTH = "OAUTH", i.OIDC_AUTH = "OIDC_AUTH";
})(Rp || (Rp = {}));
var Np;
(function (i) {
  i.HTTP_IN_UNSPECIFIED = "HTTP_IN_UNSPECIFIED", i.HTTP_IN_QUERY = "HTTP_IN_QUERY", i.HTTP_IN_HEADER = "HTTP_IN_HEADER", i.HTTP_IN_PATH = "HTTP_IN_PATH", i.HTTP_IN_BODY = "HTTP_IN_BODY", i.HTTP_IN_COOKIE = "HTTP_IN_COOKIE";
})(Np || (Np = {}));
var Dp;
(function (i) {
  i.PHISH_BLOCK_THRESHOLD_UNSPECIFIED = "PHISH_BLOCK_THRESHOLD_UNSPECIFIED", i.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", i.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", i.BLOCK_HIGH_AND_ABOVE = "BLOCK_HIGH_AND_ABOVE", i.BLOCK_HIGHER_AND_ABOVE = "BLOCK_HIGHER_AND_ABOVE", i.BLOCK_VERY_HIGH_AND_ABOVE = "BLOCK_VERY_HIGH_AND_ABOVE", i.BLOCK_ONLY_EXTREMELY_HIGH = "BLOCK_ONLY_EXTREMELY_HIGH";
})(Dp || (Dp = {}));
var Ip;
(function (i) {
  i.THINKING_LEVEL_UNSPECIFIED = "THINKING_LEVEL_UNSPECIFIED", i.LOW = "LOW", i.HIGH = "HIGH";
})(Ip || (Ip = {}));
var Up;
(function (i) {
  i.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", i.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", i.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", i.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", i.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT", i.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY", i.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE", i.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT", i.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT", i.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT", i.HARM_CATEGORY_JAILBREAK = "HARM_CATEGORY_JAILBREAK";
})(Up || (Up = {}));
var xp;
(function (i) {
  i.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED", i.SEVERITY = "SEVERITY", i.PROBABILITY = "PROBABILITY";
})(xp || (xp = {}));
var wp;
(function (i) {
  i.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", i.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", i.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", i.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", i.BLOCK_NONE = "BLOCK_NONE", i.OFF = "OFF";
})(wp || (wp = {}));
var qp;
(function (i) {
  i.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", i.STOP = "STOP", i.MAX_TOKENS = "MAX_TOKENS", i.SAFETY = "SAFETY", i.RECITATION = "RECITATION", i.LANGUAGE = "LANGUAGE", i.OTHER = "OTHER", i.BLOCKLIST = "BLOCKLIST", i.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", i.SPII = "SPII", i.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", i.IMAGE_SAFETY = "IMAGE_SAFETY", i.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL", i.IMAGE_PROHIBITED_CONTENT = "IMAGE_PROHIBITED_CONTENT", i.NO_IMAGE = "NO_IMAGE";
})(qp || (qp = {}));
var Lp;
(function (i) {
  i.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", i.NEGLIGIBLE = "NEGLIGIBLE", i.LOW = "LOW", i.MEDIUM = "MEDIUM", i.HIGH = "HIGH";
})(Lp || (Lp = {}));
var Gp;
(function (i) {
  i.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED", i.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE", i.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW", i.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM", i.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH";
})(Gp || (Gp = {}));
var Hp;
(function (i) {
  i.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED", i.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS", i.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR", i.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL", i.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE";
})(Hp || (Hp = {}));
var Vp;
(function (i) {
  i.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", i.SAFETY = "SAFETY", i.OTHER = "OTHER", i.BLOCKLIST = "BLOCKLIST", i.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", i.IMAGE_SAFETY = "IMAGE_SAFETY", i.MODEL_ARMOR = "MODEL_ARMOR", i.JAILBREAK = "JAILBREAK";
})(Vp || (Vp = {}));
var bp;
(function (i) {
  i.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED", i.ON_DEMAND = "ON_DEMAND", i.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT";
})(bp || (bp = {}));
var pa;
(function (i) {
  i.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", i.TEXT = "TEXT", i.IMAGE = "IMAGE", i.AUDIO = "AUDIO";
})(pa || (pa = {}));
var zp;
(function (i) {
  i.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", i.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", i.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", i.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH";
})(zp || (zp = {}));
var Pp;
(function (i) {
  i.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED", i.TUNING_MODE_FULL = "TUNING_MODE_FULL", i.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER";
})(Pp || (Pp = {}));
var Bp;
(function (i) {
  i.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED", i.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE", i.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO", i.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR", i.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT", i.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN", i.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO";
})(Bp || (Bp = {}));
var Os;
(function (i) {
  i.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED", i.JOB_STATE_QUEUED = "JOB_STATE_QUEUED", i.JOB_STATE_PENDING = "JOB_STATE_PENDING", i.JOB_STATE_RUNNING = "JOB_STATE_RUNNING", i.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED", i.JOB_STATE_FAILED = "JOB_STATE_FAILED", i.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING", i.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED", i.JOB_STATE_PAUSED = "JOB_STATE_PAUSED", i.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED", i.JOB_STATE_UPDATING = "JOB_STATE_UPDATING", i.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED";
})(Os || (Os = {}));
var Yp;
(function (i) {
  i.TUNING_TASK_UNSPECIFIED = "TUNING_TASK_UNSPECIFIED", i.TUNING_TASK_I2V = "TUNING_TASK_I2V", i.TUNING_TASK_T2V = "TUNING_TASK_T2V", i.TUNING_TASK_R2V = "TUNING_TASK_R2V";
})(Yp || (Yp = {}));
var Fp;
(function (i) {
  i.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", i.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", i.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", i.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH";
})(Fp || (Fp = {}));
var Jp;
(function (i) {
  i.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED", i.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY", i.BALANCED = "BALANCED", i.PRIORITIZE_COST = "PRIORITIZE_COST";
})(Jp || (Jp = {}));
var kp;
(function (i) {
  i.UNSPECIFIED = "UNSPECIFIED", i.BLOCKING = "BLOCKING", i.NON_BLOCKING = "NON_BLOCKING";
})(kp || (kp = {}));
var Op;
(function (i) {
  i.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", i.MODE_DYNAMIC = "MODE_DYNAMIC";
})(Op || (Op = {}));
var Kp;
(function (i) {
  i.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED", i.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER";
})(Kp || (Kp = {}));
var Xp;
(function (i) {
  i.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", i.AUTO = "AUTO", i.ANY = "ANY", i.NONE = "NONE", i.VALIDATED = "VALIDATED";
})(Xp || (Xp = {}));
var Qp;
(function (i) {
  i.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", i.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", i.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", i.BLOCK_NONE = "BLOCK_NONE";
})(Qp || (Qp = {}));
var Zp;
(function (i) {
  i.DONT_ALLOW = "DONT_ALLOW", i.ALLOW_ADULT = "ALLOW_ADULT", i.ALLOW_ALL = "ALLOW_ALL";
})(Zp || (Zp = {}));
var Wp;
(function (i) {
  i.auto = "auto", i.en = "en", i.ja = "ja", i.ko = "ko", i.hi = "hi", i.zh = "zh", i.pt = "pt", i.es = "es";
})(Wp || (Wp = {}));
var $p;
(function (i) {
  i.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT", i.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED", i.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND", i.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND", i.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC";
})($p || ($p = {}));
var jp;
(function (i) {
  i.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT", i.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY", i.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE", i.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH";
})(jp || (jp = {}));
var em;
(function (i) {
  i.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT", i.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON", i.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL", i.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT";
})(em || (em = {}));
var tm;
(function (i) {
  i.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT", i.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL", i.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION", i.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT", i.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING", i.EDIT_MODE_STYLE = "EDIT_MODE_STYLE", i.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP", i.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE";
})(tm || (tm = {}));
var nm;
(function (i) {
  i.FOREGROUND = "FOREGROUND", i.BACKGROUND = "BACKGROUND", i.PROMPT = "PROMPT", i.SEMANTIC = "SEMANTIC", i.INTERACTIVE = "INTERACTIVE";
})(nm || (nm = {}));
var im;
(function (i) {
  i.ASSET = "ASSET", i.STYLE = "STYLE";
})(im || (im = {}));
var lm;
(function (i) {
  i.INSERT = "INSERT", i.REMOVE = "REMOVE", i.REMOVE_STATIC = "REMOVE_STATIC", i.OUTPAINT = "OUTPAINT";
})(lm || (lm = {}));
var om;
(function (i) {
  i.OPTIMIZED = "OPTIMIZED", i.LOSSLESS = "LOSSLESS";
})(om || (om = {}));
var am;
(function (i) {
  i.SUPERVISED_FINE_TUNING = "SUPERVISED_FINE_TUNING", i.PREFERENCE_TUNING = "PREFERENCE_TUNING";
})(am || (am = {}));
var um;
(function (i) {
  i.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", i.STATE_PENDING = "STATE_PENDING", i.STATE_ACTIVE = "STATE_ACTIVE", i.STATE_FAILED = "STATE_FAILED";
})(um || (um = {}));
var sm;
(function (i) {
  i.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", i.PROCESSING = "PROCESSING", i.ACTIVE = "ACTIVE", i.FAILED = "FAILED";
})(sm || (sm = {}));
var rm;
(function (i) {
  i.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED", i.UPLOADED = "UPLOADED", i.GENERATED = "GENERATED";
})(rm || (rm = {}));
var fm;
(function (i) {
  i.TURN_COMPLETE_REASON_UNSPECIFIED = "TURN_COMPLETE_REASON_UNSPECIFIED", i.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", i.RESPONSE_REJECTED = "RESPONSE_REJECTED", i.NEED_MORE_INPUT = "NEED_MORE_INPUT";
})(fm || (fm = {}));
var cm;
(function (i) {
  i.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", i.TEXT = "TEXT", i.IMAGE = "IMAGE", i.VIDEO = "VIDEO", i.AUDIO = "AUDIO", i.DOCUMENT = "DOCUMENT";
})(cm || (cm = {}));
var dm;
(function (i) {
  i.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED", i.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH", i.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW";
})(dm || (dm = {}));
var pm;
(function (i) {
  i.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED", i.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH", i.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW";
})(pm || (pm = {}));
var mm;
(function (i) {
  i.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED", i.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS", i.NO_INTERRUPTION = "NO_INTERRUPTION";
})(mm || (mm = {}));
var hm;
(function (i) {
  i.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED", i.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY", i.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT";
})(hm || (hm = {}));
var gm;
(function (i) {
  i.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED", i.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR", i.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR", i.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR", i.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR", i.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR", i.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR", i.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR", i.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR", i.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR", i.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR", i.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR", i.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR";
})(gm || (gm = {}));
var ym;
(function (i) {
  i.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED", i.QUALITY = "QUALITY", i.DIVERSITY = "DIVERSITY", i.VOCALIZATION = "VOCALIZATION";
})(ym || (ym = {}));
var Yi;
(function (i) {
  i.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED", i.PLAY = "PLAY", i.PAUSE = "PAUSE", i.STOP = "STOP", i.RESET_CONTEXT = "RESET_CONTEXT";
})(Yi || (Yi = {}));
class Ks {
  constructor(n) {
    const o = {};
    for (const u of n.headers.entries())
      o[u[0]] = u[1];
    this.headers = o, this.responseInternal = n;
  }
  json() {
    return this.responseInternal.json();
  }
}
class Jl {
  /**
   * Returns the concatenation of all text parts from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the text from the first
   * one will be returned.
   * If there are non-text parts in the response, the concatenation of all text
   * parts will be returned, and a warning will be logged.
   * If there are thought parts in the response, the concatenation of all text
   * parts excluding the thought parts will be returned.
   *
   * @example
   * ```ts
   * const response = await ai.models.generateContent({
   *   model: 'gemini-2.0-flash',
   *   contents:
   *     'Why is the sky blue?',
   * });
   *
   * console.debug(response.text);
   * ```
   */
  get text() {
    var n, o, u, f, d, m, g, y;
    if (((f = (u = (o = (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) === null || o === void 0 ? void 0 : o.content) === null || u === void 0 ? void 0 : u.parts) === null || f === void 0 ? void 0 : f.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning text from the first one.");
    let h = "", v = !1;
    const S = [];
    for (const _ of (y = (g = (m = (d = this.candidates) === null || d === void 0 ? void 0 : d[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) !== null && y !== void 0 ? y : []) {
      for (const [R, V] of Object.entries(_))
        R !== "text" && R !== "thought" && R !== "thoughtSignature" && (V !== null || V !== void 0) && S.push(R);
      if (typeof _.text == "string") {
        if (typeof _.thought == "boolean" && _.thought)
          continue;
        v = !0, h += _.text;
      }
    }
    return S.length > 0 && console.warn(`there are non-text parts ${S} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), v ? h : void 0;
  }
  /**
   * Returns the concatenation of all inline data parts from the first candidate
   * in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the inline data from the
   * first one will be returned. If there are non-inline data parts in the
   * response, the concatenation of all inline data parts will be returned, and
   * a warning will be logged.
   */
  get data() {
    var n, o, u, f, d, m, g, y;
    if (((f = (u = (o = (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) === null || o === void 0 ? void 0 : o.content) === null || u === void 0 ? void 0 : u.parts) === null || f === void 0 ? void 0 : f.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning data from the first one.");
    let h = "";
    const v = [];
    for (const S of (y = (g = (m = (d = this.candidates) === null || d === void 0 ? void 0 : d[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) !== null && y !== void 0 ? y : []) {
      for (const [_, R] of Object.entries(S))
        _ !== "inlineData" && (R !== null || R !== void 0) && v.push(_);
      S.inlineData && typeof S.inlineData.data == "string" && (h += atob(S.inlineData.data));
    }
    return v.length > 0 && console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), h.length > 0 ? btoa(h) : void 0;
  }
  /**
   * Returns the function calls from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the function calls from
   * the first one will be returned.
   * If there are no function calls in the response, undefined will be returned.
   *
   * @example
   * ```ts
   * const controlLightFunctionDeclaration: FunctionDeclaration = {
   *   name: 'controlLight',
   *   parameters: {
   *   type: Type.OBJECT,
   *   description: 'Set the brightness and color temperature of a room light.',
   *   properties: {
   *     brightness: {
   *       type: Type.NUMBER,
   *       description:
   *         'Light level from 0 to 100. Zero is off and 100 is full brightness.',
   *     },
   *     colorTemperature: {
   *       type: Type.STRING,
   *       description:
   *         'Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.',
   *     },
   *   },
   *   required: ['brightness', 'colorTemperature'],
   *  };
   *  const response = await ai.models.generateContent({
   *     model: 'gemini-2.0-flash',
   *     contents: 'Dim the lights so the room feels cozy and warm.',
   *     config: {
   *       tools: [{functionDeclarations: [controlLightFunctionDeclaration]}],
   *       toolConfig: {
   *         functionCallingConfig: {
   *           mode: FunctionCallingConfigMode.ANY,
   *           allowedFunctionNames: ['controlLight'],
   *         },
   *       },
   *     },
   *   });
   *  console.debug(JSON.stringify(response.functionCalls));
   * ```
   */
  get functionCalls() {
    var n, o, u, f, d, m, g, y;
    if (((f = (u = (o = (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) === null || o === void 0 ? void 0 : o.content) === null || u === void 0 ? void 0 : u.parts) === null || f === void 0 ? void 0 : f.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning function calls from the first one.");
    const h = (y = (g = (m = (d = this.candidates) === null || d === void 0 ? void 0 : d[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter((v) => v.functionCall).map((v) => v.functionCall).filter((v) => v !== void 0);
    if ((h == null ? void 0 : h.length) !== 0)
      return h;
  }
  /**
   * Returns the first executable code from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the executable code from
   * the first one will be returned.
   * If there are no executable code in the response, undefined will be
   * returned.
   *
   * @example
   * ```ts
   * const response = await ai.models.generateContent({
   *   model: 'gemini-2.0-flash',
   *   contents:
   *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
   *   config: {
   *     tools: [{codeExecution: {}}],
   *   },
   * });
   *
   * console.debug(response.executableCode);
   * ```
   */
  get executableCode() {
    var n, o, u, f, d, m, g, y, h;
    if (((f = (u = (o = (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) === null || o === void 0 ? void 0 : o.content) === null || u === void 0 ? void 0 : u.parts) === null || f === void 0 ? void 0 : f.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning executable code from the first one.");
    const v = (y = (g = (m = (d = this.candidates) === null || d === void 0 ? void 0 : d[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter((S) => S.executableCode).map((S) => S.executableCode).filter((S) => S !== void 0);
    if ((v == null ? void 0 : v.length) !== 0)
      return (h = v == null ? void 0 : v[0]) === null || h === void 0 ? void 0 : h.code;
  }
  /**
   * Returns the first code execution result from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the code execution result from
   * the first one will be returned.
   * If there are no code execution result in the response, undefined will be returned.
   *
   * @example
   * ```ts
   * const response = await ai.models.generateContent({
   *   model: 'gemini-2.0-flash',
   *   contents:
   *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
   *   config: {
   *     tools: [{codeExecution: {}}],
   *   },
   * });
   *
   * console.debug(response.codeExecutionResult);
   * ```
   */
  get codeExecutionResult() {
    var n, o, u, f, d, m, g, y, h;
    if (((f = (u = (o = (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) === null || o === void 0 ? void 0 : o.content) === null || u === void 0 ? void 0 : u.parts) === null || f === void 0 ? void 0 : f.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
    const v = (y = (g = (m = (d = this.candidates) === null || d === void 0 ? void 0 : d[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter((S) => S.codeExecutionResult).map((S) => S.codeExecutionResult).filter((S) => S !== void 0);
    if ((v == null ? void 0 : v.length) !== 0)
      return (h = v == null ? void 0 : v[0]) === null || h === void 0 ? void 0 : h.output;
  }
}
class vm {
}
class Tm {
}
class Ev {
}
class _v {
}
class Cv {
}
class Av {
}
class Sm {
}
class Em {
}
class _m {
}
class Mv {
}
class ma {
  /**
   * Instantiates an Operation of the same type as the one being called with the fields set from the API response.
   * @internal
   */
  _fromAPIResponse({ apiResponse: n, _isVertexAI: o }) {
    const u = new ma();
    let f;
    const d = n;
    return o ? f = rv(d) : f = sv(d), Object.assign(u, f), u;
  }
}
class Cm {
}
class Am {
}
class Mm {
}
class Rv {
}
class Nv {
}
class Dv {
}
class nr {
  /**
   * Instantiates an Operation of the same type as the one being called with the fields set from the API response.
   * @internal
   */
  _fromAPIResponse({ apiResponse: n, _isVertexAI: o }) {
    const u = new nr(), d = gv(n);
    return Object.assign(u, d), u;
  }
}
class Iv {
}
class Uv {
}
class xv {
}
class Rm {
}
class wv {
  /**
   * Returns the concatenation of all text parts from the server content if present.
   *
   * @remarks
   * If there are non-text parts in the response, the concatenation of all text
   * parts will be returned, and a warning will be logged.
   */
  get text() {
    var n, o, u;
    let f = "", d = !1;
    const m = [];
    for (const g of (u = (o = (n = this.serverContent) === null || n === void 0 ? void 0 : n.modelTurn) === null || o === void 0 ? void 0 : o.parts) !== null && u !== void 0 ? u : []) {
      for (const [y, h] of Object.entries(g))
        y !== "text" && y !== "thought" && h !== null && m.push(y);
      if (typeof g.text == "string") {
        if (typeof g.thought == "boolean" && g.thought)
          continue;
        d = !0, f += g.text;
      }
    }
    return m.length > 0 && console.warn(`there are non-text parts ${m} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), d ? f : void 0;
  }
  /**
   * Returns the concatenation of all inline data parts from the server content if present.
   *
   * @remarks
   * If there are non-inline data parts in the
   * response, the concatenation of all inline data parts will be returned, and
   * a warning will be logged.
   */
  get data() {
    var n, o, u;
    let f = "";
    const d = [];
    for (const m of (u = (o = (n = this.serverContent) === null || n === void 0 ? void 0 : n.modelTurn) === null || o === void 0 ? void 0 : o.parts) !== null && u !== void 0 ? u : []) {
      for (const [g, y] of Object.entries(m))
        g !== "inlineData" && y !== null && d.push(g);
      m.inlineData && typeof m.inlineData.data == "string" && (f += atob(m.inlineData.data));
    }
    return d.length > 0 && console.warn(`there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), f.length > 0 ? btoa(f) : void 0;
  }
}
class qv {
  /**
   * Returns the first audio chunk from the server content, if present.
   *
   * @remarks
   * If there are no audio chunks in the response, undefined will be returned.
   */
  get audioChunk() {
    if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0)
      return this.serverContent.audioChunks[0];
  }
}
class ir {
  /**
   * Instantiates an Operation of the same type as the one being called with the fields set from the API response.
   * @internal
   */
  _fromAPIResponse({ apiResponse: n, _isVertexAI: o }) {
    const u = new ir(), d = Km(n);
    return Object.assign(u, d), u;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Te(i, n) {
  if (!n || typeof n != "string")
    throw new Error("model is required and must be a string");
  if (n.includes("..") || n.includes("?") || n.includes("&"))
    throw new Error("invalid model parameter");
  if (i.isVertexAI()) {
    if (n.startsWith("publishers/") || n.startsWith("projects/") || n.startsWith("models/"))
      return n;
    if (n.indexOf("/") >= 0) {
      const o = n.split("/", 2);
      return `publishers/${o[0]}/models/${o[1]}`;
    } else
      return `publishers/google/models/${n}`;
  } else
    return n.startsWith("models/") || n.startsWith("tunedModels/") ? n : `models/${n}`;
}
function Xm(i, n) {
  const o = Te(i, n);
  return o ? o.startsWith("publishers/") && i.isVertexAI() ? `projects/${i.getProject()}/locations/${i.getLocation()}/${o}` : o.startsWith("models/") && i.isVertexAI() ? `projects/${i.getProject()}/locations/${i.getLocation()}/publishers/google/${o}` : o : "";
}
function Qm(i) {
  return Array.isArray(i) ? i.map((n) => ha(n)) : [ha(i)];
}
function ha(i) {
  if (typeof i == "object" && i !== null)
    return i;
  throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof i}`);
}
function Zm(i) {
  const n = ha(i);
  if (n.mimeType && n.mimeType.startsWith("image/"))
    return n;
  throw new Error(`Unsupported mime type: ${n.mimeType}`);
}
function Wm(i) {
  const n = ha(i);
  if (n.mimeType && n.mimeType.startsWith("audio/"))
    return n;
  throw new Error(`Unsupported mime type: ${n.mimeType}`);
}
function Nm(i) {
  if (i == null)
    throw new Error("PartUnion is required");
  if (typeof i == "object")
    return i;
  if (typeof i == "string")
    return { text: i };
  throw new Error(`Unsupported part type: ${typeof i}`);
}
function $m(i) {
  if (i == null || Array.isArray(i) && i.length === 0)
    throw new Error("PartListUnion is required");
  return Array.isArray(i) ? i.map((n) => Nm(n)) : [Nm(i)];
}
function Xs(i) {
  return i != null && typeof i == "object" && "parts" in i && Array.isArray(i.parts);
}
function Dm(i) {
  return i != null && typeof i == "object" && "functionCall" in i;
}
function Im(i) {
  return i != null && typeof i == "object" && "functionResponse" in i;
}
function et(i) {
  if (i == null)
    throw new Error("ContentUnion is required");
  return Xs(i) ? i : {
    role: "user",
    parts: $m(i)
  };
}
function lr(i, n) {
  if (!n)
    return [];
  if (i.isVertexAI() && Array.isArray(n))
    return n.flatMap((o) => {
      const u = et(o);
      return u.parts && u.parts.length > 0 && u.parts[0].text !== void 0 ? [u.parts[0].text] : [];
    });
  if (i.isVertexAI()) {
    const o = et(n);
    return o.parts && o.parts.length > 0 && o.parts[0].text !== void 0 ? [o.parts[0].text] : [];
  }
  return Array.isArray(n) ? n.map((o) => et(o)) : [et(n)];
}
function wt(i) {
  if (i == null || Array.isArray(i) && i.length === 0)
    throw new Error("contents are required");
  if (!Array.isArray(i)) {
    if (Dm(i) || Im(i))
      throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
    return [et(i)];
  }
  const n = [], o = [], u = Xs(i[0]);
  for (const f of i) {
    const d = Xs(f);
    if (d != u)
      throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
    if (d)
      n.push(f);
    else {
      if (Dm(f) || Im(f))
        throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
      o.push(f);
    }
  }
  return u || n.push({ role: "user", parts: $m(o) }), n;
}
function Lv(i, n) {
  i.includes("null") && (n.nullable = !0);
  const o = i.filter((u) => u !== "null");
  if (o.length === 1)
    n.type = Object.values(Gn).includes(o[0].toUpperCase()) ? o[0].toUpperCase() : Gn.TYPE_UNSPECIFIED;
  else {
    n.anyOf = [];
    for (const u of o)
      n.anyOf.push({
        type: Object.values(Gn).includes(u.toUpperCase()) ? u.toUpperCase() : Gn.TYPE_UNSPECIFIED
      });
  }
}
function Fi(i) {
  const n = {}, o = ["items"], u = ["anyOf"], f = ["properties"];
  if (i.type && i.anyOf)
    throw new Error("type and anyOf cannot be both populated.");
  const d = i.anyOf;
  d != null && d.length == 2 && (d[0].type === "null" ? (n.nullable = !0, i = d[1]) : d[1].type === "null" && (n.nullable = !0, i = d[0])), i.type instanceof Array && Lv(i.type, n);
  for (const [m, g] of Object.entries(i))
    if (g != null)
      if (m == "type") {
        if (g === "null")
          throw new Error("type: null can not be the only possible type for the field.");
        if (g instanceof Array)
          continue;
        n.type = Object.values(Gn).includes(g.toUpperCase()) ? g.toUpperCase() : Gn.TYPE_UNSPECIFIED;
      } else if (o.includes(m))
        n[m] = Fi(g);
      else if (u.includes(m)) {
        const y = [];
        for (const h of g) {
          if (h.type == "null") {
            n.nullable = !0;
            continue;
          }
          y.push(Fi(h));
        }
        n[m] = y;
      } else if (f.includes(m)) {
        const y = {};
        for (const [h, v] of Object.entries(g))
          y[h] = Fi(v);
        n[m] = y;
      } else {
        if (m === "additionalProperties")
          continue;
        n[m] = g;
      }
  return n;
}
function or(i) {
  return Fi(i);
}
function ar(i) {
  if (typeof i == "object")
    return i;
  if (typeof i == "string")
    return {
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName: i
        }
      }
    };
  throw new Error(`Unsupported speechConfig type: ${typeof i}`);
}
function ur(i) {
  if ("multiSpeakerVoiceConfig" in i)
    throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");
  return i;
}
function Oi(i) {
  if (i.functionDeclarations)
    for (const n of i.functionDeclarations)
      n.parameters && (Object.keys(n.parameters).includes("$schema") ? n.parametersJsonSchema || (n.parametersJsonSchema = n.parameters, delete n.parameters) : n.parameters = Fi(n.parameters)), n.response && (Object.keys(n.response).includes("$schema") ? n.responseJsonSchema || (n.responseJsonSchema = n.response, delete n.response) : n.response = Fi(n.response));
  return i;
}
function Ki(i) {
  if (i == null)
    throw new Error("tools is required");
  if (!Array.isArray(i))
    throw new Error("tools is required and must be an array of Tools");
  const n = [];
  for (const o of i)
    n.push(o);
  return n;
}
function Gv(i, n, o, u = 1) {
  const f = !n.startsWith(`${o}/`) && n.split("/").length === u;
  return i.isVertexAI() ? n.startsWith("projects/") ? n : n.startsWith("locations/") ? `projects/${i.getProject()}/${n}` : n.startsWith(`${o}/`) ? `projects/${i.getProject()}/locations/${i.getLocation()}/${n}` : f ? `projects/${i.getProject()}/locations/${i.getLocation()}/${o}/${n}` : n : f ? `${o}/${n}` : n;
}
function sn(i, n) {
  if (typeof n != "string")
    throw new Error("name must be a string");
  return Gv(i, n, "cachedContents");
}
function jm(i) {
  switch (i) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return i;
  }
}
function Hn(i) {
  return tr(i);
}
function Hv(i) {
  return i != null && typeof i == "object" && "name" in i;
}
function Vv(i) {
  return i != null && typeof i == "object" && "video" in i;
}
function bv(i) {
  return i != null && typeof i == "object" && "uri" in i;
}
function eh(i) {
  var n;
  let o;
  if (Hv(i) && (o = i.name), !(bv(i) && (o = i.uri, o === void 0)) && !(Vv(i) && (o = (n = i.video) === null || n === void 0 ? void 0 : n.uri, o === void 0))) {
    if (typeof i == "string" && (o = i), o === void 0)
      throw new Error("Could not extract file name from the provided input.");
    if (o.startsWith("https://")) {
      const f = o.split("files/")[1].match(/[a-z0-9]+/);
      if (f === null)
        throw new Error(`Could not extract file name from URI ${o}`);
      o = f[0];
    } else o.startsWith("files/") && (o = o.split("files/")[1]);
    return o;
  }
}
function th(i, n) {
  let o;
  return i.isVertexAI() ? o = n ? "publishers/google/models" : "models" : o = n ? "models" : "tunedModels", o;
}
function nh(i) {
  for (const n of ["models", "tunedModels", "publisherModels"])
    if (zv(i, n))
      return i[n];
  return [];
}
function zv(i, n) {
  return i !== null && typeof i == "object" && n in i;
}
function Pv(i, n = {}) {
  const o = i, u = {
    name: o.name,
    description: o.description,
    parametersJsonSchema: o.inputSchema
  };
  return o.outputSchema && (u.responseJsonSchema = o.outputSchema), n.behavior && (u.behavior = n.behavior), {
    functionDeclarations: [
      u
    ]
  };
}
function Bv(i, n = {}) {
  const o = [], u = /* @__PURE__ */ new Set();
  for (const f of i) {
    const d = f.name;
    if (u.has(d))
      throw new Error(`Duplicate function name ${d} found in MCP tools. Please ensure function names are unique.`);
    u.add(d);
    const m = Pv(f, n);
    m.functionDeclarations && o.push(...m.functionDeclarations);
  }
  return { functionDeclarations: o };
}
function ih(i, n) {
  let o;
  if (typeof n == "string")
    if (i.isVertexAI())
      if (n.startsWith("gs://"))
        o = { format: "jsonl", gcsUri: [n] };
      else if (n.startsWith("bq://"))
        o = { format: "bigquery", bigqueryUri: n };
      else
        throw new Error(`Unsupported string source for Vertex AI: ${n}`);
    else if (n.startsWith("files/"))
      o = { fileName: n };
    else
      throw new Error(`Unsupported string source for Gemini API: ${n}`);
  else if (Array.isArray(n)) {
    if (i.isVertexAI())
      throw new Error("InlinedRequest[] is not supported in Vertex AI.");
    o = { inlinedRequests: n };
  } else
    o = n;
  const u = [o.gcsUri, o.bigqueryUri].filter(Boolean).length, f = [
    o.inlinedRequests,
    o.fileName
  ].filter(Boolean).length;
  if (i.isVertexAI()) {
    if (f > 0 || u !== 1)
      throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.");
  } else if (u > 0 || f !== 1)
    throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");
  return o;
}
function Yv(i) {
  if (typeof i != "string")
    return i;
  const n = i;
  if (n.startsWith("gs://"))
    return {
      format: "jsonl",
      gcsUri: n
    };
  if (n.startsWith("bq://"))
    return {
      format: "bigquery",
      bigqueryUri: n
    };
  throw new Error(`Unsupported destination: ${n}`);
}
function lh(i) {
  if (typeof i != "object" || i === null)
    return {};
  const n = i, o = n.inlinedResponses;
  if (typeof o != "object" || o === null)
    return i;
  const f = o.inlinedResponses;
  if (!Array.isArray(f) || f.length === 0)
    return i;
  let d = !1;
  for (const m of f) {
    if (typeof m != "object" || m === null)
      continue;
    const y = m.response;
    if (typeof y != "object" || y === null)
      continue;
    if (y.embedding !== void 0) {
      d = !0;
      break;
    }
  }
  return d && (n.inlinedEmbedContentResponses = n.inlinedResponses, delete n.inlinedResponses), i;
}
function Xi(i, n) {
  const o = n;
  if (!i.isVertexAI()) {
    if (/batches\/[^/]+$/.test(o))
      return o.split("/").pop();
    throw new Error(`Invalid batch job name: ${o}.`);
  }
  if (/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(o))
    return o.split("/").pop();
  if (/^\d+$/.test(o))
    return o;
  throw new Error(`Invalid batch job name: ${o}.`);
}
function oh(i) {
  const n = i;
  return n === "BATCH_STATE_UNSPECIFIED" ? "JOB_STATE_UNSPECIFIED" : n === "BATCH_STATE_PENDING" ? "JOB_STATE_PENDING" : n === "BATCH_STATE_RUNNING" ? "JOB_STATE_RUNNING" : n === "BATCH_STATE_SUCCEEDED" ? "JOB_STATE_SUCCEEDED" : n === "BATCH_STATE_FAILED" ? "JOB_STATE_FAILED" : n === "BATCH_STATE_CANCELLED" ? "JOB_STATE_CANCELLED" : n === "BATCH_STATE_EXPIRED" ? "JOB_STATE_EXPIRED" : n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Fv(i) {
  const n = {}, o = s(i, ["responsesFile"]);
  o != null && r(n, ["fileName"], o);
  const u = s(i, [
    "inlinedResponses",
    "inlinedResponses"
  ]);
  if (u != null) {
    let d = u;
    Array.isArray(d) && (d = d.map((m) => CT(m))), r(n, ["inlinedResponses"], d);
  }
  const f = s(i, [
    "inlinedEmbedContentResponses",
    "inlinedResponses"
  ]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["inlinedEmbedContentResponses"], d);
  }
  return n;
}
function Jv(i) {
  const n = {}, o = s(i, ["predictionsFormat"]);
  o != null && r(n, ["format"], o);
  const u = s(i, [
    "gcsDestination",
    "outputUriPrefix"
  ]);
  u != null && r(n, ["gcsUri"], u);
  const f = s(i, [
    "bigqueryDestination",
    "outputUri"
  ]);
  return f != null && r(n, ["bigqueryUri"], f), n;
}
function kv(i) {
  const n = {}, o = s(i, ["format"]);
  o != null && r(n, ["predictionsFormat"], o);
  const u = s(i, ["gcsUri"]);
  u != null && r(n, ["gcsDestination", "outputUriPrefix"], u);
  const f = s(i, ["bigqueryUri"]);
  if (f != null && r(n, ["bigqueryDestination", "outputUri"], f), s(i, ["fileName"]) !== void 0)
    throw new Error("fileName parameter is not supported in Vertex AI.");
  if (s(i, ["inlinedResponses"]) !== void 0)
    throw new Error("inlinedResponses parameter is not supported in Vertex AI.");
  if (s(i, ["inlinedEmbedContentResponses"]) !== void 0)
    throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");
  return n;
}
function ca(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, [
    "metadata",
    "displayName"
  ]);
  u != null && r(n, ["displayName"], u);
  const f = s(i, ["metadata", "state"]);
  f != null && r(n, ["state"], oh(f));
  const d = s(i, [
    "metadata",
    "createTime"
  ]);
  d != null && r(n, ["createTime"], d);
  const m = s(i, [
    "metadata",
    "endTime"
  ]);
  m != null && r(n, ["endTime"], m);
  const g = s(i, [
    "metadata",
    "updateTime"
  ]);
  g != null && r(n, ["updateTime"], g);
  const y = s(i, ["metadata", "model"]);
  y != null && r(n, ["model"], y);
  const h = s(i, ["metadata", "output"]);
  return h != null && r(n, ["dest"], Fv(lh(h))), n;
}
function Qs(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["displayName"]);
  u != null && r(n, ["displayName"], u);
  const f = s(i, ["state"]);
  f != null && r(n, ["state"], oh(f));
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, ["createTime"]);
  m != null && r(n, ["createTime"], m);
  const g = s(i, ["startTime"]);
  g != null && r(n, ["startTime"], g);
  const y = s(i, ["endTime"]);
  y != null && r(n, ["endTime"], y);
  const h = s(i, ["updateTime"]);
  h != null && r(n, ["updateTime"], h);
  const v = s(i, ["model"]);
  v != null && r(n, ["model"], v);
  const S = s(i, ["inputConfig"]);
  S != null && r(n, ["src"], Ov(S));
  const _ = s(i, ["outputConfig"]);
  _ != null && r(n, ["dest"], Jv(lh(_)));
  const R = s(i, [
    "completionStats"
  ]);
  return R != null && r(n, ["completionStats"], R), n;
}
function Ov(i) {
  const n = {}, o = s(i, ["instancesFormat"]);
  o != null && r(n, ["format"], o);
  const u = s(i, ["gcsSource", "uris"]);
  u != null && r(n, ["gcsUri"], u);
  const f = s(i, [
    "bigquerySource",
    "inputUri"
  ]);
  return f != null && r(n, ["bigqueryUri"], f), n;
}
function Kv(i, n) {
  const o = {};
  if (s(n, ["format"]) !== void 0)
    throw new Error("format parameter is not supported in Gemini API.");
  if (s(n, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (s(n, ["bigqueryUri"]) !== void 0)
    throw new Error("bigqueryUri parameter is not supported in Gemini API.");
  const u = s(n, ["fileName"]);
  u != null && r(o, ["fileName"], u);
  const f = s(n, [
    "inlinedRequests"
  ]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => _T(i, m))), r(o, ["requests", "requests"], d);
  }
  return o;
}
function Xv(i) {
  const n = {}, o = s(i, ["format"]);
  o != null && r(n, ["instancesFormat"], o);
  const u = s(i, ["gcsUri"]);
  u != null && r(n, ["gcsSource", "uris"], u);
  const f = s(i, ["bigqueryUri"]);
  if (f != null && r(n, ["bigquerySource", "inputUri"], f), s(i, ["fileName"]) !== void 0)
    throw new Error("fileName parameter is not supported in Vertex AI.");
  if (s(i, ["inlinedRequests"]) !== void 0)
    throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
  return n;
}
function Qv(i) {
  const n = {}, o = s(i, ["data"]);
  if (o != null && r(n, ["data"], o), s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function Zv(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], Xi(i, u)), o;
}
function Wv(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], Xi(i, u)), o;
}
function $v(i) {
  const n = {}, o = s(i, ["content"]);
  o != null && r(n, ["content"], o);
  const u = s(i, [
    "citationMetadata"
  ]);
  u != null && r(n, ["citationMetadata"], jv(u));
  const f = s(i, ["tokenCount"]);
  f != null && r(n, ["tokenCount"], f);
  const d = s(i, ["finishReason"]);
  d != null && r(n, ["finishReason"], d);
  const m = s(i, ["avgLogprobs"]);
  m != null && r(n, ["avgLogprobs"], m);
  const g = s(i, [
    "groundingMetadata"
  ]);
  g != null && r(n, ["groundingMetadata"], g);
  const y = s(i, ["index"]);
  y != null && r(n, ["index"], y);
  const h = s(i, [
    "logprobsResult"
  ]);
  h != null && r(n, ["logprobsResult"], h);
  const v = s(i, [
    "safetyRatings"
  ]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((R) => R)), r(n, ["safetyRatings"], _);
  }
  const S = s(i, [
    "urlContextMetadata"
  ]);
  return S != null && r(n, ["urlContextMetadata"], S), n;
}
function jv(i) {
  const n = {}, o = s(i, ["citationSources"]);
  if (o != null) {
    let u = o;
    Array.isArray(u) && (u = u.map((f) => f)), r(n, ["citations"], u);
  }
  return n;
}
function ah(i) {
  const n = {}, o = s(i, ["parts"]);
  if (o != null) {
    let f = o;
    Array.isArray(f) && (f = f.map((d) => UT(d))), r(n, ["parts"], f);
  }
  const u = s(i, ["role"]);
  return u != null && r(n, ["role"], u), n;
}
function eT(i, n) {
  const o = {}, u = s(i, ["displayName"]);
  if (n !== void 0 && u != null && r(n, ["batch", "displayName"], u), s(i, ["dest"]) !== void 0)
    throw new Error("dest parameter is not supported in Gemini API.");
  return o;
}
function tT(i, n) {
  const o = {}, u = s(i, ["displayName"]);
  n !== void 0 && u != null && r(n, ["displayName"], u);
  const f = s(i, ["dest"]);
  return n !== void 0 && f != null && r(n, ["outputConfig"], kv(Yv(f))), o;
}
function Um(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["src"]);
  f != null && r(o, ["batch", "inputConfig"], Kv(i, ih(i, f)));
  const d = s(n, ["config"]);
  return d != null && eT(d, o), o;
}
function nT(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["model"], Te(i, u));
  const f = s(n, ["src"]);
  f != null && r(o, ["inputConfig"], Xv(ih(i, f)));
  const d = s(n, ["config"]);
  return d != null && tT(d, o), o;
}
function iT(i, n) {
  const o = {}, u = s(i, ["displayName"]);
  return n !== void 0 && u != null && r(n, ["batch", "displayName"], u), o;
}
function lT(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["src"]);
  f != null && r(o, ["batch", "inputConfig"], cT(i, f));
  const d = s(n, ["config"]);
  return d != null && iT(d, o), o;
}
function oT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], Xi(i, u)), o;
}
function aT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], Xi(i, u)), o;
}
function uT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["name"]);
  u != null && r(n, ["name"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  return d != null && r(n, ["error"], d), n;
}
function sT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["name"]);
  u != null && r(n, ["name"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  return d != null && r(n, ["error"], d), n;
}
function rT(i, n) {
  const o = {}, u = s(n, ["contents"]);
  if (u != null) {
    let d = lr(i, u);
    Array.isArray(d) && (d = d.map((m) => m)), r(o, ["requests[]", "request", "content"], d);
  }
  const f = s(n, ["config"]);
  return f != null && (r(o, ["_self"], fT(f, o)), av(o, { "requests[].*": "requests[].request.*" })), o;
}
function fT(i, n) {
  const o = {}, u = s(i, ["taskType"]);
  n !== void 0 && u != null && r(n, ["requests[]", "taskType"], u);
  const f = s(i, ["title"]);
  n !== void 0 && f != null && r(n, ["requests[]", "title"], f);
  const d = s(i, [
    "outputDimensionality"
  ]);
  if (n !== void 0 && d != null && r(n, ["requests[]", "outputDimensionality"], d), s(i, ["mimeType"]) !== void 0)
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (s(i, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return o;
}
function cT(i, n) {
  const o = {}, u = s(n, ["fileName"]);
  u != null && r(o, ["file_name"], u);
  const f = s(n, [
    "inlinedRequests"
  ]);
  return f != null && r(o, ["requests"], rT(i, f)), o;
}
function dT(i) {
  const n = {};
  if (s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const o = s(i, ["fileUri"]);
  o != null && r(n, ["fileUri"], o);
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function pT(i) {
  const n = {}, o = s(i, ["id"]);
  o != null && r(n, ["id"], o);
  const u = s(i, ["args"]);
  u != null && r(n, ["args"], u);
  const f = s(i, ["name"]);
  if (f != null && r(n, ["name"], f), s(i, ["partialArgs"]) !== void 0)
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (s(i, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return n;
}
function mT(i) {
  const n = {}, o = s(i, ["mode"]);
  o != null && r(n, ["mode"], o);
  const u = s(i, [
    "allowedFunctionNames"
  ]);
  if (u != null && r(n, ["allowedFunctionNames"], u), s(i, ["streamFunctionCallArguments"]) !== void 0)
    throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
  return n;
}
function hT(i, n, o) {
  const u = {}, f = s(n, [
    "systemInstruction"
  ]);
  o !== void 0 && f != null && r(o, ["systemInstruction"], ah(et(f)));
  const d = s(n, ["temperature"]);
  d != null && r(u, ["temperature"], d);
  const m = s(n, ["topP"]);
  m != null && r(u, ["topP"], m);
  const g = s(n, ["topK"]);
  g != null && r(u, ["topK"], g);
  const y = s(n, [
    "candidateCount"
  ]);
  y != null && r(u, ["candidateCount"], y);
  const h = s(n, [
    "maxOutputTokens"
  ]);
  h != null && r(u, ["maxOutputTokens"], h);
  const v = s(n, [
    "stopSequences"
  ]);
  v != null && r(u, ["stopSequences"], v);
  const S = s(n, [
    "responseLogprobs"
  ]);
  S != null && r(u, ["responseLogprobs"], S);
  const _ = s(n, ["logprobs"]);
  _ != null && r(u, ["logprobs"], _);
  const R = s(n, [
    "presencePenalty"
  ]);
  R != null && r(u, ["presencePenalty"], R);
  const V = s(n, [
    "frequencyPenalty"
  ]);
  V != null && r(u, ["frequencyPenalty"], V);
  const b = s(n, ["seed"]);
  b != null && r(u, ["seed"], b);
  const F = s(n, [
    "responseMimeType"
  ]);
  F != null && r(u, ["responseMimeType"], F);
  const k = s(n, [
    "responseSchema"
  ]);
  k != null && r(u, ["responseSchema"], or(k));
  const X = s(n, [
    "responseJsonSchema"
  ]);
  if (X != null && r(u, ["responseJsonSchema"], X), s(n, ["routingConfig"]) !== void 0)
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (s(n, ["modelSelectionConfig"]) !== void 0)
    throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const z = s(n, [
    "safetySettings"
  ]);
  if (o !== void 0 && z != null) {
    let ue = z;
    Array.isArray(ue) && (ue = ue.map((ke) => xT(ke))), r(o, ["safetySettings"], ue);
  }
  const Z = s(n, ["tools"]);
  if (o !== void 0 && Z != null) {
    let ue = Ki(Z);
    Array.isArray(ue) && (ue = ue.map((ke) => qT(Oi(ke)))), r(o, ["tools"], ue);
  }
  const te = s(n, ["toolConfig"]);
  if (o !== void 0 && te != null && r(o, ["toolConfig"], wT(te)), s(n, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const j = s(n, [
    "cachedContent"
  ]);
  o !== void 0 && j != null && r(o, ["cachedContent"], sn(i, j));
  const J = s(n, [
    "responseModalities"
  ]);
  J != null && r(u, ["responseModalities"], J);
  const ge = s(n, [
    "mediaResolution"
  ]);
  ge != null && r(u, ["mediaResolution"], ge);
  const $ = s(n, ["speechConfig"]);
  if ($ != null && r(u, ["speechConfig"], ar($)), s(n, ["audioTimestamp"]) !== void 0)
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const ce = s(n, [
    "thinkingConfig"
  ]);
  ce != null && r(u, ["thinkingConfig"], ce);
  const _e = s(n, ["imageConfig"]);
  return _e != null && r(u, ["imageConfig"], ET(_e)), u;
}
function gT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["candidates"]);
  if (u != null) {
    let y = u;
    Array.isArray(y) && (y = y.map((h) => $v(h))), r(n, ["candidates"], y);
  }
  const f = s(i, ["modelVersion"]);
  f != null && r(n, ["modelVersion"], f);
  const d = s(i, [
    "promptFeedback"
  ]);
  d != null && r(n, ["promptFeedback"], d);
  const m = s(i, ["responseId"]);
  m != null && r(n, ["responseId"], m);
  const g = s(i, [
    "usageMetadata"
  ]);
  return g != null && r(n, ["usageMetadata"], g), n;
}
function yT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], Xi(i, u)), o;
}
function vT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], Xi(i, u)), o;
}
function TT(i) {
  const n = {};
  if (s(i, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const o = s(i, ["enableWidget"]);
  return o != null && r(n, ["enableWidget"], o), n;
}
function ST(i) {
  const n = {};
  if (s(i, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (s(i, ["blockingConfidence"]) !== void 0)
    throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  const o = s(i, [
    "timeRangeFilter"
  ]);
  return o != null && r(n, ["timeRangeFilter"], o), n;
}
function ET(i) {
  const n = {}, o = s(i, ["aspectRatio"]);
  o != null && r(n, ["aspectRatio"], o);
  const u = s(i, ["imageSize"]);
  if (u != null && r(n, ["imageSize"], u), s(i, ["outputMimeType"]) !== void 0)
    throw new Error("outputMimeType parameter is not supported in Gemini API.");
  if (s(i, ["outputCompressionQuality"]) !== void 0)
    throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");
  return n;
}
function _T(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["request", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let g = wt(f);
    Array.isArray(g) && (g = g.map((y) => ah(y))), r(o, ["request", "contents"], g);
  }
  const d = s(n, ["metadata"]);
  d != null && r(o, ["metadata"], d);
  const m = s(n, ["config"]);
  return m != null && r(o, ["request", "generationConfig"], hT(i, m, s(o, ["request"], {}))), o;
}
function CT(i) {
  const n = {}, o = s(i, ["response"]);
  o != null && r(n, ["response"], gT(o));
  const u = s(i, ["error"]);
  return u != null && r(n, ["error"], u), n;
}
function AT(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  if (n !== void 0 && f != null && r(n, ["_query", "pageToken"], f), s(i, ["filter"]) !== void 0)
    throw new Error("filter parameter is not supported in Gemini API.");
  return o;
}
function MT(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  n !== void 0 && f != null && r(n, ["_query", "pageToken"], f);
  const d = s(i, ["filter"]);
  return n !== void 0 && d != null && r(n, ["_query", "filter"], d), o;
}
function RT(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && AT(o, n), n;
}
function NT(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && MT(o, n), n;
}
function DT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, ["operations"]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => ca(m))), r(n, ["batchJobs"], d);
  }
  return n;
}
function IT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, [
    "batchPredictionJobs"
  ]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => Qs(m))), r(n, ["batchJobs"], d);
  }
  return n;
}
function UT(i) {
  const n = {}, o = s(i, [
    "mediaResolution"
  ]);
  o != null && r(n, ["mediaResolution"], o);
  const u = s(i, [
    "codeExecutionResult"
  ]);
  u != null && r(n, ["codeExecutionResult"], u);
  const f = s(i, [
    "executableCode"
  ]);
  f != null && r(n, ["executableCode"], f);
  const d = s(i, ["fileData"]);
  d != null && r(n, ["fileData"], dT(d));
  const m = s(i, ["functionCall"]);
  m != null && r(n, ["functionCall"], pT(m));
  const g = s(i, [
    "functionResponse"
  ]);
  g != null && r(n, ["functionResponse"], g);
  const y = s(i, ["inlineData"]);
  y != null && r(n, ["inlineData"], Qv(y));
  const h = s(i, ["text"]);
  h != null && r(n, ["text"], h);
  const v = s(i, ["thought"]);
  v != null && r(n, ["thought"], v);
  const S = s(i, [
    "thoughtSignature"
  ]);
  S != null && r(n, ["thoughtSignature"], S);
  const _ = s(i, [
    "videoMetadata"
  ]);
  return _ != null && r(n, ["videoMetadata"], _), n;
}
function xT(i) {
  const n = {}, o = s(i, ["category"]);
  if (o != null && r(n, ["category"], o), s(i, ["method"]) !== void 0)
    throw new Error("method parameter is not supported in Gemini API.");
  const u = s(i, ["threshold"]);
  return u != null && r(n, ["threshold"], u), n;
}
function wT(i) {
  const n = {}, o = s(i, [
    "functionCallingConfig"
  ]);
  o != null && r(n, ["functionCallingConfig"], mT(o));
  const u = s(i, [
    "retrievalConfig"
  ]);
  return u != null && r(n, ["retrievalConfig"], u), n;
}
function qT(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let v = o;
    Array.isArray(v) && (v = v.map((S) => S)), r(n, ["functionDeclarations"], v);
  }
  if (s(i, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const u = s(i, [
    "googleSearchRetrieval"
  ]);
  u != null && r(n, ["googleSearchRetrieval"], u);
  const f = s(i, ["computerUse"]);
  f != null && r(n, ["computerUse"], f);
  const d = s(i, ["fileSearch"]);
  d != null && r(n, ["fileSearch"], d);
  const m = s(i, [
    "codeExecution"
  ]);
  if (m != null && r(n, ["codeExecution"], m), s(i, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = s(i, ["googleMaps"]);
  g != null && r(n, ["googleMaps"], TT(g));
  const y = s(i, ["googleSearch"]);
  y != null && r(n, ["googleSearch"], ST(y));
  const h = s(i, ["urlContext"]);
  return h != null && r(n, ["urlContext"], h), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var an;
(function (i) {
  i.PAGED_ITEM_BATCH_JOBS = "batchJobs", i.PAGED_ITEM_MODELS = "models", i.PAGED_ITEM_TUNING_JOBS = "tuningJobs", i.PAGED_ITEM_FILES = "files", i.PAGED_ITEM_CACHED_CONTENTS = "cachedContents", i.PAGED_ITEM_FILE_SEARCH_STORES = "fileSearchStores", i.PAGED_ITEM_DOCUMENTS = "documents";
})(an || (an = {}));
class ii {
  constructor(n, o, u, f) {
    this.pageInternal = [], this.paramsInternal = {}, this.requestInternal = o, this.init(n, u, f);
  }
  init(n, o, u) {
    var f, d;
    this.nameInternal = n, this.pageInternal = o[this.nameInternal] || [], this.sdkHttpResponseInternal = o == null ? void 0 : o.sdkHttpResponse, this.idxInternal = 0;
    let m = { config: {} };
    !u || Object.keys(u).length === 0 ? m = { config: {} } : typeof u == "object" ? m = Object.assign({}, u) : m = u, m.config && (m.config.pageToken = o.nextPageToken), this.paramsInternal = m, this.pageInternalSize = (d = (f = m.config) === null || f === void 0 ? void 0 : f.pageSize) !== null && d !== void 0 ? d : this.pageInternal.length;
  }
  initNextPage(n) {
    this.init(this.nameInternal, n, this.paramsInternal);
  }
  /**
   * Returns the current page, which is a list of items.
   *
   * @remarks
   * The first page is retrieved when the pager is created. The returned list of
   * items could be a subset of the entire list.
   */
  get page() {
    return this.pageInternal;
  }
  /**
   * Returns the type of paged item (for example, ``batch_jobs``).
   */
  get name() {
    return this.nameInternal;
  }
  /**
   * Returns the length of the page fetched each time by this pager.
   *
   * @remarks
   * The number of items in the page is less than or equal to the page length.
   */
  get pageSize() {
    return this.pageInternalSize;
  }
  /**
   * Returns the headers of the API response.
   */
  get sdkHttpResponse() {
    return this.sdkHttpResponseInternal;
  }
  /**
   * Returns the parameters when making the API request for the next page.
   *
   * @remarks
   * Parameters contain a set of optional configs that can be
   * used to customize the API request. For example, the `pageToken` parameter
   * contains the token to request the next page.
   */
  get params() {
    return this.paramsInternal;
  }
  /**
   * Returns the total number of items in the current page.
   */
  get pageLength() {
    return this.pageInternal.length;
  }
  /**
   * Returns the item at the given index.
   */
  getItem(n) {
    return this.pageInternal[n];
  }
  /**
   * Returns an async iterator that support iterating through all items
   * retrieved from the API.
   *
   * @remarks
   * The iterator will automatically fetch the next page if there are more items
   * to fetch from the API.
   *
   * @example
   *
   * ```ts
   * const pager = await ai.files.list({config: {pageSize: 10}});
   * for await (const file of pager) {
   *   console.log(file.name);
   * }
   * ```
   */
  [Symbol.asyncIterator]() {
    return {
      next: async () => {
        if (this.idxInternal >= this.pageLength)
          if (this.hasNextPage())
            await this.nextPage();
          else
            return { value: void 0, done: !0 };
        const n = this.getItem(this.idxInternal);
        return this.idxInternal += 1, { value: n, done: !1 };
      },
      return: async () => ({ value: void 0, done: !0 })
    };
  }
  /**
   * Fetches the next page of items. This makes a new API request.
   *
   * @throws {Error} If there are no more pages to fetch.
   *
   * @example
   *
   * ```ts
   * const pager = await ai.files.list({config: {pageSize: 10}});
   * let page = pager.page;
   * while (true) {
   *   for (const file of page) {
   *     console.log(file.name);
   *   }
   *   if (!pager.hasNextPage()) {
   *     break;
   *   }
   *   page = await pager.nextPage();
   * }
   * ```
   */
  async nextPage() {
    if (!this.hasNextPage())
      throw new Error("No more pages to fetch.");
    const n = await this.requestInternal(this.params);
    return this.initNextPage(n), this.page;
  }
  /**
   * Returns true if there are more pages to fetch from the API.
   */
  hasNextPage() {
    var n;
    return ((n = this.params.config) === null || n === void 0 ? void 0 : n.pageToken) !== void 0;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class LT extends un {
  constructor(n) {
    super(), this.apiClient = n, this.create = async (o) => (this.apiClient.isVertexAI() && (o.config = this.formatDestination(o.src, o.config)), this.createInternal(o)), this.createEmbeddings = async (o) => {
      if (console.warn("batches.createEmbeddings() is experimental and may change without notice."), this.apiClient.isVertexAI())
        throw new Error("Vertex AI does not support batches.createEmbeddings.");
      return this.createEmbeddingsInternal(o);
    }, this.list = async (o = {}) => new ii(an.PAGED_ITEM_BATCH_JOBS, (u) => this.listInternal(u), await this.listInternal(o), o);
  }
  // Helper function to handle inlined generate content requests
  createInlinedGenerateContentRequest(n) {
    const o = Um(
      this.apiClient,
      // Use instance apiClient
      n
    ), u = o._url, f = Y("{model}:batchGenerateContent", u), g = o.batch.inputConfig.requests, y = g.requests, h = [];
    for (const v of y) {
      const S = Object.assign({}, v);
      if (S.systemInstruction) {
        const _ = S.systemInstruction;
        delete S.systemInstruction;
        const R = S.request;
        R.systemInstruction = _, S.request = R;
      }
      h.push(S);
    }
    return g.requests = h, delete o.config, delete o._url, delete o._query, { path: f, body: o };
  }
  // Helper function to get the first GCS URI
  getGcsUri(n) {
    if (typeof n == "string")
      return n.startsWith("gs://") ? n : void 0;
    if (!Array.isArray(n) && n.gcsUri && n.gcsUri.length > 0)
      return n.gcsUri[0];
  }
  // Helper function to get the BigQuery URI
  getBigqueryUri(n) {
    if (typeof n == "string")
      return n.startsWith("bq://") ? n : void 0;
    if (!Array.isArray(n))
      return n.bigqueryUri;
  }
  // Function to format the destination configuration for Vertex AI
  formatDestination(n, o) {
    const u = o ? Object.assign({}, o) : {}, f = Date.now().toString();
    if (u.displayName || (u.displayName = `genaiBatchJob_${f}`), u.dest === void 0) {
      const d = this.getGcsUri(n), m = this.getBigqueryUri(n);
      if (d)
        d.endsWith(".jsonl") ? u.dest = `${d.slice(0, -6)}/dest` : u.dest = `${d}_dest_${f}`;
      else if (m)
        u.dest = `${m}_dest_${f}`;
      else
        throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.");
    }
    return u;
  }
  /**
   * Internal method to create batch job.
   *
   * @param params - The parameters for create batch job request.
   * @return The created batch job.
   *
   */
  async createInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = nT(this.apiClient, n);
      return g = Y("batchPredictionJobs", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => Qs(v));
    } else {
      const h = Um(this.apiClient, n);
      return g = Y("{model}:batchGenerateContent", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => ca(v));
    }
  }
  /**
   * Internal method to create batch job.
   *
   * @param params - The parameters for create batch job request.
   * @return The created batch job.
   *
   */
  async createEmbeddingsInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = lT(this.apiClient, n);
      return d = Y("{model}:asyncBatchEmbedContent", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => ca(y));
    }
  }
  /**
   * Gets batch job configurations.
   *
   * @param params - The parameters for the get request.
   * @return The batch job.
   *
   * @example
   * ```ts
   * await ai.batches.get({name: '...'}); // The server-generated resource name.
   * ```
   */
  async get(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = vT(this.apiClient, n);
      return g = Y("batchPredictionJobs/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => Qs(v));
    } else {
      const h = yT(this.apiClient, n);
      return g = Y("batches/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => ca(v));
    }
  }
  /**
   * Cancels a batch job.
   *
   * @param params - The parameters for the cancel request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.batches.cancel({name: '...'}); // The server-generated resource name.
   * ```
   */
  async cancel(n) {
    var o, u, f, d;
    let m = "", g = {};
    if (this.apiClient.isVertexAI()) {
      const y = Wv(this.apiClient, n);
      m = Y("batchPredictionJobs/{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({
        path: m,
        queryParams: g,
        body: JSON.stringify(y),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      });
    } else {
      const y = Zv(this.apiClient, n);
      m = Y("batches/{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({
        path: m,
        queryParams: g,
        body: JSON.stringify(y),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      });
    }
  }
  async listInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = NT(n);
      return g = Y("batchPredictionJobs", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = IT(v), _ = new Rm();
        return Object.assign(_, S), _;
      });
    } else {
      const h = RT(n);
      return g = Y("batches", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = DT(v), _ = new Rm();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Deletes a batch job.
   *
   * @param params - The parameters for the delete request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.batches.delete({name: '...'}); // The server-generated resource name.
   * ```
   */
  async delete(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = aT(this.apiClient, n);
      return g = Y("batchPredictionJobs/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "DELETE",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => sT(v));
    } else {
      const h = oT(this.apiClient, n);
      return g = Y("batches/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "DELETE",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => uT(v));
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function GT(i) {
  const n = {}, o = s(i, ["data"]);
  if (o != null && r(n, ["data"], o), s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function xm(i) {
  const n = {}, o = s(i, ["parts"]);
  if (o != null) {
    let f = o;
    Array.isArray(f) && (f = f.map((d) => lS(d))), r(n, ["parts"], f);
  }
  const u = s(i, ["role"]);
  return u != null && r(n, ["role"], u), n;
}
function HT(i, n) {
  const o = {}, u = s(i, ["ttl"]);
  n !== void 0 && u != null && r(n, ["ttl"], u);
  const f = s(i, ["expireTime"]);
  n !== void 0 && f != null && r(n, ["expireTime"], f);
  const d = s(i, ["displayName"]);
  n !== void 0 && d != null && r(n, ["displayName"], d);
  const m = s(i, ["contents"]);
  if (n !== void 0 && m != null) {
    let v = wt(m);
    Array.isArray(v) && (v = v.map((S) => xm(S))), r(n, ["contents"], v);
  }
  const g = s(i, [
    "systemInstruction"
  ]);
  n !== void 0 && g != null && r(n, ["systemInstruction"], xm(et(g)));
  const y = s(i, ["tools"]);
  if (n !== void 0 && y != null) {
    let v = y;
    Array.isArray(v) && (v = v.map((S) => aS(S))), r(n, ["tools"], v);
  }
  const h = s(i, ["toolConfig"]);
  if (n !== void 0 && h != null && r(n, ["toolConfig"], oS(h)), s(i, ["kmsKeyName"]) !== void 0)
    throw new Error("kmsKeyName parameter is not supported in Gemini API.");
  return o;
}
function VT(i, n) {
  const o = {}, u = s(i, ["ttl"]);
  n !== void 0 && u != null && r(n, ["ttl"], u);
  const f = s(i, ["expireTime"]);
  n !== void 0 && f != null && r(n, ["expireTime"], f);
  const d = s(i, ["displayName"]);
  n !== void 0 && d != null && r(n, ["displayName"], d);
  const m = s(i, ["contents"]);
  if (n !== void 0 && m != null) {
    let S = wt(m);
    Array.isArray(S) && (S = S.map((_) => _)), r(n, ["contents"], S);
  }
  const g = s(i, [
    "systemInstruction"
  ]);
  n !== void 0 && g != null && r(n, ["systemInstruction"], et(g));
  const y = s(i, ["tools"]);
  if (n !== void 0 && y != null) {
    let S = y;
    Array.isArray(S) && (S = S.map((_) => uS(_))), r(n, ["tools"], S);
  }
  const h = s(i, ["toolConfig"]);
  n !== void 0 && h != null && r(n, ["toolConfig"], h);
  const v = s(i, ["kmsKeyName"]);
  return n !== void 0 && v != null && r(n, ["encryption_spec", "kmsKeyName"], v), o;
}
function bT(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["model"], Xm(i, u));
  const f = s(n, ["config"]);
  return f != null && HT(f, o), o;
}
function zT(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["model"], Xm(i, u));
  const f = s(n, ["config"]);
  return f != null && VT(f, o), o;
}
function PT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], sn(i, u)), o;
}
function BT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], sn(i, u)), o;
}
function YT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
function FT(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
function JT(i) {
  const n = {};
  if (s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const o = s(i, ["fileUri"]);
  o != null && r(n, ["fileUri"], o);
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function kT(i) {
  const n = {}, o = s(i, ["id"]);
  o != null && r(n, ["id"], o);
  const u = s(i, ["args"]);
  u != null && r(n, ["args"], u);
  const f = s(i, ["name"]);
  if (f != null && r(n, ["name"], f), s(i, ["partialArgs"]) !== void 0)
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (s(i, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return n;
}
function OT(i) {
  const n = {}, o = s(i, ["mode"]);
  o != null && r(n, ["mode"], o);
  const u = s(i, [
    "allowedFunctionNames"
  ]);
  if (u != null && r(n, ["allowedFunctionNames"], u), s(i, ["streamFunctionCallArguments"]) !== void 0)
    throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
  return n;
}
function KT(i) {
  const n = {};
  if (s(i, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const o = s(i, ["description"]);
  o != null && r(n, ["description"], o);
  const u = s(i, ["name"]);
  u != null && r(n, ["name"], u);
  const f = s(i, ["parameters"]);
  f != null && r(n, ["parameters"], f);
  const d = s(i, [
    "parametersJsonSchema"
  ]);
  d != null && r(n, ["parametersJsonSchema"], d);
  const m = s(i, ["response"]);
  m != null && r(n, ["response"], m);
  const g = s(i, [
    "responseJsonSchema"
  ]);
  return g != null && r(n, ["responseJsonSchema"], g), n;
}
function XT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], sn(i, u)), o;
}
function QT(i, n) {
  const o = {}, u = s(n, ["name"]);
  return u != null && r(o, ["_url", "name"], sn(i, u)), o;
}
function ZT(i) {
  const n = {};
  if (s(i, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const o = s(i, ["enableWidget"]);
  return o != null && r(n, ["enableWidget"], o), n;
}
function WT(i) {
  const n = {};
  if (s(i, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (s(i, ["blockingConfidence"]) !== void 0)
    throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  const o = s(i, [
    "timeRangeFilter"
  ]);
  return o != null && r(n, ["timeRangeFilter"], o), n;
}
function $T(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  return n !== void 0 && f != null && r(n, ["_query", "pageToken"], f), o;
}
function jT(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  return n !== void 0 && f != null && r(n, ["_query", "pageToken"], f), o;
}
function eS(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && $T(o, n), n;
}
function tS(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && jT(o, n), n;
}
function nS(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, [
    "cachedContents"
  ]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["cachedContents"], d);
  }
  return n;
}
function iS(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, [
    "cachedContents"
  ]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["cachedContents"], d);
  }
  return n;
}
function lS(i) {
  const n = {}, o = s(i, [
    "mediaResolution"
  ]);
  o != null && r(n, ["mediaResolution"], o);
  const u = s(i, [
    "codeExecutionResult"
  ]);
  u != null && r(n, ["codeExecutionResult"], u);
  const f = s(i, [
    "executableCode"
  ]);
  f != null && r(n, ["executableCode"], f);
  const d = s(i, ["fileData"]);
  d != null && r(n, ["fileData"], JT(d));
  const m = s(i, ["functionCall"]);
  m != null && r(n, ["functionCall"], kT(m));
  const g = s(i, [
    "functionResponse"
  ]);
  g != null && r(n, ["functionResponse"], g);
  const y = s(i, ["inlineData"]);
  y != null && r(n, ["inlineData"], GT(y));
  const h = s(i, ["text"]);
  h != null && r(n, ["text"], h);
  const v = s(i, ["thought"]);
  v != null && r(n, ["thought"], v);
  const S = s(i, [
    "thoughtSignature"
  ]);
  S != null && r(n, ["thoughtSignature"], S);
  const _ = s(i, [
    "videoMetadata"
  ]);
  return _ != null && r(n, ["videoMetadata"], _), n;
}
function oS(i) {
  const n = {}, o = s(i, [
    "functionCallingConfig"
  ]);
  o != null && r(n, ["functionCallingConfig"], OT(o));
  const u = s(i, [
    "retrievalConfig"
  ]);
  return u != null && r(n, ["retrievalConfig"], u), n;
}
function aS(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let v = o;
    Array.isArray(v) && (v = v.map((S) => S)), r(n, ["functionDeclarations"], v);
  }
  if (s(i, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const u = s(i, [
    "googleSearchRetrieval"
  ]);
  u != null && r(n, ["googleSearchRetrieval"], u);
  const f = s(i, ["computerUse"]);
  f != null && r(n, ["computerUse"], f);
  const d = s(i, ["fileSearch"]);
  d != null && r(n, ["fileSearch"], d);
  const m = s(i, [
    "codeExecution"
  ]);
  if (m != null && r(n, ["codeExecution"], m), s(i, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = s(i, ["googleMaps"]);
  g != null && r(n, ["googleMaps"], ZT(g));
  const y = s(i, ["googleSearch"]);
  y != null && r(n, ["googleSearch"], WT(y));
  const h = s(i, ["urlContext"]);
  return h != null && r(n, ["urlContext"], h), n;
}
function uS(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let S = o;
    Array.isArray(S) && (S = S.map((_) => KT(_))), r(n, ["functionDeclarations"], S);
  }
  const u = s(i, ["retrieval"]);
  u != null && r(n, ["retrieval"], u);
  const f = s(i, [
    "googleSearchRetrieval"
  ]);
  f != null && r(n, ["googleSearchRetrieval"], f);
  const d = s(i, ["computerUse"]);
  if (d != null && r(n, ["computerUse"], d), s(i, ["fileSearch"]) !== void 0)
    throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const m = s(i, [
    "codeExecution"
  ]);
  m != null && r(n, ["codeExecution"], m);
  const g = s(i, [
    "enterpriseWebSearch"
  ]);
  g != null && r(n, ["enterpriseWebSearch"], g);
  const y = s(i, ["googleMaps"]);
  y != null && r(n, ["googleMaps"], y);
  const h = s(i, ["googleSearch"]);
  h != null && r(n, ["googleSearch"], h);
  const v = s(i, ["urlContext"]);
  return v != null && r(n, ["urlContext"], v), n;
}
function sS(i, n) {
  const o = {}, u = s(i, ["ttl"]);
  n !== void 0 && u != null && r(n, ["ttl"], u);
  const f = s(i, ["expireTime"]);
  return n !== void 0 && f != null && r(n, ["expireTime"], f), o;
}
function rS(i, n) {
  const o = {}, u = s(i, ["ttl"]);
  n !== void 0 && u != null && r(n, ["ttl"], u);
  const f = s(i, ["expireTime"]);
  return n !== void 0 && f != null && r(n, ["expireTime"], f), o;
}
function fS(i, n) {
  const o = {}, u = s(n, ["name"]);
  u != null && r(o, ["_url", "name"], sn(i, u));
  const f = s(n, ["config"]);
  return f != null && sS(f, o), o;
}
function cS(i, n) {
  const o = {}, u = s(n, ["name"]);
  u != null && r(o, ["_url", "name"], sn(i, u));
  const f = s(n, ["config"]);
  return f != null && rS(f, o), o;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class dS extends un {
  constructor(n) {
    super(), this.apiClient = n, this.list = async (o = {}) => new ii(an.PAGED_ITEM_CACHED_CONTENTS, (u) => this.listInternal(u), await this.listInternal(o), o);
  }
  /**
   * Creates a cached contents resource.
   *
   * @remarks
   * Context caching is only supported for specific models. See [Gemini
   * Developer API reference](https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
   * and [Vertex AI reference](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
   * for more information.
   *
   * @param params - The parameters for the create request.
   * @return The created cached content.
   *
   * @example
   * ```ts
   * const contents = ...; // Initialize the content to cache.
   * const response = await ai.caches.create({
   *   model: 'gemini-2.0-flash-001',
   *   config: {
   *    'contents': contents,
   *    'displayName': 'test cache',
   *    'systemInstruction': 'What is the sum of the two pdfs?',
   *    'ttl': '86400s',
   *  }
   * });
   * ```
   */
  async create(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = zT(this.apiClient, n);
      return g = Y("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => v);
    } else {
      const h = bT(this.apiClient, n);
      return g = Y("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => v);
    }
  }
  /**
   * Gets cached content configurations.
   *
   * @param params - The parameters for the get request.
   * @return The cached content.
   *
   * @example
   * ```ts
   * await ai.caches.get({name: '...'}); // The server-generated resource name.
   * ```
   */
  async get(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = QT(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => v);
    } else {
      const h = XT(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => v);
    }
  }
  /**
   * Deletes cached content.
   *
   * @param params - The parameters for the delete request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.caches.delete({name: '...'}); // The server-generated resource name.
   * ```
   */
  async delete(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = BT(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "DELETE",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = FT(v), _ = new Am();
        return Object.assign(_, S), _;
      });
    } else {
      const h = PT(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "DELETE",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = YT(v), _ = new Am();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Updates cached content configurations.
   *
   * @param params - The parameters for the update request.
   * @return The updated cached content.
   *
   * @example
   * ```ts
   * const response = await ai.caches.update({
   *   name: '...',  // The server-generated resource name.
   *   config: {'ttl': '7600s'}
   * });
   * ```
   */
  async update(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = cS(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "PATCH",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => v);
    } else {
      const h = fS(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "PATCH",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => v);
    }
  }
  async listInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = tS(n);
      return g = Y("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = iS(v), _ = new Mm();
        return Object.assign(_, S), _;
      });
    } else {
      const h = eS(n);
      return g = Y("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = nS(v), _ = new Mm();
        return Object.assign(_, S), _;
      });
    }
  }
}
function wm(i) {
  var n = typeof Symbol == "function" && Symbol.iterator, o = n && i[n], u = 0;
  if (o) return o.call(i);
  if (i && typeof i.length == "number") return {
    next: function () {
      return i && u >= i.length && (i = void 0), { value: i && i[u++], done: !i };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qe(i) {
  return this instanceof qe ? (this.v = i, this) : new qe(i);
}
function Ji(i, n, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = o.apply(i, n || []), f, d = [];
  return f = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), g("next"), g("throw"), g("return", m), f[Symbol.asyncIterator] = function () {
    return this;
  }, f;
  function m(R) {
    return function (V) {
      return Promise.resolve(V).then(R, S);
    };
  }
  function g(R, V) {
    u[R] && (f[R] = function (b) {
      return new Promise(function (F, k) {
        d.push([R, b, F, k]) > 1 || y(R, b);
      });
    }, V && (f[R] = V(f[R])));
  }
  function y(R, V) {
    try {
      h(u[R](V));
    } catch (b) {
      _(d[0][3], b);
    }
  }
  function h(R) {
    R.value instanceof qe ? Promise.resolve(R.value.v).then(v, S) : _(d[0][2], R);
  }
  function v(R) {
    y("next", R);
  }
  function S(R) {
    y("throw", R);
  }
  function _(R, V) {
    R(V), d.shift(), d.length && y(d[0][0], d[0][1]);
  }
}
function kl(i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = i[Symbol.asyncIterator], o;
  return n ? n.call(i) : (i = typeof wm == "function" ? wm(i) : i[Symbol.iterator](), o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function () {
    return this;
  }, o);
  function u(d) {
    o[d] = i[d] && function (m) {
      return new Promise(function (g, y) {
        m = i[d](m), f(g, y, m.done, m.value);
      });
    };
  }
  function f(d, m, g, y) {
    Promise.resolve(y).then(function (h) {
      d({ value: h, done: g });
    }, m);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function pS(i) {
  var n;
  if (i.candidates == null || i.candidates.length === 0)
    return !1;
  const o = (n = i.candidates[0]) === null || n === void 0 ? void 0 : n.content;
  return o === void 0 ? !1 : uh(o);
}
function uh(i) {
  if (i.parts === void 0 || i.parts.length === 0)
    return !1;
  for (const n of i.parts)
    if (n === void 0 || Object.keys(n).length === 0)
      return !1;
  return !0;
}
function mS(i) {
  if (i.length !== 0) {
    for (const n of i)
      if (n.role !== "user" && n.role !== "model")
        throw new Error(`Role must be user or model, but got ${n.role}.`);
  }
}
function qm(i) {
  if (i === void 0 || i.length === 0)
    return [];
  const n = [], o = i.length;
  let u = 0;
  for (; u < o;)
    if (i[u].role === "user")
      n.push(i[u]), u++;
    else {
      const f = [];
      let d = !0;
      for (; u < o && i[u].role === "model";)
        f.push(i[u]), d && !uh(i[u]) && (d = !1), u++;
      d ? n.push(...f) : n.pop();
    }
  return n;
}
class hS {
  constructor(n, o) {
    this.modelsModule = n, this.apiClient = o;
  }
  /**
   * Creates a new chat session.
   *
   * @remarks
   * The config in the params will be used for all requests within the chat
   * session unless overridden by a per-request `config` in
   * @see {@link types.SendMessageParameters#config}.
   *
   * @param params - Parameters for creating a chat session.
   * @returns A new chat session.
   *
   * @example
   * ```ts
   * const chat = ai.chats.create({
   *   model: 'gemini-2.0-flash'
   *   config: {
   *     temperature: 0.5,
   *     maxOutputTokens: 1024,
   *   }
   * });
   * ```
   */
  create(n) {
    return new gS(
      this.apiClient,
      this.modelsModule,
      n.model,
      n.config,
      // Deep copy the history to avoid mutating the history outside of the
      // chat session.
      structuredClone(n.history)
    );
  }
}
class gS {
  constructor(n, o, u, f = {}, d = []) {
    this.apiClient = n, this.modelsModule = o, this.model = u, this.config = f, this.history = d, this.sendPromise = Promise.resolve(), mS(d);
  }
  /**
   * Sends a message to the model and returns the response.
   *
   * @remarks
   * This method will wait for the previous message to be processed before
   * sending the next message.
   *
   * @see {@link Chat#sendMessageStream} for streaming method.
   * @param params - parameters for sending messages within a chat session.
   * @returns The model's response.
   *
   * @example
   * ```ts
   * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
   * const response = await chat.sendMessage({
   *   message: 'Why is the sky blue?'
   * });
   * console.log(response.text);
   * ```
   */
  async sendMessage(n) {
    var o;
    await this.sendPromise;
    const u = et(n.message), f = this.modelsModule.generateContent({
      model: this.model,
      contents: this.getHistory(!0).concat(u),
      config: (o = n.config) !== null && o !== void 0 ? o : this.config
    });
    return this.sendPromise = (async () => {
      var d, m, g;
      const y = await f, h = (m = (d = y.candidates) === null || d === void 0 ? void 0 : d[0]) === null || m === void 0 ? void 0 : m.content, v = y.automaticFunctionCallingHistory, S = this.getHistory(!0).length;
      let _ = [];
      v != null && (_ = (g = v.slice(S)) !== null && g !== void 0 ? g : []);
      const R = h ? [h] : [];
      this.recordHistory(u, R, _);
    })(), await this.sendPromise.catch(() => {
      this.sendPromise = Promise.resolve();
    }), f;
  }
  /**
   * Sends a message to the model and returns the response in chunks.
   *
   * @remarks
   * This method will wait for the previous message to be processed before
   * sending the next message.
   *
   * @see {@link Chat#sendMessage} for non-streaming method.
   * @param params - parameters for sending the message.
   * @return The model's response.
   *
   * @example
   * ```ts
   * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
   * const response = await chat.sendMessageStream({
   *   message: 'Why is the sky blue?'
   * });
   * for await (const chunk of response) {
   *   console.log(chunk.text);
   * }
   * ```
   */
  async sendMessageStream(n) {
    var o;
    await this.sendPromise;
    const u = et(n.message), f = this.modelsModule.generateContentStream({
      model: this.model,
      contents: this.getHistory(!0).concat(u),
      config: (o = n.config) !== null && o !== void 0 ? o : this.config
    });
    this.sendPromise = f.then(() => {
    }).catch(() => {
    });
    const d = await f;
    return this.processStreamResponse(d, u);
  }
  /**
   * Returns the chat history.
   *
   * @remarks
   * The history is a list of contents alternating between user and model.
   *
   * There are two types of history:
   * - The `curated history` contains only the valid turns between user and
   * model, which will be included in the subsequent requests sent to the model.
   * - The `comprehensive history` contains all turns, including invalid or
   *   empty model outputs, providing a complete record of the history.
   *
   * The history is updated after receiving the response from the model,
   * for streaming response, it means receiving the last chunk of the response.
   *
   * The `comprehensive history` is returned by default. To get the `curated
   * history`, set the `curated` parameter to `true`.
   *
   * @param curated - whether to return the curated history or the comprehensive
   *     history.
   * @return History contents alternating between user and model for the entire
   *     chat session.
   */
  getHistory(n = !1) {
    const o = n ? qm(this.history) : this.history;
    return structuredClone(o);
  }
  processStreamResponse(n, o) {
    var u, f;
    return Ji(this, arguments, function* () {
      var m, g, y, h;
      const v = [];
      try {
        for (var S = !0, _ = kl(n), R; R = yield qe(_.next()), m = R.done, !m; S = !0) {
          h = R.value, S = !1;
          const V = h;
          if (pS(V)) {
            const b = (f = (u = V.candidates) === null || u === void 0 ? void 0 : u[0]) === null || f === void 0 ? void 0 : f.content;
            b !== void 0 && v.push(b);
          }
          yield yield qe(V);
        }
      } catch (V) {
        g = { error: V };
      } finally {
        try {
          !S && !m && (y = _.return) && (yield qe(y.call(_)));
        } finally {
          if (g) throw g.error;
        }
      }
      this.recordHistory(o, v);
    });
  }
  recordHistory(n, o, u) {
    let f = [];
    o.length > 0 && o.every((d) => d.role !== void 0) ? f = o : f.push({
      role: "model",
      parts: []
    }), u && u.length > 0 ? this.history.push(...qm(u)) : this.history.push(n), this.history.push(...f);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ya extends Error {
  constructor(n) {
    super(n.message), this.name = "ApiError", this.status = n.status, Object.setPrototypeOf(this, ya.prototype);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function yS(i) {
  const n = {}, o = s(i, ["file"]);
  return o != null && r(n, ["file"], o), n;
}
function vS(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
function TS(i) {
  const n = {}, o = s(i, ["name"]);
  return o != null && r(n, ["_url", "file"], eh(o)), n;
}
function SS(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
function ES(i) {
  const n = {}, o = s(i, ["name"]);
  return o != null && r(n, ["_url", "file"], eh(o)), n;
}
function _S(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  return n !== void 0 && f != null && r(n, ["_query", "pageToken"], f), o;
}
function CS(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && _S(o, n), n;
}
function AS(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, ["files"]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["files"], d);
  }
  return n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class MS extends un {
  constructor(n) {
    super(), this.apiClient = n, this.list = async (o = {}) => new ii(an.PAGED_ITEM_FILES, (u) => this.listInternal(u), await this.listInternal(o), o);
  }
  /**
   * Uploads a file asynchronously to the Gemini API.
   * This method is not available in Vertex AI.
   * Supported upload sources:
   * - Node.js: File path (string) or Blob object.
   * - Browser: Blob object (e.g., File).
   *
   * @remarks
   * The `mimeType` can be specified in the `config` parameter. If omitted:
   *  - For file path (string) inputs, the `mimeType` will be inferred from the
   *     file extension.
   *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
   *     property.
   * Somex eamples for file extension to mimeType mapping:
   * .txt -> text/plain
   * .json -> application/json
   * .jpg  -> image/jpeg
   * .png -> image/png
   * .mp3 -> audio/mpeg
   * .mp4 -> video/mp4
   *
   * This section can contain multiple paragraphs and code examples.
   *
   * @param params - Optional parameters specified in the
   *        `types.UploadFileParameters` interface.
   *         @see {@link types.UploadFileParameters#config} for the optional
   *         config in the parameters.
   * @return A promise that resolves to a `types.File` object.
   * @throws An error if called on a Vertex AI client.
   * @throws An error if the `mimeType` is not provided and can not be inferred,
   * the `mimeType` can be provided in the `params.config` parameter.
   * @throws An error occurs if a suitable upload location cannot be established.
   *
   * @example
   * The following code uploads a file to Gemini API.
   *
   * ```ts
   * const file = await ai.files.upload({file: 'file.txt', config: {
   *   mimeType: 'text/plain',
   * }});
   * console.log(file.name);
   * ```
   */
  async upload(n) {
    if (this.apiClient.isVertexAI())
      throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
    return this.apiClient.uploadFile(n.file, n.config).then((o) => o);
  }
  /**
   * Downloads a remotely stored file asynchronously to a location specified in
   * the `params` object. This method only works on Node environment, to
   * download files in the browser, use a browser compliant method like an <a>
   * tag.
   *
   * @param params - The parameters for the download request.
   *
   * @example
   * The following code downloads an example file named "files/mehozpxf877d" as
   * "file.txt".
   *
   * ```ts
   * await ai.files.download({file: file.name, downloadPath: 'file.txt'});
   * ```
   */
  async download(n) {
    await this.apiClient.downloadFile(n);
  }
  async listInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = CS(n);
      return d = Y("files", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => {
        const h = AS(y), v = new Iv();
        return Object.assign(v, h), v;
      });
    }
  }
  async createInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = yS(n);
      return d = Y("upload/v1beta/files", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = vS(y), v = new Uv();
        return Object.assign(v, h), v;
      });
    }
  }
  /**
   * Retrieves the file information from the service.
   *
   * @param params - The parameters for the get request
   * @return The Promise that resolves to the types.File object requested.
   *
   * @example
   * ```ts
   * const config: GetFileParameters = {
   *   name: fileName,
   * };
   * file = await ai.files.get(config);
   * console.log(file.name);
   * ```
   */
  async get(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = ES(n);
      return d = Y("files/{file}", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => y);
    }
  }
  /**
   * Deletes a remotely stored file.
   *
   * @param params - The parameters for the delete request.
   * @return The DeleteFileResponse, the response for the delete method.
   *
   * @example
   * The following code deletes an example file named "files/mehozpxf877d".
   *
   * ```ts
   * await ai.files.delete({name: file.name});
   * ```
   */
  async delete(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = TS(n);
      return d = Y("files/{file}", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "DELETE",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => {
        const h = SS(y), v = new xv();
        return Object.assign(v, h), v;
      });
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function da(i) {
  const n = {}, o = s(i, ["data"]);
  if (o != null && r(n, ["data"], o), s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function RS(i) {
  const n = {}, o = s(i, ["parts"]);
  if (o != null) {
    let f = o;
    Array.isArray(f) && (f = f.map((d) => YS(d))), r(n, ["parts"], f);
  }
  const u = s(i, ["role"]);
  return u != null && r(n, ["role"], u), n;
}
function NS(i) {
  const n = {};
  if (s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const o = s(i, ["fileUri"]);
  o != null && r(n, ["fileUri"], o);
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function DS(i) {
  const n = {}, o = s(i, ["id"]);
  o != null && r(n, ["id"], o);
  const u = s(i, ["args"]);
  u != null && r(n, ["args"], u);
  const f = s(i, ["name"]);
  if (f != null && r(n, ["name"], f), s(i, ["partialArgs"]) !== void 0)
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (s(i, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return n;
}
function IS(i) {
  const n = {};
  if (s(i, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const o = s(i, ["description"]);
  o != null && r(n, ["description"], o);
  const u = s(i, ["name"]);
  u != null && r(n, ["name"], u);
  const f = s(i, ["parameters"]);
  f != null && r(n, ["parameters"], f);
  const d = s(i, [
    "parametersJsonSchema"
  ]);
  d != null && r(n, ["parametersJsonSchema"], d);
  const m = s(i, ["response"]);
  m != null && r(n, ["response"], m);
  const g = s(i, [
    "responseJsonSchema"
  ]);
  return g != null && r(n, ["responseJsonSchema"], g), n;
}
function US(i) {
  const n = {}, o = s(i, [
    "modelSelectionConfig"
  ]);
  o != null && r(n, ["modelConfig"], o);
  const u = s(i, [
    "responseJsonSchema"
  ]);
  u != null && r(n, ["responseJsonSchema"], u);
  const f = s(i, [
    "audioTimestamp"
  ]);
  f != null && r(n, ["audioTimestamp"], f);
  const d = s(i, [
    "candidateCount"
  ]);
  d != null && r(n, ["candidateCount"], d);
  const m = s(i, [
    "enableAffectiveDialog"
  ]);
  m != null && r(n, ["enableAffectiveDialog"], m);
  const g = s(i, [
    "frequencyPenalty"
  ]);
  g != null && r(n, ["frequencyPenalty"], g);
  const y = s(i, ["logprobs"]);
  y != null && r(n, ["logprobs"], y);
  const h = s(i, [
    "maxOutputTokens"
  ]);
  h != null && r(n, ["maxOutputTokens"], h);
  const v = s(i, [
    "mediaResolution"
  ]);
  v != null && r(n, ["mediaResolution"], v);
  const S = s(i, [
    "presencePenalty"
  ]);
  S != null && r(n, ["presencePenalty"], S);
  const _ = s(i, [
    "responseLogprobs"
  ]);
  _ != null && r(n, ["responseLogprobs"], _);
  const R = s(i, [
    "responseMimeType"
  ]);
  R != null && r(n, ["responseMimeType"], R);
  const V = s(i, [
    "responseModalities"
  ]);
  V != null && r(n, ["responseModalities"], V);
  const b = s(i, [
    "responseSchema"
  ]);
  b != null && r(n, ["responseSchema"], b);
  const F = s(i, [
    "routingConfig"
  ]);
  F != null && r(n, ["routingConfig"], F);
  const k = s(i, ["seed"]);
  k != null && r(n, ["seed"], k);
  const X = s(i, ["speechConfig"]);
  X != null && r(n, ["speechConfig"], sh(X));
  const z = s(i, [
    "stopSequences"
  ]);
  z != null && r(n, ["stopSequences"], z);
  const Z = s(i, ["temperature"]);
  Z != null && r(n, ["temperature"], Z);
  const te = s(i, [
    "thinkingConfig"
  ]);
  te != null && r(n, ["thinkingConfig"], te);
  const j = s(i, ["topK"]);
  j != null && r(n, ["topK"], j);
  const J = s(i, ["topP"]);
  if (J != null && r(n, ["topP"], J), s(i, ["enableEnhancedCivicAnswers"]) !== void 0)
    throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  return n;
}
function xS(i) {
  const n = {};
  if (s(i, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const o = s(i, ["enableWidget"]);
  return o != null && r(n, ["enableWidget"], o), n;
}
function wS(i) {
  const n = {};
  if (s(i, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (s(i, ["blockingConfidence"]) !== void 0)
    throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  const o = s(i, [
    "timeRangeFilter"
  ]);
  return o != null && r(n, ["timeRangeFilter"], o), n;
}
function qS(i, n) {
  const o = {}, u = s(i, [
    "generationConfig"
  ]);
  n !== void 0 && u != null && r(n, ["setup", "generationConfig"], u);
  const f = s(i, [
    "responseModalities"
  ]);
  n !== void 0 && f != null && r(n, ["setup", "generationConfig", "responseModalities"], f);
  const d = s(i, ["temperature"]);
  n !== void 0 && d != null && r(n, ["setup", "generationConfig", "temperature"], d);
  const m = s(i, ["topP"]);
  n !== void 0 && m != null && r(n, ["setup", "generationConfig", "topP"], m);
  const g = s(i, ["topK"]);
  n !== void 0 && g != null && r(n, ["setup", "generationConfig", "topK"], g);
  const y = s(i, [
    "maxOutputTokens"
  ]);
  n !== void 0 && y != null && r(n, ["setup", "generationConfig", "maxOutputTokens"], y);
  const h = s(i, [
    "mediaResolution"
  ]);
  n !== void 0 && h != null && r(n, ["setup", "generationConfig", "mediaResolution"], h);
  const v = s(i, ["seed"]);
  n !== void 0 && v != null && r(n, ["setup", "generationConfig", "seed"], v);
  const S = s(i, ["speechConfig"]);
  n !== void 0 && S != null && r(n, ["setup", "generationConfig", "speechConfig"], ur(S));
  const _ = s(i, [
    "thinkingConfig"
  ]);
  n !== void 0 && _ != null && r(n, ["setup", "generationConfig", "thinkingConfig"], _);
  const R = s(i, [
    "enableAffectiveDialog"
  ]);
  n !== void 0 && R != null && r(n, ["setup", "generationConfig", "enableAffectiveDialog"], R);
  const V = s(i, [
    "systemInstruction"
  ]);
  n !== void 0 && V != null && r(n, ["setup", "systemInstruction"], RS(et(V)));
  const b = s(i, ["tools"]);
  if (n !== void 0 && b != null) {
    let j = Ki(b);
    Array.isArray(j) && (j = j.map((J) => JS(Oi(J)))), r(n, ["setup", "tools"], j);
  }
  const F = s(i, [
    "sessionResumption"
  ]);
  n !== void 0 && F != null && r(n, ["setup", "sessionResumption"], FS(F));
  const k = s(i, [
    "inputAudioTranscription"
  ]);
  n !== void 0 && k != null && r(n, ["setup", "inputAudioTranscription"], k);
  const X = s(i, [
    "outputAudioTranscription"
  ]);
  n !== void 0 && X != null && r(n, ["setup", "outputAudioTranscription"], X);
  const z = s(i, [
    "realtimeInputConfig"
  ]);
  n !== void 0 && z != null && r(n, ["setup", "realtimeInputConfig"], z);
  const Z = s(i, [
    "contextWindowCompression"
  ]);
  n !== void 0 && Z != null && r(n, ["setup", "contextWindowCompression"], Z);
  const te = s(i, ["proactivity"]);
  return n !== void 0 && te != null && r(n, ["setup", "proactivity"], te), o;
}
function LS(i, n) {
  const o = {}, u = s(i, [
    "generationConfig"
  ]);
  n !== void 0 && u != null && r(n, ["setup", "generationConfig"], US(u));
  const f = s(i, [
    "responseModalities"
  ]);
  n !== void 0 && f != null && r(n, ["setup", "generationConfig", "responseModalities"], f);
  const d = s(i, ["temperature"]);
  n !== void 0 && d != null && r(n, ["setup", "generationConfig", "temperature"], d);
  const m = s(i, ["topP"]);
  n !== void 0 && m != null && r(n, ["setup", "generationConfig", "topP"], m);
  const g = s(i, ["topK"]);
  n !== void 0 && g != null && r(n, ["setup", "generationConfig", "topK"], g);
  const y = s(i, [
    "maxOutputTokens"
  ]);
  n !== void 0 && y != null && r(n, ["setup", "generationConfig", "maxOutputTokens"], y);
  const h = s(i, [
    "mediaResolution"
  ]);
  n !== void 0 && h != null && r(n, ["setup", "generationConfig", "mediaResolution"], h);
  const v = s(i, ["seed"]);
  n !== void 0 && v != null && r(n, ["setup", "generationConfig", "seed"], v);
  const S = s(i, ["speechConfig"]);
  n !== void 0 && S != null && r(n, ["setup", "generationConfig", "speechConfig"], sh(ur(S)));
  const _ = s(i, [
    "thinkingConfig"
  ]);
  n !== void 0 && _ != null && r(n, ["setup", "generationConfig", "thinkingConfig"], _);
  const R = s(i, [
    "enableAffectiveDialog"
  ]);
  n !== void 0 && R != null && r(n, ["setup", "generationConfig", "enableAffectiveDialog"], R);
  const V = s(i, [
    "systemInstruction"
  ]);
  n !== void 0 && V != null && r(n, ["setup", "systemInstruction"], et(V));
  const b = s(i, ["tools"]);
  if (n !== void 0 && b != null) {
    let j = Ki(b);
    Array.isArray(j) && (j = j.map((J) => kS(Oi(J)))), r(n, ["setup", "tools"], j);
  }
  const F = s(i, [
    "sessionResumption"
  ]);
  n !== void 0 && F != null && r(n, ["setup", "sessionResumption"], F);
  const k = s(i, [
    "inputAudioTranscription"
  ]);
  n !== void 0 && k != null && r(n, ["setup", "inputAudioTranscription"], k);
  const X = s(i, [
    "outputAudioTranscription"
  ]);
  n !== void 0 && X != null && r(n, ["setup", "outputAudioTranscription"], X);
  const z = s(i, [
    "realtimeInputConfig"
  ]);
  n !== void 0 && z != null && r(n, ["setup", "realtimeInputConfig"], z);
  const Z = s(i, [
    "contextWindowCompression"
  ]);
  n !== void 0 && Z != null && r(n, ["setup", "contextWindowCompression"], Z);
  const te = s(i, ["proactivity"]);
  return n !== void 0 && te != null && r(n, ["setup", "proactivity"], te), o;
}
function GS(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["setup", "model"], Te(i, u));
  const f = s(n, ["config"]);
  return f != null && r(o, ["config"], qS(f, o)), o;
}
function HS(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["setup", "model"], Te(i, u));
  const f = s(n, ["config"]);
  return f != null && r(o, ["config"], LS(f, o)), o;
}
function VS(i) {
  const n = {}, o = s(i, [
    "musicGenerationConfig"
  ]);
  return o != null && r(n, ["musicGenerationConfig"], o), n;
}
function bS(i) {
  const n = {}, o = s(i, [
    "weightedPrompts"
  ]);
  if (o != null) {
    let u = o;
    Array.isArray(u) && (u = u.map((f) => f)), r(n, ["weightedPrompts"], u);
  }
  return n;
}
function zS(i) {
  const n = {}, o = s(i, ["media"]);
  if (o != null) {
    let h = Qm(o);
    Array.isArray(h) && (h = h.map((v) => da(v))), r(n, ["mediaChunks"], h);
  }
  const u = s(i, ["audio"]);
  u != null && r(n, ["audio"], da(Wm(u)));
  const f = s(i, [
    "audioStreamEnd"
  ]);
  f != null && r(n, ["audioStreamEnd"], f);
  const d = s(i, ["video"]);
  d != null && r(n, ["video"], da(Zm(d)));
  const m = s(i, ["text"]);
  m != null && r(n, ["text"], m);
  const g = s(i, [
    "activityStart"
  ]);
  g != null && r(n, ["activityStart"], g);
  const y = s(i, ["activityEnd"]);
  return y != null && r(n, ["activityEnd"], y), n;
}
function PS(i) {
  const n = {}, o = s(i, ["media"]);
  if (o != null) {
    let h = Qm(o);
    Array.isArray(h) && (h = h.map((v) => v)), r(n, ["mediaChunks"], h);
  }
  const u = s(i, ["audio"]);
  u != null && r(n, ["audio"], Wm(u));
  const f = s(i, [
    "audioStreamEnd"
  ]);
  f != null && r(n, ["audioStreamEnd"], f);
  const d = s(i, ["video"]);
  d != null && r(n, ["video"], Zm(d));
  const m = s(i, ["text"]);
  m != null && r(n, ["text"], m);
  const g = s(i, [
    "activityStart"
  ]);
  g != null && r(n, ["activityStart"], g);
  const y = s(i, ["activityEnd"]);
  return y != null && r(n, ["activityEnd"], y), n;
}
function BS(i) {
  const n = {}, o = s(i, [
    "setupComplete"
  ]);
  o != null && r(n, ["setupComplete"], o);
  const u = s(i, [
    "serverContent"
  ]);
  u != null && r(n, ["serverContent"], u);
  const f = s(i, ["toolCall"]);
  f != null && r(n, ["toolCall"], f);
  const d = s(i, [
    "toolCallCancellation"
  ]);
  d != null && r(n, ["toolCallCancellation"], d);
  const m = s(i, [
    "usageMetadata"
  ]);
  m != null && r(n, ["usageMetadata"], OS(m));
  const g = s(i, ["goAway"]);
  g != null && r(n, ["goAway"], g);
  const y = s(i, [
    "sessionResumptionUpdate"
  ]);
  return y != null && r(n, ["sessionResumptionUpdate"], y), n;
}
function YS(i) {
  const n = {}, o = s(i, [
    "mediaResolution"
  ]);
  o != null && r(n, ["mediaResolution"], o);
  const u = s(i, [
    "codeExecutionResult"
  ]);
  u != null && r(n, ["codeExecutionResult"], u);
  const f = s(i, [
    "executableCode"
  ]);
  f != null && r(n, ["executableCode"], f);
  const d = s(i, ["fileData"]);
  d != null && r(n, ["fileData"], NS(d));
  const m = s(i, ["functionCall"]);
  m != null && r(n, ["functionCall"], DS(m));
  const g = s(i, [
    "functionResponse"
  ]);
  g != null && r(n, ["functionResponse"], g);
  const y = s(i, ["inlineData"]);
  y != null && r(n, ["inlineData"], da(y));
  const h = s(i, ["text"]);
  h != null && r(n, ["text"], h);
  const v = s(i, ["thought"]);
  v != null && r(n, ["thought"], v);
  const S = s(i, [
    "thoughtSignature"
  ]);
  S != null && r(n, ["thoughtSignature"], S);
  const _ = s(i, [
    "videoMetadata"
  ]);
  return _ != null && r(n, ["videoMetadata"], _), n;
}
function FS(i) {
  const n = {}, o = s(i, ["handle"]);
  if (o != null && r(n, ["handle"], o), s(i, ["transparent"]) !== void 0)
    throw new Error("transparent parameter is not supported in Gemini API.");
  return n;
}
function sh(i) {
  const n = {}, o = s(i, ["languageCode"]);
  o != null && r(n, ["languageCode"], o);
  const u = s(i, ["voiceConfig"]);
  if (u != null && r(n, ["voiceConfig"], u), s(i, ["multiSpeakerVoiceConfig"]) !== void 0)
    throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  return n;
}
function JS(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let v = o;
    Array.isArray(v) && (v = v.map((S) => S)), r(n, ["functionDeclarations"], v);
  }
  if (s(i, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const u = s(i, [
    "googleSearchRetrieval"
  ]);
  u != null && r(n, ["googleSearchRetrieval"], u);
  const f = s(i, ["computerUse"]);
  f != null && r(n, ["computerUse"], f);
  const d = s(i, ["fileSearch"]);
  d != null && r(n, ["fileSearch"], d);
  const m = s(i, [
    "codeExecution"
  ]);
  if (m != null && r(n, ["codeExecution"], m), s(i, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = s(i, ["googleMaps"]);
  g != null && r(n, ["googleMaps"], xS(g));
  const y = s(i, ["googleSearch"]);
  y != null && r(n, ["googleSearch"], wS(y));
  const h = s(i, ["urlContext"]);
  return h != null && r(n, ["urlContext"], h), n;
}
function kS(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let S = o;
    Array.isArray(S) && (S = S.map((_) => IS(_))), r(n, ["functionDeclarations"], S);
  }
  const u = s(i, ["retrieval"]);
  u != null && r(n, ["retrieval"], u);
  const f = s(i, [
    "googleSearchRetrieval"
  ]);
  f != null && r(n, ["googleSearchRetrieval"], f);
  const d = s(i, ["computerUse"]);
  if (d != null && r(n, ["computerUse"], d), s(i, ["fileSearch"]) !== void 0)
    throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const m = s(i, [
    "codeExecution"
  ]);
  m != null && r(n, ["codeExecution"], m);
  const g = s(i, [
    "enterpriseWebSearch"
  ]);
  g != null && r(n, ["enterpriseWebSearch"], g);
  const y = s(i, ["googleMaps"]);
  y != null && r(n, ["googleMaps"], y);
  const h = s(i, ["googleSearch"]);
  h != null && r(n, ["googleSearch"], h);
  const v = s(i, ["urlContext"]);
  return v != null && r(n, ["urlContext"], v), n;
}
function OS(i) {
  const n = {}, o = s(i, [
    "promptTokenCount"
  ]);
  o != null && r(n, ["promptTokenCount"], o);
  const u = s(i, [
    "cachedContentTokenCount"
  ]);
  u != null && r(n, ["cachedContentTokenCount"], u);
  const f = s(i, [
    "candidatesTokenCount"
  ]);
  f != null && r(n, ["responseTokenCount"], f);
  const d = s(i, [
    "toolUsePromptTokenCount"
  ]);
  d != null && r(n, ["toolUsePromptTokenCount"], d);
  const m = s(i, [
    "thoughtsTokenCount"
  ]);
  m != null && r(n, ["thoughtsTokenCount"], m);
  const g = s(i, [
    "totalTokenCount"
  ]);
  g != null && r(n, ["totalTokenCount"], g);
  const y = s(i, [
    "promptTokensDetails"
  ]);
  if (y != null) {
    let R = y;
    Array.isArray(R) && (R = R.map((V) => V)), r(n, ["promptTokensDetails"], R);
  }
  const h = s(i, [
    "cacheTokensDetails"
  ]);
  if (h != null) {
    let R = h;
    Array.isArray(R) && (R = R.map((V) => V)), r(n, ["cacheTokensDetails"], R);
  }
  const v = s(i, [
    "candidatesTokensDetails"
  ]);
  if (v != null) {
    let R = v;
    Array.isArray(R) && (R = R.map((V) => V)), r(n, ["responseTokensDetails"], R);
  }
  const S = s(i, [
    "toolUsePromptTokensDetails"
  ]);
  if (S != null) {
    let R = S;
    Array.isArray(R) && (R = R.map((V) => V)), r(n, ["toolUsePromptTokensDetails"], R);
  }
  const _ = s(i, ["trafficType"]);
  return _ != null && r(n, ["trafficType"], _), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function KS(i) {
  const n = {}, o = s(i, ["data"]);
  if (o != null && r(n, ["data"], o), s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function XS(i) {
  const n = {}, o = s(i, ["content"]);
  o != null && r(n, ["content"], o);
  const u = s(i, [
    "citationMetadata"
  ]);
  u != null && r(n, ["citationMetadata"], QS(u));
  const f = s(i, ["tokenCount"]);
  f != null && r(n, ["tokenCount"], f);
  const d = s(i, ["finishReason"]);
  d != null && r(n, ["finishReason"], d);
  const m = s(i, ["avgLogprobs"]);
  m != null && r(n, ["avgLogprobs"], m);
  const g = s(i, [
    "groundingMetadata"
  ]);
  g != null && r(n, ["groundingMetadata"], g);
  const y = s(i, ["index"]);
  y != null && r(n, ["index"], y);
  const h = s(i, [
    "logprobsResult"
  ]);
  h != null && r(n, ["logprobsResult"], h);
  const v = s(i, [
    "safetyRatings"
  ]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((R) => R)), r(n, ["safetyRatings"], _);
  }
  const S = s(i, [
    "urlContextMetadata"
  ]);
  return S != null && r(n, ["urlContextMetadata"], S), n;
}
function QS(i) {
  const n = {}, o = s(i, ["citationSources"]);
  if (o != null) {
    let u = o;
    Array.isArray(u) && (u = u.map((f) => f)), r(n, ["citations"], u);
  }
  return n;
}
function ZS(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let d = wt(f);
    Array.isArray(d) && (d = d.map((m) => m)), r(o, ["contents"], d);
  }
  return o;
}
function WS(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["tokensInfo"]);
  if (u != null) {
    let f = u;
    Array.isArray(f) && (f = f.map((d) => d)), r(n, ["tokensInfo"], f);
  }
  return n;
}
function $S(i) {
  const n = {}, o = s(i, ["values"]);
  o != null && r(n, ["values"], o);
  const u = s(i, ["statistics"]);
  return u != null && r(n, ["statistics"], jS(u)), n;
}
function jS(i) {
  const n = {}, o = s(i, ["truncated"]);
  o != null && r(n, ["truncated"], o);
  const u = s(i, ["token_count"]);
  return u != null && r(n, ["tokenCount"], u), n;
}
function va(i) {
  const n = {}, o = s(i, ["parts"]);
  if (o != null) {
    let f = o;
    Array.isArray(f) && (f = f.map((d) => s_(d))), r(n, ["parts"], f);
  }
  const u = s(i, ["role"]);
  return u != null && r(n, ["role"], u), n;
}
function eE(i) {
  const n = {}, o = s(i, ["controlType"]);
  o != null && r(n, ["controlType"], o);
  const u = s(i, [
    "enableControlImageComputation"
  ]);
  return u != null && r(n, ["computeControl"], u), n;
}
function tE(i) {
  const n = {};
  if (s(i, ["systemInstruction"]) !== void 0)
    throw new Error("systemInstruction parameter is not supported in Gemini API.");
  if (s(i, ["tools"]) !== void 0)
    throw new Error("tools parameter is not supported in Gemini API.");
  if (s(i, ["generationConfig"]) !== void 0)
    throw new Error("generationConfig parameter is not supported in Gemini API.");
  return n;
}
function nE(i, n) {
  const o = {}, u = s(i, [
    "systemInstruction"
  ]);
  n !== void 0 && u != null && r(n, ["systemInstruction"], et(u));
  const f = s(i, ["tools"]);
  if (n !== void 0 && f != null) {
    let m = f;
    Array.isArray(m) && (m = m.map((g) => ph(g))), r(n, ["tools"], m);
  }
  const d = s(i, [
    "generationConfig"
  ]);
  return n !== void 0 && d != null && r(n, ["generationConfig"], KE(d)), o;
}
function iE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let m = wt(f);
    Array.isArray(m) && (m = m.map((g) => va(g))), r(o, ["contents"], m);
  }
  const d = s(n, ["config"]);
  return d != null && tE(d), o;
}
function lE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let m = wt(f);
    Array.isArray(m) && (m = m.map((g) => g)), r(o, ["contents"], m);
  }
  const d = s(n, ["config"]);
  return d != null && nE(d, o), o;
}
function oE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["totalTokens"]);
  u != null && r(n, ["totalTokens"], u);
  const f = s(i, [
    "cachedContentTokenCount"
  ]);
  return f != null && r(n, ["cachedContentTokenCount"], f), n;
}
function aE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["totalTokens"]);
  return u != null && r(n, ["totalTokens"], u), n;
}
function uE(i, n) {
  const o = {}, u = s(n, ["model"]);
  return u != null && r(o, ["_url", "name"], Te(i, u)), o;
}
function sE(i, n) {
  const o = {}, u = s(n, ["model"]);
  return u != null && r(o, ["_url", "name"], Te(i, u)), o;
}
function rE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
function fE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
function cE(i, n) {
  const o = {}, u = s(i, ["outputGcsUri"]);
  n !== void 0 && u != null && r(n, ["parameters", "storageUri"], u);
  const f = s(i, [
    "negativePrompt"
  ]);
  n !== void 0 && f != null && r(n, ["parameters", "negativePrompt"], f);
  const d = s(i, [
    "numberOfImages"
  ]);
  n !== void 0 && d != null && r(n, ["parameters", "sampleCount"], d);
  const m = s(i, ["aspectRatio"]);
  n !== void 0 && m != null && r(n, ["parameters", "aspectRatio"], m);
  const g = s(i, [
    "guidanceScale"
  ]);
  n !== void 0 && g != null && r(n, ["parameters", "guidanceScale"], g);
  const y = s(i, ["seed"]);
  n !== void 0 && y != null && r(n, ["parameters", "seed"], y);
  const h = s(i, [
    "safetyFilterLevel"
  ]);
  n !== void 0 && h != null && r(n, ["parameters", "safetySetting"], h);
  const v = s(i, [
    "personGeneration"
  ]);
  n !== void 0 && v != null && r(n, ["parameters", "personGeneration"], v);
  const S = s(i, [
    "includeSafetyAttributes"
  ]);
  n !== void 0 && S != null && r(n, ["parameters", "includeSafetyAttributes"], S);
  const _ = s(i, [
    "includeRaiReason"
  ]);
  n !== void 0 && _ != null && r(n, ["parameters", "includeRaiReason"], _);
  const R = s(i, ["language"]);
  n !== void 0 && R != null && r(n, ["parameters", "language"], R);
  const V = s(i, [
    "outputMimeType"
  ]);
  n !== void 0 && V != null && r(n, ["parameters", "outputOptions", "mimeType"], V);
  const b = s(i, [
    "outputCompressionQuality"
  ]);
  n !== void 0 && b != null && r(n, ["parameters", "outputOptions", "compressionQuality"], b);
  const F = s(i, ["addWatermark"]);
  n !== void 0 && F != null && r(n, ["parameters", "addWatermark"], F);
  const k = s(i, ["labels"]);
  n !== void 0 && k != null && r(n, ["labels"], k);
  const X = s(i, ["editMode"]);
  n !== void 0 && X != null && r(n, ["parameters", "editMode"], X);
  const z = s(i, ["baseSteps"]);
  return n !== void 0 && z != null && r(n, ["parameters", "editConfig", "baseSteps"], z), o;
}
function dE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["prompt"]);
  f != null && r(o, ["instances[0]", "prompt"], f);
  const d = s(n, [
    "referenceImages"
  ]);
  if (d != null) {
    let g = d;
    Array.isArray(g) && (g = g.map((y) => m_(y))), r(o, ["instances[0]", "referenceImages"], g);
  }
  const m = s(n, ["config"]);
  return m != null && cE(m, o), o;
}
function pE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "predictions"
  ]);
  if (u != null) {
    let f = u;
    Array.isArray(f) && (f = f.map((d) => Ta(d))), r(n, ["generatedImages"], f);
  }
  return n;
}
function mE(i, n) {
  const o = {}, u = s(i, ["taskType"]);
  n !== void 0 && u != null && r(n, ["requests[]", "taskType"], u);
  const f = s(i, ["title"]);
  n !== void 0 && f != null && r(n, ["requests[]", "title"], f);
  const d = s(i, [
    "outputDimensionality"
  ]);
  if (n !== void 0 && d != null && r(n, ["requests[]", "outputDimensionality"], d), s(i, ["mimeType"]) !== void 0)
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (s(i, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return o;
}
function hE(i, n) {
  const o = {}, u = s(i, ["taskType"]);
  n !== void 0 && u != null && r(n, ["instances[]", "task_type"], u);
  const f = s(i, ["title"]);
  n !== void 0 && f != null && r(n, ["instances[]", "title"], f);
  const d = s(i, [
    "outputDimensionality"
  ]);
  n !== void 0 && d != null && r(n, ["parameters", "outputDimensionality"], d);
  const m = s(i, ["mimeType"]);
  n !== void 0 && m != null && r(n, ["instances[]", "mimeType"], m);
  const g = s(i, ["autoTruncate"]);
  return n !== void 0 && g != null && r(n, ["parameters", "autoTruncate"], g), o;
}
function gE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let g = lr(i, f);
    Array.isArray(g) && (g = g.map((y) => y)), r(o, ["requests[]", "content"], g);
  }
  const d = s(n, ["config"]);
  d != null && mE(d, o);
  const m = s(n, ["model"]);
  return m !== void 0 && r(o, ["requests[]", "model"], Te(i, m)), o;
}
function yE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let m = lr(i, f);
    Array.isArray(m) && (m = m.map((g) => g)), r(o, ["instances[]", "content"], m);
  }
  const d = s(n, ["config"]);
  return d != null && hE(d, o), o;
}
function vE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["embeddings"]);
  if (u != null) {
    let d = u;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["embeddings"], d);
  }
  const f = s(i, ["metadata"]);
  return f != null && r(n, ["metadata"], f), n;
}
function TE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "predictions[]",
    "embeddings"
  ]);
  if (u != null) {
    let d = u;
    Array.isArray(d) && (d = d.map((m) => $S(m))), r(n, ["embeddings"], d);
  }
  const f = s(i, ["metadata"]);
  return f != null && r(n, ["metadata"], f), n;
}
function SE(i) {
  const n = {}, o = s(i, ["endpoint"]);
  o != null && r(n, ["name"], o);
  const u = s(i, [
    "deployedModelId"
  ]);
  return u != null && r(n, ["deployedModelId"], u), n;
}
function EE(i) {
  const n = {};
  if (s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const o = s(i, ["fileUri"]);
  o != null && r(n, ["fileUri"], o);
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function _E(i) {
  const n = {}, o = s(i, ["id"]);
  o != null && r(n, ["id"], o);
  const u = s(i, ["args"]);
  u != null && r(n, ["args"], u);
  const f = s(i, ["name"]);
  if (f != null && r(n, ["name"], f), s(i, ["partialArgs"]) !== void 0)
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (s(i, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return n;
}
function CE(i) {
  const n = {}, o = s(i, ["mode"]);
  o != null && r(n, ["mode"], o);
  const u = s(i, [
    "allowedFunctionNames"
  ]);
  if (u != null && r(n, ["allowedFunctionNames"], u), s(i, ["streamFunctionCallArguments"]) !== void 0)
    throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
  return n;
}
function AE(i) {
  const n = {};
  if (s(i, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const o = s(i, ["description"]);
  o != null && r(n, ["description"], o);
  const u = s(i, ["name"]);
  u != null && r(n, ["name"], u);
  const f = s(i, ["parameters"]);
  f != null && r(n, ["parameters"], f);
  const d = s(i, [
    "parametersJsonSchema"
  ]);
  d != null && r(n, ["parametersJsonSchema"], d);
  const m = s(i, ["response"]);
  m != null && r(n, ["response"], m);
  const g = s(i, [
    "responseJsonSchema"
  ]);
  return g != null && r(n, ["responseJsonSchema"], g), n;
}
function ME(i, n, o) {
  const u = {}, f = s(n, [
    "systemInstruction"
  ]);
  o !== void 0 && f != null && r(o, ["systemInstruction"], va(et(f)));
  const d = s(n, ["temperature"]);
  d != null && r(u, ["temperature"], d);
  const m = s(n, ["topP"]);
  m != null && r(u, ["topP"], m);
  const g = s(n, ["topK"]);
  g != null && r(u, ["topK"], g);
  const y = s(n, [
    "candidateCount"
  ]);
  y != null && r(u, ["candidateCount"], y);
  const h = s(n, [
    "maxOutputTokens"
  ]);
  h != null && r(u, ["maxOutputTokens"], h);
  const v = s(n, [
    "stopSequences"
  ]);
  v != null && r(u, ["stopSequences"], v);
  const S = s(n, [
    "responseLogprobs"
  ]);
  S != null && r(u, ["responseLogprobs"], S);
  const _ = s(n, ["logprobs"]);
  _ != null && r(u, ["logprobs"], _);
  const R = s(n, [
    "presencePenalty"
  ]);
  R != null && r(u, ["presencePenalty"], R);
  const V = s(n, [
    "frequencyPenalty"
  ]);
  V != null && r(u, ["frequencyPenalty"], V);
  const b = s(n, ["seed"]);
  b != null && r(u, ["seed"], b);
  const F = s(n, [
    "responseMimeType"
  ]);
  F != null && r(u, ["responseMimeType"], F);
  const k = s(n, [
    "responseSchema"
  ]);
  k != null && r(u, ["responseSchema"], or(k));
  const X = s(n, [
    "responseJsonSchema"
  ]);
  if (X != null && r(u, ["responseJsonSchema"], X), s(n, ["routingConfig"]) !== void 0)
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (s(n, ["modelSelectionConfig"]) !== void 0)
    throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const z = s(n, [
    "safetySettings"
  ]);
  if (o !== void 0 && z != null) {
    let ue = z;
    Array.isArray(ue) && (ue = ue.map((ke) => h_(ke))), r(o, ["safetySettings"], ue);
  }
  const Z = s(n, ["tools"]);
  if (o !== void 0 && Z != null) {
    let ue = Ki(Z);
    Array.isArray(ue) && (ue = ue.map((ke) => __(Oi(ke)))), r(o, ["tools"], ue);
  }
  const te = s(n, ["toolConfig"]);
  if (o !== void 0 && te != null && r(o, ["toolConfig"], E_(te)), s(n, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const j = s(n, [
    "cachedContent"
  ]);
  o !== void 0 && j != null && r(o, ["cachedContent"], sn(i, j));
  const J = s(n, [
    "responseModalities"
  ]);
  J != null && r(u, ["responseModalities"], J);
  const ge = s(n, [
    "mediaResolution"
  ]);
  ge != null && r(u, ["mediaResolution"], ge);
  const $ = s(n, ["speechConfig"]);
  if ($ != null && r(u, ["speechConfig"], ar($)), s(n, ["audioTimestamp"]) !== void 0)
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const ce = s(n, [
    "thinkingConfig"
  ]);
  ce != null && r(u, ["thinkingConfig"], ce);
  const _e = s(n, ["imageConfig"]);
  return _e != null && r(u, ["imageConfig"], $E(_e)), u;
}
function RE(i, n, o) {
  const u = {}, f = s(n, [
    "systemInstruction"
  ]);
  o !== void 0 && f != null && r(o, ["systemInstruction"], et(f));
  const d = s(n, ["temperature"]);
  d != null && r(u, ["temperature"], d);
  const m = s(n, ["topP"]);
  m != null && r(u, ["topP"], m);
  const g = s(n, ["topK"]);
  g != null && r(u, ["topK"], g);
  const y = s(n, [
    "candidateCount"
  ]);
  y != null && r(u, ["candidateCount"], y);
  const h = s(n, [
    "maxOutputTokens"
  ]);
  h != null && r(u, ["maxOutputTokens"], h);
  const v = s(n, [
    "stopSequences"
  ]);
  v != null && r(u, ["stopSequences"], v);
  const S = s(n, [
    "responseLogprobs"
  ]);
  S != null && r(u, ["responseLogprobs"], S);
  const _ = s(n, ["logprobs"]);
  _ != null && r(u, ["logprobs"], _);
  const R = s(n, [
    "presencePenalty"
  ]);
  R != null && r(u, ["presencePenalty"], R);
  const V = s(n, [
    "frequencyPenalty"
  ]);
  V != null && r(u, ["frequencyPenalty"], V);
  const b = s(n, ["seed"]);
  b != null && r(u, ["seed"], b);
  const F = s(n, [
    "responseMimeType"
  ]);
  F != null && r(u, ["responseMimeType"], F);
  const k = s(n, [
    "responseSchema"
  ]);
  k != null && r(u, ["responseSchema"], or(k));
  const X = s(n, [
    "responseJsonSchema"
  ]);
  X != null && r(u, ["responseJsonSchema"], X);
  const z = s(n, [
    "routingConfig"
  ]);
  z != null && r(u, ["routingConfig"], z);
  const Z = s(n, [
    "modelSelectionConfig"
  ]);
  Z != null && r(u, ["modelConfig"], Z);
  const te = s(n, [
    "safetySettings"
  ]);
  if (o !== void 0 && te != null) {
    let w = te;
    Array.isArray(w) && (w = w.map((P) => P)), r(o, ["safetySettings"], w);
  }
  const j = s(n, ["tools"]);
  if (o !== void 0 && j != null) {
    let w = Ki(j);
    Array.isArray(w) && (w = w.map((P) => ph(Oi(P)))), r(o, ["tools"], w);
  }
  const J = s(n, ["toolConfig"]);
  o !== void 0 && J != null && r(o, ["toolConfig"], J);
  const ge = s(n, ["labels"]);
  o !== void 0 && ge != null && r(o, ["labels"], ge);
  const $ = s(n, [
    "cachedContent"
  ]);
  o !== void 0 && $ != null && r(o, ["cachedContent"], sn(i, $));
  const ce = s(n, [
    "responseModalities"
  ]);
  ce != null && r(u, ["responseModalities"], ce);
  const _e = s(n, [
    "mediaResolution"
  ]);
  _e != null && r(u, ["mediaResolution"], _e);
  const ue = s(n, ["speechConfig"]);
  ue != null && r(u, ["speechConfig"], dh(ar(ue)));
  const ke = s(n, [
    "audioTimestamp"
  ]);
  ke != null && r(u, ["audioTimestamp"], ke);
  const Et = s(n, [
    "thinkingConfig"
  ]);
  Et != null && r(u, ["thinkingConfig"], Et);
  const it = s(n, ["imageConfig"]);
  return it != null && r(u, ["imageConfig"], jE(it)), u;
}
function Lm(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let m = wt(f);
    Array.isArray(m) && (m = m.map((g) => va(g))), r(o, ["contents"], m);
  }
  const d = s(n, ["config"]);
  return d != null && r(o, ["generationConfig"], ME(i, d, o)), o;
}
function Gm(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["contents"]);
  if (f != null) {
    let m = wt(f);
    Array.isArray(m) && (m = m.map((g) => g)), r(o, ["contents"], m);
  }
  const d = s(n, ["config"]);
  return d != null && r(o, ["generationConfig"], RE(i, d, o)), o;
}
function Hm(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["candidates"]);
  if (u != null) {
    let y = u;
    Array.isArray(y) && (y = y.map((h) => XS(h))), r(n, ["candidates"], y);
  }
  const f = s(i, ["modelVersion"]);
  f != null && r(n, ["modelVersion"], f);
  const d = s(i, [
    "promptFeedback"
  ]);
  d != null && r(n, ["promptFeedback"], d);
  const m = s(i, ["responseId"]);
  m != null && r(n, ["responseId"], m);
  const g = s(i, [
    "usageMetadata"
  ]);
  return g != null && r(n, ["usageMetadata"], g), n;
}
function Vm(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["candidates"]);
  if (u != null) {
    let h = u;
    Array.isArray(h) && (h = h.map((v) => v)), r(n, ["candidates"], h);
  }
  const f = s(i, ["createTime"]);
  f != null && r(n, ["createTime"], f);
  const d = s(i, ["modelVersion"]);
  d != null && r(n, ["modelVersion"], d);
  const m = s(i, [
    "promptFeedback"
  ]);
  m != null && r(n, ["promptFeedback"], m);
  const g = s(i, ["responseId"]);
  g != null && r(n, ["responseId"], g);
  const y = s(i, [
    "usageMetadata"
  ]);
  return y != null && r(n, ["usageMetadata"], y), n;
}
function NE(i, n) {
  const o = {};
  if (s(i, ["outputGcsUri"]) !== void 0)
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (s(i, ["negativePrompt"]) !== void 0)
    throw new Error("negativePrompt parameter is not supported in Gemini API.");
  const u = s(i, [
    "numberOfImages"
  ]);
  n !== void 0 && u != null && r(n, ["parameters", "sampleCount"], u);
  const f = s(i, ["aspectRatio"]);
  n !== void 0 && f != null && r(n, ["parameters", "aspectRatio"], f);
  const d = s(i, [
    "guidanceScale"
  ]);
  if (n !== void 0 && d != null && r(n, ["parameters", "guidanceScale"], d), s(i, ["seed"]) !== void 0)
    throw new Error("seed parameter is not supported in Gemini API.");
  const m = s(i, [
    "safetyFilterLevel"
  ]);
  n !== void 0 && m != null && r(n, ["parameters", "safetySetting"], m);
  const g = s(i, [
    "personGeneration"
  ]);
  n !== void 0 && g != null && r(n, ["parameters", "personGeneration"], g);
  const y = s(i, [
    "includeSafetyAttributes"
  ]);
  n !== void 0 && y != null && r(n, ["parameters", "includeSafetyAttributes"], y);
  const h = s(i, [
    "includeRaiReason"
  ]);
  n !== void 0 && h != null && r(n, ["parameters", "includeRaiReason"], h);
  const v = s(i, ["language"]);
  n !== void 0 && v != null && r(n, ["parameters", "language"], v);
  const S = s(i, [
    "outputMimeType"
  ]);
  n !== void 0 && S != null && r(n, ["parameters", "outputOptions", "mimeType"], S);
  const _ = s(i, [
    "outputCompressionQuality"
  ]);
  if (n !== void 0 && _ != null && r(n, ["parameters", "outputOptions", "compressionQuality"], _), s(i, ["addWatermark"]) !== void 0)
    throw new Error("addWatermark parameter is not supported in Gemini API.");
  if (s(i, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const R = s(i, ["imageSize"]);
  if (n !== void 0 && R != null && r(n, ["parameters", "sampleImageSize"], R), s(i, ["enhancePrompt"]) !== void 0)
    throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return o;
}
function DE(i, n) {
  const o = {}, u = s(i, ["outputGcsUri"]);
  n !== void 0 && u != null && r(n, ["parameters", "storageUri"], u);
  const f = s(i, [
    "negativePrompt"
  ]);
  n !== void 0 && f != null && r(n, ["parameters", "negativePrompt"], f);
  const d = s(i, [
    "numberOfImages"
  ]);
  n !== void 0 && d != null && r(n, ["parameters", "sampleCount"], d);
  const m = s(i, ["aspectRatio"]);
  n !== void 0 && m != null && r(n, ["parameters", "aspectRatio"], m);
  const g = s(i, [
    "guidanceScale"
  ]);
  n !== void 0 && g != null && r(n, ["parameters", "guidanceScale"], g);
  const y = s(i, ["seed"]);
  n !== void 0 && y != null && r(n, ["parameters", "seed"], y);
  const h = s(i, [
    "safetyFilterLevel"
  ]);
  n !== void 0 && h != null && r(n, ["parameters", "safetySetting"], h);
  const v = s(i, [
    "personGeneration"
  ]);
  n !== void 0 && v != null && r(n, ["parameters", "personGeneration"], v);
  const S = s(i, [
    "includeSafetyAttributes"
  ]);
  n !== void 0 && S != null && r(n, ["parameters", "includeSafetyAttributes"], S);
  const _ = s(i, [
    "includeRaiReason"
  ]);
  n !== void 0 && _ != null && r(n, ["parameters", "includeRaiReason"], _);
  const R = s(i, ["language"]);
  n !== void 0 && R != null && r(n, ["parameters", "language"], R);
  const V = s(i, [
    "outputMimeType"
  ]);
  n !== void 0 && V != null && r(n, ["parameters", "outputOptions", "mimeType"], V);
  const b = s(i, [
    "outputCompressionQuality"
  ]);
  n !== void 0 && b != null && r(n, ["parameters", "outputOptions", "compressionQuality"], b);
  const F = s(i, ["addWatermark"]);
  n !== void 0 && F != null && r(n, ["parameters", "addWatermark"], F);
  const k = s(i, ["labels"]);
  n !== void 0 && k != null && r(n, ["labels"], k);
  const X = s(i, ["imageSize"]);
  n !== void 0 && X != null && r(n, ["parameters", "sampleImageSize"], X);
  const z = s(i, [
    "enhancePrompt"
  ]);
  return n !== void 0 && z != null && r(n, ["parameters", "enhancePrompt"], z), o;
}
function IE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["prompt"]);
  f != null && r(o, ["instances[0]", "prompt"], f);
  const d = s(n, ["config"]);
  return d != null && NE(d, o), o;
}
function UE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["prompt"]);
  f != null && r(o, ["instances[0]", "prompt"], f);
  const d = s(n, ["config"]);
  return d != null && DE(d, o), o;
}
function xE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "predictions"
  ]);
  if (u != null) {
    let d = u;
    Array.isArray(d) && (d = d.map((m) => FE(m))), r(n, ["generatedImages"], d);
  }
  const f = s(i, [
    "positivePromptSafetyAttributes"
  ]);
  return f != null && r(n, ["positivePromptSafetyAttributes"], fh(f)), n;
}
function wE(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "predictions"
  ]);
  if (u != null) {
    let d = u;
    Array.isArray(d) && (d = d.map((m) => Ta(m))), r(n, ["generatedImages"], d);
  }
  const f = s(i, [
    "positivePromptSafetyAttributes"
  ]);
  return f != null && r(n, ["positivePromptSafetyAttributes"], ch(f)), n;
}
function qE(i, n) {
  const o = {}, u = s(i, [
    "numberOfVideos"
  ]);
  if (n !== void 0 && u != null && r(n, ["parameters", "sampleCount"], u), s(i, ["outputGcsUri"]) !== void 0)
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (s(i, ["fps"]) !== void 0)
    throw new Error("fps parameter is not supported in Gemini API.");
  const f = s(i, [
    "durationSeconds"
  ]);
  if (n !== void 0 && f != null && r(n, ["parameters", "durationSeconds"], f), s(i, ["seed"]) !== void 0)
    throw new Error("seed parameter is not supported in Gemini API.");
  const d = s(i, ["aspectRatio"]);
  n !== void 0 && d != null && r(n, ["parameters", "aspectRatio"], d);
  const m = s(i, ["resolution"]);
  n !== void 0 && m != null && r(n, ["parameters", "resolution"], m);
  const g = s(i, [
    "personGeneration"
  ]);
  if (n !== void 0 && g != null && r(n, ["parameters", "personGeneration"], g), s(i, ["pubsubTopic"]) !== void 0)
    throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  const y = s(i, [
    "negativePrompt"
  ]);
  n !== void 0 && y != null && r(n, ["parameters", "negativePrompt"], y);
  const h = s(i, [
    "enhancePrompt"
  ]);
  if (n !== void 0 && h != null && r(n, ["parameters", "enhancePrompt"], h), s(i, ["generateAudio"]) !== void 0)
    throw new Error("generateAudio parameter is not supported in Gemini API.");
  const v = s(i, ["lastFrame"]);
  n !== void 0 && v != null && r(n, ["instances[0]", "lastFrame"], Sa(v));
  const S = s(i, [
    "referenceImages"
  ]);
  if (n !== void 0 && S != null) {
    let _ = S;
    Array.isArray(_) && (_ = _.map((R) => G_(R))), r(n, ["instances[0]", "referenceImages"], _);
  }
  if (s(i, ["mask"]) !== void 0)
    throw new Error("mask parameter is not supported in Gemini API.");
  if (s(i, ["compressionQuality"]) !== void 0)
    throw new Error("compressionQuality parameter is not supported in Gemini API.");
  return o;
}
function LE(i, n) {
  const o = {}, u = s(i, [
    "numberOfVideos"
  ]);
  n !== void 0 && u != null && r(n, ["parameters", "sampleCount"], u);
  const f = s(i, ["outputGcsUri"]);
  n !== void 0 && f != null && r(n, ["parameters", "storageUri"], f);
  const d = s(i, ["fps"]);
  n !== void 0 && d != null && r(n, ["parameters", "fps"], d);
  const m = s(i, [
    "durationSeconds"
  ]);
  n !== void 0 && m != null && r(n, ["parameters", "durationSeconds"], m);
  const g = s(i, ["seed"]);
  n !== void 0 && g != null && r(n, ["parameters", "seed"], g);
  const y = s(i, ["aspectRatio"]);
  n !== void 0 && y != null && r(n, ["parameters", "aspectRatio"], y);
  const h = s(i, ["resolution"]);
  n !== void 0 && h != null && r(n, ["parameters", "resolution"], h);
  const v = s(i, [
    "personGeneration"
  ]);
  n !== void 0 && v != null && r(n, ["parameters", "personGeneration"], v);
  const S = s(i, ["pubsubTopic"]);
  n !== void 0 && S != null && r(n, ["parameters", "pubsubTopic"], S);
  const _ = s(i, [
    "negativePrompt"
  ]);
  n !== void 0 && _ != null && r(n, ["parameters", "negativePrompt"], _);
  const R = s(i, [
    "enhancePrompt"
  ]);
  n !== void 0 && R != null && r(n, ["parameters", "enhancePrompt"], R);
  const V = s(i, [
    "generateAudio"
  ]);
  n !== void 0 && V != null && r(n, ["parameters", "generateAudio"], V);
  const b = s(i, ["lastFrame"]);
  n !== void 0 && b != null && r(n, ["instances[0]", "lastFrame"], Ht(b));
  const F = s(i, [
    "referenceImages"
  ]);
  if (n !== void 0 && F != null) {
    let z = F;
    Array.isArray(z) && (z = z.map((Z) => H_(Z))), r(n, ["instances[0]", "referenceImages"], z);
  }
  const k = s(i, ["mask"]);
  n !== void 0 && k != null && r(n, ["instances[0]", "mask"], L_(k));
  const X = s(i, [
    "compressionQuality"
  ]);
  return n !== void 0 && X != null && r(n, ["parameters", "compressionQuality"], X), o;
}
function GE(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, [
    "response",
    "generateVideoResponse"
  ]);
  return m != null && r(n, ["response"], zE(m)), n;
}
function HE(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, ["response"]);
  return m != null && r(n, ["response"], PE(m)), n;
}
function VE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["prompt"]);
  f != null && r(o, ["instances[0]", "prompt"], f);
  const d = s(n, ["image"]);
  d != null && r(o, ["instances[0]", "image"], Sa(d));
  const m = s(n, ["video"]);
  m != null && r(o, ["instances[0]", "video"], mh(m));
  const g = s(n, ["source"]);
  g != null && BE(g, o);
  const y = s(n, ["config"]);
  return y != null && qE(y, o), o;
}
function bE(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["prompt"]);
  f != null && r(o, ["instances[0]", "prompt"], f);
  const d = s(n, ["image"]);
  d != null && r(o, ["instances[0]", "image"], Ht(d));
  const m = s(n, ["video"]);
  m != null && r(o, ["instances[0]", "video"], hh(m));
  const g = s(n, ["source"]);
  g != null && YE(g, o);
  const y = s(n, ["config"]);
  return y != null && LE(y, o), o;
}
function zE(i) {
  const n = {}, o = s(i, [
    "generatedSamples"
  ]);
  if (o != null) {
    let d = o;
    Array.isArray(d) && (d = d.map((m) => kE(m))), r(n, ["generatedVideos"], d);
  }
  const u = s(i, [
    "raiMediaFilteredCount"
  ]);
  u != null && r(n, ["raiMediaFilteredCount"], u);
  const f = s(i, [
    "raiMediaFilteredReasons"
  ]);
  return f != null && r(n, ["raiMediaFilteredReasons"], f), n;
}
function PE(i) {
  const n = {}, o = s(i, ["videos"]);
  if (o != null) {
    let d = o;
    Array.isArray(d) && (d = d.map((m) => OE(m))), r(n, ["generatedVideos"], d);
  }
  const u = s(i, [
    "raiMediaFilteredCount"
  ]);
  u != null && r(n, ["raiMediaFilteredCount"], u);
  const f = s(i, [
    "raiMediaFilteredReasons"
  ]);
  return f != null && r(n, ["raiMediaFilteredReasons"], f), n;
}
function BE(i, n) {
  const o = {}, u = s(i, ["prompt"]);
  n !== void 0 && u != null && r(n, ["instances[0]", "prompt"], u);
  const f = s(i, ["image"]);
  n !== void 0 && f != null && r(n, ["instances[0]", "image"], Sa(f));
  const d = s(i, ["video"]);
  return n !== void 0 && d != null && r(n, ["instances[0]", "video"], mh(d)), o;
}
function YE(i, n) {
  const o = {}, u = s(i, ["prompt"]);
  n !== void 0 && u != null && r(n, ["instances[0]", "prompt"], u);
  const f = s(i, ["image"]);
  n !== void 0 && f != null && r(n, ["instances[0]", "image"], Ht(f));
  const d = s(i, ["video"]);
  return n !== void 0 && d != null && r(n, ["instances[0]", "video"], hh(d)), o;
}
function FE(i) {
  const n = {}, o = s(i, ["_self"]);
  o != null && r(n, ["image"], e_(o));
  const u = s(i, [
    "raiFilteredReason"
  ]);
  u != null && r(n, ["raiFilteredReason"], u);
  const f = s(i, ["_self"]);
  return f != null && r(n, ["safetyAttributes"], fh(f)), n;
}
function Ta(i) {
  const n = {}, o = s(i, ["_self"]);
  o != null && r(n, ["image"], rh(o));
  const u = s(i, [
    "raiFilteredReason"
  ]);
  u != null && r(n, ["raiFilteredReason"], u);
  const f = s(i, ["_self"]);
  f != null && r(n, ["safetyAttributes"], ch(f));
  const d = s(i, ["prompt"]);
  return d != null && r(n, ["enhancedPrompt"], d), n;
}
function JE(i) {
  const n = {}, o = s(i, ["_self"]);
  o != null && r(n, ["mask"], rh(o));
  const u = s(i, ["labels"]);
  if (u != null) {
    let f = u;
    Array.isArray(f) && (f = f.map((d) => d)), r(n, ["labels"], f);
  }
  return n;
}
function kE(i) {
  const n = {}, o = s(i, ["video"]);
  return o != null && r(n, ["video"], w_(o)), n;
}
function OE(i) {
  const n = {}, o = s(i, ["_self"]);
  return o != null && r(n, ["video"], q_(o)), n;
}
function KE(i) {
  const n = {}, o = s(i, [
    "modelSelectionConfig"
  ]);
  o != null && r(n, ["modelConfig"], o);
  const u = s(i, [
    "responseJsonSchema"
  ]);
  u != null && r(n, ["responseJsonSchema"], u);
  const f = s(i, [
    "audioTimestamp"
  ]);
  f != null && r(n, ["audioTimestamp"], f);
  const d = s(i, [
    "candidateCount"
  ]);
  d != null && r(n, ["candidateCount"], d);
  const m = s(i, [
    "enableAffectiveDialog"
  ]);
  m != null && r(n, ["enableAffectiveDialog"], m);
  const g = s(i, [
    "frequencyPenalty"
  ]);
  g != null && r(n, ["frequencyPenalty"], g);
  const y = s(i, ["logprobs"]);
  y != null && r(n, ["logprobs"], y);
  const h = s(i, [
    "maxOutputTokens"
  ]);
  h != null && r(n, ["maxOutputTokens"], h);
  const v = s(i, [
    "mediaResolution"
  ]);
  v != null && r(n, ["mediaResolution"], v);
  const S = s(i, [
    "presencePenalty"
  ]);
  S != null && r(n, ["presencePenalty"], S);
  const _ = s(i, [
    "responseLogprobs"
  ]);
  _ != null && r(n, ["responseLogprobs"], _);
  const R = s(i, [
    "responseMimeType"
  ]);
  R != null && r(n, ["responseMimeType"], R);
  const V = s(i, [
    "responseModalities"
  ]);
  V != null && r(n, ["responseModalities"], V);
  const b = s(i, [
    "responseSchema"
  ]);
  b != null && r(n, ["responseSchema"], b);
  const F = s(i, [
    "routingConfig"
  ]);
  F != null && r(n, ["routingConfig"], F);
  const k = s(i, ["seed"]);
  k != null && r(n, ["seed"], k);
  const X = s(i, ["speechConfig"]);
  X != null && r(n, ["speechConfig"], dh(X));
  const z = s(i, [
    "stopSequences"
  ]);
  z != null && r(n, ["stopSequences"], z);
  const Z = s(i, ["temperature"]);
  Z != null && r(n, ["temperature"], Z);
  const te = s(i, [
    "thinkingConfig"
  ]);
  te != null && r(n, ["thinkingConfig"], te);
  const j = s(i, ["topK"]);
  j != null && r(n, ["topK"], j);
  const J = s(i, ["topP"]);
  if (J != null && r(n, ["topP"], J), s(i, ["enableEnhancedCivicAnswers"]) !== void 0)
    throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  return n;
}
function XE(i, n) {
  const o = {}, u = s(n, ["model"]);
  return u != null && r(o, ["_url", "name"], Te(i, u)), o;
}
function QE(i, n) {
  const o = {}, u = s(n, ["model"]);
  return u != null && r(o, ["_url", "name"], Te(i, u)), o;
}
function ZE(i) {
  const n = {};
  if (s(i, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const o = s(i, ["enableWidget"]);
  return o != null && r(n, ["enableWidget"], o), n;
}
function WE(i) {
  const n = {};
  if (s(i, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (s(i, ["blockingConfidence"]) !== void 0)
    throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  const o = s(i, [
    "timeRangeFilter"
  ]);
  return o != null && r(n, ["timeRangeFilter"], o), n;
}
function $E(i) {
  const n = {}, o = s(i, ["aspectRatio"]);
  o != null && r(n, ["aspectRatio"], o);
  const u = s(i, ["imageSize"]);
  if (u != null && r(n, ["imageSize"], u), s(i, ["outputMimeType"]) !== void 0)
    throw new Error("outputMimeType parameter is not supported in Gemini API.");
  if (s(i, ["outputCompressionQuality"]) !== void 0)
    throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");
  return n;
}
function jE(i) {
  const n = {}, o = s(i, ["aspectRatio"]);
  o != null && r(n, ["aspectRatio"], o);
  const u = s(i, ["imageSize"]);
  u != null && r(n, ["imageSize"], u);
  const f = s(i, [
    "outputMimeType"
  ]);
  f != null && r(n, ["imageOutputOptions", "mimeType"], f);
  const d = s(i, [
    "outputCompressionQuality"
  ]);
  return d != null && r(n, ["imageOutputOptions", "compressionQuality"], d), n;
}
function e_(i) {
  const n = {}, o = s(i, [
    "bytesBase64Encoded"
  ]);
  o != null && r(n, ["imageBytes"], Hn(o));
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function rh(i) {
  const n = {}, o = s(i, ["gcsUri"]);
  o != null && r(n, ["gcsUri"], o);
  const u = s(i, [
    "bytesBase64Encoded"
  ]);
  u != null && r(n, ["imageBytes"], Hn(u));
  const f = s(i, ["mimeType"]);
  return f != null && r(n, ["mimeType"], f), n;
}
function Sa(i) {
  const n = {};
  if (s(i, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  const o = s(i, ["imageBytes"]);
  o != null && r(n, ["bytesBase64Encoded"], Hn(o));
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function Ht(i) {
  const n = {}, o = s(i, ["gcsUri"]);
  o != null && r(n, ["gcsUri"], o);
  const u = s(i, ["imageBytes"]);
  u != null && r(n, ["bytesBase64Encoded"], Hn(u));
  const f = s(i, ["mimeType"]);
  return f != null && r(n, ["mimeType"], f), n;
}
function t_(i, n, o) {
  const u = {}, f = s(n, ["pageSize"]);
  o !== void 0 && f != null && r(o, ["_query", "pageSize"], f);
  const d = s(n, ["pageToken"]);
  o !== void 0 && d != null && r(o, ["_query", "pageToken"], d);
  const m = s(n, ["filter"]);
  o !== void 0 && m != null && r(o, ["_query", "filter"], m);
  const g = s(n, ["queryBase"]);
  return o !== void 0 && g != null && r(o, ["_url", "models_url"], th(i, g)), u;
}
function n_(i, n, o) {
  const u = {}, f = s(n, ["pageSize"]);
  o !== void 0 && f != null && r(o, ["_query", "pageSize"], f);
  const d = s(n, ["pageToken"]);
  o !== void 0 && d != null && r(o, ["_query", "pageToken"], d);
  const m = s(n, ["filter"]);
  o !== void 0 && m != null && r(o, ["_query", "filter"], m);
  const g = s(n, ["queryBase"]);
  return o !== void 0 && g != null && r(o, ["_url", "models_url"], th(i, g)), u;
}
function i_(i, n) {
  const o = {}, u = s(n, ["config"]);
  return u != null && t_(i, u, o), o;
}
function l_(i, n) {
  const o = {}, u = s(n, ["config"]);
  return u != null && n_(i, u, o), o;
}
function o_(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, ["_self"]);
  if (f != null) {
    let d = nh(f);
    Array.isArray(d) && (d = d.map((m) => Zs(m))), r(n, ["models"], d);
  }
  return n;
}
function a_(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, ["_self"]);
  if (f != null) {
    let d = nh(f);
    Array.isArray(d) && (d = d.map((m) => Ws(m))), r(n, ["models"], d);
  }
  return n;
}
function u_(i) {
  const n = {}, o = s(i, ["maskMode"]);
  o != null && r(n, ["maskMode"], o);
  const u = s(i, [
    "segmentationClasses"
  ]);
  u != null && r(n, ["maskClasses"], u);
  const f = s(i, ["maskDilation"]);
  return f != null && r(n, ["dilation"], f), n;
}
function Zs(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["displayName"]);
  u != null && r(n, ["displayName"], u);
  const f = s(i, ["description"]);
  f != null && r(n, ["description"], f);
  const d = s(i, ["version"]);
  d != null && r(n, ["version"], d);
  const m = s(i, ["_self"]);
  m != null && r(n, ["tunedModelInfo"], C_(m));
  const g = s(i, [
    "inputTokenLimit"
  ]);
  g != null && r(n, ["inputTokenLimit"], g);
  const y = s(i, [
    "outputTokenLimit"
  ]);
  y != null && r(n, ["outputTokenLimit"], y);
  const h = s(i, [
    "supportedGenerationMethods"
  ]);
  h != null && r(n, ["supportedActions"], h);
  const v = s(i, ["temperature"]);
  v != null && r(n, ["temperature"], v);
  const S = s(i, [
    "maxTemperature"
  ]);
  S != null && r(n, ["maxTemperature"], S);
  const _ = s(i, ["topP"]);
  _ != null && r(n, ["topP"], _);
  const R = s(i, ["topK"]);
  R != null && r(n, ["topK"], R);
  const V = s(i, ["thinking"]);
  return V != null && r(n, ["thinking"], V), n;
}
function Ws(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["displayName"]);
  u != null && r(n, ["displayName"], u);
  const f = s(i, ["description"]);
  f != null && r(n, ["description"], f);
  const d = s(i, ["versionId"]);
  d != null && r(n, ["version"], d);
  const m = s(i, ["deployedModels"]);
  if (m != null) {
    let S = m;
    Array.isArray(S) && (S = S.map((_) => SE(_))), r(n, ["endpoints"], S);
  }
  const g = s(i, ["labels"]);
  g != null && r(n, ["labels"], g);
  const y = s(i, ["_self"]);
  y != null && r(n, ["tunedModelInfo"], A_(y));
  const h = s(i, [
    "defaultCheckpointId"
  ]);
  h != null && r(n, ["defaultCheckpointId"], h);
  const v = s(i, ["checkpoints"]);
  if (v != null) {
    let S = v;
    Array.isArray(S) && (S = S.map((_) => _)), r(n, ["checkpoints"], S);
  }
  return n;
}
function s_(i) {
  const n = {}, o = s(i, [
    "mediaResolution"
  ]);
  o != null && r(n, ["mediaResolution"], o);
  const u = s(i, [
    "codeExecutionResult"
  ]);
  u != null && r(n, ["codeExecutionResult"], u);
  const f = s(i, [
    "executableCode"
  ]);
  f != null && r(n, ["executableCode"], f);
  const d = s(i, ["fileData"]);
  d != null && r(n, ["fileData"], EE(d));
  const m = s(i, ["functionCall"]);
  m != null && r(n, ["functionCall"], _E(m));
  const g = s(i, [
    "functionResponse"
  ]);
  g != null && r(n, ["functionResponse"], g);
  const y = s(i, ["inlineData"]);
  y != null && r(n, ["inlineData"], KS(y));
  const h = s(i, ["text"]);
  h != null && r(n, ["text"], h);
  const v = s(i, ["thought"]);
  v != null && r(n, ["thought"], v);
  const S = s(i, [
    "thoughtSignature"
  ]);
  S != null && r(n, ["thoughtSignature"], S);
  const _ = s(i, [
    "videoMetadata"
  ]);
  return _ != null && r(n, ["videoMetadata"], _), n;
}
function r_(i) {
  const n = {}, o = s(i, ["productImage"]);
  return o != null && r(n, ["image"], Ht(o)), n;
}
function f_(i, n) {
  const o = {}, u = s(i, [
    "numberOfImages"
  ]);
  n !== void 0 && u != null && r(n, ["parameters", "sampleCount"], u);
  const f = s(i, ["baseSteps"]);
  n !== void 0 && f != null && r(n, ["parameters", "baseSteps"], f);
  const d = s(i, ["outputGcsUri"]);
  n !== void 0 && d != null && r(n, ["parameters", "storageUri"], d);
  const m = s(i, ["seed"]);
  n !== void 0 && m != null && r(n, ["parameters", "seed"], m);
  const g = s(i, [
    "safetyFilterLevel"
  ]);
  n !== void 0 && g != null && r(n, ["parameters", "safetySetting"], g);
  const y = s(i, [
    "personGeneration"
  ]);
  n !== void 0 && y != null && r(n, ["parameters", "personGeneration"], y);
  const h = s(i, ["addWatermark"]);
  n !== void 0 && h != null && r(n, ["parameters", "addWatermark"], h);
  const v = s(i, [
    "outputMimeType"
  ]);
  n !== void 0 && v != null && r(n, ["parameters", "outputOptions", "mimeType"], v);
  const S = s(i, [
    "outputCompressionQuality"
  ]);
  n !== void 0 && S != null && r(n, ["parameters", "outputOptions", "compressionQuality"], S);
  const _ = s(i, [
    "enhancePrompt"
  ]);
  n !== void 0 && _ != null && r(n, ["parameters", "enhancePrompt"], _);
  const R = s(i, ["labels"]);
  return n !== void 0 && R != null && r(n, ["labels"], R), o;
}
function c_(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["source"]);
  f != null && p_(f, o);
  const d = s(n, ["config"]);
  return d != null && f_(d, o), o;
}
function d_(i) {
  const n = {}, o = s(i, [
    "predictions"
  ]);
  if (o != null) {
    let u = o;
    Array.isArray(u) && (u = u.map((f) => Ta(f))), r(n, ["generatedImages"], u);
  }
  return n;
}
function p_(i, n) {
  const o = {}, u = s(i, ["prompt"]);
  n !== void 0 && u != null && r(n, ["instances[0]", "prompt"], u);
  const f = s(i, ["personImage"]);
  n !== void 0 && f != null && r(n, ["instances[0]", "personImage", "image"], Ht(f));
  const d = s(i, [
    "productImages"
  ]);
  if (n !== void 0 && d != null) {
    let m = d;
    Array.isArray(m) && (m = m.map((g) => r_(g))), r(n, ["instances[0]", "productImages"], m);
  }
  return o;
}
function m_(i) {
  const n = {}, o = s(i, [
    "referenceImage"
  ]);
  o != null && r(n, ["referenceImage"], Ht(o));
  const u = s(i, ["referenceId"]);
  u != null && r(n, ["referenceId"], u);
  const f = s(i, [
    "referenceType"
  ]);
  f != null && r(n, ["referenceType"], f);
  const d = s(i, [
    "maskImageConfig"
  ]);
  d != null && r(n, ["maskImageConfig"], u_(d));
  const m = s(i, [
    "controlImageConfig"
  ]);
  m != null && r(n, ["controlImageConfig"], eE(m));
  const g = s(i, [
    "styleImageConfig"
  ]);
  g != null && r(n, ["styleImageConfig"], g);
  const y = s(i, [
    "subjectImageConfig"
  ]);
  return y != null && r(n, ["subjectImageConfig"], y), n;
}
function fh(i) {
  const n = {}, o = s(i, [
    "safetyAttributes",
    "categories"
  ]);
  o != null && r(n, ["categories"], o);
  const u = s(i, [
    "safetyAttributes",
    "scores"
  ]);
  u != null && r(n, ["scores"], u);
  const f = s(i, ["contentType"]);
  return f != null && r(n, ["contentType"], f), n;
}
function ch(i) {
  const n = {}, o = s(i, [
    "safetyAttributes",
    "categories"
  ]);
  o != null && r(n, ["categories"], o);
  const u = s(i, [
    "safetyAttributes",
    "scores"
  ]);
  u != null && r(n, ["scores"], u);
  const f = s(i, ["contentType"]);
  return f != null && r(n, ["contentType"], f), n;
}
function h_(i) {
  const n = {}, o = s(i, ["category"]);
  if (o != null && r(n, ["category"], o), s(i, ["method"]) !== void 0)
    throw new Error("method parameter is not supported in Gemini API.");
  const u = s(i, ["threshold"]);
  return u != null && r(n, ["threshold"], u), n;
}
function g_(i) {
  const n = {}, o = s(i, ["image"]);
  return o != null && r(n, ["image"], Ht(o)), n;
}
function y_(i, n) {
  const o = {}, u = s(i, ["mode"]);
  n !== void 0 && u != null && r(n, ["parameters", "mode"], u);
  const f = s(i, [
    "maxPredictions"
  ]);
  n !== void 0 && f != null && r(n, ["parameters", "maxPredictions"], f);
  const d = s(i, [
    "confidenceThreshold"
  ]);
  n !== void 0 && d != null && r(n, ["parameters", "confidenceThreshold"], d);
  const m = s(i, ["maskDilation"]);
  n !== void 0 && m != null && r(n, ["parameters", "maskDilation"], m);
  const g = s(i, [
    "binaryColorThreshold"
  ]);
  n !== void 0 && g != null && r(n, ["parameters", "binaryColorThreshold"], g);
  const y = s(i, ["labels"]);
  return n !== void 0 && y != null && r(n, ["labels"], y), o;
}
function v_(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["source"]);
  f != null && S_(f, o);
  const d = s(n, ["config"]);
  return d != null && y_(d, o), o;
}
function T_(i) {
  const n = {}, o = s(i, ["predictions"]);
  if (o != null) {
    let u = o;
    Array.isArray(u) && (u = u.map((f) => JE(f))), r(n, ["generatedMasks"], u);
  }
  return n;
}
function S_(i, n) {
  const o = {}, u = s(i, ["prompt"]);
  n !== void 0 && u != null && r(n, ["instances[0]", "prompt"], u);
  const f = s(i, ["image"]);
  n !== void 0 && f != null && r(n, ["instances[0]", "image"], Ht(f));
  const d = s(i, [
    "scribbleImage"
  ]);
  return n !== void 0 && d != null && r(n, ["instances[0]", "scribble"], g_(d)), o;
}
function dh(i) {
  const n = {}, o = s(i, ["languageCode"]);
  o != null && r(n, ["languageCode"], o);
  const u = s(i, ["voiceConfig"]);
  if (u != null && r(n, ["voiceConfig"], u), s(i, ["multiSpeakerVoiceConfig"]) !== void 0)
    throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  return n;
}
function E_(i) {
  const n = {}, o = s(i, [
    "functionCallingConfig"
  ]);
  o != null && r(n, ["functionCallingConfig"], CE(o));
  const u = s(i, [
    "retrievalConfig"
  ]);
  return u != null && r(n, ["retrievalConfig"], u), n;
}
function __(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let v = o;
    Array.isArray(v) && (v = v.map((S) => S)), r(n, ["functionDeclarations"], v);
  }
  if (s(i, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const u = s(i, [
    "googleSearchRetrieval"
  ]);
  u != null && r(n, ["googleSearchRetrieval"], u);
  const f = s(i, ["computerUse"]);
  f != null && r(n, ["computerUse"], f);
  const d = s(i, ["fileSearch"]);
  d != null && r(n, ["fileSearch"], d);
  const m = s(i, [
    "codeExecution"
  ]);
  if (m != null && r(n, ["codeExecution"], m), s(i, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = s(i, ["googleMaps"]);
  g != null && r(n, ["googleMaps"], ZE(g));
  const y = s(i, ["googleSearch"]);
  y != null && r(n, ["googleSearch"], WE(y));
  const h = s(i, ["urlContext"]);
  return h != null && r(n, ["urlContext"], h), n;
}
function ph(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let S = o;
    Array.isArray(S) && (S = S.map((_) => AE(_))), r(n, ["functionDeclarations"], S);
  }
  const u = s(i, ["retrieval"]);
  u != null && r(n, ["retrieval"], u);
  const f = s(i, [
    "googleSearchRetrieval"
  ]);
  f != null && r(n, ["googleSearchRetrieval"], f);
  const d = s(i, ["computerUse"]);
  if (d != null && r(n, ["computerUse"], d), s(i, ["fileSearch"]) !== void 0)
    throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const m = s(i, [
    "codeExecution"
  ]);
  m != null && r(n, ["codeExecution"], m);
  const g = s(i, [
    "enterpriseWebSearch"
  ]);
  g != null && r(n, ["enterpriseWebSearch"], g);
  const y = s(i, ["googleMaps"]);
  y != null && r(n, ["googleMaps"], y);
  const h = s(i, ["googleSearch"]);
  h != null && r(n, ["googleSearch"], h);
  const v = s(i, ["urlContext"]);
  return v != null && r(n, ["urlContext"], v), n;
}
function C_(i) {
  const n = {}, o = s(i, ["baseModel"]);
  o != null && r(n, ["baseModel"], o);
  const u = s(i, ["createTime"]);
  u != null && r(n, ["createTime"], u);
  const f = s(i, ["updateTime"]);
  return f != null && r(n, ["updateTime"], f), n;
}
function A_(i) {
  const n = {}, o = s(i, [
    "labels",
    "google-vertex-llm-tuning-base-model-id"
  ]);
  o != null && r(n, ["baseModel"], o);
  const u = s(i, ["createTime"]);
  u != null && r(n, ["createTime"], u);
  const f = s(i, ["updateTime"]);
  return f != null && r(n, ["updateTime"], f), n;
}
function M_(i, n) {
  const o = {}, u = s(i, ["displayName"]);
  n !== void 0 && u != null && r(n, ["displayName"], u);
  const f = s(i, ["description"]);
  n !== void 0 && f != null && r(n, ["description"], f);
  const d = s(i, [
    "defaultCheckpointId"
  ]);
  return n !== void 0 && d != null && r(n, ["defaultCheckpointId"], d), o;
}
function R_(i, n) {
  const o = {}, u = s(i, ["displayName"]);
  n !== void 0 && u != null && r(n, ["displayName"], u);
  const f = s(i, ["description"]);
  n !== void 0 && f != null && r(n, ["description"], f);
  const d = s(i, [
    "defaultCheckpointId"
  ]);
  return n !== void 0 && d != null && r(n, ["defaultCheckpointId"], d), o;
}
function N_(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "name"], Te(i, u));
  const f = s(n, ["config"]);
  return f != null && M_(f, o), o;
}
function D_(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["config"]);
  return f != null && R_(f, o), o;
}
function I_(i, n) {
  const o = {}, u = s(i, ["outputGcsUri"]);
  n !== void 0 && u != null && r(n, ["parameters", "storageUri"], u);
  const f = s(i, [
    "safetyFilterLevel"
  ]);
  n !== void 0 && f != null && r(n, ["parameters", "safetySetting"], f);
  const d = s(i, [
    "personGeneration"
  ]);
  n !== void 0 && d != null && r(n, ["parameters", "personGeneration"], d);
  const m = s(i, [
    "includeRaiReason"
  ]);
  n !== void 0 && m != null && r(n, ["parameters", "includeRaiReason"], m);
  const g = s(i, [
    "outputMimeType"
  ]);
  n !== void 0 && g != null && r(n, ["parameters", "outputOptions", "mimeType"], g);
  const y = s(i, [
    "outputCompressionQuality"
  ]);
  n !== void 0 && y != null && r(n, ["parameters", "outputOptions", "compressionQuality"], y);
  const h = s(i, [
    "enhanceInputImage"
  ]);
  n !== void 0 && h != null && r(n, ["parameters", "upscaleConfig", "enhanceInputImage"], h);
  const v = s(i, [
    "imagePreservationFactor"
  ]);
  n !== void 0 && v != null && r(n, ["parameters", "upscaleConfig", "imagePreservationFactor"], v);
  const S = s(i, ["labels"]);
  n !== void 0 && S != null && r(n, ["labels"], S);
  const _ = s(i, [
    "numberOfImages"
  ]);
  n !== void 0 && _ != null && r(n, ["parameters", "sampleCount"], _);
  const R = s(i, ["mode"]);
  return n !== void 0 && R != null && r(n, ["parameters", "mode"], R), o;
}
function U_(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["_url", "model"], Te(i, u));
  const f = s(n, ["image"]);
  f != null && r(o, ["instances[0]", "image"], Ht(f));
  const d = s(n, [
    "upscaleFactor"
  ]);
  d != null && r(o, ["parameters", "upscaleConfig", "upscaleFactor"], d);
  const m = s(n, ["config"]);
  return m != null && I_(m, o), o;
}
function x_(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "predictions"
  ]);
  if (u != null) {
    let f = u;
    Array.isArray(f) && (f = f.map((d) => Ta(d))), r(n, ["generatedImages"], f);
  }
  return n;
}
function w_(i) {
  const n = {}, o = s(i, ["uri"]);
  o != null && r(n, ["uri"], o);
  const u = s(i, ["encodedVideo"]);
  u != null && r(n, ["videoBytes"], Hn(u));
  const f = s(i, ["encoding"]);
  return f != null && r(n, ["mimeType"], f), n;
}
function q_(i) {
  const n = {}, o = s(i, ["gcsUri"]);
  o != null && r(n, ["uri"], o);
  const u = s(i, [
    "bytesBase64Encoded"
  ]);
  u != null && r(n, ["videoBytes"], Hn(u));
  const f = s(i, ["mimeType"]);
  return f != null && r(n, ["mimeType"], f), n;
}
function L_(i) {
  const n = {}, o = s(i, ["image"]);
  o != null && r(n, ["_self"], Ht(o));
  const u = s(i, ["maskMode"]);
  return u != null && r(n, ["maskMode"], u), n;
}
function G_(i) {
  const n = {}, o = s(i, ["image"]);
  o != null && r(n, ["image"], Sa(o));
  const u = s(i, [
    "referenceType"
  ]);
  return u != null && r(n, ["referenceType"], u), n;
}
function H_(i) {
  const n = {}, o = s(i, ["image"]);
  o != null && r(n, ["image"], Ht(o));
  const u = s(i, [
    "referenceType"
  ]);
  return u != null && r(n, ["referenceType"], u), n;
}
function mh(i) {
  const n = {}, o = s(i, ["uri"]);
  o != null && r(n, ["uri"], o);
  const u = s(i, ["videoBytes"]);
  u != null && r(n, ["encodedVideo"], Hn(u));
  const f = s(i, ["mimeType"]);
  return f != null && r(n, ["encoding"], f), n;
}
function hh(i) {
  const n = {}, o = s(i, ["uri"]);
  o != null && r(n, ["gcsUri"], o);
  const u = s(i, ["videoBytes"]);
  u != null && r(n, ["bytesBase64Encoded"], Hn(u));
  const f = s(i, ["mimeType"]);
  return f != null && r(n, ["mimeType"], f), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const V_ = "Content-Type", b_ = "X-Server-Timeout", z_ = "User-Agent", $s = "x-goog-api-client", P_ = "1.30.0", B_ = `google-genai-sdk/${P_}`, Y_ = "v1beta1", F_ = "v1beta", bm = /^\s*data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
class J_ {
  constructor(n) {
    var o, u;
    this.clientOptions = Object.assign(Object.assign({}, n), { project: n.project, location: n.location, apiKey: n.apiKey, vertexai: n.vertexai });
    const f = {};
    this.clientOptions.vertexai ? (f.apiVersion = (o = this.clientOptions.apiVersion) !== null && o !== void 0 ? o : Y_, f.baseUrl = this.baseUrlFromProjectLocation(), this.normalizeAuthParameters()) : (f.apiVersion = (u = this.clientOptions.apiVersion) !== null && u !== void 0 ? u : F_, f.baseUrl = "https://generativelanguage.googleapis.com/"), f.headers = this.getDefaultHeaders(), this.clientOptions.httpOptions = f, n.httpOptions && (this.clientOptions.httpOptions = this.patchHttpOptions(f, n.httpOptions));
  }
  /**
   * Determines the base URL for Vertex AI based on project and location.
   * Uses the global endpoint if location is 'global' or if project/location
   * are not specified (implying API key usage).
   * @private
   */
  baseUrlFromProjectLocation() {
    return this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== "global" ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/` : "https://aiplatform.googleapis.com/";
  }
  /**
   * Normalizes authentication parameters for Vertex AI.
   * If project and location are provided, API key is cleared.
   * If project and location are not provided (implying API key usage),
   * project and location are cleared.
   * @private
   */
  normalizeAuthParameters() {
    if (this.clientOptions.project && this.clientOptions.location) {
      this.clientOptions.apiKey = void 0;
      return;
    }
    this.clientOptions.project = void 0, this.clientOptions.location = void 0;
  }
  isVertexAI() {
    var n;
    return (n = this.clientOptions.vertexai) !== null && n !== void 0 ? n : !1;
  }
  getProject() {
    return this.clientOptions.project;
  }
  getLocation() {
    return this.clientOptions.location;
  }
  getApiVersion() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0)
      return this.clientOptions.httpOptions.apiVersion;
    throw new Error("API version is not set.");
  }
  getBaseUrl() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0)
      return this.clientOptions.httpOptions.baseUrl;
    throw new Error("Base URL is not set.");
  }
  getRequestUrl() {
    return this.getRequestUrlInternal(this.clientOptions.httpOptions);
  }
  getHeaders() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0)
      return this.clientOptions.httpOptions.headers;
    throw new Error("Headers are not set.");
  }
  getRequestUrlInternal(n) {
    if (!n || n.baseUrl === void 0 || n.apiVersion === void 0)
      throw new Error("HTTP options are not correctly set.");
    const u = [n.baseUrl.endsWith("/") ? n.baseUrl.slice(0, -1) : n.baseUrl];
    return n.apiVersion && n.apiVersion !== "" && u.push(n.apiVersion), u.join("/");
  }
  getBaseResourcePath() {
    return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
  }
  getApiKey() {
    return this.clientOptions.apiKey;
  }
  getWebsocketBaseUrl() {
    const n = this.getBaseUrl(), o = new URL(n);
    return o.protocol = o.protocol == "http:" ? "ws" : "wss", o.toString();
  }
  setBaseUrl(n) {
    if (this.clientOptions.httpOptions)
      this.clientOptions.httpOptions.baseUrl = n;
    else
      throw new Error("HTTP options are not correctly set.");
  }
  constructUrl(n, o, u) {
    const f = [this.getRequestUrlInternal(o)];
    return u && f.push(this.getBaseResourcePath()), n !== "" && f.push(n), new URL(`${f.join("/")}`);
  }
  shouldPrependVertexProjectPath(n) {
    return !(this.clientOptions.apiKey || !this.clientOptions.vertexai || n.path.startsWith("projects/") || n.httpMethod === "GET" && n.path.startsWith("publishers/google/models"));
  }
  async request(n) {
    let o = this.clientOptions.httpOptions;
    n.httpOptions && (o = this.patchHttpOptions(this.clientOptions.httpOptions, n.httpOptions));
    const u = this.shouldPrependVertexProjectPath(n), f = this.constructUrl(n.path, o, u);
    if (n.queryParams)
      for (const [m, g] of Object.entries(n.queryParams))
        f.searchParams.append(m, String(g));
    let d = {};
    if (n.httpMethod === "GET") {
      if (n.body && n.body !== "{}")
        throw new Error("Request body should be empty for GET request, but got non empty request body");
    } else
      d.body = n.body;
    return d = await this.includeExtraHttpOptionsToRequestInit(d, o, f.toString(), n.abortSignal), this.unaryApiCall(f, d, n.httpMethod);
  }
  patchHttpOptions(n, o) {
    const u = JSON.parse(JSON.stringify(n));
    for (const [f, d] of Object.entries(o))
      typeof d == "object" ? u[f] = Object.assign(Object.assign({}, u[f]), d) : d !== void 0 && (u[f] = d);
    return u;
  }
  async requestStream(n) {
    let o = this.clientOptions.httpOptions;
    n.httpOptions && (o = this.patchHttpOptions(this.clientOptions.httpOptions, n.httpOptions));
    const u = this.shouldPrependVertexProjectPath(n), f = this.constructUrl(n.path, o, u);
    (!f.searchParams.has("alt") || f.searchParams.get("alt") !== "sse") && f.searchParams.set("alt", "sse");
    let d = {};
    return d.body = n.body, d = await this.includeExtraHttpOptionsToRequestInit(d, o, f.toString(), n.abortSignal), this.streamApiCall(f, d, n.httpMethod);
  }
  async includeExtraHttpOptionsToRequestInit(n, o, u, f) {
    if (o && o.timeout || f) {
      const d = new AbortController(), m = d.signal;
      if (o.timeout && (o == null ? void 0 : o.timeout) > 0) {
        const g = setTimeout(() => d.abort(), o.timeout);
        g && typeof g.unref == "function" && g.unref();
      }
      f && f.addEventListener("abort", () => {
        d.abort();
      }), n.signal = m;
    }
    return o && o.extraBody !== null && k_(n, o.extraBody), n.headers = await this.getHeadersInternal(o, u), n;
  }
  async unaryApiCall(n, o, u) {
    return this.apiCall(n.toString(), Object.assign(Object.assign({}, o), { method: u })).then(async (f) => (await zm(f), new Ks(f))).catch((f) => {
      throw f instanceof Error ? f : new Error(JSON.stringify(f));
    });
  }
  async streamApiCall(n, o, u) {
    return this.apiCall(n.toString(), Object.assign(Object.assign({}, o), { method: u })).then(async (f) => (await zm(f), this.processStreamResponse(f))).catch((f) => {
      throw f instanceof Error ? f : new Error(JSON.stringify(f));
    });
  }
  processStreamResponse(n) {
    var o;
    return Ji(this, arguments, function* () {
      const f = (o = n == null ? void 0 : n.body) === null || o === void 0 ? void 0 : o.getReader(), d = new TextDecoder("utf-8");
      if (!f)
        throw new Error("Response body is empty");
      try {
        let m = "";
        for (; ;) {
          const { done: g, value: y } = yield qe(f.read());
          if (g) {
            if (m.trim().length > 0)
              throw new Error("Incomplete JSON segment at the end");
            break;
          }
          const h = d.decode(y, { stream: !0 });
          try {
            const S = JSON.parse(h);
            if ("error" in S) {
              const _ = JSON.parse(JSON.stringify(S.error)), R = _.status, V = _.code, b = `got status: ${R}. ${JSON.stringify(S)}`;
              if (V >= 400 && V < 600)
                throw new ya({
                  message: b,
                  status: V
                });
            }
          } catch (S) {
            if (S.name === "ApiError")
              throw S;
          }
          m += h;
          let v = m.match(bm);
          for (; v;) {
            const S = v[1];
            try {
              const _ = new Response(S, {
                headers: n == null ? void 0 : n.headers,
                status: n == null ? void 0 : n.status,
                statusText: n == null ? void 0 : n.statusText
              });
              yield yield qe(new Ks(_)), m = m.slice(v[0].length), v = m.match(bm);
            } catch (_) {
              throw new Error(`exception parsing stream chunk ${S}. ${_}`);
            }
          }
        }
      } finally {
        f.releaseLock();
      }
    });
  }
  async apiCall(n, o) {
    return fetch(n, o).catch((u) => {
      throw new Error(`exception ${u} sending request`);
    });
  }
  getDefaultHeaders() {
    const n = {}, o = B_ + " " + this.clientOptions.userAgentExtra;
    return n[z_] = o, n[$s] = o, n[V_] = "application/json", n;
  }
  async getHeadersInternal(n, o) {
    const u = new Headers();
    if (n && n.headers) {
      for (const [f, d] of Object.entries(n.headers))
        u.append(f, d);
      n.timeout && n.timeout > 0 && u.append(b_, String(Math.ceil(n.timeout / 1e3)));
    }
    return await this.clientOptions.auth.addAuthHeaders(u, o), u;
  }
  getFileName(n) {
    var o;
    let u = "";
    return typeof n == "string" && (u = n.replace(/[/\\]+$/, ""), u = (o = u.split(/[/\\]/).pop()) !== null && o !== void 0 ? o : ""), u;
  }
  /**
   * Uploads a file asynchronously using Gemini API only, this is not supported
   * in Vertex AI.
   *
   * @param file The string path to the file to be uploaded or a Blob object.
   * @param config Optional parameters specified in the `UploadFileConfig`
   *     interface. @see {@link types.UploadFileConfig}
   * @return A promise that resolves to a `File` object.
   * @throws An error if called on a Vertex AI client.
   * @throws An error if the `mimeType` is not provided and can not be inferred,
   */
  async uploadFile(n, o) {
    var u;
    const f = {};
    o != null && (f.mimeType = o.mimeType, f.name = o.name, f.displayName = o.displayName), f.name && !f.name.startsWith("files/") && (f.name = `files/${f.name}`);
    const d = this.clientOptions.uploader, m = await d.stat(n);
    f.sizeBytes = String(m.size);
    const g = (u = o == null ? void 0 : o.mimeType) !== null && u !== void 0 ? u : m.type;
    if (g === void 0 || g === "")
      throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
    f.mimeType = g;
    const y = {
      file: f
    }, h = this.getFileName(n), v = Y("upload/v1beta/files", y._url), S = await this.fetchUploadUrl(v, f.sizeBytes, f.mimeType, h, y, o == null ? void 0 : o.httpOptions);
    return d.upload(n, S, this);
  }
  /**
   * Uploads a file to a given file search store asynchronously using Gemini API only, this is not supported
   * in Vertex AI.
   *
   * @param fileSearchStoreName The name of the file search store to upload the file to.
   * @param file The string path to the file to be uploaded or a Blob object.
   * @param config Optional parameters specified in the `UploadFileConfig`
   *     interface. @see {@link UploadFileConfig}
   * @return A promise that resolves to a `File` object.
   * @throws An error if called on a Vertex AI client.
   * @throws An error if the `mimeType` is not provided and can not be inferred,
   */
  async uploadFileToFileSearchStore(n, o, u) {
    var f;
    const d = this.clientOptions.uploader, m = await d.stat(o), g = String(m.size), y = (f = u == null ? void 0 : u.mimeType) !== null && f !== void 0 ? f : m.type;
    if (y === void 0 || y === "")
      throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
    const h = `upload/v1beta/${n}:uploadToFileSearchStore`, v = this.getFileName(o), S = {};
    u != null && u.customMetadata && (S.customMetadata = u.customMetadata), u != null && u.chunkingConfig && (S.chunkingConfig = u.chunkingConfig);
    const _ = await this.fetchUploadUrl(h, g, y, v, S, u == null ? void 0 : u.httpOptions);
    return d.uploadToFileSearchStore(o, _, this);
  }
  /**
   * Downloads a file asynchronously to the specified path.
   *
   * @params params - The parameters for the download request, see {@link
   * types.DownloadFileParameters}
   */
  async downloadFile(n) {
    await this.clientOptions.downloader.download(n, this);
  }
  async fetchUploadUrl(n, o, u, f, d, m) {
    var g;
    let y = {};
    m ? y = m : y = {
      apiVersion: "",
      headers: Object.assign({ "Content-Type": "application/json", "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": `${o}`, "X-Goog-Upload-Header-Content-Type": `${u}` }, f ? { "X-Goog-Upload-File-Name": f } : {})
    };
    const h = await this.request({
      path: n,
      body: JSON.stringify(d),
      httpMethod: "POST",
      httpOptions: y
    });
    if (!h || !(h != null && h.headers))
      throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
    const v = (g = h == null ? void 0 : h.headers) === null || g === void 0 ? void 0 : g["x-goog-upload-url"];
    if (v === void 0)
      throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
    return v;
  }
}
async function zm(i) {
  var n;
  if (i === void 0)
    throw new Error("response is undefined");
  if (!i.ok) {
    const o = i.status;
    let u;
    !((n = i.headers.get("content-type")) === null || n === void 0) && n.includes("application/json") ? u = await i.json() : u = {
      error: {
        message: await i.text(),
        code: i.status,
        status: i.statusText
      }
    };
    const f = JSON.stringify(u);
    throw o >= 400 && o < 600 ? new ya({
      message: f,
      status: o
    }) : new Error(f);
  }
}
function k_(i, n) {
  if (!n || Object.keys(n).length === 0)
    return;
  if (i.body instanceof Blob) {
    console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
    return;
  }
  let o = {};
  if (typeof i.body == "string" && i.body.length > 0)
    try {
      const d = JSON.parse(i.body);
      if (typeof d == "object" && d !== null && !Array.isArray(d))
        o = d;
      else {
        console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
        return;
      }
    } catch {
      console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
      return;
    }
  function u(d, m) {
    const g = Object.assign({}, d);
    for (const y in m)
      if (Object.prototype.hasOwnProperty.call(m, y)) {
        const h = m[y], v = g[y];
        h && typeof h == "object" && !Array.isArray(h) && v && typeof v == "object" && !Array.isArray(v) ? g[y] = u(v, h) : (v && h && typeof v != typeof h && console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof h}. Overwriting.`), g[y] = h);
      }
    return g;
  }
  const f = u(o, n);
  i.body = JSON.stringify(f);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const O_ = "mcp_used/unknown";
let K_ = !1;
function gh(i) {
  for (const n of i)
    if (X_(n) || typeof n == "object" && "inputSchema" in n)
      return !0;
  return K_;
}
function yh(i) {
  var n;
  const o = (n = i[$s]) !== null && n !== void 0 ? n : "";
  i[$s] = (o + ` ${O_}`).trimStart();
}
function X_(i) {
  return i !== null && typeof i == "object" && i instanceof sr;
}
function Q_(i, n = 100) {
  return Ji(this, arguments, function* () {
    let u, f = 0;
    for (; f < n;) {
      const d = yield qe(i.listTools({ cursor: u }));
      for (const m of d.tools)
        yield yield qe(m), f++;
      if (!d.nextCursor)
        break;
      u = d.nextCursor;
    }
  });
}
class sr {
  constructor(n = [], o) {
    this.mcpTools = [], this.functionNameToMcpClient = {}, this.mcpClients = n, this.config = o;
  }
  /**
   * Creates a McpCallableTool.
   */
  static create(n, o) {
    return new sr(n, o);
  }
  /**
   * Validates the function names are not duplicate and initialize the function
   * name to MCP client mapping.
   *
   * @throws {Error} if the MCP tools from the MCP clients have duplicate tool
   *     names.
   */
  async initialize() {
    var n, o, u, f;
    if (this.mcpTools.length > 0)
      return;
    const d = {}, m = [];
    for (const v of this.mcpClients)
      try {
        for (var g = !0, y = (o = void 0, kl(Q_(v))), h; h = await y.next(), n = h.done, !n; g = !0) {
          f = h.value, g = !1;
          const S = f;
          m.push(S);
          const _ = S.name;
          if (d[_])
            throw new Error(`Duplicate function name ${_} found in MCP tools. Please ensure function names are unique.`);
          d[_] = v;
        }
      } catch (S) {
        o = { error: S };
      } finally {
        try {
          !g && !n && (u = y.return) && await u.call(y);
        } finally {
          if (o) throw o.error;
        }
      }
    this.mcpTools = m, this.functionNameToMcpClient = d;
  }
  async tool() {
    return await this.initialize(), Bv(this.mcpTools, this.config);
  }
  async callTool(n) {
    await this.initialize();
    const o = [];
    for (const u of n)
      if (u.name in this.functionNameToMcpClient) {
        const f = this.functionNameToMcpClient[u.name];
        let d;
        this.config.timeout && (d = {
          timeout: this.config.timeout
        });
        const m = await f.callTool(
          {
            name: u.name,
            arguments: u.args
          },
          // Set the result schema to undefined to allow MCP to rely on the
          // default schema.
          void 0,
          d
        );
        o.push({
          functionResponse: {
            name: u.name,
            response: m.isError ? { error: m } : m
          }
        });
      }
    return o;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
async function Z_(i, n, o) {
  const u = new qv();
  let f;
  o.data instanceof Blob ? f = JSON.parse(await o.data.text()) : f = JSON.parse(o.data), Object.assign(u, f), n(u);
}
class W_ {
  constructor(n, o, u) {
    this.apiClient = n, this.auth = o, this.webSocketFactory = u;
  }
  /**
       Establishes a connection to the specified model and returns a
       LiveMusicSession object representing that connection.
  
       @experimental
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model = 'models/lyria-realtime-exp';
       const session = await ai.live.music.connect({
         model: model,
         callbacks: {
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */
  async connect(n) {
    var o, u;
    if (this.apiClient.isVertexAI())
      throw new Error("Live music is not supported for Vertex AI.");
    console.warn("Live music generation is experimental and may change in future versions.");
    const f = this.apiClient.getWebsocketBaseUrl(), d = this.apiClient.getApiVersion(), m = e0(this.apiClient.getDefaultHeaders()), g = this.apiClient.getApiKey(), y = `${f}/ws/google.ai.generativelanguage.${d}.GenerativeService.BidiGenerateMusic?key=${g}`;
    let h = () => {
    };
    const v = new Promise((z) => {
      h = z;
    }), S = n.callbacks, _ = function () {
      h({});
    }, R = this.apiClient, V = {
      onopen: _,
      onmessage: (z) => {
        Z_(R, S.onmessage, z);
      },
      onerror: (o = S == null ? void 0 : S.onerror) !== null && o !== void 0 ? o : function (z) {
      },
      onclose: (u = S == null ? void 0 : S.onclose) !== null && u !== void 0 ? u : function (z) {
      }
    }, b = this.webSocketFactory.create(y, j_(m), V);
    b.connect(), await v;
    const X = { setup: { model: Te(this.apiClient, n.model) } };
    return b.send(JSON.stringify(X)), new $_(b, this.apiClient);
  }
}
class $_ {
  constructor(n, o) {
    this.conn = n, this.apiClient = o;
  }
  /**
      Sets inputs to steer music generation. Updates the session's current
      weighted prompts.
  
      @param params - Contains one property, `weightedPrompts`.
  
        - `weightedPrompts` to send to the model; weights are normalized to
          sum to 1.0.
  
      @experimental
     */
  async setWeightedPrompts(n) {
    if (!n.weightedPrompts || Object.keys(n.weightedPrompts).length === 0)
      throw new Error("Weighted prompts must be set and contain at least one entry.");
    const o = bS(n);
    this.conn.send(JSON.stringify({ clientContent: o }));
  }
  /**
      Sets a configuration to the model. Updates the session's current
      music generation config.
  
      @param params - Contains one property, `musicGenerationConfig`.
  
        - `musicGenerationConfig` to set in the model. Passing an empty or
      undefined config to the model will reset the config to defaults.
  
      @experimental
     */
  async setMusicGenerationConfig(n) {
    n.musicGenerationConfig || (n.musicGenerationConfig = {});
    const o = VS(n);
    this.conn.send(JSON.stringify(o));
  }
  sendPlaybackControl(n) {
    const o = { playbackControl: n };
    this.conn.send(JSON.stringify(o));
  }
  /**
   * Start the music stream.
   *
   * @experimental
   */
  play() {
    this.sendPlaybackControl(Yi.PLAY);
  }
  /**
   * Temporarily halt the music stream. Use `play` to resume from the current
   * position.
   *
   * @experimental
   */
  pause() {
    this.sendPlaybackControl(Yi.PAUSE);
  }
  /**
   * Stop the music stream and reset the state. Retains the current prompts
   * and config.
   *
   * @experimental
   */
  stop() {
    this.sendPlaybackControl(Yi.STOP);
  }
  /**
   * Resets the context of the music generation without stopping it.
   * Retains the current prompts and config.
   *
   * @experimental
   */
  resetContext() {
    this.sendPlaybackControl(Yi.RESET_CONTEXT);
  }
  /**
       Terminates the WebSocket connection.
  
       @experimental
     */
  close() {
    this.conn.close();
  }
}
function j_(i) {
  const n = {};
  return i.forEach((o, u) => {
    n[u] = o;
  }), n;
}
function e0(i) {
  const n = new Headers();
  for (const [o, u] of Object.entries(i))
    n.append(o, u);
  return n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const t0 = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function n0(i, n, o) {
  const u = new wv();
  let f;
  o.data instanceof Blob ? f = await o.data.text() : o.data instanceof ArrayBuffer ? f = new TextDecoder().decode(o.data) : f = o.data;
  const d = JSON.parse(f);
  if (i.isVertexAI()) {
    const m = BS(d);
    Object.assign(u, m);
  } else
    Object.assign(u, d);
  n(u);
}
class i0 {
  constructor(n, o, u) {
    this.apiClient = n, this.auth = o, this.webSocketFactory = u, this.music = new W_(this.apiClient, this.auth, this.webSocketFactory);
  }
  /**
       Establishes a connection to the specified model with the given
       configuration and returns a Session object representing that connection.
  
       @experimental Built-in MCP support is an experimental feature, may change in
       future versions.
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-live-2.5-flash-preview';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         },
         callbacks: {
           onopen: () => {
             console.log('Connected to the socket.');
           },
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */
  async connect(n) {
    var o, u, f, d, m, g;
    if (n.config && n.config.httpOptions)
      throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
    const y = this.apiClient.getWebsocketBaseUrl(), h = this.apiClient.getApiVersion();
    let v;
    const S = this.apiClient.getHeaders();
    n.config && n.config.tools && gh(n.config.tools) && yh(S);
    const _ = u0(S);
    if (this.apiClient.isVertexAI())
      v = `${y}/ws/google.cloud.aiplatform.${h}.LlmBidiService/BidiGenerateContent`, await this.auth.addAuthHeaders(_, v);
    else {
      const $ = this.apiClient.getApiKey();
      let ce = "BidiGenerateContent", _e = "key";
      $ != null && $.startsWith("auth_tokens/") && (console.warn("Warning: Ephemeral token support is experimental and may change in future versions."), h !== "v1alpha" && console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."), ce = "BidiGenerateContentConstrained", _e = "access_token"), v = `${y}/ws/google.ai.generativelanguage.${h}.GenerativeService.${ce}?${_e}=${$}`;
    }
    let R = () => {
    };
    const V = new Promise(($) => {
      R = $;
    }), b = n.callbacks, F = function () {
      var $;
      ($ = b == null ? void 0 : b.onopen) === null || $ === void 0 || $.call(b), R({});
    }, k = this.apiClient, X = {
      onopen: F,
      onmessage: ($) => {
        n0(k, b.onmessage, $);
      },
      onerror: (o = b == null ? void 0 : b.onerror) !== null && o !== void 0 ? o : function ($) {
      },
      onclose: (u = b == null ? void 0 : b.onclose) !== null && u !== void 0 ? u : function ($) {
      }
    }, z = this.webSocketFactory.create(v, a0(_), X);
    z.connect(), await V;
    let Z = Te(this.apiClient, n.model);
    if (this.apiClient.isVertexAI() && Z.startsWith("publishers/")) {
      const $ = this.apiClient.getProject(), ce = this.apiClient.getLocation();
      Z = `projects/${$}/locations/${ce}/` + Z;
    }
    let te = {};
    this.apiClient.isVertexAI() && ((f = n.config) === null || f === void 0 ? void 0 : f.responseModalities) === void 0 && (n.config === void 0 ? n.config = { responseModalities: [pa.AUDIO] } : n.config.responseModalities = [pa.AUDIO]), !((d = n.config) === null || d === void 0) && d.generationConfig && console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
    const j = (g = (m = n.config) === null || m === void 0 ? void 0 : m.tools) !== null && g !== void 0 ? g : [], J = [];
    for (const $ of j)
      if (this.isCallableTool($)) {
        const ce = $;
        J.push(await ce.tool());
      } else
        J.push($);
    J.length > 0 && (n.config.tools = J);
    const ge = {
      model: Z,
      config: n.config,
      callbacks: n.callbacks
    };
    return this.apiClient.isVertexAI() ? te = HS(this.apiClient, ge) : te = GS(this.apiClient, ge), delete te.config, z.send(JSON.stringify(te)), new o0(z, this.apiClient);
  }
  // TODO: b/416041229 - Abstract this method to a common place.
  isCallableTool(n) {
    return "callTool" in n && typeof n.callTool == "function";
  }
}
const l0 = {
  turnComplete: !0
};
class o0 {
  constructor(n, o) {
    this.conn = n, this.apiClient = o;
  }
  tLiveClientContent(n, o) {
    if (o.turns !== null && o.turns !== void 0) {
      let u = [];
      try {
        u = wt(o.turns), n.isVertexAI() || (u = u.map((f) => va(f)));
      } catch {
        throw new Error(`Failed to parse client content "turns", type: '${typeof o.turns}'`);
      }
      return {
        clientContent: { turns: u, turnComplete: o.turnComplete }
      };
    }
    return {
      clientContent: { turnComplete: o.turnComplete }
    };
  }
  tLiveClienttToolResponse(n, o) {
    let u = [];
    if (o.functionResponses == null)
      throw new Error("functionResponses is required.");
    if (Array.isArray(o.functionResponses) ? u = o.functionResponses : u = [o.functionResponses], u.length === 0)
      throw new Error("functionResponses is required.");
    for (const d of u) {
      if (typeof d != "object" || d === null || !("name" in d) || !("response" in d))
        throw new Error(`Could not parse function response, type '${typeof d}'.`);
      if (!n.isVertexAI() && !("id" in d))
        throw new Error(t0);
    }
    return {
      toolResponse: { functionResponses: u }
    };
  }
  /**
      Send a message over the established connection.
  
      @param params - Contains two **optional** properties, `turns` and
          `turnComplete`.
  
        - `turns` will be converted to a `Content[]`
        - `turnComplete: true` [default] indicates that you are done sending
          content and expect a response. If `turnComplete: false`, the server
          will wait for additional messages before starting generation.
  
      @experimental
  
      @remarks
      There are two ways to send messages to the live API:
      `sendClientContent` and `sendRealtimeInput`.
  
      `sendClientContent` messages are added to the model context **in order**.
      Having a conversation using `sendClientContent` messages is roughly
      equivalent to using the `Chat.sendMessageStream`, except that the state of
      the `chat` history is stored on the API server instead of locally.
  
      Because of `sendClientContent`'s order guarantee, the model cannot respons
      as quickly to `sendClientContent` messages as to `sendRealtimeInput`
      messages. This makes the biggest difference when sending objects that have
      significant preprocessing time (typically images).
  
      The `sendClientContent` message sends a `Content[]`
      which has more options than the `Blob` sent by `sendRealtimeInput`.
  
      So the main use-cases for `sendClientContent` over `sendRealtimeInput` are:
  
      - Sending anything that can't be represented as a `Blob` (text,
      `sendClientContent({turns="Hello?"}`)).
      - Managing turns when not using audio input and voice activity detection.
        (`sendClientContent({turnComplete:true})` or the short form
      `sendClientContent()`)
      - Prefilling a conversation context
        ```
        sendClientContent({
            turns: [
              Content({role:user, parts:...}),
              Content({role:user, parts:...}),
              ...
            ]
        })
        ```
      @experimental
     */
  sendClientContent(n) {
    n = Object.assign(Object.assign({}, l0), n);
    const o = this.tLiveClientContent(this.apiClient, n);
    this.conn.send(JSON.stringify(o));
  }
  /**
      Send a realtime message over the established connection.
  
      @param params - Contains one property, `media`.
  
        - `media` will be converted to a `Blob`
  
      @experimental
  
      @remarks
      Use `sendRealtimeInput` for realtime audio chunks and video frames (images).
  
      With `sendRealtimeInput` the api will respond to audio automatically
      based on voice activity detection (VAD).
  
      `sendRealtimeInput` is optimized for responsivness at the expense of
      deterministic ordering guarantees. Audio and video tokens are to the
      context when they become available.
  
      Note: The Call signature expects a `Blob` object, but only a subset
      of audio and image mimetypes are allowed.
     */
  sendRealtimeInput(n) {
    let o = {};
    this.apiClient.isVertexAI() ? o = {
      realtimeInput: PS(n)
    } : o = {
      realtimeInput: zS(n)
    }, this.conn.send(JSON.stringify(o));
  }
  /**
      Send a function response message over the established connection.
  
      @param params - Contains property `functionResponses`.
  
        - `functionResponses` will be converted to a `functionResponses[]`
  
      @remarks
      Use `sendFunctionResponse` to reply to `LiveServerToolCall` from the server.
  
      Use {@link types.LiveConnectConfig#tools} to configure the callable functions.
  
      @experimental
     */
  sendToolResponse(n) {
    if (n.functionResponses == null)
      throw new Error("Tool response parameters are required.");
    const o = this.tLiveClienttToolResponse(this.apiClient, n);
    this.conn.send(JSON.stringify(o));
  }
  /**
       Terminates the WebSocket connection.
  
       @experimental
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-live-2.5-flash-preview';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         }
       });
  
       session.close();
       ```
     */
  close() {
    this.conn.close();
  }
}
function a0(i) {
  const n = {};
  return i.forEach((o, u) => {
    n[u] = o;
  }), n;
}
function u0(i) {
  const n = new Headers();
  for (const [o, u] of Object.entries(i))
    n.append(o, u);
  return n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Pm = 10;
function Bm(i) {
  var n, o, u;
  if (!((n = i == null ? void 0 : i.automaticFunctionCalling) === null || n === void 0) && n.disable)
    return !0;
  let f = !1;
  for (const m of (o = i == null ? void 0 : i.tools) !== null && o !== void 0 ? o : [])
    if (ki(m)) {
      f = !0;
      break;
    }
  if (!f)
    return !0;
  const d = (u = i == null ? void 0 : i.automaticFunctionCalling) === null || u === void 0 ? void 0 : u.maximumRemoteCalls;
  return d && (d < 0 || !Number.isInteger(d)) || d == 0 ? (console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", d), !0) : !1;
}
function ki(i) {
  return "callTool" in i && typeof i.callTool == "function";
}
function s0(i) {
  var n, o, u;
  return (u = (o = (n = i.config) === null || n === void 0 ? void 0 : n.tools) === null || o === void 0 ? void 0 : o.some((f) => ki(f))) !== null && u !== void 0 ? u : !1;
}
function Ym(i) {
  var n;
  const o = [];
  return !((n = i == null ? void 0 : i.config) === null || n === void 0) && n.tools && i.config.tools.forEach((u, f) => {
    if (ki(u))
      return;
    const d = u;
    d.functionDeclarations && d.functionDeclarations.length > 0 && o.push(f);
  }), o;
}
function Fm(i) {
  var n;
  return !(!((n = i == null ? void 0 : i.automaticFunctionCalling) === null || n === void 0) && n.ignoreCallHistory);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class r0 extends un {
  constructor(n) {
    super(), this.apiClient = n, this.generateContent = async (o) => {
      var u, f, d, m, g;
      const y = await this.processParamsMaybeAddMcpUsage(o);
      if (this.maybeMoveToResponseJsonSchem(o), !s0(o) || Bm(o.config))
        return await this.generateContentInternal(y);
      const h = Ym(o);
      if (h.length > 0) {
        const b = h.map((F) => `tools[${F}]`).join(", ");
        throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${b}.`);
      }
      let v, S;
      const _ = wt(y.contents), R = (d = (f = (u = y.config) === null || u === void 0 ? void 0 : u.automaticFunctionCalling) === null || f === void 0 ? void 0 : f.maximumRemoteCalls) !== null && d !== void 0 ? d : Pm;
      let V = 0;
      for (; V < R && (v = await this.generateContentInternal(y), !(!v.functionCalls || v.functionCalls.length === 0));) {
        const b = v.candidates[0].content, F = [];
        for (const k of (g = (m = o.config) === null || m === void 0 ? void 0 : m.tools) !== null && g !== void 0 ? g : [])
          if (ki(k)) {
            const z = await k.callTool(v.functionCalls);
            F.push(...z);
          }
        V++, S = {
          role: "user",
          parts: F
        }, y.contents = wt(y.contents), y.contents.push(b), y.contents.push(S), Fm(y.config) && (_.push(b), _.push(S));
      }
      return Fm(y.config) && (v.automaticFunctionCallingHistory = _), v;
    }, this.generateContentStream = async (o) => {
      var u, f, d, m, g;
      if (this.maybeMoveToResponseJsonSchem(o), Bm(o.config)) {
        const S = await this.processParamsMaybeAddMcpUsage(o);
        return await this.generateContentStreamInternal(S);
      }
      const y = Ym(o);
      if (y.length > 0) {
        const S = y.map((_) => `tools[${_}]`).join(", ");
        throw new Error(`Incompatible tools found at ${S}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`);
      }
      const h = (d = (f = (u = o == null ? void 0 : o.config) === null || u === void 0 ? void 0 : u.toolConfig) === null || f === void 0 ? void 0 : f.functionCallingConfig) === null || d === void 0 ? void 0 : d.streamFunctionCallArguments, v = (g = (m = o == null ? void 0 : o.config) === null || m === void 0 ? void 0 : m.automaticFunctionCalling) === null || g === void 0 ? void 0 : g.disable;
      if (h && !v)
        throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");
      return await this.processAfcStream(o);
    }, this.generateImages = async (o) => await this.generateImagesInternal(o).then((u) => {
      var f;
      let d;
      const m = [];
      if (u != null && u.generatedImages)
        for (const y of u.generatedImages)
          y && (y != null && y.safetyAttributes) && ((f = y == null ? void 0 : y.safetyAttributes) === null || f === void 0 ? void 0 : f.contentType) === "Positive Prompt" ? d = y == null ? void 0 : y.safetyAttributes : m.push(y);
      let g;
      return d ? g = {
        generatedImages: m,
        positivePromptSafetyAttributes: d,
        sdkHttpResponse: u.sdkHttpResponse
      } : g = {
        generatedImages: m,
        sdkHttpResponse: u.sdkHttpResponse
      }, g;
    }), this.list = async (o) => {
      var u;
      const m = {
        config: Object.assign(Object.assign({}, {
          queryBase: !0
        }), o == null ? void 0 : o.config)
      };
      if (this.apiClient.isVertexAI() && !m.config.queryBase) {
        if (!((u = m.config) === null || u === void 0) && u.filter)
          throw new Error("Filtering tuned models list for Vertex AI is not currently supported");
        m.config.filter = "labels.tune-type:*";
      }
      return new ii(an.PAGED_ITEM_MODELS, (g) => this.listInternal(g), await this.listInternal(m), m);
    }, this.editImage = async (o) => {
      const u = {
        model: o.model,
        prompt: o.prompt,
        referenceImages: [],
        config: o.config
      };
      return o.referenceImages && o.referenceImages && (u.referenceImages = o.referenceImages.map((f) => f.toReferenceImageAPI())), await this.editImageInternal(u);
    }, this.upscaleImage = async (o) => {
      let u = {
        numberOfImages: 1,
        mode: "upscale"
      };
      o.config && (u = Object.assign(Object.assign({}, u), o.config));
      const f = {
        model: o.model,
        image: o.image,
        upscaleFactor: o.upscaleFactor,
        config: u
      };
      return await this.upscaleImageInternal(f);
    }, this.generateVideos = async (o) => {
      var u, f, d, m, g, y;
      if ((o.prompt || o.image || o.video) && o.source)
        throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");
      return this.apiClient.isVertexAI() || (!((u = o.video) === null || u === void 0) && u.uri && (!((f = o.video) === null || f === void 0) && f.videoBytes) ? o.video = {
        uri: o.video.uri,
        mimeType: o.video.mimeType
      } : !((m = (d = o.source) === null || d === void 0 ? void 0 : d.video) === null || m === void 0) && m.uri && (!((y = (g = o.source) === null || g === void 0 ? void 0 : g.video) === null || y === void 0) && y.videoBytes) && (o.source.video = {
        uri: o.source.video.uri,
        mimeType: o.source.video.mimeType
      })), await this.generateVideosInternal(o);
    };
  }
  /**
   * This logic is needed for GenerateContentConfig only.
   * Previously we made GenerateContentConfig.responseSchema field to accept
   * unknown. Since v1.9.0, we switch to use backend JSON schema support.
   * To maintain backward compatibility, we move the data that was treated as
   * JSON schema from the responseSchema field to the responseJsonSchema field.
   */
  maybeMoveToResponseJsonSchem(n) {
    n.config && n.config.responseSchema && (n.config.responseJsonSchema || Object.keys(n.config.responseSchema).includes("$schema") && (n.config.responseJsonSchema = n.config.responseSchema, delete n.config.responseSchema));
  }
  /**
   * Transforms the CallableTools in the parameters to be simply Tools, it
   * copies the params into a new object and replaces the tools, it does not
   * modify the original params. Also sets the MCP usage header if there are
   * MCP tools in the parameters.
   */
  async processParamsMaybeAddMcpUsage(n) {
    var o, u, f;
    const d = (o = n.config) === null || o === void 0 ? void 0 : o.tools;
    if (!d)
      return n;
    const m = await Promise.all(d.map(async (y) => ki(y) ? await y.tool() : y)), g = {
      model: n.model,
      contents: n.contents,
      config: Object.assign(Object.assign({}, n.config), { tools: m })
    };
    if (g.config.tools = m, n.config && n.config.tools && gh(n.config.tools)) {
      const y = (f = (u = n.config.httpOptions) === null || u === void 0 ? void 0 : u.headers) !== null && f !== void 0 ? f : {};
      let h = Object.assign({}, y);
      Object.keys(h).length === 0 && (h = this.apiClient.getDefaultHeaders()), yh(h), g.config.httpOptions = Object.assign(Object.assign({}, n.config.httpOptions), { headers: h });
    }
    return g;
  }
  async initAfcToolsMap(n) {
    var o, u, f;
    const d = /* @__PURE__ */ new Map();
    for (const m of (u = (o = n.config) === null || o === void 0 ? void 0 : o.tools) !== null && u !== void 0 ? u : [])
      if (ki(m)) {
        const g = m, y = await g.tool();
        for (const h of (f = y.functionDeclarations) !== null && f !== void 0 ? f : []) {
          if (!h.name)
            throw new Error("Function declaration name is required.");
          if (d.has(h.name))
            throw new Error(`Duplicate tool declaration name: ${h.name}`);
          d.set(h.name, g);
        }
      }
    return d;
  }
  async processAfcStream(n) {
    var o, u, f;
    const d = (f = (u = (o = n.config) === null || o === void 0 ? void 0 : o.automaticFunctionCalling) === null || u === void 0 ? void 0 : u.maximumRemoteCalls) !== null && f !== void 0 ? f : Pm;
    let m = !1, g = 0;
    const y = await this.initAfcToolsMap(n);
    return (function (h, v, S) {
      var _, R;
      return Ji(this, arguments, function* () {
        for (var V, b, F, k; g < d;) {
          m && (g++, m = !1);
          const te = yield qe(h.processParamsMaybeAddMcpUsage(S)), j = yield qe(h.generateContentStreamInternal(te)), J = [], ge = [];
          try {
            for (var X = !0, z = (b = void 0, kl(j)), Z; Z = yield qe(z.next()), V = Z.done, !V; X = !0) {
              k = Z.value, X = !1;
              const $ = k;
              if (yield yield qe($), $.candidates && (!((_ = $.candidates[0]) === null || _ === void 0) && _.content)) {
                ge.push($.candidates[0].content);
                for (const ce of (R = $.candidates[0].content.parts) !== null && R !== void 0 ? R : [])
                  if (g < d && ce.functionCall) {
                    if (!ce.functionCall.name)
                      throw new Error("Function call name was not returned by the model.");
                    if (v.has(ce.functionCall.name)) {
                      const _e = yield qe(v.get(ce.functionCall.name).callTool([ce.functionCall]));
                      J.push(..._e);
                    } else
                      throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${ce.functionCall.name}`);
                  }
              }
            }
          } catch ($) {
            b = { error: $ };
          } finally {
            try {
              !X && !V && (F = z.return) && (yield qe(F.call(z)));
            } finally {
              if (b) throw b.error;
            }
          }
          if (J.length > 0) {
            m = !0;
            const $ = new Jl();
            $.candidates = [
              {
                content: {
                  role: "user",
                  parts: J
                }
              }
            ], yield yield qe($);
            const ce = [];
            ce.push(...ge), ce.push({
              role: "user",
              parts: J
            });
            const _e = wt(S.contents).concat(ce);
            S.contents = _e;
          } else
            break;
        }
      });
    })(this, y, n);
  }
  async generateContentInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = Gm(this.apiClient, n);
      return g = Y("{model}:generateContent", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = Vm(v), _ = new Jl();
        return Object.assign(_, S), _;
      });
    } else {
      const h = Lm(this.apiClient, n);
      return g = Y("{model}:generateContent", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = Hm(v), _ = new Jl();
        return Object.assign(_, S), _;
      });
    }
  }
  async generateContentStreamInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = Gm(this.apiClient, n);
      return g = Y("{model}:streamGenerateContent?alt=sse", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.requestStream({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }), m.then(function (S) {
        return Ji(this, arguments, function* () {
          var _, R, V, b;
          try {
            for (var F = !0, k = kl(S), X; X = yield qe(k.next()), _ = X.done, !_; F = !0) {
              b = X.value, F = !1;
              const z = b, Z = Vm(yield qe(z.json()));
              Z.sdkHttpResponse = {
                headers: z.headers
              };
              const te = new Jl();
              Object.assign(te, Z), yield yield qe(te);
            }
          } catch (z) {
            R = { error: z };
          } finally {
            try {
              !F && !_ && (V = k.return) && (yield qe(V.call(k)));
            } finally {
              if (R) throw R.error;
            }
          }
        });
      });
    } else {
      const h = Lm(this.apiClient, n);
      return g = Y("{model}:streamGenerateContent?alt=sse", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.requestStream({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }), m.then(function (S) {
        return Ji(this, arguments, function* () {
          var _, R, V, b;
          try {
            for (var F = !0, k = kl(S), X; X = yield qe(k.next()), _ = X.done, !_; F = !0) {
              b = X.value, F = !1;
              const z = b, Z = Hm(yield qe(z.json()));
              Z.sdkHttpResponse = {
                headers: z.headers
              };
              const te = new Jl();
              Object.assign(te, Z), yield yield qe(te);
            }
          } catch (z) {
            R = { error: z };
          } finally {
            try {
              !F && !_ && (V = k.return) && (yield qe(V.call(k)));
            } finally {
              if (R) throw R.error;
            }
          }
        });
      });
    }
  }
  /**
   * Calculates embeddings for the given contents. Only text is supported.
   *
   * @param params - The parameters for embedding contents.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.embedContent({
   *  model: 'text-embedding-004',
   *  contents: [
   *    'What is your name?',
   *    'What is your favorite color?',
   *  ],
   *  config: {
   *    outputDimensionality: 64,
   *  },
   * });
   * console.log(response);
   * ```
   */
  async embedContent(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = yE(this.apiClient, n);
      return g = Y("{model}:predict", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = TE(v), _ = new vm();
        return Object.assign(_, S), _;
      });
    } else {
      const h = gE(this.apiClient, n);
      return g = Y("{model}:batchEmbedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = vE(v), _ = new vm();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Private method for generating images.
   */
  async generateImagesInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = UE(this.apiClient, n);
      return g = Y("{model}:predict", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = wE(v), _ = new Tm();
        return Object.assign(_, S), _;
      });
    } else {
      const h = IE(this.apiClient, n);
      return g = Y("{model}:predict", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = xE(v), _ = new Tm();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Private method for editing an image.
   */
  async editImageInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = dE(this.apiClient, n);
      return d = Y("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => {
        const h = pE(y), v = new Ev();
        return Object.assign(v, h), v;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Private method for upscaling an image.
   */
  async upscaleImageInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = U_(this.apiClient, n);
      return d = Y("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => {
        const h = x_(y), v = new _v();
        return Object.assign(v, h), v;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Recontextualizes an image.
   *
   * There are two types of recontextualization currently supported:
   * 1) Imagen Product Recontext - Generate images of products in new scenes
   *    and contexts.
   * 2) Virtual Try-On: Generate images of persons modeling fashion products.
   *
   * @param params - The parameters for recontextualizing an image.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response1 = await ai.models.recontextImage({
   *  model: 'imagen-product-recontext-preview-06-30',
   *  source: {
   *    prompt: 'In a modern kitchen setting.',
   *    productImages: [productImage],
   *  },
   *  config: {
   *    numberOfImages: 1,
   *  },
   * });
   * console.log(response1?.generatedImages?.[0]?.image?.imageBytes);
   *
   * const response2 = await ai.models.recontextImage({
   *  model: 'virtual-try-on-preview-08-04',
   *  source: {
   *    personImage: personImage,
   *    productImages: [productImage],
   *  },
   *  config: {
   *    numberOfImages: 1,
   *  },
   * });
   * console.log(response2?.generatedImages?.[0]?.image?.imageBytes);
   * ```
   */
  async recontextImage(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = c_(this.apiClient, n);
      return d = Y("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = d_(y), v = new Cv();
        return Object.assign(v, h), v;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Segments an image, creating a mask of a specified area.
   *
   * @param params - The parameters for segmenting an image.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.segmentImage({
   *  model: 'image-segmentation-001',
   *  source: {
   *    image: image,
   *  },
   *  config: {
   *    mode: 'foreground',
   *  },
   * });
   * console.log(response?.generatedMasks?.[0]?.mask?.imageBytes);
   * ```
   */
  async segmentImage(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = v_(this.apiClient, n);
      return d = Y("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = T_(y), v = new Av();
        return Object.assign(v, h), v;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Fetches information about a model by name.
   *
   * @example
   * ```ts
   * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
   * ```
   */
  async get(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = QE(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => Ws(v));
    } else {
      const h = XE(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => Zs(v));
    }
  }
  async listInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = l_(this.apiClient, n);
      return g = Y("{models_url}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = a_(v), _ = new Sm();
        return Object.assign(_, S), _;
      });
    } else {
      const h = i_(this.apiClient, n);
      return g = Y("{models_url}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = o_(v), _ = new Sm();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Updates a tuned model by its name.
   *
   * @param params - The parameters for updating the model.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.update({
   *   model: 'tuned-model-name',
   *   config: {
   *     displayName: 'New display name',
   *     description: 'New description',
   *   },
   * });
   * ```
   */
  async update(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = D_(this.apiClient, n);
      return g = Y("{model}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "PATCH",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => Ws(v));
    } else {
      const h = N_(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "PATCH",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => Zs(v));
    }
  }
  /**
   * Deletes a tuned model by its name.
   *
   * @param params - The parameters for deleting the model.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.delete({model: 'tuned-model-name'});
   * ```
   */
  async delete(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = sE(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "DELETE",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = fE(v), _ = new Em();
        return Object.assign(_, S), _;
      });
    } else {
      const h = uE(this.apiClient, n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "DELETE",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = rE(v), _ = new Em();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Counts the number of tokens in the given contents. Multimodal input is
   * supported for Gemini models.
   *
   * @param params - The parameters for counting tokens.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.countTokens({
   *  model: 'gemini-2.0-flash',
   *  contents: 'The quick brown fox jumps over the lazy dog.'
   * });
   * console.log(response);
   * ```
   */
  async countTokens(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = lE(this.apiClient, n);
      return g = Y("{model}:countTokens", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = aE(v), _ = new _m();
        return Object.assign(_, S), _;
      });
    } else {
      const h = iE(this.apiClient, n);
      return g = Y("{model}:countTokens", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = oE(v), _ = new _m();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Given a list of contents, returns a corresponding TokensInfo containing
   * the list of tokens and list of token ids.
   *
   * This method is not supported by the Gemini Developer API.
   *
   * @param params - The parameters for computing tokens.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.computeTokens({
   *  model: 'gemini-2.0-flash',
   *  contents: 'What is your name?'
   * });
   * console.log(response);
   * ```
   */
  async computeTokens(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = ZS(this.apiClient, n);
      return d = Y("{model}:computeTokens", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => {
        const h = WS(y), v = new Mv();
        return Object.assign(v, h), v;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Private method for generating videos.
   */
  async generateVideosInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = bE(this.apiClient, n);
      return g = Y("{model}:predictLongRunning", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m.then((v) => {
        const S = HE(v), _ = new ma();
        return Object.assign(_, S), _;
      });
    } else {
      const h = VE(this.apiClient, n);
      return g = Y("{model}:predictLongRunning", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m.then((v) => {
        const S = GE(v), _ = new ma();
        return Object.assign(_, S), _;
      });
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class f0 extends un {
  constructor(n) {
    super(), this.apiClient = n;
  }
  /**
   * Gets the status of a long-running operation.
   *
   * @param parameters The parameters for the get operation request.
   * @return The updated Operation object, with the latest status or result.
   */
  async getVideosOperation(n) {
    const o = n.operation, u = n.config;
    if (o.name === void 0 || o.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const f = o.name.split("/operations/")[0];
      let d;
      u && "httpOptions" in u && (d = u.httpOptions);
      const m = await this.fetchPredictVideosOperationInternal({
        operationName: o.name,
        resourceName: f,
        config: { httpOptions: d }
      });
      return o._fromAPIResponse({
        apiResponse: m,
        _isVertexAI: !0
      });
    } else {
      const f = await this.getVideosOperationInternal({
        operationName: o.name,
        config: u
      });
      return o._fromAPIResponse({
        apiResponse: f,
        _isVertexAI: !1
      });
    }
  }
  /**
   * Gets the status of a long-running operation.
   *
   * @param parameters The parameters for the get operation request.
   * @return The updated Operation object, with the latest status or result.
   */
  async get(n) {
    const o = n.operation, u = n.config;
    if (o.name === void 0 || o.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const f = o.name.split("/operations/")[0];
      let d;
      u && "httpOptions" in u && (d = u.httpOptions);
      const m = await this.fetchPredictVideosOperationInternal({
        operationName: o.name,
        resourceName: f,
        config: { httpOptions: d }
      });
      return o._fromAPIResponse({
        apiResponse: m,
        _isVertexAI: !0
      });
    } else {
      const f = await this.getVideosOperationInternal({
        operationName: o.name,
        config: u
      });
      return o._fromAPIResponse({
        apiResponse: f,
        _isVertexAI: !1
      });
    }
  }
  async getVideosOperationInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = hv(n);
      return g = Y("{operationName}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json()), m;
    } else {
      const h = mv(n);
      return g = Y("{operationName}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json()), m;
    }
  }
  async fetchPredictVideosOperationInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = uv(n);
      return d = Y("{resourceName}:fetchPredictOperation", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f;
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function c0(i) {
  const n = {}, o = s(i, ["data"]);
  if (o != null && r(n, ["data"], o), s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function d0(i) {
  const n = {}, o = s(i, ["parts"]);
  if (o != null) {
    let f = o;
    Array.isArray(f) && (f = f.map((d) => E0(d))), r(n, ["parts"], f);
  }
  const u = s(i, ["role"]);
  return u != null && r(n, ["role"], u), n;
}
function p0(i, n, o) {
  const u = {}, f = s(n, ["expireTime"]);
  o !== void 0 && f != null && r(o, ["expireTime"], f);
  const d = s(n, [
    "newSessionExpireTime"
  ]);
  o !== void 0 && d != null && r(o, ["newSessionExpireTime"], d);
  const m = s(n, ["uses"]);
  o !== void 0 && m != null && r(o, ["uses"], m);
  const g = s(n, [
    "liveConnectConstraints"
  ]);
  o !== void 0 && g != null && r(o, ["bidiGenerateContentSetup"], S0(i, g));
  const y = s(n, [
    "lockAdditionalFields"
  ]);
  return o !== void 0 && y != null && r(o, ["fieldMask"], y), u;
}
function m0(i, n) {
  const o = {}, u = s(n, ["config"]);
  return u != null && r(o, ["config"], p0(i, u, o)), o;
}
function h0(i) {
  const n = {};
  if (s(i, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const o = s(i, ["fileUri"]);
  o != null && r(n, ["fileUri"], o);
  const u = s(i, ["mimeType"]);
  return u != null && r(n, ["mimeType"], u), n;
}
function g0(i) {
  const n = {}, o = s(i, ["id"]);
  o != null && r(n, ["id"], o);
  const u = s(i, ["args"]);
  u != null && r(n, ["args"], u);
  const f = s(i, ["name"]);
  if (f != null && r(n, ["name"], f), s(i, ["partialArgs"]) !== void 0)
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (s(i, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return n;
}
function y0(i) {
  const n = {};
  if (s(i, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const o = s(i, ["enableWidget"]);
  return o != null && r(n, ["enableWidget"], o), n;
}
function v0(i) {
  const n = {};
  if (s(i, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (s(i, ["blockingConfidence"]) !== void 0)
    throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  const o = s(i, [
    "timeRangeFilter"
  ]);
  return o != null && r(n, ["timeRangeFilter"], o), n;
}
function T0(i, n) {
  const o = {}, u = s(i, [
    "generationConfig"
  ]);
  n !== void 0 && u != null && r(n, ["setup", "generationConfig"], u);
  const f = s(i, [
    "responseModalities"
  ]);
  n !== void 0 && f != null && r(n, ["setup", "generationConfig", "responseModalities"], f);
  const d = s(i, ["temperature"]);
  n !== void 0 && d != null && r(n, ["setup", "generationConfig", "temperature"], d);
  const m = s(i, ["topP"]);
  n !== void 0 && m != null && r(n, ["setup", "generationConfig", "topP"], m);
  const g = s(i, ["topK"]);
  n !== void 0 && g != null && r(n, ["setup", "generationConfig", "topK"], g);
  const y = s(i, [
    "maxOutputTokens"
  ]);
  n !== void 0 && y != null && r(n, ["setup", "generationConfig", "maxOutputTokens"], y);
  const h = s(i, [
    "mediaResolution"
  ]);
  n !== void 0 && h != null && r(n, ["setup", "generationConfig", "mediaResolution"], h);
  const v = s(i, ["seed"]);
  n !== void 0 && v != null && r(n, ["setup", "generationConfig", "seed"], v);
  const S = s(i, ["speechConfig"]);
  n !== void 0 && S != null && r(n, ["setup", "generationConfig", "speechConfig"], ur(S));
  const _ = s(i, [
    "thinkingConfig"
  ]);
  n !== void 0 && _ != null && r(n, ["setup", "generationConfig", "thinkingConfig"], _);
  const R = s(i, [
    "enableAffectiveDialog"
  ]);
  n !== void 0 && R != null && r(n, ["setup", "generationConfig", "enableAffectiveDialog"], R);
  const V = s(i, [
    "systemInstruction"
  ]);
  n !== void 0 && V != null && r(n, ["setup", "systemInstruction"], d0(et(V)));
  const b = s(i, ["tools"]);
  if (n !== void 0 && b != null) {
    let j = Ki(b);
    Array.isArray(j) && (j = j.map((J) => C0(Oi(J)))), r(n, ["setup", "tools"], j);
  }
  const F = s(i, [
    "sessionResumption"
  ]);
  n !== void 0 && F != null && r(n, ["setup", "sessionResumption"], _0(F));
  const k = s(i, [
    "inputAudioTranscription"
  ]);
  n !== void 0 && k != null && r(n, ["setup", "inputAudioTranscription"], k);
  const X = s(i, [
    "outputAudioTranscription"
  ]);
  n !== void 0 && X != null && r(n, ["setup", "outputAudioTranscription"], X);
  const z = s(i, [
    "realtimeInputConfig"
  ]);
  n !== void 0 && z != null && r(n, ["setup", "realtimeInputConfig"], z);
  const Z = s(i, [
    "contextWindowCompression"
  ]);
  n !== void 0 && Z != null && r(n, ["setup", "contextWindowCompression"], Z);
  const te = s(i, ["proactivity"]);
  return n !== void 0 && te != null && r(n, ["setup", "proactivity"], te), o;
}
function S0(i, n) {
  const o = {}, u = s(n, ["model"]);
  u != null && r(o, ["setup", "model"], Te(i, u));
  const f = s(n, ["config"]);
  return f != null && r(o, ["config"], T0(f, o)), o;
}
function E0(i) {
  const n = {}, o = s(i, [
    "mediaResolution"
  ]);
  o != null && r(n, ["mediaResolution"], o);
  const u = s(i, [
    "codeExecutionResult"
  ]);
  u != null && r(n, ["codeExecutionResult"], u);
  const f = s(i, [
    "executableCode"
  ]);
  f != null && r(n, ["executableCode"], f);
  const d = s(i, ["fileData"]);
  d != null && r(n, ["fileData"], h0(d));
  const m = s(i, ["functionCall"]);
  m != null && r(n, ["functionCall"], g0(m));
  const g = s(i, [
    "functionResponse"
  ]);
  g != null && r(n, ["functionResponse"], g);
  const y = s(i, ["inlineData"]);
  y != null && r(n, ["inlineData"], c0(y));
  const h = s(i, ["text"]);
  h != null && r(n, ["text"], h);
  const v = s(i, ["thought"]);
  v != null && r(n, ["thought"], v);
  const S = s(i, [
    "thoughtSignature"
  ]);
  S != null && r(n, ["thoughtSignature"], S);
  const _ = s(i, [
    "videoMetadata"
  ]);
  return _ != null && r(n, ["videoMetadata"], _), n;
}
function _0(i) {
  const n = {}, o = s(i, ["handle"]);
  if (o != null && r(n, ["handle"], o), s(i, ["transparent"]) !== void 0)
    throw new Error("transparent parameter is not supported in Gemini API.");
  return n;
}
function C0(i) {
  const n = {}, o = s(i, [
    "functionDeclarations"
  ]);
  if (o != null) {
    let v = o;
    Array.isArray(v) && (v = v.map((S) => S)), r(n, ["functionDeclarations"], v);
  }
  if (s(i, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const u = s(i, [
    "googleSearchRetrieval"
  ]);
  u != null && r(n, ["googleSearchRetrieval"], u);
  const f = s(i, ["computerUse"]);
  f != null && r(n, ["computerUse"], f);
  const d = s(i, ["fileSearch"]);
  d != null && r(n, ["fileSearch"], d);
  const m = s(i, [
    "codeExecution"
  ]);
  if (m != null && r(n, ["codeExecution"], m), s(i, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = s(i, ["googleMaps"]);
  g != null && r(n, ["googleMaps"], y0(g));
  const y = s(i, ["googleSearch"]);
  y != null && r(n, ["googleSearch"], v0(y));
  const h = s(i, ["urlContext"]);
  return h != null && r(n, ["urlContext"], h), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function A0(i) {
  const n = [];
  for (const o in i)
    if (Object.prototype.hasOwnProperty.call(i, o)) {
      const u = i[o];
      if (typeof u == "object" && u != null && Object.keys(u).length > 0) {
        const f = Object.keys(u).map((d) => `${o}.${d}`);
        n.push(...f);
      } else
        n.push(o);
    }
  return n.join(",");
}
function M0(i, n) {
  let o = null;
  const u = i.bidiGenerateContentSetup;
  if (typeof u == "object" && u !== null && "setup" in u) {
    const d = u.setup;
    typeof d == "object" && d !== null ? (i.bidiGenerateContentSetup = d, o = d) : delete i.bidiGenerateContentSetup;
  } else u !== void 0 && delete i.bidiGenerateContentSetup;
  const f = i.fieldMask;
  if (o) {
    const d = A0(o);
    if (Array.isArray(n == null ? void 0 : n.lockAdditionalFields) && (n == null ? void 0 : n.lockAdditionalFields.length) === 0)
      d ? i.fieldMask = d : delete i.fieldMask;
    else if (n != null && n.lockAdditionalFields && n.lockAdditionalFields.length > 0 && f !== null && Array.isArray(f) && f.length > 0) {
      const m = [
        "temperature",
        "topK",
        "topP",
        "maxOutputTokens",
        "responseModalities",
        "seed",
        "speechConfig"
      ];
      let g = [];
      f.length > 0 && (g = f.map((h) => m.includes(h) ? `generationConfig.${h}` : h));
      const y = [];
      d && y.push(d), g.length > 0 && y.push(...g), y.length > 0 ? i.fieldMask = y.join(",") : delete i.fieldMask;
    } else
      delete i.fieldMask;
  } else
    f !== null && Array.isArray(f) && f.length > 0 ? i.fieldMask = f.join(",") : delete i.fieldMask;
  return i;
}
class R0 extends un {
  constructor(n) {
    super(), this.apiClient = n;
  }
  /**
   * Creates an ephemeral auth token resource.
   *
   * @experimental
   *
   * @remarks
   * Ephemeral auth tokens is only supported in the Gemini Developer API.
   * It can be used for the session connection to the Live constrained API.
   * Support in v1alpha only.
   *
   * @param params - The parameters for the create request.
   * @return The created auth token.
   *
   * @example
   * ```ts
   * const ai = new GoogleGenAI({
   *     apiKey: token.name,
   *     httpOptions: { apiVersion: 'v1alpha' }  // Support in v1alpha only.
   * });
   *
   * // Case 1: If LiveEphemeralParameters is unset, unlock LiveConnectConfig
   * // when using the token in Live API sessions. Each session connection can
   * // use a different configuration.
   * const config: CreateAuthTokenConfig = {
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   * }
   * const token = await ai.tokens.create(config);
   *
   * // Case 2: If LiveEphemeralParameters is set, lock all fields in
   * // LiveConnectConfig when using the token in Live API sessions. For
   * // example, changing `outputAudioTranscription` in the Live API
   * // connection will be ignored by the API.
   * const config: CreateAuthTokenConfig =
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   *     LiveEphemeralParameters: {
   *        model: 'gemini-2.0-flash-001',
   *        config: {
   *           'responseModalities': ['AUDIO'],
   *           'systemInstruction': 'Always answer in English.',
   *        }
   *     }
   * }
   * const token = await ai.tokens.create(config);
   *
   * // Case 3: If LiveEphemeralParameters is set and lockAdditionalFields is
   * // set, lock LiveConnectConfig with set and additional fields (e.g.
   * // responseModalities, systemInstruction, temperature in this example) when
   * // using the token in Live API sessions.
   * const config: CreateAuthTokenConfig =
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   *     LiveEphemeralParameters: {
   *        model: 'gemini-2.0-flash-001',
   *        config: {
   *           'responseModalities': ['AUDIO'],
   *           'systemInstruction': 'Always answer in English.',
   *        }
   *     },
   *     lockAdditionalFields: ['temperature'],
   * }
   * const token = await ai.tokens.create(config);
   *
   * // Case 4: If LiveEphemeralParameters is set and lockAdditionalFields is
   * // empty array, lock LiveConnectConfig with set fields (e.g.
   * // responseModalities, systemInstruction in this example) when using the
   * // token in Live API sessions.
   * const config: CreateAuthTokenConfig =
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   *     LiveEphemeralParameters: {
   *        model: 'gemini-2.0-flash-001',
   *        config: {
   *           'responseModalities': ['AUDIO'],
   *           'systemInstruction': 'Always answer in English.',
   *        }
   *     },
   *     lockAdditionalFields: [],
   * }
   * const token = await ai.tokens.create(config);
   * ```
   */
  async create(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");
    {
      const g = m0(this.apiClient, n);
      d = Y("auth_tokens", g._url), m = g._query, delete g.config, delete g._url, delete g._query;
      const y = M0(g, n.config);
      return f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(y),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((h) => h.json()), f.then((h) => h);
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function N0(i, n) {
  const o = {}, u = s(i, ["displayName"]);
  return n !== void 0 && u != null && r(n, ["displayName"], u), o;
}
function D0(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && N0(o, n), n;
}
function I0(i, n) {
  const o = {}, u = s(i, ["force"]);
  return n !== void 0 && u != null && r(n, ["_query", "force"], u), o;
}
function U0(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["_url", "name"], o);
  const u = s(i, ["config"]);
  return u != null && I0(u, n), n;
}
function x0(i) {
  const n = {}, o = s(i, ["name"]);
  return o != null && r(n, ["_url", "name"], o), n;
}
function w0(i, n) {
  const o = {}, u = s(i, [
    "customMetadata"
  ]);
  if (n !== void 0 && u != null) {
    let d = u;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["customMetadata"], d);
  }
  const f = s(i, [
    "chunkingConfig"
  ]);
  return n !== void 0 && f != null && r(n, ["chunkingConfig"], f), o;
}
function q0(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["name"], o);
  const u = s(i, ["metadata"]);
  u != null && r(n, ["metadata"], u);
  const f = s(i, ["done"]);
  f != null && r(n, ["done"], f);
  const d = s(i, ["error"]);
  d != null && r(n, ["error"], d);
  const m = s(i, ["response"]);
  return m != null && r(n, ["response"], G0(m)), n;
}
function L0(i) {
  const n = {}, o = s(i, [
    "fileSearchStoreName"
  ]);
  o != null && r(n, ["_url", "file_search_store_name"], o);
  const u = s(i, ["fileName"]);
  u != null && r(n, ["fileName"], u);
  const f = s(i, ["config"]);
  return f != null && w0(f, n), n;
}
function G0(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, ["parent"]);
  u != null && r(n, ["parent"], u);
  const f = s(i, ["documentName"]);
  return f != null && r(n, ["documentName"], f), n;
}
function H0(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  return n !== void 0 && f != null && r(n, ["_query", "pageToken"], f), o;
}
function V0(i) {
  const n = {}, o = s(i, ["config"]);
  return o != null && H0(o, n), n;
}
function b0(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, [
    "fileSearchStores"
  ]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["fileSearchStores"], d);
  }
  return n;
}
function z0(i, n) {
  const o = {}, u = s(i, ["mimeType"]);
  n !== void 0 && u != null && r(n, ["mimeType"], u);
  const f = s(i, ["displayName"]);
  n !== void 0 && f != null && r(n, ["displayName"], f);
  const d = s(i, [
    "customMetadata"
  ]);
  if (n !== void 0 && d != null) {
    let g = d;
    Array.isArray(g) && (g = g.map((y) => y)), r(n, ["customMetadata"], g);
  }
  const m = s(i, [
    "chunkingConfig"
  ]);
  return n !== void 0 && m != null && r(n, ["chunkingConfig"], m), o;
}
function P0(i) {
  const n = {}, o = s(i, [
    "fileSearchStoreName"
  ]);
  o != null && r(n, ["_url", "file_search_store_name"], o);
  const u = s(i, ["config"]);
  return u != null && z0(u, n), n;
}
function B0(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  return o != null && r(n, ["sdkHttpResponse"], o), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Y0(i, n) {
  const o = {}, u = s(i, ["force"]);
  return n !== void 0 && u != null && r(n, ["_query", "force"], u), o;
}
function F0(i) {
  const n = {}, o = s(i, ["name"]);
  o != null && r(n, ["_url", "name"], o);
  const u = s(i, ["config"]);
  return u != null && Y0(u, n), n;
}
function J0(i) {
  const n = {}, o = s(i, ["name"]);
  return o != null && r(n, ["_url", "name"], o), n;
}
function k0(i, n) {
  const o = {}, u = s(i, ["pageSize"]);
  n !== void 0 && u != null && r(n, ["_query", "pageSize"], u);
  const f = s(i, ["pageToken"]);
  return n !== void 0 && f != null && r(n, ["_query", "pageToken"], f), o;
}
function O0(i) {
  const n = {}, o = s(i, ["parent"]);
  o != null && r(n, ["_url", "parent"], o);
  const u = s(i, ["config"]);
  return u != null && k0(u, n), n;
}
function K0(i) {
  const n = {}, o = s(i, [
    "sdkHttpResponse"
  ]);
  o != null && r(n, ["sdkHttpResponse"], o);
  const u = s(i, [
    "nextPageToken"
  ]);
  u != null && r(n, ["nextPageToken"], u);
  const f = s(i, ["documents"]);
  if (f != null) {
    let d = f;
    Array.isArray(d) && (d = d.map((m) => m)), r(n, ["documents"], d);
  }
  return n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class X0 extends un {
  constructor(n) {
    super(), this.apiClient = n, this.list = async (o) => new ii(an.PAGED_ITEM_DOCUMENTS, (u) => this.listInternal({
      parent: o.parent,
      config: u.config
    }), await this.listInternal(o), o);
  }
  /**
   * Gets a Document.
   *
   * @param params - The parameters for getting a document.
   * @return Document.
   */
  async get(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = J0(n);
      return d = Y("{name}", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => y);
    }
  }
  /**
   * Deletes a Document.
   *
   * @param params - The parameters for deleting a document.
   */
  async delete(n) {
    var o, u;
    let f = "", d = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const m = F0(n);
      f = Y("{name}", m._url), d = m._query, delete m._url, delete m._query, await this.apiClient.request({
        path: f,
        queryParams: d,
        body: JSON.stringify(m),
        httpMethod: "DELETE",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      });
    }
  }
  /**
   * Lists all Documents in a FileSearchStore.
   *
   * @param params - The parameters for listing documents.
   * @return ListDocumentsResponse.
   */
  async listInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = O0(n);
      return d = Y("{parent}/documents", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = K0(y), v = new Rv();
        return Object.assign(v, h), v;
      });
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Q0 extends un {
  constructor(n, o = new X0(n)) {
    super(), this.apiClient = n, this.documents = o, this.list = async (u = {}) => new ii(an.PAGED_ITEM_FILE_SEARCH_STORES, (f) => this.listInternal(f), await this.listInternal(u), u);
  }
  /**
   * Uploads a file asynchronously to a given File Search Store.
   * This method is not available in Vertex AI.
   * Supported upload sources:
   * - Node.js: File path (string) or Blob object.
   * - Browser: Blob object (e.g., File).
   *
   * @remarks
   * The `mimeType` can be specified in the `config` parameter. If omitted:
   *  - For file path (string) inputs, the `mimeType` will be inferred from the
   *     file extension.
   *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
   *     property.
   *
   * This section can contain multiple paragraphs and code examples.
   *
   * @param params - Optional parameters specified in the
   *        `types.UploadToFileSearchStoreParameters` interface.
   *         @see {@link types.UploadToFileSearchStoreParameters#config} for the optional
   *         config in the parameters.
   * @return A promise that resolves to a long running operation.
   * @throws An error if called on a Vertex AI client.
   * @throws An error if the `mimeType` is not provided and can not be inferred,
   * the `mimeType` can be provided in the `params.config` parameter.
   * @throws An error occurs if a suitable upload location cannot be established.
   *
   * @example
   * The following code uploads a file to a given file search store.
   *
   * ```ts
   * const operation = await ai.fileSearchStores.upload({fileSearchStoreName: 'fileSearchStores/foo-bar', file: 'file.txt', config: {
   *   mimeType: 'text/plain',
   * }});
   * console.log(operation.name);
   * ```
   */
  async uploadToFileSearchStore(n) {
    if (this.apiClient.isVertexAI())
      throw new Error("Vertex AI does not support uploading files to a file search store.");
    return this.apiClient.uploadFileToFileSearchStore(n.fileSearchStoreName, n.file, n.config);
  }
  /**
   * Creates a File Search Store.
   *
   * @param params - The parameters for creating a File Search Store.
   * @return FileSearchStore.
   */
  async create(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = D0(n);
      return d = Y("fileSearchStores", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => y);
    }
  }
  /**
   * Gets a File Search Store.
   *
   * @param params - The parameters for getting a File Search Store.
   * @return FileSearchStore.
   */
  async get(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = x0(n);
      return d = Y("{name}", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => y);
    }
  }
  /**
   * Deletes a File Search Store.
   *
   * @param params - The parameters for deleting a File Search Store.
   */
  async delete(n) {
    var o, u;
    let f = "", d = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const m = U0(n);
      f = Y("{name}", m._url), d = m._query, delete m._url, delete m._query, await this.apiClient.request({
        path: f,
        queryParams: d,
        body: JSON.stringify(m),
        httpMethod: "DELETE",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      });
    }
  }
  /**
   * Lists all FileSearchStore owned by the user.
   *
   * @param params - The parameters for listing file search stores.
   * @return ListFileSearchStoresResponse.
   */
  async listInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = V0(n);
      return d = Y("fileSearchStores", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = b0(y), v = new Nv();
        return Object.assign(v, h), v;
      });
    }
  }
  async uploadToFileSearchStoreInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = P0(n);
      return d = Y("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = B0(y), v = new Dv();
        return Object.assign(v, h), v;
      });
    }
  }
  /**
   * Imports a File from File Service to a FileSearchStore.
   *
   * This is a long-running operation, see aip.dev/151
   *
   * @param params - The parameters for importing a file to a file search store.
   * @return ImportFileOperation.
   */
  async importFile(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = L0(n);
      return d = Y("{file_search_store_name}:importFile", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json()), f.then((y) => {
        const h = q0(y), v = new nr();
        return Object.assign(v, h), v;
      });
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Z0(i, n) {
  const o = {}, u = s(i, ["name"]);
  return u != null && r(o, ["_url", "name"], u), o;
}
function W0(i, n) {
  const o = {}, u = s(i, ["name"]);
  return u != null && r(o, ["_url", "name"], u), o;
}
function $0(i, n, o) {
  const u = {};
  if (s(i, ["validationDataset"]) !== void 0)
    throw new Error("validationDataset parameter is not supported in Gemini API.");
  const f = s(i, [
    "tunedModelDisplayName"
  ]);
  if (n !== void 0 && f != null && r(n, ["displayName"], f), s(i, ["description"]) !== void 0)
    throw new Error("description parameter is not supported in Gemini API.");
  const d = s(i, ["epochCount"]);
  n !== void 0 && d != null && r(n, ["tuningTask", "hyperparameters", "epochCount"], d);
  const m = s(i, [
    "learningRateMultiplier"
  ]);
  if (m != null && r(u, ["tuningTask", "hyperparameters", "learningRateMultiplier"], m), s(i, ["exportLastCheckpointOnly"]) !== void 0)
    throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
  if (s(i, ["preTunedModelCheckpointId"]) !== void 0)
    throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");
  if (s(i, ["adapterSize"]) !== void 0)
    throw new Error("adapterSize parameter is not supported in Gemini API.");
  const g = s(i, ["batchSize"]);
  n !== void 0 && g != null && r(n, ["tuningTask", "hyperparameters", "batchSize"], g);
  const y = s(i, ["learningRate"]);
  if (n !== void 0 && y != null && r(n, ["tuningTask", "hyperparameters", "learningRate"], y), s(i, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  if (s(i, ["beta"]) !== void 0)
    throw new Error("beta parameter is not supported in Gemini API.");
  return u;
}
function j0(i, n, o) {
  const u = {};
  let f = s(o, [
    "config",
    "method"
  ]);
  if (f === void 0 && (f = "SUPERVISED_FINE_TUNING"), f === "SUPERVISED_FINE_TUNING") {
    const R = s(i, [
      "validationDataset"
    ]);
    n !== void 0 && R != null && r(n, ["supervisedTuningSpec"], Jm(R));
  } else if (f === "PREFERENCE_TUNING") {
    const R = s(i, [
      "validationDataset"
    ]);
    n !== void 0 && R != null && r(n, ["preferenceOptimizationSpec"], Jm(R));
  }
  const d = s(i, [
    "tunedModelDisplayName"
  ]);
  n !== void 0 && d != null && r(n, ["tunedModelDisplayName"], d);
  const m = s(i, ["description"]);
  n !== void 0 && m != null && r(n, ["description"], m);
  let g = s(o, [
    "config",
    "method"
  ]);
  if (g === void 0 && (g = "SUPERVISED_FINE_TUNING"), g === "SUPERVISED_FINE_TUNING") {
    const R = s(i, ["epochCount"]);
    n !== void 0 && R != null && r(n, ["supervisedTuningSpec", "hyperParameters", "epochCount"], R);
  } else if (g === "PREFERENCE_TUNING") {
    const R = s(i, ["epochCount"]);
    n !== void 0 && R != null && r(n, ["preferenceOptimizationSpec", "hyperParameters", "epochCount"], R);
  }
  let y = s(o, [
    "config",
    "method"
  ]);
  if (y === void 0 && (y = "SUPERVISED_FINE_TUNING"), y === "SUPERVISED_FINE_TUNING") {
    const R = s(i, [
      "learningRateMultiplier"
    ]);
    n !== void 0 && R != null && r(n, ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"], R);
  } else if (y === "PREFERENCE_TUNING") {
    const R = s(i, [
      "learningRateMultiplier"
    ]);
    n !== void 0 && R != null && r(n, [
      "preferenceOptimizationSpec",
      "hyperParameters",
      "learningRateMultiplier"
    ], R);
  }
  let h = s(o, ["config", "method"]);
  if (h === void 0 && (h = "SUPERVISED_FINE_TUNING"), h === "SUPERVISED_FINE_TUNING") {
    const R = s(i, [
      "exportLastCheckpointOnly"
    ]);
    n !== void 0 && R != null && r(n, ["supervisedTuningSpec", "exportLastCheckpointOnly"], R);
  } else if (h === "PREFERENCE_TUNING") {
    const R = s(i, [
      "exportLastCheckpointOnly"
    ]);
    n !== void 0 && R != null && r(n, ["preferenceOptimizationSpec", "exportLastCheckpointOnly"], R);
  }
  let v = s(o, [
    "config",
    "method"
  ]);
  if (v === void 0 && (v = "SUPERVISED_FINE_TUNING"), v === "SUPERVISED_FINE_TUNING") {
    const R = s(i, ["adapterSize"]);
    n !== void 0 && R != null && r(n, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], R);
  } else if (v === "PREFERENCE_TUNING") {
    const R = s(i, ["adapterSize"]);
    n !== void 0 && R != null && r(n, ["preferenceOptimizationSpec", "hyperParameters", "adapterSize"], R);
  }
  if (s(i, ["batchSize"]) !== void 0)
    throw new Error("batchSize parameter is not supported in Vertex AI.");
  if (s(i, ["learningRate"]) !== void 0)
    throw new Error("learningRate parameter is not supported in Vertex AI.");
  const S = s(i, ["labels"]);
  n !== void 0 && S != null && r(n, ["labels"], S);
  const _ = s(i, ["beta"]);
  return n !== void 0 && _ != null && r(n, ["preferenceOptimizationSpec", "hyperParameters", "beta"], _), u;
}
function eC(i, n) {
  const o = {}, u = s(i, ["baseModel"]);
  u != null && r(o, ["baseModel"], u);
  const f = s(i, [
    "preTunedModel"
  ]);
  f != null && r(o, ["preTunedModel"], f);
  const d = s(i, [
    "trainingDataset"
  ]);
  d != null && cC(d);
  const m = s(i, ["config"]);
  return m != null && $0(m, o), o;
}
function tC(i, n) {
  const o = {}, u = s(i, ["baseModel"]);
  u != null && r(o, ["baseModel"], u);
  const f = s(i, [
    "preTunedModel"
  ]);
  f != null && r(o, ["preTunedModel"], f);
  const d = s(i, [
    "trainingDataset"
  ]);
  d != null && dC(d, o, n);
  const m = s(i, ["config"]);
  return m != null && j0(m, o, n), o;
}
function nC(i, n) {
  const o = {}, u = s(i, ["name"]);
  return u != null && r(o, ["_url", "name"], u), o;
}
function iC(i, n) {
  const o = {}, u = s(i, ["name"]);
  return u != null && r(o, ["_url", "name"], u), o;
}
function lC(i, n, o) {
  const u = {}, f = s(i, ["pageSize"]);
  n !== void 0 && f != null && r(n, ["_query", "pageSize"], f);
  const d = s(i, ["pageToken"]);
  n !== void 0 && d != null && r(n, ["_query", "pageToken"], d);
  const m = s(i, ["filter"]);
  return n !== void 0 && m != null && r(n, ["_query", "filter"], m), u;
}
function oC(i, n, o) {
  const u = {}, f = s(i, ["pageSize"]);
  n !== void 0 && f != null && r(n, ["_query", "pageSize"], f);
  const d = s(i, ["pageToken"]);
  n !== void 0 && d != null && r(n, ["_query", "pageToken"], d);
  const m = s(i, ["filter"]);
  return n !== void 0 && m != null && r(n, ["_query", "filter"], m), u;
}
function aC(i, n) {
  const o = {}, u = s(i, ["config"]);
  return u != null && lC(u, o), o;
}
function uC(i, n) {
  const o = {}, u = s(i, ["config"]);
  return u != null && oC(u, o), o;
}
function sC(i, n) {
  const o = {}, u = s(i, [
    "sdkHttpResponse"
  ]);
  u != null && r(o, ["sdkHttpResponse"], u);
  const f = s(i, [
    "nextPageToken"
  ]);
  f != null && r(o, ["nextPageToken"], f);
  const d = s(i, ["tunedModels"]);
  if (d != null) {
    let m = d;
    Array.isArray(m) && (m = m.map((g) => vh(g))), r(o, ["tuningJobs"], m);
  }
  return o;
}
function rC(i, n) {
  const o = {}, u = s(i, [
    "sdkHttpResponse"
  ]);
  u != null && r(o, ["sdkHttpResponse"], u);
  const f = s(i, [
    "nextPageToken"
  ]);
  f != null && r(o, ["nextPageToken"], f);
  const d = s(i, ["tuningJobs"]);
  if (d != null) {
    let m = d;
    Array.isArray(m) && (m = m.map((g) => js(g))), r(o, ["tuningJobs"], m);
  }
  return o;
}
function fC(i, n) {
  const o = {}, u = s(i, ["name"]);
  u != null && r(o, ["model"], u);
  const f = s(i, ["name"]);
  return f != null && r(o, ["endpoint"], f), o;
}
function cC(i, n) {
  const o = {};
  if (s(i, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (s(i, ["vertexDatasetResource"]) !== void 0)
    throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");
  const u = s(i, ["examples"]);
  if (u != null) {
    let f = u;
    Array.isArray(f) && (f = f.map((d) => d)), r(o, ["examples", "examples"], f);
  }
  return o;
}
function dC(i, n, o) {
  const u = {};
  let f = s(o, [
    "config",
    "method"
  ]);
  if (f === void 0 && (f = "SUPERVISED_FINE_TUNING"), f === "SUPERVISED_FINE_TUNING") {
    const m = s(i, ["gcsUri"]);
    n !== void 0 && m != null && r(n, ["supervisedTuningSpec", "trainingDatasetUri"], m);
  } else if (f === "PREFERENCE_TUNING") {
    const m = s(i, ["gcsUri"]);
    n !== void 0 && m != null && r(n, ["preferenceOptimizationSpec", "trainingDatasetUri"], m);
  }
  let d = s(o, [
    "config",
    "method"
  ]);
  if (d === void 0 && (d = "SUPERVISED_FINE_TUNING"), d === "SUPERVISED_FINE_TUNING") {
    const m = s(i, [
      "vertexDatasetResource"
    ]);
    n !== void 0 && m != null && r(n, ["supervisedTuningSpec", "trainingDatasetUri"], m);
  } else if (d === "PREFERENCE_TUNING") {
    const m = s(i, [
      "vertexDatasetResource"
    ]);
    n !== void 0 && m != null && r(n, ["preferenceOptimizationSpec", "trainingDatasetUri"], m);
  }
  if (s(i, ["examples"]) !== void 0)
    throw new Error("examples parameter is not supported in Vertex AI.");
  return u;
}
function vh(i, n) {
  const o = {}, u = s(i, [
    "sdkHttpResponse"
  ]);
  u != null && r(o, ["sdkHttpResponse"], u);
  const f = s(i, ["name"]);
  f != null && r(o, ["name"], f);
  const d = s(i, ["state"]);
  d != null && r(o, ["state"], jm(d));
  const m = s(i, ["createTime"]);
  m != null && r(o, ["createTime"], m);
  const g = s(i, [
    "tuningTask",
    "startTime"
  ]);
  g != null && r(o, ["startTime"], g);
  const y = s(i, [
    "tuningTask",
    "completeTime"
  ]);
  y != null && r(o, ["endTime"], y);
  const h = s(i, ["updateTime"]);
  h != null && r(o, ["updateTime"], h);
  const v = s(i, ["description"]);
  v != null && r(o, ["description"], v);
  const S = s(i, ["baseModel"]);
  S != null && r(o, ["baseModel"], S);
  const _ = s(i, ["_self"]);
  return _ != null && r(o, ["tunedModel"], fC(_)), o;
}
function js(i, n) {
  const o = {}, u = s(i, [
    "sdkHttpResponse"
  ]);
  u != null && r(o, ["sdkHttpResponse"], u);
  const f = s(i, ["name"]);
  f != null && r(o, ["name"], f);
  const d = s(i, ["state"]);
  d != null && r(o, ["state"], jm(d));
  const m = s(i, ["createTime"]);
  m != null && r(o, ["createTime"], m);
  const g = s(i, ["startTime"]);
  g != null && r(o, ["startTime"], g);
  const y = s(i, ["endTime"]);
  y != null && r(o, ["endTime"], y);
  const h = s(i, ["updateTime"]);
  h != null && r(o, ["updateTime"], h);
  const v = s(i, ["error"]);
  v != null && r(o, ["error"], v);
  const S = s(i, ["description"]);
  S != null && r(o, ["description"], S);
  const _ = s(i, ["baseModel"]);
  _ != null && r(o, ["baseModel"], _);
  const R = s(i, ["tunedModel"]);
  R != null && r(o, ["tunedModel"], R);
  const V = s(i, [
    "preTunedModel"
  ]);
  V != null && r(o, ["preTunedModel"], V);
  const b = s(i, [
    "supervisedTuningSpec"
  ]);
  b != null && r(o, ["supervisedTuningSpec"], b);
  const F = s(i, [
    "preferenceOptimizationSpec"
  ]);
  F != null && r(o, ["preferenceOptimizationSpec"], F);
  const k = s(i, [
    "tuningDataStats"
  ]);
  k != null && r(o, ["tuningDataStats"], k);
  const X = s(i, [
    "encryptionSpec"
  ]);
  X != null && r(o, ["encryptionSpec"], X);
  const z = s(i, [
    "partnerModelTuningSpec"
  ]);
  z != null && r(o, ["partnerModelTuningSpec"], z);
  const Z = s(i, [
    "customBaseModel"
  ]);
  Z != null && r(o, ["customBaseModel"], Z);
  const te = s(i, ["experiment"]);
  te != null && r(o, ["experiment"], te);
  const j = s(i, ["labels"]);
  j != null && r(o, ["labels"], j);
  const J = s(i, ["outputUri"]);
  J != null && r(o, ["outputUri"], J);
  const ge = s(i, ["pipelineJob"]);
  ge != null && r(o, ["pipelineJob"], ge);
  const $ = s(i, [
    "serviceAccount"
  ]);
  $ != null && r(o, ["serviceAccount"], $);
  const ce = s(i, [
    "tunedModelDisplayName"
  ]);
  ce != null && r(o, ["tunedModelDisplayName"], ce);
  const _e = s(i, [
    "veoTuningSpec"
  ]);
  return _e != null && r(o, ["veoTuningSpec"], _e), o;
}
function pC(i, n) {
  const o = {}, u = s(i, [
    "sdkHttpResponse"
  ]);
  u != null && r(o, ["sdkHttpResponse"], u);
  const f = s(i, ["name"]);
  f != null && r(o, ["name"], f);
  const d = s(i, ["metadata"]);
  d != null && r(o, ["metadata"], d);
  const m = s(i, ["done"]);
  m != null && r(o, ["done"], m);
  const g = s(i, ["error"]);
  return g != null && r(o, ["error"], g), o;
}
function Jm(i, n) {
  const o = {}, u = s(i, ["gcsUri"]);
  u != null && r(o, ["validationDatasetUri"], u);
  const f = s(i, [
    "vertexDatasetResource"
  ]);
  return f != null && r(o, ["validationDatasetUri"], f), o;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class mC extends un {
  constructor(n) {
    super(), this.apiClient = n, this.get = async (o) => await this.getInternal(o), this.list = async (o = {}) => new ii(an.PAGED_ITEM_TUNING_JOBS, (u) => this.listInternal(u), await this.listInternal(o), o), this.tune = async (o) => {
      var u;
      if (this.apiClient.isVertexAI())
        if (o.baseModel.startsWith("projects/")) {
          const f = {
            tunedModelName: o.baseModel
          };
          !((u = o.config) === null || u === void 0) && u.preTunedModelCheckpointId && (f.checkpointId = o.config.preTunedModelCheckpointId);
          const d = Object.assign(Object.assign({}, o), { preTunedModel: f });
          return d.baseModel = void 0, await this.tuneInternal(d);
        } else {
          const f = Object.assign({}, o);
          return await this.tuneInternal(f);
        }
      else {
        const f = Object.assign({}, o), d = await this.tuneMldevInternal(f);
        let m = "";
        return d.metadata !== void 0 && d.metadata.tunedModel !== void 0 ? m = d.metadata.tunedModel : d.name !== void 0 && d.name.includes("/operations/") && (m = d.name.split("/operations/")[0]), {
          name: m,
          state: Os.JOB_STATE_QUEUED
        };
      }
    };
  }
  async getInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = iC(n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => js(v));
    } else {
      const h = nC(n);
      return g = Y("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => vh(v));
    }
  }
  async listInternal(n) {
    var o, u, f, d;
    let m, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const h = uC(n);
      return g = Y("tuningJobs", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = rC(v), _ = new Cm();
        return Object.assign(_, S), _;
      });
    } else {
      const h = aC(n);
      return g = Y("tunedModels", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
        path: g,
        queryParams: y,
        body: JSON.stringify(h),
        httpMethod: "GET",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      }).then((v) => v.json().then((S) => {
        const _ = S;
        return _.sdkHttpResponse = {
          headers: v.headers
        }, _;
      })), m.then((v) => {
        const S = sC(v), _ = new Cm();
        return Object.assign(_, S), _;
      });
    }
  }
  /**
   * Cancels a tuning job.
   *
   * @param params - The parameters for the cancel request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.tunings.cancel({name: '...'}); // The server-generated resource name.
   * ```
   */
  async cancel(n) {
    var o, u, f, d;
    let m = "", g = {};
    if (this.apiClient.isVertexAI()) {
      const y = W0(n);
      m = Y("{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({
        path: m,
        queryParams: g,
        body: JSON.stringify(y),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      });
    } else {
      const y = Z0(n);
      m = Y("{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({
        path: m,
        queryParams: g,
        body: JSON.stringify(y),
        httpMethod: "POST",
        httpOptions: (f = n.config) === null || f === void 0 ? void 0 : f.httpOptions,
        abortSignal: (d = n.config) === null || d === void 0 ? void 0 : d.abortSignal
      });
    }
  }
  async tuneInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI()) {
      const g = tC(n, n);
      return d = Y("tuningJobs", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => js(y));
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  async tuneMldevInternal(n) {
    var o, u;
    let f, d = "", m = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = eC(n);
      return d = Y("tunedModels", g._url), m = g._query, delete g._url, delete g._query, f = this.apiClient.request({
        path: d,
        queryParams: m,
        body: JSON.stringify(g),
        httpMethod: "POST",
        httpOptions: (o = n.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (u = n.config) === null || u === void 0 ? void 0 : u.abortSignal
      }).then((y) => y.json().then((h) => {
        const v = h;
        return v.sdkHttpResponse = {
          headers: y.headers
        }, v;
      })), f.then((y) => pC(y));
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class hC {
  async download(n, o) {
    throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.");
  }
}
const gC = 1024 * 1024 * 8, yC = 3, vC = 1e3, TC = 2, ga = "x-goog-upload-status";
async function SC(i, n, o) {
  var u;
  const f = await Th(i, n, o), d = await (f == null ? void 0 : f.json());
  if (((u = f == null ? void 0 : f.headers) === null || u === void 0 ? void 0 : u[ga]) !== "final")
    throw new Error("Failed to upload file: Upload status is not finalized.");
  return d.file;
}
async function EC(i, n, o) {
  var u;
  const f = await Th(i, n, o), d = await (f == null ? void 0 : f.json());
  if (((u = f == null ? void 0 : f.headers) === null || u === void 0 ? void 0 : u[ga]) !== "final")
    throw new Error("Failed to upload file: Upload status is not finalized.");
  const m = Km(d), g = new ir();
  return Object.assign(g, m), g;
}
async function Th(i, n, o) {
  var u, f;
  let d = 0, m = 0, g = new Ks(new Response()), y = "upload";
  for (d = i.size; m < d;) {
    const h = Math.min(gC, d - m), v = i.slice(m, m + h);
    m + h >= d && (y += ", finalize");
    let S = 0, _ = vC;
    for (; S < yC && (g = await o.request({
      path: "",
      body: v,
      httpMethod: "POST",
      httpOptions: {
        apiVersion: "",
        baseUrl: n,
        headers: {
          "X-Goog-Upload-Command": y,
          "X-Goog-Upload-Offset": String(m),
          "Content-Length": String(h)
        }
      }
    }), !(!((u = g == null ? void 0 : g.headers) === null || u === void 0) && u[ga]));)
      S++, await CC(_), _ = _ * TC;
    if (m += h, ((f = g == null ? void 0 : g.headers) === null || f === void 0 ? void 0 : f[ga]) !== "active")
      break;
    if (d <= m)
      throw new Error("All content has been uploaded, but the upload status is not finalized.");
  }
  return g;
}
async function _C(i) {
  return { size: i.size, type: i.type };
}
function CC(i) {
  return new Promise((n) => setTimeout(n, i));
}
class AC {
  async upload(n, o, u) {
    if (typeof n == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await SC(n, o, u);
  }
  async uploadToFileSearchStore(n, o, u) {
    if (typeof n == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await EC(n, o, u);
  }
  async stat(n) {
    if (typeof n == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await _C(n);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class MC {
  create(n, o, u) {
    return new RC(n, o, u);
  }
}
class RC {
  constructor(n, o, u) {
    this.url = n, this.headers = o, this.callbacks = u;
  }
  connect() {
    this.ws = new WebSocket(this.url), this.ws.onopen = this.callbacks.onopen, this.ws.onerror = this.callbacks.onerror, this.ws.onclose = this.callbacks.onclose, this.ws.onmessage = this.callbacks.onmessage;
  }
  send(n) {
    if (this.ws === void 0)
      throw new Error("WebSocket is not connected");
    this.ws.send(n);
  }
  close() {
    if (this.ws === void 0)
      throw new Error("WebSocket is not connected");
    this.ws.close();
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const km = "x-goog-api-key";
class NC {
  constructor(n) {
    this.apiKey = n;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addAuthHeaders(n, o) {
    if (n.get(km) === null) {
      if (this.apiKey.startsWith("auth_tokens/"))
        throw new Error("Ephemeral tokens are only supported by the live API.");
      if (!this.apiKey)
        throw new Error("API key is missing. Please provide a valid API key.");
      n.append(km, this.apiKey);
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const DC = "gl-node/";
class IC {
  constructor(n) {
    var o;
    if (n.apiKey == null)
      throw new Error("An API Key must be set when running in a browser");
    if (n.project || n.location)
      throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");
    this.vertexai = (o = n.vertexai) !== null && o !== void 0 ? o : !1, this.apiKey = n.apiKey;
    const u = ov(
      n.httpOptions,
      n.vertexai,
      /*vertexBaseUrlFromEnv*/
      void 0,
      /*geminiBaseUrlFromEnv*/
      void 0
    );
    u && (n.httpOptions ? n.httpOptions.baseUrl = u : n.httpOptions = { baseUrl: u }), this.apiVersion = n.apiVersion;
    const f = new NC(this.apiKey);
    this.apiClient = new J_({
      auth: f,
      apiVersion: this.apiVersion,
      apiKey: this.apiKey,
      vertexai: this.vertexai,
      httpOptions: n.httpOptions,
      userAgentExtra: DC + "web",
      uploader: new AC(),
      downloader: new hC()
    }), this.models = new r0(this.apiClient), this.live = new i0(this.apiClient, f, new MC()), this.batches = new LT(this.apiClient), this.chats = new hS(this.models, this.apiClient), this.caches = new dS(this.apiClient), this.files = new MS(this.apiClient), this.operations = new f0(this.apiClient), this.authTokens = new R0(this.apiClient), this.tunings = new mC(this.apiClient), this.fileSearchStores = new Q0(this.apiClient);
  }
}
const Sh = "https://script.google.com/macros/s/AKfycbw6pSLO3rM-kyTXertkTyLqY7TOypF_1X7HRcZMk0tSwACplkejPULI8ukmnaWkBwDKrg/exec", qC = async (i) => {
  try {
    const o = i.filter((f, d) => !(d === 0 && f.sender === Ln.BOT)).map((f) => ({
      role: f.sender === Ln.USER ? "user" : "model",
      parts: [{ text: f.text }]
    })), u = await fetch(Sh, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        messages: o,
        systemPrompt: seiunSystemPrompt,
        temperature: 0.7,
        model: "gemini-2.5-flash"
      })
    });
    if (!u.ok)
      throw new Error(`HTTP Error: ${u.status}`);
    const f = await u.json();
    if (!f.success)
      throw new Error(f.error || "Unknown error from GAS");
    return f.text || "申し訳ありません。回答を生成できませんでした。";
  } catch (n) {
    return console.error("Gemini API Error:", n), "申し訳ありません。現在AIサービスに接続できません。時間をおいて再度お試しいただくか、お電話にてお問い合わせください。";
  }
}, BC = (i) => i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), FC = (i) => {
  if (!i) return "";
  const n = BC(i);
  return n.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(?!\*)(.+?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>");
}, LC = () => {
  const [i, n] = ni.useState(!1), [o, u] = ni.useState([
    {
      id: "welcome",
      text: "こんにちは！青雲寮AIオペレーターです。寮の費用や設備など、ご質問があればお答えします。",
      sender: Ln.BOT,
      timestamp: /* @__PURE__ */ new Date()
    }
  ]), [f, d] = ni.useState(""), [m, g] = ni.useState(!1), y = ni.useRef(null), h = () => {
    var S;
    (S = y.current) == null || S.scrollIntoView({ behavior: "smooth" });
  };
  ni.useEffect(() => {
    h();
  }, [o, i]);
  const C = (S) => {
    // イベントの伝播を常に停止して、ページ全体がスクロールしないようにする
    S.preventDefault();
    S.stopPropagation();
  };
  const v = async (S) => {
    if (S && S.preventDefault(), !f.trim() || m) return;
    const _ = {
      id: Date.now().toString(),
      text: f,
      sender: Ln.USER,
      timestamp: /* @__PURE__ */ new Date()
    }, R = [...o, _];
    u(R), d(""), g(!0);
    try {
      const V = await qC(R), b = {
        id: (Date.now() + 1).toString(),
        text: V,
        sender: Ln.BOT,
        timestamp: /* @__PURE__ */ new Date()
      };
      u((F) => [...F, b]);
    } catch (V) {
      console.error(V);
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ he.jsxs("div", {
    className: "fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end font-sans", children: [
      i && /* @__PURE__ */ he.jsxs("div", {
        className: "relative mb-4 w-[360px] md:w-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out transform origin-bottom-right animate-in fade-in slide-in-from-bottom-10", style: { width: "min(420px, calc(100vw - 32px))", minWidth: "320px", height: "520px", maxHeight: "calc(100vh - 140px)", marginBottom: "18px" }, children: [
      /* @__PURE__ */ he.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 bg-opacity-90 backdrop-blur-xl border border-white border-opacity-70" }),
      /* @__PURE__ */ he.jsx("div", { className: "absolute -right-12 -top-16 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 opacity-60", style: { filter: "blur(40px)" } }),
      /* @__PURE__ */ he.jsx("div", { className: "absolute -left-16 bottom-0 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 opacity-60", style: { filter: "blur(32px)" } }),
      /* @__PURE__ */ he.jsxs("div", {
          className: "relative z-10 h-full flex flex-col", children: [
        /* @__PURE__ */ he.jsxs("div", {
            className: "px-5 py-4 bg-white bg-opacity-80 backdrop-blur-xl border-b border-white border-opacity-70 flex items-center justify-between", children: [
          /* @__PURE__ */ he.jsxs("div", {
              className: "flex items-center gap-3", children: [
            /* @__PURE__ */ he.jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-300 text-white flex items-center justify-center shadow-lg ring-2 ring-white ring-opacity-40", children: /* @__PURE__ */ he.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-7 h-7", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ he.jsx("path", { d: "M6.5 14.5a3.5 3.5 0 0 1 3.38-3.5 4.5 4.5 0 0 1 8.62 1.5H19a3 3 0 0 1 0 6H7a2.5 2.5 0 0 1-.5-4.95V14.5Z" }) }) }),
            /* @__PURE__ */ he.jsxs("div", {
                children: [
              /* @__PURE__ */ he.jsx("p", { className: "text-xs font-semibold tracking-wide text-blue-900 uppercase", children: "Seiun AI" }),
              /* @__PURE__ */ he.jsx("h3", { className: "font-bold text-lg text-gray-900", children: "AI オペレーター" }),
              /* @__PURE__ */ he.jsx("p", { className: "text-xs text-blue-800", children: "青雲寮の疑問にライブで回答します" })
                ]
              })
              ]
            }),
          /* @__PURE__ */ he.jsx("div", { className: "w-10" })
            ]
          }),
        /* @__PURE__ */ he.jsxs("div", {
            className: "relative flex-1 overflow-hidden", style: { minHeight: 0 }, children: [
          /* @__PURE__ */ he.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white bg-opacity-90" }),
          /* @__PURE__ */ he.jsxs("div", {
              className: "relative z-10 flex-1 overflow-y-auto p-4 space-y-4", style: { minHeight: 0, overscrollBehavior: "contain", touchAction: "pan-y" }, onWheel: C, onTouchMove: C, children: [
                o.map((S) => /* @__PURE__ */ he.jsx(
                  "div",
                  {
                    className: `flex ${S.sender === Ln.USER ? "justify-end" : "justify-start"}`,
                    children: /* @__PURE__ */ he.jsxs("div", {
                      className: `flex items-end gap-2 max-w-full ${S.sender === Ln.USER ? "flex-row-reverse" : ""}`, children: [
                  /* @__PURE__ */ he.jsx("div", { className: `${S.sender === Ln.USER ? "bg-gradient-to-br from-blue-500 to-blue-400 text-white" : "bg-white border border-blue-50 text-blue-800"} w-9 h-9 rounded-full flex items-center justify-center shadow-md shrink-0`, children: S.sender === Ln.USER ? /* @__PURE__ */ he.jsx("span", { className: "text-sm font-semibold", children: "YOU" }) : /* @__PURE__ */ he.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ he.jsx("path", { d: "M6.5 14.5a3.5 3.5 0 0 1 3.38-3.5 4.5 4.5 0 0 1 8.62 1.5H19a3 3 0 0 1 0 6H7a2.5 2.5 0 0 1-.5-4.95V14.5Z" }) }) }),
                  /* @__PURE__ */ he.jsx(
                        "div",
                        {
                          className: `max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed border shadow-lg break-words ${S.sender === Ln.USER ? "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white border-blue-200 rounded-br-md shadow-[0_12px_25px_rgba(0,122,255,0.25)]" : "bg-white text-gray-900 border-blue-50 rounded-bl-md shadow-[0_10px_25px_rgba(15,31,58,0.08)]"}`,
                          dangerouslySetInnerHTML: { __html: FC(S.text) }
                        }
                      )
                      ]
                    })
                  },
                  S.id
                )),
                m && /* @__PURE__ */ he.jsx("div", {
                  className: "flex justify-start", children: /* @__PURE__ */ he.jsxs("div", {
                    className: "bg-white bg-opacity-90 px-4 py-3 rounded-2xl rounded-bl-md border border-blue-50 shadow-lg flex space-x-1 items-center backdrop-blur-lg", children: [
              /* @__PURE__ */ he.jsx("div", { className: "w-2 h-2 bg-blue-300 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
              /* @__PURE__ */ he.jsx("div", { className: "w-2 h-2 bg-blue-300 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
              /* @__PURE__ */ he.jsx("div", { className: "w-2 h-2 bg-blue-300 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
                    ]
                  })
                }),
            /* @__PURE__ */ he.jsx("div", { ref: y })
              ]
            })
            ]
          }),
        /* @__PURE__ */ he.jsxs("div", {
            className: "relative z-10 p-4 bg-white bg-opacity-70 backdrop-blur-xl border-t border-white border-opacity-70", children: [
          /* @__PURE__ */ he.jsxs("form", {
              onSubmit: v, className: "flex gap-2", children: [
            /* @__PURE__ */ he.jsx(
                "input",
                {
                  type: "text",
                  value: f,
                  onChange: (S) => d(S.target.value),
                  placeholder: "質問を入力...",
                  className: "flex-1 px-4 py-3 rounded-2xl border border-blue-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white bg-opacity-80 text-sm text-gray-900 placeholder-gray-500 transition-all shadow-inner"
                }
              ),
            /* @__PURE__ */ he.jsxs(
                "button",
                {
                  type: "submit",
                  disabled: !f.trim() || m,
                  className: "relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white px-4 py-2.5 rounded-2xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-1 ring-1 ring-white ring-opacity-40",
                  children: [
                  /* @__PURE__ */ he.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ he.jsx("path", { d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" }) }),
                  /* @__PURE__ */ he.jsx("span", { className: "text-sm font-semibold", children: "送信" })
                  ]
                }
              )
              ]
            }),
          /* @__PURE__ */ he.jsxs("div", {
              className: "mt-2 flex items-center justify-between text-[11px] text-blue-800", children: [
            /* @__PURE__ */ he.jsx("span", { children: "AIは間違いを犯す可能性があります。" }),
            /* @__PURE__ */ he.jsx("span", { className: "text-blue-900 font-semibold", children: "事務室: 042-369-7761" })
              ]
            })
            ]
          })
          ]
        })
        ]
      }),
    /* @__PURE__ */ he.jsx(
        "button",
        {
          onClick: () => n(!i),
          className: "transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-2xl hover:-translate-y-1 text-white rounded-full p-4 shadow-xl flex items-center justify-center ring-4 ring-white ring-opacity-50",
          "aria-label": i ? "AIチャットを閉じる" : "AIチャットを開く",
          children: i ? /* @__PURE__ */ he.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-7 w-7", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ he.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) : /* @__PURE__ */ he.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ he.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }) })
        }
      )
    ]
  });
}, GC = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css", HC = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap";
function VC(i) {
  if (!i) return;
  const n = i.shadowRoot ?? i.attachShadow({ mode: "open" });
  n.innerHTML = "";
  const o = document.createElement("link");
  o.rel = "stylesheet", o.href = HC;
  const u = document.createElement("link");
  u.rel = "stylesheet", u.href = GC, n.append(o, u);
  const f = document.createElement("div");
  n.appendChild(f);
  const d = tv.createRoot(f);
  return d.render(
    /* @__PURE__ */ he.jsx(Ky.StrictMode, { children: /* @__PURE__ */ he.jsx("div", { style: { fontFamily: "'Noto Sans JP', sans-serif" }, children: /* @__PURE__ */ he.jsx(LC, {}) }) })
  ), d;
}
// Expose internal variables to global scope for other modules
window.ni = ni; // React
window.tv = tv; // ReactDOM
window.he = he; // JSX
window.Ky = Ky; // React Extras
window.IC = IC; // Gemini Client

// Remove original export as this is now a bundle
// export { VC as mountSeiunAIOperator };
