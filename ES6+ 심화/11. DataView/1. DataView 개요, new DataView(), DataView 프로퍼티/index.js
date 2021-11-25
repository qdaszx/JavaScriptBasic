const buffer = new ArrayBuffer(4);
const obj = new Int8Array(buffer);
obj.set([10, 20, 30]);

const view = new DataView(buffer);
console.log(view.getInt8(0));

const buffer2 = new ArrayBuffer(4);
const obj2 = new Int8Array(buffer2);
obj2.set([10, 20, 30, 40]);

const view2 = new DataView(buffer2, 1, 2);
console.log(view2.getInt8(0));

const buffer3 = new ArrayBuffer(4);
const view3 = new DataView(buffer3, 1, 2);
console.log(view3.buffer === buffer3);
console.log(view3.byteOffset);
console.log(view3.byteLength);