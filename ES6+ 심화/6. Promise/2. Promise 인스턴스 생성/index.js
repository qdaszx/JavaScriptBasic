const obj = new Promise((resolve, reject) => {
  resolve("성공");
  reject("실패");
});
obj.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
console.log("끝"); // 끝 성공

{
  "use strict"
  debugger;

  const promise = Promise;
  /*
  1. Promise 오브젝트 형태를 살펴봅니다.

  2. promise를 펼치면 프로퍼티와 함수가 있습니다.

  3. prototype에 constructor가 있으며 메소드가 있습니다.
  자바스크립트의 일반적인 형태입니다.
  */
  debugger;

  const obj = new Promise((resolve, reject) => {
    resolve([1, 2, 3]);
    reject("실패");
    console.log("실행지");
  });
  /*
  1. resolve와 reject 이름의 Function 오브젝트를 생성합니다.
  Function 오브젝트이므로 호출할 수 있습니다.

  --- 코드 끝까지 처리한 후 실행합니다. ---
  11. resolve([1, 2, 3])을 호출하며 then()이 호출됩니다.
  [[PromiseStatus]]: "resolved"이므로
  then()의 첫 번째 파라미터 함수를 실행하게 됩니다.
  */
  debugger;

  /*
  2. obj.__proto__를 펼치면
  Promise.prototype에 연결된 메소드가 표시됩니다.

  3. [[PromiseStatus]]: "resolved"
  Promise 상태를 나타내며 "fulfilled" 상태를 뜻합니다.

  4. [[PromiseValue]]: Array(3)
  resolve([1, 2, 3])의 파라미터에 작성한 값입니다.
  */
  debugger;

  obj.then((value) => {
    console.log(value);
    // resolve([1, 2, 3])의 [1, 2, 3]이 value에 설정됩니다.
  },
    (reason) => {
      console.log(reason);
    });
  /*
  1. then()의 파라미터에 성공, 실패 핸들러 함수를 작성했습니다.
  */
  debugger;

  console.log("끝");
  /*
  1. console.log("끝")을 실행합니다.
  실행자 블록으로 이동합니다.
  */
  debugger;
}