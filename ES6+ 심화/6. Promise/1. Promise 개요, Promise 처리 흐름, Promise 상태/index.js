const obj = new Promise((resolve, reject) => {
  resolve();
  console.log("Promise");
});
obj.then(
  (value) => {
    console.log("성공");
  },
  (reason) => {
    console.log("실패");
  }
);
console.log("마지막");  // Promise 마지막 성공

const obj2 = new Promise((resolve, reject) => {
  resolve();
  console.log("pending");
});
obj2.then(
  (value) => {
    console.log("성공");
  },
  (reason) => {
    console.log("실패");
  }
);
console.log("마지막");  // pending 마지막 성공