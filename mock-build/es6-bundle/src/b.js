import { message as messageB } from './b.js';

export const message = 'Hello from A';
console.log(messageB);

export function printMessage() {
  console.log(this.message);
}