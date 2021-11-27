# Fetch 프로세스

Fetch의 주요 프로세스 코드를 살펴봅니다.

### JSON 데이터를 가져오는 코드

fetchData는 fetch.js에 있습니다.

```js
const point = {
  value: 100,
  async getData(url, option) {
    const data = await fetchData.main(url, option);
    console.log(data);
    console.log(this.value + (data.bonus || 0));
  },
};
const option = { type: "json" };
point.getData("../file/pointData.txt", option);
// {"base": 100, "bonus": 200}
```

    1. const data = await fetchData.main(url, option);
    pointData.txt 파일을 가져와 data에 할당합니다.
    data는 JSON.parse()를 실행한 상태입니다.

    2. console.log(this.value + data.bonus);
    this가 getPoint()를 호출한 오브젝트를 참조합니다.

### fectch.js

```js
const fetchData = {
  defaultFetch: {
    method: "POST",
    type: "json",
  },

  /**
   * @function main
   *  fetch()로 서버와 통신한다.
   *  서버에서 받은 데이터를 데이터 타입에 맞게 변환한다.
   *  [To DO]
   *  - 점진적으로 프레임워크 개념으로 접근하여 코드를 추가한다.
   * @param {String} url
   * @param {Object} option, Request/Response 옵션
   */
  async main(url, option) {
    this.option = Object.assign({}, this.defaultFetch, option);
    this.setSendData();
    try {
      const response = await fetch(url, this.option);
      return response.ok
        ? await this.convertData(response)
        : { error: response, errorCode: "OKError" };
    } catch (error) {
      //server down
      return { error: error, errorCode: "NetWork" };
    }
  },

  /**
   * @function setSendData
   *  서버로 전송할 데이터를 JSON 형태로 변환한다.
   *  전송할 데이터가 없으면 빈 문자열을 설정한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   */
  setSendData() {
    if (this.option.data === undefined) {
      this.option.body = "";
      return;
    }
    this.option.body = JSON.stringify(this.option.data);
  },

  /**
   * @function convertData
   *  main()을 호출할 때 option에 작성한 type에 맞도록
   *  서버에서 받은 데이터를 변환한다.
   * @param {Object} res, 서버에서 받은 response
   */
  async convertData(res) {
    switch (this.option.type) {
      case "json":
        return await res.json();
      case "blob":
        const blob = await res.blob();
        return URL.createObjectURL(blob);
      case "text":
        return await res.text();
      case "arrayBuffer":
      //코드 작성
      case "formData":
      //코드 작성
    }
  },
};
```

### Blob을 가져오는 코드입니다.

```js
const point = {
  async getData(url, option) {
    const el = document.querySelector("img");
    el.src = await fetchData.main(url, option);
  },
};
const option = { type: "blob" };
point.getData("../../image/rose.png", option);
```

    1. 앞의 JSON 데이터 가져오기와 차이는
    const option = {type: "blob"}과
    UR이 반환되는 것입니다.

    2. fetchData 오브젝트는 코드는 같습니다.

### 서버가 다운되었을 때

```js
const point = {
  async getData(url, option) {
    const data = await fetchData.main(url, option);
    console.log(data);
    if (data.errorCode === "NetWork") {
      console.log("네트워크 에러");
    }
  },
};
const option = { type: "json" };
point.getData("../file/pointData.txt", option);
```
