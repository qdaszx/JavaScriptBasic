const buffer = new ArrayBuffer(1);
const obj = new Int8Array(buffer);
[127, 128, 129].forEach((value) => {
  obj[0] = value;
  console.log(value);
});

const buffer2 = new ArrayBuffer(1);
const obj2 = new Uint8Array(buffer2);
[255, 256, 257].forEach((value) => {
  obj2[0] = value;
  console.log(obj2[0]);
});

const buffer3 = new ArrayBuffer(1);
const obj3 = new Uint8ClampedArray(buffer3);
[255, 256, 257].forEach((value) => {
  obj3[0] = value;
  console.log(obj3[0]);
});