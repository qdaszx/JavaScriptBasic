# 전용 Worker

| 이름          | 구분     | 개요                                           |
| :------------ | :------- | :--------------------------------------------- |
| new Worker()  | 파라미터 | URL                                            |
|               |          | 선택, options                                  |
|               | 반환     | 생성한 전용 Worker                             |
| postMessage() | 파라미터 | message                                        |
|               |          | 선택, 추가로 보낼 options/transfer             |
|               | 반환     | 없음                                           |
| terminate()   | 없음     | Worker 종료                                    |
|               | 반환     | 없음                                           |
| onmessage     | 이벤트   | postMessage()로 보낸 메시지를 수신했을 때 발생 |
| onerror       | 이벤트   | 에러가 발생했을 때 이벤트 발생                 |

## new Worker()

| 구분     | 개요                |
| :------- | :------------------ |
| 파라미터 | source 파일 URL     |
|          | 선택, options       |
| 반환     | 생성한 전용 Workers |

전용 Worker를 생성하여 반환합니다.

### 첫 번째 파라미터

Worker에서 실행될 코드가 작성된 자바스크립트 파일의 URL을 작성합니다.

### 두 번째 파라미터

추가 옵션을 작성할 수 있습니다.

new Worker("worker.js", {type: "module"})

```js
// worker.js
self.onmessage = (event) => {
  const data = event.data;
};
// main.js
const main = new Worker("worker.js");
```

    1. const main = new Worker("worker.js");
    Worker 인스턴스를 생성하여 반환합니다.

    2. Worker에서 실행될 코드를
    worker.js 파일에 작성하며
    파라미터에 파일의 URL을 작성합니다.

    3. "worker.js 파일을 가져오며
    파일에 작성된 코드를 자동으로 실행합니다.
    Origin이 같아야 합니다.

    4. Worker를 다수 사용할 수 있습니다.
    즉, 스레드를 다수 만들 수 있습니다.

## WorkerGlobalScope

WorkerGlobalScope 오브젝트는 Worker의 글로벌 오브젝트입니다.

또한 Event 오브젝트를 상속받습니다.

self 프로퍼티는 WorkerGlobalScope를 참조합니다.

### self.importScripts() 메소드

1개 이상의 자바스크립트 파일을 동기 방법으로 Worker 오브젝트에 설정합니다.

```js
// add.js
const BASE = 100;
function add(param) {
  return BASE + param;
}
// global.js
importScripts("add.js");
onmessage = (event) => {
  const sum = add(event.data);
  postMessage(sum);
};
// main.js
const main = new Worker("global.js");
main.postMessage(500);
main.onmessage = (event) => {
  console.log("계산 결과: ", event.data); // 계산 결과: 600
};
```

WorkerGlobalScope 오브젝트가 스코프이므로 메소드 앞에 self를 작성하지 않아도 되지만 일반적으로 작성합니다.

## postMessage()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | message               |
|          | 선택, option/transfer |
| 반환     | 없음                  |

main.postMessage()

Main 에서 Worker로 메세지를 보냅니다.

self.postMessage()

Worker에서 Main으로 메시지를 보냅니다.
