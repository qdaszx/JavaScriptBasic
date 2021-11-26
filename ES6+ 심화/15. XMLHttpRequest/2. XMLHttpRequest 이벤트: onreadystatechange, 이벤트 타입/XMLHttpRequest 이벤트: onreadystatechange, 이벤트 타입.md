# XMLHttpRequest 이벤트

## onreadystatechange

| readyState       | 값  | 개요                                     |
| :--------------- | :-- | :--------------------------------------- |
| UNSENT           | 0   | XHR 인스턴스 생성                        |
| OPEND            | 1   | open() 성공                              |
| HEADERS_RECEIVED | 2   | send() 실행, Header와 status를 받은 상태 |
| LOADING          | 3   | 다운로드 중인 상태                       |
| DONE             | 4   | 통신을 완료한 상태                       |

상태를 나타내는 readyState 값이 바뀔 때마다

onreadystatechange 이벤트가 발생하며 핸들러 함수가 실행됩니다.

이것은 동기 통신에서는 사용할 수 없습니다.

```js
const obj = new XMLHttpRequest();
obj.onreadystatechange = () => {
  console.log(obj.readyState);
  if (obj.readyState === 4 && obj.status === 200) {
    console.log(obj.response);
  }
};
obj.open("GET", "../file/data.txt");
obj.send();
```

    1. obj.readyState
    XHR 인스턴스를 생성할 때 값이 0입니다.
    통신과 관계가 없으므로 사용하지 않습니다.
    5단계이지만 사용 기준으로 보면 4단계입니다.

    2. if(obj.readyState === 4 && ...)
    통신이 끝난 것을 체크합니다.
    4는, 단지 통신이 끝난 것으로
    통신의 성공, 실패를 구분하지 않습니다.

    3. obj.readyState === XMLHttpRequest.DONE 처럼
    텍스트로 비교할 수도 있습니다.

    4. obj.status === 200
    200은 통신 성공을 뜻합니다.
    404처럼 3자리로 status를 나타냅니다.

## 이벤트 타입

| 이벤트 타입 | 개요                                                       |
| :---------- | :--------------------------------------------------------- |
| onabort     | Request가 중지되었을 때 발생                               |
| onerror     | Request가 실패했을 때 발생                                 |
| onload      | Request가 성공했을 때 발생                                 |
| onloadstart | Request를 시작한 시점에 발생                               |
| onloadend   | Request의 성공, 실패에 관계없이 Request가 종료했을 때 발생 |
| onprogress  | 데이터를 수신하는 동안 발생                                |
| ontimeout   | 지정한 타임 아웃 시간을 경과한 시점에 발생                 |

이것은 상태에 따라 이벤트가 발생하게 됩니다.

이벤트가 발생했을 때, 이벤트 핸들러를 작성하면 호출됩니다.

오래된 브라우저는 지원하지 않습니다.

```js
const obj = new XMLHttpRequest();
let seq = 0;
const show = (event) => {
  console.log(`${event.type}: ${++seq}`);
};
const types = [
  "load",
  "loadstart",
  "loadend",
  "progress",
  "timeout",
  "abort",
  "error",
];
types.forEach((type) => {
  obj.addEventListener(type, show, false); // loadstart: 1, progress: 2, load: 3, loadend: 4
});
obj.open("GET", "../file/data.txt");
obj.send();
```

    1. 발생하는 이벤트 타입을 알아보기 위해
    XHR의 모든 이벤트 타입에 이벤트를 설정했습니다.

    2. 성공적으로 통신이 완료되었을 때 이벤트가 발생한 순서와 타입입니다.

### 이벤트 타입 사용 형태

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  console.log(obj.response);
};
obj.open("GET", "../file/data.txt");
obj.send();
//obj.onreadystatechange = () => {
//  console.log(obj.readyState);
//  if (obj.readyState === 4 && obj.status === 200) {
//    console.log(obj.response);
//  }
//};
```

    1. obj.onload = () => {...}
    Request가 성공했을 때 발생하며
    이벤트 핸들러를 실행합니다.

    2. 주석으로 처리한 코드와 기능이 같습니다.

    3. 주석 형태는 XHR에서 이벤트 타입을
    지원하지 않은 초창기의 형태입니다.
    최신 브라우저는 이벤트 타입을 지원하므로
    이벤트 타입을 사용하여 이벤트를 설정합니다.
