/*
 * @Description: 
 * @Author: shanchuan
 * @Date: 2024-07-15 14:46:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-15 18:18:56
 */
function styleLoader(cssSource) {
    let script = `
    let style=document.createElement("style");
    style.innerHTML=${JSON.stringify(cssSource)};
    document.head.appendChild(style)
  `;
    return script;
}

module.exports = styleLoader;
