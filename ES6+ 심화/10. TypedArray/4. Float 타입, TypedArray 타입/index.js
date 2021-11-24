const buffer = new ArrayBuffer(16);
const obj = new Float64Array(buffer);
obj[0] = Number.MAX_VALUE;
console.log(obj[0] == Number.MAX_VALUE);

const buffer2 = new ArrayBuffer(10);
const obj2 = new Int16Array(buffer2);
console.log(obj2.BYTES_PER_ELEMENT);

const bufferObj = new ArrayBuffer(10);
const obj3 = new Int16Array(bufferObj);
const check = obj3.buffer;
console.log(check.byteLength);

const buffer4 = new ArrayBuffer(10);
const obj4 = new Int16Array(buffer4, 4);
console.log(obj4.byteOffset);