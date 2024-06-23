!(function (e, o) {
  "object" == typeof exports && "undefined" != typeof module
    ? o(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], o)
    : o(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self).MyLib =
          {})
      );
})(this, function (e) {
  "use strict";
  (e.bar = function () {
    return "Hello, bar!";
  }),
    (e.foo = function () {
      return "Hello, foo!";
    });
});
