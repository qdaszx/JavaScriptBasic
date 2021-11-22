async function* point() {
  yield 10;
}
const gen = point();
console.log(gen[Symbol.toStringTag]);
console.log(gen[Symbol.asyncIterator]);
console.log(gen[Symbol.asyncIterator]().next);

async function* point2() {
  yield 10;
  yield 20;
}
const gen2 = point2();
async function show() {
  for await (const point of gen2) {
    console.log(point);
  }
}
show();