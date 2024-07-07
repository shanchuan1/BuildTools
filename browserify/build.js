/*
 * @Description: 
 * @Author: shanchuan
 * @Date: 2024-07-07 15:57:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-07 16:01:41
 */
const browserify = require('browserify');
const watchify = require('watchify');
const fs = require('fs');
const path = require('path');
const bundlePath = path.join(__dirname, './dist/bundle.js');

const b = browserify({
  entries: ['./src/a.js'], // 入口文件
  debug: true,         // 生成sourcemap
  cache: {},           // 缓存
  packageCache: {}     // 包缓存
});

const w = watchify(b); // 使用watchify

w.on('update', bundle); // 在更新时调用bundle方法
w.on('log', console.log); // 输出日志

function bundle() {
  w.bundle()
    .on('error', console.error.bind(console)) // 打印错误
    .pipe(fs.createWriteStream(bundlePath)); // 将捆绑结果输出到bundle.js
}

bundle(); // 执行初次构建