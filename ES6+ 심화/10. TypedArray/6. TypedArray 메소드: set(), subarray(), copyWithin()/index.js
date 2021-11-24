const buffer = new ArrayBuffer(3);
const obj = new Int8Array(buffer);
obj.set([10, 20], 1);
console.log(obj);

const buffer2 = new ArrayBuffer(3);
const one = new Int8Array(buffer2);
one.set([10, 20, 30]);

const buffer4 = new ArrayBuffer(4);
const two = new Int8Array(buffer4);
two.set(one, 1);
console.log(two);

const buffer3 = new ArrayBuffer(4);
const obj3 = new Int8Array(buffer3);
obj3.set([10, 20, 30]);
console.log(obj3);

const subarrayObj = obj3.subarray(1, 3);
console.log(subarrayObj);

const buffer5 = new ArrayBuffer(4);
const obj5 = new Int8Array(buffer5);
obj5.set([10, 20, 30, 40]);
console.log(obj5);

obj5.copyWithin(0, 2, 4);
console.log(obj5);