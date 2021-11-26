# Request

통신은 크게 Requset와 Response로 나눕니다.

| 메소드/프로퍼티    | 구분     | 개요                                           |
| :----------------- | :------- | :--------------------------------------------- |
| open()             | 파라미터 | method, GET, POST 등                           |
|                    |          | url, Request를 보낼 URL                        |
|                    |          | async, true: 비동기, false: 동기, 디폴트: true |
|                    |          | user name, 인증 목적, 디폴트: 빈문자열         |
|                    |          | password, 인증 목적, 디폴트: 문자열            |
| send()             | 파라미터 | 서버로 보낼 데이터                             |
| setRequestHeader() | 파라미터 | name                                           |
|                    |          | value                                          |
| abort()            | 없음     | Request 취소                                   |
| upload             | 프로퍼티 | 이벤트를 설정하여 파일 업로드 처리 추적        |
| timeout            | 프로퍼티 | 타임 아웃, 밀리초로 작성                       |

개념 중심으로 코드를 다룹니다.

XHR 버전에 따라 다를 수 있으므로 자세한 것은 MDN 또는 [https://xhr.spec.whatwg.org 스펙](https://xhr.spec.whatwg.org) 참조하시길 바랍니다.

## open()

| 구분     | 개요                               |
| :------- | :--------------------------------- |
| 파라미터 | method. GET, POST, HEAD 등         |
|          | url. Request를 보낼 URL            |
|          | async. 비동기: true, 동기: false   |
|          | user name. 인증 목적, 디폴트: null |
|          | password. 인증 목적, 디폴트: null  |

open메소드는 Requset를 초기화합니다.

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  console.log("실행 성공");
};
obj.open("POST", "../file/data.txt", true);
obj.send();
```

### method 파라미터

- **HTTP Requset Method 리스트**

| Method  | 개요                                       |
| :------ | :----------------------------------------- |
| GET     | URL에 해당하는 리소스 전송 요청            |
| POST    | 클라이언트 데이터를 서버로 전송            |
| PUT     | 클라이언트에서 보낸 데이터를 저장          |
| DELETE  | 지정한 리소스를 삭제                       |
| CONNECT | TCP 터널에 접속, 암호화 메시지 전송에 사용 |
| HEAD    | 서버에서 클라이언트로 HTTP 헤더만 전송     |
| OPTIONS | 서버를 조사, 예: 서버가 지원하는 HTTP 버전 |
| TRACE   | 서버까지 네트워크 경로를 체크              |

HTTP/1.1 기준

처음 버전에서 method 이름을 대문자로 사용했으나 최근 버전에서는 소문자를 사용해도 됩니다.

XHR에서는 CONNECT, TRACE, TRACK 사용 불가

### url 파라미터

Requset를 전송할 URL을 작성합니다.

### async 파라미터

비동기: true, 동기: false, 디폴트: true

## send()

send() 메소드는 서버로 Requset를 전송합니다.

### send() 파라미터

- method가 GET, HEAD이면 파라미터 값이 무시되며 POST일 때 작성합니다.
- 문자열, Document, Blob 등을 작성할 수 있습니다.
- UTF-8로 인코딩하여 작성합니다.

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  console.log("실행 성공");
};
obj.open("POST", "../file/data.txt");
obj.setRequestHeader("Content-Type", "application/json:charset=UTF-8");
obj.send(JSON.stringify({ sports: "농구" }));
```

    1. obj.setRequestHeader(...)
    통신 Header의 속성값을 설정합니다.
    속성이 다양하며 관련 자료를 참고하세요.

    2. obj.send(...)
    서버로 파라미터 값을 전송합니다.

    3. JSON.stringify({sports: "농구"})
    {key: value} 형태에 큰 따옴표를 추가합니다.

## timeout

titmeout 프로퍼티

서버에서 데이터 수신 시간이 작성한 타임아웃을 초과하면

ontimeout 이벤트가 발생하며

Request가 취소됩니다.

타임아웃 시간을 밀리초로 작성합니다.

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  console.log(obj.response);
};
obj.ontimeout = () => {
  console.log("timeout 발생");
};
obj.timeout = 2000;
obj.open("POST", "../file/timeout_data.txt");
obj.send();
```

    1. Node.js를 시작한 main.js에
    5초 후에 timeout_data.txt를 전송되도록 코드가 작성되어 있습니다.

    2. obj.timeout = 2000;
    2초 동안 timeout_data.txt를 수신하지 못하면
    ontimeout 이벤트가 발생하며 핸들러를 실행합니다.

    3. 2초 후에 Request가 취소되므로
    onload 이벤트가 발생하지 않습니다.

## abort()

abort() 메소드

Requset를 취소합니다.

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  console.log(obj.response);
};
obj.onabort = () => {
  console.log("abort 발생");
};
obj.open("POST", "../file/timeout_data.txt");
obj.send();
setTimeout(() => {
  obj.abort();
}, 2000);
```

    1. Node.js를 시작한 main.js에
    5초 후에 timeout_data.txt를 전송하도록
    코드가 작성되어 있습니다.

    2. setTimeout(() => {obj.abort()}, 2000);
    2초 후에 abort()를 호출합니다.
    onabort 이벤트가 발생하며 핸들러를 실행합니다.

    3. Request를 취소하므로
    5초 후에 onload 이벤트가 발생하지 않습니다.
