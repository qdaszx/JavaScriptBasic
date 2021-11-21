function create(param) {
  return new Promise((resolve) => {
    resolve(param);
  });
}
async function getPoint(option) {
  const value = await create(option);
  console.log(value);
}
getPoint({ point: 100 });

async function sports() {
  return "축구";
}
console.log(Object.prototype.toString.call(sports));

async function sports2() {
  return "축구";
}
const obj = sports2();
console.log(obj instanceof Promise);

async function sports3() {
  return "축구";
}
sports3().then((res) => console.log(res));
console.log("여기 먼저");

async function sports4() {
  throw "에러";
}
sports4().then(
  () => 0,
  (rej) => console.log(rej)
);