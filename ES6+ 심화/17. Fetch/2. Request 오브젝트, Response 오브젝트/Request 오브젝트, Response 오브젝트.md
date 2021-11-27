# Request 오브젝트, Response 오브젝트

## Request

| 구분     | 개요                    |
| :------- | :---------------------- |
| 파라미터 | url, Request URL        |
|          | option, Request 옵션    |
| 반환     | 생성한 Request 인스턴스 |

Request 인스턴스를 생성하여 반환합니다.

option은 다음 페이지에서 다룹니다.

[Request 스펙](https://fetch.spec.whatwg.org/#request-class)

```js
async function getImage(url) {
  const obj = new Request(url, { method: "GET" });
  console.log("url: ", obj.url);
  console.log("method: ", obj.method);
  const response = await fetch(obj);
  return response.blob();
}
const url = "../../image/rose.png";
getImage(url).then((blob) => {
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
});
```

    1. const obj = new Request(url, {method: "GET"});
    Request 인스턴스를 생성하여 반환합니다.

    2. 첫 번째 파라미터에 URL을 작성하고
    두 번째 파라미터에 Request 옵션을 작성합니다.
    작성하지 않으면 디폴트 값이 적용됩니다.

    3. const response = await fetch(obj);
    fetch(url, option) 형태로 작성하지 않고

## Request 오브젝트1

| R/W | 프로퍼티            | 개요                                                      |
| :-- | :------------------ | :-------------------------------------------------------- |
| W   | body                | 문자열, FormData, Blob 등의 전송 데이터                   |
| W   | cache               | Request의 cache 모드                                      |
| W   | credentials         | Request의 인증 정보, 쿠키 사용 관련                       |
| R   | destination         | Request 리소스 타입. image, worker                        |
| W   | integrity           | 서브 리소스 정합성(SRI) 값, 브라우저가 체크하는 보안 기능 |
| R   | isReloadNavigation  | 리로드 네비게이션 Request 여부                            |
| R   | isReloadNavigation  | 리로드 네비게이션 Request 여부                            |
| R   | isHistoryNavigation | 히스토리 네비게이션 Request 여부                          |

R/W는 Read/Write를 뜻합니다.

Write만 new Request()의 두 번째 파라미터에 프로퍼티를 작성할 수 있습니다.

프로퍼티 설명은 생략합니다.

왜냐하면 통신 개념의 이해가 선행되어야 하기 때문입니다.

```js
const url = "../../image/rose.jpg";
const obj = new Request(url);
console.log("body: ", obj.body);
console.log("cache: ", obj.cache);
console.log("credentials: ", obj.credentials);
console.log("destination: ", obj.destination);
console.log("headers: ", obj.headers);
console.log("integrity: ", obj.integrity);
console.log("isReloadNavigation: ", obj.isReloadNavigation);
console.log("isHistoryNavigation: ", obj.isHistoryNavigation);
```

## Request 오브젝트2

| R/W | 프로퍼티       | 개요                                 |
| :-- | :------------- | :----------------------------------- |
| W   | method         | Request method, GET, POST            |
| W   | keepalive      | 웹 페이지보다 Request가 더 길게 존속 |
| W   | mode           | Request 모드, same-origin, cors      |
| W   | redirect       | Redirect 취급 방법                   |
| W   | referrer       | 현재 페이지를 링크한 이전 address    |
| W   | referrerPolicy | Request에 refferrer 정보 포함 기준   |
| W   | signal         | AbortSignal 오브젝트, Abort 제어     |
|     | clone()        | 현재 Request를 복사하는 메소드       |

```js
const url = "../../image/rose.png";
const obj = new Request(url);
console.log("method: ", obj.method);
console.log("keepalive: ", obj.keepalive);
console.log("mode: ", obj.mode);
console.log("redirect: ", obj.redirect);
console.log("referrer: ", obj.referrer);
console.log("referrerPolicy: ", obj.referrerPolicy);
console.log("signal: ", obj.signal);
```

## Response

Request에 대한 Response(응답) 오브젝트입니다.

new 연산자로 new Response()로 만들 수도 있지만

fetch()가 끝나면 Response 인스턴스를 생성하여 반환합니다.

[Response 스펙](https://fetch.spec.whatwg.org/#response-class)

```js
async function getImage(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    const blob = await response.blob();
    const el = document.querySelector("img");
    el.src = URL.createObjectURL(blob);
  }
}
getImage("../../image/rose.png");
```

    1. const response = await fetch(url);
    실행이 끝나면 Response 인스턴스를 생성하고
    프로퍼티에 값을 설정하여 반환합니다.

    2. if(response.status === 200) {...}
    파일 수신 성공을 체크할 수 있습니다.

    3. const blob = await response.blob()
    blob()이 Promise에서 실행되므로 await를 사용합니다.

## Response 오브젝트

| 프로퍼티    | 개요                       |
| :---------- | :------------------------- |
| error       | 통신 에러 오브젝트         |
| headers     | Response Headers 오브젝트  |
| ok          | Response 성공, 200에서 299 |
| redirect    | Response의 리다이렉트 여부 |
| redirectred | 리다이렉트 URL의 다수 여부 |
| status      | HTTP status 코드. 200, 404 |
| statusText  | HTTP status 코드의 텍스트  |
| type        | Response 타입. basic, cors |
| url         | Response URL               |
| clone()     | Response를 복사하는 메소드 |

```js
async function getImage(url) {
  const res = await fetch(url);
  console.log("error: ", res.error);
  console.log("headers: ", res.headers);
  console.log("ok: ", res.ok);
  console.log("redirect: ", res.redirect);
  console.log("redirected: ", res.redirected);
  console.log("status: ", res.status);
  console.log("statusText: ", res.statusText);
  console.log("type: ", res.type);
  console.log("url: ", res.url);
}
getImage("../../image/rose.png");
```
