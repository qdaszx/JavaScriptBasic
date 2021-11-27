# Fetch 개요

Fetch는 API입니다

비동기 환경에서 비동기로 통신합니다.

XMLHttpRequest와 비슷하지만 CORS, HTTP 관련을 망라하여 지원합니다.

통신에 성공하면 Promise 인스턴스를 반환합니다.

```js
const url = "../../image/code.png";
fetch(url)
  .then((response) => {
    return response.blob();
  })
  .then((blob) => {
    const el = document.querySelector("img");
    el.src = URL.createObjectURL(blob);
  });
```

    Fetch는 API로 ECMAScript 스펙에 없습니다.
    API는 일반적으로 new로 인스턴스를 생성하지만
    fetch는 fetch() 형태로 호출합니다.

    1. fetch(url).then((response) => {...})
    fetch(url)의 파라미터에 작성한 URL의
    code.png 파일 정보를 비동기로 가져옵니다.

    2. 파일 정보 수신이 성공적으로 끝나면
    then()의 첫 번째 파라미터 함수가 실행되며
    파일 정보가 response 파라미터에 설정됩니다.

    3. then() 사용은 Promise 처리를 뜻합니다.
    즉, 비동기 환경에서 비동기로 통신합니다.

    4. return response.blob();
    blob()은 response에서 Blob 오브젝트를 구합니다.
    구한 오브젝트를 반환하지 않고 Promise를 반환합니다.

    5. then((blob) => {...})
    앞에서 구한 Blob 오브젝트가 blob에 설정됩니다.

    6. el.src = URL.createObjectURL(blob);
    blob 오브젝트의 이미지 URL을 문자열로 반환합니다.

    7. <img>의 src에 URL을 할당하면 이미지가 표시됩니다.

### 전체 흐름

fetch를 하여 url를 넘겨주면 비동기 환경에서 비동기로 통신합니다.

Promise를 반환하게 됩니다.

이어서 then을 호출하게 됩니다.

서버에서 받은 결과가 response에 설정됩니다.

return문을 실행하게 되면 Promise 인스턴스를 반환하게 되니까 이어서 then을 사용할 수 있습니다.

### 한편, fetch()가 비동기 환경에서 실행하므로 async/await를 사용할 수 있습니다.

```js
async function getImage(url) {
  const response = await fetch(url);
  return response.blob();
}
const url = "../../image/code.png";
getImage(url).then((blob) => {
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
});
```

    1. async 함수에 await fetch(url)를 작성했습니다.

    2. await로 인해
    파라미터 url의 이미지 정보를 받을 때까지
    아래 코드를 실행하지 않습니다.
    즉, 동기로 실행됩니다.

    3. return response.blob();
    response에서 Blob 오브젝트를 구하고 Promise를 반환합니다.

    4. then((blob) => {...})
    앞에서 구한 Blob 오브젝트가 blob에 설정됩니다.

    5. 앞 코드에서는 then()을 두 번 사용했으나
    여기서는 한 번 사용했습니다.
    await에 then() 처리가 포함된 것입니다.

## Fetch API 구성

Fetch API는

**HTTP Request, Response, Headers, Body** 로 구성되어 있습니다.

[Fetch API 스펙](https://fetch.spec.whatwg.org)

Fetch API 사용

fetch(url, option) 형태로 호출합니다.

첫 번째 파라미터는 url 작성, 두 번째 파라미터는 통신 관련 옵션을 작성

Window와 WorkerGlobalScope에서 인스턴스를 생성하지 않고 직접 호출합니다.

Service Worker와 같은 API에서 사용할 수 있습니다.
