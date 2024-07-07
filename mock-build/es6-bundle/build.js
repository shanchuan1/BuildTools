const fs = require('fs');
const path = require('path');

// 读取模块内容
function readModuleContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

// 替换 import 和 export 语句
function transformModuleContent(content, moduleName) {
  // 处理 import 语句
  let transformedContent = content.replace(/import\s+\{(.*)\}\s+from\s+['"](.*)['"]/g, (match, imports, source) => {
    const sourcePath = path.resolve(path.dirname(filePath), source + '.js');
    const sourceContent = readModuleContent(sourcePath);
    const sourceModuleName = path.basename(sourcePath, '.js');
    
    // 递归转换依赖模块
    const sourceTransformedContent = transformModuleContent(sourceContent, sourceModuleName);
    
    return `
      var ${sourceModuleName} = (function() {
        ${sourceTransformedContent}
        return exports;
      })();
      ${imports.split(',').map(i => i.trim()).map(i => `${i} = ${sourceModuleName}.${i};`).join('\n')}
    `;
  });

  // 处理 export 语句
  transformedContent = transformedContent.replace(/export\s+(const|var|let)\s+(\w+)\s*=/g, '$1 $2 =');
  transformedContent = transformedContent.replace(/export\s+default\s+function\s+(\w+)/g, 'function $1');
  transformedContent = transformedContent.replace(/export\s+function\s+(\w+)/g, 'function $1');

  // 包装为 IIFE
  return `(function(exports) {
    ${transformedContent}
    return exports;
  })(this.${moduleName} = {});`;
}

// 主入口文件
const entryFile = './src/a.js';

// 转换入口文件
const entryContent = readModuleContent(entryFile);
const moduleName = path.basename(entryFile, '.js');
const transformedEntryContent = transformModuleContent(entryContent, moduleName);

// 包装为全局作用域
const bundleContent = `(function(global) {
  ${transformedEntryContent}
})(this);`;

// 输出 bundle.js 文件
fs.writeFileSync('./bundle.js', bundleContent);

console.log('Build completed!');