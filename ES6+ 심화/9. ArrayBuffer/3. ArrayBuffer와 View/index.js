const buffer = new ArrayBuffer(4);
const view = new Int8Array(buffer);
console.log(view);

const buffer2 = new ArrayBuffer(10);
const view8 = new Int8Array(buffer2);
const view16 = new Int16Array(buffer2, 4);
console.log(view8);
console.log(view16);