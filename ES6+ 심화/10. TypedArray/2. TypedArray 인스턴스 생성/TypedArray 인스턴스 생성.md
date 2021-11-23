# TypedArray 인스턴스 생성

## new TypedArray()

| 구분     | 개요                |
| :------- | :------------------ |
| 파라미터 | length, 엘리먼트 수 |
| 반환     | 9개 타입의 인스턴스 |

new TypedArray()

TypedArray()에 Int8Array, Int16Array처럼

9개 타입의 생성자 이름을 작성합니다.

파라미터 작성에 따라 TypedArray 인스턴스 생성 방법이 다릅니다.

### 파라미터에 엘리먼트 수를 작성한 형태

```js
const obj = new Int16Array(3);
console.log(obj); // {0: 0, 1: 0, 2: 0}
obj[5] = 500;
console.log(obj[5]); // undefined
```

    1. const obj = new Int16Array(3);
    3개의 엘리멘트를 가진 인스턴스를 생성합니다.

    2. console.log(obj);
    3개의 엘리먼트가 출력되며 엘리먼트의 초깃값은 0입니다.

    3. obj[5] = 500;
    만들지 않은 5번 인덱스에 500을 설정합니다.
    에러가 나지 않습니다.

    4. console.log(obj[5])
    만들지 않은 5번 인덱스 값을 출력합니다.
    에러가 나지 않으며 undefined가 출력됩니다.

## 파라미터에 복사할 TypedArray를 작성한 형태

| 구분     | 개요                |
| :------- | :------------------ |
| 파라미터 | TypedArray          |
| 반환     | 9개 타입의 인스턴스 |

TypedArray의 엘리먼트 값을 복사하여 반환하고

새로운 인스턴스에 설정하여 반환합니다.

```js
const obj = new Int16Array(3);
obj[0] = 100;
console.log(obj); // {0: 100, 1: 0, 2: 0}
const obj16 = new Int16Array(obj);
console.log(obj16); // {0: 100, 1: 0, 2: 0}
```

    1. const obj16 = new Int16Array(obj);
    파라미터에 obj를 작성했으며
    Int16 타입으로 생성하는 인스턴스와 타입이 같습니다.

    2. obj 인스턴스의 엘리먼트 값을 복사하여
    생성한 obj16 인스턴스의 앞에서부터 설정합니다.
    두 개 인스턴스의 값이 같습니다.

복사 받은 인스턴스의 바이트 수가 작으면 값이 잘립니다.

```js
const obj = new Int16Array(3);
obj[0] = 127;
obj[1] = 12345;
console.log(obj); // {0: 127, 1: 12345, 2: 0}
const obj8 = new Int8Array(obj);
console.log(obj8); // {0: 127, 1: 57, 2: 0}
```

    1. const obj8 = new Int8Array(obj);
    파라미터 obj는 int16 타입입니다.
    Int16 타입으로 Int8 타입의 인스턴스를 생성합니다.

    2. Int16 타입의 값을 Int8 타입으로 복사합니다.
    2바이트 값을 1바이트에 복사할 때
    값이 1바이트 범위가 아니면 값이 잘립니다.

    3. 127은 Int8 타입의 양수 최댓값으로 잘리지 않고 설정됩니다.

    4. 12345는 127보다 크므로 값이 잘립니다.
    비트 단위로 앞에서부터 잘리므로 값에 따라 복사되는 값이 다릅니다.

## 파라미터에 Array, Array-like를 작성한 형태

| 구분     | 개요                |
| :------- | :------------------ |
| 파라미터 | Array, Array-like   |
| 반환     | 9개 타입의 인스턴스 |

TypedArray는 바이너리 데이터를 사용하므로

TypedArray 생성자의 파라미터에는 Number 타입을 작성해야 하지만

Array, Array-like를 작성할 수 있습니다.

```js
const list = new Int8Array([12, 34]);
console.log(list); // {0: 12, 1: 34}
const like = new Int8Array({
  0: 56,
  1: 78,
  length: 2,
});
console.log(like); // {0: 56, 1: 78}
const obj = new Int8Array({ 0: 12, 1: 34 });
console.log(obj.length); // 0
```

    1. const list = new Int8Array([12, 34]);
    파라미터를 배열로 작성했습니다.
    {0: 12, 1: 34} 형태로 설정됩니다.

    2. new Int8Array({0: 56, 1: 78, length: 2});
    파라미터를 Array-like로 작성했습니다.
    {0: 56, 1: 78} 형태로 설정됩니다.

    3. const obj = new Int8Array({0: 12, 1: 34});
    파라미터를 Object로 작성했습니다.
    인스턴스가 생성되지만 값이 설정되지 않습니다.

### 문자열로 작성한 경우

```js
const obj = new Int8Array("7");
console.log(obj); // {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
const alpha = new Int8Array("ABC");
console.log(alpha); // {}
```

    1. const obj = new Int8Array("7");
    파라미터를 문자열로 작성했으며
    7개의 엘리먼트를 만듭니다.

    2. const alpha = new Int8Array("ABC");
    파라미터에 문자열 "ABC"를 작성했습니다.

    3. 에러가 발생하지 않고 인스턴스가 생성되지만
    엘리먼트가 생성되지 않습니다.

## 파라미터에 오프셋, 엘리먼트 수를 작성한 형태

| 구분     | 개요                              |
| :------- | :-------------------------------- |
| 파라미터 | ArrayBuffer 인스턴스              |
|          | (선택) byteOffset, offset 바이트  |
|          | (선택) length, 사용할 엘리먼트 수 |
| 반환     | 9개 타입의 인스턴스               |

파라미터

- 첫 번째에 ArrayBuffer 인스턴스 작성
- 두 번째에 offset을 바이트 수로 작성
- 세 번째에 사용할 엘리먼트 수 작성

```js
const buffer = new ArrayBuffer(10);
const obj = new Int16Array(buffer, 4);
console.log(obj.byteLength); // 6
console.log(obj.length); // 3
```

    1. const obj = new Int16Array(buffer, 4);
    두 번째 파라미터에 4를 작성했습니다.

    2. buffer의 처음부터 4바이트 떨어진(offset)
    위치부터 끝까지가 대상이 됩니다.
    6바이트(10 - 4)를 사용하게 되며
    Int16 타입으므로 3개의 엘리먼트가 설정됩니다.

    3. console.log(obj.byteLength);
    obj 인스턴스가 6 바이트이므로 6이 출력됩니다.

    4. console.log(obj.length);
    6을 2 바이트 단위로 저장하므로 3이 출력됩니다.

```js
const buffer = new ArrayBuffer(10);
const obj = new Int16Array(buffer, 4, 2);
console.log(obj.byteLength); // 4
console.log(obj.length); // 2
```

    1. const obj = new Int16Array(buffer, 4, 2);
    세 번째 파라미터에 2를 작성했습니다.

    2. buffer의 처음부터 4바이트 떨어진 위치부터
    두 개의 엘리먼트가 인스턴스 대상이 됩니다.
    Int16 타입으므로 4바이트를 사용하게 됩니다.
