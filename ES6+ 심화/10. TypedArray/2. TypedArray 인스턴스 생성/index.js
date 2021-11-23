const obj = new Int16Array(3);
console.log(obj); // {0: 0, 1: 0, 2: 0}
obj[5] = 500;
console.log(obj[5]);  // undefined

const obj2 = new Int16Array(3);
obj2[0] = 100;
console.log(obj2);
const obj16 = new Int16Array(obj2);
console.log(obj16)

const obj3 = new Int16Array(3);
obj3[0] = 127;
obj3[1] = 12345;
console.log(obj3);
const obj8 = new Int8Array(obj3);
console.log(obj8);

const list = new Int8Array([12, 34]);
console.log(list);
const like = new Int8Array({
  0: 56,
  1: 78,
  length: 2,
});
console.log(like);
const obj4 = new Int8Array({ 0: 12, 1: 34 });
console.log(obj4.length);

const obj5 = new Int8Array("7");
console.log(obj5);
const alpha = new Int8Array("ABC");
console.log(alpha);

const buffer = new ArrayBuffer(10);
const obj6 = new Int16Array(buffer, 4);
console.log(obj6.byteLength);
console.log(obj6.length);

const buffer2 = new ArrayBuffer(10);
const obj7 = new Int16Array(buffer2, 4, 2);
console.log(obj7.byteLength);
console.log(obj7.length);