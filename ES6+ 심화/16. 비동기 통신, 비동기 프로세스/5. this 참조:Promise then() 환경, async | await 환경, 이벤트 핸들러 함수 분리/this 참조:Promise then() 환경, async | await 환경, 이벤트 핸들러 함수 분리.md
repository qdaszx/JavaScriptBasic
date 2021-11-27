# this 참조

Promise, then() 환경에서

this로 호출된 함수의 오브젝트를 참조합니다.

호출된 함수의 오브젝트란

main.getPoint() 함수를 호출했을 때, main 오브젝트를 뜻합니다.

```js
const main = {
  point: 500,
  getPoint() {
    create(this.option)
      .then((data) => {
        console.log(data[this.option.data.name] + this.point);
      })
      .catch((xhr) => {
        console.log(xhr.status);
      });
  },
};
// {"sports": 100, "music": 200}
main.option = {
  url: "../file/pointData.txt",
  data: { name: "sports" },
};
main.getPoint();
```

마친가지로 Promise, async/await 환경에서

this로 호출된 함수의 오브젝트를 참조합니다.

```js
const main = {
  point: 500,
  async getPoint() {
    const res = await create(this.option);
    console.log(res[this.option.data.name] + this.point);
  },
};
// {"sports": 100, "music": 200}
main.option = {
  url: "../file/pointData.txt",
  data: { name: "sports" },
};
main.getPoint();
```

## 이벤트 핸들러 함수 분리

XHR 이벤트 핸들러 함수에 성공/실패 처리를 위한 코드를 작성하면

확정성, 가독성이 떨어집니다.

따라서, 별도의 함수로 분리하고 그 곳에 성공/실패를 처리하는 함수를 작성합니다.

```js
const main = {
  point: 500,
  async getPoint(opt) {
    promiseXHR
      .create(this.option)
      .then((data) => {
        console.log(data[this.option.data.name] + this.point);
      })
      .catch((xhr) => {
        console.log(xhr.status);
      });
  },
};
// {"sports": 100, "music": 200}
main.option = {
  url: "../file/pointData.txt",
  data: { name: "sports" },
};
main.getPoint();
```

```js
const promiseXHR = {
  defaultXHR: {
    method: "POST",
    parsing: true,
  },

  /**
   * @function create
   *  강좌의 비동기 통신과 비동기 프로세스에서 사용하는 공용 함수이다.
   *  - Promise 인스턴스를 생성한다.
   *  - XMLHttpRequest 인스턴스를 생성한다.
   *  - onload 이벤트가 발생하면 resolve() 또는 reject()를 호출한다.
   * @param {Object} param, 통신 옵션
   *  - param.data에 서버로 전송할 데이터를 작성한다.
   *  - data: {name: "point"} 형태
   */
  create(param) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // xhr.onload = function(){
      //   this.status === 200 ? resolve(JSON.parse(this.response))
      //                       : reject(this);
      // };
      xhr.onload = function () {
        promiseXHR.onLoad(this, resolve, reject);
      };
      xhr.onerror = function () {
        promiseXHR.onError(this, reject);
      };
      // xhr.onload = promiseXHR.onLoad(this, resolve, reject);
      // xhr.onerror = promiseXHR.onError(this, reject);

      xhr.option = Object.assign({}, this.defaultXHR, param);
      this.setSendData(xhr);
      xhr.open(xhr.option.method, xhr.option.url);
      xhr.send(xhr.option.sendData);
    });
  },

  /**
   * @function setSendData
   *  서버로 전송할 데이터를 JSON 형태로 변환한다.
   *  전송할 데이터가 없으면 빈 문자열을 설정한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   */
  setSendData(xhr) {
    xhr.option.sendData = JSON.stringify(xhr.option.data || "");
  },

  /**
   * @function onLoad
   *  서버와 통신이 정상으로 종료되었을 때 호출된다.
   *  파일 수신을 성공하면 resolve()를 호출하고
   *  실패하면 reject()를 호출한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   * @param {Function} resolve, Promise resolve() 함수
   * @param {Function} reject, Promise reject() 함수
   */
  onLoad(xhr, resolve, reject) {
    if (xhr.status !== 200) {
      xhr.errorCode = "not200";
      return reject(xhr);
    }

    try {
      const data = JSON.parse(xhr.response);
      resolve(data);
    } catch {
      // "JSON.parse 에러"
      xhr.errorCode = "json";
      reject(xhr);
    }
  },

  /**
   * @function onError
   *  서버와 통신이 비정상으로 종료되었을 때 호출된다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   * @param {Function} reject, Promise reject() 함수
   */
  onError(xhr, reject) {
    reject(xhr);
  },
};
```

create()는 메인 흐름을 위한 코드이고 파생 처리는 분리된 함수에서 합니다.

이벤트 핸들러 함수 형태가 어색합니다.

오브젝트 안에서 this는 어디에서든 함수가 속한 오브젝트를 참조해야 합니다.
