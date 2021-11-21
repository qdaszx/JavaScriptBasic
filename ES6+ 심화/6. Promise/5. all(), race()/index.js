function order(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("실행자:", delay);
      resolve(delay);
    }, delay);
  });
}
Promise.all([order(500), order(300), order(100)]).then((param) =>
  console.log("then:" + param)
);

function order2(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(delay);
      delay === 300 ? reject(delay) : resolve(delay);
    }, delay);
  });
}
Promise.all([order2(500), order2(100), order2(300)]).then(
  (param) => console.log("성공:" + param),
  (param) => console.log("실패:" + param)
);

function order3(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(delay);
      resolve(delay);
    }, delay);
  });
}
Promise.race([order3(500), order3(100), order3(300)]).then((param) =>
  console.log("then:" + param)
);