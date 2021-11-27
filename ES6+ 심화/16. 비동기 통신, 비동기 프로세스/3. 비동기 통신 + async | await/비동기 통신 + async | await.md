# 비동기 통신 + async/await

### Promise + XHR 환경

```js
const defaultXHR = { method: "POST" };
function create(param) {
  return new Promise((resolve, reject) => {
    const obj = new XMLHttpRequest();
    obj.onload = function () {
      this.status === 200 ? resolve(this.response) : reject(this);
    };
    const opt = Object.assign({}, defaultXHR, param);
    obj.open(opt.method, opt.url);
    obj.send();
  });
}
```

    1. 앞에서 사용했던 create.js 파일의 코드입니다.

### Promise + XHR 환경에서 async/await로 3개의 파일을 순서대로 가져옵니다.

```js
async function getData(option) {
  for (let url of option) {
    const res = await create(url);
    console.log(JSON.parse(res));
  }
}
const option = [
  { url: "../file/data1.txt" },
  { url: "../file/data2.txt" },
  { url: "../file/data3.txt" },
];
getData(option);
```

for-of 문으로 반복할 때마다 await로 인해 Promise의 resolve()에서 값을 반환할 때까지 기다립니다.

따라서 실행 순서대로 처리할 수 있습니다.

### 한편 서버에 파일이 없으면 reject()가 실행됩니다.

```js
async function getData(option) {
  for (let url of option) {
    try {
      const res = await create(url);
      console.log(JSON.parse(res));
    } catch (xhr) {
      console.log(xhr.status);
    }
  }
}
const option = [
  { url: "../file/data1.txt" },
  { url: "../file/파일없음.txt" },
  { url: "../file/data3.txt" },
];
getData(option);
```

catch()에서 받으면 XHR 인스턴스가 catch()의 파라미터에 설정됩니다.

처리를 중단하지 않고 다음을 실행합니다.

무엇인가 부족한 부분이 있습니다. 부족한 부분을 채워나가겠습니다.
