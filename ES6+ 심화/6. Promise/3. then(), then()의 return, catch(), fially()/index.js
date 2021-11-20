const obj = new Promise((resolve, reject) => {
  resolve(1, 2, 3);
});
obj.then(
  (value) => {
    console.log(value); // 1
  },
  (reason) => {
    console.log(reason);
  }
);

const obj2 = new Promise((resolve, reject) => {
  resolve(100);
});
obj2.then((value) => {
  return value + 50;
}).then((param) => {
  console.log(param);
});

const check = false;
const obj3 = new Promise((resolve, reject) => {
  check ? resolve(check) : reject(1, 2, 3);
});
obj3
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

const obj4 = new Promise((resolve, reject) => {
  resolve(100);
});
obj4
  .then((value) => {
    throw "에러";
  })
  .catch((catch1) => {
    console.log("catch1:" + catch1);
    return "정상";
  })
  .then((param) => {
    console.log("then:" + param);
  })
  .catch((catch2) => {
    console.log("catch2:" + catch2);
  });

const obj5 = new Promise((resolve, reject) => {
  resolve(100);
});
obj5
  .then((value) => {
    console.log(value);
    return 200;
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally((param) => {
    console.log("finally:" + param);
  });