"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [214], {
        4145: (e, a, n) => {
            n.d(a, {
                MobileNav: () => c
            });
            var i = n(5155),
                t = n(8803),
                r = n.n(t),
                o = n(2115),
                s = n(5565),
                l = n(8173),
                f = n.n(l);

            function c() {
                let [e, a] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
                    document.body.style.overflow = "unset"
                }), [e]), (0, i.jsxs)("div", {
                    className: "fixed top-0 right-0 z-50 lg:hidden",
                    children: [(0, i.jsxs)("button", {
                        onClick: () => a(!e),
                        className: "relative z-50 p-4 ml-auto flex flex-col items-center justify-center gap-2 bg-transparent",
                        "aria-label": "Toggle menu",
                        children: [(0, i.jsx)("span", {
                            className: "w-8 h-[3px] bg-[#0066CC] burger-line transition-all duration-300 transform origin-center ".concat(e ? "rotate-45 translate-y-[10px] active" : "")
                        }), (0, i.jsx)("span", {
                            className: "w-8 h-[3px] bg-[#0066CC] burger-line transition-all duration-300 ".concat(e ? "opacity-0 active" : "")
                        }), (0, i.jsx)("span", {
                            className: "w-8 h-[3px] bg-[#0066CC] burger-line transition-all duration-300 transform origin-center ".concat(e ? "-rotate-45 -translate-y-[10px] active" : "")
                        })]
                    }), e && (0, i.jsxs)("div", {
                        className: "jsx-b52865eabed81f40 fixed inset-0 animated-gradient transform transition-all duration-500 ease-in-out",
                        children: [(0, i.jsxs)("div", {
                            className: "jsx-b52865eabed81f40 flex flex-col h-full pt-20 px-8",
                            children: [(0, i.jsxs)("nav", {
                                className: "jsx-b52865eabed81f40 flex flex-col gap-12 items-center",
                                children: [(0, i.jsx)(f(), {
                                    href: "/",
                                    className: "text-[#2C1810] font-varela text-3xl tracking-wider relative nav-link-mobile hover:scale-110 transition-transform nav-link-1",
                                    children: "HOME"
                                }), (0, i.jsx)(f(), {
                                    href: "/pfpbuilder",
                                    className: "text-[#2C1810] font-varela text-3xl tracking-wider relative nav-link-mobile hover:scale-110 transition-transform nav-link-5",
                                    children: "PFP BUILDER"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "jsx-b52865eabed81f40 mt-auto mb-12 flex justify-center gap-8",
                                children: [(0, i.jsx)("a", {
                                    href: "https://x.com/TreeInCatEth",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "jsx-b52865eabed81f40 social-icon-mobile",
                                    children: (0, i.jsx)(s.default, {
                                        src: "/images/navbar/x_logo.webp",
                                        alt: "X (Twitter)",
                                        width: 32,
                                        height: 32
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://t.me/TreeInCatEth",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "jsx-b52865eabed81f40 social-icon-mobile",
                                    children: (0, i.jsx)(s.default, {
                                        src: "/images/navbar/tg_logo.webp",
                                        alt: "Telegram",
                                        width: 32,
                                        height: 32
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(r(), {
                            id: "b52865eabed81f40",
                            children: ".animated-gradient.jsx-b52865eabed81f40{background:-webkit-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:-moz-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:-o-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:linear-gradient(135deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:navBgAnimation 15s ease infinite;-moz-animation:navBgAnimation 15s ease infinite;-o-animation:navBgAnimation 15s ease infinite;animation:navBgAnimation 15s ease infinite}@-webkit-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.nav-link-mobile.jsx-b52865eabed81f40{position:relative;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.nav-link-mobile.jsx-b52865eabed81f40::before{content:\"\";position:absolute;width:100%;height:100%;background:-webkit-linear-gradient(45deg,#ffd700,#ffa500);background:-moz-linear-gradient(45deg,#ffd700,#ffa500);background:-o-linear-gradient(45deg,#ffd700,#ffa500);background:linear-gradient(45deg,#ffd700,#ffa500);-webkit-filter:blur(15px);filter:blur(15px);opacity:0;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease;z-index:-1}.nav-link-mobile.jsx-b52865eabed81f40:hover::before{opacity:.5}.nav-link-mobile.jsx-b52865eabed81f40::after{content:\"\";position:absolute;left:0;bottom:-8px;width:100%;height:3px;background:-webkit-linear-gradient(left,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);background:-moz-linear-gradient(left,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);background:-o-linear-gradient(left,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);background:linear-gradient(90deg,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;background-position:100%0}.nav-link-1.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s}.nav-link-2.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.nav-link-3.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.nav-link-4.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:.9s;-moz-animation-delay:.9s;-o-animation-delay:.9s;animation-delay:.9s}.nav-link-5.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}@-webkit-keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}@-moz-keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}@-o-keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}@keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}.bg-noise.jsx-b52865eabed81f40{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\");-webkit-animation:noiseAnimation.2s infinite linear;-moz-animation:noiseAnimation.2s infinite linear;-o-animation:noiseAnimation.2s infinite linear;animation:noiseAnimation.2s infinite linear;-webkit-background-size:150px;-moz-background-size:150px;-o-background-size:150px;background-size:150px}@-webkit-keyframes noiseAnimation{0%{-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(1px,1px);transform:translate(1px,1px)}}@-moz-keyframes noiseAnimation{0%{-moz-transform:translate(0,0);transform:translate(0,0)}100%{-moz-transform:translate(1px,1px);transform:translate(1px,1px)}}@-o-keyframes noiseAnimation{0%{-o-transform:translate(0,0);transform:translate(0,0)}100%{-o-transform:translate(1px,1px);transform:translate(1px,1px)}}@keyframes noiseAnimation{0%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(1px,1px);-moz-transform:translate(1px,1px);-o-transform:translate(1px,1px);transform:translate(1px,1px)}}.social-icon-mobile.jsx-b52865eabed81f40{-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;position:relative}.social-icon-mobile.jsx-b52865eabed81f40::before{content:\"\";position:absolute;inset:-8px;background:-webkit-linear-gradient(45deg,#ffd700,#ffa500);background:-moz-linear-gradient(45deg,#ffd700,#ffa500);background:-o-linear-gradient(45deg,#ffd700,#ffa500);background:linear-gradient(45deg,#ffd700,#ffa500);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;opacity:0;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease;-webkit-filter:blur(8px);filter:blur(8px);z-index:-1}.social-icon-mobile.jsx-b52865eabed81f40:hover::before{opacity:.5}.social-icon-mobile.jsx-b52865eabed81f40:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}.burger-line.jsx-b52865eabed81f40{position:relative;background-color:#06c}"
                        })]
                    })]
                })
            }
        },
        6222: (e, a, n) => {
            n.d(a, {
                Navbar: () => f
            });
            var i = n(5155),
                t = n(8803),
                r = n.n(t),
                o = n(5565),
                s = n(8173),
                l = n.n(s);

            function f() {
                return (0, i.jsx)("nav", {
                    className: "absolute top-10 left-1/2 -translate-x-1/2 z-50 hidden lg:block",
                    children: (0, i.jsxs)("div", {
                        className: "jsx-5e26d6772e572ff4 relative px-10 py-3 nav-border w-[75vw] md:w-[45vw] lg:w-[75vw] xl:w-[65vw] max-w-[800px] min-w-[600px]",
                        children: [(0, i.jsx)("div", {
                            className: "jsx-5e26d6772e572ff4 absolute inset-0 rounded-[30px] bg-white"
                        }), (0, i.jsx)("div", {
                            className: "jsx-5e26d6772e572ff4 absolute inset-0 unique-navbar-bg pointer-events-none rounded-[30px]"
                        }), (0, i.jsxs)("div", {
                            className: "jsx-5e26d6772e572ff4 relative z-10 flex items-center justify-between gap-8",
                            children: [(0, i.jsxs)("div", {
                                className: "jsx-5e26d6772e572ff4 flex items-center gap-8",
                                children: [(0, i.jsx)(l(), {
                                    href: "/",
                                    className: "text-[#2C1810] font-varela text-xl tracking-wide relative nav-link font-bold",
                                    children: "HOME"
                                }), (0, i.jsx)(l(), {
                                    href: "/pfpbuilder",
                                    className: "text-[#2C1810] font-varela text-xl tracking-wide relative nav-link font-bold",
                                    children: "PFP BUILDER"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "jsx-5e26d6772e572ff4 flex items-center gap-4",
                                children: [(0, i.jsx)("a", {
                                    href: "https://x.com/TreeInCatEth",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                                    children: (0, i.jsx)(o.default, {
                                        src: "/images/navbar/x_logo.webp",
                                        alt: "X (Twitter)",
                                        width: 30,
                                        height: 30,
                                        className: "hover:opacity-80 transition-opacity"
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://t.me/TreeInCatEth",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                                    children: (0, i.jsx)(o.default, {
                                        src: "/images/navbar/tg_logo.webp",
                                        alt: "Telegram",
                                        width: 30,
                                        height: 30,
                                        className: "hover:opacity-80 transition-opacity"
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(r(), {
                            id: "5e26d6772e572ff4",
                            children: ".nav-border.jsx-5e26d6772e572ff4{position:relative;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.55);-moz-box-shadow:0 4px 8px rgba(0,0,0,.55);box-shadow:0 4px 8px rgba(0,0,0,.55)}.nav-border.jsx-5e26d6772e572ff4::before{content:\"\";position:absolute;inset:-4px;-webkit-border-radius:34px;-moz-border-radius:34px;border-radius:34px;background:-webkit-linear-gradient(left,#000,#1a237e,#4a148c,#1e88e5,#000);background:-moz-linear-gradient(left,#000,#1a237e,#4a148c,#1e88e5,#000);background:-o-linear-gradient(left,#000,#1a237e,#4a148c,#1e88e5,#000);background:linear-gradient(90deg,#000,#1a237e,#4a148c,#1e88e5,#000);-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;-webkit-animation:moveGradient 3s linear infinite;-moz-animation:moveGradient 3s linear infinite;-o-animation:moveGradient 3s linear infinite;animation:moveGradient 3s linear infinite;-webkit-mask:-webkit-linear-gradient(#fff 0 0)content-box,-webkit-linear-gradient(#fff 0 0);-webkit-mask:-moz-linear-gradient(#fff 0 0)content-box,-moz-linear-gradient(#fff 0 0);-webkit-mask:-o-linear-gradient(#fff 0 0)content-box,-o-linear-gradient(#fff 0 0);-webkit-mask:linear-gradient(#fff 0 0)content-box,linear-gradient(#fff 0 0);mask:-webkit-linear-gradient(#fff 0 0)content-box,-webkit-linear-gradient(#fff 0 0);mask:-moz-linear-gradient(#fff 0 0)content-box,-moz-linear-gradient(#fff 0 0);mask:-o-linear-gradient(#fff 0 0)content-box,-o-linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0)content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;padding:4px}@-webkit-keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}@-moz-keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}@-o-keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}@keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}.nav-link.jsx-5e26d6772e572ff4{color:#2c1810;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.nav-link.jsx-5e26d6772e572ff4:hover{background:-webkit-linear-gradient(left,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);background:-moz-linear-gradient(left,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);background:-o-linear-gradient(left,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);background:linear-gradient(90deg,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);-webkit-background-size:200%auto;-moz-background-size:200%auto;-o-background-size:200%auto;background-size:200%auto;background-clip:text;-webkit-background-clip:text;color:transparent;-webkit-animation:gradientMove 3s linear infinite;-moz-animation:gradientMove 3s linear infinite;-o-animation:gradientMove 3s linear infinite;animation:gradientMove 3s linear infinite}@-webkit-keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}@-moz-keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}@-o-keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}@keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}.nav-link.jsx-5e26d6772e572ff4::after{content:\"\";position:absolute;left:0;bottom:-2px;width:100%;height:2px;background:#2c1810;-webkit-transform:scalex(0);-moz-transform:scalex(0);-ms-transform:scalex(0);-o-transform:scalex(0);transform:scalex(0);-webkit-transform-origin:right;-moz-transform-origin:right;-ms-transform-origin:right;-o-transform-origin:right;transform-origin:right;-webkit-transition:-webkit-transform.3s ease;-moz-transition:-moz-transform.3s ease;-o-transition:-o-transform.3s ease;transition:-webkit-transform.3s ease;transition:-moz-transform.3s ease;transition:-o-transform.3s ease;transition:transform.3s ease;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg width='200' height='4' viewBox='0 0 200 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C50 2 50 3 100 3C150 3 150 1 200 1' stroke='black' stroke-width='1' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg width='200' height='4' viewBox='0 0 200 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C50 2 50 3 100 3C150 3 150 1 200 1' stroke='black' stroke-width='1' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\")}.nav-link.jsx-5e26d6772e572ff4:hover::after{-webkit-transform:scalex(1);-moz-transform:scalex(1);-ms-transform:scalex(1);-o-transform:scalex(1);transform:scalex(1);-webkit-transform-origin:left;-moz-transform-origin:left;-ms-transform-origin:left;-o-transform-origin:left;transform-origin:left}.unique-navbar-bg.jsx-5e26d6772e572ff4{background:-webkit-linear-gradient(315deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));background:-moz-linear-gradient(315deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));background:-o-linear-gradient(315deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));background:linear-gradient(135deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:navBgAnimation 15s ease infinite;-moz-animation:navBgAnimation 15s ease infinite;-o-animation:navBgAnimation 15s ease infinite;animation:navBgAnimation 15s ease infinite}@-webkit-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}"
                        })]
                    })
                })
            }
        }
    }
]);