# Float 타입, TypedArray 프로퍼티

## Float 타입

Float 타입은 12.34와 같은 실숫값을 View할 수 있습니다.

Float32 타입과 Float64 타입이 있으며 Float8, Float16 타입은 없습니다.

Float64 타입으로 살펴봅니다.

```js
const buffer = new ArrayBuffer(16);
const obj = new Float64Array(buffer);
obj[0] = Number.MAX_VALUE;
console.log(obj[0] == Number.MAX_VALUE); // true
```

    1. const buffer = new ArrayBuffer(16);
    16바이트 인스턴스를 생성합니다.

    2. const obj = new Floa64Array(buffer);
    buffer로 Float64 타입의 인스턴스를 생성합니다.
    buffer가 16바이트이고
    Float64 타입이 8바이트이므로
    2개의 엘리먼트를 사용할 수 있습니다.

    3. obj[0] = Number.MAX_VALUE;
    자바스크립트의 최댓값을 설정합니다.

    4. console.log(obj[0] == Number.MAX_VALUE);
    두 값의 비교 결과는 true입니다.

자바스크립트는 8바이트를 사용하기 때문에 MAX_VALUE로 설정이 가능합니다. 그래서 true가 설정된 것입니다.

Float32에 Number.MAX_VALUE를 설정하고 비교하면 false를 반환합니다.

즉, 바이트가 부족하여 짤렸다는 것입니다.

## TypedArray 프로퍼티

### BYTES_PER_ELEMENT

- TypedArray 인스턴스에서 엘리먼트 하나의 바이트 수를 반환합니다.

```js
const buffer = new ArrayBuffer(10);
const obj = new Int16Array(buffer);
console.log(obj.BYTES_PER_ELEMENT); // 2
```

    1. const obj = new Int16Array(buffer);
    Int16 타입의 인스턴스를 생성합니다.

    2. console.log(obj.BYTES_PER_ELEMENT);
    obj가 Int16 타입이므로 엘리멘트의 바이트 수는 2입니다.

### buffer

- TypedArray 인스턴스 생성에 사용한 ArrayBuffer 인스턴스를 반환합니다.

```js
const bufferObj = new ArrayBuffer(10);
const obj = new Int16Array(bufferObj);
const check = obj.buffer;
console.log(check.byteLength); // 10
```

    1. const check = obj.buffer;
    obj 인스턴스 생성에 사용한 ArrayBuffer 인스턴스가 반환됩니다.

    2. console.log(check.byteLength);
    byteLength는 ArrayBuffer 인스턴스의 바이트 수를 반환하며 10을 출력합니다.

### byteOffset

- ArrayBuffer의 오프셋 값을 반환합니다.

```js
const buffer = new ArrayBuffer(10);
const obj = new Int16Array(buffer, 4);
console.log(obj.byteOffset); // 4
```

    1. const obj = new Int16Array(buffer, 4);
    두 번째 파라미터에 4를 작성하였으며
    이것은 ArrayBuffer의 처음부터
    떨어진(offset) 바이트 수입니다.

    2. console.log(obj.byteOffset);
    두 번째 파라미터의 4가 출력됩니다.
