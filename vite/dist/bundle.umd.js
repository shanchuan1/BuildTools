(function (e, o) {
  typeof exports == "object" && typeof module < "u"
    ? o(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], o)
    : ((e = typeof globalThis < "u" ? globalThis : e || self),
      o((e.MyLibrary = {})));
})(this, function (e) {
  "use strict";
  function o() {
    return "Hello, world!";
  }
  console.log(o()),
    (e.hello = o),
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
});
