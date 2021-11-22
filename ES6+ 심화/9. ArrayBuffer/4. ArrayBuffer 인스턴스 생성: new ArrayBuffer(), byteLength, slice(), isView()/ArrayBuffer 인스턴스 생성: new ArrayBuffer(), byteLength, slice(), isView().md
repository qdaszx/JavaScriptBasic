# ArrayBuffer 인스턴스 생성

## new ArrayBuffer()

| 구분     | 개요                          |
| :------- | :---------------------------- |
| 파라미터 | length, ArrayBuffer 바이트 수 |
| 반환     | 생성한 ArrayBuffer 인스턴스   |

ArrayBuffer 인스턴스를 생성하여 반환합니다.

파라미터에 바이트 수를 작성합니다.

```js
const buffer10 = new ArrayBuffer(10);
const buffer0 = new ArrayBuffer();
const buffer12 = new ArrayBuffer("12");
```

    1. new ArrayBuffer(10);
    10 바이트의 ArrayBuffer 인스턴스를 생성합니다.

    2. new ArrayBuffer();
    파라미터에 값을 작성하지 않았습니다.
    에러가 발생하지 않으며 0을 디폴트 값으로 사용합니다.

    3. 생성한 인스턴스의 바이트 수를 변경할 수 없으므로
    특별한 경우가 아니면 의미 없는 인스턴스입니다.

    4. new ArrayBuffer("12");
    파라미터 값이 숫자이면 문자열로 작성할 수 있습니다.

### ArrayBuffer의 바이트 수 범위

스펙에서는 0 이상을 체크하며 최댓값은 정의하지 않았습니다.

크롬 52에서 3억은 사용 가능, 4억은 에러 발생

브라우저와 버전에 따라서 다릅니다.

## ArrayBuffer 인스턴스 구조

```js
"use strict";
debugger;

const buffer = ArrayBuffer;
/*
1. buffer에 isView(), Symbol(Symbol.species) 함수가 있으며
prototype이 있습니다.

2. isView()는 ArrayBuffer.isView() 형태로 호출합니다.

3. prototype에 slice(), Symbol(Symbol.toStringTag) 메소드가 있습니다.

4. 데이터를 저장하는 오브젝트이므로 구성이 심플합니다.
*/
debugger;

const obj = new ArrayBuffer(6);
/*
1. 6바이트의 ArrayBuffer 인스턴스를 생성합니다.

2. obj에 [[Int8Array]], [[Int16Array]], [[Uint8Array]]가 있으며 표시된 TypedArray 오브젝트를 생성할 수 있습니다.
*/
debugger;

/*
3. [[Int8Array]]를 펼치면 6개의 엘리먼트가 표시됩니다.
Int8Array는 1바이트 단위로 View를 하므로
6개의 엘리먼트를 View할 수 있습니다.

4. [[Int16Array]]를 펼치면 3개의 엘리먼트가 표시됩니다.
Int16Array는 2바이트 단위로 View를 하므로
3개의 엘리먼트를 View할 수 있습니다.

5. [[Int32Array]]가 표시되지 않은 것은
바이트 수 단위가 맞지 않기 때문입니다.
자세한 것은 다음 절에서 다룹니다.
*/
debugger;
```

## byteLength

ArrayBuffer의 바이트 수를 반환합니다.

```js
const buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); // 10
```

    1. 파라미터에 작성한 10을 반환합니다.

Proxy의 get() 트랩을 사용한 형태입니다.

ArrayBuffer는 바이트 수를 변경할 수 없으므로 set() 트랩이 없습니다.

```js
const buffer = new ArrayBuffer(10);
const handler = {
  get(target, key) {
    return [target[key]] + "바이트";
  },
};
const proxy = new Proxy(buffer, handler);
console.log(proxy.byteLength); // 10바이트
```

    1. const proxy = new Proxy(buffer, handler);
    buffer 인스턴스로 Proxy 인스턴스를 생성합니다.

    2. proxy.byteLength
    get() 트랩이 호출됩니다.

    3. 트랩: get(target, key){...}
    target에 buffer 인스턴스가 설정되며
    key에 "byteLength"가 설정됩니다.

    4. return target[key] + "바이트";
    buffer 인스턴스의 byteLength 값은 10입니다.

## slice()

| 구분     | 개요                               |
| :------- | :--------------------------------- |
| 파라미터 | begin, 시작 위치                   |
|          | end, 끝 위치                       |
| 반환     | 복사한 새로운 ArrayBuffer 인스턴스 |

### ArrayBuffer.prototype.slice()

ArrayBuffer의 데이터를 복사합니다.

새로 설정한 인스턴스에 설정하여 반환합니다.

파라미터

- 첫 번째에 복사 시작 인덱스
- 두 번째에 복사 끝 인덱스
- 시작 인덱스 포함, 끝 인덱스 미포함

```js
const buffer = new ArrayBuffer(10);
const objAll = buffer.slice(0);
console.log(objAll.byteLength); // 10

const obj37 = buffer.slice(3, 7);
console.log(obj37.byteLength); // 4
```

    1. const objAll = buffer.slice(0);
    시작 인덱스로 0을 작성했습니다.

    2. 끝 인덱스를 작성하지 않으면
    byteLength 값을 끝 인덱스로 사용합니다.
    즉, 전체를 복사하게 됩니다.

    3. objAA.byteLength
    10바이트를 복사했으므로 10이 출력됩니다.

    4. const obj37 = buffer.slice(3, 7);
    3번 인덱스부터 7번 인덱스 직전까지 복사합니다.

    5. obj37.byteLength
    4바이트를 복사했으므로 4가 출력됩니다.

## isView()

| 구분     | 개요             |
| :------- | :--------------- |
| 파라미터 | param, 체크 대상 |
| 반환     | 설명 참조        |

### ArrayBuffer.isView()

TypedArray 또는 DataView이면 true를, 아니면 false를 반환합니다.

파라미터에 체크 대상을 작성합니다.

```js
const buffer = new ArrayBuffer(10);
console.log(ArrayBuffer.isView(buffer)); // false

const int16 = new Int16Array(buffer);
console.log(ArrayBuffer.isView(int16)); // true

const view = new DataView(buffer);
console.log(ArrayBuffer.isView(view)); // false
```

    1. ArrayBuffer.isView(buffer);
    파라미터에 ArrayBuffer 인스턴스를 작성했으며
    TypedArray와 DataView 오브젝트가 아니므로
    false를 반환합니다.

    2. ArrayBuffer.isView(int16)
    파라미터에 TypedArray 인스턴스를 작성했으므로
    true를 반환합니다.

    3. ArrayBuffer.isView(view)
    파라미터에 DataView 인스턴스를 작성했으므로
    true를 반환합니다.
