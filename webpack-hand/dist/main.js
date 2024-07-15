
       (() => {
        var modules = {
          
            "./src/name.js": (module) => {
              module.exports = "shanchuan";
//给你的代码加点注:loader2//给你的代码加点注:loader1
            }
          ,
            "./src/age.js": (module) => {
              module.exports = "今年18岁";
//给你的代码加点注:loader2//给你的代码加点注:loader1
            }
          ,
            "./src/index.less": (module) => {
              let style = document.createElement("style");
style.innerHTML = "#root {\n  color: red;\n}\ndiv {\n  color: red;\n}\n";
document.head.appendChild(style);
            }
          ,
            "./src/index.js": (module) => {
              const name = require("./src/name.js");
const age = require("./src/age.js");
console.log("entry文件打印作者信息", name, age);

// import "./index.less";
const less = require("./src/index.less");
console.log('🚀 ~ less:', less);
//给你的代码加点注:loader2//给你的代码加点注:loader1
            }
            
        };
        var cache = {};
        function require(moduleId) {
          var cachedModule = cache[moduleId];
          if (cachedModule !== undefined) {
            return cachedModule.exports;
          }
          var module = (cache[moduleId] = {
            exports: {},
          });
          modules[moduleId](module, module.exports, require);
          return module.exports;
        }
        var exports ={};
        const name = require("./src/name.js");
const age = require("./src/age.js");
console.log("entry文件打印作者信息", name, age);

// import "./index.less";
const less = require("./src/index.less");
console.log('🚀 ~ less:', less);
//给你的代码加点注:loader2//给你的代码加点注:loader1
      })();
       