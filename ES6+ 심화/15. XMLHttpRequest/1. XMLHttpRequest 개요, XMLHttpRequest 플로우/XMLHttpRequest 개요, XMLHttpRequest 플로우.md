# XMLHttpRequest

## XMLHttpRequest 개요

XMLHttpRequest 이름에 XML이 포함되어 있지만

처음 오브젝트를 만들 때의 이름으로 XML을 위한 시맨틱은 아닙니다.

XHR을 약칭으로 사용합니다.

스펙의 XHR 정의

이것은 Object로 Resource를 fetch하기 위한 API라고 기술되어 있음

Request는 클라이언트에서 서버로 보내는 것을 뜻하고

Response는 서버에서 클라이언트로 보내는 것을 뜻합니다.

[XHR 스펙](https://xhr.spec.whatwg.org)

XHR은 SOP(Same Origin Policy) 제약을 받습니다.

SOP란 source가 같은 URL에만 접근 할 수 있는 것을 뜻합니다.

여기서 source는 protocol, port, host를 뜻하고 이 셋 중에 하나라도 다르면 접근할 수 없습니다.

단, CORS(Cross-Origin Resource Sharing)는 가능합니다.

## XMLHttpRequest 플로우

1. **브라우저 Request 부분**

```js
const obj = new XMLHttpRequest();
obj.onreadystatechange = () => {
  console.log(obj.readyState);
  if (obj.readyState === 4 && obj.status === 200) {
    console.log(obj.response);
  }
};
obj.open("GET", "../file/data.txt", true);
obj.send();
```

    XMLHttpRequest 인스턴스 생성
    이벤트 핸들러 작성
    서버와 연결 - 전송 방법, URL, 동기/비동기 통신 지정
    데이터 전송

2. **서버 처리 부분**

상태가 바뀔 때마다 상태를 브라우저로 전송합니다.

마지막 상태에서는 데이터도 같이 전송합니다.

3. **브라우저 Response 부분**

서버에서 상태를 전송할 때마다 이벤트가 발생합니다.

onreadystatechange, 핸들러에서 상태에 따른 처리
