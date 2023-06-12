function N(e) {
  if (getComputedStyle(e).visibility === "hidden")
    return !1;
  for (; e !== document.body; ) {
    if (e.style.display === "none" || e.style.opacity === "0")
      return !1;
    e = e.parentNode;
  }
  return !0;
}
function s(e) {
  return e.tagName === "INPUT" && !e.disabled && N(e) && !["submit", "reset", "file", "hidden", "checkbox", "radio"].includes(e.type) ? !0 : e.tagName === "TEXTAREA" && !e.disabled;
}
function _(e, t) {
  let n = [...e.querySelectorAll(t)];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    if (["INPUT", "TEXTAREA"].includes(i.tagName)) {
      if (s(i))
        return i;
    } else {
      let u = [...i.querySelectorAll("input, textarea")].find((o) => s(o));
      if (u)
        return u;
    }
  }
  return null;
}
function E(e, t) {
  return [...e.querySelectorAll(t)].reduce(function(n, r) {
    if (["INPUT", "TEXTAREA"].includes(r.tagName))
      return s(r) && n.push(r), n;
    let i = [...r.querySelectorAll("input, textarea")].filter((l) => s(l));
    return i.length && n.push(...i), n;
  }, []);
}
function f(e, t) {
  let n = t.value || "input, textarea", r = _(e, n);
  r && r.focus();
}
function c(e, t, n) {
  let r = n.value || "input, textarea", i = E(e, r), l = !1, u = i.findIndex((o, x) => o === t || o.contains(t) ? !0 : t.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? (l = !0, !0) : !1);
  return l ? i[u] : u === -1 || u === i.length - 1 ? null : i[u + 1];
}
function y(e, t, n) {
  t.modifiers.autoFocus && f(n.el, t);
  function r(i) {
    if (i.keyCode !== 13)
      return;
    let l = i.target;
    if (l.tagName === "TEXTAREA")
      return;
    let u = c(n.el, l, t);
    u && setTimeout(() => {
      u.focus();
    });
  }
  e.addEventListener("keydown", r), e.__FOCUS_NEXT_KEYDOWN_HANDLER__ = r;
}
function A(e, t, n) {
  e.removeEventListener("keydown", e.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}
const a = {
  mounted: y,
  beforeUnmount: A
};
function T(e, t, n) {
  t.modifiers.autoFocus && f(n.$el || n.elm, t);
  function r(i) {
    if (i.keyCode !== 13)
      return;
    let l = i.target;
    if (l.tagName === "TEXTAREA")
      return;
    let u = c(n.$el || n.elm, l, t);
    u && setTimeout(() => {
      u.focus();
    });
  }
  e.addEventListener("keydown", r), e.__FOCUS_NEXT_KEYDOWN_HANDLER__ = r;
}
function m(e, t, n) {
  e.removeEventListener("keydown", e.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}
const d = {
  inserted: T,
  unbind: m
}, p = d, h = a, v = {
  install: function(e) {
    let t = e.version;
    t.startsWith("3") ? e.directive("focus-next", a) : t.startsWith("2") ? e.directive("focus-next", d) : console.error("v-focus-next只支持vue2/3≈");
  }
};
export {
  v as default,
  p as vFocusNext2,
  h as vFocusNext3
};
