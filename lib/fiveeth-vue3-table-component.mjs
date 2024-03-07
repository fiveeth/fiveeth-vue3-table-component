import { openBlock as s, createElementBlock as r } from "vue";
const _ = (t, o) => {
  const c = t.__vccOpts || t;
  for (const [e, n] of o)
    c[e] = n;
  return c;
}, a = {}, l = { class: "x-table" };
function f(t, o) {
  return s(), r("div", l, " todo ");
}
const d = /* @__PURE__ */ _(a, [["render", f]]), i = [d], m = (t) => {
  i.forEach((o) => {
    t.component(o.__name, o);
  });
}, x = {
  install: m
};
export {
  d as Table,
  x as default
};
