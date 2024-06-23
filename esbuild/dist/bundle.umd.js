/*
 * @Description: 
 * @Author: shanchuan
 * @Date: 2024-06-23 12:59:45
 * @LastEditors: 
 * @LastEditTime: 2024-06-23 13:00:18
 */
var MyModule = (() => {
  var t = Object.defineProperty;
  var n = (o) => t(o, "__esModule", { value: !0 });
  var i = (o, e) => {
    n(o);
    for (var r in e) t(o, r, { get: e[r], enumerable: !0 });
  };
  var p = {};
  i(p, { hello: () => l });
  function l() {
    return "Hello, world!";
  }
  console.log(l());
  return p;
})();
//# sourceMappingURL=bundle.umd.js.map
