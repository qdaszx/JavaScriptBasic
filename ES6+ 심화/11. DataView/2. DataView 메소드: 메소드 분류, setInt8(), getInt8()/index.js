const buffer = new ArrayBuffer(4);
const view = new DataView(buffer, 1, 2);
view.setInt8(0, 20);
console.log(view.getInt8(0));

const buffer2 = new ArrayBuffer(4);
const obj2 = new Int8Array(buffer2);
obj2.set([10, 20, 30, 40]);

const view2 = new DataView(buffer2, 1, 2);
console.log(view2.getInt8(0)); // 20
view2.setInt8(1, 70);
console.log(view2.getInt8(1));
console.log(obj2);