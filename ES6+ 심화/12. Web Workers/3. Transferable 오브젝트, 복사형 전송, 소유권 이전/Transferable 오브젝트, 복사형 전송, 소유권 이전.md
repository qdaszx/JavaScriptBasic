# Transferable 오브젝트

## 복사하여 전송

postMessage() 메소드는 파라미터에 작성한 오브젝트의 값을 복사하여 전송합니다.

값을 복사하므로 값이 연동되지 않습니다.

또한 오브젝트가 클 때는 복사하는 데 시간이 걸립니다.

```js
// clone.js
self.onmessage = (event) => {
  const book = { point: event.data.point + 300 };
  self.postMessage(book);
};
// main.js
const main = new Worker("clone.js");
const book = { point: 100 };
main.postMessage(book);
book.point = 700;
main.onmessage = (evnet) => {
  console.log(event.data.point); // 400
  console.log(book.point); // 700
};
```

    1. main.postMessage(book);
    book 오브젝트의 메모리 주소를 전송하지 않고
    book 오브젝트의 프로퍼티를 복사하여 전송합니다.

    2. 값을 복사하므로 값이 연동되지 않습니다.
    한 쪽에서 값을 바꾸면 값이 같지 않게 됩니다.

    3. book.point = 700;
    book 오브젝트의 point 값을 700으로 변경합니다.
    Worker의 point 값이 700으로 바뀌지 않습니다.
    Worker의 값은 100이고 main은 700입니다.

    4. console.log(event.data.point);
    Worker에서 point 값에 300을 더해 전송하므로 400이 출력됩니다.

    5. console.log(book.point);
    main의 book.point 값으로 700이 출력됩니다.

복사 알고리즘을 MDN에 structured clone algorithm이라고 합니다.

## Transferable 오브젝트

main.postMessage(buffer, [buffer]);

두 번째 파라미터에 Worker로 넘겨줄 오브젝트를 배열로 작성합니다.

**Worker에 오브젝트의 소유권을 넘겨주게 됩니다.**

따라서 main에서는 두 번째 파라미터에 작성한 오브젝트를 사용할 수 없게 됩니다.

```js
// transfer.js
self.onmessage = (event) => {
  const view = new DataView(event.data);
  view.setInt8(1, 20);
  self.postMessage(event.data);
};
// main.js
const main = new Worker("transfer.js");
const buffer = new ArrayBuffer(3);
const view = new DataView(buffer);
view.setInt8(0, 10);
main.postMessage(buffer, [buffer]);
try {
  view.setInt8(1, 30);
} catch {
  console.log("사용할 수 없음"); // 사용할 수 없음
}
main.onmessage = (event) => {
  const view = new DataView(event.data);
  console.log(view.getInt8(0)); // 10
  console.log(view.getInt8(1)); // 20
};
```

main에서 사용할 수 없는 걸 커버하기 위해서 SharedArrayBuffer로 대처합니다.

Worker와 Main이 공유하는 것이 SharedArrayBuffer라는 것입니다.

자바스크립트 스펙에 나와있습니다.
