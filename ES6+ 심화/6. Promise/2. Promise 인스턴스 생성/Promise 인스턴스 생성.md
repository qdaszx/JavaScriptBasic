# Promise 인스턴스 생성

## new Promise()

| 구분     | 개요                                     |
| :------- | :--------------------------------------- |
| 파라미터 | executer, function(resolve, reject){...} |
| 반환     | 생성한 Promise 인스턴스                  |

Promise 인스턴스를 생성하여 반환합니다.

파라미터에 실행자(executer) 함수를 작성합니다.

실행자 함수는 function(resolve, reject){...} 와 같이 구성되어 있습니다.

- 성공, 실패 처리를 위한 함수 이름 (resolve, reject)
- 블록{}에 실행자 코드를 작성

```js
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
```

    1. const obj = new Promise((resolve, reject) => {...});
    Promise 인스턴스를 생성하여 obj에 할당합니다.

    2. resolve와 reject 이름의 Function 오브젝트를 생성하여 인스턴스에 설정합니다.

    3. resolve("성공"); reject("실패");
    실행자 처리를 성공하면 resolve()가 호출되고 실패하면 reject()가 호출됩니다.

    4. 지금 호출하지 않고 코드 끝까지 실행한 후 호출합니다.

    5. 이것이 Promise의 비동기 처리(실행) 입니다.

이것을 스펙에서는 **deferred action** 이라고 정의하고 있습니다.

MDN 에서는 Promise chain

    6. obj.then((value) => {...}, (reason) => {...});
    then()을 실행하지 않습니다.
    아래로 내려갑니다.

    7. console.log("끝")을 실행합니다.
    여기서 전체 흐름이 끝나지만 실행자의 resolve()와 reject() 실행이 남았습니다.

    8. 실행자에서 resolve("성공") 또는 reject("실패")를 호출합니다.
    상태가 하나만 발생하므로 상태에 해당하는 함수만 호출합니다.
    여기서는 resolve("성공")를 호출하게 됩니다.

    9. then()을 호출합니다.
    then() 단위로 파라미터의 함수를 실행하게 됩니다.

    10. then((value) => {console.log(value)}, ...)
    실행자에서 resolve("성공")를 호출하면
    then()의 첫 번째 파라미터 함수가 실행되며 resolve("성공")에서 "성공"이 value에 설정됩니다.

    11. 그런데 엔진에서는 상태(fulfilled, rejected)에 따라 파라미터의 핸들러 함수를 실행합니다.

    12. then((reason) => {console.log(reason)});
    실행자에서 reject("실패")를 호출하면
    then()의 두 번째 파라미터 함수가 실행되며
    reject("실패")에서 "실패"가 reason에 설정됩니다.

## Promise 오브젝트 형태

```js
{
  ("use strict");
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

  obj.then(
    (value) => {
      console.log(value);
      // resolve([1, 2, 3])의 [1, 2, 3]이 value에 설정됩니다.
    },
    (reason) => {
      console.log(reason);
    }
  );
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
```
