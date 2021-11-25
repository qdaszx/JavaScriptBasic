const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);
view.setInt16(2, 100, true);
console.log(view.getInt16(2, true));
console.log(view.getInt16(2));