# ArrayBuffer와 View

## ArrayBuffer

### 바이너리 데이터를 저장하는 오브젝트입니다.

new ArrayBuffer(바이트 수)로 인스턴스를 생성하며 생성한 인스턴스의 바이트 수를 변경할 수 없습니다.

```js
const buffer = new ArrayBuffer(4);
const view = new Int8Array(buffer);
console.log(view); // {0: 0, 1: 0, 2: 0, 3: 0}
```

    1. const buffer = new ArrayBuffer(4);
    4바이트의 ArrayBuffer 인스턴스를 생성합니다.

    2. new Int8Array(buffer);
    파라미터에 작성한 ArrayBuffer 인스턴스를
    뷰(View)할 수 있는 1바이트 정수 타입의
    TypedArray 인스턴스를 생성합니다.

여기서 View라는 것은 CRUD를 뜻합니다.

즉, Create, Read, Update, Delete를 하는 것 입니다.

그런데, ArrayBuffer에 직접 View 할 수 없습니다.

ArrayBuffer에는 View 메소드가 없습니다.

TypedArray와 DataView로 View할 수 있습니다.

    3. ArrayBuffer 인스턴스의 처음부터 4바이트를
    1 바이트 단위로 뷰하며 4개의 엘리먼트를 뷰할 수 있습니다.

TypedArray 인스턴스를 생성하면서 파라미터에 ArrayBuffer를 작성하면

TypedArray에 데이터가 저장되지 않고 ArrayBuffer에 데이터가 저장됩니다.

따라서,

    4. buffer 인스턴스와 view 인스턴스가 연동됩니다.

위 코드는 1바이트로 뷰를 했지만 2바이트로 뷰를 할 수 있습니다.

즉, 혼합된 형태로 사용할 수 있습니다.

```js
const buffer = new ArrayBuffer(10);
const view8 = new Int8Array(buffer);
const view16 = new Int16Array(buffer, 4);
console.log(view8); //  {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
console.log(view16); // {0: 0, 1: 0, 2: 0}
```

    1. const buffer = new ArrayBuffer(10);
    10바이트의 ArrayBuffer 인스턴스를 생성합니다.

    2. new Int8Array(buffer);
    1바이트 정수 타입의 인스턴스를 생성합니다.

    3. new Int16Array(buffer, 4);
    2바이트 정수 타입의 인스턴스를 생성합니다.

    4. 두 번째 파라미터 4는
    오프셋으로 처음부터 떨어진 바이트 수입니다.
    5번째 바이트부터 6바이트(10 - 4)를
    2바이트 단위로 view합니다.
    3개의 엘리먼트를 뷰할 수 있습니다.

    5. ArrayBuffer를 1바이트와 2바이트로 혼합하여 view를 정의할 수 있습니다.

## 정리

ArrayBuffer는 바이너리 데이터를 저장하는 오브젝트입니다.

생성한 인스턴스의 바이트 수를 변경할 수 없습니다. 고정된 형태로 가져갑니다.

ArrayBuffer의 데이터를 직접 View 할 수 없고 TypedArray나 DataView로 View할 수 있습니다.
