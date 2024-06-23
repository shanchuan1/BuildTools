/*
 * @Author: shanchuan
 * @Date: 2024-06-23 13:06:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-23 13:13:31
 */
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MyLibrary',
      formats: ['esm', 'cjs', 'umd'],
      fileName: (format) => `bundle.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
});
