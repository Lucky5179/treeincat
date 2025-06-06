"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94], {
        3027: (e, t, r) => {
            var n = r(2115),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                a = n.useState,
                u = n.useEffect,
                o = n.useLayoutEffect,
                l = n.useDebugValue;

            function s(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !i(e, r)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = a({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    i = n[0].inst,
                    c = n[1];
                return o(function() {
                    i.value = r, i.getSnapshot = t, s(i) && c({
                        inst: i
                    })
                }, [e, r, t]), u(function() {
                    return s(i) && c({
                        inst: i
                    }), e(function() {
                        s(i) && c({
                            inst: i
                        })
                    })
                }, [e]), l(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        4236: (e, t, r) => {
            e.exports = r(3027)
        },
        8094: (e, t, r) => {
            let n;
            r.d(t, {
                Ay: () => en
            });
            var i = r(2115),
                a = r(4236),
                u = Object.prototype.hasOwnProperty;
            let o = new WeakMap,
                l = () => {},
                s = l(),
                c = Object,
                d = e => e === s,
                f = e => "function" == typeof e,
                g = (e, t) => ({ ...e,
                    ...t
                }),
                h = e => f(e.then),
                p = {},
                w = {},
                y = "undefined",
                v = typeof window != y,
                b = typeof document != y,
                m = v && "Deno" in window,
                S = () => v && typeof window.requestAnimationFrame != y,
                E = (e, t) => {
                    let r = o.get(e);
                    return [() => !d(t) && e.get(t) || p, n => {
                        if (!d(t)) {
                            let i = e.get(t);
                            t in w || (w[t] = i), r[5](t, g(i, n), i || p)
                        }
                    }, r[6], () => !d(t) && t in w ? w[t] : !d(t) && e.get(t) || p]
                },
                _ = !0,
                [O, R] = v && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [l, l],
                k = {
                    initFocus: e => (b && document.addEventListener("visibilitychange", e), O("focus", e), () => {
                        b && document.removeEventListener("visibilitychange", e), R("focus", e)
                    }),
                    initReconnect: e => {
                        let t = () => {
                                _ = !0, e()
                            },
                            r = () => {
                                _ = !1
                            };
                        return O("online", t), O("offline", r), () => {
                            R("online", t), R("offline", r)
                        }
                    }
                },
                L = !i.useId,
                T = !v || m,
                V = e => S() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                C = T ? i.useEffect : i.useLayoutEffect,
                D = "undefined" != typeof navigator && navigator.connection,
                x = !T && D && (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData),
                j = new WeakMap,
                A = (e, t) => c.prototype.toString.call(e) === "[object ".concat(t, "]"),
                P = 0,
                F = e => {
                    let t, r;
                    let n = typeof e,
                        i = A(e, "Date"),
                        a = A(e, "RegExp"),
                        u = A(e, "Object");
                    if (c(e) !== e || i || a) t = i ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = j.get(e)) return t;
                        if (t = ++P + "~", j.set(e, t), Array.isArray(e)) {
                            for (r = 0, t = "@"; r < e.length; r++) t += F(e[r]) + ",";
                            j.set(e, t)
                        }
                        if (u) {
                            t = "#";
                            let n = c.keys(e).sort();
                            for (; !d(r = n.pop());) d(e[r]) || (t += r + ":" + F(e[r]) + ",");
                            j.set(e, t)
                        }
                    }
                    return t
                },
                I = e => {
                    if (f(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? F(e) : "", t]
                },
                M = 0,
                W = () => ++M;
            async function N() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let [n, i, a, u] = t, l = g({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof u ? {
                    revalidate: u
                } : u || {}), c = l.populateCache, p = l.rollbackOnError, w = l.optimisticData, y = e => "function" == typeof p ? p(e) : !1 !== p, v = l.throwOnError;
                if (f(i)) {
                    let e = [];
                    for (let t of n.keys()) !/^\$(inf|sub)\$/.test(t) && i(n.get(t)._k) && e.push(t);
                    return Promise.all(e.map(b))
                }
                return b(i);
                async function b(e) {
                    let r;
                    let [i] = I(e);
                    if (!i) return;
                    let [u, g] = E(n, i), [p, b, m, S] = o.get(n), _ = () => {
                        let t = p[i];
                        return (f(l.revalidate) ? l.revalidate(u().data, e) : !1 !== l.revalidate) && (delete m[i], delete S[i], t && t[0]) ? t[0](2).then(() => u().data) : u().data
                    };
                    if (t.length < 3) return _();
                    let O = a,
                        R = W();
                    b[i] = [R, 0];
                    let k = !d(w),
                        L = u(),
                        T = L.data,
                        V = L._c,
                        C = d(V) ? T : V;
                    if (k && g({
                            data: w = f(w) ? w(C, T) : w,
                            _c: C
                        }), f(O)) try {
                        O = O(C)
                    } catch (e) {
                        r = e
                    }
                    if (O && h(O)) {
                        if (O = await O.catch(e => {
                                r = e
                            }), R !== b[i][0]) {
                            if (r) throw r;
                            return O
                        }
                        r && k && y(r) && (c = !0, g({
                            data: C,
                            _c: s
                        }))
                    }
                    if (c && !r && (f(c) ? g({
                            data: c(O, C),
                            error: s,
                            _c: s
                        }) : g({
                            data: O,
                            error: s,
                            _c: s
                        })), b[i][1] = W(), Promise.resolve(_()).then(() => {
                            g({
                                _c: s
                            })
                        }), r) {
                        if (v) throw r;
                        return
                    }
                    return O
                }
            }
            let $ = (e, t) => {
                    for (let r in e) e[r][0] && e[r][0](t)
                },
                q = (e, t) => {
                    if (!o.has(e)) {
                        let r = g(k, t),
                            n = {},
                            i = N.bind(s, e),
                            a = l,
                            u = {},
                            c = (e, t) => {
                                let r = u[e] || [];
                                return u[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            d = (t, r, n) => {
                                e.set(t, r);
                                let i = u[t];
                                if (i)
                                    for (let e of i) e(r, n)
                            },
                            f = () => {
                                if (!o.has(e) && (o.set(e, [n, {}, {}, {}, i, d, c]), !T)) {
                                    let t = r.initFocus(setTimeout.bind(s, $.bind(s, n, 0))),
                                        i = r.initReconnect(setTimeout.bind(s, $.bind(s, n, 1)));
                                    a = () => {
                                        t && t(), i && i(), o.delete(e)
                                    }
                                }
                            };
                        return f(), [e, i, f, a]
                    }
                    return [e, o.get(e)[4]]
                },
                [J, U] = q(new Map),
                z = g({
                    onLoadingSlow: l,
                    onSuccess: l,
                    onError: l,
                    onErrorRetry: (e, t, r, n, i) => {
                        let a = r.errorRetryCount,
                            u = i.retryCount,
                            o = ~~((Math.random() + .5) * (1 << (u < 8 ? u : 8))) * r.errorRetryInterval;
                        (d(a) || !(u > a)) && setTimeout(n, o, i)
                    },
                    onDiscarded: l,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: x ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: x ? 5e3 : 3e3,
                    compare: function e(t, r) {
                        var n, i;
                        if (t === r) return !0;
                        if (t && r && (n = t.constructor) === r.constructor) {
                            if (n === Date) return t.getTime() === r.getTime();
                            if (n === RegExp) return t.toString() === r.toString();
                            if (n === Array) {
                                if ((i = t.length) === r.length)
                                    for (; i-- && e(t[i], r[i]););
                                return -1 === i
                            }
                            if (!n || "object" == typeof t) {
                                for (n in i = 0, t)
                                    if (u.call(t, n) && ++i && !u.call(r, n) || !(n in r) || !e(t[n], r[n])) return !1;
                                return Object.keys(r).length === i
                            }
                        }
                        return t != t && r != r
                    },
                    isPaused: () => !1,
                    cache: J,
                    mutate: U,
                    fallback: {}
                }, {
                    isOnline: () => _,
                    isVisible: () => {
                        let e = b && document.visibilityState;
                        return d(e) || "hidden" !== e
                    }
                }),
                B = (e, t) => {
                    let r = g(e, t);
                    if (t) {
                        let {
                            use: n,
                            fallback: i
                        } = e, {
                            use: a,
                            fallback: u
                        } = t;
                        n && a && (r.use = n.concat(a)), i && u && (r.fallback = g(i, u))
                    }
                    return r
                },
                G = (0, i.createContext)({}),
                H = v && window.__SWR_DEVTOOLS_USE__,
                K = H ? window.__SWR_DEVTOOLS_USE__ : [],
                Q = e => f(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                X = () => g(z, (0, i.useContext)(G)),
                Y = K.concat(e => (t, r, n) => {
                    let i = r && ((...e) => {
                        let [n] = I(t), [, , , i] = o.get(J);
                        if (n.startsWith("$inf$")) return r(...e);
                        let a = i[n];
                        return d(a) ? r(...e) : (delete i[n], a)
                    });
                    return e(t, i, n)
                }),
                Z = (e, t, r) => {
                    let n = t[e] || (t[e] = []);
                    return n.push(r), () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1], n.pop())
                    }
                };
            H && (window.__SWR_DEVTOOLS_REACT__ = i);
            let ee = () => {};
            ee(), new WeakMap;
            let et = i.use || (e => {
                    switch (e.status) {
                        case "pending":
                            throw e;
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e.status = "pending", e.then(t => {
                                e.status = "fulfilled", e.value = t
                            }, t => {
                                e.status = "rejected", e.reason = t
                            }), e
                    }
                }),
                er = {
                    dedupe: !0
                };
            c.defineProperty(e => {
                let {
                    value: t
                } = e, r = (0, i.useContext)(G), n = f(t), a = (0, i.useMemo)(() => n ? t(r) : t, [n, r, t]), u = (0, i.useMemo)(() => n ? a : B(r, a), [n, r, a]), o = a && a.provider, l = (0, i.useRef)(s);
                o && !l.current && (l.current = q(o(u.cache || J), a));
                let c = l.current;
                return c && (u.cache = c[0], u.mutate = c[1]), C(() => {
                    if (c) return c[2] && c[2](), c[3]
                }, []), (0, i.createElement)(G.Provider, g(e, {
                    value: u
                }))
            }, "defaultValue", {
                value: z
            });
            let en = (n = (e, t, r) => {
                let {
                    cache: n,
                    compare: u,
                    suspense: l,
                    fallbackData: c,
                    revalidateOnMount: p,
                    revalidateIfStale: w,
                    refreshInterval: y,
                    refreshWhenHidden: v,
                    refreshWhenOffline: b,
                    keepPreviousData: m
                } = r, [S, _, O, R] = o.get(n), [k, D] = I(e), x = (0, i.useRef)(!1), j = (0, i.useRef)(!1), A = (0, i.useRef)(k), P = (0, i.useRef)(t), F = (0, i.useRef)(r), M = () => F.current, $ = () => M().isVisible() && M().isOnline(), [q, J, U, z] = E(n, k), B = (0, i.useRef)({}).current, G = d(c) ? d(r.fallback) ? s : r.fallback[k] : c, H = (e, t) => {
                    for (let r in B)
                        if ("data" === r) {
                            if (!u(e[r], t[r]) && (!d(e[r]) || !u(eu, t[r]))) return !1
                        } else if (t[r] !== e[r]) return !1;
                    return !0
                }, K = (0, i.useMemo)(() => {
                    let e = !!k && !!t && (d(p) ? !M().isPaused() && !l && !1 !== w : p),
                        r = t => {
                            let r = g(t);
                            return (delete r._k, e) ? {
                                isValidating: !0,
                                isLoading: !0,
                                ...r
                            } : r
                        },
                        n = q(),
                        i = z(),
                        a = r(n),
                        u = n === i ? a : r(i),
                        o = a;
                    return [() => {
                        let e = r(q());
                        return H(e, o) ? (o.data = e.data, o.isLoading = e.isLoading, o.isValidating = e.isValidating, o.error = e.error, o) : (o = e, e)
                    }, () => u]
                }, [n, k]), Q = (0, a.useSyncExternalStore)((0, i.useCallback)(e => U(k, (t, r) => {
                    H(r, t) || e()
                }), [n, k]), K[0], K[1]), X = !x.current, Y = S[k] && S[k].length > 0, ee = Q.data, en = d(ee) ? G && h(G) ? et(G) : G : ee, ei = Q.error, ea = (0, i.useRef)(en), eu = m ? d(ee) ? d(ea.current) ? en : ea.current : ee : en, eo = (!Y || !!d(ei)) && (X && !d(p) ? p : !M().isPaused() && (l ? !d(en) && w : d(en) || w)), el = !!(k && t && X && eo), es = d(Q.isValidating) ? el : Q.isValidating, ec = d(Q.isLoading) ? el : Q.isLoading, ed = (0, i.useCallback)(async e => {
                    let t, n;
                    let i = P.current;
                    if (!k || !i || j.current || M().isPaused()) return !1;
                    let a = !0,
                        o = e || {},
                        l = !O[k] || !o.dedupe,
                        c = () => L ? !j.current && k === A.current && x.current : k === A.current,
                        g = {
                            isValidating: !1,
                            isLoading: !1
                        },
                        h = () => {
                            J(g)
                        },
                        p = () => {
                            let e = O[k];
                            e && e[1] === n && delete O[k]
                        },
                        w = {
                            isValidating: !0
                        };
                    d(q().data) && (w.isLoading = !0);
                    try {
                        if (l && (J(w), r.loadingTimeout && d(q().data) && setTimeout(() => {
                                a && c() && M().onLoadingSlow(k, r)
                            }, r.loadingTimeout), O[k] = [i(D), W()]), [t, n] = O[k], t = await t, l && setTimeout(p, r.dedupingInterval), !O[k] || O[k][1] !== n) return l && c() && M().onDiscarded(k), !1;
                        g.error = s;
                        let e = _[k];
                        if (!d(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return h(), l && c() && M().onDiscarded(k), !1;
                        let o = q().data;
                        g.data = u(o, t) ? o : t, l && c() && M().onSuccess(t, k, r)
                    } catch (r) {
                        p();
                        let e = M(),
                            {
                                shouldRetryOnError: t
                            } = e;
                        !e.isPaused() && (g.error = r, l && c() && (e.onError(r, k, e), (!0 === t || f(t) && t(r)) && (!M().revalidateOnFocus || !M().revalidateOnReconnect || $()) && e.onErrorRetry(r, k, e, e => {
                            let t = S[k];
                            t && t[0] && t[0](3, e)
                        }, {
                            retryCount: (o.retryCount || 0) + 1,
                            dedupe: !0
                        })))
                    }
                    return a = !1, h(), !0
                }, [k, n]), ef = (0, i.useCallback)((...e) => N(n, A.current, ...e), []);
                if (C(() => {
                        P.current = t, F.current = r, d(ee) || (ea.current = ee)
                    }), C(() => {
                        if (!k) return;
                        let e = ed.bind(s, er),
                            t = 0,
                            r = Z(k, S, (r, n = {}) => {
                                if (0 == r) {
                                    let r = Date.now();
                                    M().revalidateOnFocus && r > t && $() && (t = r + M().focusThrottleInterval, e())
                                } else if (1 == r) M().revalidateOnReconnect && $() && e();
                                else if (2 == r) return ed();
                                else if (3 == r) return ed(n)
                            });
                        return j.current = !1, A.current = k, x.current = !0, J({
                            _k: D
                        }), eo && (d(en) || T ? e() : V(e)), () => {
                            j.current = !0, r()
                        }
                    }, [k]), C(() => {
                        let e;

                        function t() {
                            let t = f(y) ? y(q().data) : y;
                            t && -1 !== e && (e = setTimeout(r, t))
                        }

                        function r() {
                            !q().error && (v || M().isVisible()) && (b || M().isOnline()) ? ed(er).then(t) : t()
                        }
                        return t(), () => {
                            e && (clearTimeout(e), e = -1)
                        }
                    }, [y, v, b, k]), (0, i.useDebugValue)(eu), l && d(en) && k) {
                    if (!L && T) throw Error("Fallback data is required when using Suspense in SSR.");
                    P.current = t, F.current = r, j.current = !1;
                    let e = R[k];
                    if (d(e) || et(ef(e)), d(ei)) {
                        let e = ed(er);
                        d(eu) || (e.status = "fulfilled", e.value = !0), et(e)
                    } else throw ei
                }
                return {
                    mutate: ef,
                    get data() {
                        return B.data = !0, eu
                    },
                    get error() {
                        return B.error = !0, ei
                    },
                    get isValidating() {
                        return B.isValidating = !0, es
                    },
                    get isLoading() {
                        return B.isLoading = !0, ec
                    }
                }
            }, function(...e) {
                let t = X(),
                    [r, i, a] = Q(e),
                    u = B(t, a),
                    o = n,
                    {
                        use: l
                    } = u,
                    s = (l || []).concat(Y);
                for (let e = s.length; e--;) o = s[e](o);
                return o(r, i || u.fetcher || null, u)
            })
        }
    }
]);