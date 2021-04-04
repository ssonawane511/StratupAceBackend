/** @format */

(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    45: function (e, t, c) {},
    52: function (e, t, c) {},
    53: function (e, t, c) {},
    54: function (e, t, c) {},
    60: function (e, t, c) {},
    61: function (e, t, c) {},
    82: function (e, t, c) {},
    83: function (e, t, c) {},
    84: function (e, t, c) {},
    85: function (e, t, c) {},
    86: function (e, t, c) {},
    87: function (e, t, c) {},
    88: function (e, t, c) {},
    89: function (e, t, c) {},
    91: function (e, t, c) {
      "use strict";
      c.r(t);
      var s = c(3),
        a = c.n(s),
        l = c(46),
        n = c.n(l),
        i = (c(52), c(53), c(14)),
        r = c(10),
        j = (c(54), c.p + "static/media/hero.4192413c.svg"),
        o = c.p + "static/media/startup.6a6eb003.jpg",
        d = c.p + "static/media/mentor.21caa391.png",
        b = c(0),
        m = function () {
          var e = Object(r.f)();
          return Object(b.jsxs)("div", {
            className: "container",
            children: [
              Object(b.jsxs)("div", {
                className: "row align-items-center",
                children: [
                  Object(b.jsx)("div", {
                    className: "col-md-6",
                    children: Object(b.jsx)("img", {
                      className: "img_100",
                      style: { padding: "30px" },
                      src: j,
                      alt: "hero",
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-md-6",
                    children: Object(b.jsxs)("h1", {
                      className: "heroTitle",
                      children: [
                        "We're In The Business Of Helping",
                        Object(b.jsx)("br", {}),
                        " You Start Your ",
                        Object(b.jsx)("strong", { children: " Business" }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(b.jsxs)("div", {
                className: "row mt-100",
                children: [
                  Object(b.jsx)("div", {
                    className: "col-6",
                    children: Object(b.jsx)("div", {
                      className: " card",
                      onClick: function (t) {
                        e.push("/startup/login");
                      },
                      style: { backgroundImage: 'url("'.concat(o, '")') },
                      children: Object(b.jsx)("h1", {
                        children: "login as founder",
                      }),
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-6",
                    children: Object(b.jsx)("div", {
                      className: " card",
                      onClick: function (t) {
                        e.push("/mentor/login");
                      },
                      style: { backgroundImage: 'url("'.concat(d, '")') },
                      children: Object(b.jsx)("h1", {
                        children: "login as Mentor",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        h = (c(60), c.p + "static/media/logo.37f04f44.png"),
        u = function () {
          return Object(b.jsx)("div", {
            className: "container",
            children: Object(b.jsx)("div", {
              className: "header",
              children: Object(b.jsxs)("nav", {
                className: "navbar navbar-expand-lg",
                children: [
                  Object(b.jsx)("a", {
                    className: "navbar-brand",
                    href: "/",
                    children: Object(b.jsx)("div", {
                      className: "logo",
                      children: Object(b.jsx)("img", { src: h, alt: "" }),
                    }),
                  }),
                  Object(b.jsx)("button", {
                    className: "navbar-toggler collapsed",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarTogglerDemo02",
                    "aria-controls": "navbarTogglerDemo02",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: Object(b.jsxs)("svg", {
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 16 16",
                      className: "bi bi-chevron-double-down",
                      fill: "currentColor",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        Object(b.jsx)("path", {
                          "fill-rule": "evenodd",
                          d:
                            "M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
                        }),
                        Object(b.jsx)("path", {
                          "fill-rule": "evenodd",
                          d:
                            "M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
                        }),
                      ],
                    }),
                  }),
                  Object(b.jsxs)("div", {
                    className: "navbar-collapse collapse",
                    id: "navbarTogglerDemo02",
                    children: [
                      Object(b.jsx)("ul", {
                        className: "navbar-nav m-auto mt-2 mt-lg-0",
                        children: Object(b.jsx)("li", {
                          className: "nav-item active",
                          children: Object(b.jsxs)("a", {
                            className: "nav-link",
                            href: "#home",
                            children: ["Home", " "],
                          }),
                        }),
                      }),
                      Object(b.jsx)("form", {
                        className: "form-inline my-2 my-lg-0",
                        children: Object(b.jsx)("button", {
                          className: "btn signup-btn",
                          type: "submit",
                          children: "Sign up",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        x = c(4),
        O = c.p + "static/media/login.e9633564.svg",
        p = (c(61), c(13)),
        v = function () {
          var e = Object(r.f)(),
            t = Object(s.useState)(""),
            c = Object(x.a)(t, 2),
            a = c[0],
            l = c[1],
            n = Object(s.useState)(""),
            i = Object(x.a)(n, 2),
            j = i[0],
            o = i[1],
            d = Object(s.useState)(null),
            m = Object(x.a)(d, 2),
            h = m[0],
            u = m[1],
            v = Object(s.useState)(null),
            f = Object(x.a)(v, 2),
            g = f[0],
            N = f[1];
          return Object(b.jsx)("div", {
            className: "container",
            children: Object(b.jsx)("div", {
              className:
                "row align-items-center justify-content-center fullWindow",
              children: Object(b.jsx)("div", {
                className: "col-md-4",
                children: Object(b.jsxs)("div", {
                  className: "loginWindow",
                  children: [
                    Object(b.jsxs)("div", {
                      className: "text-center",
                      children: [
                        Object(b.jsx)("img", {
                          className: "img_100",
                          src: O,
                          alt: "loginImg",
                        }),
                        Object(b.jsx)("h4", { children: "Startup Login" }),
                      ],
                    }),
                    h
                      ? Object(b.jsx)("p", {
                          className: "mt-20",
                          style: { color: "red" },
                          children: {
                            "auth/user-not-found": " User does not found",
                            "auth/wrong-password": " wrong password",
                            "auth/invalid-email": "Invalid Email",
                          }["".concat(h)],
                        })
                      : " ",
                    g
                      ? Object(b.jsx)("p", {
                          className: "mt-20",
                          style: { color: "green" },
                          children: "login successfull",
                        })
                      : " ",
                    Object(b.jsxs)("form", {
                      onSubmit: function (t) {
                        t.preventDefault(),
                          p.a
                            .auth()
                            .signInWithEmailAndPassword(a, j)
                            .then(function (t) {
                              u(null), N(!0), e.push("/startup/check");
                            })
                            .catch(function (e) {
                              u(e.code);
                            });
                      },
                      children: [
                        Object(b.jsxs)("div", {
                          className: "input-group flex-nowrap mt-20",
                          children: [
                            Object(b.jsx)("div", {
                              className: "input-group-prepend",
                              children: Object(b.jsx)("span", {
                                className: "input-group-text",
                                id: "addon-wrapping",
                                children: "@",
                              }),
                            }),
                            Object(b.jsx)("input", {
                              type: "text",
                              className: "form-control",
                              placeholder: "email",
                              "aria-label": "email",
                              "aria-describedby": "addon-wrapping",
                              value: a,
                              onChange: function (e) {
                                return l(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(b.jsxs)("div", {
                          className: "input-group flex-nowrap mt-20",
                          children: [
                            Object(b.jsx)("div", {
                              className: "input-group-prepend",
                              children: Object(b.jsx)("span", {
                                className: "input-group-text",
                                id: "addon-wrapping",
                                children: Object(b.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "16",
                                  height: "16",
                                  fill: "currentColor",
                                  className: "bi bi-shield-lock",
                                  viewBox: "0 0 16 16",
                                  children: [
                                    Object(b.jsx)("path", {
                                      d:
                                        "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z",
                                    }),
                                    Object(b.jsx)("path", {
                                      d:
                                        "M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(b.jsx)("input", {
                              type: "password",
                              className: "form-control",
                              placeholder: "password",
                              "aria-label": "password",
                              "aria-describedby": "addon-wrapping",
                              value: j,
                              onChange: function (e) {
                                return o(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(b.jsx)("div", {
                          className: "mt-20 text-center",
                          children: Object(b.jsx)("button", {
                            className: "btn btn-primary",
                            type: "submit",
                            children: "loign",
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "mt-20 text-center",
                          children: Object(b.jsxs)("p", {
                            style: { color: "#ccc" },
                            children: [
                              "Don't have an account?",
                              " ",
                              Object(b.jsx)("a", {
                                href: "/startup/signup",
                                style: { color: "blue" },
                                children: "Sign up",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        f = c.p + "static/media/signup.ee342221.svg",
        g = c(9),
        N = c.n(g),
        w = Object(s.createContext)();
      function y(e) {
        var t = e.children,
          c = (function () {
            var e = Object(r.f)(),
              t = Object(s.useState)(null),
              c = Object(x.a)(t, 2),
              a = c[0],
              l = c[1],
              n = Object(s.useState)(!0),
              i = Object(x.a)(n, 2),
              j = i[0],
              o = i[1],
              d = Object(s.useState)(null),
              b = Object(x.a)(d, 2),
              m = b[0],
              h = b[1];
            return (
              Object(s.useEffect)(function () {
                o(!0),
                  p.a.auth().onAuthStateChanged(function (e) {
                    e
                      ? e.getIdTokenResult().then(function (t) {
                          t.claims.startup
                            ? h("startup")
                            : t.claims.mentor && h("mentor"),
                            l(e.providerData[0]),
                            o(!1);
                        })
                      : (h(null), l(null));
                  });
              }, []),
              {
                signOut: function () {
                  p.a
                    .auth()
                    .signOut()
                    .then(function () {
                      e.push("/");
                    })
                    .catch(function (e) {});
                },
                user: a,
                claim: m,
                loading: j,
                isLogedIn: !!a,
              }
            );
          })();
        return Object(b.jsx)(w.Provider, { value: c, children: t });
      }
      var S = function () {
          return Object(s.useContext)(w);
        },
        C = function () {
          var e = Object(r.f)(),
            t = S().signOut,
            c = Object(s.useState)(""),
            a = Object(x.a)(c, 2),
            l = a[0],
            n = a[1],
            i = Object(s.useState)(""),
            j = Object(x.a)(i, 2),
            o = j[0],
            d = j[1],
            m = Object(s.useState)(null),
            h = Object(x.a)(m, 2),
            u = h[0],
            O = h[1],
            v = Object(s.useState)(null),
            g = Object(x.a)(v, 2),
            w = g[0],
            y = g[1];
          return Object(b.jsx)("div", {
            children: Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsx)("div", {
                className:
                  "row align-items-center justify-content-center fullWindow",
                children: Object(b.jsx)("div", {
                  className: "col-md-4",
                  children: Object(b.jsxs)("div", {
                    className: "loginWindow",
                    children: [
                      Object(b.jsxs)("div", {
                        className: "text-center",
                        children: [
                          Object(b.jsx)("img", {
                            className: "img_100",
                            src: f,
                            alt: "loginImg",
                          }),
                          Object(b.jsx)("h4", { children: "Startup signup" }),
                        ],
                      }),
                      u
                        ? Object(b.jsx)("p", {
                            className: "mt-20",
                            style: { color: "red" },
                            children: {
                              "auth/user-not-found": " User does not found",
                              "auth/weak-password":
                                " Password must be 6 letters",
                              "auth/invalid-email": "Invalid Email",
                              "auth/email-already-in-use": "email already used",
                            }["".concat(u)],
                          })
                        : " ",
                      w
                        ? Object(b.jsx)("p", {
                            className: "mt-20",
                            style: { color: "green" },
                            children: "Signup successfull",
                          })
                        : " ",
                      Object(b.jsxs)("form", {
                        onSubmit: function (c) {
                          c.preventDefault(),
                            p.a
                              .auth()
                              .createUserWithEmailAndPassword(l, o)
                              .then(function (c) {
                                y(!0),
                                  N()({
                                    method: "post",
                                    url: "/api/startups/claim_startup",
                                    data: { uid: c.user.uid },
                                  }).then(function (c) {
                                    c.data.success &&
                                      (t(), e.push("/startup/login"));
                                  });
                              })
                              .catch(function (e) {
                                O(e.code);
                              });
                        },
                        children: [
                          Object(b.jsxs)("div", {
                            className: "input-group flex-nowrap mt-20",
                            children: [
                              Object(b.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(b.jsx)("span", {
                                  className: "input-group-text",
                                  id: "addon-wrapping",
                                  children: "@",
                                }),
                              }),
                              Object(b.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "email",
                                "aria-label": "email",
                                "aria-describedby": "addon-wrapping",
                                value: l,
                                onChange: function (e) {
                                  return n(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(b.jsxs)("div", {
                            className: "input-group flex-nowrap mt-20",
                            children: [
                              Object(b.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(b.jsx)("span", {
                                  className: "input-group-text",
                                  id: "addon-wrapping",
                                  children: Object(b.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-shield-lock",
                                    viewBox: "0 0 16 16",
                                    children: [
                                      Object(b.jsx)("path", {
                                        d:
                                          "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z",
                                      }),
                                      Object(b.jsx)("path", {
                                        d:
                                          "M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              Object(b.jsx)("input", {
                                type: "password",
                                className: "form-control",
                                placeholder: "password",
                                "aria-label": "password",
                                "aria-describedby": "addon-wrapping",
                                value: o,
                                onChange: function (e) {
                                  return d(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-20 text-center",
                            children: Object(b.jsx)("button", {
                              className: "btn btn-primary",
                              type: "submit",
                              children: "singup",
                            }),
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-20 text-center",
                            children: Object(b.jsxs)("p", {
                              style: { color: "#ccc" },
                              children: [
                                "Already have an account?",
                                " ",
                                Object(b.jsx)("a", {
                                  href: "/startup/login",
                                  style: { color: "blue" },
                                  children: "Log in",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        k = c(33),
        z = (c(82), c(25)),
        M =
          (c(44),
          c(83),
          function () {
            return Object(b.jsx)("div", {
              children: Object(b.jsxs)("div", {
                className: "lds-roller",
                children: [
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                  Object(b.jsx)("div", {}),
                ],
              }),
            });
          }),
        _ = function () {
          var e = S(),
            t = e.user,
            c = e.loading,
            a = new z.a(),
            l = Object(r.f)(),
            n = Object(s.useState)(""),
            i = Object(x.a)(n, 2),
            j = i[0],
            o = i[1],
            d = Object(s.useState)(""),
            m = Object(x.a)(d, 2),
            h = m[0],
            u = m[1],
            O = Object(s.useState)(""),
            p = Object(x.a)(O, 2),
            v = p[0],
            f = p[1],
            g = Object(s.useState)(""),
            w = Object(x.a)(g, 2),
            y = w[0],
            C = w[1],
            _ = Object(s.useState)(""),
            A = Object(x.a)(_, 2),
            B = A[0],
            L = A[1],
            P = Object(s.useState)(""),
            D = Object(x.a)(P, 2),
            E = D[0],
            T = D[1],
            q = Object(s.useState)(""),
            H = Object(x.a)(q, 2),
            V = H[0],
            W = H[1],
            I = Object(s.useState)(""),
            F = Object(x.a)(I, 2),
            R = F[0],
            Y = F[1],
            G = Object(s.useState)(""),
            U = Object(x.a)(G, 2),
            Q = U[0],
            J = U[1],
            K = Object(s.useState)(""),
            Z = Object(x.a)(K, 2),
            X = Z[0],
            $ = Z[1],
            ee = Object(s.useState)(""),
            te = Object(x.a)(ee, 2),
            ce = te[0],
            se = te[1],
            ae = Object(s.useState)(""),
            le = Object(x.a)(ae, 2),
            ne = le[0],
            ie = le[1],
            re = Object(s.useState)(""),
            je = Object(x.a)(re, 2),
            oe = je[0],
            de = je[1],
            be = Object(s.useState)(""),
            me = Object(x.a)(be, 2),
            he = me[0],
            ue = me[1],
            xe = Object(s.useState)(""),
            Oe = Object(x.a)(xe, 2),
            pe = Oe[0],
            ve = Oe[1],
            fe = Object(s.useState)(0),
            ge = Object(x.a)(fe, 2),
            Ne = ge[0],
            we = ge[1],
            ye = Object(s.useState)(null),
            Se = Object(x.a)(ye, 2),
            Ce = Se[0],
            ke = Se[1],
            ze = Object(s.useState)(""),
            Me = Object(x.a)(ze, 2),
            _e = Me[0],
            Ae = Me[1],
            Be = Object(s.useState)(""),
            Le = Object(x.a)(Be, 2),
            Pe = Le[0],
            De = Le[1],
            Ee = Object(s.useState)(null),
            Te = Object(x.a)(Ee, 2),
            qe = Te[0],
            He = Te[1],
            Ve = Object(s.useState)(null),
            We = Object(x.a)(Ve, 2),
            Ie = (We[0], We[1]);
          Object(s.useEffect)(
            function () {
              if (!c) {
                var e = t.email;
                C(e),
                  Ie(t.uid),
                  N()({
                    method: "post",
                    url: "/api/startups/email",
                    data: { email: e },
                  }).then(function (e) {
                    e.data.success &&
                      (o(e.data.data.fname),
                      u(e.data.data.mname),
                      f(e.data.data.lname),
                      C(e.data.data.mail),
                      L(e.data.data.phone),
                      T(e.data.data.dob),
                      W(e.data.data.residential_Address),
                      Y(e.data.data.company_Address),
                      J(e.data.data.profession),
                      $(e.data.data.qualification),
                      ie(e.data.data.description),
                      ue(e.data.data.startupDetails.industryType),
                      we(e.data.data.startupDetails.numberOfColleaugues),
                      Ae(e.data.data.startupDetails.domain),
                      De(e.data.data.handle));
                  });
              }
            },
            [c]
          );
          var Fe,
            Re = {
              handle: { value: Pe, setState: De },
              f_name: { value: j, setState: o },
              m_name: { value: h, setState: u },
              l_name: { value: v, setState: f },
              email: { value: y, setState: C },
              phone: { value: B, setState: L },
              date: { value: E, setState: T },
              r_address: { value: V, setState: W },
              c_address: { value: R, setState: Y },
              Profession: { value: Q, setState: J },
              Qualifications: { value: X, setState: $ },
              wlink: { value: ce, setState: se },
              details: { value: ne, setState: ie },
              product: { value: oe, setState: de },
              service: { value: pe, setState: ve },
              Colleaugues: { value: Ne, setState: we },
              industryType: { value: he, setState: ue },
              domain: { value: _e, setState: Ae },
            },
            Ye = function (e) {
              var t = e.target.id;
              (0, Re[t].setState)(e.target.value);
            };
          return c
            ? Object(b.jsx)("div", {
                className:
                  "row fullWindow justify-content-center align-items-center",
                children: Object(b.jsx)(M, {}),
              })
            : Object(b.jsxs)("div", {
                className: "container mt-100 mb-100 ",
                children: [
                  Object(b.jsxs)("div", {
                    className: "row form_area",
                    children: [
                      Object(b.jsx)("div", {
                        className: "col-3",
                        children: Object(b.jsx)("img", {
                          src: "https://via.placeholder.com/150",
                          className: "rounded-circle",
                          alt: "logo",
                        }),
                      }),
                      Object(b.jsxs)("div", {
                        className: "col-9",
                        children: [
                          Object(b.jsx)("input", {
                            type: "text",
                            name: "handle",
                            id: "handle",
                            className: "handleFeild",
                            placeholder: "Handle",
                            value: Pe,
                            onChange: function (e) {
                              return (function (e) {
                                De(e),
                                  N()({
                                    url: "/api/startups/handle/".concat(e),
                                    method: "get",
                                  })
                                    .then(function (e) {
                                      e.data.success ? He(!1) : He(!0);
                                    })
                                    .catch(function (e) {});
                              })(e.target.value);
                            },
                            required: !0,
                          }),
                          qe
                            ? Object(b.jsx)("p", {
                                style: { color: "red" },
                                children: " Handle Alredy Exist",
                              })
                            : "",
                        ],
                      }),
                    ],
                  }),
                  Object(b.jsx)("hr", { className: "section2" }),
                  Object(b.jsx)("form", {
                    className: "signup-form",
                    onSubmit: function (e) {
                      e.preventDefault(),
                        null !== Pe &&
                        "" !== Pe &&
                        " " !== Pe &&
                        null !== j &&
                        " " !== j &&
                        "" !== j &&
                        null !== h &&
                        " " !== h &&
                        "" !== h &&
                        null !== v &&
                        "" !== v &&
                        " " !== v &&
                        null !== y &&
                        "" !== y &&
                        " " !== y &&
                        null !== B &&
                        " " !== B &&
                        "" !== B &&
                        null !== E &&
                        "" !== E &&
                        " " !== E &&
                        null !== V &&
                        " " !== V &&
                        "" !== V &&
                        null !== R &&
                        " " !== R &&
                        "" !== R &&
                        null !== Q &&
                        " " !== Q &&
                        "" !== Q &&
                        null !== X &&
                        " " !== X &&
                        "" !== X &&
                        null !== ce &&
                        " " !== ce &&
                        "" !== ce &&
                        null !== ne &&
                        " " !== ne &&
                        " " !== ne &&
                        null !== Ne &&
                        " " !== Ne &&
                        "" !== Ne &&
                        null !== he &&
                        " " !== he &&
                        "" !== he &&
                        null !== _e &&
                        " " !== _e &&
                        "" !== _e
                          ? N()({
                              method: "post",
                              url: "/api/startups/",
                              data: {
                                handle: Pe,
                                fname: j,
                                mname: h,
                                lname: v,
                                mail: y,
                                phone: B,
                                dob: E,
                                residential_Address: V,
                                company_Address: R,
                                profession: Q,
                                qualification: X,
                                perious_startup: ce,
                                description: ne,
                                startupDetails: {
                                  domain: _e,
                                  industryType: he,
                                  numberOfColleaugues: Ne,
                                },
                              },
                            }).then(function (e) {
                              e.data.success
                                ? (a.success(e.data.message),
                                  l.push("/startup/registrationSuccess"))
                                : a.error(e.data.message);
                            })
                          : ke("please fill all the deatils");
                    },
                    children: Object(b.jsxs)("div", {
                      className: "container form_area",
                      children: [
                        Ce
                          ? Object(b.jsx)("p", {
                              className: "text-center",
                              style: { color: "red" },
                              children: Ce,
                            })
                          : "",
                        Object(b.jsx)("h5", {
                          className: "sectionTitle",
                          style: { marginBottom: "30px" },
                          children: "Personal Details",
                        }),
                        Object(b.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(b.jsx)("div", {
                              className: "col-md-4",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "First Name",
                                  }),
                                  Object(b.jsx)("input", {
                                    type: "text",
                                    name: "f_username",
                                    id: "f_name",
                                    className: "focus",
                                    placeholder: "First Name",
                                    onChange: Ye,
                                    value: j,
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-4",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "Middle Name",
                                  }),
                                  Object(b.jsx)("input", {
                                    type: "text",
                                    name: "m_username",
                                    id: "m_name",
                                    onChange: Ye,
                                    className: "focus",
                                    placeholder: "Middle Name",
                                    value: h,
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-4",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "Last Name",
                                  }),
                                  Object(b.jsx)("input", {
                                    type: "text",
                                    name: "l_username",
                                    id: "l_name",
                                    value: v,
                                    onChange: Ye,
                                    placeholder: "Last Name",
                                    className: "focus",
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(b.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(b.jsx)("div", {
                              className: "col-md-4",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", { children: "Email" }),
                                  Object(b.jsx)(
                                    "input",
                                    ((Fe = {
                                      type: "email",
                                      name: "emailAdress",
                                      id: "email",
                                      value: y,
                                      onChange: Ye,
                                      className: "focus",
                                      placeholder: "email",
                                      disabled: "true",
                                    }),
                                    Object(k.a)(Fe, "value", y),
                                    Object(k.a)(Fe, "required", !0),
                                    Fe)
                                  ),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-4",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", { children: "Phone" }),
                                  Object(b.jsx)("input", {
                                    type: "text",
                                    name: "phone",
                                    id: "phone",
                                    value: B,
                                    onChange: Ye,
                                    placeholder: "Phone Number",
                                    className: "focus",
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-4",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "company Registartion date",
                                  }),
                                  Object(b.jsx)("input", {
                                    type: "date",
                                    name: "date",
                                    id: "date",
                                    value: E,
                                    onChange: Ye,
                                    className: "focus",
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(b.jsx)("hr", { className: "section2" }),
                        Object(b.jsx)("h5", {
                          className: "sectionTitle",
                          style: { marginBottom: "30px" },
                          children: "Address Details",
                        }),
                        Object(b.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(b.jsx)("div", {
                              className: "col-md-6",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "Redential Address",
                                  }),
                                  Object(b.jsx)("textarea", {
                                    className: "form-control",
                                    name: "r_address",
                                    id: "r_address",
                                    onChange: Ye,
                                    value: V,
                                    rows: "3",
                                    placeholder:
                                      "Please Give Your Residential Address",
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-6",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "Company Address",
                                  }),
                                  Object(b.jsx)("textarea", {
                                    className: "form-control",
                                    name: "c_address",
                                    id: "c_address",
                                    value: R,
                                    onChange: Ye,
                                    rows: "3",
                                    placeholder:
                                      "Please Give Your Company Address",
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(b.jsx)("hr", { className: "section2" }),
                        Object(b.jsx)("h5", {
                          className: "sectionTitle",
                          style: { marginBottom: "30px" },
                          children: "Profession Details",
                        }),
                        Object(b.jsxs)("div", {
                          className: "row mt-4",
                          children: [
                            Object(b.jsxs)("div", {
                              className: "col-md-6",
                              children: [
                                Object(b.jsx)("label", {
                                  children: "Profession",
                                }),
                                Object(b.jsxs)("select", {
                                  className: "browser-default custom-select",
                                  name: "Profession",
                                  id: "Profession",
                                  onChange: Ye,
                                  value: Q,
                                  required: !0,
                                  children: [
                                    Object(b.jsx)("option", {
                                      value: "",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Select Your Profession *",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Businessman",
                                      children: "Businessman",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Employee",
                                      children: "Employee",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Other",
                                      children: "Other",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "col-md-6",
                              children: [
                                Object(b.jsx)("label", {
                                  children: "Qualification",
                                }),
                                Object(b.jsxs)("select", {
                                  className: "browser-default custom-select",
                                  name: "Qualifications",
                                  id: "Qualifications",
                                  value: X,
                                  onChange: Ye,
                                  required: !0,
                                  children: [
                                    Object(b.jsx)("option", {
                                      value: "",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Qualifications *",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Post Graduate",
                                      children: "Post Graduate",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Under Graduate",
                                      children: "Under Graduate",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Diploma",
                                      children: "Diploma",
                                    }),
                                    Object(b.jsx)("option", {
                                      value: "Other",
                                      children: "Other",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(b.jsx)("hr", { className: "section2" }),
                        Object(b.jsx)("h5", {
                          className: "sectionTitle",
                          style: { marginBottom: "30px" },
                          children: "Previous Experiences",
                        }),
                        Object(b.jsxs)("div", {
                          className: "row mt-20",
                          children: [
                            Object(b.jsx)("div", {
                              className: "col-md-6",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "Previous Start up Website Link",
                                  }),
                                  Object(b.jsx)("textarea", {
                                    className: "form-control",
                                    name: "wlink",
                                    id: "wlink",
                                    value: ce,
                                    onChange: Ye,
                                    rows: "3",
                                    required: !0,
                                    placeholder:
                                      "Any previous startups?. If yes, then please provide website links",
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-6",
                              children: Object(b.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(b.jsx)("label", {
                                    children: "Your description",
                                  }),
                                  Object(b.jsx)("textarea", {
                                    className: "form-control",
                                    name: "details",
                                    id: "details",
                                    value: ne,
                                    onChange: Ye,
                                    rows: "3",
                                    required: !0,
                                    placeholder:
                                      "Tell us something about yourself",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(b.jsx)("hr", { className: "section2" }),
                        Object(b.jsx)("h5", {
                          className: "sectionTitle",
                          style: { marginBottom: "30px" },
                          children: "What is your Startup domain?",
                        }),
                        Object(b.jsxs)("div", {
                          className: "row mt-4",
                          children: [
                            Object(b.jsx)("div", {
                              className: "col-md-6",
                              children: Object(b.jsxs)("select", {
                                name: "product",
                                className: "browser-default custom-select",
                                id: "industryType",
                                required: !0,
                                value: he,
                                onChange: Ye,
                                children: [
                                  Object(b.jsx)("option", {
                                    value: "",
                                    selected: !0,
                                    disabled: !0,
                                    children: "Company type*",
                                  }),
                                  Object(b.jsx)("option", {
                                    value: "Product Based",
                                    children: "Product Based",
                                  }),
                                  Object(b.jsx)("option", {
                                    value: "Service Based",
                                    children: "Service Based",
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("div", {
                              className: "col-md-6",
                              children: Object(b.jsxs)("select", {
                                name: "service",
                                className: "browser-default custom-select",
                                id: "domain",
                                required: !0,
                                value: _e,
                                onChange: Ye,
                                children: [
                                  Object(b.jsx)("option", {
                                    value: "",
                                    selected: !0,
                                    disabled: !0,
                                    children: "Company Domain *",
                                  }),
                                  Object(b.jsx)("option", {
                                    value: "Educational Sector",
                                    children: "Educational Sector",
                                  }),
                                  Object(b.jsx)("option", {
                                    value: "IT",
                                    children: "IT",
                                  }),
                                  Object(b.jsx)("option", {
                                    value: "Medical Sector",
                                    children: "Medical Sector",
                                  }),
                                  Object(b.jsx)("option", {
                                    value: "Other",
                                    children: "Other",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(b.jsx)("hr", { className: "section2" }),
                        Object(b.jsx)("h5", {
                          className: "sectionTitle",
                          style: { marginBottom: "30px" },
                          children: "Any Partners ?",
                        }),
                        Object(b.jsx)("div", {
                          className: "row mt-20",
                          children: Object(b.jsxs)("div", {
                            className: "col-md-12",
                            children: [
                              Object(b.jsx)("label", {
                                for: "aoe",
                                children: "Number of Colleaugues",
                              }),
                              Object(b.jsxs)("div", {
                                className: "product_checkboxes",
                                children: [
                                  Object(b.jsxs)("div", {
                                    className: "form-check form-check-inline",
                                    children: [
                                      Object(b.jsx)("input", {
                                        className: "form-check-input",
                                        name: "coll[]",
                                        type: "radio",
                                        id: "Colleaugues",
                                        onChange: Ye,
                                        required: !0,
                                        value: "0-5",
                                      }),
                                      Object(b.jsx)("label", {
                                        className: "form-check-label",
                                        for: "inlineCheckbox1",
                                        children: "0-5",
                                      }),
                                    ],
                                  }),
                                  Object(b.jsxs)("div", {
                                    className: "form-check form-check-inline",
                                    children: [
                                      Object(b.jsx)("input", {
                                        className: "form-check-input",
                                        name: "coll[]",
                                        type: "radio",
                                        id: "Colleaugues",
                                        onChange: Ye,
                                        value: "5-10",
                                      }),
                                      Object(b.jsx)("label", {
                                        className: "form-check-label",
                                        for: "inlineCheckbox2",
                                        children: "5-10",
                                      }),
                                    ],
                                  }),
                                  Object(b.jsxs)("div", {
                                    className: "form-check form-check-inline",
                                    children: [
                                      Object(b.jsx)("input", {
                                        className: "form-check-input",
                                        name: "coll[]",
                                        type: "radio",
                                        id: "Colleaugues",
                                        onChange: Ye,
                                        value: "10-15",
                                      }),
                                      Object(b.jsx)("label", {
                                        className: "form-check-label",
                                        for: "inlineCheckbox3",
                                        children: "10-15",
                                      }),
                                    ],
                                  }),
                                  Object(b.jsxs)("div", {
                                    className: "form-check form-check-inline",
                                    children: [
                                      Object(b.jsx)("input", {
                                        className: "form-check-input",
                                        name: "coll[]",
                                        type: "radio",
                                        id: "Colleaugues",
                                        onChange: Ye,
                                        value: "15+",
                                      }),
                                      Object(b.jsx)("label", {
                                        className: "form-check-label",
                                        for: "inlineCheckbox4",
                                        children: "15+",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("center", {
                          children: Object(b.jsx)("input", {
                            className: "btn btn-primary mt-20",
                            type: "submit",
                            value: "submit",
                            name: "submit",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              });
        },
        A = (c(84), c.p + "static/media/success.8818fee5.gif"),
        B = function () {
          return Object(b.jsx)("div", {
            children: Object(b.jsx)("div", {
              className: "container ",
              children: Object(b.jsx)("div", {
                className: "row successcontainer",
                children: Object(b.jsx)("div", {
                  className: "col",
                  children: Object(b.jsxs)("div", {
                    className: "successWindow",
                    children: [
                      Object(b.jsx)("div", {
                        className: "text-center",
                        children: Object(b.jsx)("img", {
                          className: "img_100",
                          src: A,
                          alt: "success",
                        }),
                      }),
                      Object(b.jsxs)("div", {
                        className: "text-center",
                        children: [
                          Object(b.jsx)("h3", {
                            children: "Your registration is SuccessFull",
                          }),
                          Object(b.jsx)("a", {
                            href: "/startup/check",
                            children: "Dashboard",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        L =
          (c(85),
          function (e) {
            var t = e.data;
            return Object(b.jsxs)("div", {
              className: "mentorCard",
              children: [
                Object(b.jsx)("div", {
                  className: "float-right",
                  children: Object(b.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-shield-check",
                    viewBox: "0 0 16 16",
                    children: [
                      Object(b.jsx)("path", {
                        d:
                          "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z",
                      }),
                      Object(b.jsx)("path", {
                        d:
                          "M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z",
                      }),
                    ],
                  }),
                }),
                Object(b.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(b.jsx)("div", {
                      className: "col-4",
                      children: Object(b.jsx)("img", {
                        src: "https://via.placeholder.com/150",
                        className: "rounded-circle img_100",
                        width: "100px",
                        alt: "profile",
                      }),
                    }),
                    Object(b.jsxs)("div", {
                      className: "col-8",
                      children: [
                        Object(b.jsx)("strong", {
                          children: Object(b.jsxs)("p", {
                            children: [t.fname + " " + t.lname, " "],
                          }),
                        }),
                        Object(b.jsx)("p", { children: t.description }),
                      ],
                    }),
                  ],
                }),
                Object(b.jsx)("hr", {}),
                Object(b.jsx)("div", {
                  className: "row",
                  children: Object(b.jsxs)("div", {
                    className: "col",
                    children: [
                      Object(b.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-layout-text-window-reverse",
                        viewBox: "0 0 16 16",
                        children: [
                          Object(b.jsx)("path", {
                            d:
                              "M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z",
                          }),
                          Object(b.jsx)("path", {
                            d:
                              "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z",
                          }),
                        ],
                      }),
                      Object(b.jsxs)("span", {
                        style: { marginLeft: "15px" },
                        children: [
                          "domain: ",
                          Object(b.jsxs)("strong", {
                            children: [" ", t.MentorDetails.domain],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(b.jsx)("div", {
                  className: "row",
                  children: Object(b.jsxs)("div", {
                    className: "col",
                    children: [
                      Object(b.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-bar-chart-line-fill",
                        viewBox: "0 0 16 16",
                        children: Object(b.jsx)("path", {
                          d:
                            "M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z",
                        }),
                      }),
                      Object(b.jsxs)("span", {
                        style: { marginLeft: "15px" },
                        children: [
                          "Industry Type: ",
                          Object(b.jsxs)("strong", {
                            children: [" ", t.MentorDetails.industryType],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(b.jsx)("div", {
                  className: "row",
                  children: Object(b.jsxs)("div", {
                    className: "col",
                    children: [
                      Object(b.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-person-plus-fill",
                        viewBox: "0 0 16 16",
                        children: [
                          Object(b.jsx)("path", {
                            d:
                              "M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
                          }),
                          Object(b.jsx)("path", {
                            "fill-rule": "evenodd",
                            d:
                              "M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z",
                          }),
                        ],
                      }),
                      Object(b.jsxs)("span", {
                        style: { marginLeft: "15px" },
                        children: [
                          "Number of Colleauges:",
                          " ",
                          Object(b.jsxs)("strong", {
                            children: [
                              " ",
                              t.MentorDetails.numberOfColleaugues,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(b.jsx)("div", {
                  children: Object(b.jsx)("div", {
                    className: "float-right",
                    children: Object(b.jsx)("a", {
                      href: "/mentor/profile/".concat(t.handle),
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Know More",
                    }),
                  }),
                }),
              ],
            });
          }),
        P = (c(86), c.p + "static/media/wellcomeStartup.c4dc6767.svg"),
        D = function () {
          var e = Object(s.useState)(null),
            t = Object(x.a)(e, 2),
            c = t[0],
            a = t[1],
            l = Object(s.useState)(null),
            n = Object(x.a)(l, 2),
            i = n[0],
            j = n[1],
            o = S(),
            d = o.user,
            m = o.loading,
            h = Object(r.f)();
          Object(s.useEffect)(
            function () {
              d || h.push("/");
            },
            [m]
          ),
            Object(s.useEffect)(function () {
              N()({ method: "get", url: "/api/Mentors/mentors" }).then(
                function (e) {
                  e.data.success && a(e.data.data);
                }
              );
            }, []);
          return m
            ? Object(b.jsx)("div", {
                className: "container",
                children: Object(b.jsx)("div", {
                  className:
                    "row fullWindow justify-content-center align-items-center",
                  children: Object(b.jsx)(M, {}),
                }),
              })
            : Object(b.jsxs)("div", {
                className: "container  mt-50",
                children: [
                  Object(b.jsxs)("div", {
                    className: "row wellcomeContainer align-items-center",
                    children: [
                      Object(b.jsx)("div", {
                        className: "col-6",
                        children: Object(b.jsx)("img", {
                          className: "img_100 ",
                          style: { padding: "50px" },
                          src: P,
                          alt: "wellcome",
                        }),
                      }),
                      Object(b.jsxs)("div", {
                        className: "col-6",
                        children: [
                          Object(b.jsxs)("h4", {
                            children: [
                              "Wellcome ",
                              Object(b.jsxs)("strong", {
                                style: { color: "blue" },
                                children: [" ", d.email],
                              }),
                            ],
                          }),
                          Object(b.jsxs)("p", {
                            children: [
                              "Lorem ipsum dolor sit amet, consectetur ",
                              Object(b.jsx)("br", {}),
                              " adipiscing elit. Sed tincidunt ipsum eu purus ultricies,",
                              Object(b.jsx)("br", {}),
                              "et pulvinar lacus rhoncus. Nulla nec.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(b.jsx)("div", {
                    className: "row mt-50",
                    children: Object(b.jsx)("div", {
                      className: "col",
                      children: Object(b.jsx)("input", {
                        className: "searchFeild",
                        type: "text",
                        placeholder: "search for mentor",
                        onChange: function (e) {
                          var t;
                          " " !== (t = e.target.value)
                            ? N()({
                                method: "post",
                                url: "/api/Mentors/find_mentor",
                                data: { query: t },
                              }).then(function (e) {
                                e.data.success ? j(e.data.data) : j(null);
                              })
                            : j(null);
                        },
                      }),
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "row mt-50",
                    children:
                      i &&
                      i.map(function (e) {
                        return Object(b.jsx)(L, { data: e });
                      }),
                  }),
                  Object(b.jsx)("div", {
                    className: "mt-50",
                    children: Object(b.jsx)("h5", {
                      children: "Mentors Recommendation",
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "row",
                    children:
                      c &&
                      c.map(function (e) {
                        return Object(b.jsx)(L, { data: e });
                      }),
                  }),
                ],
              });
        },
        E = function () {
          var e = Object(r.f)(),
            t = S(),
            c = t.user,
            a = t.loading,
            l = t.claim;
          return (
            Object(s.useEffect)(
              function () {
                a ||
                  ("startup" === l
                    ? c &&
                      N()({
                        method: "post",
                        url: "/api/startups/is_profile_exist",
                        data: { email: c.email },
                      }).then(function (t) {
                        t.data.success
                          ? e.push("/startup/dashboard")
                          : e.push("/startup/onboard");
                      })
                    : (p.a.auth().signOut(), e.push("/startup/error")));
              },
              [a]
            ),
            Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsx)("div", {
                className:
                  "row fullWindow justify-content-center align-items-center",
                children: Object(b.jsx)(M, {}),
              }),
            })
          );
        },
        T =
          (c(87),
          function () {
            var e = S(),
              t = e.signOut,
              c = e.user;
            return Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsx)("div", {
                className: "header",
                children: Object(b.jsxs)("nav", {
                  className: "navbar navbar-expand-lg",
                  children: [
                    Object(b.jsx)("a", {
                      className: "navbar-brand",
                      href: "/",
                      children: Object(b.jsx)("div", {
                        className: "logo",
                        children: Object(b.jsx)("img", { src: h, alt: "" }),
                      }),
                    }),
                    Object(b.jsx)("button", {
                      className: "navbar-toggler collapsed",
                      type: "button",
                      "data-toggle": "collapse",
                      "data-target": "#navbarTogglerDemo02",
                      "aria-controls": "navbarTogglerDemo02",
                      "aria-expanded": "false",
                      "aria-label": "Toggle navigation",
                      children: Object(b.jsxs)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 16 16",
                        className: "bi bi-chevron-double-down",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          Object(b.jsx)("path", {
                            "fill-rule": "evenodd",
                            d:
                              "M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
                          }),
                          Object(b.jsx)("path", {
                            "fill-rule": "evenodd",
                            d:
                              "M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
                          }),
                        ],
                      }),
                    }),
                    Object(b.jsxs)("div", {
                      className: "navbar-collapse collapse",
                      id: "navbarTogglerDemo02",
                      children: [
                        Object(b.jsx)("ul", {
                          className: "navbar-nav m-auto mt-2 mt-lg-0",
                          children: Object(b.jsx)("li", {
                            className: "nav-item active",
                            children: Object(b.jsx)("a", {
                              className: "nav-link",
                              href: "/",
                              rel: "noreferrer",
                              children: c && c.email,
                            }),
                          }),
                        }),
                        Object(b.jsx)("form", {
                          className: "form-inline my-2 my-lg-0",
                          children:
                            c &&
                            Object(b.jsx)("button", {
                              className: "btn logout-btn",
                              type: "submit",
                              onClick: t,
                              children: "logout",
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
        q = c.p + "static/media/noStartup.a33160ff.svg",
        H = function () {
          return Object(b.jsx)("div", {
            className:
              "d-flex justify-content-center align-items-center fullWindow ",
            children: Object(b.jsxs)("div", {
              className: "col-4 text-center",
              children: [
                Object(b.jsx)("img", {
                  src: q,
                  className: "img_100 ",
                  alt: "error",
                }),
                Object(b.jsxs)("h3", {
                  className: "text-center mt-50",
                  style: { color: "red" },
                  children: [" ", "Your not Registered As startup"],
                }),
                Object(b.jsx)("a", {
                  href: "/mentor/login",
                  children: "login as mentor",
                }),
              ],
            }),
          });
        },
        V = (c(45), c.p + "static/media/nouser.a17e66c7.svg"),
        W = function () {
          var e = Object(r.g)().handle,
            t = Object(s.useState)(null),
            c = Object(x.a)(t, 2),
            a = c[0],
            l = c[1],
            n = Object(s.useState)(!0),
            i = Object(x.a)(n, 2),
            j = i[0],
            o = i[1];
          return (
            Object(s.useEffect)(function () {
              e &&
                N()({
                  method: "get",
                  url: "/api/startups/get_details/".concat(e),
                }).then(function (e) {
                  e.data.success ? (l(e.data.data), o(!1)) : o(!1);
                });
            }, []),
            j
              ? Object(b.jsx)("div", {
                  className: "container",
                  children: Object(b.jsx)("div", {
                    className:
                      "row fullWindow justify-content-center align-items-center",
                    children: Object(b.jsx)(M, {}),
                  }),
                })
              : a
              ? Object(b.jsxs)("div", {
                  className: "container mt-50",
                  children: [
                    Object(b.jsx)("div", {
                      className: "row",
                      children: Object(b.jsxs)("div", {
                        className: "col text-center",
                        children: [
                          Object(b.jsx)("img", {
                            className: "rounded-circle",
                            width: "150px",
                            height: "150px",
                            src: "https://via.placeholder.com/150",
                            alt: "profileimage",
                          }),
                          Object(b.jsxs)("div", {
                            className: "",
                            children: [
                              Object(b.jsxs)("h5", {
                                className: "mt-20",
                                children: [a.fname, " ", a.mname, " ", a.lname],
                              }),
                              Object(b.jsx)("span", { children: "startup" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(b.jsxs)("div", {
                      className: "d-flex",
                      children: [
                        Object(b.jsxs)("div", {
                          className: "contact-section",
                          children: [
                            Object(b.jsxs)("div", {
                              className: "profile-icon",
                              children: [
                                Object(b.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "currentColor",
                                  className: "bi bi-phone",
                                  viewBox: "0 0 16 16",
                                  children: [
                                    Object(b.jsx)("path", {
                                      d:
                                        "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z",
                                    }),
                                    Object(b.jsx)("path", {
                                      d: "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
                                    }),
                                  ],
                                }),
                                Object(b.jsx)("span", { children: "Phone" }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "profile-icon",
                              children: [
                                Object(b.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "16",
                                  height: "16",
                                  fill: "currentColor",
                                  className: "bi bi-envelope",
                                  viewBox: "0 0 16 16",
                                  children: Object(b.jsx)("path", {
                                    d:
                                      "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z",
                                  }),
                                }),
                                Object(b.jsx)("span", { children: "Email" }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "profile-icon connect",
                              children: [
                                Object(b.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "currentColor",
                                  className: "bi bi-plus-circle-fill",
                                  viewBox: "0 0 16 16",
                                  children: Object(b.jsx)("path", {
                                    d:
                                      "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z",
                                  }),
                                }),
                                Object(b.jsx)("span", {
                                  children: "Connect Now",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(b.jsxs)("div", {
                          className: "flex-grow-1 p-10",
                          children: [
                            Object(b.jsxs)("div", {
                              className: "row mt-50",
                              children: [
                                Object(b.jsx)("div", {
                                  className: "col-8 ",
                                  children: Object(b.jsxs)("div", {
                                    className: "profile-block ",
                                    children: [
                                      Object(b.jsx)("span", {
                                        children: "About me",
                                      }),
                                      Object(b.jsxs)("h5", {
                                        className: "mt-20",
                                        children: [
                                          "hello i am ",
                                          a.fname,
                                          " ",
                                          a.mname,
                                          " ",
                                          a.lname,
                                        ],
                                      }),
                                      Object(b.jsx)("p", {
                                        className: "text-justify mt-20",
                                        children: a.description,
                                      }),
                                    ],
                                  }),
                                }),
                                Object(b.jsx)("div", {
                                  className: "col-4 ",
                                  children: Object(b.jsxs)("div", {
                                    className: "profile-block primay-block",
                                    children: [
                                      Object(b.jsx)("span", {
                                        children: "My startup",
                                      }),
                                      Object(b.jsxs)("div", {
                                        className: "icon-text mt-20",
                                        children: [
                                          Object(b.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            className: "bi bi-speedometer2",
                                            viewBox: "0 0 16 16",
                                            children: [
                                              Object(b.jsx)("path", {
                                                d:
                                                  "M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z",
                                              }),
                                              Object(b.jsx)("path", {
                                                "fill-rule": "evenodd",
                                                d:
                                                  "M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z",
                                              }),
                                            ],
                                          }),
                                          Object(b.jsx)("p", {
                                            children: Object(b.jsx)("strong", {
                                              children: a.startupDetails.domain,
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(b.jsxs)("div", {
                                        className: "icon-text ",
                                        children: [
                                          Object(b.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            className: "bi bi-list-stars",
                                            viewBox: "0 0 16 16",
                                            children: [
                                              Object(b.jsx)("path", {
                                                "fill-rule": "evenodd",
                                                d:
                                                  "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z",
                                              }),
                                              Object(b.jsx)("path", {
                                                d:
                                                  "M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z",
                                              }),
                                            ],
                                          }),
                                          Object(b.jsx)("p", {
                                            children: Object(b.jsx)("strong", {
                                              children:
                                                a.startupDetails.industryType,
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(b.jsxs)("div", {
                                        className: "icon-text ",
                                        children: [
                                          Object(b.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            className: "bi bi-people",
                                            viewBox: "0 0 16 16",
                                            children: Object(b.jsx)("path", {
                                              d:
                                                "M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
                                            }),
                                          }),
                                          Object(b.jsx)("p", {
                                            children: Object(b.jsx)("strong", {
                                              children:
                                                a.startupDetails
                                                  .numberOfColleaugues,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "row mt-50",
                              children: [
                                Object(b.jsx)("div", {
                                  className: "col-4 ",
                                  children: Object(b.jsxs)("div", {
                                    className: "profile-block primay-block",
                                    children: [
                                      Object(b.jsx)("span", {
                                        children: "Profession",
                                      }),
                                      Object(b.jsxs)("div", {
                                        className: "icon-text mt-20",
                                        children: [
                                          Object(b.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            className: "bi bi-award",
                                            viewBox: "0 0 16 16",
                                            children: [
                                              Object(b.jsx)("path", {
                                                d:
                                                  "M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z",
                                              }),
                                              Object(b.jsx)("path", {
                                                d:
                                                  "M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z",
                                              }),
                                            ],
                                          }),
                                          Object(b.jsx)("p", {
                                            children: Object(b.jsx)("strong", {
                                              children: a.profession,
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(b.jsxs)("div", {
                                        className: "icon-text ",
                                        children: [
                                          Object(b.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            className: "bi bi-list-stars",
                                            viewBox: "0 0 16 16",
                                            children: [
                                              Object(b.jsx)("path", {
                                                "fill-rule": "evenodd",
                                                d:
                                                  "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z",
                                              }),
                                              Object(b.jsx)("path", {
                                                d:
                                                  "M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z",
                                              }),
                                            ],
                                          }),
                                          Object(b.jsx)("p", {
                                            children: Object(b.jsx)("strong", {
                                              children: a.qualification,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(b.jsx)("div", {
                                  className: "col-8 ",
                                  children: Object(b.jsxs)("div", {
                                    className: "profile-block ",
                                    children: [
                                      Object(b.jsx)("span", {
                                        children: "perious startup",
                                      }),
                                      Object(b.jsx)("p", {
                                        className: "text-justify mt-20",
                                        children: a.perious_startup,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : Object(b.jsx)("div", {
                  className: "container",
                  children: Object(b.jsx)("div", {
                    className:
                      "row fullWindow justify-content-center align-items-center",
                    children: Object(b.jsxs)("div", {
                      className: "col-4 text-center",
                      children: [
                        Object(b.jsx)("img", {
                          src: V,
                          className: "img_100",
                          alt: "no result",
                        }),
                        Object(b.jsx)("h6", {
                          className: "mt-5",
                          children: "No Result",
                        }),
                      ],
                    }),
                  }),
                })
          );
        },
        I = c.p + "static/media/mentorlogin.9251943e.svg",
        F =
          (c(88),
          function () {
            var e = Object(r.f)(),
              t = Object(s.useState)(""),
              c = Object(x.a)(t, 2),
              a = c[0],
              l = c[1],
              n = Object(s.useState)(""),
              i = Object(x.a)(n, 2),
              j = i[0],
              o = i[1],
              d = Object(s.useState)(null),
              m = Object(x.a)(d, 2),
              h = m[0],
              u = m[1],
              O = Object(s.useState)(null),
              v = Object(x.a)(O, 2),
              f = v[0],
              g = v[1];
            return Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsx)("div", {
                className:
                  "row align-items-center justify-content-center fullWindow",
                children: Object(b.jsx)("div", {
                  className: "col-md-4",
                  children: Object(b.jsxs)("div", {
                    className: "loginWindow",
                    children: [
                      Object(b.jsxs)("div", {
                        className: "text-center",
                        children: [
                          Object(b.jsx)("img", {
                            className: "img_100",
                            src: I,
                            alt: "loginImg",
                          }),
                          Object(b.jsx)("h4", { children: "Mentor Login" }),
                        ],
                      }),
                      h
                        ? Object(b.jsx)("p", {
                            className: "mt-20",
                            style: { color: "red" },
                            children: {
                              "auth/user-not-found": " User does not found",
                              "auth/wrong-password": " wrong password",
                              "auth/invalid-email": "Invalid Email",
                            }["".concat(h)],
                          })
                        : " ",
                      f
                        ? Object(b.jsx)("p", {
                            className: "mt-20",
                            style: { color: "green" },
                            children: "login successfull",
                          })
                        : " ",
                      Object(b.jsxs)("form", {
                        onSubmit: function (t) {
                          t.preventDefault(),
                            p.a
                              .auth()
                              .signInWithEmailAndPassword(a, j)
                              .then(function (t) {
                                u(null), g(!0), e.push("/mentor/check");
                              })
                              .catch(function (e) {
                                u(e.code);
                              });
                        },
                        children: [
                          Object(b.jsxs)("div", {
                            className: "input-group flex-nowrap mt-20",
                            children: [
                              Object(b.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(b.jsx)("span", {
                                  className: "input-group-text",
                                  id: "addon-wrapping",
                                  children: "@",
                                }),
                              }),
                              Object(b.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "email",
                                "aria-label": "email",
                                "aria-describedby": "addon-wrapping",
                                value: a,
                                onChange: function (e) {
                                  return l(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(b.jsxs)("div", {
                            className: "input-group flex-nowrap mt-20",
                            children: [
                              Object(b.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(b.jsx)("span", {
                                  className: "input-group-text",
                                  id: "addon-wrapping",
                                  children: Object(b.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-shield-lock",
                                    viewBox: "0 0 16 16",
                                    children: [
                                      Object(b.jsx)("path", {
                                        d:
                                          "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z",
                                      }),
                                      Object(b.jsx)("path", {
                                        d:
                                          "M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              Object(b.jsx)("input", {
                                type: "password",
                                className: "form-control",
                                placeholder: "password",
                                "aria-label": "password",
                                "aria-describedby": "addon-wrapping",
                                value: j,
                                onChange: function (e) {
                                  return o(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-20 text-center",
                            children: Object(b.jsx)("button", {
                              className: "btn btn-primary",
                              type: "submit",
                              children: "loign",
                            }),
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-20 text-center",
                            children: Object(b.jsxs)("p", {
                              style: { color: "#ccc" },
                              children: [
                                "Don't have an account?",
                                " ",
                                Object(b.jsx)("a", {
                                  href: "/mentor/signup",
                                  style: { color: "blue" },
                                  children: "Sign up",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        R = c.p + "static/media/mentorSignup.4b1f4a3c.svg",
        Y = function () {
          var e = Object(s.useState)(""),
            t = Object(x.a)(e, 2),
            c = t[0],
            a = t[1],
            l = Object(s.useState)(""),
            n = Object(x.a)(l, 2),
            i = n[0],
            r = n[1],
            j = Object(s.useState)(null),
            o = Object(x.a)(j, 2),
            d = o[0],
            m = o[1],
            h = Object(s.useState)(null),
            u = Object(x.a)(h, 2),
            O = u[0],
            v = u[1];
          return Object(b.jsx)("div", {
            children: Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsx)("div", {
                className:
                  "row align-items-center justify-content-center fullWindow",
                children: Object(b.jsx)("div", {
                  className: "col-md-4",
                  children: Object(b.jsxs)("div", {
                    className: "loginWindow",
                    children: [
                      Object(b.jsxs)("div", {
                        className: "text-center",
                        children: [
                          Object(b.jsx)("img", {
                            className: "img_100",
                            src: R,
                            alt: "loginImg",
                          }),
                          Object(b.jsx)("h4", { children: "Mentor signup" }),
                        ],
                      }),
                      d
                        ? Object(b.jsx)("p", {
                            className: "mt-20",
                            style: { color: "red" },
                            children: {
                              "auth/user-not-found": " User does not found",
                              "auth/weak-password":
                                " Password must be 6 letters",
                              "auth/invalid-email": "Invalid Email",
                            }["".concat(d)],
                          })
                        : " ",
                      O
                        ? Object(b.jsx)("p", {
                            className: "mt-20",
                            style: { color: "green" },
                            children: "Signup successfull",
                          })
                        : " ",
                      Object(b.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(),
                            p.a
                              .auth()
                              .createUserWithEmailAndPassword(c, i)
                              .then(function (e) {
                                v(!0),
                                  N()({
                                    method: "post",
                                    url: "/api/mentors/claim_mentor",
                                    data: { uid: e.user.uid },
                                  }).then(function (e) {});
                              })
                              .catch(function (e) {
                                m(e.code);
                              });
                        },
                        children: [
                          Object(b.jsxs)("div", {
                            className: "input-group flex-nowrap mt-20",
                            children: [
                              Object(b.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(b.jsx)("span", {
                                  className: "input-group-text",
                                  id: "addon-wrapping",
                                  children: "@",
                                }),
                              }),
                              Object(b.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "email",
                                "aria-label": "email",
                                "aria-describedby": "addon-wrapping",
                                value: c,
                                onChange: function (e) {
                                  return a(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(b.jsxs)("div", {
                            className: "input-group flex-nowrap mt-20",
                            children: [
                              Object(b.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(b.jsx)("span", {
                                  className: "input-group-text",
                                  id: "addon-wrapping",
                                  children: Object(b.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-shield-lock",
                                    viewBox: "0 0 16 16",
                                    children: [
                                      Object(b.jsx)("path", {
                                        d:
                                          "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z",
                                      }),
                                      Object(b.jsx)("path", {
                                        d:
                                          "M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              Object(b.jsx)("input", {
                                type: "password",
                                className: "form-control",
                                placeholder: "password",
                                "aria-label": "password",
                                "aria-describedby": "addon-wrapping",
                                value: i,
                                onChange: function (e) {
                                  return r(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-20 text-center",
                            children: Object(b.jsx)("button", {
                              className: "btn btn-primary",
                              type: "submit",
                              children: "singup",
                            }),
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-20 text-center",
                            children: Object(b.jsxs)("p", {
                              style: { color: "#ccc" },
                              children: [
                                "Already have an account?",
                                " ",
                                Object(b.jsx)("a", {
                                  href: "/mentor/login",
                                  style: { color: "blue" },
                                  children: "Log in",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        G = function () {
          var e = Object(r.f)(),
            t = S(),
            c = t.user,
            a = t.loading,
            l = t.claim;
          return (
            Object(s.useEffect)(
              function () {
                a ||
                  ("mentor" === l
                    ? c &&
                      N()({
                        method: "post",
                        url: "/api/mentors/is_profile_exist",
                        data: { email: c.email },
                      }).then(function (t) {
                        t.data.success
                          ? e.push("/mentor/dashboard")
                          : e.push("/mentor/onboard");
                      })
                    : (p.a.auth().signOut(), e.push("/mentor/error")));
              },
              [a]
            ),
            Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsx)("div", {
                className:
                  "row fullWindow justify-content-center align-items-center",
                children: Object(b.jsx)(M, {}),
              }),
            })
          );
        },
        U = c(27),
        Q = function () {
          var e = S(),
            t = e.user,
            c = e.loading,
            a = Object(r.f)(),
            l = new z.a(),
            n = Object(s.useState)(""),
            i = Object(x.a)(n, 2),
            j = i[0],
            o = i[1],
            d = Object(s.useState)(null),
            m = Object(x.a)(d, 2),
            h = m[0],
            u = m[1],
            O = Object(s.useState)(""),
            p = Object(x.a)(O, 2),
            v = p[0],
            f = p[1],
            g = Object(s.useState)(""),
            w = Object(x.a)(g, 2),
            y = w[0],
            C = w[1],
            k = Object(s.useState)(""),
            M = Object(x.a)(k, 2),
            _ = M[0],
            A = M[1],
            B = Object(s.useState)(""),
            L = Object(x.a)(B, 2),
            P = L[0],
            D = L[1],
            E = Object(s.useState)(""),
            T = Object(x.a)(E, 2),
            q = T[0],
            H = T[1],
            V = Object(s.useState)(""),
            W = Object(x.a)(V, 2),
            I = W[0],
            F = W[1],
            R = Object(s.useState)(""),
            Y = Object(x.a)(R, 2),
            G = Y[0],
            Q = Y[1],
            J = Object(s.useState)(""),
            K = Object(x.a)(J, 2),
            Z = K[0],
            X = K[1],
            $ = Object(s.useState)(""),
            ee = Object(x.a)($, 2),
            te = ee[0],
            ce = ee[1],
            se = Object(s.useState)(""),
            ae = Object(x.a)(se, 2),
            le = ae[0],
            ne = ae[1],
            ie = Object(s.useState)(""),
            re = Object(x.a)(ie, 2),
            je = re[0],
            oe = re[1],
            de = Object(s.useState)(""),
            be = Object(x.a)(de, 2),
            me = be[0],
            he = be[1],
            ue = Object(s.useState)(""),
            xe = Object(x.a)(ue, 2),
            Oe = xe[0],
            pe = xe[1],
            ve = Object(s.useState)(""),
            fe = Object(x.a)(ve, 2),
            ge = fe[0],
            Ne = fe[1],
            we = Object(s.useState)([]),
            ye = Object(x.a)(we, 2),
            Se = ye[0],
            Ce = ye[1],
            ke = Object(s.useState)(null),
            ze = Object(x.a)(ke, 2),
            Me = ze[0],
            _e = ze[1],
            Ae = Object(s.useState)(!1),
            Be = Object(x.a)(Ae, 2),
            Le = Be[0],
            Pe = Be[1],
            De = Object(s.useState)(null),
            Ee = Object(x.a)(De, 2),
            Te = (Ee[0], Ee[1]);
          Object(s.useEffect)(
            function () {
              if (!c) {
                var e = t.email;
                D(e),
                  Te(t.uid),
                  N()({
                    method: "post",
                    url: "/api/mentors/email",
                    data: { email: e },
                  }).then(function (e) {
                    e.data.success;
                  });
              }
            },
            [c]
          );
          var qe = {
              handle: { value: j, setState: o },
              f_name: { value: v, setState: f },
              m_name: { value: y, setState: C },
              l_name: { value: _, setState: A },
              email: { value: P, setState: D },
              phone: { value: q, setState: H },
              date: { value: I, setState: F },
              r_address: { value: G, setState: Q },
              details: { value: Z, setState: X },
              Profession: { value: te, setState: ce },
              previousExperience: { value: le, setState: ne },
              websiteLink: { value: je, setState: oe },
              patent: { value: me, setState: he },
              industryType: { value: Oe, setState: pe },
              domain: { value: ge, setState: Ne },
            },
            He = function (e) {
              var t = e.target.id;
              (0, qe[t].setState)(e.target.value);
            },
            Ve = function (e) {
              var t = Se.indexOf(e);
              Ce(
                t >= 0
                  ? function (e) {
                      return [].concat(
                        Object(U.a)(e.slice(0, t)),
                        Object(U.a)(e.slice(t + 1))
                      );
                    }
                  : [].concat(Object(U.a)(Se), [e])
              );
            };
          return Object(b.jsxs)("div", {
            className: "container mt-100 mb-100 ",
            children: [
              Object(b.jsx)("div", {
                className: "row",
                children: Object(b.jsxs)("div", {
                  className: "col text-center",
                  children: [
                    Object(b.jsx)("h3", { children: "Welcome Mentor !" }),
                    Object(b.jsx)("p", {
                      children: "please complete the profile",
                    }),
                  ],
                }),
              }),
              Object(b.jsxs)("div", {
                className: "row mt-50 form_area",
                children: [
                  Object(b.jsx)("div", {
                    className: "col-3",
                    children: Object(b.jsx)("img", {
                      src: "https://via.placeholder.com/150",
                      className: "rounded-circle",
                      alt: "logo",
                    }),
                  }),
                  Object(b.jsxs)("div", {
                    className: "col-9",
                    children: [
                      Object(b.jsx)("input", {
                        type: "text",
                        name: "handle",
                        id: "handle",
                        className: "handleFeild",
                        placeholder: "Handle",
                        value: j,
                        onChange: function (e) {
                          return (function (e) {
                            o(e),
                              N()({
                                url: "/api/mentors/handle/".concat(e),
                                method: "post",
                              })
                                .then(function (e) {
                                  e.data.success ? u(!1) : u(!0);
                                })
                                .catch(function (e) {});
                          })(e.target.value);
                        },
                        required: !0,
                      }),
                      h
                        ? Object(b.jsx)("p", {
                            style: { color: "red" },
                            children: " Handle Alredy Exist",
                          })
                        : "",
                    ],
                  }),
                ],
              }),
              Object(b.jsx)("hr", { className: "section2" }),
              Object(b.jsx)("form", {
                className: "signup-form",
                onSubmit: function (e) {
                  e.preventDefault(),
                    _e(null),
                    null !== j &&
                    "" !== j &&
                    " " !== j &&
                    null !== v &&
                    " " !== v &&
                    "" !== v &&
                    null !== y &&
                    " " !== y &&
                    "" !== y &&
                    null !== _ &&
                    "" !== _ &&
                    " " !== _ &&
                    null !== P &&
                    "" !== P &&
                    " " !== P &&
                    null !== q &&
                    " " !== q &&
                    "" !== q &&
                    null !== I &&
                    "" !== I &&
                    " " !== I &&
                    null !== G &&
                    " " !== G &&
                    "" !== G &&
                    null !== Z &&
                    " " !== Z &&
                    "" !== Z &&
                    null !== te &&
                    " " !== te &&
                    "" !== te &&
                    null !== le &&
                    " " !== le &&
                    "" !== le &&
                    null !== je &&
                    " " !== je &&
                    "" !== je &&
                    null !== me &&
                    " " !== me &&
                    "" !== me &&
                    null !== Oe &&
                    " " !== Oe &&
                    "" !== Oe &&
                    null !== ge &&
                    " " !== ge &&
                    "" !== ge &&
                    null !== Se &&
                    " " !== Se &&
                    "" !== Se
                      ? N()({
                          method: "post",
                          url: "/api/mentors/",
                          data: {
                            handle: j,
                            fname: v,
                            mname: y,
                            lname: _,
                            mail: P,
                            phone: q,
                            dob: I,
                            residential_Address: G,
                            description: Z,
                            profession: te,
                            previousExperience: le,
                            websiteLink: je,
                            patent: me,
                            MentorDetails: {
                              domain: ge,
                              industryType: Oe,
                              patent: me,
                            },
                            expertise: Se,
                          },
                        }).then(function (e) {
                          e.data.success
                            ? (l.success(e.data.message),
                              a.push("/mentor/registrationSuccess"))
                            : l.error(e.data.message);
                        })
                      : _e("please fill all the deatils");
                },
                children: Object(b.jsxs)("div", {
                  className: "container form_area",
                  children: [
                    Me
                      ? Object(b.jsx)("p", {
                          className: "text-center",
                          style: { color: "red" },
                          children: Me,
                        })
                      : "",
                    Object(b.jsx)("h5", {
                      className: "sectionTitle",
                      style: { marginBottom: "30px" },
                      children: "Personal Details",
                    }),
                    Object(b.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "First Name",
                              }),
                              Object(b.jsx)("input", {
                                type: "text",
                                name: "f_username",
                                id: "f_name",
                                className: "focus",
                                placeholder: "First Name",
                                onChange: He,
                                value: v,
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "Middle Name",
                              }),
                              Object(b.jsx)("input", {
                                type: "text",
                                name: "m_username",
                                id: "m_name",
                                onChange: He,
                                className: "focus",
                                placeholder: "Middle Name",
                                value: y,
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", { children: "Last Name" }),
                              Object(b.jsx)("input", {
                                type: "text",
                                name: "l_username",
                                id: "l_name",
                                value: _,
                                onChange: He,
                                placeholder: "Last Name",
                                className: "focus",
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(b.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", { children: "Email" }),
                              Object(b.jsx)("input", {
                                type: "email",
                                name: "emailAdress",
                                id: "email",
                                value: P,
                                onChange: He,
                                className: "focus",
                                placeholder: "email",
                                disabled: "true",
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", { children: "Phone" }),
                              Object(b.jsx)("input", {
                                type: "text",
                                name: "phone",
                                id: "phone",
                                value: q,
                                onChange: He,
                                placeholder: "Phone Number",
                                className: "focus",
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", { children: "DOB" }),
                              Object(b.jsx)("input", {
                                type: "date",
                                name: "date",
                                id: "date",
                                value: I,
                                onChange: He,
                                className: "focus",
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(b.jsx)("hr", { className: "section2" }),
                    Object(b.jsx)("h5", {
                      className: "sectionTitle",
                      style: { marginBottom: "30px" },
                      children: "More Details",
                    }),
                    Object(b.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(b.jsx)("div", {
                          className: "col-md-6",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "Redential Address",
                              }),
                              Object(b.jsx)("textarea", {
                                className: "form-control",
                                name: "r_address",
                                id: "r_address",
                                onChange: He,
                                value: G,
                                rows: "3",
                                placeholder:
                                  "Please Give Your Residential Address",
                                required: !0,
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-6",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "Your description",
                              }),
                              Object(b.jsx)("textarea", {
                                className: "form-control",
                                name: "details",
                                id: "details",
                                value: Z,
                                onChange: He,
                                rows: "3",
                                required: !0,
                                placeholder: "Tell us something about yourself",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(b.jsx)("hr", { className: "section2" }),
                    Object(b.jsx)("h5", {
                      className: "sectionTitle",
                      style: { marginBottom: "30px" },
                      children: "Profession Details",
                    }),
                    Object(b.jsxs)("div", {
                      className: "row mt-4",
                      children: [
                        Object(b.jsxs)("div", {
                          className: "col-md-6",
                          children: [
                            Object(b.jsx)("label", { children: "Profession" }),
                            Object(b.jsxs)("select", {
                              className: "browser-default custom-select",
                              name: "Profession",
                              id: "Profession",
                              onChange: He,
                              value: te,
                              required: !0,
                              children: [
                                Object(b.jsx)("option", {
                                  value: "",
                                  selected: !0,
                                  disabled: !0,
                                  children: "Select Your Profession *",
                                }),
                                Object(b.jsx)("option", {
                                  value: "Businessman",
                                  children: "Businessman",
                                }),
                                Object(b.jsx)("option", {
                                  value: "Employee",
                                  children: "Employee",
                                }),
                                Object(b.jsx)("option", {
                                  value: "Other",
                                  children: "Other",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(b.jsxs)("div", {
                          className: "col-md-6",
                          children: [
                            Object(b.jsx)("label", { children: "Resume" }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("input", {
                              type: "file",
                              name: "file",
                              id: "resume",
                              className: "item",
                              accept: ".pdf",
                              onChange: function (e) {
                                Pe(!1);
                                var t = e.target.files[0];
                                t.size > 2097152
                                  ? Pe(!0)
                                  : new FormData().append("resume", t, t.name);
                              },
                              required: "",
                            }),
                            Le
                              ? Object(b.jsx)("p", {
                                  style: { color: "red" },
                                  children: "file size up to 2mb allowed ",
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                    Object(b.jsx)("hr", { className: "section2" }),
                    Object(b.jsx)("h5", {
                      className: "sectionTitle",
                      style: { marginBottom: "30px" },
                      children: "Previous Experiences",
                    }),
                    Object(b.jsxs)("div", {
                      className: "row mt-20",
                      children: [
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "Years of Experience",
                              }),
                              Object(b.jsx)("textarea", {
                                className: "form-control",
                                name: "experience",
                                id: "previousExperience",
                                value: le,
                                onChange: He,
                                rows: "3",
                                required: !0,
                                placeholder:
                                  "Describe your Previous Experiences ",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "Website Link",
                              }),
                              Object(b.jsx)("textarea", {
                                className: "form-control",
                                name: "wlink",
                                id: "websiteLink",
                                value: je,
                                onChange: He,
                                rows: "3",
                                required: !0,
                                placeholder: "profolio website link",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-4",
                          children: Object(b.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(b.jsx)("label", {
                                children: "Number of Patents",
                              }),
                              Object(b.jsx)("textarea", {
                                className: "form-control",
                                name: "wlink",
                                id: "patent",
                                value: me,
                                onChange: He,
                                rows: "3",
                                required: !0,
                                placeholder:
                                  "Describe patents you have, if any",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(b.jsx)("hr", { className: "section2" }),
                    Object(b.jsx)("h5", {
                      className: "sectionTitle",
                      style: { marginBottom: "30px" },
                      children: "Which domain experties you have ?",
                    }),
                    Object(b.jsxs)("div", {
                      className: "row mt-4",
                      children: [
                        Object(b.jsx)("div", {
                          className: "col-md-6",
                          children: Object(b.jsxs)("select", {
                            name: "product",
                            className: "browser-default custom-select",
                            id: "industryType",
                            required: !0,
                            value: Oe,
                            onChange: He,
                            children: [
                              Object(b.jsx)("option", {
                                value: "",
                                selected: !0,
                                disabled: !0,
                                children: "Company type*",
                              }),
                              Object(b.jsx)("option", {
                                value: "Product Based",
                                children: "Product Based",
                              }),
                              Object(b.jsx)("option", {
                                value: "Service Based",
                                children: "Service Based",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-md-6",
                          children: Object(b.jsxs)("select", {
                            name: "service",
                            className: "browser-default custom-select",
                            id: "domain",
                            required: !0,
                            value: ge,
                            onChange: He,
                            children: [
                              Object(b.jsx)("option", {
                                value: "",
                                selected: !0,
                                disabled: !0,
                                children: "Company Domain *",
                              }),
                              Object(b.jsx)("option", {
                                value: "Educational Sector",
                                children: "Educational Sector",
                              }),
                              Object(b.jsx)("option", {
                                value: "IT",
                                children: "IT",
                              }),
                              Object(b.jsx)("option", {
                                value: "Medical Sector",
                                children: "Medical Sector",
                              }),
                              Object(b.jsx)("option", {
                                value: "Other",
                                children: "Other",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(b.jsx)("h5", {
                      className: "sectionTitle mt-50",
                      style: { marginBottom: "30px" },
                      children: "Select Area of Experties ?",
                    }),
                    Object(b.jsx)("div", {
                      className: "row mt-4",
                      children: Object(b.jsx)("div", {
                        className: "col",
                        children:
                          Se.length > 0
                            ? Se.map(function (e) {
                                return Object(b.jsx)("span", {
                                  className: "chip",
                                  children: e,
                                });
                              })
                            : "",
                      }),
                    }),
                    Object(b.jsx)("div", {
                      className: "row mt-4",
                      children: Object(b.jsx)("div", {
                        className: "col-md-12",
                        children: Object(b.jsxs)("div", {
                          className: "product_checkboxes",
                          children: [
                            Object(b.jsxs)("div", {
                              className: "form-check form-check-inline",
                              children: [
                                Object(b.jsx)("input", {
                                  className: "form-check-input",
                                  name: "exp[]",
                                  type: "checkbox",
                                  id: "inlineCheckbox1",
                                  value: "Marketing",
                                  onChange: function (e) {
                                    return Ve(e.target.value);
                                  },
                                }),
                                Object(b.jsx)("label", {
                                  className: "form-check-label",
                                  for: "inlineCheckbox1",
                                  children: "Marketing",
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "form-check form-check-inline",
                              children: [
                                Object(b.jsx)("input", {
                                  className: "form-check-input",
                                  name: "exp[]",
                                  type: "checkbox",
                                  id: "inlineCheckbox2",
                                  onChange: function (e) {
                                    return Ve(e.target.value);
                                  },
                                  value: "Personnel",
                                }),
                                Object(b.jsx)("label", {
                                  className: "form-check-label",
                                  for: "inlineCheckbox2",
                                  children: "Personnel",
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "form-check form-check-inline",
                              children: [
                                Object(b.jsx)("input", {
                                  className: "form-check-input",
                                  name: "exp[]",
                                  type: "checkbox",
                                  id: "inlineCheckbox3",
                                  onChange: function (e) {
                                    return Ve(e.target.value);
                                  },
                                  value: "General Management",
                                }),
                                Object(b.jsx)("label", {
                                  className: "form-check-label",
                                  for: "inlineCheckbox3",
                                  children: "General Management",
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "form-check form-check-inline",
                              children: [
                                Object(b.jsx)("input", {
                                  className: "form-check-input",
                                  name: "exp[]",
                                  type: "checkbox",
                                  id: "inlineCheckbox4",
                                  onChange: function (e) {
                                    return Ve(e.target.value);
                                  },
                                  value: "Technical",
                                }),
                                Object(b.jsx)("label", {
                                  className: "form-check-label",
                                  for: "inlineCheckbox4",
                                  children: "Technical",
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "form-check form-check-inline",
                              children: [
                                Object(b.jsx)("input", {
                                  className: "form-check-input",
                                  name: "exp[]",
                                  type: "checkbox",
                                  id: "inlineCheckbox5",
                                  onChange: function (e) {
                                    return Ve(e.target.value);
                                  },
                                  value: "Administration",
                                }),
                                Object(b.jsx)("label", {
                                  className: "form-check-label",
                                  for: "inlineCheckbox5",
                                  children: "Administration",
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "form-check form-check-inline",
                              children: [
                                Object(b.jsx)("input", {
                                  className: "form-check-input",
                                  name: "exp[]",
                                  type: "checkbox",
                                  id: "inlineCheckbox6",
                                  onChange: function (e) {
                                    return Ve(e.target.value);
                                  },
                                  value: "Other",
                                }),
                                Object(b.jsx)("label", {
                                  className: "form-check-label",
                                  for: "inlineCheckbox6",
                                  children: "Other",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(b.jsx)("center", {
                      className: "mt-50",
                      children: Object(b.jsx)("input", {
                        className: "btn btn-primary mt-20",
                        type: "submit",
                        value: "submit",
                        name: "submit",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        J = function () {
          return Object(b.jsx)("div", {
            children: Object(b.jsx)("div", {
              className: "container ",
              children: Object(b.jsx)("div", {
                className: "row successcontainer",
                children: Object(b.jsx)("div", {
                  className: "col",
                  children: Object(b.jsxs)("div", {
                    className: "successWindow",
                    children: [
                      Object(b.jsx)("div", {
                        className: "text-center",
                        children: Object(b.jsx)("img", {
                          className: "img_100",
                          src: A,
                          alt: "success",
                        }),
                      }),
                      Object(b.jsxs)("div", {
                        className: "text-center",
                        children: [
                          Object(b.jsx)("h3", {
                            children: "Your registration is SuccessFull",
                          }),
                          Object(b.jsx)("a", {
                            href: "/mentor/check",
                            children: "Dashboard",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        K = c.p + "static/media/mentorwellcome.db3eb192.svg",
        Z = function () {
          var e = S(),
            t = e.user;
          return e.loading
            ? Object(b.jsx)("div", {
                className: "container",
                children: Object(b.jsx)("div", {
                  className:
                    "row fullWindow justify-content-center align-items-center",
                  children: Object(b.jsx)(M, {}),
                }),
              })
            : Object(b.jsx)("div", {
                className: "container  mt-50",
                children: Object(b.jsxs)("div", {
                  className: "row wellcomeContainer align-items-center",
                  children: [
                    Object(b.jsx)("div", {
                      className: "col-6",
                      children: Object(b.jsx)("img", {
                        className: "img_100 ",
                        style: { padding: "50px" },
                        src: K,
                        alt: "wellcome",
                      }),
                    }),
                    Object(b.jsxs)("div", {
                      className: "col-6",
                      children: [
                        Object(b.jsxs)("h4", {
                          children: [
                            "Wellcome Mentor",
                            " ",
                            Object(b.jsxs)("strong", {
                              style: { color: "blue" },
                              children: [" ", t.email],
                            }),
                          ],
                        }),
                        Object(b.jsxs)("p", {
                          children: [
                            "Lorem ipsum dolor sit amet, consectetur ",
                            Object(b.jsx)("br", {}),
                            " adipiscing elit. Sed tincidunt ipsum eu purus ultricies,",
                            Object(b.jsx)("br", {}),
                            "et pulvinar lacus rhoncus. Nulla nec.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
        },
        X = c.p + "static/media/connectSuccess.33fcf943.gif",
        $ = function () {
          return Object(b.jsx)("div", {
            className: "text-center",
            children: Object(b.jsx)("img", {
              src: X,
              alt: "success",
              width: "200px",
            }),
          });
        },
        ee = function () {
          S().user;
          var e = Object(r.g)().handle,
            t = Object(s.useState)(null),
            c = Object(x.a)(t, 2),
            a = c[0],
            l = c[1],
            n = Object(s.useState)(!0),
            i = Object(x.a)(n, 2),
            j = i[0],
            o = i[1],
            d = Object(s.useState)(!1),
            m = Object(x.a)(d, 2),
            h = m[0],
            u = m[1],
            O = Object(s.useState)(""),
            p = Object(x.a)(O, 2),
            v = (p[0], p[1]),
            f = Object(s.useState)(!1),
            g = Object(x.a)(f, 2),
            w = g[0],
            y = g[1];
          Object(s.useEffect)(function () {
            e &&
              N()({
                method: "get",
                url: "/api/mentors/get_details/".concat(e),
              }).then(function (e) {
                e.data.success ? (l(e.data.data), o(!1)) : o(!1);
              });
          }, []);
          var C = function () {
            u(!h);
          };
          return j
            ? Object(b.jsx)("div", {
                className: "container",
                children: Object(b.jsx)("div", {
                  className:
                    "row fullWindow justify-content-center align-items-center",
                  children: Object(b.jsx)(M, {}),
                }),
              })
            : a
            ? Object(b.jsxs)("div", {
                className: "container mt-50",
                children: [
                  Object(b.jsx)("div", {
                    className: "row",
                    children: Object(b.jsxs)("div", {
                      className: "col text-center",
                      children: [
                        Object(b.jsx)("img", {
                          className: "rounded-circle",
                          width: "150px",
                          height: "150px",
                          src: "https://via.placeholder.com/150",
                          alt: "profileimage",
                        }),
                        Object(b.jsxs)("div", {
                          className: "",
                          children: [
                            Object(b.jsxs)("h5", {
                              className: "mt-20",
                              children: [a.fname, " ", a.mname, " ", a.lname],
                            }),
                            Object(b.jsx)("span", { children: "mentor" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(b.jsxs)("div", {
                    className: "d-flex",
                    children: [
                      Object(b.jsxs)("div", {
                        className: "contact-section",
                        children: [
                          Object(b.jsxs)("div", {
                            className: "profile-icon",
                            children: [
                              Object(b.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                className: "bi bi-phone",
                                viewBox: "0 0 16 16",
                                children: [
                                  Object(b.jsx)("path", {
                                    d:
                                      "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z",
                                  }),
                                  Object(b.jsx)("path", {
                                    d: "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
                                  }),
                                ],
                              }),
                              Object(b.jsx)("span", { children: "Phone" }),
                            ],
                          }),
                          Object(b.jsxs)("div", {
                            className: "profile-icon",
                            children: [
                              Object(b.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "currentColor",
                                className: "bi bi-envelope",
                                viewBox: "0 0 16 16",
                                children: Object(b.jsx)("path", {
                                  d:
                                    "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z",
                                }),
                              }),
                              Object(b.jsx)("span", { children: "Email" }),
                            ],
                          }),
                          h
                            ? Object(b.jsxs)("div", {
                                className: "profile-icon connect",
                                onClick: C,
                                children: [
                                  Object(b.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-shield",
                                    viewBox: "0 0 16 16",
                                    children: Object(b.jsx)("path", {
                                      d:
                                        "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z",
                                    }),
                                  }),
                                  Object(b.jsx)("span", {
                                    children: "profile",
                                  }),
                                ],
                              })
                            : Object(b.jsxs)("div", {
                                className: "profile-icon connect",
                                onClick: C,
                                children: [
                                  Object(b.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    className: "bi bi-plus-circle-fill",
                                    viewBox: "0 0 16 16",
                                    children: Object(b.jsx)("path", {
                                      d:
                                        "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z",
                                    }),
                                  }),
                                  Object(b.jsx)("span", {
                                    children: "Connect Now",
                                  }),
                                ],
                              }),
                          Object(b.jsx)("div", {
                            className: "profile-icon connect",
                            children: Object(b.jsxs)("a", {
                              href: a.websiteLink,
                              traget: "_blank",
                              children: [
                                Object(b.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "16",
                                  height: "16",
                                  fill: "currentColor",
                                  className: "bi bi-globe2",
                                  viewBox: "0 0 16 16",
                                  children: Object(b.jsx)("path", {
                                    d:
                                      "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z",
                                  }),
                                }),
                                Object(b.jsx)("span", { children: "website" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      h
                        ? Object(b.jsxs)("div", {
                            className: "flex-grow-1 p-10",
                            children: [
                              Object(b.jsx)("div", {
                                className: "row mt-50",
                                children: Object(b.jsxs)("div", {
                                  className: "col",
                                  children: [
                                    Object(b.jsx)("h6", {
                                      children: "Expertise in",
                                    }),
                                    a.expertise.length > 0
                                      ? a.expertise.map(function (e) {
                                          return Object(b.jsx)("div", {
                                            className: "chip",
                                            children: e,
                                          });
                                        })
                                      : "",
                                  ],
                                }),
                              }),
                              Object(b.jsx)("div", {
                                className: "row mt-50",
                                children: w
                                  ? Object(b.jsx)("div", {
                                      className: "col text-center",
                                      children: Object(b.jsx)($, {}),
                                    })
                                  : Object(b.jsxs)("div", {
                                      className: "col",
                                      children: [
                                        Object(b.jsx)("span", {
                                          children:
                                            "Please add a note for Requets",
                                        }),
                                        Object(b.jsxs)("form", {
                                          onSubmit: function (e) {
                                            e.preventDefault(), y(!0);
                                          },
                                          children: [
                                            Object(b.jsx)("textarea", {
                                              className:
                                                "form-control requetNote",
                                              rows: "4",
                                              onChange: function (e) {
                                                return v(e.target.value);
                                              },
                                            }),
                                            Object(b.jsx)("button", {
                                              className:
                                                "btn btn-primary mt-20 ml-auto d-block",
                                              children: "send",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          })
                        : Object(b.jsxs)("div", {
                            className: "flex-grow-1 p-10",
                            children: [
                              Object(b.jsx)("div", {
                                className: "row mt-50",
                                children: Object(b.jsxs)("div", {
                                  className: "col",
                                  children: [
                                    Object(b.jsx)("h6", {
                                      children: "Expertise in",
                                    }),
                                    a.expertise.length > 0
                                      ? a.expertise.map(function (e) {
                                          return Object(b.jsx)("div", {
                                            className: "chip",
                                            children: e,
                                          });
                                        })
                                      : "",
                                  ],
                                }),
                              }),
                              Object(b.jsxs)("div", {
                                className: "row mt-20",
                                children: [
                                  Object(b.jsx)("div", {
                                    className: "col-8 ",
                                    children: Object(b.jsxs)("div", {
                                      className: "profile-block ",
                                      children: [
                                        Object(b.jsx)("span", {
                                          children: "About me",
                                        }),
                                        Object(b.jsxs)("h5", {
                                          className: "mt-20",
                                          children: [
                                            "hello i am ",
                                            a.fname,
                                            " ",
                                            a.mname,
                                            " ",
                                            a.lname,
                                          ],
                                        }),
                                        Object(b.jsx)("p", {
                                          className: "text-justify mt-20",
                                          children: a.description,
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(b.jsx)("div", {
                                    className: "col-4 ",
                                    children: Object(b.jsxs)("div", {
                                      className: "profile-block primay-block",
                                      children: [
                                        Object(b.jsx)("span", {
                                          children: "My startup",
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "icon-text mt-20",
                                          children: [
                                            Object(b.jsxs)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              fill: "currentColor",
                                              className: "bi bi-speedometer2",
                                              viewBox: "0 0 16 16",
                                              children: [
                                                Object(b.jsx)("path", {
                                                  d:
                                                    "M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z",
                                                }),
                                                Object(b.jsx)("path", {
                                                  "fill-rule": "evenodd",
                                                  d:
                                                    "M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z",
                                                }),
                                              ],
                                            }),
                                            Object(b.jsx)("p", {
                                              children: Object(b.jsx)(
                                                "strong",
                                                {
                                                  children:
                                                    a.MentorDetails.domain,
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "icon-text ",
                                          children: [
                                            Object(b.jsxs)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              fill: "currentColor",
                                              className: "bi bi-list-stars",
                                              viewBox: "0 0 16 16",
                                              children: [
                                                Object(b.jsx)("path", {
                                                  "fill-rule": "evenodd",
                                                  d:
                                                    "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z",
                                                }),
                                                Object(b.jsx)("path", {
                                                  d:
                                                    "M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z",
                                                }),
                                              ],
                                            }),
                                            Object(b.jsx)("p", {
                                              children: Object(b.jsx)(
                                                "strong",
                                                {
                                                  children:
                                                    a.MentorDetails
                                                      .industryType,
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(b.jsxs)("div", {
                                className: "row mt-50",
                                children: [
                                  Object(b.jsx)("div", {
                                    className: "col-4 ",
                                    children: Object(b.jsxs)("div", {
                                      className: "profile-block primay-block",
                                      children: [
                                        Object(b.jsx)("span", {
                                          children: "Profession",
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "icon-text mt-20",
                                          children: [
                                            Object(b.jsxs)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              fill: "currentColor",
                                              className: "bi bi-award",
                                              viewBox: "0 0 16 16",
                                              children: [
                                                Object(b.jsx)("path", {
                                                  d:
                                                    "M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z",
                                                }),
                                                Object(b.jsx)("path", {
                                                  d:
                                                    "M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z",
                                                }),
                                              ],
                                            }),
                                            Object(b.jsx)("p", {
                                              children: Object(b.jsx)(
                                                "strong",
                                                { children: a.profession }
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(b.jsx)("div", {
                                    className: "col-8 ",
                                    children: Object(b.jsxs)("div", {
                                      className: "profile-block ",
                                      children: [
                                        Object(b.jsx)("span", {
                                          children: "Perious Experience",
                                        }),
                                        Object(b.jsx)("p", {
                                          className: "text-justify mt-20",
                                          children: a.previousExperience,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(b.jsx)("div", {
                                className: "row mt-20 mb-100",
                                children: Object(b.jsx)("div", {
                                  className: "col",
                                  children: Object(b.jsxs)("div", {
                                    className: "profile-block ",
                                    children: [
                                      Object(b.jsx)("span", {
                                        children: "patents",
                                      }),
                                      Object(b.jsx)("p", {
                                        className: "text-justify mt-20",
                                        children: a.MentorDetails.patent,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              })
            : Object(b.jsx)("div", {
                className: "container",
                children: Object(b.jsx)("div", {
                  className:
                    "row fullWindow justify-content-center align-items-center",
                  children: Object(b.jsxs)("div", {
                    className: "col-4 text-center",
                    children: [
                      Object(b.jsx)("img", {
                        src: V,
                        className: "img_100",
                        alt: "no result",
                      }),
                      Object(b.jsx)("h6", {
                        className: "mt-5",
                        children: "No Result",
                      }),
                    ],
                  }),
                }),
              });
        };
      c(89);
      var te = function () {
          return Object(b.jsx)("div", {
            className: "App",
            children: Object(b.jsx)(y, {
              children: Object(b.jsx)(i.a, {
                children: Object(b.jsxs)(r.c, {
                  children: [
                    Object(b.jsx)(r.a, {
                      path: "/",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            Object(b.jsx)(u, {}),
                            " ",
                            Object(b.jsx)(m, {}),
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/login",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            Object(b.jsx)(T, {}),
                            " ",
                            Object(b.jsx)(v, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/signup",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            Object(b.jsx)(T, {}),
                            " ",
                            Object(b.jsx)(C, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/onboard",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            Object(b.jsx)(_, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/registrationSuccess",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            " ",
                            Object(b.jsx)(B, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/dashboard",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            Object(b.jsx)(D, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/profile/:handle",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            Object(b.jsx)(W, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/check",
                      exact: !0,
                      component: function () {
                        return Object(b.jsx)(E, {});
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/startup/error",
                      exact: !0,
                      component: function () {
                        return Object(b.jsx)(H, {});
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/login",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            " ",
                            Object(b.jsx)(F, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/signup",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            " ",
                            Object(b.jsx)(Y, {}),
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/check",
                      exact: !0,
                      component: function () {
                        return Object(b.jsx)(G, {});
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/onboard",
                      exact: !0,
                      component: function () {
                        return Object(b.jsx)(Q, {});
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/dashboard",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            " ",
                            Object(b.jsx)(Z, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/registrationSuccess",
                      exact: !0,
                      component: function () {
                        return Object(b.jsx)(J, {});
                      },
                    }),
                    Object(b.jsx)(r.a, {
                      path: "/mentor/profile/:handle",
                      exact: !0,
                      component: function () {
                        return Object(b.jsxs)(b.Fragment, {
                          children: [
                            " ",
                            Object(b.jsx)(T, {}),
                            Object(b.jsx)(ee, {}),
                            " ",
                          ],
                        });
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        ce = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 92))
              .then(function (t) {
                var c = t.getCLS,
                  s = t.getFID,
                  a = t.getFCP,
                  l = t.getLCP,
                  n = t.getTTFB;
                c(e), s(e), a(e), l(e), n(e);
              });
        },
        se = c(26);
      c(90);
      se.a.length ||
        se.a.initializeApp({
          apiKey: "AIzaSyCRZNemA4dfk_Vy1orvVR9d0gZ11xue6zM",
          authDomain: "startupace-auth-system.firebaseapp.com",
          projectId: "startupace-auth-system",
          storageBucket: "startupace-auth-system.appspot.com",
          messagingSenderId: "849716672945",
          appId: "1:849716672945:web:b3c00ca321b274c843a590",
          measurementId: "G-NHL7JGYVGR",
        });
      t.default = se.a;
      n.a.render(
        Object(b.jsx)(a.a.StrictMode, { children: Object(b.jsx)(te, {}) }),
        document.getElementById("root")
      ),
        ce();
    },
  },
  [[91, 1, 2]],
]);
//# sourceMappingURL=main.68d21324.chunk.js.map
