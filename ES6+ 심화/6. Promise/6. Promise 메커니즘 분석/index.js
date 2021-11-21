new Promise((resolve, reject) => {
  resolve("성공");
  reject("실패");
}).then(
  (value) => {
    console.log(value); // 성공
  },
  (reason) => {
    console.log(reason);
  }
);

new Promise((one, two) => {
  two();
}).then(
  (value) => {
    console.log("성공");
  },
  (reason) => {
    console.log("실패");
  }
);

new Promise((resolve, reject) => {
  reject("실패");
  resolve("성공");
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
new Promise((resolve, reject) => {
  resolve("성공");
  reject("실패");
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);

new Promise((resolve, reject) => {
  resolve("성공");
}).then((value) => {
  console.log(value);
});
console.log("끝");

new Promise((resolve) => {
  resolve(100);
})
  .then((value) => {
    console.log(value);
    return 200;
  })
  .then((value) => {
    console.log(value);
  });