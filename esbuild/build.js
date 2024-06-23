const esbuild = require('esbuild');

// 配置输出格式
const buildConfigs = [
    { format: 'esm', outfile: 'dist/bundle.esm.js' },
    { format: 'cjs', outfile: 'dist/bundle.cjs.js' },
    { format: 'iife', globalName: 'MyModule', outfile: 'dist/bundle.umd.js' }
];

buildConfigs.forEach(config => {
    esbuild.build({
        entryPoints: ['src/index.js'], // 入口文件，可以是一个或多个文件。
        bundle: true, // 是否进行代码打包
        minify: true, //是否进行代码压缩
        sourcemap: true, // 是否生成源地图文件，方便调试
        target: ['es2020'], // 指定输出的JavaScript版本
        format: config.format,
        globalName: config.globalName,
        outfile: config.outfile // 输出文件
    }).catch(() => process.exit(1));
});
