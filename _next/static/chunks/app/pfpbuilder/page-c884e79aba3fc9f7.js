(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90], {
        1664: (e, a, l) => {
            Promise.resolve().then(l.bind(l, 4145)), Promise.resolve().then(l.bind(l, 6222)), Promise.resolve().then(l.bind(l, 6100))
        },
        6100: (e, a, l) => {
            "use strict";
            l.d(a, {
                PfpBuilder: () => x
            });
            var r = l(5155),
                t = l(2115),
                s = l(5565),
                i = l(8094),
                n = l(3478),
                o = l(5683);
            let d = [{
                    id: "background",
                    name: "Background",
                    required: !0
                }, {
                    id: "fur",
                    name: "Fur",
                    required: !0
                }, {
                    id: "clothes",
                    name: "Clothes",
                    required: !1
                }, {
                    id: "mouth",
                    name: "Mouth",
                    required: !0
                }, {
                    id: "eyes",
                    name: "Eyes",
                    required: !0
                }, {
                    id: "eye_accessories",
                    name: "Eye Accessories",
                    required: !1
                }, {
                    id: "trees",
                    name: "Trees",
                    required: !0
                }, {
                    id: "hats",
                    name: "Hats",
                    required: !1
                }],
                c = ["background", "fur", "outline", "clothes", "mouth", "eyes", "eye_accessories", "trees", "hats"],
                u = e => fetch(e).then(e => e.json());

            function x() {
                let [e, a] = (0, t.useState)("background"), [l, s] = (0, t.useState)({}), n = (0, t.useRef)(null), o = (0, t.useRef)(null), x = (0, t.useRef)(null), h = (0, t.useRef)({}), {
                    data: m = {},
                    error: b,
                    isLoading: f
                } = (0, i.Ay)("/data/pfp-assets.json", u);
                (0, t.useEffect)(() => {
                    localStorage.setItem("pfpBuilderSelectedTab", e)
                }, [e]), (0, t.useEffect)(() => {
                    var e;
                    if (!m || 0 === Object.keys(m).length) return;
                    let a = {};
                    d.forEach(e => {
                        var l;
                        e.required && (null === (l = m[e.id]) || void 0 === l ? void 0 : l[0]) && (a[e.id] = m[e.id][0].path)
                    }), (null === (e = m.outline) || void 0 === e ? void 0 : e[0]) && (a.outline = m.outline[0].path), s(a)
                }, [m]);
                let v = (0, t.useMemo)(() => d.reduce((e, a) => {
                        var l;
                        let r = (null === (l = m[a.id]) || void 0 === l ? void 0 : l.length) || 0;
                        return e * (a.required ? Math.max(r, 1) : r + 1)
                    }, 1), [m]),
                    y = (0, t.useMemo)(() => v.toLocaleString(), [v]);
                (0, t.useLayoutEffect)(() => {
                    x.current && (x.current.scrollTop = h.current[e] || 0)
                }, [e, l]);
                let w = (0, t.useCallback)((a, l) => {
                        var r;
                        h.current[e] = (null === (r = x.current) || void 0 === r ? void 0 : r.scrollTop) || 0, s(e => ({ ...e,
                            [a]: l
                        }))
                    }, [e]),
                    j = (0, t.useCallback)(l => {
                        var r;
                        h.current[e] = (null === (r = x.current) || void 0 === r ? void 0 : r.scrollTop) || 0, a(l)
                    }, [e]),
                    N = (0, t.useCallback)(async () => {
                        if (!n.current) return;
                        o.current || (o.current = document.createElement("canvas"), o.current.width = 860, o.current.height = 860);
                        let e = o.current,
                            a = e.getContext("2d");
                        if (!a) return;
                        let r = await Promise.all(c.map(e => {
                            let a = l[e];
                            return a ? new Promise(e => {
                                let l = new window.Image;
                                l.crossOrigin = "anonymous", l.src = a, l.onload = () => e(l), l.onerror = a => {
                                    console.error("Error loading image:", a), e(null)
                                }
                            }) : null
                        }));
                        a.clearRect(0, 0, e.width, e.height), r.forEach(e => {
                            e && a.drawImage(e, 0, 0)
                        });
                        let t = document.createElement("a");
                        t.download = "treeincat-pfp.png", t.href = e.toDataURL("image/png"), t.click()
                    }, [l]),
                    k = (0, t.useCallback)(() => {
                        var a;
                        h.current[e] = (null === (a = x.current) || void 0 === a ? void 0 : a.scrollTop) || 0;
                        let r = { ...l
                        };
                        d.forEach(e => {
                            let a = m[e.id] || [],
                                l = e.required ? a : [null, ...a];
                            if (l.length > 0) {
                                var t;
                                let a = Math.floor(Math.random() * l.length);
                                r[e.id] = (null === (t = l[a]) || void 0 === t ? void 0 : t.path) || null
                            }
                        }), r.outline = l.outline, s(r)
                    }, [m, l, e]);
                return f ? (0, r.jsxs)("div", {
                    className: "max-w-7xl mx-auto p-4 md:p-6 lg:flex lg:gap-8",
                    children: [(0, r.jsx)("div", {
                        className: "lg:w-5/12 lg:sticky lg:top-6 lg:self-start",
                        children: (0, r.jsxs)("div", {
                            className: "p-6 rounded-2xl bg-neutral-200 bg-opacity-90 animate-pulse",
                            children: [(0, r.jsx)("div", {
                                className: "rounded-xl mb-6 bg-gray-300 aspect-square w-full max-w-[500px] mx-auto"
                            }), (0, r.jsxs)("div", {
                                className: "flex gap-4 mb-6 px-4",
                                children: [(0, r.jsx)("div", {
                                    className: "flex-1 py-4 bg-gray-300 rounded-full h-14"
                                }), (0, r.jsx)("div", {
                                    className: "flex-1 py-4 bg-gray-300 rounded-full h-14"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "text-center mb-4 bg-gray-300 h-8 rounded"
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "lg:w-7/12 mt-6 lg:mt-0",
                        children: [(0, r.jsx)("div", {
                            className: "p-4 rounded-2xl bg-neutral-200 bg-opacity-90 lg:mb-4 animate-pulse",
                            children: (0, r.jsx)("div", {
                                className: "flex flex-wrap gap-4 justify-center",
                                children: d.map((e, a) => (0, r.jsx)("div", {
                                    className: "px-6 py-3 rounded-full bg-gray-300 h-10 w-24"
                                }, a))
                            })
                        }), (0, r.jsx)("div", {
                            className: "p-4 rounded-2xl bg-neutral-200 bg-opacity-80 min-h-[700px]",
                            children: (0, r.jsx)("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-4 pb-4",
                                children: [...Array(6)].map((e, a) => (0, r.jsx)("div", {
                                    className: "aspect-square bg-gray-300 rounded-xl"
                                }, a))
                            })
                        })]
                    })]
                }) : b ? (0, r.jsx)("div", {
                    className: "flex items-center justify-center h-screen",
                    children: "Error loading assets. Please try again later."
                }) : (0, r.jsxs)("div", {
                    className: "max-w-7xl mx-auto p-4 md:p-6 lg:flex lg:gap-8",
                    children: [(0, r.jsx)(p, {
                        selectedAssets: l,
                        previewRef: n,
                        handleRandomize: k,
                        downloadImage: N,
                        formattedCombinations: y
                    }), (0, r.jsx)(g, {
                        assets: m,
                        selectedTab: e,
                        selectedAssets: l,
                        scrollContainerRef: x,
                        handleSelectTab: j,
                        handleSelectAsset: w
                    })]
                })
            }
            let p = t.memo(e => {
                    let {
                        selectedAssets: a,
                        previewRef: l,
                        handleRandomize: t,
                        downloadImage: i,
                        formattedCombinations: o
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "lg:w-6/12 lg:sticky lg:top-6 lg:self-start",
                        children: (0, r.jsxs)(n.P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .3
                            },
                            className: "p-4 rounded-2xl bg-neutral-200 bg-opacity-90",
                            style: {
                                border: "3px solid #fff",
                                borderRadius: "16px",
                                boxShadow: "0 0 0 2px #4a3728, 4px 4px 0 0 #4a3728, 0 0 20px rgba(0,0,0,0.2)"
                            },
                            children: [(0, r.jsx)("div", {
                                className: "border-2 border-black rounded-xl shadow-xl mb-4 bg-white/50 p-2",
                                children: (0, r.jsxs)(n.P.div, {
                                    ref: l,
                                    className: "relative bg-white rounded-lg overflow-hidden mx-auto",
                                    style: {
                                        aspectRatio: "1/1",
                                        width: "100%",
                                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)"
                                    },
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute inset-0 opacity-5",
                                        style: {
                                            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                                            backgroundSize: "20px 20px"
                                        }
                                    }), c.map(e => a[e] && (0, r.jsx)(s.default, {
                                        src: a[e],
                                        alt: "".concat(e, " layer"),
                                        fill: !0,
                                        className: "object-cover",
                                        priority: !0,
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                        }
                                    }, e))]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "lg:static lg:z-0",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex gap-4 mb-4 lg:my-2 px-2",
                                    children: [(0, r.jsx)(n.P.button, {
                                        onClick: t,
                                        className: "flex-1 py-3 bg-indigo-300 text-black font-chalk text-xl rounded-full border-2 border-black transition-transform shadow-lg hover:bg-indigo-400",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: "Randomize"
                                    }), (0, r.jsx)(n.P.button, {
                                        onClick: i,
                                        className: "flex-1 py-3 bg-green-300 text-black font-chalk text-xl rounded-full border-2 border-black transition-transform shadow-lg hover:bg-green-400",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: "Download"
                                    })]
                                }), (0, r.jsx)(n.P.div, {
                                    className: "text-center mb-2",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    children: (0, r.jsxs)("p", {
                                        className: "font-chalk text-lg text-black",
                                        children: [o, " unique combinations possible!"]
                                    })
                                })]
                            })]
                        })
                    })
                }),
                g = t.memo(e => {
                    var a, l;
                    let {
                        assets: t,
                        selectedTab: i,
                        selectedAssets: u,
                        scrollContainerRef: x,
                        handleSelectTab: p,
                        handleSelectAsset: g
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "lg:w-6/12 mt-8 lg:mt-0 lg:flex lg:flex-col",
                        children: [(0, r.jsx)(n.P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                delay: .1
                            },
                            className: "p-4 rounded-2xl bg-neutral-200 bg-opacity-90 lg:mb-4",
                            style: {
                                border: "3px solid #fff",
                                borderRadius: "16px",
                                boxShadow: "0 0 0 2px #4a3728, 4px 4px 0 0 #4a3728, 0 0 20px rgba(0,0,0,0.2)"
                            },
                            children: (0, r.jsx)("div", {
                                className: "flex flex-wrap gap-3 justify-center",
                                children: d.map(e => (0, r.jsx)(n.P.button, {
                                    onClick: () => p(e.id),
                                    className: "px-6 py-3 rounded-full font-chalk text-xl transition border-2 border-black ".concat(i === e.id ? "bg-yellow-300 text-black shadow-lg scale-105" : "bg-blue-100 text-black hover:bg-blue-200"),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: e.name
                                }, e.id))
                            })
                        }), (0, r.jsx)(n.P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                delay: .2
                            },
                            ref: x,
                            className: "mt-4 p-4 rounded-2xl bg-neutral-200 bg-opacity-80 flex-1 overflow-y-auto",
                            style: {
                                border: "3px solid #fff",
                                borderRadius: "16px",
                                boxShadow: "0 0 0 2px #4a3728, 4px 4px 0 0 #4a3728, 0 0 20px rgba(0,0,0,0.2)",
                                minHeight: "700px",
                                maxHeight: "900px",
                                overscrollBehavior: "contain"
                            },
                            children: (0, r.jsx)(o.N, {
                                mode: "wait",
                                children: (0, r.jsxs)(n.P.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-4",
                                    children: [!(null === (a = d.find(e => e.id === i)) || void 0 === a ? void 0 : a.required) && (0, r.jsx)(n.P.button, {
                                        onClick: () => g(i, null),
                                        className: "aspect-square h-auto flex items-center justify-center rounded-xl border-3 transition-all ".concat(null === u[i] ? "border-blue-600 bg-blue-50 shadow-lg" : "border-black border-dashed bg-gray-100 hover:bg-gray-200"),
                                        whileHover: {
                                            scale: 1.03
                                        },
                                        whileTap: {
                                            scale: .97
                                        },
                                        children: (0, r.jsx)("span", {
                                            className: "text-black text-lg font-bold",
                                            children: "None"
                                        })
                                    }), null === (l = t[i]) || void 0 === l ? void 0 : l.map(e => {
                                        let a = c.map(a => ({
                                            path: a === i ? e.path : u[a],
                                            zIndex: c.indexOf(a)
                                        }));
                                        return (0, r.jsxs)(n.P.button, {
                                            onClick: a => {
                                                g(i, e.path), a.currentTarget.blur()
                                            },
                                            className: "relative overflow-hidden rounded-xl transition-all bg-white ".concat(u[i] === e.path ? "ring-4 ring-blue-500 shadow-xl scale-105 z-10" : "border-2 border-black hover:shadow-xl", " aspect-square"),
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            whileTap: {
                                                scale: .97
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                className: "w-full h-full",
                                                children: [(0, r.jsx)("div", {
                                                    className: "absolute inset-0 opacity-5",
                                                    style: {
                                                        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                                                        backgroundSize: "20px 20px"
                                                    }
                                                }), a.map((e, a) => e.path && (0, r.jsx)(s.default, {
                                                    src: e.path,
                                                    alt: "".concat(i, " preview"),
                                                    fill: !0,
                                                    className: "object-cover",
                                                    loading: a < 2 ? "eager" : "lazy",
                                                    style: {
                                                        position: "absolute",
                                                        zIndex: e.zIndex,
                                                        imageRendering: "crisp-edges"
                                                    }
                                                }, "preview-".concat(a, "-").concat(e.path)))]
                                            }), u[i] === e.path && (0, r.jsx)("div", {
                                                className: "absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",
                                                children: (0, r.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5 text-white",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: (0, r.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            })]
                                        }, e.path)
                                    })]
                                }, i)
                            })
                        })]
                    })
                })
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [875, 94, 328, 214, 441, 517, 358], () => a(1664)), _N_E = e.O()
    }
]);