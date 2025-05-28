(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        7676: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 6815))
        },
        6815: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => e_
            });
            var r = a(5155),
                l = a(2115),
                s = a(1478),
                o = a(5415),
                i = a(5565);
            let n = () => {
                    let [e, t] = (0, l.useState)(!0);
                    return (0, l.useEffect)(() => {
                        let e = () => window.matchMedia("(max-width: 768px)").matches;
                        t(e());
                        let a = () => t(e());
                        return window.addEventListener("resize", a), () => window.removeEventListener("resize", a)
                    }, []), e
                },
                c = [{
                    src: "/images/hero/cloud_1.webp",
                    size: "w-96 lg:w-[768px]",
                    top: "top-[3%]",
                    animation: "cloud-animate-1 lg:cloud-animate-1-lg",
                    blur: "blur-[4px]",
                    initialPosition: "30%"
                }, {
                    src: "/images/hero/cloud_2.webp",
                    size: "w-80 lg:w-[640px]",
                    top: "top-[20%]",
                    animation: "cloud-animate-2 lg:cloud-animate-2-lg",
                    blur: "blur-[3.5px]",
                    initialPosition: "-10%"
                }, {
                    src: "/images/hero/cloud_3.webp",
                    size: "w-72 lg:w-[576px]",
                    top: "top-[30%]",
                    animation: "cloud-animate-3 lg:cloud-animate-3-lg",
                    blur: "blur-[3px]",
                    initialPosition: "50%"
                }, {
                    src: "/images/hero/cloud_4.webp",
                    size: "w-64 lg:w-[512px]",
                    top: "top-[25%]",
                    animation: "cloud-animate-4 lg:cloud-animate-4-lg",
                    blur: "blur-[2.5px]",
                    initialPosition: "10%"
                }, {
                    src: "/images/hero/small_cloud_1.webp",
                    size: "w-48 lg:w-96",
                    top: "top-[45%]",
                    animation: "cloud-animate-5 lg:cloud-animate-5-lg",
                    blur: "blur-[2px]",
                    initialPosition: "70%"
                }, {
                    src: "/images/hero/small_cloud_2.webp",
                    size: "w-40 lg:w-80",
                    top: "top-[25%]",
                    animation: "cloud-animate-6 lg:cloud-animate-6-lg",
                    blur: "blur-[1.5px]",
                    initialPosition: "-5%"
                }, {
                    src: "/images/hero/small_cloud_3.webp",
                    size: "w-32 lg:w-64",
                    top: "top-[42%]",
                    animation: "cloud-animate-7 lg:cloud-animate-7-lg",
                    blur: "blur-[1px]",
                    initialPosition: "40%"
                }],
                d = () => {
                    let e = n();
                    return (0, r.jsxs)("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: [c.map((t, a) => (0, r.jsx)("div", {
                            className: "absolute ".concat(t.top, " ").concat(t.size, " ").concat(e ? "" : t.blur, " opacity-70 ").concat(t.animation),
                            style: {
                                left: t.initialPosition,
                                willChange: "transform"
                            },
                            children: (0, r.jsx)(i.default, {
                                src: t.src,
                                alt: "Cloud ".concat(a + 1),
                                width: 384,
                                height: 256,
                                className: "w-full h-auto",
                                priority: a < 3
                            })
                        }, "cloud-set-1-".concat(a))), c.map((t, a) => (0, r.jsx)("div", {
                            className: "absolute ".concat(t.top, " ").concat(t.size, " ").concat(e ? "" : t.blur, " opacity-70 ").concat(t.animation),
                            style: {
                                left: "calc(".concat(t.initialPosition, " - 100%)"),
                                willChange: "transform"
                            },
                            children: (0, r.jsx)(i.default, {
                                src: t.src,
                                alt: "Cloud Duplicate ".concat(a + 1),
                                width: 384,
                                height: 256,
                                className: "w-full h-auto",
                                priority: a < 3
                            })
                        }, "cloud-set-2-".concat(a)))]
                    })
                };
            var m = a(6222),
                x = a(8173),
                u = a.n(x);
            let h = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 animated-sky z-0",
                    children: (0, r.jsx)(d, {})
                }),
                p = () => (0, r.jsx)("div", {
                    className: "absolute bottom-[80%] md:bottom-[30%] left-0 right-0 w-full",
                    children: (0, r.jsx)("div", {
                        className: "w-full h-full forest-animation",
                        children: (0, r.jsx)(i.default, {
                            src: "/images/hero/hero_background_forest.webp",
                            alt: "Forest Background",
                            width: 1920,
                            height: 400,
                            className: "w-full h-full object-cover object-bottom",
                            loading: "lazy",
                            decoding: "async"
                        })
                    })
                }),
                g = () => (0, r.jsx)("div", {
                    className: "absolute bottom-0 left-0 right-0 z-10 w-full",
                    children: (0, r.jsxs)("div", {
                        className: "relative w-full",
                        style: {
                            aspectRatio: "1920/600"
                        },
                        children: [(0, r.jsx)(p, {}), (0, r.jsx)("div", {
                            className: "absolute bottom-[82%] md:bottom-[40%] lg:bottom-[12vh] xl:bottom-[35%] right-[4%] lg:right-[8%] xl:right-[12%] z-20  w-[30%] lg:w-[24%] xl:w-[22%]",
                            children: (0, r.jsxs)("div", {
                                className: "w-full h-full firemen-animation",
                                children: [(0, r.jsx)(i.default, {
                                    src: "/images/hero/hero_firemen.webp",
                                    alt: "Firemen",
                                    width: 400,
                                    height: 400,
                                    className: "w-full h-auto object-contain",
                                    loading: "lazy",
                                    decoding: "async"
                                }), (0, r.jsx)("div", {
                                    className: "absolute  top-[-15%] md:top-[-20%]  left-[-5%] md:left-[-10%]  transform -rotate-6 md:-rotate-12  z-30  scale-75 md:scale-100",
                                    children: (0, r.jsx)(u(), {
                                        href: "/pfpbuilder",
                                        children: (0, r.jsxs)("div", {
                                            className: "relative  bg-white  rounded-2xl  px-2 py-1 md:px-3 md:py-2  shadow-lg  border-2 border-black  hover:scale-110  transition-transform duration-300  cursor-pointer",
                                            children: [(0, r.jsx)("div", {
                                                className: "font-dyna-puff text-xs md:text-sm lg:text-base text-black whitespace-nowrap animate-pulse",
                                                children: "Try our PFP Builder!"
                                            }), (0, r.jsx)("div", {
                                                className: "absolute  bottom-[-6px] md:bottom-[-8px]  left-[20%]  w-3 h-3 md:w-4 md:h-4  bg-white  border-r-2 border-b-2 border-black  transform rotate-45"
                                            })]
                                        })
                                    })
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "absolute bottom-[55%] md:bottom-[25%] xl:bottom-[18%] left-1/2 -translate-x-1/2 z-40 w-[65%] sm:w-[60%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/hero/hero_tic_blink.svg",
                                alt: "Tree in Cat",
                                width: 1e3,
                                height: 1e3,
                                className: "w-full h-auto",
                                loading: "lazy",
                                decoding: "async"
                            })
                        }), (0, r.jsx)("div", {
                            className: "hidden md:block absolute bottom-[0%] md:bottom-[0%] lg:bottom-[0%] xl:bottom-[-5%] left-0 right-0 z-20",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/hero/hero_foreground_ground.webp",
                                alt: "Ground",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-cover object-bottom",
                                loading: "lazy",
                                decoding: "async"
                            })
                        }), (0, r.jsx)("div", {
                            className: "block md:hidden absolute bottom-0 left-0 right-0 z-20",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/hero/hero_foreground_ground_sm.webp",
                                alt: "Ground",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-cover object-bottom",
                                loading: "lazy",
                                decoding: "async"
                            })
                        })]
                    })
                });

            function b() {
                let e;
                let t = (0, l.useRef)(null);
                return (0, r.jsxs)("div", {
                    className: "relative min-h-screen",
                    children: [(0, r.jsx)(h, {}), (0, r.jsx)(m.Navbar, {}), (0, r.jsx)("div", {
                        className: "relative min-h-screen flex flex-col justify-end",
                        children: (0, r.jsx)(g, {})
                    }), (0, r.jsx)("div", {
                        className: "absolute top-[20vh] sm:top-[15vh] md:top-[10vh] lg:top-[10vh] left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[60%]",
                        children: (0, r.jsxs)("svg", {
                            viewBox: "0 0 1000 300",
                            className: "w-full",
                            preserveAspectRatio: "xMidYMid meet",
                            children: [(0, r.jsx)("defs", {
                                children: (0, r.jsx)("path", {
                                    id: "curve",
                                    d: "M 50 200 Q 500 0 950 200",
                                    fill: "transparent"
                                })
                            }), (0, r.jsxs)("text", {
                                className: "font-super-sense text-[7rem] sm:text-[5rem] md:text-[6rem] lg:text-[6rem] tracking-wider uppercase bobble select-none",
                                children: [(0, r.jsx)("textPath", {
                                    href: "#curve",
                                    textAnchor: "middle",
                                    startOffset: "50%",
                                    stroke: "20px",
                                    className: "stroke-[20px] stroke-black fill-transparent",
                                    children: "Tree in Cat"
                                }), (0, r.jsx)("textPath", {
                                    href: "#curve",
                                    textAnchor: "middle",
                                    startOffset: "50%",
                                    fill: "#96E9A2",
                                    children: "Tree in Cat"
                                })]
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "absolute top-[35vh] text-center left-1/2 -translate-x-1/2  sm:top-[28vh] md:top-[28vh] lg:top-[28vh] xl:top-[28vh] m-auto z-50 w-[90%] sm:w-[80%] md:w-[70%] max-w-[800px] lg:max-w-[900px] xl:max-w-[1200px]",
                        children: (0, r.jsx)("p", {
                            ref: t,
                            className: "font-dyna-puff text-black font-bold text-2xl md:text-3xl lg:text-4xl magical-text select-none",
                            children: (e = 0, "The Absurd OG Animal-Plant Memeverse".split(" ").map((t, a, l) => (0, r.jsxs)("span", {
                                className: "inline-block",
                                children: [t.split("").map(t => {
                                    let a = e++;
                                    return (0, r.jsx)("span", {
                                        className: "magic-letter",
                                        style: {
                                            "--index": a
                                        },
                                        children: t
                                    }, a)
                                }), a < l.length - 1 && (0, r.jsx)("span", {
                                    className: "magic-letter",
                                    style: {
                                        "--index": e++
                                    },
                                    children: "\xa0"
                                })]
                            }, a)))
                        })
                    })]
                })
            }
            let f = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
                    style: {
                        backgroundImage: "url('/images/about/about_background.webp')"
                    }
                }),
                w = () => {
                    let e = (0, l.useRef)(null),
                        t = (0, l.useRef)(null),
                        a = (0, l.useRef)(null),
                        o = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        s.Ay.set([e.current, t.current], {
                            y: "10vh"
                        }), s.Ay.set(a.current, {
                            opacity: 0,
                            scale: .8
                        }), s.Ay.set(o.current, {
                            y: "15vh"
                        });
                        let r = s.Ay.matchMedia();
                        return r.add("(max-width: 639px)", () => {
                            s.Ay.to(t.current, {
                                y: 0,
                                duration: 1,
                                ease: "power2.in",
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top bottom",
                                    end: "bottom bottom+=400",
                                    scrub: 1
                                }
                            }), s.Ay.to(a.current, {
                                opacity: 1,
                                scale: 1,
                                delay: 1,
                                duration: 3,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "bottom bottom+=400",
                                    toggleActions: "play none none reverse"
                                }
                            }), s.Ay.to(e.current, {
                                y: 0,
                                duration: 1,
                                ease: "power2.in",
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom",
                                    end: "bottom bottom+=400",
                                    scrub: 1
                                }
                            })
                        }), r.add("(min-width: 640px)", () => {
                            s.Ay.to(t.current, {
                                y: 0,
                                duration: 1,
                                ease: "power2.in",
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top bottom",
                                    end: "bottom bottom+=200",
                                    scrub: 1
                                }
                            }), s.Ay.to(a.current, {
                                opacity: 1,
                                scale: 1,
                                delay: 1.5,
                                duration: 3,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "bottom bottom+=200",
                                    toggleActions: "play none none reverse"
                                }
                            }), s.Ay.to(e.current, {
                                y: 0,
                                duration: 1,
                                ease: "power2.in",
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom",
                                    end: "bottom bottom+=200",
                                    scrub: 1
                                }
                            })
                        }), s.Ay.to(o.current, {
                            y: 0,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: o.current,
                                start: "top bottom",
                                end: "bottom center",
                                scrub: 1
                            }
                        }), () => r.revert()
                    }, []), (0, r.jsx)("div", {
                        className: "absolute z-30 w-full",
                        children: (0, r.jsxs)("div", {
                            className: "relative w-full",
                            style: {
                                aspectRatio: "1920/600"
                            },
                            children: [(0, r.jsxs)("div", {
                                ref: t,
                                className: "absolute bottom-[8%] sm:bottom-[10%] md:bottom-[6%] lg:bottom[2%] right-[2%] lg:right-[6%] xl:right-[12%] z-60  w-[26%] sm:w-[22%] md:w-[23%] lg:w-[20%] md:block",
                                children: [(0, r.jsx)("div", {
                                    ref: a,
                                    className: "absolute top-[-40%] left-[-20%] w-[80%] animate-wiggle",
                                    children: (0, r.jsx)(i.default, {
                                        src: "/images/about/axe_bubble.webp",
                                        alt: "Axe Man Speech",
                                        width: 400,
                                        height: 200,
                                        className: "w-full h-auto object-contain",
                                        priority: !0
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "w-full",
                                    children: (0, r.jsx)(i.default, {
                                        src: "/images/about/axe_man.webp",
                                        alt: "Axe Man",
                                        width: 800,
                                        height: 300,
                                        className: "w-full h-auto object-contain",
                                        priority: !0
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                ref: e,
                                className: "absolute bottom-[25%] md:bottom-[25%] lg:bottom-[27%] left-[10%] md:left-[5%] lg:left-[10%] z-60  w-[12%] sm:w-[12%] md:w-[10%] lg:w-[9%] md:block",
                                children: (0, r.jsx)("div", {
                                    className: "w-full",
                                    children: (0, r.jsx)(i.default, {
                                        src: "/images/about/tic_side.webp",
                                        alt: "Tic Side",
                                        width: 600,
                                        height: 300,
                                        className: "w-full h-auto object-contain",
                                        priority: !0
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                ref: o,
                                className: "absolute bottom-[-80%] sm:bottom-[-60%] lg:bottom-[-30%] left-1/2 -translate-x-1/2 z-60   w-[80%] min-[450px]:w-[60%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[28%] 2xl:w-[20%]",
                                children: (0, r.jsx)(v, {})
                            }), (0, r.jsx)("div", {
                                className: "absolute bottom-0 left-0 right-0 overflow-hidden",
                                children: (0, r.jsx)(i.default, {
                                    src: "/images/about/about_foreground_ground.webp",
                                    alt: "Ground",
                                    width: 1920,
                                    height: 400,
                                    className: "w-full h-auto object-cover object-bottom",
                                    priority: !0
                                })
                            })]
                        })
                    })
                },
                v = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useEffect)(() => {
                        let a = e.current;
                        if (!a) return;
                        let r = Array.from(a.querySelectorAll(".word")),
                            l = r.filter(e => !e.querySelector(".special-word")),
                            o = r.filter(e => e.querySelector(".special-word")),
                            i = o.map(e => e.querySelector(".special-word")).filter(Boolean);
                        s.Ay.fromTo(l, {
                            opacity: 0,
                            y: 10,
                            scale: .8,
                            filter: t ? "none" : "blur(1px)"
                        }, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: t ? "none" : "blur(0px)",
                            duration: 1,
                            stagger: {
                                each: .08,
                                from: "random"
                            },
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: a,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }), s.Ay.fromTo(o, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1,
                            stagger: {
                                each: .08,
                                from: "random"
                            },
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: a,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }), s.Ay.fromTo(i, {
                            y: 2,
                            scale: .9,
                            filter: t ? "none" : "blur(0px)"
                        }, {
                            y: 0,
                            scale: 1,
                            filter: t ? "none" : "blur(0px)",
                            duration: 1,
                            stagger: {
                                each: .08,
                                from: "random"
                            },
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: a,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }), s.Ay.timeline({
                            repeat: -1,
                            yoyo: !0,
                            delay: 1.2
                        }).to(i, {
                            scale: 1.05,
                            y: () => s.Ay.utils.random(-3, 3),
                            filter: "drop-shadow(0 0 12px rgba(111, 190, 104, 0.43))",
                            duration: 1,
                            ease: "power1.inOut",
                            stagger: .3
                        })
                    }, [t]), (0, r.jsxs)("div", {
                        className: "relative",
                        children: [(0, r.jsx)(i.default, {
                            src: "/images/about/about_sign.webp",
                            alt: "About Sign",
                            width: 700,
                            height: 300,
                            className: "w-full h-auto object-contain",
                            priority: !0
                        }), (0, r.jsxs)("div", {
                            className: "absolute inset-[12%] top-[8%] flex flex-col justify-start items-center",
                            children: [(0, r.jsx)("p", {
                                className: "mt-2 font-dyna-puff text-[3.5vw] min-[450px]:text-[2.5vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.3vw] xl:text-[1.1vw] 2xl:text-[0.9vw] text-center text-[#2C1810] whitespace-pre-line font-bold",
                                children: "ONE HEART. ONE TREE. ONE CAT."
                            }), (0, r.jsx)("div", {
                                className: "mt-4 w-full max-w-[90%] flex flex-col items-center",
                                children: (0, r.jsx)("div", {
                                    ref: e,
                                    className: "font-dyna-puff text-[5.6vw] min-[450px]:text-[4.2vw] sm:text-[3.2vw] md:text-[3vw] lg:text-[2.2vw] xl:text-[2vw] 2xl:text-[1.5vw] 3xl:text-[1.2vw] text-center text-[#2C1810] leading-tight",
                                    children: (0, r.jsx)(() => (0, r.jsx)(r.Fragment, {
                                        children: [{
                                            words: ["A", "playful", "paradox", "in", "a", "universe", "where", "trees", "get", "stuck", "in", "cats.", "Innovation", "meets", "imagination", "presented", "in", "the", "form", "of"]
                                        }, {
                                            text: "games",
                                            color: "#FF6B6B",
                                            special: !0
                                        }, {
                                            text: ","
                                        }, {
                                            text: "art",
                                            color: "#4ECDC4",
                                            special: !0
                                        }, {
                                            text: ","
                                        }, {
                                            text: "music",
                                            color: "#9B59B6",
                                            special: !0
                                        }, {
                                            text: "and"
                                        }, {
                                            text: "AI",
                                            color: "#FF69B4",
                                            special: !0
                                        }, {
                                            text: "."
                                        }].map((e, t) => "words" in e ? e.words.map((e, a) => (0, r.jsxs)("span", {
                                            className: "word",
                                            style: {
                                                opacity: 0
                                            },
                                            children: [e, " "]
                                        }, "".concat(t, "-").concat(a))) : e.special ? (0, r.jsxs)("span", {
                                            className: "word",
                                            style: {
                                                opacity: 0
                                            },
                                            children: [(0, r.jsx)("span", {
                                                className: "special-word",
                                                style: {
                                                    color: e.color,
                                                    display: "inline-block",
                                                    willChange: "transform, filter"
                                                },
                                                children: e.text
                                            }), " "]
                                        }, t) : (0, r.jsxs)("span", {
                                            className: "word",
                                            style: {
                                                opacity: 0
                                            },
                                            children: [e.text, " "]
                                        }, t))
                                    }), {})
                                })
                            })]
                        })]
                    })
                };

            function j() {
                return (0, r.jsxs)("div", {
                    className: "relative",
                    children: [(0, r.jsx)(f, {}), (0, r.jsxs)("div", {
                        className: "relative min-h-screen flex flex-col justify-end",
                        children: [(0, r.jsx)(y, {}), (0, r.jsx)(N, {}), (0, r.jsx)(w, {})]
                    })]
                })
            }
            let y = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useEffect)(() => {
                        s.Ay.fromTo(e.current, {
                            filter: t ? "none" : "blur(4px)"
                        }, {
                            filter: t ? "none" : "blur(0px)",
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom",
                                end: "top top",
                                scrub: !0
                            }
                        })
                    }, [t]), (0, r.jsx)("div", {
                        ref: e,
                        className: "absolute top-[-10vw] left-[0%] z-10 w-[70vw] md:w-[70vw] lg:w-[55vw]",
                        children: (0, r.jsx)("div", {
                            className: "w-full min-h-screen",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/about/about_left_tree.webp",
                                alt: "Left Tree",
                                width: 1e3,
                                height: 1e3,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })
                    })
                },
                N = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useEffect)(() => {
                        s.Ay.fromTo(e.current, {
                            filter: t ? "none" : "blur(4px)"
                        }, {
                            filter: t ? "none" : "blur(0px)",
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom",
                                end: "top top",
                                scrub: !0
                            }
                        })
                    }, [t]), (0, r.jsx)("div", {
                        ref: e,
                        className: "absolute top-[-10vw] -right-[0%] z-10 w-[70vw] md:w-[70vw] lg:w-[55vw]",
                        children: (0, r.jsx)("div", {
                            className: "w-full min-h-screen",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/about/about_right_tree.webp",
                                alt: "Right Tree",
                                width: 1e3,
                                height: 1e3,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })
                    })
                };
            var _ = a(8803),
                k = a.n(_);
            let T = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "relative w-full ".concat(a || "aspect-[4/3]", " bg-gray-700 flex items-center justify-center border-[12px] border-gray-900 rounded-[20px] shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"),
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 border-4 border-black rounded-[10px] pointer-events-none shadow-[inset_0_2px_5px_rgba(255,255,255,0.1)]"
                        }), (0, r.jsxs)("div", {
                            className: "relative w-[92%] h-[88%] bg-black rounded-[10px] overflow-hidden flex items-center justify-center border-[8px] border-gray-900 shadow-inner",
                            children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 bg-[repeating-linear-gradient(0deg,_rgba(0,0,0,0.8)_0px,_rgba(0,0,0,0.8)_2px,_transparent_2px,_transparent_4px)] md:mix-blend-hard-light opacity-60"
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 animate-horizontalWobble pointer-events-none",
                                children: (0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 md:mix-blend-lighten"
                                })
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 pointer-events-none z-20",
                                children: (0, r.jsx)("div", {
                                    className: "w-full h-full bg-[linear-gradient(transparent_80%,_rgba(100,255,100,0.1)_50%)] bg-[length:100%_6px] animate-scanlines",
                                    children: (0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-[linear-gradient(180deg,_transparent_95%,_rgba(100,255,100,0.1)_100%)]"
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 tracking-line z-10"
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 animate-verticalHold pointer-events-none"
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 bg-radial-gradient(circle_at_center,_rgba(0,0,0,0.4)_0%,_transparent_60%) pointer-events-none"
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,0,0,0.25),_rgba(0,255,0,0.20),_rgba(0,0,255,0.25))] md:mix-blend-screen"
                            }), t, (0, r.jsx)("div", {
                                className: "absolute inset-0 bg-[rgba(255,255,255,0.15)] md:mix-blend-lighten animate-flicker pointer-events-none"
                            }), (0, r.jsx)("div", {
                                className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40 pointer-events-none"
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 pointer-events-none animate-glow"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "absolute bottom-0 right-[10%] mb-[2%] md:mb-[1%] lg:mb-[1%] xl:mb-[1%] flex items-center gap-[9%]",
                            children: [(0, r.jsx)("div", {
                                className: "w-[3%] h-[3%] min-w-[8px] min-h-[8px] rounded-full bg-red-600 shadow-[0_0_5px_rgba(255,0,0,0.7)] animate-pulse"
                            }), (0, r.jsx)("button", {
                                className: "w-[3%] h-[1vh] min-w-[7px] min-h-[18px] bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] hover:bg-gray-600 transition-colors"
                            }), (0, r.jsx)("button", {
                                className: "w-[3%] h-[1vh] min-w-[7px] min-h-[18px] bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] hover:bg-gray-600 transition-colors"
                            }), (0, r.jsx)("button", {
                                className: "w-[3%] h-[1vh] min-w-[7px] min-h-[18px] bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] hover:bg-gray-600 transition-colors"
                            }), (0, r.jsx)("button", {
                                className: "w-[3%] h-[1vh] min-w-[7px] min-h-[18px] bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] hover:bg-gray-600 transition-colors"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 opacity-30"
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-gray-600 via-gray-400 to-gray-600 opacity-30"
                        })]
                    })
                },
                A = e => {
                    let {
                        label: t = "PLAY",
                        className: a = "",
                        onClick: l,
                        ...s
                    } = e;
                    return (0, r.jsxs)("button", {
                        type: "button",
                        onClick: l,
                        className: "relative inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-bold shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 ".concat(a),
                        ...s,
                        children: [(0, r.jsx)("span", {
                            className: "absolute inset-0 -z-10 bg-gradient-to-r from-blue-800 via-green-500 to-purple-800 opacity-100 animate-playPulse"
                        }), (0, r.jsx)("span", {
                            className: "relative play-text text-xl md:text-xl lg:text-2xl",
                            children: t
                        })]
                    })
                },
                z = [{
                    id: 1,
                    title: "Seed Catcher",
                    description: "Help the Cat catch falling seeds and grow the forest! Dodge crypto baddies and collect power-ups in this exciting arcade game, or a tree might get stuck in you!",
                    image: "/images/games/seed_catcher_splash.webp",
                    playLink: "https://seedcatcher.treeincat.lol/"
                }, {
                    id: 2,
                    title: "Branch Hopper",
                    description: "Jump from branch to branch as the Cat explores the treetops. Test your timing and agility in this challenging platformer while avoiding other memes.",
                    image: "/images/games/branch_hopper_splash.webp",
                    playLink: "https://branchhopper.treeincat.lol/"
                }],
                E = () => {
                    let [e, t] = (0, l.useState)(0), a = e => {
                        let {
                            game: t
                        } = e;
                        return (0, r.jsxs)("div", {
                            className: "flex flex-col bg-[#1a1a2e]/90 overflow-hidden md:backdrop-blur-sm font-mono h-full retro-card relative",
                            children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 border-trace"
                            }), (0, r.jsx)("div", {
                                className: "relative w-full h-[65%] p-2",
                                children: (0, r.jsxs)("div", {
                                    className: "relative w-full h-full border-4 border-[#4a4a8f] overflow-hidden retro-screen",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-[#2a2a4f]/20 to-[#4a4a8f]/10 animate-gradient"
                                    }), (0, r.jsx)(i.default, {
                                        src: t.image,
                                        alt: t.title,
                                        fill: !0,
                                        className: "object-contain retro-image",
                                        priority: !0
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col p-4 text-white retro-content",
                                children: [(0, r.jsx)("h3", {
                                    className: "text-2xl md:text-2xl font-bold mb-2 tracking-wide retro-text",
                                    children: t.title
                                }), (0, r.jsx)("p", {
                                    className: "text-md md:text-md lg:text-lg mb-3 leading-tight tracking-tight opacity-95",
                                    children: t.description
                                // }), (0, r.jsx)(A, {
                                //     onClick: () => window.location.href = t.playLink,
                                //     className: "w-[100%] md:w-[90%] mx-auto"
                                })]
                            })]
                        })
                    };
                    return (0, r.jsx)("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, r.jsxs)("div", {
                            className: "w-[90%] h-[90%]",
                            children: [(0, r.jsxs)("div", {
                                className: "md:hidden h-full flex flex-col",
                                children: [(0, r.jsx)("div", {
                                    className: "flex-grow",
                                    children: (0, r.jsx)(a, {
                                        game: z[e]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-between mt-3 px-2",
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => {
                                            console.log("Previous Game"), t(e => (e - 1 + z.length) % z.length)
                                        },
                                        className: "bg-[#1a1a2e] text-white px-4 py-2 rounded hover:bg-[#2a2a4f] font-mono tracking-widest border-2 border-[#4a4a8f] transition-all duration-300 retro-text",
                                        disabled: z.length <= 1,
                                        children: "BACK"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => {
                                            console.log("Next Game"), t(e => (e + 1) % z.length)
                                        },
                                        className: "bg-[#1a1a2e] text-white px-4 py-2 rounded hover:bg-[#2a2a4f] font-mono tracking-widest border-2 border-[#4a4a8f] transition-all duration-300 retro-text",
                                        disabled: z.length <= 1,
                                        children: "NEXT"
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "hidden md:grid grid-cols-2 gap-3 h-full",
                                children: z.map(e => (0, r.jsx)(a, {
                                    game: e
                                }, e.id))
                            })]
                        })
                    })
                },
                C = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
                    style: {
                        backgroundImage: "url('/images/games/gaming_background.webp')"
                    }
                }),
                R = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useLayoutEffect)(() => {
                        let a = s.Ay.context(() => {
                            s.Ay.set(e.current, {
                                y: "50vh",
                                scale: .5,
                                filter: t ? "none" : "blur(4px)"
                            }), s.Ay.to(e.current, {
                                y: 0,
                                scale: 1,
                                filter: t ? "none" : "blur(0px)",
                                duration: 1,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom+=300",
                                    end: "bottom bottom+=300",
                                    scrub: 1
                                }
                            })
                        }, e);
                        return () => a.revert()
                    }, [t]), (0, r.jsx)("div", {
                        className: "absolute z-30 w-full",
                        children: (0, r.jsxs)("div", {
                            className: "relative w-full",
                            style: {
                                aspectRatio: "1920/600"
                            },
                            children: [(0, r.jsx)("div", {
                                ref: e,
                                className: "absolute bottom-[0%] right-[60%] z-60  w-[50%] md:w-[13%] lg:w-[35%] hidden md:block",
                                children: (0, r.jsx)("div", {
                                    className: "w-full",
                                    children: (0, r.jsx)(i.default, {
                                        src: "/images/games/tic_gamer.webp",
                                        alt: "TIC Gamer",
                                        width: 1e3,
                                        height: 1e3,
                                        className: "w-full h-auto object-contain",
                                        priority: !0
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden",
                                children: (0, r.jsx)(i.default, {
                                    src: "/images/games/games_foreground.webp",
                                    alt: "Ground",
                                    width: 1920,
                                    height: 400,
                                    className: "w-full h-auto object-cover object-bottom",
                                    priority: !0
                                })
                            }), (0, r.jsx)("div", {
                                className: "block md:hidden absolute bottom-0 left-0 right-0 overflow-hidden",
                                children: (0, r.jsx)(i.default, {
                                    src: "/images/games/games_foreground_sm.webp",
                                    alt: "Ground",
                                    width: 1920,
                                    height: 400,
                                    className: "w-full h-auto object-cover object-bottom",
                                    priority: !0
                                })
                            })]
                        })
                    })
                },
                L = () => {
                    let e = (0, l.useRef)(null);
                    return (0, l.useLayoutEffect)(() => {
                        let t = s.Ay.context(() => {
                            s.Ay.fromTo(e.current, {
                                opacity: 0,
                                y: 100
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom",
                                    end: "top center",
                                    scrub: !0
                                }
                            })
                        }, e);
                        return () => t.revert()
                    }, []), (0, r.jsxs)("div", {
                        className: "jsx-40d958566d1f07dd absolute z-40 top-[5vh] lg:top-[20vh] w-full lg:w-auto lg:left-[6%]",
                        children: [(0, r.jsx)("div", {
                            className: "jsx-40d958566d1f07dd w-full flex justify-center lg:justify-start lg:container",
                            children: (0, r.jsx)("h2", {
                                ref: e,
                                className: "jsx-40d958566d1f07dd \n            font-press-start\n            text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold\n            lg:ml-[10%]\n            lg:[transform:rotate(-35deg)]\n            select-none\n            origin-top-left\n            animate-retro-text\n            [text-shadow:_2px_2px_0_#000,_-2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000]\n          ",
                                children: "GAMES"
                            })
                        }), (0, r.jsx)(k(), {
                            id: "40d958566d1f07dd",
                            children: "@-webkit-keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}@-moz-keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}@-o-keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}@keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}.animate-retro-text.jsx-40d958566d1f07dd{-webkit-animation:retroTextColor 8s ease-in-out infinite;-moz-animation:retroTextColor 8s ease-in-out infinite;-o-animation:retroTextColor 8s ease-in-out infinite;animation:retroTextColor 8s ease-in-out infinite;opacity:.95}.animate-retro-text.jsx-40d958566d1f07dd:hover{-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}"
                        })]
                    })
                },
                S = () => (0, r.jsx)("div", {
                    className: "absolute top-[-10vw] md:top-[-11vw] left-0 right-0 z-10  w-full",
                    children: (0, r.jsxs)("div", {
                        className: "w-full",
                        children: [(0, r.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/games/games_roof.webp",
                                alt: "Roof",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "block md:hidden",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/games/games_roof_sm.webp",
                                alt: "Roof",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })]
                    })
                });

            function M() {
                let e = (0, l.useRef)(null),
                    t = n();
                return (0, l.useLayoutEffect)(() => {
                    let a = s.Ay.context(() => {
                        s.Ay.set(e.current, {
                            y: "50vh",
                            filter: t ? "none" : "blur(5px)",
                            opacity: 1,
                            willChange: "transform, opacity"
                        }), s.Ay.to(e.current, {
                            y: 0,
                            filter: t ? "none" : "blur(0px)",
                            opacity: 1,
                            duration: 1.2,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom+=300",
                                end: "top center-=100",
                                scrub: .5
                            }
                        })
                    }, e);
                    return () => a.revert()
                }, [t]), (0, r.jsxs)("div", {
                    className: "relative",
                    children: [(0, r.jsx)(C, {}), (0, r.jsxs)("div", {
                        className: "relative min-h-screen flex flex-col justify-end",
                        children: [(0, r.jsx)(L, {}), (0, r.jsx)(S, {}), (0, r.jsx)("div", {
                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                            children: (0, r.jsx)("div", {
                                ref: e,
                                className: "absolute  top-[12vh] sm:top-[11vh] md:top-[13vh] lg:top-[12vh] xl:top-[12vh] left-1/2 lg:left-[60%] xl:left-[65%]  -translate-x-1/2 z-50  w-[90vw] h-[85vh]  sm:w-[90vw] sm:h-[80vh]  md:w-[90vw] md:h-[75vh]  lg:w-[65vw] lg:h-[75vh]  xl:w-[55vw] xl:h-[70vh] pointer-events-auto",
                                children: (0, r.jsx)(T, {
                                    className: "w-full h-full",
                                    children: (0, r.jsx)(E, {})
                                })
                            })
                        }), (0, r.jsx)(R, {})]
                    })]
                })
            }
            var P = a(2055);
            let I = ["Nature's little surprise! \uD83D\uDC9A", "Tree in cat was here ❤️", "Best day ever! ✨", "Don't ask how this happened \uD83D\uDE05", "Just another Tuesday \uD83C\uDF1F", "Art in the wild \uD83C\uDFA8", "Can't believe what I saw! \uD83D\uDC40", "Note to self: don't do that again \uD83D\uDE06", "Pure magic moment ✨", "Secret spot discovered \uD83D\uDDFA️", "Well, that was unexpected \uD83C\uDFAD", "Adventure time! \uD83C\uDF08", "Remember when... \uD83D\uDCDD", "Perfect timing ⭐", "Life is strange & beautiful \uD83C\uDF31"],
                F = () => {
                    let e = Math.floor(Math.random() * I.length);
                    return I[e]
                },
                O = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
                    style: {
                        backgroundImage: "url('/images/art/art_background.webp')"
                    }
                }),
                G = () => (0, r.jsx)("div", {
                    className: "absolute -translate-y-[80%] left-0 right-0 z-10  w-full",
                    children: (0, r.jsxs)("div", {
                        className: "w-full",
                        children: [(0, r.jsx)("div", {
                            className: "hidden lg:block",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/art/art_fence.webp",
                                alt: "Art Fence",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "block lg:hidden",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/art/art_fence_sm.webp",
                                alt: "Art Fence",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })]
                    })
                }),
                B = [{
                    x: "25%",
                    y: {
                        base: "75%",
                        sm: "35%"
                    }
                }, {
                    x: "75%",
                    y: {
                        base: "40%",
                        sm: "45%"
                    }
                }, {
                    x: "20%",
                    y: {
                        base: "55%",
                        sm: "60%"
                    }
                }, {
                    x: "70%",
                    y: {
                        base: "65%",
                        sm: "65%"
                    }
                }, {
                    x: "50%",
                    y: {
                        base: "30%",
                        sm: "45%"
                    }
                }, {
                    x: "25%",
                    y: {
                        base: "75%",
                        sm: "35%"
                    }
                }, {
                    x: "75%",
                    y: {
                        base: "40%",
                        sm: "45%"
                    }
                }, {
                    x: "20%",
                    y: {
                        base: "55%",
                        sm: "60%"
                    }
                }, {
                    x: "70%",
                    y: {
                        base: "65%",
                        sm: "65%"
                    }
                }, {
                    x: "50%",
                    y: {
                        base: "30%",
                        sm: "45%"
                    }
                }],
                U = () => 30 * Math.random() - 15,
                D = e => {
                    let {
                        src: t,
                        alt: a,
                        aspectRatio: o,
                        position: n
                    } = e, c = (0, l.useRef)(null), d = B[n % B.length], [m] = (0, l.useState)(F()), [x] = (0, l.useState)(U());
                    return (0, l.useEffect)(() => {
                        let e = () => {
                            if (!c.current) return;
                            let e = window.innerWidth >= 640 ? d.y.sm : d.y.base;
                            s.Ay.to(c.current, {
                                opacity: 1,
                                scale: 1,
                                xPercent: -50,
                                yPercent: -50,
                                left: d.x,
                                top: e,
                                rotation: x,
                                duration: .8,
                                ease: "back.out(1.2)"
                            })
                        };
                        return s.Ay.fromTo(c.current, {
                            opacity: 0,
                            scale: .5,
                            xPercent: -50,
                            yPercent: -50,
                            rotation: 0
                        }, {
                            opacity: 1,
                            scale: 1,
                            xPercent: -50,
                            yPercent: -50,
                            left: d.x,
                            top: window.innerWidth >= 640 ? d.y.sm : d.y.base,
                            rotation: x,
                            duration: .8,
                            ease: "back.out(1.2)"
                        }), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, [d.x, d.y, x]), (0, r.jsx)("div", {
                        ref: c,
                        className: "absolute w-[220px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[600px] z-[2]",
                        style: {
                            left: d.x,
                            top: window.innerWidth >= 640 ? d.y.sm : d.y.base
                        },
                        children: (0, r.jsxs)("div", {
                            className: "p-3 sm:p-4",
                            style: {
                                background: "#fff",
                                borderRadius: "2px",
                                boxShadow: "\n            0 0 0 2px #000,\n            4px 4px 0 0 #000,\n            8px 8px 0 0 rgba(0,0,0,0.2)\n          "
                            },
                            children: [(0, r.jsxs)("div", {
                                className: "relative overflow-hidden",
                                style: {
                                    paddingBottom: "".concat(1 / o * 100, "%"),
                                    maxHeight: "280px",
                                    border: "2px solid #000",
                                    background: "#f8f8f8",
                                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)"
                                },
                                children: [(0, r.jsx)(i.default, {
                                    src: t,
                                    alt: a,
                                    fill: !0,
                                    loading: "lazy",
                                    className: "object-cover opacity-95",
                                    sizes: "(max-width: 640px) 220px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        boxShadow: "inset 0 0 0 2px #000",
                                        background: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\")"
                                    }
                                })]
                            }), (0, r.jsx)("div", {
                                className: "h-12 sm:h-16 flex items-center justify-center mt-3",
                                children: (0, r.jsx)("p", {
                                    className: "font-dyna-puff text-gray-900 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg",
                                    style: {
                                        transform: "rotate(-1deg)",
                                        textShadow: "1px 1px 0 #fff"
                                    },
                                    children: m
                                })
                            })]
                        })
                    })
                },
                H = () => {
                    let e = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        s.Ay.fromTo(e.current, {
                            opacity: 0,
                            x: 100
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom",
                                end: "top center",
                                scrub: !0
                            }
                        })
                    }, []), (0, r.jsx)("div", {
                        ref: e,
                        className: "absolute top-[5%] md:top-[5%] lg:top-[3%] xl:top-[3%] right-[8%] z-[1] md:mix-blend-luminosity pointer-events-none",
                        children: (0, r.jsx)("h1", {
                            className: "font-wood-carved text-[4rem] md:text-[6rem] lg:text-[8rem] text-[#4a3728]",
                            style: {
                                transform: "rotate(20deg)",
                                textShadow: "\n            2px 2px 0px #8B5E3C,\n            -1px -1px 0px #2b1810,\n            0px 1px 0px #5c3c28,\n            1px 0px 0px #3d2819,\n            2px 2px 3px rgba(0,0,0,0.5),\n            inset 2px 2px 4px rgba(0,0,0,0.4)\n          ",
                                WebkitTextStroke: "1px #2b1810"
                            },
                            children: "ART"
                        })
                    })
                },
                W = () => {
                    let e = (0, l.useRef)(null),
                        t = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        s.Ay.fromTo(e.current, {
                            opacity: 0,
                            x: 100,
                            y: 100
                        }, {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom",
                                end: "bottom bottom+=100",
                                scrub: !0
                            }
                        }), s.Ay.fromTo(t.current, {
                            opacity: 0,
                            x: -100,
                            y: 100
                        }, {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: t.current,
                                start: "top bottom",
                                end: "top center",
                                scrub: !0
                            }
                        })
                    }, []), (0, r.jsxs)(r.Fragment, {
                        children: []
                    })
                },
                X = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useLayoutEffect)(() => {
                        e.current && s.Ay.fromTo(e.current, {
                            y: "40vh",
                            scale: .7,
                            filter: t ? "none" : "blur(5px)"
                        }, {
                            y: "0",
                            scale: 1,
                            filter: t ? "none" : "blur(0px)",
                            duration: 1,
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom",
                                end: "top center",
                                scrub: !0
                            }
                        })
                    }, [t]), (0, r.jsx)("div", {
                        ref: e,
                        className: "absolute bottom-[100%] lg:bottom-[97%] xl:bottom-[98%] 2xl:bottom-[100%] left-1/2 -translate-x-1/2 z-[-1]  w-[60%] sm:w-[50%] md:w-[50%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]",
                        children: (0, r.jsx)("div", {
                            className: "w-full",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/art/tic_camera.webp",
                                alt: "TIC with Camera",
                                width: 800,
                                height: 800,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })
                    })
                },
                K = () => {
                    let e = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        s.Ay.fromTo(e.current, {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top bottom",
                                end: "top bottom",
                                scrub: !0
                            }
                        })
                    }, []), (0, r.jsx)("div", {
                    })
                };

            function Q() {
                let [e, t] = (0, l.useState)([]), {
                    z: a
                } = P, s = (0, l.useRef)(0), i = (0, l.useRef)(null), [n, c] = (0, l.useState)(!1), d = (0, l.useRef)(!1), m = (0, l.useRef)([]);
                return (0, l.useEffect)(() => {
                    let e = a.filter(e => "official" === e.category && "image" === e.type);
                    m.current = [...e].sort(() => Math.random() - .5)
                }, [a]), (0, l.useEffect)(() => {
                    let e = o.A.create({
                        trigger: i.current,
                        start: "top bottom-=20%",
                        onEnter: () => c(!0),
                        once: !0
                    });
                    return () => e.kill()
                }, []), (0, l.useEffect)(() => {
                    let e = a.filter(e => "official" === e.category && "image" === e.type);
                    if (!n || 0 === e.length) return;
                    (async () => {
                        await new Promise(e => setTimeout(e, 300)), t(e => [...e, { ...m.current[0],
                            position: 0
                        }]);
                        for (let a = 1; a < Math.min(10, e.length); a++) await new Promise(e => setTimeout(e, 2e3)), t(e => [...e, { ...m.current[a],
                            position: a
                        }]);
                        d.current = !0, s.current = Math.min(10, e.length)
                    })();
                    let r = setInterval(() => {
                        d.current && t(t => {
                            let a = s.current % e.length;
                            return s.current += 1, 0 === a && (m.current = [...e].sort(() => Math.random() - .5)), [...t.slice(1), { ...m.current[a],
                                position: t[t.length - 1].position + 1
                            }]
                        })
                    }, 2e3);
                    return () => clearInterval(r)
                }, [a, n]), (0, r.jsxs)("div", {
                    className: "relative",
                    ref: i,
                    children: [(0, r.jsx)(O, {}), (0, r.jsx)(X, {}), (0, r.jsx)(G, {}), (0, r.jsxs)("div", {
                        className: "relative min-h-screen w-full overflow-hidden",
                        children: [(0, r.jsx)(H, {}), (0, r.jsx)(W, {}), n && e.map(e => (0, r.jsx)(D, { ...e
                        }, "".concat(e.src, "-").concat(e.position))), (0, r.jsx)(K, {})]
                    })]
                })
            }
            var Z = a(9757),
                q = a(5055);
            let J = [{
                    src: "/songs/1 Heart, 1 Tree, 1 Cat - Tree In Cat feat Goob.mp3",
                    title: "(OFFICIAL) 1 Heart, 1 Tree, 1 Cat - Tree In Cat & Goob",
                    isOfficial: !0
                }, {
                    src: "https://innovunode.io/treeincat/TIC_HOWD_GET_THERE.mp3",
                    title: "(EUROBEAT) How'd it get There?"
                }, {
                    src: "https://www.innovunode.io/treeincat/TIC_LET_THE_CHAOS_BEGIN.mp3",
                    title: "(METAL) Let the Chaos Begin"
                }, {
                    src: "https://www.innovunode.io/treeincat/TIC_UNDER_MOONLIGHT_GLOW.mp3",
                    title: "(REGGAE) Under the Moonlight Glow"
                }, {
                    src: "https://innovunode.io/treeincat/TIC_BARK_AND_MEOW_FUNK.mp3",
                    title: "(FUNK) Bark and Meow Funk"
                }, {
                    src: "https://innovunode.io/treeincat/TIC_FIREMEN_DILLEMA.mp3",
                    title: "(EPIC OPERA) The Firemen Dilemma"
                }, {
                    src: "https://www.innovunode.io/treeincat/TIC_JAZZ_FOR_THE_ABSURB.mp3",
                    title: "(JAZZ) Jazz for the Absurd"
                }, {
                    src: "https://www.innovunode.io/treeincat/TIC_LUMBERJACK_TECHNO.mp3",
                    title: "(TECHNO) Lumberjack Conundrum"
                }, {
                    src: "https://www.innovunode.io/treeincat/TIC_THE_CHRISTMAS_CAROL.mp3",
                    title: "(X-MAS) The Christmas Tree in a Cat"
                }, {
                    src: "https://innovunode.io/treeincat/TIC_ONCE_A_FELINE.mp3",
                    title: "(COUNTRY) Once a Feline, Now Leafed in Disguise"
                }, {
                    src: "https://www.innovunode.io/treeincat/TIC_NATURES_PUZZLE_REGGAE.mp3",
                    title: "(REGGAE) Natures Puzzle"
                }],
                Y = function(e) {
                    let {
                        className: t = "",
                        onPlayingChange: a
                    } = e, [s, o] = (0, l.useState)(0), [n, c] = (0, l.useState)(!1), [d, m] = (0, l.useState)(!0), [x, u] = (0, l.useState)(!1), [h, p] = (0, l.useState)(0), [g, b] = (0, l.useState)(0), f = (0, l.useRef)(null), w = (0, l.useRef)(null), v = (0, l.useRef)(null);
                    (0, l.useEffect)(() => {
                        let e = w.current;
                        if (e) {
                            let t = () => {
                                m(!1)
                            };
                            return e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                        }
                    }, []), (0, l.useEffect)(() => {
                        let e = f.current;
                        if (!e) return;
                        let t = () => {
                            e.pause(), e.removeAttribute("src"), e.load()
                        };
                        e.src = J[s].src;
                        let a = async () => {
                            try {
                                await e.play()
                            } catch (e) {
                                console.log("Playback interrupted:", e)
                            }
                        };
                        n ? a() : e.pause();
                        let r = () => {
                            o(e => (e + 1) % J.length)
                        };
                        return e.addEventListener("ended", r), () => {
                            t(), e.removeEventListener("ended", r)
                        }
                    }, [s, n]), (0, l.useEffect)(() => {
                        let e = f.current;
                        if (!e) return;
                        let t = () => {
                            o(e => (e + 1) % J.length), c(!0)
                        };
                        return e.addEventListener("ended", t), () => {
                            e.removeEventListener("ended", t)
                        }
                    }, []), (0, l.useEffect)(() => {
                        let e = f.current;
                        if (e) {
                            let t = () => p(e.currentTime),
                                a = () => b(e.duration);
                            return e.addEventListener("timeupdate", t), e.addEventListener("durationchange", a), () => {
                                e.removeEventListener("timeupdate", t), e.removeEventListener("durationchange", a)
                            }
                        }
                    }, []), (0, l.useEffect)(() => {
                        let e = document.createElement("style");
                        return e.innerHTML = "\n      .official-song {\n        font-weight: bold !important;\n        background: linear-gradient(90deg, #4a00e0, #8e2de2, #6a3093, #8e2de2, #4a00e0);\n        background-size: 200% 100%;\n        animation: gradient-animation 3s ease infinite;\n        -webkit-background-clip: text;\n        background-clip: text;\n        color: transparent !important;\n        text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n      }\n\n      @keyframes gradient-animation {\n        0% { background-position: 0% 50%; }\n        50% { background-position: 100% 50%; }\n        100% { background-position: 0% 50%; }\n      }\n    ", document.head.appendChild(e), () => {
                            document.head.removeChild(e)
                        }
                    }, []);
                    let j = e => {
                            let t = Math.floor(e / 60),
                                a = Math.floor(e % 60);
                            return "".concat(t, ":").concat(a.toString().padStart(2, "0"))
                        },
                        y = e => {
                            var t;
                            o(e), c(!0), u(!0), a && a(!0), null === (t = f.current) || void 0 === t || t.play()
                        };
                    return (0, r.jsxs)("div", {
                        className: "ipod-classic ".concat(t),
                        style: {
                            aspectRatio: "5 / 8"
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "screen",
                            children: [(0, r.jsxs)("div", {
                                className: "status-bar",
                                children: [(0, r.jsx)("span", {
                                    className: "ipod-text",
                                    children: x ? "Now Playing" : "iPod"
                                }), (0, r.jsx)("span", {
                                    className: "battery",
                                    children: "\uD83D\uDD0B"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "content-wrapper",
                                children: x ? (0, r.jsxs)("div", {
                                    className: "now-playing-screen",
                                    children: [(0, r.jsx)("div", {
                                        className: "song-title ".concat(J[s].isOfficial ? "official-song" : ""),
                                        children: J[s].title
                                    }), (0, r.jsx)("div", {
                                        className: "album-art-container",
                                        children: (0, r.jsx)(i.default, {
                                            src: "/images/music/ipod_tic.webp",
                                            alt: "Tree in Cat",
                                            fill: !0,
                                            className: "object-contain animate-ipod-dance",
                                            priority: !0
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "timeline",
                                        children: [(0, r.jsx)("div", {
                                            className: "progress-bar",
                                            ref: v,
                                            onClick: e => {
                                                let t = v.current;
                                                if (t && f.current) {
                                                    let a = t.getBoundingClientRect(),
                                                        r = (e.clientX - a.left) / a.width * g;
                                                    f.current.currentTime = r, p(r)
                                                }
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: "progress",
                                                style: {
                                                    width: "".concat(h / g * 100, "%")
                                                }
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "time-display",
                                            children: [(0, r.jsx)("span", {
                                                children: j(h)
                                            }), (0, r.jsxs)("span", {
                                                children: ["-", j(g - h)]
                                            })]
                                        })]
                                    })]
                                }) : (0, r.jsxs)("div", {
                                    className: "song-list-container",
                                    ref: w,
                                    children: [(0, r.jsx)("ul", {
                                        className: "song-list",
                                        children: J.map((e, t) => (0, r.jsxs)("li", {
                                            className: "song ".concat(t === s && n ? "active" : "", " ").concat(e.isOfficial ? "official-song" : ""),
                                            onClick: () => y(t),
                                            children: [e.title, (0, r.jsx)("span", {
                                                className: "chevron",
                                                children: "›"
                                            })]
                                        }, t))
                                    }), d && (0, r.jsx)("div", {
                                        className: "scroll-indicator",
                                        children: "⌄"
                                    })]
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "etched-text",
                            children: "MUSIC"
                        }), (0, r.jsxs)("div", {
                            className: "control-wheel",
                            children: [(0, r.jsx)("div", {
                                className: "menu-text",
                                onClick: () => {
                                    u(!1)
                                },
                                children: "MENU"
                            }), (0, r.jsx)("button", {
                                className: "control-button back",
                                onClick: () => {
                                    o(e => (e - 1 + J.length) % J.length), c(!0)
                                },
                                children: (0, r.jsx)(Z.g, {
                                    icon: q.TH3
                                })
                            }), (0, r.jsx)("button", {
                                className: "control-button next",
                                onClick: () => {
                                    o(e => (e + 1) % J.length), c(!0)
                                },
                                children: (0, r.jsx)(Z.g, {
                                    icon: q.vFJ
                                })
                            }), (0, r.jsx)("button", {
                                className: "control-button play-pause",
                                onClick: () => {
                                    var e, t;
                                    n ? (null === (e = f.current) || void 0 === e || e.pause(), c(!1), u(!1), a && a(!1)) : (null === (t = f.current) || void 0 === t || t.play(), c(!0), u(!0), a && a(!0))
                                },
                                "data-playing": n,
                                children: (0, r.jsx)(Z.g, {
                                    icon: n ? q.G1Y : q.ijD
                                })
                            }), (0, r.jsx)("div", {
                                className: "center-button"
                            })]
                        }), (0, r.jsx)("audio", {
                            ref: f
                        })]
                    })
                },
                V = e => {
                    let {
                        isPlaying: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "absolute inset-0 z-0 overflow-hidden",
                        children: (0, r.jsx)("div", {
                            className: "sky-bg ".concat(t ? "playing-bg" : "default-bg"),
                            children: t && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "stars"
                                }), (0, r.jsx)("div", {
                                    className: "disco-ball"
                                }), (0, r.jsxs)("div", {
                                    className: "spotlight-container",
                                    children: [(0, r.jsx)("div", {
                                        className: "spotlight spotlight-1"
                                    }), (0, r.jsx)("div", {
                                        className: "spotlight spotlight-2"
                                    }), (0, r.jsx)("div", {
                                        className: "spotlight spotlight-3"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "sound-waves",
                                    children: [...Array(20)].map((e, t) => (0, r.jsx)("div", {
                                        className: "wave-bar",
                                        style: {
                                            "--height": "".concat(60 * Math.random() + 20, "%"),
                                            "--duration": "".concat(.5 * Math.random() + .5, "s")
                                        }
                                    }, t))
                                })]
                            })
                        })
                    })
                },
                $ = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 z-10 w-full min-h-screen bg-cover bg-center",
                    style: {
                        backgroundImage: "url('/images/music/music_background.webp')"
                    }
                }),
                ee = () => (0, r.jsx)("div", {
                    className: "absolute bottom-0 left-0 right-0 z-20 overflow-hidden",
                    children: (0, r.jsx)(i.default, {
                        src: "/images/music/music_foreground.webp",
                        alt: "Music Foreground",
                        width: 1920,
                        height: 400,
                        className: "w-full h-auto object-cover object-bottom",
                        priority: !0
                    })
                }),
                et = e => {
                    let {
                        isPlaying: t
                    } = e;
                    return t ? null : (0, r.jsx)("div", {
                        className: "absolute inset-0 z-5",
                        children: (0, r.jsx)(d, {})
                    })
                },
                ea = (0, l.forwardRef)((e, t) => {
                    let {
                        isPlaying: a
                    } = e;
                    return (0, r.jsxs)("div", {
                        ref: t,
                        className: "absolute bottom-[1%] md:bottom-[5%] left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-[-20%] md:right-[-20%] lg:right-[-10%] xl:right-[5%] sm:translate-x-0 z-30 w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]",
                        children: [a && (0, r.jsx)("div", {
                            className: "absolute top-[20%] left-1/2 w-[40%] -translate-x-1/2",
                            children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => {
                                let a = ["♪", "♫", "\uD83C\uDFB5"];
                                return (0, r.jsx)("div", {
                                    className: "music-note",
                                    style: {
                                        left: "".concat(100 * Math.random(), "%"),
                                        "--x-offset": "".concat(100 * Math.random() - 50, "px"),
                                        "--rotation": "".concat(45 * Math.random() - 22.5, "deg"),
                                        "--duration": "".concat(1 * Math.random() + 2)
                                    },
                                    children: a[t % a.length]
                                }, t)
                            })
                        }), (0, r.jsx)(i.default, {
                            src: "/images/music/TIC_sofa_music.webp",
                            alt: "TIC Sofa Music",
                            width: 1300,
                            height: 1e3,
                            className: "object-contain",
                            priority: !0
                        })]
                    })
                });
            ea.displayName = "SofaImage";
            let er = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useLayoutEffect)(() => {
                        if (!e.current) return;
                        let a = s.Ay.context(() => {
                            s.Ay.fromTo(e.current, {
                                filter: t ? "none" : "blur(30px)",
                                willChange: "opacity"
                            }, {
                                filter: t ? "none" : "blur(10px)",
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom",
                                    end: "top top",
                                    scrub: !t && .5
                                }
                            }), s.Ay.fromTo(e.current, {
                                opacity: 1
                            }, {
                                opacity: .5,
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top center-=700",
                                    end: "top top-=400",
                                    scrub: !t && .5
                                }
                            })
                        });
                        return () => a.revert()
                    }, [t]), (0, r.jsx)("div", {
                        ref: e,
                        className: "fixed top-[-15vw] left-[0%] z-30  w-[70vw] md:w-[70vw] lg:w-[55vw]",
                        children: (0, r.jsx)("div", {
                            className: "w-full min-h-screen",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/music/cloud_left.webp",
                                alt: "Left Cloud",
                                width: 1e3,
                                height: 1e3,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })
                    })
                },
                el = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useLayoutEffect)(() => {
                        if (!e.current) return;
                        let a = s.Ay.context(() => {
                            s.Ay.fromTo(e.current, {
                                filter: t ? "none" : "blur(30px)",
                                willChange: "opacity"
                            }, {
                                filter: t ? "none" : "blur(10px)",
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom",
                                    end: "top top",
                                    scrub: !t && .5
                                }
                            }), s.Ay.fromTo(e.current, {
                                opacity: 1
                            }, {
                                opacity: .5,
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top center-=700",
                                    end: "top top-=400",
                                    scrub: !t && .5
                                }
                            })
                        });
                        return () => a.revert()
                    }, [t]), (0, r.jsx)("div", {
                        ref: e,
                        className: "fixed top-[-17vw] -right-[0%] z-30  w-[70vw] md:w-[70vw] lg:w-[55vw]",
                        children: (0, r.jsx)("div", {
                            className: "w-full min-h-screen",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/music/cloud_right.webp",
                                alt: "Right Cloud",
                                width: 1e3,
                                height: 1e3,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        })
                    })
                },
                es = function() {
                    let [e, t] = (0, l.useState)(!1), a = (0, l.useRef)(null), o = (0, l.useRef)(null), i = n();
                    return (0, l.useLayoutEffect)(() => {
                        if (!a.current || !o.current) return;
                        let e = s.Ay.context(() => {
                            let e = s.Ay.timeline({
                                defaults: {
                                    ease: "power2.out",
                                    duration: i ? .8 : 1.2
                                }
                            });
                            e.fromTo(a.current, {
                                xPercent: -50,
                                opacity: 0
                            }, {
                                xPercent: 0,
                                opacity: 1,
                                scrollTrigger: {
                                    trigger: a.current,
                                    start: "top bottom-=50",
                                    end: "top center",
                                    scrub: !i && .5
                                }
                            }), e.fromTo(o.current, {
                                xPercent: 50,
                                opacity: 0
                            }, {
                                xPercent: 0,
                                opacity: 1,
                                scrollTrigger: {
                                    trigger: o.current,
                                    start: "top bottom-=50",
                                    end: "top center",
                                    scrub: !i && .5
                                }
                            })
                        }, a);
                        return () => e.revert()
                    }, [i]), (0, r.jsxs)("div", {
                        className: "relative overflow-hidden w-full",
                        children: [(0, r.jsx)(V, {
                            isPlaying: e
                        }), (0, r.jsx)(et, {
                            isPlaying: e
                        }), (0, r.jsx)(er, {}), (0, r.jsx)(el, {}), (0, r.jsx)($, {}), (0, r.jsx)("div", {
                            ref: a,
                            className: "relative min-h-screen flex flex-col items-center sm:items-start sm:right-[-10%] lg:right-[-15%] pt-[15vh] sm:pt-[20vh] md:pt-[15vh] lg:pt-[15vh] z-40",
                            children: (0, r.jsx)("div", {
                                className: "w-[80%] sm:w-[50%] md:w-[50%] lg:w-[500px] xl:w-[600px]",
                                children: (0, r.jsx)(Y, {
                                    onPlayingChange: t
                                })
                            })
                        }), (0, r.jsx)(ee, {}), (0, r.jsx)(ea, {
                            ref: o,
                            isPlaying: e
                        })]
                    })
                };
            var eo = a(4145);
            let ei = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
                    style: {
                        backgroundImage: "url('/images/exchanges/exchanges_background.jpg')"
                    },
                    children: (0, r.jsx)("div", {
                        className: "absolute top-0 left-0 w-full h-[150px] z-10 bg-gradient-to-b from-black to-transparent"
                    })
                }),
                en = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useLayoutEffect)(() => {
                        if (!e.current) return;
                        let a = s.Ay.context(() => {
                            s.Ay.utils.toArray(".nebula-animation").forEach(e => {
                                s.Ay.fromTo(e, {
                                    y: "20vh",
                                    willChange: "transform"
                                }, {
                                    y: 0,
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: e,
                                        start: "bottom bottom+=400",
                                        end: "top top",
                                        scrub: t ? .3 : .7
                                    }
                                })
                            })
                        });
                        return () => a.revert()
                    }, [t]), (0, r.jsxs)("div", {
                        className: "absolute top-0 left-0 right-0 z-20 w-full",
                        ref: e,
                        children: [(0, r.jsx)(i.default, {
                            src: "/images/exchanges/exchanges_top.webp",
                            alt: "Exchange transition",
                            width: 1920,
                            height: 200,
                            className: "w-full h-auto -translate-y-[99%]",
                            priority: !0
                        }), (0, r.jsx)("div", {
                            className: "absolute top-0 left-[2%] w-[60%] max-w-[600px] z-20 opacity-20 nebula-animation",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/exchanges/nebula2.webp",
                                alt: "Nebula",
                                width: 900,
                                height: 700,
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "absolute top-0 right-[2%] w-[35%] max-w-[550px] z-20 opacity-40 nebula-animation",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/exchanges/nebula1.webp",
                                alt: "Nebula",
                                width: 700,
                                height: 500,
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "absolute hidden lg:block top-[-40vh] left-1/2 -translate-x-1/2 w-[50%] max-w-[700px] z-20 opacity-40 nebula-animation",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/exchanges/nebula3.webp",
                                alt: "Nebula",
                                width: 1e3,
                                height: 400,
                                priority: !0
                            })
                        })]
                    })
                },
                ec = () => (0, r.jsx)("div", {
                    className: "absolute top-[10%] md:top-[4%] left-1/2 -translate-x-1/2 z-30 w-full text-center",
                    children: (0, r.jsx)("h1", {
                        className: "text-[4rem] md:text-[5rem] xl:text-[8rem] font-[Star] text-transparent bg-clip-text animate-gradient-flow",
                        children: "EXCHANGES"
                    })
                }),
                ed = () => (0, r.jsx)("div", {
                }),
                em = () => (0, r.jsx)("div", {
                    className: "absolute bottom-[-10vh] left-1/2 -translate-x-1/2 w-full max-w-[450px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[550px] px-4 md:mix-blend-lighten",
                    children: (0, r.jsxs)("div", {
                        className: "relative group sun-glow-container",
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 bg-red-600/30 blur-[50px] rounded-full -z-10 animate-glow-pulse"
                        }), (0, r.jsx)("div", {
                            className: "sun-gradient-overlay"
                        }), (0, r.jsx)(i.default, {
                            src: "/images/exchanges/TIC-behind.webp",
                            alt: "TIC Logo",
                            width: 700,
                            height: 700,
                            className: "w-full h-auto drop-shadow-[0_0_15px_rgba(248,113,113,1)] animate-tic-float relative z-10",
                            priority: !0
                        })]
                    })
                }),
                ex = () => {
                    let e = (0, l.useRef)(null),
                        t = n();
                    return (0, l.useLayoutEffect)(() => {
                        if (!e.current) return;
                        let a = s.Ay.context(() => {
                            s.Ay.fromTo(e.current, {
                                xPercent: -250,
                                yPercent: 100,
                                scale: 1.5,
                                opacity: 1,
                                willChange: "transform, opacity"
                            }, {
                                xPercent: 0,
                                yPercent: 0,
                                scale: .1,
                                opacity: .4,
                                ease: "power1.out",
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top bottom",
                                    end: "bottom middle",
                                    scrub: t ? .5 : 1
                                }
                            })
                        });
                        return () => a.revert()
                    }, [t]), (0, r.jsx)("div", {
                        ref: e,
                        className: "spaceship-animation absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[350px] z-30",
                        children: (0, r.jsx)(i.default, {
                            src: "/images/exchanges/spaceship_tic.webp",
                            alt: "Spaceship TIC",
                            width: 400,
                            height: 300,
                            className: "w-full h-auto animate-float relative z-10",
                            priority: !0
                        })
                    })
                },
                eu = () => (0, r.jsx)("div", {
                    className: "absolute top-[27%] xl:top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-4 md:mix-blend-lighten",
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10",
                        children: [(0, r.jsxs)("a", {                            
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-[170px] md:w-[200px] lg:w-[230px] xl:w-[260px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                            children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 bg-blue-400/20 blur-[40px] rounded-full -z-10 animate-glow-pulse"
                            }), (0, r.jsx)(i.default, {
                                src: "/images/exchanges/ascendex-logo.webp",
                                alt: "AscendEX",
                                width: 300,
                                height: 100,
                                className: "w-full h-auto lg:drop-shadow-[0_0_15px_rgba(96,165,250,0.9)] animate-exchange-float"
                            })]
                        }), (0, r.jsxs)("a", {                            
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-[170px] md:w-[200px] lg:w-[230px] xl:w-[260px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                            children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 bg-purple-400/20 blur-[40px] rounded-full -z-10 animate-glow-pulse delay-150"
                            }), (0, r.jsx)(i.default, {
                                src: "/images/exchanges/bitmart-logo.webp",
                                alt: "BitMart",
                                width: 300,
                                height: 100,
                                className: "w-full h-auto lg:drop-shadow-[0_0_15px_rgba(168,85,247,0.9)] animate-exchange-float delay-75"
                            })]
                        })]
                    })
                }),
                eh = () => (0, r.jsx)("div", {
                    className: "absolute top-[55%] lg:top-[57%] xl:top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-4 md:mix-blend-lighten",
                    children: (0, r.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center",
                        children: (0, r.jsx)("div", {
                            className: "col-span-full lg:col-span-3",
                            children: (0, r.jsxs)("div", {
                            })
                        })
                    })
                });

            function ep() {
                return (0, r.jsxs)("div", {
                    className: "relative",
                    children: [(0, r.jsx)(ei, {}), (0, r.jsx)(ex, {}), (0, r.jsx)(en, {}), (0, r.jsx)(ec, {}), (0, r.jsx)(ed, {}), (0, r.jsxs)("div", {
                        className: "relative min-h-screen w-full overflow-hidden z-30",
                        children: [(0, r.jsx)(eu, {}), (0, r.jsx)(em, {}), (0, r.jsx)(eh, {})]
                    })]
                })
            }
            let eg = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
                    style: {
                        backgroundImage: "url('/images/tokenomics/tokenomics_background.jpg')"
                    }
                }),
                eb = () => (0, r.jsx)("div", {
                    className: "absolute z-30 w-full top-[-10vh] sm:top-[-13vh] md:top-[-7vh] lg:top-[-12vh] xl:top-[-15vh] 2xl:top-[-17vh] 3xl:top-[-20vh] pointer-events-none",
                    children: (0, r.jsxs)("div", {
                        className: "relative w-full",
                        style: {
                            aspectRatio: "1920/600"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "hidden md:block absolute top-0 left-0 right-0 overflow-hidden",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/tokenomics/book.webp",
                                alt: "Book Decoration",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-cover object-top",
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "block md:hidden absolute top-0 left-0 right-0 overflow-hidden",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/tokenomics/book_sm.webp",
                                alt: "Book Decoration",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-cover object-top",
                                priority: !0
                            })
                        })]
                    })
                }),
                ef = () => (0, r.jsx)("div", {
                    className: "absolute z-30 w-full bottom-0 pointer-events-none",
                    children: (0, r.jsxs)("div", {
                        className: "relative w-full",
                        style: {
                            aspectRatio: "1920/600"
                        },
                        children: [(0, r.jsx)("div", {
                            className: "absolute bottom-[1vh] sm:bottom-[2vh] md:bottom-[0vh] lg:bottom-[2vh] xl:bottom-[2vh] 2xl:bottom-[3vh] xl:left-[7%] 2xl:left-[2%] z-10 w-[60%] sm:w-[30%] md:w-[55%] lg:w-[40%] xl:w-[40%] 2xl:w-[38%]",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/tokenomics/two_tics.webp",
                                alt: "Two TICs",
                                width: 1e3,
                                height: 1e3,
                                className: "w-full h-auto object-contain",
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/tokenomics/tokenomics_foreground.webp",
                                alt: "Tokenomics Foreground",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-cover object-bottom",
                                priority: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: "block md:hidden absolute bottom-0 left-0 right-0 overflow-hidden",
                            children: (0, r.jsx)(i.default, {
                                src: "/images/tokenomics/tokenomics_foreground_sm.webp",
                                alt: "Tokenomics Foreground",
                                width: 1920,
                                height: 400,
                                className: "w-full h-auto object-cover object-bottom",
                                priority: !0
                            })
                        })]
                    })
                });

            function ew() {
                let e = (0, l.useRef)(null),
                    [t, a] = (0, l.useState)(!1),
                    s = "0xcomingsoon",
                    o = async () => {
                        try {
                            await navigator.clipboard.writeText(s), a(!0), setTimeout(() => a(!1), 2e3)
                        } catch (e) {
                            console.error("Failed to copy:", e)
                        }
                    };
                return (0, r.jsxs)("div", {
                    className: "relative",
                    ref: e,
                    children: [(0, r.jsx)(eg, {}), (0, r.jsx)(eb, {}), (0, r.jsx)("div", {
                        className: "relative min-h-screen w-full overflow-hidden z-30 flex items-center top-[-5vh] sm:top-[-10vh] md:top-[-10vh] lg:top-[-1vh] xl:top-[-15vh] 2xl:top-[-15vh]",
                        children: (0, r.jsx)("div", {
                            className: "w-full flex justify-center xl:justify-end xl:pr-[5%] 2xl:pr-[5%]",
                            children: (0, r.jsxs)("div", {
                                className: "relative w-[95%] h-[75vh] sm:w-[95%] sm:h-[70vh] md:w-[90%] md:h-[65vh] lg:w-[90%] lg:h-[75vh] xl:w-[60%] xl:h-[700px] 2xl:w-[60%] 2xl:h-[780px] 3xl:w-[40%] 3xl:h-[700px] perspective-1000",
                                children: [(0, r.jsxs)("div", {
                                    className: "absolute inset-0 rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-[#2d3129] border-t-[#41483d] border-l-[#363c32] before:absolute before:inset-0 before:bg-[repeating-radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_15%)] before:opacity-20 before:mix-blend-overlay after:absolute after:inset-0 after:bg-[linear-gradient(30deg,_transparent_48%,_rgba(255,255,255,0.08)_50%,_transparent_52%)] after:opacity-40 overflow-hidden animate-tokenomics-float",
                                    style: {
                                        backgroundImage: "url('/images/tokenomics/blackboard_tile.webp')",
                                        backgroundRepeat: "repeat",
                                        backgroundSize: "auto"
                                    },
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center z-10",
                                        children: (0, r.jsx)("h1", {
                                            className: "font-chalk text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] text-[rgba(255,255,255,0.9)]",
                                            children: "$TREEINCAT"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute top-[20%] sm:top-[24%] md:top-[22%] lg:top-[30%] xl:top-[30%] 2xl:top-[30%] w-full px-8 z-10",
                                        children: (0, r.jsxs)("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 lg:gap-4 ",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0, r.jsx)("h3", {
                                                    className: "font-chalk text-[rgba(255,255,255,0.7)] text-[1.2rem] sm:text-[1.5rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[2rem] text-center",
                                                    children: "TOTAL SUPPLY"
                                                }), (0, r.jsx)("p", {
                                                    className: "font-chalk text-[rgba(255,255,255,0.9)] text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] mt-2",
                                                    children: "1 Billion"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0, r.jsx)("h3", {
                                                    className: "font-chalk text-[rgba(255,255,255,0.7)] text-[1.2rem] sm:text-[1.5rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[2rem] text-center",
                                                    children: "TAX"
                                                }), (0, r.jsx)("p", {
                                                    className: "font-chalk text-[rgba(255,255,255,0.9)] text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] mt-2 text-center",
                                                    children: "0% BUY & SELL"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "flex flex-col items-center col-span-2 lg:col-span-1 mx-auto",
                                                children: [(0, r.jsx)("h3", {
                                                    className: "font-chalk text-[rgba(255,255,255,0.7)] text-[1.2rem] sm:text-[1.5rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[2rem] text-center",
                                                    children: "LP Burn"
                                                }), (0, r.jsx)("p", {
                                                    className: "font-chalk text-[rgba(255,255,255,0.9)] text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] mt-2",
                                                    children: "100%"
                                                })]
                                            })]
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "absolute bottom-[12%] w-full px-8 z-10 flex flex-col items-center",
                                        children: [(0, r.jsx)("h3", {
                                            className: "font-chalk text-[rgba(255,255,255,0.7)] text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[2rem] text-center mb-3",
                                            children: "CONTRACT ADDRESS"
                                        }), (0, r.jsx)("p", {
                                            className: "font-chalk text-[rgba(255,255,255,0.9)] text-[1.2rem] sm:text-[1.6rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[2.8rem] text-center mb-6  max-w-[90%] break-all",
                                            children: s
                                        }), (0, r.jsx)("button", {
                                            onClick: o,
                                            className: "font-chalk text-[1.2rem] md:text-[1.4rem] px-6 py-2 relative\n                            transition-all duration-300\n                            ".concat(t ? "text-[#96E9A2] scale-95" : "text-[rgba(255,255,255,0.9)] hover:text-[#96E9A2] hover:scale-105", "\n                            before:content-[''] before:absolute before:inset-0\n                            before:border-2 before:border-[rgba(255,255,255,0.6)]\n                            before:rounded-md before:transition-all\n                            hover:before:scale-105 active:before:scale-95\n                            ").concat(t ? "before:border-[#96E9A2]" : ""),
                                            children: t ? "Copied!" : "Copy to Clipboard"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "absolute inset-0 border-[12px] border-[#3d2f1d] rounded-sm bg-[linear-gradient(45deg,rgba(56, 48, 37, 0.2)_0%,rgba(65, 58, 43, 0.1)_50%,rgba(58, 50, 39, 0.2)_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none",
                                        children: [(0, r.jsx)("div", {
                                            className: "absolute inset-[12px] rounded-sm"
                                        }), [{
                                            top: "15px",
                                            left: "15px"
                                        }, {
                                            top: "15px",
                                            right: "15px"
                                        }, {
                                            bottom: "15px",
                                            left: "15px"
                                        }, {
                                            bottom: "15px",
                                            right: "15px"
                                        }].map((e, t) => (0, r.jsx)("div", {
                                            className: "absolute w-5 h-5 rounded-full pointer-events-none",
                                            style: { ...e,
                                                background: "radial-gradient(circle at 40% 40%, #a39070 0%, #746952 60%, #5a4d3c 100%)",
                                                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.2)",
                                                transform: "rotate(".concat(45 * t, "deg)")
                                            }
                                        }, t))]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.4)_0%,_transparent_70%)]  transition-opacity duration-300 blur-[30px] scale-90"
                                })]
                            })
                        })
                    }), (0, r.jsx)(ef, {})]
                })
            }
            var ev = a(104),
                ej = a(6584);
            let ey = "G-0XVSKZ1F20",
                eN = e => {
                    window.gtag && window.gtag("event", "section_view", {
                        event_category: "Scroll",
                        event_label: e
                    })
                };

            function e_() {
                let e = (0, l.useRef)(null);
                return (0, l.useLayoutEffect)(() => {
                    let e = s.Ay.utils.toArray("[data-pinned='true']"),
                        t = [];
                    return e.forEach(e => {
                        let a = e.querySelector("div"),
                            r = "+=".concat(e.offsetHeight),
                            l = e.id,
                            i = o.u.create({
                                trigger: e,
                                start: "top top",
                                end: r,
                                pin: !0,
                                pinSpacing: !1,
                                onEnter: () => {
                                    eN(l)
                                }
                            }),
                            n = s.Ay.to(a, {
                                yPercent: 0,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top top",
                                    end: r,
                                    scrub: !0
                                }
                            });
                        n.scrollTrigger && t.push(i, n.scrollTrigger)
                    }), o.u.refresh(), () => {
                        t.forEach(e => e.kill())
                    }
                }, []), (0, r.jsxs)("main", {
                    ref: e,
                    className: "relative",
                    children: [(0, r.jsx)(ej.default, {
                        strategy: "afterInteractive",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(ey)
                    }), (0, r.jsx)(ej.default, {
                        id: "gtag-init",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(ey, "');\n          ")
                        }
                    }), (0, r.jsx)(eo.MobileNav, {}), (0, r.jsx)(ek, {
                        id: "hero",
                        children: (0, r.jsx)(b, {})
                    }), (0, r.jsx)(ek, {
                        id: "about",
                        className: "mt-[120px] lg:mt-[200px] xl:mt-[310px] 2xl:mt-[330px]",
                        children: (0, r.jsx)(j, {})
                    }), (0, r.jsx)(ek, {
                        id: "games",
                        className: "mt-[170px] md:mt-[200px] lg:mt-[220px] xl:mt-[400px]",
                        children: (0, r.jsx)(M, {})
                    }), (0, r.jsx)(ek, {
                        id: "art",
                        className: "mt-[200px] md:mt-[320px] xl:mt-[300px] ",
                        children: (0, r.jsx)(Q, {})
                    }), (0, r.jsx)(ek, {
                        id: "music",
                        className: "mt-[180px] md:mt-[270px] lg:mt-[310px] xl:mt-[550px]",
                        children: (0, r.jsx)(es, {})
                    }), (0, r.jsx)(ek, {
                        id: "exchanges",
                        className: "mt-[180px] md:mt-[270px] lg:mt-[310px] xl:mt-[550px]",
                        children: (0, r.jsx)(ep, {})
                    }), (0, r.jsx)(ek, {
                        id: "tokenomics",
                        className: "mt-[180px] md:mt-[270px] lg:mt-[310px] xl:mt-[400px]",
                        children: (0, r.jsx)(ew, {})
                    }), (0, r.jsx)(ev.Footer, {})]
                })
            }

            function ek(e) {
                let {
                    id: t,
                    children: a,
                    className: l = ""
                } = e;
                return (0, r.jsx)("section", {
                    id: t,
                    "data-pinned": "true",
                    className: "h-[100vh] relative ".concat(l),
                    children: (0, r.jsx)("div", {
                        className: "h-full relative",
                        children: a
                    })
                })
            }
            s.Ay.registerPlugin(o.u)
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [266, 592, 875, 190, 214, 324, 441, 517, 358], () => t(7676)), _N_E = e.O()
    }
]);