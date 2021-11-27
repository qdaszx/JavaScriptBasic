## 주제, 방법

비동기 통신과 비동기 프로세스의 전반적인 흐름을 단계별로 분리하여 진행합니다.

프레임워크를 개발하는 형태로 접근합니다.

# 비동기 기본 형태

## 비동기 통신, 프로세스

비동기 통신은 XMLHttpRequest, fetch로 다룰 수 있습니다.

비동기 프로세스에는 Promise, async, await, for-await-of, Web Worksers 등으로 구현할 수 있습니다.

## XHR 비동기 통신

### XHR 비동기 통신 기본 형태

```js
const obj = new XMLHttpRequest();
obj.onload = function () {
  if (this.status === 200) {
    console.log(this.response);
  }
};
obj.open("GET", "../file/data.txt");
obj.send();
```

    1. if (this.status === 200) {..}
    핸들러 함수에서 this로 XHR 인스턴스를 참조하려면

    2. obj.onload = function(){...}처럼
    function 키워드를 사용해야 합니다.
    화살표 함수 =>를 사용하면
    this가 window 오브젝트를 참조하기 때문입니다.

XHR은 실행 순서를 보장하지 않습니다.

다수의 XHR을 짧은 간격으로 실행했을 때, 실행한 순서대로 끝나지 않을 수 있습니다.

반드시 실행한 순서로 끝나야 한다면 XHR 자체로 해결할 수 없으며

별도의 처리가 필요합니다.

## Promise로 비동기 실행

### Promise 비동기 실행 형태

```js
const obj = new Promise((resolve, reject) => {
  resolve("성공");
  console.log("1. resolve");
});
obj.then(
  (value) => {
    console.log("3. ", value);
  },
  (reason) => {
    console.log(reason);
  }
);
console.log("2. 마지막");
```

new Promise()로 인스턴스를 생성할 때, resolve()를 실행하지 않습니다.

마지막 코드까지 실행한 후, 환경이 되었을 때 resolve()를 실행합니다.

resolve()가 실행되면 then()의 첫 번째 파라미터 함수가 호출됩니다.

## 비동기 통신 + 비동기 실행

Promise로 비동기 실행을 하면서 XHR로 비동기 통신을 합니다.

```js
const promise = new Promise((resolve, reject) => {
  console.log("1. XHR 생성");
  const obj = new XMLHttpRequest();
  obj.onload = function () {
    if (this.status === 200) {
      resolve(this.response);
    }
  };
  obj.open("GET", "../file/data.txt");
  obj.send();
});
promise.then((res) => {
  console.log(res);
});
console.log("2. 마지막");
```

new Promise()로 비동기 실행 환경을 설정합니다.

XHR 인스턴스 생성, 통신 성공 이벤트 설정, open(), send()

onload 이벤트가 발생하며

파일 수신 체크, 성공이면 resolve(this.response) 실행, then()의 첫 번째 파라미터 함수를 실행합니다.
