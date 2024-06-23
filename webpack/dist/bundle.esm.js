var o = {
    d: (e, r) => {
      for (var l in r)
        o.o(r, l) &&
          !o.o(e, l) &&
          Object.defineProperty(e, l, { enumerable: !0, get: r[l] });
    },
    o: (o, e) => Object.prototype.hasOwnProperty.call(o, e),
  },
  e = {};
function r() {
  return "Hello, world!";
}
o.d(e, { j: () => r }), console.log("Hello, world!");
var l = e.j;
export { l as hello };
