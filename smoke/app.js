var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function ee(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    var x = (ee.prototype = new b());
    ((x.constructor = ee), _(x, y.prototype), (x.isPureReactComponent = !0));
    var te = Array.isArray;
    function ne() {}
    var re = { H: null, A: null, T: null, S: null },
      ie = Object.prototype.hasOwnProperty;
    function S(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ae(e, t) {
      return S(e.type, t, e.props);
    }
    function oe(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function C(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var se = /\/+/g;
    function ce(e, t) {
      return typeof e == `object` && e && e.key != null
        ? C(`` + e.key)
        : t.toString(36);
    }
    function le(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(ne, ne)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ue(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ue(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ce(e, 0) : a),
          te(o)
            ? ((i = ``),
              c != null && (i = c.replace(se, `$&/`) + `/`),
              ue(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (oe(o) &&
                (o = ae(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(se, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (te(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + ce(a, u)), (c += ue(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + ce(a, u++)), (c += ue(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ue(le(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function de(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ue(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function fe(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var pe =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function me(e) {
      var t = re.T,
        n = {};
      ((n.types = t === null ? null : t.types), (re.T = n));
      try {
        var r = e(),
          i = re.S;
        (i !== null && i(n, r),
          typeof r == `object` &&
            r &&
            typeof r.then == `function` &&
            r.then(ne, pe));
      } catch (e) {
        pe(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (re.T = t));
      }
    }
    function he(e) {
      var t = re.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else me(he.bind(null, e));
    }
    var ge = {
      map: de,
      forEach: function (e, t, n) {
        de(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          de(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          de(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!oe(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = ge),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = ee),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return re.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = he),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ie.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return S(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ie.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return S(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = oe),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: fe,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = me),
      (e.unstable_useCacheRefresh = function () {
        return re.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return re.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return re.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return re.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return re.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return re.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return re.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return re.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return re.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return re.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return re.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return re.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return re.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return re.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return re.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return re.H.useRef(e);
      }),
      (e.useState = function (e) {
        return re.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return re.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return re.H.useTransition();
      }),
      (e.version = `19.3.0`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function ee(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), x || ((x = !0), ae()));
        else {
          var t = n(l);
          t !== null && se(ee, t.startTime - e);
        }
      }
    }
    var x = !1,
      te = -1,
      ne = 5,
      re = -1;
    function ie() {
      return g ? !0 : !(e.unstable_now() - re < ne);
    }
    function S() {
      if (((g = !1), x)) {
        var t = e.unstable_now();
        re = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(te), (te = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && ie());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && se(ee, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ae() : (x = !1);
        }
      }
    }
    var ae;
    if (typeof y == `function`)
      ae = function () {
        y(S);
      };
    else if (typeof MessageChannel < `u`) {
      var oe = new MessageChannel(),
        C = oe.port2;
      ((oe.port1.onmessage = S),
        (ae = function () {
          C.postMessage(null);
        }));
    } else
      ae = function () {
        _(S, 0);
      };
    function se(t, n) {
      te = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ne = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(te), (te = -1)) : (h = !0), se(ee, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), x || ((x = !0), ae()))),
          r
        );
      }),
      (e.unstable_shouldYield = ie),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`),
      o = Symbol.for(`react.recoverable`),
      s = Symbol.for(`react.optimistic_key`);
    function c(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : r === s ? s : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.browser = function (e) {
        return { $$typeof: o, _reason: e };
      }),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return c(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = l.T,
          n = i.p;
        try {
          if (((l.T = null), (i.p = 2), e)) return e();
        } finally {
          ((l.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = d(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = d(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority:
                  typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = d(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = d(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              fetchPriority:
                typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return l.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (e.version = `19.3.0`));
  }),
  m = o((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      for (var t = e, n = t; n && !n.alternate;)
        ((t = n), t.flags & 4098 && (e = t.return), (n = t.return));
      for (; t.return;) t = t.return;
      return t.tag === 3 ? e : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    function h(e, t, n, r, i, a) {
      for (; e !== null;) {
        if (
          ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a)) ||
          ((e.tag !== 22 || e.memoizedState === null) &&
            (t || (e.tag !== 5 && e.tag !== 27)) &&
            h(e.child, t, n, r, i, a))
        )
          return !0;
        e = e.sibling;
      }
      return !1;
    }
    function g(e) {
      for (e = e.return; e !== null;) {
        if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
        e = e.return;
      }
      return null;
    }
    function _(e) {
      var t = !1;
      for (
        e = e.return;
        e !== null &&
        (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);
      )
        e = e.return;
      return t;
    }
    function v(e) {
      var t = [null, null],
        n = g(e);
      return (n === null || y(t, e, n.child, { foundSelf: !1 }), t);
    }
    function y(e, t, n, r) {
      for (; n !== null;) {
        if (n === t) r.foundSelf = !0;
        else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
          if (r.foundSelf) return ((e[1] = n), !0);
          e[0] = n;
        } else if (
          (n.tag !== 22 || n.memoizedState === null) &&
          y(e, t, n.child, r)
        )
          return !0;
        n = n.sibling;
      }
      return !1;
    }
    function b(e) {
      switch (e.tag) {
        case 5:
        case 27:
        case 6:
          return e.stateNode;
        case 3:
          return e.stateNode.containerInfo;
        default:
          throw Error(i(559));
      }
    }
    var ee = null,
      x = null;
    function te(e, t, n) {
      return e === n || (e === t && ((ee = e), !0));
    }
    function ne(e, t, n) {
      return e === n ? ((x = e), !1) : e === t && (x !== null && (ee = e), !0);
    }
    function re(e) {
      if (e === null) return null;
      do e = e === null ? null : e.return;
      while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
      return e || null;
    }
    function ie(e, t, n) {
      for (var r = 0, i = e; i; i = n(i)) r++;
      i = 0;
      for (var a = t; a; a = n(a)) i++;
      for (; 0 < r - i;) ((e = n(e)), r--);
      for (; 0 < i - r;) ((t = n(t)), i--);
      for (; r--;) {
        if (e === t || (t !== null && e === t.alternate)) return e;
        ((e = n(e)), (t = n(t)));
      }
      return null;
    }
    var S = Object.assign,
      ae = Symbol.for(`react.element`),
      oe = Symbol.for(`react.transitional.element`),
      C = Symbol.for(`react.portal`),
      se = Symbol.for(`react.fragment`),
      ce = Symbol.for(`react.strict_mode`),
      le = Symbol.for(`react.profiler`),
      ue = Symbol.for(`react.consumer`),
      de = Symbol.for(`react.context`),
      fe = Symbol.for(`react.forward_ref`),
      pe = Symbol.for(`react.suspense`),
      me = Symbol.for(`react.suspense_list`),
      he = Symbol.for(`react.memo`),
      ge = Symbol.for(`react.lazy`),
      _e = Symbol.for(`react.activity`),
      ve = Symbol.for(`react.legacy_hidden`),
      ye = Symbol.for(`react.memo_cache_sentinel`),
      be = Symbol.for(`react.view_transition`),
      xe = Symbol.for(`react.recoverable`),
      Se = Symbol.iterator;
    function Ce(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (Se && e[Se]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var we = Symbol.for(`react.client.reference`);
    function Te(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === we ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case se:
          return `Fragment`;
        case le:
          return `Profiler`;
        case ce:
          return `StrictMode`;
        case pe:
          return `Suspense`;
        case me:
          return `SuspenseList`;
        case _e:
          return `Activity`;
        case be:
          return `ViewTransition`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case C:
            return `Portal`;
          case de:
            return e.displayName || `Context`;
          case ue:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case fe:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case he:
            return (
              (t = e.displayName || null),
              t === null ? Te(e.type) || `Memo` : t
            );
          case ge:
            ((t = e._payload), (e = e._init));
            try {
              return Te(e(t));
            } catch {}
        }
      return null;
    }
    var Ee = Array.isArray,
      w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      De = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Oe = { pending: !1, data: null, method: null, action: null },
      ke = [],
      Ae = -1;
    function je(e) {
      return { current: e };
    }
    function Me(e) {
      0 > Ae || ((e.current = ke[Ae]), (ke[Ae] = null), Ae--);
    }
    function Ne(e, t) {
      (Ae++, (ke[Ae] = e.current), (e.current = t));
    }
    var Pe = je(null),
      Fe = je(null),
      Ie = je(null),
      Le = je(null);
    function Re(e, t) {
      switch ((Ne(Ie, t), Ne(Fe, e), Ne(Pe, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = up(t)), (e = dp(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (Me(Pe), Ne(Pe, e));
    }
    function ze() {
      (Me(Pe), Me(Fe), Me(Ie));
    }
    function Be(e) {
      var t = e.memoizedState;
      (t !== null && ((sh._currentValue = t.memoizedState), Ne(Le, e)),
        (t = Pe.current));
      var n = dp(t, e.type);
      t !== n && (Ne(Fe, e), Ne(Pe, n));
    }
    function Ve(e) {
      (Fe.current === e && (Me(Pe), Me(Fe)),
        Le.current === e && (Me(Le), (sh._currentValue = Oe)));
    }
    var He, Ue;
    function We(e) {
      if (He === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((He = (t && t[1]) || ``),
            (Ue =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        He +
        e +
        Ue
      );
    }
    var Ge = !1;
    function Ke(e, t) {
      if (!e || Ge) return ``;
      Ge = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  n = !1;
                  try {
                    var i = Object.getOwnPropertyDescriptor(
                      e.prototype,
                      `props`,
                    );
                    (Object.defineProperty(e.prototype, "props", {
                      configurable: !0,
                      set: function () {
                        throw Error();
                      },
                    }),
                      (n = !0),
                      new e());
                  } finally {
                    n &&
                      (i === void 0
                        ? delete e.prototype.props
                        : Object.defineProperty(e.prototype, "props", i));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Ge = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? We(n) : ``;
    }
    function qe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return We(e.type);
        case 16:
          return We(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? We(`Suspense Fallback`)
            : We(`Suspense`);
        case 19:
          return We(`SuspenseList`);
        case 0:
        case 15:
          return Ke(e.type, !1);
        case 11:
          return Ke(e.type.render, !1);
        case 1:
          return Ke(e.type, !0);
        case 31:
          return We(`Activity`);
        case 30:
          return We(`ViewTransition`);
        default:
          return ``;
      }
    }
    function Je(e) {
      try {
        var t = ``,
          n = null;
        do ((t += qe(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ye = Object.prototype.hasOwnProperty,
      Xe = t.unstable_scheduleCallback,
      Ze = t.unstable_cancelCallback,
      Qe = t.unstable_shouldYield,
      $e = t.unstable_requestPaint,
      et = t.unstable_now,
      tt = t.unstable_getCurrentPriorityLevel,
      nt = t.unstable_ImmediatePriority,
      rt = t.unstable_UserBlockingPriority,
      it = t.unstable_NormalPriority,
      at = t.unstable_LowPriority,
      ot = t.unstable_IdlePriority,
      st = t.log,
      ct = t.unstable_setDisableYieldValue,
      lt = null,
      ut = null;
    function dt(e) {
      if (
        (typeof st == `function` && ct(e),
        ut && typeof ut.setStrictMode == `function`)
      )
        try {
          ut.setStrictMode(lt, e);
        } catch {}
    }
    var ft = Math.clz32 ? Math.clz32 : ht,
      pt = Math.log,
      mt = Math.LN2;
    function ht(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((pt(e) / mt) | 0)) | 0);
    }
    var gt = 256,
      _t = 262144,
      vt = 4194304;
    function yt(e) {
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
          return e & -e;
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
    function bt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = yt(n)))
                : (i = yt(o))
              : (i = yt(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = yt(n)))
                  : (i = yt(o)))
              : (i = yt(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function xt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function St(e, t) {
      t & 8 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n;) {
          var r = 31 - ft(n),
            i = 1 << r;
          ((t |= e[r]), (n &= ~i));
        }
      return t;
    }
    function Ct(e, t) {
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
    function wt() {
      var e = vt;
      return ((vt <<= 1), !(vt & 62914560) && (vt = 4194304), e);
    }
    function Tt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Et(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Dt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - ft(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && Ot(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function Ot(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - ft(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function kt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - ft(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function At(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : jt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function jt(e) {
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
    function Mt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function Nt() {
      var e = De.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : Ch(e.type)) : e;
    }
    function Pt(e, t) {
      var n = De.p;
      try {
        return ((De.p = e), t());
      } finally {
        De.p = n;
      }
    }
    var Ft = Math.random().toString(36).slice(2),
      It = `__reactFiber$` + Ft,
      Lt = `__reactProps$` + Ft,
      Rt = `__reactContainer$` + Ft,
      zt = `__reactEvents$` + Ft,
      Bt = `__reactListeners$` + Ft,
      Vt = `__reactHandles$` + Ft,
      Ht = `__reactResources$` + Ft,
      Ut = `__reactMarker$` + Ft,
      Wt = `__reactLoad$` + Ft;
    function Gt(e) {
      (delete e[It], delete e[Lt], delete e[Bt], delete e[Vt]);
    }
    function Kt(e) {
      var t;
      if ((t = e[It])) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[Rt] || n[It])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = fm(e); e !== null;) {
              if ((n = e[It])) return n;
              e = fm(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function qt(e) {
      if ((e = e[It] || e[Rt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Jt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Yt(e) {
      var t = e[Ht];
      return (
        (t ||= e[Ht] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Xt(e) {
      e[Ut] = !0;
    }
    function Zt(e) {
      e[Wt] = void 0;
    }
    var Qt = new Set(),
      $t = {};
    function en(e, t) {
      (tn(e, t), tn(e + `Capture`, t));
    }
    function tn(e, t) {
      for ($t[e] = t, e = 0; e < t.length; e++) Qt.add(t[e]);
    }
    var nn = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      rn = {},
      an = {};
    function on(e) {
      return Ye.call(an, e)
        ? !0
        : Ye.call(rn, e)
          ? !1
          : nn.test(e)
            ? (an[e] = !0)
            : ((rn[e] = !0), !1);
    }
    var T = !1;
    function sn() {
      var e = T;
      return ((T = !1), e);
    }
    function cn(e, t, n) {
      if (on(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, n);
        }
      }
    }
    function ln(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, n);
      }
    }
    function un(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, r);
      }
    }
    function dn(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function fn(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function pn(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function E(e) {
      if (!e._valueTracker) {
        var t = fn(e) ? `checked` : `value`;
        e._valueTracker = pn(e, t, `` + e[t]);
      }
    }
    function mn(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = fn(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    var hn = /[\n"\\]/g;
    function gn(e) {
      return e.replace(hn, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function _n(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + dn(t))
            : e.value !== `` + dn(t) && (e.value = `` + dn(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : yn(e, dn(n))
          : o === `number` && e.value == t
            ? yn(e, dn(e.value))
            : yn(e, dn(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + dn(s))
          : e.removeAttribute(`name`));
    }
    function vn(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          E(e);
          return;
        }
        ((n = n == null ? `` : `` + dn(n)),
          (t = t == null ? n : `` + dn(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        E(e));
    }
    function yn(e, t) {
      e.defaultValue !== `` + t && (e.defaultValue = `` + t);
    }
    function bn(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + dn(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function xn(e, t, n) {
      if (
        t != null &&
        ((t = `` + dn(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + dn(n);
    }
    function Sn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (Ee(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = dn(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        E(e));
    }
    function Cn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var wn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Tn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || wn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function En(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``),
            (T = !0));
        for (var a in t)
          ((r = t[a]),
            t.hasOwnProperty(a) && n[a] !== r && (Tn(e, a, r), (T = !0)));
      } else for (var o in t) t.hasOwnProperty(o) && Tn(e, o, t[o]);
    }
    function Dn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var On = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`maskType`, `mask-type`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      kn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function An(e) {
      return kn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function jn() {}
    var Mn = null;
    function Nn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Pn = null,
      Fn = null;
    function In(e) {
      var t = qt(e);
      if (t && (e = t.stateNode)) {
        var n = e[Lt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (_n(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + gn(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[Lt] || null;
                  if (!a) throw Error(i(90));
                  _n(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && mn(r));
            }
            break a;
          case `textarea`:
            xn(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && bn(e, !!n.multiple, t, !1));
        }
      }
    }
    var Ln = !1;
    function Rn(e, t, n) {
      if (Ln) return e(t, n);
      Ln = !0;
      try {
        return e(t);
      } finally {
        if (
          ((Ln = !1),
          (Pn !== null || Fn !== null) &&
            (zd(), Pn && ((t = Pn), (e = Fn), (Fn = Pn = null), In(t), e)))
        )
          for (t = 0; t < e.length; t++) In(e[t]);
      }
    }
    function zn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[Lt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var Bn =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0,
      Vn = !1;
    if (Bn)
      try {
        var D = {};
        (Object.defineProperty(D, "passive", {
          get: function () {
            Vn = !0;
          },
        }),
          window.addEventListener(`test`, D, D),
          window.removeEventListener(`test`, D, D));
      } catch {
        Vn = !1;
      }
    var O = null,
      Hn = null,
      Un = null;
    function Wn() {
      if (Un) return Un;
      var e,
        t = Hn,
        n = t.length,
        r,
        i = `value` in O ? O.value : O.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Un = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Gn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Kn() {
      return !0;
    }
    function qn() {
      return !1;
    }
    function Jn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Kn
            : qn),
          (this.isPropagationStopped = qn),
          this
        );
      }
      return (
        S(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Kn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Kn));
          },
          persist: function () {},
          isPersistent: Kn,
        }),
        t
      );
    }
    var Yn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Xn = Jn(Yn),
      Zn = S({}, Yn, { view: 0, detail: 0 }),
      Qn = Jn(Zn),
      $n,
      er,
      tr,
      nr = S({}, Zn, {
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
        getModifierState: pr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== tr &&
                (tr && e.type === `mousemove`
                  ? (($n = e.screenX - tr.screenX),
                    (er = e.screenY - tr.screenY))
                  : (er = $n = 0),
                (tr = e)),
              $n);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : er;
        },
      }),
      rr = Jn(nr),
      ir = Jn(S({}, nr, { dataTransfer: 0 })),
      ar = Jn(S({}, Zn, { relatedTarget: 0 })),
      or = Jn(
        S({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      sr = Jn(
        S({}, Yn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      cr = Jn(S({}, Yn, { data: 0 })),
      lr = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      ur = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      dr = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function fr(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = dr[e])
          ? !!t[e]
          : !1;
    }
    function pr() {
      return fr;
    }
    var mr = Jn(
        S({}, Zn, {
          key: function (e) {
            if (e.key) {
              var t = lr[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Gn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? ur[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: pr,
          charCode: function (e) {
            return e.type === `keypress` ? Gn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Gn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      hr = Jn(
        S({}, nr, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      gr = Jn(S({}, Yn, { submitter: 0 })),
      _r = Jn(
        S({}, Zn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: pr,
        }),
      ),
      vr = Jn(S({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      yr = Jn(
        S({}, nr, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      br = Jn(S({}, Yn, { newState: 0, oldState: 0, source: 0 })),
      xr = [9, 13, 27, 32],
      Sr = Bn && `CompositionEvent` in window,
      Cr = null;
    Bn && `documentMode` in document && (Cr = document.documentMode);
    var wr = Bn && `TextEvent` in window && !Cr,
      Tr = Bn && (!Sr || (Cr && 8 < Cr && 11 >= Cr)),
      Er = ` `,
      Dr = !1;
    function Or(e, t) {
      switch (e) {
        case `keyup`:
          return xr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function kr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var Ar = !1;
    function jr(e, t) {
      switch (e) {
        case `compositionend`:
          return kr(t);
        case `keypress`:
          return t.which === 32 ? ((Dr = !0), Er) : null;
        case `textInput`:
          return ((e = t.data), e === Er && Dr ? null : e);
        default:
          return null;
      }
    }
    function Mr(e, t) {
      if (Ar)
        return e === `compositionend` || (!Sr && Or(e, t))
          ? ((e = Wn()), (Un = Hn = O = null), (Ar = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Tr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var Nr = {
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
      week: !0,
    };
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!Nr[e.type] : t === `textarea`;
    }
    function Fr(e, t, n, r) {
      (Pn ? (Fn ? Fn.push(r) : (Fn = [r])) : (Pn = r),
        (t = qf(t, `onChange`)),
        0 < t.length &&
          ((n = new Xn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Ir = null,
      Lr = null;
    function Rr(e) {
      Bf(e, 0);
    }
    function zr(e) {
      if (mn(Jt(e))) return e;
    }
    function Br(e, t) {
      if (e === `change`) return t;
    }
    var Vr = !1;
    if (Bn) {
      var Hr;
      if (Bn) {
        var Ur = `oninput` in document;
        if (!Ur) {
          var Wr = document.createElement(`div`);
          (Wr.setAttribute(`oninput`, `return;`),
            (Ur = typeof Wr.oninput == `function`));
        }
        Hr = Ur;
      } else Hr = !1;
      Vr = Hr && (!document.documentMode || 9 < document.documentMode);
    }
    function Gr() {
      Ir && (Ir.detachEvent(`onpropertychange`, Kr), (Lr = Ir = null));
    }
    function Kr(e) {
      if (e.propertyName === `value` && zr(Lr)) {
        var t = [];
        (Fr(t, Lr, e, Nn(e)), Rn(Rr, t));
      }
    }
    function qr(e, t, n) {
      e === `focusin`
        ? (Gr(), (Ir = t), (Lr = n), Ir.attachEvent(`onpropertychange`, Kr))
        : e === `focusout` && Gr();
    }
    function Jr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return zr(Lr);
    }
    function Yr(e, t) {
      if (e === `click`) return zr(t);
    }
    function Xr(e, t) {
      if (e === `input` || e === `change`) return zr(t);
    }
    function Zr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Qr = typeof Object.is == `function` ? Object.is : Zr;
    function $r(e, t) {
      if (Qr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ye.call(t, i) || !Qr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function ei(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function ti(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function ni(e, t) {
      var n = ti(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = ti(n);
      }
    }
    function ri(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? ri(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function ii(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = ei(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ei(e.document);
      }
      return t;
    }
    function ai(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var oi = Bn && `documentMode` in document && 11 >= document.documentMode,
      si = null,
      ci = null,
      li = null,
      ui = !1;
    function di(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      ui ||
        si == null ||
        si !== ei(r) ||
        ((r = si),
        `selectionStart` in r && ai(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (li && $r(li, r)) ||
          ((li = r),
          (r = qf(ci, `onSelect`)),
          0 < r.length &&
            ((t = new Xn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = si))));
    }
    function fi(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var pi = {
        animationend: fi(`Animation`, `AnimationEnd`),
        animationiteration: fi(`Animation`, `AnimationIteration`),
        animationstart: fi(`Animation`, `AnimationStart`),
        transitionrun: fi(`Transition`, `TransitionRun`),
        transitionstart: fi(`Transition`, `TransitionStart`),
        transitioncancel: fi(`Transition`, `TransitionCancel`),
        transitionend: fi(`Transition`, `TransitionEnd`),
      },
      mi = {},
      hi = {};
    Bn &&
      ((hi = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete pi.animationend.animation,
        delete pi.animationiteration.animation,
        delete pi.animationstart.animation),
      `TransitionEvent` in window || delete pi.transitionend.transition);
    function k(e) {
      if (mi[e]) return mi[e];
      if (!pi[e]) return e;
      var t = pi[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in hi) return (mi[e] = t[n]);
      return e;
    }
    var gi = k(`animationend`),
      _i = k(`animationiteration`),
      vi = k(`animationstart`),
      yi = k(`transitionrun`),
      bi = k(`transitionstart`),
      xi = k(`transitioncancel`),
      Si = k(`transitionend`),
      Ci = new Map(),
      wi =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    wi.push(`scrollEnd`);
    function Ti(e, t) {
      (Ci.set(e, t), en(t, [e]));
    }
    var Ei = 0;
    function Di(e, t) {
      if (e.name != null && e.name !== `auto`) return e.name;
      if (t.autoName !== null) return t.autoName;
      e = xd.identifierPrefix;
      var n = Ei++;
      return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e));
    }
    function Oi(e) {
      if (e == null || typeof e == `string`) return e;
      var t = null,
        n = kd;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = e[n[r]];
          if (i != null) {
            if (i === `none`) return `none`;
            t = t == null ? i : t + (` ` + i);
          }
        }
      return t ?? e.default;
    }
    function ki(e, t) {
      return (
        (e = Oi(e)),
        (t = Oi(t)),
        t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t
      );
    }
    var Ai =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ji = [],
      Mi = 0,
      Ni = 0;
    function A() {
      for (var e = Mi, t = (Ni = Mi = 0); t < e;) {
        var n = ji[t];
        ji[t++] = null;
        var r = ji[t];
        ji[t++] = null;
        var i = ji[t];
        ji[t++] = null;
        var a = ji[t];
        if (((ji[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && j(n, i, a);
      }
    }
    function Pi(e, t, n, r) {
      ((ji[Mi++] = e),
        (ji[Mi++] = t),
        (ji[Mi++] = n),
        (ji[Mi++] = r),
        (Ni |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function Fi(e, t, n, r) {
      return (Pi(e, t, n, r), Li(e));
    }
    function Ii(e, t) {
      return (Pi(e, null, null, t), Li(e));
    }
    function j(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - ft(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function Li(e) {
      if (50 < Ad) throw ((Ad = 0), (jd = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var Ri = {};
    function zi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Bi(e, t, n, r) {
      return new zi(e, t, n, r);
    }
    function Vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Bi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 1206910976),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function Ui(e, t) {
      e.flags &= 1206910978;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function Wi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof r == `function`)) Vi(r) && (s = 1);
      else if (typeof r == `string`)
        s = qm(e, n, Pe.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (r) {
          case _e:
            return (
              (e = Bi(31, n, t, a)),
              (e.elementType = _e),
              (e.lanes = o),
              e
            );
          case se:
            return Gi(n.children, a, o, t);
          case ce:
            ((s = 8), (a |= 24));
            break;
          case le:
            return (
              (e = Bi(12, n, t, a | 2)),
              (e.elementType = le),
              (e.lanes = o),
              e
            );
          case pe:
            return (
              (e = Bi(13, n, t, a)),
              (e.elementType = pe),
              (e.lanes = o),
              e
            );
          case me:
            return (
              (e = Bi(19, n, t, a)),
              (e.elementType = me),
              (e.lanes = o),
              e
            );
          case ve:
          case be:
            return (
              (e = a | 32),
              (e = Bi(30, n, t, e)),
              (e.elementType = be),
              (e.lanes = o),
              (e.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
              e
            );
          default:
            if (typeof r == `object` && r)
              switch (r.$$typeof) {
                case de:
                  s = 10;
                  break a;
                case ue:
                  s = 9;
                  break a;
                case fe:
                  s = 11;
                  break a;
                case he:
                  s = 14;
                  break a;
                case ge:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = Bi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function Gi(e, t, n, r) {
      return ((e = Bi(7, e, r, t)), (e.lanes = n), e);
    }
    function Ki(e, t, n) {
      return ((e = Bi(6, e, null, t)), (e.lanes = n), e);
    }
    function qi(e) {
      var t = Bi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function M(e, t, n) {
      return (
        (t = Bi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ji = new WeakMap();
    function Yi(e, t) {
      if (typeof e == `object` && e) {
        var n = Ji.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Je(t) }), Ji.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Je(t) };
    }
    var Xi = [],
      Zi = 0,
      Qi = null,
      $i = 0,
      ea = [],
      ta = 0,
      na = null,
      ra = 1,
      ia = ``;
    function aa(e, t) {
      ((Xi[Zi++] = $i), (Xi[Zi++] = Qi), (Qi = e), ($i = t));
    }
    function oa(e, t, n) {
      ((ea[ta++] = ra), (ea[ta++] = ia), (ea[ta++] = na), (na = e));
      var r = ra;
      e = ia;
      var i = 32 - ft(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - ft(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ra = (1 << (32 - ft(t) + i)) | (n << i) | r),
          (ia = a + e));
      } else ((ra = (1 << a) | (n << i) | r), (ia = e));
    }
    function sa(e) {
      e.return !== null && (aa(e, 1), oa(e, 1, 0));
    }
    function ca(e) {
      for (; e === Qi;)
        ((Qi = Xi[--Zi]), (Xi[Zi] = null), ($i = Xi[--Zi]), (Xi[Zi] = null));
      for (; e === na;)
        ((na = ea[--ta]),
          (ea[ta] = null),
          (ia = ea[--ta]),
          (ea[ta] = null),
          (ra = ea[--ta]),
          (ea[ta] = null));
    }
    function la(e, t) {
      ((ea[ta++] = ra),
        (ea[ta++] = ia),
        (ea[ta++] = na),
        (ra = t.id),
        (ia = t.overflow),
        (na = e));
    }
    var ua = null,
      da = null,
      N = !1,
      fa = null,
      pa = !1,
      ma = Error(i(519));
    function ha(e) {
      throw (
        xa(
          Yi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        ma
      );
    }
    function ga(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[It] = e), (t[Lt] = r), n)) {
        case `dialog`:
          ($(`cancel`, t), $(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          $(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < Rf.length; n++) $(Rf[n], t);
          break;
        case `source`:
          $(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          ($(`error`, t), $(`load`, t));
          break;
        case `details`:
          $(`toggle`, t);
          break;
        case `input`:
          ($(`invalid`, t),
            vn(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          $(`invalid`, t);
          break;
        case `textarea`:
          ($(`invalid`, t), Sn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        $f(t.textContent, n)
          ? (r.popover != null && ($(`beforetoggle`, t), $(`toggle`, t)),
            r.onScroll != null && $(`scroll`, t),
            r.onScrollEnd != null && $(`scrollend`, t),
            r.onClick != null && (t.onclick = jn),
            (t = !0))
          : (t = !1),
        t || ha(e, !0));
    }
    function _a(e) {
      for (ua = e.return; ua;)
        switch (ua.tag) {
          case 5:
          case 31:
          case 13:
            pa = !1;
            return;
          case 27:
          case 3:
            pa = !0;
            return;
          default:
            ua = ua.return;
        }
    }
    function va(e) {
      if (e !== ua) return !1;
      if (!N) return (_a(e), (N = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || pp(e.type, e.memoizedProps))),
          (n = !n)),
        n && da && ha(e),
        _a(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        da = dm(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        da = dm(e);
      } else
        t === 27
          ? ((t = da),
            Sp(e.type) ? ((e = um), (um = null), (da = e)) : (da = t))
          : (da = ua ? lm(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ya() {
      ((da = ua = null), (N = !1));
    }
    function ba() {
      var e = fa;
      return (
        e !== null && (Y === null ? (Y = e) : Y.push.apply(Y, e), (fa = null)),
        e
      );
    }
    function xa(e) {
      fa === null ? (fa = [e]) : fa.push(e);
    }
    var Sa = je(null),
      Ca = null,
      wa = null;
    function Ta(e, t, n) {
      (Ne(Sa, t._currentValue), (t._currentValue = n));
    }
    function Ea(e) {
      ((e._currentValue = Sa.current), Me(Sa));
    }
    function Da(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Oa(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Da(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Da(s, n, e),
            (s = null));
        } else
          a.tag === 13 &&
          a.memoizedState !== null &&
          a.memoizedState.dehydrated === null
            ? ((a.lanes |= n),
              (s = a.alternate),
              s !== null && (s.lanes |= n),
              Da(a.return, n, e),
              (s = a.child),
              (s = s === null ? null : s.sibling))
            : (s = a.child);
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ka(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Qr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === Le.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [sh]) : e.push(sh));
        }
        a = a.return;
      }
      return (e !== null && Oa(t, e, n, r), (t.flags |= 262144), e !== null);
    }
    function Aa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Qr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ja(e) {
      ((Ca = e),
        (wa = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function Ma(e) {
      return Pa(Ca, e);
    }
    function Na(e, t) {
      return (Ca === null && ja(e), Pa(e, t));
    }
    function Pa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), wa === null)) {
        if (e === null) throw Error(i(308));
        ((wa = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else wa = wa.next = t;
      return n;
    }
    var Fa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      Ia = t.unstable_scheduleCallback,
      La = t.unstable_NormalPriority,
      Ra = {
        $$typeof: de,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function za() {
      return { controller: new Fa(), data: new Map(), refCount: 0 };
    }
    function Ba(e) {
      (e.refCount--,
        e.refCount === 0 &&
          Ia(La, function () {
            e.controller.abort();
          }));
    }
    function Va(e, t) {
      if (e.pendingLanes & 4194048) {
        var n = e.transitionTypes;
        for (
          n === null && (n = e.transitionTypes = []), e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    var Ha = null;
    function Ua(e) {
      var t = e.transitionTypes;
      return ((e.transitionTypes = null), t);
    }
    var Wa = null,
      Ga = 0,
      Ka = 0,
      qa = null;
    function Ja(e, t) {
      if (Wa === null) {
        var n = (Wa = []);
        ((Ga = 0),
          (Ka = Nf()),
          (qa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (Ga++, t.then(Ya, Ya), t);
    }
    function Ya() {
      if (--Ga === 0 && ((Ha = null), Wa !== null)) {
        qa !== null && (qa.status = `fulfilled`);
        var e = Wa;
        ((Wa = null), (Ka = 0), (qa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Za = w.S;
    w.S = function (e, t) {
      if (
        ((gd = et()),
        typeof t == `object` && t && typeof t.then == `function` && Ja(e, t),
        Ha !== null)
      )
        for (var n = yf; n !== null;) (Va(n, Ha), (n = n.next));
      if (((n = e.types), n !== null)) {
        for (var r = yf; r !== null;) (Va(r, n), (r = r.next));
        if (Ka !== 0) {
          ((r = Ha), r === null && (r = Ha = []));
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.indexOf(a) === -1 && r.push(a);
          }
        }
      }
      Za !== null && Za(e, t);
    };
    var Qa = je(null);
    function $a() {
      var e = Qa.current;
      return e === null ? ed.pooledCache : e;
    }
    function eo(e, t) {
      t === null ? Ne(Qa, Qa.current) : Ne(Qa, t.pool);
    }
    function to() {
      var e = $a();
      return e === null ? null : { parent: Ra._currentValue, pool: e };
    }
    var no = Error(i(460)),
      ro = Error(i(474)),
      io = Error(i(542)),
      ao = { then: function () {} };
    function oo(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function so(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(jn, jn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw (
            (e = t.reason),
            fo(e),
            e === void 0 && !(`reason` in t) ? Error(i(600)) : e
          );
        default:
          if (typeof t.status == `string`) t.then(jn, jn);
          else {
            if (((e = ed), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), fo(e), e);
          }
          throw ((lo = t), no);
      }
    }
    function co(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((lo = e), no)
          : e;
      }
    }
    var lo = null;
    function uo() {
      if (lo === null) throw Error(i(459));
      var e = lo;
      return ((lo = null), e);
    }
    function fo(e) {
      if (e === no || e === io) throw Error(i(483));
    }
    var po = null,
      mo = 0;
    function ho(e) {
      var t = mo;
      return ((mo += 1), po === null && (po = []), so(po, e, t));
    }
    function P(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function go(e, t) {
      throw t.$$typeof === ae
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function _o(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = Hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 134217730), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 134217730), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ki(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === se
          ? ((e = d(e, t, n.props.children, r, n.key)), P(e, n), e)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === ge &&
                  co(i) === t.type))
            ? ((t = a(t, n.props)), P(t, n), (t.return = e), t)
            : ((t = Wi(n.type, n.key, n.props, null, e.mode, r)),
              P(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = M(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Gi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ki(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case oe:
              return (
                (n = Wi(t.type, t.key, t.props, null, e.mode, n)),
                P(n, t),
                (n.return = e),
                n
              );
            case C:
              return ((t = M(t, e.mode, n)), (t.return = e), t);
            case ge:
              return ((t = co(t)), f(e, t, n));
          }
          if (Ee(t) || Ce(t))
            return ((t = Gi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, ho(t), n);
          if (t.$$typeof === de) return f(e, Na(e, t), n);
          go(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case oe:
              return n.key === i ? l(e, t, n, r) : null;
            case C:
              return n.key === i ? u(e, t, n, r) : null;
            case ge:
              return ((n = co(n)), p(e, t, n, r));
          }
          if (Ee(n) || Ce(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, ho(n), r);
          if (n.$$typeof === de) return p(e, t, Na(e, n), r);
          go(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case oe:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case C:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case ge:
              return ((r = co(r)), m(e, t, n, r, i));
          }
          if (Ee(r) || Ce(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, ho(r), i);
          if (r.$$typeof === de) return m(e, t, n, Na(t, r), i);
          go(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), N && aa(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (N && aa(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                ((_ = g.alternate),
                _ !== null && d.delete(_.key === null ? h : _.key)),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          N && aa(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), N && aa(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (N && aa(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                ((_ = v.alternate),
                _ !== null && h.delete(_.key === null ? g : _.key)),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          N && aa(a, g),
          u
        );
      }
      function _(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === se &&
            o.key === null &&
            o.props.ref === void 0 &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case oe:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === se)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          P(c, o),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === ge &&
                        co(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        P(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === se
                  ? ((c = Gi(o.props.children, e.mode, c, o.key)),
                    P(c, o),
                    (c.return = e),
                    (e = c))
                  : ((c = Wi(o.type, o.key, o.props, null, e.mode, c)),
                    P(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case C:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = M(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case ge:
              return ((o = co(o)), _(e, r, o, c));
          }
          if (Ee(o)) return h(e, r, o, c);
          if (Ce(o)) {
            if (((l = Ce(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return _(e, r, ho(o), c);
          if (o.$$typeof === de) return _(e, r, Na(e, o), c);
          go(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ki(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          mo = 0;
          var i = _(e, t, n, r);
          return ((po = null), i);
        } catch (t) {
          if (t === no || t === io) throw t;
          var a = Bi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var vo = _o(!0),
      yo = _o(!1),
      bo = !1;
    function xo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function So(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Co(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function wo(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = Li(e)),
          j(e, null, n),
          t
        );
      }
      return (Pi(e, r, t, n), Li(e));
    }
    function To(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), kt(e, n));
      }
    }
    function Eo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Do = !1;
    function Oo() {
      if (Do) {
        var e = qa;
        if (e !== null) throw e;
      }
    }
    function ko(e, t, n, r) {
      Do = !1;
      var i = e.updateQueue;
      bo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (J & f) === f : (r & f) === f) {
            (f !== 0 && f === Ka && (Do = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                h = s;
              f = t;
              var g = n;
              switch (h.tag) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(g, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(g, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = S({}, d, f);
                  break a;
                case 2:
                  bo = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (cd |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Ao(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function jo(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Ao(n[e], t);
    }
    var Mo = je(null),
      No = je(0);
    function Po(e, t) {
      ((e = od), Ne(No, e), Ne(Mo, t), (od = e | t.baseLanes));
    }
    function Fo() {
      (Ne(No, od), Ne(Mo, Mo.current));
    }
    function Io() {
      ((od = No.current), Me(Mo), Me(No));
    }
    var Lo = je(null),
      Ro = null;
    function zo(e) {
      var t = e.alternate;
      (Ne(Uo, Uo.current & 1),
        Ne(Lo, e),
        Ro === null &&
          (t === null || Mo.current !== null || t.memoizedState !== null) &&
          (Ro = e));
    }
    function Bo(e) {
      (Ne(Uo, Uo.current), Ne(Lo, e), Ro === null && (Ro = e));
    }
    function Vo(e) {
      e.tag === 22
        ? (Ne(Uo, Uo.current), Ne(Lo, e), Ro === null && (Ro = e))
        : Ho();
    }
    function Ho() {
      (Ne(Uo, Uo.current), Ne(Lo, Lo.current));
    }
    function F(e) {
      (Me(Lo), Ro === e && (Ro = null), Me(Uo));
    }
    var Uo = je(0);
    function Wo(e, t) {
      (Ne(Lo, Lo.current), Ne(Uo, t));
    }
    function Go(e) {
      (Me(Uo), Me(Lo), Ro === e && (Ro = null));
    }
    function Ko(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || om(n) || sm(n)))
            return t;
        } else if (
          t.tag === 19 &&
          t.memoizedProps.revealOrder !== `independent`
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var qo = 0,
      I = null,
      Jo = null,
      Yo = null,
      Xo = !1,
      Zo = !1,
      Qo = !1,
      $o = 0,
      es = 0,
      ts = null,
      ns = 0;
    function rs() {
      throw Error(i(321));
    }
    function is(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qr(e[n], t[n])) return !1;
      return !0;
    }
    function as(e, t, n, r, i, a) {
      return (
        (qo = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (w.H = e === null || e.memoizedState === null ? hc : gc),
        (Qo = !1),
        (a = n(r, i)),
        (Qo = !1),
        Zo && (a = ss(t, n, r, i)),
        os(e),
        a
      );
    }
    function os(e) {
      w.H = mc;
      var t = Jo !== null && Jo.next !== null;
      if (((qo = 0), (Yo = Jo = I = null), (Xo = !1), (es = 0), (ts = null), t))
        throw Error(i(300));
      e === null ||
        Nc ||
        ((e = e.dependencies), e !== null && Aa(e) && (Nc = !0));
    }
    function ss(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((Zo && (ts = null), (es = 0), (Zo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (Yo = Jo = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((w.H = _c), (o = t(n, r)));
      } while (Zo);
      return o;
    }
    function cs() {
      var e = w.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? ms(t) : t),
        (e = e.useState()[0]),
        (Jo === null ? null : Jo.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function ls() {
      var e = $o !== 0;
      return (($o = 0), e);
    }
    function us(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function ds(e) {
      if (Xo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        Xo = !1;
      }
      ((qo = 0), (Yo = Jo = I = null), (Zo = !1), (es = $o = 0), (ts = null));
    }
    function fs() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        Yo === null ? (I.memoizedState = Yo = e) : (Yo = Yo.next = e),
        Yo
      );
    }
    function ps() {
      if (Jo === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = Jo.next;
      var t = Yo === null ? I.memoizedState : Yo.next;
      if (t !== null) ((Yo = t), (Jo = e));
      else {
        if (e === null)
          throw I.alternate === null ? Error(i(467)) : Error(i(310));
        ((Jo = e),
          (e = {
            memoizedState: Jo.memoizedState,
            baseState: Jo.baseState,
            baseQueue: Jo.baseQueue,
            queue: Jo.queue,
            next: null,
          }),
          Yo === null ? (I.memoizedState = Yo = e) : (Yo = Yo.next = e));
      }
      return Yo;
    }
    function L() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ms(e) {
      var t = es;
      return (
        (es += 1),
        ts === null && (ts = []),
        (e = so(ts, e, t)),
        (t = I),
        (Yo === null ? t.memoizedState : Yo.next) === null &&
          ((t = t.alternate),
          (w.H = t === null || t.memoizedState === null ? hc : gc)),
        e
      );
    }
    function hs(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return ms(e);
        if (e.$$typeof === xe) return;
        if (e.$$typeof === de) return Ma(e);
      }
      throw Error(i(438, String(e)));
    }
    function gs(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = L()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ye;
      return (t.index++, n);
    }
    function R(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function _s(e) {
      return vs(ps(), Jo, e);
    }
    function vs(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (qo & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === Ka && (d = !0));
            else if ((qo & p) === p) {
              ((u = u.next), p === Ka && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (cd |= p));
            ((f = u.action),
              Qo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (cd |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Qr(o, e.memoizedState) && ((Nc = !0), d && ((n = qa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function ys(e) {
      var t = ps(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Qr(o, t.memoizedState) || (Nc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function z(e, t, n) {
      var r = I,
        a = ps(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Qr((Jo || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (Nc = !0)),
        (a = a.queue),
        Hs(xs.bind(null, r, a, e), [e]),
        (e =
          a.getSnapshot !== t ||
          s ||
          (Yo !== null && !!(Yo.memoizedState.tag & 1))),
        Ls(e ? 9 : 8, { destroy: void 0 }, B.bind(null, r, a, n, t), null),
        e)
      ) {
        if (((r.flags |= 2048), ed === null)) throw Error(i(349));
        o || qo & 127 || bs(r, t, n);
      }
      return n;
    }
    function bs(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = L()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function B(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ss(t) && Cs(e));
    }
    function xs(e, t, n) {
      return n(function () {
        Ss(t) && Cs(e);
      });
    }
    function Ss(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Qr(e, n);
      } catch {
        return !0;
      }
    }
    function Cs(e) {
      var t = Ii(e, 2);
      t !== null && Fd(t, e, 2);
    }
    function ws(e) {
      var t = fs();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Qo)) {
          dt(!0);
          try {
            n();
          } finally {
            dt(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: R,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Ts(e, t, n, r) {
      return ((e.baseState = n), vs(e, Jo, typeof r == `function` ? r : R));
    }
    function V(e, t, n, r, a) {
      if (dc(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (w.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Es(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Es(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = w.T,
          o = {};
        ((o.types = a === null ? null : a.types), (w.T = o));
        try {
          var s = n(i, r),
            c = w.S;
          (c !== null && c(o, s), Ds(e, t, s));
        } catch (n) {
          ks(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (w.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Ds(e, t, a));
        } catch (n) {
          ks(e, t, n);
        }
    }
    function Ds(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Os(e, t, n);
            },
            function (n) {
              return ks(e, t, n);
            },
          )
        : Os(e, t, n);
    }
    function Os(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        As(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Es(e, n))));
    }
    function ks(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), As(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function As(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function js(e, t) {
      return t;
    }
    function Ms(e, t) {
      if (N) {
        var n = ed.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (N) {
              if (da) {
                b: {
                  for (var i = da, a = pa; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = lm(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((da = lm(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              ha(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = fs()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: js,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = U.bind(null, I, r)),
        (r.dispatch = n),
        (r = ws(!1)),
        (a = uc.bind(null, I, !1, r.queue)),
        (r = fs()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = V.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Ns(e) {
      return Ps(ps(), Jo, e);
    }
    function Ps(e, t, n) {
      if (
        ((t = vs(e, t, js)[0]),
        (e = _s(R)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = ms(t);
        } catch (e) {
          throw e === no ? io : e;
        }
      else r = t;
      t = ps();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048),
          Ls(9, { destroy: void 0 }, Fs.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Fs(e, t) {
      e.action = t;
    }
    function Is(e) {
      var t = ps(),
        n = Jo;
      if (n !== null) return Ps(t, n, e);
      (ps(), (t = t.memoizedState), (n = ps()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function Ls(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = L()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function Rs() {
      return ps().memoizedState;
    }
    function zs(e, t, n, r) {
      var i = fs();
      ((I.flags |= e),
        (i.memoizedState = Ls(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function Bs(e, t, n, r) {
      var i = ps();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      Jo !== null && r !== null && is(r, Jo.memoizedState.deps)
        ? (i.memoizedState = Ls(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = Ls(1 | t, a, n, r)));
    }
    function Vs(e, t) {
      zs(8390656, 8, e, t);
    }
    function Hs(e, t) {
      Bs(2048, 8, e, t);
    }
    function Us(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) ((t = L()), (I.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function Ws(e) {
      var t = ps().memoizedState;
      return (
        Us({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function Gs(e, t) {
      return Bs(4, 2, e, t);
    }
    function Ks(e, t) {
      return Bs(4, 4, e, t);
    }
    function qs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Js(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        Bs(4, 4, qs.bind(null, t, e), n));
    }
    function Ys() {}
    function Xs(e, t) {
      var n = ps();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && is(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Zs(e, t) {
      var n = ps();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && is(t, r[1])) return r[0];
      if (((r = e()), Qo)) {
        dt(!0);
        try {
          e();
        } finally {
          dt(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Qs(e, t, n) {
      return n === void 0 || (qo & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Nd()), (I.lanes |= e), (cd |= e), n);
    }
    function $s(e, t, n, r) {
      return Qr(n, t)
        ? n
        : Mo.current === null
          ? !(qo & 106) || (qo & 1073741824 && !(J & 261930))
            ? ((Nc = !0), (e.memoizedState = n))
            : ((e = Nd()), (I.lanes |= e), (cd |= e), t)
          : ((e = Qs(e, n, r)), Qr(e, t) || (Nc = !0), e);
    }
    function ec(e, t, n, r, i) {
      var a = De.p;
      De.p = a !== 0 && 8 > a ? a : 8;
      var o = w.T,
        s = {};
      ((s.types = o === null ? null : o.types), (w.T = s), uc(e, !1, t, n));
      try {
        var c = i(),
          l = w.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? lc(e, t, Xa(c, r), Md(e))
            : lc(e, t, r, Md(e)));
      } catch (n) {
        lc(e, t, { then: function () {}, status: `rejected`, reason: n }, Md());
      } finally {
        ((De.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (w.T = o));
      }
    }
    function tc() {}
    function nc(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = H(e).queue;
      ec(
        e,
        a,
        t,
        Oe,
        n === null
          ? tc
          : function () {
              return (rc(e), n(r));
            },
      );
    }
    function H(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Oe,
        baseState: Oe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: R,
          lastRenderedState: Oe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: R,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function rc(e) {
      var t = H(e);
      (t.next === null && (t = e.alternate.memoizedState),
        lc(e, t.next.queue, {}, Md()));
    }
    function ic() {
      return Ma(sh);
    }
    function ac() {
      return ps().memoizedState;
    }
    function oc() {
      return ps().memoizedState;
    }
    function sc(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = Md();
            e = Co(n);
            var r = wo(t, e, n);
            (r !== null && (Fd(r, t, n), To(r, t, n)),
              (t = { cache: za() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function cc(e, t, n) {
      var r = Md();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        dc(e)
          ? fc(t, n)
          : ((n = Fi(e, t, n, r)), n !== null && (Fd(n, e, r), pc(n, t, r))));
    }
    function U(e, t, n) {
      lc(e, t, n, Md());
    }
    function lc(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (dc(e)) fc(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Qr(s, o)))
              return (Pi(e, t, i, 0), ed === null && A(), !1);
          } catch {}
        if (((n = Fi(e, t, i, r)), n !== null))
          return (Fd(n, e, r), pc(n, t, r), !0);
      }
      return !1;
    }
    function uc(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: Nf(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        dc(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = Fi(e, n, r, 2)), t !== null && Fd(t, e, 2));
    }
    function dc(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function fc(e, t) {
      Zo = Xo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function pc(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), kt(e, n));
      }
    }
    var mc = {
        readContext: Ma,
        use: hs,
        useCallback: rs,
        useContext: rs,
        useEffect: rs,
        useImperativeHandle: rs,
        useLayoutEffect: rs,
        useInsertionEffect: rs,
        useMemo: rs,
        useReducer: rs,
        useRef: rs,
        useState: rs,
        useDebugValue: rs,
        useDeferredValue: rs,
        useTransition: rs,
        useSyncExternalStore: rs,
        useId: rs,
        useHostTransitionStatus: rs,
        useFormState: rs,
        useActionState: rs,
        useOptimistic: rs,
        useMemoCache: rs,
        useCacheRefresh: rs,
        useEffectEvent: rs,
      },
      hc = {
        readContext: Ma,
        use: hs,
        useCallback: function (e, t) {
          return ((fs().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Ma,
        useEffect: Vs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            zs(4194308, 4, qs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return zs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          zs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = fs();
          t = t === void 0 ? null : t;
          var r = e();
          if (Qo) {
            dt(!0);
            try {
              e();
            } finally {
              dt(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = fs();
          if (n !== void 0) {
            var i = n(t);
            if (Qo) {
              dt(!0);
              try {
                n(t);
              } finally {
                dt(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = cc.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = fs();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = ws(e);
          var t = e.queue,
            n = U.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Ys,
        useDeferredValue: function (e, t) {
          return Qs(fs(), e, t);
        },
        useTransition: function () {
          var e = ws(!1);
          return (
            (e = ec.bind(null, I, e.queue, !0, !1)),
            (fs().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = fs();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), ed === null)) throw Error(i(349));
            J & 127 || bs(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Vs(xs.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            Ls(9, { destroy: void 0 }, B.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = fs(),
            t = ed.identifierPrefix;
          if (N) {
            var n = ia,
              r = ra;
            ((n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = $o++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = ns++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: ic,
        useFormState: Ms,
        useActionState: Ms,
        useOptimistic: function (e) {
          var t = fs();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = uc.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: gs,
        useCacheRefresh: function () {
          return (fs().memoizedState = sc.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = fs(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      gc = {
        readContext: Ma,
        use: hs,
        useCallback: Xs,
        useContext: Ma,
        useEffect: Hs,
        useImperativeHandle: Js,
        useInsertionEffect: Gs,
        useLayoutEffect: Ks,
        useMemo: Zs,
        useReducer: _s,
        useRef: Rs,
        useState: function () {
          return _s(R);
        },
        useDebugValue: Ys,
        useDeferredValue: function (e, t) {
          return $s(ps(), Jo.memoizedState, e, t);
        },
        useTransition: function () {
          var e = _s(R)[0],
            t = ps().memoizedState;
          return [typeof e == `boolean` ? e : ms(e), t];
        },
        useSyncExternalStore: z,
        useId: ac,
        useHostTransitionStatus: ic,
        useFormState: Ns,
        useActionState: Ns,
        useOptimistic: function (e, t) {
          return Ts(ps(), Jo, e, t);
        },
        useMemoCache: gs,
        useCacheRefresh: oc,
        useEffectEvent: Ws,
      },
      _c = {
        readContext: Ma,
        use: hs,
        useCallback: Xs,
        useContext: Ma,
        useEffect: Hs,
        useImperativeHandle: Js,
        useInsertionEffect: Gs,
        useLayoutEffect: Ks,
        useMemo: Zs,
        useReducer: ys,
        useRef: Rs,
        useState: function () {
          return ys(R);
        },
        useDebugValue: Ys,
        useDeferredValue: function (e, t) {
          var n = ps();
          return Jo === null ? Qs(n, e, t) : $s(n, Jo.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ys(R)[0],
            t = ps().memoizedState;
          return [typeof e == `boolean` ? e : ms(e), t];
        },
        useSyncExternalStore: z,
        useId: ac,
        useHostTransitionStatus: ic,
        useFormState: Is,
        useActionState: Is,
        useOptimistic: function (e, t) {
          var n = ps();
          return Jo === null
            ? ((n.baseState = e), [e, n.queue.dispatch])
            : Ts(n, Jo, e, t);
        },
        useMemoCache: gs,
        useCacheRefresh: oc,
        useEffectEvent: Ws,
      };
    function vc(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : S({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var yc = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Md(),
          i = Co(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = wo(e, i, r)),
          t !== null && (Fd(t, e, r), To(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Md(),
          i = Co(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = wo(e, i, r)),
          t !== null && (Fd(t, e, r), To(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Md(),
          r = Co(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = wo(e, r, n)),
          t !== null && (Fd(t, e, n), To(t, e, n)));
      },
    };
    function bc(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !$r(n, r) || !$r(i, a)
            : !0
      );
    }
    function xc(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && yc.enqueueReplaceState(t, t.state, null));
    }
    function Sc(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = S({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Cc(e) {
      Ai(e);
    }
    function wc(e) {
      console.error(e);
    }
    function Tc(e) {
      Ai(e);
    }
    function Ec(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Dc(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Oc(e, t, n) {
      return (
        (n = Co(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Ec(e, t);
        }),
        n
      );
    }
    function kc(e) {
      return ((e = Co(e)), (e.tag = 3), e);
    }
    function Ac(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Dc(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Dc(t, n, r),
            typeof i != `function` &&
              (yd === null ? (yd = new Set([this])) : yd.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function jc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ka(t, n, a, !0),
          (n = Lo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
            case 19:
              return (
                Ro === null
                  ? Kd()
                  : n.alternate === null && sd === 0 && (sd = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === ao
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Q(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === ao
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Q(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Q(e, r, a), Kd(), !1);
      }
      if (N)
        return (
          (t = Lo.current),
          t === null
            ? (r !== ma && ((t = Error(i(423), { cause: r })), xa(Yi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Yi(r, n)),
              (a = Oc(e.stateNode, r, a)),
              Eo(e, a),
              sd !== 4 && (sd = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== ma && ((e = Error(i(422), { cause: r })), xa(Yi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = Yi(o, n)),
        pd === null ? (pd = [o]) : pd.push(o),
        sd !== 4 && (sd = 2),
        t === null)
      )
        return !0;
      ((r = Yi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = Oc(n.stateNode, r, e)),
              Eo(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (yd === null || !yd.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = kc(a)),
                Ac(a, e, n, r),
                Eo(n, a),
                !1
              );
            break;
          case 22:
            if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Mc = Error(i(461)),
      Nc = !1;
    function Pc(e, t, n, r) {
      t.child = e === null ? yo(t, null, n, r) : vo(t, e.child, n, r);
    }
    function Fc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ja(t),
        (r = as(e, t, n, o, a, i)),
        (s = ls()),
        e !== null && !Nc
          ? (us(e, t, i), ll(e, t, i))
          : (N && s && sa(t), (t.flags |= 1), Pc(e, t, r, i), t.child)
      );
    }
    function Ic(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Vi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), Lc(e, t, a, r, i))
          : ((e = Wi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !ul(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? $r : n),
          n(o, r) && e.ref === t.ref)
        )
          return ll(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = Hi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Lc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if ($r(a, r) && e.ref === t.ref) {
          if (((Nc = !1), (t.pendingProps = r = a), ul(e, i)))
            e.flags & 131072 && (Nc = !0);
          else return ((t.lanes = e.lanes), ll(e, t, i));
        }
      }
      return Gc(e, t, n, r, i);
    }
    function Rc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return Bc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && eo(t, a === null ? null : a.cachePool),
            a === null ? Fo() : Po(t, a),
            Vo(t));
        else
          return (
            (r = t.lanes = 536870912),
            Bc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && eo(t, null), Fo(), Ho())
          : (eo(t, a.cachePool), Po(t, a), Ho(), (t.memoizedState = null));
      return (Pc(e, t, i, n), t.child);
    }
    function zc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function Bc(e, t, n, r, i) {
      var a = $a();
      return (
        (a = a === null ? null : { parent: Ra._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && eo(t, null),
        Fo(),
        Vo(t),
        e !== null && ka(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function Vc(e, t) {
      return (
        (t = el({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Hc(e, t, n) {
      return (
        vo(t, e.child, null, n),
        (e = Vc(t, t.pendingProps)),
        (e.flags |= 2),
        F(t),
        (t.memoizedState = null),
        e
      );
    }
    function Uc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`)
            return (
              (e = Vc(t, r)),
              (t.lanes = 536870912),
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
              zc(null, e)
            );
          if (
            (Bo(t),
            (e = da)
              ? ((e = am(e, pa)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: na === null ? null : { id: ra, overflow: ia },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = qi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ua = t),
                  (da = null)))
              : (e = null),
            e === null)
          )
            throw ha(t);
          return ((t.lanes = 536870912), null);
        }
        return Vc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((Bo(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = Hc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if (
          (Nc || ka(e, t, n, !1), (a = (n & e.childLanes) !== 0), Nc || a)
        ) {
          if (Mo.current === null) {
            if (
              ((r = ed),
              r !== null && ((s = At(r, n)), s !== 0 && s !== o.retryLane))
            )
              throw ((o.retryLane = s), Ii(e, s), Fd(r, e, s), Mc);
            Kd();
          }
          t = Hc(e, t, n);
        } else
          ((e = o.treeContext),
            (da = lm(s.nextSibling)),
            (ua = t),
            (N = !0),
            (fa = null),
            (pa = !1),
            e !== null && la(t, e),
            (t = Vc(t, r)),
            (t.flags |= 134221824));
        return t;
      }
      return (
        (e = Hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function Wc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Gc(e, t, n, r, i) {
      return (
        ja(t),
        (n = as(e, t, n, r, void 0, i)),
        (r = ls()),
        e !== null && !Nc
          ? (us(e, t, i), ll(e, t, i))
          : (N && r && sa(t), (t.flags |= 1), Pc(e, t, n, i), t.child)
      );
    }
    function Kc(e, t, n, r, i, a) {
      return (
        ja(t),
        (t.updateQueue = null),
        (n = ss(t, r, n, i)),
        os(e),
        (r = ls()),
        e !== null && !Nc
          ? (us(e, t, a), ll(e, t, a))
          : (N && r && sa(t), (t.flags |= 1), Pc(e, t, n, a), t.child)
      );
    }
    function qc(e, t, n, r, i) {
      if ((ja(t), t.stateNode === null)) {
        var a = Ri,
          o = n.contextType;
        (typeof o == `object` && o && (a = Ma(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = yc),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          xo(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Ma(o) : Ri),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (vc(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && yc.enqueueReplaceState(a, a.state, null),
            ko(t, r, a, i),
            Oo(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Sc(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = Ri), typeof u == `object` && u && (o = Ma(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && xc(t, a, r, o)),
          (bo = !1));
        var f = t.memoizedState;
        ((a.state = f),
          ko(t, r, a, i),
          Oo(),
          (l = t.memoizedState),
          s || f !== l || bo
            ? (typeof d == `function` &&
                (vc(t, n, d, r), (l = t.memoizedState)),
              (c = bo || bc(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          So(e, t),
          (o = t.memoizedProps),
          (u = Sc(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = Ri),
          typeof l == `object` && l && (c = Ma(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && xc(t, a, r, c)),
          (bo = !1),
          (f = t.memoizedState),
          (a.state = f),
          ko(t, r, a, i),
          Oo());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        bo ||
        (e !== null && e.dependencies !== null && Aa(e.dependencies))
          ? (typeof s == `function` && (vc(t, n, s, r), (p = t.memoizedState)),
            (u =
              bo ||
              bc(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Aa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        Wc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = vo(t, e.child, null, i)),
                (t.child = vo(t, null, n, i)))
              : Pc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = ll(e, t, i)),
        e
      );
    }
    function Jc(e, t, n, r) {
      return (ya(), (t.flags |= 256), Pc(e, t, n, r), t.child);
    }
    var Yc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Xc(e) {
      return { baseLanes: e, cachePool: to() };
    }
    function Zc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= dd), e);
    }
    function Qc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) ||
          (o =
            e !== null && e.memoizedState === null ? !1 : !!(Uo.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (i ? zo(t) : Ho(),
            (e = da)
              ? ((e = am(e, pa)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: na === null ? null : { id: ra, overflow: ia },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = qi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ua = t),
                  (da = null)))
              : (e = null),
            e === null)
          )
            throw ha(t);
          return ((t.lanes = sm(e) ? 32 : 536870912), null);
        }
        return (
          (a = r.children),
          (r = r.fallback),
          i
            ? (Ho(),
              (i = t.mode),
              (a = el({ mode: `hidden`, children: a }, i)),
              (r = Gi(r, i, n, null)),
              (a.return = t),
              (r.return = t),
              (a.sibling = r),
              (t.child = a),
              (r = t.child),
              (r.memoizedState = Xc(n)),
              (r.childLanes = Zc(e, o, n)),
              (t.memoizedState = Yc),
              zc(null, r))
            : (zo(t), $c(t, a))
        );
      }
      var s = e.memoizedState;
      if (s !== null) {
        var c = s.dehydrated;
        if (c !== null) return nl(e, t, a, o, r, c, s, n);
      }
      return i
        ? (Ho(),
          (i = r.fallback),
          (a = t.mode),
          (s = e.child),
          (c = s.sibling),
          (r = Hi(s, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = s.subtreeFlags & 1206910976),
          c === null
            ? ((i = Gi(i, a, n, null)), (i.flags |= 2))
            : (i = Hi(c, i)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          zc(null, r),
          (r = t.child),
          (i = e.child.memoizedState),
          i === null
            ? (i = Xc(n))
            : ((a = i.cachePool),
              a === null
                ? (a = to())
                : ((s = Ra._currentValue),
                  (a = a.parent === s ? a : { parent: s, pool: s })),
              (i = { baseLanes: i.baseLanes | n, cachePool: a })),
          (r.memoizedState = i),
          (r.childLanes = Zc(e, o, n)),
          (t.memoizedState = Yc),
          zc(e.child, r))
        : (zo(t),
          (n = e.child),
          (e = n.sibling),
          (n = Hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((o = t.deletions),
            o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function $c(e, t) {
      return (
        (t = el({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function el(e, t) {
      return ((e = Bi(22, e, null, t)), (e.lanes = 0), e);
    }
    function tl(e, t, n) {
      return (
        vo(t, e.child, null, n),
        (e = $c(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function nl(e, t, n, r, a, o, s, c) {
      if (n)
        return t.flags & 256
          ? (zo(t), (t.flags &= -257), tl(e, t, c))
          : t.memoizedState === null
            ? (Ho(),
              (o = a.fallback),
              (s = t.mode),
              (a = el({ mode: `visible`, children: a.children }, s)),
              (o = Gi(o, s, c, null)),
              (o.flags |= 2),
              (a.return = t),
              (o.return = t),
              (a.sibling = o),
              (t.child = a),
              vo(t, e.child, null, c),
              (a = t.child),
              (a.memoizedState = Xc(c)),
              (a.childLanes = Zc(e, r, c)),
              (t.memoizedState = Yc),
              zc(null, a))
            : (Ho(), (t.child = e.child), (t.flags |= 128), null);
      if ((zo(t), sm(o))) {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (
          (r = l),
          r !== `` &&
            ((a = Error(i(419))),
            (a.stack = ``),
            (a.digest = r),
            xa({ value: a, source: null, stack: null })),
          tl(e, t, c)
        );
      }
      if ((Nc || ka(e, t, c, !1), (r = (c & e.childLanes) !== 0), Nc || r)) {
        if (Mo.current !== null) return tl(e, t, c);
        if (
          ((r = ed),
          r !== null && ((a = At(r, c)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Ii(e, a), Fd(r, e, a), Mc);
        return (om(o) || Kd(), tl(e, t, c));
      }
      return om(o)
        ? ((t.flags |= 192), (t.child = e.child), null)
        : ((e = s.treeContext),
          (da = lm(o.nextSibling)),
          (ua = t),
          (N = !0),
          (fa = null),
          (pa = !1),
          e !== null && la(t, e),
          (t = $c(t, a.children)),
          (t.flags |= 134221824),
          t);
    }
    function rl(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Da(e.return, t, n));
    }
    function il(e) {
      for (var t = null; e !== null;) {
        var n = e.alternate;
        (n !== null && Ko(n) === null && (t = e), (e = e.sibling));
      }
      return t;
    }
    function al(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function ol(e) {
      var t = e.child;
      for (e.child = null; t !== null;) {
        var n = t.sibling;
        ((t.sibling = e.child), (e.child = t), (t = n));
      }
    }
    function sl(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = Uo.current;
      if (t.flags & 128) return (Wo(t, o), null);
      var s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        Wo(t, o),
        i === `backwards` && e !== null
          ? (ol(e), Pc(e, t, r, n), ol(e))
          : Pc(e, t, r, n),
        (r = N ? $i : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && rl(e, n, t);
          else if (e.tag === 19) rl(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `backwards`:
          ((n = il(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null), ol(t)),
            al(t, !0, i, null, a, r));
          break;
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && Ko(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          al(t, !0, n, null, a, r);
          break;
        case `together`:
          al(t, !1, null, null, void 0, r);
          break;
        case `independent`:
          t.memoizedState = null;
          break;
        default:
          ((n = il(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            al(t, !1, i, n, a, r));
      }
      return t.child;
    }
    function cl(e, t, n) {
      var r = t.pendingProps;
      return (Ta(t, t.type, r.value), Pc(e, t, r.children, n), t.child);
    }
    function ll(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (cd |= t.lanes),
        (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((ka(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = Hi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function ul(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Aa(e)))
      );
    }
    function dl(e, t, n) {
      switch (t.tag) {
        case 3:
          (Re(t, t.stateNode.containerInfo),
            Ta(t, Ra, e.memoizedState.cache),
            ya());
          break;
        case 27:
        case 5:
          Be(t);
          break;
        case 4:
          Re(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), Bo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null) {
            if (r.dehydrated !== null) return (zo(t), (t.flags |= 128), null);
            r = ka(e, t, n, !1);
            var i = t.child.childLanes;
            return r || (n & i) !== 0
              ? Qc(e, t, n)
              : (zo(t), (e = ll(e, t, n)), e === null ? null : e.sibling);
          }
          zo(t);
          break;
        case 19:
          if (t.flags & 128) return sl(e, t, n);
          if (
            ((i = !!(e.flags & 128)),
            (r = (n & t.childLanes) !== 0),
            (r ||= (ka(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return sl(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            Wo(t, Uo.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), Rc(e, t, n, t.pendingProps));
        case 24:
          Ta(t, Ra, e.memoizedState.cache);
      }
      return ll(e, t, n);
    }
    function fl(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) Nc = !0;
        else {
          if (!ul(e, n) && !(t.flags & 128)) return ((Nc = !1), dl(e, t, n));
          Nc = !!(e.flags & 131072);
        }
      } else ((Nc = !1), N && t.flags & 1048576 && oa(t, $i, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = co(t.elementType)), (t.type = e), typeof e == `function`))
              Vi(e)
                ? ((r = Sc(e, r)), (t.tag = 1), (t = qc(null, t, e, r, n)))
                : ((t.tag = 0), (t = Gc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === fe) {
                  ((t.tag = 11), (t = Fc(null, t, e, r, n)));
                  break a;
                }
                if (a === he) {
                  ((t.tag = 14), (t = Ic(null, t, e, r, n)));
                  break a;
                }
                if (a === de) {
                  ((t.tag = 10), (t.type = e), (t = cl(null, t, n)));
                  break a;
                }
              }
              throw ((t = Te(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return Gc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Sc(r, t.pendingProps)), qc(e, t, r, a, n));
        case 3:
          a: {
            if ((Re(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), So(e, t), ko(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ta(t, Ra, r),
              r !== o.cache && Oa(t, [Ra], n, !0),
              Oo(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = Jc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = Yi(Error(i(424)), t)), xa(a), (t = Jc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                da = lm(e.firstChild),
                  ua = t,
                  N = !0,
                  fa = null,
                  pa = !0,
                  n = yo(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
            } else {
              if ((ya(), r === a)) {
                t = ll(e, t, n);
                break a;
              }
              Pc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            Wc(e, t),
            e === null
              ? (n = Nm(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N || (t.stateNode = fp(t.type, t.pendingProps, Ie.current, t))
              : (t.memoizedState = Nm(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Be(t),
            e === null &&
              N &&
              ((r = t.stateNode = hm(t.type, t.pendingProps, Ie.current)),
              (ua = t),
              (pa = !0),
              (a = da),
              Sp(t.type) ? ((um = a), (da = lm(r.firstChild))) : (da = a)),
            Pc(e, t, t.pendingProps.children, n),
            Wc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = da) &&
                ((r = rm(r, t.type, t.pendingProps, pa)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (ua = t),
                    (da = lm(r.firstChild)),
                    (pa = !1),
                    (a = !0))),
              a || ha(t)),
            Be(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            pp(a, o) ? (r = null) : s !== null && pp(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = as(e, t, cs, null, null, n)), (sh._currentValue = a)),
            Wc(e, t),
            Pc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = da) &&
                ((n = im(n, t.pendingProps, pa)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (ua = t), (da = null), (e = !0))),
              e || ha(t)),
            null
          );
        case 13:
          return Qc(e, t, n);
        case 4:
          return (
            Re(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = vo(t, null, r, n)) : Pc(e, t, r, n),
            t.child
          );
        case 11:
          return Fc(e, t, t.type, t.pendingProps, n);
        case 7:
          return ((r = t.pendingProps), Wc(e, t), Pc(e, t, r, n), t.child);
        case 8:
          return (Pc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Pc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return cl(e, t, n);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ja(t),
            (a = Ma(a)),
            (r = r(a)),
            (t.flags |= 1),
            Pc(e, t, r, n),
            t.child
          );
        case 14:
          return Ic(e, t, t.type, t.pendingProps, n);
        case 15:
          return Lc(e, t, t.type, t.pendingProps, n);
        case 19:
          return sl(e, t, n);
        case 31:
          return Uc(e, t, n);
        case 22:
          return Rc(e, t, n, t.pendingProps);
        case 24:
          return (
            ja(t),
            (r = Ma(Ra)),
            e === null
              ? ((a = $a()),
                a === null &&
                  ((a = ed),
                  (o = za()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                xo(t),
                Ta(t, Ra, a))
              : ((e.lanes & n) !== 0 && (So(e, t), ko(t, null, null, n), Oo()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Ta(t, Ra, r),
                    r !== a.cache && Oa(t, [Ra], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Ta(t, Ra, r))),
            Pc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 30:
          return (
            t.stateNode === null &&
              (t.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
            (r = t.pendingProps),
            r.name != null && r.name !== `auto`
              ? (t.flags |= e === null ? 18882560 : 18874368)
              : N && sa(t),
            e !== null && e.memoizedProps.name !== r.name
              ? (t.flags |= 4194816)
              : Wc(e, t),
            Pc(e, t, r.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function pl(e) {
      e.flags |= 4;
    }
    function ml(e, t, n, r, i) {
      var a;
      if (
        ((a = !!(e.mode & 32)) &&
          (a =
            n === null
              ? Jm(t, r)
              : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
        a)
      ) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ud()) e.flags |= 8192;
          else throw ((lo = ao), ro);
        }
      } else e.flags &= -16777217;
    }
    function hl(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Ym(t))) {
        if (Ud()) e.flags |= 8192;
        else throw ((lo = ao), ro);
      }
    }
    function gl(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : wt()), (e.lanes |= t), (fd |= t)));
    }
    function _l(e, t) {
      if (!N)
        switch (e.tailMode) {
          case `visible`:
            break;
          case `collapsed`:
            for (var n = e.tail, r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
            break;
          default:
            for (t = e.tail, n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
        }
    }
    function vl(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 1206910976),
            (r |= i.flags & 1206910976),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function yl(e, t, n) {
      var r = t.pendingProps;
      switch ((ca(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (vl(t), null);
        case 1:
          return (vl(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Ea(Ra),
            ze(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (va(t)
                ? pl(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), ba())),
            vl(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (pl(t),
                o === null ? (vl(t), ml(t, a, null, r, n)) : (vl(t), hl(t, o)))
              : o
                ? o === e.memoizedState
                  ? (vl(t), (t.flags &= -16777217))
                  : (pl(t), vl(t), hl(t, o))
                : ((e = e.memoizedProps),
                  e !== r && pl(t),
                  vl(t),
                  ml(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (Ve(t),
            (n = Ie.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && pl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (vl(t), (t.subtreeFlags &= -33554433), null);
            }
            ((e = Pe.current),
              va(t) ? ga(t, e) : ((e = hm(a, r, n)), (t.stateNode = e), pl(t)));
          }
          return (vl(t), (t.subtreeFlags &= -33554433), null);
        case 5:
          if ((Ve(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && pl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (vl(t), (t.subtreeFlags &= -33554433), null);
            }
            if (((o = Pe.current), va(t))) ga(t, o);
            else {
              var s = lp(Ie.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[It] = t), (o[Lt] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((np(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && pl(t);
            }
          }
          return (
            vl(t),
            (t.subtreeFlags &= -33554433),
            ml(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && pl(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = Ie.current), va(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = ua),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[It] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  $f(e.nodeValue, n)
                )),
                e || ha(t, !0));
            } else
              ((e = lp(e).createTextNode(r)), (e[It] = t), (t.stateNode = e));
          }
          return (vl(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = va(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[It] = t;
              } else
                (ya(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (vl(t), (e = !1));
            } else
              ((n = ba()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (F(t), t) : (F(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (vl(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = va(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[It] = t;
              } else
                (ya(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (vl(t), (a = !1));
            } else
              ((a = ba()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (F(t), t) : (F(t), null);
          }
          return (
            F(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                gl(t, t.updateQueue),
                vl(t),
                null)
          );
        case 4:
          return (
            ze(),
            e === null && Uf(t.stateNode.containerInfo),
            (t.flags |= 67108864),
            vl(t),
            null
          );
        case 10:
          return (Ea(t.type), vl(t), null);
        case 19:
          if ((Go(t), (r = t.memoizedState), r === null)) return (vl(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) _l(r, !1);
            else {
              if (sd !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = Ko(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        _l(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        gl(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (Ui(n, e), (n = n.sibling));
                    return (
                      Wo(t, (Uo.current & 1) | 2),
                      N && aa(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                et() > _d &&
                ((t.flags |= 128), (a = !0), _l(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = Ko(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  gl(t, e),
                  _l(r, !0),
                  r.tail === null &&
                    r.tailMode !== `collapsed` &&
                    r.tailMode !== `visible` &&
                    !o.alternate &&
                    !N)
                )
                  return (vl(t), null);
              } else
                2 * et() - r.renderingStartTime > _d &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), _l(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          if (r.tail !== null) {
            e = r.tail;
            a: {
              for (n = e; n !== null;) {
                if (n.alternate !== null) {
                  n = !1;
                  break a;
                }
                n = n.sibling;
              }
              n = !0;
            }
            return (
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = et()),
              (e.sibling = null),
              (o = Uo.current),
              (o = a ? (o & 1) | 2 : o & 1),
              r.tailMode === `visible` || r.tailMode === `collapsed` || !n || N
                ? Wo(t, o)
                : ((n = o), Ne(Lo, t), Ne(Uo, n), Ro === null && (Ro = t)),
              N && aa(t, r.treeForkCount),
              e
            );
          }
          return (vl(t), null);
        case 22:
        case 23:
          return (
            F(t),
            Io(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : vl(t),
            (n = t.updateQueue),
            n !== null && gl(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && Me(Qa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Ea(Ra),
            vl(t),
            null
          );
        case 25:
          return null;
        case 30:
          return ((t.flags |= 33554432), vl(t), null);
      }
      throw Error(i(156, t.tag));
    }
    function bl(e, t) {
      switch ((ca(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Ea(Ra),
            ze(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Ve(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((F(t), t.alternate === null)) throw Error(i(340));
            ya();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (F(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            ya();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (
            Go(t),
            (e = t.flags),
            e & 65536
              ? ((t.flags = (e & -65537) | 128),
                (e = t.memoizedState),
                e !== null && ((e.rendering = null), (e.tail = null)),
                (t.flags |= 4),
                t)
              : null
          );
        case 4:
          return (ze(), null);
        case 10:
          return (Ea(t.type), null);
        case 22:
        case 23:
          return (
            F(t),
            Io(),
            e !== null && Me(Qa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Ea(Ra), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function xl(e, t) {
      switch ((ca(t), t.tag)) {
        case 3:
          (Ea(Ra), ze());
          break;
        case 26:
        case 27:
        case 5:
          Ve(t);
          break;
        case 4:
          ze();
          break;
        case 31:
          t.memoizedState !== null && F(t);
          break;
        case 13:
          F(t);
          break;
        case 19:
          Go(t);
          break;
        case 10:
          Ea(t.type);
          break;
        case 22:
        case 23:
          (F(t), Io(), e !== null && Me(Qa));
          break;
        case 24:
          Ea(Ra);
      }
    }
    function Sl(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        pf(t, t.return, e);
      }
    }
    function Cl(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  pf(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        pf(t, t.return, e);
      }
    }
    function wl(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          jo(t, n);
        } catch (t) {
          pf(e, e.return, t);
        }
      }
    }
    function Tl(e, t, n) {
      ((n.props = Sc(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        pf(e, t, n);
      }
    }
    function El(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              var i = e.stateNode,
                a = Di(e.memoizedProps, i);
              ((i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)),
                (r = i.ref));
              break;
            case 7:
              if (e.stateNode === null) {
                var o = new Fp(e);
                (h(e.child, !1, Qp, o, void 0, void 0), (e.stateNode = o));
              }
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        pf(e, t, n);
      }
    }
    function Dl(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            pf(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            pf(e, t, n);
          }
        else n.current = null;
      }
    }
    function Ol(e, t) {
      if (
        (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
        e.alternate === null &&
        t !== null
      )
        for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
    }
    function kl(e) {
      for (
        var t = e.return;
        t !== null && (Ml(t) && em(e.stateNode, t.stateNode), !jl(t));
      )
        t = t.return;
    }
    function Al(e) {
      for (
        var t = e.return;
        t !== null && (Ml(t) && tm(e.stateNode, t.stateNode), !jl(t));
      )
        t = t.return;
    }
    function jl(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 27;
    }
    function Ml(e) {
      return e && e.tag === 7 && e.stateNode !== null;
    }
    function Nl(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        pf(e, e.return, t);
      }
    }
    function Pl(e, t, n) {
      try {
        var r = e.stateNode;
        (ip(r, e.type, n, t), (r[Lt] = t));
      } catch (t) {
        pf(e, e.return, t);
      }
    }
    function Fl(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Sp(e.type)) ||
        e.tag === 4
      );
    }
    function Il(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Fl(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Sp(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ll(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(i, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(i),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = jn)),
          Ol(e, r),
          (T = !0));
      else if (
        i !== 4 &&
        (i === 27 &&
          (Ol(e, r), (r = null), Sp(e.type) && ((n = e.stateNode), (t = null))),
        (e = e.child),
        e !== null)
      )
        for (Ll(e, t, n, r), e = e.sibling; e !== null;)
          (Ll(e, t, n, r), (e = e.sibling));
    }
    function Rl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t ? n.insertBefore(i, t) : n.appendChild(i),
          Ol(e, r),
          (T = !0));
      else if (
        i !== 4 &&
        (i === 27 && (Ol(e, r), (r = null), Sp(e.type) && (n = e.stateNode)),
        (e = e.child),
        e !== null)
      )
        for (Rl(e, t, n, r), e = e.sibling; e !== null;)
          (Rl(e, t, n, r), (e = e.sibling));
    }
    function zl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (np(t, r, n), (t[It] = e), (t[Lt] = n));
      } catch (t) {
        pf(e, e.return, t);
      }
    }
    var Bl = !1,
      Vl = null;
    function Hl(e) {
      (e.tag === 30 || e.subtreeFlags & 33554432) && (Bl = !0);
    }
    var Ul = null;
    function Wl() {
      var e = Ul;
      return ((Ul = null), e);
    }
    var Gl = 0;
    function Kl(e, t, n, r, i) {
      return ((Gl = 0), ql(e.child, t, n, r, i));
    }
    function ql(e, t, n, r, i) {
      for (var a = !1; e !== null;) {
        if (e.tag === 5) {
          var o = e.stateNode;
          if (r !== null) {
            var s = Op(o);
            (r.push(s), s.view && (a = !0));
          } else a || (Op(o).view && (a = !0));
          ((Bl = !0), Tp(o, Gl === 0 ? t : t + `_` + Gl, n), Gl++);
        } else
          (e.tag !== 22 || e.memoizedState === null) &&
            ((e.tag === 30 && i) || (ql(e.child, t, n, r, i) && (a = !0)));
        e = e.sibling;
      }
      return a;
    }
    function Jl(e, t) {
      for (; e !== null;)
        (e.tag === 5
          ? Ep(e.stateNode, e.memoizedProps)
          : (e.tag !== 22 || e.memoizedState === null) &&
            ((e.tag === 30 && t) || Jl(e.child, t)),
          (e = e.sibling));
    }
    function Yl(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (
            (e.tag !== 22 || e.memoizedState === null) &&
            (Yl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
          ) {
            var t = e.memoizedProps;
            if (t.name == null || t.name === `auto`) throw Error(i(544));
            var n = t.name;
            ((t = ki(t.default, t.share)),
              t !== `none` && (Kl(e, n, t, null, !1) || Jl(e.child, !1)));
          }
          e = e.sibling;
        }
    }
    function Xl(e, t) {
      if (e.tag === 30) {
        var n = e.stateNode,
          r = e.memoizedProps,
          i = Di(r, n),
          a = ki(r.default, n.paired ? r.share : r.enter);
        a === `none`
          ? Yl(e)
          : Kl(e, i, a, null, !1)
            ? (Yl(e), n.paired || t || Pd(e, r.onEnter))
            : Jl(e.child, !1);
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (Xl(e, t), (e = e.sibling));
      else Yl(e);
    }
    function Zl(e) {
      if (Vl !== null && Vl.size !== 0) {
        var t = Vl;
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null;) {
            if (e.tag !== 22 || e.memoizedState === null) {
              if (e.tag === 30 && e.flags & 18874368) {
                var n = e.memoizedProps,
                  r = n.name;
                if (r != null && r !== `auto`) {
                  var i = t.get(r);
                  if (i !== void 0) {
                    var a = ki(n.default, n.share);
                    if (
                      (a !== `none` &&
                        (Kl(e, r, a, null, !1)
                          ? ((a = e.stateNode),
                            (i.paired = a),
                            (a.paired = i),
                            Pd(e, n.onShare))
                          : Jl(e.child, !1)),
                      t.delete(r),
                      t.size === 0)
                    )
                      break;
                  }
                }
              }
              Zl(e);
            }
            e = e.sibling;
          }
      }
    }
    function Ql(e) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = Di(t, e.stateNode),
          r = Vl === null ? void 0 : Vl.get(n),
          i = ki(t.default, r === void 0 ? t.exit : t.share);
        (i !== `none` &&
          (Kl(e, n, i, null, !1)
            ? r === void 0
              ? Pd(e, t.onExit)
              : ((i = e.stateNode),
                (r.paired = i),
                (i.paired = r),
                Vl.delete(n),
                Pd(e, t.onShare))
            : Jl(e.child, !1)),
          Vl !== null && Zl(e));
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (Ql(e), (e = e.sibling));
      else Vl !== null && Zl(e);
    }
    function $l(e) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = Di(t, e.stateNode);
          ((t = ki(t.default, t.update)),
            (e.flags &= -5),
            t !== `none` && Kl(e, n, t, (e.memoizedState = []), !1));
        } else e.subtreeFlags & 33554432 && $l(e);
        e = e.sibling;
      }
    }
    function eu(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var t = e.stateNode;
              t.paired !== null && ((t.paired = null), Jl(e.child, !1));
            }
            eu(e);
          }
          e = e.sibling;
        }
    }
    function tu(e) {
      if (e.tag === 30) ((e.stateNode.paired = null), Jl(e.child, !1), eu(e));
      else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (tu(e), (e = e.sibling));
      else eu(e);
    }
    function nu(e) {
      for (e = e.child; e !== null;)
        (e.tag === 30 ? Jl(e.child, !1) : e.subtreeFlags & 33554432 && nu(e),
          (e = e.sibling));
    }
    function ru(e, t, n, r, i, a, o) {
      for (var s = !1; t !== null;) {
        if (t.tag === 5) {
          var c = t.stateNode;
          if (a !== null && Gl < a.length) {
            var l = a[Gl],
              u = Op(c);
            (l.view || u.view) && (s = !0);
            var d;
            if ((d = !(e.flags & 4))) {
              if (u.clip) d = !0;
              else {
                d = l.rect;
                var f = u.rect;
                d =
                  d.y !== f.y ||
                  d.x !== f.x ||
                  d.height !== f.height ||
                  d.width !== f.width;
              }
            }
            (d && (e.flags |= 4),
              u.abs
                ? (u = !l.abs)
                : ((l = l.rect),
                  (u = u.rect),
                  (u = l.height !== u.height || l.width !== u.width)),
              u && (e.flags |= 32));
          } else e.flags |= 32;
          (e.flags & 4 && Tp(c, Gl === 0 ? n : n + `_` + Gl, i),
            (s && e.flags & 4) ||
              (Ul === null && (Ul = []),
              Ul.push(c, Gl === 0 ? r : r + `_` + Gl, t.memoizedProps)),
            Gl++);
        } else
          (t.tag !== 22 || t.memoizedState === null) &&
            (t.tag === 30 && o
              ? (e.flags |= t.flags & 32)
              : ru(e, t.child, n, r, i, a, o) && (s = !0));
        t = t.sibling;
      }
      return s;
    }
    function iu(e, t) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var n = e.memoizedProps,
            r = e.stateNode,
            i = Di(n, r),
            a = ki(n.default, n.update);
          if (t) {
            r = r.clones;
            var o = r === null ? null : r.map(kp);
          } else ((o = e.memoizedState), (e.memoizedState = null));
          r = e;
          var s = e.child;
          ((Gl = 0),
            (i = ru(r, s, i, i, a, o, !1)),
            e.flags & 4 && i && (t || Pd(e, n.onUpdate)));
        } else e.subtreeFlags & 33554432 && iu(e, t);
        e = e.sibling;
      }
    }
    var au = !1,
      ou = !1,
      su = !1,
      cu = !1,
      lu = typeof WeakSet == `function` ? WeakSet : Set,
      uu = null,
      du = !1,
      fu = !1,
      pu = !1,
      mu = !1;
    function hu(e, t, n) {
      if (((e = e.containerInfo), (sp = gh), (e = ii(e)), ai(e))) {
        if (`selectionStart` in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var i = r.getSelection && r.getSelection();
            if (i && i.rangeCount !== 0) {
              r = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (r.nodeType, o.nodeType);
              } catch {
                r = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === r && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              r = c === -1 || l === -1 ? null : { start: c, end: l };
            } else r = null;
          }
        r ||= { start: 0, end: 0 };
      } else r = null;
      for (
        cp = { focusedElem: e, selectionRange: r },
          gh = !1,
          n = (n & 335544064) === n,
          uu = t,
          t = n ? 9270 : 1024;
        uu !== null;
      ) {
        if (((e = uu), n && ((r = e.deletions), r !== null)))
          for (a = 0; a < r.length; a++) n && Ql(r[a]);
        if (e.alternate === null && e.flags & 2) (n && Hl(e), gu(n));
        else {
          if (e.tag === 22) {
            if (((r = e.alternate), e.memoizedState !== null)) {
              (r !== null && r.memoizedState === null && n && Ql(r), gu(n));
              continue;
            }
            if (r !== null && r.memoizedState !== null) {
              (n && Hl(e), gu(n));
              continue;
            }
          }
          ((r = e.child),
            (e.subtreeFlags & t) !== 0 && r !== null
              ? ((r.return = e), (uu = r))
              : (n && $l(e), gu(n)));
        }
      }
      Vl = null;
    }
    function gu(e) {
      for (; uu !== null;) {
        var t = uu,
          n = e,
          r = t.alternate,
          a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a & 1024 && r !== null) {
              ((n = void 0), (a = r.memoizedProps), (r = r.memoizedState));
              var o = t.stateNode;
              try {
                var s = Sc(t.type, a);
                ((n = o.getSnapshotBeforeUpdate(s, r)),
                  (o.__reactInternalSnapshotBeforeUpdate = n));
              } catch (e) {
                pf(t, t.return, e);
              }
            }
            break;
          case 3:
            if (a & 1024) {
              if (((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9))
                nm(r);
              else if (n === 1)
                switch (r.nodeName) {
                  case `HEAD`:
                  case `HTML`:
                  case `BODY`:
                    nm(r);
                    break;
                  default:
                    r.textContent = ``;
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
          case 30:
            n &&
              r !== null &&
              ((n = Di(r.memoizedProps, r.stateNode)),
              (a = t.memoizedProps),
              (a = ki(a.default, a.update)),
              a !== `none` && Kl(r, n, a, (r.memoizedState = []), !0));
            break;
          default:
            if (a & 1024) throw Error(i(163));
        }
        if (((r = t.sibling), r !== null)) {
          ((r.return = t.return), (uu = r));
          break;
        }
        uu = t.return;
      }
    }
    function _u(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Iu(e, n), r & 4 && Sl(5, n));
          break;
        case 1:
          if ((Iu(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                pf(n, n.return, e);
              }
            else {
              var i = Sc(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                pf(n, n.return, e);
              }
            }
          }
          (r & 64 && wl(n), r & 512 && El(n, n.return));
          break;
        case 3:
          if ((Iu(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              jo(e, t);
            } catch (e) {
              pf(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && zl(n);
        case 26:
        case 5:
          (Iu(e, n), t === null && r & 4 && Nl(n), r & 512 && El(n, n.return));
          break;
        case 12:
          Iu(e, n);
          break;
        case 31:
          (Iu(e, n), r & 4 && Eu(e, n));
          break;
        case 13:
          (Iu(e, n),
            r & 4 && Du(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = gf.bind(null, n)), cm(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || au), !r)) {
            var a = (t !== null && t.memoizedState !== null) || ou;
            ((t = au),
              (i = ou),
              (au = r),
              (ou = a) && !i
                ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), Ru(e, n, r))
                : Iu(e, n),
              (au = t),
              (ou = i));
          }
          break;
        case 30:
          (Iu(e, n), r & 512 && El(n, n.return));
          break;
        case 7:
          r & 512 && El(n, n.return);
        default:
          Iu(e, n);
      }
    }
    function vu(e, t) {
      for (e = e.child; e !== null;) (yu(e, t), (e = e.sibling));
    }
    function yu(e, t) {
      switch (e.tag) {
        case 5:
        case 26:
          try {
            var n = e.stateNode;
            if (t) {
              var r = n.style;
              typeof r.setProperty == `function`
                ? r.setProperty(`display`, `none`, `important`)
                : (r.display = `none`);
            } else {
              var i = e.stateNode,
                a = e.memoizedProps.style,
                o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
              i.style.display =
                o == null || typeof o == `boolean` ? `` : (`` + o).trim();
            }
          } catch (t) {
            pf(e, e.return, t);
          }
          bu(e, t);
          break;
        case 6:
          try {
            ((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (T = !0));
          } catch (t) {
            pf(e, e.return, t);
          }
          break;
        case 18:
          try {
            var s = e.stateNode;
            t ? wp(s, !0) : wp(e.stateNode, !1);
          } catch (t) {
            pf(e, e.return, t);
          }
          break;
        case 22:
        case 23:
          e.memoizedState === null && vu(e, t);
          break;
        default:
          vu(e, t);
      }
    }
    function bu(e, t) {
      if (e.subtreeFlags & 67108864)
        for (e = e.child; e !== null;) {
          a: {
            var n = e,
              r = t;
            switch (n.tag) {
              case 4:
                yu(n, r);
                break a;
              case 22:
                n.memoizedState === null && bu(n, r);
                break a;
              default:
                bu(n, r);
            }
          }
          e = e.sibling;
        }
    }
    function xu(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), xu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Gt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var Su = null,
      Cu = !1;
    function wu(e, t, n) {
      for (n = n.child; n !== null;) (Tu(e, t, n), (n = n.sibling));
    }
    function Tu(e, t, n) {
      if (ut && typeof ut.onCommitFiberUnmount == `function`)
        try {
          ut.onCommitFiberUnmount(lt, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (ou || Dl(n, t),
            wu(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                !ou &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          (ou || Dl(n, t), Al(n));
          var r = Su,
            i = Cu;
          (Sp(n.type) && ((Su = n.stateNode), (Cu = !1)),
            wu(e, t, n),
            gm(n.stateNode, n.type, n.memoizedProps),
            (Su = r),
            (Cu = i));
          break;
        case 5:
          (ou || Dl(n, t), Al(n));
        case 6:
          if (
            (n.tag === 6 && Al(n),
            (r = Su),
            (i = Cu),
            (Su = null),
            wu(e, t, n),
            (Su = r),
            (Cu = i),
            Su !== null)
          ) {
            if (Cu)
              try {
                ((Su.nodeType === 9
                  ? Su.body
                  : Su.nodeName === `HTML`
                    ? Su.ownerDocument.body
                    : Su
                ).removeChild(n.stateNode),
                  (T = !0));
              } catch (e) {
                pf(n, t, e);
              }
            else
              try {
                (Su.removeChild(n.stateNode), (T = !0));
              } catch (e) {
                pf(n, t, e);
              }
          }
          break;
        case 18:
          Su !== null &&
            (Cu
              ? ((e = Su),
                Cp(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Hh(e))
              : Cp(Su, n.stateNode));
          break;
        case 4:
          ((r = Su),
            (i = Cu),
            (Su = n.stateNode.containerInfo),
            (Cu = !0),
            wu(e, t, n),
            (Su = r),
            (Cu = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Cl(2, n, t), ou || Cl(4, n, t), wu(e, t, n));
          break;
        case 1:
          (ou ||
            (Dl(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Tl(n, t, r)),
            wu(e, t, n));
          break;
        case 21:
          wu(e, t, n);
          break;
        case 22:
          ((ou = (r = ou) || n.memoizedState !== null), wu(e, t, n), (ou = r));
          break;
        case 30:
          (Dl(n, t), wu(e, t, n));
          break;
        case 7:
          (ou || Dl(n, t), wu(e, t, n));
          break;
        default:
          wu(e, t, n);
      }
    }
    function Eu(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Hh(e);
        } catch (e) {
          pf(t, t.return, e);
        }
      }
    }
    function Du(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Hh(e);
        } catch (e) {
          pf(t, t.return, e);
        }
    }
    function Ou(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new lu()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new lu()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ku(e, t) {
      var n = Ou(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = _f.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function Au(e, t, n) {
      var r = t.deletions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var o = r[a],
            s = e,
            c = t,
            l = c;
          a: for (; l !== null;) {
            switch (l.tag) {
              case 27:
                if (Sp(l.type)) {
                  ((Su = l.stateNode), (Cu = !1));
                  break a;
                }
                break;
              case 5:
                ((Su = l.stateNode), (Cu = !1));
                break a;
              case 3:
              case 4:
                ((Su = l.stateNode.containerInfo), (Cu = !0));
                break a;
            }
            l = l.return;
          }
          if (Su === null) throw Error(i(160));
          (Tu(s, c, o),
            (Su = null),
            (Cu = !1),
            (s = o.alternate),
            s !== null && (s.return = null),
            (o.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (Mu(t, e, n), (t = t.sibling));
    }
    var ju = null;
    function Mu(e, t, n) {
      var r = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            a & 4 &&
            ((r = e.updateQueue),
            (r = r === null ? null : r.events),
            r !== null)
          )
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              s.ref.impl = s.nextImpl;
            }
          (Au(t, e, n),
            W(e),
            a & 4 && (Cl(3, e, e.return), Sl(3, e), Cl(5, e, e.return)));
          break;
        case 1:
          (Au(t, e, n),
            W(e),
            a & 512 && (ou || r === null || Dl(r, r.return)),
            a & 64 &&
              au &&
              ((e = e.updateQueue),
              e !== null &&
                ((t = e.callbacks),
                t !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))));
          break;
        case 26:
          if (
            ((o = ju),
            Au(t, e, n),
            W(e),
            a & 512 && (ou || r === null || Dl(r, r.return)),
            a & 4)
          ) {
            if (
              ((a = r === null ? null : r.memoizedState),
              (n = e.memoizedState),
              r === null)
            ) {
              if (n === null) {
                if (e.stateNode === null) {
                  if (au)
                    e.stateNode = fp(
                      e.type,
                      e.memoizedProps,
                      t.containerInfo,
                      e,
                    );
                  else {
                    a: {
                      ((t = e.type),
                        (n = e.memoizedProps),
                        (a = o.ownerDocument || o));
                      b: switch (t) {
                        case `title`:
                          ((r = a.getElementsByTagName(`title`)[0]),
                            (!r ||
                              r[Ut] ||
                              r[It] ||
                              r.namespaceURI === `http://www.w3.org/2000/svg` ||
                              r.hasAttribute(`itemprop`)) &&
                              ((r = a.createElement(t)),
                              a.head.insertBefore(
                                r,
                                a.querySelector(`head > title`),
                              )),
                            np(r, t, n),
                            (r[It] = e),
                            Xt(r),
                            (t = r));
                          break a;
                        case `link`:
                          if (
                            (o = Gm(`link`, `href`, a).get(t + (n.href || ``)))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`href`) ===
                                  (n.href == null || n.href === ``
                                    ? null
                                    : n.href) &&
                                  r.getAttribute(`rel`) ===
                                    (n.rel == null ? null : n.rel) &&
                                  r.getAttribute(`title`) ===
                                    (n.title == null ? null : n.title) &&
                                  r.getAttribute(`crossorigin`) ===
                                    (n.crossOrigin == null
                                      ? null
                                      : n.crossOrigin))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        case `meta`:
                          if (
                            (o = Gm(`meta`, `content`, a).get(
                              t + (n.content || ``),
                            ))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`content`) ===
                                  (n.content == null ? null : `` + n.content) &&
                                  r.getAttribute(`name`) ===
                                    (n.name == null ? null : n.name) &&
                                  r.getAttribute(`property`) ===
                                    (n.property == null ? null : n.property) &&
                                  r.getAttribute(`http-equiv`) ===
                                    (n.httpEquiv == null
                                      ? null
                                      : n.httpEquiv) &&
                                  r.getAttribute(`charset`) ===
                                    (n.charSet == null ? null : n.charSet))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        default:
                          throw Error(i(468, t));
                      }
                      ((r[It] = e), Xt(r), (t = r));
                    }
                    e.stateNode = t;
                  }
                } else au || Km(o, e.type, e.stateNode);
              } else e.stateNode = Bm(o, n, e.memoizedProps);
            } else
              a === n
                ? n === null &&
                  e.stateNode !== null &&
                  Pl(e, e.memoizedProps, r.memoizedProps)
                : (a === null
                    ? ((t = r.stateNode),
                      t === null || ou || t.parentNode.removeChild(t))
                    : a.count--,
                  n === null
                    ? au || Km(o, e.type, e.stateNode)
                    : Bm(o, n, e.memoizedProps));
          }
          break;
        case 27:
          (Au(t, e, n),
            W(e),
            a & 512 && (ou || r === null || Dl(r, r.return)),
            r !== null && a & 4 && Pl(e, e.memoizedProps, r.memoizedProps));
          break;
        case 5:
          if (
            ((o = su),
            (su = !1),
            Au(t, e, n),
            (su = o),
            W(e),
            a & 512 && (ou || r === null || Dl(r, r.return)),
            e.flags & 32)
          ) {
            t = e.stateNode;
            try {
              (Cn(t, ``), (T = !0));
            } catch (t) {
              pf(e, e.return, t);
            }
          }
          (a & 4 &&
            e.stateNode != null &&
            ((t = e.memoizedProps), Pl(e, t, r === null ? t : r.memoizedProps)),
            a & 1024 && (cu = !0));
          break;
        case 6:
          if ((Au(t, e, n), W(e), a & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((t = e.memoizedProps), (n = e.stateNode));
            try {
              ((n.nodeValue = t), (T = !0));
            } catch (t) {
              pf(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((T = !1),
            (Wm = null),
            (o = ju),
            (ju = bm(t.containerInfo)),
            Au(t, e, n),
            (ju = o),
            W(e),
            a & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Hh(t.containerInfo);
            } catch (t) {
              pf(e, e.return, t);
            }
          (cu && ((cu = !1), Nu(e)), (T = !1));
          break;
        case 4:
          ((a = su),
            (su = au),
            (r = sn()),
            (o = ju),
            (ju = bm(e.stateNode.containerInfo)),
            Au(t, e, n),
            W(e),
            (ju = o),
            T && fu && (pu = !0),
            (T = r),
            (su = a));
          break;
        case 12:
          (Au(t, e, n), W(e));
          break;
        case 31:
          (Au(t, e, n),
            W(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 13:
          (Au(t, e, n),
            W(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (r !== null && r.memoizedState !== null) &&
              (hd = et()),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 22:
          ((o = e.memoizedState !== null),
            (s = r !== null && r.memoizedState !== null));
          var c = au,
            l = ou,
            u = su;
          ((au = c || o),
            (su = u || o),
            (ou = l || s),
            Au(t, e, n),
            (ou = l),
            (su = u),
            (au = c),
            W(e),
            a & 8192 &&
              ((t = e.stateNode),
              (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
              !o ||
                r === null ||
                s ||
                au ||
                ou ||
                ((t = s || ou),
                (n = au),
                (r = ou),
                (au = o || au),
                (ou = t),
                Lu(e, 2),
                (au = n),
                (ou = r)),
              (!o && su) || vu(e, o)),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null &&
                ((n = t.retryQueue),
                n !== null && ((t.retryQueue = null), ku(e, n)))));
          break;
        case 19:
          (Au(t, e, n),
            W(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 30:
          (a & 512 && (ou || r === null || Dl(r, r.return)),
            (a = sn()),
            (o = fu),
            (s = (n & 335544064) === n),
            (c = e.memoizedProps),
            (fu = s && ki(c.default, c.update) !== `none`),
            Au(t, e, n),
            W(e),
            s && r !== null && T && (e.flags |= 4),
            (fu = o),
            (T = a));
          break;
        case 21:
          break;
        case 7:
          (a & 512 && (ou || r === null || Dl(r, r.return)),
            r && r.stateNode !== null && (r.stateNode._fragmentFiber = e));
        default:
          (Au(t, e, n), W(e));
      }
    }
    function W(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Fl(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          r = null;
          for (var a = e.return; a !== null;) {
            if (Ml(a)) {
              var o = a.stateNode;
              r === null ? (r = [o]) : r.push(o);
            }
            if (jl(a)) break;
            a = a.return;
          }
          var s = r;
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var c = n.stateNode;
              Rl(e, Il(e), c, s);
              break;
            case 5:
              var l = n.stateNode;
              (n.flags & 32 && (Cn(l, ``), (n.flags &= -33)),
                Rl(e, Il(e), l, s));
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo;
              Ll(e, Il(e), u, s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          pf(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Nu(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Nu(t),
            t.tag === 5 &&
              t.flags & 1024 &&
              ((t = t.stateNode), (gh = !0), t.reset(), (gh = !1)),
            (e = e.sibling));
        }
    }
    function Pu(e, t) {
      if (t.subtreeFlags & 9270)
        for (t = t.child; t !== null;) (Fu(t, e), (t = t.sibling));
      else iu(t, !1);
    }
    function Fu(e, t) {
      var n = e.alternate;
      if (n === null) Xl(e, !1);
      else
        switch (e.tag) {
          case 3:
            if (((mu = du = !1), Wl(), Pu(t, e), !du && !pu)) {
              if (((e = Ul), e !== null))
                for (var r = 0; r < e.length; r += 3) {
                  n = e[r];
                  var i = e[r + 1];
                  (Ep(n, e[r + 2]),
                    (n = n.ownerDocument.documentElement),
                    n !== null &&
                      n.animate(
                        { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                        {
                          duration: 0,
                          fill: `forwards`,
                          pseudoElement: `::view-transition-group(` + i + `)`,
                        },
                      ));
                }
              ((e = t.containerInfo),
                (e =
                  e.nodeType === 9
                    ? e.documentElement
                    : e.ownerDocument.documentElement),
                e !== null &&
                  e.style.viewTransitionName === `` &&
                  ((e.style.viewTransitionName = `none`),
                  e.animate(
                    { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition-group(root)`,
                    },
                  ),
                  e.animate(
                    { width: [0, 0], height: [0, 0] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition`,
                    },
                  )),
                (mu = !0));
            }
            Ul = null;
            break;
          case 5:
            Pu(t, e);
            break;
          case 4:
            ((r = du), (du = !1), Pu(t, e), du && (pu = !0), (du = r));
            break;
          case 22:
            e.memoizedState === null &&
              (n.memoizedState === null ? Pu(t, e) : Xl(e, !1));
            break;
          case 30:
            ((r = du), (i = Wl()), (du = !1), Pu(t, e), du && (e.flags |= 4));
            var a = e.memoizedProps,
              o = e.stateNode;
            ((t = Di(a, o)), (o = Di(n.memoizedProps, o)));
            var s = ki(a.default, a.update);
            (s === `none`
              ? (t = !1)
              : ((a = n.memoizedState),
                (n.memoizedState = null),
                (n = e.child),
                (Gl = 0),
                (t = ru(e, n, t, o, s, a, !0)),
                Gl !== (a === null ? 0 : a.length) && (e.flags |= 32)),
              e.flags & 4 && t
                ? (Pd(e, e.memoizedProps.onUpdate), (Ul = i))
                : i !== null && (i.push.apply(i, Ul), (Ul = i)),
              (du = e.flags & 32 ? !0 : r));
            break;
          default:
            Pu(t, e);
        }
    }
    function Iu(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (_u(e, t.alternate, t), (t = t.sibling));
    }
    function Lu(e, t) {
      for (e = e.child; e !== null;) {
        var n = e,
          r = t;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Cl(4, n, n.return), Lu(n, r));
            break;
          case 1:
            Dl(n, n.return);
            var i = n.stateNode;
            (typeof i.componentWillUnmount == `function` && Tl(n, n.return, i),
              Lu(n, r));
            break;
          case 27:
            r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
          case 5:
            (Dl(n, n.return), (n.tag !== 5 && n.tag !== 27) || Al(n), Lu(n, r));
            break;
          case 6:
            Al(n);
            break;
          case 26:
            (Dl(n, n.return),
              (i = n.stateNode),
              n.memoizedState !== null ||
                i === null ||
                ou ||
                i.parentNode.removeChild(i),
              Lu(n, r));
            break;
          case 22:
            n.memoizedState === null && Lu(n, r);
            break;
          case 30:
            (Dl(n, n.return), Lu(n, r));
            break;
          case 7:
            Dl(n, n.return);
          default:
            Lu(n, r);
        }
        e = e.sibling;
      }
    }
    function Ru(e, t, n) {
      for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags,
          s = !!(n & 1);
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Ru(i, a, n), Sl(4, a));
            break;
          case 1:
            if (
              (Ru(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                pf(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var c = r.stateNode;
              try {
                var l = i.shared.hiddenCallbacks;
                if (l !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < l.length;
                    i++
                  )
                    Ao(l[i], c);
              } catch (e) {
                pf(r, r.return, e);
              }
            }
            (s && o & 64 && wl(a), El(a, a.return));
            break;
          case 27:
            n & 2 && zl(a);
          case 5:
            ((a.tag !== 5 && a.tag !== 27) || kl(a),
              Ru(i, a, n),
              s && r === null && o & 4 && Nl(a),
              El(a, a.return));
            break;
          case 6:
            kl(a);
            break;
          case 26:
            ((c = a.stateNode),
              a.memoizedState !== null ||
                c === null ||
                au ||
                Km(bm(c.ownerDocument), a.type, c),
              Ru(i, a, n),
              s && r === null && o & 4 && Nl(a),
              El(a, a.return));
            break;
          case 12:
            Ru(i, a, n);
            break;
          case 31:
            (Ru(i, a, n), s && o & 4 && Eu(i, a));
            break;
          case 13:
            (Ru(i, a, n), s && o & 4 && Du(i, a));
            break;
          case 22:
            (a.memoizedState === null && Ru(i, a, n), El(a, a.return));
            break;
          case 30:
            (Ru(i, a, n), El(a, a.return));
            break;
          case 7:
            El(a, a.return);
          default:
            Ru(i, a, n);
        }
        t = t.sibling;
      }
    }
    function zu(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && Ba(n)));
    }
    function Bu(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && Ba(e)));
    }
    function Vu(e, t, n, r) {
      var i = (n & 335544064) === n;
      if (t.subtreeFlags & (i ? 10262 : 10256))
        for (t = t.child; t !== null;) (Hu(e, t, n, r), (t = t.sibling));
      else i && nu(t);
    }
    function Hu(e, t, n, r) {
      var i = (n & 335544064) === n;
      i &&
        t.alternate === null &&
        t.return !== null &&
        t.return.alternate !== null &&
        tu(t);
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Vu(e, t, n, r), a & 2048 && Sl(9, t));
          break;
        case 1:
          Vu(e, t, n, r);
          break;
        case 3:
          (Vu(e, t, n, r),
            i &&
              mu &&
              ((e = e.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e),
              e.style.viewTransitionName === `root` &&
                (e.style.viewTransitionName = ``),
              (e = e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === `none` &&
                (e.style.viewTransitionName = ``)),
            a & 2048 &&
              ((a = null),
              t.alternate !== null && (a = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== a && (t.refCount++, a != null && Ba(a))));
          break;
        case 12:
          if (a & 2048) {
            (Vu(e, t, n, r), (a = t.stateNode));
            try {
              var o = t.memoizedProps,
                s = o.id,
                c = o.onPostCommit;
              typeof c == `function` &&
                c(
                  s,
                  t.alternate === null ? `mount` : `update`,
                  a.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              pf(t, t.return, e);
            }
          } else Vu(e, t, n, r);
          break;
        case 31:
          Vu(e, t, n, r);
          break;
        case 13:
          Vu(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((o = t.stateNode),
            (s = t.alternate),
            t.memoizedState === null
              ? (i && s !== null && s.memoizedState !== null && tu(t),
                o._visibility & 2
                  ? Vu(e, t, n, r)
                  : ((o._visibility |= 2),
                    Uu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
              : (i && s !== null && s.memoizedState === null && tu(s),
                o._visibility & 2 ? Vu(e, t, n, r) : Wu(e, t)),
            a & 2048 && zu(s, t));
          break;
        case 24:
          (Vu(e, t, n, r), a & 2048 && Bu(t.alternate, t));
          break;
        case 30:
          (i &&
            ((a = t.alternate),
            a !== null && (Jl(a.child, !0), Jl(t.child, !0))),
            Vu(e, t, n, r));
          break;
        default:
          Vu(e, t, n, r);
      }
    }
    function Uu(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Uu(a, o, s, c, i), Sl(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Uu(a, o, s, c, i))
              : u._visibility & 2
                ? Uu(a, o, s, c, i)
                : Wu(a, o),
              i && l & 2048 && zu(o.alternate, o));
            break;
          case 24:
            (Uu(a, o, s, c, i), i && l & 2048 && Bu(o.alternate, o));
            break;
          default:
            Uu(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Wu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Wu(n, r), i & 2048 && zu(r.alternate, r));
              break;
            case 24:
              (Wu(n, r), i & 2048 && Bu(r.alternate, r));
              break;
            default:
              Wu(n, r);
          }
          t = t.sibling;
        }
    }
    var Gu = 8192;
    function G(e, t, n) {
      if (e.subtreeFlags & Gu)
        for (e = e.child; e !== null;) (Ku(e, t, n), (e = e.sibling));
    }
    function Ku(e, t, n) {
      switch (e.tag) {
        case 26:
          (G(e, t, n),
            e.flags & Gu &&
              (e.memoizedState === null
                ? ((e = e.stateNode), (t & 335544128) === t && Zm(n, e))
                : Qm(n, ju, e.memoizedState, e.memoizedProps)));
          break;
        case 5:
          (G(e, t, n),
            e.flags & Gu &&
              ((e = e.stateNode), (t & 335544128) === t && Zm(n, e)));
          break;
        case 3:
        case 4:
          var r = ju;
          ((ju = bm(e.stateNode.containerInfo)), G(e, t, n), (ju = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Gu), (Gu = 16777216), G(e, t, n), (Gu = r))
              : G(e, t, n));
          break;
        case 30:
          if (
            (e.flags & Gu) !== 0 &&
            ((r = e.memoizedProps.name), r != null && r !== `auto`)
          ) {
            var i = e.stateNode;
            ((i.paired = null), Vl === null && (Vl = new Map()), Vl.set(r, i));
          }
          G(e, t, n);
          break;
        default:
          G(e, t, n);
      }
    }
    function qu(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Ju(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((uu = r), Zu(r, e));
          }
        qu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Yu(e), (e = e.sibling));
    }
    function Yu(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Ju(e), e.flags & 2048 && Cl(9, e, e.return));
          break;
        case 3:
          Ju(e);
          break;
        case 12:
          Ju(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Xu(e))
            : Ju(e);
          break;
        default:
          Ju(e);
      }
    }
    function Xu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((uu = r), Zu(r, e));
          }
        qu(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Cl(8, t, t.return), Xu(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Xu(t)));
            break;
          default:
            Xu(t);
        }
        e = e.sibling;
      }
    }
    function Zu(e, t) {
      for (; uu !== null;) {
        var n = uu;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Cl(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            Ba(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (uu = r));
        else
          a: for (n = e; uu !== null;) {
            r = uu;
            var i = r.sibling,
              a = r.return;
            if ((xu(r), r === n)) {
              uu = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (uu = i));
              break a;
            }
            uu = a;
          }
      }
    }
    var Qu = {
        getCacheForType: function (e) {
          var t = Ma(Ra),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return Ma(Ra).controller.signal;
        },
      },
      $u = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      ed = null,
      q = null,
      J = 0,
      td = 0,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0,
      sd = 0,
      cd = 0,
      ld = 0,
      ud = 0,
      dd = 0,
      fd = 0,
      pd = null,
      Y = null,
      md = !1,
      hd = 0,
      gd = 0,
      _d = 1 / 0,
      vd = null,
      yd = null,
      bd = 0,
      xd = null,
      Sd = null,
      Cd = 0,
      wd = 0,
      Td = null,
      Ed = null,
      Dd = null,
      Od = null,
      kd = null,
      Ad = 0,
      jd = null;
    function Md() {
      return K & 2 && J !== 0 ? J & -J : w.T === null ? Nt() : Nf();
    }
    function Nd() {
      if (dd === 0) {
        if (!(J & 536870912) || N) {
          var e = _t;
          ((_t <<= 1), !(_t & 3932160) && (_t = 262144), (dd = e));
        } else dd = 536870912;
      }
      return ((e = Lo.current), e !== null && (e.flags |= 32), dd);
    }
    function Pd(e, t) {
      if (t != null) {
        var n = e.stateNode,
          r = n.ref;
        (r === null && (r = n.ref = Pp(Di(e.memoizedProps, n))),
          Od === null && (Od = []),
          Od.push(t.bind(null, r)));
      }
    }
    function Fd(e, t, n) {
      (((e === ed && (td === 2 || td === 9)) ||
        e.cancelPendingCommit !== null) &&
        (Vd(e, 0), X(e, J, dd, !1)),
        Et(e, n),
        (!(K & 2) || e !== ed) &&
          (e === ed && (!(K & 2) && (ld |= n), sd === 4 && X(e, J, dd, !1)),
          Tf(e)));
    }
    function Id(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || xt(e, t),
        a = r ? Yd(e, t) : qd(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          id && !r && X(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !Rd(n))) {
          ((a = qd(e, t, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = pd;
              var l = c.current.memoizedState.isDehydrated;
              if (
                (l && (Vd(c, s).flags |= 256),
                (s = qd(c, s, !1)),
                s !== 2 && s !== 6)
              ) {
                if (ad && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (ld |= o), (a = 4));
                  break a;
                }
                ((o = Y),
                  (Y = a),
                  o !== null && (Y === null ? (Y = o) : Y.push.apply(Y, o)));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Vd(e, 0), X(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              X(r, t, dd, !rd);
              break a;
            case 2:
              Y = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = hd + 300 - et()), 10 < a)) {
            if ((X(r, t, dd, !rd), bt(r, 0, !0) !== 0)) break a;
            ((Cd = t),
              (r.timeoutHandle = gp(
                Ld.bind(
                  null,
                  r,
                  n,
                  Y,
                  vd,
                  md,
                  t,
                  dd,
                  ld,
                  fd,
                  rd,
                  o,
                  `Throttled`,
                  -0,
                  0,
                ),
                a,
              )));
            break a;
          }
          Ld(r, n, Y, vd, md, t, dd, ld, fd, rd, o, null, -0, 0);
        }
        break;
      } while (1);
      Tf(e);
    }
    function Ld(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      e.timeoutHandle = -1;
      var m = t.subtreeFlags,
        h = (a & 335544064) === a;
      if (
        ((d = null),
        (h || m & 8192 || (m & 16785408) == 16785408) &&
          ((d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: jn,
          }),
          (Vl = null),
          Ku(t, a, d),
          h &&
            ((m = d),
            (h = e.containerInfo),
            (h = (h.nodeType === 9 ? h : h.ownerDocument)
              .__reactViewTransition),
            h != null &&
              (m.count++,
              (m.waitingForViewTransition = !0),
              (m = nh.bind(m)),
              h.finished.then(m, m))),
          (m =
            (a & 62914560) === a
              ? hd - et()
              : (a & 4194048) === a
                ? gd - et()
                : 0),
          (m = eh(d, m)),
          m !== null))
      ) {
        ((Cd = a),
          (e.cancelPendingCommit = m(
            Z.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
          )),
          X(e, a, o, !l));
        return;
      }
      Z(e, t, a, n, r, i, o, s, c, l, u, d);
    }
    function Rd(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Qr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function X(e, t, n, r) {
      ((t = St(e, t)),
        (t &= ~ud),
        (t &= ~ld),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - ft(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && Ot(e, n, t);
    }
    function zd() {
      return K & 6 ? !0 : (Ef(0, !1), !1);
    }
    function Bd() {
      if (q !== null) {
        if (td === 0) var e = q.return;
        else ((e = q), (wa = Ca = null), ds(e), (po = null), (mo = 0), (e = q));
        for (; e !== null;) (xl(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function Vd(e, t) {
      var n = e.timeoutHandle;
      return (
        n !== -1 && ((e.timeoutHandle = -1), _p(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (Cd = 0),
        Bd(),
        (ed = e),
        (q = n = Hi(e.current, null)),
        (J = t),
        (td = 0),
        (nd = null),
        (rd = !1),
        (id = xt(e, t)),
        (ad = !1),
        (fd = dd = ud = ld = cd = sd = 0),
        (Y = pd = null),
        (md = !1),
        (od = St(e, t)),
        A(),
        n
      );
    }
    function Hd(e, t) {
      ((I = null),
        (w.H = mc),
        t === no || t === io
          ? ((t = uo()), (td = 3))
          : t === ro
            ? ((t = uo()), (td = 4))
            : (td =
                t === Mc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (nd = t),
        q === null && ((sd = 1), Ec(e, Yi(t, e.current))));
    }
    function Ud() {
      var e = Lo.current;
      return e === null
        ? !0
        : (J & 4194048) === J
          ? Ro === null
          : (J & 62914560) === J || J & 536870912
            ? e === Ro
            : !1;
    }
    function Wd() {
      var e = w.H;
      return ((w.H = mc), e === null ? mc : e);
    }
    function Gd() {
      var e = w.A;
      return ((w.A = Qu), e);
    }
    function Kd() {
      ((sd = 4),
        rd || ((J & 4194048) !== J && Lo.current !== null) || (id = !0),
        (!(cd & 134217727) && !(ld & 134217727)) ||
          ed === null ||
          X(ed, J, dd, !1));
    }
    function qd(e, t, n) {
      var r = K;
      K |= 2;
      var i = Wd(),
        a = Gd();
      ((ed !== e || J !== t) && ((vd = null), Vd(e, t)), (t = !1));
      var o = sd;
      a: do
        try {
          if (td !== 0 && q !== null) {
            var s = q,
              c = nd;
            switch (td) {
              case 8:
                (Bd(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Lo.current === null && (t = !0);
                var l = td;
                if (((td = 0), (nd = null), $d(e, s, c, l), n && id)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = td), (td = 0), (nd = null), $d(e, s, c, l));
            }
          }
          (Jd(), (o = sd));
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (wa = Ca = null),
        (K = r),
        (w.H = i),
        (w.A = a),
        q === null && ((ed = null), (J = 0), A()),
        o
      );
    }
    function Jd() {
      for (; q !== null;) Zd(q);
    }
    function Yd(e, t) {
      var n = K;
      K |= 2;
      var r = Wd(),
        a = Gd();
      ed !== e || J !== t
        ? ((vd = null), (_d = et() + 500), Vd(e, t))
        : (id = xt(e, t));
      a: do
        try {
          if (td !== 0 && q !== null) {
            t = q;
            var o = nd;
            b: switch (td) {
              case 1:
                ((td = 0), (nd = null), $d(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (oo(o)) {
                  ((td = 0), (nd = null), Qd(t));
                  break;
                }
                ((t = function () {
                  ((td !== 2 && td !== 9) || ed !== e || (td = 7), Tf(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                td = 7;
                break a;
              case 4:
                td = 5;
                break a;
              case 7:
                oo(o)
                  ? ((td = 0), (nd = null), Qd(t))
                  : ((td = 0), (nd = null), $d(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (s ? Ym(s) : c.stateNode.complete) {
                      ((td = 0), (nd = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), ef(u));
                      }
                      break b;
                    }
                }
                ((td = 0), (nd = null), $d(e, t, o, 5));
                break;
              case 6:
                ((td = 0), (nd = null), $d(e, t, o, 6));
                break;
              case 8:
                (Bd(), (sd = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Xd();
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        (wa = Ca = null),
        (w.H = r),
        (w.A = a),
        (K = n),
        q === null ? ((ed = null), (J = 0), A(), sd) : 0
      );
    }
    function Xd() {
      for (; q !== null && !Qe();) Zd(q);
    }
    function Zd(e) {
      var t = fl(e.alternate, e, od);
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (q = t));
    }
    function Qd(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Kc(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = Kc(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          ds(t);
          var r = t;
          r === ua &&
            (N
              ? (_a(r),
                r.tag === 5 && r.stateNode != null && (da = r.stateNode))
              : (_a(r), (N = !0)));
        default:
          (xl(n, t), (t = q = Ui(t, od)), (t = fl(n, t, od)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (q = t));
    }
    function $d(e, t, n, r) {
      ((wa = Ca = null), ds(t), (po = null), (mo = 0));
      var i = t.return;
      try {
        if (jc(e, i, t, n, J)) {
          ((sd = 1), Ec(e, Yi(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((sd = 1), Ec(e, Yi(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : id || J & 536870912
              ? (e = !1)
              : ((rd = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = Lo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          tf(t, e))
        : ef(t);
    }
    function ef(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          tf(t, rd);
          return;
        }
        e = t.return;
        var n = yl(t.alternate, t, od);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      sd === 0 && (sd = 5);
    }
    function tf(e, t) {
      do {
        var n = bl(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((sd = 6), (q = null));
    }
    function Z(e, t, n, r, a, o, s, c, l, u, d, f) {
      e.cancelPendingCommit = null;
      do uf();
      while (bd !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        (e === ed && ((q = ed = null), (J = 0)),
          (Sd = t),
          (xd = e),
          (Cd = n),
          (Td = a),
          (Ed = r),
          nf(e, t, n, s, c, l, f));
      }
    }
    function nf(e, t, n, r, i, a, o) {
      var s = t.lanes | t.childLanes;
      if (
        ((wd = s),
        (s |= Ni),
        Dt(e, n, s, r, i, a),
        (Od = null),
        (n & 335544064) === n
          ? ((kd = Ua(e)), (r = 10262))
          : ((kd = null), (r = 10256)),
        (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            vf(it, function () {
              return (df(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (Bl = !1),
        (r = !!(t.flags & 13878)),
        t.subtreeFlags & 13878 || r)
      ) {
        ((r = w.T), (w.T = null), (i = De.p), (De.p = 2), (a = K), (K |= 4));
        try {
          hu(e, t, n);
        } finally {
          ((K = a), (De.p = i), (w.T = r));
        }
      }
      ((bd = 1),
        Bl
          ? (Dd = Mp(
              o,
              e.containerInfo,
              kd,
              of,
              sf,
              af,
              cf,
              df,
              rf,
              null,
              null,
            ))
          : (of(), sf(), cf()));
    }
    function rf(e) {
      if (bd !== 0) {
        var t = xd.onRecoverableError;
        t(e, { componentStack: null });
      }
    }
    function af() {
      bd === 3 && ((bd = 0), Fu(Sd, xd), (bd = 4));
    }
    function of() {
      if (bd === 1) {
        bd = 0;
        var e = xd,
          t = Sd,
          n = Cd,
          r = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || r) {
          ((r = w.T), (w.T = null));
          var i = De.p;
          De.p = 2;
          var a = K;
          K |= 4;
          try {
            ((fu = pu = !1), Mu(t, e, n), (n = cp));
            var o = ii(e.containerInfo),
              s = n.focusedElem,
              c = n.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              ri(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && ai(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = ni(s, h),
                      v = ni(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((gh = !!sp), (cp = sp = null));
          } finally {
            ((K = a), (De.p = i), (w.T = r));
          }
        }
        ((e.current = t), (bd = 2));
      }
    }
    function sf() {
      if (bd === 2) {
        bd = 0;
        var e = xd,
          t = Sd,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = w.T), (w.T = null));
          var r = De.p;
          De.p = 2;
          var i = K;
          K |= 4;
          try {
            _u(e, t.alternate, t);
          } finally {
            ((K = i), (De.p = r), (w.T = n));
          }
        }
        bd = 3;
      }
    }
    function cf() {
      if (bd === 4 || bd === 3) {
        bd = 0;
        var e = Dd;
        ((Dd = null), $e());
        var t = xd,
          n = Sd,
          r = Cd,
          i = Ed,
          a = (r & 335544064) === r ? 10262 : 10256;
        if (
          ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
            ? (bd = 5)
            : ((bd = 0), (Sd = xd = null), lf(t, t.pendingLanes)),
          (a = t.pendingLanes),
          a === 0 && (yd = null),
          Mt(r),
          (n = n.stateNode),
          ut && typeof ut.onCommitFiberRoot == `function`)
        )
          try {
            ut.onCommitFiberRoot(lt, n, void 0, (n.current.flags & 128) == 128);
          } catch {}
        if (i !== null) {
          ((n = w.T), (a = De.p), (De.p = 2), (w.T = null));
          try {
            for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
              var c = i[s];
              o(c.value, { componentStack: c.stack });
            }
          } finally {
            ((w.T = n), (De.p = a));
          }
        }
        if (
          ((i = Od),
          (o = kd),
          (kd = null),
          i !== null && ((Od = null), o === null && (o = []), e !== null))
        )
          for (c = 0; c < i.length; c++)
            ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n));
        (Cd & 3 && uf(),
          Tf(t),
          (a = t.pendingLanes),
          r & 261930 && a & 42
            ? t === jd
              ? Ad++
              : ((Ad = 0), (jd = t))
            : ((Ad = 0), (jd = null)),
          Ef(0, !1));
      }
    }
    function lf(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ba(t)));
    }
    function uf() {
      return (
        Dd !== null && (Dd.skipTransition(), (Dd = null)),
        of(),
        sf(),
        cf(),
        df()
      );
    }
    function df() {
      if (bd !== 5) return !1;
      var e = xd,
        t = wd;
      wd = 0;
      var n = Mt(Cd),
        r = w.T,
        a = De.p;
      try {
        ((De.p = 32 > n ? 32 : n), (w.T = null), (n = Td), (Td = null));
        var o = xd,
          s = Cd;
        if (((bd = 0), (Sd = xd = null), (Cd = 0), K & 6)) throw Error(i(331));
        var c = K;
        if (
          ((K |= 4),
          Yu(o.current),
          Hu(o, o.current, s, n),
          (K = c),
          Ef(0, !1),
          ut && typeof ut.onPostCommitFiberRoot == `function`)
        )
          try {
            ut.onPostCommitFiberRoot(lt, o);
          } catch {}
        return !0;
      } finally {
        ((De.p = a), (w.T = r), lf(e, t));
      }
    }
    function ff(e, t, n) {
      ((t = Yi(n, t)),
        (t = Oc(e.stateNode, t, 2)),
        (e = wo(e, t, 2)),
        e !== null && (Et(e, 2), Tf(e)));
    }
    function pf(e, t, n) {
      if (e.tag === 3) ff(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            ff(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (yd === null || !yd.has(r)))
            ) {
              ((e = Yi(n, e)),
                (n = kc(2)),
                (r = wo(t, n, 2)),
                r !== null && (Ac(n, r, t, e), Et(r, 2), Tf(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Q(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new $u();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((ad = !0), i.add(n), (e = mf.bind(null, e, t, n)), t.then(e, e));
    }
    function mf(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        ed === e &&
          (J & n) === n &&
          (sd === 4 || (sd === 3 && (J & 62914560) === J && 300 > et() - hd)
            ? K & 2
              ? (ud |= n)
              : Vd(e, 0)
            : (ud |= n),
          fd === J && (fd = 0)),
        Tf(e));
    }
    function hf(e, t) {
      (t === 0 && (t = wt()), (e = Ii(e, t)), e !== null && (Et(e, t), Tf(e)));
    }
    function gf(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), hf(e, n));
    }
    function _f(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), hf(e, n));
    }
    function vf(e, t) {
      return Xe(e, t);
    }
    var yf = null,
      bf = null,
      xf = !1,
      Sf = !1,
      Cf = !1,
      wf = 0;
    function Tf(e) {
      (e !== bf &&
        e.next === null &&
        (bf === null ? (yf = bf = e) : (bf = bf.next = e)),
        (Sf = !0),
        xf || ((xf = !0), Mf()));
    }
    function Ef(e, t) {
      if (!Cf && Sf) {
        Cf = !0;
        do
          for (var n = !1, r = yf; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - ft(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), jf(r, a));
              } else
                ((a = J),
                  (a = bt(
                    r,
                    r === ed ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || xt(r, a) || ((n = !0), jf(r, a)));
            }
            r = r.next;
          }
        while (n);
        Cf = !1;
      }
    }
    function Df() {
      Of();
    }
    function Of() {
      Sf = xf = !1;
      var e = 0;
      wf !== 0 && hp() && (e = wf);
      for (var t = et(), n = null, r = yf; r !== null;) {
        var i = r.next,
          a = kf(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (yf = i) : (n.next = i),
            i === null && (bf = n))
          : ((n = r), (e !== 0 || a & 3) && (Sf = !0)),
          (r = i));
      }
      ((bd !== 0 && bd !== 5) || Ef(e, !1), wf !== 0 && (wf = 0));
    }
    function kf(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - ft(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ct(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = ed),
        (n = J),
        (n = bt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (td === 2 || td === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ze(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || xt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ze(r), Mt(n))) {
          case 2:
          case 8:
            n = rt;
            break;
          case 32:
            n = it;
            break;
          case 268435456:
            n = ot;
            break;
          default:
            n = it;
        }
        return (
          (r = Af.bind(null, e)),
          (n = Xe(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ze(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function Af(e, t) {
      if (bd !== 0 && bd !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (uf() && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = bt(
          e,
          e === ed ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (Id(e, r, t),
            kf(e, et()),
            e.callbackNode != null && e.callbackNode === n
              ? Af.bind(null, e)
              : null)
      );
    }
    function jf(e, t) {
      if (uf()) return null;
      Id(e, t, !0);
    }
    function Mf() {
      bp(function () {
        K & 6 ? Xe(nt, Df) : Of();
      });
    }
    function Nf() {
      if (wf === 0) {
        var e = Ka;
        (e === 0 && ((e = gt), (gt <<= 1), !(gt & 261888) && (gt = 256)),
          (wf = e));
      }
      return wf;
    }
    function Pf(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : An(e);
    }
    function Ff(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Pf((i[Lt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[Lt] || null)
            ? Pf(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Xn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (wf !== 0) {
                    var e = new FormData(i, o);
                    nc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = new FormData(i, o)),
                    nc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var If = 0; If < wi.length; If++) {
      var Lf = wi[If];
      Ti(Lf.toLowerCase(), `on` + (Lf[0].toUpperCase() + Lf.slice(1)));
    }
    (Ti(gi, `onAnimationEnd`),
      Ti(_i, `onAnimationIteration`),
      Ti(vi, `onAnimationStart`),
      Ti(`dblclick`, `onDoubleClick`),
      Ti(`focusin`, `onFocus`),
      Ti(`focusout`, `onBlur`),
      Ti(yi, `onTransitionRun`),
      Ti(bi, `onTransitionStart`),
      Ti(xi, `onTransitionCancel`),
      Ti(Si, `onTransitionEnd`),
      tn(`onMouseEnter`, [`mouseout`, `mouseover`]),
      tn(`onMouseLeave`, [`mouseout`, `mouseover`]),
      tn(`onPointerEnter`, [`pointerout`, `pointerover`]),
      tn(`onPointerLeave`, [`pointerout`, `pointerover`]),
      en(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      en(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      en(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      en(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      en(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      en(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var Rf =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      zf = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(Rf),
      );
    function Bf(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function $(e, t) {
      var n = t[zt];
      n === void 0 && (n = t[zt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Wf(t, e, 2, !1), n.add(r));
    }
    function Vf(e, t, n) {
      var r = 0;
      (t && (r |= 4), Wf(n, e, r, t));
    }
    var Hf = `_reactListening` + Math.random().toString(36).slice(2);
    function Uf(e) {
      if (!e[Hf]) {
        ((e[Hf] = !0),
          Qt.forEach(function (t) {
            t !== `selectionchange` &&
              (zf.has(t) || Vf(t, !1, e), Vf(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Hf] || ((t[Hf] = !0), Vf(`selectionchange`, !1, t));
      }
    }
    function Wf(e, t, n, r) {
      switch (Ch(t)) {
        case 2:
          var i = _h;
          break;
        case 8:
          i = vh;
          break;
        default:
          i = yh;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Vn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Gf(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = Kt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      Rn(function () {
        var r = a,
          i = Nn(n),
          s = [];
        a: {
          var c = Ci.get(e);
          if (c !== void 0) {
            var l = Xn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Gn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = mr;
                break;
              case `focusin`:
                ((u = `focus`), (l = ar));
                break;
              case `focusout`:
                ((u = `blur`), (l = ar));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = ar;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = rr;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = ir;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = _r;
                break;
              case gi:
              case _i:
              case vi:
                l = or;
                break;
              case Si:
                l = vr;
                break;
              case `scroll`:
              case `scrollend`:
                l = Qn;
                break;
              case `wheel`:
                l = yr;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = sr;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = hr;
                break;
              case `submit`:
                l = gr;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = br;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = zn(m, p)), g != null && d.push(Kf(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((l = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              l &&
                n !== Mn &&
                (u = n.relatedTarget || n.fromElement) &&
                (Kt(u) || u[Rt]))
            )
              break a;
            (c || l) &&
              ((u =
                i.window === i
                  ? i
                  : (l = i.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Kt(l) : null),
                  l !== null &&
                    ((f = o(l)),
                    (d = l.tag),
                    l !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l &&
                ((d = rr),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = hr),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = c == null ? u : Jt(c)),
                (h = l == null ? u : Jt(l)),
                (u = new d(g, m + `leave`, c, n, i)),
                (u.target = f),
                (u.relatedTarget = h),
                (g = null),
                Kt(i) === r &&
                  ((d = new d(p, m + `enter`, l, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                (d = c && l ? ie(c, l, Jf) : null),
                c !== null && Yf(s, u, c, d, !1),
                l !== null && f !== null && Yf(s, f, l, d, !0)));
          }
          a: {
            if (
              ((c = r ? Jt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var _ = Br;
            else if (Pr(c)) {
              if (Vr) _ = Xr;
              else {
                _ = Jr;
                var v = qr;
              }
            } else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Dn(r.elementType) && (_ = Br)
                  : (_ = Yr));
            if ((_ &&= _(e, r))) {
              Fr(s, _, n, i);
              break a;
            }
            v && v(e, c, r);
          }
          switch (((v = r ? Jt(r) : window), e)) {
            case `focusin`:
              (Pr(v) || v.contentEditable === `true`) &&
                ((si = v), (ci = r), (li = null));
              break;
            case `focusout`:
              li = ci = si = null;
              break;
            case `mousedown`:
              ui = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((ui = !1), di(s, n, i));
              break;
            case `selectionchange`:
              if (oi) break;
            case `keydown`:
            case `keyup`:
              di(s, n, i);
          }
          var y;
          if (Sr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var b = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  b = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  b = `onCompositionUpdate`;
                  break b;
              }
              b = void 0;
            }
          else
            Ar
              ? Or(e, n) && (b = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (b = `onCompositionStart`);
          (b &&
            (Tr &&
              n.locale !== `ko` &&
              (Ar || b !== `onCompositionStart`
                ? b === `onCompositionEnd` && Ar && (y = Wn())
                : ((O = i),
                  (Hn = `value` in O ? O.value : O.textContent),
                  (Ar = !0))),
            (v = qf(r, b)),
            0 < v.length &&
              ((b = new cr(b, e, null, n, i)),
              s.push({ event: b, listeners: v }),
              y ? (b.data = y) : ((y = kr(n)), y !== null && (b.data = y)))),
            (y = wr ? jr(e, n) : Mr(e, n)) &&
              ((b = qf(r, `onBeforeInput`)),
              0 < b.length &&
                ((v = new cr(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: v, listeners: b }),
                (v.data = y))),
            Ff(s, e, r, n, i));
        }
        Bf(s, t);
      });
    }
    function Kf(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function qf(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = zn(e, n)),
            i != null && r.unshift(Kf(e, i, a)),
            (i = zn(e, t)),
            i != null && r.push(Kf(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Jf(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Yf(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = zn(n, a)), l != null && o.unshift(Kf(n, l, c)))
            : i || ((l = zn(n, a)), l != null && o.push(Kf(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Xf = /\r\n?/g,
      Zf = /\u0000|\uFFFD/g;
    function Qf(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Xf,
          `
`,
        )
        .replace(Zf, ``);
    }
    function $f(e, t) {
      return ((t = Qf(t)), Qf(e) === t);
    }
    function ep(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          if (typeof r == `string`)
            t === `body` || (t === `textarea` && r === ``) || Cn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`)
            t !== `body` && Cn(e, `` + r);
          else return;
          break;
        case `className`:
          ln(e, `class`, r);
          break;
        case `tabIndex`:
          ln(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          ln(e, n, r);
          break;
        case `style`:
          En(e, r, o);
          return;
        case `data`:
          if (t !== `object`) {
            ln(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = An(r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && ep(e, t, `name`, a.name, a, null),
                  ep(e, t, `formEncType`, a.formEncType, a, null),
                  ep(e, t, `formMethod`, a.formMethod, a, null),
                  ep(e, t, `formTarget`, a.formTarget, a, null))
                : (ep(e, t, `encType`, a.encType, a, null),
                  ep(e, t, `method`, a.method, a, null),
                  ep(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = An(r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = jn);
          return;
        case `onScroll`:
          r != null && $(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && $(`scrollend`, e);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = An(r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          ($(`beforetoggle`, e), $(`toggle`, e), cn(e, `popover`, r));
          break;
        case `xlinkActuate`:
          un(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          un(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          un(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          un(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          un(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          un(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          un(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          un(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          un(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          cn(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (
            !(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)
          )
            ((n = On.get(n) || n), cn(e, n, r));
          else return;
      }
      T = !0;
    }
    function tp(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          En(e, r, o);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `children`:
          if (typeof r == `string`) Cn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`) Cn(e, `` + r);
          else return;
          break;
        case `onScroll`:
          r != null && $(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && $(`scrollend`, e);
          return;
        case `onClick`:
          r != null && (e.onclick = jn);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!$t.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (o = n.slice(2, a ? n.length - 7 : void 0)),
                (t = e[Lt] || null),
                (t = t == null ? null : t[n]),
                typeof t == `function` && e.removeEventListener(o, t, a),
                typeof r == `function`)
              ) {
                (typeof t != `function` &&
                  t !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(o, r, a));
                break a;
              }
              ((T = !0),
                n in e
                  ? (e[n] = r)
                  : !0 === r
                    ? e.setAttribute(n, ``)
                    : cn(e, n, r));
            }
          return;
      }
      T = !0;
    }
    function np(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          ($(`error`, e), $(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    ep(e, t, o, s, n, null);
                }
            }
          (a && ep(e, t, `srcSet`, n.srcSet, n, null),
            r && ep(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          $(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    ep(e, t, r, d, n, null);
                }
            }
          vn(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in ($(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  ep(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && bn(e, !!r, n, !0) : bn(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in ($(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  ep(e, t, s, c, n, null);
              }
          Sn(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  ep(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          ($(`beforetoggle`, e), $(`toggle`, e), $(`cancel`, e), $(`close`, e));
          break;
        case `iframe`:
        case `object`:
          $(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < Rf.length; r++) $(Rf[r], e);
          break;
        case `image`:
          ($(`error`, e), $(`load`, e));
          break;
        case `details`:
          $(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          ($(`error`, e), $(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  ep(e, t, u, r, n, null);
              }
          return;
        default:
          if (Dn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && tp(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && ep(e, t, c, r, n, null));
    }
    var rp = {};
    function ip(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || ep(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  (m !== f && (T = !0), (o = m));
                  break;
                case `name`:
                  (m !== f && (T = !0), (a = m));
                  break;
                case `checked`:
                  (m !== f && (T = !0), (u = m));
                  break;
                case `defaultChecked`:
                  (m !== f && (T = !0), (d = m));
                  break;
                case `value`:
                  (m !== f && (T = !0), (s = m));
                  break;
                case `defaultValue`:
                  (m !== f && (T = !0), (c = m));
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && ep(e, t, p, m, r, f);
              }
          }
          _n(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || ep(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  (o !== l && (T = !0), (p = o));
                  break;
                case `defaultValue`:
                  (o !== l && (T = !0), (c = o));
                  break;
                case `multiple`:
                  (o !== l && (T = !0), (s = o));
                default:
                  o !== l && ep(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? bn(e, !!n, n ? [] : ``, !1) : bn(e, !!n, t, !0))
              : bn(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  ep(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  (a !== o && (T = !0), (p = a));
                  break;
                case `defaultValue`:
                  (a !== o && (T = !0), (m = a));
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && ep(e, t, s, a, r, o);
              }
          xn(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  ep(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  (p !== m && (T = !0),
                    (e.selected =
                      p && typeof p != `function` && typeof p != `symbol`));
                  break;
                default:
                  ep(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                ep(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  ep(e, t, u, p, r, m);
              }
          return;
        default:
          if (Dn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  tp(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  tp(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            ep(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            ep(e, t, f, p, r, m));
    }
    function ap(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && ap(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                ap(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var sp = null,
      cp = null;
    function lp(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function fp(e, t, n, r) {
      return (
        (n = lp(n).createElement(e)),
        (n[It] = r),
        (n[Lt] = t),
        np(n, e, t),
        Xt(n),
        n
      );
    }
    function pp(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var mp = null;
    function hp() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== mp && ((mp = e), !0)
        : ((mp = null), !1);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0,
      _p = typeof clearTimeout == `function` ? clearTimeout : void 0,
      vp = typeof Promise == `function` ? Promise : void 0,
      yp =
        typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp,
      bp =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : vp === void 0
            ? gp
            : function (e) {
                return vp.resolve(null).then(e).catch(xp);
              };
    function xp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Sp(e) {
      return e === `head`;
    }
    function Cp(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Hh(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _m(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), _m(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[Ut] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && _m(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Hh(t);
    }
    function wp(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function Tp(e, t, n) {
      if (
        ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
        (e.style.viewTransitionName = t),
        n != null && (e.style.viewTransitionClass = n),
        (n = getComputedStyle(e)),
        n.display === `inline`)
      ) {
        if (((t = e.getClientRects()), t.length === 1)) var r = 1;
        else
          for (var i = (r = 0); i < t.length; i++) {
            var a = t[i];
            0 < a.width && 0 < a.height && r++;
          }
        r === 1 &&
          ((e = e.style),
          (e.display = t.length === 1 ? `inline-block` : `block`),
          (e.marginTop = `-` + n.paddingTop),
          (e.marginBottom = `-` + n.paddingBottom));
      }
    }
    function Ep(e, t) {
      ((e = e.style), (t = t.style));
      var n =
        t == null
          ? null
          : t.hasOwnProperty(`viewTransitionName`)
            ? t.viewTransitionName
            : t.hasOwnProperty(`view-transition-name`)
              ? t[`view-transition-name`]
              : null;
      ((e.viewTransitionName =
        n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        (n =
          t == null
            ? null
            : t.hasOwnProperty(`viewTransitionClass`)
              ? t.viewTransitionClass
              : t.hasOwnProperty(`view-transition-class`)
                ? t[`view-transition-class`]
                : null),
        (e.viewTransitionClass =
          n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        e.display === `inline-block` &&
          (t == null
            ? (e.display = e.margin = ``)
            : ((n = t.display),
              (e.display = n == null || typeof n == `boolean` ? `` : n),
              (n = t.margin),
              n == null
                ? ((n = t.hasOwnProperty(`marginTop`)
                    ? t.marginTop
                    : t[`margin-top`]),
                  (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
                  (t = t.hasOwnProperty(`marginBottom`)
                    ? t.marginBottom
                    : t[`margin-bottom`]),
                  (e.marginBottom =
                    t == null || typeof t == `boolean` ? `` : t))
                : (e.margin = n))));
    }
    function Dp(e, t, n) {
      return (
        (n = n.ownerDocument.defaultView),
        {
          rect: e,
          abs: t.position === `absolute` || t.position === `fixed`,
          clip:
            t.clipPath !== `none` ||
            t.overflow !== `visible` ||
            t.filter !== `none` ||
            t.mask !== `none` ||
            t.mask !== `none` ||
            t.borderRadius !== `0px`,
          view:
            0 <= e.bottom &&
            0 <= e.right &&
            e.top <= n.innerHeight &&
            e.left <= n.innerWidth,
        }
      );
    }
    function Op(e) {
      return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
    }
    function kp(e) {
      var t = e.getBoundingClientRect();
      t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
      var n = getComputedStyle(e);
      return Dp(t, n, e);
    }
    function Ap(e) {
      return e.documentElement.clientHeight;
    }
    function jp(e) {
      (this.addEventListener(`load`, e), this.addEventListener(`error`, e));
    }
    function Mp(e, t, n, r, i, a, o, s, c) {
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      try {
        var u = l.startViewTransition({
          update: function () {
            var t = l.defaultView,
              n = t.navigation && t.navigation.transition,
              o = l.fonts.status;
            r();
            var s = [];
            if (
              (o === `loaded` &&
                (Ap(l), l.fonts.status === `loading` && s.push(l.fonts.ready)),
              (o = s.length),
              e !== null)
            )
              for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
                var f = c[d];
                if (!f.complete) {
                  var p = f.getBoundingClientRect();
                  if (
                    0 < p.bottom &&
                    0 < p.right &&
                    p.top < t.innerHeight &&
                    p.left < t.innerWidth
                  ) {
                    if (((u += Xm(f)), u > $m)) {
                      s.length = o;
                      break;
                    }
                    ((f = new Promise(jp.bind(f))), s.push(f));
                  }
                }
              }
            if (0 < s.length)
              return (
                (t = Promise.race([
                  Promise.all(s),
                  new Promise(function (e) {
                    return setTimeout(e, 500);
                  }),
                ]).then(i, i)),
                (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
              );
            if ((i(), n)) return n.finished.then(a, a);
            a();
          },
          types: n,
        });
        l.__reactViewTransition = u;
        var d = [];
        return (
          u.ready.then(
            function () {
              for (
                var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t],
                  r = n.effect,
                  i = r.pseudoElement;
                if (i != null && i.startsWith(`::view-transition`)) {
                  (d.push(n), (n = r.getKeyframes()));
                  for (var a = (i = void 0), s = !0, c = 0; c < n.length; c++) {
                    var u = n[c],
                      f = u.width;
                    if (i === void 0) i = f;
                    else if (i !== f) {
                      s = !1;
                      break;
                    }
                    if (((f = u.height), a === void 0)) a = f;
                    else if (a !== f) {
                      s = !1;
                      break;
                    }
                    (delete u.width,
                      delete u.height,
                      u.transform === `none` && delete u.transform);
                  }
                  s &&
                    i !== void 0 &&
                    a !== void 0 &&
                    (r.setKeyframes(n),
                    (s = getComputedStyle(r.target, r.pseudoElement)),
                    s.width !== i || s.height !== a) &&
                    ((s = n[0]),
                    (s.width = i),
                    (s.height = a),
                    (s = n[n.length - 1]),
                    (s.width = i),
                    (s.height = a),
                    r.setKeyframes(n));
                }
              }
              o();
            },
            function (e) {
              l.__reactViewTransition === u && (l.__reactViewTransition = null);
              try {
                if (typeof e == `object` && e)
                  switch (e.name) {
                    case `InvalidStateError`:
                      (e.message ===
                        `View transition was skipped because document visibility state is hidden.` ||
                        e.message ===
                          `Skipping view transition because document visibility state has become hidden.` ||
                        e.message ===
                          `Skipping view transition because viewport size changed.` ||
                        e.message ===
                          `Transition was aborted because of invalid state`) &&
                        (e = null);
                  }
                e !== null && c(e);
              } finally {
                (r(), i(), o());
              }
            },
          ),
          u.finished.finally(function () {
            for (var e = 0; e < d.length; e++) d[e].cancel();
            (l.__reactViewTransition === u && (l.__reactViewTransition = null),
              s());
          }),
          u
        );
      } catch {
        return (r(), i(), o(), null);
      }
    }
    function Np(e, t) {
      ((this._scope = document.documentElement),
        (this._selector = `::view-transition-` + e + `(` + t + `)`));
    }
    ((Np.prototype.animate = function (e, t) {
      return (
        (t = typeof t == `number` ? { duration: t } : S({}, t)),
        (t.pseudoElement = this._selector),
        this._scope.animate(e, t)
      );
    }),
      (Np.prototype.getAnimations = function () {
        for (
          var e = this._scope,
            t = this._selector,
            n = e.getAnimations({ subtree: !0 }),
            r = [],
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i].effect;
          a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
        }
        return r;
      }),
      (Np.prototype.getComputedStyle = function () {
        return getComputedStyle(this._scope, this._selector);
      }));
    function Pp(e) {
      return {
        name: e,
        group: new Np(`group`, e),
        imagePair: new Np(`image-pair`, e),
        old: new Np(`old`, e),
        new: new Np(`new`, e),
      };
    }
    function Fp(e) {
      ((this._fragmentFiber = e),
        (this._observers = this._eventListeners = null));
    }
    Fp.prototype.addEventListener = function (e, t, n) {
      var r = null,
        i = null;
      if (!(
        n != null &&
        typeof n != `boolean` &&
        ((r = n.signal || null), r !== null && r.aborted)
      )) {
        this._eventListeners === null && (this._eventListeners = []);
        var a = this._eventListeners;
        if (Bp(a, e, t, n) === -1) {
          var o = this,
            s = t;
          (n != null &&
            typeof n != `boolean` &&
            !0 === n.once &&
            (s = function (r) {
              (o.removeEventListener(e, t, n),
                typeof t == `function` ? t.call(this, r) : t.handleEvent(r));
            }),
            r !== null &&
              ((i = o.removeEventListener.bind(o, e, t, n)),
              r.addEventListener(`abort`, i, { once: !0 }),
              (i = r.removeEventListener.bind(r, `abort`, i))),
            (r = Rp(n)),
            a.push({
              type: e,
              listener: t,
              optionsOrUseCapture: n,
              attachedListener: s,
              cleanup: i,
            }),
            h(this._fragmentFiber.child, !1, Ip, e, s, r));
        }
        this._eventListeners = a;
      }
    };
    function Ip(e, t, n, r) {
      return (b(e).addEventListener(t, n, r), !1);
    }
    Fp.prototype.removeEventListener = function (e, t, n) {
      var r = this._eventListeners;
      if (r !== null && ((t = Bp(r, e, t, n)), t !== -1)) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        ((i = Rp(i.optionsOrUseCapture)),
          h(this._fragmentFiber.child, !1, Lp, e, n, i),
          r.splice(t, 1),
          a !== null && a());
      }
    };
    function Lp(e, t, n, r) {
      return (b(e).removeEventListener(t, n, r), !1);
    }
    function Rp(e) {
      return e != null &&
        typeof e != `boolean` &&
        (!0 === e.once || e.signal instanceof AbortSignal)
        ? { capture: e.capture, passive: e.passive }
        : e;
    }
    function zp(e) {
      return e == null
        ? `c=0`
        : typeof e == `boolean`
          ? `c=` + (e ? `1` : `0`)
          : `c=` + (e.capture ? `1` : `0`);
    }
    function Bp(e, t, n, r) {
      if (e.length === 0) return -1;
      r = zp(r);
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r)
          return i;
      }
      return -1;
    }
    ((Fp.prototype.dispatchEvent = function (e) {
      var t = g(this._fragmentFiber);
      if (t === null) return !0;
      t = b(t);
      var n = this._eventListeners;
      if ((n !== null && 0 < n.length) || !e.bubbles) {
        var r =
          t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (n)
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.addEventListener(
              a.type,
              a.attachedListener,
              Rp(a.optionsOrUseCapture),
            );
          }
        if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
          for (i = 0; i < n.length; i++)
            ((a = n[i]),
              r.removeEventListener(
                a.type,
                a.attachedListener,
                Rp(a.optionsOrUseCapture),
              ));
        return (t.removeChild(r), e);
      }
      return t.dispatchEvent(e);
    }),
      (Fp.prototype.focus = function (e) {
        h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
      }));
    function Vp(e, t) {
      return e.tag !== 6 && ((e = b(e)), pm(e, t));
    }
    Fp.prototype.focusLast = function (e) {
      var t = [];
      h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
      for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
    };
    function Hp(e, t) {
      return (t.push(e), !1);
    }
    Fp.prototype.blur = function () {
      var e = g(this._fragmentFiber);
      e !== null &&
        ((e = b(e)),
        (e = lp(e).activeElement),
        e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
    };
    function Up(e, t) {
      return (
        e.tag !== 6 &&
        ((e = b(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1)
      );
    }
    Fp.prototype.observeUsing = function (e) {
      (this._observers === null && (this._observers = new Set()),
        this._observers.add(e),
        h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
    };
    function Wp(e, t) {
      return e.tag !== 6 && ((e = b(e)), t.observe(e), !1);
    }
    Fp.prototype.unobserveUsing = function (e) {
      var t = this._observers;
      if (t !== null && t.has(e)) {
        (t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
        for (var n = (t = 0); n < Kp.length; n++) {
          var r = Kp[n];
          r.fragmentInstance === this && r.observer === e
            ? e.unobserve(r.instance)
            : (Kp[t++] = r);
        }
        Kp.length = t;
      }
    };
    function Gp(e, t) {
      return e.tag !== 6 && ((e = b(e)), t.unobserve(e), !1);
    }
    var Kp = [],
      qp = !1;
    function Jp(e, t, n) {
      (Kp.push({ fragmentInstance: e, observer: t, instance: n }),
        qp ||
          ((qp = !0),
          mm(function () {
            qp = !1;
            var e = Kp;
            Kp = [];
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              n.observer.unobserve(n.instance);
            }
          })));
    }
    Fp.prototype.getClientRects = function () {
      var e = [];
      return (h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e);
    };
    function Yp(e, t) {
      if (e.tag === 6) {
        e = e.stateNode;
        var n = e.ownerDocument.createRange();
        (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
      } else ((e = b(e)), t.push.apply(t, e.getClientRects()));
      return !1;
    }
    ((Fp.prototype.getRootNode = function (e) {
      var t = g(this._fragmentFiber);
      return t === null ? this : b(t).getRootNode(e);
    }),
      (Fp.prototype.compareDocumentPosition = function (e) {
        var t = g(this._fragmentFiber);
        if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var n = [];
        h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
        var r = b(t);
        if (n.length === 0) {
          if (((n = r), _(this._fragmentFiber))) {
            a: {
              for (t = this._fragmentFiber.return; t !== null;) {
                if (t.tag === 4) {
                  t = t.stateNode.containerInfo;
                  break a;
                }
                if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                t = t.return;
              }
              t = null;
            }
            t != null && (n = t);
          }
          t = this._fragmentFiber;
          var i = (r = n.compareDocumentPosition(e));
          return (
            n === e
              ? (i = Node.DOCUMENT_POSITION_CONTAINS)
              : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
                ((n = v(t)[1]),
                n === null
                  ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                  : ((e = b(n).compareDocumentPosition(e)),
                    (i =
                      e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                        ? Node.DOCUMENT_POSITION_FOLLOWING
                        : Node.DOCUMENT_POSITION_PRECEDING))),
            (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          );
        }
        ((t = b(n[0])), (i = b(n[n.length - 1])));
        var a = _(this._fragmentFiber) ? t.parentElement : r;
        if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        ((r =
          a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
          (a =
            a.compareDocumentPosition(i) &
            Node.DOCUMENT_POSITION_CONTAINED_BY));
        var o = t.compareDocumentPosition(e),
          s = i.compareDocumentPosition(e),
          c =
            o & Node.DOCUMENT_POSITION_CONTAINED_BY ||
            s & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return (
          (s =
            r &&
            a &&
            o & Node.DOCUMENT_POSITION_FOLLOWING &&
            s & Node.DOCUMENT_POSITION_PRECEDING),
          (t =
            (r && t === e) || (a && i === e) || c || s
              ? Node.DOCUMENT_POSITION_CONTAINED_BY
              : (!r && t === e) || (!a && i === e)
                ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                : o),
          t & Node.DOCUMENT_POSITION_DISCONNECTED ||
          t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
          Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)
            ? t
            : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        );
      }));
    function Xp(e, t, n, r, i) {
      var a = Kt(i);
      if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if ((n = !!a))
          a: {
            for (; a !== null;) {
              if (a.tag === 7 && (a === t || a.alternate === t)) {
                n = !0;
                break a;
              }
              a = a.return;
            }
            n = !1;
          }
        return n;
      }
      if (e & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a === null)
          return (
            (a = i.ownerDocument),
            i === a || i === a.documentElement || i === a.body
          );
        a: {
          for (a = t, t = g(t); a !== null;) {
            if (!(
              (a.tag !== 5 && a.tag !== 3 && a.tag !== 27) ||
              (a !== t && a.alternate !== t)
            )) {
              a = !0;
              break a;
            }
            a = a.return;
          }
          a = !1;
        }
        return a;
      }
      return e & Node.DOCUMENT_POSITION_PRECEDING
        ? ((t = !!a) &&
            !(t = a === n) &&
            ((t = ie(n, a, re)),
            t === null
              ? (t = !1)
              : (h(t, !0, te, a, n), (a = ee), (ee = null), (t = a !== null))),
          t)
        : e & Node.DOCUMENT_POSITION_FOLLOWING
          ? ((t = !!a) &&
              !(t = a === r) &&
              ((t = ie(r, a, re)),
              t === null
                ? (t = !1)
                : (h(t, !0, ne, a, r),
                  (a = ee),
                  (x = ee = null),
                  (t = a !== null))),
            t)
          : !1;
    }
    function Zp(e, t) {
      var n = e.ownerDocument.createRange();
      (n.selectNodeContents(e),
        (e = n.getBoundingClientRect()),
        window.scrollTo(
          window.scrollX + e.left,
          t
            ? window.scrollY + e.top
            : window.scrollY + e.bottom - window.innerHeight,
        ));
    }
    Fp.prototype.scrollIntoView = function (e) {
      if (typeof e == `object`) throw Error(i(566));
      var t = [];
      h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
      var n = !1 !== e;
      if (t.length === 0) {
        var r = v(this._fragmentFiber);
        if (
          ((r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1]),
          r === null)
        )
          return;
        if (r.tag === 6) {
          ((e = b(r)), Zp(e, n));
          return;
        }
        if (((r = b(r)), r.nodeType !== 9)) {
          if (r.nodeType === 11) {
            ((n = `host` in r ? r.host : null),
              n !== null && n.scrollIntoView(e));
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        var a = t[r];
        (a.tag === 6 ? ((a = b(a)), Zp(a, n)) : b(a).scrollIntoView(e),
          (r += n ? -1 : 1));
      }
    };
    function Qp(e, t) {
      return ((e = b(e)), $p(e, t), !1);
    }
    function $p(e, t) {
      ((e.reactFragments ??= new Set()), e.reactFragments.add(t));
    }
    function em(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.addEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            for (var r = 0, i = 0; i < Kp.length; i++) {
              var a = Kp[i];
              (a.fragmentInstance !== t ||
                a.observer !== n ||
                a.instance !== e) &&
                (Kp[r++] = a);
            }
            ((Kp.length = r), n.observe(e));
          }),
        $p(e, t));
    }
    function tm(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.removeEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            typeof n.rootMargin == `string` ? Jp(t, n, e) : n.unobserve(e);
          }),
        e.reactFragments != null && e.reactFragments.delete(t));
    }
    function nm(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nm(n), Gt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rm(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[Ut])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = lm(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function im(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function am(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function om(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function sm(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function cm(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var um = null;
    function dm(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lm(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fm(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pm(e, t) {
      function n() {
        r = !0;
      }
      if (e.ownerDocument.activeElement === e) return !0;
      var r = !1;
      try {
        (e.ownerDocument.addEventListener(`focus`, n, !0),
          (e.focus || HTMLElement.prototype.focus).call(e, t));
      } finally {
        e.ownerDocument.removeEventListener(`focus`, n, !0);
      }
      return r;
    }
    function mm(e) {
      yp(function () {
        yp(function (t) {
          return e(t);
        });
      });
    }
    function hm(e, t, n) {
      switch (((t = lp(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gm(e, t, n) {
      for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && i != null && ep(e, t, r, null, rp, i);
      }
      (n.dangerouslySetInnerHTML != null && (e.textContent = ``),
        e.onclick === jn && (e.onclick = null),
        Gt(e));
    }
    function _m(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Gt(e);
    }
    var vm = new Map(),
      ym = new Set();
    function bm(e) {
      if (typeof e.getRootNode == `function`) {
        var t = e.getRootNode();
        if (t.nodeType === 9 || t.nodeType === 11) return t;
      }
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    var xm = De.d;
    De.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e = xm.f(),
        t = zd();
      return e || t;
    }
    function Cm(e) {
      var t = qt(e);
      t !== null && t.tag === 5 && t.type === `form` ? rc(t) : xm.r(e);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e, t, n) {
      var r = wm;
      if (r && typeof t == `string` && t) {
        var i = gn(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          ym.has(i) ||
            (ym.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              np(t, `link`, e),
              Xt(t),
              r.head.appendChild(t))));
      }
    }
    function Em(e) {
      (xm.D(e), Tm(`dns-prefetch`, e, null));
    }
    function Dm(e, t) {
      (xm.C(e, t), Tm(`preconnect`, e, t));
    }
    function Om(e, t, n) {
      xm.L(e, t, n);
      var r = wm;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + gn(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + gn(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + gn(n.imageSizes) + `"]`))
          : (i += `[href="` + gn(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pm(e);
            break;
          case `script`:
            a = Rm(e);
        }
        if (!(
          vm.has(a) ||
          ((e = S(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          vm.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Fm(a))) ||
            (t === `script` && r.querySelector(zm(a))))
        )) {
          var o = r.createElement(`link`);
          (np(o, `link`, e),
            t === `style` &&
              ((o[Wt] = !0),
              (o.onload = o.onerror =
                function () {
                  Zt(o);
                })),
            Xt(o),
            r.head.appendChild(o));
        }
      }
    }
    function km(e, t) {
      xm.m(e, t);
      var n = wm;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            gn(r) +
            `"][href="` +
            gn(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rm(e);
        }
        if (
          !vm.has(a) &&
          ((e = S({ rel: `modulepreload`, href: e }, t)),
          vm.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zm(a))) return;
          }
          ((r = n.createElement(`link`)),
            np(r, `link`, e),
            Xt(r),
            n.head.appendChild(r));
        }
      }
    }
    function Am(e, t, n) {
      xm.S(e, t, n);
      var r = wm;
      if (r && e) {
        var i = Yt(r).hoistableStyles,
          a = Pm(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Fm(a)))) s.loading = 5;
          else {
            ((e = S({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = vm.get(a)) && Hm(e, n));
            var c = (o = r.createElement(`link`));
            (Xt(c),
              np(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vm(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function jm(e, t) {
      xm.X(e, t);
      var n = wm;
      if (n && e) {
        var r = Yt(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = S({ src: e, async: !0 }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Xt(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mm(e, t) {
      xm.M(e, t);
      var n = wm;
      if (n && e) {
        var r = Yt(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = S({ src: e, async: !0, type: `module` }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Xt(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nm(e, t, n, r) {
      var a = (a = Ie.current) ? bm(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((n = Pm(n.href)),
              (t = Yt(a).hoistableStyles),
              (r = t.get(n)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                t.set(n, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Pm(n.href);
            var o = Yt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Fm(e)))
                  ? o._p || ((s.instance = o), (s.state.loading = 5))
                  : ((o = vm.get(e)),
                    o ||
                      ((o = {
                        rel: `preload`,
                        as: `style`,
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      vm.set(e, o)),
                    Lm(a, e, o, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((n = Rm(n)),
                (t = Yt(a).hoistableScripts),
                (r = t.get(n)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  t.set(n, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Pm(e) {
      return `href="` + gn(e) + `"`;
    }
    function Fm(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Im(e) {
      return S({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Lm(e, t, n, r) {
      if ((t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))) {
        if (!0 !== t[Wt]) {
          r.loading = 1;
          return;
        }
      } else
        ((t = e.createElement(`link`)),
          (t[Wt] = !0),
          (t.onload = t.onerror = Zt.bind(null, t)),
          np(t, `link`, n),
          Xt(t),
          e.head.appendChild(t));
      ((r.preload = t),
        t.addEventListener(`load`, function () {
          return (r.loading |= 1);
        }),
        t.addEventListener(`error`, function () {
          return (r.loading |= 2);
        }));
    }
    function Rm(e) {
      return `[src="` + gn(e) + `"]`;
    }
    function zm(e) {
      return `script[async]` + e;
    }
    function Bm(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + gn(n.href) + `"]`);
            if (r) return ((t.instance = r), Xt(r), r);
            var a = S({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Xt(r),
              np(r, `style`, a),
              Vm(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Pm(n.href);
            var o = e.querySelector(Fm(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Xt(o), o);
            ((r = Im(n)),
              (a = vm.get(a)) && Hm(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Xt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              np(o, `link`, r),
              (t.state.loading |= 4),
              Vm(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rm(n.src)),
              (a = e.querySelector(zm(o)))
                ? ((t.instance = a), Xt(a), a)
                : ((r = n),
                  (a = vm.get(o)) && ((r = S({}, n)), Um(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Xt(a),
                  np(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vm(r, n.precedence, e));
      return t.instance;
    }
    function Vm(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Hm(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Um(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wm = null;
    function Gm(e, t, n) {
      if (Wm === null) {
        var r = new Map(),
          i = (Wm = new Map());
        i.set(n, r);
      } else ((i = Wm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[Ut] ||
            a[It] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Km(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function qm(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jm(e, t) {
      return (
        e === `img` &&
        t.src != null &&
        t.src !== `` &&
        t.onLoad == null &&
        t.loading !== `lazy`
      );
    }
    function Ym(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xm(e) {
      return (
        (e.width || 100) *
        (e.height || 100) *
        (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) *
        0.25
      );
    }
    function Zm(e, t) {
      typeof t.decode == `function` &&
        (e.imgCount++,
        t.complete || ((e.imgBytes += Xm(t)), e.suspenseyImages.push(t)),
        (e = rh.bind(e)),
        t.decode().then(e, e));
    }
    function Qm(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pm(r.href),
            a = t.querySelector(Fm(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = nh.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Xt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Im(r)),
            (i = vm.get(i)) && Hm(r, i),
            (a = a.createElement(`link`)),
            Xt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            np(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = nh.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var $m = 0;
    function eh(e, t) {
      return (
        e.stylesheets && e.count === 0 && ah(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && ah(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > $m ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function th(e) {
      if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
        if (e.stylesheets) ah(e, e.stylesheets);
        else if (e.unsuspend) {
          var t = e.unsuspend;
          ((e.unsuspend = null), t());
        }
      }
    }
    function nh() {
      (this.count--, th(this));
    }
    function rh() {
      (this.imgCount--, th(this));
    }
    var ih = null;
    function ah(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (ih = new Map()),
          t.forEach(oh, e),
          (ih = null),
          nh.call(e)));
    }
    function oh(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ih.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ih.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = nh.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var sh = {
      $$typeof: de,
      Provider: null,
      Consumer: null,
      _currentValue: Oe,
      _currentValue2: Oe,
      _threadCount: 0,
    };
    function ch(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Tt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Tt(0)),
        (this.hiddenUpdates = Tt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.transitionTypes = null),
        (this.incompleteTransitions = new Map()));
    }
    function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ch(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = Bi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = za()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        xo(a),
        e
      );
    }
    function uh(e) {
      return e ? ((e = Ri), e) : Ri;
    }
    function dh(e, t, n, r, i, a) {
      ((i = uh(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Co(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = wo(e, r, t)),
        n !== null && (Fd(n, e, t), To(n, e, t)));
    }
    function fh(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ph(e, t) {
      (fh(e, t), (e = e.alternate) && fh(e, t));
    }
    function mh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ii(e, 67108864);
        (t !== null && Fd(t, e, 67108864), ph(e, 67108864));
      }
    }
    function hh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Md();
        t = jt(t);
        var n = Ii(e, t);
        (n !== null && Fd(n, e, t), ph(e, t));
      }
    }
    var gh = !0;
    function _h(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = De.p;
      try {
        ((De.p = 2), yh(e, t, n, r));
      } finally {
        ((De.p = a), (w.T = i));
      }
    }
    function vh(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = De.p;
      try {
        ((De.p = 8), yh(e, t, n, r));
      } finally {
        ((De.p = a), (w.T = i));
      }
    }
    function yh(e, t, n, r) {
      if (gh) {
        var i = bh(r);
        if (i === null) (Gf(e, t, r, xh, n), Mh(e, r));
        else if (Ph(i, e, t, n, r)) r.stopPropagation();
        else if ((Mh(e, r), t & 4 && -1 < jh.indexOf(e))) {
          for (; i !== null;) {
            var a = qt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = yt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - ft(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (Tf(a), !(K & 6) && ((_d = et() + 500), Ef(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = Ii(a, 2)), s !== null && Fd(s, a, 2), zd(), ph(a, 2));
              }
            if (((a = bh(r)), a === null && Gf(e, t, r, xh, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Gf(e, t, r, null, n);
      }
    }
    function bh(e) {
      return ((e = Nn(e)), Sh(e));
    }
    var xh = null;
    function Sh(e) {
      if (((xh = null), (e = Kt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((xh = e), null);
    }
    function Ch(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (tt()) {
            case nt:
              return 2;
            case rt:
              return 8;
            case it:
            case at:
              return 32;
            case ot:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = !1,
      Th = null,
      Eh = null,
      Dh = null,
      Oh = new Map(),
      kh = new Map(),
      Ah = [],
      jh =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Mh(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t.pointerId);
      }
    }
    function Nh(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = qt(t)), t !== null && mh(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Ph(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Th = Nh(Th, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((Eh = Nh(Eh, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Dh = Nh(Dh, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Fh(e) {
      var t = Kt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                Pt(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                Pt(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = bh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Mn = r), n.target.dispatchEvent(r), (Mn = null));
        } else return ((t = qt(n)), t !== null && mh(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Lh(e, t, n) {
      Ih(e) && n.delete(t);
    }
    function Rh() {
      ((wh = !1),
        Th !== null && Ih(Th) && (Th = null),
        Eh !== null && Ih(Eh) && (Eh = null),
        Dh !== null && Ih(Dh) && (Dh = null),
        Oh.forEach(Lh),
        kh.forEach(Lh));
    }
    function zh(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        wh ||
          ((wh = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e) {
      Bh !== e &&
        ((Bh = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Bh === e && (Bh = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Sh(r || n) === null) continue;
              break;
            }
            var a = qt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              nc(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Hh(e) {
      function t(t) {
        return zh(t, e);
      }
      (Th !== null && zh(Th, e),
        Eh !== null && zh(Eh, e),
        Dh !== null && zh(Dh, e),
        Oh.forEach(t),
        kh.forEach(t));
      for (var n = 0; n < Ah.length; n++) {
        var r = Ah[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Ah.length && ((n = Ah[0]), n.blockedOn === null);)
        (Fh(n), n.blockedOn === null && Ah.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[Lt] || null;
          if (typeof a == `function`) o || Vh(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[Lt] || null))) s = o.formAction;
              else if (Sh(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Vh(n));
          }
        }
    }
    function Uh() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Wh(e) {
      this._internalRoot = e;
    }
    ((Gh.prototype.render = Wh.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        dh(n, Md(), e, t, null, null);
      }),
      (Gh.prototype.unmount = Wh.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (dh(e.current, 2, null, e, null, null), zd(), (t[Rt] = null));
          }
        }));
    function Gh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Nt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
        (Ah.splice(n, 0, e), n === 0 && Fh(e));
      }
    };
    var Kh = n.version;
    if (Kh !== `19.3.0`) throw Error(i(527, Kh, `19.3.0`));
    De.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var qh = {
      bundleType: 0,
      version: `19.3.0`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: w,
      reconcilerVersion: `19.3.0`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber)
        try {
          ((lt = Jh.inject(qh)), (ut = Jh));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Cc,
        s = wc,
        c = Tc;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh)),
        (e[Rt] = t.current),
        Uf(e),
        new Wh(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = c(u(), 1),
  v = c(g(), 1),
  y = [
    {
      id: `red-classic`,
      name: `Red Classic`,
      line: `Full Flavour`,
      tagline: `The full-flavour legend`,
      burn: 1,
      burnLabel: `Medium burn`,
      stick: {
        paper: `#F7F4EC`,
        tip: `cork`,
        tipColor: `#D08A3E`,
        rings: [`#C9A45C`],
        print: `#C8102E`,
        slim: !1,
      },
      pack: {
        style: `roof`,
        body: `#F7F5EF`,
        accent: `#C8102E`,
        ink: `#1B1B1B`,
        foil: `#C9A45C`,
      },
      smoke: { smoke: `#D3CCC4`, pale: `#EFEAE4` },
    },
    {
      id: `gold-lights`,
      name: `Gold Lights`,
      line: `Smooth`,
      tagline: `Smooth & easy going`,
      burn: 0.85,
      burnLabel: `Slow burn`,
      stick: {
        paper: `#FAF8F2`,
        tip: `cork`,
        tipColor: `#DDB37A`,
        rings: [`#C9A45C`, `#C9A45C`],
        print: `#B08A2E`,
        slim: !1,
      },
      pack: {
        style: `roof`,
        body: `#F9F7F0`,
        accent: `#C9A227`,
        ink: `#3A2E10`,
        foil: `#E6CD7A`,
      },
      smoke: { smoke: `#E3DCCB`, pale: `#F7F2E6`, intensity: 0.85, life: 0.9 },
    },
    {
      id: `arctic-menthol`,
      name: `Arctic`,
      line: `Menthol`,
      tagline: `Ice-cold menthol hit`,
      burn: 0.9,
      burnLabel: `Slow burn`,
      stick: {
        paper: `#F4FAF7`,
        tip: `#EAF2EE`,
        rings: [`#0E7C66`],
        print: `#0E7C66`,
        slim: !1,
      },
      pack: {
        style: `band`,
        body: `#0E7C66`,
        accent: `#F4FAF7`,
        ink: `#F4FAF7`,
        foil: `#9FD8C8`,
      },
      smoke: { smoke: `#C3DDD5`, pale: `#E8F5F1`, curl: 0.8 },
    },
    {
      id: `midnight-black`,
      name: `Midnight`,
      line: `Black Label`,
      tagline: `Premium black label`,
      burn: 1.1,
      burnLabel: `Fast burn`,
      stick: {
        paper: `#2E2E31`,
        tip: `#161618`,
        rings: [`#C9A45C`],
        print: `#C9A45C`,
        slim: !1,
      },
      pack: {
        style: `crest`,
        body: `#151517`,
        accent: `#C9A45C`,
        ink: `#E6CD7A`,
        foil: `#C9A45C`,
      },
      smoke: { smoke: `#B5B6C4`, pale: `#DADBE6`, intensity: 1.15 },
    },
    {
      id: `desert-gold`,
      name: `Desert`,
      line: `Turkish Blend`,
      tagline: `Rich Turkish blend`,
      burn: 1,
      burnLabel: `Medium burn`,
      stick: {
        paper: `#F6F1E4`,
        tip: `cork`,
        tipColor: `#B97836`,
        rings: [],
        print: `#6B3E1E`,
        slim: !1,
      },
      pack: {
        style: `emblem`,
        body: `#D9B77B`,
        accent: `#6B3E1E`,
        ink: `#3E230F`,
        foil: `#F2DFB4`,
      },
      smoke: { smoke: `#D6C5AC`, pale: `#F0E5D4`, life: 1.1 },
    },
    {
      id: `silk-slims`,
      name: `Silk`,
      line: `Superslims`,
      tagline: `Elegant & slim`,
      burn: 0.8,
      burnLabel: `Slow burn`,
      stick: {
        paper: `#FBF8F3`,
        tip: `#F2E6EA`,
        rings: [`#D4718C`],
        print: `#D4718C`,
        slim: !0,
      },
      pack: {
        style: `slim`,
        body: `#FBF7F2`,
        accent: `#D4718C`,
        ink: `#5A2D3A`,
        foil: `#E9C3CF`,
      },
      smoke: { smoke: `#E6D1DA`, pale: `#F7ECF1`, intensity: 0.8 },
    },
    {
      id: `clove-spice`,
      name: `Kretek`,
      line: `Clove`,
      tagline: `Sweet clove crackle`,
      burn: 1.15,
      burnLabel: `Fast burn`,
      stick: {
        paper: `#3A2418`,
        tip: `#1E120C`,
        rings: [`#B8322A`],
        print: `#C9A45C`,
        slim: !1,
      },
      pack: {
        style: `band`,
        body: `#24160F`,
        accent: `#B8322A`,
        ink: `#F2DFB4`,
        foil: `#C9A45C`,
      },
      smoke: { smoke: `#C8B299`, pale: `#E9DCCB`, intensity: 1.2, curl: 1.3 },
    },
    {
      id: `royal-blue`,
      name: `Royal`,
      line: `King Size`,
      tagline: `Bold & deep`,
      burn: 1,
      burnLabel: `Medium burn`,
      stick: {
        paper: `#F7F8FB`,
        tip: `cork`,
        tipColor: `#C98B45`,
        rings: [`#1F3A8A`],
        print: `#1F3A8A`,
        slim: !1,
      },
      pack: {
        style: `crest`,
        body: `#1F3A8A`,
        accent: `#F2F4F8`,
        ink: `#F2F4F8`,
        foil: `#C9A45C`,
      },
      smoke: { smoke: `#C2CAE0`, pale: `#E5E9F5` },
    },
  ],
  b = (e) => y.find((t) => t.id === e) || y[0],
  ee = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  x = o((e, t) => {
    t.exports = ee();
  })();
function te({ onReset: e }) {
  return (0, x.jsxs)(`footer`, {
    className: `foot`,
    children: [
      (0, x.jsxs)(`p`, {
        className: `legal`,
        children: [
          `18+ · A simulation with no tobacco or nicotine.`,
          (0, x.jsx)(`br`, {}),
          `Smoking is injurious to health.`,
        ],
      }),
      (0, x.jsxs)(`a`, {
        className: `sibling`,
        href: `/hookah/`,
        rel: `noopener`,
        title: `Hookah Baar`,
        children: [
          (0, x.jsx)(`span`, {
            className: `ico`,
            "aria-hidden": `true`,
            children: `💨`,
          }),
          (0, x.jsx)(`span`, { className: `lbl`, children: `try hookah` }),
          (0, x.jsx)(`span`, {
            className: `arrow`,
            "aria-hidden": `true`,
            children: `↗`,
          }),
        ],
      }),
      (0, x.jsxs)(`button`, {
        id: `reset`,
        className: `foot-btn`,
        type: `button`,
        title: `Start over (R)`,
        onClick: e,
        children: [
          (0, x.jsx)(`span`, {
            className: `ico`,
            "aria-hidden": `true`,
            children: `↻`,
          }),
          (0, x.jsx)(`span`, { className: `lbl`, children: `reset` }),
        ],
      }),
      (0, x.jsxs)(`a`, {
        className: `made`,
        href: `https://www.linkedin.com/in/shishir0x/`,
        target: `_blank`,
        rel: `noopener`,
        children: [
          (0, x.jsxs)(`span`, {
            className: `lbl`,
            children: [
              `made with`,
              ` `,
              (0, x.jsx)(`span`, {
                className: `heart`,
                "aria-label": `love`,
                children: `♥`,
              }),
              ` `,
              `by shishir0x`,
            ],
          }),
          (0, x.jsx)(`svg`, {
            className: `li`,
            viewBox: `0 0 24 24`,
            width: `15`,
            height: `15`,
            "aria-hidden": `true`,
            children: (0, x.jsx)(`path`, {
              fill: `currentColor`,
              d: `M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z`,
            }),
          }),
          (0, x.jsx)(`span`, {
            className: `arrow`,
            "aria-hidden": `true`,
            children: `↗`,
          }),
        ],
      }),
    ],
  });
}
function ne({ size: e = 40 }) {
  return (0, x.jsxs)(`svg`, {
    className: `mark`,
    width: e,
    height: e,
    viewBox: `0 0 100 100`,
    "aria-hidden": `true`,
    children: [
      (0, x.jsx)(`circle`, {
        cx: `50`,
        cy: `50`,
        r: `27`,
        fill: `none`,
        stroke: `#FFFFE3`,
        strokeWidth: `9`,
      }),
      (0, x.jsx)(`circle`, {
        cx: `50`,
        cy: `50`,
        r: `27`,
        fill: `none`,
        stroke: `#6D8196`,
        strokeWidth: `3`,
        strokeDasharray: `26 20`,
      }),
      (0, x.jsxs)(`g`, {
        transform: `rotate(-35 50 50)`,
        children: [
          (0, x.jsx)(`rect`, {
            x: `22`,
            y: `45`,
            width: `56`,
            height: `10`,
            rx: `3`,
            fill: `#FFFFE3`,
          }),
          (0, x.jsx)(`rect`, {
            x: `22`,
            y: `45`,
            width: `16`,
            height: `10`,
            rx: `3`,
            fill: `#6D8196`,
          }),
          (0, x.jsx)(`rect`, {
            x: `74`,
            y: `45`,
            width: `5`,
            height: `10`,
            rx: `2`,
            fill: `#E0762E`,
          }),
        ],
      }),
    ],
  });
}
function re({ x: e, stick: t, id: n, slim: r }) {
  let i = r ? 7 : 10,
    a = t.tip === `cork`;
  return (0, x.jsxs)(`g`, {
    children: [
      (0, x.jsx)(`rect`, {
        x: e,
        y: 9,
        width: i,
        height: 30,
        rx: i / 2.4,
        fill: a ? `url(#cork-${n})` : t.tip,
      }),
      (0, x.jsx)(`rect`, {
        x: e,
        y: 9,
        width: i,
        height: 30,
        rx: i / 2.4,
        fill: `url(#round-${n})`,
      }),
      (0, x.jsx)(`ellipse`, {
        cx: e + i / 2,
        cy: 10.5,
        rx: i / 2 - 0.6,
        ry: 1.6,
        fill: `#F3ECDC`,
        opacity: `0.95`,
      }),
      t.rings.map((t, n) =>
        (0, x.jsx)(
          `rect`,
          { x: e, y: 33 - n * 2.2, width: i, height: 0.9, fill: t },
          n,
        ),
      ),
    ],
  });
}
function ie({ brand: e, x0: t, x1: n }) {
  let { pack: r } = e,
    i = n - t,
    a = (t + n) / 2,
    o = Math.min(
      r.style === `slim` ? 10 : 13.5,
      (i - 12) / (e.name.length * 0.78),
    );
  switch (r.style) {
    case `roof`:
      return (0, x.jsxs)(x.Fragment, {
        children: [
          (0, x.jsx)(`path`, {
            d: `M${t} 40 H${n} V104 L${a} 76 L${t} 104 Z`,
            fill: r.accent,
          }),
          (0, x.jsx)(`path`, {
            d: `M${t} 104 L${a} 76 L${n} 104`,
            fill: `none`,
            stroke: r.foil,
            strokeWidth: `0.8`,
          }),
          (0, x.jsx)(`circle`, {
            cx: a,
            cy: 58,
            r: 5.5,
            fill: `none`,
            stroke: r.body,
            strokeWidth: `0.9`,
            opacity: `0.9`,
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 60.2,
            textAnchor: `middle`,
            fontSize: `5.5`,
            fill: r.body,
            fontWeight: `700`,
            children: e.name[0],
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 120,
            textAnchor: `middle`,
            fontSize: o,
            fontWeight: `700`,
            letterSpacing: `0.6`,
            fill: r.ink,
            children: e.name.toUpperCase(),
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 130,
            textAnchor: `middle`,
            fontSize: `5.2`,
            letterSpacing: `1.4`,
            fill: r.accent,
            children: e.line.toUpperCase(),
          }),
        ],
      });
    case `band`:
      return (0, x.jsxs)(x.Fragment, {
        children: [
          (0, x.jsx)(`rect`, {
            x: t,
            y: 82,
            width: i,
            height: 26,
            fill: r.accent,
          }),
          (0, x.jsx)(`rect`, {
            x: t,
            y: 80,
            width: i,
            height: 1,
            fill: r.foil,
          }),
          (0, x.jsx)(`rect`, {
            x: t,
            y: 109,
            width: i,
            height: 1,
            fill: r.foil,
          }),
          (0, x.jsx)(`path`, {
            d: `M${t + 10} 62 q${i / 2 - 10} -14 ${i - 20} 0`,
            fill: `none`,
            stroke: r.foil,
            strokeWidth: `1.2`,
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 100,
            textAnchor: `middle`,
            fontSize: o,
            fontWeight: `700`,
            letterSpacing: `1`,
            fill: r.body,
            children: e.name.toUpperCase(),
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 124,
            textAnchor: `middle`,
            fontSize: `5.6`,
            letterSpacing: `1.6`,
            fill: r.ink,
            children: e.line.toUpperCase(),
          }),
        ],
      });
    case `crest`:
      return (0, x.jsxs)(x.Fragment, {
        children: [
          (0, x.jsx)(`rect`, {
            x: t + 5,
            y: 45,
            width: i - 10,
            height: 90,
            fill: `none`,
            stroke: r.accent,
            strokeWidth: `0.7`,
          }),
          (0, x.jsx)(`circle`, {
            cx: a,
            cy: 76,
            r: 14,
            fill: `none`,
            stroke: r.accent,
            strokeWidth: `1.2`,
          }),
          (0, x.jsx)(`path`, {
            d: `M${a - 7} 80 L${a - 8} 70 L${a - 3.5} 74 L${a} 67 L${a + 3.5} 74 L${a + 8} 70 L${a + 7} 80 Z`,
            fill: r.accent,
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 112,
            textAnchor: `middle`,
            fontSize: o,
            fontWeight: `600`,
            letterSpacing: `1.8`,
            fill: r.ink,
            children: e.name.toUpperCase(),
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 123,
            textAnchor: `middle`,
            fontSize: `5.2`,
            letterSpacing: `1.6`,
            fontStyle: `italic`,
            fill: r.accent,
            children: e.line,
          }),
        ],
      });
    case `emblem`:
      return (0, x.jsxs)(x.Fragment, {
        children: [
          (0, x.jsx)(`ellipse`, {
            cx: a,
            cy: 76,
            rx: 24,
            ry: 17,
            fill: r.accent,
          }),
          (0, x.jsx)(`ellipse`, {
            cx: a,
            cy: 76,
            rx: 21.5,
            ry: 14.5,
            fill: `none`,
            stroke: r.foil,
            strokeWidth: `0.7`,
          }),
          (0, x.jsx)(`circle`, { cx: a + 9, cy: 70, r: 3.5, fill: r.foil }),
          (0, x.jsx)(`path`, {
            d: `M${a - 16} 86 L${a - 5} 70 L${a + 4} 86 Z M${a - 2} 86 L${a + 6} 75 L${a + 14} 86 Z`,
            fill: r.body,
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 113,
            textAnchor: `middle`,
            fontSize: o,
            fontWeight: `700`,
            letterSpacing: `1.4`,
            fill: r.ink,
            children: e.name.toUpperCase(),
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 124,
            textAnchor: `middle`,
            fontSize: `5.2`,
            letterSpacing: `1.4`,
            fill: r.accent,
            children: e.line.toUpperCase(),
          }),
        ],
      });
    default:
      return (0, x.jsxs)(x.Fragment, {
        children: [
          (0, x.jsx)(`path`, {
            d: `M${t} 92 C${t + 14} 76 ${n - 14} 104 ${n} 84 V92 C${n - 14} 112 ${t + 14} 84 ${t} 100 Z`,
            fill: r.accent,
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 70,
            textAnchor: `middle`,
            fontSize: o,
            fontStyle: `italic`,
            fontWeight: `600`,
            letterSpacing: `0.8`,
            fill: r.ink,
            children: e.name,
          }),
          (0, x.jsx)(`text`, {
            x: a,
            y: 122,
            textAnchor: `middle`,
            fontSize: `4.6`,
            letterSpacing: `1.2`,
            fill: r.accent,
            children: e.line.toUpperCase(),
          }),
        ],
      });
  }
}
function S({ brand: e, className: t }) {
  let { pack: n, stick: r } = e,
    i = e.id,
    a = n.style === `slim`,
    o = a ? 36 : 22,
    s = a ? 84 : 98,
    c = a ? 7 : 9,
    l = a ? [44, 52.5, 61, 69.5] : [33, 49, 65];
  return (0, x.jsxs)(`svg`, {
    className: t,
    viewBox: `0 0 120 180`,
    role: `img`,
    "aria-label": `${e.name} ${e.line} pack`,
    children: [
      (0, x.jsxs)(`defs`, {
        children: [
          (0, x.jsxs)(`linearGradient`, {
            id: `body-${i}`,
            x1: `0`,
            x2: `1`,
            children: [
              (0, x.jsx)(`stop`, {
                offset: `0`,
                stopColor: `#fff`,
                stopOpacity: `0.22`,
              }),
              (0, x.jsx)(`stop`, {
                offset: `0.45`,
                stopColor: `#fff`,
                stopOpacity: `0`,
              }),
              (0, x.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#000`,
                stopOpacity: `0.14`,
              }),
            ],
          }),
          (0, x.jsxs)(`linearGradient`, {
            id: `round-${i}`,
            x1: `0`,
            x2: `1`,
            children: [
              (0, x.jsx)(`stop`, {
                offset: `0`,
                stopColor: `#fff`,
                stopOpacity: `0.35`,
              }),
              (0, x.jsx)(`stop`, {
                offset: `0.5`,
                stopColor: `#fff`,
                stopOpacity: `0`,
              }),
              (0, x.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#000`,
                stopOpacity: `0.25`,
              }),
            ],
          }),
          r.tip === `cork` &&
            (0, x.jsxs)(`pattern`, {
              id: `cork-${i}`,
              width: `6`,
              height: `6`,
              patternUnits: `userSpaceOnUse`,
              children: [
                (0, x.jsx)(`rect`, {
                  width: `6`,
                  height: `6`,
                  fill: r.tipColor,
                }),
                (0, x.jsx)(`circle`, {
                  cx: `1.2`,
                  cy: `1.5`,
                  r: `0.7`,
                  fill: `#5a2d0a`,
                  opacity: `0.28`,
                }),
                (0, x.jsx)(`circle`, {
                  cx: `4.3`,
                  cy: `3.9`,
                  r: `0.9`,
                  fill: `#5a2d0a`,
                  opacity: `0.22`,
                }),
                (0, x.jsx)(`circle`, {
                  cx: `2.8`,
                  cy: `5`,
                  r: `0.5`,
                  fill: `#fff3d6`,
                  opacity: `0.4`,
                }),
                (0, x.jsx)(`circle`, {
                  cx: `5`,
                  cy: `1`,
                  r: `0.45`,
                  fill: `#fff3d6`,
                  opacity: `0.35`,
                }),
              ],
            }),
        ],
      }),
      (0, x.jsx)(`ellipse`, {
        cx: `62`,
        cy: `172`,
        rx: a ? 32 : 46,
        ry: `5`,
        fill: `#23232a`,
        opacity: `0.22`,
      }),
      (0, x.jsx)(`path`, {
        d: `M${o + c} 4 H${s + c} V34 H${o + c} Z`,
        fill: n.body,
      }),
      (0, x.jsx)(`path`, {
        d: `M${o + c} 4 H${s + c} V34 H${o + c} Z`,
        fill: `#000`,
        opacity: `0.18`,
      }),
      (0, x.jsx)(`path`, {
        d: `M${o + 2} 30 L${o + c} 26 H${s + c - 2} L${s} 30 Z`,
        fill: n.foil,
      }),
      l.map((e) => (0, x.jsx)(re, { x: e, stick: r, id: i, slim: a }, e)),
      (0, x.jsx)(`path`, {
        d: `M${s} 36 L${s + c} 30 V162 L${s} 168 Z`,
        fill: n.body,
      }),
      (0, x.jsx)(`path`, {
        d: `M${s} 36 L${s + c} 30 V162 L${s} 168 Z`,
        fill: `#000`,
        opacity: `0.28`,
      }),
      (0, x.jsx)(`rect`, {
        x: o,
        y: 36,
        width: s - o,
        height: 132,
        rx: `1.5`,
        fill: n.body,
      }),
      (0, x.jsx)(`path`, {
        d: `M${o} 36 L${o + 6} 30 H${s + c} L${s} 36 Z`,
        fill: n.foil,
        opacity: `0.9`,
      }),
      (0, x.jsx)(`g`, { children: (0, x.jsx)(ie, { brand: e, x0: o, x1: s }) }),
      (0, x.jsx)(`path`, {
        d: `M${o} 60 H${s}`,
        stroke: `#000`,
        strokeOpacity: `0.14`,
        strokeWidth: `0.6`,
      }),
      (0, x.jsx)(`text`, {
        x: (o + s) / 2,
        y: `138`,
        textAnchor: `middle`,
        fontSize: `3.8`,
        letterSpacing: `0.9`,
        fill: n.ink,
        opacity: `0.75`,
        children: `20 FILTER CIGARETTES`,
      }),
      (0, x.jsx)(`rect`, {
        x: o,
        y: 144,
        width: s - o,
        height: 24,
        fill: `#141414`,
      }),
      (0, x.jsx)(`text`, {
        x: (o + s) / 2,
        y: `157.5`,
        textAnchor: `middle`,
        fontSize: a ? 5 : 7,
        fontWeight: `700`,
        letterSpacing: `0.6`,
        fill: `#fff`,
        children: `SMOKING KILLS`,
      }),
      (0, x.jsx)(`text`, {
        x: (o + s) / 2,
        y: `164`,
        textAnchor: `middle`,
        fontSize: `3`,
        fill: `#fff`,
        opacity: `0.8`,
        children: `tobacco causes painful death`,
      }),
      (0, x.jsx)(`rect`, {
        x: o,
        y: 36,
        width: s - o,
        height: 132,
        rx: `1.5`,
        fill: `url(#body-${i})`,
      }),
    ],
  });
}
function ae({ open: e, current: t, onPick: n, onClose: r }) {
  let i = (0, _.useRef)(null),
    [a, o] = (0, _.useState)(t.id);
  return (
    (0, _.useEffect)(() => {
      let n = i.current;
      e && !n.open ? (o(t.id), n.showModal()) : !e && n.open && n.close();
    }, [e, t.id]),
    (0, x.jsx)(`dialog`, {
      ref: i,
      className: `pack-dialog`,
      "aria-labelledby": `pack-title`,
      onClose: r,
      onClick: (e) => e.target === i.current && r(),
      children: (0, x.jsxs)(`section`, {
        className: `pack-card`,
        children: [
          (0, x.jsxs)(`div`, {
            className: `pack-menu-top`,
            children: [
              (0, x.jsxs)(`span`, {
                className: `eyebrow-sm`,
                children: [`The shelf / `, y.length, ` packs`],
              }),
              (0, x.jsx)(`button`, {
                className: `pack-close`,
                type: `button`,
                "aria-label": `Close the shelf`,
                onClick: r,
                children: `×`,
              }),
            ],
          }),
          (0, x.jsxs)(`h2`, {
            id: `pack-title`,
            children: [`Pick your `, (0, x.jsx)(`em`, { children: `pack.` })],
          }),
          (0, x.jsx)(`p`, {
            className: `pack-description`,
            children: `Every pack burns a little differently. The one you pick is the one in your fingers.`,
          }),
          (0, x.jsx)(`div`, {
            className: `pack-grid`,
            role: `radiogroup`,
            "aria-labelledby": `pack-title`,
            children: y.map((e) =>
              (0, x.jsxs)(
                `button`,
                {
                  type: `button`,
                  role: `radio`,
                  "aria-checked": a === e.id,
                  className: `pack-choice`,
                  onClick: () => o(e.id),
                  onDoubleClick: () => {
                    (n(e), r());
                  },
                  children: [
                    (0, x.jsx)(`span`, {
                      className: `pack-plinth`,
                      style: { "--pack": e.pack.accent },
                      children: (0, x.jsx)(S, { brand: e }),
                    }),
                    (0, x.jsxs)(`span`, {
                      className: `pack-choice-name`,
                      children: [
                        e.name,
                        (0, x.jsx)(`span`, {
                          className: `pack-check`,
                          "aria-hidden": `true`,
                          children: `✓`,
                        }),
                      ],
                    }),
                    (0, x.jsxs)(`span`, {
                      className: `pack-line`,
                      children: [
                        e.line,
                        (0, x.jsx)(`span`, {
                          className: `pack-smoke`,
                          style: {
                            "--smoke": e.smoke.smoke,
                            "--pale": e.smoke.pale,
                          },
                          title: `Smoke colour`,
                        }),
                      ],
                    }),
                    (0, x.jsxs)(`span`, {
                      className: `pack-note`,
                      children: [e.tagline, ` · `, e.burnLabel.toLowerCase()],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
          (0, x.jsxs)(`div`, {
            className: `pack-menu-bottom`,
            children: [
              (0, x.jsx)(`span`, {
                children: `Fresh cigarette from the new pack.`,
              }),
              (0, x.jsxs)(`div`, {
                className: `pack-actions`,
                children: [
                  (0, x.jsx)(`button`, {
                    type: `button`,
                    onClick: r,
                    children: `Cancel`,
                  }),
                  (0, x.jsx)(`button`, {
                    type: `button`,
                    className: `primary`,
                    onClick: () => {
                      (n(y.find((e) => e.id === a)), r());
                    },
                    children: `Take one`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var oe =
    typeof matchMedia == `function` && matchMedia(`(pointer: coarse)`).matches,
  C = {
    CAMERA_WIDTH: oe ? 960 : 1280,
    CAMERA_HEIGHT: oe ? 540 : 720,
    MAX_CANVAS_PIXELS: oe ? 12e5 : 24e5,
    NUM_HANDS: oe ? 1 : 2,
    SLOW_FPS: 28,
    SLOW_FPS_TIME: 2.5,
    LOW_QUALITY: 0.55,
    GRIP_MIN_CUTOFF: 1.6,
    GRIP_BETA: 0.012,
    SETTLE_TIME: 0.22,
    AXIS_RATE: 16,
    MOUTH_BLEND_RATE: 12,
    SNAP_RATE: 13,
    RETURN_RATE: 5,
    SIZE_RATE: 4,
    FACE_SMOOTHING: 0.5,
    DETECT_BUDGET_MS: 24,
    PICKUP_RADIUS: 0.12,
    REACH_RADIUS: 0.4,
    REACH_TIME: 0.45,
    HOLD_ON: 0.6,
    HOLD_OFF: 0.3,
    HOLD_SWITCH: 0.25,
    OPEN_DROP: 0.75,
    OPEN_DROP_TIME: 0.3,
    LOST_AFTER: 0.8,
    FOLLOW_RADIUS: 0.35,
    PUTDOWN_TIME: 0.7,
    REGRAB_COOLDOWN: 0.9,
    AT_MOUTH_DISTANCE: 0.35,
    HAND_MOUTH_DISTANCE: 0.6,
    PUCKER_DRAW: 0.3,
    PUCKER_KEEP: 0.18,
    EXHALE_FUNNEL: 0.25,
    EXHALE_PUCKER: 0.3,
    EXHALE_JAW: 0.12,
    RING_FUNNEL: 0.4,
    RING_JAW_MIN: 0.06,
    RING_JAW_MAX: 0.35,
    BURST_CHEEK: 0.3,
    LIGHT_TIME: 0.8,
    DRAW_FILL_TIME: 2,
    EXHALE_DRAIN_TIME: 1.6,
    EXHALE_MIN_LUNG: 0.08,
    MIN_DRAG: 0.35,
    CIG_LENGTH: 0.2,
    CIG_FACE_RATIO: 0.62,
    CIG_PALM_RATIO: 0.95,
    CIG_WIDTH_RATIO: 0.095,
    FILTER_FRAC: 0.27,
    GRIP_FRAC: { vee: 0.2, tri: 0.08, pinch: 0.1 },
    HOLD_ANGLE: { vee: 62, tri: 22, pinch: 38 },
    LEAN_SWITCH: 0.3,
    LEAN_RATE: 5,
    MIN_FACING: 0.45,
    BURN_DRAW: 0.05,
    BURN_PASSIVE: 0.0028,
    ASH_FALL: [0.16, 0.3],
    FLICK_SPEED: 1.6,
    SMOKE_SCALE: 4,
    SMOKE_MAX_PARTICLES: 500,
    SMOKE_SPAWN_PER_SEC: 100,
    SMOKE_LIFE: [2.2, 3.8],
    SMOKE_OPACITY: 0.74,
    SMOKE_DENSITY: 0.4,
    SIDE_RATE: 16,
    SIDE_ALPHA: 0.55,
  },
  se = {
    LAVENDER: `#A8ACDA`,
    LAVENDER_LIGHT: `#CACDEB`,
    WALNUT: `#8C6A4A`,
    WALNUT_DARK: `#6B4F37`,
    BRASS: `#C9A45C`,
    BRASS_DARK: `#8E6F34`,
    BRASS_LIGHT: `#EBD39A`,
    EMBER_DEEP: `#B24A22`,
    EMBER: `#E0762E`,
    EMBER_HOT: `#F7A93F`,
    FLAME: `#FBD46A`,
    FLAME_TIP: `#FFF1B8`,
    SMOKE: `#ECEDF8`,
    INK: `#2A2D66`,
    CHARCOAL: `#3C3C3C`,
    IVORY: `#FFFFE3`,
    SLATE: `#6D8196`,
    BACKDROP: `#8A8DA6`,
  },
  ce = (e, t) => [e[0] + t[0], e[1] + t[1]],
  le = (e, t) => [e[0] - t[0], e[1] - t[1]],
  ue = (e, t) => [e[0] * t, e[1] * t],
  de = (e, t) => e[0] * t[0] + e[1] * t[1],
  fe = (e) => Math.hypot(e[0], e[1]),
  pe = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]),
  me = (e) => {
    let t = fe(e) || 1e-6;
    return [e[0] / t, e[1] / t];
  },
  he = (e, t, n) => Math.min(n, Math.max(t, e));
function ge(e, t, n, r) {
  let i = 1 - Math.exp(-n * Math.max(r, 1e-4));
  return [e[0] + (t[0] - e[0]) * i, e[1] + (t[1] - e[1]) * i];
}
function _e(e, t, n, r) {
  return e + (t - e) * (1 - Math.exp(-n * Math.max(r, 1e-4)));
}
var ve = (e, t) => 1 / (1 + 1 / (2 * Math.PI * e * t)),
  ye = class {
    constructor(e, t, n = 1) {
      ((this.minCutoff = e),
        (this.beta = t),
        (this.dCutoff = n),
        (this.y = null),
        (this.dy = 0));
    }
    filter(e, t) {
      if (((t = Math.max(t, 1e-4)), this.y === null)) return ((this.y = e), e);
      let n = (e - this.y) / t;
      this.dy += ve(this.dCutoff, t) * (n - this.dy);
      let r = this.minCutoff + this.beta * Math.abs(this.dy);
      return ((this.y += ve(r, t) * (e - this.y)), this.y);
    }
    reset(e) {
      ((this.y = e), (this.dy = 0));
    }
  },
  be = class {
    constructor(e, t) {
      ((this.fx = new ye(e, t)), (this.fy = new ye(e, t)));
    }
    filter(e, t) {
      return [this.fx.filter(e[0], t), this.fy.filter(e[1], t)];
    }
    reset(e) {
      (this.fx.reset(e[0]), this.fy.reset(e[1]));
    }
  },
  xe = 0,
  Se = 4,
  Ce = [5, 6, 7, 8],
  we = [9, 10, 11, 12],
  Te = [13, 14, 15, 16],
  Ee = [17, 18, 19, 20],
  w = [13, 14, 0, 17, 61, 291, 78, 308, 82, 312, 87, 317],
  De = 61,
  Oe = 291,
  ke = 234,
  Ae = 454,
  je = 33,
  Me = 263,
  Ne = 1,
  Pe = [`mouthPucker`, `mouthFunnel`, `jawOpen`, `cheekPuff`],
  Fe = [`vee`, `tri`, `pinch`],
  Ie = (...e) => {
    let t = 0,
      n = 0;
    for (let r of e) ((t += r[0]), (n += r[1]));
    return [t / e.length, n / e.length];
  },
  Le = (e, [t, , , n]) => pe(e[n], e[xe]) / (pe(e[t], e[xe]) + 1e-6),
  Re = (e, t) => he((Le(e, t) - 1.3) / 0.4, 0, 1),
  ze = (e, t, n) => he((n - e) / (n - t), 0, 1);
function Be(e) {
  let t = pe(e[xe], e[we[0]]) + 1e-6,
    n = he((Le(e, Ce) - 1.12) / 0.2, 0, 1),
    r = he((Le(e, we) - 1.12) / 0.2, 0, 1),
    i = pe(e[Se], e[Ce[3]]) / t,
    a = pe(e[Se], e[we[3]]) / t,
    o = Math.min(Re(e, Te), Re(e, Ee)),
    s = {
      vee:
        Math.min(Re(e, Ce), Re(e, we)) *
        (1 - 0.8 * o) *
        he((i - 0.35) / 0.2, 0, 1),
      tri: ze(Math.max(i, a), 0.3, 0.6) * Math.min(n, r),
      pinch: ze(i, 0.2, 0.45) * n * (1 - ze(a, 0.3, 0.6)),
    },
    c =
      Math.min(Re(e, Ce), Re(e, we), Re(e, Te), Re(e, Ee)) *
      he((i - 0.45) / 0.2, 0, 1),
    l = me(le(e[we[0]], e[xe])),
    u = ue(le(e[Ce[0]], e[Ee[0]]), 1 / (0.8 * t)),
    d = le(u, ue(l, de(u, l))),
    f = Math.hypot(d[0], d[1]),
    p = f > 1 ? ue(d, 1 / f) : d,
    m = {
      vee: Ie(e[Ce[1]], e[Ce[2]], e[we[1]], e[we[2]]),
      tri: Ie(e[Se], e[Ce[3]], e[we[3]]),
      pinch: Ie(e[Se], e[Ce[3]]),
    },
    h = `vee`;
  for (let e of Fe) s[e] > s[h] && (h = e);
  return {
    scores: s,
    points: m,
    kind: h,
    hold: s[h],
    holdPoint: m[h],
    open: c,
    axis: l,
    side: p,
    center: Ie(e[xe], e[Ce[0]], e[we[0]], e[Ee[0]]),
    palm: t,
    landmarks: e,
  };
}
function Ve(e, t) {
  let n = pe(e[ke], e[Ae]),
    r = pe(e[je], e[Me]) * 1.55,
    i = (e[ke][0] + e[Ae][0]) / 2;
  return {
    mouthCenter: Ie(...w.map((t) => e[t])),
    mouthWidth: pe(e[De], e[Oe]),
    faceWidth: Math.max(n, r),
    yaw: he((e[Ne][0] - i) / (n / 2 + 1e-6), -1, 1),
    pucker: t.mouthPucker || 0,
    funnel: t.mouthFunnel || 0,
    jawOpen: t.jawOpen || 0,
    cheekPuff: t.cheekPuff || 0,
  };
}
var He = {
    RESTING: `resting`,
    HOLDING: `holding`,
    AT_MOUTH: `at mouth`,
    DRAWING: `drawing`,
    EXHALING: `exhaling`,
    FINISHED: `finished`,
  },
  Ue = { NONE: `none`, PUFF: `puff`, RING: `ring`, BURST: `burst` },
  We = (e, t, n) => [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n],
  Ge = (e) => 1 - (1 - he(e, 0, 1)) ** 3,
  Ke = Math.PI / 180;
function qe(e, t, n, r) {
  let i = r * Ke,
    a = [-e[1], e[0]];
  return ce(ue(e, Math.cos(i)), ue(a, Math.sin(i) * t * n));
}
var Je = class {
    constructor(e, t) {
      ((this.brand = t),
        (this.layout = e),
        (this.grip = new be(C.GRIP_MIN_CUTOFF, C.GRIP_BETA)),
        this.reset());
    }
    setLayout(e) {
      ((this.layout = e),
        !this.held && ((this.size = e.U * C.CIG_LENGTH), this._park()));
    }
    _park() {
      let { restGrip: e, restDir: t } = this.layout;
      ((this.pos = [e[0], e[1]]),
        (this.vec = [t[0], t[1]]),
        (this.axisV = [0, -1]),
        (this.lean = 1),
        (this.leanSign = 1),
        (this.facing = 1),
        (this.holdAngle = C.HOLD_ANGLE.vee),
        (this.gripFrac = C.GRIP_FRAC.vee),
        (this.mouthBlend = 0),
        (this.settle = 0),
        (this.filterP = le(this.pos, ue(t, this.gripFrac * this.size))));
    }
    reset() {
      ((this.state = He.RESTING),
        (this.held = null),
        (this.kind = `vee`),
        (this.lostTimer = 0),
        (this.openTimer = 0),
        (this.reachTimer = 0),
        (this.reachPoint = null),
        (this.putTimer = 0),
        (this.leftTray = !1),
        (this.cooldown = 0),
        (this.atMouth = !1),
        (this.drawing = !1),
        (this.dragTime = 0),
        (this.drags = 0),
        (this.lung = 0),
        (this.lit = !1),
        (this.lightProgress = 0),
        (this.remaining = 1),
        (this.ash = 0),
        (this.ashLimit = this._nextAshLimit()),
        (this.ember = 0),
        (this.finished = !1),
        (this.speed = 0),
        (this.flickCool = 0),
        (this.events = []),
        (this.size = this.layout.U * C.CIG_LENGTH),
        this._park());
    }
    _nextAshLimit() {
      let [e, t] = C.ASH_FALL;
      return e + Math.random() * (t - e);
    }
    _trackHand(e, t) {
      let n = this.layout.U;
      if (!this.held) {
        if (this.cooldown > 0 || this.finished) return null;
        let r = e.filter((e) => e.hold >= C.HOLD_ON);
        if (!r.length)
          return ((this.reachTimer = 0), (this.reachPoint = null), null);
        r.sort((e, t) => pe(e.holdPoint, this.pos) - pe(t.holdPoint, this.pos));
        let i = r[0],
          a = pe(i.holdPoint, this.pos);
        if (a < C.PICKUP_RADIUS * n) return this._grab(i);
        if (a < C.REACH_RADIUS * n) {
          if (
            ((this.reachTimer += t),
            (this.reachPoint = i.holdPoint),
            this.reachTimer >= C.REACH_TIME)
          )
            return this._grab(i);
        } else ((this.reachTimer = 0), (this.reachPoint = null));
        return null;
      }
      let r = this.held.center,
        i = null,
        a = C.FOLLOW_RADIUS * n;
      for (let t of e) {
        let e = pe(t.center, r);
        e < a && ((i = t), (a = e));
      }
      if (!i)
        return (
          (this.lostTimer += t),
          this.lostTimer > C.LOST_AFTER ? (this._drop(), null) : this.held
        );
      if (
        ((this.lostTimer = 0),
        (this.held = i),
        (this.openTimer = i.open > C.OPEN_DROP ? this.openTimer + t : 0),
        this.openTimer > C.OPEN_DROP_TIME)
      )
        return (this._drop(), this.events.push({ type: `drop` }), null);
      let o = Fe.reduce(
        (e, t) => (i.scores[t] > i.scores[e] ? t : e),
        this.kind,
      );
      return (
        o !== this.kind &&
          i.scores[o] >= C.HOLD_ON &&
          i.scores[o] > i.scores[this.kind] + C.HOLD_SWITCH &&
          ((this.kind = o), this._startSettle()),
        i
      );
    }
    _startSettle() {
      ((this.settle = C.SETTLE_TIME),
        (this.settleFrom = [this.pos[0], this.pos[1]]),
        (this.settleVec = [this.vec[0], this.vec[1]]));
    }
    _grab(e) {
      return (
        (this.held = e),
        (this.kind = e.kind),
        this.grip.reset(e.points[e.kind]),
        (this.axisV = [e.axis[0], e.axis[1]]),
        (this.leanSign = this._leanSign(e, this.lastFace, !0)),
        (this.lean = this.leanSign),
        (this.facing = he(fe(e.side) / 0.9, C.MIN_FACING, 1)),
        (this.holdAngle = C.HOLD_ANGLE[e.kind]),
        this._startSettle(),
        (this.lostTimer = 0),
        (this.openTimer = 0),
        (this.reachTimer = 0),
        (this.reachPoint = null),
        (this.putTimer = 0),
        (this.leftTray = !1),
        this.events.push({ type: `grab` }),
        e
      );
    }
    _drop() {
      ((this.held = null),
        (this.putTimer = 0),
        (this.cooldown = C.REGRAB_COOLDOWN));
    }
    _burn(e) {
      if (e <= 0) return;
      let t = Math.min(e, this.remaining);
      ((this.remaining -= t),
        (this.ash += t),
        this.ash > this.ashLimit && this._dropAsh(`fall`),
        this.remaining <= 0 && this._finish());
    }
    _dropAsh(e) {
      this.ash < 0.01 ||
        (this.events.push({ type: `ash`, amount: this.ash, how: e }),
        (this.ash = 0),
        (this.ashLimit = this._nextAshLimit()));
    }
    _finish() {
      ((this.remaining = 0),
        (this.finished = !0),
        (this.lit = !1),
        (this.drawing = !1),
        (this.held = null),
        this.events.push({ type: `out` }));
    }
    update(e, t, n) {
      this.events = [];
      let { U: r, tray: i, trayR: a, restGrip: o, restDir: s } = this.layout;
      ((this.cooldown = Math.max(0, this.cooldown - n)),
        (this.flickCool = Math.max(0, this.flickCool - n)),
        t && (this.lastFace = t));
      let c = this._trackHand(e, n);
      if (c) {
        let e = pe(c.points[this.kind], i) < a * 1.15;
        (e || (this.leftTray = !0),
          e && this.leftTray && !this.atMouth
            ? ((this.putTimer += n),
              this.putTimer > C.PUTDOWN_TIME &&
                (this._drop(), this.events.push({ type: `rest` }), (c = null)))
            : (this.putTimer = 0));
      }
      let l = c
        ? t
          ? C.CIG_FACE_RATIO * t.faceWidth
          : C.CIG_PALM_RATIO * c.palm
        : r * C.CIG_LENGTH;
      this.size = _e(this.size, he(l, 0.1 * r, 0.42 * r), C.SIZE_RATE, n);
      let u = this.size,
        d = this.pos;
      if (!c)
        ((this.pos = ge(this.pos, o, C.RETURN_RATE, n)),
          (this.vec = ge(this.vec, s, C.RETURN_RATE, n)),
          (this.gripFrac = _e(
            this.gripFrac,
            C.GRIP_FRAC.vee,
            C.RETURN_RATE,
            n,
          )),
          (this.mouthBlend = _e(this.mouthBlend, 0, C.MOUTH_BLEND_RATE, n)),
          (this.atMouth = !1),
          (this.filterP = le(this.pos, ue(this.vec, this.gripFrac * u))));
      else {
        let e = this.grip.filter(c.points[this.kind], n);
        ((this.axisV = ge(this.axisV, c.axis, C.AXIS_RATE, n)),
          (this.leanSign = this._leanSign(c, t, !1)),
          (this.lean = _e(this.lean, this.leanSign, C.LEAN_RATE, n)),
          (this.facing = _e(
            this.facing,
            he(fe(c.side) / 0.9, C.MIN_FACING, 1),
            C.AXIS_RATE,
            n,
          )),
          (this.holdAngle = _e(
            this.holdAngle,
            C.HOLD_ANGLE[this.kind],
            C.AXIS_RATE,
            n,
          )),
          (this.gripFrac = _e(
            this.gripFrac,
            C.GRIP_FRAC[this.kind],
            C.AXIS_RATE,
            n,
          )));
        let r = qe(me(this.axisV), this.lean, this.facing, this.holdAngle);
        if (this.settle > 0) {
          this.settle = Math.max(0, this.settle - n);
          let t = Ge(1 - this.settle / C.SETTLE_TIME);
          ((this.pos = We(this.settleFrom, e, t)),
            (r = We(this.settleVec, r, t)));
        } else this.pos = e;
        let i = le(this.pos, ue(r, this.gripFrac * u));
        ((this.atMouth = this._nearMouth(i, this.pos, t)),
          (this.mouthBlend = _e(
            this.mouthBlend,
            +!!this.atMouth,
            C.MOUTH_BLEND_RATE,
            n,
          )));
        let a = t ? t.mouthCenter : this.lastMouth;
        if (
          (t && (this.lastMouth = t.mouthCenter), this.mouthBlend > 0.001 && a)
        ) {
          let e = le(this.pos, a),
            t = fe(e),
            n = t > 0.06 * u ? ue(e, Math.max(fe(r), 0.7) / t) : r;
          ((r = We(r, n, this.mouthBlend)),
            (this.filterP = We(i, a, this.mouthBlend)));
        } else this.filterP = i;
        this.vec = r;
      }
      let f = pe(this.pos, d) / Math.max(n, 0.001);
      ((this.speed = _e(this.speed, f, 20, n)),
        c &&
          !this.atMouth &&
          this.flickCool <= 0 &&
          this.speed > C.FLICK_SPEED * r &&
          this.ash > 0.02 &&
          (this._dropAsh(`flick`), (this.flickCool = 0.5)));
      let p = 0,
        m = 0,
        h = Ue.NONE;
      if (
        ((this.state = this.finished
          ? He.FINISHED
          : c
            ? this.atMouth
              ? He.AT_MOUTH
              : He.HOLDING
            : He.RESTING),
        t && c && this.atMouth)
      ) {
        let e = this.drawing ? C.PUCKER_KEEP : C.PUCKER_DRAW;
        ((this.drawing = t.pucker > e),
          this.drawing &&
            ((this.state = He.DRAWING),
            (p = he(
              0.3 + (t.pucker - C.PUCKER_KEEP) / (1 - C.PUCKER_KEEP),
              0,
              1,
            )),
            this.lit
              ? ((this.lung = Math.min(
                  1,
                  this.lung + (p * n) / C.DRAW_FILL_TIME,
                )),
                this._burn(C.BURN_DRAW * this.brand.burn * p * n),
                (this.dragTime += n))
              : ((this.lightProgress += n),
                this.lightProgress >= C.LIGHT_TIME &&
                  ((this.lit = !0), this.events.push({ type: `lit` })))));
      } else
        ((this.drawing = !1),
          t &&
            this.lung > C.EXHALE_MIN_LUNG &&
            !this.atMouth &&
            (([m, h] = this._exhaleSignal(t)),
            m > 0 &&
              (this.state !== He.FINISHED && (this.state = He.EXHALING),
              (this.lung = Math.max(
                0,
                this.lung - (m * n) / C.EXHALE_DRAIN_TIME,
              )))));
      (this.drawing ||
        (this.dragTime > C.MIN_DRAG && (this.drags += 1), (this.dragTime = 0)),
        !this.lit &&
          !this.drawing &&
          (this.lightProgress = Math.max(0, this.lightProgress - n * 0.5)),
        this.lit && this._burn(C.BURN_PASSIVE * this.brand.burn * n));
      let g = this.lit ? (this.drawing ? 0.55 + 0.45 * p : 0.22) : 0;
      this.ember = _e(this.ember, g, g > this.ember ? 6 : 1.5, n);
      let _ = u * he(fe(this.vec), 0.3, 1),
        v = me(this.vec),
        y = ce(
          this.filterP,
          ue(v, _ * (C.FILTER_FRAC + (1 - C.FILTER_FRAC) * this.remaining)),
        );
      return {
        state: this.state,
        held: !!c,
        hand: c,
        holdKind: c ? this.kind : null,
        face: t,
        lung: this.lung,
        drawIntensity: p,
        exhaleRate: m,
        exhaleKind: h,
        filter: [this.filterP[0], this.filterP[1]],
        dir: v,
        size: _,
        width: u * C.CIG_WIDTH_RATIO,
        remaining: this.remaining,
        ash: this.ash,
        ember: this.ember,
        burnPoint: y,
        lit: this.lit,
        lighting: !!c && this.atMouth && !this.lit && !this.finished,
        lightProgress: he(this.lightProgress / C.LIGHT_TIME, 0, 1),
        finished: this.finished,
        resting: !c && pe(this.pos, o) < 0.03 * r,
        restGrip: o,
        reach: this.held ? 0 : Math.min(1, this.reachTimer / C.REACH_TIME),
        reachPoint: this.reachPoint
          ? [this.reachPoint[0], this.reachPoint[1]]
          : null,
        putDown: c ? he(this.putTimer / C.PUTDOWN_TIME, 0, 1) : 0,
        drags: this.drags,
        events: this.events,
      };
    }
    _leanSign(e, t, n) {
      let r = e.axis,
        i = [-r[1], r[0]];
      if (t) {
        let r =
          (e.center[0] - t.mouthCenter[0]) * i[0] +
          (e.center[1] - t.mouthCenter[1]) * i[1];
        return n || Math.abs(r) > C.LEAN_SWITCH * t.faceWidth
          ? r >= 0
            ? 1
            : -1
          : this.leanSign;
      }
      let a = e.side[0] * i[0] + e.side[1] * i[1];
      return n || Math.abs(a) > 0.3 ? (a > 0 ? -1 : 1) : this.leanSign;
    }
    _nearMouth(e, t, n) {
      if (!n) return !1;
      let r = this.atMouth ? 1.4 : 1;
      return (
        pe(e, n.mouthCenter) < C.AT_MOUTH_DISTANCE * n.faceWidth * r ||
        pe(t, n.mouthCenter) < C.HAND_MOUTH_DISTANCE * n.faceWidth * r
      );
    }
    _exhaleSignal(e) {
      if (e.cheekPuff > C.BURST_CHEEK) return [1, Ue.BURST];
      if (
        e.funnel > C.RING_FUNNEL &&
        e.jawOpen > C.RING_JAW_MIN &&
        e.jawOpen < C.RING_JAW_MAX
      )
        return [he(e.funnel, 0.4, 1), Ue.RING];
      let t = Math.max(
        (e.funnel - C.EXHALE_FUNNEL) / (1 - C.EXHALE_FUNNEL),
        (e.pucker - C.EXHALE_PUCKER) / (1 - C.EXHALE_PUCKER),
        (e.jawOpen - C.EXHALE_JAW) / (0.6 - C.EXHALE_JAW),
      );
      return t <= 0 ? [0, Ue.NONE] : [he(0.3 + t, 0, 1), Ue.PUFF];
    }
  },
  Ye = (e) => {
    let t = parseInt(e.slice(1), 16);
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  },
  Xe = {
    smoke: `#D6D7E2`,
    pale: `#F3F3FA`,
    life: 1,
    growth: 1,
    curl: 1,
    lift: 1,
    drag: 1,
    intensity: 1,
  },
  Ze = {
    smoke: `#A9B0BC`,
    pale: `#D6DBE3`,
    life: 0.9,
    growth: 0.55,
    curl: 0.55,
    lift: 1.7,
    drag: 0.8,
    intensity: 1,
  },
  Qe = Object.freeze({ growth: 1, lift: 1, curl: 1, drag: 1 });
function $e(e) {
  return {
    growth: 1 + 0.15 * Math.sin(e),
    lift: 1 + 0.15 * Math.sin(e * 1.7 + 1),
    curl: 1 + 0.15 * Math.sin(e * 2.1 + 2),
    drag: 1 + 0.15 * Math.sin(e * 1.3 + 3),
  };
}
var et = 48;
function tt(e, t, n) {
  let r = n * Math.PI,
    i = 0.06 * Math.sin(Math.PI * n),
    a = 0.85 + 0.1 * Math.sin(t + r),
    o = t * 0.2 + n * 0.15,
    s = Math.cos(o),
    c = Math.sin(o),
    l = Array(et);
  for (let n = 0; n < et; n++) {
    let o = (n / et) * Math.PI * 2,
      u = e * (1 + i * Math.sin(3 * o + t + r)),
      d = u * Math.cos(o),
      f = u * a * Math.sin(o);
    l[n] = [d * s - f * c, d * c + f * s];
  }
  return l;
}
var nt = (e) =>
  Math.max(
    0,
    Math.min(et, et - Math.floor(et * Math.max(0, (e - 0.75) / 0.25))),
  );
function rt(e, t) {
  let n = document.createElement(`canvas`);
  n.width = n.height = e;
  let r = n.getContext(`2d`),
    [i, a, o] = Ye(t.smoke),
    [s, c, l] = Ye(t.pale),
    u = r.createRadialGradient(e / 2, e / 2, 0, e / 2, e / 2, e / 2);
  (u.addColorStop(0, `rgba(${i},${a},${o},1)`),
    u.addColorStop(0.36, `rgba(${i},${a},${o},0.86)`),
    u.addColorStop(0.62, `rgba(${i},${a},${o},0.48)`),
    u.addColorStop(0.84, `rgba(${s},${c},${l},0.16)`),
    u.addColorStop(1, `rgba(${s},${c},${l},0)`),
    (r.fillStyle = u),
    r.fillRect(0, 0, e, e),
    (r.globalCompositeOperation = `destination-out`));
  for (let [t, n, i] of [
    [0.27, 0.36, 0.24],
    [0.65, 0.62, 0.28],
    [0.43, 0.78, 0.2],
  ]) {
    let a = r.createRadialGradient(t * e, n * e, 0, t * e, n * e, i * e);
    (a.addColorStop(0, `rgba(0,0,0,.42)`),
      a.addColorStop(1, `rgba(0,0,0,0)`),
      (r.fillStyle = a),
      r.fillRect(0, 0, e, e));
  }
  return n;
}
var it = class {
    constructor(e, t, n, r = Xe) {
      ((this.W = e),
        (this.H = t),
        (this.s = C.SMOKE_SCALE),
        (this.k = n / 720),
        (this.p = []),
        (this.max = C.SMOKE_MAX_PARTICLES),
        (this.t = 0),
        (this.debt = 0),
        (this.sideDebt = 0),
        (this.ringCooldown = 0),
        (this.layer = document.createElement(`canvas`)),
        (this.layer.width = Math.ceil(e / this.s)),
        (this.layer.height = Math.ceil(t / this.s)),
        (this.lctx = this.layer.getContext(`2d`)),
        (this.breath = r),
        (this.sprite = rt(64, r)),
        (this.sideSprite = rt(64, Ze)),
        (this.supportsFilter = `filter` in this.lctx));
    }
    setBreath(e) {
      ((this.breath = e), (this.sprite = rt(64, e)));
    }
    reset() {
      ((this.p = []),
        (this.debt = 0),
        (this.sideDebt = 0),
        (this.ringCooldown = 0));
    }
    emit(e, t, n, r, i, a, o) {
      if (i <= 0 || a === Ue.NONE) return;
      i *= this.breath.intensity;
      let s = 1 - Math.abs(t);
      a === Ue.RING
        ? (this.ringCooldown <= 0 &&
            (this._add(e, t, r, 1, !0, 80, 0.04), (this.ringCooldown = 0.42)),
          (this.debt += i * 0.08 * C.SMOKE_SPAWN_PER_SEC * o))
        : a === Ue.BURST
          ? (this.debt += i * 3 * C.SMOKE_SPAWN_PER_SEC * o)
          : (this.debt += i * C.SMOKE_SPAWN_PER_SEC * o);
      let c = Math.floor(this.debt);
      if (c) {
        this.debt -= c;
        let a = ((16 + 35 * n + 60 * s) * Math.PI) / 180;
        this._add(e, t, r, c, !1, 90 + 220 * i, a);
      }
    }
    side(e, t, n = 1) {
      if (n <= 0 || !e) return;
      this.sideDebt += n * C.SIDE_RATE * t;
      let r = Math.floor(this.sideDebt);
      if (!r || ((this.sideDebt -= r), this.p.length > this.max * 0.6)) return;
      let i = this.k;
      for (let t = 0; t < r; t++) {
        let t =
          (C.SMOKE_LIFE[0] +
            Math.random() * (C.SMOKE_LIFE[1] - C.SMOKE_LIFE[0])) *
          Ze.life;
        this.p.push({
          x: e[0] + (Math.random() - 0.5) * 3 * i,
          y: e[1] - Math.random() * 3 * i,
          vx: (Math.random() - 0.5) * 8 * i,
          vy: -(34 + Math.random() * 30) * i,
          r: (3 + Math.random() * 4) * i,
          life: t,
          maxLife: t,
          ring: !1,
          seed: Math.random() * 6.28,
          flavour: Ze,
          sprite: this.sideSprite,
          variation: Qe,
          faint: C.SIDE_ALPHA,
        });
      }
    }
    _add(e, t, n, r, i, a, o) {
      if (i && r > 0 && this.p.length >= this.max) {
        let e = this.p.findIndex((e) => !e.ring);
        this.p.splice(e < 0 ? 0 : e, 1);
      }
      r = Math.max(0, Math.min(r, this.max - this.p.length));
      let s = 1 - Math.abs(t),
        c = Math.atan2(-0.3, t * 1.5);
      for (let t = 0; t < r; t++) {
        let t = c + (Math.random() * 2 - 1) * o,
          r = a * this.k * (0.5 + Math.random() * 0.5),
          l =
            C.SMOKE_LIFE[0] +
            Math.random() * (C.SMOKE_LIFE[1] - C.SMOKE_LIFE[0]);
        (i && (l *= 1.3), (l *= this.breath.life));
        let u = Math.random() * 6.28;
        this.p.push({
          x: e[0] + (Math.random() - 0.5) * 0.8 * n,
          y: e[1] + (Math.random() - 0.5) * 0.3 * n,
          vx: Math.cos(t) * r,
          vy: Math.sin(t) * r,
          r: i ? n * 0.5 : n * (0.2 + Math.random() * 0.25) * (1 + 0.5 * s),
          life: l,
          maxLife: l,
          ring: i,
          seed: u,
          flavour: this.breath,
          sprite: this.sprite,
          variation: i ? Qe : $e(u),
        });
      }
    }
    step(e) {
      ((this.t += e), (this.ringCooldown = Math.max(0, this.ringCooldown - e)));
      let t = this.k,
        n = this.t;
      for (let r = this.p.length - 1; r >= 0; r--) {
        let i = this.p[r],
          a = i.flavour,
          o = i.variation,
          s = (i.ring ? 0.5 : 0.9) * a.drag * o.drag,
          c = a.curl * o.curl;
        ((i.vx *= Math.max(0, 1 - s * e)),
          (i.vy *= Math.max(0, 1 - s * e)),
          (i.vx +=
            (Math.sin(n * 1.6 + (i.y * 0.012) / t + i.seed) * 26 +
              Math.sin(n * 0.7 + (i.x * 0.02) / t) * 12) *
            t *
            e *
            c),
          (i.vy +=
            Math.cos(n * 1.1 + (i.x * 0.015) / t + i.seed) * 20 * t * e * c -
            12 * t * e * a.lift * o.lift),
          (i.x += i.vx * e),
          (i.y += i.vy * e),
          (i.r += (i.ring ? 20 : 26) * t * e * a.growth * o.growth),
          (i.life -= e),
          (i.life <= 0 || i.y < -i.r || i.x < -i.r || i.x > this.W + i.r) &&
            this.p.splice(r, 1));
      }
    }
    draw(e) {
      if (!this.p.length) return;
      let t = this.lctx,
        n = this.s;
      ((t.globalCompositeOperation = `source-over`),
        t.clearRect(0, 0, this.layer.width, this.layer.height));
      let r = !1;
      for (let e of this.p) {
        if (e.ring) {
          r = !0;
          continue;
        }
        let i = Math.max(1, e.r / n),
          a = e.seed + (e.maxLife - e.life) * 0.16,
          o = Math.cos(a),
          s = Math.sin(a);
        ((t.globalAlpha =
          (e.life / e.maxLife) ** 0.8 * C.SMOKE_DENSITY * (e.faint || 1)),
          t.setTransform(o, s, -s, o, e.x / n, e.y / n),
          t.drawImage(e.sprite, -i * 1.12, -i * 0.88, 2.24 * i, 1.76 * i));
      }
      if ((t.setTransform(1, 0, 0, 1, 0, 0), r)) {
        this.supportsFilter && (t.filter = `blur(1.2px)`);
        for (let e of this.p) {
          if (!e.ring) continue;
          let r = Math.max(1, e.r / n),
            i = e.x / n,
            a = e.y / n,
            o = t.createLinearGradient(i - r, a - r, i + r, a + r);
          (o.addColorStop(0, e.flavour.pale),
            o.addColorStop(0.35, e.flavour.smoke),
            o.addColorStop(1, e.flavour.smoke),
            (t.strokeStyle = o),
            (t.globalAlpha = Math.min(1, (e.life / e.maxLife) ** 0.8)),
            (t.lineWidth = Math.max(1, r * 0.34)));
          let s = 1 - e.life / e.maxLife,
            c = tt(r, e.seed, s),
            l = nt(s);
          if (!(l < 2)) {
            (t.beginPath(), t.moveTo(i + c[0][0], a + c[0][1]));
            for (let e = 1; e < l; e++) t.lineTo(i + c[e][0], a + c[e][1]);
            (l === c.length && t.closePath(), t.stroke());
          }
        }
        this.supportsFilter && (t.filter = `none`);
      }
      ((t.globalAlpha = 1),
        e.save(),
        (e.globalAlpha = C.SMOKE_OPACITY),
        (e.imageSmoothingEnabled = !0),
        (e.imageSmoothingQuality = oe ? `low` : `high`),
        e.drawImage(this.layer, 0, 0, this.W, this.H),
        e.restore());
    }
  },
  at = Math.PI * 2;
function ot(e, t, n, r, i, a) {
  (e.beginPath(),
    e.roundRect ? e.roundRect(t, n, r, i, a) : e.rect(t, n, r, i));
}
function st(e) {
  let t = document.createElement(`canvas`);
  t.width = t.height = 48;
  let n = t.getContext(`2d`);
  ((n.fillStyle = e), n.fillRect(0, 0, 48, 48));
  let r = 7,
    i = () => (r = (r * 16807) % 2147483647) / 2147483647;
  for (let e = 0; e < 140; e++)
    ((n.fillStyle =
      i() < 0.62
        ? `rgba(90,45,10,${0.1 + i() * 0.22})`
        : `rgba(255,236,200,${0.12 + i() * 0.25})`),
      n.beginPath(),
      n.ellipse(
        i() * 48,
        i() * 48,
        0.6 + i() * 2.2,
        0.5 + i() * 1.4,
        i() * 3,
        0,
        at,
      ),
      n.fill());
  return t;
}
var ct = class {
    constructor(e, t, n) {
      ((this.W = e), (this.H = t), (this.U = Math.min(t, e * 1.25)));
      let r = this.U;
      ((this.trayR = 0.095 * r), (this.ground = t * (t > e ? 0.82 : 0.95)));
      let i = Math.max(0.15 * e, this.trayR * 1.9);
      this.tray = [i, this.ground - Math.max(0.27 * r, 0.26 * t)];
      let a = me([-1, 0.07]),
        o = [i + this.trayR * 0.92, this.tray[1] - this.trayR * 0.08],
        s = C.CIG_LENGTH * r,
        c = ce(o, ue(a, -0.45 * s));
      ((this.layout = {
        U: r,
        tray: this.tray,
        trayR: this.trayR,
        restDir: a,
        restGrip: ce(c, ue(a, C.GRIP_FRAC.vee * s)),
      }),
        (this.smoke = new it(e, t, r, Xe)),
        (this.t = 0),
        this.setBrand(n),
        this.reset());
    }
    setBrand(e) {
      ((this.brand = e),
        this.smoke.setBreath(e.smoke ? { ...Xe, ...e.smoke } : Xe));
      let t = e.stick;
      if (((this.cork = null), t.tip === `cork`)) {
        let e = st(t.tipColor);
        this.cork = document
          .createElement(`canvas`)
          .getContext(`2d`)
          .createPattern(e, `repeat`);
      }
    }
    reset() {
      (this.smoke.reset(),
        (this.flakes = []),
        (this.trayAsh = []),
        (this.sparks = []),
        (this.butt = null),
        (this.cueFade = 1));
    }
    _spawnAsh(e, t) {
      let n = Math.round(4 + t * 40),
        { burnPoint: r, dir: i, width: a } = e,
        o = Math.max(a, t * e.size * (1 - C.FILTER_FRAC));
      for (let e = 0; e < n; e++) {
        let e = ce(r, ue(i, Math.random() * o));
        this.flakes.push({
          x: e[0],
          y: e[1],
          vx: (Math.random() - 0.5) * 0.15 * this.U,
          vy: (Math.random() * 0.1 - 0.05) * this.U,
          r: a * (0.25 + Math.random() * 0.45),
          rot: Math.random() * at,
          spin: (Math.random() - 0.5) * 8,
          shade: 110 + Math.random() * 70,
        });
      }
    }
    _spawnSparks(e, t, n = 1) {
      for (let r = 0; r < t; r++) {
        let t = -Math.PI / 2 + (Math.random() - 0.5) * 2.2,
          r = (0.1 + Math.random() * 0.25) * this.U * n;
        this.sparks.push({
          x: e[0],
          y: e[1],
          vx: Math.cos(t) * r,
          vy: Math.sin(t) * r,
          life: 0,
          max: 0.3 + Math.random() * 0.4,
        });
      }
    }
    _stepParticles(e) {
      let t = 1.4 * this.U,
        [n, r] = this.tray,
        i = this.trayR;
      for (let a = this.flakes.length - 1; a >= 0; a--) {
        let o = this.flakes[a];
        ((o.vy += t * e),
          (o.vx *= 1 - 1.5 * e),
          (o.x += o.vx * e),
          (o.y += o.vy * e),
          (o.rot += o.spin * e));
        let s = (o.x - n) / (i * 0.75);
        o.y > r && o.y < r + i * 0.3 && s * s < 1
          ? (this.trayAsh.length > 80 && this.trayAsh.shift(),
            this.trayAsh.push({
              x: o.x,
              y: r + (Math.random() - 0.3) * i * 0.16,
              r: o.r * 1.2,
              shade: o.shade,
              rot: o.rot,
            }),
            this.flakes.splice(a, 1))
          : o.y > this.H + 20 && this.flakes.splice(a, 1);
      }
      for (let n = this.sparks.length - 1; n >= 0; n--) {
        let r = this.sparks[n];
        if (((r.life += e), r.life > r.max)) {
          this.sparks.splice(n, 1);
          continue;
        }
        ((r.vy += t * 0.5 * e), (r.x += r.vx * e), (r.y += r.vy * e));
      }
    }
    draw(e, t, n, r = {}) {
      this.t += n;
      let i = this.t;
      for (let e of t.events)
        (e.type === `ash` && this._spawnAsh(t, e.amount),
          e.type === `lit` && this._spawnSparks(t.burnPoint, 16, 1),
          e.type === `out` &&
            (this.smoke.side(t.burnPoint, 1, 4),
            (this.butt = { rot: (Math.random() - 0.5) * 0.6 })));
      (t.lit &&
        t.drawIntensity > 0 &&
        Math.random() < n * 14 &&
        this._spawnSparks(t.burnPoint, 1, 0.5),
        t.face &&
          this.smoke.emit(
            t.face.mouthCenter,
            t.face.yaw,
            t.face.jawOpen,
            Math.max(20, t.face.mouthWidth),
            t.exhaleRate,
            t.exhaleKind,
            n,
          ),
        t.lit &&
          this.smoke.side(t.burnPoint, n, t.drawIntensity > 0 ? 0.35 : 1),
        this.smoke.step(n),
        this._stepParticles(n),
        r.demo && this._drawDemoFace(e, t),
        this._drawStand(e),
        t.finished && t.resting ? this._drawButt(e) : this._drawCig(e, t, i),
        t.lighting && this._drawLighter(e, t, i),
        this._drawSparks(e),
        this._drawFlakes(e));
      let a = t.resting && !t.finished ? 1 : 0;
      ((this.cueFade += (a - this.cueFade) * (1 - Math.exp(-6 * n))),
        this.cueFade > 0.02 && this._pickupCues(e, t, this.cueFade),
        t.putDown > 0 && this._putDownCue(e, t.putDown),
        r.debug && this._debug(e, t),
        this.smoke.draw(e));
    }
    _drawStand(e) {
      let [t, n] = this.tray,
        r = this.trayR,
        i = r * 0.34,
        a = this.ground,
        o = se.BRASS,
        s = se.BRASS_LIGHT,
        c = se.BRASS_DARK,
        l = r * 0.55,
        u = (t, n) => {
          let r = e.createLinearGradient(t, 0, n, 0);
          return (
            r.addColorStop(0, c),
            r.addColorStop(0.3, s),
            r.addColorStop(0.55, o),
            r.addColorStop(1, c),
            r
          );
        };
      e.save();
      let d = e.createRadialGradient(t, a, 0, t, a, l * 1.8);
      (d.addColorStop(0, `rgba(20,20,26,0.4)`),
        d.addColorStop(1, `rgba(20,20,26,0)`),
        (e.fillStyle = d),
        e.beginPath(),
        e.ellipse(t, a, l * 1.8, l * 0.42, 0, 0, at),
        e.fill());
      let f = r * 0.12,
        p = e.createLinearGradient(t - l, 0, t + l, 0);
      (p.addColorStop(0, `#0e0e12`),
        p.addColorStop(0.35, `#2c2c34`),
        p.addColorStop(1, `#0b0b0e`),
        (e.fillStyle = p),
        e.beginPath(),
        e.ellipse(t, a, l, l * 0.26, 0, 0, Math.PI),
        e.lineTo(t - l, a - f),
        e.ellipse(t, a - f, l, l * 0.26, 0, Math.PI, 0, !0),
        e.closePath(),
        e.fill());
      let m = e.createRadialGradient(
        t - l * 0.3,
        a - f - l * 0.08,
        0,
        t,
        a - f,
        l,
      );
      (m.addColorStop(0, `#3a3a44`),
        m.addColorStop(1, `#141418`),
        (e.fillStyle = m),
        e.beginPath(),
        e.ellipse(t, a - f, l, l * 0.26, 0, 0, at),
        e.fill(),
        (e.strokeStyle = `rgba(255,255,255,0.08)`),
        (e.lineWidth = Math.max(0.5, r * 0.012)),
        e.beginPath(),
        e.moveTo(t - l * 0.7, a - f + l * 0.05),
        e.quadraticCurveTo(
          t - l * 0.1,
          a - f - l * 0.14,
          t + l * 0.6,
          a - f - l * 0.02,
        ),
        e.stroke(),
        (e.strokeStyle = o),
        (e.lineWidth = Math.max(1, r * 0.03)),
        e.beginPath(),
        e.ellipse(t, a - f, l, l * 0.26, 0, 0, at),
        e.stroke());
      let h = n + i * 1.05,
        g = a - f,
        _ = r * 0.05;
      ((e.fillStyle = u(t - _, t + _)), e.fillRect(t - _, h, _ * 2, g - h));
      for (let n of [0.12, 0.9]) {
        let r = h + (g - h) * n;
        ((e.fillStyle = u(t - _ * 2.2, t + _ * 2.2)),
          e.beginPath(),
          e.ellipse(t, r, _ * 2.2, _ * 0.9, 0, 0, at),
          e.fill());
      }
      let v = r * 0.2;
      ((e.fillStyle = p),
        e.beginPath(),
        e.ellipse(t, n + v, r * 0.72, i * 0.7, 0, 0, Math.PI),
        e.lineTo(t - r, n),
        e.ellipse(t, n, r, i, 0, Math.PI, at),
        e.closePath(),
        e.fill());
      let y = e.createLinearGradient(t - r, 0, t + r, 0);
      (y.addColorStop(0.18, `rgba(255,255,255,0)`),
        y.addColorStop(0.3, `rgba(255,255,255,0.18)`),
        y.addColorStop(0.42, `rgba(255,255,255,0)`),
        (e.fillStyle = y),
        e.fill(),
        (e.fillStyle = `#1b1b21`),
        e.beginPath(),
        e.ellipse(t, n, r, i, 0, 0, at),
        e.fill());
      let b = e.createRadialGradient(t, n + i * 0.3, 0, t, n, r * 0.86);
      (b.addColorStop(0, `#2a2a32`),
        b.addColorStop(1, `#0a0a0d`),
        (e.fillStyle = b),
        e.beginPath(),
        e.ellipse(t, n + i * 0.05, r * 0.86, i * 0.78, 0, 0, at),
        e.fill());
      for (let t of this.trayAsh)
        ((e.fillStyle = `rgb(${t.shade},${t.shade - 4},${t.shade - 8})`),
          e.beginPath(),
          e.ellipse(t.x, t.y, t.r, t.r * 0.55, t.rot, 0, at),
          e.fill());
      ((e.strokeStyle = s),
        (e.lineWidth = Math.max(1, r * 0.035)),
        e.beginPath(),
        e.ellipse(t, n, r, i, 0, 0, at),
        e.stroke(),
        (e.strokeStyle = o),
        (e.lineWidth = Math.max(0.6, r * 0.016)),
        e.beginPath(),
        e.ellipse(t, n + i * 0.05, r * 0.86, i * 0.78, 0, 0, at),
        e.stroke());
      for (let a of [-1, 1]) {
        let o = t + a * r * 0.93;
        ((e.fillStyle = u(o - r * 0.1, o + r * 0.1)),
          ot(e, o - r * 0.09, n - i * 0.28, r * 0.18, i * 0.5, r * 0.05),
          e.fill(),
          (e.fillStyle = `#0a0a0d`),
          e.beginPath(),
          e.ellipse(o, n - i * 0.26, r * 0.05, i * 0.14, 0, 0, at),
          e.fill());
      }
      ((e.strokeStyle = `rgba(255,248,220,0.7)`),
        (e.lineWidth = Math.max(1, r * 0.03)),
        e.beginPath(),
        e.ellipse(t, n, r * 0.99, i * 0.97, 0, Math.PI * 1.18, Math.PI * 1.42),
        e.stroke(),
        e.restore());
    }
    _drawCig(e, t, n) {
      let r = this.brand.stick,
        i = t.size,
        a = r.slim ? t.width * 0.72 : t.width,
        o = a / 2,
        s = i * C.FILTER_FRAC,
        c = i * (1 - C.FILTER_FRAC),
        l = s + c * t.remaining,
        u = c * t.ash,
        d = t.lighting ? t.lightProgress * 0.5 : t.ember;
      if (
        (e.save(),
        e.translate(t.filter[0], t.filter[1]),
        e.rotate(Math.atan2(t.dir[1], t.dir[0])),
        e.save(),
        (e.shadowColor = `rgba(20,20,26,0.35)`),
        (e.shadowBlur = a * 1.1),
        (e.shadowOffsetY = a * 0.45),
        (e.fillStyle = r.paper),
        ot(e, 0, -o, l + u, a, o * 0.5),
        e.fill(),
        e.restore(),
        (e.fillStyle = r.paper),
        e.fillRect(s, -o, l - s, a),
        l - s > a * 1.5)
      ) {
        (e.save(),
          e.beginPath(),
          e.rect(s, -o, l - s, a),
          e.clip(),
          (e.fillStyle = r.print),
          (e.globalAlpha = 0.85),
          (e.font = `600 ${Math.max(4, a * 0.44)}px Lora, Georgia, serif`),
          (e.textBaseline = `middle`));
        let n = this.brand.name.toUpperCase(),
          i = s + a * 0.7;
        if (t.dir[0] < 0) {
          let t = e.measureText(n).width;
          (e.translate(i + t / 2, 0),
            e.rotate(Math.PI),
            e.fillText(n, -t / 2, -a * 0.03));
        } else e.fillText(n, i, a * 0.03);
        e.restore();
      }
      if (t.lit || t.remaining < 1) {
        let t = e.createLinearGradient(l - a * 1.2, 0, l, 0);
        (t.addColorStop(0, `rgba(120,70,30,0)`),
          t.addColorStop(0.7, `rgba(120,70,30,0.35)`),
          t.addColorStop(1, `rgba(40,20,10,0.9)`),
          (e.fillStyle = t),
          e.fillRect(
            Math.max(s, l - a * 1.2),
            -o,
            Math.min(a * 1.2, l - s),
            a,
          ));
      }
      if (
        (this.cork
          ? (this.cork.setTransform?.(new DOMMatrix().scale(a / 14)),
            (e.fillStyle = this.cork))
          : (e.fillStyle = r.tip),
        ot(e, 0, -o, s, a, [o * 0.35, 0, 0, o * 0.35]),
        e.fill(),
        (e.fillStyle = `rgba(245,238,220,0.9)`),
        e.beginPath(),
        e.ellipse(a * 0.04, 0, a * 0.06, o * 0.88, 0, 0, at),
        e.fill(),
        (e.lineWidth = Math.max(0.6, a * 0.07)),
        r.rings.forEach((t, n) => {
          e.strokeStyle = t;
          let r = s - a * (0.18 + n * 0.16);
          (e.beginPath(), e.moveTo(r, -o), e.lineTo(r, o), e.stroke());
        }),
        !t.lit &&
          t.remaining >= 0.999 &&
          d < 0.05 &&
          ((e.fillStyle = `#6b4424`),
          e.beginPath(),
          e.ellipse(l, 0, a * 0.12, o * 0.9, 0, 0, at),
          e.fill()),
        u > 0.5)
      ) {
        let t = e.createLinearGradient(l, 0, l + u, 0);
        (t.addColorStop(0, `#6d6863`),
          t.addColorStop(0.25, `#a19b94`),
          t.addColorStop(1, `#c9c3bb`),
          (e.fillStyle = t),
          ot(e, l, -o * 0.94, u, a * 0.94, [0, o * 0.5, o * 0.5, 0]),
          e.fill(),
          (e.strokeStyle = `rgba(60,55,50,0.35)`),
          (e.lineWidth = Math.max(0.5, a * 0.05)));
        for (let t = 1; t < 6; t++) {
          let n = l + (u * t) / 6;
          (e.beginPath(),
            e.moveTo(n, -o * 0.9),
            e.lineTo(n + a * 0.1, o * 0.9),
            e.stroke());
        }
      }
      if (d > 0.01) {
        let t = 0.85 + 0.1 * Math.sin(n * 19) + 0.05 * Math.sin(n * 47),
          r = e.createLinearGradient(l - a * 0.25, 0, l + a * 0.35, 0);
        (r.addColorStop(0, `rgba(255,110,30,${0.2 * d})`),
          r.addColorStop(
            0.45,
            `rgba(255,${120 + 110 * d},${40 + 80 * d},${Math.min(1, 0.4 + d)})`,
          ),
          r.addColorStop(1, `rgba(200,60,20,${0.6 * d})`),
          (e.fillStyle = r),
          e.fillRect(l - a * 0.25, -o * 0.96, a * 0.6, a * 0.96),
          (e.globalCompositeOperation = `lighter`));
        let i = a * (0.9 + 2.6 * d) * t,
          s = e.createRadialGradient(l, 0, 0, l, 0, i);
        (s.addColorStop(0, `rgba(255,200,120,${0.75 * d})`),
          s.addColorStop(0.4, `rgba(255,110,30,${0.35 * d})`),
          s.addColorStop(1, `rgba(255,60,10,0)`),
          (e.fillStyle = s),
          e.beginPath(),
          e.arc(l, 0, i, 0, at),
          e.fill(),
          (e.globalCompositeOperation = `source-over`));
      }
      let f = e.createLinearGradient(0, -o, 0, o);
      (f.addColorStop(0, `rgba(255,255,255,0.3)`),
        f.addColorStop(0.3, `rgba(255,255,255,0)`),
        f.addColorStop(0.72, `rgba(0,0,0,0.07)`),
        f.addColorStop(1, `rgba(0,0,0,0.3)`),
        (e.fillStyle = f),
        ot(e, 0, -o, l, a, [o * 0.35, 0, 0, o * 0.35]),
        e.fill(),
        e.restore());
    }
    _drawButt(e) {
      let [t, n] = this.tray,
        r = this.trayR,
        i = this.butt || { rot: 0.2 },
        a = this.brand.stick,
        o = C.CIG_LENGTH * this.U * C.CIG_WIDTH_RATIO * (a.slim ? 0.72 : 1),
        s = C.CIG_LENGTH * this.U * (C.FILTER_FRAC + 0.06);
      (e.save(),
        e.translate(t - r * 0.05, n + r * 0.02),
        e.rotate(i.rot),
        this.cork
          ? (this.cork.setTransform?.(new DOMMatrix().scale(o / 14)),
            (e.fillStyle = this.cork))
          : (e.fillStyle = a.tip),
        ot(e, -s / 2, -o / 2, s * 0.8, o, o * 0.2),
        e.fill(),
        (e.fillStyle = a.paper),
        e.fillRect(s * 0.3, -o / 2, s * 0.2, o),
        (e.fillStyle = `#2b2622`),
        e.beginPath(),
        e.ellipse(s * 0.5, 0, o * 0.45, o * 0.7, 0.3, 0, at),
        e.fill(),
        e.restore());
    }
    _drawLighter(e, t, n) {
      let r = this.U,
        i = t.burnPoint,
        a = 0.05 * r * (0.8 + 0.4 * t.lightProgress),
        o = i[1] + a * 0.9,
        s = i[0];
      e.save();
      let c = a * 0.75,
        l = a * 1.6;
      ((e.fillStyle =
        this.brand.pack.accent === `#F4FAF7`
          ? this.brand.pack.body
          : this.brand.pack.accent),
        ot(e, s - c / 2, o + a * 0.18, c, l, c * 0.18),
        e.fill(),
        (e.fillStyle = `#b8b8bc`),
        e.fillRect(s - c / 2, o, c, a * 0.2));
      let u = 1 + 0.08 * Math.sin(n * 31) + 0.05 * Math.sin(n * 17),
        d = a * 1.25 * u,
        f = a * 0.38;
      e.globalCompositeOperation = `lighter`;
      let p = e.createRadialGradient(
        s,
        o - d * 0.35,
        0,
        s,
        o - d * 0.35,
        d * 0.8,
      );
      (p.addColorStop(0, `rgba(255,241,184,0.95)`),
        p.addColorStop(0.4, `rgba(247,169,63,0.7)`),
        p.addColorStop(1, `rgba(224,118,46,0)`),
        (e.fillStyle = p),
        e.beginPath(),
        e.moveTo(s, o - d),
        e.bezierCurveTo(s + f, o - d * 0.45, s + f, o, s, o),
        e.bezierCurveTo(s - f, o, s - f, o - d * 0.45, s, o - d),
        e.fill(),
        (e.fillStyle = `rgba(124,129,214,0.5)`),
        e.beginPath(),
        e.ellipse(s, o - d * 0.12, f * 0.4, d * 0.14, 0, 0, at),
        e.fill(),
        e.restore());
    }
    _drawSparks(e) {
      if (!this.sparks.length) return;
      (e.save(), (e.globalCompositeOperation = `lighter`));
      let t = Math.max(1.5, 0.004 * this.U);
      for (let n of this.sparks) {
        let r = 1 - n.life / n.max;
        ((e.fillStyle = `rgba(255,${150 + 90 * r},${60 * r},${r})`),
          e.beginPath(),
          e.arc(n.x, n.y, t * (0.5 + r), 0, at),
          e.fill());
      }
      e.restore();
    }
    _drawFlakes(e) {
      for (let t of this.flakes)
        ((e.fillStyle = `rgb(${t.shade},${t.shade - 4},${t.shade - 8})`),
          e.beginPath(),
          e.ellipse(t.x, t.y, t.r, t.r * 0.6, t.rot, 0, at),
          e.fill());
    }
    _pickupCues(e, t, n) {
      let r = C.PICKUP_RADIUS * this.U,
        i = 0.5 + 0.5 * Math.sin(this.t * 2.2),
        [a, o] = t.restGrip;
      (e.save(),
        (e.globalAlpha = n),
        (e.lineWidth = 2),
        (e.strokeStyle = se.LAVENDER_LIGHT),
        e.beginPath(),
        e.arc(a, o, r * (0.72 + 0.1 * i), 0, at),
        e.stroke(),
        t.reach > 0 &&
          t.reachPoint &&
          ((e.lineWidth = 1),
          (e.strokeStyle = se.LAVENDER),
          e.beginPath(),
          e.moveTo(a, o),
          e.lineTo(t.reachPoint[0], t.reachPoint[1]),
          e.stroke(),
          (e.lineWidth = 2),
          (e.strokeStyle = se.LAVENDER_LIGHT),
          e.beginPath(),
          e.arc(
            t.reachPoint[0],
            t.reachPoint[1],
            r * (1 - 0.6 * t.reach),
            0,
            at,
          ),
          e.stroke()),
        e.restore());
    }
    _putDownCue(e, t) {
      let [n, r] = this.tray,
        i = this.trayR;
      (e.save(),
        (e.strokeStyle = se.LAVENDER_LIGHT),
        (e.lineWidth = 3),
        e.beginPath(),
        e.ellipse(
          n,
          r,
          i * 1.25,
          i * 0.5,
          0,
          -Math.PI / 2,
          -Math.PI / 2 + at * t,
        ),
        e.stroke(),
        e.restore());
    }
    _drawDemoFace(e, t) {
      let n = t.face;
      if (!n) return;
      let [r, i] = n.mouthCenter,
        a = n.faceWidth;
      (e.save(),
        (e.strokeStyle = `rgba(255,255,227,0.45)`),
        (e.lineWidth = 2),
        e.setLineDash([10, 8]),
        e.beginPath(),
        e.ellipse(r, i - a * 0.45, a * 0.55, a * 0.75, 0, 0, at),
        e.stroke(),
        e.setLineDash([]));
      let o = he(n.pucker + n.funnel, 0, 1);
      ((e.fillStyle = `#9a5a5a`),
        e.beginPath(),
        e.ellipse(
          r,
          i,
          n.mouthWidth * (0.5 - 0.2 * o),
          n.mouthWidth * (0.12 + 0.25 * n.jawOpen + 0.1 * o),
          0,
          0,
          at,
        ),
        e.fill(),
        e.restore());
    }
    _debug(e, t) {
      (e.save(),
        (e.strokeStyle = se.EMBER),
        (e.fillStyle = se.IVORY),
        (e.lineWidth = 2),
        (e.font = `${Math.round(0.018 * this.U)}px Lora, serif`));
      for (let n of t.debugHands || [])
        (e.beginPath(),
          e.arc(n.holdPoint[0], n.holdPoint[1], 8, 0, at),
          e.stroke(),
          e.fillText(
            `${n.kind} ${n.hold.toFixed(2)}`,
            n.holdPoint[0] + 12,
            n.holdPoint[1],
          ));
      (t.face &&
        (e.beginPath(),
        e.arc(t.face.mouthCenter[0], t.face.mouthCenter[1], 8, 0, at),
        e.stroke()),
        e.restore());
    }
  },
  lt = `modulepreload`,
  ut = function (e) {
    return `/` + e;
  },
  dt = {},
  ft = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t
          .map((t) => {
            if (((t = ut(t, n)), (t = s(t)), t in dt)) return;
            dt[t] = !0;
            let r = t.endsWith(`.css`);
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
            let i = document.createElement(`link`);
            if (
              ((i.rel = r ? `stylesheet` : lt),
              r || (i.as = `script`),
              (i.crossOrigin = ``),
              (i.href = t),
              a && i.setAttribute(`nonce`, a),
              document.head.appendChild(i),
              r)
            )
              return new Promise((e, n) => {
                (i.addEventListener(`load`, e),
                  i.addEventListener(`error`, () =>
                    n(Error(`Unable to preload CSS for ${t}`)),
                  ));
              });
          })
          .filter((e) => e !== void 0),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  pt = typeof self < `u` ? self : {};
function mt(e, t) {
  t: {
    for (var n = [`CLOSURE_FLAGS`], r = pt, i = 0; i < n.length; i++)
      if ((r = r[n[i]]) == null) {
        n = null;
        break t;
      }
    n = r;
  }
  return (e = n && n[e]) ?? t;
}
function ht(e, t) {
  e = e.split(`.`);
  for (var n, r = pt; e.length && (n = e.shift());)
    e.length || t === void 0
      ? (r = r[n] && r[n] !== Object.prototype[n] ? r[n] : (r[n] = {}))
      : (r[n] = t);
}
function gt() {
  throw Error(`Invalid UTF8`);
}
function _t(e, t) {
  return ((t = String.fromCharCode.apply(null, t)), e == null ? t : e + t);
}
var vt,
  yt,
  bt = void 0,
  xt = typeof TextDecoder < `u`,
  St = typeof TextEncoder < `u`;
function Ct(e) {
  if (St) e = (yt ||= new TextEncoder()).encode(e);
  else {
    let n = 0,
      r = new Uint8Array(3 * e.length);
    for (let i = 0; i < e.length; i++) {
      var t = e.charCodeAt(i);
      if (t < 128) r[n++] = t;
      else {
        if (t < 2048) r[n++] = (t >> 6) | 192;
        else {
          if (t >= 55296 && t <= 57343) {
            if (t <= 56319 && i < e.length) {
              let a = e.charCodeAt(++i);
              if (a >= 56320 && a <= 57343) {
                ((t = 1024 * (t - 55296) + a - 56320 + 65536),
                  (r[n++] = (t >> 18) | 240),
                  (r[n++] = ((t >> 12) & 63) | 128),
                  (r[n++] = ((t >> 6) & 63) | 128),
                  (r[n++] = (63 & t) | 128));
                continue;
              }
              i--;
            }
            t = 65533;
          }
          ((r[n++] = (t >> 12) | 224), (r[n++] = ((t >> 6) & 63) | 128));
        }
        r[n++] = (63 & t) | 128;
      }
    }
    e = n === r.length ? r : r.subarray(0, n);
  }
  return e;
}
function wt(e) {
  pt.setTimeout(() => {
    throw e;
  }, 0);
}
var Tt = mt(610401301, !1),
  Et = mt(748402147, !0);
function Dt() {
  var e = pt.navigator;
  return (e &&= e.userAgent) ? e : ``;
}
var Ot,
  kt = pt.navigator;
function At(e) {
  return (At[` `](e), e);
}
((Ot = (kt && kt.userAgentData) || null), (At[` `] = function () {}));
var jt = {},
  Mt = null;
function Nt(e) {
  var t = e.length,
    n = (3 * t) / 4;
  n % 3
    ? (n = Math.floor(n))
    : `=.`.indexOf(e[t - 1]) != -1 &&
      (n = `=.`.indexOf(e[t - 2]) == -1 ? n - 1 : n - 2);
  var r = new Uint8Array(n),
    i = 0;
  return (
    (function (e, t) {
      function n(t) {
        for (; r < e.length;) {
          let t = e.charAt(r++),
            n = Mt[t];
          if (n != null) return n;
          if (!/^[\s\xa0]*$/.test(t))
            throw Error(`Unknown base64 encoding at char: ` + t);
        }
        return t;
      }
      Pt();
      for (var r = 0; ;) {
        let e = n(-1),
          r = n(0),
          i = n(64),
          a = n(64);
        if (a === 64 && e === -1) break;
        (t((e << 2) | (r >> 4)),
          i != 64 &&
            (t(((r << 4) & 240) | (i >> 2)),
            a != 64 && t(((i << 6) & 192) | a)));
      }
    })(e, function (e) {
      r[i++] = e;
    }),
    i === n ? r : r.subarray(0, i)
  );
}
function Pt() {
  if (!Mt) {
    Mt = {};
    var e =
        `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(
          ``,
        ),
      t = [`+/=`, `+/`, `-_=`, `-_.`, `-_`];
    for (let n = 0; n < 5; n++) {
      let r = e.concat(t[n].split(``));
      jt[n] = r;
      for (let e = 0; e < r.length; e++) {
        let t = r[e];
        Mt[t] === void 0 && (Mt[t] = e);
      }
    }
  }
}
var Ft = typeof Uint8Array < `u`,
  It =
    (!!(Tt && Ot && Ot.brands.length > 0) ||
      (Dt().indexOf(`Trident`) == -1 && Dt().indexOf(`MSIE`) == -1)) &&
    typeof btoa == `function`,
  Lt = /[-_.]/g,
  Rt = { "-": `+`, _: `/`, ".": `=` };
function zt(e) {
  return Rt[e] || ``;
}
function Bt(e) {
  if (!It) return Nt(e);
  ((e = Lt.test(e) ? e.replace(Lt, zt) : e), (e = atob(e)));
  var t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
function Vt(e) {
  return Ft && e != null && e instanceof Uint8Array;
}
var Ht = {};
function Ut() {
  return (Gt ||= new Kt(null, Ht));
}
function Wt(e) {
  qt(Ht);
  var t = e.g;
  return (t = t == null || Vt(t) ? t : typeof t == `string` ? Bt(t) : null) ==
    null
    ? t
    : (e.g = t);
}
var Gt,
  Kt = class {
    h() {
      return new Uint8Array(Wt(this) || 0);
    }
    constructor(e, t) {
      if ((qt(t), (this.g = e), e != null && e.length === 0))
        throw Error(`ByteString should be constructed with non-empty values`);
    }
  };
function qt(e) {
  if (e !== Ht) throw Error(`illegal external caller`);
}
function Jt(e, t) {
  ((e.__closure__error__context__984382 ||= {}),
    (e.__closure__error__context__984382.severity = t));
}
var Yt = void 0;
function Xt(e) {
  return (Jt((e = Error(e)), `warning`), e);
}
function Zt(e, t) {
  if (e != null) {
    var n = (Yt ??= {}),
      r = n[e] || 0;
    r >= t || ((n[e] = r + 1), Jt((e = Error()), `incident`), wt(e));
  }
}
function Qt() {
  return typeof BigInt == `function`;
}
var $t = typeof Symbol == `function` && typeof Symbol() == `symbol`;
function en(e, t, n = !1) {
  return typeof Symbol == `function` && typeof Symbol() == `symbol`
    ? n && Symbol.for && e
      ? Symbol.for(e)
      : e == null
        ? Symbol()
        : Symbol(e)
    : t;
}
var tn,
  nn = en(`jas`, void 0, !0),
  rn = en(void 0, `0di`),
  an = en(void 0, `1oa`),
  on = en(void 0, Symbol()),
  T = en(void 0, `0ub`),
  sn = en(void 0, `0ubs`),
  cn = en(void 0, `0ubsb`),
  ln = en(void 0, `0actk`),
  un = en(`m_m`, `kb`, !0),
  dn = en(),
  fn = { Va: { value: 0, configurable: !0, writable: !0, enumerable: !1 } },
  pn = Object.defineProperties,
  E = $t ? nn : `Va`,
  mn = [];
function hn(e, t) {
  ($t || E in e || pn(e, fn), (e[E] |= t));
}
function gn(e, t) {
  ($t || E in e || pn(e, fn), (e[E] = t));
}
function _n(e) {
  return (hn(e, 34), e);
}
function vn(e) {
  return (hn(e, 8192), e);
}
(gn(mn, 7), (tn = Object.freeze(mn)));
var yn = {};
function bn(e, t) {
  return t === void 0 ? e.h !== xn && !!(2 & e.A[E]) : !!(2 & t) && e.h !== xn;
}
var xn = {};
function Sn(e, t) {
  if (e != null) {
    if (typeof e == `string`) e = e ? new Kt(e, Ht) : Ut();
    else if (e.constructor !== Kt) {
      if (Vt(e)) e = e.length ? new Kt(new Uint8Array(e), Ht) : Ut();
      else {
        if (!t) throw Error();
        e = void 0;
      }
    }
  }
  return e;
}
var Cn = class {
    constructor(e, t, n) {
      ((this.g = e), (this.h = t), (this.j = n));
    }
    next() {
      var e = this.g.next();
      return (e.done || (e.value = this.h.call(this.j, e.value)), e);
    }
    [Symbol.iterator]() {
      return this;
    }
  },
  wn = Object.freeze({});
function Tn(e, t, n) {
  var r,
    i = 128 & t ? 0 : -1,
    a = e.length;
  (r = !!a) &&
    (r =
      (r = e[a - 1]) != null &&
      typeof r == `object` &&
      r.constructor === Object);
  var o = a + (r ? -1 : 0);
  for (t = 128 & t ? 1 : 0; t < o; t++) n(t - i, e[t]);
  if (r) {
    e = e[a - 1];
    for (let t in e) !isNaN(t) && n(+t, e[t]);
  }
}
var En = {};
function Dn(e) {
  return 128 & e ? En : void 0;
}
function On(e) {
  return ((e.ib = !0), e);
}
var kn = On((e) => typeof e == `number`),
  An = On((e) => typeof e == `string`),
  jn = On((e) => typeof e == `boolean`),
  Mn = typeof pt.BigInt == `function` && typeof pt.BigInt(0) == `bigint`;
function Nn(e) {
  var t = e;
  if (An(t)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t)) throw Error(String(t));
  } else if (kn(t) && !Number.isSafeInteger(t)) throw Error(String(t));
  return Mn
    ? BigInt(e)
    : (e = jn(e) ? (e ? `1` : `0`) : An(e) ? e.trim() || `0` : String(e));
}
var Pn = On((e) =>
    Mn ? e >= In && e <= Rn : e[0] === `-` ? zn(e, Fn) : zn(e, Ln),
  ),
  Fn = (-(2 ** 53 - 1)).toString(),
  In = Mn ? BigInt(-(2 ** 53 - 1)) : void 0,
  Ln = (2 ** 53 - 1).toString(),
  Rn = Mn ? BigInt(2 ** 53 - 1) : void 0;
function zn(e, t) {
  if (e.length > t.length) return !1;
  if (e.length < t.length || e === t) return !0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (r > i) return !1;
    if (r < i) return !0;
  }
}
var Bn,
  Vn = typeof Uint8Array.prototype.slice == `function`,
  D = 0,
  O = 0;
function Hn(e) {
  var t = e >>> 0;
  ((D = t), (O = ((e - t) / 4294967296) >>> 0));
}
function Un(e) {
  if (e < 0) {
    Hn(-e);
    let [t, n] = Qn(D, O);
    ((D = t >>> 0), (O = n >>> 0));
  } else Hn(e);
}
function Wn(e) {
  var t = (Bn ||= new DataView(new ArrayBuffer(8)));
  (t.setFloat32(0, +e, !0), (O = 0), (D = t.getUint32(0, !0)));
}
function Gn(e, t) {
  var n = 4294967296 * t + (e >>> 0);
  return Number.isSafeInteger(n) ? n : Jn(e, t);
}
function Kn(e, t) {
  return Nn(
    Qt()
      ? BigInt.asUintN(64, (BigInt(t >>> 0) << BigInt(32)) + BigInt(e >>> 0))
      : Jn(e, t),
  );
}
function qn(e, t) {
  return Qt()
    ? Nn(
        BigInt.asIntN(
          64,
          (BigInt.asUintN(32, BigInt(t)) << BigInt(32)) +
            BigInt.asUintN(32, BigInt(e)),
        ),
      )
    : Nn(Xn(e, t));
}
function Jn(e, t) {
  if (((e >>>= 0), (t >>>= 0) <= 2097151)) var n = `` + (4294967296 * t + e);
  else
    Qt()
      ? (n = `` + ((BigInt(t) << BigInt(32)) | BigInt(e)))
      : ((e =
          (16777215 & e) +
          6777216 * (n = 16777215 & ((e >>> 24) | (t << 8))) +
          6710656 * (t = (t >> 16) & 65535)),
        (n += 8147497 * t),
        (t *= 2),
        e >= 1e7 && ((n += (e / 1e7) >>> 0), (e %= 1e7)),
        n >= 1e7 && ((t += (n / 1e7) >>> 0), (n %= 1e7)),
        (n = t + Yn(n) + Yn(e)));
  return n;
}
function Yn(e) {
  return ((e = String(e)), `0000000`.slice(e.length) + e);
}
function Xn(e, t) {
  if (2147483648 & t) {
    if (Qt()) e = `` + ((BigInt(0 | t) << BigInt(32)) | BigInt(e >>> 0));
    else {
      let [n, r] = Qn(e, t);
      e = `-` + Jn(n, r);
    }
  } else e = Jn(e, t);
  return e;
}
function Zn(e) {
  if (e.length < 16) Un(Number(e));
  else if (Qt())
    ((e = BigInt(e)),
      (D = Number(e & BigInt(4294967295)) >>> 0),
      (O = Number((e >> BigInt(32)) & BigInt(4294967295))));
  else {
    let t = +(e[0] === `-`);
    O = D = 0;
    let n = e.length;
    for (let r = t, i = ((n - t) % 6) + t; i <= n; r = i, i += 6) {
      let t = Number(e.slice(r, i));
      ((O *= 1e6),
        (D = 1e6 * D + t) >= 4294967296 &&
          ((O += Math.trunc(D / 4294967296)), (O >>>= 0), (D >>>= 0)));
    }
    if (t) {
      let [e, t] = Qn(D, O);
      ((D = e), (O = t));
    }
  }
}
function Qn(e, t) {
  return ((t = ~t), e ? (e = 1 + ~e) : (t += 1), [e, t]);
}
function $n(e) {
  return Array.prototype.slice.call(e);
}
var er = typeof BigInt == `function` ? BigInt.asIntN : void 0,
  tr = typeof BigInt == `function` ? BigInt.asUintN : void 0,
  nr = Number.isSafeInteger,
  rr = Number.isFinite,
  ir = Math.trunc,
  ar = Nn(0);
function or(e) {
  if (typeof e != `number`)
    throw Error(
      `Value of float/double field must be a number, found ${typeof e}: ${e}`,
    );
  return e;
}
function sr(e) {
  return e == null || typeof e == `number`
    ? e
    : e === `NaN` || e === `Infinity` || e === `-Infinity`
      ? Number(e)
      : void 0;
}
function cr(e) {
  if (typeof e != `boolean`) {
    var t = typeof e;
    throw Error(
      `Expected boolean but got ${t == `object` ? (e ? (Array.isArray(e) ? `array` : t) : `null`) : t}: ${e}`,
    );
  }
  return e;
}
var lr = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function ur(e) {
  switch (typeof e) {
    case `bigint`:
      return !0;
    case `number`:
      return rr(e);
    case `string`:
      return lr.test(e);
    default:
      return !1;
  }
}
function dr(e) {
  if (e != null) {
    if (!rr(e)) throw Xt(`enum`);
    e |= 0;
  }
  return e;
}
function fr(e) {
  if (e == null) return e;
  if (typeof e == `string` && e) e = +e;
  else if (typeof e != `number`) return;
  return rr(e) ? 0 | e : void 0;
}
function pr(e) {
  if (e == null) return e;
  if (typeof e == `string` && e) e = +e;
  else if (typeof e != `number`) return;
  return rr(e) ? e >>> 0 : void 0;
}
function mr(e, t) {
  if (((t ??= 1024), !ur(e))) throw Xt(`int64`);
  var n = typeof e;
  switch (t) {
    case 512:
      switch (n) {
        case `string`:
          return br(e);
        case `bigint`:
          return String(er(64, e));
        default:
          return yr(e);
      }
    case 1024:
      switch (n) {
        case `string`:
          return xr(e);
        case `bigint`:
          return Nn(er(64, e));
        default:
          return Sr(e);
      }
    case 0:
      switch (n) {
        case `string`:
          return br(e);
        case `bigint`:
          return Nn(er(64, e));
        default:
          return _r(e);
      }
    default:
      return (function (e, t = `unexpected value ${e}!`) {
        throw Error(t);
      })(t, `Unknown format requested type for int64`);
  }
}
function hr(e) {
  var t = e.length;
  return (
    e[0] === `-`
      ? t < 20 || (t === 20 && e <= `-9223372036854775808`)
      : t < 19 || (t === 19 && e <= `9223372036854775807`)
  )
    ? e
    : (Zn(e), Xn(D, O));
}
function gr(e) {
  if (e[0] === `-`) var t = !1;
  else t = (t = e.length) < 20 || (t === 20 && e <= `18446744073709551615`);
  return t ? e : (Zn(e), Jn(D, O));
}
function _r(e) {
  if (((e = ir(e)), !nr(e))) {
    Un(e);
    var t = D,
      n = O;
    ((e = 2147483648 & n) &&
      ((n = ~n >>> 0), (t = (1 + ~t) >>> 0) == 0 && (n = (n + 1) >>> 0)),
      (e = typeof (t = Gn(t, n)) == `number` ? (e ? -t : t) : e ? `-` + t : t));
  }
  return e;
}
function vr(e) {
  return (((e = ir(e)) >= 0 && nr(e)) || (Un(e), (e = Gn(D, O))), e);
}
function yr(e) {
  return ((e = ir(e)), nr(e) ? (e = String(e)) : (Un(e), (e = Xn(D, O))), e);
}
function br(e) {
  var t = ir(Number(e));
  return nr(t)
    ? String(t)
    : ((t = e.indexOf(`.`)) !== -1 && (e = e.substring(0, t)), hr(e));
}
function xr(e) {
  var t = ir(Number(e));
  return nr(t)
    ? Nn(t)
    : ((t = e.indexOf(`.`)) !== -1 && (e = e.substring(0, t)),
      Qt() ? Nn(er(64, BigInt(e))) : Nn(hr(e)));
}
function Sr(e) {
  return nr(e) ? Nn(_r(e)) : Nn(yr(e));
}
function Cr(e) {
  var t = typeof e;
  return e == null
    ? e
    : t === `bigint`
      ? Nn(er(64, e))
      : ur(e)
        ? t === `string`
          ? xr(e)
          : Sr(e)
        : void 0;
}
function wr(e) {
  if (e == null) return e;
  var t = typeof e;
  if (t === `bigint`) return String(er(64, e));
  if (ur(e)) {
    if (t === `string`) return br(e);
    if (t === `number`) return _r(e);
  }
}
function Tr(e) {
  if (e == null || typeof e == `string` || e instanceof Kt) return e;
}
function Er(e) {
  if (typeof e != `string`) throw Error();
  return e;
}
function Dr(e) {
  if (e != null && typeof e != `string`) throw Error();
  return e;
}
function Or(e) {
  return e == null || typeof e == `string` ? e : void 0;
}
function kr(e, t, n, r) {
  return e != null && e[un] === yn
    ? e
    : Array.isArray(e)
      ? ((r = (n = 0 | e[E]) | (32 & r) | (2 & r)) !== n && gn(e, r), new t(e))
      : (n
          ? 2 & r
            ? ((e = t[rn]) || (_n((e = new t()).A), (e = t[rn] = e)), (t = e))
            : (t = new t())
          : (t = void 0),
        t);
}
function Ar(e, t, n) {
  return (e = t ? mr(e, 1024) : Cr(e)) ?? (n ? ar : void 0);
}
function jr(e) {
  return e;
}
var Mr = {},
  Nr = (function () {
    try {
      return (
        At(
          new (class extends Map {
            constructor() {
              super();
            }
          })(),
        ),
        !1
      );
    } catch {
      return !0;
    }
  })(),
  Pr = class {
    constructor() {
      this.g = new Map();
    }
    get(e) {
      return this.g.get(e);
    }
    set(e, t) {
      return (this.g.set(e, t), (this.size = this.g.size), this);
    }
    delete(e) {
      return ((e = this.g.delete(e)), (this.size = this.g.size), e);
    }
    clear() {
      (this.g.clear(), (this.size = this.g.size));
    }
    has(e) {
      return this.g.has(e);
    }
    entries() {
      return this.g.entries();
    }
    keys() {
      return this.g.keys();
    }
    values() {
      return this.g.values();
    }
    forEach(e, t) {
      return this.g.forEach(e, t);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  },
  Fr = Nr
    ? (Object.setPrototypeOf(Pr.prototype, Map.prototype),
      Object.defineProperties(Pr.prototype, {
        size: { value: 0, configurable: !0, enumerable: !0, writable: !0 },
      }),
      Pr)
    : class extends Map {
        constructor() {
          super();
        }
      };
function Ir(e) {
  return e;
}
function Lr(e) {
  if (2 & e.M) throw Error(`Cannot mutate an immutable Map`);
}
var Rr,
  zr = class extends Fr {
    constructor(e, t, n = Ir, r = Ir) {
      (super(),
        (this.M = 0 | e[E]),
        (this.N = t),
        (this.ba = n),
        (this.na = this.N ? Br : r));
      for (let i = 0; i < e.length; i++) {
        let a = e[i],
          o = n(a[0], !1, !0),
          s = a[1];
        (t
          ? s === void 0 && (s = null)
          : (s = r(a[1], !1, !0, void 0, void 0, this.M)),
          super.set(o, s));
      }
    }
    ea(e) {
      return vn(Array.from(super.entries(), e));
    }
    clear() {
      (Lr(this), super.clear());
    }
    delete(e) {
      return (Lr(this), super.delete(this.ba(e, !0, !1)));
    }
    entries() {
      if (this.N) {
        var e = super.keys();
        e = new Cn(e, Vr, this);
      } else e = super.entries();
      return e;
    }
    values() {
      if (this.N) {
        var e = super.keys();
        e = new Cn(e, zr.prototype.get, this);
      } else e = super.values();
      return e;
    }
    forEach(e, t) {
      this.N
        ? super.forEach((n, r, i) => {
            e.call(t, i.get(r), r, i);
          })
        : super.forEach(e, t);
    }
    set(e, t) {
      return (
        Lr(this),
        (e = this.ba(e, !0, !1)) == null
          ? this
          : t == null
            ? (super.delete(e), this)
            : super.set(e, this.na(t, !0, !0, this.N, !1, this.M))
      );
    }
    gb(e) {
      var t = this.ba(e[0], !1, !0);
      ((e = e[1]),
        (e = this.N
          ? e === void 0
            ? null
            : e
          : this.na(e, !1, !0, void 0, !1, this.M)),
        super.set(t, e));
    }
    has(e) {
      return super.has(this.ba(e, !1, !1));
    }
    get(e) {
      e = this.ba(e, !1, !1);
      var t = super.get(e);
      if (t !== void 0) {
        var n = this.N;
        return n
          ? ((n = this.na(t, !1, !0, n, this.Fa, this.M)) !== t &&
              super.set(e, n),
            n)
          : t;
      }
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
function Br(e, t, n, r, i, a) {
  return ((e = kr(e, r, n, a)), i && (e = si(e)), e);
}
function Vr(e) {
  return [e, this.get(e)];
}
function Hr() {
  return (Rr ||= new zr(_n([]), void 0, void 0, void 0, Mr));
}
function Ur(e) {
  return on ? e[on] : void 0;
}
function Wr(e, t) {
  for (let n in e) !isNaN(n) && t(e, +n, e[n]);
}
zr.prototype.toJSON = void 0;
var Gr,
  Kr,
  qr = class {},
  Jr = { cb: !0 };
function Yr(e, t) {
  t < 100 || Zt(sn, 1);
}
function Xr(e, t, n, r) {
  var i = r !== void 0;
  r = !!r;
  var a,
    o = on;
  (!i && $t && o && (a = e[o]) && Wr(a, Yr), (o = []));
  var s = e.length;
  a = 4294967295;
  var c = !1,
    l = !!(64 & t),
    u = l ? (128 & t ? 0 : -1) : void 0;
  if (!(1 & t)) {
    var d = s && e[s - 1];
    (typeof d == `object` && d && d.constructor === Object
      ? (a = --s)
      : (d = void 0),
      !l || 128 & t || i || ((c = !0), (a = jr(a - u, u, e, d, void 0) + u)));
  }
  t = void 0;
  for (var f = 0; f < s; f++) {
    let i = e[f];
    if (i != null && (i = n(i, r)) != null) {
      if (l && f >= a) {
        let e = f - u;
        (t ??= {})[e] = i;
      } else o[f] = i;
    }
  }
  if (d)
    for (let e in d) {
      if ((s = d[e]) == null || (s = n(s, r)) == null) continue;
      let i;
      ((f = +e),
        l && !Number.isNaN(f) && (i = f + u) < a
          ? (o[i] = s)
          : ((t ??= {})[e] = s));
    }
  return (
    t && (c ? o.push(t) : (o[a] = t)),
    i &&
      on &&
      (e = Ur(e)) &&
      e instanceof qr &&
      (o[on] = (function (e) {
        var t = new qr();
        return (
          Wr(e, (e, n, r) => {
            t[n] = $n(r);
          }),
          (t.ka = e.ka),
          t
        );
      })(e)),
    o
  );
}
function Zr(e) {
  return ((e[0] = Qr(e[0])), (e[1] = Qr(e[1])), e);
}
function Qr(e) {
  switch (typeof e) {
    case `number`:
      return Number.isFinite(e) ? e : `` + e;
    case `bigint`:
      return Pn(e) ? Number(e) : `` + e;
    case `boolean`:
      return +!!e;
    case `object`:
      if (Array.isArray(e)) {
        var t = 0 | e[E];
        return e.length === 0 && 1 & t ? void 0 : Xr(e, t, Qr);
      }
      if (e != null && e[un] === yn) return $r(e);
      if (e instanceof Kt) {
        if ((t = e.g) == null) e = ``;
        else if (typeof t == `string`) e = t;
        else {
          if (It) {
            for (var n = ``, r = 0, i = t.length - 10240; r < i;)
              n += String.fromCharCode.apply(null, t.subarray(r, (r += 10240)));
            ((n += String.fromCharCode.apply(null, r ? t.subarray(r) : t)),
              (t = btoa(n)));
          } else {
            (n === void 0 && (n = 0),
              Pt(),
              (n = jt[n]),
              (r = Array(Math.floor(t.length / 3))),
              (i = n[64] || ``));
            let e = 0,
              l = 0;
            for (; e < t.length - 2; e += 3) {
              var a = t[e],
                o = t[e + 1],
                s = t[e + 2],
                c = n[a >> 2];
              ((a = n[((3 & a) << 4) | (o >> 4)]),
                (o = n[((15 & o) << 2) | (s >> 6)]),
                (s = n[63 & s]),
                (r[l++] = c + a + o + s));
            }
            switch (((c = 0), (s = i), t.length - e)) {
              case 2:
                s = n[(15 & (c = t[e + 1])) << 2] || i;
              case 1:
                ((t = t[e]),
                  (r[l] = n[t >> 2] + n[((3 & t) << 4) | (c >> 4)] + s + i));
            }
            t = r.join(``);
          }
          e = e.g = t;
        }
        return e;
      }
      return e instanceof zr ? (e = e.size === 0 ? void 0 : e.ea(Zr)) : void 0;
  }
  return e;
}
function $r(e) {
  return Xr((e = e.A), 0 | e[E], Qr);
}
function ei(e, t) {
  return ti(e, t[0], t[1]);
}
function ti(e, t, n, r = 0) {
  if (e == null) {
    var i = 32;
    (n ? ((e = [n]), (i |= 128)) : (e = []),
      t && (i = (-16760833 & i) | ((1023 & t) << 14)));
  } else {
    if (!Array.isArray(e)) throw Error(`narr`);
    if (((i = 0 | e[E]), Et && 1 & i)) throw Error(`rfarr`);
    if (
      (2048 & i &&
        !(2 & i) &&
        (function () {
          if (Et) throw Error(`carr`);
          Zt(ln, 5);
        })(),
      256 & i)
    )
      throw Error(`farr`);
    if (64 & i) return ((i | r) !== i && gn(e, i | r), e);
    if (n && ((i |= 128), n !== e[0])) throw Error(`mid`);
    t: {
      i |= 64;
      var a = (n = e).length;
      if (a) {
        var o = a - 1;
        let e = n[o];
        if (typeof e == `object` && e && e.constructor === Object) {
          if ((o -= t = 128 & i ? 0 : -1) >= 1024) throw Error(`pvtlmt`);
          for (var s in e) (a = +s) < o && ((n[a + t] = e[s]), delete e[s]);
          i = (-16760833 & i) | ((1023 & o) << 14);
          break t;
        }
      }
      if (t) {
        if ((s = Math.max(t, a - (128 & i ? 0 : -1))) > 1024)
          throw Error(`spvt`);
        i = (-16760833 & i) | ((1023 & s) << 14);
      }
    }
  }
  return (gn(e, 64 | i | r), e);
}
function ni(e, t) {
  if (typeof e != `object`) return e;
  if (Array.isArray(e)) {
    var n = 0 | e[E];
    return e.length === 0 && 1 & n ? void 0 : ri(e, n, t);
  }
  if (e != null && e[un] === yn) return ai(e);
  if (e instanceof zr) {
    if (2 & (t = e.M)) return e;
    if (!e.size) return;
    if (((n = _n(e.ea())), e.N))
      for (e = 0; e < n.length; e++) {
        let r = n[e],
          i = r[1];
        ((i =
          typeof i != `object` || !i
            ? void 0
            : i != null && i[un] === yn
              ? ai(i)
              : Array.isArray(i)
                ? ri(i, 0 | i[E], !!(32 & t))
                : void 0),
          (r[1] = i));
      }
    return n;
  }
  return e instanceof Kt ? e : void 0;
}
function ri(e, t, n) {
  return (
    2 & t ||
      (!n || 4096 & t || 16 & t
        ? (e = oi(e, t, !1, n && !(16 & t)))
        : (hn(e, 34), 4 & t && Object.freeze(e))),
    e
  );
}
function ii(e, t, n) {
  return ((e = new e.constructor(t)), n && (e.h = xn), (e.m = xn), e);
}
function ai(e) {
  var t = e.A,
    n = 0 | t[E];
  return bn(e, n) ? e : di(e, t, n) ? ii(e, t) : oi(t, n);
}
function oi(e, t, n, r) {
  return (
    (r ??= !!(34 & t)),
    (e = Xr(e, t, ni, r)),
    (r = 32),
    n && (r |= 2),
    gn(e, (t = (16769217 & t) | r)),
    e
  );
}
function si(e) {
  var t = e.A,
    n = 0 | t[E];
  return bn(e, n)
    ? di(e, t, n)
      ? ii(e, t, !0)
      : new e.constructor(oi(t, n, !1))
    : e;
}
function ci(e) {
  if (e.h !== xn) return !1;
  var t = e.A;
  return (
    hn((t = oi(t, 0 | t[E])), 2048),
    (e.A = t),
    (e.h = void 0),
    (e.m = void 0),
    !0
  );
}
function li(e) {
  if (!ci(e) && bn(e, 0 | e.A[E])) throw Error();
}
function ui(e, t) {
  (t === void 0 && (t = 0 | e[E]), 32 & t && !(4096 & t) && gn(e, 4096 | t));
}
function di(e, t, n) {
  return (
    !!(2 & n) || (!(!(32 & n) || 4096 & n) && (gn(t, 2 | n), (e.h = xn), !0))
  );
}
var fi = Nn(0),
  pi = {};
function mi(e, t, n, r) {
  if ((t = hi(e.A, t, void 0, r)) !== null || (n && e.m !== xn)) return t;
}
function hi(e, t, n, r) {
  if (t === -1) return null;
  var i = t + (n ? 0 : -1),
    a = e.length - 1;
  if (!(a < 1 + (n ? 0 : -1))) {
    if (i >= a) {
      var o = e[a];
      if (typeof o == `object` && o && o.constructor === Object) {
        n = o[t];
        var s = !0;
      } else {
        if (i !== a) return;
        n = o;
      }
    } else n = e[i];
    if (r && n != null) {
      if ((r = r(n)) == null) return r;
      if (!Object.is(r, n)) return (s ? (o[t] = r) : (e[i] = r), r);
    }
    return n;
  }
}
function k(e, t, n, r) {
  li(e);
  var i = e.A;
  return (gi(i, 0 | i[E], t, n, r), e);
}
function gi(e, t, n, r, i) {
  var a = n + (i ? 0 : -1),
    o = e.length - 1;
  if (o >= 1 + (i ? 0 : -1) && a >= o) {
    let i = e[o];
    if (typeof i == `object` && i && i.constructor === Object)
      return ((i[n] = r), t);
  }
  return a <= o
    ? ((e[a] = r), t)
    : (r !== void 0 &&
        (n >= (o = ((t ??= 0 | e[E]) >> 14) & 1023 || 536870912)
          ? r != null && (e[o + (i ? 0 : -1)] = { [n]: r })
          : (e[a] = r)),
      t);
}
function _i(e, t, n, r) {
  var i = e.A;
  return Ni(i, 0 | i[E], t, (e = Oi(e, r) === n ? n : -1)) !== void 0;
}
function vi() {
  return wn === void 0 ? 2 : 4;
}
function yi(e, t, n, r, i) {
  var a = e.A,
    o = 0 | a[E];
  ((r = bn(e, o) ? 1 : r),
    (i = !!i || r === 3),
    r === 2 && ci(e) && (o = 0 | (a = e.A)[E]));
  var s = (e = xi(a, t)) === tn ? 7 : 0 | e[E],
    c = Si(s, o),
    l = !(4 & c);
  if (l) {
    4 & c && ((e = $n(e)), (s = 0), (c = zi(c, o)), (o = gi(a, o, t, e)));
    let r = 0,
      i = 0;
    for (; r < e.length; r++) {
      let t = n(e[r]);
      t != null && (e[i++] = t);
    }
    (i < r && (e.length = i),
      (n = (-513 & c) | 4),
      (c = n &= -1025),
      (c &= -4097));
  }
  return (
    c !== s && (gn(e, c), 2 & c && Object.freeze(e)),
    bi(e, c, a, o, t, r, l, i)
  );
}
function bi(e, t, n, r, i, a, o, s) {
  var c = t;
  return (
    a === 1 || (a === 4 && (2 & t || (!(16 & t) && 32 & r)))
      ? Ci(t) ||
        ((t |=
          !e.length || (o && !(4096 & t)) || (32 & r && !(4096 & t || 16 & t))
            ? 2
            : 256) !== c && gn(e, t),
        Object.freeze(e))
      : (a === 2 &&
          Ci(t) &&
          ((e = $n(e)), (c = 0), (t = zi(t, r)), (r = gi(n, r, i, e))),
        Ci(t) || (s || (t |= 16), t !== c && gn(e, t))),
    2 & t || !(4096 & t || 16 & t) || ui(n, r),
    e
  );
}
function xi(e, t, n) {
  return ((e = hi(e, t, n)), Array.isArray(e) ? e : tn);
}
function Si(e, t) {
  return (2 & t && (e |= 2), 1 | e);
}
function Ci(e) {
  return (!!(2 & e) && !!(4 & e)) || !!(256 & e);
}
function wi(e) {
  return Sn(e, !0);
}
function Ti(e) {
  e = $n(e);
  for (let t = 0; t < e.length; t++) {
    let n = (e[t] = $n(e[t]));
    Array.isArray(n[1]) && (n[1] = _n(n[1]));
  }
  return vn(e);
}
function Ei(e, t, n, r) {
  (li(e),
    gi(
      (e = e.A),
      0 | e[E],
      t,
      (r === `0` ? Number(n) === 0 : n === r) ? void 0 : n,
    ));
}
function Di(e, t, n) {
  if (2 & t) throw Error();
  var r = Dn(t),
    i = xi(e, n, r),
    a = i === tn ? 7 : 0 | i[E],
    o = Si(a, t);
  return (
    (2 & o || Ci(o) || 16 & o) &&
      (o === a || Ci(o) || gn(i, o),
      (i = $n(i)),
      (a = 0),
      (o = zi(o, t)),
      gi(e, t, n, i, r)),
    (o &= -13) !== a && gn(i, o),
    i
  );
}
function Oi(e, t) {
  return ji(ki((e = e.A)), e, void 0, t);
}
function ki(e) {
  if ($t) return e[an] ?? (e[an] = new Map());
  if (an in e) return e[an];
  var t = new Map();
  return (Object.defineProperty(e, an, { value: t }), t);
}
function Ai(e, t, n, r, i) {
  var a = ki(e),
    o = ji(a, e, t, n, i);
  return (o !== r && (o && (t = gi(e, t, o, void 0, i)), a.set(n, r)), t);
}
function ji(e, t, n, r, i) {
  var a = e.get(r);
  if (a != null) return a;
  a = 0;
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    hi(t, o, i) != null && (a !== 0 && (n = gi(t, n, a, void 0, i)), (a = o));
  }
  return (e.set(r, a), a);
}
function Mi(e, t, n) {
  var r = 0 | e[E],
    i = Dn(r),
    a = hi(e, n, i);
  if (a != null && a[un] === yn) {
    if (!bn(a)) return (ci(a), a.A);
    var o = a.A;
  } else Array.isArray(a) && (o = a);
  if (o) {
    let e = 0 | o[E];
    2 & e && (o = oi(o, e));
  }
  return ((o = ei(o, t)) !== a && gi(e, r, n, o, i), o);
}
function Ni(e, t, n, r, i) {
  var a = !1;
  if (
    (r = hi(e, r, i, (e) => {
      var r = kr(e, n, !1, t);
      return ((a = r !== e && r != null), r);
    })) != null
  )
    return (a && !bn(r) && ui(e, t), r);
}
function A(e, t, n, r) {
  var i = e.A,
    a = 0 | i[E];
  if ((t = Ni(i, a, t, n, r)) == null) return t;
  if (!bn(e, (a = 0 | i[E]))) {
    let o = si(t);
    o !== t &&
      (ci(e) && (a = 0 | (i = e.A)[E]), ui(i, (a = gi(i, a, n, (t = o), r))));
  }
  return t;
}
function Pi(e, t, n, r, i, a, o, s) {
  var c = bn(e, n);
  ((a = c ? 1 : a),
    (o = !!o || a === 3),
    (c = s && !c),
    (a === 2 || c) && ci(e) && (n = 0 | (t = e.A)[E]));
  var l = (e = xi(t, i)) === tn ? 7 : 0 | e[E],
    u = Si(l, n);
  if ((s = !(4 & u))) {
    var d = e,
      f = n;
    let t = !!(2 & u);
    t && (f |= 2);
    let i = !t,
      a = !0,
      o = 0,
      s = 0;
    for (; o < d.length; o++) {
      let e = kr(d[o], r, !1, f);
      if (e instanceof r) {
        if (!t) {
          let t = bn(e);
          ((i &&= !t), (a &&= t));
        }
        d[s++] = e;
      }
    }
    (s < o && (d.length = s),
      (u |= 4),
      (u = a ? -4097 & u : 4096 | u),
      (u = i ? 8 | u : -9 & u));
  }
  if (
    (u !== l && (gn(e, u), 2 & u && Object.freeze(e)),
    c &&
      !(
        8 & u ||
        (!e.length &&
          (a === 1 || (a === 4 && (2 & u || (!(16 & u) && 32 & n)))))
      ))
  ) {
    for (
      Ci(u) && ((e = $n(e)), (u = zi(u, n)), (n = gi(t, n, i, e))),
        r = e,
        c = u,
        l = 0;
      l < r.length;
      l++
    )
      (d = r[l]) !== (u = si(d)) && (r[l] = u);
    ((c |= 8), gn(e, (u = c = r.length ? 4096 | c : -4097 & c)));
  }
  return bi(e, u, t, n, i, a, s, o);
}
function Fi(e, t, n) {
  var r = e.A;
  return Pi(e, r, 0 | r[E], t, n, vi(), !1, !0);
}
function Ii(e) {
  return ((e ??= void 0), e);
}
function j(e, t, n, r, i) {
  return (k(e, n, (r = Ii(r)), i), r && !bn(r) && ui(e.A), e);
}
function Li(e, t, n, r) {
  t: {
    var i = (r = Ii(r));
    li(e);
    let a = e.A,
      o = 0 | a[E];
    if (i == null) {
      let e = ki(a);
      if (ji(e, a, o, n) !== t) break t;
      e.set(n, 0);
    } else o = Ai(a, o, n, t);
    gi(a, o, t, i);
  }
  return (r && !bn(r) && ui(e.A), e);
}
function Ri(e, t, n) {
  li(e);
  var r = e.A,
    i = 0 | r[E];
  if (n == null) return (gi(r, i, t), e);
  var a = n === tn ? 7 : 0 | n[E],
    o = a,
    s = Ci(a),
    c = s || Object.isFrozen(n),
    l = !0,
    u = !0;
  for (let e = 0; e < n.length; e++) {
    var d = n[e];
    s || ((d = bn(d)), (l &&= !d), (u &&= d));
  }
  return (
    s || ((a = l ? 13 : 5), (a = u ? -4097 & a : 4096 | a)),
    (c && a === o) || ((n = $n(n)), (o = 0), (a = zi(a, i))),
    a !== o && gn(n, a),
    (i = gi(r, i, t, n)),
    2 & a || !(4096 & a || 16 & a) || ui(r, i),
    e
  );
}
function zi(e, t) {
  return -273 & (2 & t ? 2 | e : -3 & e);
}
function Bi(e, t, n, r) {
  var i = r;
  (li(e),
    (e = Pi(e, (r = e.A), 0 | r[E], n, t, 2, !0)),
    (i ??= new n()),
    e.push(i),
    (t = n = e === tn ? 7 : 0 | e[E]),
    (i = bn(i)) ? ((n &= -9), e.length === 1 && (n &= -4097)) : (n |= 4096),
    n !== t && gn(e, n),
    i || ui(r));
}
function Vi(e, t, n) {
  return fr(mi(e, t, n));
}
function Hi(e, t) {
  return mi(e, t, void 0, sr) ?? 0;
}
function Ui(e, t, n) {
  return A(e, t, (n = Oi(e, Mc) === n ? n : -1), void 0);
}
function Wi(e, t) {
  Ei(e, 3, t == null ? t : cr(t), !1);
}
function Gi(e, t, n) {
  if (n != null) {
    if (typeof n != `number` || !rr(n)) throw Xt(`int32`);
    n |= 0;
  }
  k(e, t, n);
}
function Ki(e, t, n) {
  return k(e, t, n == null ? n : mr(n));
}
function qi(e, t, n) {
  return k(
    e,
    t,
    n == null
      ? n
      : (function (e) {
          if (!ur(e)) throw Xt(`uint64`);
          switch (typeof e) {
            case `string`:
              var t = ir(Number(e));
              return (
                nr(t) && t >= 0
                  ? (e = Nn(t))
                  : ((t = e.indexOf(`.`)) !== -1 && (e = e.substring(0, t)),
                    (e = Qt() ? Nn(tr(64, BigInt(e))) : Nn(gr(e)))),
                e
              );
            case `bigint`:
              return Nn(tr(64, e));
            default:
              return (
                nr(e)
                  ? (e = Nn(vr(e)))
                  : ((e = ir(e)) >= 0 && nr(e)
                      ? (e = String(e))
                      : (Un(e), (e = Jn(D, O))),
                    (e = Nn(e))),
                e
              );
          }
        })(n),
  );
}
function M(e, t, n) {
  k(e, t, n == null ? n : or(n));
}
function Ji(e, t, n) {
  Ei(e, t, n == null ? n : or(n), 0);
}
function Yi(e, t, n) {
  Ei(e, t, Dr(n), ``);
}
function Xi(e, t, n) {
  {
    li(e);
    let o = e.A,
      s = 0 | o[E];
    if (n == null) gi(o, s, t);
    else {
      var r = (e = n === tn ? 7 : 0 | n[E]),
        i = Ci(e),
        a = i || Object.isFrozen(n);
      for (
        i || (e = 0),
          a ||= ((n = $n(n)), (r = 0), (e = zi(e, s)), !1),
          e |= 5,
          e |= (4 & e ? (512 & e ? 512 : 1024 & e ? 1024 : 0) : void 0) ?? 1024,
          i = 0;
        i < n.length;
        i++
      ) {
        let t = n[i],
          o = Er(t);
        Object.is(t, o) ||
          ((a &&= ((n = $n(n)), (r = 0), (e = zi(e, s)), !1)), (n[i] = o));
      }
      (e !== r && (a && ((n = $n(n)), (e = zi(e, s))), gn(n, e)),
        gi(o, s, t, n));
    }
  }
}
function Zi(e, t, n) {
  (li(e), yi(e, t, Or, 2, !0).push(Er(n)));
}
var Qi = class {
  constructor(e, t, n) {
    if (((this.buffer = e), n && !t)) throw Error();
    this.g = t;
  }
};
function $i(e, t) {
  if (typeof e == `string`) return new Qi(Bt(e), t);
  if (Array.isArray(e)) return new Qi(new Uint8Array(e), t);
  if (e.constructor === Uint8Array) return new Qi(e, !1);
  if (e.constructor === ArrayBuffer)
    return ((e = new Uint8Array(e)), new Qi(e, !1));
  if (e.constructor === Kt)
    return ((t = Wt(e) || new Uint8Array()), new Qi(t, !0, e));
  if (e instanceof Uint8Array)
    return (
      (e =
        e.constructor === Uint8Array
          ? e
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
      new Qi(e, !1)
    );
  throw Error();
}
function ea(e, t) {
  var n = 0,
    r = 0,
    i = 0,
    a = e.h,
    o = e.g;
  do {
    var s = a[o++];
    ((n |= (127 & s) << i), (i += 7));
  } while (i < 32 && 128 & s);
  if (i > 32)
    for (r |= (127 & s) >> 4, i = 3; i < 32 && 128 & s; i += 7)
      r |= (127 & (s = a[o++])) << i;
  if ((ca(e, o), !(128 & s))) return t(n >>> 0, r >>> 0);
  throw Error();
}
function ta(e) {
  for (var t = 0, n = e.g, r = n + 10, i = e.h; n < r;) {
    let r = i[n++];
    if (((t |= r), !(128 & r))) return (ca(e, n), !!(127 & t));
  }
  throw Error();
}
function na(e) {
  var t = e.h,
    n = e.g,
    r = t[n++],
    i = 127 & r;
  if (
    128 & r &&
    ((i |= (127 & (r = t[n++])) << 7),
    128 & r &&
      ((i |= (127 & (r = t[n++])) << 14),
      128 & r &&
        ((i |= (127 & (r = t[n++])) << 21),
        128 & r &&
          ((i |= (r = t[n++]) << 28),
          128 & r &&
            128 & t[n++] &&
            128 & t[n++] &&
            128 & t[n++] &&
            128 & t[n++] &&
            128 & t[n++]))))
  )
    throw Error();
  return (ca(e, n), i);
}
function ra(e) {
  return na(e) >>> 0;
}
function ia(e) {
  return ea(e, qn);
}
function aa(e) {
  var t = e.h,
    n = e.g,
    r = t[n],
    i = t[n + 1],
    a = t[n + 2];
  return (
    (t = t[n + 3]),
    ca(e, e.g + 4),
    (r | (i << 8) | (a << 16) | (t << 24)) >>> 0
  );
}
function oa(e) {
  var t = aa(e);
  e = 2 * (t >> 31) + 1;
  var n = (t >>> 23) & 255;
  return (
    (t &= 8388607),
    n == 255
      ? t
        ? NaN
        : (1 / 0) * e
      : n == 0
        ? 1401298464324817e-60 * e * t
        : e * 2 ** (n - 150) * (t + 8388608)
  );
}
function sa(e) {
  return na(e);
}
function ca(e, t) {
  if (((e.g = t), t > e.j)) throw Error();
}
function la(e, t) {
  if (t < 0) throw Error();
  var n = e.g;
  if ((t = n + t) > e.j) throw Error();
  return ((e.g = t), n);
}
function ua(e, t) {
  if (t == 0) return Ut();
  var n = la(e, t);
  return (
    e.fa && e.o
      ? (n = e.h.subarray(n, n + t))
      : ((e = e.h),
        (n =
          n === (t = n + t)
            ? new Uint8Array()
            : Vn
              ? e.slice(n, t)
              : new Uint8Array(e.subarray(n, t)))),
    n.length == 0 ? Ut() : new Kt(n, Ht)
  );
}
var da = class {
    constructor(e, t, n, r) {
      ((this.h = null),
        (this.o = !1),
        (this.g = this.j = this.m = 0),
        this.init(e, t, n, r));
    }
    init(e, t, n, { fa: r = !1, ma: i = !1 } = {}) {
      ((this.fa = r),
        (this.ma = i),
        e &&
          ((e = $i(e, this.ma)),
          (this.h = e.buffer),
          (this.o = e.g),
          (this.m = t || 0),
          (this.j = n === void 0 ? this.h.length : this.m + n),
          (this.g = this.m)));
    }
    clear() {
      ((this.h = null),
        (this.o = !1),
        (this.g = this.j = this.m = 0),
        (this.fa = !1));
    }
  },
  N = [],
  fa = 0;
function pa(e, t, n, r) {
  if (Ca.length) {
    let i = Ca.pop();
    return (i.v(r), i.g.init(e, t, n, r), i);
  }
  return new Sa(e, t, n, r);
}
function ma(e) {
  (e.g.clear(), (e.j = -1), (e.h = -1), Ca.length < 100 && Ca.push(e));
}
function ha(e) {
  var t = e.g;
  if (t.g == t.j) return !1;
  e.m = e.g.g;
  var n = ra(e.g);
  if (((t = n >>> 3), !((n &= 7) >= 0 && n <= 5) || t < 1)) throw Error();
  return ((e.j = t), (e.h = n), !0);
}
function ga(e) {
  try {
    switch (e.h) {
      case 0:
        e.h == 0 ? ta(e.g) : ga(e);
        break;
      case 1:
        var t = e.g;
        ca(t, t.g + 8);
        break;
      case 2:
        if (e.h != 2) ga(e);
        else {
          var n = ra(e.g),
            r = e.g;
          ca(r, r.g + n);
        }
        break;
      case 5:
        var i = e.g;
        ca(i, i.g + 4);
        break;
      case 3:
        _a();
        let a = e.j;
        try {
          for (;;) {
            if (!ha(e)) throw Error();
            if (e.h == 4) {
              if (e.j != a) throw Error();
              break;
            }
            ga(e);
          }
        } catch (e) {
          throw e instanceof RangeError ? SyntaxError() : e;
        } finally {
          fa > 0 && fa--;
        }
        break;
      default:
        throw Error();
    }
  } catch (e) {
    throw e instanceof RangeError ? SyntaxError() : e;
  }
}
function _a() {
  if (fa >= 100) throw SyntaxError();
  fa++;
}
function va(e, t, n) {
  var r = e.g.j,
    i = ra(e.g),
    a = (i = e.g.g + i) - r;
  if (
    (a <= 0 && ((e.g.j = i), n(t, e, void 0, void 0, void 0), (a = i - e.g.g)),
    a)
  )
    throw Error();
  return ((e.g.g = i), (e.g.j = r), t);
}
function ya(e) {
  var t = ra(e.g),
    n = la((e = e.g), t);
  if (((e = e.h), xt)) {
    var r,
      i = e;
    ((r = vt) || (r = vt = new TextDecoder(`utf-8`, { fatal: !0 })),
      (t = n + t),
      (i = n === 0 && t === i.length ? i : i.subarray(n, t)));
    try {
      var a = r.decode(i);
    } catch (e) {
      if (bt === void 0) {
        try {
          r.decode(new Uint8Array([128]));
        } catch {}
        try {
          (r.decode(new Uint8Array([97])), (bt = !0));
        } catch {
          bt = !1;
        }
      }
      throw (!bt && (vt = void 0), e);
    }
  } else {
    ((t = (a = n) + t), (n = []));
    let s,
      c = null;
    for (; a < t;) {
      var o = e[a++];
      (o < 128
        ? n.push(o)
        : o < 224
          ? a >= t
            ? gt()
            : ((s = e[a++]),
              o < 194 || (192 & s) != 128
                ? (a--, gt())
                : n.push(((31 & o) << 6) | (63 & s)))
          : o < 240
            ? a >= t - 1
              ? gt()
              : ((s = e[a++]),
                (192 & s) != 128 ||
                (o === 224 && s < 160) ||
                (o === 237 && s >= 160) ||
                (192 & (r = e[a++])) != 128
                  ? (a--, gt())
                  : n.push(((15 & o) << 12) | ((63 & s) << 6) | (63 & r)))
            : o <= 244
              ? a >= t - 2
                ? gt()
                : ((s = e[a++]),
                  (192 & s) != 128 ||
                  (s - 144 + (o << 28)) >> 30 ||
                  (192 & (r = e[a++])) != 128 ||
                  (192 & (i = e[a++])) != 128
                    ? (a--, gt())
                    : ((o =
                        ((7 & o) << 18) |
                        ((63 & s) << 12) |
                        ((63 & r) << 6) |
                        (63 & i)),
                      (o -= 65536),
                      n.push(55296 + ((o >> 10) & 1023), 56320 + (1023 & o))))
              : gt(),
        n.length >= 8192 && ((c = _t(c, n)), (n.length = 0)));
    }
    a = _t(c, n);
  }
  return a;
}
function ba(e) {
  var t = ra(e.g);
  return ua(e.g, t);
}
function xa(e, t, n) {
  var r = ra(e.g);
  for (r = e.g.g + r; e.g.g < r;) n.push(t(e.g));
}
var Sa = class {
    constructor(e, t, n, r) {
      if (N.length) {
        let i = N.pop();
        (i.init(e, t, n, r), (e = i));
      } else e = new da(e, t, n, r);
      ((this.g = e), (this.m = this.g.g), (this.h = this.j = -1), this.v(r));
    }
    v({ ra: e = !1 } = {}) {
      this.ra = e;
    }
  },
  Ca = [];
function wa(e) {
  return new Da(4294967295 & e, Math.floor(e / 4294967296));
}
function Ta(e) {
  return e
    ? /^\d+$/.test(e)
      ? (Zn(e), new Da(D, O))
      : null
    : (Ea ||= new Da(0, 0));
}
var Ea,
  Da = class {
    constructor(e, t) {
      ((this.h = e >>> 0), (this.g = t >>> 0));
    }
  };
function Oa(e) {
  return new Ra(4294967295 & e, Math.floor(e / 4294967296));
}
function ka(e) {
  return e
    ? /^-?\d+$/.test(e)
      ? (Zn(e), new Ra(D, O))
      : null
    : (Aa ||= new Ra(0, 0));
}
var Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra = class {
    constructor(e, t) {
      ((this.h = e >>> 0), (this.g = t >>> 0));
    }
  };
function za(e, t, n) {
  return typeof BigInt64Array < `u`
    ? (Ia ||
        ((Ia = new BigInt64Array(1)),
        (La = new Uint32Array(Ia.buffer)),
        (Ia[0] = BigInt(1)),
        (Fa = La[0] === 1)),
      (Ia[0] = e),
      new t(La[(e = +!Fa)], La[1 - e]))
    : ((Pa ||=
        ((ja = BigInt(-(2 ** 53 - 1))),
        (Ma = BigInt(2 ** 53 - 1)),
        (Na = BigInt(4294967295)),
        BigInt(32))),
      e >= ja && e <= Ma
        ? n(Number(e))
        : ((e = BigInt.asUintN(64, e)),
          new t(Number(e & Na), Number(e >> Pa))));
}
function Ba(e, t, n) {
  for (; n > 0 || t > 127;)
    (e.g.push((127 & t) | 128),
      (t = ((t >>> 7) | (n << 25)) >>> 0),
      (n >>>= 7));
  e.g.push(t);
}
function Va(e, t) {
  for (; t > 127;) (e.g.push((127 & t) | 128), (t >>>= 7));
  e.g.push(t);
}
function Ha(e, t) {
  if (t >= 0) Va(e, t);
  else {
    for (let n = 0; n < 9; n++) (e.g.push((127 & t) | 128), (t >>= 7));
    e.g.push(1);
  }
}
function Ua(e, t) {
  (Zn(t),
    (function (e) {
      var t = O >> 31;
      e((D << 1) ^ t, ((O << 1) | (D >>> 31)) ^ t);
    })((t, n) => {
      Ba(e, t >>> 0, n >>> 0);
    }));
}
function Wa(e, t) {
  (e.g.push((t >>> 0) & 255),
    e.g.push((t >>> 8) & 255),
    e.g.push((t >>> 16) & 255),
    e.g.push((t >>> 24) & 255));
}
var Ga = class {
  constructor() {
    this.g = [];
  }
  length() {
    return this.g.length;
  }
  end() {
    var e = this.g;
    return ((this.g = []), e);
  }
};
function Ka(e, t) {
  t.length !== 0 && (e.j.push(t), (e.h += t.length));
}
function qa(e, t, n) {
  Va(e.g, 8 * t + n);
}
function Ja(e, t) {
  return (qa(e, t, 2), (t = e.g.end()), Ka(e, t), t.push(e.h), t);
}
function Ya(e, t) {
  var n = t.pop();
  for (n = e.h + e.g.length() - n; n > 127;)
    (t.push((127 & n) | 128), (n >>>= 7), e.h++);
  (t.push(n), e.h++);
}
function Xa(e, t, n) {
  if (n != null)
    switch ((qa(e, t, 0), typeof n)) {
      case `number`:
        ((e = e.g), Un(n), Ba(e, D, O));
        break;
      case `bigint`:
        ((n = za(n, Ra, Oa)), Ba(e.g, n.h, n.g));
        break;
      default:
        ((n = ka(n)), Ba(e.g, n.h, n.g));
    }
}
function Za(e, t, n) {
  (qa(e, t, 2), Va(e.g, n.length), Ka(e, e.g.end()), Ka(e, n));
}
function Qa(e, t, n, r) {
  n != null && ((t = Ja(e, t)), r(n, e), Ya(e, t));
}
var $a = class {
  constructor() {
    ((this.j = []), (this.h = 0), (this.g = new Ga()));
  }
};
function eo(e) {
  typeof e == `string` && ka(e);
}
function to() {
  var e = class {
    constructor() {
      throw Error();
    }
  };
  return (Object.setPrototypeOf(e, e.prototype), e);
}
var no = to(),
  ro = to(),
  io = to(),
  ao = to(),
  oo = to(),
  so = to(),
  co = to(),
  lo = to(),
  uo = to(),
  fo = to(),
  po = to(),
  mo = to();
function ho(e, t, n) {
  var r = e.A;
  (on && on in r && (r = r[on]) && delete r[t.g],
    t.h ? t.o(e, t.h, t.g, n, t.j) : t.o(e, t.g, n, t.j));
}
var P = class {
  constructor(e, t) {
    this.A = ti(e, t, void 0, 2048);
  }
  toJSON() {
    return $r(this);
  }
  o() {
    var e = Tl,
      t = this.A,
      n = e.g,
      r = on;
    if (
      ($t && r && t[r]?.[n] != null && Zt(T, 3),
      (t = e.g),
      dn && on && dn === void 0 && (r = (n = this.A)[on]) && (r = r.ka))
    )
      try {
        r(n, t, Jr);
      } catch (e) {
        wt(e);
      }
    return e.h ? e.m(this, e.h, e.g, e.j) : e.m(this, e.g, e.defaultValue, e.j);
  }
  clone() {
    var e = this.A,
      t = 0 | e[E];
    return di(this, e, t)
      ? ii(this, e, !0)
      : new this.constructor(oi(e, t, !1));
  }
};
((P.prototype[un] = yn),
  (P.prototype.toString = function () {
    return this.A.toString();
  }));
var go = class {
  constructor(e, t, n) {
    ((this.g = e), (this.h = t), (e = no), (this.j = (!!e && n === e) || !1));
  }
};
function _o(e, t) {
  return new go(e, t, no);
}
function vo(e, t, n, r, i) {
  Qa(e, n, Ao(t, r), i);
}
var yo,
  bo,
  xo = _o(function (e, t, n, r, i) {
    return e.h === 2 && (va(e, Mi(t, r, n), i), !0);
  }, vo),
  So = _o(function (e, t, n, r, i) {
    return e.h === 2 && (va(e, Mi(t, r, n), i), !0);
  }, vo),
  Co = Symbol(),
  wo = Symbol(),
  To = Symbol(),
  Eo = Symbol(),
  Do = Symbol();
function Oo(e, t, n, r) {
  var i = r[e];
  if (i) return i;
  (((i = {}).Ea = r),
    (i.ca = (function (e) {
      switch (typeof e) {
        case `boolean`:
          return (Gr ||= [0, void 0, !0]);
        case `number`:
          return e > 0 ? void 0 : e === 0 ? (Kr ||= [0, void 0]) : [-e, void 0];
        case `string`:
          return [0, e];
        case `object`:
          return e;
      }
    })(r[0])));
  var a = r[1],
    o = 1;
  a &&
    a.constructor === Object &&
    ((i.ia = a),
    typeof (a = r[++o]) == `function` &&
      ((i.wa = !0), (yo ??= a), (bo ??= r[o + 1]), (a = r[(o += 2)])));
  for (
    var s = {};
    a && Array.isArray(a) && a.length && typeof a[0] == `number` && a[0] > 0;
  ) {
    for (var c = 0; c < a.length; c++) s[a[c]] = a;
    a = r[++o];
  }
  for (c = 1; a !== void 0;) {
    let e;
    typeof a == `number` && ((c += a), (a = r[++o]));
    var l = void 0;
    if ((a instanceof go ? (e = a) : ((e = xo), o--), e?.j)) {
      ((a = r[++o]), (l = r));
      var u = o;
      (typeof a == `function` && ((a = a()), (l[u] = a)), (l = a));
    }
    for (
      u = c + 1,
        typeof (a = r[++o]) == `number` && a < 0 && ((u -= a), (a = r[++o]));
      c < u;
      c++
    ) {
      let r = s[c];
      l ? n(i, c, e, l, r) : t(i, c, e, r);
    }
  }
  return (r[e] = i);
}
function ko(e) {
  return Array.isArray(e) ? (e[0] instanceof go ? e : [So, e]) : [e, void 0];
}
function Ao(e, t) {
  return e instanceof P ? e.A : Array.isArray(e) ? ei(e, t) : void 0;
}
function jo(e, t, n, r) {
  var i = n.g;
  e[t] = r ? (e, t, n) => i(e, t, n, r) : i;
}
function Mo(e, t, n, r, i) {
  var a,
    o,
    s = n.g;
  e[t] = (e, t, n) =>
    s(e, t, n, (o ||= Oo(wo, jo, Mo, r).ca), (a ||= No(r)), i);
}
function No(e) {
  var t = e[To];
  if (t != null) return t;
  var n = Oo(wo, jo, Mo, e);
  return (
    (t = n.wa
      ? (e, t) => yo(e, t, n)
      : (e, t) => {
          t: {
            _a();
            try {
              for (; ha(t) && t.h != 4;) {
                let c = t.j,
                  l = n[c];
                if (l == null) {
                  let e = n.ia;
                  if (e) {
                    let t = e[c];
                    if (t) {
                      let e = Fo(t);
                      e != null && (l = n[c] = e);
                    }
                  }
                }
                if (l == null || !l(t, e, c)) {
                  var r = t;
                  let n = r.m;
                  if ((ga(r), r.ra)) var i = void 0;
                  else {
                    let e = r.g.g - n;
                    ((r.g.g = n), (i = ua(r.g, e)));
                  }
                  r = void 0;
                  var a = e,
                    o = c,
                    s = i;
                  s &&
                    ((r = a[on] ?? (a[on] = new qr()))[o] ?? (r[o] = [])).push(
                      s,
                    );
                }
              }
              let l = Ur(e);
              l && (l.ka = n.Ea[Do]);
              var c = !0;
              break t;
            } catch (e) {
              throw e instanceof RangeError ? SyntaxError() : e;
            } finally {
              fa > 0 && fa--;
            }
          }
          return c;
        }),
    (e[To] = t),
    (e[Do] = Po.bind(e)),
    t
  );
}
function Po(e, t, n, r) {
  var i = this[wo],
    a = this[To],
    o = ei(void 0, i.ca),
    s = Ur(e);
  if (s) {
    var c = !1,
      l = i.ia;
    if (l) {
      if (
        ((i = (t, n, i) => {
          if (i.length !== 0) {
            if (l[n])
              for (let e of i) {
                t = pa(e);
                try {
                  ((c = !0), a(o, t));
                } finally {
                  ma(t);
                }
              }
            else r?.(e, n, i);
          }
        }),
        t == null)
      )
        Wr(s, i);
      else if (s != null) {
        let e = s[t];
        e && i(s, t, e);
      }
      if (c) {
        let r = 0 | e[E];
        if (2 & r && 2048 & r && !n?.cb) throw Error();
        let i = Dn(r),
          a = (t, a) => {
            if (hi(e, t, i) != null) {
              if (n?.lb === 1) return;
              throw Error();
            }
            (a != null && (r = gi(e, r, t, a, i)), delete s[t]);
          };
        t == null
          ? Tn(o, 0 | o[E], (e, t) => {
              a(e, t);
            })
          : a(t, hi(o, t, i));
      }
    }
  }
}
function Fo(e) {
  var t = (e = ko(e))[0].g;
  if ((e = e[1])) {
    let n = No(e),
      r = Oo(wo, jo, Mo, e).ca;
    return (e, i, a) => t(e, i, a, r, n);
  }
  return t;
}
function Io(e, t, n) {
  e[t] = n.h;
}
function Lo(e, t, n, r) {
  var i,
    a,
    o = n.h;
  e[t] = (e, t, n) => o(e, t, n, (a ||= Oo(Co, Io, Lo, r).ca), (i ||= Ro(r)));
}
function Ro(e) {
  var t = e[Eo];
  if (!t) {
    let n = Oo(Co, Io, Lo, e);
    ((t = (e, t) => zo(e, t, n)), (e[Eo] = t));
  }
  return t;
}
function zo(e, t, n) {
  (Tn(e, 0 | e[E], (e, r) => {
    if (r != null) {
      var i = (function (e, t) {
        var n = e[t];
        if (n) return n;
        if ((n = e.ia) && (n = n[t])) {
          var r = (n = ko(n))[0].h;
          if ((n = n[1])) {
            let t = Ro(n),
              i = Oo(Co, Io, Lo, n).ca;
            n = e.wa ? bo(i, t) : (e, n, a) => r(e, n, a, i, t);
          } else n = r;
          return (e[t] = n);
        }
      })(n, e);
      i ? i(t, r, e) : e < 500 || Zt(cn, 3);
    }
  }),
    (e = Ur(e)) &&
      Wr(e, (e, n, r) => {
        for (Ka(t, t.g.end()), e = 0; e < r.length; e++)
          Ka(t, Wt(r[e]) || new Uint8Array());
      }));
}
var Bo = Nn(0);
function Vo(e, t, n) {
  if (Array.isArray(t)) {
    var r = 0 | t[E];
    if (4 & r) return t;
    for (var i = 0, a = 0; i < t.length; i++) {
      let n = e(t[i]);
      n != null && (t[a++] = n);
    }
    return (
      a < i && (t.length = a),
      (e = 1 | r),
      n && (e = (-1537 & e) | 4),
      e !== r && gn(t, e),
      n && 2 & e && Object.freeze(t),
      t
    );
  }
}
var Ho = (e, t) => {
  var n = new $a();
  (zo(e.A, n, Oo(Co, Io, Lo, t)), Ka(n, n.g.end()), (e = new Uint8Array(n.h)));
  var r = (t = n.j).length,
    i = 0;
  for (let n = 0; n < r; n++) {
    let r = t[n];
    (e.set(r, i), (i += r.length));
  }
  return ((n.j = [e]), e);
};
function F(e, t, n) {
  return new go(e, t, n);
}
function Uo(e, t, n) {
  return new go(e, t, n);
}
function Wo(e, t, n) {
  gi(e, 0 | e[E], t, n, Dn(0 | e[E]));
}
var Go = _o(
  function (e, t, n, r, i) {
    if (e.h !== 2) return !1;
    if (
      ((e = $n((e = va(e, ei([void 0, void 0], r), i)))),
      (i = Dn((r = 0 | t[E]))),
      2 & r)
    )
      throw Error();
    var a = hi(t, n, i);
    if (a instanceof zr)
      2 & a.M ? ((a = a.ea()).push(e), gi(t, r, n, a, i)) : a.gb(e);
    else if (Array.isArray(a)) {
      var o = 0 | a[E];
      (8192 & o || gn(a, (o |= 8192)),
        2 & o && gi(t, r, n, (a = Ti(a)), i),
        a.push(e));
    } else gi(t, r, n, vn([e]), i);
    return !0;
  },
  function (e, t, n, r, i) {
    if (t instanceof zr)
      t.forEach((t, a) => {
        Qa(e, n, ei([a, t], r), i);
      });
    else if (Array.isArray(t)) {
      for (let a = 0; a < t.length; a++) {
        let o = t[a];
        Array.isArray(o) && Qa(e, n, ei(o, r), i);
      }
      vn(t);
    }
  },
);
function Ko(e, t, n) {
  (t = sr(t)) != null && (qa(e, n, 5), (e = e.g), Wn(t), Wa(e, D));
}
function qo(e, t, n) {
  (t = wr(t)) != null && (eo(t), Xa(e, n, t));
}
function I(e, t, n) {
  (t = fr(t)) != null && t != null && (qa(e, n, 0), Ha(e.g, t));
}
function Jo(e, t, n) {
  (t =
    t == null || typeof t == `boolean`
      ? t
      : typeof t == `number`
        ? !!t
        : void 0) != null && (qa(e, n, 0), e.g.g.push(+!!t));
}
function Yo(e, t, n) {
  (t = Or(t)) != null && Za(e, n, Ct(t));
}
function Xo(e, t, n, r, i) {
  Qa(e, n, Ao(t, r), i);
}
function Zo(e, t, n) {
  (t = Tr(t)) != null && Za(e, n, $i(t, !0).buffer);
}
function Qo(e, t, n) {
  (t = pr(t)) != null && t != null && (qa(e, n, 0), Va(e.g, t));
}
function $o(e, t, n) {
  (t = fr(t)) != null && ((t = parseInt(t, 10)), qa(e, n, 0), Ha(e.g, t));
}
function es(e, t, n) {
  return (
    (e.h === 5 || e.h === 2) &&
    ((t = Di(t, 0 | t[E], n)), e.h == 2 ? xa(e, oa, t) : t.push(oa(e.g)), !0)
  );
}
function ts(e, t, n) {
  return e.h === 0 && (Wo(t, n, ia(e.g)), !0);
}
function ns(e, t, n) {
  return (
    (e.h === 0 || e.h === 2) &&
    ((t = Di(t, 0 | t[E], n)), e.h == 2 ? xa(e, na, t) : t.push(na(e.g)), !0)
  );
}
function rs(e, t, n) {
  return e.h === 2 && (Wo(t, n, (e = ba(e)) === Ut() ? void 0 : e), !0);
}
var is = F(
    function (e, t, n) {
      if (e.h !== 1) return !1;
      var r = e.g;
      e = aa(r);
      var i = aa(r);
      r = 2 * (i >> 31) + 1;
      var a = (i >>> 20) & 2047;
      return (
        (e = 4294967296 * (1048575 & i) + e),
        Wo(
          t,
          n,
          a == 2047
            ? e
              ? NaN
              : (1 / 0) * r
            : a == 0
              ? 5e-324 * r * e
              : r * 2 ** (a - 1075) * (e + 4503599627370496),
        ),
        !0
      );
    },
    function (e, t, n) {
      (t = sr(t)) != null &&
        (qa(e, n, 1),
        (e = e.g),
        (n = Bn ||= new DataView(new ArrayBuffer(8))).setFloat64(0, +t, !0),
        (D = n.getUint32(0, !0)),
        (O = n.getUint32(4, !0)),
        Wa(e, D),
        Wa(e, O));
    },
    fo,
  ),
  as = F(
    function (e, t, n) {
      return e.h === 5 && (Wo(t, n, oa(e.g)), !0);
    },
    Ko,
    uo,
  ),
  os = Uo(
    es,
    function (e, t, n) {
      if ((t = Vo(sr, t, !0)) != null)
        for (let o = 0; o < t.length; o++) {
          var r = e,
            i = n,
            a = t[o];
          a != null && (qa(r, i, 5), (r = r.g), Wn(a), Wa(r, D));
        }
    },
    uo,
  ),
  ss = Uo(
    es,
    function (e, t, n) {
      if ((t = Vo(sr, t, !0)) != null && t.length) {
        (qa(e, n, 2), Va(e.g, 4 * t.length));
        for (let r = 0; r < t.length; r++) ((n = e.g), Wn(t[r]), Wa(n, D));
      }
    },
    uo,
  ),
  cs = F(
    function (e, t, n) {
      return e.h === 5 && (Wo(t, n, (e = oa(e.g)) === 0 ? void 0 : e), !0);
    },
    Ko,
    uo,
  ),
  ls = F(
    function (e, t, n) {
      return ts(e, t, n);
    },
    qo,
    so,
  ),
  us = F(
    function (e, t, n) {
      return ts(e, t, n);
    },
    qo,
    so,
  ),
  ds = Uo(
    function (e, t, n) {
      return (
        e.h !== 0 && e.h !== 2
          ? (e = !1)
          : ((t = Di(t, 0 | t[E], n)),
            e.h == 2 ? xa(e, ia, t) : t.push(ia(e.g)),
            (e = !0)),
        e
      );
    },
    function (e, t, n) {
      if ((t = Vo(wr, t, !1)) != null)
        for (let r = 0; r < t.length; r++) Xa(e, n, t[r]);
    },
    so,
  ),
  fs = F(
    function (e, t, n) {
      return (
        e.h === 0
          ? (Wo(t, n, (e = ia(e.g)) === Bo ? void 0 : e), (t = !0))
          : (t = !1),
        t
      );
    },
    qo,
    so,
  ),
  ps = F(
    function (e, t, n) {
      return (e.h === 0 ? (Wo(t, n, ea(e.g, Kn)), (e = !0)) : (e = !1), e);
    },
    function (e, t, n) {
      if (
        ((t = (function (e) {
          if (e == null) return e;
          var t = typeof e;
          if (t === `bigint`) return String(tr(64, e));
          if (ur(e)) {
            if (t === `string`)
              return (
                (t = ir(Number(e))),
                nr(t) && t >= 0
                  ? (e = String(t))
                  : ((t = e.indexOf(`.`)) !== -1 && (e = e.substring(0, t)),
                    (e = gr(e))),
                e
              );
            if (t === `number`) return vr(e);
          }
        })(t)),
        t != null && (typeof t == `string` && Ta(t), t != null))
      )
        switch ((qa(e, n, 0), typeof t)) {
          case `number`:
            ((e = e.g), Un(t), Ba(e, D, O));
            break;
          case `bigint`:
            ((n = za(t, Da, wa)), Ba(e.g, n.h, n.g));
            break;
          default:
            ((n = Ta(t)), Ba(e.g, n.h, n.g));
        }
    },
    co,
  ),
  L = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, na(e.g)), !0);
    },
    I,
    ao,
  ),
  ms = Uo(
    ns,
    function (e, t, n) {
      if ((t = Vo(fr, t, !0)) != null)
        for (let o = 0; o < t.length; o++) {
          var r = e,
            i = n,
            a = t[o];
          a != null && (qa(r, i, 0), Ha(r.g, a));
        }
    },
    ao,
  ),
  hs = Uo(
    ns,
    function (e, t, n) {
      if ((t = Vo(fr, t, !0)) != null && t.length) {
        n = Ja(e, n);
        for (let n = 0; n < t.length; n++) Ha(e.g, t[n]);
        Ya(e, n);
      }
    },
    ao,
  ),
  gs = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, (e = na(e.g)) === 0 ? void 0 : e), !0);
    },
    I,
    ao,
  ),
  R = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, ta(e.g)), !0);
    },
    Jo,
    ro,
  ),
  _s = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, !1 === (e = ta(e.g)) ? void 0 : e), !0);
    },
    Jo,
    ro,
  ),
  vs = Uo(
    function (e, t, n) {
      return e.h === 2 && ((e = ya(e)), Di(t, 0 | t[E], n).push(e), !0);
    },
    function (e, t, n) {
      if ((t = Vo(Or, t, !0)) != null)
        for (let o = 0; o < t.length; o++) {
          var r = e,
            i = n,
            a = t[o];
          a != null && Za(r, i, Ct(a));
        }
    },
    io,
  ),
  ys = F(
    function (e, t, n) {
      return e.h === 2 && (Wo(t, n, (e = ya(e)) === `` ? void 0 : e), !0);
    },
    Yo,
    io,
  ),
  z = F(
    function (e, t, n) {
      return e.h === 2 && (Wo(t, n, ya(e)), !0);
    },
    Yo,
    io,
  ),
  bs = (function (e, t, n = no) {
    return new go(e, t, n);
  })(
    function (e, t, n, r, i) {
      return (
        e.h === 2 &&
        ((r = ei(void 0, r)), Di(t, 0 | t[E], n).push(r), va(e, r, i), !0)
      );
    },
    function (e, t, n, r, i) {
      if (Array.isArray(t)) {
        for (let a = 0; a < t.length; a++) Xo(e, t[a], n, r, i);
        1 & (e = 0 | t[E]) || gn(t, 1 | e);
      }
    },
  ),
  B = _o(function (e, t, n, r, i, a) {
    if (e.h !== 2) return !1;
    var o = 0 | t[E];
    return (Ai(t, o, a, n, Dn(o)), va(e, (t = Mi(t, r, n)), i), !0);
  }, Xo),
  xs = F(
    function (e, t, n) {
      return e.h === 2 && (Wo(t, n, ba(e)), !0);
    },
    Zo,
    po,
  ),
  Ss = Uo(
    function (e, t, n) {
      return e.h === 2 && ((e = ba(e)), Di(t, 0 | t[E], n).push(e), !0);
    },
    function (e, t, n) {
      if ((t = Vo(Tr, t, !1)) != null)
        for (let o = 0; o < t.length; o++) {
          var r = e,
            i = n,
            a = t[o];
          a != null && Za(r, i, $i(a, !0).buffer);
        }
    },
    po,
  ),
  Cs = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, ra(e.g)), !0);
    },
    Qo,
    oo,
  ),
  ws = Uo(
    function (e, t, n) {
      return (
        (e.h === 0 || e.h === 2) &&
        ((t = Di(t, 0 | t[E], n)),
        e.h == 2 ? xa(e, ra, t) : t.push(ra(e.g)),
        !0)
      );
    },
    function (e, t, n) {
      if ((t = Vo(pr, t, !0)) != null)
        for (let o = 0; o < t.length; o++) {
          var r = e,
            i = n,
            a = t[o];
          a != null && (qa(r, i, 0), Va(r.g, a));
        }
    },
    oo,
  ),
  Ts = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, (e = ra(e.g)) === 0 ? void 0 : e), !0);
    },
    Qo,
    oo,
  ),
  V = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, na(e.g)), !0);
    },
    $o,
    mo,
  ),
  Es = F(
    function (e, t, n) {
      return e.h === 0 && (Wo(t, n, (e = na(e.g)) === 0 ? void 0 : e), !0);
    },
    $o,
    mo,
  ),
  Ds = F(
    function (e, t, n) {
      return (
        e.h === 0
          ? (Wo(
              t,
              n,
              (function (e) {
                return ea(e, (e, t) => {
                  var n = -(1 & e);
                  return qn((e = ((e >>> 1) | (t << 31)) ^ n), (t >>> 1) ^ n);
                });
              })(e.g),
            ),
            (e = !0))
          : (e = !1),
        e
      );
    },
    function (e, t, n) {
      if ((t = wr(t)) != null && (eo(t), t != null))
        switch ((qa(e, n, 0), typeof t)) {
          case `number`:
            ((e = e.g), (t = (n = t) < 0), Hn((n = 2 * Math.abs(n))), (n = D));
            let r = O;
            (t &&
              (n == 0
                ? r == 0
                  ? (r = n = 4294967295)
                  : (r--, (n = 4294967295))
                : n--),
              Ba(e, (D = n), (O = r)));
            break;
          case `bigint`:
            ((e = e.g),
              (t = (t << BigInt(1)) ^ (t >> BigInt(63))),
              (D = Number(BigInt.asUintN(32, t))),
              (O = Number(BigInt.asUintN(32, t >> BigInt(32)))),
              Ba(e, D, O));
            break;
          default:
            Ua(e.g, t);
        }
    },
    lo,
  ),
  Os = class {
    constructor(e, t) {
      var n = $s;
      ((this.g = e),
        (this.h = t),
        (this.m = A),
        (this.o = j),
        (this.defaultValue = void 0),
        (this.j = n.jb == null ? void 0 : En));
    }
    register() {
      At(this);
    }
  };
function ks(e, t) {
  return new Os(e, t);
}
function As(e, t) {
  return (n, r) => {
    t: {
      let a = { ma: !0 };
      (r && Object.assign(a, r), (n = pa(n, void 0, void 0, a)));
      try {
        let r = new e(),
          a = r.A;
        No(t)(a, n);
        var i = r;
        break t;
      } catch (e) {
        throw e instanceof RangeError ? SyntaxError() : e;
      } finally {
        ma(n);
      }
    }
    return i;
  };
}
function js(e) {
  return (t) => Ho(t, e);
}
function Ms(e) {
  return function () {
    return Ho(this, e);
  };
}
var Ns = [0, xs, Ss, R, z],
  Ps = [0, ys, [0, Es, [0, fs, gs], Es, -1, [0, V], Es, -1], F(rs, Zo, po)],
  Fs,
  Is = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Ls = [
    0,
    ys,
    F(
      rs,
      function (e, t, n) {
        if (t != null) {
          if (t instanceof P) {
            let r = t.mb;
            r
              ? ((t = r(t)), t != null && Za(e, n, $i(t, !0).buffer))
              : Zt(cn, 3);
            return;
          }
          if (Array.isArray(t)) return void Zt(cn, 3);
        }
        Zo(e, t, n);
      },
      po,
    ),
  ],
  Rs = [0, 1, [0, 12, L, 10, R], [0, 7, [0, L, -1]]],
  zs = globalThis.trustedTypes,
  Bs = class {
    constructor(e) {
      this.g = e;
    }
    toString() {
      return this.g + ``;
    }
  };
function Vs(e) {
  var t;
  return (
    Fs === void 0 &&
      (Fs = (function () {
        var e = null;
        if (!zs) return e;
        try {
          let t = (e) => e;
          e = zs.createPolicy(`goog#html`, {
            createHTML: t,
            createScript: t,
            createScriptURL: t,
          });
        } catch {}
        return e;
      })()),
    (e = (t = Fs) ? t.createScriptURL(e) : e),
    new Bs(e)
  );
}
function Hs(e, ...t) {
  if (t.length === 0) return Vs(e[0]);
  var n = e[0];
  for (let r = 0; r < t.length; r++) n += encodeURIComponent(t[r]) + e[r + 1];
  return Vs(n);
}
var Us = [0, L, V, R, -1, hs, V, -1, R, -1],
  Ws = [0, V, -1, R],
  Gs = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Ks = [
    0,
    R,
    z,
    R,
    V,
    -1,
    Uo(
      function (e, t, n) {
        return (
          (e.h === 0 || e.h === 2) &&
          ((t = Di(t, 0 | t[E], n)),
          e.h == 2 ? xa(e, sa, t) : t.push(na(e.g)),
          !0)
        );
      },
      function (e, t, n) {
        if ((t = Vo(fr, t, !0)) != null && t.length) {
          n = Ja(e, n);
          for (let n = 0; n < t.length; n++) Ha(e.g, t[n]);
          Ya(e, n);
        }
      },
      mo,
    ),
    z,
    -1,
    [0, R, -1],
    V,
    R,
    -1,
    Ws,
  ],
  qs = [
    0,
    3,
    R,
    -1,
    2,
    [0, [2], L, B, [0, Cs]],
    [0, V, R, V, R, V, 4, [0, R, z, -1, R]],
    [0, [3, 4], z, -1, B, [0, L], B, [0, V, -1]],
    [0],
  ],
  Js = [0, z, -2],
  Ys = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Xs = [0],
  Zs = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Qs = [0, L, R, 1, R, -4],
  $s = class extends P {
    constructor(e) {
      super(e, 2);
    }
  },
  ec = {};
ec[336783863] = [
  0,
  z,
  R,
  -1,
  L,
  [
    0,
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    B,
    Xs,
    B,
    Ks,
    B,
    Js,
    B,
    Qs,
    B,
    Us,
    B,
    [0, z, -2],
    B,
    [0, z, V],
    B,
    qs,
    B,
    Ws,
  ],
  [0, z],
  R,
  [0, [1, 3], [2, 4], B, [0, hs], -1, B, [0, vs], -1, bs, [0, z, -1]],
  z,
];
var tc = [0, fs, -1, _s, -3, fs, hs, ys, gs, fs, -1, _s, gs, _s, -2, ys];
function nc(e, t) {
  Zi(e, 3, t);
}
function H(e, t) {
  Zi(e, 4, t);
}
var rc = class extends P {
    constructor(e) {
      super(e, 500);
    }
    v(e) {
      return j(this, 0, 7, e);
    }
  },
  ic = [-1, {}],
  ac = [0, z, 1, ic],
  oc = [0, z, vs, ic];
function sc(e, t) {
  Bi(e, 1, rc, t);
}
function cc(e, t) {
  Zi(e, 10, t);
}
function U(e, t) {
  Zi(e, 15, t);
}
var lc = class extends P {
    constructor(e) {
      super(e, 500);
    }
    v(e) {
      return j(this, 0, 1001, e);
    }
  },
  uc = [
    -500,
    bs,
    [
      -500,
      ys,
      -1,
      vs,
      -3,
      [-2, ec, R],
      bs,
      Ls,
      gs,
      -1,
      ac,
      oc,
      bs,
      [0, ys, _s],
      ys,
      tc,
      gs,
      vs,
      987,
      vs,
    ],
    4,
    bs,
    [-500, z, -1, [-1, {}], 998, z],
    bs,
    [-500, z, vs, -1, [-2, {}, R], 997, vs, -1],
    gs,
    bs,
    [-500, z, vs, ic, 998, vs],
    vs,
    gs,
    ac,
    oc,
    bs,
    [0, ys, -1, ic],
    vs,
    -2,
    tc,
    ys,
    -1,
    _s,
    [0, _s, Ts],
    978,
    ic,
    bs,
    Ls,
  ];
lc.prototype.g = Ms(uc);
var dc = As(lc, uc),
  fc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  pc = class extends P {
    constructor(e) {
      super(e);
    }
    g() {
      return Fi(this, fc, 1);
    }
  },
  mc = [0, bs, [0, L, as, z, -1]],
  hc = As(pc, mc),
  gc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  _c = class extends P {
    constructor(e) {
      super(e);
    }
  },
  vc = class extends P {
    constructor(e) {
      super(e);
    }
    j() {
      return A(this, gc, 2);
    }
    g() {
      return Fi(this, _c, 5);
    }
  },
  yc = As(
    class extends P {
      constructor(e) {
        super(e);
      }
    },
    [
      0,
      vs,
      hs,
      ss,
      [
        0,
        V,
        [0, L, -3],
        [0, as, -3],
        [0, L, -1, [0, bs, [0, L, -2]]],
        bs,
        [0, as, -1, z, as],
      ],
      z,
      -1,
      us,
      bs,
      [0, L, as],
      vs,
      us,
    ],
  ),
  bc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  xc = As(
    class extends P {
      constructor(e) {
        super(e);
      }
    },
    [0, bs, [0, as, -4]],
  ),
  Sc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Cc = As(
    class extends P {
      constructor(e) {
        super(e);
      }
    },
    [0, bs, [0, as, -4]],
  ),
  wc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Tc = [0, L, -1, ss, V],
  Ec = class extends P {
    constructor(e) {
      super(e);
    }
  };
Ec.prototype.g = Ms([0, as, -4, us]);
var Dc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Oc = As(
    class extends P {
      constructor(e) {
        super(e);
      }
    },
    [0, bs, [0, 1, L, z, mc], us],
  ),
  kc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Ac = class extends P {
    constructor(e) {
      super(e);
    }
    g() {
      return mi(this, 1, void 0, wi) ?? Ut();
    }
  },
  jc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Mc = [1, 2],
  Nc = As(
    class extends P {
      constructor(e) {
        super(e);
      }
    },
    [0, bs, [0, Mc, B, [0, ss], B, [0, xs], L, z], us],
  ),
  Pc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Fc = [0, z, L, as, vs, -1],
  Ic = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Lc = [0, R, -1],
  Rc = class extends P {
    constructor(e) {
      super(e);
    }
    g() {
      return _i(this, Gs, 2, zc);
    }
  },
  zc = [1, 2, 3, 4, 5, 6],
  Bc = class extends P {
    constructor(e) {
      super(e);
    }
    g() {
      return mi(this, 1, void 0, wi) != null;
    }
    j() {
      return Or(mi(this, 2)) != null;
    }
  },
  Vc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Hc = [0, xs, z, [0, L, us, -1], [0, ps, us]],
  Uc = [0, Hc, R, [0, zc, B, Qs, B, Ks, B, Us, B, Xs, B, Js, B, qs], V],
  Wc = js(Uc),
  Gc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Kc = [0, Uc, as, -1, L],
  qc = ks(502141897, Gc);
ec[502141897] = Kc;
var Jc = As(
    class extends P {
      constructor(e) {
        super(e);
      }
    },
    [0, [0, V, -1, os, ws], Tc],
  ),
  Yc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Xc = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Zc = [0, Uc, as, [0, Uc], R],
  Qc = ks(508968150, Xc);
((ec[508968150] = [0, Uc, Kc, Zc, as, [0, [0, Hc]]]), (ec[508968149] = Zc));
var $c = class extends P {
    constructor(e) {
      super(e);
    }
    j() {
      return A(this, Pc, 2);
    }
    g() {
      k(this, 2);
    }
  },
  el = [0, Uc, Fc];
ec[478825465] = el;
var tl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  nl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  rl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  il = class extends P {
    constructor(e) {
      super(e);
    }
  },
  al = class extends P {
    constructor(e) {
      super(e);
    }
  },
  ol = [0, Uc, [0, Uc], el, -1],
  sl = [0, Uc, as, L],
  cl = [0, Uc, as],
  ll = [0, Uc, sl, cl, as],
  ul = ks(479097054, al);
((ec[479097054] = [0, Uc, ll, ol]), (ec[463370452] = ol), (ec[464864288] = sl));
var dl = ks(462713202, il);
((ec[462713202] = ll), (ec[474472470] = cl));
var fl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  pl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  ml = class extends P {
    constructor(e) {
      super(e);
    }
  },
  hl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  gl = [0, Uc, as, -1, L],
  _l = [0, Uc, as, R];
hl.prototype.g = Ms([0, Uc, cl, [0, Uc], Kc, Zc, gl, _l]);
var vl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  yl = ks(456383383, vl);
ec[456383383] = [0, Uc, Fc];
var bl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  xl = ks(476348187, bl);
ec[476348187] = [0, Uc, Lc];
var Sl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Cl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  wl = [0, V, -1],
  Tl = ks(
    458105876,
    class extends P {
      constructor(e) {
        super(e);
      }
      g() {
        var e = this.A,
          t = 0 | e[E],
          n = bn(this, t);
        return (
          (e = (function (e, t, n, r) {
            var i = Cl;
            !r && ci(e) && (n = 0 | (t = e.A)[E]);
            var a = hi(t, 2);
            if (((e = !1), a == null)) {
              if (r) return Hr();
              a = [];
            } else if (a.constructor === zr) {
              if (!(2 & a.M) || r) return a;
              a = a.ea();
            } else Array.isArray(a) ? (e = !!(2 & a[E])) : (a = []);
            if (r) {
              if (!a.length) return Hr();
              e || ((e = !0), _n(a));
            } else e && ((e = !1), vn(a), (a = Ti(a)));
            return (
              !e && 32 & n && hn(a, 32),
              (n = gi(t, n, 2, (r = new zr(a, i, Ar, void 0)))),
              e || ui(t, n),
              r
            );
          })(this, e, t, n)),
          !n && Cl && (e.Fa = !0),
          e
        );
      }
    },
  );
ec[458105876] = [0, wl, Go, [!0, us, [0, z, -1, vs]], [0, hs, R, V], R];
var El = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Dl = ks(458105758, El);
ec[458105758] = [0, Uc, z, wl];
var Ol = class extends P {
    constructor(e) {
      super(e);
    }
  },
  kl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Al = class extends P {
    constructor(e) {
      super(e);
    }
  },
  jl = js([0, bs, [0, Es, bs, [0, cs, -1], _s]]),
  Ml = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Nl = [0, cs, -1, _s],
  Pl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Fl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Il = [1, 2];
Fl.prototype.g = Ms([0, Il, B, Nl, B, [0, bs, Nl]]);
var Ll = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Rl = ks(443442058, Ll);
((ec[443442058] = [0, Uc, z, L, as, vs, -1, R, as]), (ec[514774813] = gl));
var zl = class extends P {
    constructor(e) {
      super(e);
    }
  },
  Bl = ks(516587230, zl);
function Vl(e, t) {
  return (
    (t = t ? t.clone() : new Pc()),
    e.displayNamesLocale === void 0
      ? e.displayNamesLocale === void 0 && k(t, 1)
      : k(t, 1, Dr(e.displayNamesLocale)),
    e.maxResults === void 0
      ? `maxResults` in e && k(t, 2)
      : Gi(t, 2, e.maxResults),
    e.scoreThreshold === void 0
      ? `scoreThreshold` in e && k(t, 3)
      : M(t, 3, e.scoreThreshold),
    e.categoryAllowlist === void 0
      ? `categoryAllowlist` in e && k(t, 4)
      : Xi(t, 4, e.categoryAllowlist),
    e.categoryDenylist === void 0
      ? `categoryDenylist` in e && k(t, 5)
      : Xi(t, 5, e.categoryDenylist),
    t
  );
}
function Hl(e) {
  var t = Number(e);
  return Number.isSafeInteger(t) ? t : String(e);
}
function Ul(e, t = -1, n = ``) {
  return {
    categories: e.map((e) => ({
      index: Vi(e, 1) ?? 0 ?? -1,
      score: Hi(e, 2) ?? 0,
      categoryName: Or(mi(e, 3)) ?? `` ?? ``,
      displayName: Or(mi(e, 4)) ?? `` ?? ``,
    })),
    headIndex: t,
    headName: n,
  };
}
function Wl(e) {
  var t = {
    classifications: Fi(e, Dc, 1).map((e) =>
      Ul(A(e, pc, 4)?.g() ?? [], Vi(e, 2) ?? 0, Or(mi(e, 3)) ?? ``),
    ),
  };
  return (
    (function (e) {
      return e == null
        ? e
        : typeof e == `bigint`
          ? (Pn(e)
              ? (e = Number(e))
              : ((e = er(64, e)), (e = Pn(e) ? Number(e) : String(e))),
            e)
          : ur(e)
            ? typeof e == `number`
              ? _r(e)
              : br(e)
            : void 0;
    })(mi(e, 2, void 0, Cr)) != null &&
      (t.timestampMs = Hl(mi(e, 2, void 0, Cr) ?? fi)),
    t
  );
}
function Gl(e) {
  var t = yi(e, 3, sr, vi()),
    n = yi(e, 2, fr, vi()),
    r = yi(e, 1, Or, vi()),
    i = yi(e, 9, Or, vi()),
    a = { categories: [], keypoints: [] };
  for (let e = 0; e < t.length; e++)
    a.categories.push({
      score: t[e],
      index: n[e] ?? -1,
      categoryName: r[e] ?? ``,
      displayName: i[e] ?? ``,
    });
  if (
    ((t = A(e, vc, 4)?.j()) &&
      (a.boundingBox = {
        originX: Vi(t, 1, pi) ?? 0,
        originY: Vi(t, 2, pi) ?? 0,
        width: Vi(t, 3, pi) ?? 0,
        height: Vi(t, 4, pi) ?? 0,
        angle: 0,
      }),
    A(e, vc, 4)?.g().length)
  )
    for (let t of A(e, vc, 4).g())
      a.keypoints.push({
        x: mi(t, 1, pi, sr) ?? 0,
        y: mi(t, 2, pi, sr) ?? 0,
        score: mi(t, 4, pi, sr) ?? 0,
        label: Or(mi(t, 3, pi)) ?? ``,
      });
  return a;
}
function Kl(e) {
  var t = [];
  for (let n of Fi(e, Sc, 1))
    t.push({
      x: Hi(n, 1) ?? 0,
      y: Hi(n, 2) ?? 0,
      z: Hi(n, 3) ?? 0,
      visibility: Hi(n, 4) ?? 0,
    });
  return t;
}
function ql(e) {
  var t = [];
  for (let n of Fi(e, bc, 1))
    t.push({
      x: Hi(n, 1) ?? 0,
      y: Hi(n, 2) ?? 0,
      z: Hi(n, 3) ?? 0,
      visibility: Hi(n, 4) ?? 0,
    });
  return t;
}
function Jl(e) {
  return Array.from(e, (e) => (e > 127 ? e - 256 : e));
}
function Yl(e, t) {
  if (e.length !== t.length)
    throw Error(
      `Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`,
    );
  var n = 0,
    r = 0,
    i = 0;
  for (let a = 0; a < e.length; a++)
    ((n += e[a] * t[a]), (r += e[a] * e[a]), (i += t[a] * t[a]));
  if (r <= 0 || i <= 0)
    throw Error(`Cannot compute cosine similarity on embedding with 0 norm.`);
  return n / Math.sqrt(r * i);
}
((ec[516587230] = [0, Uc, gl, _l, as]), (ec[518928384] = _l));
var Xl,
  Zl = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1,
    8, 0, 65, 0, 253, 15, 253, 98, 11,
  ]);
async function Ql(e) {
  if (e) return !0;
  if (Xl === void 0)
    try {
      (await WebAssembly.instantiate(Zl), (Xl = !0));
    } catch {
      Xl = !1;
    }
  return Xl;
}
async function $l(e, t, n) {
  return {
    wasmLoaderPath: `${t}/${e}_${(n = `wasm${n ? `_module` : ``}${(await Ql(n)) ? `` : `_nosimd`}_internal`)}.js`,
    wasmBinaryPath: `${t}/${e}_${n}.wasm`,
  };
}
var eu = class {};
function tu(e) {
  return k(new nu(), 1, dr(e));
}
((eu.forVisionTasks = function (e, t = !1) {
  return $l(`vision`, e ?? Hs``, t);
}),
  (eu.forTextTasks = function (e, t = !1) {
    return $l(`text`, e ?? Hs``, t);
  }),
  (eu.forGenAiTasks = function (e, t = !1) {
    return $l(`genai`, e ?? Hs``, t);
  }),
  (eu.forAudioTasks = function (e, t = !1) {
    return $l(`audio`, e ?? Hs``, t);
  }),
  (eu.isSimdSupported = function (e = !1) {
    return Ql(e);
  }));
var nu = class extends P {
    constructor(e) {
      super(e);
    }
  },
  ru = class extends P {
    constructor(e) {
      super(e);
    }
  },
  iu = [0, V, 2, ps, -2, us, bs, [0, V, us]],
  au = class extends P {
    constructor(e) {
      super(e);
    }
  },
  ou = class extends P {
    constructor(e) {
      super(e);
    }
  };
function su(e, t) {
  return k(e, 1, dr(t));
}
function cu(e, t) {
  return k(e, 2, dr(t));
}
var lu = class extends P {
    constructor(e) {
      super(e);
    }
  },
  uu = [3, 4, 5, 6, 7],
  du = class extends P {
    constructor(e) {
      super(e);
    }
  },
  fu = class extends P {
    constructor(e) {
      super(e);
    }
  };
fu.prototype.g = Ms([
  0,
  [0, V, z, -3, V],
  [
    0,
    uu,
    V,
    -1,
    B,
    [0, V, z, ps],
    B,
    iu,
    B,
    [0, 1, iu],
    B,
    [0, V],
    B,
    [0, V, z, ps],
  ],
]);
var pu = class {
    constructor() {
      this.g = typeof AbortController < `u`;
    }
    async send(e, t, n) {
      var r = this.g ? new AbortController() : void 0,
        i =
          r && e.la > 0
            ? setTimeout(() => {
                r.abort();
              }, e.la)
            : void 0;
      try {
        let i = await fetch(e.url, {
          method: e.bb,
          headers: { ...e.ab },
          ...(e.body && { body: e.body }),
          ...(e.withCredentials && { credentials: `include` }),
          signal: e.la && r ? r.signal : null,
        });
        i.status === 200 ? t?.(await i.text()) : n?.(i.status);
      } catch (e) {
        e?.name === `AbortError` ? n?.(408) : n?.(400);
      } finally {
        clearTimeout(i);
      }
    }
  },
  mu = class extends P {
    constructor(e) {
      super(e, 37);
    }
  },
  hu = [-4, {}, Rs, V, Ps],
  gu = [0, z, V, 1, z, -1, V, 1, V, 1, us],
  _u = [0, V, z, -2],
  vu = [0, z, V],
  yu = [0, z, V],
  bu = [0, R, -3],
  xu = [0, V, z, -1, us, L, -1, z, -5, bs, [0, z, -4], -1, R, [0, R, -3], V],
  Su = class extends P {
    constructor(e) {
      super(e, 19);
    }
  },
  Cu = js([
    -19,
    {},
    [
      0,
      V,
      1,
      [0, z, -6, us, L, z, -1, us],
      1,
      [0, z, 1, z, -5],
      z,
      -1,
      [0, V, z, -8],
      [0, z, -3],
      [0, z, V, z, -2],
      [
        0,
        z,
        -1,
        V,
        z,
        -1,
        V,
        z,
        -1,
        [0, bs, [0, z, -1], R, z, -5],
        [0, V, R, L, -2],
      ],
      us,
      [0, z, -3, us, L, z, -1],
      [0, V, z, -1],
      [0, z, -9],
      [0, z, -6, V, z, 1, z, R, V, -1, R, z, -2, V, z, V, z, L, -1],
      1,
      [0, V],
      1,
      [0, z, -4],
      1,
      gu,
      [0, [1, 2, 3, 4, 5, 6], B, gu, B, vu, B, yu, B, [0, V], B, xu, B, _u],
      vu,
      yu,
      xu,
      [
        0,
        [0, V, z, -1, us, L, -1, z, -4, bs, [0, z, -4], -1, 1, bu],
        [0, V, z, -1, us, L, -1, z, -4, bu],
      ],
      _u,
      [0, z, [0, L, -3, V], V, -2, [0, L, -1], R],
      4,
      [0, z, V, z, -1, us, V, z, -1, V, L, -1],
    ],
    V,
    bs,
    [
      -37,
      {},
      ls,
      z,
      bs,
      [0, z, -1],
      xs,
      1,
      xs,
      [0, vs, -1, ms, ds, -1],
      z,
      [0, L, z, -1],
      R,
      L,
      us,
      z,
      -1,
      Ds,
      Ns,
      ls,
      xs,
      V,
      ms,
      us,
      -1,
      [0, V, -1],
      z,
      R,
      z,
      hs,
      z,
      -1,
      is,
      1,
      is,
      hu,
      R,
      [0, V, [0, as, L, -2], [0, as]],
      [0, V, us],
    ],
    ls,
    Ss,
    z,
    -1,
    ls,
    V,
    -1,
    [0, R, -1, V, R],
    [0, us, -1, z],
    [0, ls, R, us],
    us,
    1,
    Cs,
    1,
    hu,
  ]),
  wu = class {
    constructor(e) {
      ((this.h = []),
        (this.m = new pu()),
        (this.j = e ?? ``),
        (this.g = setInterval(() => {
          this.flush();
        }, 6e4)));
    }
    close() {
      (this.g !== void 0 && (clearInterval(this.g), (this.g = void 0)),
        this.flush());
    }
    flush(e, t) {
      if (this.error) t?.(`net-send-failed`);
      else if (this.h.length === 0) e?.();
      else {
        var n = this.h;
        ((this.h = []),
          (n = (function (e) {
            var t = new Su();
            return Ri((t = k(t, 2, dr(1786))), 3, e);
          })(n)),
          (n = Cu(n)),
          this.m.send(
            {
              url: `https://odml.pa.googleapis.com/v1/log`,
              bb: `POST`,
              la: 1e4,
              body: n,
              hb: 2,
              ab: {
                "Content-Type": `application/x-protobuf`,
                "x-goog-api-key": this.j,
              },
              withCredentials: !1,
            },
            () => {
              e?.();
            },
            (e) => {
              ((this.error = Error(`Logging failed with HTTP error: ${e}`)),
                (this.h = []),
                this.g !== void 0 && (clearInterval(this.g), (this.g = void 0)),
                t?.(`net-send-failed`, e));
            },
          ));
      }
    }
  },
  Tu = class {
    constructor() {
      this.aa = this.U = this.X = this.R = this.V = this.T = this.P = 0;
    }
  };
function Eu(e, t) {
  var n = new fu();
  ((n = j(n, 0, 1, e.B)),
    (n = j(n, 0, 2, t)),
    (t = k((t = new mu()), 6, Sn((n = n.g()), !1))),
    (e = e.l).error || e.h.push(t));
}
function Du(e, t) {
  var n = {
      P: t.P - e.j.P,
      T: t.T - e.j.T,
      V: t.V - e.j.V,
      R: t.R - e.j.R,
      X: t.X - e.j.X,
      U: t.U,
      aa: t.aa,
    },
    r = cu(su(new lu(), e.C), 1);
  ((n = Ou(e, n)), Eu(e, (r = Li(r, 4, uu, n))), (e.j = t));
}
function Ou(e, t) {
  var n = new ru();
  return (
    (e = qi((e = Ki((e = k(n, 1, dr(e.D))), 7, t.R)), 5, t.U)),
    (e = qi(e, 6, t.aa)),
    t.V > 0 && qi(e, 4, t.X / t.V),
    t.P !== 0 && ((n = Ki((n = tu(3)), 2, t.P)), Bi(e, 8, nu, n)),
    t.T !== 0 && ((t = Ki((n = tu(4)), 2, t.T)), Bi(e, 8, nu, t)),
    e
  );
}
var ku = class {
  constructor(e, t, n) {
    ((this.u = performance.now()),
      (this.m = performance.now()),
      (this.h = new Map()),
      (this.o = 0),
      (this.g = new Tu()),
      (this.j = new Tu()),
      (this.l = new wu(n)),
      (this.C = (function (e) {
        switch (e) {
          case `AudioClassifier`:
            return 4;
          case `AudioEmbedder`:
            return 5;
          case `TextClassifier`:
            return 6;
          case `TextEmbedder`:
            return 7;
          case `GestureRecognizer`:
            return 8;
          case `HandDetector`:
            return 9;
          case `HandLandmarker`:
            return 10;
          case `ImageClassifier`:
            return 11;
          case `ImageEmbedder`:
            return 12;
          case `ImageSegmenter`:
            return 13;
          case `ObjectDetector`:
            return 14;
          case `FaceDetector`:
            return 15;
          case `FaceLandmarker`:
            return 16;
          case `InteractiveSegmenter`:
          case `InteractiveSegmenterLegacy`:
            return 18;
          case `HolisticLandmarker`:
            return 20;
          case `LlmInference`:
            return 21;
          case `LanguageDetector`:
            return 22;
          case `PoseLandmarker`:
            return 23;
          default:
            return 0;
        }
      })(e)),
      (this.D = (function (e) {
        switch (e) {
          case `IMAGE`:
            return 11;
          case `VIDEO`:
            return 12;
          case `LIVE_STREAM`:
            return 13;
          case `AUDIO_CLIPS`:
            return 14;
          case `AUDIO_STREAM`:
            return 15;
          default:
            return 10;
        }
      })(t)),
      (e = new du()),
      typeof window > `u`
        ? (t = 0)
        : ((t = navigator.userAgent),
          (t = /Android/i.test(t)
            ? 1
            : /iPhone|iPad|iPod/i.test(t)
              ? 2
              : /Windows/i.test(t)
                ? 5
                : /Macintosh/i.test(t)
                  ? 4
                  : /Linux/i.test(t)
                    ? 3
                    : 0)),
      (e = k(e, 1, dr(t))),
      (e = k(e, 2, Dr(``))),
      (e = k(e, 3, Dr(``))),
      (e = k(e, 4, Dr(`1.0.1`))),
      (e = k(e, 5, Dr(``))),
      (this.B = k(e, 6, dr(4))));
  }
  ya() {
    var e = new ou();
    ((e = qi((e = k(e, 1, dr(this.D))), 3, performance.now() - this.u)),
      Eu(this, (e = Li(cu(su(new lu(), this.C), 0), 3, uu, e))),
      (this.m = performance.now()));
  }
  za(e) {
    var t = this.h.get(e);
    if (
      t !== void 0 &&
      (this.h.delete(e),
      (e = performance.now() - t),
      ++this.g.V,
      (this.g.X += e),
      (this.g.U = Math.max(this.g.U, e)),
      (this.o = Math.max(this.o, e)),
      performance.now() > this.m + 3e4)
    ) {
      for (let [n, r] of this.h.entries())
        ((e = n), r < t && (this.g.R++, this.h.delete(e)));
      ((t = { ...this.g, aa: performance.now() - this.m }),
        (this.g.U = 0),
        (this.m = performance.now()),
        Du(this, t));
    }
  }
  xa() {
    var e = {
      ...this.g,
      R: this.g.R + this.h.size,
      U: this.o,
      aa: performance.now() - this.u,
    };
    Du(this, e);
    var t = new au();
    ((t = j(t, 0, 2, (e = Ou(this, e)))),
      Eu(this, (t = Li((e = cu(su(new lu(), this.C), 2)), 5, uu, t))));
  }
  close() {
    var e = this.l;
    typeof e.close == `function` ? e.close() : e.flush();
  }
};
function Au() {
  var e = navigator;
  return (
    typeof OffscreenCanvas < `u` &&
    (!(function (e = navigator) {
      return (e = e.userAgent).includes(`Safari`) && !e.includes(`Chrome`);
    })(e) ||
      !!(
        (e = e.userAgent.match(/Version\/([\d]+).*Safari/)) &&
        e.length >= 1 &&
        Number(e[1]) >= 17
      ))
  );
}
async function ju(e) {
  if (typeof importScripts != `function`) {
    let t = document.createElement(`script`);
    return (
      (t.src = e.toString()),
      (t.crossOrigin = `anonymous`),
      new Promise((e, n) => {
        (t.addEventListener(
          `load`,
          () => {
            e();
          },
          !1,
        ),
          t.addEventListener(
            `error`,
            (e) => {
              n(e);
            },
            !1,
          ),
          document.body.appendChild(t));
      })
    );
  }
  try {
    importScripts(e.toString());
  } catch (t) {
    if (!(t instanceof TypeError)) throw t;
    {
      let t = self.import;
      t ? await t(e.toString()) : await ft(() => import(e.toString()), []);
    }
  }
}
function Mu(e) {
  return e.videoWidth === void 0
    ? e.naturalWidth === void 0
      ? e.displayWidth === void 0
        ? [e.width, e.height]
        : [e.displayWidth, e.displayHeight]
      : [e.naturalWidth, e.naturalHeight]
    : [e.videoWidth, e.videoHeight];
}
function W(e, t, n) {
  (e.m ||
    console.error(
      `No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`,
    ),
    n((t = e.i.stringToNewUTF8(t))),
    e.i._free(t));
}
function Nu(e, t, n) {
  if (!e.i.canvas) throw Error(`No OpenGL canvas configured.`);
  if (
    (n ? e.i._bindTextureToStream(n) : e.i._bindTextureToCanvas(),
    !(n = e.i.canvas.getContext(`webgl2`) || e.i.canvas.getContext(`webgl`)))
  )
    throw Error(
      "Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.",
    );
  (e.i.gpuOriginForWebTexturesIsBottomLeft &&
    n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0),
    n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, t),
    e.i.gpuOriginForWebTexturesIsBottomLeft &&
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1));
  var [r, i] = Mu(t);
  return (
    !e.j ||
      (r === e.i.canvas.width && i === e.i.canvas.height) ||
      ((e.i.canvas.width = r), (e.i.canvas.height = i)),
    [r, i]
  );
}
function Pu(e, t, n) {
  e.m ||
    console.error(
      `No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`,
    );
  var r = new Uint32Array(t.length);
  for (let n = 0; n < t.length; n++) r[n] = e.i.stringToNewUTF8(t[n]);
  ((t = e.i._malloc(4 * r.length)), e.i.HEAPU32.set(r, t >> 2), n(t));
  for (let t of r) e.i._free(t);
  e.i._free(t);
}
function Fu(e, t, n) {
  ((e.i.simpleListeners = e.i.simpleListeners || {}),
    (e.i.simpleListeners[t] = n));
}
function Iu(e, t, n) {
  var r = [];
  ((e.i.simpleListeners = e.i.simpleListeners || {}),
    (e.i.simpleListeners[t] = (e, t, i) => {
      t ? (n(r, i), (r = [])) : r.push(e);
    }));
}
var Lu = class {
  constructor(e, t) {
    ((this.j = !0),
      (this.i = e),
      (this.g = null),
      (this.h = 0),
      (this.m = typeof this.i._addIntToInputStream == `function`),
      t === void 0
        ? Au()
          ? (this.i.canvas = new OffscreenCanvas(1, 1))
          : (console.warn(
              `OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas.`,
            ),
            (this.i.canvas = document.createElement(`canvas`)))
        : (this.i.canvas = t));
  }
  async initializeGraph(e) {
    var t = await (await fetch(e)).arrayBuffer();
    ((e = !(e.endsWith(`.pbtxt`) || e.endsWith(`.textproto`))),
      this.setGraph(new Uint8Array(t), e));
  }
  setGraphFromString(e) {
    this.setGraph(new TextEncoder().encode(e), !1);
  }
  setGraph(e, t) {
    var n = e.length,
      r = this.i._malloc(n);
    (this.i.HEAPU8.set(e, r),
      t ? this.i._changeBinaryGraph(n, r) : this.i._changeTextGraph(n, r),
      this.i._free(r));
  }
  configureAudio(e, t, n, r, i) {
    (this.i._configureAudio ||
      console.warn(
        `Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?`,
      ),
      W(this, r || `input_audio`, (r) => {
        W(this, (i ||= `audio_header`), (i) => {
          this.i._configureAudio(r, i, e, t ?? 0, n);
        });
      }));
  }
  setAutoResizeCanvas(e) {
    this.j = e;
  }
  setAutoRenderToScreen(e) {
    this.i._setAutoRenderToScreen(e);
  }
  setGpuBufferVerticalFlip(e) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = e;
  }
  ja(e) {
    (Fu(this, `__graph_config__`, (t) => {
      e(t);
    }),
      W(this, `__graph_config__`, (e) => {
        this.i._getGraphConfig(e, void 0);
      }),
      delete this.i.simpleListeners.__graph_config__);
  }
  attachErrorListener(e) {
    this.i.errorListener = e;
  }
  attachEmptyPacketListener(e, t) {
    ((this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}),
      (this.i.emptyPacketListeners[e] = t));
  }
  addAudioToStream(e, t, n) {
    this.addAudioToStreamWithShape(e, 0, 0, t, n);
  }
  addAudioToStreamWithShape(e, t, n, r, i) {
    var a = 4 * e.length;
    (this.h !== a &&
      (this.g && this.i._free(this.g),
      (this.g = this.i._malloc(a)),
      (this.h = a)),
      this.i.HEAPF32.set(e, this.g / 4),
      W(this, r, (e) => {
        this.i._addAudioToInputStream(this.g, t, n, e, i);
      }));
  }
  addGpuBufferToStream(e, t, n) {
    W(this, t, (t) => {
      var [r, i] = Nu(this, e, t);
      this.i._addBoundTextureToStream(t, r, i, n);
    });
  }
  addBoolToStream(e, t, n) {
    W(this, t, (t) => {
      this.i._addBoolToInputStream(e, t, n);
    });
  }
  addDoubleToStream(e, t, n) {
    W(this, t, (t) => {
      this.i._addDoubleToInputStream(e, t, n);
    });
  }
  addFloatToStream(e, t, n) {
    W(this, t, (t) => {
      this.i._addFloatToInputStream(e, t, n);
    });
  }
  addIntToStream(e, t, n) {
    W(this, t, (t) => {
      this.i._addIntToInputStream(e, t, n);
    });
  }
  addUintToStream(e, t, n) {
    W(this, t, (t) => {
      this.i._addUintToInputStream(e, t, n);
    });
  }
  addStringToStream(e, t, n) {
    W(this, t, (t) => {
      W(this, e, (e) => {
        this.i._addStringToInputStream(e, t, n);
      });
    });
  }
  addStringRecordToStream(e, t, n) {
    W(this, t, (t) => {
      Pu(this, Object.keys(e), (r) => {
        Pu(this, Object.values(e), (i) => {
          this.i._addFlatHashMapToInputStream(
            r,
            i,
            Object.keys(e).length,
            t,
            n,
          );
        });
      });
    });
  }
  addProtoToStream(e, t, n, r) {
    W(this, n, (n) => {
      W(this, t, (t) => {
        var i = this.i._malloc(e.length);
        (this.i.HEAPU8.set(e, i),
          this.i._addProtoToInputStream(i, e.length, t, n, r),
          this.i._free(i));
      });
    });
  }
  addEmptyPacketToStream(e, t) {
    W(this, e, (e) => {
      this.i._addEmptyPacketToInputStream(e, t);
    });
  }
  addBoolVectorToStream(e, t, n) {
    W(this, t, (t) => {
      var r = this.i._allocateBoolVector(e.length);
      if (!r) throw Error(`Unable to allocate new bool vector on heap.`);
      for (let t of e) this.i._addBoolVectorEntry(r, t);
      this.i._addBoolVectorToInputStream(r, t, n);
    });
  }
  addDoubleVectorToStream(e, t, n) {
    W(this, t, (t) => {
      var r = this.i._allocateDoubleVector(e.length);
      if (!r) throw Error(`Unable to allocate new double vector on heap.`);
      for (let t of e) this.i._addDoubleVectorEntry(r, t);
      this.i._addDoubleVectorToInputStream(r, t, n);
    });
  }
  addFloatVectorToStream(e, t, n) {
    W(this, t, (t) => {
      var r = this.i._allocateFloatVector(e.length);
      if (!r) throw Error(`Unable to allocate new float vector on heap.`);
      for (let t of e) this.i._addFloatVectorEntry(r, t);
      this.i._addFloatVectorToInputStream(r, t, n);
    });
  }
  addIntVectorToStream(e, t, n) {
    W(this, t, (t) => {
      var r = this.i._allocateIntVector(e.length);
      if (!r) throw Error(`Unable to allocate new int vector on heap.`);
      for (let t of e) this.i._addIntVectorEntry(r, t);
      this.i._addIntVectorToInputStream(r, t, n);
    });
  }
  addUintVectorToStream(e, t, n) {
    W(this, t, (t) => {
      var r = this.i._allocateUintVector(e.length);
      if (!r)
        throw Error(`Unable to allocate new unsigned int vector on heap.`);
      for (let t of e) this.i._addUintVectorEntry(r, t);
      this.i._addUintVectorToInputStream(r, t, n);
    });
  }
  addStringVectorToStream(e, t, n) {
    W(this, t, (t) => {
      var r = this.i._allocateStringVector(e.length);
      if (!r) throw Error(`Unable to allocate new string vector on heap.`);
      for (let t of e)
        W(this, t, (e) => {
          this.i._addStringVectorEntry(r, e);
        });
      this.i._addStringVectorToInputStream(r, t, n);
    });
  }
  addBoolToInputSidePacket(e, t) {
    W(this, t, (t) => {
      this.i._addBoolToInputSidePacket(e, t);
    });
  }
  addDoubleToInputSidePacket(e, t) {
    W(this, t, (t) => {
      this.i._addDoubleToInputSidePacket(e, t);
    });
  }
  addFloatToInputSidePacket(e, t) {
    W(this, t, (t) => {
      this.i._addFloatToInputSidePacket(e, t);
    });
  }
  addIntToInputSidePacket(e, t) {
    W(this, t, (t) => {
      this.i._addIntToInputSidePacket(e, t);
    });
  }
  addUintToInputSidePacket(e, t) {
    W(this, t, (t) => {
      this.i._addUintToInputSidePacket(e, t);
    });
  }
  addStringToInputSidePacket(e, t) {
    W(this, t, (t) => {
      W(this, e, (e) => {
        this.i._addStringToInputSidePacket(e, t);
      });
    });
  }
  addProtoToInputSidePacket(e, t, n) {
    W(this, n, (n) => {
      W(this, t, (t) => {
        var r = this.i._malloc(e.length);
        (this.i.HEAPU8.set(e, r),
          this.i._addProtoToInputSidePacket(r, e.length, t, n),
          this.i._free(r));
      });
    });
  }
  addBoolVectorToInputSidePacket(e, t) {
    W(this, t, (t) => {
      var n = this.i._allocateBoolVector(e.length);
      if (!n) throw Error(`Unable to allocate new bool vector on heap.`);
      for (let t of e) this.i._addBoolVectorEntry(n, t);
      this.i._addBoolVectorToInputSidePacket(n, t);
    });
  }
  addDoubleVectorToInputSidePacket(e, t) {
    W(this, t, (t) => {
      var n = this.i._allocateDoubleVector(e.length);
      if (!n) throw Error(`Unable to allocate new double vector on heap.`);
      for (let t of e) this.i._addDoubleVectorEntry(n, t);
      this.i._addDoubleVectorToInputSidePacket(n, t);
    });
  }
  addFloatVectorToInputSidePacket(e, t) {
    W(this, t, (t) => {
      var n = this.i._allocateFloatVector(e.length);
      if (!n) throw Error(`Unable to allocate new float vector on heap.`);
      for (let t of e) this.i._addFloatVectorEntry(n, t);
      this.i._addFloatVectorToInputSidePacket(n, t);
    });
  }
  addIntVectorToInputSidePacket(e, t) {
    W(this, t, (t) => {
      var n = this.i._allocateIntVector(e.length);
      if (!n) throw Error(`Unable to allocate new int vector on heap.`);
      for (let t of e) this.i._addIntVectorEntry(n, t);
      this.i._addIntVectorToInputSidePacket(n, t);
    });
  }
  addUintVectorToInputSidePacket(e, t) {
    W(this, t, (t) => {
      var n = this.i._allocateUintVector(e.length);
      if (!n)
        throw Error(`Unable to allocate new unsigned int vector on heap.`);
      for (let t of e) this.i._addUintVectorEntry(n, t);
      this.i._addUintVectorToInputSidePacket(n, t);
    });
  }
  addStringVectorToInputSidePacket(e, t) {
    W(this, t, (t) => {
      var n = this.i._allocateStringVector(e.length);
      if (!n) throw Error(`Unable to allocate new string vector on heap.`);
      for (let t of e)
        W(this, t, (e) => {
          this.i._addStringVectorEntry(n, e);
        });
      this.i._addStringVectorToInputSidePacket(n, t);
    });
  }
  attachBoolListener(e, t) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachBoolListener(e);
      }));
  }
  attachBoolVectorListener(e, t) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachBoolVectorListener(e);
      }));
  }
  attachIntListener(e, t) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachIntListener(e);
      }));
  }
  attachIntVectorListener(e, t) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachIntVectorListener(e);
      }));
  }
  attachUintListener(e, t) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachUintListener(e);
      }));
  }
  attachUintVectorListener(e, t) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachUintVectorListener(e);
      }));
  }
  attachDoubleListener(e, t) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachDoubleListener(e);
      }));
  }
  attachDoubleVectorListener(e, t) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachDoubleVectorListener(e);
      }));
  }
  attachFloatListener(e, t) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachFloatListener(e);
      }));
  }
  attachFloatVectorListener(e, t) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachFloatVectorListener(e);
      }));
  }
  attachStringListener(e, t) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachStringListener(e);
      }));
  }
  attachStringVectorListener(e, t) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachStringVectorListener(e);
      }));
  }
  attachProtoListener(e, t, n) {
    (Fu(this, e, t),
      W(this, e, (e) => {
        this.i._attachProtoListener(e, n || !1);
      }));
  }
  attachProtoVectorListener(e, t, n) {
    (Iu(this, e, t),
      W(this, e, (e) => {
        this.i._attachProtoVectorListener(e, n || !1);
      }));
  }
  attachAudioListener(e, t, n) {
    (this.i._attachAudioListener ||
      console.warn(
        `Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?`,
      ),
      Fu(this, e, (e, n) => {
        ((e = new Float32Array(e.buffer, e.byteOffset, e.length / 4)), t(e, n));
      }),
      W(this, e, (e) => {
        this.i._attachAudioListener(e, n || !1);
      }));
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    (this.i._closeGraph(),
      (this.i.simpleListeners = void 0),
      (this.i.emptyPacketListeners = void 0));
  }
};
function Ru(e) {
  return class extends e {
    get pa() {
      return this.i;
    }
    Sa() {
      if (typeof this.pa._mediapipeLoggerGetEncodedApiKey == `function`) {
        let e = this.pa._mediapipeLoggerGetEncodedApiKey();
        return this.pa._decodeBase64(e);
      }
    }
  };
}
function zu(e) {
  return class extends e {
    Za() {
      this.i._registerModelResourcesGraphService();
    }
  };
}
var Bu = Ru(zu(Lu)),
  Vu = class extends Bu {};
async function Hu(e, t, n, r) {
  return (
    (e = await (async (e, t, n, r, i) => {
      if (
        (t && (await ju(t)),
        !self.ModuleFactory || (n && (await ju(n), !self.ModuleFactory)))
      )
        throw Error(`ModuleFactory not set.`);
      return (
        self.Module &&
          i &&
          (((t = self.Module).locateFile = i.locateFile),
          i.mainScriptUrlOrBlob &&
            (t.mainScriptUrlOrBlob = i.mainScriptUrlOrBlob)),
        (i = await self.ModuleFactory(self.Module || i)),
        (self.ModuleFactory = self.Module = void 0),
        new e(i, r)
      );
    })(e, n.wasmLoaderPath, n.assetLoaderPath, t, {
      locateFile: (e) =>
        e.endsWith(`.wasm`)
          ? n.wasmBinaryPath.toString()
          : n.assetBinaryPath && e.endsWith(`.data`)
            ? n.assetBinaryPath.toString()
            : e,
    })),
    (function (e, t) {
      t = t.runningMode ?? ``;
      var n = e.g.Sa();
      e.m = new ku(e.C(), t, n);
    })(e, r),
    await e.v(r),
    e
  );
}
async function Uu(e, t, n, r) {
  return Hu(e, t, n, r);
}
function Wu(e, t) {
  var n = A(e.baseOptions, Bc, 1) || new Bc();
  (typeof t == `string`
    ? (k(n, 2, Dr(t)), k(n, 1))
    : t instanceof Uint8Array && (k(n, 1, Sn(t, !1)), k(n, 2)),
    j(e.baseOptions, 0, 1, n));
}
function Gu(e) {
  try {
    let t = e.K.length;
    if (t === 1) throw Error(e.K[0].message);
    if (t > 1)
      throw Error(
        `Encountered multiple errors: ` + e.K.map((e) => e.message).join(`, `),
      );
  } finally {
    e.K = [];
  }
}
function G(e, t) {
  e.I = Math.max(e.I, t);
}
function Ku(e, t) {
  ((e.D = new rc()),
    Yi(e.D, 2, `PassThroughCalculator`),
    nc(e.D, `free_memory`),
    H(e.D, `free_memory_unused_out`),
    cc(t, `free_memory`),
    sc(t, e.D));
}
function qu(e, t) {
  (nc(e.D, t), H(e.D, t + `_unused_out`));
}
function Ju(e) {
  e.g.addBoolToStream(!0, `free_memory`, e.I);
}
var Yu = class {
  constructor(e) {
    ((this.g = e),
      (this.K = []),
      (this.I = 0),
      this.g.setAutoRenderToScreen(!1));
  }
  j(e, t = !0) {
    if (t) {
      let t = e.baseOptions || {};
      if (e.baseOptions?.modelAssetBuffer && e.baseOptions?.modelAssetPath)
        throw Error(
          `Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer`,
        );
      if (!(
        A(this.baseOptions, Bc, 1)?.g() ||
        A(this.baseOptions, Bc, 1)?.j() ||
        e.baseOptions?.modelAssetBuffer ||
        e.baseOptions?.modelAssetPath
      ))
        throw Error(
          `Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set`,
        );
      if (
        ((function (e, t) {
          var n = A(e.baseOptions, Rc, 3);
          if (!n) {
            var r = (n = new Rc()),
              i = new Ys();
            Li(r, 4, zc, i);
          }
          (`delegate` in t &&
            (t.delegate === `GPU`
              ? ((t = n), (r = new Gs()), Li(t, 2, zc, r))
              : ((t = n), (r = new Ys()), Li(t, 4, zc, r))),
            j(e.baseOptions, 0, 3, n));
        })(this, t),
        t.modelAssetPath)
      )
        return fetch(t.modelAssetPath.toString())
          .then((e) => {
            if (e.ok) return e.arrayBuffer();
            throw Error(
              `Failed to fetch model: ${t.modelAssetPath} (${e.status})`,
            );
          })
          .then((e) => {
            try {
              this.g.i.FS_unlink(`/model.dat`);
            } catch {}
            (this.g.i.FS_createDataFile(
              `/`,
              `model.dat`,
              new Uint8Array(e),
              !0,
              !1,
              !1,
            ),
              Wu(this, `/model.dat`),
              this.o(),
              this.L());
          });
      if (t.modelAssetBuffer instanceof Uint8Array)
        Wu(this, t.modelAssetBuffer);
      else if (t.modelAssetBuffer)
        return (async function (e) {
          for (var t = [], n = 0; ;) {
            let { done: r, value: i } = await e.read();
            if (r) break;
            (t.push(i), (n += i.length));
          }
          if (t.length === 0) return new Uint8Array();
          if (t.length === 1) return t[0];
          ((e = new Uint8Array(n)), (n = 0));
          for (let r of t) (e.set(r, n), (n += r.length));
          return e;
        })(t.modelAssetBuffer).then((e) => {
          (Wu(this, e), this.o(), this.L());
        });
    }
    return (this.o(), this.L(), Promise.resolve());
  }
  L() {}
  ja() {
    var e;
    if (
      (this.g.ja((t) => {
        e = dc(t);
      }),
      !e)
    )
      throw Error(`Failed to retrieve CalculatorGraphConfig`);
    return e;
  }
  setGraph(e, t) {
    (this.g.attachErrorListener((e, t) => {
      this.K.push(Error(t));
    }),
      this.g.Za(),
      this.g.setGraph(e, t),
      this.m?.ya(),
      (this.D = void 0),
      Gu(this));
  }
  finishProcessing(e) {
    (this.g.finishProcessing(),
      Gu(this),
      this.m && e !== void 0 && this.m.za(e));
  }
  close() {
    ((this.D = void 0), this.m?.xa(), this.m?.close(), this.g.closeGraph());
  }
};
function Xu(e, t) {
  if (!e) throw Error(`Unable to obtain required WebGL resource: ${t}`);
  return e;
}
Yu.prototype.close = Yu.prototype.close;
var Zu = class {
  constructor(e, t, n, r) {
    ((this.g = e), (this.h = t), (this.m = n), (this.j = r));
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    (this.g.deleteVertexArray(this.h),
      this.g.deleteBuffer(this.m),
      this.g.deleteBuffer(this.j));
  }
};
function Qu(e, t, n) {
  var r = e.g;
  if (
    ((n = Xu(r.createShader(n), `Failed to create WebGL shader`)),
    r.shaderSource(n, t),
    r.compileShader(n),
    !r.getShaderParameter(n, r.COMPILE_STATUS))
  )
    throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);
  return (r.attachShader(e.h, n), n);
}
function $u(e, t) {
  var n = e.g,
    r = Xu(n.createVertexArray(), `Failed to create vertex array`);
  n.bindVertexArray(r);
  var i = Xu(n.createBuffer(), `Failed to create buffer`);
  (n.bindBuffer(n.ARRAY_BUFFER, i),
    n.enableVertexAttribArray(e.F),
    n.vertexAttribPointer(e.F, 2, n.FLOAT, !1, 0, 0),
    n.bufferData(
      n.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
      n.STATIC_DRAW,
    ));
  var a = Xu(n.createBuffer(), `Failed to create buffer`);
  return (
    n.bindBuffer(n.ARRAY_BUFFER, a),
    n.enableVertexAttribArray(e.K),
    n.vertexAttribPointer(e.K, 2, n.FLOAT, !1, 0, 0),
    n.bufferData(
      n.ARRAY_BUFFER,
      new Float32Array(t ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]),
      n.STATIC_DRAW,
    ),
    n.bindBuffer(n.ARRAY_BUFFER, null),
    n.bindVertexArray(null),
    new Zu(n, r, i, a)
  );
}
function K(e, t) {
  if (e.g) {
    if (t !== e.g) throw Error(`Cannot change GL context once initialized`);
  } else e.g = t;
}
function ed(e, t, n, r) {
  return (
    K(e, t),
    e.h || (e.m(), e.I()),
    n
      ? (e.l || (e.l = $u(e, !0)), (n = e.l))
      : (e.D || (e.D = $u(e, !1)), (n = e.D)),
    t.useProgram(e.h),
    n.bind(),
    e.j(),
    (e = r()),
    n.g.bindVertexArray(null),
    e
  );
}
function q(e, t, n) {
  return (
    K(e, t),
    (e = Xu(t.createTexture(), `Failed to create texture`)),
    t.bindTexture(t.TEXTURE_2D, e),
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n ?? t.LINEAR),
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, n ?? t.LINEAR),
    t.bindTexture(t.TEXTURE_2D, null),
    e
  );
}
function J(e, t, n) {
  (K(e, t),
    (e.C ||= Xu(t.createFramebuffer(), `Failed to create framebuffe.`)),
    t.bindFramebuffer(t.FRAMEBUFFER, e.C),
    t.framebufferTexture2D(
      t.FRAMEBUFFER,
      t.COLOR_ATTACHMENT0,
      t.TEXTURE_2D,
      n,
      0,
    ));
}
function td(e) {
  e.g?.bindFramebuffer(e.g.FRAMEBUFFER, null);
}
var nd = class {
    B() {
      return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
    }
    m() {
      var e = this.g;
      if (
        ((this.h = Xu(e.createProgram(), `Failed to create WebGL program`)),
        (this.da = Qu(
          this,
          `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,
          e.VERTEX_SHADER,
        )),
        (this.Z = Qu(this, this.B(), e.FRAGMENT_SHADER)),
        e.linkProgram(this.h),
        !e.getProgramParameter(this.h, e.LINK_STATUS))
      )
        throw Error(
          `Error during program linking: ${e.getProgramInfoLog(this.h)}`,
        );
      ((this.F = e.getAttribLocation(this.h, `aVertex`)),
        (this.K = e.getAttribLocation(this.h, `aTex`)));
    }
    I() {}
    j() {}
    close() {
      if (this.h) {
        let e = this.g;
        (e.deleteProgram(this.h),
          e.deleteShader(this.da),
          e.deleteShader(this.Z));
      }
      (this.C && this.g.deleteFramebuffer(this.C),
        this.D && this.D.close(),
        this.l && this.l.close());
    }
  },
  rd = class extends nd {
    B() {
      return `
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `;
    }
    I() {
      var e = this.g;
      (e.activeTexture(e.TEXTURE1),
        (this.u = q(this, e, e.LINEAR)),
        e.activeTexture(e.TEXTURE2),
        (this.o = q(this, e, e.NEAREST)));
    }
    m() {
      super.m();
      var e = this.g;
      ((this.O = Xu(
        e.getUniformLocation(this.h, `backgroundTexture`),
        `Uniform location`,
      )),
        (this.Y = Xu(
          e.getUniformLocation(this.h, `colorMappingTexture`),
          `Uniform location`,
        )),
        (this.L = Xu(
          e.getUniformLocation(this.h, `maskTexture`),
          `Uniform location`,
        )));
    }
    j() {
      super.j();
      var e = this.g;
      (e.uniform1i(this.L, 0), e.uniform1i(this.O, 1), e.uniform1i(this.Y, 2));
    }
    close() {
      (this.u && this.g.deleteTexture(this.u),
        this.o && this.g.deleteTexture(this.o),
        super.close());
    }
  },
  id = class extends nd {
    B() {
      return `
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `;
    }
    I() {
      var e = this.g;
      (e.activeTexture(e.TEXTURE1),
        (this.o = q(this, e)),
        e.activeTexture(e.TEXTURE2),
        (this.u = q(this, e)));
    }
    m() {
      super.m();
      var e = this.g;
      ((this.L = Xu(
        e.getUniformLocation(this.h, `defaultTexture`),
        `Uniform location`,
      )),
        (this.O = Xu(
          e.getUniformLocation(this.h, `overlayTexture`),
          `Uniform location`,
        )),
        (this.J = Xu(
          e.getUniformLocation(this.h, `maskTexture`),
          `Uniform location`,
        )));
    }
    j() {
      super.j();
      var e = this.g;
      (e.uniform1i(this.J, 0), e.uniform1i(this.L, 1), e.uniform1i(this.O, 2));
    }
    close() {
      (this.o && this.g.deleteTexture(this.o),
        this.u && this.g.deleteTexture(this.u),
        super.close());
    }
  };
function ad(e, t) {
  switch (t) {
    case 0:
      return e.g.find((e) => e instanceof Uint8Array);
    case 1:
      return e.g.find((e) => e instanceof Float32Array);
    case 2:
      return e.g.find(
        (e) => typeof WebGLTexture < `u` && e instanceof WebGLTexture,
      );
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function od(e) {
  var t = ad(e, 1);
  if (!t) {
    if ((t = ad(e, 0))) t = new Float32Array(t).map((e) => e / 255);
    else {
      t = new Float32Array(e.width * e.height);
      let r = cd(e);
      var n = ud(e);
      if (
        (J(n, r, sd(e)),
        `iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod`
          .split(`;`)
          .includes(navigator.platform) ||
          (navigator.userAgent.includes(`Mac`) &&
            `document` in self &&
            `ontouchend` in self.document))
      ) {
        ((n = new Float32Array(e.width * e.height * 4)),
          r.readPixels(0, 0, e.width, e.height, r.RGBA, r.FLOAT, n));
        for (let e = 0, r = 0; e < t.length; ++e, r += 4) t[e] = n[r];
      } else r.readPixels(0, 0, e.width, e.height, r.RED, r.FLOAT, t);
    }
    e.g.push(t);
  }
  return t;
}
function sd(e) {
  var t = ad(e, 2);
  if (!t) {
    let n = cd(e);
    t = dd(e);
    let r = od(e),
      i = ld(e);
    (n.texImage2D(n.TEXTURE_2D, 0, i, e.width, e.height, 0, n.RED, n.FLOAT, r),
      fd(e));
  }
  return t;
}
function cd(e) {
  if (!e.canvas)
    throw Error(
      `Conversion to different image formats require that a canvas is passed when initializing the image.`,
    );
  return (
    (e.h ||= Xu(
      e.canvas.getContext(`webgl2`),
      `You cannot use a canvas that is already bound to a different type of rendering context.`,
    )),
    e.h
  );
}
function ld(e) {
  if (((e = cd(e)), !pd)) {
    if (
      e.getExtension(`EXT_color_buffer_float`) &&
      e.getExtension(`OES_texture_float_linear`) &&
      e.getExtension(`EXT_float_blend`)
    )
      pd = e.R32F;
    else {
      if (!e.getExtension(`EXT_color_buffer_half_float`))
        throw Error(
          `GPU does not fully support 4-channel float32 or float16 formats`,
        );
      pd = e.R16F;
    }
  }
  return pd;
}
function ud(e) {
  return ((e.j ||= new nd()), e.j);
}
function dd(e) {
  var t = cd(e);
  (t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0));
  var n = ad(e, 2);
  return (
    n ||
      ((n = q(ud(e), t, e.m ? t.LINEAR : t.NEAREST)), e.g.push(n), (e.o = !0)),
    t.bindTexture(t.TEXTURE_2D, n),
    n
  );
}
function fd(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
var pd,
  Y = class {
    constructor(e, t, n, r, i, a, o) {
      ((this.g = e),
        (this.m = t),
        (this.o = n),
        (this.canvas = r),
        (this.j = i),
        (this.width = a),
        (this.height = o),
        this.o &&
          --md === 0 &&
          console.error(
            `You seem to be creating MPMask instances without invoking .close(). This leaks resources.`,
          ));
    }
    Ua() {
      return !!ad(this, 0);
    }
    ua() {
      return !!ad(this, 1);
    }
    W() {
      return !!ad(this, 2);
    }
    ta() {
      return (
        (t = ad((e = this), 0)) ||
          ((t = od(e)),
          (t = new Uint8Array(t.map((e) => Math.round(255 * e)))),
          e.g.push(t)),
        t
      );
      var e, t;
    }
    sa() {
      return od(this);
    }
    S() {
      return sd(this);
    }
    clone() {
      var e = [];
      for (let t of this.g) {
        let n;
        if (t instanceof Uint8Array) n = new Uint8Array(t);
        else if (t instanceof Float32Array) n = new Float32Array(t);
        else {
          if (!(t instanceof WebGLTexture))
            throw Error(`Type is not supported: ${t}`);
          {
            let e = cd(this),
              t = ud(this);
            (e.activeTexture(e.TEXTURE1),
              (n = q(t, e, this.m ? e.LINEAR : e.NEAREST)),
              e.bindTexture(e.TEXTURE_2D, n));
            let r = ld(this);
            (e.texImage2D(
              e.TEXTURE_2D,
              0,
              r,
              this.width,
              this.height,
              0,
              e.RED,
              e.FLOAT,
              null,
            ),
              e.bindTexture(e.TEXTURE_2D, null),
              J(t, e, n),
              ed(t, e, !1, () => {
                (dd(this),
                  e.clearColor(0, 0, 0, 0),
                  e.clear(e.COLOR_BUFFER_BIT),
                  e.drawArrays(e.TRIANGLE_FAN, 0, 4),
                  fd(this));
              }),
              td(t),
              fd(this));
          }
        }
        e.push(n);
      }
      return new Y(
        e,
        this.m,
        this.W(),
        this.canvas,
        this.j,
        this.width,
        this.height,
      );
    }
    close() {
      (this.o && cd(this).deleteTexture(ad(this, 2)), (md = -1));
    }
  };
((Y.prototype.close = Y.prototype.close),
  (Y.prototype.clone = Y.prototype.clone),
  (Y.prototype.getAsWebGLTexture = Y.prototype.S),
  (Y.prototype.getAsFloat32Array = Y.prototype.sa),
  (Y.prototype.getAsUint8Array = Y.prototype.ta),
  (Y.prototype.hasWebGLTexture = Y.prototype.W),
  (Y.prototype.hasFloat32Array = Y.prototype.ua),
  (Y.prototype.hasUint8Array = Y.prototype.Ua));
var md = 250,
  hd = { color: `white`, lineWidth: 4, radius: 6 };
function gd(e) {
  return { ...hd, fillColor: (e ||= {}).color, ...e };
}
function _d(e, t) {
  return e instanceof Function ? e(t) : e;
}
function vd(e, t, n) {
  return Math.max(Math.min(t, n), Math.min(Math.max(t, n), e));
}
function yd(e) {
  if (!e.j)
    throw Error(
      `CPU rendering requested but CanvasRenderingContext2D not provided.`,
    );
  return e.j;
}
function bd(e) {
  if (!e.o)
    throw Error(
      `GPU rendering requested but WebGL2RenderingContext not provided.`,
    );
  return e.o;
}
function xd(e, t, n) {
  if (t.W()) n(t.S());
  else {
    let r = t.ua() ? t.sa() : t.ta();
    e.m = e.m ?? new nd();
    let i = bd(e);
    (n((e = new Y([r], t.m, !1, i.canvas, e.m, t.width, t.height)).S()),
      e.close());
  }
}
function Sd(e, t, n, r) {
  var i = (function (e) {
      return ((e.g ||= new rd()), e.g);
    })(e),
    a = bd(e),
    o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
  ed(i, a, !0, () => {
    ((function (e, t, n, r) {
      var i = e.g;
      if (
        (i.activeTexture(i.TEXTURE0),
        i.bindTexture(i.TEXTURE_2D, t),
        i.activeTexture(i.TEXTURE1),
        i.bindTexture(i.TEXTURE_2D, e.u),
        i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n),
        e.J &&
          (function (e, t) {
            if (e !== t) return !1;
            ((e = e.entries()), (t = t.entries()));
            for (let [n, r] of e) {
              e = n;
              let i = r,
                a = t.next();
              if (a.done) return !1;
              let [o, s] = a.value;
              if (
                e !== o ||
                i[0] !== s[0] ||
                i[1] !== s[1] ||
                i[2] !== s[2] ||
                i[3] !== s[3]
              )
                return !1;
            }
            return !!t.next().done;
          })(e.J, r))
      )
        (i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, e.o));
      else {
        e.J = r;
        let t = Array(1024).fill(0);
        (r.forEach((e, n) => {
          if (e.length !== 4)
            throw Error(`Color at index ${n} is not a four-channel value.`);
          ((t[4 * n] = e[0]),
            (t[4 * n + 1] = e[1]),
            (t[4 * n + 2] = e[2]),
            (t[4 * n + 3] = e[3]));
        }),
          i.activeTexture(i.TEXTURE2),
          i.bindTexture(i.TEXTURE_2D, e.o),
          i.texImage2D(
            i.TEXTURE_2D,
            0,
            i.RGBA,
            256,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            new Uint8Array(t),
          ));
      }
    })(i, t, o, r),
      a.clearColor(0, 0, 0, 0),
      a.clear(a.COLOR_BUFFER_BIT),
      a.drawArrays(a.TRIANGLE_FAN, 0, 4));
    var e = i.g;
    (e.activeTexture(e.TEXTURE0),
      e.bindTexture(e.TEXTURE_2D, null),
      e.activeTexture(e.TEXTURE1),
      e.bindTexture(e.TEXTURE_2D, null),
      e.activeTexture(e.TEXTURE2),
      e.bindTexture(e.TEXTURE_2D, null));
  });
}
function Cd(e, t, n, r) {
  var i = bd(e),
    a = (function (e) {
      return ((e.h ||= new id()), e.h);
    })(e),
    o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n,
    s = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
  ed(a, i, !0, () => {
    var e = a.g;
    (e.activeTexture(e.TEXTURE0),
      e.bindTexture(e.TEXTURE_2D, t),
      e.activeTexture(e.TEXTURE1),
      e.bindTexture(e.TEXTURE_2D, a.o),
      e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, o),
      e.activeTexture(e.TEXTURE2),
      e.bindTexture(e.TEXTURE_2D, a.u),
      e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, s),
      i.clearColor(0, 0, 0, 0),
      i.clear(i.COLOR_BUFFER_BIT),
      i.drawArrays(i.TRIANGLE_FAN, 0, 4),
      i.bindTexture(i.TEXTURE_2D, null),
      (e = a.g).activeTexture(e.TEXTURE0),
      e.bindTexture(e.TEXTURE_2D, null),
      e.activeTexture(e.TEXTURE1),
      e.bindTexture(e.TEXTURE_2D, null),
      e.activeTexture(e.TEXTURE2),
      e.bindTexture(e.TEXTURE_2D, null));
  });
}
var wd = class {
  constructor(e, t) {
    (typeof CanvasRenderingContext2D < `u` &&
      e instanceof CanvasRenderingContext2D) ||
    e instanceof OffscreenCanvasRenderingContext2D
      ? ((this.j = e), (this.o = t))
      : (this.o = e);
  }
  Ma(e, t) {
    if (e) {
      var n = yd(this);
      ((t = gd(t)), n.save());
      var r = n.canvas,
        i = 0;
      for (let a of e)
        ((n.fillStyle = _d(t.fillColor, { index: i, from: a })),
          (n.strokeStyle = _d(t.color, { index: i, from: a })),
          (n.lineWidth = _d(t.lineWidth, { index: i, from: a })),
          (e = new Path2D()).arc(
            a.x * r.width,
            a.y * r.height,
            _d(t.radius, { index: i, from: a }),
            0,
            2 * Math.PI,
          ),
          n.fill(e),
          n.stroke(e),
          ++i);
      n.restore();
    }
  }
  La(e, t, n) {
    if (e && t) {
      var r = yd(this);
      ((n = gd(n)), r.save());
      var i = r.canvas,
        a = 0;
      for (let o of t) {
        (r.beginPath(), (t = e[o.start]));
        let s = e[o.end];
        (t &&
          s &&
          ((r.strokeStyle = _d(n.color, { index: a, from: t, to: s })),
          (r.lineWidth = _d(n.lineWidth, { index: a, from: t, to: s })),
          r.moveTo(t.x * i.width, t.y * i.height),
          r.lineTo(s.x * i.width, s.y * i.height)),
          ++a,
          r.stroke());
      }
      r.restore();
    }
  }
  Ia(e, t) {
    var n = yd(this);
    ((t = gd(t)),
      n.save(),
      n.beginPath(),
      (n.lineWidth = _d(t.lineWidth, {})),
      (n.strokeStyle = _d(t.color, {})),
      (n.fillStyle = _d(t.fillColor, {})),
      n.moveTo(e.originX, e.originY),
      n.lineTo(e.originX + e.width, e.originY),
      n.lineTo(e.originX + e.width, e.originY + e.height),
      n.lineTo(e.originX, e.originY + e.height),
      n.lineTo(e.originX, e.originY),
      n.stroke(),
      n.fill(),
      n.restore());
  }
  Ja(e, t, n = [0, 0, 0, 255]) {
    this.j
      ? (function (e, t, n, r) {
          var i = bd(e);
          xd(e, t, (t) => {
            (Sd(e, t, n, r),
              (t = yd(e)).drawImage(
                i.canvas,
                0,
                0,
                t.canvas.width,
                t.canvas.height,
              ));
          });
        })(this, e, n, t)
      : Sd(this, e.S(), n, t);
  }
  Ka(e, t, n) {
    this.j
      ? (function (e, t, n, r) {
          var i = bd(e);
          xd(e, t, (t) => {
            (Cd(e, t, n, r),
              (t = yd(e)).drawImage(
                i.canvas,
                0,
                0,
                t.canvas.width,
                t.canvas.height,
              ));
          });
        })(this, e, t, n)
      : Cd(this, e.S(), t, n);
  }
  close() {
    (this.g?.close(),
      (this.g = void 0),
      this.h?.close(),
      (this.h = void 0),
      this.m?.close(),
      (this.m = void 0));
  }
};
function Td(e, t) {
  switch (t) {
    case 0:
      return e.g.find((e) => e instanceof ImageData);
    case 1:
      return e.g.find(
        (e) => typeof ImageBitmap < `u` && e instanceof ImageBitmap,
      );
    case 2:
      return e.g.find(
        (e) => typeof WebGLTexture < `u` && e instanceof WebGLTexture,
      );
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function Ed(e) {
  var t = Td(e, 0);
  if (!t) {
    t = Od(e);
    let n = kd(e),
      r = new Uint8Array(e.width * e.height * 4);
    (J(n, t, Dd(e)),
      t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, r),
      td(n),
      (t = new ImageData(new Uint8ClampedArray(r.buffer), e.width, e.height)),
      e.g.push(t));
  }
  return t;
}
function Dd(e) {
  var t = Td(e, 2);
  if (!t) {
    let n = Od(e);
    t = Ad(e);
    let r = Td(e, 1) || Ed(e);
    (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r), jd(e));
  }
  return t;
}
function Od(e) {
  if (!e.canvas)
    throw Error(
      `Conversion to different image formats require that a canvas is passed when initializing the image.`,
    );
  return (
    (e.h ||= Xu(
      e.canvas.getContext(`webgl2`),
      `You cannot use a canvas that is already bound to a different type of rendering context.`,
    )),
    e.h
  );
}
function kd(e) {
  return ((e.j ||= new nd()), e.j);
}
function Ad(e) {
  var t = Od(e);
  (t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0));
  var n = Td(e, 2);
  return (
    n || ((n = q(kd(e), t)), e.g.push(n), (e.m = !0)),
    t.bindTexture(t.TEXTURE_2D, n),
    n
  );
}
function jd(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
function Md(e) {
  var t = Od(e);
  return ed(kd(e), t, !0, () =>
    (function (e, t) {
      var n = e.canvas;
      if (n.width === e.width && n.height === e.height) return t();
      var r = n.width,
        i = n.height;
      return (
        (n.width = e.width),
        (n.height = e.height),
        (e = t()),
        (n.width = r),
        (n.height = i),
        e
      );
    })(e, () => {
      if (
        (t.bindFramebuffer(t.FRAMEBUFFER, null),
        t.clearColor(0, 0, 0, 0),
        t.clear(t.COLOR_BUFFER_BIT),
        t.drawArrays(t.TRIANGLE_FAN, 0, 4),
        !(e.canvas instanceof OffscreenCanvas))
      )
        throw Error(
          `Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas`,
        );
      return e.canvas.transferToImageBitmap();
    }),
  );
}
((wd.prototype.close = wd.prototype.close),
  (wd.prototype.drawConfidenceMask = wd.prototype.Ka),
  (wd.prototype.drawCategoryMask = wd.prototype.Ja),
  (wd.prototype.drawBoundingBox = wd.prototype.Ia),
  (wd.prototype.drawConnectors = wd.prototype.La),
  (wd.prototype.drawLandmarks = wd.prototype.Ma),
  (wd.lerp = function (e, t, n, r, i) {
    return vd(r * (1 - (e - t) / (n - t)) + i * (1 - (n - e) / (n - t)), r, i);
  }),
  (wd.clamp = vd));
var Nd = class {
  constructor(e, t, n, r, i, a, o) {
    ((this.g = e),
      (this.o = t),
      (this.m = n),
      (this.canvas = r),
      (this.j = i),
      (this.width = a),
      (this.height = o),
      (this.o || this.m) &&
        --Pd === 0 &&
        console.error(
          `You seem to be creating MPImage instances without invoking .close(). This leaks resources.`,
        ));
  }
  Ta() {
    return !!Td(this, 0);
  }
  va() {
    return !!Td(this, 1);
  }
  W() {
    return !!Td(this, 2);
  }
  Qa() {
    return Ed(this);
  }
  Pa() {
    var e = Td(this, 1);
    return (
      e ||
        (Dd(this),
        Ad(this),
        (e = Md(this)),
        jd(this),
        this.g.push(e),
        (this.o = !0)),
      e
    );
  }
  S() {
    return Dd(this);
  }
  clone() {
    var e = [];
    for (let t of this.g) {
      let n;
      if (t instanceof ImageData)
        n = new ImageData(t.data, this.width, this.height);
      else if (t instanceof WebGLTexture) {
        let e = Od(this),
          t = kd(this);
        (e.activeTexture(e.TEXTURE1),
          (n = q(t, e)),
          e.bindTexture(e.TEXTURE_2D, n),
          e.texImage2D(
            e.TEXTURE_2D,
            0,
            e.RGBA,
            this.width,
            this.height,
            0,
            e.RGBA,
            e.UNSIGNED_BYTE,
            null,
          ),
          e.bindTexture(e.TEXTURE_2D, null),
          J(t, e, n),
          ed(t, e, !1, () => {
            (Ad(this),
              e.clearColor(0, 0, 0, 0),
              e.clear(e.COLOR_BUFFER_BIT),
              e.drawArrays(e.TRIANGLE_FAN, 0, 4),
              jd(this));
          }),
          td(t),
          jd(this));
      } else {
        if (!(t instanceof ImageBitmap))
          throw Error(`Type is not supported: ${t}`);
        (Dd(this), Ad(this), (n = Md(this)), jd(this));
      }
      e.push(n);
    }
    return new Nd(
      e,
      this.va(),
      this.W(),
      this.canvas,
      this.j,
      this.width,
      this.height,
    );
  }
  close() {
    (this.o && Td(this, 1).close(),
      this.m && Od(this).deleteTexture(Td(this, 2)),
      (Pd = -1));
  }
};
((Nd.prototype.close = Nd.prototype.close),
  (Nd.prototype.clone = Nd.prototype.clone),
  (Nd.prototype.getAsWebGLTexture = Nd.prototype.S),
  (Nd.prototype.getAsImageBitmap = Nd.prototype.Pa),
  (Nd.prototype.getAsImageData = Nd.prototype.Qa),
  (Nd.prototype.hasWebGLTexture = Nd.prototype.W),
  (Nd.prototype.hasImageBitmap = Nd.prototype.va),
  (Nd.prototype.hasImageData = Nd.prototype.Ta));
var Pd = 250;
function Fd(...e) {
  return e.map(([e, t]) => ({ start: e, end: t }));
}
var Id,
  Ld = zu(
    ((Id = Ru(Lu)),
    class extends Id {
      get oa() {
        return this.i;
      }
      Da(e, t, n) {
        W(this, t, (t) => {
          var [r, i] = Nu(this, e, t);
          this.oa._addBoundTextureAsImageToStream(t, r, i, n);
        });
      }
      ga(e, t) {
        (Fu(this, e, t),
          W(this, e, (e) => {
            this.oa._attachImageListener(e);
          }));
      }
      ha(e, t) {
        (Iu(this, e, t),
          W(this, e, (e) => {
            this.oa._attachImageVectorListener(e);
          }));
      }
    }),
  ),
  Rd = class extends Ld {};
async function X(e, t, n) {
  return Uu(
    e,
    n.canvas ?? (Au() ? void 0 : document.createElement(`canvas`)),
    t,
    n,
  );
}
function zd(e, t, n, r) {
  if (e.m && r !== void 0) {
    if (A(e.baseOptions, Rc, 3)?.g()) {
      var i = e.m;
      (++i.g.T, i.h.set(r, performance.now()));
    } else (++(i = e.m).g.P, i.h.set(r, performance.now()));
  }
  if (e.qa) {
    if (((i = new Ec()), n?.regionOfInterest)) {
      if (!e.Ca) throw Error(`This task doesn't support region-of-interest.`);
      var a = n.regionOfInterest;
      if (a.left >= a.right || a.top >= a.bottom)
        throw Error(`Expected RectF with left < right and top < bottom.`);
      if (a.left < 0 || a.top < 0 || a.right > 1 || a.bottom > 1)
        throw Error(`Expected RectF values to be in [0,1].`);
      (M(i, 1, (a.left + a.right) / 2),
        M(i, 2, (a.top + a.bottom) / 2),
        M(i, 4, a.right - a.left),
        M(i, 3, a.bottom - a.top));
    } else (M(i, 1, 0.5), M(i, 2, 0.5), M(i, 4, 1), M(i, 3, 1));
    if (n?.rotationDegrees) {
      if (n?.rotationDegrees % 90 != 0)
        throw Error(`Expected rotation to be a multiple of 90°.`);
      if (
        (M(i, 5, (-Math.PI * n.rotationDegrees) / 180),
        n?.rotationDegrees % 180 != 0)
      ) {
        let [e, r] = Mu(t);
        ((n = (Hi(i, 3) * r) / e),
          (a = (Hi(i, 4) * e) / r),
          M(i, 4, n),
          M(i, 3, a));
      }
    }
    e.g.addProtoToStream(i.g(), `mediapipe.NormalizedRect`, e.qa, r);
  }
  (e.g.Da(t, e.Ba, r ?? performance.now()), e.finishProcessing(r));
}
function Bd(e, t, n) {
  if (e.J)
    throw Error(
      `Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.`,
    );
  zd(e, t, n, e.I + 1);
}
function Vd(e, t, n, r) {
  if (!e.J)
    throw Error(
      `Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.`,
    );
  zd(e, t, n, r);
}
function Hd(e, t, n, r) {
  var i = t.data,
    a = t.width,
    o = a * (t = t.height);
  if ((i instanceof Uint8Array || i instanceof Float32Array) && i.length !== o)
    throw Error(`Unsupported channel count: ` + i.length / o);
  return ((e = new Y([i], n, !1, e.g.i.canvas, e.da, a, t)), r ? e.clone() : e);
}
var Ud = class extends Yu {
  constructor(e, t, n, r) {
    (super(e),
      (this.g = e),
      (this.Ba = t),
      (this.qa = n),
      (this.Ca = r),
      (this.da = new nd()),
      (this.J = !1));
  }
  j(e, t = !0) {
    if (`runningMode` in e) {
      var n = (this.J = !!e.runningMode && e.runningMode !== `IMAGE`);
      k(this.baseOptions, 2, n == null ? n : cr(n));
    }
    if (e.canvas !== void 0 && this.g.i.canvas !== e.canvas)
      throw Error(`You must create a new task to reset the canvas.`);
    return super.j(e, t);
  }
  close() {
    (this.da.close(), super.close());
  }
};
Ud.prototype.close = Ud.prototype.close;
var Wd = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect_in`, !1),
      (this.l = { detections: [] }),
      j((e = this.h = new Gc()), 0, 1, (t = new Vc())),
      M(this.h, 2, 0.5),
      M(this.h, 3, 0.3));
  }
  C() {
    return `FaceDetector`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      `minDetectionConfidence` in e &&
        M(this.h, 2, e.minDetectionConfidence ?? 0.5),
      `minSuppressionThreshold` in e &&
        M(this.h, 3, e.minSuppressionThreshold ?? 0.3),
      this.j(e)
    );
  }
  G(e, t) {
    return ((this.l = { detections: [] }), Bd(this, e, t), this.l);
  }
  H(e, t, n) {
    return ((this.l = { detections: [] }), Vd(this, e, n, t), this.l);
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`), cc(e, `norm_rect_in`), U(e, `detections`));
    var t = new $s();
    ho(t, qc, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.face_detector.FaceDetectorGraph`),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect_in`),
      H(n, `DETECTIONS:detections`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoVectorListener(`detections`, (e, t) => {
        for (let t of e) ((e = yc(t)), this.l.detections.push(Gl(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`detections`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((Wd.prototype.detectForVideo = Wd.prototype.H),
  (Wd.prototype.detect = Wd.prototype.G),
  (Wd.prototype.setOptions = Wd.prototype.v),
  (Wd.createFromModelPath = async function (e, t) {
    return X(Wd, e, { baseOptions: { modelAssetPath: t } });
  }),
  (Wd.createFromModelBuffer = function (e, t) {
    return X(Wd, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Wd.createFromOptions = function (e, t) {
    return X(Wd, e, t);
  }));
var Gd = Fd(
    [61, 146],
    [146, 91],
    [91, 181],
    [181, 84],
    [84, 17],
    [17, 314],
    [314, 405],
    [405, 321],
    [321, 375],
    [375, 291],
    [61, 185],
    [185, 40],
    [40, 39],
    [39, 37],
    [37, 0],
    [0, 267],
    [267, 269],
    [269, 270],
    [270, 409],
    [409, 291],
    [78, 95],
    [95, 88],
    [88, 178],
    [178, 87],
    [87, 14],
    [14, 317],
    [317, 402],
    [402, 318],
    [318, 324],
    [324, 308],
    [78, 191],
    [191, 80],
    [80, 81],
    [81, 82],
    [82, 13],
    [13, 312],
    [312, 311],
    [311, 310],
    [310, 415],
    [415, 308],
  ),
  Kd = Fd(
    [263, 249],
    [249, 390],
    [390, 373],
    [373, 374],
    [374, 380],
    [380, 381],
    [381, 382],
    [382, 362],
    [263, 466],
    [466, 388],
    [388, 387],
    [387, 386],
    [386, 385],
    [385, 384],
    [384, 398],
    [398, 362],
  ),
  qd = Fd(
    [276, 283],
    [283, 282],
    [282, 295],
    [295, 285],
    [300, 293],
    [293, 334],
    [334, 296],
    [296, 336],
  ),
  Jd = Fd([474, 475], [475, 476], [476, 477], [477, 474]),
  Yd = Fd(
    [33, 7],
    [7, 163],
    [163, 144],
    [144, 145],
    [145, 153],
    [153, 154],
    [154, 155],
    [155, 133],
    [33, 246],
    [246, 161],
    [161, 160],
    [160, 159],
    [159, 158],
    [158, 157],
    [157, 173],
    [173, 133],
  ),
  Xd = Fd(
    [46, 53],
    [53, 52],
    [52, 65],
    [65, 55],
    [70, 63],
    [63, 105],
    [105, 66],
    [66, 107],
  ),
  Zd = Fd([469, 470], [470, 471], [471, 472], [472, 469]),
  Qd = Fd(
    [10, 338],
    [338, 297],
    [297, 332],
    [332, 284],
    [284, 251],
    [251, 389],
    [389, 356],
    [356, 454],
    [454, 323],
    [323, 361],
    [361, 288],
    [288, 397],
    [397, 365],
    [365, 379],
    [379, 378],
    [378, 400],
    [400, 377],
    [377, 152],
    [152, 148],
    [148, 176],
    [176, 149],
    [149, 150],
    [150, 136],
    [136, 172],
    [172, 58],
    [58, 132],
    [132, 93],
    [93, 234],
    [234, 127],
    [127, 162],
    [162, 21],
    [21, 54],
    [54, 103],
    [103, 67],
    [67, 109],
    [109, 10],
  ),
  $d = [...Gd, ...Kd, ...qd, ...Yd, ...Xd, ...Qd],
  ef = Fd(
    [127, 34],
    [34, 139],
    [139, 127],
    [11, 0],
    [0, 37],
    [37, 11],
    [232, 231],
    [231, 120],
    [120, 232],
    [72, 37],
    [37, 39],
    [39, 72],
    [128, 121],
    [121, 47],
    [47, 128],
    [232, 121],
    [121, 128],
    [128, 232],
    [104, 69],
    [69, 67],
    [67, 104],
    [175, 171],
    [171, 148],
    [148, 175],
    [118, 50],
    [50, 101],
    [101, 118],
    [73, 39],
    [39, 40],
    [40, 73],
    [9, 151],
    [151, 108],
    [108, 9],
    [48, 115],
    [115, 131],
    [131, 48],
    [194, 204],
    [204, 211],
    [211, 194],
    [74, 40],
    [40, 185],
    [185, 74],
    [80, 42],
    [42, 183],
    [183, 80],
    [40, 92],
    [92, 186],
    [186, 40],
    [230, 229],
    [229, 118],
    [118, 230],
    [202, 212],
    [212, 214],
    [214, 202],
    [83, 18],
    [18, 17],
    [17, 83],
    [76, 61],
    [61, 146],
    [146, 76],
    [160, 29],
    [29, 30],
    [30, 160],
    [56, 157],
    [157, 173],
    [173, 56],
    [106, 204],
    [204, 194],
    [194, 106],
    [135, 214],
    [214, 192],
    [192, 135],
    [203, 165],
    [165, 98],
    [98, 203],
    [21, 71],
    [71, 68],
    [68, 21],
    [51, 45],
    [45, 4],
    [4, 51],
    [144, 24],
    [24, 23],
    [23, 144],
    [77, 146],
    [146, 91],
    [91, 77],
    [205, 50],
    [50, 187],
    [187, 205],
    [201, 200],
    [200, 18],
    [18, 201],
    [91, 106],
    [106, 182],
    [182, 91],
    [90, 91],
    [91, 181],
    [181, 90],
    [85, 84],
    [84, 17],
    [17, 85],
    [206, 203],
    [203, 36],
    [36, 206],
    [148, 171],
    [171, 140],
    [140, 148],
    [92, 40],
    [40, 39],
    [39, 92],
    [193, 189],
    [189, 244],
    [244, 193],
    [159, 158],
    [158, 28],
    [28, 159],
    [247, 246],
    [246, 161],
    [161, 247],
    [236, 3],
    [3, 196],
    [196, 236],
    [54, 68],
    [68, 104],
    [104, 54],
    [193, 168],
    [168, 8],
    [8, 193],
    [117, 228],
    [228, 31],
    [31, 117],
    [189, 193],
    [193, 55],
    [55, 189],
    [98, 97],
    [97, 99],
    [99, 98],
    [126, 47],
    [47, 100],
    [100, 126],
    [166, 79],
    [79, 218],
    [218, 166],
    [155, 154],
    [154, 26],
    [26, 155],
    [209, 49],
    [49, 131],
    [131, 209],
    [135, 136],
    [136, 150],
    [150, 135],
    [47, 126],
    [126, 217],
    [217, 47],
    [223, 52],
    [52, 53],
    [53, 223],
    [45, 51],
    [51, 134],
    [134, 45],
    [211, 170],
    [170, 140],
    [140, 211],
    [67, 69],
    [69, 108],
    [108, 67],
    [43, 106],
    [106, 91],
    [91, 43],
    [230, 119],
    [119, 120],
    [120, 230],
    [226, 130],
    [130, 247],
    [247, 226],
    [63, 53],
    [53, 52],
    [52, 63],
    [238, 20],
    [20, 242],
    [242, 238],
    [46, 70],
    [70, 156],
    [156, 46],
    [78, 62],
    [62, 96],
    [96, 78],
    [46, 53],
    [53, 63],
    [63, 46],
    [143, 34],
    [34, 227],
    [227, 143],
    [123, 117],
    [117, 111],
    [111, 123],
    [44, 125],
    [125, 19],
    [19, 44],
    [236, 134],
    [134, 51],
    [51, 236],
    [216, 206],
    [206, 205],
    [205, 216],
    [154, 153],
    [153, 22],
    [22, 154],
    [39, 37],
    [37, 167],
    [167, 39],
    [200, 201],
    [201, 208],
    [208, 200],
    [36, 142],
    [142, 100],
    [100, 36],
    [57, 212],
    [212, 202],
    [202, 57],
    [20, 60],
    [60, 99],
    [99, 20],
    [28, 158],
    [158, 157],
    [157, 28],
    [35, 226],
    [226, 113],
    [113, 35],
    [160, 159],
    [159, 27],
    [27, 160],
    [204, 202],
    [202, 210],
    [210, 204],
    [113, 225],
    [225, 46],
    [46, 113],
    [43, 202],
    [202, 204],
    [204, 43],
    [62, 76],
    [76, 77],
    [77, 62],
    [137, 123],
    [123, 116],
    [116, 137],
    [41, 38],
    [38, 72],
    [72, 41],
    [203, 129],
    [129, 142],
    [142, 203],
    [64, 98],
    [98, 240],
    [240, 64],
    [49, 102],
    [102, 64],
    [64, 49],
    [41, 73],
    [73, 74],
    [74, 41],
    [212, 216],
    [216, 207],
    [207, 212],
    [42, 74],
    [74, 184],
    [184, 42],
    [169, 170],
    [170, 211],
    [211, 169],
    [170, 149],
    [149, 176],
    [176, 170],
    [105, 66],
    [66, 69],
    [69, 105],
    [122, 6],
    [6, 168],
    [168, 122],
    [123, 147],
    [147, 187],
    [187, 123],
    [96, 77],
    [77, 90],
    [90, 96],
    [65, 55],
    [55, 107],
    [107, 65],
    [89, 90],
    [90, 180],
    [180, 89],
    [101, 100],
    [100, 120],
    [120, 101],
    [63, 105],
    [105, 104],
    [104, 63],
    [93, 137],
    [137, 227],
    [227, 93],
    [15, 86],
    [86, 85],
    [85, 15],
    [129, 102],
    [102, 49],
    [49, 129],
    [14, 87],
    [87, 86],
    [86, 14],
    [55, 8],
    [8, 9],
    [9, 55],
    [100, 47],
    [47, 121],
    [121, 100],
    [145, 23],
    [23, 22],
    [22, 145],
    [88, 89],
    [89, 179],
    [179, 88],
    [6, 122],
    [122, 196],
    [196, 6],
    [88, 95],
    [95, 96],
    [96, 88],
    [138, 172],
    [172, 136],
    [136, 138],
    [215, 58],
    [58, 172],
    [172, 215],
    [115, 48],
    [48, 219],
    [219, 115],
    [42, 80],
    [80, 81],
    [81, 42],
    [195, 3],
    [3, 51],
    [51, 195],
    [43, 146],
    [146, 61],
    [61, 43],
    [171, 175],
    [175, 199],
    [199, 171],
    [81, 82],
    [82, 38],
    [38, 81],
    [53, 46],
    [46, 225],
    [225, 53],
    [144, 163],
    [163, 110],
    [110, 144],
    [52, 65],
    [65, 66],
    [66, 52],
    [229, 228],
    [228, 117],
    [117, 229],
    [34, 127],
    [127, 234],
    [234, 34],
    [107, 108],
    [108, 69],
    [69, 107],
    [109, 108],
    [108, 151],
    [151, 109],
    [48, 64],
    [64, 235],
    [235, 48],
    [62, 78],
    [78, 191],
    [191, 62],
    [129, 209],
    [209, 126],
    [126, 129],
    [111, 35],
    [35, 143],
    [143, 111],
    [117, 123],
    [123, 50],
    [50, 117],
    [222, 65],
    [65, 52],
    [52, 222],
    [19, 125],
    [125, 141],
    [141, 19],
    [221, 55],
    [55, 65],
    [65, 221],
    [3, 195],
    [195, 197],
    [197, 3],
    [25, 7],
    [7, 33],
    [33, 25],
    [220, 237],
    [237, 44],
    [44, 220],
    [70, 71],
    [71, 139],
    [139, 70],
    [122, 193],
    [193, 245],
    [245, 122],
    [247, 130],
    [130, 33],
    [33, 247],
    [71, 21],
    [21, 162],
    [162, 71],
    [170, 169],
    [169, 150],
    [150, 170],
    [188, 174],
    [174, 196],
    [196, 188],
    [216, 186],
    [186, 92],
    [92, 216],
    [2, 97],
    [97, 167],
    [167, 2],
    [141, 125],
    [125, 241],
    [241, 141],
    [164, 167],
    [167, 37],
    [37, 164],
    [72, 38],
    [38, 12],
    [12, 72],
    [38, 82],
    [82, 13],
    [13, 38],
    [63, 68],
    [68, 71],
    [71, 63],
    [226, 35],
    [35, 111],
    [111, 226],
    [101, 50],
    [50, 205],
    [205, 101],
    [206, 92],
    [92, 165],
    [165, 206],
    [209, 198],
    [198, 217],
    [217, 209],
    [165, 167],
    [167, 97],
    [97, 165],
    [220, 115],
    [115, 218],
    [218, 220],
    [133, 112],
    [112, 243],
    [243, 133],
    [239, 238],
    [238, 241],
    [241, 239],
    [214, 135],
    [135, 169],
    [169, 214],
    [190, 173],
    [173, 133],
    [133, 190],
    [171, 208],
    [208, 32],
    [32, 171],
    [125, 44],
    [44, 237],
    [237, 125],
    [86, 87],
    [87, 178],
    [178, 86],
    [85, 86],
    [86, 179],
    [179, 85],
    [84, 85],
    [85, 180],
    [180, 84],
    [83, 84],
    [84, 181],
    [181, 83],
    [201, 83],
    [83, 182],
    [182, 201],
    [137, 93],
    [93, 132],
    [132, 137],
    [76, 62],
    [62, 183],
    [183, 76],
    [61, 76],
    [76, 184],
    [184, 61],
    [57, 61],
    [61, 185],
    [185, 57],
    [212, 57],
    [57, 186],
    [186, 212],
    [214, 207],
    [207, 187],
    [187, 214],
    [34, 143],
    [143, 156],
    [156, 34],
    [79, 239],
    [239, 237],
    [237, 79],
    [123, 137],
    [137, 177],
    [177, 123],
    [44, 1],
    [1, 4],
    [4, 44],
    [201, 194],
    [194, 32],
    [32, 201],
    [64, 102],
    [102, 129],
    [129, 64],
    [213, 215],
    [215, 138],
    [138, 213],
    [59, 166],
    [166, 219],
    [219, 59],
    [242, 99],
    [99, 97],
    [97, 242],
    [2, 94],
    [94, 141],
    [141, 2],
    [75, 59],
    [59, 235],
    [235, 75],
    [24, 110],
    [110, 228],
    [228, 24],
    [25, 130],
    [130, 226],
    [226, 25],
    [23, 24],
    [24, 229],
    [229, 23],
    [22, 23],
    [23, 230],
    [230, 22],
    [26, 22],
    [22, 231],
    [231, 26],
    [112, 26],
    [26, 232],
    [232, 112],
    [189, 190],
    [190, 243],
    [243, 189],
    [221, 56],
    [56, 190],
    [190, 221],
    [28, 56],
    [56, 221],
    [221, 28],
    [27, 28],
    [28, 222],
    [222, 27],
    [29, 27],
    [27, 223],
    [223, 29],
    [30, 29],
    [29, 224],
    [224, 30],
    [247, 30],
    [30, 225],
    [225, 247],
    [238, 79],
    [79, 20],
    [20, 238],
    [166, 59],
    [59, 75],
    [75, 166],
    [60, 75],
    [75, 240],
    [240, 60],
    [147, 177],
    [177, 215],
    [215, 147],
    [20, 79],
    [79, 166],
    [166, 20],
    [187, 147],
    [147, 213],
    [213, 187],
    [112, 233],
    [233, 244],
    [244, 112],
    [233, 128],
    [128, 245],
    [245, 233],
    [128, 114],
    [114, 188],
    [188, 128],
    [114, 217],
    [217, 174],
    [174, 114],
    [131, 115],
    [115, 220],
    [220, 131],
    [217, 198],
    [198, 236],
    [236, 217],
    [198, 131],
    [131, 134],
    [134, 198],
    [177, 132],
    [132, 58],
    [58, 177],
    [143, 35],
    [35, 124],
    [124, 143],
    [110, 163],
    [163, 7],
    [7, 110],
    [228, 110],
    [110, 25],
    [25, 228],
    [356, 389],
    [389, 368],
    [368, 356],
    [11, 302],
    [302, 267],
    [267, 11],
    [452, 350],
    [350, 349],
    [349, 452],
    [302, 303],
    [303, 269],
    [269, 302],
    [357, 343],
    [343, 277],
    [277, 357],
    [452, 453],
    [453, 357],
    [357, 452],
    [333, 332],
    [332, 297],
    [297, 333],
    [175, 152],
    [152, 377],
    [377, 175],
    [347, 348],
    [348, 330],
    [330, 347],
    [303, 304],
    [304, 270],
    [270, 303],
    [9, 336],
    [336, 337],
    [337, 9],
    [278, 279],
    [279, 360],
    [360, 278],
    [418, 262],
    [262, 431],
    [431, 418],
    [304, 408],
    [408, 409],
    [409, 304],
    [310, 415],
    [415, 407],
    [407, 310],
    [270, 409],
    [409, 410],
    [410, 270],
    [450, 348],
    [348, 347],
    [347, 450],
    [422, 430],
    [430, 434],
    [434, 422],
    [313, 314],
    [314, 17],
    [17, 313],
    [306, 307],
    [307, 375],
    [375, 306],
    [387, 388],
    [388, 260],
    [260, 387],
    [286, 414],
    [414, 398],
    [398, 286],
    [335, 406],
    [406, 418],
    [418, 335],
    [364, 367],
    [367, 416],
    [416, 364],
    [423, 358],
    [358, 327],
    [327, 423],
    [251, 284],
    [284, 298],
    [298, 251],
    [281, 5],
    [5, 4],
    [4, 281],
    [373, 374],
    [374, 253],
    [253, 373],
    [307, 320],
    [320, 321],
    [321, 307],
    [425, 427],
    [427, 411],
    [411, 425],
    [421, 313],
    [313, 18],
    [18, 421],
    [321, 405],
    [405, 406],
    [406, 321],
    [320, 404],
    [404, 405],
    [405, 320],
    [315, 16],
    [16, 17],
    [17, 315],
    [426, 425],
    [425, 266],
    [266, 426],
    [377, 400],
    [400, 369],
    [369, 377],
    [322, 391],
    [391, 269],
    [269, 322],
    [417, 465],
    [465, 464],
    [464, 417],
    [386, 257],
    [257, 258],
    [258, 386],
    [466, 260],
    [260, 388],
    [388, 466],
    [456, 399],
    [399, 419],
    [419, 456],
    [284, 332],
    [332, 333],
    [333, 284],
    [417, 285],
    [285, 8],
    [8, 417],
    [346, 340],
    [340, 261],
    [261, 346],
    [413, 441],
    [441, 285],
    [285, 413],
    [327, 460],
    [460, 328],
    [328, 327],
    [355, 371],
    [371, 329],
    [329, 355],
    [392, 439],
    [439, 438],
    [438, 392],
    [382, 341],
    [341, 256],
    [256, 382],
    [429, 420],
    [420, 360],
    [360, 429],
    [364, 394],
    [394, 379],
    [379, 364],
    [277, 343],
    [343, 437],
    [437, 277],
    [443, 444],
    [444, 283],
    [283, 443],
    [275, 440],
    [440, 363],
    [363, 275],
    [431, 262],
    [262, 369],
    [369, 431],
    [297, 338],
    [338, 337],
    [337, 297],
    [273, 375],
    [375, 321],
    [321, 273],
    [450, 451],
    [451, 349],
    [349, 450],
    [446, 342],
    [342, 467],
    [467, 446],
    [293, 334],
    [334, 282],
    [282, 293],
    [458, 461],
    [461, 462],
    [462, 458],
    [276, 353],
    [353, 383],
    [383, 276],
    [308, 324],
    [324, 325],
    [325, 308],
    [276, 300],
    [300, 293],
    [293, 276],
    [372, 345],
    [345, 447],
    [447, 372],
    [352, 345],
    [345, 340],
    [340, 352],
    [274, 1],
    [1, 19],
    [19, 274],
    [456, 248],
    [248, 281],
    [281, 456],
    [436, 427],
    [427, 425],
    [425, 436],
    [381, 256],
    [256, 252],
    [252, 381],
    [269, 391],
    [391, 393],
    [393, 269],
    [200, 199],
    [199, 428],
    [428, 200],
    [266, 330],
    [330, 329],
    [329, 266],
    [287, 273],
    [273, 422],
    [422, 287],
    [250, 462],
    [462, 328],
    [328, 250],
    [258, 286],
    [286, 384],
    [384, 258],
    [265, 353],
    [353, 342],
    [342, 265],
    [387, 259],
    [259, 257],
    [257, 387],
    [424, 431],
    [431, 430],
    [430, 424],
    [342, 353],
    [353, 276],
    [276, 342],
    [273, 335],
    [335, 424],
    [424, 273],
    [292, 325],
    [325, 307],
    [307, 292],
    [366, 447],
    [447, 345],
    [345, 366],
    [271, 303],
    [303, 302],
    [302, 271],
    [423, 266],
    [266, 371],
    [371, 423],
    [294, 455],
    [455, 460],
    [460, 294],
    [279, 278],
    [278, 294],
    [294, 279],
    [271, 272],
    [272, 304],
    [304, 271],
    [432, 434],
    [434, 427],
    [427, 432],
    [272, 407],
    [407, 408],
    [408, 272],
    [394, 430],
    [430, 431],
    [431, 394],
    [395, 369],
    [369, 400],
    [400, 395],
    [334, 333],
    [333, 299],
    [299, 334],
    [351, 417],
    [417, 168],
    [168, 351],
    [352, 280],
    [280, 411],
    [411, 352],
    [325, 319],
    [319, 320],
    [320, 325],
    [295, 296],
    [296, 336],
    [336, 295],
    [319, 403],
    [403, 404],
    [404, 319],
    [330, 348],
    [348, 349],
    [349, 330],
    [293, 298],
    [298, 333],
    [333, 293],
    [323, 454],
    [454, 447],
    [447, 323],
    [15, 16],
    [16, 315],
    [315, 15],
    [358, 429],
    [429, 279],
    [279, 358],
    [14, 15],
    [15, 316],
    [316, 14],
    [285, 336],
    [336, 9],
    [9, 285],
    [329, 349],
    [349, 350],
    [350, 329],
    [374, 380],
    [380, 252],
    [252, 374],
    [318, 402],
    [402, 403],
    [403, 318],
    [6, 197],
    [197, 419],
    [419, 6],
    [318, 319],
    [319, 325],
    [325, 318],
    [367, 364],
    [364, 365],
    [365, 367],
    [435, 367],
    [367, 397],
    [397, 435],
    [344, 438],
    [438, 439],
    [439, 344],
    [272, 271],
    [271, 311],
    [311, 272],
    [195, 5],
    [5, 281],
    [281, 195],
    [273, 287],
    [287, 291],
    [291, 273],
    [396, 428],
    [428, 199],
    [199, 396],
    [311, 271],
    [271, 268],
    [268, 311],
    [283, 444],
    [444, 445],
    [445, 283],
    [373, 254],
    [254, 339],
    [339, 373],
    [282, 334],
    [334, 296],
    [296, 282],
    [449, 347],
    [347, 346],
    [346, 449],
    [264, 447],
    [447, 454],
    [454, 264],
    [336, 296],
    [296, 299],
    [299, 336],
    [338, 10],
    [10, 151],
    [151, 338],
    [278, 439],
    [439, 455],
    [455, 278],
    [292, 407],
    [407, 415],
    [415, 292],
    [358, 371],
    [371, 355],
    [355, 358],
    [340, 345],
    [345, 372],
    [372, 340],
    [346, 347],
    [347, 280],
    [280, 346],
    [442, 443],
    [443, 282],
    [282, 442],
    [19, 94],
    [94, 370],
    [370, 19],
    [441, 442],
    [442, 295],
    [295, 441],
    [248, 419],
    [419, 197],
    [197, 248],
    [263, 255],
    [255, 359],
    [359, 263],
    [440, 275],
    [275, 274],
    [274, 440],
    [300, 383],
    [383, 368],
    [368, 300],
    [351, 412],
    [412, 465],
    [465, 351],
    [263, 467],
    [467, 466],
    [466, 263],
    [301, 368],
    [368, 389],
    [389, 301],
    [395, 378],
    [378, 379],
    [379, 395],
    [412, 351],
    [351, 419],
    [419, 412],
    [436, 426],
    [426, 322],
    [322, 436],
    [2, 164],
    [164, 393],
    [393, 2],
    [370, 462],
    [462, 461],
    [461, 370],
    [164, 0],
    [0, 267],
    [267, 164],
    [302, 11],
    [11, 12],
    [12, 302],
    [268, 12],
    [12, 13],
    [13, 268],
    [293, 300],
    [300, 301],
    [301, 293],
    [446, 261],
    [261, 340],
    [340, 446],
    [330, 266],
    [266, 425],
    [425, 330],
    [426, 423],
    [423, 391],
    [391, 426],
    [429, 355],
    [355, 437],
    [437, 429],
    [391, 327],
    [327, 326],
    [326, 391],
    [440, 457],
    [457, 438],
    [438, 440],
    [341, 382],
    [382, 362],
    [362, 341],
    [459, 457],
    [457, 461],
    [461, 459],
    [434, 430],
    [430, 394],
    [394, 434],
    [414, 463],
    [463, 362],
    [362, 414],
    [396, 369],
    [369, 262],
    [262, 396],
    [354, 461],
    [461, 457],
    [457, 354],
    [316, 403],
    [403, 402],
    [402, 316],
    [315, 404],
    [404, 403],
    [403, 315],
    [314, 405],
    [405, 404],
    [404, 314],
    [313, 406],
    [406, 405],
    [405, 313],
    [421, 418],
    [418, 406],
    [406, 421],
    [366, 401],
    [401, 361],
    [361, 366],
    [306, 408],
    [408, 407],
    [407, 306],
    [291, 409],
    [409, 408],
    [408, 291],
    [287, 410],
    [410, 409],
    [409, 287],
    [432, 436],
    [436, 410],
    [410, 432],
    [434, 416],
    [416, 411],
    [411, 434],
    [264, 368],
    [368, 383],
    [383, 264],
    [309, 438],
    [438, 457],
    [457, 309],
    [352, 376],
    [376, 401],
    [401, 352],
    [274, 275],
    [275, 4],
    [4, 274],
    [421, 428],
    [428, 262],
    [262, 421],
    [294, 327],
    [327, 358],
    [358, 294],
    [433, 416],
    [416, 367],
    [367, 433],
    [289, 455],
    [455, 439],
    [439, 289],
    [462, 370],
    [370, 326],
    [326, 462],
    [2, 326],
    [326, 370],
    [370, 2],
    [305, 460],
    [460, 455],
    [455, 305],
    [254, 449],
    [449, 448],
    [448, 254],
    [255, 261],
    [261, 446],
    [446, 255],
    [253, 450],
    [450, 449],
    [449, 253],
    [252, 451],
    [451, 450],
    [450, 252],
    [256, 452],
    [452, 451],
    [451, 256],
    [341, 453],
    [453, 452],
    [452, 341],
    [413, 464],
    [464, 463],
    [463, 413],
    [441, 413],
    [413, 414],
    [414, 441],
    [258, 442],
    [442, 441],
    [441, 258],
    [257, 443],
    [443, 442],
    [442, 257],
    [259, 444],
    [444, 443],
    [443, 259],
    [260, 445],
    [445, 444],
    [444, 260],
    [467, 342],
    [342, 445],
    [445, 467],
    [459, 458],
    [458, 250],
    [250, 459],
    [289, 392],
    [392, 290],
    [290, 289],
    [290, 328],
    [328, 460],
    [460, 290],
    [376, 433],
    [433, 435],
    [435, 376],
    [250, 290],
    [290, 392],
    [392, 250],
    [411, 416],
    [416, 433],
    [433, 411],
    [341, 463],
    [463, 464],
    [464, 341],
    [453, 464],
    [464, 465],
    [465, 453],
    [357, 465],
    [465, 412],
    [412, 357],
    [343, 412],
    [412, 399],
    [399, 343],
    [360, 363],
    [363, 440],
    [440, 360],
    [437, 399],
    [399, 456],
    [456, 437],
    [420, 456],
    [456, 363],
    [363, 420],
    [401, 435],
    [435, 288],
    [288, 401],
    [372, 383],
    [383, 353],
    [353, 372],
    [339, 255],
    [255, 249],
    [249, 339],
    [448, 261],
    [261, 255],
    [255, 448],
    [133, 243],
    [243, 190],
    [190, 133],
    [133, 155],
    [155, 112],
    [112, 133],
    [33, 246],
    [246, 247],
    [247, 33],
    [33, 130],
    [130, 25],
    [25, 33],
    [398, 384],
    [384, 286],
    [286, 398],
    [362, 398],
    [398, 414],
    [414, 362],
    [362, 463],
    [463, 341],
    [341, 362],
    [263, 359],
    [359, 467],
    [467, 263],
    [263, 249],
    [249, 255],
    [255, 263],
    [466, 467],
    [467, 260],
    [260, 466],
    [75, 60],
    [60, 166],
    [166, 75],
    [238, 239],
    [239, 79],
    [79, 238],
    [162, 127],
    [127, 139],
    [139, 162],
    [72, 11],
    [11, 37],
    [37, 72],
    [121, 232],
    [232, 120],
    [120, 121],
    [73, 72],
    [72, 39],
    [39, 73],
    [114, 128],
    [128, 47],
    [47, 114],
    [233, 232],
    [232, 128],
    [128, 233],
    [103, 104],
    [104, 67],
    [67, 103],
    [152, 175],
    [175, 148],
    [148, 152],
    [119, 118],
    [118, 101],
    [101, 119],
    [74, 73],
    [73, 40],
    [40, 74],
    [107, 9],
    [9, 108],
    [108, 107],
    [49, 48],
    [48, 131],
    [131, 49],
    [32, 194],
    [194, 211],
    [211, 32],
    [184, 74],
    [74, 185],
    [185, 184],
    [191, 80],
    [80, 183],
    [183, 191],
    [185, 40],
    [40, 186],
    [186, 185],
    [119, 230],
    [230, 118],
    [118, 119],
    [210, 202],
    [202, 214],
    [214, 210],
    [84, 83],
    [83, 17],
    [17, 84],
    [77, 76],
    [76, 146],
    [146, 77],
    [161, 160],
    [160, 30],
    [30, 161],
    [190, 56],
    [56, 173],
    [173, 190],
    [182, 106],
    [106, 194],
    [194, 182],
    [138, 135],
    [135, 192],
    [192, 138],
    [129, 203],
    [203, 98],
    [98, 129],
    [54, 21],
    [21, 68],
    [68, 54],
    [5, 51],
    [51, 4],
    [4, 5],
    [145, 144],
    [144, 23],
    [23, 145],
    [90, 77],
    [77, 91],
    [91, 90],
    [207, 205],
    [205, 187],
    [187, 207],
    [83, 201],
    [201, 18],
    [18, 83],
    [181, 91],
    [91, 182],
    [182, 181],
    [180, 90],
    [90, 181],
    [181, 180],
    [16, 85],
    [85, 17],
    [17, 16],
    [205, 206],
    [206, 36],
    [36, 205],
    [176, 148],
    [148, 140],
    [140, 176],
    [165, 92],
    [92, 39],
    [39, 165],
    [245, 193],
    [193, 244],
    [244, 245],
    [27, 159],
    [159, 28],
    [28, 27],
    [30, 247],
    [247, 161],
    [161, 30],
    [174, 236],
    [236, 196],
    [196, 174],
    [103, 54],
    [54, 104],
    [104, 103],
    [55, 193],
    [193, 8],
    [8, 55],
    [111, 117],
    [117, 31],
    [31, 111],
    [221, 189],
    [189, 55],
    [55, 221],
    [240, 98],
    [98, 99],
    [99, 240],
    [142, 126],
    [126, 100],
    [100, 142],
    [219, 166],
    [166, 218],
    [218, 219],
    [112, 155],
    [155, 26],
    [26, 112],
    [198, 209],
    [209, 131],
    [131, 198],
    [169, 135],
    [135, 150],
    [150, 169],
    [114, 47],
    [47, 217],
    [217, 114],
    [224, 223],
    [223, 53],
    [53, 224],
    [220, 45],
    [45, 134],
    [134, 220],
    [32, 211],
    [211, 140],
    [140, 32],
    [109, 67],
    [67, 108],
    [108, 109],
    [146, 43],
    [43, 91],
    [91, 146],
    [231, 230],
    [230, 120],
    [120, 231],
    [113, 226],
    [226, 247],
    [247, 113],
    [105, 63],
    [63, 52],
    [52, 105],
    [241, 238],
    [238, 242],
    [242, 241],
    [124, 46],
    [46, 156],
    [156, 124],
    [95, 78],
    [78, 96],
    [96, 95],
    [70, 46],
    [46, 63],
    [63, 70],
    [116, 143],
    [143, 227],
    [227, 116],
    [116, 123],
    [123, 111],
    [111, 116],
    [1, 44],
    [44, 19],
    [19, 1],
    [3, 236],
    [236, 51],
    [51, 3],
    [207, 216],
    [216, 205],
    [205, 207],
    [26, 154],
    [154, 22],
    [22, 26],
    [165, 39],
    [39, 167],
    [167, 165],
    [199, 200],
    [200, 208],
    [208, 199],
    [101, 36],
    [36, 100],
    [100, 101],
    [43, 57],
    [57, 202],
    [202, 43],
    [242, 20],
    [20, 99],
    [99, 242],
    [56, 28],
    [28, 157],
    [157, 56],
    [124, 35],
    [35, 113],
    [113, 124],
    [29, 160],
    [160, 27],
    [27, 29],
    [211, 204],
    [204, 210],
    [210, 211],
    [124, 113],
    [113, 46],
    [46, 124],
    [106, 43],
    [43, 204],
    [204, 106],
    [96, 62],
    [62, 77],
    [77, 96],
    [227, 137],
    [137, 116],
    [116, 227],
    [73, 41],
    [41, 72],
    [72, 73],
    [36, 203],
    [203, 142],
    [142, 36],
    [235, 64],
    [64, 240],
    [240, 235],
    [48, 49],
    [49, 64],
    [64, 48],
    [42, 41],
    [41, 74],
    [74, 42],
    [214, 212],
    [212, 207],
    [207, 214],
    [183, 42],
    [42, 184],
    [184, 183],
    [210, 169],
    [169, 211],
    [211, 210],
    [140, 170],
    [170, 176],
    [176, 140],
    [104, 105],
    [105, 69],
    [69, 104],
    [193, 122],
    [122, 168],
    [168, 193],
    [50, 123],
    [123, 187],
    [187, 50],
    [89, 96],
    [96, 90],
    [90, 89],
    [66, 65],
    [65, 107],
    [107, 66],
    [179, 89],
    [89, 180],
    [180, 179],
    [119, 101],
    [101, 120],
    [120, 119],
    [68, 63],
    [63, 104],
    [104, 68],
    [234, 93],
    [93, 227],
    [227, 234],
    [16, 15],
    [15, 85],
    [85, 16],
    [209, 129],
    [129, 49],
    [49, 209],
    [15, 14],
    [14, 86],
    [86, 15],
    [107, 55],
    [55, 9],
    [9, 107],
    [120, 100],
    [100, 121],
    [121, 120],
    [153, 145],
    [145, 22],
    [22, 153],
    [178, 88],
    [88, 179],
    [179, 178],
    [197, 6],
    [6, 196],
    [196, 197],
    [89, 88],
    [88, 96],
    [96, 89],
    [135, 138],
    [138, 136],
    [136, 135],
    [138, 215],
    [215, 172],
    [172, 138],
    [218, 115],
    [115, 219],
    [219, 218],
    [41, 42],
    [42, 81],
    [81, 41],
    [5, 195],
    [195, 51],
    [51, 5],
    [57, 43],
    [43, 61],
    [61, 57],
    [208, 171],
    [171, 199],
    [199, 208],
    [41, 81],
    [81, 38],
    [38, 41],
    [224, 53],
    [53, 225],
    [225, 224],
    [24, 144],
    [144, 110],
    [110, 24],
    [105, 52],
    [52, 66],
    [66, 105],
    [118, 229],
    [229, 117],
    [117, 118],
    [227, 34],
    [34, 234],
    [234, 227],
    [66, 107],
    [107, 69],
    [69, 66],
    [10, 109],
    [109, 151],
    [151, 10],
    [219, 48],
    [48, 235],
    [235, 219],
    [183, 62],
    [62, 191],
    [191, 183],
    [142, 129],
    [129, 126],
    [126, 142],
    [116, 111],
    [111, 143],
    [143, 116],
    [118, 117],
    [117, 50],
    [50, 118],
    [223, 222],
    [222, 52],
    [52, 223],
    [94, 19],
    [19, 141],
    [141, 94],
    [222, 221],
    [221, 65],
    [65, 222],
    [196, 3],
    [3, 197],
    [197, 196],
    [45, 220],
    [220, 44],
    [44, 45],
    [156, 70],
    [70, 139],
    [139, 156],
    [188, 122],
    [122, 245],
    [245, 188],
    [139, 71],
    [71, 162],
    [162, 139],
    [149, 170],
    [170, 150],
    [150, 149],
    [122, 188],
    [188, 196],
    [196, 122],
    [206, 216],
    [216, 92],
    [92, 206],
    [164, 2],
    [2, 167],
    [167, 164],
    [242, 141],
    [141, 241],
    [241, 242],
    [0, 164],
    [164, 37],
    [37, 0],
    [11, 72],
    [72, 12],
    [12, 11],
    [12, 38],
    [38, 13],
    [13, 12],
    [70, 63],
    [63, 71],
    [71, 70],
    [31, 226],
    [226, 111],
    [111, 31],
    [36, 101],
    [101, 205],
    [205, 36],
    [203, 206],
    [206, 165],
    [165, 203],
    [126, 209],
    [209, 217],
    [217, 126],
    [98, 165],
    [165, 97],
    [97, 98],
    [237, 220],
    [220, 218],
    [218, 237],
    [237, 239],
    [239, 241],
    [241, 237],
    [210, 214],
    [214, 169],
    [169, 210],
    [140, 171],
    [171, 32],
    [32, 140],
    [241, 125],
    [125, 237],
    [237, 241],
    [179, 86],
    [86, 178],
    [178, 179],
    [180, 85],
    [85, 179],
    [179, 180],
    [181, 84],
    [84, 180],
    [180, 181],
    [182, 83],
    [83, 181],
    [181, 182],
    [194, 201],
    [201, 182],
    [182, 194],
    [177, 137],
    [137, 132],
    [132, 177],
    [184, 76],
    [76, 183],
    [183, 184],
    [185, 61],
    [61, 184],
    [184, 185],
    [186, 57],
    [57, 185],
    [185, 186],
    [216, 212],
    [212, 186],
    [186, 216],
    [192, 214],
    [214, 187],
    [187, 192],
    [139, 34],
    [34, 156],
    [156, 139],
    [218, 79],
    [79, 237],
    [237, 218],
    [147, 123],
    [123, 177],
    [177, 147],
    [45, 44],
    [44, 4],
    [4, 45],
    [208, 201],
    [201, 32],
    [32, 208],
    [98, 64],
    [64, 129],
    [129, 98],
    [192, 213],
    [213, 138],
    [138, 192],
    [235, 59],
    [59, 219],
    [219, 235],
    [141, 242],
    [242, 97],
    [97, 141],
    [97, 2],
    [2, 141],
    [141, 97],
    [240, 75],
    [75, 235],
    [235, 240],
    [229, 24],
    [24, 228],
    [228, 229],
    [31, 25],
    [25, 226],
    [226, 31],
    [230, 23],
    [23, 229],
    [229, 230],
    [231, 22],
    [22, 230],
    [230, 231],
    [232, 26],
    [26, 231],
    [231, 232],
    [233, 112],
    [112, 232],
    [232, 233],
    [244, 189],
    [189, 243],
    [243, 244],
    [189, 221],
    [221, 190],
    [190, 189],
    [222, 28],
    [28, 221],
    [221, 222],
    [223, 27],
    [27, 222],
    [222, 223],
    [224, 29],
    [29, 223],
    [223, 224],
    [225, 30],
    [30, 224],
    [224, 225],
    [113, 247],
    [247, 225],
    [225, 113],
    [99, 60],
    [60, 240],
    [240, 99],
    [213, 147],
    [147, 215],
    [215, 213],
    [60, 20],
    [20, 166],
    [166, 60],
    [192, 187],
    [187, 213],
    [213, 192],
    [243, 112],
    [112, 244],
    [244, 243],
    [244, 233],
    [233, 245],
    [245, 244],
    [245, 128],
    [128, 188],
    [188, 245],
    [188, 114],
    [114, 174],
    [174, 188],
    [134, 131],
    [131, 220],
    [220, 134],
    [174, 217],
    [217, 236],
    [236, 174],
    [236, 198],
    [198, 134],
    [134, 236],
    [215, 177],
    [177, 58],
    [58, 215],
    [156, 143],
    [143, 124],
    [124, 156],
    [25, 110],
    [110, 7],
    [7, 25],
    [31, 228],
    [228, 25],
    [25, 31],
    [264, 356],
    [356, 368],
    [368, 264],
    [0, 11],
    [11, 267],
    [267, 0],
    [451, 452],
    [452, 349],
    [349, 451],
    [267, 302],
    [302, 269],
    [269, 267],
    [350, 357],
    [357, 277],
    [277, 350],
    [350, 452],
    [452, 357],
    [357, 350],
    [299, 333],
    [333, 297],
    [297, 299],
    [396, 175],
    [175, 377],
    [377, 396],
    [280, 347],
    [347, 330],
    [330, 280],
    [269, 303],
    [303, 270],
    [270, 269],
    [151, 9],
    [9, 337],
    [337, 151],
    [344, 278],
    [278, 360],
    [360, 344],
    [424, 418],
    [418, 431],
    [431, 424],
    [270, 304],
    [304, 409],
    [409, 270],
    [272, 310],
    [310, 407],
    [407, 272],
    [322, 270],
    [270, 410],
    [410, 322],
    [449, 450],
    [450, 347],
    [347, 449],
    [432, 422],
    [422, 434],
    [434, 432],
    [18, 313],
    [313, 17],
    [17, 18],
    [291, 306],
    [306, 375],
    [375, 291],
    [259, 387],
    [387, 260],
    [260, 259],
    [424, 335],
    [335, 418],
    [418, 424],
    [434, 364],
    [364, 416],
    [416, 434],
    [391, 423],
    [423, 327],
    [327, 391],
    [301, 251],
    [251, 298],
    [298, 301],
    [275, 281],
    [281, 4],
    [4, 275],
    [254, 373],
    [373, 253],
    [253, 254],
    [375, 307],
    [307, 321],
    [321, 375],
    [280, 425],
    [425, 411],
    [411, 280],
    [200, 421],
    [421, 18],
    [18, 200],
    [335, 321],
    [321, 406],
    [406, 335],
    [321, 320],
    [320, 405],
    [405, 321],
    [314, 315],
    [315, 17],
    [17, 314],
    [423, 426],
    [426, 266],
    [266, 423],
    [396, 377],
    [377, 369],
    [369, 396],
    [270, 322],
    [322, 269],
    [269, 270],
    [413, 417],
    [417, 464],
    [464, 413],
    [385, 386],
    [386, 258],
    [258, 385],
    [248, 456],
    [456, 419],
    [419, 248],
    [298, 284],
    [284, 333],
    [333, 298],
    [168, 417],
    [417, 8],
    [8, 168],
    [448, 346],
    [346, 261],
    [261, 448],
    [417, 413],
    [413, 285],
    [285, 417],
    [326, 327],
    [327, 328],
    [328, 326],
    [277, 355],
    [355, 329],
    [329, 277],
    [309, 392],
    [392, 438],
    [438, 309],
    [381, 382],
    [382, 256],
    [256, 381],
    [279, 429],
    [429, 360],
    [360, 279],
    [365, 364],
    [364, 379],
    [379, 365],
    [355, 277],
    [277, 437],
    [437, 355],
    [282, 443],
    [443, 283],
    [283, 282],
    [281, 275],
    [275, 363],
    [363, 281],
    [395, 431],
    [431, 369],
    [369, 395],
    [299, 297],
    [297, 337],
    [337, 299],
    [335, 273],
    [273, 321],
    [321, 335],
    [348, 450],
    [450, 349],
    [349, 348],
    [359, 446],
    [446, 467],
    [467, 359],
    [283, 293],
    [293, 282],
    [282, 283],
    [250, 458],
    [458, 462],
    [462, 250],
    [300, 276],
    [276, 383],
    [383, 300],
    [292, 308],
    [308, 325],
    [325, 292],
    [283, 276],
    [276, 293],
    [293, 283],
    [264, 372],
    [372, 447],
    [447, 264],
    [346, 352],
    [352, 340],
    [340, 346],
    [354, 274],
    [274, 19],
    [19, 354],
    [363, 456],
    [456, 281],
    [281, 363],
    [426, 436],
    [436, 425],
    [425, 426],
    [380, 381],
    [381, 252],
    [252, 380],
    [267, 269],
    [269, 393],
    [393, 267],
    [421, 200],
    [200, 428],
    [428, 421],
    [371, 266],
    [266, 329],
    [329, 371],
    [432, 287],
    [287, 422],
    [422, 432],
    [290, 250],
    [250, 328],
    [328, 290],
    [385, 258],
    [258, 384],
    [384, 385],
    [446, 265],
    [265, 342],
    [342, 446],
    [386, 387],
    [387, 257],
    [257, 386],
    [422, 424],
    [424, 430],
    [430, 422],
    [445, 342],
    [342, 276],
    [276, 445],
    [422, 273],
    [273, 424],
    [424, 422],
    [306, 292],
    [292, 307],
    [307, 306],
    [352, 366],
    [366, 345],
    [345, 352],
    [268, 271],
    [271, 302],
    [302, 268],
    [358, 423],
    [423, 371],
    [371, 358],
    [327, 294],
    [294, 460],
    [460, 327],
    [331, 279],
    [279, 294],
    [294, 331],
    [303, 271],
    [271, 304],
    [304, 303],
    [436, 432],
    [432, 427],
    [427, 436],
    [304, 272],
    [272, 408],
    [408, 304],
    [395, 394],
    [394, 431],
    [431, 395],
    [378, 395],
    [395, 400],
    [400, 378],
    [296, 334],
    [334, 299],
    [299, 296],
    [6, 351],
    [351, 168],
    [168, 6],
    [376, 352],
    [352, 411],
    [411, 376],
    [307, 325],
    [325, 320],
    [320, 307],
    [285, 295],
    [295, 336],
    [336, 285],
    [320, 319],
    [319, 404],
    [404, 320],
    [329, 330],
    [330, 349],
    [349, 329],
    [334, 293],
    [293, 333],
    [333, 334],
    [366, 323],
    [323, 447],
    [447, 366],
    [316, 15],
    [15, 315],
    [315, 316],
    [331, 358],
    [358, 279],
    [279, 331],
    [317, 14],
    [14, 316],
    [316, 317],
    [8, 285],
    [285, 9],
    [9, 8],
    [277, 329],
    [329, 350],
    [350, 277],
    [253, 374],
    [374, 252],
    [252, 253],
    [319, 318],
    [318, 403],
    [403, 319],
    [351, 6],
    [6, 419],
    [419, 351],
    [324, 318],
    [318, 325],
    [325, 324],
    [397, 367],
    [367, 365],
    [365, 397],
    [288, 435],
    [435, 397],
    [397, 288],
    [278, 344],
    [344, 439],
    [439, 278],
    [310, 272],
    [272, 311],
    [311, 310],
    [248, 195],
    [195, 281],
    [281, 248],
    [375, 273],
    [273, 291],
    [291, 375],
    [175, 396],
    [396, 199],
    [199, 175],
    [312, 311],
    [311, 268],
    [268, 312],
    [276, 283],
    [283, 445],
    [445, 276],
    [390, 373],
    [373, 339],
    [339, 390],
    [295, 282],
    [282, 296],
    [296, 295],
    [448, 449],
    [449, 346],
    [346, 448],
    [356, 264],
    [264, 454],
    [454, 356],
    [337, 336],
    [336, 299],
    [299, 337],
    [337, 338],
    [338, 151],
    [151, 337],
    [294, 278],
    [278, 455],
    [455, 294],
    [308, 292],
    [292, 415],
    [415, 308],
    [429, 358],
    [358, 355],
    [355, 429],
    [265, 340],
    [340, 372],
    [372, 265],
    [352, 346],
    [346, 280],
    [280, 352],
    [295, 442],
    [442, 282],
    [282, 295],
    [354, 19],
    [19, 370],
    [370, 354],
    [285, 441],
    [441, 295],
    [295, 285],
    [195, 248],
    [248, 197],
    [197, 195],
    [457, 440],
    [440, 274],
    [274, 457],
    [301, 300],
    [300, 368],
    [368, 301],
    [417, 351],
    [351, 465],
    [465, 417],
    [251, 301],
    [301, 389],
    [389, 251],
    [394, 395],
    [395, 379],
    [379, 394],
    [399, 412],
    [412, 419],
    [419, 399],
    [410, 436],
    [436, 322],
    [322, 410],
    [326, 2],
    [2, 393],
    [393, 326],
    [354, 370],
    [370, 461],
    [461, 354],
    [393, 164],
    [164, 267],
    [267, 393],
    [268, 302],
    [302, 12],
    [12, 268],
    [312, 268],
    [268, 13],
    [13, 312],
    [298, 293],
    [293, 301],
    [301, 298],
    [265, 446],
    [446, 340],
    [340, 265],
    [280, 330],
    [330, 425],
    [425, 280],
    [322, 426],
    [426, 391],
    [391, 322],
    [420, 429],
    [429, 437],
    [437, 420],
    [393, 391],
    [391, 326],
    [326, 393],
    [344, 440],
    [440, 438],
    [438, 344],
    [458, 459],
    [459, 461],
    [461, 458],
    [364, 434],
    [434, 394],
    [394, 364],
    [428, 396],
    [396, 262],
    [262, 428],
    [274, 354],
    [354, 457],
    [457, 274],
    [317, 316],
    [316, 402],
    [402, 317],
    [316, 315],
    [315, 403],
    [403, 316],
    [315, 314],
    [314, 404],
    [404, 315],
    [314, 313],
    [313, 405],
    [405, 314],
    [313, 421],
    [421, 406],
    [406, 313],
    [323, 366],
    [366, 361],
    [361, 323],
    [292, 306],
    [306, 407],
    [407, 292],
    [306, 291],
    [291, 408],
    [408, 306],
    [291, 287],
    [287, 409],
    [409, 291],
    [287, 432],
    [432, 410],
    [410, 287],
    [427, 434],
    [434, 411],
    [411, 427],
    [372, 264],
    [264, 383],
    [383, 372],
    [459, 309],
    [309, 457],
    [457, 459],
    [366, 352],
    [352, 401],
    [401, 366],
    [1, 274],
    [274, 4],
    [4, 1],
    [418, 421],
    [421, 262],
    [262, 418],
    [331, 294],
    [294, 358],
    [358, 331],
    [435, 433],
    [433, 367],
    [367, 435],
    [392, 289],
    [289, 439],
    [439, 392],
    [328, 462],
    [462, 326],
    [326, 328],
    [94, 2],
    [2, 370],
    [370, 94],
    [289, 305],
    [305, 455],
    [455, 289],
    [339, 254],
    [254, 448],
    [448, 339],
    [359, 255],
    [255, 446],
    [446, 359],
    [254, 253],
    [253, 449],
    [449, 254],
    [253, 252],
    [252, 450],
    [450, 253],
    [252, 256],
    [256, 451],
    [451, 252],
    [256, 341],
    [341, 452],
    [452, 256],
    [414, 413],
    [413, 463],
    [463, 414],
    [286, 441],
    [441, 414],
    [414, 286],
    [286, 258],
    [258, 441],
    [441, 286],
    [258, 257],
    [257, 442],
    [442, 258],
    [257, 259],
    [259, 443],
    [443, 257],
    [259, 260],
    [260, 444],
    [444, 259],
    [260, 467],
    [467, 445],
    [445, 260],
    [309, 459],
    [459, 250],
    [250, 309],
    [305, 289],
    [289, 290],
    [290, 305],
    [305, 290],
    [290, 460],
    [460, 305],
    [401, 376],
    [376, 435],
    [435, 401],
    [309, 250],
    [250, 392],
    [392, 309],
    [376, 411],
    [411, 433],
    [433, 376],
    [453, 341],
    [341, 464],
    [464, 453],
    [357, 453],
    [453, 465],
    [465, 357],
    [343, 357],
    [357, 412],
    [412, 343],
    [437, 343],
    [343, 399],
    [399, 437],
    [344, 360],
    [360, 440],
    [440, 344],
    [420, 437],
    [437, 456],
    [456, 420],
    [360, 420],
    [420, 363],
    [363, 360],
    [361, 401],
    [401, 288],
    [288, 361],
    [265, 372],
    [372, 353],
    [353, 265],
    [390, 339],
    [339, 249],
    [249, 390],
    [339, 448],
    [448, 255],
    [255, 339],
  );
function tf(e) {
  e.l = {
    faceLandmarks: [],
    faceBlendshapes: [],
    facialTransformationMatrixes: [],
  };
}
var Z = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect`, !1),
      (this.l = {
        faceLandmarks: [],
        faceBlendshapes: [],
        facialTransformationMatrixes: [],
      }),
      (this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes =
        !1),
      j((e = this.h = new Xc()), 0, 1, (t = new Vc())),
      (this.B = new Yc()),
      j(this.h, 0, 3, this.B),
      (this.u = new Gc()),
      j(this.h, 0, 2, this.u),
      Gi(this.u, 4, 1),
      M(this.u, 2, 0.5),
      M(this.B, 2, 0.5),
      M(this.h, 4, 0.5));
  }
  C() {
    return `FaceLandmarker`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      `numFaces` in e && Gi(this.u, 4, e.numFaces ?? 1),
      `minFaceDetectionConfidence` in e &&
        M(this.u, 2, e.minFaceDetectionConfidence ?? 0.5),
      `minTrackingConfidence` in e &&
        M(this.h, 4, e.minTrackingConfidence ?? 0.5),
      `minFacePresenceConfidence` in e &&
        M(this.B, 2, e.minFacePresenceConfidence ?? 0.5),
      `outputFaceBlendshapes` in e &&
        (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes),
      `outputFacialTransformationMatrixes` in e &&
        (this.outputFacialTransformationMatrixes =
          !!e.outputFacialTransformationMatrixes),
      this.j(e)
    );
  }
  G(e, t) {
    return (tf(this), Bd(this, e, t), this.l);
  }
  H(e, t, n) {
    return (tf(this), Vd(this, e, n, t), this.l);
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`), cc(e, `norm_rect`), U(e, `face_landmarks`));
    var t = new $s();
    ho(t, Qc, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph`),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `NORM_LANDMARKS:face_landmarks`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoVectorListener(`face_landmarks`, (e, t) => {
        for (let t of e) ((e = Cc(t)), this.l.faceLandmarks.push(Kl(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`face_landmarks`, (e) => {
        G(this, e);
      }),
      this.outputFaceBlendshapes &&
        (U(e, `blendshapes`),
        H(n, `BLENDSHAPES:blendshapes`),
        this.g.attachProtoVectorListener(`blendshapes`, (e, t) => {
          if (this.outputFaceBlendshapes)
            for (let t of e)
              ((e = hc(t)), this.l.faceBlendshapes.push(Ul(e.g() ?? [])));
          G(this, t);
        }),
        this.g.attachEmptyPacketListener(`blendshapes`, (e) => {
          G(this, e);
        })),
      this.outputFacialTransformationMatrixes &&
        (U(e, `face_geometry`),
        H(n, `FACE_GEOMETRY:face_geometry`),
        this.g.attachProtoVectorListener(`face_geometry`, (e, t) => {
          if (this.outputFacialTransformationMatrixes)
            for (let t of e)
              (e = A((e = Jc(t)), wc, 2)) &&
                this.l.facialTransformationMatrixes.push({
                  rows: Vi(e, 1) ?? 0 ?? 0,
                  columns: Vi(e, 2) ?? 0 ?? 0,
                  data: yi(e, 3, sr, vi()).slice() ?? [],
                });
          G(this, t);
        }),
        this.g.attachEmptyPacketListener(`face_geometry`, (e) => {
          G(this, e);
        })),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((Z.prototype.detectForVideo = Z.prototype.H),
  (Z.prototype.detect = Z.prototype.G),
  (Z.prototype.setOptions = Z.prototype.v),
  (Z.createFromModelPath = function (e, t) {
    return X(Z, e, { baseOptions: { modelAssetPath: t } });
  }),
  (Z.createFromModelBuffer = function (e, t) {
    return X(Z, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Z.createFromOptions = function (e, t) {
    return X(Z, e, t);
  }),
  (Z.FACE_LANDMARKS_LIPS = Gd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS`,
    Z.FACE_LANDMARKS_LIPS,
  ),
  (Z.FACE_LANDMARKS_LEFT_EYE = Kd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE`,
    Z.FACE_LANDMARKS_LEFT_EYE,
  ),
  (Z.FACE_LANDMARKS_LEFT_EYEBROW = qd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW`,
    Z.FACE_LANDMARKS_LEFT_EYEBROW,
  ),
  (Z.FACE_LANDMARKS_LEFT_IRIS = Jd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS`,
    Z.FACE_LANDMARKS_LEFT_IRIS,
  ),
  (Z.FACE_LANDMARKS_RIGHT_EYE = Yd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE`,
    Z.FACE_LANDMARKS_RIGHT_EYE,
  ),
  (Z.FACE_LANDMARKS_RIGHT_EYEBROW = Xd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW`,
    Z.FACE_LANDMARKS_RIGHT_EYEBROW,
  ),
  (Z.FACE_LANDMARKS_RIGHT_IRIS = Zd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS`,
    Z.FACE_LANDMARKS_RIGHT_IRIS,
  ),
  (Z.FACE_LANDMARKS_FACE_OVAL = Qd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL`,
    Z.FACE_LANDMARKS_FACE_OVAL,
  ),
  (Z.FACE_LANDMARKS_CONTOURS = $d),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS`,
    Z.FACE_LANDMARKS_CONTOURS,
  ),
  (Z.FACE_LANDMARKS_TESSELATION = ef),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION`,
    Z.FACE_LANDMARKS_TESSELATION,
  ));
var nf = Fd(
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [5, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [9, 13],
  [13, 14],
  [14, 15],
  [15, 16],
  [13, 17],
  [0, 17],
  [17, 18],
  [18, 19],
  [19, 20],
);
function rf(e) {
  ((e.gestures = []),
    (e.landmarks = []),
    (e.worldLandmarks = []),
    (e.handedness = []));
}
function af(e) {
  return e.gestures.length === 0
    ? {
        gestures: [],
        landmarks: [],
        worldLandmarks: [],
        handedness: [],
        handednesses: [],
      }
    : {
        gestures: e.gestures,
        landmarks: e.landmarks,
        worldLandmarks: e.worldLandmarks,
        handedness: e.handedness,
        handednesses: e.handedness,
      };
}
function of(e, t = !0) {
  var n = [];
  for (let i of e) {
    var r = hc(i);
    e = [];
    for (let n of r.g())
      ((r = t && Vi(n, 1) != null ? (Vi(n, 1) ?? 0) : -1),
        e.push({
          score: Hi(n, 2) ?? 0,
          index: r,
          categoryName: Or(mi(n, 3)) ?? `` ?? ``,
          displayName: Or(mi(n, 4)) ?? `` ?? ``,
        }));
    n.push(e);
  }
  return n;
}
var sf = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect`, !1),
      (this.gestures = []),
      (this.landmarks = []),
      (this.worldLandmarks = []),
      (this.handedness = []),
      j((e = this.l = new al()), 0, 1, (t = new Vc())),
      (this.u = new il()),
      j(this.l, 0, 2, this.u),
      (this.F = new rl()),
      j(this.u, 0, 3, this.F),
      (this.B = new nl()),
      j(this.u, 0, 2, this.B),
      (this.h = new tl()),
      j(this.l, 0, 3, this.h),
      M(this.B, 2, 0.5),
      M(this.u, 4, 0.5),
      M(this.F, 2, 0.5));
  }
  C() {
    return `GestureRecognizer`;
  }
  get baseOptions() {
    return A(this.l, Vc, 1);
  }
  set baseOptions(e) {
    j(this.l, 0, 1, e);
  }
  v(e) {
    if (
      (Gi(this.B, 3, e.numHands ?? 1),
      `minHandDetectionConfidence` in e &&
        M(this.B, 2, e.minHandDetectionConfidence ?? 0.5),
      `minTrackingConfidence` in e &&
        M(this.u, 4, e.minTrackingConfidence ?? 0.5),
      `minHandPresenceConfidence` in e &&
        M(this.F, 2, e.minHandPresenceConfidence ?? 0.5),
      e.cannedGesturesClassifierOptions)
    ) {
      var t = new $c(),
        n = t,
        r = Vl(e.cannedGesturesClassifierOptions, A(this.h, $c, 3)?.j());
      (j(n, 0, 2, r), j(this.h, 0, 3, t));
    } else
      e.cannedGesturesClassifierOptions === void 0 && A(this.h, $c, 3)?.g();
    return (
      e.customGesturesClassifierOptions
        ? (j(
            (n = t = new $c()),
            0,
            2,
            (r = Vl(e.customGesturesClassifierOptions, A(this.h, $c, 4)?.j())),
          ),
          j(this.h, 0, 4, t))
        : e.customGesturesClassifierOptions === void 0 && A(this.h, $c, 4)?.g(),
      this.j(e)
    );
  }
  Xa(e, t) {
    return (rf(this), Bd(this, e, t), af(this));
  }
  Ya(e, t, n) {
    return (rf(this), Vd(this, e, n, t), af(this));
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`),
      cc(e, `norm_rect`),
      U(e, `hand_gestures`),
      U(e, `hand_landmarks`),
      U(e, `world_hand_landmarks`),
      U(e, `handedness`));
    var t = new $s();
    ho(t, ul, this.l);
    var n = new rc();
    (Yi(
      n,
      2,
      `mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph`,
    ),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `HAND_GESTURES:hand_gestures`),
      H(n, `LANDMARKS:hand_landmarks`),
      H(n, `WORLD_LANDMARKS:world_hand_landmarks`),
      H(n, `HANDEDNESS:handedness`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoVectorListener(`hand_landmarks`, (e, t) => {
        for (let t of e) {
          e = Cc(t);
          let n = [];
          for (let t of Fi(e, Sc, 1))
            n.push({
              x: Hi(t, 1) ?? 0,
              y: Hi(t, 2) ?? 0,
              z: Hi(t, 3) ?? 0,
              visibility: Hi(t, 4) ?? 0,
            });
          this.landmarks.push(n);
        }
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`hand_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoVectorListener(`world_hand_landmarks`, (e, t) => {
        for (let t of e) {
          e = xc(t);
          let n = [];
          for (let t of Fi(e, bc, 1))
            n.push({
              x: Hi(t, 1) ?? 0,
              y: Hi(t, 2) ?? 0,
              z: Hi(t, 3) ?? 0,
              visibility: Hi(t, 4) ?? 0,
            });
          this.worldLandmarks.push(n);
        }
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`world_hand_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoVectorListener(`hand_gestures`, (e, t) => {
        (this.gestures.push(...of(e, !1)), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`hand_gestures`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoVectorListener(`handedness`, (e, t) => {
        (this.handedness.push(...of(e)), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`handedness`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
function cf(e) {
  return {
    landmarks: e.landmarks,
    worldLandmarks: e.worldLandmarks,
    handednesses: e.handedness,
    handedness: e.handedness,
  };
}
((sf.prototype.recognizeForVideo = sf.prototype.Ya),
  (sf.prototype.recognize = sf.prototype.Xa),
  (sf.prototype.setOptions = sf.prototype.v),
  (sf.createFromModelPath = function (e, t) {
    return X(sf, e, { baseOptions: { modelAssetPath: t } });
  }),
  (sf.createFromModelBuffer = function (e, t) {
    return X(sf, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (sf.createFromOptions = function (e, t) {
    return X(sf, e, t);
  }),
  (sf.HAND_CONNECTIONS = nf),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS`,
    sf.HAND_CONNECTIONS,
  ));
var lf = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect`, !1),
      (this.landmarks = []),
      (this.worldLandmarks = []),
      (this.handedness = []),
      j((e = this.h = new il()), 0, 1, (t = new Vc())),
      (this.u = new rl()),
      j(this.h, 0, 3, this.u),
      (this.l = new nl()),
      j(this.h, 0, 2, this.l),
      Gi(this.l, 3, 1),
      M(this.l, 2, 0.5),
      M(this.u, 2, 0.5),
      M(this.h, 4, 0.5));
  }
  C() {
    return `HandLandmarker`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      `numHands` in e && Gi(this.l, 3, e.numHands ?? 1),
      `minHandDetectionConfidence` in e &&
        M(this.l, 2, e.minHandDetectionConfidence ?? 0.5),
      `minTrackingConfidence` in e &&
        M(this.h, 4, e.minTrackingConfidence ?? 0.5),
      `minHandPresenceConfidence` in e &&
        M(this.u, 2, e.minHandPresenceConfidence ?? 0.5),
      this.j(e)
    );
  }
  G(e, t) {
    return (
      (this.landmarks = []),
      (this.worldLandmarks = []),
      (this.handedness = []),
      Bd(this, e, t),
      cf(this)
    );
  }
  H(e, t, n) {
    return (
      (this.landmarks = []),
      (this.worldLandmarks = []),
      (this.handedness = []),
      Vd(this, e, n, t),
      cf(this)
    );
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`),
      cc(e, `norm_rect`),
      U(e, `hand_landmarks`),
      U(e, `world_hand_landmarks`),
      U(e, `handedness`));
    var t = new $s();
    ho(t, dl, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph`),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `LANDMARKS:hand_landmarks`),
      H(n, `WORLD_LANDMARKS:world_hand_landmarks`),
      H(n, `HANDEDNESS:handedness`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoVectorListener(`hand_landmarks`, (e, t) => {
        for (let t of e) ((e = Cc(t)), this.landmarks.push(Kl(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`hand_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoVectorListener(`world_hand_landmarks`, (e, t) => {
        for (let t of e) ((e = xc(t)), this.worldLandmarks.push(ql(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`world_hand_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoVectorListener(`handedness`, (e, t) => {
        var n = this.handedness,
          r = n.push,
          i = [];
        for (let t of e) {
          e = hc(t);
          let n = [];
          for (let t of e.g())
            n.push({
              score: Hi(t, 2) ?? 0,
              index: Vi(t, 1) ?? 0 ?? -1,
              categoryName: Or(mi(t, 3)) ?? `` ?? ``,
              displayName: Or(mi(t, 4)) ?? `` ?? ``,
            });
          i.push(n);
        }
        (r.call(n, ...i), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`handedness`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((lf.prototype.detectForVideo = lf.prototype.H),
  (lf.prototype.detect = lf.prototype.G),
  (lf.prototype.setOptions = lf.prototype.v),
  (lf.createFromModelPath = function (e, t) {
    return X(lf, e, { baseOptions: { modelAssetPath: t } });
  }),
  (lf.createFromModelBuffer = function (e, t) {
    return X(lf, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (lf.createFromOptions = function (e, t) {
    return X(lf, e, t);
  }),
  (lf.HAND_CONNECTIONS = nf),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS`,
    lf.HAND_CONNECTIONS,
  ));
var uf = Fd(
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 7],
  [0, 4],
  [4, 5],
  [5, 6],
  [6, 8],
  [9, 10],
  [11, 12],
  [11, 13],
  [13, 15],
  [15, 17],
  [15, 19],
  [15, 21],
  [17, 19],
  [12, 14],
  [14, 16],
  [16, 18],
  [16, 20],
  [16, 22],
  [18, 20],
  [11, 23],
  [12, 24],
  [23, 24],
  [23, 25],
  [24, 26],
  [25, 27],
  [26, 28],
  [27, 29],
  [28, 30],
  [29, 31],
  [30, 32],
  [27, 31],
  [28, 32],
);
function df(e) {
  e.h = {
    faceLandmarks: [],
    faceBlendshapes: [],
    poseLandmarks: [],
    poseWorldLandmarks: [],
    poseSegmentationMasks: [],
    leftHandLandmarks: [],
    leftHandWorldLandmarks: [],
    rightHandLandmarks: [],
    rightHandWorldLandmarks: [],
  };
}
function ff(e) {
  try {
    if (!e.F) return e.h;
    e.F(e.h);
  } finally {
    Ju(e);
  }
}
function pf(e, t) {
  ((e = Cc(e)), t.push(Kl(e)));
}
var Q = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `input_frames_image`, null, !1),
      (this.h = {
        faceLandmarks: [],
        faceBlendshapes: [],
        poseLandmarks: [],
        poseWorldLandmarks: [],
        poseSegmentationMasks: [],
        leftHandLandmarks: [],
        leftHandWorldLandmarks: [],
        rightHandLandmarks: [],
        rightHandWorldLandmarks: [],
      }),
      (this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = !1),
      j((e = this.l = new hl()), 0, 1, (t = new Vc())),
      (this.Y = new rl()),
      j(this.l, 0, 2, this.Y),
      (this.Aa = new fl()),
      j(this.l, 0, 3, this.Aa),
      (this.u = new Gc()),
      j(this.l, 0, 4, this.u),
      (this.O = new Yc()),
      j(this.l, 0, 5, this.O),
      (this.B = new pl()),
      j(this.l, 0, 6, this.B),
      (this.Z = new ml()),
      j(this.l, 0, 7, this.Z),
      M(this.u, 2, 0.5),
      M(this.u, 3, 0.3),
      M(this.O, 2, 0.5),
      M(this.B, 2, 0.5),
      M(this.B, 3, 0.3),
      M(this.Z, 2, 0.5),
      M(this.Y, 2, 0.5));
  }
  C() {
    return `HolisticLandmarker`;
  }
  get baseOptions() {
    return A(this.l, Vc, 1);
  }
  set baseOptions(e) {
    j(this.l, 0, 1, e);
  }
  v(e) {
    return (
      `minFaceDetectionConfidence` in e &&
        M(this.u, 2, e.minFaceDetectionConfidence ?? 0.5),
      `minFaceSuppressionThreshold` in e &&
        M(this.u, 3, e.minFaceSuppressionThreshold ?? 0.3),
      `minFacePresenceConfidence` in e &&
        M(this.O, 2, e.minFacePresenceConfidence ?? 0.5),
      `outputFaceBlendshapes` in e &&
        (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes),
      `minPoseDetectionConfidence` in e &&
        M(this.B, 2, e.minPoseDetectionConfidence ?? 0.5),
      `minPoseSuppressionThreshold` in e &&
        M(this.B, 3, e.minPoseSuppressionThreshold ?? 0.3),
      `minPosePresenceConfidence` in e &&
        M(this.Z, 2, e.minPosePresenceConfidence ?? 0.5),
      `outputPoseSegmentationMasks` in e &&
        (this.outputPoseSegmentationMasks = !!e.outputPoseSegmentationMasks),
      `minHandLandmarksConfidence` in e &&
        M(this.Y, 2, e.minHandLandmarksConfidence ?? 0.5),
      this.j(e)
    );
  }
  G(e, t, n) {
    var r = typeof t == `function` ? {} : t;
    return (
      (this.F = typeof t == `function` ? t : n),
      df(this),
      Bd(this, e, r),
      ff(this)
    );
  }
  H(e, t, n, r) {
    var i = typeof n == `function` ? {} : n;
    return (
      (this.F = typeof n == `function` ? n : r),
      df(this),
      Vd(this, e, i, t),
      ff(this)
    );
  }
  o() {
    var e = new lc();
    (cc(e, `input_frames_image`),
      U(e, `pose_landmarks`),
      U(e, `pose_world_landmarks`),
      U(e, `face_landmarks`),
      U(e, `left_hand_landmarks`),
      U(e, `left_hand_world_landmarks`),
      U(e, `right_hand_landmarks`),
      U(e, `right_hand_world_landmarks`));
    var t = new $s(),
      n = new Is();
    (Yi(
      n,
      1,
      `type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions`,
    ),
      (function (e, t) {
        if (t != null) {
          if (Array.isArray(t)) k(e, 2, Xr(t, 0, Qr));
          else {
            if (!(typeof t == `string` || t instanceof Kt || Vt(t)))
              throw Error(
                `invalid value in Any.value field: ` +
                  t +
                  ` expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array`,
              );
            Ei(e, 2, Sn(t, !1), Ut());
          }
        }
      })(n, this.l.g()));
    var r = new rc();
    (Yi(
      r,
      2,
      `mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph`,
    ),
      Bi(r, 8, Is, n),
      nc(r, `IMAGE:input_frames_image`),
      H(r, `POSE_LANDMARKS:pose_landmarks`),
      H(r, `POSE_WORLD_LANDMARKS:pose_world_landmarks`),
      H(r, `FACE_LANDMARKS:face_landmarks`),
      H(r, `LEFT_HAND_LANDMARKS:left_hand_landmarks`),
      H(r, `LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks`),
      H(r, `RIGHT_HAND_LANDMARKS:right_hand_landmarks`),
      H(r, `RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks`),
      r.v(t),
      sc(e, r),
      Ku(this, e),
      this.g.attachProtoListener(`pose_landmarks`, (e, t) => {
        (pf(e, this.h.poseLandmarks), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`pose_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoListener(`pose_world_landmarks`, (e, t) => {
        var n = this.h.poseWorldLandmarks;
        ((e = xc(e)), n.push(ql(e)), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`pose_world_landmarks`, (e) => {
        G(this, e);
      }),
      this.outputPoseSegmentationMasks &&
        (H(r, `POSE_SEGMENTATION_MASK:pose_segmentation_mask`),
        qu(this, `pose_segmentation_mask`),
        this.g.ga(`pose_segmentation_mask`, (e, t) => {
          ((this.h.poseSegmentationMasks = [Hd(this, e, !0, !this.F)]),
            G(this, t));
        }),
        this.g.attachEmptyPacketListener(`pose_segmentation_mask`, (e) => {
          ((this.h.poseSegmentationMasks = []), G(this, e));
        })),
      this.g.attachProtoListener(`face_landmarks`, (e, t) => {
        (pf(e, this.h.faceLandmarks), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`face_landmarks`, (e) => {
        G(this, e);
      }),
      this.outputFaceBlendshapes &&
        (U(e, `extra_blendshapes`),
        H(r, `FACE_BLENDSHAPES:extra_blendshapes`),
        this.g.attachProtoListener(`extra_blendshapes`, (e, t) => {
          var n = this.h.faceBlendshapes;
          (this.outputFaceBlendshapes && ((e = hc(e)), n.push(Ul(e.g() ?? []))),
            G(this, t));
        }),
        this.g.attachEmptyPacketListener(`extra_blendshapes`, (e) => {
          G(this, e);
        })),
      this.g.attachProtoListener(`left_hand_landmarks`, (e, t) => {
        (pf(e, this.h.leftHandLandmarks), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`left_hand_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoListener(`left_hand_world_landmarks`, (e, t) => {
        var n = this.h.leftHandWorldLandmarks;
        ((e = xc(e)), n.push(ql(e)), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`left_hand_world_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoListener(`right_hand_landmarks`, (e, t) => {
        (pf(e, this.h.rightHandLandmarks), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`right_hand_landmarks`, (e) => {
        G(this, e);
      }),
      this.g.attachProtoListener(`right_hand_world_landmarks`, (e, t) => {
        var n = this.h.rightHandWorldLandmarks;
        ((e = xc(e)), n.push(ql(e)), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`right_hand_world_landmarks`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((Q.prototype.detectForVideo = Q.prototype.H),
  (Q.prototype.detect = Q.prototype.G),
  (Q.prototype.setOptions = Q.prototype.v),
  (Q.createFromModelPath = function (e, t) {
    return X(Q, e, { baseOptions: { modelAssetPath: t } });
  }),
  (Q.createFromModelBuffer = function (e, t) {
    return X(Q, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Q.createFromOptions = function (e, t) {
    return X(Q, e, t);
  }),
  (Q.HAND_CONNECTIONS = nf),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS`,
    Q.HAND_CONNECTIONS,
  ),
  (Q.POSE_CONNECTIONS = uf),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS`,
    Q.POSE_CONNECTIONS,
  ),
  (Q.FACE_LANDMARKS_LIPS = Gd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS`,
    Q.FACE_LANDMARKS_LIPS,
  ),
  (Q.FACE_LANDMARKS_LEFT_EYE = Kd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE`,
    Q.FACE_LANDMARKS_LEFT_EYE,
  ),
  (Q.FACE_LANDMARKS_LEFT_EYEBROW = qd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW`,
    Q.FACE_LANDMARKS_LEFT_EYEBROW,
  ),
  (Q.FACE_LANDMARKS_LEFT_IRIS = Jd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS`,
    Q.FACE_LANDMARKS_LEFT_IRIS,
  ),
  (Q.FACE_LANDMARKS_RIGHT_EYE = Yd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE`,
    Q.FACE_LANDMARKS_RIGHT_EYE,
  ),
  (Q.FACE_LANDMARKS_RIGHT_EYEBROW = Xd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW`,
    Q.FACE_LANDMARKS_RIGHT_EYEBROW,
  ),
  (Q.FACE_LANDMARKS_RIGHT_IRIS = Zd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS`,
    Q.FACE_LANDMARKS_RIGHT_IRIS,
  ),
  (Q.FACE_LANDMARKS_FACE_OVAL = Qd),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL`,
    Q.FACE_LANDMARKS_FACE_OVAL,
  ),
  (Q.FACE_LANDMARKS_CONTOURS = $d),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS`,
    Q.FACE_LANDMARKS_CONTOURS,
  ),
  (Q.FACE_LANDMARKS_TESSELATION = ef),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION`,
    Q.FACE_LANDMARKS_TESSELATION,
  ));
var mf = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `input_image`, `norm_rect`, !0),
      (this.l = { classifications: [] }),
      j((e = this.h = new vl()), 0, 1, (t = new Vc())));
  }
  C() {
    return `ImageClassifier`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (j(this.h, 0, 2, Vl(e, A(this.h, Pc, 2))), this.j(e));
  }
  Ga(e, t) {
    return ((this.l = { classifications: [] }), Bd(this, e, t), this.l);
  }
  Ha(e, t, n) {
    return ((this.l = { classifications: [] }), Vd(this, e, n, t), this.l);
  }
  o() {
    var e = new lc();
    (cc(e, `input_image`), cc(e, `norm_rect`), U(e, `classifications`));
    var t = new $s();
    ho(t, yl, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.image_classifier.ImageClassifierGraph`),
      nc(n, `IMAGE:input_image`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `CLASSIFICATIONS:classifications`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoListener(`classifications`, (e, t) => {
        ((this.l = Wl(Oc(e))), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`classifications`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((mf.prototype.classifyForVideo = mf.prototype.Ha),
  (mf.prototype.classify = mf.prototype.Ga),
  (mf.prototype.setOptions = mf.prototype.v),
  (mf.createFromModelPath = function (e, t) {
    return X(mf, e, { baseOptions: { modelAssetPath: t } });
  }),
  (mf.createFromModelBuffer = function (e, t) {
    return X(mf, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (mf.createFromOptions = function (e, t) {
    return X(mf, e, t);
  }));
var hf = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect`, !0),
      (this.h = new bl()),
      (this.embeddings = { embeddings: [] }),
      j((e = this.h), 0, 1, (t = new Vc())));
  }
  C() {
    return `ImageEmbedder`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    var t = this.h,
      n = A(this.h, Ic, 2);
    if (((n = n ? n.clone() : new Ic()), e.l2Normalize !== void 0)) {
      var r = e.l2Normalize;
      k(n, 1, r == null ? r : cr(r));
    } else `l2Normalize` in e && k(n, 1);
    return (
      e.quantize === void 0
        ? `quantize` in e && k(n, 2)
        : k(n, 2, (r = e.quantize) == null ? r : cr(r)),
      j(t, 0, 2, n),
      this.j(e)
    );
  }
  Na(e, t) {
    return (Bd(this, e, t), this.embeddings);
  }
  Oa(e, t, n) {
    return (Vd(this, e, n, t), this.embeddings);
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`), cc(e, `norm_rect`), U(e, `embeddings_out`));
    var t = new $s();
    ho(t, xl, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph`),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `EMBEDDINGS:embeddings_out`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoListener(`embeddings_out`, (e, t) => {
        ((e = Nc(e)),
          (this.embeddings = (function (e) {
            return {
              embeddings: Fi(e, jc, 1).map((e) => {
                var t = {
                  headIndex: Vi(e, 3) ?? 0 ?? -1,
                  headName: Or(mi(e, 4)) ?? `` ?? ``,
                };
                if (_i(e, kc, 1, Mc))
                  ((e = yi((e = Ui(e, kc, 1)), 1, sr, vi())),
                    (t.floatEmbedding = e.slice()));
                else {
                  let n = new Uint8Array();
                  t.quantizedEmbedding = Ui(e, Ac, 2)?.g()?.h() ?? n;
                }
                return t;
              }),
              timestampMs: Hl(mi(e, 2, void 0, Cr) ?? fi),
            };
          })(e)),
          G(this, t));
      }),
      this.g.attachEmptyPacketListener(`embeddings_out`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((hf.cosineSimilarity = function (e, t) {
  if (e.floatEmbedding && t.floatEmbedding)
    e = Yl(e.floatEmbedding, t.floatEmbedding);
  else {
    if (!e.quantizedEmbedding || !t.quantizedEmbedding)
      throw Error(
        `Cannot compute cosine similarity between quantized and float embeddings.`,
      );
    e = Yl(Jl(e.quantizedEmbedding), Jl(t.quantizedEmbedding));
  }
  return e;
}),
  (hf.prototype.embedForVideo = hf.prototype.Oa),
  (hf.prototype.embed = hf.prototype.Na),
  (hf.prototype.setOptions = hf.prototype.v),
  (hf.createFromModelPath = function (e, t) {
    return X(hf, e, { baseOptions: { modelAssetPath: t } });
  }),
  (hf.createFromModelBuffer = function (e, t) {
    return X(hf, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (hf.createFromOptions = function (e, t) {
    return X(hf, e, t);
  }));
var gf = class {
  constructor(e, t, n) {
    ((this.confidenceMasks = e),
      (this.categoryMask = t),
      (this.qualityScores = n));
  }
  close() {
    (this.confidenceMasks?.forEach((e) => {
      e.close();
    }),
      this.categoryMask?.close());
  }
};
function _f(e) {
  var t = (function (e) {
    return Fi(e, rc, 1);
  })(e.ja()).filter((e) =>
    (Or(mi(e, 1)) ?? ``).includes(
      `mediapipe.tasks.TensorsToSegmentationCalculator`,
    ),
  );
  if (((e.u = []), t.length > 1))
    throw Error(
      `The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.`,
    );
  t.length === 1 &&
    (A(t[0], $s, 7)?.o()?.g() ?? new Map()).forEach((t, n) => {
      e.u[Number(n)] = Or(mi(t, 1)) ?? ``;
    });
}
function vf(e) {
  ((e.categoryMask = void 0),
    (e.confidenceMasks = void 0),
    (e.qualityScores = void 0));
}
function yf(e) {
  try {
    let t = new gf(e.confidenceMasks, e.categoryMask, e.qualityScores);
    if (!e.l) return t;
    e.l(t);
  } finally {
    Ju(e);
  }
}
gf.prototype.close = gf.prototype.close;
var bf = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect`, !1),
      (this.u = []),
      (this.outputCategoryMask = !1),
      (this.outputConfidenceMasks = !0),
      (this.h = new El()),
      (this.B = new Sl()),
      j(this.h, 0, 3, this.B),
      j((e = this.h), 0, 1, (t = new Vc())));
  }
  C() {
    return `ImageSegmenter`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      e.displayNamesLocale === void 0
        ? `displayNamesLocale` in e && k(this.h, 2)
        : k(this.h, 2, Dr(e.displayNamesLocale)),
      `outputCategoryMask` in e &&
        (this.outputCategoryMask = e.outputCategoryMask ?? !1),
      `outputConfidenceMasks` in e &&
        (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0),
      super.j(e)
    );
  }
  L() {
    _f(this);
  }
  segment(e, t, n) {
    var r = typeof t == `function` ? {} : t;
    return (
      (this.l = typeof t == `function` ? t : n),
      vf(this),
      Bd(this, e, r),
      yf(this)
    );
  }
  eb(e, t, n, r) {
    var i = typeof n == `function` ? {} : n;
    return (
      (this.l = typeof n == `function` ? n : r),
      vf(this),
      Vd(this, e, i, t),
      yf(this)
    );
  }
  Ra() {
    return this.u;
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`), cc(e, `norm_rect`));
    var t = new $s();
    ho(t, Dl, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph`),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect`),
      n.v(t),
      sc(e, n),
      Ku(this, e),
      this.outputConfidenceMasks &&
        (U(e, `confidence_masks`),
        H(n, `CONFIDENCE_MASKS:confidence_masks`),
        qu(this, `confidence_masks`),
        this.g.ha(`confidence_masks`, (e, t) => {
          ((this.confidenceMasks = e.map((e) => Hd(this, e, !0, !this.l))),
            G(this, t));
        }),
        this.g.attachEmptyPacketListener(`confidence_masks`, (e) => {
          ((this.confidenceMasks = []), G(this, e));
        })),
      this.outputCategoryMask &&
        (U(e, `category_mask`),
        H(n, `CATEGORY_MASK:category_mask`),
        qu(this, `category_mask`),
        this.g.ga(`category_mask`, (e, t) => {
          ((this.categoryMask = Hd(this, e, !1, !this.l)), G(this, t));
        }),
        this.g.attachEmptyPacketListener(`category_mask`, (e) => {
          ((this.categoryMask = void 0), G(this, e));
        })),
      U(e, `quality_scores`),
      H(n, `QUALITY_SCORES:quality_scores`),
      this.g.attachFloatVectorListener(`quality_scores`, (e, t) => {
        ((this.qualityScores = e), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`quality_scores`, (e) => {
        ((this.categoryMask = void 0), G(this, e));
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((bf.prototype.getLabels = bf.prototype.Ra),
  (bf.prototype.segmentForVideo = bf.prototype.eb),
  (bf.prototype.segment = bf.prototype.segment),
  (bf.prototype.setOptions = bf.prototype.v),
  (bf.createFromModelPath = function (e, t) {
    return X(bf, e, { baseOptions: { modelAssetPath: t } });
  }),
  (bf.createFromModelBuffer = function (e, t) {
    return X(bf, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (bf.createFromOptions = function (e, t) {
    return X(bf, e, t);
  }));
var xf = { 0: 0, 1: 1, 2: 2, 3: 3 };
function Sf() {
  return Au() ? void 0 : document.createElement(`canvas`);
}
var Cf = class extends Yu {
  constructor(e, t) {
    (super(new Vu(e, t)),
      (this.u = new nd()),
      (this.delegate = `CPU`),
      (this.h = 0),
      (this.baseOptions = new Vc()),
      (this.B = this.l = 0));
  }
  C() {
    return `InteractiveSegmenter`;
  }
  get i() {
    return this.g.i;
  }
  v(e) {
    return ((this.delegate = e.baseOptions?.delegate ?? `CPU`), super.j(e));
  }
  fb(e) {
    if (this.h === 0) throw Error(`Segmenter is not initialized.`);
    var t;
    if (
      (this.l !== 0 && (this.i._free(this.l), (this.l = 0)),
      !(t = typeof ImageData < `u` && e instanceof ImageData))
    ) {
      if (typeof e != `object` || !e) t = !1;
      else {
        t = e.data;
        var n = e.width,
          r = e.height;
        t =
          Number.isInteger(n) &&
          n > 0 &&
          Number.isInteger(r) &&
          r > 0 &&
          (t instanceof Uint8ClampedArray || t instanceof Uint8Array);
      }
    }
    if (t) ((t = e.width), (n = e.height), (e = e.data));
    else {
      if ((([t, n] = Mu(e)), typeof OffscreenCanvas < `u`))
        r = new OffscreenCanvas(t, n);
      else {
        if (typeof document > `u`)
          throw Error(`Canvas is not supported in this environment.`);
        r = document.createElement(`canvas`);
      }
      if (((r.width = t), (r.height = n), !(r = r.getContext(`2d`))))
        throw Error(`Canvas 2D context is not supported in this environment.`);
      (r.drawImage(e, 0, 0), (e = r.getImageData(0, 0, t, n).data));
    }
    if (!e)
      throw Error(
        `Unsupported image source or failed to extract image pixels.`,
      );
    r = (function ({ Wa: e, width: t, height: n }) {
      if (t <= 0 || n <= 0)
        throw Error(
          `Invalid image dimensions: ${t}x${n}. Dimensions must be positive.`,
        );
      if (e % (t * n) !== 0)
        throw Error(
          `Invalid image dimensions or pixel data length. Pixel data length ${e} is not a multiple of the number of pixels (${t * n}).`,
        );
      if ((e /= t * n) !== 4 && e !== 3 && e !== 1)
        throw Error(
          `Invalid image dimensions or pixel data length. Calculated channels: ${e}. Expected 1, 3, or 4.`,
        );
      return e;
    })({ Wa: e.length, width: t, height: n });
    var i = this.i._malloc(e.length);
    if (
      (this.i.HEAPU8.set(e, i),
      (this.l = i),
      !this.i._interactive_segmenter_set_image(this.h, i, t, n, r))
    )
      throw Error(`Failed to set image on native engine.`);
  }
  segment(e) {
    if (this.h === 0) throw Error(`Segmenter is not initialized.`);
    var t = (function (e) {
      e = e.map(({ isCompleted: e, brushMode: t, point: n }) => {
        ((t = xf[t] ?? 0),
          (n = n.map(({ x: e, y: t }) => {
            var n = new Ol();
            return (Ji(n, 1, e), Ji(n, 2, t), n);
          })));
        var r = new kl();
        return (Wi(r, e), Ei(r, 1, dr(t), 0), Ri(r, 2, n), r);
      });
      var t = new Al();
      return (Ri(t, 1, e), jl(t));
    })(e);
    ((e = this.i._malloc(t.length)), this.i.HEAPU8.set(t, e));
    var n = this.i._malloc(12),
      r = n + 4,
      i = n + 8,
      a = 0,
      o = this.B++;
    try {
      if (this.m) {
        if (this.delegate === `GPU`) {
          var s = this.m;
          (++s.g.T, s.h.set(o, performance.now()));
        } else {
          var c = this.m;
          (++c.g.P, c.h.set(o, performance.now()));
        }
      }
      if (
        (a = this.i._interactive_segmenter_segment(
          this.h,
          e,
          t.length,
          n,
          r,
          i,
        )) === 0
      )
        throw Error(`Segmentation failed.`);
      this.m?.za(o);
      let u = this.i.HEAPU32[n / 4],
        d = this.i.HEAPU32[r / 4],
        f = new Float32Array(
          this.i.HEAPU8.buffer,
          a,
          this.i.HEAPU32[i / 4] / 4,
        );
      var l = new Float32Array(f);
      if (
        ((s = u * d),
        (l instanceof Uint8Array || l instanceof Float32Array) &&
          l.length !== s)
      )
        throw Error(`Unsupported channel count: ` + l.length / s);
      return new Y([l], !0, !1, this.g.i.canvas ?? void 0, this.u, u, d);
    } finally {
      (e !== 0 && this.i._free(e),
        n !== 0 && this.i._free(n),
        a !== 0 && this.i._free(a));
    }
  }
  o() {
    (this.h !== 0 &&
      (this.m?.xa(), this.i._interactive_segmenter_close(this.h), (this.h = 0)),
      this.l !== 0 && (this.i._free(this.l), (this.l = 0)));
    var e = new Rc();
    if (this.delegate === `GPU`) {
      var t = new Gs();
      Li(e, 2, zc, t);
    } else (Gi((t = new Zs()), 1, 4), Li(e, 1, zc, t));
    if (
      (j(this.baseOptions, 0, 3, e),
      (e = Wc(this.baseOptions)),
      (t = this.i._malloc(e.length)),
      this.i.HEAPU8.set(e, t),
      (this.h = this.i._interactive_segmenter_create(t, e.length)),
      this.i._free(t),
      this.h === 0)
    )
      throw Error(`Failed to create native InteractiveSegmenter engine.`);
    this.m?.ya();
  }
  close() {
    (this.h !== 0 &&
      (this.i._interactive_segmenter_close(this.h), (this.h = 0)),
      this.l !== 0 && (this.i._free(this.l), (this.l = 0)),
      this.u.close(),
      super.close());
  }
};
((Cf.prototype.close = Cf.prototype.close),
  (Cf.prototype.segment = Cf.prototype.segment),
  (Cf.prototype.setImage = Cf.prototype.fb),
  (Cf.prototype.setOptions = Cf.prototype.v),
  (Cf.createFromModelPath = function (e, t) {
    return Uu(Cf, Sf(), e, { baseOptions: { modelAssetPath: t } });
  }),
  (Cf.createFromModelBuffer = function (e, t) {
    return Uu(Cf, Sf(), e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Cf.createFromOptions = function (e, t) {
    return Uu(Cf, t.canvas ?? Sf(), e, t);
  }));
var wf = class {
  constructor(e, t, n) {
    ((this.confidenceMasks = e),
      (this.categoryMask = t),
      (this.qualityScores = n));
  }
  close() {
    (this.confidenceMasks?.forEach((e) => {
      e.close();
    }),
      this.categoryMask?.close());
  }
};
wf.prototype.close = wf.prototype.close;
var Tf = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect_in`, !1),
      (this.outputCategoryMask = !1),
      (this.outputConfidenceMasks = !0),
      (this.h = new El()),
      (this.u = new Sl()),
      j(this.h, 0, 3, this.u),
      j((e = this.h), 0, 1, (t = new Vc())));
  }
  C() {
    return `InteractiveSegmenterLegacy`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      `outputCategoryMask` in e &&
        (this.outputCategoryMask = e.outputCategoryMask ?? !1),
      `outputConfidenceMasks` in e &&
        (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0),
      super.j(e)
    );
  }
  segment(e, t, n, r) {
    var i = typeof n == `function` ? {} : n;
    if (
      ((this.l = typeof n == `function` ? n : r),
      (this.qualityScores = this.categoryMask = this.confidenceMasks = void 0),
      (n = this.I + 1),
      (r = new Fl()),
      t.keypoint && t.scribble)
    )
      throw Error(`Cannot provide both keypoint and scribble.`);
    if (t.keypoint) {
      var a = new Ml();
      (Wi(a, !0),
        Ji(a, 1, t.keypoint.x),
        Ji(a, 2, t.keypoint.y),
        Li(r, 1, Il, a));
    } else {
      if (!t.scribble)
        throw Error(`Must provide either a keypoint or a scribble.`);
      {
        let e = new Pl();
        for (a of t.scribble)
          (Wi((t = new Ml()), !0),
            Ji(t, 1, a.x),
            Ji(t, 2, a.y),
            Bi(e, 1, Ml, t));
        Li(r, 2, Il, e);
      }
    }
    (this.g.addProtoToStream(
      r.g(),
      `mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest`,
      `roi_in`,
      n,
    ),
      Bd(this, e, i));
    t: {
      try {
        let e = new wf(
          this.confidenceMasks,
          this.categoryMask,
          this.qualityScores,
        );
        if (!this.l) {
          var o = e;
          break t;
        }
        this.l(e);
      } finally {
        Ju(this);
      }
      o = void 0;
    }
    return o;
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`), cc(e, `roi_in`), cc(e, `norm_rect_in`));
    var t = new $s();
    ho(t, Dl, this.h);
    var n = new rc();
    (Yi(
      n,
      2,
      `mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2`,
    ),
      nc(n, `IMAGE:image_in`),
      nc(n, `ROI:roi_in`),
      nc(n, `NORM_RECT:norm_rect_in`),
      n.v(t),
      sc(e, n),
      Ku(this, e),
      this.outputConfidenceMasks &&
        (U(e, `confidence_masks`),
        H(n, `CONFIDENCE_MASKS:confidence_masks`),
        qu(this, `confidence_masks`),
        this.g.ha(`confidence_masks`, (e, t) => {
          ((this.confidenceMasks = e.map((e) => Hd(this, e, !0, !this.l))),
            G(this, t));
        }),
        this.g.attachEmptyPacketListener(`confidence_masks`, (e) => {
          ((this.confidenceMasks = []), G(this, e));
        })),
      this.outputCategoryMask &&
        (U(e, `category_mask`),
        H(n, `CATEGORY_MASK:category_mask`),
        qu(this, `category_mask`),
        this.g.ga(`category_mask`, (e, t) => {
          ((this.categoryMask = Hd(this, e, !1, !this.l)), G(this, t));
        }),
        this.g.attachEmptyPacketListener(`category_mask`, (e) => {
          ((this.categoryMask = void 0), G(this, e));
        })),
      U(e, `quality_scores`),
      H(n, `QUALITY_SCORES:quality_scores`),
      this.g.attachFloatVectorListener(`quality_scores`, (e, t) => {
        ((this.qualityScores = e), G(this, t));
      }),
      this.g.attachEmptyPacketListener(`quality_scores`, (e) => {
        ((this.categoryMask = void 0), G(this, e));
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((Tf.prototype.segment = Tf.prototype.segment),
  (Tf.prototype.setOptions = Tf.prototype.v),
  (Tf.createFromModelPath = function (e, t) {
    return X(Tf, e, { baseOptions: { modelAssetPath: t } });
  }),
  (Tf.createFromModelBuffer = function (e, t) {
    return X(Tf, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Tf.createFromOptions = function (e, t) {
    return X(Tf, e, t);
  }));
var Ef = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `input_frame_gpu`, `norm_rect`, !1),
      (this.l = { detections: [] }),
      j((e = this.h = new Ll()), 0, 1, (t = new Vc())));
  }
  C() {
    return `ObjectDetector`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      e.displayNamesLocale === void 0
        ? `displayNamesLocale` in e && k(this.h, 2)
        : k(this.h, 2, Dr(e.displayNamesLocale)),
      e.maxResults === void 0
        ? `maxResults` in e && k(this.h, 3)
        : Gi(this.h, 3, e.maxResults),
      e.scoreThreshold === void 0
        ? `scoreThreshold` in e && k(this.h, 4)
        : M(this.h, 4, e.scoreThreshold),
      e.categoryAllowlist === void 0
        ? `categoryAllowlist` in e && k(this.h, 5)
        : Xi(this.h, 5, e.categoryAllowlist),
      e.categoryDenylist === void 0
        ? `categoryDenylist` in e && k(this.h, 6)
        : Xi(this.h, 6, e.categoryDenylist),
      this.j(e)
    );
  }
  G(e, t) {
    return ((this.l = { detections: [] }), Bd(this, e, t), this.l);
  }
  H(e, t, n) {
    return ((this.l = { detections: [] }), Vd(this, e, n, t), this.l);
  }
  o() {
    var e = new lc();
    (cc(e, `input_frame_gpu`), cc(e, `norm_rect`), U(e, `detections`));
    var t = new $s();
    ho(t, Rl, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.ObjectDetectorGraph`),
      nc(n, `IMAGE:input_frame_gpu`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `DETECTIONS:detections`),
      n.v(t),
      sc(e, n),
      this.g.attachProtoVectorListener(`detections`, (e, t) => {
        for (let t of e) ((e = yc(t)), this.l.detections.push(Gl(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`detections`, (e) => {
        G(this, e);
      }),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((Ef.prototype.detectForVideo = Ef.prototype.H),
  (Ef.prototype.detect = Ef.prototype.G),
  (Ef.prototype.setOptions = Ef.prototype.v),
  (Ef.createFromModelPath = async function (e, t) {
    return X(Ef, e, { baseOptions: { modelAssetPath: t } });
  }),
  (Ef.createFromModelBuffer = function (e, t) {
    return X(Ef, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Ef.createFromOptions = function (e, t) {
    return X(Ef, e, t);
  }));
var Df = class {
  constructor(e, t, n) {
    ((this.landmarks = e),
      (this.worldLandmarks = t),
      (this.segmentationMasks = n));
  }
  close() {
    this.segmentationMasks?.forEach((e) => {
      e.close();
    });
  }
};
function Of(e) {
  ((e.landmarks = []), (e.worldLandmarks = []), (e.segmentationMasks = void 0));
}
function kf(e) {
  try {
    let t = new Df(e.landmarks, e.worldLandmarks, e.segmentationMasks);
    if (!e.u) return t;
    e.u(t);
  } finally {
    Ju(e);
  }
}
Df.prototype.close = Df.prototype.close;
var Af = class extends Ud {
  constructor(e, t) {
    (super(new Rd(e, t), `image_in`, `norm_rect`, !1),
      (this.landmarks = []),
      (this.worldLandmarks = []),
      (this.outputSegmentationMasks = !1),
      j((e = this.h = new zl()), 0, 1, (t = new Vc())),
      (this.B = new ml()),
      j(this.h, 0, 3, this.B),
      (this.l = new pl()),
      j(this.h, 0, 2, this.l),
      Gi(this.l, 4, 1),
      M(this.l, 2, 0.5),
      M(this.B, 2, 0.5),
      M(this.h, 4, 0.5));
  }
  C() {
    return `PoseLandmarker`;
  }
  get baseOptions() {
    return A(this.h, Vc, 1);
  }
  set baseOptions(e) {
    j(this.h, 0, 1, e);
  }
  v(e) {
    return (
      `numPoses` in e && Gi(this.l, 4, e.numPoses ?? 1),
      `minPoseDetectionConfidence` in e &&
        M(this.l, 2, e.minPoseDetectionConfidence ?? 0.5),
      `minTrackingConfidence` in e &&
        M(this.h, 4, e.minTrackingConfidence ?? 0.5),
      `minPosePresenceConfidence` in e &&
        M(this.B, 2, e.minPosePresenceConfidence ?? 0.5),
      `outputSegmentationMasks` in e &&
        (this.outputSegmentationMasks = e.outputSegmentationMasks ?? !1),
      this.j(e)
    );
  }
  G(e, t, n) {
    var r = typeof t == `function` ? {} : t;
    return (
      (this.u = typeof t == `function` ? t : n),
      Of(this),
      Bd(this, e, r),
      kf(this)
    );
  }
  H(e, t, n, r) {
    var i = typeof n == `function` ? {} : n;
    return (
      (this.u = typeof n == `function` ? n : r),
      Of(this),
      Vd(this, e, i, t),
      kf(this)
    );
  }
  o() {
    var e = new lc();
    (cc(e, `image_in`),
      cc(e, `norm_rect`),
      U(e, `normalized_landmarks`),
      U(e, `world_landmarks`),
      U(e, `segmentation_masks`));
    var t = new $s();
    ho(t, Bl, this.h);
    var n = new rc();
    (Yi(n, 2, `mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph`),
      nc(n, `IMAGE:image_in`),
      nc(n, `NORM_RECT:norm_rect`),
      H(n, `NORM_LANDMARKS:normalized_landmarks`),
      H(n, `WORLD_LANDMARKS:world_landmarks`),
      n.v(t),
      sc(e, n),
      Ku(this, e),
      this.g.attachProtoVectorListener(`normalized_landmarks`, (e, t) => {
        this.landmarks = [];
        for (let t of e) ((e = Cc(t)), this.landmarks.push(Kl(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`normalized_landmarks`, (e) => {
        ((this.landmarks = []), G(this, e));
      }),
      this.g.attachProtoVectorListener(`world_landmarks`, (e, t) => {
        this.worldLandmarks = [];
        for (let t of e) ((e = xc(t)), this.worldLandmarks.push(ql(e)));
        G(this, t);
      }),
      this.g.attachEmptyPacketListener(`world_landmarks`, (e) => {
        ((this.worldLandmarks = []), G(this, e));
      }),
      this.outputSegmentationMasks &&
        (H(n, `SEGMENTATION_MASK:segmentation_masks`),
        qu(this, `segmentation_masks`),
        this.g.ha(`segmentation_masks`, (e, t) => {
          ((this.segmentationMasks = e.map((e) => Hd(this, e, !0, !this.u))),
            G(this, t));
        }),
        this.g.attachEmptyPacketListener(`segmentation_masks`, (e) => {
          ((this.segmentationMasks = []), G(this, e));
        })),
      (e = e.g()),
      this.setGraph(new Uint8Array(e), !0));
  }
};
((Af.prototype.detectForVideo = Af.prototype.H),
  (Af.prototype.detect = Af.prototype.G),
  (Af.prototype.setOptions = Af.prototype.v),
  (Af.createFromModelPath = function (e, t) {
    return X(Af, e, { baseOptions: { modelAssetPath: t } });
  }),
  (Af.createFromModelBuffer = function (e, t) {
    return X(Af, e, { baseOptions: { modelAssetBuffer: t } });
  }),
  (Af.createFromOptions = function (e, t) {
    return X(Af, e, t);
  }),
  (Af.POSE_CONNECTIONS = uf),
  ht(
    `module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS`,
    Af.POSE_CONNECTIONS,
  ));
var jf = `/`,
  Mf = `${jf}mediapipe/1.0.1`,
  Nf = ``,
  Pf = `${jf}models/hand_landmarker.task${Nf}`,
  Ff = `${jf}models/face_landmarker.task${Nf}`;
async function If(e) {
  if (e[0] !== 31 || e[1] !== 139) return e;
  let t = new Blob([e]).stream().pipeThrough(new DecompressionStream(`gzip`));
  return new Uint8Array(await new Response(t).arrayBuffer());
}
async function Lf(e, t, n = `auto`) {
  let r = await Rf(e, t, n);
  return e.endsWith(`.gz`) ? If(r) : r;
}
async function Rf(e, t, n) {
  let r = await fetch(e, { priority: n });
  if (!r.ok) throw Error(`${e}: HTTP ${r.status}`);
  let i = Number(r.headers.get(`content-length`)) || 0;
  if (!r.body || !i) {
    let e = new Uint8Array(await r.arrayBuffer());
    return (t(1), e);
  }
  let a = r.body.getReader(),
    o = [],
    s = 0;
  for (;;) {
    let { done: e, value: n } = await a.read();
    if (e) break;
    (o.push(n), (s += n.length), t(Math.min(1, s / i)));
  }
  let c = new Uint8Array(s),
    l = 0;
  for (let e of o) (c.set(e, l), (l += e.length));
  return c;
}
var zf = class {
    constructor() {
      ((this.hands = null),
        (this.face = null),
        (this.error = null),
        (this.progress = { hands: 0, face: 0 }),
        (this.result = { hands: [], face: null }),
        (this.msPerFrame = 0),
        (this.turn = 0),
        (this.shapes = Array(Pe.length).fill(0)),
        (this.mouth = null),
        (this.lastTs = -1));
    }
    async load() {
      try {
        let e = eu.forVisionTasks(Mf),
          t = Lf(Pf, (e) => (this.progress.hands = e), `high`),
          n = Lf(Ff, (e) => (this.progress.face = e), `low`);
        ((this.hands = this._warm(
          await this._create(lf, await e, await t, {
            numHands: C.NUM_HANDS,
            minHandDetectionConfidence: 0.5,
            minHandPresenceConfidence: 0.4,
            minTrackingConfidence: 0.4,
          }),
        )),
          (this.face = this._warm(
            await this._create(Z, await e, await n, {
              numFaces: 1,
              outputFaceBlendshapes: !0,
              minFaceDetectionConfidence: 0.5,
              minFacePresenceConfidence: 0.4,
              minTrackingConfidence: 0.4,
            }),
          )));
      } catch (e) {
        (console.error(e), (this.error = e));
      }
    }
    _warm(e) {
      try {
        let t = document.createElement(`canvas`);
        ((t.width = t.height = 64),
          t.getContext(`2d`).fillRect(0, 0, 64, 64),
          (this.lastTs = Math.max(
            Math.round(performance.now()),
            this.lastTs + 1,
          )),
          e.detectForVideo(t, this.lastTs));
      } catch {}
      return e;
    }
    get ready() {
      return !!this.hands;
    }
    async _create(e, t, n, r) {
      for (let i of [`GPU`, `CPU`])
        try {
          return await e.createFromOptions(t, {
            baseOptions: { modelAssetBuffer: n, delegate: i },
            runningMode: `VIDEO`,
            ...r,
          });
        } catch (e) {
          if (i === `CPU`) throw e;
          console.warn(`GPU delegate failed, using CPU`, e);
        }
    }
    detect(e, t) {
      let n = Math.max(Math.round(performance.now()), this.lastTs + 1);
      this.lastTs = n;
      let r = this.msPerFrame > C.DETECT_BUDGET_MS && this.hands && this.face,
        i = this.hands && (!r || this.turn === 0),
        a = this.face && (!r || this.turn === 1);
      this.turn ^= 1;
      let o = performance.now(),
        s = (e) => e.map((e) => t(e.x, e.y));
      try {
        if (
          (i &&
            (this.result.hands = this.hands
              .detectForVideo(e, n)
              .landmarks.map((e) => Be(s(e)))),
          a)
        ) {
          let t = this.face.detectForVideo(e, n);
          if (!t.faceLandmarks.length)
            ((this.result.face = null),
              (this.mouth = null),
              this.shapes.fill(0));
          else {
            let e = {};
            for (let n of t.faceBlendshapes?.[0]?.categories || [])
              e[n.categoryName] = n.score;
            let n = {};
            Pe.forEach((t, r) => {
              ((this.shapes[r] +=
                C.FACE_SMOOTHING * ((e[t] || 0) - this.shapes[r])),
                (n[t] = this.shapes[r]));
            });
            let r = Ve(s(t.faceLandmarks[0]), n),
              i = r.mouthCenter,
              a = C.FACE_SMOOTHING;
            ((this.mouth = this.mouth
              ? [
                  this.mouth[0] + a * (i[0] - this.mouth[0]),
                  this.mouth[1] + a * (i[1] - this.mouth[1]),
                ]
              : i),
              (r.mouthCenter = [this.mouth[0], this.mouth[1]]),
              (this.result.face = r));
          }
        }
      } catch (e) {
        console.warn(`detect failed on this frame`, e);
      }
      let c = performance.now() - o;
      return (
        (this.msPerFrame = this.msPerFrame * 0.9 + (r ? c * 2 : c) * 0.1),
        this.result
      );
    }
  },
  Bf = null;
function $() {
  return (Bf || ((Bf = new zf()), Bf.load()), Bf);
}
var Vf = {
    resting: [
      1,
      `Pick up the cigarette between two fingers, or pinch it with your fingertips`,
    ],
    unlit: [2, `Bring the filter to your lips`],
    lighting: [2, `Purse your lips and breathe in to light it`],
    holding: [2, `Bring it to your lips for a drag`],
    "at mouth": [2, `Purse your lips and breathe in`],
    drawing: [2, `Nice. Keep breathing in`],
    full: [3, `Take it away from your mouth, then blow. Make an O for rings`],
    exhaling: [3, `Blow it out. Puff your cheeks for a big cloud`],
    ash: [
      3,
      `Flick your wrist to tap the ash, or hold it over the stand to rest it`,
    ],
    finished: [3, `That was the whole cigarette`],
  },
  Hf = {
    ...Vf,
    resting: [1, `Press and hold on the cigarette to pick it up`],
    unlit: [2, `Drag the filter to the lips`],
    lighting: [2, `Keep holding at the lips to light it`],
    "at mouth": [2, `Keep holding at the lips`],
    drawing: [2, `Drawing…`],
    full: [3, `Move away to exhale. Hold Shift for rings`],
    exhaling: [3, `Exhaling… hold Shift for rings`],
    ash: [3, `Flick the mouse to tap the ash, or hold it over the stand`],
  };
function Uf(e) {
  return e.state === `holding`
    ? e.lit
      ? e.lung > C.EXHALE_MIN_LUNG
        ? `full`
        : e.ash > 0.06
          ? `ash`
          : `holding`
      : `unlit`
    : (e.state === `at mouth` || e.state === `drawing`) && !e.lit
      ? `lighting`
      : e.state;
}
async function Wf() {
  let e = navigator.mediaDevices;
  if (!e?.getUserMedia)
    throw Error(
      window.isSecureContext
        ? `This browser will not share the camera.`
        : `Camera needs a secure https connection.`,
    );
  let t = {
    width: { ideal: C.CAMERA_WIDTH },
    height: { ideal: C.CAMERA_HEIGHT },
    facingMode: `user`,
    frameRate: { ideal: 30 },
  };
  try {
    return await e.getUserMedia({ video: t, audio: !1 });
  } catch (t) {
    if (/Overconstrained|NotFound|NotReadable/i.test(String(t?.name)))
      return e.getUserMedia({ video: !0, audio: !1 });
    throw t;
  }
}
var Gf = class {
    constructor({ canvas: e, video: t, brand: n, onHud: r, debug: i = !1 }) {
      ((this.canvas = e),
        (this.video = t),
        (this.ctx = e.getContext(`2d`, { alpha: !1, desynchronized: !0 })),
        (this.brand = n),
        (this.onHud = r),
        (this.debug = i),
        (this.trackers = $()),
        (this.mode = `idle`),
        (this.camState = `off`),
        (this.W = this.H = 0),
        (this.obs = { hands: [], face: null }),
        (this.cover = {
          s: 1,
          ox: 0,
          oy: 0,
          vw: C.CAMERA_WIDTH,
          vh: C.CAMERA_HEIGHT,
        }),
        (this.lastT = performance.now()),
        (this.lastVideoTime = -1),
        (this.fps = 60),
        (this.quality = 1),
        (this.slowT = 0),
        (this.mouse = { x: 0, y: 0, down: !1, seen: !1, shift: !1 }),
        (this.lastHud = ``),
        (this.hudT = 0));
    }
    start() {
      (this.layout(),
        (this._frame = (e) => this.frame(e)),
        (this.raf = requestAnimationFrame(this._frame)),
        (this._onResize = () => {
          (clearTimeout(this.resizeTimer),
            (this.resizeTimer = setTimeout(() => this.layout(), 120)));
        }),
        (this._onVisible = () => {
          (this.stream
            ?.getVideoTracks()
            .forEach((e) => (e.enabled = !document.hidden)),
            !document.hidden &&
              ((this.lastT = performance.now()),
              (this.slowT = 0),
              this.mode === `camera` && this._keepAwake()));
        }),
        (this._onKey = (e) => {
          ((this.mouse.shift = e.shiftKey),
            !(
              e.type !== `keydown` ||
              /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) ||
              document.querySelector(`dialog[open]`)
            ) &&
              (e.key === `d` && (this.debug = !this.debug),
              e.key === `r` && this.reset()));
        }),
        addEventListener(`resize`, this._onResize),
        addEventListener(`orientationchange`, this._onResize),
        addEventListener(`keydown`, this._onKey),
        addEventListener(`keyup`, this._onKey),
        document.addEventListener(`visibilitychange`, this._onVisible));
    }
    destroy() {
      ((this.destroyed = !0),
        cancelAnimationFrame(this.raf),
        removeEventListener(`resize`, this._onResize),
        removeEventListener(`orientationchange`, this._onResize),
        removeEventListener(`keydown`, this._onKey),
        removeEventListener(`keyup`, this._onKey),
        document.removeEventListener(`visibilitychange`, this._onVisible),
        this.wakeLock?.release().catch(() => {}),
        this._detachMouse?.(),
        this.stream && this.stream.getTracks().forEach((e) => e.stop()));
    }
    layout() {
      let e = Math.max(1, innerWidth),
        t = Math.max(1, innerHeight),
        n = Math.min(
          devicePixelRatio || 1,
          Math.sqrt((C.MAX_CANVAS_PIXELS * this.quality) / (e * t)),
        ),
        r = Math.round(e * n),
        i = Math.round(t * n);
      (r !== this.W || i !== this.H) &&
        ((this.W = r),
        (this.H = i),
        (this.canvas.width = r),
        (this.canvas.height = i),
        (this.scene = new ct(r, i, this.brand)),
        this.quality < 1 &&
          (this.scene.smoke.max = Math.round(C.SMOKE_MAX_PARTICLES / 2)),
        this.session
          ? this.session.setLayout(this.scene.layout)
          : (this.session = new Je(this.scene.layout, this.brand)),
        this.updateCover());
    }
    updateCover() {
      let e = this.video.videoWidth || C.CAMERA_WIDTH,
        t = this.video.videoHeight || C.CAMERA_HEIGHT,
        n = Math.max(this.W / e, this.H / t);
      this.cover = {
        s: n,
        ox: (this.W - e * n) / 2,
        oy: (this.H - t * n) / 2,
        vw: e,
        vh: t,
      };
    }
    _adaptQuality(e) {
      this.quality < 1 ||
        this.mode !== `camera` ||
        !this.trackers.hands ||
        ((this.slowT = this.fps < C.SLOW_FPS ? this.slowT + e : 0),
        !(this.slowT < C.SLOW_FPS_TIME) &&
          ((this.quality = C.LOW_QUALITY), (this.W = 0), this.layout()));
    }
    async _keepAwake() {
      try {
        (!this.wakeLock || this.wakeLock.released) &&
          (this.wakeLock = await navigator.wakeLock?.request(`screen`));
      } catch {}
    }
    toCanvas = (e, t) => {
      let n = this.cover;
      return [n.ox + (1 - e) * n.vw * n.s, n.oy + t * n.vh * n.s];
    };
    setBrand(e) {
      ((this.brand = e),
        this.scene.setBrand(e),
        (this.session.brand = e),
        this.session.reset());
    }
    reset() {
      (this.session.reset(), this.scene.reset());
    }
    async startCamera() {
      this.camState = `opening`;
      try {
        this.stream = await Wf();
      } catch (e) {
        throw ((this.camState = `failed`), e);
      }
      if (this.destroyed) {
        this.stream.getTracks().forEach((e) => e.stop());
        return;
      }
      ((this.video.srcObject = this.stream),
        await this.video.play().catch(() => {}),
        this.updateCover(),
        (this.camState = `ready`),
        (this.mode = `camera`),
        this._keepAwake());
    }
    startDemo() {
      this.mode = `demo`;
      let e = this.mouse,
        t = (t) => {
          let n = this.canvas.getBoundingClientRect();
          ((e.x = ((t.clientX - n.left) / n.width) * this.W),
            (e.y = ((t.clientY - n.top) / n.height) * this.H),
            (e.seen = !0));
        },
        n = (n) => {
          n.target === this.canvas && (t(n), (e.down = !0));
        },
        r = () => (e.down = !1);
      (addEventListener(`pointermove`, t),
        addEventListener(`pointerdown`, n),
        addEventListener(`pointerup`, r),
        (this._detachMouse = () => {
          (removeEventListener(`pointermove`, t),
            removeEventListener(`pointerdown`, n),
            removeEventListener(`pointerup`, r));
        }));
    }
    _demoObs() {
      let { W: e, H: t, mouse: n } = this,
        r = this.scene.U,
        i = [e * 0.5, t * 0.42],
        a = {
          mouthCenter: i,
          mouthWidth: 0.075 * r,
          faceWidth: 0.3 * r,
          yaw: 0,
          pucker: 0,
          funnel: 0,
          jawOpen: 0,
          cheekPuff: 0,
        },
        o = [n.x, n.y],
        s = pe(o, i) < 0.3 * r;
      if (
        (n.seen && n.down && s
          ? (a.pucker = 0.7)
          : n.shift
            ? ((a.funnel = 0.6), (a.jawOpen = 0.15))
            : s || (a.jawOpen = 0.35),
        !n.seen)
      )
        return { hands: [], face: a };
      let c = +!!n.down;
      return {
        hands: [
          {
            scores: { vee: c, tri: 0, pinch: 0 },
            points: { vee: o, tri: o, pinch: o },
            kind: `vee`,
            hold: c,
            holdPoint: o,
            open: 0,
            axis: [0, -1],
            side: [-0.95, 0],
            center: [o[0] + 0.02 * r, o[1] + 0.1 * r],
            palm: 0.21 * r,
          },
        ],
        face: a,
      };
    }
    frame(e) {
      this.raf = requestAnimationFrame(this._frame);
      let t = Math.min(0.1, (e - this.lastT) / 1e3);
      ((this.lastT = e),
        (this.fps = this.fps * 0.95 + (1 / Math.max(t, 0.001)) * 0.05),
        this._adaptQuality(t));
      let { ctx: n, video: r, W: i, H: a } = this,
        o = this.mode === `camera` && r.readyState >= 2 && r.videoWidth > 0;
      (o &&
        r.currentTime !== this.lastVideoTime &&
        ((this.lastVideoTime = r.currentTime),
        (this.cover.vw !== r.videoWidth || this.cover.vh !== r.videoHeight) &&
          this.updateCover(),
        (this.trackers.hands || this.trackers.face) &&
          (this.obs = this.trackers.detect(r, this.toCanvas))),
        o
          ? (n.save(),
            n.translate(i, 0),
            n.scale(-1, 1),
            n.drawImage(
              r,
              this.cover.ox,
              this.cover.oy,
              this.cover.vw * this.cover.s,
              this.cover.vh * this.cover.s,
            ),
            n.restore())
          : ((n.fillStyle = se.BACKDROP), n.fillRect(0, 0, i, a)),
        this.mode === `demo` && (this.obs = this._demoObs()));
      let s = this.session.update(this.obs.hands, this.obs.face, t);
      ((s.debugHands = this.debug ? this.obs.hands : null),
        this.scene.draw(n, s, t, {
          debug: this.debug,
          demo: this.mode === `demo`,
        }),
        (this.hudT += t),
        this.hudT > 0.1 && ((this.hudT = 0), this._report(s)));
    }
    _report(e) {
      let t = this.trackers,
        n = {
          finished: e.finished,
          drags: e.drags,
          remaining: e.remaining,
          fill: e.lung,
          loading: !1,
          soft: !1,
        },
        r,
        i = (e) => `${Math.round(e * 100)}%`;
      if (this.mode === `camera` && t.error)
        r = {
          ...n,
          step: `Getting ready`,
          state: `load failed`,
          hint: `Could not load the tracking models. Check your connection and reload.`,
          soft: !0,
        };
      else if (this.mode === `camera` && !t.hands) {
        let e = t.progress.hands;
        r = {
          ...n,
          step: `Getting ready`,
          state: `loading`,
          hint: e < 1 ? `Getting ready ${i(e)}` : `Starting hand tracking…`,
          fill: e,
          loading: !0,
          soft: !0,
        };
      } else if (this.mode === `camera` && !t.face && e.held) {
        let e = t.progress.face;
        r = {
          ...n,
          step: `Almost ready`,
          state: `loading`,
          hint: `Your hands work now. Face tracking ${i(e)}`,
          fill: e,
          loading: !0,
          soft: !0,
        };
      } else if (this.mode === `camera` && t.face && e.held && !this.obs.face)
        r = {
          ...n,
          step: `Step 2 of 3`,
          state: `no face`,
          hint: `Face the camera so it can see your mouth`,
          soft: !0,
        };
      else {
        let [t, i] = (this.mode === `demo` ? Hf : Vf)[Uf(e)] || Vf.resting;
        r = { ...n, step: `Step ${t} of 3`, state: e.state, hint: i };
      }
      ((r.left = `${i(e.remaining)} left · ${e.drags} drag${e.drags === 1 ? `` : `s`}`),
        (r.debugText = this.debug
          ? `${this.fps.toFixed(0)} fps${this.quality < 1 ? ` (low)` : ``}  detect ${t.msPerFrame.toFixed(0)} ms  hands ${this.obs.hands.map((e) => `${e.kind}:${e.hold.toFixed(2)}`).join(` `) || 0}  face ${this.obs.face ? `yes` : `no`}  hold ${e.holdKind || `-`}`
          : null));
      let a = JSON.stringify([
        r.step,
        r.state,
        r.hint,
        Math.round(r.fill * 100),
        r.left,
        r.finished,
        r.debugText,
      ]);
      a !== this.lastHud && ((this.lastHud = a), this.onHud(r));
    }
  },
  Kf = 18,
  qf = `smokebar.age.ok`,
  Jf = `smokebar.pack`,
  Yf = new URLSearchParams(location.search),
  Xf = Yf.has(`demo`),
  Zf = (e) => {
    try {
      return localStorage.getItem(e);
    } catch {
      return null;
    }
  },
  Qf = (e, t) => {
    try {
      localStorage.setItem(e, t);
    } catch {}
  };
async function $f() {
  try {
    return (
      (await navigator.permissions.query({ name: `camera` })).state ===
      `granted`
    );
  } catch {
    return !1;
  }
}
function ep({ hud: e }) {
  return e
    ? (0, x.jsxs)(`aside`, {
        className: `coach`,
        "aria-live": `polite`,
        children: [
          (0, x.jsxs)(`div`, {
            className: `coach-head`,
            children: [
              (0, x.jsx)(
                `span`,
                { className: `step enter`, children: e.step },
                e.step,
              ),
              (0, x.jsx)(`span`, { className: `state`, children: e.state }),
            ],
          }),
          (0, x.jsx)(
            `p`,
            {
              className: `hint enter${e.soft ? ` soft` : ``}`,
              children: e.hint,
            },
            e.hint,
          ),
          (0, x.jsxs)(`div`, {
            className: `gauge`,
            children: [
              (0, x.jsx)(`span`, { className: `left`, children: e.left }),
              (0, x.jsx)(`div`, {
                className: `meter${e.loading ? ` loading` : ``}`,
                role: `progressbar`,
                "aria-label": `How full of smoke you are`,
                "aria-valuemin": `0`,
                "aria-valuemax": `100`,
                "aria-valuenow": Math.round(e.fill * 100),
                children: (0, x.jsx)(`span`, {
                  style: { width: `${Math.round(e.fill * 100)}%` },
                }),
              }),
            ],
          }),
          e.debugText &&
            (0, x.jsx)(`p`, { className: `debug`, children: e.debugText }),
        ],
      })
    : null;
}
function tp() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    [r, i] = (0, _.useState)(() => b(Yf.get(`pack`) || Zf(Jf))),
    [a, o] = (0, _.useState)(null),
    [s, c] = (0, _.useState)(() =>
      Xf ? `running` : Zf(qf) === String(Kf) ? `ready` : `age`,
    ),
    [l, u] = (0, _.useState)(!1),
    [d, f] = (0, _.useState)(!1),
    [p, m] = (0, _.useState)(!1),
    [h, g] = (0, _.useState)(!1),
    [v, y] = (0, _.useState)(null),
    ee = () => {
      (u(!0), setTimeout(() => c(`running`), 380));
    },
    re = async () => {
      (g(!0), y(null));
      try {
        (await n.current.startCamera(), ee());
      } catch (e) {
        console.error(e);
        let t = /denied|NotAllowed|Permission/i.test(String(e))
          ? `Your browser blocked the camera. Allow it near the address bar, then try again.`
          : window.isSecureContext
            ? `The camera did not open. ${String(e.message || e).slice(0, 60)}`
            : `This page needs a secure https address for the camera to work.`;
        (y(t), c(`ready`), u(!1));
      } finally {
        g(!1);
      }
    },
    ie = () => {
      (n.current.startDemo(), ee());
    };
  (0, _.useEffect)(() => {
    let i = new Gf({
      canvas: e.current,
      video: t.current,
      brand: r,
      onHud: o,
      debug: Yf.has(`debug`),
    });
    return (
      (n.current = i),
      i.start(),
      Xf
        ? i.startDemo()
        : Zf(qf) === String(Kf) &&
          !Yf.has(`intro`) &&
          $f().then((e) => {
            e &&
              !i.destroyed &&
              (c(`ready`),
              i
                .startCamera()
                .then(() => !i.destroyed && c(`running`))
                .catch((e) =>
                  console.warn(`camera did not reopen; showing the intro`, e),
                ));
          }),
      () => i.destroy()
    );
  }, []);
  let oe = (e) => {
      (i(e), Qf(Jf, e.id), n.current?.setBrand(e));
    },
    C = s === `running`;
  return (0, x.jsxs)(x.Fragment, {
    children: [
      (0, x.jsx)(`canvas`, {
        id: `stage`,
        ref: e,
        "aria-label": `Smoke Bar camera scene`,
      }),
      (0, x.jsx)(`video`, {
        id: `cam`,
        ref: t,
        playsInline: !0,
        muted: !0,
        autoPlay: !0,
      }),
      (0, x.jsx)(`div`, { className: `grain`, "aria-hidden": `true` }),
      (0, x.jsx)(`div`, { className: `vignette`, "aria-hidden": `true` }),
      (0, x.jsxs)(`header`, {
        className: `bar`,
        children: [
          (0, x.jsxs)(`a`, {
            className: `brand`,
            href: `./`,
            "aria-label": `Smoke Bar home`,
            children: [
              (0, x.jsx)(ne, {}),
              (0, x.jsxs)(`span`, {
                className: `wordmark`,
                children: [
                  (0, x.jsxs)(`span`, {
                    className: `name`,
                    children: [`Smoke `, (0, x.jsx)(`em`, { children: `Bar` })],
                  }),
                  (0, x.jsx)(`span`, {
                    className: `tagline`,
                    children: `The online smoke lounge`,
                  }),
                ],
              }),
            ],
          }),
          C && (0, x.jsx)(ep, { hud: a }),
        ],
      }),
      (0, x.jsx)(`div`, { className: `scrim`, "aria-hidden": `true` }),
      C &&
        (0, x.jsx)(`div`, {
          className: `pack-dock`,
          children: (0, x.jsxs)(`button`, {
            className: `pack-open`,
            type: `button`,
            "aria-haspopup": `dialog`,
            onClick: () => m(!0),
            children: [
              (0, x.jsx)(`span`, {
                className: `pack-icon`,
                "aria-hidden": `true`,
                children: (0, x.jsx)(S, { brand: r }),
              }),
              (0, x.jsxs)(`span`, {
                className: `pack-open-copy`,
                children: [
                  (0, x.jsx)(`span`, {
                    className: `eyebrow-sm`,
                    children: `Pick your pack`,
                  }),
                  (0, x.jsxs)(`span`, {
                    className: `pack-current`,
                    children: [
                      r.name,
                      ` `,
                      (0, x.jsx)(`em`, { children: r.line }),
                    ],
                  }),
                ],
              }),
              (0, x.jsx)(`span`, {
                className: `pack-open-action`,
                "aria-hidden": `true`,
                children: `↗`,
              }),
            ],
          }),
        }),
      !C &&
        (0, x.jsxs)(`section`, {
          className: `sheet${l ? ` leaving` : ``}`,
          role: `dialog`,
          "aria-labelledby": `intro-title`,
          children: [
            (0, x.jsxs)(`p`, {
              className: `eyebrow`,
              children: [
                (0, x.jsx)(`span`, { className: `tick` }),
                `Smoke Bar `,
                (0, x.jsxs)(`span`, {
                  className: `badge`,
                  children: [Kf, `+`],
                }),
              ],
            }),
            (0, x.jsxs)(`h1`, {
              id: `intro-title`,
              children: [
                `Smoke a cigarette`,
                (0, x.jsx)(`br`, {}),
                `with your `,
                (0, x.jsx)(`em`, { children: `fingers.` }),
              ],
            }),
            s === `age`
              ? (0, x.jsxs)(`div`, {
                  className: `age`,
                  children: [
                    (0, x.jsxs)(`p`, {
                      className: `age-q`,
                      children: [`Are you `, Kf, ` or older?`],
                    }),
                    (0, x.jsxs)(`p`, {
                      className: `fine`,
                      children: [
                        `Smoke Bar is a virtual cigarette that lives in your browser: no tobacco, no nicotine, no real smoke. Made for adults, not an invitation to smoke. `,
                        (0, x.jsx)(`b`, {
                          children: `Smoking is injurious to health.`,
                        }),
                      ],
                    }),
                    (0, x.jsxs)(`div`, {
                      className: `age-actions`,
                      children: [
                        (0, x.jsxs)(`button`, {
                          className: `btn btn-cta`,
                          type: `button`,
                          disabled: d,
                          onClick: () => {
                            (Qf(qf, String(Kf)), c(`ready`));
                          },
                          children: [`Yes, I am `, Kf, ` or older`],
                        }),
                        (0, x.jsx)(`button`, {
                          className: `btn btn-ghost`,
                          type: `button`,
                          disabled: d,
                          onClick: () => f(!0),
                          children: `No`,
                        }),
                      ],
                    }),
                    d &&
                      (0, x.jsx)(`p`, {
                        className: `fine error`,
                        children: `Sorry, this page is for adults only.`,
                      }),
                  ],
                })
              : (0, x.jsxs)(`div`, {
                  className: `ready`,
                  children: [
                    (0, x.jsxs)(`ol`, {
                      className: `steps`,
                      children: [
                        (0, x.jsxs)(`li`, {
                          children: [
                            (0, x.jsx)(`span`, {
                              className: `num`,
                              children: `01`,
                            }),
                            (0, x.jsx)(`span`, {
                              children: `Hold the cigarette between two fingers, or pinch it with your fingertips.`,
                            }),
                          ],
                        }),
                        (0, x.jsxs)(`li`, {
                          children: [
                            (0, x.jsx)(`span`, {
                              className: `num`,
                              children: `02`,
                            }),
                            (0, x.jsx)(`span`, {
                              children: `Bring it to your lips, purse them and breathe in.`,
                            }),
                          ],
                        }),
                        (0, x.jsxs)(`li`, {
                          children: [
                            (0, x.jsx)(`span`, {
                              className: `num`,
                              children: `03`,
                            }),
                            (0, x.jsx)(`span`, {
                              children: `Take it away and blow the smoke out.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsxs)(`button`, {
                      className: `pack-open intro-pack-open`,
                      type: `button`,
                      "aria-haspopup": `dialog`,
                      onClick: () => m(!0),
                      children: [
                        (0, x.jsx)(`span`, {
                          className: `pack-icon`,
                          "aria-hidden": `true`,
                          children: (0, x.jsx)(S, { brand: r }),
                        }),
                        (0, x.jsxs)(`span`, {
                          className: `pack-open-copy`,
                          children: [
                            (0, x.jsx)(`span`, {
                              className: `intro-pack-title`,
                              children: `Pick your pack`,
                            }),
                            (0, x.jsxs)(`span`, {
                              className: `intro-pack-current`,
                              children: [r.name, ` `, r.line, ` selected`],
                            }),
                          ],
                        }),
                        (0, x.jsx)(`span`, {
                          "aria-hidden": `true`,
                          children: `↗`,
                        }),
                      ],
                    }),
                    (0, x.jsx)(`button`, {
                      className: `btn btn-cta`,
                      type: `button`,
                      disabled: h,
                      onClick: re,
                      children: h
                        ? `Opening your camera…`
                        : v
                          ? `Try again`
                          : `Turn on my camera`,
                    }),
                    (0, x.jsx)(`p`, {
                      className: `fine${v ? ` error` : ``}`,
                      children:
                        v ||
                        `Your camera stays on your device. Nothing is recorded or sent anywhere.`,
                    }),
                    (0, x.jsx)(`button`, {
                      className: `btn btn-ghost demo-link`,
                      type: `button`,
                      onClick: ie,
                      children: `No camera? Try it with your mouse`,
                    }),
                  ],
                }),
          ],
        }),
      C &&
        a?.finished &&
        (0, x.jsxs)(`section`, {
          className: `sheet finish`,
          role: `dialog`,
          "aria-labelledby": `finish-title`,
          children: [
            (0, x.jsxs)(`p`, {
              className: `eyebrow`,
              children: [(0, x.jsx)(`span`, { className: `tick` }), `Finished`],
            }),
            (0, x.jsxs)(`h1`, {
              id: `finish-title`,
              children: [
                `That was the`,
                (0, x.jsx)(`br`, {}),
                `whole `,
                (0, x.jsx)(`em`, { children: `cigarette.` }),
              ],
            }),
            (0, x.jsxs)(`p`, {
              className: `fine`,
              children: [
                a.drags,
                ` drag`,
                a.drags === 1 ? `` : `s`,
                ` off a `,
                r.name,
                ` `,
                r.line,
                `. Nothing but pixels were harmed.`,
              ],
            }),
            (0, x.jsxs)(`div`, {
              className: `age-actions`,
              children: [
                (0, x.jsx)(`button`, {
                  className: `btn btn-cta`,
                  type: `button`,
                  onClick: () => n.current.reset(),
                  children: `Light another`,
                }),
                (0, x.jsx)(`button`, {
                  className: `btn btn-ghost`,
                  type: `button`,
                  onClick: () => m(!0),
                  children: `Other pack`,
                }),
              ],
            }),
          ],
        }),
      (0, x.jsx)(ae, { open: p, current: r, onPick: oe, onClose: () => m(!1) }),
      (0, x.jsx)(te, { onReset: () => n.current?.reset() }),
    ],
  });
}
($(),
  v
    .createRoot(document.getElementById(`root`))
    .render((0, x.jsx)(_.StrictMode, { children: (0, x.jsx)(tp, {}) })),
  `serviceWorker` in navigator &&
    (location.protocol === `https:` || location.hostname === `localhost`) &&
    addEventListener(`load`, () =>
      Promise.reject("disabled locally").catch(() => {}),
    ));
