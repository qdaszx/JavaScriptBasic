# DataView

## DataView 개요

ArrayBuffer를 view하는 방법은 TypedArray 오브젝트를 사용하는 것과 DataView 오브젝트를 사용하는 것이 있습니다.

DataView 오브젝트는 메소드 이름으로 get/set 타입, 크기를 구분합니다.

그리고 Edian 사용할 수가 있습니다.

## new DataView()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | ArrayBuffer 인스턴스         |
|          | (선택) offset 바이트         |
|          | (선택) view하려는 byteLength |
| 반환     | DataView 인스턴스            |

DataView 인스턴스를 생성하여 반환합니다.

```js
const buffer = new ArrayBuffer(4);
const obj = new Int8Array(buffer);
obj.set([10, 20, 30]);

const view = new DataView(buffer);
console.log(view.getInt8(0)); // 10
```

    1. const view = new DataView(buffer);
    파라미터의 buffer 인스턴스가 view 대상이며
    전체 데이터를 View합니다.
    이때, Int8처럼 타입과 크기를 정하지 않습니다.

    2. view.getInt8(0);
    view 인스턴스 0번 인덱스 값을
    8비트의 Int 타입으로 구합니다.

    3. 메소드 이름으로
    get/set, 값 타입, 값 크기를 구분합니다.
    이에 대해서는 뒤에서 다룹니다.

### 파라미터

- view 구간(범위)을 작성합니다.
- 두 번째: ArrayBuffer의 오프셋 바이트
- 세 번째: view하려는 바이트 수

```js
const buffer = new ArrayBuffer(4);
const obj = new Int8Array(buffer);
obj.set([10, 20, 30, 40]);

const view = new DataView(buffer, 1, 2);
console.log(view.getInt8(0)); // 20
```

    1. const view = new DataView(buffer, 1, 2);
    두 번째 파라미터는 오프셋 바이트로
    buffer의 처음부터 떨어진 위치입니다.

    2. 세 번째 파라미터는 view하려는 바이트 수입니다.
    2바이트를 view합니다.

    3. [10, 20, 30, 40]에서 20과 30을 view하게 됩니다.

    4. console.log(view.getInt8(0));
    view 인스턴스 기준으로 0번 인덱스 값을 Int8 타입으로 구합니다.

    5. DataView()의 두 번째와 세 번째 파라미터를
    작성하지 않으면 buffer 전체를 view합니다.

## DataView 프로퍼티

### buffer

DataView 인스턴스와 연결된 ArrayBuffer

### byteOffset

오프셋 바이트 값

new DataView(buffer, 1)에서 두 번째 파라미터에 작성한 값입니다.

### byteLength

view 바이트 수

new DataView(buffer, 1, 2)의 세 번째 파라미터에 작성한 값입니다.

```js
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer, 1, 2);
console.log(view.buffer === buffer);
// true
console.log(view.byteOffset); // 1
console.log(view.byteLength); // 2
```

    1. const view = new DataView(buffer, 1, 2);
    두 번째 파라미터는 오프셋 바이트 값입니다.
    세 번째 파라미터는 view하려는 바이트 수입니다.

    2. console.log(view.buffer === buffer);
    buffer로 view 인스턴스를 생성했으므로
    view.buffer와 buffer가 같습니다.

    3. console.log(view.byteOffset);
    new DataView(buffer, 1, 2)에서 1이 출력됩니다.

    4. console.log(view.byteLength);
    new DataView(buffer, 1, 2)에서 2가 출력됩니다.
