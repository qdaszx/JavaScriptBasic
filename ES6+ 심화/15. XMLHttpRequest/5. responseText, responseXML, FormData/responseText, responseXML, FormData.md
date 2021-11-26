# responseText, responseXML

## responseText

서버에서 Text 형태로 보내면 responseText에 설정됩니다.

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  if (obj.status === 200) {
    console.log(obj.response);
    console.log(obj.responseText);
    console.log(JSON.paras(obj.response));
  }
};
obj.open("GET", "../file/jsonData.txt");
obj.send();
```

    1. obj.response
    jsonData.txt에 작성된 형태입니다.
    텍스트 형태 그대로 반환됩니다.

    2. obj.responseText
    텍스트 형태 그대로 반환됩니다.

    3. 텍스트일 때는 일반적으로 response를 사용하며
    JSON.parse()로 파싱하여 사용합니다.

## responseXML

서버에서 HTMLDocument 또는 XML 형태로 보내면 responseXML에 설정됩니다.

```js
const obj = new XMLHttpRequest();
obj.onload = () => {
  console.log(obj.response);
  console.log("-------");
  const data = obj.responseXML;
  const nodes = data.getElementsByTagName("item");
  for (let k = 0; k < nodes.length; k++) {
    const node = nodes[k].children[0];
    console.log(node.textContent);
  }
};
obj.open("GET", "../file/xmlData.xml");
obj.send();
```

    1. obj.response
    response에도 반환되지만 텍스트 형태입니다.

    2. obj.responseXML;
    XML 파일이므로 responseXML에 설정됩니다.

    3. data.getElementsByTagName("item")
    DOM 메소드로 직접 엘리먼트를 구할 수 있는 것은
    DOM Document 형태이기 때문입니다.
    즉, 오브젝트 형태이므로 JSON보다 무겁습니다.

## FormData

XMLHttpRequest 스펙에

FormData, ProgressEvent 오브젝트가 있습니다.

이에 대해서는 관련 자료를 참조하세요

FormData는 순서를 가진 {name: value} 리스트로 전송합니다.

new FormData(param) 형태로 생성하며

param에 `<form>` 을 작성합니다.

[https//xhr.spec.whatwg.org/#formdata](https//xhr.spec.whatwg.org/#formdata)

### ProgressEvent

Request의 진행 상태를 제공합니다.

[https://xhr.spec.whatwg.org/#progressvent](https://xhr.spec.whatwg.org/#progressvent)
