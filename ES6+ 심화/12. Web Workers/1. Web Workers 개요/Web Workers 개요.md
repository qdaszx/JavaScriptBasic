# Web Workers

## 비동기 병렬 처리

지금부터 두 개 섹션으로 나누어 자바스크립트의 비동기 병렬 처리를 다룹니다.

### 병행 처리 concurrent

이것은 하나의 스레드에서 비동기로 실행하는 것을 뜻합니다.

Promise. Fetch

### 스레드 thread

코드를 동시에 실행시키는 단위입니다.

자바스크립트는 스레드 하나에서 실행합니다.

### 병령 처리 parallel

다수의 스레드에서 동시에 비동기로 실행합니다.

Web Workers, SharedArrayBuffer, Atomics

Web Workers는 자바스크립트 스펙이 아닌 별도의 API가 있습니다.

SharedArrayBuffer와 Atomics는 자바스크립트 스펙에 있습니다.

# Web Workers 개요

## Web Workers

자바스크립트 스펙이 아니라 API입니다.

그런데도 Web Workers를 다루는 것은

SharedArrayBuffer에서 사용하기 때문입니다.

Web Workers를 다뤄야 전체 시나리오가 연결됩니다.

강좌와 관련된 범위에서 개념 중심으로 다룹니다.

자세한 것은 관련 자료를 참조하시기 바랍니다.

### Web Workers 코드 형태

```js
// worker.js
self.onmessage = (event) => {
  self.postMessage("Worker에서 전송");
};
// main.js
const main = new Worker("worker.js");
main.postMessage("Main에서 전송");
main.onmessage = (event) => {
  console.log("Main에서 수신: ", event.data);
};
```

    1. const main = new Worker("worker.js");
    Worker 인스턴스를 생성합니다.
    worker.js 파일의 코드를 실행합니다.

    2. main.postMaessage("Main에서 전송");
    Worker로 메시지를 보냅니다.

    3. self.onmessage = (event) => {...};
    Worker에서 onmessage 이벤트가 발생하며
    핸들러 함수가 실행됩니다.

    4. self.postMessage("Worker에서 전송");
    Worker에서 메시지를 보냅니다.

    5. main.onmessage = (event) => {...}
    main에서 onmessage 이벤트가 발생하며
    핸들러 함수가 실행됩니다.

Web Workers는 별도의 스레드에서

비동기로 자바스크립트 코드를 실행합니다.

따라서 실행 중에도 클릭 이벤트가 발생합니다.

멀티 스레드 사용을 통해 메인 스레드의 부하를 분산시킬 수 있습니다.

또한 Module 개념으로 사용할 수 있습니다.

Web Worker에서 DOM을 사용할 수 없습니다.

즉, HTML에 콘텐츠를 표현하는 것은 할 수 없습니다.

그 외에 처리를 합니다.

Window와 API 사용에도 제약이 있습니다.

### Main과 Worker 사이의 데이터 송수신에 메시지 기법을 사용합니다.

```js
// worker.js
self.onmessage = (event) => {
  const data = event.data;
  self.postMessage("Worker에서 전송");
};
// main.js
const main = new Worker("worker.js");
main.postMessage("Main에서 전송");
main.onmessage = (event) => {
  console.log("Main에서 수신: ", event.data);
};
```

    1. main.postMessage("Main에서 전송");
    main에서 Worker로 메시지를 전송합니다.

    2. self.onmessage = (event) => {...}
    Event 오브젝트가 event 파라미터에 설정됩니다.
    main.postMessage(param)의 param을 event.data로 구할 수 있습니다.

    3. self.postMessage("Worker에서 전송");
    Worker에서 메인으로 메시지를 전송합니다.

    4. main.onmessage = (event) => {...}
    Event 오브젝트가 event 파라미터에 설정됩니다.
    self.postMessage(param)의 param을
    event.data로 구할 수 있습니다.

### Web Workers 타입

전용 Dedicated Worker, 공유 Shared Worker

### 전용 Worker

Web Workers를 생성한 곳에서만 사용

new Worker("worker.js");

### 공유 Worker

다른 Worker, Window, iframe에서 공유할 수 있습니다.

new SharedWorker("share.js");
