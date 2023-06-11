function N(t) {
  for (let n = 0; n < t.length; n++) {
    const e = t[n];
    if (e.tagName === "INPUT" && !e.disabled && !["submit", "reset", "file", "hidden", "checkbox", "radio"].includes(e.type))
      return e;
    if (e.tagName === "TEXTAREA" && !e.disabled)
      return e;
  }
}
function l(t, n) {
  return [...t.querySelectorAll(n)].reduce(function(e, r) {
    if (["INPUT", "TEXTAREA"].includes(r.tagName))
      return e.push(r), e;
    let i = r.querySelectorAll("input, textarea");
    if (i.length) {
      let o = N(i);
      return o && e.push(o), e;
    }
    return e;
  }, []).filter((e) => e.tagName === "INPUT" && !e.disabled && !["submit", "reset", "file", "hidden", "checkbox", "radio"].includes(e.type) ? !0 : e.tagName === "TEXTAREA" && !e.disabled);
}
function f(t, n) {
  let e = n.value || "input, textarea", r = l(t, e);
  r.length && setTimeout(() => {
    r[0].focus();
  });
}
function c(t, n, e) {
  let r = e.value || "input, textarea", i = l(t, r), o = !1, u = i.findIndex((s, m) => s === n || s.contains(n) ? !0 : n.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? (o = !0, !0) : !1);
  return o ? i[u] : u === -1 || u == i.length - 1 ? null : i[u + 1];
}
function _(t, n, e) {
  n.modifiers.autoFocus && f(e.el, n);
  function r(i) {
    if (i.keyCode !== 13)
      return;
    let o = i.target, u = c(e.el, o, n);
    u && setTimeout(() => {
      u.focus();
    });
  }
  t.addEventListener("keydown", r), t.__FOCUS_NEXT_KEYDOWN_HANDLER__ = r;
}
function E(t, n, e) {
  t.removeEventListener("keydown", t.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}
const a = {
  mounted: _,
  beforeUnmount: E
};
function x(t, n, e) {
  n.modifiers.autoFocus && f(e.$el || e.elm, n);
  function r(i) {
    if (i.keyCode !== 13)
      return;
    let o = i.target, u = c(e.$el || e.elm, o, n);
    u && setTimeout(() => {
      u.focus();
    });
  }
  t.addEventListener("keydown", r), t.__FOCUS_NEXT_KEYDOWN_HANDLER__ = r;
}
function T(t, n, e) {
  t.removeEventListener("keydown", t.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}
const d = {
  inserted: x,
  unbind: T
}, h = d, A = a, p = {
  install: function(t) {
    let n = t.version;
    n.startsWith("3") ? t.directive("focus-next", a) : n.startsWith("2") ? t.directive("focus-next", d) : console.error("v-focus-next只支持vue2/3≈");
  }
};
export {
  p as default,
  h as vFocusNext2,
  A as vFocusNext3
};
