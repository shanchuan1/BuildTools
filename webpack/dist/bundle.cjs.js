(() => {
  "use strict";
  var e = {
      d: (o, r) => {
        for (var l in r)
          e.o(r, l) &&
            !e.o(o, l) &&
            Object.defineProperty(o, l, { enumerable: !0, get: r[l] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    o = {};
  function r() {
    return "Hello, world!";
  }
  e.r(o),
    e.d(o, { hello: () => r }),
    console.log("Hello, world!"),
    (module.exports = o);
})();
