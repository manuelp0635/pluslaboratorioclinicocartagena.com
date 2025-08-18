var _paq;
(_paq = window._paq = window._paq || []).push(["trackPageView"]),
  _paq.push(["enableLinkTracking"]),
  _paq.push(["setTrackerUrl", "/matomo/matomo.php"]),
  _paq.push(["setSiteId", "1"]),
  "object" != typeof _paq && (_paq = []),
  "object" != typeof window.Matomo &&
    (window.Matomo = window.Piwik =
      (function () {
        var Ne,
          Qe,
          $,
          re = {},
          ee = {},
          D = document,
          z = navigator,
          Cn = screen,
          E = window,
          wt =
            E.performance ||
            E.mozPerformance ||
            E.msPerformance ||
            E.webkitPerformance,
          V = E.encodeURIComponent,
          Tt = E.decodeURIComponent,
          xe = (unescape, []),
          tt = [],
          kn = 0,
          Zn = 0,
          Qt = 0,
          be = !1,
          Te = "";
        function Ie(n) {
          try {
            return Tt(n);
          } catch {
            return unescape(n);
          }
        }
        function N(n) {
          return void 0 !== n;
        }
        function Et(n) {
          return "function" == typeof n;
        }
        function ne(n) {
          return "object" == typeof n;
        }
        function de(n) {
          return "string" == typeof n || n instanceof String;
        }
        function Me(n) {
          return (
            N(n) &&
            ((function vi(n) {
              return "number" == typeof n || n instanceof Number;
            })(n) ||
              (de(n) && n.length))
          );
        }
        function Pe(n) {
          "undefined" != typeof console &&
            console &&
            console.error &&
            console.error(n);
        }
        function an() {
          var n, c, l, m, g;
          for (n = 0; n < arguments.length; n += 1) {
            var T, k;
            if (
              ((g = null),
              arguments[n] && arguments[n].slice && (g = arguments[n].slice()),
              de((l = (m = arguments[n]).shift())) && l.indexOf("::") > 0)
            )
              (T = l.split("::")),
                (l = T[1]),
                "object" == typeof $[(k = T[0])] && "function" == typeof $[k][l]
                  ? $[k][l].apply($[k], m)
                  : g && tt.push(g);
            else
              for (c = 0; c < xe.length; c++)
                if (de(l)) {
                  k = xe[c];
                  var M = l.indexOf(".") > 0;
                  if (M)
                    if (((T = l.split(".")), k && "object" == typeof k[T[0]]))
                      (k = k[T[0]]), (l = T[1]);
                    else if (g) {
                      tt.push(g);
                      break;
                    }
                  if (k[l]) k[l].apply(k, m);
                  else {
                    var Q =
                      "The method '" +
                      l +
                      '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                    if ((Pe(Q), !M)) throw new TypeError(Q);
                  }
                  if (
                    "addTracker" === l ||
                    "setTrackerUrl" === l ||
                    "setSiteId" === l
                  )
                    break;
                } else l.apply(xe[c], m);
          }
        }
        function Ee(n, c, l, m) {
          return n.addEventListener
            ? (n.addEventListener(c, l, m), !0)
            : n.attachEvent
            ? n.attachEvent("on" + c, l)
            : void (n["on" + c] = l);
        }
        function Kt(n) {
          "complete" === D.readyState
            ? n()
            : E.addEventListener
            ? E.addEventListener("load", n, !1)
            : E.attachEvent && E.attachEvent("onload", n);
        }
        function un(n) {
          var c = !1;
          (c = D.attachEvent
            ? "complete" === D.readyState
            : "loading" !== D.readyState)
            ? n()
            : (D.addEventListener
                ? Ee(D, "DOMContentLoaded", function m() {
                    D.removeEventListener("DOMContentLoaded", m, !1),
                      c || ((c = !0), n());
                  })
                : D.attachEvent &&
                  (D.attachEvent("onreadystatechange", function m() {
                    "complete" === D.readyState &&
                      (D.detachEvent("onreadystatechange", m),
                      c || ((c = !0), n()));
                  }),
                  D.documentElement.doScroll &&
                    E === E.top &&
                    (function m() {
                      if (!c) {
                        try {
                          D.documentElement.doScroll("left");
                        } catch {
                          return void setTimeout(m, 0);
                        }
                        (c = !0), n();
                      }
                    })()),
              Ee(
                E,
                "load",
                function () {
                  c || ((c = !0), n());
                },
                !1
              ));
        }
        function An(n, c, l) {
          if (!n) return "";
          var g,
            k,
            m = "";
          for (g in re)
            Object.prototype.hasOwnProperty.call(re, g) &&
              re[g] &&
              "function" == typeof re[g][n] &&
              (k = (0, re[g][n])(c || {}, l)) &&
              (m += k);
          return m;
        }
        function On(n) {
          var l = new RegExp("^([a-z]+):").exec(n);
          return l ? l[1] : null;
        }
        function _(n) {
          var l = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(
            n
          );
          return l ? l[1] : n;
        }
        function nt(n) {
          return /^[0-9][0-9]*(\.[0-9]+)?$/.test(n);
        }
        function Un(n, c) {
          return 0 === (n = String(n)).lastIndexOf(c, 0);
        }
        function it(n, c) {
          return -1 !== (n = String(n)).indexOf(c, n.length - c.length);
        }
        function j(n, c) {
          return (n = String(n)).substr(0, n.length - c);
        }
        function Ct(n, c) {
          if (
            -1 === (n = String(n)).indexOf("?" + c + "=") &&
            -1 === n.indexOf("&" + c + "=") &&
            -1 === n.indexOf("#" + c + "=")
          )
            return n;
          var l = "",
            m = n.indexOf("#");
          -1 !== m && ((l = n.substr(m + 1)), (n = n.substr(0, m)));
          var g = n.indexOf("?"),
            T = "",
            k = n;
          g > -1 && ((T = n.substr(g + 1)), (k = n.substr(0, g)));
          var B = function (X) {
            for (var oe = X.length - 1; oe >= 0; oe--)
              X[oe].split("=")[0] === c && X.splice(oe, 1);
            return X;
          };
          if (T) {
            var M = B(T.split("&")).join("&");
            M && (k += "?" + M);
          }
          if (l && l.indexOf("=") > 0) {
            var Q = "?" === l.charAt(0);
            Q && (l = l.substr(1));
            var ue = B(l.split("&")).join("&");
            ue && ((k += "#"), Q && (k += "?"), (k += ue));
          } else l && (k += "#" + l);
          return k;
        }
        function ht(n, c) {
          var g = new RegExp("[\\?&#]" + c + "=([^&#]*)").exec(n);
          return g ? Ie(g[1]) : "";
        }
        function kt(n) {
          return n && String(n) === n ? n.replace(/^\s+|\s+$/g, "") : n;
        }
        function Xt(n) {
          var m,
            g,
            T,
            J,
            oe,
            ge,
            K,
            ye,
            Ce,
            ke,
            c = function (ot, Le) {
              return (ot << Le) | (ot >>> (32 - Le));
            },
            l = function (ot) {
              var qe,
                Le = "";
              for (qe = 7; qe >= 0; qe--)
                Le += ((ot >>> (4 * qe)) & 15).toString(16);
              return Le;
            },
            k = [],
            B = 1732584193,
            M = 4023233417,
            Q = 2562383102,
            ue = 271733878,
            X = 3285377520,
            ie = [];
          for (
            ke = (n = (function ii(n) {
              return unescape(V(n));
            })(n)).length,
              g = 0;
            g < ke - 3;
            g += 4
          )
            (T =
              (n.charCodeAt(g) << 24) |
              (n.charCodeAt(g + 1) << 16) |
              (n.charCodeAt(g + 2) << 8) |
              n.charCodeAt(g + 3)),
              ie.push(T);
          switch (3 & ke) {
            case 0:
              g = 2147483648;
              break;
            case 1:
              g = (n.charCodeAt(ke - 1) << 24) | 8388608;
              break;
            case 2:
              g =
                (n.charCodeAt(ke - 2) << 24) |
                (n.charCodeAt(ke - 1) << 16) |
                32768;
              break;
            case 3:
              g =
                (n.charCodeAt(ke - 3) << 24) |
                (n.charCodeAt(ke - 2) << 16) |
                (n.charCodeAt(ke - 1) << 8) |
                128;
          }
          for (ie.push(g); 14 != (15 & ie.length); ) ie.push(0);
          for (
            ie.push(ke >>> 29), ie.push((ke << 3) & 4294967295), m = 0;
            m < ie.length;
            m += 16
          ) {
            for (g = 0; g < 16; g++) k[g] = ie[m + g];
            for (g = 16; g <= 79; g++)
              k[g] = c(k[g - 3] ^ k[g - 8] ^ k[g - 14] ^ k[g - 16], 1);
            for (J = B, oe = M, ge = Q, K = ue, ye = X, g = 0; g <= 19; g++)
              (Ce =
                (c(J, 5) + ((oe & ge) | (~oe & K)) + ye + k[g] + 1518500249) &
                4294967295),
                (ye = K),
                (K = ge),
                (ge = c(oe, 30)),
                (oe = J),
                (J = Ce);
            for (g = 20; g <= 39; g++)
              (Ce =
                (c(J, 5) + (oe ^ ge ^ K) + ye + k[g] + 1859775393) &
                4294967295),
                (ye = K),
                (K = ge),
                (ge = c(oe, 30)),
                (oe = J),
                (J = Ce);
            for (g = 40; g <= 59; g++)
              (Ce =
                (c(J, 5) +
                  ((oe & ge) | (oe & K) | (ge & K)) +
                  ye +
                  k[g] +
                  2400959708) &
                4294967295),
                (ye = K),
                (K = ge),
                (ge = c(oe, 30)),
                (oe = J),
                (J = Ce);
            for (g = 60; g <= 79; g++)
              (Ce =
                (c(J, 5) + (oe ^ ge ^ K) + ye + k[g] + 3395469782) &
                4294967295),
                (ye = K),
                (K = ge),
                (ge = c(oe, 30)),
                (oe = J),
                (J = Ce);
            (B = (B + J) & 4294967295),
              (M = (M + oe) & 4294967295),
              (Q = (Q + ge) & 4294967295),
              (ue = (ue + K) & 4294967295),
              (X = (X + ye) & 4294967295);
          }
          return (Ce = l(B) + l(M) + l(Q) + l(ue) + l(X)).toLowerCase();
        }
        function dt(n) {
          var c = n.length;
          return (
            "." === n.charAt(--c) && (n = n.slice(0, c)),
            "*." === n.slice(0, 2) && (n = n.slice(1)),
            -1 !== n.indexOf("/") && (n = n.substr(0, n.indexOf("/"))),
            n
          );
        }
        function $t(n) {
          return n && ((!N(n.children) && N(n.childNodes)) || N(n.children))
            ? n.children
            : [];
        }
        function pe(n, c) {
          if (n && n.indexOf) return n.indexOf(c);
          if (!N(n) || null === n || !n.length) return -1;
          var l = n.length;
          if (0 === l) return -1;
          for (var m = 0; m < l; ) {
            if (n[m] === c) return m;
            m++;
          }
          return -1;
        }
        function Ue(n) {
          if (!n) return !1;
          function c(g, T) {
            return E.getComputedStyle
              ? D.defaultView.getComputedStyle(g, null)[T]
              : g.currentStyle
              ? g.currentStyle[T]
              : void 0;
          }
          return (function m(g, T, k, B, M, Q, ue) {
            var X = g.parentNode;
            return (
              !!(function l(g) {
                for (g = g.parentNode; g; ) {
                  if (g === D) return !0;
                  g = g.parentNode;
                }
                return !1;
              })(g) &&
              (9 === X.nodeType ||
                ("0" !== c(g, "opacity") &&
                  "none" !== c(g, "display") &&
                  "hidden" !== c(g, "visibility") &&
                  ((!N(T) || !N(k) || !N(B) || !N(M) || !N(Q) || !N(ue)) &&
                    ((B = (T = g.offsetTop) + g.offsetHeight),
                    (k = (M = g.offsetLeft) + g.offsetWidth),
                    (Q = g.offsetWidth),
                    (ue = g.offsetHeight)),
                  n !== g ||
                    (0 !== ue && 0 !== Q) ||
                    "hidden" !== c(g, "overflow")) &&
                  (!X ||
                    ((("hidden" !== c(X, "overflow") &&
                      "scroll" !== c(X, "overflow")) ||
                      !(
                        M + 1 > X.offsetWidth + X.scrollLeft ||
                        M + Q - 1 < X.scrollLeft ||
                        T + 1 > X.offsetHeight + X.scrollTop ||
                        T + ue - 1 < X.scrollTop
                      )) &&
                      (g.offsetParent === X &&
                        ((M += X.offsetLeft), (T += X.offsetTop)),
                      m(X, T, k, B, M, Q, ue))))))
            );
          })(n);
        }
        var O = {
            htmlCollectionToArray: function (n) {
              var l,
                c = [];
              if (!n || !n.length) return c;
              for (l = 0; l < n.length; l++) c.push(n[l]);
              return c;
            },
            find: function (n) {
              if (!document.querySelectorAll || !n) return [];
              var c = document.querySelectorAll(n);
              return this.htmlCollectionToArray(c);
            },
            findMultiple: function (n) {
              if (!n || !n.length) return [];
              var c,
                l,
                m = [];
              for (c = 0; c < n.length; c++)
                (l = this.find(n[c])), (m = m.concat(l));
              return this.makeNodesUnique(m);
            },
            findNodesByTagName: function (n, c) {
              if (!n || !c || !n.getElementsByTagName) return [];
              var l = n.getElementsByTagName(c);
              return this.htmlCollectionToArray(l);
            },
            makeNodesUnique: function (n) {
              var c = [].concat(n);
              if (
                (n.sort(function (k, B) {
                  if (k === B) return 0;
                  var M = pe(c, k),
                    Q = pe(c, B);
                  return M === Q ? 0 : M > Q ? -1 : 1;
                }),
                n.length <= 1)
              )
                return n;
              var T,
                l = 0,
                m = 0,
                g = [];
              for (T = n[l++]; T; )
                T === n[l] && (m = g.push(l)), (T = n[l++] || null);
              for (; m--; ) n.splice(g[m], 1);
              return n;
            },
            getAttributeValueFromNode: function (n, c) {
              if (this.hasNodeAttribute(n, c)) {
                if (n && n.getAttribute) return n.getAttribute(c);
                if (n && n.attributes && void 0 !== n.attributes[c]) {
                  if (n.attributes[c].value) return n.attributes[c].value;
                  if (n.attributes[c].nodeValue)
                    return n.attributes[c].nodeValue;
                  var m,
                    g = n.attributes;
                  if (g) {
                    for (m = 0; m < g.length; m++)
                      if (g[m].nodeName === c) return g[m].nodeValue;
                    return null;
                  }
                }
              }
            },
            hasNodeAttributeWithValue: function (n, c) {
              return !!this.getAttributeValueFromNode(n, c);
            },
            hasNodeAttribute: function (n, c) {
              return n && n.hasAttribute
                ? n.hasAttribute(c)
                : !(!n || !n.attributes) && void 0 !== n.attributes[c];
            },
            hasNodeCssClass: function (n, c) {
              return !!(
                n &&
                c &&
                n.className &&
                -1 !==
                  pe(
                    "string" == typeof n.className
                      ? n.className.split(" ")
                      : [],
                    c
                  )
              );
            },
            findNodesHavingAttribute: function (n, c, l) {
              if ((l || (l = []), !n || !c)) return l;
              var g,
                T,
                m = $t(n);
              if (!m || !m.length) return l;
              for (g = 0; g < m.length; g++)
                this.hasNodeAttribute((T = m[g]), c) && l.push(T),
                  (l = this.findNodesHavingAttribute(T, c, l));
              return l;
            },
            findFirstNodeHavingAttribute: function (n, c) {
              if (n && c) {
                if (this.hasNodeAttribute(n, c)) return n;
                var l = this.findNodesHavingAttribute(n, c);
                if (l && l.length) return l[0];
              }
            },
            findFirstNodeHavingAttributeWithValue: function (n, c) {
              if (n && c) {
                if (this.hasNodeAttributeWithValue(n, c)) return n;
                var m,
                  l = this.findNodesHavingAttribute(n, c);
                if (l && l.length)
                  for (m = 0; m < l.length; m++)
                    if (this.getAttributeValueFromNode(l[m], c)) return l[m];
              }
            },
            findNodesHavingCssClass: function (n, c, l) {
              if ((l || (l = []), !n || !c)) return l;
              if (n.getElementsByClassName) {
                var m = n.getElementsByClassName(c);
                return this.htmlCollectionToArray(m);
              }
              var T,
                k,
                g = $t(n);
              if (!g || !g.length) return [];
              for (T = 0; T < g.length; T++)
                this.hasNodeCssClass((k = g[T]), c) && l.push(k),
                  (l = this.findNodesHavingCssClass(k, c, l));
              return l;
            },
            findFirstNodeHavingClass: function (n, c) {
              if (n && c) {
                if (this.hasNodeCssClass(n, c)) return n;
                var l = this.findNodesHavingCssClass(n, c);
                if (l && l.length) return l[0];
              }
            },
            isLinkElement: function (n) {
              return (
                !!n &&
                -1 !== pe(["a", "area"], String(n.nodeName).toLowerCase())
              );
            },
            setAnyAttribute: function (n, c, l) {
              !n || !c || (n.setAttribute ? n.setAttribute(c, l) : (n[c] = l));
            },
          },
          Y = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "matomoTrackContent",
            LEGACY_CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "matomoContentPiece",
            LEGACY_CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "matomoContentTarget",
            LEGACY_CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "matomoContentIgnoreInteraction",
            LEGACY_CONTENT_IGNOREINTERACTION_CLASS:
              "piwikContentIgnoreInteraction",
            location: void 0,
            findContentNodes: function () {
              return O.findMultiple([
                "." + this.CONTENT_CLASS,
                "." + this.LEGACY_CONTENT_CLASS,
                "[" + this.CONTENT_ATTR + "]",
              ]);
            },
            findContentNodesWithinNode: function (n) {
              if (!n) return [];
              var c = O.findNodesHavingCssClass(n, this.CONTENT_CLASS);
              c = O.findNodesHavingCssClass(n, this.LEGACY_CONTENT_CLASS, c);
              var m,
                l = O.findNodesHavingAttribute(n, this.CONTENT_ATTR);
              if (l && l.length) for (m = 0; m < l.length; m++) c.push(l[m]);
              return (
                (O.hasNodeAttribute(n, this.CONTENT_ATTR) ||
                  O.hasNodeCssClass(n, this.CONTENT_CLASS) ||
                  O.hasNodeCssClass(n, this.LEGACY_CONTENT_CLASS)) &&
                  c.push(n),
                O.makeNodesUnique(c)
              );
            },
            findParentContentNode: function (n) {
              if (n)
                for (var c = n, l = 0; c && c !== D && c.parentNode; ) {
                  if (
                    O.hasNodeAttribute(c, this.CONTENT_ATTR) ||
                    O.hasNodeCssClass(c, this.CONTENT_CLASS) ||
                    O.hasNodeCssClass(c, this.LEGACY_CONTENT_CLASS)
                  )
                    return c;
                  if (((c = c.parentNode), l > 1e3)) break;
                  l++;
                }
            },
            findPieceNode: function (n) {
              var c;
              return (
                (c = O.findFirstNodeHavingAttribute(
                  n,
                  this.CONTENT_PIECE_ATTR
                )) ||
                  (c = O.findFirstNodeHavingClass(n, this.CONTENT_PIECE_CLASS)),
                c ||
                  (c = O.findFirstNodeHavingClass(
                    n,
                    this.LEGACY_CONTENT_PIECE_CLASS
                  )),
                c || n
              );
            },
            findTargetNodeNoDefault: function (n) {
              if (n) {
                var c = O.findFirstNodeHavingAttributeWithValue(
                  n,
                  this.CONTENT_TARGET_ATTR
                );
                if (
                  c ||
                  (c = O.findFirstNodeHavingAttribute(
                    n,
                    this.CONTENT_TARGET_ATTR
                  )) ||
                  (c = O.findFirstNodeHavingClass(
                    n,
                    this.CONTENT_TARGET_CLASS
                  )) ||
                  (c = O.findFirstNodeHavingClass(
                    n,
                    this.LEGACY_CONTENT_TARGET_CLASS
                  ))
                )
                  return c;
              }
            },
            findTargetNode: function (n) {
              return this.findTargetNodeNoDefault(n) || n;
            },
            findContentName: function (n) {
              if (n) {
                var c = O.findFirstNodeHavingAttributeWithValue(
                  n,
                  this.CONTENT_NAME_ATTR
                );
                if (c)
                  return O.getAttributeValueFromNode(c, this.CONTENT_NAME_ATTR);
                var l = this.findContentPiece(n);
                if (l) return this.removeDomainIfIsInLink(l);
                if (O.hasNodeAttributeWithValue(n, "title"))
                  return O.getAttributeValueFromNode(n, "title");
                var m = this.findPieceNode(n);
                if (O.hasNodeAttributeWithValue(m, "title"))
                  return O.getAttributeValueFromNode(m, "title");
                var g = this.findTargetNode(n);
                if (O.hasNodeAttributeWithValue(g, "title"))
                  return O.getAttributeValueFromNode(g, "title");
              }
            },
            findContentPiece: function (n) {
              if (n) {
                var c = O.findFirstNodeHavingAttributeWithValue(
                  n,
                  this.CONTENT_PIECE_ATTR
                );
                if (c)
                  return O.getAttributeValueFromNode(
                    c,
                    this.CONTENT_PIECE_ATTR
                  );
                var l = this.findPieceNode(n),
                  m = this.findMediaUrlInNode(l);
                if (m) return this.toAbsoluteUrl(m);
              }
            },
            findContentTarget: function (n) {
              if (n) {
                var l,
                  c = this.findTargetNode(n);
                if (O.hasNodeAttributeWithValue(c, this.CONTENT_TARGET_ATTR))
                  return O.getAttributeValueFromNode(
                    c,
                    this.CONTENT_TARGET_ATTR
                  );
                if (O.hasNodeAttributeWithValue(c, "href"))
                  return (
                    (l = O.getAttributeValueFromNode(c, "href")),
                    this.toAbsoluteUrl(l)
                  );
                var m = this.findPieceNode(n);
                if (O.hasNodeAttributeWithValue(m, "href"))
                  return (
                    (l = O.getAttributeValueFromNode(m, "href")),
                    this.toAbsoluteUrl(l)
                  );
              }
            },
            isSameDomain: function (n) {
              if (!n || !n.indexOf) return !1;
              if (0 === n.indexOf(this.getLocation().origin)) return !0;
              var c = n.indexOf(this.getLocation().host);
              return 8 >= c && 0 <= c;
            },
            removeDomainIfIsInLink: function (n) {
              return (
                n &&
                  n.search &&
                  -1 !== n.search(new RegExp("^https?://[^/]+")) &&
                  this.isSameDomain(n) &&
                  ((n = n.replace(new RegExp("^.*//[^/]+"), "")) || (n = "/")),
                n
              );
            },
            findMediaUrlInNode: function (n) {
              if (n) {
                var l = n.nodeName.toLowerCase();
                if (
                  -1 !== pe(["img", "embed", "video", "audio"], l) &&
                  O.findFirstNodeHavingAttributeWithValue(n, "src")
                ) {
                  var m = O.findFirstNodeHavingAttributeWithValue(n, "src");
                  return O.getAttributeValueFromNode(m, "src");
                }
                if ("object" === l && O.hasNodeAttributeWithValue(n, "data"))
                  return O.getAttributeValueFromNode(n, "data");
                if ("object" === l) {
                  var T,
                    g = O.findNodesByTagName(n, "param");
                  if (g && g.length)
                    for (T = 0; T < g.length; T++)
                      if (
                        "movie" === O.getAttributeValueFromNode(g[T], "name") &&
                        O.hasNodeAttributeWithValue(g[T], "value")
                      )
                        return O.getAttributeValueFromNode(g[T], "value");
                  var k = O.findNodesByTagName(n, "embed");
                  if (k && k.length) return this.findMediaUrlInNode(k[0]);
                }
              }
            },
            trim: function (n) {
              return kt(n);
            },
            isOrWasNodeInViewport: function (n) {
              if (!n || !n.getBoundingClientRect || 1 !== n.nodeType) return !0;
              var c = n.getBoundingClientRect(),
                l = D.documentElement || {},
                m = c.top < 0;
              m && n.offsetTop && (m = n.offsetTop + c.height > 0);
              var g = l.clientWidth;
              E.innerWidth && g > E.innerWidth && (g = E.innerWidth);
              var T = l.clientHeight;
              return (
                E.innerHeight && T > E.innerHeight && (T = E.innerHeight),
                (c.bottom > 0 || m) &&
                  c.right > 0 &&
                  c.left < g &&
                  (c.top < T || m)
              );
            },
            isNodeVisible: function (n) {
              var c = Ue(n),
                l = this.isOrWasNodeInViewport(n);
              return c && l;
            },
            buildInteractionRequestParams: function (n, c, l, m) {
              var g = "";
              return (
                n && (g += "c_i=" + V(n)),
                c && (g && (g += "&"), (g += "c_n=" + V(c))),
                l && (g && (g += "&"), (g += "c_p=" + V(l))),
                m && (g && (g += "&"), (g += "c_t=" + V(m))),
                g && (g += "&ca=1"),
                g
              );
            },
            buildImpressionRequestParams: function (n, c, l) {
              var m = "c_n=" + V(n) + "&c_p=" + V(c);
              return l && (m += "&c_t=" + V(l)), m && (m += "&ca=1"), m;
            },
            buildContentBlock: function (n) {
              if (n) {
                var c = this.findContentName(n),
                  l = this.findContentPiece(n),
                  m = this.findContentTarget(n);
                return {
                  name: (c = this.trim(c)) || "Unknown",
                  piece: (l = this.trim(l)) || "Unknown",
                  target: (m = this.trim(m)) || "",
                };
              }
            },
            collectContent: function (n) {
              if (!n || !n.length) return [];
              var l,
                m,
                c = [];
              for (l = 0; l < n.length; l++)
                N((m = this.buildContentBlock(n[l]))) && c.push(m);
              return c;
            },
            setLocation: function (n) {
              this.location = n;
            },
            getLocation: function () {
              var n = this.location || E.location;
              return (
                n.origin ||
                  (n.origin =
                    n.protocol +
                    "//" +
                    n.hostname +
                    (n.port ? ":" + n.port : "")),
                n
              );
            },
            toAbsoluteUrl: function (n) {
              return (n && String(n) === n) || "" === n
                ? "" === n
                  ? this.getLocation().href
                  : -1 !== n.search(/^\/\//)
                  ? this.getLocation().protocol + n
                  : -1 !== n.search(/:\/\//)
                  ? n
                  : 0 === n.indexOf("#") || 0 === n.indexOf("?")
                  ? this.getLocation().origin + this.getLocation().pathname + n
                  : 0 === n.search("^[a-zA-Z]{2,11}:")
                  ? n
                  : -1 !== n.search(/^\//)
                  ? this.getLocation().origin + n
                  : this.getLocation().origin +
                    this.getLocation().pathname.match(new RegExp("(.*/)"))[0] +
                    n
                : n;
            },
            isUrlToCurrentDomain: function (n) {
              var c = this.toAbsoluteUrl(n);
              if (!c) return !1;
              var l = this.getLocation().origin;
              return (
                l === c ||
                (0 === String(c).indexOf(l) &&
                  ":" !== String(c).substr(l.length, 1))
              );
            },
            setHrefAttribute: function (n, c) {
              !n || !c || O.setAnyAttribute(n, "href", c);
            },
            shouldIgnoreInteraction: function (n) {
              return !!(
                O.hasNodeAttribute(n, this.CONTENT_IGNOREINTERACTION_ATTR) ||
                O.hasNodeCssClass(n, this.CONTENT_IGNOREINTERACTION_CLASS) ||
                O.hasNodeCssClass(
                  n,
                  this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS
                )
              );
            },
          };
        function Sn(n, c) {
          if (c) return c;
          if (
            (function ae(n, c) {
              return -1 !== (n = String(n)).indexOf(c);
            })((n = Y.toAbsoluteUrl(n)), "?")
          ) {
            var l = n.indexOf("?");
            n = n.slice(0, l);
          }
          if (it(n, "matomo.php")) n = j(n, 10);
          else if (it(n, "piwik.php")) n = j(n, 9);
          else if (it(n, ".php")) {
            var m = n.lastIndexOf("/");
            n = n.slice(0, m + 1);
          }
          return it(n, "/js/") && (n = j(n, 3)), n;
        }
        function pt(n) {
          var c = "Matomo_Overlay",
            m = new RegExp(
              "index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=[^&]*)?"
            ).exec(D.referrer);
          if (m) {
            if (m[1] !== String(n)) return !1;
            var T = m[2],
              k = m[3],
              B = m[4];
            B ? 0 === B.indexOf("&segment=") && (B = B.substr(9)) : (B = ""),
              (E.name = c + "###" + T + "###" + k + "###" + B);
          }
          var M = E.name.split("###");
          return 4 === M.length && M[0] === c;
        }
        function Be(n, c) {
          var qe,
            jt,
            hn,
            qn,
            bt,
            _e,
            he,
            Lt,
            Rt,
            Mn,
            mn,
            at,
            _n,
            rn,
            _t,
            l = this,
            m = "mtm_consent",
            g = "mtm_cookie_consent",
            T = "mtm_consent_removed",
            k = (function Jt(n, c, l) {
              return (
                n || (n = ""),
                c || (c = ""),
                "translate.googleusercontent.com" === n
                  ? ("" === l && (l = c), (n = _((c = ht(c, "u")))))
                  : ("cc.bingj.com" === n ||
                      "webcache.googleusercontent.com" === n ||
                      "74.6." === n.slice(0, 5)) &&
                    (n = _((c = D.links[0].href))),
                [n, c, l]
              );
            })(
              D.domain,
              E.location.href,
              (function ni() {
                var n = "";
                try {
                  n = E.top.document.referrer;
                } catch {
                  if (E.parent)
                    try {
                      n = E.parent.document.referrer;
                    } catch {
                      n = "";
                    }
                }
                return "" === n && (n = D.referrer), n;
              })()
            ),
            B = dt(k[0]),
            M = Ie(k[1]),
            Q = Ie(k[2]),
            ue = !1,
            J = "GET",
            oe = "application/x-www-form-urlencoded; charset=UTF-8",
            ge = oe,
            K = n || "",
            ye = "",
            Ce = "",
            ke = "",
            ie = c || "",
            ot = "",
            Le = "",
            gt = "",
            mt = [
              "3mf",
              "7z",
              "aac",
              "apk",
              "arc",
              "arj",
              "asc",
              "asf",
              "asx",
              "avi",
              "azw3",
              "bin",
              "bz",
              "bz2",
              "csv",
              "deb",
              "dmg",
              "doc",
              "docx",
              "epub",
              "exe",
              "flv",
              "gif",
              "gz",
              "gzip",
              "hqx",
              "ibooks",
              "jar",
              "jpeg",
              "jpg",
              "js",
              "md5",
              "mobi",
              "mov",
              "movie",
              "mp2",
              "mp3",
              "mp4",
              "mpg",
              "mpeg",
              "msi",
              "msp",
              "obj",
              "odb",
              "odf",
              "odg",
              "ods",
              "odt",
              "ogg",
              "ogv",
              "pdf",
              "phps",
              "png",
              "ply",
              "ppt",
              "pptx",
              "qt",
              "qtm",
              "ra",
              "ram",
              "rar",
              "rpm",
              "rtf",
              "sea",
              "sha",
              "sha256",
              "sha512",
              "sig",
              "sit",
              "stl",
              "tar",
              "tbz",
              "tbz2",
              "tgz",
              "torrent",
              "txt",
              "wav",
              "wma",
              "wmv",
              "wpd",
              "xls",
              "xlsx",
              "xml",
              "xz",
              "z",
              "zip",
            ],
            ze = [B],
            Zt = [],
            Dt = [".paypal.com"],
            Nn = [],
            oi = [],
            en = [],
            me = 500,
            vt = !0,
            Pt = [
              "pk_campaign",
              "mtm_campaign",
              "piwik_campaign",
              "matomo_campaign",
              "utm_campaign",
              "utm_source",
              "utm_medium",
            ],
            At = ["pk_kwd", "mtm_kwd", "piwik_kwd", "matomo_kwd", "utm_term"],
            Vn = [
              "mtm_campaign",
              "matomo_campaign",
              "mtm_cpn",
              "pk_campaign",
              "piwik_campaign",
              "pk_cpn",
              "utm_campaign",
              "mtm_keyword",
              "matomo_kwd",
              "mtm_kwd",
              "pk_keyword",
              "piwik_kwd",
              "pk_kwd",
              "utm_term",
              "mtm_source",
              "pk_source",
              "utm_source",
              "mtm_medium",
              "pk_medium",
              "utm_medium",
              "mtm_content",
              "pk_content",
              "utm_content",
              "mtm_cid",
              "pk_cid",
              "utm_id",
              "mtm_clid",
              "mtm_group",
              "pk_group",
              "mtm_placement",
              "pk_placement",
            ],
            xn = "_pk_",
            dn = "pk_vid",
            In = 180,
            Xe = !1,
            Je = "Lax",
            De = !1,
            Wn = !0,
            si = 339552e5,
            pn = 18e5,
            ai = 15768e6,
            Fn = !0,
            Gn = !1,
            gn = !1,
            ui = !1,
            fe = !1,
            Dn = {},
            Ot = {},
            Ht = {},
            St = {},
            ve = {},
            Ve = {},
            st = {},
            Nt = [],
            Ut = !1,
            jn = !1,
            Bt = [],
            vn = !1,
            tn = !1,
            xt = !1,
            bn = !1,
            nn = !1,
            Pn =
              ((function Ke() {
                var n;
                try {
                  n = E.frameElement;
                } catch {
                  return !0;
                }
                if (N(n))
                  return !(!n || "iframe" !== String(n.nodeName).toLowerCase());
                try {
                  return E.self !== E.top;
                } catch {
                  return !0;
                }
              })(),
              null),
            Vt = null,
            Qn = Xt,
            ci = !1,
            Kn = 0,
            on = ["id", "ses", "cvar", "ref"],
            o = !1,
            r = null,
            a = [],
            t = [],
            s = Qt++,
            u = !1,
            h = !0,
            p = !1;
          try {
            gt = D.title;
          } catch {
            gt = "";
          }
          function b(e) {
            if (De && e !== T) return 0;
            var f = new RegExp("(^|;)[ ]*" + e + "=([^;]*)").exec(D.cookie);
            return f ? Tt(f[2]) : 0;
          }
          function y(e, i, f, d, v, A, R) {
            var Z;
            (De && e !== T) ||
              (f && (Z = new Date()).setTime(Z.getTime() + f),
              R || (R = "Lax"),
              (D.cookie =
                e +
                "=" +
                V(i) +
                (f ? ";expires=" + Z.toGMTString() : "") +
                ";path=" +
                (d || "/") +
                (v ? ";domain=" + v : "") +
                (A ? ";secure" : "") +
                ";SameSite=" +
                R),
              (!f || f >= 0) &&
                b(e) !== String(i) &&
                Pe(
                  "There was an error setting cookie `" +
                    e +
                    "`. Please check domain and path."
                ));
          }
          function C(e) {
            var i, f;
            if (!0 !== Wn && !o) {
              for (f = 0; f < Pt.length; f++) e = Ct(e, Pt[f]);
              for (f = 0; f < At.length; f++) e = Ct(e, At[f]);
              for (f = 0; f < Vn.length; f++) e = Ct(e, Vn[f]);
            }
            for (
              e = Ct(e, dn),
                e = Ct(e, "ignore_referrer"),
                e = Ct(e, "ignore_referer"),
                f = 0;
              f < Nn.length;
              f++
            )
              e = Ct(e, Nn[f]);
            return qn ? ((i = new RegExp("#.*")), e.replace(i, "")) : e;
          }
          function P(e, i) {
            var f;
            return (
              (e = String(e).toLowerCase()) === (i = String(i).toLowerCase()) ||
              ("." === i.slice(0, 1) &&
                (e === i.slice(1) ||
                  ((f = e.length - i.length) > 0 && e.slice(f) === i)))
            );
          }
          function I(e) {
            var i = document.createElement("a");
            return (
              0 !== e.indexOf("//") &&
                0 !== e.indexOf("http") &&
                (0 === e.indexOf("*") && (e = e.substr(1)),
                0 === e.indexOf(".") && (e = e.substr(1)),
                (e = "http://" + e)),
              (i.href = Y.toAbsoluteUrl(e)),
              i.pathname ? i.pathname : ""
            );
          }
          function x(e, i) {
            Un(i, "/") || (i = "/" + i), Un(e, "/") || (e = "/" + e);
            var f = "/" === i || "/*" === i;
            return !(
              !f &&
              e !== i &&
              ((i = String(i).toLowerCase()),
              (e = String(e).toLowerCase()),
              it(i, "*")
                ? !(f = !(i = i.slice(0, -1)) || "/" === i) &&
                  e !== i &&
                  0 !== e.indexOf(i)
                : (it(e, "/") || (e += "/"),
                  it(i, "/") || (i += "/"),
                  0 !== e.indexOf(i)))
            );
          }
          function H(e, i) {
            var f, A, R;
            for (f = 0; f < ze.length; f++)
              if (((A = dt(ze[f])), (R = I(ze[f])), P(e, A) && x(i, R)))
                return !0;
            return !1;
          }
          function U(e) {
            var i, f, d;
            for (i = 0; i < ze.length; i++)
              if (
                e === (f = dt(ze[i].toLowerCase())) ||
                ("." === f.slice(0, 1) &&
                  (e === f.slice(1) ||
                    ((d = e.length - f.length) > 0 && e.slice(d) === f)))
              )
                return !0;
            return !1;
          }
          function W(e) {
            var i, f, d, v, A;
            if (!e.length || !Dt.length) return !1;
            for (
              f = _(e),
                d = I(e),
                0 === f.indexOf("www.") && (f = f.substr(4)),
                i = 0;
              i < Dt.length;
              i++
            )
              if (
                ((v = dt(Dt[i])),
                (A = I(Dt[i])),
                0 === v.indexOf("www.") && (v = v.substr(4)),
                P(f, v) && x(d, A))
              )
                return !0;
            return !1;
          }
          function L() {
            return (
              !!(Te && Te.length > 0) ||
              ((Te = ht(E.location.href, "tracker_install_check")) &&
                Te.length > 0)
            );
          }
          function q() {
            L() && ne(E) && E.close();
          }
          function S(e, i) {
            e = e.replace("send_image=0", "send_image=1");
            var f = new Image(1, 1);
            (f.onload = function () {
              (Qe = 0),
                "function" == typeof i &&
                  i({
                    request: e,
                    trackerUrl: K,
                    success: !0,
                  });
            }),
              (f.onerror = function () {
                "function" == typeof i &&
                  i({
                    request: e,
                    trackerUrl: K,
                    success: !1,
                  });
              }),
              (f.src = K + (K.indexOf("?") < 0 ? "?" : "&") + e),
              q();
          }
          function G(e) {
            return (
              "POST" === J ||
              (e && (e.length > 2e3 || 0 === e.indexOf('{"requests"')))
            );
          }
          function te(e, i, f) {
            if (
              !(function F() {
                return (
                  "object" == typeof z &&
                  "function" == typeof z.sendBeacon &&
                  "function" == typeof Blob
                );
              })()
            )
              return !1;
            var v = {
                type: "application/x-www-form-urlencoded; charset=UTF-8",
              },
              A = !1,
              R = K;
            try {
              var Z = new Blob([e], v);
              f &&
                !G(e) &&
                ((Z = new Blob([], v)),
                (R = R + (R.indexOf("?") < 0 ? "?" : "&") + e)),
                (A = z.sendBeacon(R, Z));
            } catch {
              return !1;
            }
            return (
              A &&
                "function" == typeof i &&
                i({
                  request: e,
                  trackerUrl: K,
                  success: !0,
                  isSendBeacon: !0,
                }),
              q(),
              A
            );
          }
          function se(e, i, f) {
            (!N(f) || null === f) && (f = !0),
              (!be || !te(e, i, f)) &&
                setTimeout(function () {
                  if (!be || !te(e, i, f)) {
                    try {
                      var v = E.XMLHttpRequest
                        ? new E.XMLHttpRequest()
                        : E.ActiveXObject
                        ? new ActiveXObject("Microsoft.XMLHTTP")
                        : null;
                      v.open("POST", K, !0),
                        (v.onreadystatechange = function () {
                          4 !== this.readyState ||
                          (this.status >= 200 && this.status < 300)
                            ? 4 === this.readyState &&
                              "function" == typeof i &&
                              i({
                                request: e,
                                trackerUrl: K,
                                success: !0,
                                xhr: this,
                              })
                            : (be && te(e, i, f)) || !f
                            ? "function" == typeof i &&
                              i({
                                request: e,
                                trackerUrl: K,
                                success: !1,
                                xhr: this,
                              })
                            : S(e, i);
                        }),
                        v.setRequestHeader("Content-Type", ge),
                        (v.withCredentials = !0),
                        v.send(e);
                    } catch {
                      (be && te(e, i, f)) || !f
                        ? "function" == typeof i &&
                          i({
                            request: e,
                            trackerUrl: K,
                            success: !1,
                          })
                        : S(e, i);
                    }
                    q();
                  }
                }, 50);
          }
          function ce(e) {
            var f = new Date().getTime() + e;
            (!Ne || f > Ne) && (Ne = f);
          }
          function Ae() {
            Pn = new Date().getTime();
          }
          function yt() {
            var e = new Date().getTime();
            return !Pn || e - Pn > jt;
          }
          function $e() {
            yt() && hn();
          }
          function Oe() {
            "hidden" === D.visibilityState && yt()
              ? hn()
              : "visible" === D.visibilityState && (Pn = new Date().getTime());
          }
          function It() {
            nn ||
              !jt ||
              ((nn = !0),
              Ee(E, "focus", Ae),
              Ee(E, "blur", $e),
              Ee(E, "visibilitychange", Oe),
              Zn++,
              $.addPlugin("HeartBeat" + Zn, {
                unload: function () {
                  nn && yt() && hn();
                },
              }));
          }
          function Wt(e) {
            var f = new Date().getTime();
            if (((Vt = f), tn && f < tn)) {
              var d = tn - f;
              return setTimeout(e, d), ce(d + 50), void (tn += 50);
            }
            !1 === tn && (tn = f + 800), e();
          }
          function yn(e) {
            var i,
              f = "",
              d = "";
            for (i in Ve)
              Object.prototype.hasOwnProperty.call(Ve, i) &&
                (d += "&" + i + "=" + Ve[i]);
            if (
              (st && (f = "&uadata=" + V(E.JSON.stringify(st))),
              e instanceof Array)
            )
              for (i = 0; i < e.length; i++) e[i] += f + d;
            else e += f + d;
            return e;
          }
          function ut() {
            return (
              N(z.userAgentData) && Et(z.userAgentData.getHighEntropyValues)
            );
          }
          function we(e, i, f) {
            (function Mt() {
              b(T) ? (r = !1) : b(m) && (r = !0);
            })(),
              r
                ? h && !Ut && ut()
                  ? Nt.push([e, f])
                  : ((u = !0),
                    !Lt &&
                      e &&
                      (o && r && (e += "&consent=1"),
                      (e = yn(e)),
                      Wt(function () {
                        vt && te(e, f, !0)
                          ? ce(100)
                          : (G(e) ? se(e, f) : S(e, f), ce(i));
                      })),
                    nn || It())
                : a.push([e, f]);
          }
          function Ft(e, i) {
            if (
              (function Ze(e) {
                return !Lt && e && e.length;
              })(e)
            ) {
              if (h && !Ut && ut()) return void Nt.push([e, null]);
              if (!r) return void a.push([e, null]);
              (u = !0),
                Wt(function () {
                  for (
                    var v,
                      f = (function Fe(e, i) {
                        if (!i || i >= e.length) return [e];
                        for (var f = 0, d = e.length, v = []; f < d; f += i)
                          v.push(e.slice(f, f + i));
                        return v;
                      })(e, 50),
                      d = 0;
                    d < f.length;
                    d++
                  )
                    (v =
                      '{"requests":["?' +
                      yn(f[d]).join('","?') +
                      '"],"send_image":0}'),
                      vt && te(v, null, !1) ? ce(100) : se(v, null, !1);
                  ce(i);
                });
            }
          }
          function Se(e) {
            return xn + e + "." + ie + "." + rn;
          }
          function Ge(e, i, f) {
            y(e, "", -1296e5, i, f);
          }
          function zn() {
            if (De) return "0";
            if (!N(E.showModalDialog) && N(z.cookieEnabled))
              return z.cookieEnabled ? "1" : "0";
            var e = xn + "testcookie";
            y(e, "1", void 0, he, _e, Xe, Je);
            var i = "1" === b(e) ? "1" : "0";
            return Ge(e), i;
          }
          function Xn() {
            rn = Qn((_e || B) + (he || "/")).slice(0, 4);
          }
          function wn() {
            var e, i;
            for (e = 0; e < Nt.length; e++)
              "string" == (i = typeof Nt[e][0])
                ? we(Nt[e][0], me, Nt[e][1])
                : "object" === i && Ft(Nt[e][0], me);
            Nt = [];
          }
          function Ln() {
            if (!h) return {};
            if (
              (ut() &&
                (function Yn(e) {
                  Ut ||
                    jn ||
                    ((jn = !0),
                    (st = {
                      brands: z.userAgentData.brands,
                      platform: z.userAgentData.platform,
                    }),
                    z.userAgentData
                      .getHighEntropyValues([
                        "brands",
                        "model",
                        "platform",
                        "platformVersion",
                        "uaFullVersion",
                        "fullVersionList",
                        "formFactors",
                      ])
                      .then(
                        function (i) {
                          i.fullVersionList &&
                            (delete i.brands, delete i.uaFullVersion),
                            (st = i),
                            (Ut = !0),
                            (jn = !1),
                            e();
                        },
                        function (i) {
                          (Ut = !0), (jn = !1), e();
                        }
                      ));
                })(wn),
              N(Ve.res))
            )
              return Ve;
            var e,
              i,
              f = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                ag: "application/x-silverlight",
              };
            if (!new RegExp("MSIE").test(z.userAgent)) {
              if (z.mimeTypes && z.mimeTypes.length)
                for (e in f)
                  Object.prototype.hasOwnProperty.call(f, e) &&
                    (Ve[e] =
                      (i = z.mimeTypes[f[e]]) && i.enabledPlugin ? "1" : "0");
              try {
                !new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(z.userAgent) &&
                  "unknown" != typeof navigator.javaEnabled &&
                  N(z.javaEnabled) &&
                  z.javaEnabled() &&
                  (Ve.java = "1");
              } catch {}
              Ve.cookie =
                !N(E.showModalDialog) && N(z.cookieEnabled)
                  ? z.cookieEnabled
                    ? "1"
                    : "0"
                  : zn();
            }
            var d = parseInt(Cn.width, 10),
              v = parseInt(Cn.height, 10);
            return (Ve.res = parseInt(d, 10) + "x" + parseInt(v, 10)), Ve;
          }
          function Jn() {
            var i = b(Se("cvar"));
            return i && i.length && ne((i = E.JSON.parse(i))) ? i : {};
          }
          function li() {
            !1 === fe && (fe = Jn());
          }
          function $n() {
            var e = Ln();
            return Qn(
              (z.userAgent || "") + (z.platform || "") + E.JSON.stringify(e)
            ).slice(0, 6);
          }
          function hi() {
            return Math.floor(new Date().getTime() / 1e3);
          }
          function Ni() {
            Le ||
              (Le = (function di(e) {
                if (!bn) return "";
                var i = ht(e, dn);
                if (!i) return "";
                i = String(i);
                var f = new RegExp("^[a-zA-Z0-9]+$");
                return 32 === i.length &&
                  f.test(i) &&
                  (function Rn(e) {
                    e = String(e);
                    var i = $n(),
                      f = i.length,
                      d = e.substr(-1 * f, f),
                      v = parseInt(e.substr(0, e.length - f), 10);
                    if (v && d && d === i) {
                      var A = hi();
                      if (In <= 0 || (A >= v && A <= v + In)) return !0;
                    }
                    return !1;
                  })(i.substr(16, 32))
                  ? i.substr(0, 16)
                  : "";
              })(M));
            var v,
              i = Math.round(new Date().getTime() / 1e3),
              d = b(Se("id"));
            return d
              ? ((v = d.split(".")).unshift("0"), Le.length && (v[1] = Le), v)
              : (v = [
                  "1",
                  Le.length
                    ? Le
                    : "0" === zn()
                    ? ""
                    : (function wi() {
                        var e = Ln();
                        return Qn(
                          (z.userAgent || "") +
                            (z.platform || "") +
                            E.JSON.stringify(e) +
                            new Date().getTime() +
                            Math.random()
                        ).slice(0, 16);
                      })(),
                  i,
                ]);
          }
          function Ei() {
            var e = Ni();
            return {
              newVisitor: e[0],
              uuid: e[1],
              createTs: e[2],
            };
          }
          function pi(e) {
            if (ie) {
              Math.round(new Date().getTime() / 1e3), N(e) || (e = Ei());
              var d = e.uuid + "." + e.createTs + ".";
              y(
                Se("id"),
                d,
                (function Yi() {
                  var i = new Date().getTime(),
                    f = Ei().createTs;
                  return 1e3 * parseInt(f, 10) + si - i;
                })(),
                he,
                _e,
                Xe,
                Je
              );
            }
          }
          function Hn() {
            var e = b(Se("ref"));
            if (e.length)
              try {
                if (ne((e = E.JSON.parse(e)))) return e;
              } catch {}
            return ["", "", 0, ""];
          }
          function gi() {
            var i,
              f,
              e = De;
            for (De = !1, i = 0; i < on.length; i++)
              (f = Se(on[i])) !== T && f !== m && 0 !== b(f) && Ge(f, he, _e);
            De = e;
          }
          function xi(e) {
            if (e && ne(e)) {
              var f,
                i = [];
              for (f in e)
                Object.prototype.hasOwnProperty.call(e, f) && i.push(f);
              var d = {};
              i.sort();
              var A,
                v = i.length;
              for (A = 0; A < v; A++) d[i[A]] = e[i[A]];
              return d;
            }
          }
          function Ii(e) {
            if ("" !== ke) return (gn = !0), e + ke;
            if (!wt) return e;
            var i =
              "object" == typeof wt.timing && wt.timing ? wt.timing : void 0;
            if (
              (i ||
                (i =
                  "function" == typeof wt.getEntriesByType &&
                  wt.getEntriesByType("navigation")
                    ? wt.getEntriesByType("navigation")[0]
                    : void 0),
              !i)
            )
              return e;
            var f = "";
            if (i.connectEnd && i.fetchStart) {
              if (i.connectEnd < i.fetchStart) return e;
              f += "&pf_net=" + Math.round(i.connectEnd - i.fetchStart);
            }
            if (i.responseStart && i.requestStart) {
              if (i.responseStart < i.requestStart) return e;
              f += "&pf_srv=" + Math.round(i.responseStart - i.requestStart);
            }
            if (i.responseStart && i.responseEnd) {
              if (i.responseEnd < i.responseStart) return e;
              f += "&pf_tfr=" + Math.round(i.responseEnd - i.responseStart);
            }
            if (N(i.domLoading)) {
              if (i.domInteractive && i.domLoading) {
                if (i.domInteractive < i.domLoading) return e;
                f += "&pf_dm1=" + Math.round(i.domInteractive - i.domLoading);
              }
            } else if (i.domInteractive && i.responseEnd) {
              if (i.domInteractive < i.responseEnd) return e;
              f += "&pf_dm1=" + Math.round(i.domInteractive - i.responseEnd);
            }
            if (i.domComplete && i.domInteractive) {
              if (i.domComplete < i.domInteractive) return e;
              f += "&pf_dm2=" + Math.round(i.domComplete - i.domInteractive);
            }
            if (i.loadEventEnd && i.loadEventStart) {
              if (i.loadEventEnd < i.loadEventStart) return e;
              f += "&pf_onl=" + Math.round(i.loadEventEnd - i.loadEventStart);
            }
            return e + f;
          }
          function Di(e) {
            return (
              "1" === ht(e, "ignore_referrer") ||
              "1" === ht(e, "ignore_referer")
            );
          }
          function ji() {
            var e,
              d,
              v,
              R,
              Z,
              lt,
              Gt,
              f = Math.round(new Date().getTime() / 1e3),
              ft = Se("ses"),
              le = Se("ref"),
              sn = b(ft),
              ct = Hn(),
              Tn = qe || M,
              En = {};
            if (
              ((lt = ct[0]),
              (Gt = ct[1]),
              (d = ct[2]),
              (v = ct[3]),
              !Di(Tn) && !sn)
            ) {
              if ((!Mn || !lt.length) && (Wn || o)) {
                for (e in Pt)
                  if (
                    Object.prototype.hasOwnProperty.call(Pt, e) &&
                    (lt = ht(Tn, Pt[e])).length
                  )
                    break;
                for (e in At)
                  if (
                    Object.prototype.hasOwnProperty.call(At, e) &&
                    (Gt = ht(Tn, At[e])).length
                  )
                    break;
              }
              (R = _(Q)),
                (Z = v.length ? _(v) : ""),
                R.length &&
                  !U(R) &&
                  !W(Q) &&
                  (!Mn || !Z.length || U(Z) || W(v)) &&
                  (v = Q),
                (v.length || lt.length) &&
                  ((ct = [lt, Gt, (d = f), C(v.slice(0, 1024))]),
                  y(le, E.JSON.stringify(ct), ai, he, _e, Xe, Je));
            }
            return (
              lt.length && (En._rcn = V(lt)),
              Gt.length && (En._rck = V(Gt)),
              (En._refts = d),
              String(v).length && (En._ref = V(C(v.slice(0, 1024)))),
              En
            );
          }
          function et(e, i, f) {
            var d,
              v = new Date(),
              A = fe,
              R = Se("cvar"),
              Z = qe || M,
              ft = Di(Z);
            if ((De && gi(), Lt)) return "";
            var le = new RegExp("^file://", "i");
            if (!p && ("file:" === E.location.protocol || le.test(Z)))
              return "";
            Ln();
            var sn = Ei(),
              ct = D.characterSet || D.charset;
            (!ct || "utf-8" === ct.toLowerCase()) && (ct = null),
              (e +=
                "&idsite=" +
                ie +
                "&rec=1&r=" +
                String(Math.random()).slice(2, 8) +
                "&h=" +
                v.getHours() +
                "&m=" +
                v.getMinutes() +
                "&s=" +
                v.getSeconds() +
                "&url=" +
                V(C(Z)) +
                (!Q.length || W(Q) || ft ? "" : "&urlref=" + V(C(Q))) +
                (Me(ot) ? "&uid=" + V(ot) : "") +
                "&_id=" +
                sn.uuid +
                "&_idn=" +
                sn.newVisitor +
                (ct ? "&cs=" + V(ct) : "") +
                "&send_image=0");
            var Tn = ji();
            for (d in Tn)
              Object.prototype.hasOwnProperty.call(Tn, d) &&
                (e += "&" + d + "=" + Tn[d]);
            var lt = [];
            if (i)
              for (d in i)
                if (
                  Object.prototype.hasOwnProperty.call(i, d) &&
                  /^dimension\d+$/.test(d)
                ) {
                  var Gt = d.replace("dimension", "");
                  lt.push(parseInt(Gt, 10)),
                    lt.push(String(Gt)),
                    (e += "&" + d + "=" + V(i[d])),
                    delete i[d];
                }
            for (d in (i &&
              (function bi(n) {
                if (!n) return !0;
                var c;
                for (c in n)
                  if (Object.prototype.hasOwnProperty.call(n, c)) return !1;
                return !0;
              })(i) &&
              (i = null),
            St))
              Object.prototype.hasOwnProperty.call(St, d) &&
                (e += "&" + d + "=" + V(St[d]));
            for (d in Ht)
              Object.prototype.hasOwnProperty.call(Ht, d) &&
                -1 === pe(lt, d) &&
                (e += "&dimension" + d + "=" + V(Ht[d]));
            function Oi(Tr, Er) {
              var Ki = E.JSON.stringify(Tr);
              return Ki.length > 2 ? "&" + Er + "=" + V(Ki) : "";
            }
            i
              ? (e += "&data=" + V(E.JSON.stringify(i)))
              : bt && (e += "&data=" + V(E.JSON.stringify(bt)));
            var yr = xi(Dn),
              wr = xi(Ot);
            if (((e += Oi(yr, "cvar")), (e += Oi(wr, "e_cvar")), fe)) {
              for (d in ((e += Oi(fe, "_cvar")), A))
                Object.prototype.hasOwnProperty.call(A, d) &&
                  ("" === fe[d][0] || "" === fe[d][1]) &&
                  delete fe[d];
              ui && y(R, E.JSON.stringify(fe), pn, he, _e, Xe, Je);
            }
            return (
              Fn && Gn && !gn && ((e = Ii(e)), (gn = !0)),
              _t && (e += "&pv_id=" + _t),
              pi(sn),
              (function Ji() {
                y(Se("ses"), "1", pn, he, _e, Xe, Je);
              })(),
              (e += An(f, {
                tracker: l,
                request: e,
              })),
              Ce.length && (e += "&" + Ce),
              L() && (e += "&tracker_install_check=" + Te),
              Et(mn) && (e = mn(e)),
              e
            );
          }
          function Pi(e, i, f, d, v, A) {
            var le,
              R = "idgoal=0",
              ft = [],
              sn = String(e).length;
            if (
              (sn && (R += "&ec_id=" + V(e)),
              (R += "&revenue=" + i),
              String(f).length && (R += "&ec_st=" + f),
              String(d).length && (R += "&ec_tx=" + d),
              String(v).length && (R += "&ec_sh=" + v),
              String(A).length && (R += "&ec_dt=" + A),
              ve)
            ) {
              for (le in ve)
                Object.prototype.hasOwnProperty.call(ve, le) &&
                  (N(ve[le][1]) || (ve[le][1] = ""),
                  N(ve[le][2]) || (ve[le][2] = ""),
                  (!N(ve[le][3]) || 0 === String(ve[le][3]).length) &&
                    (ve[le][3] = 0),
                  (!N(ve[le][4]) || 0 === String(ve[le][4]).length) &&
                    (ve[le][4] = 1),
                  ft.push(ve[le]));
              R += "&ec_items=" + V(E.JSON.stringify(ft));
            }
            we((R = et(R, bt, "ecommerce")), me), sn && (ve = {});
          }
          function Ci(e, i) {
            var f,
              d = "(^| )(piwik[_-]" + i + "|matomo[_-]" + i;
            if (e) for (f = 0; f < e.length; f++) d += "|" + e[f];
            return (d += ")( |$)"), new RegExp(d);
          }
          function Li(e) {
            return K && e && 0 === String(e).indexOf(K);
          }
          function Ri(e) {
            var i;
            for (i = e.parentNode; null !== i && N(i) && !O.isLinkElement(e); )
              i = (e = i).parentNode;
            return e;
          }
          function Hi(e) {
            if (((e = Ri(e)), O.hasNodeAttribute(e, "href") && N(e.href))) {
              O.getAttributeValueFromNode(e, "href");
              var f = e.pathname || I(e.href),
                d = e.hostname || _(e.href),
                v = d.toLowerCase(),
                A = e.href.replace(d, v);
              if (
                !new RegExp(
                  "^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):",
                  "i"
                ).test(A)
              ) {
                var Z = (function nr(e, i, f, d) {
                  if (Li(i)) return 0;
                  var v = Ci(oi, "download"),
                    A = Ci(en, "link"),
                    R = new RegExp("\\.(" + mt.join("|") + ")([?&#]|$)", "i");
                  return A.test(e)
                    ? "link"
                    : d || v.test(e) || R.test(i)
                    ? "download"
                    : f
                    ? 0
                    : "link";
                })(e.className, A, H(v, f), O.hasNodeAttribute(e, "download"));
                if (Z)
                  return {
                    type: Z,
                    href: A,
                  };
              }
            }
          }
          function Ui(e, i, f, d) {
            var v = Y.buildInteractionRequestParams(e, i, f, d);
            if (v) return et(v, null, "contentInteraction");
          }
          function Bi(e, i) {
            if (!e || !i) return !1;
            var f = Y.findTargetNode(e);
            return !(
              Y.shouldIgnoreInteraction(f) ||
              ((f = Y.findTargetNodeNoDefault(e)),
              f &&
                !(function He(n, c) {
                  return (
                    !(!n || !c) &&
                    (n.contains
                      ? n.contains(c)
                      : n === c ||
                        (!!n.compareDocumentPosition &&
                          !!(16 & n.compareDocumentPosition(c))))
                  );
                })(f, i))
            );
          }
          function rr(e) {
            if (!Bt || !Bt.length) return !1;
            var i, f;
            for (i = 0; i < Bt.length; i++)
              if (
                (f = Bt[i]) &&
                f.name === e.name &&
                f.piece === e.piece &&
                f.target === e.target
              )
                return !0;
            return !1;
          }
          function or(e) {
            return function (i) {
              if (e) {
                var d,
                  f = Y.findParentContentNode(e);
                if (
                  (i && (d = i.target || i.srcElement), d || (d = e), Bi(f, d))
                ) {
                  if (!f) return !1;
                  var v = Y.findTargetNode(f);
                  if (!v || Y.shouldIgnoreInteraction(v)) return !1;
                  var A = Hi(v);
                  return xt && A && A.type
                    ? A.type
                    : l.trackContentInteractionNode(d, "click");
                }
              }
            };
          }
          function ki(e) {
            return (function ar(e, i) {
              if (!e || !e.length) return [];
              var f, d;
              for (f = 0; f < e.length; f++)
                rr(e[f]) ? (e.splice(f, 1), f--) : Bt.push(e[f]);
              if (!e || !e.length) return [];
              !(function sr(e) {
                var i, f;
                if (e && e.length)
                  for (i = 0; i < e.length; i++)
                    (f = Y.findTargetNode(e[i])) &&
                      !f.contentInteractionTrackingSetupDone &&
                      ((f.contentInteractionTrackingSetupDone = !0),
                      Ee(f, "click", or(f)));
              })(i);
              var v = [];
              for (f = 0; f < e.length; f++)
                (d = et(
                  Y.buildImpressionRequestParams(
                    e[f].name,
                    e[f].piece,
                    e[f].target
                  ),
                  void 0,
                  "contentImpressions"
                )) && v.push(d);
              return v;
            })(Y.collectContent(e), e);
          }
          function qi(e) {
            if (!e || !e.length) return [];
            var i;
            for (i = 0; i < e.length; i++)
              Y.isNodeVisible(e[i]) || (e.splice(i, 1), i--);
            return e && e.length ? ki(e) : [];
          }
          function Vi(e, i, f, d, v, A) {
            if (!Me(e) || !Me(i))
              return (
                Pe(
                  "Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"
                ),
                !1
              );
            var R = et(
              (function cr(e, i, f, d) {
                return (
                  "e_c=" +
                  V(e) +
                  "&e_a=" +
                  V(i) +
                  (N(f) ? "&e_n=" + V(f) : "") +
                  (N(d) ? "&e_v=" + V(d) : "") +
                  "&ca=1"
                );
              })(e, i, f, d),
              v,
              "event"
            );
            we(R, me, A);
          }
          function Wi(e, i, f, d, v) {
            var A = i + "=" + V(C(e)),
              R = (function ir(e, i, f) {
                if (e) {
                  var d = Y.findParentContentNode(e);
                  if (d && Bi(d, e)) {
                    var v = Y.buildContentBlock(d);
                    if (v)
                      return (
                        !v.target && f && (v.target = f),
                        Y.buildInteractionRequestParams(
                          i,
                          v.name,
                          v.piece,
                          v.target
                        )
                      );
                  }
                }
              })(v, "click", e);
            R && (A += "&" + R), we(et(A, f, "link"), me, d);
          }
          function Mi(e, i) {
            return "" !== e ? e + i.charAt(0).toUpperCase() + i.slice(1) : i;
          }
          function We(e) {
            var i,
              f,
              v,
              d = ["", "webkit", "ms", "moz"];
            if (!Rt)
              for (f = 0; f < d.length; f++)
                if (
                  ((v = d[f]),
                  Object.prototype.hasOwnProperty.call(D, Mi(v, "hidden")))
                ) {
                  "prerender" === D[Mi(v, "visibilityState")] && (i = !0);
                  break;
                }
            i
              ? Ee(D, v + "visibilitychange", function A() {
                  D.removeEventListener(v + "visibilitychange", A, !1), e();
                })
              : e();
          }
          function Fi() {
            var e = l.getVisitorId(),
              i = (function Ti() {
                var e = hi(),
                  i = $n();
                return String(e) + i;
              })();
            return e + i;
          }
          function Ai(e) {
            var i = Hi(e);
            if (i && i.type)
              return (
                (i.href = Ie(i.href)), void Wi(i.href, i.type, void 0, null, e)
              );
            bn &&
              (function pr(e) {
                var i = O.getAttributeValueFromNode(e, "href");
                if (!i) return !1;
                if (
                  0 !== (i = String(i)).indexOf("//") &&
                  0 !== i.indexOf("http://") &&
                  0 !== i.indexOf("https://")
                )
                  return !1;
                var d = e.pathname || I(e.href),
                  v = (e.hostname || _(e.href)).toLowerCase();
                return !!H(v, d) && !P(B, dt(v));
              })((e = Ri(e))) &&
              (function dr(e) {
                if (e && O.hasNodeAttribute(e, "href")) {
                  var i = O.getAttributeValueFromNode(e, "href");
                  if (i && !Li(i) && l.getVisitorId()) {
                    i = Ct(i, dn);
                    var f = Fi();
                    (i = (function zt(n, c, l) {
                      l || (l = "");
                      var m = (n = String(n)).indexOf("#"),
                        g = n.length;
                      -1 === m && (m = g);
                      var T = n.substr(0, m),
                        k = n.substr(m, g - m);
                      return (
                        -1 === T.indexOf("?")
                          ? (T += "?")
                          : it(T, "?") || (T += "&"),
                        T + V(c) + "=" + V(l) + k
                      );
                    })(i, dn, f)),
                      O.setAnyAttribute(e, "href", i);
                  }
                }
              })(e);
          }
          function Gi(e) {
            return "A" === e || "AREA" === e;
          }
          function mi(e) {
            return function (f) {
              var d = (function i(f) {
                for (
                  var d = (function br(e) {
                      return e.target || e.srcElement;
                    })(f),
                    v = d.nodeName,
                    A = Ci(Zt, "ignore");
                  !Gi(v) && d && d.parentNode;

                )
                  v = (d = d.parentNode).nodeName;
                if (d && Gi(v) && !A.test(d.className)) return d;
              })((f = f || E.event));
              if (d) {
                var v = (function vr(e) {
                  switch (
                    (function mr(e) {
                      var i = e.which;
                      return (
                        !i &&
                          void 0 !== e.button &&
                          ((function gr() {
                            return D.all && !D.addEventListener;
                          })()
                            ? 1 & e.button
                              ? (i = 1)
                              : 2 & e.button
                              ? (i = 3)
                              : 4 & e.button && (i = 2)
                            : 0 === e.button || "0" === e.button
                            ? (i = 1)
                            : 1 & e.button
                            ? (i = 2)
                            : 2 & e.button && (i = 3)),
                        i
                      );
                    })(e)
                  ) {
                    case 1:
                      return "left";
                    case 2:
                      return "middle";
                    case 3:
                      return "right";
                  }
                })(f);
                if ("click" === f.type) {
                  var A = !1;
                  e && "middle" === v && (A = !0), d && !A && Ai(d);
                } else
                  "mousedown" === f.type
                    ? "middle" === v && d
                      ? ((at = v), (_n = d))
                      : (at = _n = null)
                    : "mouseup" === f.type
                    ? (v === at && d === _n && Ai(d), (at = _n = null))
                    : "contextmenu" === f.type && Ai(d);
              }
            };
          }
          function Qi(e, i, f) {
            void 0 === i && (i = !0),
              Ee(e, "click", mi(i), f),
              i &&
                (Ee(e, "mouseup", mi(i), f),
                Ee(e, "mousedown", mi(i), f),
                Ee(e, "contextmenu", mi(i), f));
          }
          (r = !b(T)),
            (hn = function () {
              var i = new Date();
              return (
                (i = i.getTime()), !!(Vt && Vt + jt <= i) && (l.ping(), !0)
              );
            });
          var je = {
            enabled: !0,
            requests: [],
            timeout: null,
            interval: 2500,
            sendRequests: function () {
              var e = this.requests;
              (this.requests = []), 1 === e.length ? we(e[0], me) : Ft(e, me);
            },
            canQueue: function () {
              return !be && this.enabled;
            },
            pushMultiple: function (e) {
              var i;
              if (this.canQueue())
                for (i = 0; i < e.length; i++) this.push(e[i]);
              else Ft(e, me);
            },
            push: function (e) {
              if (e) {
                if (!this.canQueue()) return void we(e, me);
                je.requests.push(e),
                  this.timeout &&
                    (clearTimeout(this.timeout), (this.timeout = null)),
                  (this.timeout = setTimeout(function () {
                    (je.timeout = null), je.sendRequests();
                  }, je.interval));
                var i = "RequestQueue" + s;
                Object.prototype.hasOwnProperty.call(re, i) ||
                  (re[i] = {
                    unload: function () {
                      je.timeout && clearTimeout(je.timeout), je.sendRequests();
                    },
                  });
              }
            },
          };
          Xn(),
            (this.hasConsent = function () {
              return r;
            }),
            (this.getVisitorInfo = function () {
              return b(Se("id")) || pi(), Ni();
            }),
            (this.getVisitorId = function () {
              return this.getVisitorInfo()[1];
            }),
            (this.getAttributionInfo = function () {
              return Hn();
            }),
            (this.getAttributionCampaignName = function () {
              return Hn()[0];
            }),
            (this.getAttributionCampaignKeyword = function () {
              return Hn()[1];
            }),
            (this.getAttributionReferrerTimestamp = function () {
              return Hn()[2];
            }),
            (this.getAttributionReferrerUrl = function () {
              return Hn()[3];
            }),
            (this.setTrackerUrl = function (e) {
              K = e;
            }),
            (this.getTrackerUrl = function () {
              return K;
            }),
            (this.getMatomoUrl = function () {
              return Sn(this.getTrackerUrl(), ye);
            }),
            (this.getPiwikUrl = function () {
              return this.getMatomoUrl();
            }),
            (this.addTracker = function (e, i) {
              (!N(e) || null === e) && (e = this.getTrackerUrl());
              var f = new Be(e, i);
              return xe.push(f), $.trigger("TrackerAdded", [this]), f;
            }),
            (this.getSiteId = function () {
              return ie;
            }),
            (this.setSiteId = function (e) {
              !(function Xi(e) {
                ie = e;
              })(e);
            }),
            (this.resetUserId = function () {
              ot = "";
            }),
            (this.setUserId = function (e) {
              Me(e) && (ot = e);
            }),
            (this.setVisitorId = function (e) {
              de(e) && /[0-9A-Fa-f]{16}/g.test(e)
                ? (Le = e)
                : Pe("Invalid visitorId set" + e);
            }),
            (this.getUserId = function () {
              return ot;
            }),
            (this.setCustomData = function (e, i) {
              ne(e) ? (bt = e) : (bt || (bt = {}), (bt[e] = i));
            }),
            (this.getCustomData = function () {
              return bt;
            }),
            (this.setCustomRequestProcessing = function (e) {
              mn = e;
            }),
            (this.appendToTrackingUrl = function (e) {
              Ce = e;
            }),
            (this.getRequest = function (e) {
              return et(e);
            }),
            (this.addPlugin = function (e, i) {
              re[e] = i;
            }),
            (this.setCustomDimension = function (e, i) {
              (e = parseInt(e, 10)) > 0 &&
                (N(i) || (i = ""), de(i) || (i = String(i)), (Ht[e] = i));
            }),
            (this.getCustomDimension = function (e) {
              if (
                (e = parseInt(e, 10)) > 0 &&
                Object.prototype.hasOwnProperty.call(Ht, e)
              )
                return Ht[e];
            }),
            (this.deleteCustomDimension = function (e) {
              (e = parseInt(e, 10)) > 0 && delete Ht[e];
            }),
            (this.setCustomVariable = function (e, i, f, d) {
              var v;
              N(d) || (d = "visit"),
                N(i) &&
                  (N(f) || (f = ""),
                  e > 0 &&
                    ((i = de(i) ? i : String(i)),
                    (f = de(f) ? f : String(f)),
                    (v = [i.slice(0, 200), f.slice(0, 200)]),
                    "visit" === d || 2 === d
                      ? (li(), (fe[e] = v))
                      : "page" === d || 3 === d
                      ? (Dn[e] = v)
                      : "event" === d && (Ot[e] = v)));
            }),
            (this.getCustomVariable = function (e, i) {
              var f;
              return (
                N(i) || (i = "visit"),
                "page" === i || 3 === i
                  ? (f = Dn[e])
                  : "event" === i
                  ? (f = Ot[e])
                  : ("visit" === i || 2 === i) && (li(), (f = fe[e])),
                !(!N(f) || (f && "" === f[0])) && f
              );
            }),
            (this.deleteCustomVariable = function (e, i) {
              this.getCustomVariable(e, i) &&
                this.setCustomVariable(e, "", "", i);
            }),
            (this.deleteCustomVariables = function (e) {
              "page" === e || 3 === e
                ? (Dn = {})
                : "event" === e
                ? (Ot = {})
                : ("visit" === e || 2 === e) && (fe = {});
            }),
            (this.storeCustomVariablesInCookie = function () {
              ui = !0;
            }),
            (this.setLinkTrackingTimer = function (e) {
              me = e;
            }),
            (this.getLinkTrackingTimer = function () {
              return me;
            }),
            (this.setDownloadExtensions = function (e) {
              de(e) && (e = e.split("|")), (mt = e);
            }),
            (this.addDownloadExtensions = function (e) {
              var i;
              for (de(e) && (e = e.split("|")), i = 0; i < e.length; i++)
                mt.push(e[i]);
            }),
            (this.removeDownloadExtensions = function (e) {
              var i,
                f = [];
              for (de(e) && (e = e.split("|")), i = 0; i < mt.length; i++)
                -1 === pe(e, mt[i]) && f.push(mt[i]);
              mt = f;
            }),
            (this.setDomains = function (e) {
              ze = de(e) ? [e] : e;
              for (var d, i = !1, f = 0; f < ze.length; f++) {
                if (((d = String(ze[f])), P(B, dt(d)))) {
                  i = !0;
                  break;
                }
                var v = I(d);
                if (v && "/" !== v && "/*" !== v) {
                  i = !0;
                  break;
                }
              }
              i || ze.push(B);
            }),
            (this.setExcludedReferrers = function (e) {
              Dt = de(e) ? [e] : e;
            }),
            (this.enableCrossDomainLinking = function () {
              bn = !0;
            }),
            (this.disableCrossDomainLinking = function () {
              bn = !1;
            }),
            (this.isCrossDomainLinkingEnabled = function () {
              return bn;
            }),
            (this.setCrossDomainLinkingTimeout = function (e) {
              In = e;
            }),
            (this.getCrossDomainLinkingUrlParameter = function () {
              return V(dn) + "=" + V(Fi());
            }),
            (this.setIgnoreClasses = function (e) {
              Zt = de(e) ? [e] : e;
            }),
            (this.setRequestMethod = function (e) {
              "GET" === (J = e ? String(e).toUpperCase() : "GET") &&
                this.disableAlwaysUseSendBeacon();
            }),
            (this.setRequestContentType = function (e) {
              ge = e || oe;
            }),
            (this.setGenerationTimeMs = function (e) {
              Pe(
                "setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. The replacement is setPagePerformanceTiming."
              );
            }),
            (this.setPagePerformanceTiming = function (e, i, f, d, v, A) {
              var R = {
                pf_net: e,
                pf_srv: i,
                pf_tfr: f,
                pf_dm1: d,
                pf_dm2: v,
                pf_onl: A,
              };
              try {
                if (
                  ((R = (function fn(n, c) {
                    var m,
                      l = {};
                    for (m in n)
                      n.hasOwnProperty(m) && c(n[m]) && (l[m] = n[m]);
                    return l;
                  })(R, N)),
                  (R = (function Yt(n) {
                    var l,
                      c = {};
                    for (l in n)
                      if (n.hasOwnProperty(l)) {
                        if (!nt(n[l]))
                          throw new Error(
                            'Parameter "' +
                              l +
                              '" provided value "' +
                              n[l] +
                              '" is not valid. Please provide a numeric value.'
                          );
                        c[l] = Math.round(n[l]);
                      }
                    return c;
                  })(R)),
                  (ke = (function cn(n) {
                    var l,
                      c = "";
                    for (l in n)
                      n.hasOwnProperty(l) && (c += "&" + V(l) + "=" + V(n[l]));
                    return c;
                  })(R)),
                  "" === ke)
                )
                  return void Pe(
                    "setPagePerformanceTiming() called without parameters. This function needs to be called with at least one performance parameter."
                  );
                (gn = !1), (Gn = !0);
              } catch (Z) {
                Pe("setPagePerformanceTiming: " + Z.toString());
              }
            }),
            (this.setReferrerUrl = function (e) {
              Q = e;
            }),
            (this.setCustomUrl = function (e) {
              qe = (function w(e, i) {
                var d;
                return On(i)
                  ? i
                  : "/" === i.slice(0, 1)
                  ? On(e) + "://" + _(e) + i
                  : ((d = (e = C(e)).indexOf("?")) >= 0 && (e = e.slice(0, d)),
                    (d = e.lastIndexOf("/")) !== e.length - 1 &&
                      (e = e.slice(0, d + 1)),
                    e + i);
              })(M, e);
            }),
            (this.getCurrentUrl = function () {
              return qe || M;
            }),
            (this.setDocumentTitle = function (e) {
              gt = e;
            }),
            (this.setPageViewId = function (e) {
              (_t = e), (ci = !0);
            }),
            (this.getPageViewId = function () {
              return _t;
            }),
            (this.setAPIUrl = function (e) {
              ye = e;
            }),
            (this.setDownloadClasses = function (e) {
              oi = de(e) ? [e] : e;
            }),
            (this.setLinkClasses = function (e) {
              en = de(e) ? [e] : e;
            }),
            (this.setCampaignNameKey = function (e) {
              Pt = de(e) ? [e] : e;
            }),
            (this.setCampaignKeywordKey = function (e) {
              At = de(e) ? [e] : e;
            }),
            (this.discardHashTag = function (e) {
              qn = e;
            }),
            (this.setCookieNamePrefix = function (e) {
              (xn = e), fe && (fe = Jn());
            }),
            (this.setCookieDomain = function (e) {
              var i = dt(e);
              De ||
              (function zi(e) {
                var i = xn + "testcookie_domain",
                  f = "testvalue";
                return (
                  y(i, f, 1e4, null, e, Xe, Je),
                  b(i) === f && (Ge(i, null, e), !0)
                );
              })(i)
                ? ((_e = i), Xn())
                : Pe("Can't write cookie on domain " + e);
            }),
            (this.setExcludedQueryParams = function (e) {
              Nn = de(e) ? [e] : e;
            }),
            (this.getCookieDomain = function () {
              return _e;
            }),
            (this.hasCookies = function () {
              return "1" === zn();
            }),
            (this.setSessionCookie = function (e, i, f) {
              if (!e) throw new Error("Missing cookie name");
              N(f) || (f = pn), on.push(e), y(Se(e), i, f, he, _e, Xe, Je);
            }),
            (this.getCookie = function (e) {
              var i = b(Se(e));
              return 0 === i ? null : i;
            }),
            (this.setCookiePath = function (e) {
              (he = e), Xn();
            }),
            (this.getCookiePath = function () {
              return he;
            }),
            (this.setVisitorCookieTimeout = function (e) {
              si = 1e3 * e;
            }),
            (this.setSessionCookieTimeout = function (e) {
              pn = 1e3 * e;
            }),
            (this.getSessionCookieTimeout = function () {
              return pn;
            }),
            (this.setReferralCookieTimeout = function (e) {
              ai = 1e3 * e;
            }),
            (this.setConversionAttributionFirstReferrer = function (e) {
              Mn = e;
            }),
            (this.setSecureCookie = function (e) {
              e && "https:" !== location.protocol
                ? Pe(
                    "Error in setSecureCookie: You cannot use `Secure` on http."
                  )
                : (Xe = e);
            }),
            (this.setCookieSameSite = function (e) {
              "None" ===
                (e =
                  (e = String(e)).charAt(0).toUpperCase() +
                  e.toLowerCase().slice(1)) ||
              "Lax" === e ||
              "Strict" === e
                ? ("None" === e &&
                    ("https:" === location.protocol
                      ? this.setSecureCookie(!0)
                      : (Pe(
                          "sameSite=None cannot be used on http, reverted to sameSite=Lax."
                        ),
                        (e = "Lax"))),
                  (Je = e))
                : Pe(
                    "Ignored value for sameSite. Please use either Lax, None, or Strict."
                  );
            }),
            (this.disableCookies = function () {
              (De = !0), ie && gi();
            }),
            (this.areCookiesEnabled = function () {
              return !De;
            }),
            (this.setCookieConsentGiven = function () {
              De &&
                !Lt &&
                ((De = !1),
                h || this.enableBrowserFeatureDetection(),
                ie && u) &&
                (pi(), we(et("ping=1", null, "ping"), me));
            }),
            (this.requireCookieConsent = function () {
              return (
                !this.getRememberedCookieConsent() &&
                (this.disableCookies(), !0)
              );
            }),
            (this.getRememberedCookieConsent = function () {
              return b(g);
            }),
            (this.forgetCookieConsentGiven = function () {
              Ge(g, he, _e), this.disableCookies();
            }),
            (this.rememberCookieConsentGiven = function (e) {
              (e = e ? 60 * e * 60 * 1e3 : 94608e7),
                this.setCookieConsentGiven();
              var i = new Date().getTime();
              y(g, i, e, he, _e, Xe, Je);
            }),
            (this.deleteCookies = function () {
              gi();
            }),
            (this.setDoNotTrack = function (e) {
              var i = z.doNotTrack || z.msDoNotTrack;
              (Lt = e && ("yes" === i || "1" === i)) && this.disableCookies();
            }),
            (this.disableCampaignParameters = function () {
              Wn = !1;
            }),
            (this.alwaysUseSendBeacon = function () {
              vt = !0;
            }),
            (this.disableAlwaysUseSendBeacon = function () {
              vt = !1;
            }),
            (this.addListener = function (e, i) {
              Qi(e, i, !1);
            }),
            (this.enableLinkTracking = function (e) {
              xt ||
                ((xt = !0),
                un(function () {
                  Qi(D.body, e, !0);
                }));
            }),
            (this.enableJSErrorTracking = function () {
              if (!ue) {
                ue = !0;
                var e = E.onerror;
                E.onerror = function (i, f, d, v, A) {
                  return (
                    We(function () {
                      var R = "JavaScript Errors",
                        Z = f + ":" + d;
                      v && (Z += ":" + v),
                        -1 === pe(t, R + Z + i) &&
                          (t.push(R + Z + i), Vi(R, Z, i));
                    }),
                    !!e && e(i, f, d, v, A)
                  );
                };
              }
            }),
            (this.disablePerformanceTracking = function () {
              Fn = !1;
            }),
            (this.enableHeartBeatTimer = function (e) {
              (e = Math.max(e || 15, 5)), (jt = 1e3 * e), null !== Vt && It();
            }),
            (this.disableHeartBeatTimer = function () {
              (jt || nn) &&
                (E.removeEventListener
                  ? (E.removeEventListener("focus", Ae),
                    E.removeEventListener("blur", $e),
                    E.removeEventListener("visibilitychange", Oe))
                  : E.detachEvent &&
                    (E.detachEvent("onfocus", Ae),
                    E.detachEvent("onblur", $e),
                    E.detachEvent("visibilitychange", Oe))),
                (jt = null),
                (nn = !1);
            }),
            (this.killFrame = function () {
              E.location !== E.top.location && (E.top.location = E.location);
            }),
            (this.redirectFile = function (e) {
              "file:" === E.location.protocol && (E.location = e);
            }),
            (this.setCountPreRendered = function (e) {
              Rt = e;
            }),
            (this.trackGoal = function (e, i, f, d) {
              We(function () {
                !(function hr(e, i, f, d) {
                  we(
                    et("idgoal=" + e + (i ? "&revenue=" + i : ""), f, "goal"),
                    me,
                    d
                  );
                })(e, i, f, d);
              });
            }),
            (this.trackLink = function (e, i, f, d) {
              We(function () {
                Wi(e, i, f, d);
              });
            }),
            (this.getNumTrackedPageViews = function () {
              return Kn;
            }),
            (this.trackPageView = function (e, i, f) {
              (Bt = []),
                (a = []),
                (t = []),
                pt(ie)
                  ? We(function () {
                      !(function ri(n, c, l) {
                        var m = E.name.split("###"),
                          g = m[1],
                          T = m[2],
                          k = m[3],
                          B = Sn(n, c);
                        !(function ti(n, c) {
                          var l = D.createElement("script");
                          (l.type = "text/javascript"),
                            (l.src = n),
                            l.readyState
                              ? (l.onreadystatechange = function () {
                                  var m = this.readyState;
                                  ("loaded" === m || "complete" === m) &&
                                    ((l.onreadystatechange = null), c());
                                })
                              : (l.onload = c),
                            D.getElementsByTagName("head")[0].appendChild(l);
                        })(
                          B + "plugins/Overlay/client/client.js?v=1",
                          function () {
                            Matomo_Overlay_Client.initialize(B, l, g, T, k);
                          }
                        );
                      })(K, ye, ie);
                    })
                  : We(function () {
                      Kn++,
                        (function tr(e, i, f) {
                          ci ||
                            (_t = (function $i() {
                              var d,
                                e = "";
                              for (d = 0; d < 6; d++)
                                e +=
                                  "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                                    Math.floor(62 * Math.random())
                                  );
                              return e;
                            })());
                          var d = et(
                            "action_name=" +
                              V(
                                (function _i(n) {
                                  if (!de((n = n && n.text ? n.text : n))) {
                                    var c = D.getElementsByTagName("title");
                                    c && N(c[0]) && (n = c[0].text);
                                  }
                                  return n;
                                })(e || gt)
                              ),
                            i,
                            "log"
                          );
                          Fn && !gn && (d = Ii(d)), we(d, me, f);
                        })(e, i, f);
                    });
            }),
            (this.disableBrowserFeatureDetection = function () {
              (h = !1), (Ve = {}), ut() && wn();
            }),
            (this.enableBrowserFeatureDetection = function () {
              (h = !0), Ln();
            }),
            (this.trackAllContentImpressions = function () {
              pt(ie) ||
                We(function () {
                  un(function () {
                    var i = ki(Y.findContentNodes());
                    je.pushMultiple(i);
                  });
                });
            }),
            (this.trackVisibleContentImpressions = function (e, i) {
              pt(ie) ||
                (N(e) || (e = !0),
                N(i) || (i = 750),
                (function _r(e, i, f) {
                  if (vn) return !0;
                  vn = !0;
                  var v,
                    A,
                    d = !1;
                  function R() {
                    d = !0;
                  }
                  Kt(function () {
                    if (e) {
                      for (v = ["scroll", "resize"], A = 0; A < v.length; A++)
                        D.addEventListener
                          ? D.addEventListener(v[A], R, !1)
                          : E.attachEvent("on" + v[A], R);
                      !(function ft(le) {
                        setTimeout(function () {
                          vn &&
                            (d &&
                              ((d = !1), f.trackVisibleContentImpressions()),
                            ft(le));
                        }, le);
                      })(100);
                    }
                    i &&
                      i > 0 &&
                      (function Z(le) {
                        setTimeout(function () {
                          vn &&
                            ((d = !1),
                            f.trackVisibleContentImpressions(),
                            Z(le));
                        }, le);
                      })((i = parseInt(i, 10)));
                  });
                })(e, i, this),
                We(function () {
                  Kt(function () {
                    var d = qi(Y.findContentNodes());
                    je.pushMultiple(d);
                  });
                }));
            }),
            (this.trackContentImpression = function (e, i, f) {
              pt(ie) ||
                ((e = kt(e)),
                (i = kt(i)),
                (f = kt(f)),
                e &&
                  ((i = i || "Unknown"),
                  We(function () {
                    var d = (function ur(e, i, f) {
                      return et(
                        Y.buildImpressionRequestParams(e, i, f),
                        null,
                        "contentImpression"
                      );
                    })(e, i, f);
                    je.push(d);
                  })));
            }),
            (this.trackContentImpressionsWithinNode = function (e) {
              pt(ie) ||
                !e ||
                We(function () {
                  vn
                    ? Kt(function () {
                        var f = qi(Y.findContentNodesWithinNode(e));
                        je.pushMultiple(f);
                      })
                    : un(function () {
                        var f = ki(Y.findContentNodesWithinNode(e));
                        je.pushMultiple(f);
                      });
                });
            }),
            (this.trackContentInteraction = function (e, i, f, d) {
              pt(ie) ||
                ((e = kt(e)),
                (i = kt(i)),
                (f = kt(f)),
                (d = kt(d)),
                e &&
                  i &&
                  ((f = f || "Unknown"),
                  We(function () {
                    var v = Ui(e, i, f, d);
                    v && je.push(v);
                  })));
            }),
            (this.trackContentInteractionNode = function (e, i) {
              if (!pt(ie) && e) {
                var f = null;
                return (
                  We(function () {
                    (f = (function fr(e, i) {
                      if (e) {
                        var f = Y.findParentContentNode(e),
                          d = Y.buildContentBlock(f);
                        if (d)
                          return (
                            i || (i = "Unknown"),
                            Ui(i, d.name, d.piece, d.target)
                          );
                      }
                    })(e, i)),
                      f && je.push(f);
                  }),
                  f
                );
              }
            }),
            (this.logAllContentBlocksOnPage = function () {
              var e = Y.findContentNodes(),
                i = Y.collectContent(e);
              "undefined" != typeof console &&
                console &&
                console.log &&
                console.log(i);
            }),
            (this.trackEvent = function (e, i, f, d, v, A) {
              We(function () {
                Vi(e, i, f, d, v, A);
              });
            }),
            (this.trackSiteSearch = function (e, i, f, d) {
              (Bt = []),
                We(function () {
                  !(function lr(e, i, f, d) {
                    we(
                      et(
                        "search=" +
                          V(e) +
                          (i ? "&search_cat=" + V(i) : "") +
                          (N(f) ? "&search_count=" + f : ""),
                        d,
                        "sitesearch"
                      ),
                      me
                    );
                  })(e, i, f, d);
                });
            }),
            (this.setEcommerceView = function (e, i, f, d) {
              (St = {}),
                Me(f) && (f = String(f)),
                N(f) && null !== f && !1 !== f && f.length
                  ? f instanceof Array && (f = E.JSON.stringify(f))
                  : (f = "");
              var v = "_pkc";
              (St[v] = f),
                N(d) &&
                  null !== d &&
                  !1 !== d &&
                  String(d).length &&
                  (St[(v = "_pkp")] = d),
                (Me(e) || Me(i)) &&
                  (Me(e) && (St[(v = "_pks")] = e),
                  Me(i) || (i = ""),
                  (St[(v = "_pkn")] = i));
            }),
            (this.getEcommerceItems = function () {
              return JSON.parse(JSON.stringify(ve));
            }),
            (this.addEcommerceItem = function (e, i, f, d, v) {
              Me(e) && (ve[e] = [String(e), i, f, d, v]);
            }),
            (this.removeEcommerceItem = function (e) {
              Me(e) && ((e = String(e)), delete ve[e]);
            }),
            (this.clearEcommerceCart = function () {
              ve = {};
            }),
            (this.trackEcommerceOrder = function (e, i, f, d, v, A) {
              !(function Zi(e, i, f, d, v, A) {
                String(e).length && N(i) && Pi(e, i, f, d, v, A);
              })(e, i, f, d, v, A);
            }),
            (this.trackEcommerceCartUpdate = function (e) {
              !(function er(e) {
                N(e) && Pi("", e, "", "", "", "");
              })(e);
            }),
            (this.trackRequest = function (e, i, f, d) {
              We(function () {
                we(et(e, i, d), me, f);
              });
            }),
            (this.ping = function () {
              this.trackRequest("ping=1", null, null, "ping");
            }),
            (this.disableQueueRequest = function () {
              je.enabled = !1;
            }),
            (this.setRequestQueueInterval = function (e) {
              if (e < 1e3)
                throw new Error(
                  "Request queue interval needs to be at least 1000ms"
                );
              je.interval = e;
            }),
            (this.queueRequest = function (e, i) {
              We(function () {
                var f = i ? e : et(e);
                je.push(f);
              });
            }),
            (this.isConsentRequired = function () {
              return o;
            }),
            (this.getRememberedConsent = function () {
              var e = b(m);
              return b(T)
                ? (e && Ge(m, he, _e), null)
                : e && 0 !== e
                ? e
                : null;
            }),
            (this.hasRememberedConsent = function () {
              return !!this.getRememberedConsent();
            }),
            (this.requireConsent = function () {
              (o = !0),
                (r = this.hasRememberedConsent()) || (De = !0),
                kn++,
                (re["CoreConsent" + kn] = {
                  unload: function () {
                    r || gi();
                  },
                });
            }),
            (this.setConsentGiven = function (e) {
              var i, f;
              for (
                r = !0,
                  h || this.enableBrowserFeatureDetection(),
                  Ge(T, he, _e),
                  i = 0;
                i < a.length;
                i++
              )
                "string" == (f = typeof a[i][0])
                  ? we(a[i][0], me, a[i][1])
                  : "object" === f && Ft(a[i][0], me);
              (a = []), (!N(e) || e) && this.setCookieConsentGiven();
            }),
            (this.rememberConsentGiven = function (e) {
              (e = e ? 60 * e * 60 * 1e3 : 94608e7), this.setConsentGiven(!0);
              var f = new Date().getTime();
              y(m, f, e, he, _e, Xe, Je);
            }),
            (this.forgetConsentGiven = function (e) {
              (e = e ? 60 * e * 60 * 1e3 : 94608e7),
                Ge(m, he, _e),
                y(T, new Date().getTime(), e, he, _e, Xe, Je),
                this.forgetCookieConsentGiven(),
                this.requireConsent();
            }),
            (this.isUserOptedOut = function () {
              return !r;
            }),
            (this.optUserOut = this.forgetConsentGiven),
            (this.forgetUserOptOut = function () {
              this.setConsentGiven(!1);
            }),
            (this.enableFileTracking = function () {
              p = !0;
            }),
            Kt(function () {
              setTimeout(function () {
                Gn = !0;
              }, 0);
            }),
            $.trigger("TrackerSetup", [this]),
            $.addPlugin("TrackerVisitorIdCookie" + s, {
              unload: function () {
                ut() && !Ut && ((Ut = !0), wn()), u || (pi(), ji());
              },
            });
        }
        function ln() {
          return {
            push: an,
          };
        }
        var Bn = [
          "addTracker",
          "enableFileTracking",
          "forgetCookieConsentGiven",
          "requireCookieConsent",
          "disableBrowserFeatureDetection",
          "disableCampaignParameters",
          "disableCookies",
          "setTrackerUrl",
          "setAPIUrl",
          "enableCrossDomainLinking",
          "setCrossDomainLinkingTimeout",
          "setSessionCookieTimeout",
          "setVisitorCookieTimeout",
          "setCookieNamePrefix",
          "setCookieSameSite",
          "setSecureCookie",
          "setCookiePath",
          "setCookieDomain",
          "setDomains",
          "setUserId",
          "setVisitorId",
          "setSiteId",
          "alwaysUseSendBeacon",
          "disableAlwaysUseSendBeacon",
          "enableLinkTracking",
          "setCookieConsentGiven",
          "requireConsent",
          "setConsentGiven",
          "disablePerformanceTracking",
          "setPagePerformanceTiming",
          "setExcludedQueryParams",
          "setExcludedReferrers",
        ];
        function Ye(n, c) {
          var l = new Be(n, c);
          for (
            xe.push(l),
              _paq = (function rt(n, c) {
                var m,
                  g,
                  l = {};
                for (m = 0; m < c.length; m++) {
                  var T = c[m];
                  for (l[T] = 1, g = 0; g < n.length; g++)
                    if (n[g] && n[g][0]) {
                      var k = n[g][0];
                      T === k &&
                        (an(n[g]),
                        delete n[g],
                        l[k] > 1 &&
                          "addTracker" !== k &&
                          "enableLinkTracking" !== k &&
                          Pe(
                            "The method " +
                              k +
                              ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                          ),
                        l[k]++);
                    }
                }
                return n;
              })(_paq, Bn),
              Qe = 0;
            Qe < _paq.length;
            Qe++
          )
            _paq[Qe] && an(_paq[Qe]);
          return (_paq = new ln()), $.trigger("TrackerAdded", [l]), l;
        }
        return (
          Ee(
            E,
            "beforeunload",
            function ei(n) {
              var c;
              (be = !0), An("unload");
              var l = (c = new Date()).getTimeAlias();
              if ((Ne - l > 3e3 && (Ne = l + 3e3), Ne))
                do {
                  c = new Date();
                } while (c.getTimeAlias() < Ne);
            },
            !1
          ),
          Ee(
            E,
            "visibilitychange",
            function () {
              be || ("hidden" === D.visibilityState && An("unload"));
            },
            !1
          ),
          Ee(
            E,
            "online",
            function () {
              N(z.serviceWorker) &&
                z.serviceWorker.ready.then(
                  function (n) {
                    if (n && n.sync) return n.sync.register("matomoSync");
                  },
                  function () {}
                );
            },
            !1
          ),
          Ee(
            E,
            "message",
            function (n) {
              if (n && n.origin) {
                var c,
                  l,
                  g = _(n.origin),
                  T = $.getAsyncTrackers();
                for (l = 0; l < T.length; l++)
                  if (_(T[l].getMatomoUrl()) === g) {
                    c = T[l];
                    break;
                  }
                if (c) {
                  var k = null;
                  try {
                    k = JSON.parse(n.data);
                  } catch {
                    return;
                  }
                  if (k)
                    if (N(k.maq_initial_value))
                      B({
                        maq_opted_in: k.maq_initial_value && c.hasConsent(),
                        maq_url: c.getMatomoUrl(),
                        maq_optout_by_default: c.isConsentRequired(),
                      });
                    else if (N(k.maq_opted_in)) {
                      for (T = $.getAsyncTrackers(), l = 0; l < T.length; l++)
                        (c = T[l]),
                          k.maq_opted_in
                            ? c.rememberConsentGiven()
                            : c.forgetConsentGiven();
                      B({
                        maq_confirm_opted_in: c.hasConsent(),
                        maq_url: c.getMatomoUrl(),
                        maq_optout_by_default: c.isConsentRequired(),
                      });
                    }
                }
              }
              function B(M) {
                var Q = D.getElementsByTagName("iframe");
                for (l = 0; l < Q.length; l++) {
                  var ue = Q[l],
                    X = _(ue.src);
                  if (
                    ue.contentWindow &&
                    N(ue.contentWindow.postMessage) &&
                    X === g
                  ) {
                    var J = JSON.stringify(M);
                    ue.contentWindow.postMessage(J, n.origin);
                  }
                }
              }
            },
            !1
          ),
          (Date.prototype.getTimeAlias = Date.prototype.getTime),
          ($ = {
            initialized: !1,
            JSON: E.JSON,
            DOM: {
              addEventListener: function (n, c, l, m) {
                void 0 === m && (m = !1), Ee(n, c, l, m);
              },
              onLoad: Kt,
              onReady: un,
              isNodeVisible: Ue,
              isOrWasNodeVisible: Y.isNodeVisible,
            },
            on: function (n, c) {
              ee[n] || (ee[n] = []), ee[n].push(c);
            },
            off: function (n, c) {
              if (ee[n])
                for (var l = 0; l < ee[n].length; l++)
                  ee[n][l] === c && ee[n].splice(l, 1);
            },
            trigger: function (n, c, l) {
              if (ee[n])
                for (var m = 0; m < ee[n].length; m++)
                  ee[n][m].apply(l || E, c);
            },
            addPlugin: function (n, c) {
              re[n] = c;
            },
            getTracker: function (n, c) {
              return (
                N(c) || (c = this.getAsyncTracker().getSiteId()),
                N(n) || (n = this.getAsyncTracker().getTrackerUrl()),
                new Be(n, c)
              );
            },
            getAsyncTrackers: function () {
              return xe;
            },
            addTracker: function (n, c) {
              return xe.length ? xe[0].addTracker(n, c) : Ye(n, c);
            },
            getAsyncTracker: function (n, c) {
              var l;
              if (!(xe && xe.length && xe[0])) return Ye(n, c);
              if (((l = xe[0]), !c && !n)) return l;
              (!N(c) || null === c) && l && (c = l.getSiteId()),
                (!N(n) || null === n) && l && (n = l.getTrackerUrl());
              for (var m, g = 0; g < xe.length; g++)
                if (
                  (m = xe[g]) &&
                  String(m.getSiteId()) === String(c) &&
                  m.getTrackerUrl() === n
                )
                  return m;
            },
            retryMissedPluginCalls: function () {
              var n = tt;
              tt = [];
              for (var c = 0; c < n.length; c++) an(n[c]);
            },
          }),
          "function" == typeof define &&
            define.amd &&
            (define("piwik", [], function () {
              return $;
            }),
            define("matomo", [], function () {
              return $;
            })),
          $
        );
      })()),
  (_paq = window._paq = window._paq || []).push(["trackPageView"]),
  _paq.push(["enableLinkTracking"]),
  _paq.push(["setTrackerUrl", "//webanalytics.synlab.co/matomo/matomo.php"]),
  _paq.push(["setSiteId", "1"]),
  (function (Ne, re) {
    "object" == typeof exports && typeof module < "u"
      ? (module.exports = re())
      : "function" == typeof define && define.amd
      ? define(re)
      : ((Ne = typeof globalThis < "u" ? globalThis : Ne || self).bootstrap =
          re());
  })(this, function () {
    "use strict";
    function Ne(o, r) {
      for (var a = 0; a < r.length; a++) {
        var t = r[a];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(o, t.key, t);
      }
    }
    function re(o, r, a) {
      return r && Ne(o.prototype, r), a && Ne(o, a), o;
    }
    function ee() {
      return (ee =
        Object.assign ||
        function (o) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var t in a)
              Object.prototype.hasOwnProperty.call(a, t) && (o[t] = a[t]);
          }
          return o;
        }).apply(this, arguments);
    }
    function D(o, r) {
      (o.prototype = Object.create(r.prototype)),
        (o.prototype.constructor = o),
        (o.__proto__ = r);
    }
    var z,
      Cn,
      E = function (o) {
        do {
          o += Math.floor(1e6 * Math.random());
        } while (document.getElementById(o));
        return o;
      },
      wt = function (o) {
        var r = o.getAttribute("data-bs-target");
        if (!r || "#" === r) {
          var a = o.getAttribute("href");
          r = a && "#" !== a ? a.trim() : null;
        }
        return r;
      },
      V = function (o) {
        var r = wt(o);
        return r && document.querySelector(r) ? r : null;
      },
      Tt = function (o) {
        var r = wt(o);
        return r ? document.querySelector(r) : null;
      },
      Re = function (o) {
        if (!o) return 0;
        var r = window.getComputedStyle(o),
          a = r.transitionDuration,
          t = r.transitionDelay,
          s = Number.parseFloat(a),
          u = Number.parseFloat(t);
        return s || u
          ? ((a = a.split(",")[0]),
            (t = t.split(",")[0]),
            1e3 * (Number.parseFloat(a) + Number.parseFloat(t)))
          : 0;
      },
      xe = function (o) {
        o.dispatchEvent(new Event("transitionend"));
      },
      Qe = function (o) {
        return (o[0] || o).nodeType;
      },
      $ = function (o, r) {
        var a = !1,
          t = r + 5;
        o.addEventListener("transitionend", function s() {
          (a = !0), o.removeEventListener("transitionend", s);
        }),
          setTimeout(function () {
            a || xe(o);
          }, t);
      },
      tt = function (o, r, a) {
        Object.keys(a).forEach(function (t) {
          var s,
            u = a[t],
            h = r[t],
            p =
              h && Qe(h)
                ? "element"
                : null == (s = h)
                ? "" + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(u).test(p))
            throw new Error(
              o.toUpperCase() +
                ': Option "' +
                t +
                '" provided type "' +
                p +
                '" but expected type "' +
                u +
                '".'
            );
        });
      },
      kn = function (o) {
        if (!o) return !1;
        if (o.style && o.parentNode && o.parentNode.style) {
          var r = getComputedStyle(o),
            a = getComputedStyle(o.parentNode);
          return (
            "none" !== r.display &&
            "none" !== a.display &&
            "hidden" !== r.visibility
          );
        }
        return !1;
      },
      Zn = function () {
        return function () {};
      },
      Qt = function (o) {
        return o.offsetHeight;
      },
      be = function () {
        var o = window.jQuery;
        return o && !document.body.hasAttribute("data-bs-no-jquery") ? o : null;
      },
      Te = function (o) {
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", o)
          : o();
      },
      Ie = "rtl" === document.documentElement.dir,
      N =
        ((z = {}),
        (Cn = 1),
        {
          set: function (o, r, a) {
            void 0 === o.bsKey &&
              ((o.bsKey = {
                key: r,
                id: Cn,
              }),
              Cn++),
              (z[o.bsKey.id] = a);
          },
          get: function (o, r) {
            if (!o || void 0 === o.bsKey) return null;
            var a = o.bsKey;
            return a.key === r ? z[a.id] : null;
          },
          delete: function (o, r) {
            if (void 0 !== o.bsKey) {
              var a = o.bsKey;
              a.key === r && (delete z[a.id], delete o.bsKey);
            }
          },
        }),
      Et = function (o, r, a) {
        N.set(o, r, a);
      },
      ne = function (o, r) {
        return N.get(o, r);
      },
      vi = /[^.]*(?=\..*)\.|.*/,
      Me = /\..*/,
      bi = /::\d+$/,
      Pe = {},
      an = 1,
      Ee = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      },
      Kt = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function un(o, r) {
      return (r && r + "::" + an++) || o.uidEvent || an++;
    }
    function An(o) {
      var r = un(o);
      return (o.uidEvent = r), (Pe[r] = Pe[r] || {}), Pe[r];
    }
    function ei(o, r, a) {
      void 0 === a && (a = null);
      for (var t = Object.keys(o), s = 0, u = t.length; s < u; s++) {
        var h = o[t[s]];
        if (h.originalHandler === r && h.delegationSelector === a) return h;
      }
      return null;
    }
    function ti(o, r, a) {
      var t = "string" == typeof r,
        s = t ? a : r,
        u = o.replace(Me, ""),
        h = Ee[u];
      return h && (u = h), Kt.has(u) || (u = o), [t, s, u];
    }
    function ni(o, r, a, t, s) {
      if ("string" == typeof r && o) {
        a || ((a = t), (t = null));
        var u = ti(r, a, t),
          h = u[0],
          p = u[1],
          b = u[2],
          y = An(o),
          C = y[b] || (y[b] = {}),
          w = ei(C, p, h ? a : null);
        if (w) w.oneOff = w.oneOff && s;
        else {
          var P = un(p, r.replace(vi, "")),
            I = h
              ? ((x = o),
                (H = a),
                (U = t),
                function W(L) {
                  for (
                    var q = x.querySelectorAll(H), S = L.target;
                    S && S !== this;
                    S = S.parentNode
                  )
                    for (var G = q.length; G--; )
                      if (q[G] === S)
                        return (
                          (L.delegateTarget = S),
                          W.oneOff && _.off(x, L.type, U),
                          U.apply(S, [L])
                        );
                  return null;
                })
              : (function (x, H) {
                  return function U(W) {
                    return (
                      (W.delegateTarget = x),
                      U.oneOff && _.off(x, W.type, H),
                      H.apply(x, [W])
                    );
                  };
                })(o, a);
          (I.delegationSelector = h ? a : null),
            (I.originalHandler = p),
            (I.oneOff = s),
            (I.uidEvent = P),
            (C[P] = I),
            o.addEventListener(b, I, h);
        }
      }
      var x, H, U;
    }
    function On(o, r, a, t, s) {
      var u = ei(r[a], t, s);
      u && (o.removeEventListener(a, u, !!s), delete r[a][u.uidEvent]);
    }
    var _ = {
        on: function (o, r, a, t) {
          ni(o, r, a, t, !1);
        },
        one: function (o, r, a, t) {
          ni(o, r, a, t, !0);
        },
        off: function (o, r, a, t) {
          if ("string" == typeof r && o) {
            var s = ti(r, a, t),
              u = s[0],
              h = s[1],
              p = s[2],
              b = p !== r,
              y = An(o),
              C = r.startsWith(".");
            if (void 0 === h) {
              C &&
                Object.keys(y).forEach(function (P) {
                  var I, x, H, U, W;
                  (I = o),
                    (x = y),
                    (H = P),
                    (U = r.slice(1)),
                    (W = x[H] || {}),
                    Object.keys(W).forEach(function (L) {
                      if (L.includes(U)) {
                        var q = W[L];
                        On(I, x, H, q.originalHandler, q.delegationSelector);
                      }
                    });
                });
              var w = y[p] || {};
              Object.keys(w).forEach(function (P) {
                var I = P.replace(bi, "");
                if (!b || r.includes(I)) {
                  var x = w[P];
                  On(o, y, p, x.originalHandler, x.delegationSelector);
                }
              });
            } else {
              if (!y || !y[p]) return;
              On(o, y, p, h, u ? a : null);
            }
          }
        },
        trigger: function (o, r, a) {
          if ("string" != typeof r || !o) return null;
          var t,
            s = be(),
            u = r.replace(Me, ""),
            h = r !== u,
            p = Kt.has(u),
            b = !0,
            y = !0,
            C = !1,
            w = null;
          return (
            h &&
              s &&
              ((t = s.Event(r, a)),
              s(o).trigger(t),
              (b = !t.isPropagationStopped()),
              (y = !t.isImmediatePropagationStopped()),
              (C = t.isDefaultPrevented())),
            p
              ? (w = document.createEvent("HTMLEvents")).initEvent(u, b, !0)
              : (w = new CustomEvent(r, {
                  bubbles: b,
                  cancelable: !0,
                })),
            void 0 !== a &&
              Object.keys(a).forEach(function (P) {
                Object.defineProperty(w, P, {
                  get: function () {
                    return a[P];
                  },
                });
              }),
            C && w.preventDefault(),
            y && o.dispatchEvent(w),
            w.defaultPrevented && void 0 !== t && t.preventDefault(),
            w
          );
        },
      },
      nt = (function () {
        function o(r) {
          r && ((this._element = r), Et(r, this.constructor.DATA_KEY, this));
        }
        return (
          (o.prototype.dispose = function () {
            (function (o, r) {
              N.delete(o, r);
            })(this._element, this.constructor.DATA_KEY),
              (this._element = null);
          }),
          (o.getInstance = function (r) {
            return ne(r, this.DATA_KEY);
          }),
          re(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "5.0.0-beta1";
              },
            },
          ]),
          o
        );
      })(),
      fn = "alert",
      Yt = (function (o) {
        function r() {
          return o.apply(this, arguments) || this;
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.close = function (t) {
            var s = t ? this._getRootElement(t) : this._element,
              u = this._triggerCloseEvent(s);
            null === u || u.defaultPrevented || this._removeElement(s);
          }),
          (a._getRootElement = function (t) {
            return Tt(t) || t.closest(".alert");
          }),
          (a._triggerCloseEvent = function (t) {
            return _.trigger(t, "close.bs.alert");
          }),
          (a._removeElement = function (t) {
            var s = this;
            if ((t.classList.remove("show"), t.classList.contains("fade"))) {
              var u = Re(t);
              _.one(t, "transitionend", function () {
                return s._destroyElement(t);
              }),
                $(t, u);
            } else this._destroyElement(t);
          }),
          (a._destroyElement = function (t) {
            t.parentNode && t.parentNode.removeChild(t),
              _.trigger(t, "closed.bs.alert");
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              var s = ne(this, "bs.alert");
              s || (s = new r(this)), "close" === t && s[t](this);
            });
          }),
          (r.handleDismiss = function (t) {
            return function (s) {
              s && s.preventDefault(), t.close(this);
            };
          }),
          re(r, null, [
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.alert";
              },
            },
          ]),
          r
        );
      })(nt);
    _.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      Yt.handleDismiss(new Yt())
    ),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn[fn];
          (o.fn[fn] = Yt.jQueryInterface),
            (o.fn[fn].Constructor = Yt),
            (o.fn[fn].noConflict = function () {
              return (o.fn[fn] = r), Yt.jQueryInterface;
            });
        }
      });
    var cn = (function (o) {
      function r() {
        return o.apply(this, arguments) || this;
      }
      return (
        D(r, o),
        (r.prototype.toggle = function () {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }),
        (r.jQueryInterface = function (a) {
          return this.each(function () {
            var t = ne(this, "bs.button");
            t || (t = new r(this)), "toggle" === a && t[a]();
          });
        }),
        re(r, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.button";
            },
          },
        ]),
        r
      );
    })(nt);
    function Un(o) {
      return (
        "true" === o ||
        ("false" !== o &&
          (o === Number(o).toString()
            ? Number(o)
            : "" === o || "null" === o
            ? null
            : o))
      );
    }
    function it(o) {
      return o.replace(/[A-Z]/g, function (r) {
        return "-" + r.toLowerCase();
      });
    }
    _.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      function (o) {
        o.preventDefault();
        var r = o.target.closest('[data-bs-toggle="button"]'),
          a = ne(r, "bs.button");
        a || (a = new cn(r)), a.toggle();
      }
    ),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn.button;
          (o.fn.button = cn.jQueryInterface),
            (o.fn.button.Constructor = cn),
            (o.fn.button.noConflict = function () {
              return (o.fn.button = r), cn.jQueryInterface;
            });
        }
      });
    var ae = {
        setDataAttribute: function (o, r, a) {
          o.setAttribute("data-bs-" + it(r), a);
        },
        removeDataAttribute: function (o, r) {
          o.removeAttribute("data-bs-" + it(r));
        },
        getDataAttributes: function (o) {
          if (!o) return {};
          var r = {};
          return (
            Object.keys(o.dataset)
              .filter(function (a) {
                return a.startsWith("bs");
              })
              .forEach(function (a) {
                var t = a.replace(/^bs/, "");
                (t = t.charAt(0).toLowerCase() + t.slice(1, t.length)),
                  (r[t] = Un(o.dataset[a]));
              }),
            r
          );
        },
        getDataAttribute: function (o, r) {
          return Un(o.getAttribute("data-bs-" + it(r)));
        },
        offset: function (o) {
          var r = o.getBoundingClientRect();
          return {
            top: r.top + document.body.scrollTop,
            left: r.left + document.body.scrollLeft,
          };
        },
        position: function (o) {
          return {
            top: o.offsetTop,
            left: o.offsetLeft,
          };
        },
      },
      j = {
        matches: function (o, r) {
          return o.matches(r);
        },
        find: function (o, r) {
          var a;
          return (
            void 0 === r && (r = document.documentElement),
            (a = []).concat.apply(
              a,
              Element.prototype.querySelectorAll.call(r, o)
            )
          );
        },
        findOne: function (o, r) {
          return (
            void 0 === r && (r = document.documentElement),
            Element.prototype.querySelector.call(r, o)
          );
        },
        children: function (o, r) {
          var a;
          return (a = []).concat.apply(a, o.children).filter(function (s) {
            return s.matches(r);
          });
        },
        parents: function (o, r) {
          for (
            var a = [], t = o.parentNode;
            t && t.nodeType === Node.ELEMENT_NODE && 3 !== t.nodeType;

          )
            this.matches(t, r) && a.push(t), (t = t.parentNode);
          return a;
        },
        prev: function (o, r) {
          for (var a = o.previousElementSibling; a; ) {
            if (a.matches(r)) return [a];
            a = a.previousElementSibling;
          }
          return [];
        },
        next: function (o, r) {
          for (var a = o.nextElementSibling; a; ) {
            if (this.matches(a, r)) return [a];
            a = a.nextElementSibling;
          }
          return [];
        },
      },
      zt = "carousel",
      ht = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      kt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      ii = {
        TOUCH: "touch",
        PEN: "pen",
      },
      Xt = (function (o) {
        function r(t, s) {
          var u;
          return (
            ((u = o.call(this, t) || this)._items = null),
            (u._interval = null),
            (u._activeElement = null),
            (u._isPaused = !1),
            (u._isSliding = !1),
            (u.touchTimeout = null),
            (u.touchStartX = 0),
            (u.touchDeltaX = 0),
            (u._config = u._getConfig(s)),
            (u._indicatorsElement = j.findOne(
              ".carousel-indicators",
              u._element
            )),
            (u._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (u._pointerEvent = !!window.PointerEvent),
            u._addEventListeners(),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.next = function () {
            this._isSliding || this._slide("next");
          }),
          (a.nextWhenVisible = function () {
            !document.hidden && kn(this._element) && this.next();
          }),
          (a.prev = function () {
            this._isSliding || this._slide("prev");
          }),
          (a.pause = function (t) {
            t || (this._isPaused = !0),
              j.findOne(
                ".carousel-item-next, .carousel-item-prev",
                this._element
              ) && (xe(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (a.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (a.to = function (t) {
            var s = this;
            this._activeElement = j.findOne(
              ".active.carousel-item",
              this._element
            );
            var u = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                _.one(this._element, "slid.bs.carousel", function () {
                  return s.to(t);
                });
              else {
                if (u === t) return this.pause(), void this.cycle();
                this._slide(t > u ? "next" : "prev", this._items[t]);
              }
          }),
          (a.dispose = function () {
            o.prototype.dispose.call(this),
              _.off(this._element, ".bs.carousel"),
              (this._items = null),
              (this._config = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (a._getConfig = function (t) {
            return (t = ee({}, ht, t)), tt(zt, t, kt), t;
          }),
          (a._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var s = t / this.touchDeltaX;
              (this.touchDeltaX = 0),
                s > 0 && this.prev(),
                s < 0 && this.next();
            }
          }),
          (a._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              _.on(this._element, "keydown.bs.carousel", function (s) {
                return t._keydown(s);
              }),
              "hover" === this._config.pause &&
                (_.on(this._element, "mouseenter.bs.carousel", function (s) {
                  return t.pause(s);
                }),
                _.on(this._element, "mouseleave.bs.carousel", function (s) {
                  return t.cycle(s);
                })),
              this._config.touch &&
                this._touchSupported &&
                this._addTouchEventListeners();
          }),
          (a._addTouchEventListeners = function () {
            var t = this,
              s = function (h) {
                t._pointerEvent && ii[h.pointerType.toUpperCase()]
                  ? (t.touchStartX = h.clientX)
                  : t._pointerEvent || (t.touchStartX = h.touches[0].clientX);
              },
              u = function (h) {
                t._pointerEvent &&
                  ii[h.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = h.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (p) {
                      return t.cycle(p);
                    }, 500 + t._config.interval)));
              };
            j.find(".carousel-item img", this._element).forEach(function (h) {
              _.on(h, "dragstart.bs.carousel", function (p) {
                return p.preventDefault();
              });
            }),
              this._pointerEvent
                ? (_.on(this._element, "pointerdown.bs.carousel", function (h) {
                    return s(h);
                  }),
                  _.on(this._element, "pointerup.bs.carousel", function (h) {
                    return u(h);
                  }),
                  this._element.classList.add("pointer-event"))
                : (_.on(this._element, "touchstart.bs.carousel", function (h) {
                    return s(h);
                  }),
                  _.on(this._element, "touchmove.bs.carousel", function (h) {
                    var p;
                    t.touchDeltaX =
                      (p = h).touches && p.touches.length > 1
                        ? 0
                        : p.touches[0].clientX - t.touchStartX;
                  }),
                  _.on(this._element, "touchend.bs.carousel", function (h) {
                    return u(h);
                  }));
          }),
          (a._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.key) {
                case "ArrowLeft":
                  t.preventDefault(), this.prev();
                  break;
                case "ArrowRight":
                  t.preventDefault(), this.next();
              }
          }),
          (a._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? j.find(".carousel-item", t.parentNode)
                  : []),
              this._items.indexOf(t)
            );
          }),
          (a._getItemByDirection = function (t, s) {
            var u = "next" === t,
              h = "prev" === t,
              p = this._getItemIndex(s);
            if (
              ((h && 0 === p) || (u && p === this._items.length - 1)) &&
              !this._config.wrap
            )
              return s;
            var y = (p + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === y
              ? this._items[this._items.length - 1]
              : this._items[y];
          }),
          (a._triggerSlideEvent = function (t, s) {
            var u = this._getItemIndex(t),
              h = this._getItemIndex(
                j.findOne(".active.carousel-item", this._element)
              );
            return _.trigger(this._element, "slide.bs.carousel", {
              relatedTarget: t,
              direction: s,
              from: h,
              to: u,
            });
          }),
          (a._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              for (
                var s = j.find(".active", this._indicatorsElement), u = 0;
                u < s.length;
                u++
              )
                s[u].classList.remove("active");
              var h = this._indicatorsElement.children[this._getItemIndex(t)];
              h && h.classList.add("active");
            }
          }),
          (a._updateInterval = function () {
            var t =
              this._activeElement ||
              j.findOne(".active.carousel-item", this._element);
            if (t) {
              var s = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
              s
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = s))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
            }
          }),
          (a._slide = function (t, s) {
            var u,
              h,
              p,
              b = this,
              y = j.findOne(".active.carousel-item", this._element),
              C = this._getItemIndex(y),
              w = s || (y && this._getItemByDirection(t, y)),
              P = this._getItemIndex(w),
              I = !!this._interval;
            if (
              ("next" === t
                ? ((u = "carousel-item-start"),
                  (h = "carousel-item-next"),
                  (p = "left"))
                : ((u = "carousel-item-end"),
                  (h = "carousel-item-prev"),
                  (p = "right")),
              w && w.classList.contains("active"))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(w, p).defaultPrevented &&
              y &&
              w
            ) {
              if (
                ((this._isSliding = !0),
                I && this.pause(),
                this._setActiveIndicatorElement(w),
                (this._activeElement = w),
                this._element.classList.contains("slide"))
              ) {
                w.classList.add(h),
                  Qt(w),
                  y.classList.add(u),
                  w.classList.add(u);
                var x = Re(y);
                _.one(y, "transitionend", function () {
                  w.classList.remove(u, h),
                    w.classList.add("active"),
                    y.classList.remove("active", h, u),
                    (b._isSliding = !1),
                    setTimeout(function () {
                      _.trigger(b._element, "slid.bs.carousel", {
                        relatedTarget: w,
                        direction: p,
                        from: C,
                        to: P,
                      });
                    }, 0);
                }),
                  $(y, x);
              } else
                y.classList.remove("active"),
                  w.classList.add("active"),
                  (this._isSliding = !1),
                  _.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: w,
                    direction: p,
                    from: C,
                    to: P,
                  });
              I && this.cycle();
            }
          }),
          (r.carouselInterface = function (t, s) {
            var u = ne(t, "bs.carousel"),
              h = ee({}, ht, ae.getDataAttributes(t));
            "object" == typeof s && (h = ee({}, h, s));
            var p = "string" == typeof s ? s : h.slide;
            if ((u || (u = new r(t, h)), "number" == typeof s)) u.to(s);
            else if ("string" == typeof p) {
              if (void 0 === u[p])
                throw new TypeError('No method named "' + p + '"');
              u[p]();
            } else h.interval && h.ride && (u.pause(), u.cycle());
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              r.carouselInterface(this, t);
            });
          }),
          (r.dataApiClickHandler = function (t) {
            var s = Tt(this);
            if (s && s.classList.contains("carousel")) {
              var u = ee(
                  {},
                  ae.getDataAttributes(s),
                  ae.getDataAttributes(this)
                ),
                h = this.getAttribute("data-bs-slide-to");
              h && (u.interval = !1),
                r.carouselInterface(s, u),
                h && ne(s, "bs.carousel").to(h),
                t.preventDefault();
            }
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return ht;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.carousel";
              },
            },
          ]),
          r
        );
      })(nt);
    _.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      Xt.dataApiClickHandler
    ),
      _.on(window, "load.bs.carousel.data-api", function () {
        for (
          var o = j.find('[data-bs-ride="carousel"]'), r = 0, a = o.length;
          r < a;
          r++
        )
          Xt.carouselInterface(o[r], ne(o[r], "bs.carousel"));
      }),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn[zt];
          (o.fn[zt] = Xt.jQueryInterface),
            (o.fn[zt].Constructor = Xt),
            (o.fn[zt].noConflict = function () {
              return (o.fn[zt] = r), Xt.jQueryInterface;
            });
        }
      });
    var Jt = "collapse",
      dt = {
        toggle: !0,
        parent: "",
      },
      _i = {
        toggle: "boolean",
        parent: "(string|element)",
      },
      $t = (function (o) {
        function r(t, s) {
          var u;
          ((u = o.call(this, t) || this)._isTransitioning = !1),
            (u._config = u._getConfig(s)),
            (u._triggerArray = j.find(
              '[data-bs-toggle="collapse"][href="#' +
                t.id +
                '"],[data-bs-toggle="collapse"][data-bs-target="#' +
                t.id +
                '"]'
            ));
          for (
            var h = j.find('[data-bs-toggle="collapse"]'), p = 0, b = h.length;
            p < b;
            p++
          ) {
            var y = h[p],
              C = V(y),
              w = j.find(C).filter(function (P) {
                return P === t;
              });
            null !== C &&
              w.length &&
              ((u._selector = C), u._triggerArray.push(y));
          }
          return (
            (u._parent = u._config.parent ? u._getParent() : null),
            u._config.parent ||
              u._addAriaAndCollapsedClass(u._element, u._triggerArray),
            u._config.toggle && u.toggle(),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.toggle = function () {
            this._element.classList.contains("show")
              ? this.hide()
              : this.show();
          }),
          (a.show = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              !this._element.classList.contains("show")
            ) {
              var s, u;
              this._parent &&
                0 ===
                  (s = j
                    .find(".show, .collapsing", this._parent)
                    .filter(function (w) {
                      return "string" == typeof t._config.parent
                        ? w.getAttribute("data-bs-parent") === t._config.parent
                        : w.classList.contains("collapse");
                    })).length &&
                (s = null);
              var h = j.findOne(this._selector);
              if (s) {
                var p = s.find(function (w) {
                  return h !== w;
                });
                if ((u = p ? ne(p, "bs.collapse") : null) && u._isTransitioning)
                  return;
              }
              if (
                !_.trigger(this._element, "show.bs.collapse").defaultPrevented
              ) {
                s &&
                  s.forEach(function (w) {
                    h !== w && r.collapseInterface(w, "hide"),
                      u || Et(w, "bs.collapse", null);
                  });
                var b = this._getDimension();
                this._element.classList.remove("collapse"),
                  this._element.classList.add("collapsing"),
                  (this._element.style[b] = 0),
                  this._triggerArray.length &&
                    this._triggerArray.forEach(function (w) {
                      w.classList.remove("collapsed"),
                        w.setAttribute("aria-expanded", !0);
                    }),
                  this.setTransitioning(!0);
                var y = "scroll" + (b[0].toUpperCase() + b.slice(1)),
                  C = Re(this._element);
                _.one(this._element, "transitionend", function () {
                  t._element.classList.remove("collapsing"),
                    t._element.classList.add("collapse", "show"),
                    (t._element.style[b] = ""),
                    t.setTransitioning(!1),
                    _.trigger(t._element, "shown.bs.collapse");
                }),
                  $(this._element, C),
                  (this._element.style[b] = this._element[y] + "px");
              }
            }
          }),
          (a.hide = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              this._element.classList.contains("show") &&
              !_.trigger(this._element, "hide.bs.collapse").defaultPrevented
            ) {
              var s = this._getDimension();
              (this._element.style[s] =
                this._element.getBoundingClientRect()[s] + "px"),
                Qt(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
              var u = this._triggerArray.length;
              if (u > 0)
                for (var h = 0; h < u; h++) {
                  var p = this._triggerArray[h],
                    b = Tt(p);
                  b &&
                    !b.classList.contains("show") &&
                    (p.classList.add("collapsed"),
                    p.setAttribute("aria-expanded", !1));
                }
              this.setTransitioning(!0), (this._element.style[s] = "");
              var y = Re(this._element);
              _.one(this._element, "transitionend", function () {
                t.setTransitioning(!1),
                  t._element.classList.remove("collapsing"),
                  t._element.classList.add("collapse"),
                  _.trigger(t._element, "hidden.bs.collapse");
              }),
                $(this._element, y);
            }
          }),
          (a.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (a.dispose = function () {
            o.prototype.dispose.call(this),
              (this._config = null),
              (this._parent = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (a._getConfig = function (t) {
            return ((t = ee({}, dt, t)).toggle = !!t.toggle), tt(Jt, t, _i), t;
          }),
          (a._getDimension = function () {
            return this._element.classList.contains("width")
              ? "width"
              : "height";
          }),
          (a._getParent = function () {
            var t = this,
              s = this._config.parent;
            return (
              Qe(s)
                ? (void 0 === s.jquery && void 0 === s[0]) || (s = s[0])
                : (s = j.findOne(s)),
              j
                .find(
                  '[data-bs-toggle="collapse"][data-bs-parent="' + s + '"]',
                  s
                )
                .forEach(function (h) {
                  var p = Tt(h);
                  t._addAriaAndCollapsedClass(p, [h]);
                }),
              s
            );
          }),
          (a._addAriaAndCollapsedClass = function (t, s) {
            if (t && s.length) {
              var u = t.classList.contains("show");
              s.forEach(function (h) {
                u
                  ? h.classList.remove("collapsed")
                  : h.classList.add("collapsed"),
                  h.setAttribute("aria-expanded", u);
              });
            }
          }),
          (r.collapseInterface = function (t, s) {
            var u = ne(t, "bs.collapse"),
              h = ee(
                {},
                dt,
                ae.getDataAttributes(t),
                "object" == typeof s && s ? s : {}
              );
            if (
              (!u &&
                h.toggle &&
                "string" == typeof s &&
                /show|hide/.test(s) &&
                (h.toggle = !1),
              u || (u = new r(t, h)),
              "string" == typeof s)
            ) {
              if (void 0 === u[s])
                throw new TypeError('No method named "' + s + '"');
              u[s]();
            }
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              r.collapseInterface(this, t);
            });
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return dt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.collapse";
              },
            },
          ]),
          r
        );
      })(nt);
    _.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (o) {
        "A" === o.target.tagName && o.preventDefault();
        var r = ae.getDataAttributes(this),
          a = V(this);
        j.find(a).forEach(function (t) {
          var s,
            u = ne(t, "bs.collapse");
          u
            ? (null === u._parent &&
                "string" == typeof r.parent &&
                ((u._config.parent = r.parent), (u._parent = u._getParent())),
              (s = "toggle"))
            : (s = r),
            $t.collapseInterface(t, s);
        });
      }
    ),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn[Jt];
          (o.fn[Jt] = $t.jQueryInterface),
            (o.fn[Jt].Constructor = $t),
            (o.fn[Jt].noConflict = function () {
              return (o.fn[Jt] = r), $t.jQueryInterface;
            });
        }
      });
    var He = "top",
      pe = "bottom",
      Ue = "right",
      O = "left",
      Y = [He, pe, Ue, O],
      Sn = Y.reduce(function (o, r) {
        return o.concat([r + "-start", r + "-end"]);
      }, []),
      pt = [].concat(Y, ["auto"]).reduce(function (o, r) {
        return o.concat([r, r + "-start", r + "-end"]);
      }, []),
      ri = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function Ke(o) {
      return o ? (o.nodeName || "").toLowerCase() : null;
    }
    function Be(o) {
      if ("[object Window]" !== o.toString()) {
        var r = o.ownerDocument;
        return (r && r.defaultView) || window;
      }
      return o;
    }
    function ln(o) {
      return o instanceof Be(o).Element || o instanceof Element;
    }
    function rt(o) {
      return o instanceof Be(o).HTMLElement || o instanceof HTMLElement;
    }
    var Bn = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (o) {
        var r = o.state;
        Object.keys(r.elements).forEach(function (a) {
          var t = r.styles[a] || {},
            s = r.attributes[a] || {},
            u = r.elements[a];
          rt(u) &&
            Ke(u) &&
            (Object.assign(u.style, t),
            Object.keys(s).forEach(function (h) {
              var p = s[h];
              !1 === p
                ? u.removeAttribute(h)
                : u.setAttribute(h, !0 === p ? "" : p);
            }));
        });
      },
      effect: function (o) {
        var r = o.state,
          a = {
            popper: {
              position: r.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: {
              position: "absolute",
            },
            reference: {},
          };
        return (
          Object.assign(r.elements.popper.style, a.popper),
          r.elements.arrow && Object.assign(r.elements.arrow.style, a.arrow),
          function () {
            Object.keys(r.elements).forEach(function (t) {
              var s = r.elements[t],
                u = r.attributes[t] || {},
                h = Object.keys(
                  r.styles.hasOwnProperty(t) ? r.styles[t] : a[t]
                ).reduce(function (p, b) {
                  return (p[b] = ""), p;
                }, {});
              rt(s) &&
                Ke(s) &&
                (Object.assign(s.style, h),
                Object.keys(u).forEach(function (p) {
                  s.removeAttribute(p);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function Ye(o) {
      return o.split("-")[0];
    }
    function n(o) {
      return {
        x: o.offsetLeft,
        y: o.offsetTop,
        width: o.offsetWidth,
        height: o.offsetHeight,
      };
    }
    function c(o, r) {
      var a,
        t = r.getRootNode && r.getRootNode();
      if (o.contains(r)) return !0;
      if (
        t &&
        ((a = t) instanceof Be(a).ShadowRoot || a instanceof ShadowRoot)
      ) {
        var s = r;
        do {
          if (s && o.isSameNode(s)) return !0;
          s = s.parentNode || s.host;
        } while (s);
      }
      return !1;
    }
    function l(o) {
      return Be(o).getComputedStyle(o);
    }
    function m(o) {
      return ["table", "td", "th"].indexOf(Ke(o)) >= 0;
    }
    function g(o) {
      return (
        (ln(o) ? o.ownerDocument : o.document) || window.document
      ).documentElement;
    }
    function T(o) {
      return "html" === Ke(o)
        ? o
        : o.assignedSlot || o.parentNode || o.host || g(o);
    }
    function k(o) {
      if (!rt(o) || "fixed" === l(o).position) return null;
      var r = o.offsetParent;
      if (r) {
        var a = g(r);
        if (
          "body" === Ke(r) &&
          "static" === l(r).position &&
          "static" !== l(a).position
        )
          return a;
      }
      return r;
    }
    function B(o) {
      for (var r = Be(o), a = k(o); a && m(a) && "static" === l(a).position; )
        a = k(a);
      return a && "body" === Ke(a) && "static" === l(a).position
        ? r
        : a ||
            (function (t) {
              for (
                var s = T(t);
                rt(s) && ["html", "body"].indexOf(Ke(s)) < 0;

              ) {
                var u = l(s);
                if (
                  "none" !== u.transform ||
                  "none" !== u.perspective ||
                  (u.willChange && "auto" !== u.willChange)
                )
                  return s;
                s = s.parentNode;
              }
              return null;
            })(o) ||
            r;
    }
    function M(o) {
      return ["top", "bottom"].indexOf(o) >= 0 ? "x" : "y";
    }
    function Q(o, r, a) {
      return Math.max(o, Math.min(r, a));
    }
    function ue(o) {
      return Object.assign(
        Object.assign(
          {},
          {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }
        ),
        o
      );
    }
    function X(o, r) {
      return r.reduce(function (a, t) {
        return (a[t] = o), a;
      }, {});
    }
    var J = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (o) {
          var r,
            a = o.state,
            t = o.name,
            s = a.elements.arrow,
            u = a.modifiersData.popperOffsets,
            h = Ye(a.placement),
            p = M(h),
            b = [O, Ue].indexOf(h) >= 0 ? "height" : "width";
          if (s && u) {
            var y = a.modifiersData[t + "#persistent"].padding,
              C = n(s),
              w = "y" === p ? He : O,
              P = "y" === p ? pe : Ue,
              I =
                a.rects.reference[b] +
                a.rects.reference[p] -
                u[p] -
                a.rects.popper[b],
              x = u[p] - a.rects.reference[p],
              H = B(s),
              U = H
                ? "y" === p
                  ? H.clientHeight || 0
                  : H.clientWidth || 0
                : 0,
              S = U / 2 - C[b] / 2 + (I / 2 - x / 2),
              G = Q(y[w], S, U - C[b] - y[P]);
            a.modifiersData[t] =
              (((r = {})[p] = G), (r.centerOffset = G - S), r);
          }
        },
        effect: function (o) {
          var r = o.state,
            a = o.options,
            t = o.name,
            s = a.element,
            u = void 0 === s ? "[data-popper-arrow]" : s,
            h = a.padding,
            p = void 0 === h ? 0 : h;
          null != u &&
            ("string" != typeof u ||
              (u = r.elements.popper.querySelector(u))) &&
            c(r.elements.popper, u) &&
            ((r.elements.arrow = u),
            (r.modifiersData[t + "#persistent"] = {
              padding: ue("number" != typeof p ? p : X(p, Y)),
            }));
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      oe = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
      };
    function ge(o) {
      var r,
        S,
        F,
        te,
        a = o.popper,
        t = o.popperRect,
        s = o.placement,
        u = o.offsets,
        h = o.position,
        p = o.gpuAcceleration,
        b = o.adaptive,
        y =
          ((F = (S = u).y),
          (te = window.devicePixelRatio || 1),
          {
            x: Math.round(S.x * te) / te || 0,
            y: Math.round(F * te) / te || 0,
          }),
        C = y.x,
        w = y.y,
        P = u.hasOwnProperty("x"),
        I = u.hasOwnProperty("y"),
        x = O,
        H = He,
        U = window;
      if (b) {
        var W = B(a);
        W === Be(a) && (W = g(a)),
          s === He &&
            ((H = pe), (w -= W.clientHeight - t.height), (w *= p ? 1 : -1)),
          s === O &&
            ((x = Ue), (C -= W.clientWidth - t.width), (C *= p ? 1 : -1));
      }
      var L,
        q = Object.assign(
          {
            position: h,
          },
          b && oe
        );
      return Object.assign(
        Object.assign({}, q),
        {},
        p
          ? (((L = {})[H] = I ? "0" : ""),
            (L[x] = P ? "0" : ""),
            (L.transform =
              (U.devicePixelRatio || 1) < 2
                ? "translate(" + C + "px, " + w + "px)"
                : "translate3d(" + C + "px, " + w + "px, 0)"),
            L)
          : (((r = {})[H] = I ? w + "px" : ""),
            (r[x] = P ? C + "px" : ""),
            (r.transform = ""),
            r)
      );
    }
    var K = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (o) {
          var r = o.state,
            a = o.options,
            t = a.gpuAcceleration,
            s = void 0 === t || t,
            u = a.adaptive,
            h = void 0 === u || u,
            p = {
              placement: Ye(r.placement),
              popper: r.elements.popper,
              popperRect: r.rects.popper,
              gpuAcceleration: s,
            };
          null != r.modifiersData.popperOffsets &&
            (r.styles.popper = Object.assign(
              Object.assign({}, r.styles.popper),
              ge(
                Object.assign(
                  Object.assign({}, p),
                  {},
                  {
                    offsets: r.modifiersData.popperOffsets,
                    position: r.options.strategy,
                    adaptive: h,
                  }
                )
              )
            )),
            null != r.modifiersData.arrow &&
              (r.styles.arrow = Object.assign(
                Object.assign({}, r.styles.arrow),
                ge(
                  Object.assign(
                    Object.assign({}, p),
                    {},
                    {
                      offsets: r.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                    }
                  )
                )
              )),
            (r.attributes.popper = Object.assign(
              Object.assign({}, r.attributes.popper),
              {},
              {
                "data-popper-placement": r.placement,
              }
            ));
        },
        data: {},
      },
      ye = {
        passive: !0,
      },
      Ce = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (o) {
          var r = o.state,
            a = o.instance,
            t = o.options,
            s = t.scroll,
            u = void 0 === s || s,
            h = t.resize,
            p = void 0 === h || h,
            b = Be(r.elements.popper),
            y = [].concat(r.scrollParents.reference, r.scrollParents.popper);
          return (
            u &&
              y.forEach(function (C) {
                C.addEventListener("scroll", a.update, ye);
              }),
            p && b.addEventListener("resize", a.update, ye),
            function () {
              u &&
                y.forEach(function (C) {
                  C.removeEventListener("scroll", a.update, ye);
                }),
                p && b.removeEventListener("resize", a.update, ye);
            }
          );
        },
        data: {},
      },
      ke = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
      };
    function ie(o) {
      return o.replace(/left|right|bottom|top/g, function (r) {
        return ke[r];
      });
    }
    var ot = {
      start: "end",
      end: "start",
    };
    function Le(o) {
      return o.replace(/start|end/g, function (r) {
        return ot[r];
      });
    }
    function qe(o) {
      var r = o.getBoundingClientRect();
      return {
        width: r.width,
        height: r.height,
        top: r.top,
        right: r.right,
        bottom: r.bottom,
        left: r.left,
        x: r.left,
        y: r.top,
      };
    }
    function gt(o) {
      var r = Be(o);
      return {
        scrollLeft: r.pageXOffset,
        scrollTop: r.pageYOffset,
      };
    }
    function mt(o) {
      return qe(g(o)).left + gt(o).scrollLeft;
    }
    function ze(o) {
      var r = l(o);
      return /auto|scroll|overlay|hidden/.test(
        r.overflow + r.overflowY + r.overflowX
      );
    }
    function Zt(o, r) {
      void 0 === r && (r = []);
      var a = (function p(b) {
          return ["html", "body", "#document"].indexOf(Ke(b)) >= 0
            ? b.ownerDocument.body
            : rt(b) && ze(b)
            ? b
            : p(T(b));
        })(o),
        t = "body" === Ke(a),
        s = Be(a),
        u = t ? [s].concat(s.visualViewport || [], ze(a) ? a : []) : a,
        h = r.concat(u);
      return t ? h : h.concat(Zt(T(u)));
    }
    function Dt(o) {
      return Object.assign(
        Object.assign({}, o),
        {},
        {
          left: o.x,
          top: o.y,
          right: o.x + o.width,
          bottom: o.y + o.height,
        }
      );
    }
    function Nn(o, r) {
      return "viewport" === r
        ? Dt(
            ((t = Be((a = o))),
            (h = (s = g(a)).clientWidth),
            (p = s.clientHeight),
            (b = 0),
            (y = 0),
            (u = t.visualViewport) &&
              ((h = u.width),
              (p = u.height),
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                ((b = u.offsetLeft), (y = u.offsetTop))),
            {
              width: h,
              height: p,
              x: b + mt(a),
              y,
            })
          )
        : rt(r)
        ? (function (a) {
            var t = qe(a);
            return (
              (t.top = t.top + a.clientTop),
              (t.left = t.left + a.clientLeft),
              (t.bottom = t.top + a.clientHeight),
              (t.right = t.left + a.clientWidth),
              (t.width = a.clientWidth),
              (t.height = a.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(r)
        : Dt(
            (function (a) {
              var t = g(a),
                s = gt(a),
                u = a.ownerDocument.body,
                h = Math.max(
                  t.scrollWidth,
                  t.clientWidth,
                  u ? u.scrollWidth : 0,
                  u ? u.clientWidth : 0
                ),
                p = Math.max(
                  t.scrollHeight,
                  t.clientHeight,
                  u ? u.scrollHeight : 0,
                  u ? u.clientHeight : 0
                ),
                b = -s.scrollLeft + mt(a),
                y = -s.scrollTop;
              return (
                "rtl" === l(u || t).direction &&
                  (b += Math.max(t.clientWidth, u ? u.clientWidth : 0) - h),
                {
                  width: h,
                  height: p,
                  x: b,
                  y,
                }
              );
            })(g(o))
          );
      var a, t, s, u, h, p, b, y;
    }
    function en(o) {
      return o.split("-")[1];
    }
    function me(o) {
      var r,
        a = o.reference,
        t = o.element,
        s = o.placement,
        u = s ? Ye(s) : null,
        h = s ? en(s) : null,
        p = a.x + a.width / 2 - t.width / 2,
        b = a.y + a.height / 2 - t.height / 2;
      switch (u) {
        case He:
          r = {
            x: p,
            y: a.y - t.height,
          };
          break;
        case pe:
          r = {
            x: p,
            y: a.y + a.height,
          };
          break;
        case Ue:
          r = {
            x: a.x + a.width,
            y: b,
          };
          break;
        case O:
          r = {
            x: a.x - t.width,
            y: b,
          };
          break;
        default:
          r = {
            x: a.x,
            y: a.y,
          };
      }
      var y = u ? M(u) : null;
      if (null != y) {
        var C = "y" === y ? "height" : "width";
        switch (h) {
          case "start":
            r[y] = Math.floor(r[y]) - Math.floor(a[C] / 2 - t[C] / 2);
            break;
          case "end":
            r[y] = Math.floor(r[y]) + Math.ceil(a[C] / 2 - t[C] / 2);
        }
      }
      return r;
    }
    function vt(o, r) {
      void 0 === r && (r = {});
      var t = r.placement,
        s = void 0 === t ? o.placement : t,
        u = r.boundary,
        h = void 0 === u ? "clippingParents" : u,
        p = r.rootBoundary,
        b = void 0 === p ? "viewport" : p,
        y = r.elementContext,
        C = void 0 === y ? "popper" : y,
        w = r.altBoundary,
        P = void 0 !== w && w,
        I = r.padding,
        x = void 0 === I ? 0 : I,
        H = ue("number" != typeof x ? x : X(x, Y)),
        W = o.elements.reference,
        L = o.rects.popper,
        q = o.elements[P ? ("popper" === C ? "reference" : "popper") : C],
        S = (function oi(o, r, a) {
          var p,
            b,
            y,
            t =
              "clippingParents" === r
                ? ((b = Zt(T((p = o)))),
                  ln(
                    (y =
                      ["absolute", "fixed"].indexOf(l(p).position) >= 0 && rt(p)
                        ? B(p)
                        : p)
                  )
                    ? b.filter(function (C) {
                        return ln(C) && c(C, y) && "body" !== Ke(C);
                      })
                    : [])
                : [].concat(r),
            s = [].concat(t, [a]),
            h = s.reduce(function (p, b) {
              var y = Nn(o, b);
              return (
                (p.top = Math.max(y.top, p.top)),
                (p.right = Math.min(y.right, p.right)),
                (p.bottom = Math.min(y.bottom, p.bottom)),
                (p.left = Math.max(y.left, p.left)),
                p
              );
            }, Nn(o, s[0]));
          return (
            (h.width = h.right - h.left),
            (h.height = h.bottom - h.top),
            (h.x = h.left),
            (h.y = h.top),
            h
          );
        })(ln(q) ? q : q.contextElement || g(o.elements.popper), h, b),
        G = qe(W),
        F = me({
          reference: G,
          element: L,
          strategy: "absolute",
          placement: s,
        }),
        te = Dt(Object.assign(Object.assign({}, L), F)),
        se = "popper" === C ? te : G,
        ce = {
          top: S.top - se.top + H.top,
          bottom: se.bottom - S.bottom + H.bottom,
          left: S.left - se.left + H.left,
          right: se.right - S.right + H.right,
        },
        Ae = o.modifiersData.offset;
      if ("popper" === C && Ae) {
        var yt = Ae[s];
        Object.keys(ce).forEach(function ($e) {
          var Oe = [Ue, pe].indexOf($e) >= 0 ? 1 : -1,
            It = [He, pe].indexOf($e) >= 0 ? "y" : "x";
          ce[$e] += yt[It] * Oe;
        });
      }
      return ce;
    }
    var jt = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (o) {
        var r = o.state,
          a = o.options,
          t = o.name;
        if (!r.modifiersData[t]._skip) {
          for (
            var s = a.mainAxis,
              u = void 0 === s || s,
              h = a.altAxis,
              p = void 0 === h || h,
              b = a.fallbackPlacements,
              y = a.padding,
              C = a.boundary,
              w = a.rootBoundary,
              P = a.altBoundary,
              I = a.flipVariations,
              x = void 0 === I || I,
              H = a.allowedAutoPlacements,
              U = r.options.placement,
              W = Ye(U),
              L =
                b ||
                (W !== U && x
                  ? (function (Ze) {
                      if ("auto" === Ye(Ze)) return [];
                      var Fe = ie(Ze);
                      return [Le(Ze), Fe, Le(Fe)];
                    })(U)
                  : [ie(U)]),
              q = [U].concat(L).reduce(function (Ze, Fe) {
                return Ze.concat(
                  "auto" === Ye(Fe)
                    ? (function Si(o, r) {
                        void 0 === r && (r = {});
                        var s = r.boundary,
                          u = r.rootBoundary,
                          h = r.padding,
                          p = r.flipVariations,
                          b = r.allowedAutoPlacements,
                          y = void 0 === b ? pt : b,
                          C = en(r.placement),
                          w = C
                            ? p
                              ? Sn
                              : Sn.filter(function (x) {
                                  return en(x) === C;
                                })
                            : Y,
                          P = w.filter(function (x) {
                            return y.indexOf(x) >= 0;
                          });
                        0 === P.length && (P = w);
                        var I = P.reduce(function (x, H) {
                          return (
                            (x[H] = vt(o, {
                              placement: H,
                              boundary: s,
                              rootBoundary: u,
                              padding: h,
                            })[Ye(H)]),
                            x
                          );
                        }, {});
                        return Object.keys(I).sort(function (x, H) {
                          return I[x] - I[H];
                        });
                      })(r, {
                        placement: Fe,
                        boundary: C,
                        rootBoundary: w,
                        padding: y,
                        flipVariations: x,
                        allowedAutoPlacements: H,
                      })
                    : Fe
                );
              }, []),
              S = r.rects.reference,
              G = r.rects.popper,
              F = new Map(),
              te = !0,
              se = q[0],
              ce = 0;
            ce < q.length;
            ce++
          ) {
            var Ae = q[ce],
              yt = Ye(Ae),
              $e = "start" === en(Ae),
              Oe = [He, pe].indexOf(yt) >= 0,
              It = Oe ? "width" : "height",
              Wt = vt(r, {
                placement: Ae,
                boundary: C,
                rootBoundary: w,
                altBoundary: P,
                padding: y,
              }),
              Mt = Oe ? ($e ? Ue : O) : $e ? pe : He;
            S[It] > G[It] && (Mt = ie(Mt));
            var yn = ie(Mt),
              ut = [];
            if (
              (u && ut.push(Wt[yt] <= 0),
              p && ut.push(Wt[Mt] <= 0, Wt[yn] <= 0),
              ut.every(function (Ze) {
                return Ze;
              }))
            ) {
              (se = Ae), (te = !1);
              break;
            }
            F.set(Ae, ut);
          }
          if (te)
            for (
              var Yn = function (Ze) {
                  var Fe = q.find(function (Ft) {
                    var Se = F.get(Ft);
                    if (Se)
                      return Se.slice(0, Ze).every(function (Ge) {
                        return Ge;
                      });
                  });
                  if (Fe) return (se = Fe), "break";
                },
                we = x ? 3 : 1;
              we > 0 && "break" !== Yn(we);
              we--
            );
          r.placement !== se &&
            ((r.modifiersData[t]._skip = !0),
            (r.placement = se),
            (r.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1,
      },
    };
    function hn(o, r, a) {
      return (
        void 0 === a &&
          (a = {
            x: 0,
            y: 0,
          }),
        {
          top: o.top - r.height - a.y,
          right: o.right - r.width + a.x,
          bottom: o.bottom - r.height + a.y,
          left: o.left - r.width - a.x,
        }
      );
    }
    function qn(o) {
      return [He, Ue, pe, O].some(function (r) {
        return o[r] >= 0;
      });
    }
    var bt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (o) {
          var r = o.state,
            a = o.name,
            t = r.rects.reference,
            s = r.rects.popper,
            u = r.modifiersData.preventOverflow,
            h = vt(r, {
              elementContext: "reference",
            }),
            p = vt(r, {
              altBoundary: !0,
            }),
            b = hn(h, t),
            y = hn(p, s, u),
            C = qn(b),
            w = qn(y);
          (r.modifiersData[a] = {
            referenceClippingOffsets: b,
            popperEscapeOffsets: y,
            isReferenceHidden: C,
            hasPopperEscaped: w,
          }),
            (r.attributes.popper = Object.assign(
              Object.assign({}, r.attributes.popper),
              {},
              {
                "data-popper-reference-hidden": C,
                "data-popper-escaped": w,
              }
            ));
        },
      },
      Pt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (o) {
          var r = o.state,
            t = o.name,
            s = o.options.offset,
            u = void 0 === s ? [0, 0] : s,
            h = pt.reduce(function (C, w) {
              return (
                (C[w] =
                  ((I = r.rects),
                  (x = u),
                  (H = Ye((P = w))),
                  (U = [O, He].indexOf(H) >= 0 ? -1 : 1),
                  (L =
                    (L = (W =
                      "function" == typeof x
                        ? x(
                            Object.assign(
                              Object.assign({}, I),
                              {},
                              {
                                placement: P,
                              }
                            )
                          )
                        : x)[0]) || 0),
                  (q = ((q = W[1]) || 0) * U),
                  [O, Ue].indexOf(H) >= 0
                    ? {
                        x: q,
                        y: L,
                      }
                    : {
                        x: L,
                        y: q,
                      })),
                C
              );
              var P, I, x, H, U, W, L, q;
            }, {}),
            p = h[r.placement],
            y = p.y;
          null != r.modifiersData.popperOffsets &&
            ((r.modifiersData.popperOffsets.x += p.x),
            (r.modifiersData.popperOffsets.y += y)),
            (r.modifiersData[t] = h);
        },
      },
      At = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (o) {
          var r = o.state;
          r.modifiersData[o.name] = me({
            reference: r.rects.reference,
            element: r.rects.popper,
            strategy: "absolute",
            placement: r.placement,
          });
        },
        data: {},
      },
      Vn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (o) {
          var r = o.state,
            a = o.options,
            t = o.name,
            s = a.mainAxis,
            u = void 0 === s || s,
            h = a.altAxis,
            p = void 0 !== h && h,
            P = a.tether,
            I = void 0 === P || P,
            x = a.tetherOffset,
            H = void 0 === x ? 0 : x,
            U = vt(r, {
              boundary: a.boundary,
              rootBoundary: a.rootBoundary,
              padding: a.padding,
              altBoundary: a.altBoundary,
            }),
            W = Ye(r.placement),
            L = en(r.placement),
            q = !L,
            S = M(W),
            G = "x" === S ? "y" : "x",
            F = r.modifiersData.popperOffsets,
            te = r.rects.reference,
            se = r.rects.popper,
            ce =
              "function" == typeof H
                ? H(
                    Object.assign(
                      Object.assign({}, r.rects),
                      {},
                      {
                        placement: r.placement,
                      }
                    )
                  )
                : H,
            Ae = {
              x: 0,
              y: 0,
            };
          if (F) {
            if (u) {
              var yt = "y" === S ? He : O,
                $e = "y" === S ? pe : Ue,
                Oe = "y" === S ? "height" : "width",
                It = F[S],
                Wt = F[S] + U[yt],
                Mt = F[S] - U[$e],
                yn = I ? -se[Oe] / 2 : 0,
                ut = "start" === L ? te[Oe] : se[Oe],
                Yn = "start" === L ? -se[Oe] : -te[Oe],
                we = r.elements.arrow,
                Ze =
                  I && we
                    ? n(we)
                    : {
                        width: 0,
                        height: 0,
                      },
                Fe = r.modifiersData["arrow#persistent"]
                  ? r.modifiersData["arrow#persistent"].padding
                  : {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    },
                Ft = Fe[yt],
                Se = Fe[$e],
                Ge = Q(0, te[Oe], Ze[Oe]),
                zn = q ? te[Oe] / 2 - yn - Ge - Ft - ce : ut - Ge - Ft - ce,
                Xn = q ? -te[Oe] / 2 + yn + Ge + Se + ce : Yn + Ge + Se + ce,
                wn = r.elements.arrow && B(r.elements.arrow),
                Jn = r.modifiersData.offset
                  ? r.modifiersData.offset[r.placement][S]
                  : 0,
                wi = F[S] + Xn - Jn,
                $n = Q(
                  I
                    ? Math.min(
                        Wt,
                        F[S] +
                          zn -
                          Jn -
                          (wn
                            ? "y" === S
                              ? wn.clientTop || 0
                              : wn.clientLeft || 0
                            : 0)
                      )
                    : Wt,
                  It,
                  I ? Math.max(Mt, wi) : Mt
                );
              (F[S] = $n), (Ae[S] = $n - It);
            }
            if (p) {
              var Rn = F[G],
                di = Q(
                  Rn + U["x" === S ? He : O],
                  Rn,
                  Rn - U["x" === S ? pe : Ue]
                );
              (F[G] = di), (Ae[G] = di - Rn);
            }
            r.modifiersData[t] = Ae;
          }
        },
        requiresIfExists: ["offset"],
      };
    function xn(o, r, a) {
      void 0 === a && (a = !1);
      var t,
        s,
        u = g(r),
        h = qe(o),
        p = rt(r),
        b = {
          scrollLeft: 0,
          scrollTop: 0,
        },
        y = {
          x: 0,
          y: 0,
        };
      return (
        (p || (!p && !a)) &&
          (("body" !== Ke(r) || ze(u)) &&
            (b =
              (t = r) !== Be(t) && rt(t)
                ? {
                    scrollLeft: (s = t).scrollLeft,
                    scrollTop: s.scrollTop,
                  }
                : gt(t)),
          rt(r)
            ? (((y = qe(r)).x += r.clientLeft), (y.y += r.clientTop))
            : u && (y.x = mt(u))),
        {
          x: h.left + b.scrollLeft - y.x,
          y: h.top + b.scrollTop - y.y,
          width: h.width,
          height: h.height,
        }
      );
    }
    var In = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute",
    };
    function _e() {
      for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++)
        r[a] = arguments[a];
      return !r.some(function (t) {
        return !(t && "function" == typeof t.getBoundingClientRect);
      });
    }
    function he(o) {
      void 0 === o && (o = {});
      var a = o.defaultModifiers,
        t = void 0 === a ? [] : a,
        s = o.defaultOptions,
        u = void 0 === s ? In : s;
      return function (h, p, b) {
        void 0 === b && (b = u);
        var y,
          C,
          w = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign(Object.assign({}, In), u),
            modifiersData: {},
            elements: {
              reference: h,
              popper: p,
            },
            attributes: {},
            styles: {},
          },
          P = [],
          I = !1,
          x = {
            state: w,
            setOptions: function (U) {
              H(),
                (w.options = Object.assign(
                  Object.assign(Object.assign({}, u), w.options),
                  U
                )),
                (w.scrollParents = {
                  reference: ln(h)
                    ? Zt(h)
                    : h.contextElement
                    ? Zt(h.contextElement)
                    : [],
                  popper: Zt(p),
                });
              var W,
                L,
                S,
                G,
                q =
                  ((W = [].concat(t, w.options.modifiers)),
                  (L = W.reduce(function (S, G) {
                    var F = S[G.name];
                    return (
                      (S[G.name] = F
                        ? Object.assign(
                            Object.assign(Object.assign({}, F), G),
                            {},
                            {
                              options: Object.assign(
                                Object.assign({}, F.options),
                                G.options
                              ),
                              data: Object.assign(
                                Object.assign({}, F.data),
                                G.data
                              ),
                            }
                          )
                        : G),
                      S
                    );
                  }, {})),
                  (S = Object.keys(L).map(function (S) {
                    return L[S];
                  })),
                  (G = (function dn(o) {
                    var r = new Map(),
                      a = new Set(),
                      t = [];
                    return (
                      o.forEach(function (s) {
                        r.set(s.name, s);
                      }),
                      o.forEach(function (s) {
                        a.has(s.name) ||
                          (function u(h) {
                            a.add(h.name),
                              []
                                .concat(
                                  h.requires || [],
                                  h.requiresIfExists || []
                                )
                                .forEach(function (p) {
                                  if (!a.has(p)) {
                                    var b = r.get(p);
                                    b && u(b);
                                  }
                                }),
                              t.push(h);
                          })(s);
                      }),
                      t
                    );
                  })(S)),
                  ri.reduce(function (F, te) {
                    return F.concat(
                      G.filter(function (se) {
                        return se.phase === te;
                      })
                    );
                  }, []));
              return (
                (w.orderedModifiers = q.filter(function (S) {
                  return S.enabled;
                })),
                w.orderedModifiers.forEach(function (S) {
                  var F = S.options,
                    se = S.effect;
                  if ("function" == typeof se) {
                    var ce = se({
                      state: w,
                      name: S.name,
                      instance: x,
                      options: void 0 === F ? {} : F,
                    });
                    P.push(ce || function () {});
                  }
                }),
                x.update()
              );
            },
            forceUpdate: function () {
              if (!I) {
                var U = w.elements,
                  W = U.reference,
                  L = U.popper;
                if (_e(W, L)) {
                  (w.rects = {
                    reference: xn(W, B(L), "fixed" === w.options.strategy),
                    popper: n(L),
                  }),
                    (w.reset = !1),
                    (w.placement = w.options.placement),
                    w.orderedModifiers.forEach(function (ce) {
                      return (w.modifiersData[ce.name] = Object.assign(
                        {},
                        ce.data
                      ));
                    });
                  for (var q = 0; q < w.orderedModifiers.length; q++)
                    if (!0 !== w.reset) {
                      var S = w.orderedModifiers[q],
                        G = S.fn,
                        F = S.options;
                      "function" == typeof G &&
                        (w =
                          G({
                            state: w,
                            options: void 0 === F ? {} : F,
                            name: S.name,
                            instance: x,
                          }) || w);
                    } else (w.reset = !1), (q = -1);
                }
              }
            },
            update:
              ((y = function () {
                return new Promise(function (U) {
                  x.forceUpdate(), U(w);
                });
              }),
              function () {
                return (
                  C ||
                    (C = new Promise(function (U) {
                      Promise.resolve().then(function () {
                        (C = void 0), U(y());
                      });
                    })),
                  C
                );
              }),
            destroy: function () {
              H(), (I = !0);
            },
          };
        if (!_e(h, p)) return x;
        function H() {
          P.forEach(function (U) {
            return U();
          }),
            (P = []);
        }
        return (
          x.setOptions(b).then(function (U) {
            !I && b.onFirstUpdate && b.onFirstUpdate(U);
          }),
          x
        );
      };
    }
    var Xe = he(),
      Je = he({
        defaultModifiers: [Ce, At, K, Bn],
      }),
      De = he({
        defaultModifiers: [Ce, At, K, Bn, Pt, jt, Vn, J, bt],
      }),
      Lt = Object.freeze({
        __proto__: null,
        popperGenerator: he,
        detectOverflow: vt,
        createPopperBase: Xe,
        createPopper: De,
        createPopperLite: Je,
        top: He,
        bottom: pe,
        right: Ue,
        left: O,
        auto: "auto",
        basePlacements: Y,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: Sn,
        placements: pt,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: ri,
        applyStyles: Bn,
        arrow: J,
        computeStyles: K,
        eventListeners: Ce,
        flip: jt,
        hide: bt,
        offset: Pt,
        popperOffsets: At,
        preventOverflow: Vn,
      }),
      Rt = "dropdown",
      Wn = new RegExp("ArrowUp|ArrowDown|Escape"),
      Mn = Ie ? "top-end" : "top-start",
      si = Ie ? "top-start" : "top-end",
      pn = Ie ? "bottom-end" : "bottom-start",
      ai = Ie ? "bottom-start" : "bottom-end",
      Fn = Ie ? "left-start" : "right-start",
      Gn = Ie ? "right-start" : "left-start",
      gn = {
        offset: 0,
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      ui = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      fe = (function (o) {
        function r(t, s) {
          var u;
          return (
            ((u = o.call(this, t) || this)._popper = null),
            (u._config = u._getConfig(s)),
            (u._menu = u._getMenuElement()),
            (u._inNavbar = u._detectNavbar()),
            u._addEventListeners(),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.toggle = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled")
            ) {
              var t = this._element.classList.contains("show");
              r.clearMenus(), t || this.show();
            }
          }),
          (a.show = function () {
            if (
              !(
                this._element.disabled ||
                this._element.classList.contains("disabled") ||
                this._menu.classList.contains("show")
              )
            ) {
              var t = r.getParentFromElement(this._element),
                s = {
                  relatedTarget: this._element,
                };
              if (
                !_.trigger(this._element, "show.bs.dropdown", s)
                  .defaultPrevented
              ) {
                if (!this._inNavbar) {
                  if (void 0 === Lt)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  var u = this._element;
                  "parent" === this._config.reference
                    ? (u = t)
                    : Qe(this._config.reference) &&
                      ((u = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (u = this._config.reference[0])),
                    (this._popper = De(u, this._menu, this._getPopperConfig()));
                }
                var h;
                "ontouchstart" in document.documentElement &&
                  !t.closest(".navbar-nav") &&
                  (h = []).concat
                    .apply(h, document.body.children)
                    .forEach(function (p) {
                      return _.on(p, "mouseover", null, function () {});
                    }),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.toggle("show"),
                  this._element.classList.toggle("show"),
                  _.trigger(t, "shown.bs.dropdown", s);
              }
            }
          }),
          (a.hide = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled") &&
              this._menu.classList.contains("show")
            ) {
              var t = r.getParentFromElement(this._element),
                s = {
                  relatedTarget: this._element,
                };
              _.trigger(t, "hide.bs.dropdown", s).defaultPrevented ||
                (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                _.trigger(t, "hidden.bs.dropdown", s));
            }
          }),
          (a.dispose = function () {
            o.prototype.dispose.call(this),
              _.off(this._element, ".bs.dropdown"),
              (this._menu = null),
              this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (a.update = function () {
            (this._inNavbar = this._detectNavbar()),
              this._popper && this._popper.update();
          }),
          (a._addEventListeners = function () {
            var t = this;
            _.on(this._element, "click.bs.dropdown", function (s) {
              s.preventDefault(), s.stopPropagation(), t.toggle();
            });
          }),
          (a._getConfig = function (t) {
            return (
              (t = ee(
                {},
                this.constructor.Default,
                ae.getDataAttributes(this._element),
                t
              )),
              tt(Rt, t, this.constructor.DefaultType),
              t
            );
          }),
          (a._getMenuElement = function () {
            return j.next(this._element, ".dropdown-menu")[0];
          }),
          (a._getPlacement = function () {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend")) return Fn;
            if (t.classList.contains("dropstart")) return Gn;
            var s =
              "end" ===
              getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim();
            return t.classList.contains("dropup") ? (s ? si : Mn) : s ? ai : pn;
          }),
          (a._detectNavbar = function () {
            return null !== this._element.closest(".navbar");
          }),
          (a._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: [
                {
                  name: "preventOverflow",
                  options: {
                    altBoundary: this._config.flip,
                    rootBoundary: this._config.boundary,
                  },
                },
              ],
            };
            return (
              "static" === this._config.display &&
                (t.modifiers = [
                  {
                    name: "applyStyles",
                    enabled: !1,
                  },
                ]),
              ee({}, t, this._config.popperConfig)
            );
          }),
          (r.dropdownInterface = function (t, s) {
            var u = ne(t, "bs.dropdown");
            if (
              (u || (u = new r(t, "object" == typeof s ? s : null)),
              "string" == typeof s)
            ) {
              if (void 0 === u[s])
                throw new TypeError('No method named "' + s + '"');
              u[s]();
            }
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              r.dropdownInterface(this, t);
            });
          }),
          (r.clearMenus = function (t) {
            if (
              !t ||
              (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
            )
              for (
                var s = j.find('[data-bs-toggle="dropdown"]'),
                  u = 0,
                  h = s.length;
                u < h;
                u++
              ) {
                var p = r.getParentFromElement(s[u]),
                  b = ne(s[u], "bs.dropdown"),
                  y = {
                    relatedTarget: s[u],
                  };
                if ((t && "click" === t.type && (y.clickEvent = t), b)) {
                  var w,
                    C = b._menu;
                  !s[u].classList.contains("show") ||
                    (t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && "Tab" === t.key)) &&
                      C.contains(t.target)) ||
                    _.trigger(p, "hide.bs.dropdown", y).defaultPrevented ||
                    ("ontouchstart" in document.documentElement &&
                      (w = []).concat
                        .apply(w, document.body.children)
                        .forEach(function (P) {
                          return _.off(P, "mouseover", null, function () {});
                        }),
                    s[u].setAttribute("aria-expanded", "false"),
                    b._popper && b._popper.destroy(),
                    C.classList.remove("show"),
                    s[u].classList.remove("show"),
                    _.trigger(p, "hidden.bs.dropdown", y));
                }
              }
          }),
          (r.getParentFromElement = function (t) {
            return Tt(t) || t.parentNode;
          }),
          (r.dataApiKeydownHandler = function (t) {
            if (
              !(/input|textarea/i.test(t.target.tagName)
                ? "Space" === t.key ||
                  ("Escape" !== t.key &&
                    (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                      t.target.closest(".dropdown-menu")))
                : !Wn.test(t.key)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !this.classList.contains("disabled"))
            ) {
              var s = r.getParentFromElement(this),
                u = this.classList.contains("show");
              if ("Escape" === t.key)
                return (
                  (this.matches('[data-bs-toggle="dropdown"]')
                    ? this
                    : j.prev(this, '[data-bs-toggle="dropdown"]')[0]
                  ).focus(),
                  void r.clearMenus()
                );
              if (u && "Space" !== t.key) {
                var h = j
                  .find(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    s
                  )
                  .filter(kn);
                if (h.length) {
                  var p = h.indexOf(t.target);
                  "ArrowUp" === t.key && p > 0 && p--,
                    "ArrowDown" === t.key && p < h.length - 1 && p++,
                    h[(p = -1 === p ? 0 : p)].focus();
                }
              } else r.clearMenus();
            }
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return gn;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ui;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.dropdown";
              },
            },
          ]),
          r
        );
      })(nt);
    _.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      fe.dataApiKeydownHandler
    ),
      _.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        fe.dataApiKeydownHandler
      ),
      _.on(document, "click.bs.dropdown.data-api", fe.clearMenus),
      _.on(document, "keyup.bs.dropdown.data-api", fe.clearMenus),
      _.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (o) {
          o.preventDefault(),
            o.stopPropagation(),
            fe.dropdownInterface(this, "toggle");
        }
      ),
      _.on(
        document,
        "click.bs.dropdown.data-api",
        ".dropdown form",
        function (o) {
          return o.stopPropagation();
        }
      ),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn[Rt];
          (o.fn[Rt] = fe.jQueryInterface),
            (o.fn[Rt].Constructor = fe),
            (o.fn[Rt].noConflict = function () {
              return (o.fn[Rt] = r), fe.jQueryInterface;
            });
        }
      });
    var mn = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
      },
      Dn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      },
      Ot = (function (o) {
        function r(t, s) {
          var u;
          return (
            ((u = o.call(this, t) || this)._config = u._getConfig(s)),
            (u._dialog = j.findOne(".modal-dialog", t)),
            (u._backdrop = null),
            (u._isShown = !1),
            (u._isBodyOverflowing = !1),
            (u._ignoreBackdropClick = !1),
            (u._isTransitioning = !1),
            (u._scrollbarWidth = 0),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (a.show = function (t) {
            var s = this;
            if (!this._isShown && !this._isTransitioning) {
              this._element.classList.contains("fade") &&
                (this._isTransitioning = !0);
              var u = _.trigger(this._element, "show.bs.modal", {
                relatedTarget: t,
              });
              this._isShown ||
                u.defaultPrevented ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                _.on(
                  this._element,
                  "click.dismiss.bs.modal",
                  '[data-bs-dismiss="modal"]',
                  function (h) {
                    return s.hide(h);
                  }
                ),
                _.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
                  _.one(s._element, "mouseup.dismiss.bs.modal", function (h) {
                    h.target === s._element && (s._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return s._showElement(t);
                }));
            }
          }),
          (a.hide = function (t) {
            var s = this;
            if (
              (t && t.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                !_.trigger(this._element, "hide.bs.modal").defaultPrevented)
            ) {
              this._isShown = !1;
              var u = this._element.classList.contains("fade");
              if (
                (u && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                _.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                _.off(this._element, "click.dismiss.bs.modal"),
                _.off(this._dialog, "mousedown.dismiss.bs.modal"),
                u)
              ) {
                var h = Re(this._element);
                _.one(this._element, "transitionend", function (p) {
                  return s._hideModal(p);
                }),
                  $(this._element, h);
              } else this._hideModal();
            }
          }),
          (a.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return _.off(t, ".bs.modal");
            }),
              o.prototype.dispose.call(this),
              _.off(document, "focusin.bs.modal"),
              (this._config = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (a.handleUpdate = function () {
            this._adjustDialog();
          }),
          (a._getConfig = function (t) {
            return (t = ee({}, mn, t)), tt("modal", t, Dn), t;
          }),
          (a._showElement = function (t) {
            var s = this,
              u = this._element.classList.contains("fade"),
              h = j.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0),
              h && (h.scrollTop = 0),
              u && Qt(this._element),
              this._element.classList.add("show"),
              this._config.focus && this._enforceFocus();
            var p = function () {
              s._config.focus && s._element.focus(),
                (s._isTransitioning = !1),
                _.trigger(s._element, "shown.bs.modal", {
                  relatedTarget: t,
                });
            };
            if (u) {
              var b = Re(this._dialog);
              _.one(this._dialog, "transitionend", p), $(this._dialog, b);
            } else p();
          }),
          (a._enforceFocus = function () {
            var t = this;
            _.off(document, "focusin.bs.modal"),
              _.on(document, "focusin.bs.modal", function (s) {
                document === s.target ||
                  t._element === s.target ||
                  t._element.contains(s.target) ||
                  t._element.focus();
              });
          }),
          (a._setEscapeEvent = function () {
            var t = this;
            this._isShown
              ? _.on(this._element, "keydown.dismiss.bs.modal", function (s) {
                  t._config.keyboard && "Escape" === s.key
                    ? (s.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      "Escape" !== s.key ||
                      t._triggerBackdropTransition();
                })
              : _.off(this._element, "keydown.dismiss.bs.modal");
          }),
          (a._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? _.on(window, "resize.bs.modal", function () {
                  return t._adjustDialog();
                })
              : _.off(window, "resize.bs.modal");
          }),
          (a._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                document.body.classList.remove("modal-open"),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  _.trigger(t._element, "hidden.bs.modal");
              });
          }),
          (a._removeBackdrop = function () {
            this._backdrop.parentNode.removeChild(this._backdrop),
              (this._backdrop = null);
          }),
          (a._showBackdrop = function (t) {
            var s = this,
              u = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                u && this._backdrop.classList.add(u),
                document.body.appendChild(this._backdrop),
                _.on(this._element, "click.dismiss.bs.modal", function (y) {
                  s._ignoreBackdropClick
                    ? (s._ignoreBackdropClick = !1)
                    : y.target === y.currentTarget &&
                      ("static" === s._config.backdrop
                        ? s._triggerBackdropTransition()
                        : s.hide());
                }),
                u && Qt(this._backdrop),
                this._backdrop.classList.add("show"),
                !u)
              )
                return void t();
              var h = Re(this._backdrop);
              _.one(this._backdrop, "transitionend", t), $(this._backdrop, h);
            } else if (!this._isShown && this._backdrop) {
              this._backdrop.classList.remove("show");
              var p = function () {
                s._removeBackdrop(), t();
              };
              if (this._element.classList.contains("fade")) {
                var b = Re(this._backdrop);
                _.one(this._backdrop, "transitionend", p), $(this._backdrop, b);
              } else p();
            } else t();
          }),
          (a._triggerBackdropTransition = function () {
            var t = this;
            if (
              !_.trigger(this._element, "hidePrevented.bs.modal")
                .defaultPrevented
            ) {
              var s =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              s || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
              var u = Re(this._dialog);
              _.off(this._element, "transitionend"),
                _.one(this._element, "transitionend", function () {
                  t._element.classList.remove("modal-static"),
                    s ||
                      (_.one(t._element, "transitionend", function () {
                        t._element.style.overflowY = "";
                      }),
                      $(t._element, u));
                }),
                $(this._element, u),
                this._element.focus();
            }
          }),
          (a._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            ((!this._isBodyOverflowing && t && !Ie) ||
              (this._isBodyOverflowing && !t && Ie)) &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              ((this._isBodyOverflowing && !t && !Ie) ||
                (!this._isBodyOverflowing && t && Ie)) &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (a._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (a._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(t.left + t.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (a._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              j
                .find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")
                .forEach(function (h) {
                  var p = h.style.paddingRight,
                    b = window.getComputedStyle(h)["padding-right"];
                  ae.setDataAttribute(h, "padding-right", p),
                    (h.style.paddingRight =
                      Number.parseFloat(b) + t._scrollbarWidth + "px");
                }),
                j.find(".sticky-top").forEach(function (h) {
                  var p = h.style.marginRight,
                    b = window.getComputedStyle(h)["margin-right"];
                  ae.setDataAttribute(h, "margin-right", p),
                    (h.style.marginRight =
                      Number.parseFloat(b) - t._scrollbarWidth + "px");
                });
              var s = document.body.style.paddingRight,
                u = window.getComputedStyle(document.body)["padding-right"];
              ae.setDataAttribute(document.body, "padding-right", s),
                (document.body.style.paddingRight =
                  Number.parseFloat(u) + this._scrollbarWidth + "px");
            }
            document.body.classList.add("modal-open");
          }),
          (a._resetScrollbar = function () {
            j
              .find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")
              .forEach(function (s) {
                var u = ae.getDataAttribute(s, "padding-right");
                void 0 !== u &&
                  (ae.removeDataAttribute(s, "padding-right"),
                  (s.style.paddingRight = u));
              }),
              j.find(".sticky-top").forEach(function (s) {
                var u = ae.getDataAttribute(s, "margin-right");
                void 0 !== u &&
                  (ae.removeDataAttribute(s, "margin-right"),
                  (s.style.marginRight = u));
              });
            var t = ae.getDataAttribute(document.body, "padding-right");
            void 0 === t
              ? (document.body.style.paddingRight = "")
              : (ae.removeDataAttribute(document.body, "padding-right"),
                (document.body.style.paddingRight = t));
          }),
          (a._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var s = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), s;
          }),
          (r.jQueryInterface = function (t, s) {
            return this.each(function () {
              var u = ne(this, "bs.modal"),
                h = ee(
                  {},
                  mn,
                  ae.getDataAttributes(this),
                  "object" == typeof t && t ? t : {}
                );
              if ((u || (u = new r(this, h)), "string" == typeof t)) {
                if (void 0 === u[t])
                  throw new TypeError('No method named "' + t + '"');
                u[t](s);
              }
            });
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return mn;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.modal";
              },
            },
          ]),
          r
        );
      })(nt);
    _.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (o) {
        var r = this,
          a = Tt(this);
        ("A" !== this.tagName && "AREA" !== this.tagName) || o.preventDefault(),
          _.one(a, "show.bs.modal", function (u) {
            u.defaultPrevented ||
              _.one(a, "hidden.bs.modal", function () {
                kn(r) && r.focus();
              });
          });
        var t = ne(a, "bs.modal");
        if (!t) {
          var s = ee({}, ae.getDataAttributes(a), ae.getDataAttributes(this));
          t = new Ot(a, s);
        }
        t.show(this);
      }
    ),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn.modal;
          (o.fn.modal = Ot.jQueryInterface),
            (o.fn.modal.Constructor = Ot),
            (o.fn.modal.noConflict = function () {
              return (o.fn.modal = r), Ot.jQueryInterface;
            });
        }
      });
    var Ht = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      fi = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      St =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Ve(o, r, a) {
      var t;
      if (!o.length) return o;
      if (a && "function" == typeof a) return a(o);
      for (
        var s = new window.DOMParser().parseFromString(o, "text/html"),
          u = Object.keys(r),
          h = (t = []).concat.apply(t, s.body.querySelectorAll("*")),
          p = function (C, w) {
            var P,
              I = h[C],
              x = I.nodeName.toLowerCase();
            if (!u.includes(x)) return I.parentNode.removeChild(I), "continue";
            var H = (P = []).concat.apply(P, I.attributes),
              U = [].concat(r["*"] || [], r[x] || []);
            H.forEach(function (W) {
              (function (L, q) {
                var S = L.nodeName.toLowerCase();
                if (q.includes(S))
                  return (
                    !Ht.has(S) ||
                    !(!L.nodeValue.match(fi) && !L.nodeValue.match(St))
                  );
                for (
                  var G = q.filter(function (se) {
                      return se instanceof RegExp;
                    }),
                    F = 0,
                    te = G.length;
                  F < te;
                  F++
                )
                  if (S.match(G[F])) return !0;
                return !1;
              })(W, U) || I.removeAttribute(W.nodeName);
            });
          },
          b = 0,
          y = h.length;
        b < y;
        b++
      )
        p(b);
      return s.body.innerHTML;
    }
    var st = "tooltip",
      Nt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ut = new Set(["sanitize", "allowList", "sanitizeFn"]),
      jn = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "(null|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object)",
      },
      Bt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: Ie ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: Ie ? "right" : "left",
      },
      vn = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        container: !1,
        fallbackPlacements: null,
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      tn = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      },
      qt = (function (o) {
        function r(t, s) {
          var u;
          if (void 0 === Lt)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          return (
            ((u = o.call(this, t) || this)._isEnabled = !0),
            (u._timeout = 0),
            (u._hoverState = ""),
            (u._activeTrigger = {}),
            (u._popper = null),
            (u.config = u._getConfig(s)),
            (u.tip = null),
            u._setListeners(),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.enable = function () {
            this._isEnabled = !0;
          }),
          (a.disable = function () {
            this._isEnabled = !1;
          }),
          (a.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (a.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var s = this.constructor.DATA_KEY,
                  u = ne(t.delegateTarget, s);
                u ||
                  ((u = new this.constructor(
                    t.delegateTarget,
                    this._getDelegateConfig()
                  )),
                  Et(t.delegateTarget, s, u)),
                  (u._activeTrigger.click = !u._activeTrigger.click),
                  u._isWithActiveTrigger()
                    ? u._enter(null, u)
                    : u._leave(null, u);
              } else {
                if (this.getTipElement().classList.contains("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (a.dispose = function () {
            clearTimeout(this._timeout),
              _.off(this._element, this.constructor.EVENT_KEY),
              _.off(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.tip && this.tip.parentNode.removeChild(this.tip),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.config = null),
              (this.tip = null),
              o.prototype.dispose.call(this);
          }),
          (a.show = function () {
            var t = this;
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
              var s = _.trigger(this._element, this.constructor.Event.SHOW),
                u = (function W(L) {
                  if (!document.documentElement.attachShadow) return null;
                  if ("function" == typeof L.getRootNode) {
                    var q = L.getRootNode();
                    return q instanceof ShadowRoot ? q : null;
                  }
                  return L instanceof ShadowRoot
                    ? L
                    : L.parentNode
                    ? W(L.parentNode)
                    : null;
                })(this._element),
                h =
                  null === u
                    ? this._element.ownerDocument.documentElement.contains(
                        this._element
                      )
                    : u.contains(this._element);
              if (s.defaultPrevented || !h) return;
              var p = this.getTipElement(),
                b = E(this.constructor.NAME);
              p.setAttribute("id", b),
                this._element.setAttribute("aria-describedby", b),
                this.setContent(),
                this.config.animation && p.classList.add("fade");
              var y =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, p, this._element)
                    : this.config.placement,
                C = this._getAttachment(y);
              this._addAttachmentClass(C);
              var w = this._getContainer();
              Et(p, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) || w.appendChild(p),
                _.trigger(this._element, this.constructor.Event.INSERTED),
                (this._popper = De(this._element, p, this._getPopperConfig(C))),
                p.classList.add("show");
              var P,
                I,
                x =
                  "function" == typeof this.config.customClass
                    ? this.config.customClass()
                    : this.config.customClass;
              x && (P = p.classList).add.apply(P, x.split(" ")),
                "ontouchstart" in document.documentElement &&
                  (I = []).concat
                    .apply(I, document.body.children)
                    .forEach(function (W) {
                      _.on(W, "mouseover", function () {});
                    });
              var H = function () {
                var W = t._hoverState;
                (t._hoverState = null),
                  _.trigger(t._element, t.constructor.Event.SHOWN),
                  "out" === W && t._leave(null, t);
              };
              if (this.tip.classList.contains("fade")) {
                var U = Re(this.tip);
                _.one(this.tip, "transitionend", H), $(this.tip, U);
              } else H();
            }
          }),
          (a.hide = function () {
            var t = this;
            if (this._popper) {
              var s = this.getTipElement(),
                u = function () {
                  "show" !== t._hoverState &&
                    s.parentNode &&
                    s.parentNode.removeChild(s),
                    t._cleanTipClass(),
                    t._element.removeAttribute("aria-describedby"),
                    _.trigger(t._element, t.constructor.Event.HIDDEN),
                    t._popper && (t._popper.destroy(), (t._popper = null));
                };
              if (
                !_.trigger(this._element, this.constructor.Event.HIDE)
                  .defaultPrevented
              ) {
                var h;
                if (
                  (s.classList.remove("show"),
                  "ontouchstart" in document.documentElement &&
                    (h = []).concat
                      .apply(h, document.body.children)
                      .forEach(function (b) {
                        return _.off(b, "mouseover", Zn);
                      }),
                  (this._activeTrigger.click = !1),
                  (this._activeTrigger.focus = !1),
                  (this._activeTrigger.hover = !1),
                  this.tip.classList.contains("fade"))
                ) {
                  var p = Re(s);
                  _.one(s, "transitionend", u), $(s, p);
                } else u();
                this._hoverState = "";
              }
            }
          }),
          (a.update = function () {
            null !== this._popper && this._popper.update();
          }),
          (a.isWithContent = function () {
            return !!this.getTitle();
          }),
          (a.getTipElement = function () {
            if (this.tip) return this.tip;
            var t = document.createElement("div");
            return (
              (t.innerHTML = this.config.template),
              (this.tip = t.children[0]),
              this.tip
            );
          }),
          (a.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              j.findOne(".tooltip-inner", t),
              this.getTitle()
            ),
              t.classList.remove("fade", "show");
          }),
          (a.setElementContent = function (t, s) {
            if (null !== t)
              return "object" == typeof s && Qe(s)
                ? (s.jquery && (s = s[0]),
                  void (this.config.html
                    ? s.parentNode !== t &&
                      ((t.innerHTML = ""), t.appendChild(s))
                    : (t.textContent = s.textContent)))
                : void (this.config.html
                    ? (this.config.sanitize &&
                        (s = Ve(
                          s,
                          this.config.allowList,
                          this.config.sanitizeFn
                        )),
                      (t.innerHTML = s))
                    : (t.textContent = s));
          }),
          (a.getTitle = function () {
            var t = this._element.getAttribute("data-bs-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this._element)
                    : this.config.title),
              t
            );
          }),
          (a.updateAttachment = function (t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
          }),
          (a._getPopperConfig = function (t) {
            var s = this,
              u = {
                name: "flip",
                options: {
                  altBoundary: !0,
                },
              };
            return (
              this.config.fallbackPlacements &&
                (u.options.fallbackPlacements = this.config.fallbackPlacements),
              ee(
                {},
                {
                  placement: t,
                  modifiers: [
                    u,
                    {
                      name: "preventOverflow",
                      options: {
                        rootBoundary: this.config.boundary,
                      },
                    },
                    {
                      name: "arrow",
                      options: {
                        element: "." + this.constructor.NAME + "-arrow",
                      },
                    },
                    {
                      name: "onChange",
                      enabled: !0,
                      phase: "afterWrite",
                      fn: function (h) {
                        return s._handlePopperPlacementChange(h);
                      },
                    },
                  ],
                  onFirstUpdate: function (h) {
                    h.options.placement !== h.placement &&
                      s._handlePopperPlacementChange(h);
                  },
                },
                this.config.popperConfig
              )
            );
          }),
          (a._addAttachmentClass = function (t) {
            this.getTipElement().classList.add(
              "bs-tooltip-" + this.updateAttachment(t)
            );
          }),
          (a._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : Qe(this.config.container)
              ? this.config.container
              : j.findOne(this.config.container);
          }),
          (a._getAttachment = function (t) {
            return Bt[t.toUpperCase()];
          }),
          (a._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach(function (s) {
              if ("click" === s)
                _.on(
                  t._element,
                  t.constructor.Event.CLICK,
                  t.config.selector,
                  function (p) {
                    return t.toggle(p);
                  }
                );
              else if ("manual" !== s) {
                var h =
                  "hover" === s
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
                _.on(
                  t._element,
                  "hover" === s
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                  t.config.selector,
                  function (p) {
                    return t._enter(p);
                  }
                ),
                  _.on(t._element, h, t.config.selector, function (p) {
                    return t._leave(p);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                t._element && t.hide();
              }),
              _.on(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.config.selector
                ? (this.config = ee({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (a._fixTitle = function () {
            var t = this._element.getAttribute("title"),
              s = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== s) &&
              (this._element.setAttribute("data-bs-original-title", t || ""),
              !t ||
                this._element.getAttribute("aria-label") ||
                this._element.textContent ||
                this._element.setAttribute("aria-label", t),
              this._element.setAttribute("title", ""));
          }),
          (a._enter = function (t, s) {
            var u = this.constructor.DATA_KEY;
            (s = s || ne(t.delegateTarget, u)) ||
              ((s = new this.constructor(
                t.delegateTarget,
                this._getDelegateConfig()
              )),
              Et(t.delegateTarget, u, s)),
              t &&
                (s._activeTrigger["focusin" === t.type ? "focus" : "hover"] =
                  !0),
              s.getTipElement().classList.contains("show") ||
              "show" === s._hoverState
                ? (s._hoverState = "show")
                : (clearTimeout(s._timeout),
                  (s._hoverState = "show"),
                  s.config.delay && s.config.delay.show
                    ? (s._timeout = setTimeout(function () {
                        "show" === s._hoverState && s.show();
                      }, s.config.delay.show))
                    : s.show());
          }),
          (a._leave = function (t, s) {
            var u = this.constructor.DATA_KEY;
            (s = s || ne(t.delegateTarget, u)) ||
              ((s = new this.constructor(
                t.delegateTarget,
                this._getDelegateConfig()
              )),
              Et(t.delegateTarget, u, s)),
              t &&
                (s._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                  !1),
              s._isWithActiveTrigger() ||
                (clearTimeout(s._timeout),
                (s._hoverState = "out"),
                s.config.delay && s.config.delay.hide
                  ? (s._timeout = setTimeout(function () {
                      "out" === s._hoverState && s.hide();
                    }, s.config.delay.hide))
                  : s.hide());
          }),
          (a._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (a._getConfig = function (t) {
            var s = ae.getDataAttributes(this._element);
            return (
              Object.keys(s).forEach(function (u) {
                Ut.has(u) && delete s[u];
              }),
              t &&
                "object" == typeof t.container &&
                t.container.jquery &&
                (t.container = t.container[0]),
              "number" ==
                typeof (t = ee(
                  {},
                  this.constructor.Default,
                  s,
                  "object" == typeof t && t ? t : {}
                )).delay &&
                (t.delay = {
                  show: t.delay,
                  hide: t.delay,
                }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              tt(st, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = Ve(t.template, t.allowList, t.sanitizeFn)),
              t
            );
          }),
          (a._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var s in this.config)
                this.constructor.Default[s] !== this.config[s] &&
                  (t[s] = this.config[s]);
            return t;
          }),
          (a._cleanTipClass = function () {
            var t = this.getTipElement(),
              s = t.getAttribute("class").match(Nt);
            null !== s &&
              s.length > 0 &&
              s
                .map(function (u) {
                  return u.trim();
                })
                .forEach(function (u) {
                  return t.classList.remove(u);
                });
          }),
          (a._handlePopperPlacementChange = function (t) {
            var s = t.state;
            s &&
              ((this.tip = s.elements.popper),
              this._cleanTipClass(),
              this._addAttachmentClass(this._getAttachment(s.placement)));
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              var s = ne(this, "bs.tooltip"),
                u = "object" == typeof t && t;
              if (
                (s || !/dispose|hide/.test(t)) &&
                (s || (s = new r(this, u)), "string" == typeof t)
              ) {
                if (void 0 === s[t])
                  throw new TypeError('No method named "' + t + '"');
                s[t]();
              }
            });
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return vn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return st;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip";
              },
            },
            {
              key: "Event",
              get: function () {
                return tn;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.tooltip";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return jn;
              },
            },
          ]),
          r
        );
      })(nt);
    Te(function () {
      var o = be();
      if (o) {
        var r = o.fn[st];
        (o.fn[st] = qt.jQueryInterface),
          (o.fn[st].Constructor = qt),
          (o.fn[st].noConflict = function () {
            return (o.fn[st] = r), qt.jQueryInterface;
          });
      }
    });
    var xt = "popover",
      bn = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      nn = ee({}, qt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      yi = ee({}, qt.DefaultType, {
        content: "(string|element|function)",
      }),
      Pn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      },
      Vt = (function (o) {
        function r() {
          return o.apply(this, arguments) || this;
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (a.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              j.findOne(".popover-header", t),
              this.getTitle()
            );
            var s = this._getContent();
            "function" == typeof s && (s = s.call(this._element)),
              this.setElementContent(j.findOne(".popover-body", t), s),
              t.classList.remove("fade", "show");
          }),
          (a._addAttachmentClass = function (t) {
            this.getTipElement().classList.add(
              "bs-popover-" + this.updateAttachment(t)
            );
          }),
          (a._getContent = function () {
            return (
              this._element.getAttribute("data-bs-content") ||
              this.config.content
            );
          }),
          (a._cleanTipClass = function () {
            var t = this.getTipElement(),
              s = t.getAttribute("class").match(bn);
            null !== s &&
              s.length > 0 &&
              s
                .map(function (u) {
                  return u.trim();
                })
                .forEach(function (u) {
                  return t.classList.remove(u);
                });
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              var s = ne(this, "bs.popover"),
                u = "object" == typeof t ? t : null;
              if (
                (s || !/dispose|hide/.test(t)) &&
                (s || ((s = new r(this, u)), Et(this, "bs.popover", s)),
                "string" == typeof t)
              ) {
                if (void 0 === s[t])
                  throw new TypeError('No method named "' + t + '"');
                s[t]();
              }
            });
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return nn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return xt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover";
              },
            },
            {
              key: "Event",
              get: function () {
                return Pn;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.popover";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return yi;
              },
            },
          ]),
          r
        );
      })(qt);
    Te(function () {
      var o = be();
      if (o) {
        var r = o.fn[xt];
        (o.fn[xt] = Vt.jQueryInterface),
          (o.fn[xt].Constructor = Vt),
          (o.fn[xt].noConflict = function () {
            return (o.fn[xt] = r), Vt.jQueryInterface;
          });
      }
    });
    var at = "scrollspy",
      _n = {
        offset: 10,
        method: "auto",
        target: "",
      },
      Qn = {
        offset: "number",
        method: "string",
        target: "(string|element)",
      },
      rn = (function (o) {
        function r(t, s) {
          var u;
          return (
            ((u = o.call(this, t) || this)._scrollElement =
              "BODY" === t.tagName ? window : t),
            (u._config = u._getConfig(s)),
            (u._selector =
              u._config.target +
              " .nav-link, " +
              u._config.target +
              " .list-group-item, " +
              u._config.target +
              " .dropdown-item"),
            (u._offsets = []),
            (u._targets = []),
            (u._activeTarget = null),
            (u._scrollHeight = 0),
            _.on(u._scrollElement, "scroll.bs.scrollspy", function (h) {
              return u._process(h);
            }),
            u.refresh(),
            u._process(),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.refresh = function () {
            var t = this,
              u =
                "auto" === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? "offset"
                    : "position"
                  : this._config.method,
              h = "position" === u ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              j
                .find(this._selector)
                .map(function (p) {
                  var b = V(p),
                    y = b ? j.findOne(b) : null;
                  if (y) {
                    var C = y.getBoundingClientRect();
                    if (C.width || C.height) return [ae[u](y).top + h, b];
                  }
                  return null;
                })
                .filter(function (p) {
                  return p;
                })
                .sort(function (p, b) {
                  return p[0] - b[0];
                })
                .forEach(function (p) {
                  t._offsets.push(p[0]), t._targets.push(p[1]);
                });
          }),
          (a.dispose = function () {
            o.prototype.dispose.call(this),
              _.off(this._scrollElement, ".bs.scrollspy"),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (a._getConfig = function (t) {
            if (
              "string" !=
                typeof (t = ee({}, _n, "object" == typeof t && t ? t : {}))
                  .target &&
              Qe(t.target)
            ) {
              var s = t.target.id;
              s || ((s = E(at)), (t.target.id = s)), (t.target = "#" + s);
            }
            return tt(at, t, Qn), t;
          }),
          (a._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (a._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (a._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (a._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              s = this._getScrollHeight(),
              u = this._config.offset + s - this._getOffsetHeight();
            if ((this._scrollHeight !== s && this.refresh(), t >= u)) {
              var h = this._targets[this._targets.length - 1];
              this._activeTarget !== h && this._activate(h);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var p = this._offsets.length; p--; )
                this._activeTarget !== this._targets[p] &&
                  t >= this._offsets[p] &&
                  (void 0 === this._offsets[p + 1] ||
                    t < this._offsets[p + 1]) &&
                  this._activate(this._targets[p]);
            }
          }),
          (a._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var s = this._selector.split(",").map(function (h) {
                return (
                  h + '[data-bs-target="' + t + '"],' + h + '[href="' + t + '"]'
                );
              }),
              u = j.findOne(s.join(","));
            u.classList.contains("dropdown-item")
              ? (j
                  .findOne(".dropdown-toggle", u.closest(".dropdown"))
                  .classList.add("active"),
                u.classList.add("active"))
              : (u.classList.add("active"),
                j.parents(u, ".nav, .list-group").forEach(function (h) {
                  j
                    .prev(h, ".nav-link, .list-group-item")
                    .forEach(function (p) {
                      return p.classList.add("active");
                    }),
                    j.prev(h, ".nav-item").forEach(function (p) {
                      j.children(p, ".nav-link").forEach(function (b) {
                        return b.classList.add("active");
                      });
                    });
                })),
              _.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t,
              });
          }),
          (a._clear = function () {
            j.find(this._selector)
              .filter(function (t) {
                return t.classList.contains("active");
              })
              .forEach(function (t) {
                return t.classList.remove("active");
              });
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              var s = ne(this, "bs.scrollspy");
              if (
                (s || (s = new r(this, "object" == typeof t && t)),
                "string" == typeof t)
              ) {
                if (void 0 === s[t])
                  throw new TypeError('No method named "' + t + '"');
                s[t]();
              }
            });
          }),
          re(r, null, [
            {
              key: "Default",
              get: function () {
                return _n;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.scrollspy";
              },
            },
          ]),
          r
        );
      })(nt);
    _.on(window, "load.bs.scrollspy.data-api", function () {
      j.find('[data-bs-spy="scroll"]').forEach(function (o) {
        return new rn(o, ae.getDataAttributes(o));
      });
    }),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn[at];
          (o.fn[at] = rn.jQueryInterface),
            (o.fn[at].Constructor = rn),
            (o.fn[at].noConflict = function () {
              return (o.fn[at] = r), rn.jQueryInterface;
            });
        }
      });
    var _t = (function (o) {
      function r() {
        return o.apply(this, arguments) || this;
      }
      D(r, o);
      var a = r.prototype;
      return (
        (a.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains("active")) ||
              this._element.classList.contains("disabled")
            )
          ) {
            var s,
              u = Tt(this._element),
              h = this._element.closest(".nav, .list-group");
            h &&
              (s = (s = j.find(
                "UL" === h.nodeName || "OL" === h.nodeName
                  ? ":scope > li > .active"
                  : ".active",
                h
              ))[s.length - 1]);
            var b = null;
            if (
              (s &&
                (b = _.trigger(s, "hide.bs.tab", {
                  relatedTarget: this._element,
                })),
              !(
                _.trigger(this._element, "show.bs.tab", {
                  relatedTarget: s,
                }).defaultPrevented ||
                (null !== b && b.defaultPrevented)
              ))
            ) {
              this._activate(this._element, h);
              var y = function () {
                _.trigger(s, "hidden.bs.tab", {
                  relatedTarget: t._element,
                }),
                  _.trigger(t._element, "shown.bs.tab", {
                    relatedTarget: s,
                  });
              };
              u ? this._activate(u, u.parentNode, y) : y();
            }
          }
        }),
        (a._activate = function (t, s, u) {
          var h = this,
            p = (
              !s || ("UL" !== s.nodeName && "OL" !== s.nodeName)
                ? j.children(s, ".active")
                : j.find(":scope > li > .active", s)
            )[0],
            b = u && p && p.classList.contains("fade"),
            y = function () {
              return h._transitionComplete(t, p, u);
            };
          if (p && b) {
            var C = Re(p);
            p.classList.remove("show"), _.one(p, "transitionend", y), $(p, C);
          } else y();
        }),
        (a._transitionComplete = function (t, s, u) {
          if (s) {
            s.classList.remove("active");
            var h = j.findOne(":scope > .dropdown-menu .active", s.parentNode);
            h && h.classList.remove("active"),
              "tab" === s.getAttribute("role") &&
                s.setAttribute("aria-selected", !1);
          }
          t.classList.add("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            Qt(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode &&
              t.parentNode.classList.contains("dropdown-menu") &&
              (t.closest(".dropdown") &&
                j.find(".dropdown-toggle").forEach(function (p) {
                  return p.classList.add("active");
                }),
              t.setAttribute("aria-expanded", !0)),
            u && u();
        }),
        (r.jQueryInterface = function (t) {
          return this.each(function () {
            var s = ne(this, "bs.tab") || new r(this);
            if ("string" == typeof t) {
              if (void 0 === s[t])
                throw new TypeError('No method named "' + t + '"');
              s[t]();
            }
          });
        }),
        re(r, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tab";
            },
          },
        ]),
        r
      );
    })(nt);
    _.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (o) {
        o.preventDefault(), (ne(this, "bs.tab") || new _t(this)).show();
      }
    ),
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn.tab;
          (o.fn.tab = _t.jQueryInterface),
            (o.fn.tab.Constructor = _t),
            (o.fn.tab.noConflict = function () {
              return (o.fn.tab = r), _t.jQueryInterface;
            });
        }
      });
    var ci = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number",
      },
      Kn = {
        animation: !0,
        autohide: !0,
        delay: 5e3,
      },
      on = (function (o) {
        function r(t, s) {
          var u;
          return (
            ((u = o.call(this, t) || this)._config = u._getConfig(s)),
            (u._timeout = null),
            u._setListeners(),
            u
          );
        }
        D(r, o);
        var a = r.prototype;
        return (
          (a.show = function () {
            var t = this;
            if (!_.trigger(this._element, "show.bs.toast").defaultPrevented) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
              var s = function () {
                t._element.classList.remove("showing"),
                  t._element.classList.add("show"),
                  _.trigger(t._element, "shown.bs.toast"),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide();
                    }, t._config.delay));
              };
              if (
                (this._element.classList.remove("hide"),
                Qt(this._element),
                this._element.classList.add("showing"),
                this._config.animation)
              ) {
                var u = Re(this._element);
                _.one(this._element, "transitionend", s), $(this._element, u);
              } else s();
            }
          }),
          (a.hide = function () {
            var t = this;
            if (
              this._element.classList.contains("show") &&
              !_.trigger(this._element, "hide.bs.toast").defaultPrevented
            ) {
              var s = function () {
                t._element.classList.add("hide"),
                  _.trigger(t._element, "hidden.bs.toast");
              };
              if (
                (this._element.classList.remove("show"), this._config.animation)
              ) {
                var u = Re(this._element);
                _.one(this._element, "transitionend", s), $(this._element, u);
              } else s();
            }
          }),
          (a.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains("show") &&
                this._element.classList.remove("show"),
              _.off(this._element, "click.dismiss.bs.toast"),
              o.prototype.dispose.call(this),
              (this._config = null);
          }),
          (a._getConfig = function (t) {
            return (
              (t = ee(
                {},
                Kn,
                ae.getDataAttributes(this._element),
                "object" == typeof t && t ? t : {}
              )),
              tt("toast", t, this.constructor.DefaultType),
              t
            );
          }),
          (a._setListeners = function () {
            var t = this;
            _.on(
              this._element,
              "click.dismiss.bs.toast",
              '[data-bs-dismiss="toast"]',
              function () {
                return t.hide();
              }
            );
          }),
          (a._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (r.jQueryInterface = function (t) {
            return this.each(function () {
              var s = ne(this, "bs.toast");
              if (
                (s || (s = new r(this, "object" == typeof t && t)),
                "string" == typeof t)
              ) {
                if (void 0 === s[t])
                  throw new TypeError('No method named "' + t + '"');
                s[t](this);
              }
            });
          }),
          re(r, null, [
            {
              key: "DefaultType",
              get: function () {
                return ci;
              },
            },
            {
              key: "Default",
              get: function () {
                return Kn;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.toast";
              },
            },
          ]),
          r
        );
      })(nt);
    return (
      Te(function () {
        var o = be();
        if (o) {
          var r = o.fn.toast;
          (o.fn.toast = on.jQueryInterface),
            (o.fn.toast.Constructor = on),
            (o.fn.toast.noConflict = function () {
              return (o.fn.toast = r), on.jQueryInterface;
            });
        }
      }),
      {
        Alert: Yt,
        Button: cn,
        Carousel: Xt,
        Collapse: $t,
        Dropdown: fe,
        Modal: Ot,
        Popover: Vt,
        ScrollSpy: rn,
        Tab: _t,
        Toast: on,
        Tooltip: qt,
      }
    );
  });
