/*
 * @Description: 
 * @Author: shanchuan
 * @Date: 2024-07-07 17:23:27
 * @LastEditors: 
 * @LastEditTime: 2024-07-07 17:23:48
 */
import { message as messageA } from './a.js';

export const message = 'Hello from B';
console.log(messageA);

export function printMessage() {
  console.log(this.message);
}