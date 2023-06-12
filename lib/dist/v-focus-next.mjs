function l(t) {
  for (; t !== document.body; ) {
    if (t.style.display === "none")
      return !0;
    t = t.parentNode;
  }
  return !1;
}
function _(t) {
  for (let n = 0; n < t.length; n++) {
    const e = t[n];
    if (e.tagName === "INPUT" && !e.disabled && !l(e) && !["submit", "reset", "file", "hidden", "checkbox", "radio"].includes(e.type))
      return e;
    if (e.tagName === "TEXTAREA" && !e.disabled)
      return e;
  }
}
function f(t, n) {
  return [...t.querySelectorAll(n)].reduce(function(e, r) {
    if (["INPUT", "TEXTAREA"].includes(r.tagName))
      return e.push(r), e;
    let i = r.querySelectorAll("input, textarea");
    if (i.length) {
      let u = _(i);
      return u && e.push(u), e;
    }
    return e;
  }, []).filter((e) => e.tagName === "INPUT" && !e.disabled && !l(e) && !["submit", "reset", "file", "hidden", "checkbox", "radio"].includes(e.type) ? !0 : e.tagName === "TEXTAREA" && !e.disabled);
}
function c(t, n) {
  let e = n.value || "input, textarea", r = f(t, e);
  r.length && setTimeout(() => {
    r[0].focus();
  });
}
function a(t, n, e) {
  let r = e.value || "input, textarea", i = f(t, r), u = !1, o = i.findIndex((s, m) => s === n || s.contains(n) ? !0 : n.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? (u = !0, !0) : !1);
  return u ? i[o] : o === -1 || o == i.length - 1 ? null : i[o + 1];
}
function E(t, n, e) {
  n.modifiers.autoFocus && c(e.el, n);
  function r(i) {
    if (i.keyCode !== 13)
      return;
    let u = i.target;
    if (u.tagName === "TEXTAREA")
      return;
    let o = a(e.el, u, n);
    o && setTimeout(() => {
      o.focus();
    });
  }
  t.addEventListener("keydown", r), t.__FOCUS_NEXT_KEYDOWN_HANDLER__ = r;
}
function T(t, n, e) {
  t.removeEventListener("keydown", t.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}
const d = {
  mounted: E,
  beforeUnmount: T
};
function x(t, n, e) {
  n.modifiers.autoFocus && c(e.$el || e.elm, n);
  function r(i) {
    if (i.keyCode !== 13)
      return;
    let u = i.target;
    if (u.tagName === "TEXTAREA")
      return;
    let o = a(e.$el || e.elm, u, n);
    o && setTimeout(() => {
      o.focus();
    });
  }
  t.addEventListener("keydown", r), t.__FOCUS_NEXT_KEYDOWN_HANDLER__ = r;
}
function A(t, n, e) {
  t.removeEventListener("keydown", t.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}
const N = {
  inserted: x,
  unbind: A
}, y = N, p = d, h = {
  install: function(t) {
    let n = t.version;
    n.startsWith("3") ? t.directive("focus-next", d) : n.startsWith("2") ? t.directive("focus-next", N) : console.error("v-focus-next只支持vue2/3≈");
  }
};
export {
  h as default,
  y as vFocusNext2,
  p as vFocusNext3
};
