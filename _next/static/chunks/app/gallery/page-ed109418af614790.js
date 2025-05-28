(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [235], {
        8555: (a, e, t) => {
            Promise.resolve().then(t.bind(t, 4068)), Promise.resolve().then(t.bind(t, 5524)), Promise.resolve().then(t.bind(t, 104)), Promise.resolve().then(t.bind(t, 4145)), Promise.resolve().then(t.bind(t, 6222))
        },
        6046: (a, e, t) => {
            "use strict";
            var r = t(6658);
            t.o(r, "useRouter") && t.d(e, {
                useRouter: function() {
                    return r.useRouter
                }
            }), t.o(r, "useSearchParams") && t.d(e, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            })
        },
        4068: (a, e, t) => {
            "use strict";
            t.d(e, {
                default: () => b
            });
            var r = t(5155),
                o = t(8803),
                n = t.n(o),
                s = t(2115),
                i = t(5565),
                l = t(2055),
                d = t(6046);

            function b() {
                var a;
                let e = (0, d.useRouter)(),
                    t = (0, d.useSearchParams)(),
                    o = t.get("image"),
                    [b, g] = (0, s.useState)("all"),
                    m = (0, s.useRef)(null),
                    [c, f] = (0, s.useState)(!0),
                    x = (0, s.useMemo)(() => [...l.z].sort((a, e) => new Date(e.createdAt).getTime() - new Date(a.createdAt).getTime()), []);
                (0, s.useEffect)(() => {
                    if (o) {
                        let a = x.find(a => a.src === o);
                        (null == a ? void 0 : a.type) === "video" && f(!0)
                    }
                }, [o, x]);
                let p = a => {
                        let r = new URLSearchParams(t);
                        a ? r.set("image", a) : r.delete("image"), e.replace("/gallery?".concat(r.toString()), {
                            scroll: !1
                        })
                    },
                    u = (0, s.useMemo)(() => {
                        let a = x;
                        return "all" !== b && (a = x.filter(a => a.category === b)), a
                    }, [b, x]),
                    h = u.findIndex(a => a.src === o),
                    [w, k] = (0, s.useState)([]);
                return (0, s.useEffect)(() => {
                    k(x.map(() => 10 * Math.random() - 5))
                }, [x]), (0, r.jsxs)("div", {
                    className: "jsx-41d29de9816c37f8 min-h-screen animated-gradient py-20 px-4 relative overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "jsx-41d29de9816c37f8 absolute top-0 left-0 w-full h-24 z-20 overflow-hidden",
                        children: (0, r.jsx)("div", {
                            className: "jsx-41d29de9816c37f8 wave absolute top-0 left-0 w-full h-full"
                        })
                    }), (0, r.jsx)("div", {
                        className: "jsx-41d29de9816c37f8 my-20 text-center",
                        children: (0, r.jsxs)("div", {
                            className: "jsx-41d29de9816c37f8 flex justify-center gap-4 mt-6",
                            children: [(0, r.jsx)("button", {
                                onClick: () => g("all"),
                                className: "jsx-41d29de9816c37f8 " + "magical-button filter-btn ".concat("all" === b ? "bg-purple-400 border-2 border-white" : "bg-black/80"),
                                children: "✨ All"
                            }), (0, r.jsx)("button", {
                                onClick: () => g("official"),
                                className: "jsx-41d29de9816c37f8 " + "magical-button filter-btn ".concat("official" === b ? "bg-blue-400 border-2 border-white" : "bg-black/80"),
                                children: "\uD83C\uDF33 Official"
                            }), (0, r.jsx)("button", {
                                onClick: () => g("community"),
                                className: "jsx-41d29de9816c37f8 " + "magical-button filter-btn ".concat("community" === b ? "bg-green-400 border-2 border-white" : "bg-black/80"),
                                children: "\uD83C\uDFA8 Community"
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "jsx-41d29de9816c37f8 mx-auto w-[95%] md:w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                        children: u.map((a, e) => (0, r.jsx)("div", {
                            onClick: () => p(a.src),
                            style: {
                                "--rot": "".concat(w[e], "deg")
                            },
                            className: "jsx-41d29de9816c37f8 group cursor-pointer",
                            children: "video" === a.type ? (0, r.jsx)("div", {
                                style: {
                                    transform: "rotate(var(--rot))"
                                },
                                className: "jsx-41d29de9816c37f8 relative aspect-square transition-transform duration-300 image-tile shadow-md",
                                children: (0, r.jsx)("video", {
                                    src: a.src,
                                    muted: !0,
                                    loop: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    className: "jsx-41d29de9816c37f8 w-full h-full object-cover rounded-[13px]"
                                })
                            }) : (0, r.jsx)("div", {
                                style: {
                                    transform: "rotate(var(--rot))"
                                },
                                className: "jsx-41d29de9816c37f8 relative aspect-square transition-transform duration-300 image-tile shadow-md",
                                children: (0, r.jsx)(i.default, {
                                    src: a.src,
                                    alt: a.alt,
                                    fill: !0,
                                    loading: "lazy",
                                    className: "object-cover rounded-[13px]",
                                    sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                })
                            })
                        }, a.src))
                    }), o && (0, r.jsx)("div", {
                        onClick: () => p(),
                        className: "jsx-41d29de9816c37f8 lightbox-overlay fixed inset-0 z-50 flex flex-col items-center justify-center p-4",
                        children: (0, r.jsxs)("div", {
                            onClick: a => a.stopPropagation(),
                            className: "jsx-41d29de9816c37f8 lightbox-container relative p-4 max-w-[90%] md:max-w-[1200px] w-full",
                            children: [(0, r.jsx)("div", {
                                className: "jsx-41d29de9816c37f8 relative aspect-video w-full",
                                children: (null === (a = x.find(a => a.src === o)) || void 0 === a ? void 0 : a.type) === "video" ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("video", {
                                        ref: m,
                                        src: o,
                                        controls: !0,
                                        autoPlay: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        muted: c,
                                        className: "jsx-41d29de9816c37f8 w-full h-full object-contain rounded-lg"
                                    }), c && (0, r.jsx)("button", {
                                        onClick: () => {
                                            f(!1), m.current && (m.current.muted = !1)
                                        },
                                        className: "jsx-41d29de9816c37f8 unmute-btn",
                                        children: "Unmute"
                                    })]
                                }) : (0, r.jsx)(i.default, {
                                    src: o,
                                    alt: "Selected content",
                                    fill: !0,
                                    className: "object-contain rounded-lg",
                                    loading: "lazy"
                                })
                            }), (0, r.jsxs)("div", {
                                className: "jsx-41d29de9816c37f8 mt-4 flex items-center justify-between",
                                children: [(0, r.jsx)("button", {
                                    onClick: () => {
                                        if (0 === u.length || -1 === h) return;
                                        let a = (h - 1 + u.length) % u.length;
                                        p(u[a].src)
                                    },
                                    className: "jsx-41d29de9816c37f8 lightbox-btn prev-btn",
                                    children: "← Prev"
                                }), (0, r.jsx)("button", {
                                    onClick: () => {
                                        if (0 === u.length || -1 === h) return;
                                        let a = (h + 1) % u.length;
                                        p(u[a].src)
                                    },
                                    className: "jsx-41d29de9816c37f8 lightbox-btn next-btn",
                                    children: "Next →"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "jsx-41d29de9816c37f8 mt-4 flex justify-end space-x-4",
                                children: [(0, r.jsx)("button", {
                                    onClick: () => p(),
                                    className: "jsx-41d29de9816c37f8 lightbox-btn close-btn",
                                    children: "Close"
                                }), (0, r.jsx)("a", {
                                    href: o,
                                    download: !0,
                                    className: "jsx-41d29de9816c37f8 lightbox-btn download-btn",
                                    children: "Download"
                                })]
                            })]
                        })
                    }), (0, r.jsx)(n(), {
                        id: "41d29de9816c37f8",
                        children: ".animated-gradient{background:-webkit-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:-moz-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:-o-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:linear-gradient(135deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:navBgAnimation 15s ease infinite;-moz-animation:navBgAnimation 15s ease infinite;-o-animation:navBgAnimation 15s ease infinite;animation:navBgAnimation 15s ease infinite}@-webkit-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.wave{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%23000' d='M0,40 Q300,120 600,40 T1200,40 L1200,120 L0,120 Z'/%3E%3C/svg%3E\");background-repeat:repeat-x;-webkit-background-size:1200px 120px;-moz-background-size:1200px 120px;-o-background-size:1200px 120px;background-size:1200px 120px;-webkit-animation:waveAnimation 10s linear infinite;-moz-animation:waveAnimation 10s linear infinite;-o-animation:waveAnimation 10s linear infinite;animation:waveAnimation 10s linear infinite;-webkit-transform:scaley(-1);-moz-transform:scaley(-1);-ms-transform:scaley(-1);-o-transform:scaley(-1);transform:scaley(-1)}@-webkit-keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}@-moz-keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}@-o-keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}@keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}.magical-button{padding:.5rem 1.5rem;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;font-weight:600;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;position:relative;overflow:hidden;color:white;text-shadow:0 1px 1px rgba(0,0,0,.1);-webkit-box-shadow:0 3px 10px rgba(0,0,0,.2);-moz-box-shadow:0 3px 10px rgba(0,0,0,.2);box-shadow:0 3px 10px rgba(0,0,0,.2)}.magical-button::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:-webkit-linear-gradient(45deg,rgba(255,255,255,.1),rgba(255,255,255,.2));background:-moz-linear-gradient(45deg,rgba(255,255,255,.1),rgba(255,255,255,.2));background:-o-linear-gradient(45deg,rgba(255,255,255,.1),rgba(255,255,255,.2));background:linear-gradient(45deg,rgba(255,255,255,.1),rgba(255,255,255,.2));-webkit-transform:translatey(-100%);-moz-transform:translatey(-100%);-ms-transform:translatey(-100%);-o-transform:translatey(-100%);transform:translatey(-100%);-webkit-transition:-webkit-transform.3s ease;-moz-transition:-moz-transform.3s ease;-o-transition:-o-transform.3s ease;transition:-webkit-transform.3s ease;transition:-moz-transform.3s ease;transition:-o-transform.3s ease;transition:transform.3s ease}.magical-button:hover::before{-webkit-transform:translatey(0);-moz-transform:translatey(0);-ms-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}.prev-next-btn{background:-webkit-linear-gradient(45deg,#87ceeb,#98fb98);background:-moz-linear-gradient(45deg,#87ceeb,#98fb98);background:-o-linear-gradient(45deg,#87ceeb,#98fb98);background:linear-gradient(45deg,#87ceeb,#98fb98);min-width:100px;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.prev-next-btn:hover{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0 5px 15px rgba(135,206,235,.4);-moz-box-shadow:0 5px 15px rgba(135,206,235,.4);box-shadow:0 5px 15px rgba(135,206,235,.4)}.close-btn{background:-webkit-linear-gradient(45deg,#ff6b6b,#ffb6c1);background:-moz-linear-gradient(45deg,#ff6b6b,#ffb6c1);background:-o-linear-gradient(45deg,#ff6b6b,#ffb6c1);background:linear-gradient(45deg,#ff6b6b,#ffb6c1)}.close-btn:hover{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0 5px 15px rgba(255,107,107,.4);-moz-box-shadow:0 5px 15px rgba(255,107,107,.4);box-shadow:0 5px 15px rgba(255,107,107,.4)}.download-btn{background:-webkit-linear-gradient(45deg,#4caf50,#8bc34a);background:-moz-linear-gradient(45deg,#4caf50,#8bc34a);background:-o-linear-gradient(45deg,#4caf50,#8bc34a);background:linear-gradient(45deg,#4caf50,#8bc34a)}.download-btn:hover{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0 5px 15px rgba(76,175,80,.4);-moz-box-shadow:0 5px 15px rgba(76,175,80,.4);box-shadow:0 5px 15px rgba(76,175,80,.4)}.group:hover .image-tile{-webkit-transform:scale(1.1)rotate(0deg)!important;-moz-transform:scale(1.1)rotate(0deg)!important;-ms-transform:scale(1.1)rotate(0deg)!important;-o-transform:scale(1.1)rotate(0deg)!important;transform:scale(1.1)rotate(0deg)!important}.image-tile{border:3px solid#fff;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;background:-webkit-linear-gradient(45deg,rgba(255,182,193,.3)0%,rgba(144,238,144,.3)50%,rgba(173,216,230,.3)100%),url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\");background:-moz-linear-gradient(45deg,rgba(255,182,193,.3)0%,rgba(144,238,144,.3)50%,rgba(173,216,230,.3)100%),url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\");background:-o-linear-gradient(45deg,rgba(255,182,193,.3)0%,rgba(144,238,144,.3)50%,rgba(173,216,230,.3)100%),url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\");background:linear-gradient(45deg,rgba(255,182,193,.3)0%,rgba(144,238,144,.3)50%,rgba(173,216,230,.3)100%),url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\");-webkit-box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2),0 0 20px rgba(144,238,144,.3);-moz-box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2),0 0 20px rgba(144,238,144,.3);box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2),0 0 20px rgba(144,238,144,.3);-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.image-tile::before{content:\"\";position:absolute;inset:-5px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;border:2px solid;-webkit-border-image:-webkit-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;-moz-border-image:-moz-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;-o-border-image:-o-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:-webkit-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:-moz-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:-o-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;-webkit-animation:border-glow 3s linear infinite;-moz-animation:border-glow 3s linear infinite;-o-animation:border-glow 3s linear infinite;animation:border-glow 3s linear infinite;z-index:-1}@-webkit-keyframes border-glow{0%{opacity:.8;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg)}50%{opacity:1;-webkit-filter:hue-rotate(180deg);filter:hue-rotate(180deg)}100%{opacity:.8;-webkit-filter:hue-rotate(360deg);filter:hue-rotate(360deg)}}@-moz-keyframes border-glow{0%{opacity:.8;filter:hue-rotate(0deg)}50%{opacity:1;filter:hue-rotate(180deg)}100%{opacity:.8;filter:hue-rotate(360deg)}}@-o-keyframes border-glow{0%{opacity:.8;filter:hue-rotate(0deg)}50%{opacity:1;filter:hue-rotate(180deg)}100%{opacity:.8;filter:hue-rotate(360deg)}}@keyframes border-glow{0%{opacity:.8;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg)}50%{opacity:1;-webkit-filter:hue-rotate(180deg);filter:hue-rotate(180deg)}100%{opacity:.8;-webkit-filter:hue-rotate(360deg);filter:hue-rotate(360deg)}}.image-tile img{-webkit-border-radius:13px;-moz-border-radius:13px;border-radius:13px}.filter-btn{padding:.5rem 1.5rem;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;font-weight:600;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);-webkit-box-shadow:0 2px 8px rgba(0,0,0,.1);-moz-box-shadow:0 2px 8px rgba(0,0,0,.1);box-shadow:0 2px 8px rgba(0,0,0,.1)}.filter-btn:hover{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0 4px 12px rgba(0,0,0,.2);-moz-box-shadow:0 4px 12px rgba(0,0,0,.2);box-shadow:0 4px 12px rgba(0,0,0,.2)}.lightbox-overlay{background:rgba(0,0,0,.9)}.lightbox-container{background:#fff;border:3px solid#fff;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;position:relative;-webkit-box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2),0 0 20px rgba(144,238,144,.3);-moz-box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2),0 0 20px rgba(144,238,144,.3);box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2),0 0 20px rgba(144,238,144,.3)}.lightbox-container::before{content:\"\";position:absolute;inset:-5px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;border:3px solid;-webkit-border-image:-webkit-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;-moz-border-image:-moz-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;-o-border-image:-o-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:-webkit-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:-moz-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:-o-linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;border-image:linear-gradient(45deg,#87ceeb,#98fb98,#ffb6c1)1;-webkit-animation:border-glow 3s linear infinite;-moz-animation:border-glow 3s linear infinite;-o-animation:border-glow 3s linear infinite;animation:border-glow 3s linear infinite;z-index:-1}@-webkit-keyframes border-glow{0%{opacity:.8;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg)}50%{opacity:1;-webkit-filter:hue-rotate(180deg);filter:hue-rotate(180deg)}100%{opacity:.8;-webkit-filter:hue-rotate(360deg);filter:hue-rotate(360deg)}}@keyframes border-glow{0%{opacity:.8;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg)}50%{opacity:1;-webkit-filter:hue-rotate(180deg);filter:hue-rotate(180deg)}100%{opacity:.8;-webkit-filter:hue-rotate(360deg);filter:hue-rotate(360deg)}}.lightbox-btn{padding:.65rem 1.65rem;border:none;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;font-weight:600;-webkit-box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2);-moz-box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2);box-shadow:0 0 0 2px#4a3728,4px 4px 0 0#4a3728,8px 8px 0 0 rgba(74,55,40,.2);-webkit-transition:-webkit-transform.2s ease,box-shadow.2s ease;-moz-transition:-moz-transform.2s ease,box-shadow.2s ease;-o-transition:-o-transform.2s ease,box-shadow.2s ease;transition:-webkit-transform.2s ease,box-shadow.2s ease;transition:-moz-transform.2s ease,box-shadow.2s ease;transition:-o-transform.2s ease,box-shadow.2s ease;transition:transform.2s ease,box-shadow.2s ease}.lightbox-btn:hover{-webkit-transform:translate(-2px,-2px);-moz-transform:translate(-2px,-2px);-ms-transform:translate(-2px,-2px);-o-transform:translate(-2px,-2px);transform:translate(-2px,-2px);-webkit-box-shadow:0 0 0 2px#4a3728,6px 6px 0 0#4a3728,10px 10px 0 0 rgba(74,55,40,.2);-moz-box-shadow:0 0 0 2px#4a3728,6px 6px 0 0#4a3728,10px 10px 0 0 rgba(74,55,40,.2);box-shadow:0 0 0 2px#4a3728,6px 6px 0 0#4a3728,10px 10px 0 0 rgba(74,55,40,.2)}.lightbox-btn.prev-btn,.lightbox-btn.next-btn{background-color:#87ceeb;color:#fff}.lightbox-btn.close-btn{background-color:#ff6b6b;color:#fff}.lightbox-btn.download-btn{background-color:#4caf50;color:#fff}.unmute-btn{position:absolute;top:20px;left:50%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);background-color:rgba(0,0,0,.6);color:#fff;padding:.5rem 1rem;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:1.1rem;cursor:pointer;z-index:20;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}.unmute-btn:hover{background-color:rgba(0,0,0,.8)}"
                    })]
                })
            }
        },
        5524: (a, e, t) => {
            "use strict";
            t.d(e, {
                GalleryHero: () => c
            });
            var r = t(5155),
                o = t(8803),
                n = t.n(o),
                s = t(5565),
                i = t(2115);
            let l = () => (0, r.jsx)("div", {
                    className: "absolute inset-x-0 bottom-0 w-full h-auto",
                    children: (0, r.jsx)(s.default, {
                        src: "/images/gallery/gallery_background.webp",
                        alt: "Gallery Background",
                        width: 1920,
                        height: 2368,
                        className: "w-full h-auto object-cover object-bottom origin-bottom scale-150 md:scale-100",
                        priority: !0
                    })
                }),
                d = () => (0, r.jsx)("div", {
                    className: "absolute bottom-[-4vh] lg:bottom-[-8vh] xl:bottom-[-8vh] left-1/2 -translate-x-1/2 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] max-w-[600px] z-20",
                    children: (0, r.jsx)(s.default, {
                        src: "/images/gallery/TIC_gallery.webp",
                        alt: "Tree in Cat Gallery",
                        width: 800,
                        height: 600,
                        className: "w-full h-auto"
                    })
                }),
                b = () => (0, r.jsxs)("div", {
                    className: "absolute bottom-0 w-full z-30",
                    children: [(0, r.jsx)(s.default, {
                        src: "/images/gallery/grass_sm.webp",
                        alt: "Grass decoration",
                        width: 375,
                        height: 100,
                        className: "w-full h-auto lg:hidden"
                    }), (0, r.jsx)(s.default, {
                        src: "/images/gallery/grass.webp",
                        alt: "Grass decoration",
                        width: 1920,
                        height: 200,
                        className: "hidden lg:block w-full h-auto"
                    })]
                }),
                g = () => (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "absolute top-[30%] lg:top-[30%] xl:top-[25%] 2xl:top-[15%] right-[8%] w-[8vw] lg:w-[10vw] min-w-[60px] max-w-[120px] xl:max-w-[250px] rounded-full overflow-visible",
                        style: {
                            animation: "spin 9s linear infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full animate-glow-pulse",
                            style: {
                                boxShadow: "0 0 50px rgba(0, 255, 0, 0.6)",
                                filter: "brightness(1)"
                            }
                        }), (0, r.jsx)(s.default, {
                            src: "/images/gallery/planet_1.webp",
                            alt: "Planet decoration",
                            width: 600,
                            height: 600,
                            className: "w-full h-auto relative z-10"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute top-[20%] right-[30%] w-[10vw] lg:w-[12vw] max-w-[200px] rounded-full overflow-visible",
                        style: {
                            animation: "spin 8s linear infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full animate-glow-pulse",
                            style: {
                                boxShadow: "0 0 50px rgba(0, 100, 255, 0.6)",
                                filter: "brightness(1)"
                            }
                        }), (0, r.jsx)(s.default, {
                            src: "/images/gallery/planet_2.webp",
                            alt: "Planet decoration",
                            width: 600,
                            height: 600,
                            className: "w-full h-auto relative z-10"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute bottom-[70%] left-[30%] w-[12vw] lg:w-[13vw] max-w-[200px] rounded-full overflow-visible",
                        style: {
                            animation: "spin 5s linear infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full animate-glow-pulse",
                            style: {
                                boxShadow: "0 0 50px rgba(128, 0, 128, 0.6)",
                                filter: "brightness(1)"
                            }
                        }), (0, r.jsx)(s.default, {
                            src: "/images/gallery/planet_3.webp",
                            alt: "Planet decoration",
                            width: 600,
                            height: 600,
                            className: "w-full h-auto relative z-10"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute top-[15%] right-[75%] lg:right-[80%] w-[12vw] lg:w-[8vw] max-w-[200px] rounded-full overflow-visible",
                        style: {
                            animation: "spin 7s linear infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full animate-glow-pulse",
                            style: {
                                boxShadow: "0 0 50px rgba(165, 42, 42, 0.6)",
                                filter: "brightness(1)"
                            }
                        }), (0, r.jsx)(s.default, {
                            src: "/images/gallery/planet_4.webp",
                            alt: "Planet decoration",
                            width: 600,
                            height: 600,
                            className: "w-full h-auto relative z-10"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute bottom-[30%] sm:bottom-[40%] right-[55%] sm:right-[70%] w-[13vw] lg:w-[10vw] max-w-[200px] rounded-full overflow-visible",
                        style: {
                            animation: "spin 7s linear infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full animate-glow-pulse",
                            style: {
                                boxShadow: "0 0 50px rgba(255, 215, 0, 0.6)",
                                filter: "brightness(1)"
                            }
                        }), (0, r.jsx)(s.default, {
                            src: "/images/gallery/planet_5.webp",
                            alt: "Planet decoration",
                            width: 600,
                            height: 600,
                            className: "w-full h-auto relative z-10"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute top-[45%] left-[50%] w-[20vw] max-w-[90px] rounded-full overflow-visible",
                        style: {
                            animation: "spin 9s linear infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full animate-glow-pulse",
                            style: {
                                boxShadow: "0 0 50px rgba(0, 255, 255, 0.6)",
                                filter: "brightness(1)"
                            }
                        }), (0, r.jsx)(s.default, {
                            src: "/images/gallery/planet_6.webp",
                            alt: "Planet decoration",
                            width: 600,
                            height: 600,
                            className: "w-full h-auto relative z-10"
                        })]
                    })]
                }),
                m = () => ((0, i.useEffect)(() => {
                    let a = document.querySelector(".star-container");
                    if (!a) return;
                    let e = setInterval(() => {
                        let e = document.createElement("div");
                        e.className = "falling-star";
                        let t = ["rgb(127, 183, 252)", "rgb(131, 238, 110)", "rgb(255, 198, 228)", "rgb(162, 204, 255)", "rgb(102, 253, 127)"],
                            r = 100 * Math.random(),
                            o = 60 * Math.random() + 60,
                            n = 2 * Math.random() + 3,
                            s = 2 * Math.random() + 2,
                            i = t[Math.floor(Math.random() * t.length)];
                        e.style.cssText = "\n        left: ".concat(r, "%;\n        top: ").concat(-10, "%;\n        --angle: ").concat(o, "deg;\n        --star-color: ").concat(i, ";\n        width: ").concat(s, "px;\n        height: ").concat(s, "px;\n        animation-duration: ").concat(n, "s;\n        filter: \n          drop-shadow(0 0 8px ").concat(i, ")\n          drop-shadow(0 0 4px ").concat(i, ");\n      "), a.appendChild(e), setTimeout(() => e.remove(), 1e3 * n)
                    }, 1e3);
                    return () => clearInterval(e)
                }, []), (0, r.jsx)("div", {
                    className: "star-container absolute inset-0 z-[5] pointer-events-none"
                })),
                c = () => (0, r.jsxs)("section", {
                    className: "relative bg-black h-screen max-h-[650px] sm:max-h-[750px] md:max-h-[750px] lg:max-h-[850px] xl:max-screen 2xl:max-h-screen w-full overflow-hidden",
                    children: [(0, r.jsx)(l, {}), (0, r.jsx)(m, {}), (0, r.jsx)(d, {}), (0, r.jsx)(b, {}), (0, r.jsx)(g, {}), (0, r.jsx)("div", {
                        className: "absolute inset-0 flex items-center justify-center pt-[15vh] z-10",
                        children: (0, r.jsxs)("h1", {
                            className: "text-5xl md:text-8xl lg:text-10xl xl:text-[10rem] font-super-sense text-center relative top-[-15vh] sm:top-[-20vh]",
                            children: [(0, r.jsx)("span", {
                                className: "absolute inset-0 [-webkit-text-stroke:20px_#000] [text-stroke:20px_#000] text-transparent",
                                children: "GALLERY"
                            }), (0, r.jsxs)("span", {
                                className: "animate-gradient-flow bg-clip-text text-transparent relative",
                                children: ["GALLERY", (0, r.jsx)(f, {})]
                            })]
                        })
                    })]
                }),
                f = () => (0, r.jsx)(n(), {
                    id: "1c603b565f3f451e",
                    children: '@-webkit-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{from{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{from{-o-transform:rotate(0deg);transform:rotate(0deg)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.animate-gradient-flow{background-image:-webkit-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:-moz-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:-o-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:linear-gradient(to right,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-flow 4s linear infinite;-moz-animation:gradient-flow 4s linear infinite;-o-animation:gradient-flow 4s linear infinite;animation:gradient-flow 4s linear infinite;-webkit-background-clip:text;background-clip:text;display:inline-block}.falling-star{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:star-fall linear infinite;-moz-animation:star-fall linear infinite;-o-animation:star-fall linear infinite;animation:star-fall linear infinite;will-change:transform;background:transparent}.falling-star::before{content:"";position:absolute;width:200px;height:3px;background:-webkit-radial-gradient(right center,circle,var(--star-color)0%,transparent 80%),-webkit-linear-gradient(right,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);background:-moz-radial-gradient(right center,circle,var(--star-color)0%,transparent 80%),-moz-linear-gradient(right,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);background:-o-radial-gradient(right center,circle,var(--star-color)0%,transparent 80%),-o-linear-gradient(right,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);background:radial-gradient(circle at right center,var(--star-color)0%,transparent 80%),linear-gradient(to left,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);-webkit-transform-origin:right center;-moz-transform-origin:right center;-ms-transform-origin:right center;-o-transform-origin:right center;transform-origin:right center;-webkit-transform:rotate(var(--angle));-moz-transform:rotate(var(--angle));-ms-transform:rotate(var(--angle));-o-transform:rotate(var(--angle));transform:rotate(var(--angle));opacity:0;-webkit-animation:trail 2s ease-out;-moz-animation:trail 2s ease-out;-o-animation:trail 2s ease-out;animation:trail 2s ease-out;-webkit-filter:blur(2px);filter:blur(2px)}@-webkit-keyframes trail{0%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-webkit-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);-webkit-filter:brightness(1.5);filter:brightness(1.5)}100%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-webkit-filter:brightness(.5);filter:brightness(.5)}}@-moz-keyframes trail{0%{opacity:0;-moz-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-moz-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);filter:brightness(1.5)}100%{opacity:0;-moz-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);filter:brightness(.5)}}@-o-keyframes trail{0%{opacity:0;-o-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-o-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);filter:brightness(1.5)}100%{opacity:0;-o-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);filter:brightness(.5)}}@keyframes trail{0%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(0)translatey(0);-moz-transform:rotate(var(--angle))scalex(0)translatey(0);-o-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-webkit-transform:rotate(var(--angle))scalex(1)translatey(-1px);-moz-transform:rotate(var(--angle))scalex(1)translatey(-1px);-o-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);-webkit-filter:brightness(1.5);filter:brightness(1.5)}100%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-moz-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-o-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-webkit-filter:brightness(.5);filter:brightness(.5)}}@-webkit-keyframes star-fall{0%{-webkit-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-webkit-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-webkit-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@-moz-keyframes star-fall{0%{-moz-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-moz-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-moz-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@-o-keyframes star-fall{0%{-o-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-o-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-o-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@keyframes star-fall{0%{-webkit-transform:translatey(-10vh)scale(.8);-moz-transform:translatey(-10vh)scale(.8);-o-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-webkit-transform:translatey(55vh)scale(1);-moz-transform:translatey(55vh)scale(1);-o-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-webkit-transform:translatey(110vh)scale(.6);-moz-transform:translatey(110vh)scale(.6);-o-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@media(max-width:768px){.falling-star{-webkit-animation-duration:6s!important;-moz-animation-duration:6s!important;-o-animation-duration:6s!important;animation-duration:6s!important}.falling-star::before{-webkit-animation-duration:4s;-moz-animation-duration:4s;-o-animation-duration:4s;animation-duration:4s;width:150px}}'
                })
        }
    },
    a => {
        var e = e => a(a.s = e);
        a.O(0, [875, 214, 324, 441, 517, 358], () => e(8555)), _N_E = a.O()
    }
]);