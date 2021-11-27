# Body, Headers

## Body

Body는 믹스인(Mixin)입니다.

믹스인은 객체지향 용어로 슈퍼 클래스를 지칭합니다.

단, 단독으로 사용할 수 없고 서브 클래스에서 상속받아 사용합니다.

Request 오브젝트와 Response 오브젝트에서 상속받습니다.

즉, Request할 때나 Response할 때도 Body를 사용합니다.

[Body 스펙](https://fetch.spec.whatwg.org/#body-mixin)

### Response에서 Body를 상속받는 형태

```js
async function getImage(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
}
getImage("../../image/rose.png");
```

    1. const response = await fetch(url);
    fetch() 실행이 끝나면
    Body 오브젝트를 상속받아
    Response 인스턴스를 생성합니다.

    2. const blob = await response.blob()
    blob()은 Body 오브젝트의 메소드입니다.
    따라서 상속을 받지 않으면 blob() 메소드를 호출할 수 없습니다.

    3. 이러한 상속 처리는 내부 처리이므로 외부에서 상속 처리를 하지 않습니다.

## Body 믹스인 오브젝트의 메소드와 프로퍼티

| 메소드        | 개요                                           |
| :------------ | :--------------------------------------------- |
| body          | ReadableStream 오브젝트로 데이터 스트림을 포함 |
| bodyUsed      | body를 사용한 여부                             |
| arrayBuffer() | ArrayBuffer 인스턴스 반환                      |
| blob()        | Blob 인스턴스 반환                             |
| formData()    | FormData 인스턴스를 반환                       |
| json()        | JSON.parse() 결과 반환                         |
| text()        | Text를 UTF-8로 인코딩하여 반환                 |

```js
async function getData(url) {
  const response = await fetch(url);
  console.log("bodyUsed: ", response.bodyUsed);
  console.log(await response.json());
  console.log("body: ", response.body);
  console.log("bodyUsed: ", response.bodyUsed);
}
getData("../file/jsonData.txt");
// {"book": "책", "music": "음악"}
```

    1. response.bodyUsed
    body 데이터를 사용한 여부를 반환합니다.
    response.json() 앞에서는 body 데이터를
    사용하지 않았으므로 false를 출력하고
    response.json() 뒤에서는 true가 출력됩니다.

    2. true이면 body 데이터를 사용할 수 없습니다.

    3. await response.json();
    서버에서 받은 데이터를
    JSON.parse()로 파싱한 결과를 반환합니다.

    4. response.body
    Request는 서버로 보낼 데이터를 설정하고
    Response는 서버에서 보낸 데이터가 설정되어 있습니다.

## Headers

Request와 Response의 Header 오브젝트

[name: value] 형태로 사용합니다.

속성은 대소문자를 구분하지 않는 것도 있지만 구분하는 것이 있으므로 구분하여 사용합니다.

### Headers 오브젝트의 메소드를 사용하여 헤더 속성을 CRUD합니다.

```js
async function getData(url) {
  const response = await fetch(url);
  console.log(response.headers.get("Content-Type"));
  for (const [name, value] of response.headers) {
    console.log(`${name}: ${value}`);
  }
}
getData("../file/jsonData.txt");
```

### Request 할 때 headers에 작성합니다.

```js
async function postData(url, option) {
  const response = await fetch(url, option);
  console.log(response.headers.get("Content-Type"));
}
const option = {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
  },
  body: JSON.stringify('{"book": "책"}'),
};
postData("/data", option);
```

    1. headers: {...}
    headers에 Request 헤더를 작성합니다.

    2. body: JSON.stringify()
    body에 서버에 전송할 값을 작성합니다.

    3. response.headers.get("Content-Type")
    Request가 아닌 Response의 Content-Type입니다.

Headers 속성이 많습니다. [MDN HTTP headers](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers)

[Headers 스펙](https://fetch.spec.whatwg.org/#headers-class)

## Headers 오브젝트 메소드

| 메소드   | 개요                                  |
| :------- | :------------------------------------ |
| append() | name, value. 새로운 헤더 추가         |
| delete() | name, 헤더 삭제                       |
| get()    | name, 헤더값 반환                     |
| has()    | name, 헤더의 포함 여부                |
| set()    | name, value. 헤더값 변경, 없으면 추가 |
| for-of   | 헤더 전체를 name/value로 전개         |

### Headers 인스턴스를 생성한 후 메소드를 사용하는 형태

```js
const obj = new Headers({
  "Content-Type": "text/plain;charset=utf-8",
});
obj.set("Cache-Control", "no-cache");

async function postData(url, option) {
  const res = await fetch(url, option);
}
const option = {
  method: "POST",
  headers: obj,
  body: JSON.stringify('{"book": "책"}'),
};
postData("/data", option);
```

    1. const obj = new Headers({...})
    Headers 인스턴스를 생성하고
    파라미터에 작성한 값을 설정합니다.

    2. obj.set("Cache-Control", "no-cache");
    Header 인스턴스에 헤더를 설정합니다.
