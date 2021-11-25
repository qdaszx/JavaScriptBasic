# SharedArrayBuffer, Atomics

## SharedArrayBuffer

| 구분     | 개요                        |
| :------- | :-------------------------- |
| 파라미터 | SharedArrayBuffer 바이트 수 |
| 반환     | SharedArrayBuffer 인스턴스  |

공유 메모리에 SharedArrayBuffer를 생성하고 main과 Worker에서 공유합니다.

```js
// worker.js
self.onmessage = (event) => {
  const obj = new Int16Array(event.data);
  obj[2] = 30;
  self.postMessage(event.data);
};
// main.js
const main = new Worker("worker.js");
const sab = new SharedArrayBuffer(10);
const obj = new Int16Array(sab);
obj.set([10]);
main.postMessage(sab);
obj[1] = 20;
main.onmessage = (event) => {
  obj.forEach((value) => {
    console.log(value); // 10, 20, 30, 0, 0
  });
};
```

    1. const sab = new SharedArrayBuffer(10);
    10바이트의 인스턴스를 생성합니다.
    ArrayBuffer 기능을 그대로 사용할 수 있습니다.
    ES2017부터 지원합니다.

    2. const obj = new Int16Array(sab);
    SharedArrayBuffer를 사용하여 인스턴스를 생성합니다.
    View 타입이 TypedArray와 같습니다.
    Int32 타입까지 사용, float 타입은 사용 불가

    3. obj.set([10]);
    SharedArrayBuffer에 값이 설정됩니다.

    4. main.postMessage(sab);
    Worker로 SharedArrayBuffer를 post합니다.
    ArrayBuffer는 값을 복사해서 post하지만
    SharedArrayBuffer는 오브젝트를 공유합니다.

    5. obj[1] = 20;
    postMessage() 실행 후에 main에서 값을 설정하며
    SharedArrayBuffer에 설정되며, 값이 공유됩니다.

    6. obj[2] = 30;
    SharedArrayBuffer를 공유하므로
    30이 SharedArrayBuffer에 설정됩니다.

    7. self.postMessage(event.data);
    SharedArrayBuffer에 값을 설정하고 post합니다.

    8. main.onmessage = (event) => {...}
    worker로 전송한 후 변경한 20이 반영되었으며
    worker에서 설정한 30도 반영되었습니다.

## SharedArrayBuffer 고려사항

싱글 스레드는 순서대로 실행하므로 순서대로 값이 처리됩니다.

즉, 코드 순서대로 값이 처리되는 것

싱글 스레드의 비동기 처리는 콜백 함수를 사용하여 순서대로 처리할 수 있습니다.

Worker는 다수의 스레드 처리입니다.

또한 SharedArrayBuffer를 공유하므로

main에서 값을 설정할 때 다른 Worker에서 값을 설정하면 값이 엉킬 수 있습니다.

한 쪽의 설정과 관련된 처리가 끝났을 때

다른 쪽에서 처리하도록 제어해야 합니다.

이것이 병렬 처리의 고려사항입니다.

### SharedArrayBuffer 공유에 따른 문제 발생 형태입니다.

```js
// chage.js
self.onmessage = (event) => {
  const obj = new Int16Array(event.data);
  obj[0] = 20;
};
// main.js
const main = new Worker("change.js");
const sab = new SharedArrayBuffer(10);
const obj = new Int16Array(sab);
obj[0] = 10;
main.postMessage(sab);
obj[1] = obj[0] + 30;
```

    obj[1] = obj[0] + 30
    병렬 처리이므로 코드를 실행하는 동안
    Worker에서 obj[0] = 20처럼
    obj[0]에 값을 설정할 수도 있습니다.

    이떄, 코드를 실행하는 동안에는
    값을 변경하는 처리를 하지 못하도록 막으면
    문제 발생을 예방할 수 있습니다.

    SharedArrayBuffer 사용할 때
    lock 상태로 설정하고
    사용이 끝나면 lock 상태를 푸는 것입니다.

이를 위한 것이 **Atomics** 입니다.
