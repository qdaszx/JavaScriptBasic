const obj = Int8Array.from([12, 34, 500]);
console.log(obj);
const like = Int8Array.from({
  0: 56,
  1: 78,
  length: 2,
});
console.log(like);

console.log(Int8Array.from("12"));
console.log(Int8Array.from(12));
console.log(new Int8Array("12"));
console.log(new Int8Array(12));

const that = { 1: 10, 2: 20 };
const add = (value) => {
  return that[value];
};
const obj2 = Int8Array.from([1, 2], add, that);
console.log(obj2);

const obj3 = Int8Array.of(10, 20, 30);
console.log(obj3);

const obj4 = Int8Array.of("3", null, "A");
console.log(obj4);

const type8 = new Int8Array([10, 20]);
const obj5 = type8[Symbol.iterator]();
console.log(obj5.next());
console.log(obj5.next());
console.log(obj5.next());

const obj6 = new Int8Array([10, 20]);
for (const value of obj6) {
  console.log(value);
}