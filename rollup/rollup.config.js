import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // 入口文件
  output: [
    {
      file: 'dist/my-lib.umd.js',
      format: 'umd',
      name: 'MyLib',
      globals: {
        // 如果有外部依赖，可以在这里配置全局变量
      },
    },
    {
      file: 'dist/my-lib.esm.js',
      format: 'es',
    },
    {
      file: 'dist/my-lib.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve(), // 解析第三方模块
    commonjs(), // 将CommonJS模块转换为ES模块
    terser()    // 可选：压缩UMD输出文件
  ],
  external: [], // 外部依赖，如果有的话，可以在这里配置
};
