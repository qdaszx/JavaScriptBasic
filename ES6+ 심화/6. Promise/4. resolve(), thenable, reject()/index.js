const obj = Promise.resolve(["sports", "music"]);
obj.then((value) => {
  console.log(value);
});
console.log("끝");

const obj2 = Promise.resolve(["sports", "music"]);
Promise.resolve(obj2).then((param) => {
  console.log(param);
});

const obj3 = Promise.resolve({
  then(resolve, reject) {
    resolve([1, 2]);
  },
});
obj3.then((value) => {
  console.log(value);
});
console.log("끝");

const obj4 = Promise.reject("실패");
obj4.then(
  (value) => console.log(value),
  (value) => console.log(value)
);

const obj5 = new Error("에러 발생");
Promise.reject(obj5).catch((error) => console.log(error.message));
console.log("끝");