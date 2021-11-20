# Promis 개요

자바스크립트는 기본적으로 동기로 실행합니다.

실행이 끝나야 다음 코드를 실행합니다.

Promise는 **비동기로 처리(실행)** 합니다.

코드를 연속으로 처리(실행)하지 않고 중간에 흐름이 끊어졌다가

연결된 코드를 처리할 수 있는 **환경이 되었을 때** 실행합니다.

Promise는 원래 DOM 스펙이였으나 JavaScript 스펙으로 전환되었습니다.

# Promise 처리 개요

## Promise 처리(실행) 흐름 개요

```js
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
console.log("마지막"); // Promise 마지막 성공
```

new Promise() 를 실행합니다.

파라미터의 함수를 실행합니다.

resolve() 를 호출하지 않습니다.

console.log("Promise") 실행합니다.

obj 변수에 Promise 인스턴스 할당합니다.

obj.then() 을 실행하지 않습니다.

마지막 줄의 console.log("마지막") 실행합니다.

resolve() 실행

then()의 첫 번째 파라미터 함수 실행합니다.

console.log("성공") 실행합니다.

# Promise 상태

Promise 상태는 세가지이며 하나만 발생합니다.

pending, settled(fulfilled, rejected)

## pending 상태

new Promise()로 인스턴스를 생성합니다.

```js
const obj = new Promise((resolve, reject) => {
  resolve();
  console.log("pending");
});
obj.then(
  (value) => {
    console.log("성공");
  },
  (reason) => {
    console.log("실패");
  }
);
console.log("마지막"); // pending 마지막 성공
```

## settled 상태

pending이 종료된 상태를 나타내며 fulfilled와 rejected 상태로 구분됩니다.

바인딩한 핸들러 함수가 호출됩니다.

### fulfilled(성공) : then()의 첫 번째 함수가 호출됩니다.

### rejected(실패) : then()의 두 번째 함수가 호출됩니다.

```js
const obj = new Promise((resolve, reject) => {
  resolve();
  console.log("pending");
});
obj.then(
  (value) => {
    console.log("성공"); // fulfilled
  },
  (reason) => {
    console.log("실패");
  }
);
console.log("마지막"); // pending 마지막 성공
```

이렇게 상태에 따라 처리하는 이유는

동기로 위에서부터 아래로 실행하면 상태 코드가 필요없습니다.

그런데 인스턴스를 만들고 resolve를 호출하는 것은 동기가 아닙니다.

상태 코드를 가지고 엔진은 처리를 하게 됩니다.

resolve가 아무 이상없으면 코드를 실행합니다.

성공한다면 then() 첫 번째 파라미터가 fulfilled 상태가 되어 실행이되고

실패한다면 then() 두 번째 파라미터가 rejected 상태가 되어 실행됩니다.

이러한 메커니즘입니다.
