const path = require("path");
const { WebpackRunPlugin, WebpackDonePlugin } = require("./webpack");
const { loader1, loader2 } = require("./webpack");
const { styleLoader, cssLoader, lessLoader } = require('./src/loader')

module.exports = {
  mode: "development", //防止代码被压缩
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "source-map", //防止干扰源文件
  plugins: [new WebpackRunPlugin(), new WebpackDonePlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [loader1, loader2],
      },
      {
        test: /\.less$/,
        use: [
          styleLoader, //将css内容变成style标签插入到html中去
          cssLoader, //一般会解析url合@import等语法
          lessLoader, //将less=>css
        ],
      },
    ],
  },
};

